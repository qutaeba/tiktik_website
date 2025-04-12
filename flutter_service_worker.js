'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5130641b8552104135cbc17686179743",
"version.json": "62480a9458a9bf4028dc0775c18b9161",
"index.html": "6bd5c9bfc24ae866d05b0073df805138",
"/": "6bd5c9bfc24ae866d05b0073df805138",
"main.dart.js": "5a19dc99589f23805ccb07613c8a7325",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e4ff3324cc1a99382bba0b8f94d1092f",
"assets/AssetManifest.json": "f818ee827a077fb973fab17816e8bb11",
"assets/NOTICES": "62bde9c64cb19fbe9ded28285a854778",
"assets/FontManifest.json": "ad78b76369a3e323019b1e539f6b6d1b",
"assets/AssetManifest.bin.json": "08158485f0d5ddd48f381f4494f01e08",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3c512a5547fa5e6e453458b0f69066a0",
"assets/fonts/MaterialIcons-Regular.otf": "1a26ddc77816ced879a5dd73cbdc1e48",
"assets/assets/images/chat2.png": "64511162d77518770edf8e3ef719de68",
"assets/assets/images/map_bg.jpg": "3bf3b9cd95707525fd44eefbc4e799b4",
"assets/assets/images/third_tiktik.png": "1bd5ab2833550f530fcf4863e0ef4eea",
"assets/assets/images/first_driver.png": "f9da7cbc66d3a5fb562326d891205982",
"assets/assets/images/taxi.png": "fd284599f86df739f78145495b6c792b",
"assets/assets/images/toktok.jpg": "109978f0ab8fcfae53c30851beb8dcc7",
"assets/assets/images/delivery_man.png": "5f6a276f4a465a0d2b1e2cec5cda128d",
"assets/assets/images/cart.png": "ef022801f3da4aff29b1be19a7480d83",
"assets/assets/images/second_taxi.png": "c3e1ef300d4af4c7339bd712b5791804",
"assets/assets/images/company_logo.png": "efb83a63449f395e72d4abd5efee6e0c",
"assets/assets/images/first_taxi.png": "c73ce25d81349f68285ef2ccffbf0ff2",
"assets/assets/images/whatsap_icon.png": "a59e768eebc730446e35f676487b8815",
"assets/assets/images/second_team.png": "35ca28be176bd0250265094d33c12925",
"assets/assets/images/first_team.png": "b4f74a6d8a8d5a87ca555cd109e9b0fb",
"assets/assets/images/managment.png": "5b6143ec22da60cf01bfa8048c4f727d",
"assets/assets/images/third_button.jpg": "670ec0d3b6aad5852efabbf47c25d87a",
"assets/assets/images/mobile_icon.png": "7f290ec3137d7dd6a53dd58e9a0ee89d",
"assets/assets/images/instagram_icon.png": "52b760457b2be89842588f066a0164bd",
"assets/assets/images/fourth_team.png": "ec3a418f75d17bcf5b37e19c6119842a",
"assets/assets/images/chat_icon.png": "1a0baabd6dabcd1892beb581be920ac8",
"assets/assets/images/business_logo.png": "7968d6ca04f9691d332eb16e7184a9e6",
"assets/assets/images/fourth_tiktik.png": "86ce34aac3c8fb73c4e4dd1f2551f116",
"assets/assets/images/cancel.png": "07c942245ebf0348566412772c30e45c",
"assets/assets/images/second_button.jpg": "2ac31c33e2a0f3a7a021f854b7e1ece9",
"assets/assets/images/third_team.png": "e9e56c137acd06892167d78343293079",
"assets/assets/images/user.png": "d21b25e512a781715a5420ddc2988222",
"assets/assets/images/motor.png": "1ed0988fb1b336703e10b92464c988ef",
"assets/assets/images/second_tiktik.png": "c9a56ae9f494279126361b182112fb8e",
"assets/assets/images/end.png": "c6fbc844eeb4befc6d5fb92c4c658c3b",
"assets/assets/images/play_icon.png": "e69ca4f56538fbcc820e4d0adcc54939",
"assets/assets/images/first_onboarding.jpg": "5ae2e297a4d337d8cd7e50589cd5a3c1",
"assets/assets/images/meesan.jpg": "9eb74676218cdd1773d5f65b0ed5d9f4",
"assets/assets/images/company.png": "fca5177861bed2cdc44855f1ea033d3a",
"assets/assets/images/first_button.jpg": "b00e287a91cb712b2fad4dff6de4731f",
"assets/assets/images/rocket.png": "6de3ab05519b9837a8cd97215450c02c",
"assets/assets/images/second.jpg": "7dba4402dcc2475ba4c293e895f818c9",
"assets/assets/images/privecy.png": "28d95c065f826a65b4b6aed363e748af",
"assets/assets/images/first_tiktik.png": "f3e8c04880ac7f87c549b2873740c3f9",
"assets/assets/images/call.png": "9b0a7828bfff4166cabff2a1b9285ae6",
"assets/assets/images/app_logo.png": "9a0ab6de42e1608f7c904976e833cbcc",
"assets/assets/images/second_driver.png": "a06e2b184d266edc495d966ee6473ca6",
"assets/assets/images/second_onboarding.jpg": "0fe3a8cfe35658478b002923d63b7ea2",
"assets/assets/images/third.jpg": "f437e3da2ef7df417b75b54cf3f8b351",
"assets/assets/images/chat.png": "3796cdeff62b1c8a0f4e00da4b0ffbc6",
"assets/assets/images/start.png": "e12e1c5e1ddcc3772ec883a1121a1657",
"assets/assets/images/first.jpg": "b16edd7eb54b808a8075e34979b1a831",
"assets/assets/lotties/loading.json": "f80b24566c1e40755fb6542b6481803a",
"assets/assets/lotties/location.json": "ab8acee642bed6071a3d37bcef21cac5",
"assets/assets/lotties/loading2.json": "9b7d2f64714a76dbdd3b98b40b6a2170",
"assets/assets/lotties/speed.json": "3038bd262bb9a93465107dd6a0d9ae71",
"assets/assets/fonts/ExpoArabic-Book.ttf": "fe9a0ad452cd1c07da91ff905ba0d191",
"assets/assets/fonts/ArefRuqaa-Regular.ttf": "bc2d83338c0de499ffae3c553a11156f",
"assets/assets/fonts/Tajawal-Bold.ttf": "76f83be859d749342ba420e1bb010d6a",
"assets/assets/fonts/Tajawal-Regular.ttf": "e3fe295c55a0cb720f766bccc5eecf63",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
