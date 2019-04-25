importScripts("/precache-manifest.8786a184ea89ce42a507a1f4f4d241d9.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

if (workbox) {
    console.log(`Workbox is loaded`);
    /**
     * The workboxSW.precacheAndRoute() method efficiently caches and responds to
     * requests for URLs in the manifest.
     * See https://goo.gl/S9QRab
     */
    workbox.core.setCacheNameDetails({prefix: "ImJoy.io"});
    self.__precacheManifest = [].concat(self.__precacheManifest || []);
    workbox.precaching.suppressWarnings();
    workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

    workbox.routing.registerRoute(
      new RegExp('(http|https)://.*/socket.io/.*'),
      new workbox.strategies.NetworkOnly()
    );

    workbox.routing.registerRoute(
      new RegExp('https://static.imjoy.io/.*'),
      new workbox.strategies.CacheFirst(),
    );

    workbox.routing.setDefaultHandler(new workbox.strategies.NetworkOnly());

    self.addEventListener("message", (e)=>{
      if (e.data.action=='skipWaiting') self.skipWaiting()
      else{
        console.log('=======================>message to service worker:', e)
      }
    })

}
else {
    console.log(`Workbox didn't load`);
}

