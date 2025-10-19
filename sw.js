// Service Worker for Wesnoth Timeline PWA
const CACHE_NAME = 'wesnoth-timeline-v1.2.2';
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
    // REMOVE screenshot entries - they're not needed for PWA functionality
];

// Install event
self.addEventListener('install', event => {
    console.log('Service Worker installing...');
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('Opened cache');
            // Use a more robust caching strategy
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
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames.map(cacheName => {
					if (cacheName !== CACHE_NAME) {
						console.log('Deleting old cache:', cacheName);
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});

// Fetch event
self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			// Return cached version or fetch from network
			return response || fetch(event.request);
		})
		.catch(() => {
			// Fallback for failed requests
			if (event.request.destination === 'document') {
				return caches.match('/index.html');
			}
		})
	);
});