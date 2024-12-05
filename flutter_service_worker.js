'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8a66521959785ff437846b809fd3b8c3",
"assets/AssetManifest.bin.json": "d0e49551dc5d455636aa501221e6413d",
"assets/AssetManifest.json": "f8b349d8929c6ff8376a754109f81ab1",
"assets/assets/fonts/ArefRuqaa-Regular.ttf": "bc2d83338c0de499ffae3c553a11156f",
"assets/assets/fonts/ExpoArabic-Book.ttf": "fe9a0ad452cd1c07da91ff905ba0d191",
"assets/assets/fonts/Tajawal-Bold.ttf": "76f83be859d749342ba420e1bb010d6a",
"assets/assets/fonts/Tajawal-Regular.ttf": "e3fe295c55a0cb720f766bccc5eecf63",
"assets/assets/images/business_logo.png": "7968d6ca04f9691d332eb16e7184a9e6",
"assets/assets/images/call.png": "9b0a7828bfff4166cabff2a1b9285ae6",
"assets/assets/images/cancel.png": "07c942245ebf0348566412772c30e45c",
"assets/assets/images/cart.png": "ef022801f3da4aff29b1be19a7480d83",
"assets/assets/images/chat.png": "3796cdeff62b1c8a0f4e00da4b0ffbc6",
"assets/assets/images/chat2.png": "64511162d77518770edf8e3ef719de68",
"assets/assets/images/chat_icon.png": "1a0baabd6dabcd1892beb581be920ac8",
"assets/assets/images/company.png": "fca5177861bed2cdc44855f1ea033d3a",
"assets/assets/images/company_logo.png": "efb83a63449f395e72d4abd5efee6e0c",
"assets/assets/images/delivery_man.png": "5f6a276f4a465a0d2b1e2cec5cda128d",
"assets/assets/images/end.png": "c6fbc844eeb4befc6d5fb92c4c658c3b",
"assets/assets/images/first.jpg": "b16edd7eb54b808a8075e34979b1a831",
"assets/assets/images/first_driver.png": "f9da7cbc66d3a5fb562326d891205982",
"assets/assets/images/first_onboarding.jpg": "5ae2e297a4d337d8cd7e50589cd5a3c1",
"assets/assets/images/first_team.png": "b4f74a6d8a8d5a87ca555cd109e9b0fb",
"assets/assets/images/first_tiktik.png": "f3e8c04880ac7f87c549b2873740c3f9",
"assets/assets/images/fourth_team.png": "ec3a418f75d17bcf5b37e19c6119842a",
"assets/assets/images/fourth_tiktik.png": "86ce34aac3c8fb73c4e4dd1f2551f116",
"assets/assets/images/instagram_icon.png": "52b760457b2be89842588f066a0164bd",
"assets/assets/images/managment.png": "5b6143ec22da60cf01bfa8048c4f727d",
"assets/assets/images/mobile_icon.png": "7f290ec3137d7dd6a53dd58e9a0ee89d",
"assets/assets/images/play_icon.png": "e69ca4f56538fbcc820e4d0adcc54939",
"assets/assets/images/privecy.png": "28d95c065f826a65b4b6aed363e748af",
"assets/assets/images/rocket.png": "6de3ab05519b9837a8cd97215450c02c",
"assets/assets/images/second.jpg": "7dba4402dcc2475ba4c293e895f818c9",
"assets/assets/images/second_driver.png": "a06e2b184d266edc495d966ee6473ca6",
"assets/assets/images/second_onboarding.jpg": "0fe3a8cfe35658478b002923d63b7ea2",
"assets/assets/images/second_team.png": "35ca28be176bd0250265094d33c12925",
"assets/assets/images/second_tiktik.png": "c9a56ae9f494279126361b182112fb8e",
"assets/assets/images/start.png": "e12e1c5e1ddcc3772ec883a1121a1657",
"assets/assets/images/taxi.png": "fd284599f86df739f78145495b6c792b",
"assets/assets/images/third.jpg": "f437e3da2ef7df417b75b54cf3f8b351",
"assets/assets/images/third_team.png": "e9e56c137acd06892167d78343293079",
"assets/assets/images/third_tiktik.png": "1bd5ab2833550f530fcf4863e0ef4eea",
"assets/assets/images/user.png": "d21b25e512a781715a5420ddc2988222",
"assets/assets/images/whatsap_icon.png": "a59e768eebc730446e35f676487b8815",
"assets/assets/lotties/loading.json": "f80b24566c1e40755fb6542b6481803a",
"assets/assets/lotties/loading2.json": "9b7d2f64714a76dbdd3b98b40b6a2170",
"assets/assets/lotties/location.json": "ab8acee642bed6071a3d37bcef21cac5",
"assets/assets/lotties/speed.json": "3038bd262bb9a93465107dd6a0d9ae71",
"assets/FontManifest.json": "ad78b76369a3e323019b1e539f6b6d1b",
"assets/fonts/MaterialIcons-Regular.otf": "919a59cc0a6df88b031349bcef461c8f",
"assets/NOTICES": "4d77cf53ec68e038adf5c85964fe14f4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "34686ea457cb2ee7bf3f38e42a03b509",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2ad026e609efc2f5a3ef18265ffb71d3",
"/": "2ad026e609efc2f5a3ef18265ffb71d3",
"main.dart.js": "d4ad74604f0040ff9772851d58e33d80",
"manifest.json": "e45cd8515f95726186f6b0c051077568",
"version.json": "62480a9458a9bf4028dc0775c18b9161"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
