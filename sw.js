const CACHE_NAME = 'rubencefit-v3.2';
const STATIC_ASSETS = ['./icon.png','./ch3ca-logo.png','./manifest.json','https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.2/Sortable.min.js'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(STATIC_ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  const isCode = /\.(js|css|html)$/.test(url.pathname) || event.request.mode === 'navigate';
  if (isCode) {
    event.respondWith(
      fetch(event.request).then(res => {
        caches.open(CACHE_NAME).then(c => c.put(event.request, res.clone()));
        return res;
      }).catch(() => caches.match(event.request))
    );
    return;
  }
  event.respondWith(caches.match(event.request).then(c => c || fetch(event.request)));
});
