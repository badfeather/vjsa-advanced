let coreAssets = [
	'offline.html',
	'place.js',
	'home.js',
	'style.css',
];

// Listen for the install event
self.addEventListener('install', function (event) {

	// Activate immediately
	self.skipWaiting();

	// Cache the offline.html page
	event.waitUntil(caches.open('app').then(function (cache) {
		for (let asset of coreAssets) {
			cache.add(new Request(asset));
		}
		return cache;
	}));

});

// Listen for request events
self.addEventListener('fetch', function (event) {

	// Get the request
	let request = event.request;

	// Bug fix
	// https://stackoverflow.com/a/49719964
	if (request.cache === 'only-if-cached' && request.mode !== 'same-origin') return;

	// HTML files
	// Network-first
	if (request.headers.get('Accept').includes('text/html')) {
		event.respondWith(
			fetch(request).then(function (response) {
				return response;
			}).catch(function (error) {
				return caches.match(request).then(function (response) {
					return response;
				});
			})
		);
	}

	// Images & Fonts
	// Offline-first
	if (request.headers.get('Accept').includes('image') || request.headers.get('Accept').includes('text/css') || request.headers.get('Accept').includes('text/javascript') || request.url.includes('noto-serif')) {
		event.respondWith(
			caches.match(request).then(function (response) {
				return response || fetch(request).then(function (response) {
					return response;
				});
			})
		);
	}
});
