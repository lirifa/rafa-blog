/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "108x108.png",
    "revision": "c0550955c1dff2988ca061a1f01591b6"
  },
  {
    "url": "404.html",
    "revision": "a6177107f8870d8a940edfbebe973298"
  },
  {
    "url": "assets/css/0.styles.e33afc1b.css",
    "revision": "96f67cc3a5d22e48c7cf764a4fa57ad2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2387080e.js",
    "revision": "cb9a4acae103ebcf1e4d799534fe7f2f"
  },
  {
    "url": "assets/js/11.d0e152b7.js",
    "revision": "43a9e2fabf9be3ca3691e52ce64ccdc1"
  },
  {
    "url": "assets/js/12.07340958.js",
    "revision": "234d679bf56f4b4eaad895bfef0f5219"
  },
  {
    "url": "assets/js/13.d04196ec.js",
    "revision": "8b1e88fcd1a44c7060deebd50a8d8e77"
  },
  {
    "url": "assets/js/14.325a70cf.js",
    "revision": "71aed1e4ce22d17cd6a318f122352987"
  },
  {
    "url": "assets/js/2.6ff98e9d.js",
    "revision": "a7652009d2f1d568829e29f732f6ead8"
  },
  {
    "url": "assets/js/3.efb702e6.js",
    "revision": "52eff687d64476c6145e3ebce049cc95"
  },
  {
    "url": "assets/js/4.ee1fd7ef.js",
    "revision": "301566df52ccc293e1e4d1ce481af0f5"
  },
  {
    "url": "assets/js/5.dfe16e16.js",
    "revision": "005e672ac2658a7ac87f494efb2281ff"
  },
  {
    "url": "assets/js/6.02bf0bec.js",
    "revision": "2591f8620fc0d254043a04eee6a763b1"
  },
  {
    "url": "assets/js/7.5b28edd4.js",
    "revision": "42e2296b019f1f2ed8574401b462225c"
  },
  {
    "url": "assets/js/8.d0441a30.js",
    "revision": "ab06f4b583d0b0aeada5722f4cc92a28"
  },
  {
    "url": "assets/js/9.b3ed7b5d.js",
    "revision": "634e98981b7521184b9f435a0ee48f31"
  },
  {
    "url": "assets/js/app.03dece12.js",
    "revision": "287ce4fc2b6787d02c06c44ed3951d13"
  },
  {
    "url": "home.jpg",
    "revision": "26a2b32bfa92a7f40b3fa3aa77295992"
  },
  {
    "url": "index.html",
    "revision": "8189fd1590f7022756cf2d34dd761ef0"
  },
  {
    "url": "node/index.html",
    "revision": "9cf9df3e3906dacdfa6993ac325a0606"
  },
  {
    "url": "python/index.html",
    "revision": "b31619051d5b38ca05dff37bd2582a90"
  },
  {
    "url": "web/css/index.html",
    "revision": "217d0445a00a752a2b1693c8094bde3a"
  },
  {
    "url": "web/js/index.html",
    "revision": "4a205f7554b48b906607b4a2fdae339a"
  },
  {
    "url": "web/vue/index.html",
    "revision": "f9d3de7570023b7296a5243faf295057"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
