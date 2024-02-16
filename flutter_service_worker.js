'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ebf8fcf818bbcb3a6206c11fde3d1185",
"assets/AssetManifest.bin.json": "d7e0e5daae8ce5fcd9585368bb24f485",
"assets/AssetManifest.json": "dfaa2f37013c6814d6db6f33d5562b3a",
"assets/assets/fonts/Urbanist-Bold.ttf": "1ffe51e22e7841c65481a727515e2198",
"assets/assets/fonts/Urbanist-Italic.ttf": "213b2ebe4092125001fa5d9f686ac1a0",
"assets/assets/fonts/Urbanist-Light.ttf": "46ffc15bcd0fb7da54fc241cb43ece28",
"assets/assets/fonts/Urbanist-Medium.ttf": "9ffbd4b23b829ddd499aaf5eb925a86c",
"assets/assets/fonts/Urbanist-MediumItalic.ttf": "1497d007b844b9b86a871ff242929d51",
"assets/assets/fonts/Urbanist-Regular.ttf": "4c1ae1074c39cca3b3fd7a788b5afd96",
"assets/assets/fonts/Urbanist-SemiBold.ttf": "ae731014b8aa4267df78b8e854d006ef",
"assets/assets/images/Ministry_of_Investment_Logo.png": "2f4ff3b0473c7592e96ba331749cbb7d",
"assets/assets/images/misalogo.jpg": "40c90c5d44c62b26e5570785feb03a4b",
"assets/assets/images/no_data.svg": "6e012aaca59a9b12d6c2aa2f24d6bce3",
"assets/assets/images/user1.jpg": "602df863087ba5f58971ef6be9ef8183",
"assets/assets/images/user2.png": "e5e186b7496c765a1a21a130793c8a5b",
"assets/assets/images/usermanager1.jpg": "31899ac57f01a5bb633cb54f41f46f68",
"assets/assets/images/usermanager2.png": "afcd4e6c322715e59ec180f146ea5047",
"assets/assets/images/usermanager3.png": "2be341ceaf2178d8f08f681cd786bf5e",
"assets/assets/images/usermanager4.png": "667d8c33973cf5abf52ea84d75077159",
"assets/FontManifest.json": "c36af816dc08f98ac421ad54e9173a2e",
"assets/fonts/MaterialIcons-Regular.otf": "06a5f25c06433ab0a8f313d9a482fcac",
"assets/NOTICES": "1a49eeb8d275af015c10393ba1f399aa",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "004a7486bcbf64b8a186bb8a7a078e3f",
"favicon1.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/android-chrome-96x96.png": "ae29a28201d863a5700e0e65ac2e7fd9",
"icons/android-icon-144x144.png": "ce383b633a73615dba392d8c63ca56b8",
"icons/android-icon-192x192.png": "8c5cb6fb82703ada9b70d7c235de45c7",
"icons/android-icon-36x36.png": "6167cdba3cefd10de831ee26b9c9fc0b",
"icons/android-icon-48x48.png": "0917baad31327381001f424aef2fa665",
"icons/android-icon-72x72.png": "1de48a11bbc40895d9db83c1b4efb64a",
"icons/android-icon-96x96.png": "1aa544560396e7498dfbf3d7ce3a0047",
"icons/apple-icon-114x114.png": "d45fa2df75c1dbca9636dde945d012fa",
"icons/apple-icon-120x120.png": "fedfc7a64e32362255a20274a5d3b858",
"icons/apple-icon-144x144.png": "ce383b633a73615dba392d8c63ca56b8",
"icons/apple-icon-152x152.png": "5a8169d056ba2e53c10b16fb3de22e7d",
"icons/apple-icon-180x180.png": "0e0d415ac6376a1ff9d1aaf39122b065",
"icons/apple-icon-57x57.png": "80773d30d40d6c0e11afe4210813794d",
"icons/apple-icon-60x60.png": "dff8c3b333d4f86fc5d6497c3d695b52",
"icons/apple-icon-72x72.png": "1de48a11bbc40895d9db83c1b4efb64a",
"icons/apple-icon-76x76.png": "87402a8c38a99b68090558bf0a59ae75",
"icons/apple-icon-precomposed.png": "5a9aabe259ea9bd672464d50bec9b931",
"icons/apple-icon.png": "5a9aabe259ea9bd672464d50bec9b931",
"icons/apple-touch-icon.png": "c956b6f1f6fafd1b093acae09ff9c11f",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "778df10b27e212199526303a384e2672",
"icons/favicon-32x32.png": "77f755a0f0c6191cbb0fe81bca8dc04d",
"icons/favicon-96x96.png": "1aa544560396e7498dfbf3d7ce3a0047",
"icons/favicon.ico": "9b69dbf65b3f14c203e8d206a7d1bea4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "ce383b633a73615dba392d8c63ca56b8",
"icons/ms-icon-150x150.png": "ef2c24739e84c22a433643c0a711d483",
"icons/ms-icon-310x310.png": "acbef2969a1d7603637cd4cc4ff814a0",
"icons/ms-icon-70x70.png": "c2be0e478930a3b9aeb5b3a24847c1ed",
"icons/mstile-150x150.png": "f8fed918dd67b7ebae63cbbfa9321ee8",
"index.html": "5e536e17162a3bf5c03343d3277d9a7e",
"/": "5e536e17162a3bf5c03343d3277d9a7e",
"main.dart.js": "d766527e23758739c7748eec05fcb076",
"manifest.json": "1c1d5a16006780ff9685a85ec39a4b54",
"version.json": "941380360773d7127af0b17995a184a7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
