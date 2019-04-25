importScripts("/precache-manifest.ebcd09e0041fc029d38b6942be95dc2d.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

if (workbox) {
    console.log(`Workbox is loaded`);
    /**
     * The workboxSW.precacheAndRoute() method efficiently caches and responds to
     * requests for URLs in the manifest.
     * See https://goo.gl/S9QRab
     */
    self.__precacheManifest = [].concat(self.__precacheManifest || []);
    workbox.precaching.suppressWarnings();
    workbox.core.setCacheNameDetails({prefix: "ImJoy.io"});
    workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

    workbox.routing.registerRoute(
      new RegExp('https://static.imjoy.io/.*'),
      new workbox.strategies.CacheFirst(),
    );
    //workbox.routing.setDefaultHandler(new workbox.strategies.NetworkFirst());

    self.addEventListener("message", (e)=>{
      if (e.data.action=='skipWaiting') self.skipWaiting()
    })

}
else {
    console.log(`Workbox didn't load`);
}

