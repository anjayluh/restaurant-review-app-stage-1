// Files to add to cache
let filesToAdd = [
        '/css/responsive.css',
        '/css/style.css',
        '/data.restaurant.json',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
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