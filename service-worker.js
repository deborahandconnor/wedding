!function(){"use strict";const e=["client/PageTitle.8fbbe7fe.js","client/client.667fb54f.js","client/details.c5622358.js","client/pictures.d5a593a7.js","client/index.46ceada7.js","client/registry.84926b09.js","client/about.5f16cff1.js","client/index.es.9e23ee0a.js","client/admin.c18a930f.js","client/rsvp.8e786394.js","client/client.d2d6b62f.js","client/utils.7c80a1cc.js"].concat(["service-worker-index.html","CormorantGaramond-Light.ttf","CormorantGaramond-LightItalic.ttf","favicon.png","global.css","images/0.jpg","images/1.jpg","images/10.jpg","images/11.jpg","images/12.jpg","images/13.jpg","images/14.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg","images/9.jpg","Lato-Regular.ttf","logo-192.png","logo-512.png","manifest.json","styles.css"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1589697557129").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1589697557129"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1589697557129").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const a=await t.match(e.request);if(a)return a;throw s}}))))})}();
