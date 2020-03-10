importScripts("/precache-manifest.c893cc54ac17d58abee19ff823f1f89b.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* eslint-disable */

if (workbox) {
  console.log(`Workbox is loaded`);
  /**
   * The workboxSW.precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.setConfig({
    debug: true,
  });

  const removeQuery = {
    cacheKeyWillBeUsed: ({request}) => {
      const newUrl = new URL(request.url);
      newUrl.search = '';
      newUrl.hash = '';
      return newUrl.href;
    },
  };

  workbox.core.setCacheNameDetails({ prefix: "ImJoy.io" });
  self.__precacheManifest = self.__precacheManifest || [];

  workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

  workbox.routing.registerRoute(
    new RegExp("/static/.*"),
    new workbox.strategies.StaleWhileRevalidate()
  );

  workbox.routing.registerRoute(
    new RegExp("/docs/.*"),
    new workbox.strategies.StaleWhileRevalidate()
  );

  workbox.routing.registerRoute(
    new RegExp("/.*\\.(html|css|js)"),
    new workbox.strategies.StaleWhileRevalidate()
  );

  workbox.routing.registerRoute(
    new RegExp("(http|https)://lib.imjoy.io/.*"),
    new workbox.strategies.StaleWhileRevalidate()
  );

  //communitations
  workbox.routing.registerRoute(
    new RegExp("(http|https)://.*/socket.io/.*"),
    new workbox.strategies.NetworkOnly()
  );

  workbox.routing.registerRoute(
    new RegExp("https://static.imjoy.io/.*"),
    new workbox.strategies.StaleWhileRevalidate()
  );

  workbox.routing.registerRoute(
    new RegExp("https://imjoy-team.github.io/.*"),
    new workbox.strategies.NetworkFirst({plugins: [removeQuery]})
  );

  // manifest.imjoy.json etc.
  workbox.routing.registerRoute(
    new RegExp("https://raw.githubusercontent.com/.*"),
    new workbox.strategies.NetworkFirst({plugins: [removeQuery]})
  );

  workbox.routing.registerRoute(
    new RegExp("https://gist.githubusercontent.com/.*"),
    new workbox.strategies.NetworkFirst({plugins: [removeQuery]})
  );

  // badges
  workbox.routing.registerRoute(
    new RegExp("https://img.shields.io/.*"),
    new workbox.strategies.StaleWhileRevalidate()
  );

  workbox.routing.registerRoute(
    new RegExp("https://github.com/imjoy-team/ImJoy/.*"),
    new workbox.strategies.NetworkFirst({plugins: [removeQuery]})
  );

  workbox.routing.registerRoute(
    new RegExp("https://zenodo.org/badge/.*"),
    new workbox.strategies.StaleWhileRevalidate()
  );

  workbox.routing.setDefaultHandler(new workbox.strategies.NetworkOnly());

  self.addEventListener("message", e => {
    if (e.data.action == "skipWaiting") self.skipWaiting();
  });
} else {
  console.log(`Workbox didn't load`);
}

