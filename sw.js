// Service Worker for Wesnoth Timeline PWA
const CACHE_NAME = 'wesnoth-timeline-v1.3.0';
const SYNC_CACHE_NAME = 'wesnoth-timeline-sync-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles/timeline-manager.css',
    '/scripts/timeline-data.js',
    '/scripts/icons-manager.js',
    '/scripts/translation-manager.js',
    '/scripts/timeline-manager.js',
    '/scripts/initialize.js',
    '/scripts/lang/en.js',
    '/scripts/lang/fr.js',
    '/scripts/lang/it.js',
    '/scripts/lang/ar.js',
    '/assets/icons/style-icons/tree.png',
    '/assets/icons/style-icons/skull.png',
    '/assets/icons/style-icons/ship.png',
    '/assets/icons/style-icons/crown.png',
    '/assets/icons/style-icons/users.png',
    '/assets/icons/style-icons/flag.png',
    '/assets/icons/style-icons/helmet-battle.png',
    '/assets/icons/style-icons/wind.png',
    '/assets/icons/style-icons/shield-alt.png',
    '/assets/icons/style-icons/monument.png',
    '/assets/icons/pwa-icons/icon-72x72.png',
    '/assets/icons/pwa-icons/icon-96x96.png',
    '/assets/icons/pwa-icons/icon-128x128.png',
    '/assets/icons/pwa-icons/icon-144x144.png',
    '/assets/icons/pwa-icons/icon-152x152.png',
    '/assets/icons/pwa-icons/icon-192x192.png',
    '/assets/icons/pwa-icons/icon-384x384.png',
    '/assets/icons/pwa-icons/icon-512x512.png'
];

// Install event
self.addEventListener('install', event => {
    console.log('Service Worker installing...');
    self.skipWaiting(); // Activate immediately
    
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('Opened cache');
            return cache.addAll(urlsToCache.map(url => new Request(url, {cache: 'reload'})));
        })
        .catch(error => {
            console.log('Cache addAll failed:', error);
        })
    );
});

// Activate event
self.addEventListener('activate', event => {
    console.log('Service Worker activating...');
    event.waitUntil(
        Promise.all([
            // Clean up old caches
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== CACHE_NAME && cacheName !== SYNC_CACHE_NAME) {
                            console.log('Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            }),
            // Claim clients immediately
            self.clients.claim()
        ])
    );
});

// Enhanced Fetch event with Cache First then Network strategy
self.addEventListener('fetch', event => {
    // Skip non-GET requests and chrome-extension requests
    if (event.request.method !== 'GET' || event.request.url.startsWith('chrome-extension://')) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
        .then(response => {
            // Cache First strategy
            if (response) {
                // Return cached version but update cache in background
                const fetchPromise = fetch(event.request)
                    .then(networkResponse => {
                        // Update cache with fresh response
                        if (networkResponse.ok) {
                            caches.open(CACHE_NAME)
                                .then(cache => cache.put(event.request, networkResponse));
                        }
                        return networkResponse;
                    })
                    .catch(() => {
                        // Network failed, but we have cached version
                        console.log('Network failed, using cached version for:', event.request.url);
                    });
                
                return response;
            }

            // Not in cache, try network
            return fetch(event.request)
                .then(networkResponse => {
                    // Cache the new response
                    if (networkResponse.ok) {
                        const responseClone = networkResponse.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => cache.put(event.request, responseClone));
                    }
                    return networkResponse;
                })
                .catch(error => {
                    console.log('Both cache and network failed for:', event.request.url, error);
                    // For HTML requests, return offline page
                    if (event.request.destination === 'document') {
                        return caches.match('/index.html');
                    }
                    // For other requests, return a fallback
                    return new Response('Network error happened', {
                        status: 408,
                        headers: { 'Content-Type': 'text/plain' }
                    });
                });
        })
    );
});

// Background Sync event
self.addEventListener('sync', event => {
    console.log('Background Sync triggered:', event.tag);
    
    if (event.tag === 'background-sync-timeline') {
        event.waitUntil(
            syncTimelineData()
        );
    }
});

// Periodic Sync event
self.addEventListener('periodicsync', event => {
    console.log('Periodic Sync triggered:', event.tag);
    
    if (event.tag === 'periodic-sync-timeline') {
        event.waitUntil(
            syncTimelineData()
        );
    }
});

// Sync timeline data function
async function syncTimelineData() {
    try {
        console.log('Starting background sync of timeline data...');
        
        // Open sync cache
        const syncCache = await caches.open(SYNC_CACHE_NAME);
        
        // List of data files that might need updating
        const dataFiles = [
            '/scripts/timeline-data.js',
            '/scripts/lang/en.js',
            '/scripts/lang/fr.js',
            '/scripts/lang/it.js',
            '/scripts/lang/ar.js'
        ];
        
        // Check each file for updates
        for (const fileUrl of dataFiles) {
            try {
                const networkResponse = await fetch(fileUrl);
                
                if (networkResponse.ok) {
                    const cachedResponse = await syncCache.match(fileUrl);
                    
                    // Check if content changed by comparing ETag or Last-Modified
                    if (!cachedResponse || 
                        networkResponse.headers.get('etag') !== cachedResponse.headers.get('etag') ||
                        networkResponse.headers.get('last-modified') !== cachedResponse.headers.get('last-modified')) {
                        
                        console.log('Updating cached file:', fileUrl);
                        
                        // Update sync cache
                        await syncCache.put(fileUrl, networkResponse.clone());
                        
                        // Also update main cache
                        const mainCache = await caches.open(CACHE_NAME);
                        await mainCache.put(fileUrl, networkResponse.clone());
                        
                        // Notify clients about update
                        const clients = await self.clients.matchAll();
                        clients.forEach(client => {
                            client.postMessage({
                                type: 'DATA_UPDATED',
                                file: fileUrl,
                                timestamp: new Date().toISOString()
                            });
                        });
                    }
                }
            } catch (error) {
                console.log('Failed to sync file:', fileUrl, error);
            }
        }
        
        console.log('Background sync completed');
        
    } catch (error) {
        console.log('Background sync failed:', error);
    }
}

// Message event handler for client communication
self.addEventListener('message', event => {
    console.log('Service Worker received message:', event.data);
    
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'TRIGGER_SYNC') {
        event.waitUntil(
            syncTimelineData().then(() => {
                // Notify client that sync completed
                event.ports[0].postMessage({ success: true });
            }).catch(error => {
                event.ports[0].postMessage({ success: false, error: error.message });
            })
        );
    }
});