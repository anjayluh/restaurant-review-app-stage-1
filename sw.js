// Files to add to cache
let filesToAdd = [
        '/css',
        '/data',
        '/img',
        '/js',
        'index.html',
        'restaurant.html'
    ]
    //Listen for install event
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('restaurnt-review-v1').then(function(cache) {
            cache.addAll(filesToAdd)
        })
    )
});

//Listen for an event
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            if (response) {
                return response;
            } else {
                return fetch(event.request);
            }
        })
        .catch(function(error) {
            console.log("Error matching request for service worker");
        })
    )
})