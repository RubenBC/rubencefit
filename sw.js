const CACHE_NAME = 'ironlog-v41';

// Solo cacheamos recursos estáticos que no cambian
const STATIC_ASSETS = [
  './icon.png',
  './ch3ca-logo.png',
  './manifest.json'
];

// Archivos de código — siempre red primero
const CODE_ASSETS = [
  './js/app.js',
  './css/styles.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  const isCodeFile = CODE_ASSETS.some(a => url.pathname.endsWith(a.replace('./', '/')));

  if (event.request.mode === 'navigate' || isCodeFile) {
    // Network first: siempre intenta la red, cachea el resultado
    event.respondWith(
      fetch(event.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
          return res;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Cache first para imágenes y recursos estáticos
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
