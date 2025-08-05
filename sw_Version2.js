const CACHE_NAME = 'samassa-cache-v2';
const assets = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/logo.png',
  '/manifest.json'
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(assets))
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(
      response => response || fetch(event.request)
    )
  );
});