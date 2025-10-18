// Service Worker for Wesnoth Timeline PWA
const CACHE_NAME = 'wesnoth-timeline-v1.2.0';
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
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  // Add your icon assets
  '/assets/icons/style-icons/tree.png',
  '/assets/icons/style-icons/skull.png',
  '/assets/icons/style-icons/ship.png',
  '/assets/icons/style-icons/crown.png',
  '/assets/icons/style-icons/users.png',
  '/assets/icons/style-icons/flag.png',
  '/assets/icons/style-icons/helmet-battle.png',
  '/assets/icons/style-icons/wind.png',
  '/assets/icons/style-icons/shield-alt.png',
  '/assets/icons/style-icons/monument.png'
];

// Install event
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
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