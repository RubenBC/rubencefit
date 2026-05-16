const CACHE_NAME = 'ironlog-v30';
const ASSETS = [
  './manifest.json',
  './icon.png',
  './css/styles.css',
  './js/app.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // HTML siempre desde red (nunca cacheado)
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request));
    return;
  }
  // Resto: cache primero, red como fallback
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
