const CACHE_NAME = 'find-a-pair-cache-v1';

const URLS = [
  '/index.html',
];

this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(URLS);
      })
      .catch(err => {
        console.log(err);
        throw err;
      }),
  );
});

self.addEventListener('activate', function (event) {
  const cacheKeeplist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(cacheNames.map((key) => {
        if (cacheKeeplist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    }));
});

this.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }

        const fetchRequest = event.request.clone();
        return fetch(fetchRequest)
          .then(response => {
            if(!response
              || response.status !== 200
              || response.type !== 'basic'
              || event.request.url.startsWith('http')
              || event.request.url.startsWith('chrome-extension')) {
              return response;
            }

              const responseToCache = response.clone();
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
              return response;
            }
          );
      })
  );
});
