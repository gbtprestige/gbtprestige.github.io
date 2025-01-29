// service-worker.js
const CACHE_NAME = 'xcryptocap-cache-v1';
const urlsToCache = [
  '/', // Mettez à jour avec les pages importantes de votre application
  '/token-listing.html',
  '/admin.html', 
  // ... autres pages
  '/styles.css', // Mettez à jour avec les fichiers CSS et images 
  '/logo.png', 
  // ... autres fichiers
  'https://api.tokeninsight.com/api/v1/token/price?symbol=STRB&apikey=Pro006549' // Mettez à jour avec les URL des API
  // ... autres URL d'API
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response; 
        }
        return fetch(event.request)
          .then((response) => {
            if (!response.ok) {
              return; 
            }
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
            return response; 
          });
      })
  );
});
