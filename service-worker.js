importScripts("/precache-manifest.a13f67cb04e57ffe5810d60bbf8fcf97.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

if (workbox) {
    console.log(`Workbox is loaded`);
    workbox.precaching.precacheAndRoute(self.__precacheManifest);
    workbox.core.setCacheNameDetails({prefix: "ImJoy.io"});

    /**
     * The workboxSW.precacheAndRoute() method efficiently caches and responds to
     * requests for URLs in the manifest.
     * See https://goo.gl/S9QRab
     */
    self.__precacheManifest = [].concat(self.__precacheManifest || []);
    workbox.precaching.suppressWarnings();
    workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

    self.addEventListener("message", (e)=>{
      if (e.data.action=='skipWaiting') self.skipWaiting()
    })

}
else {
    console.log(`Workbox didn't load`);
}

