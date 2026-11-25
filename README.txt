MINDIW TOOLBOX — DESKTOP + MOBILE UPDATE

DEPLOYMENT
1. Extract this ZIP.
2. Upload index.html, qr-engine.js, QR-LICENSE.txt, manifest.webmanifest, sw.js, logo.png, icon.svg, icon-180.png, icon-192.png and icon-512.png to the SAME GitHub Pages root.
3. Publish GitHub Pages over HTTPS.
4. Open the HTTPS website on desktop, laptop, tablet or mobile and reload once. If an old PWA version is cached, close and reopen it so the new service worker can activate.
5. For camera scanning, allow camera permission in the browser. On desktop/laptop the scanner uses the available webcam; on phones it prefers the rear camera.

WHAT CHANGED
- Removed the mobile-only access gate. The app is now available in desktop, laptop, tablet and mobile browsers.
- Added a responsive wide desktop workspace while keeping a compact mobile interface.
- Rebuilt QR generation using a locally bundled UTF-8 QR engine (no QR CDN dependency), URL normalization, invalid URL errors, high-resolution PNG downloads and copy-content support.
- Changed scanner output to colour-enhanced pages by default. Black-and-white is an optional filter instead of the default export source.
- Scanner now attempts to load the perspective detection engine when needed and gracefully falls back to colour enhancement when it cannot load.
- After capturing a photo, the app opens the selected page in a CamScanner-style single-page editor with a page strip and bottom editing toolbar.
- Added desktop webcam support, camera permission guidance and robust camera startup handling.
- Increased scan/export resolution and default PDF image quality.
- Corrected PWA icon paths to match the files actually included in this package.
- Updated the service worker cache version to v6 so browsers fetch the new app files.

IMPORTANT NOTES
- Camera access requires HTTPS (or localhost), a compatible browser and user permission.
- QR generation works offline because its engine is bundled locally. PDF and advanced perspective-scanning libraries are still loaded from public CDNs when needed; an internet connection is required for first-time loading of those engines.
- This is a client-side browser app. Do not store private API keys or secrets in its source files.
- Local library files are stored in the current browser/device and do not automatically sync between devices.
