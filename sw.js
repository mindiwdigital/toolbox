const CACHE_NAME = 'mindiw-toolbox-v13-scanner-upgrade';
const APP_SHELL = ['./', './index.html', './manifest.webmanifest', './qr-engine.js', './opencv.js', './icon.svg', './logo.png', './icon-180.png', './icon-192.png', './icon-512.png', './robots.txt', './sitemap.xml', './scan-documents.html', './photos-to-pdf.html', './pdf-editor.html', './image-tools.html', './qr-code-generator.html'];
self.addEventListener('install', event => {
  // Cache the new version first, then wait. The page asks us to take over with a
  // SKIP_WAITING message so an installed app can update without being reinstalled.
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
});
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
    if (response && response.ok) caches.open(CACHE_NAME).then(cache => cache.put(request, response.clone()));
    return response;
  }).catch(() => caches.match('./index.html'))));
});
