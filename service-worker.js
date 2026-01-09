// Registering the service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('kiosk-cache').then((cache) => {
      return cache.addAll([
        'index.html',
        'manifest.json',
        'assets/icon.png',
        'assets/gmail.png',
        'assets/commonapp.png',
        'assets/yahoo.png',
        'assets/collegeboard.png',
        'assets/icloud.png',
        // Add other assets as needed
      ]);
    })
  );
});

// Fetching from the cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached response or fetch from network
      return response || fetch(event.request);
    })
  );
});
