const CACHE_NAME = "chemoid-v2.0";
const urlsToCache = [
  "/Chemoid2.0/",
  "/Chemoid2.0/index.html",
  "/Chemoid2.0/icon.png",
  "/Chemoid2.0/icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
