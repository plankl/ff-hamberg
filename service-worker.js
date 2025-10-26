// Service Worker für Hydrantenkarte
// Build: 26.10.2025

const CACHE_NAME = 'hydrantenkarte-v26102025';
const urlsToCache = [
  'index.html',
  'manifest.json',
  'data.geojson',
  'icons/red-dot.png',
  'icons/blue-dot.png',
  'icons/green-dot.png',
  'icons/yellow-dot.png',
  'icons/feuerwehr-helm.png',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

// Install Event
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching app shell');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('[Service Worker] Cache error:', error);
      })
  );
  self.skipWaiting();
});

// Activate Event
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Fetch Event - Network First, fallback to Cache
self.addEventListener('fetch', event => {
  const { request } = event;
  
  // Für Kartenkacheln: Cache First
  if (request.url.includes('tile.openstreetmap.org') || 
      request.url.includes('arcgisonline.com')) {
    event.respondWith(
      caches.match(request).then(response => {
        return response || fetch(request).then(fetchResponse => {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(request, fetchResponse.clone());
            return fetchResponse;
          });
        });
      })
    );
    return;
  }
  
  // Für alle anderen: Network First
  event.respondWith(
    fetch(request)
      .then(response => {
        const responseToCache = response.clone();
        
        caches.open(CACHE_NAME).then(cache => {
          cache.put(request, responseToCache);
        });
        
        return response;
      })
      .catch(() => {
        return caches.match(request).then(response => {
          if (response) {
            return response;
          }
          
          if (request.destination === 'document') {
            return caches.match('index.html');
          }
        });
      })
  );
});
