importScripts("/precache-manifest.d81eb204b26bfa14ada329f7bb4bb18c.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

if (workbox) {
    console.log(`Workbox is loaded`);
    /**
     * The workboxSW.precacheAndRoute() method efficiently caches and responds to
     * requests for URLs in the manifest.
     * See https://goo.gl/S9QRab
     */
    workbox.setConfig({
      debug: true
    });
    workbox.core.setCacheNameDetails({prefix: "ImJoy.io"});
    self.__precacheManifest = [
      '/static/jailed/_frame.js',
      '/static/jailed/_frame.html',
      '/static/jailed/_JailedSite.js',
      '/manifest.json',
      'https://raw.githubusercontent.com/oeway/ImJoy-Plugins/master/manifest.imjoy.json',
      'https://raw.githubusercontent.com/oeway/ImJoy-Demo-Plugins/master/manifest.imjoy.json'
    ].concat(self.__precacheManifest || []);
    workbox.precaching.suppressWarnings();
    workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

    workbox.routing.registerRoute(
      new RegExp('/static/.*'),
      new workbox.strategies.CacheFirst()
    );

    //communitations
    workbox.routing.registerRoute(
      new RegExp('(http|https)://.*/socket.io/.*'),
      new workbox.strategies.NetworkOnly()
    );

    workbox.routing.registerRoute(
      new RegExp('https://static.imjoy.io/.*'),
      new workbox.strategies.CacheFirst()
    );

    // manifest.imjoy.json etc.
    workbox.routing.registerRoute(
      new RegExp('https://raw.githubusercontent.com/.*'),
      new workbox.strategies.NetworkFirst()
    );

    workbox.routing.registerRoute(
      new RegExp('https://gist.githubusercontent.com/.*'),
      new workbox.strategies.NetworkFirst()
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

