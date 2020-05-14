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
    "url": "about/index.html",
    "revision": "a8df8aa07e8d766e4ccffea4fb91ca6d"
  },
  {
    "url": "assets/css/0.styles.5fbc3680.css",
    "revision": "a45991a6c97c4cbb0046b4a58c4e0b49"
  },
  {
    "url": "assets/img/logo.jpg",
    "revision": "f03d877ac8eecc97a98ee09b6a230fc7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.25e59fab.js",
    "revision": "a565e6725ce8f97e8e946fe72d5c01ae"
  },
  {
    "url": "assets/js/11.a3e2feb1.js",
    "revision": "70a20b66c3779e2748b25aac5bd7945d"
  },
  {
    "url": "assets/js/12.3a064f17.js",
    "revision": "218dd887bf1e4d494ce3c4aa55ec6d44"
  },
  {
    "url": "assets/js/13.a78fca03.js",
    "revision": "05bc889b7f00b9a5a585d748e475a657"
  },
  {
    "url": "assets/js/14.c62621f2.js",
    "revision": "11bfcee0318aee2343c602a73b423bd2"
  },
  {
    "url": "assets/js/15.7f54a268.js",
    "revision": "a5dab3a0ed1f2681f45a1971a127d40e"
  },
  {
    "url": "assets/js/16.fb476065.js",
    "revision": "2e2bfd6fd000dbe77c01a10dbed2c895"
  },
  {
    "url": "assets/js/17.7d101c65.js",
    "revision": "749540704cbc5fb3f50925d1d32e42a3"
  },
  {
    "url": "assets/js/2.007d03b7.js",
    "revision": "d171b16cee644f511c2bf48653145127"
  },
  {
    "url": "assets/js/3.67aa7e35.js",
    "revision": "7db84abb94959c2d79017bb9014f85e2"
  },
  {
    "url": "assets/js/4.4a9786c4.js",
    "revision": "b2adcde43ea891313f1984fd494cbfab"
  },
  {
    "url": "assets/js/5.46fef474.js",
    "revision": "e8a19c4ed1a2a7f5aaa4b57542bc611f"
  },
  {
    "url": "assets/js/6.8e120b44.js",
    "revision": "b6221d281f7a3a7a8413a161ef0a40cf"
  },
  {
    "url": "assets/js/7.31d750b2.js",
    "revision": "ab9ea46ad8869f713d884a3ddde009e7"
  },
  {
    "url": "assets/js/8.753c348f.js",
    "revision": "2160c51af6789d4241f5a82bac4282b5"
  },
  {
    "url": "assets/js/9.d84e3fb9.js",
    "revision": "b96eceece435b0a2a2904ced4211fe8d"
  },
  {
    "url": "assets/js/app.0830ec29.js",
    "revision": "2bb0d73749bc3ad4c81f2d3fb85a2876"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "785869534bf579692769f05de7b4ed04"
  },
  {
    "url": "react/index.html",
    "revision": "fb577fd62b99588c6896b609a430b40f"
  },
  {
    "url": "react/one.html",
    "revision": "d73dc37e6fadb5a6a255b8102c945bf2"
  },
  {
    "url": "react/there.html",
    "revision": "d3e80177afab60c07f8efa85fedae537"
  },
  {
    "url": "react/two.html",
    "revision": "e3cb4093e570674ecd9f673f3d22dc64"
  },
  {
    "url": "vue/vue基础篇/index.html",
    "revision": "38fc507acbd45c2a1d4062813e1a6dcd"
  },
  {
    "url": "vue/vue基础篇/one.html",
    "revision": "0cc5357af9e4a50e66f9ca9e7403221e"
  },
  {
    "url": "vue/vue进阶篇/index.html",
    "revision": "567c5cb47f523f7d88a88c175bc0ba90"
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
