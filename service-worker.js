!function(){"use strict";const e=["client/PageTitle.fc844c72.js","client/index.dee529ef.js","client/pictures.84b21925.js","client/registry.e9b184be.js","client/details.607a9103.js","client/about.89b2e48c.js","client/rsvp.f458569f.js","client/client.a1c305d2.js","client/client.dadd2bde.js","client/utils.72f28a36.js"].concat(["service-worker-index.html","CormorantGaramond-Light.ttf","CormorantGaramond-LightItalic.ttf","favicon.png","global.css","images/0.jpg","images/1.jpg","images/10.jpg","images/11.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg","images/9.jpg","Lato-Regular.ttf","logo-192.png","logo-512.png","manifest.json","styles.css"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1585676400186").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1585676400186"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1585676400186").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const a=await t.match(e.request);if(a)return a;throw s}}))))})}();
