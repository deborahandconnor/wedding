import{S as s,i as t,s as a,e as l,k as e,c as r,a as c,m as n,d as o,f as i,g as h,h as f,n as g,v as u,w as m,x as d,y as p,z as v,A as $,B as E}from"./client.b517b44e.js";import{P as w}from"./PageTitle.7ea2287b.js";import{a as I}from"./utils.864c4d3d.js";function b(s,t,a){const l=s.slice();return l[1]=t[a],l}function j(s){let t,a,u,m;return{c(){t=l("div"),a=l("img"),m=e(),this.h()},l(s){t=r(s,"DIV",{class:!0});var l=c(t);a=r(l,"IMG",{src:!0,alt:!0,class:!0}),m=n(l),l.forEach(o),this.h()},h(){a.src!==(u=s[1])&&i(a,"src",u),i(a,"alt","♥"),i(a,"class","img-fluid card"),i(t,"class","col-12 col-lg-6 p-2")},m(s,l){h(s,t,l),f(t,a),f(t,m)},p:g,d(s){s&&o(t)}}}function x(s){let t,a,g,I,x;const P=new w({props:{title:"Photos"}});let T=s[0],k=[];for(let t=0;t<T.length;t+=1)k[t]=j(b(s,T,t));return{c(){t=l("article"),u(P.$$.fragment),a=e(),g=l("section"),I=l("div");for(let s=0;s<k.length;s+=1)k[s].c();this.h()},l(s){t=r(s,"ARTICLE",{class:!0});var l=c(t);m(P.$$.fragment,l),a=n(l),g=r(l,"SECTION",{class:!0});var e=c(g);I=r(e,"DIV",{class:!0});var i=c(I);for(let s=0;s<k.length;s+=1)k[s].l(i);i.forEach(o),e.forEach(o),l.forEach(o),this.h()},h(){i(I,"class","row"),i(g,"class","container"),i(t,"class","overflow-auto py-2 bg-dark text-light svelte-1eem146")},m(s,l){h(s,t,l),d(P,t,null),f(t,a),f(t,g),f(g,I);for(let s=0;s<k.length;s+=1)k[s].m(I,null);x=!0},p(s,[t]){if(1&t){let a;for(T=s[0],a=0;a<T.length;a+=1){const l=b(s,T,a);k[a]?k[a].p(l,t):(k[a]=j(l),k[a].c(),k[a].m(I,null))}for(;a<k.length;a+=1)k[a].d(1);k.length=T.length}},i(s){x||(p(P.$$.fragment,s),x=!0)},o(s){v(P.$$.fragment,s),x=!1},d(s){s&&o(t),$(P),E(k,s)}}}function P(s){return[(()=>{const s=[];let t=1;do{s.push(I(`${t}.jpg`))}while(t++<14);return s})()]}export default class extends s{constructor(s){super(),t(this,s,P,x,a,{})}}