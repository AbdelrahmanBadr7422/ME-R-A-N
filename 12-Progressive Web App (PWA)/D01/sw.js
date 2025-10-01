const staticDB = "static";
const filesToCache = [
  "/index.html",
  "/css/style.css",
  "/pages/anotherpage.html",
  "/pages/offline.html",
  "/pages/not_found.html",
  "/js/main.js",
];
const skipCache = "/pages/notcached.html";

self.addEventListener("install", (event) => {
  console.log("installing is working", event);
  event.waitUntil(
    caches.open(staticDB).then(async (cache) => {
      try {
        for (const file of filesToCache) {
          await cache.add(file);
        }
      } catch (err) {
        console.log(`Error while installing: ${err}`);
      }
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("service worker activating....");
});

self.addEventListener("fetch", (event) => {
  const url = event.request.url;
  if (!url.startsWith("http")) {
    return;
  }
  if (event.request.url.includes(skipCache)) {
    return;
  }
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request)
        .then((networkResponse) => {
          if (!networkResponse || networkResponse.status === 404) {
            return caches.match("/pages/not_found.html");
          }
          const responseClone = networkResponse.clone();
          caches.open(staticDB).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return networkResponse;
        })
        .catch(() => {
          return caches.match("/pages/offline.html");
        });
    })
  );
});
