!function(){"use strict";const e=["client/registry.1b0fdf2b.js","client/client.12a973b1.js","client/details.075075d8.js","client/PageTitle.ca9779db.js","client/pictures.dde6ae26.js","client/index.2607a634.js","client/about.e7827b63.js","client/index.es.1056b88d.js","client/admin.c70b4e28.js","client/rsvp.573b3df5.js","client/client.5fede4c9.js","client/utils.9b606202.js"].concat(["service-worker-index.html","CormorantGaramond-Light.ttf","CormorantGaramond-LightItalic.ttf","favicon.png","global.css","images/0.jpg","images/1.jpg","images/10.jpg","images/11.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg","images/9.jpg","Lato-Regular.ttf","logo-192.png","logo-512.png","manifest.json","styles.css"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1589521193675").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1589521193675"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1589521193675").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const a=await t.match(e.request);if(a)return a;throw s}}))))})}();
