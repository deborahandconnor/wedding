import{S as s,i as t,s as a,e as l,k as r,c as e,a as c,m as n,d as o,f as i,g as h,h as f,n as g,z as u,A as m,B as d,x as p,v,C as $,D as E}from"./client.4cb04071.js";import{P as I}from"./PageTitle.22281fad.js";import{a as j}from"./utils.9866b152.js";function w(s,t,a){const l=s.slice();return l[1]=t[a],l}function x(s){let t,a,u,m;return{c(){t=l("div"),a=l("img"),m=r(),this.h()},l(s){t=e(s,"DIV",{class:!0});var l=c(t);a=e(l,"IMG",{src:!0,alt:!0,class:!0}),m=n(l),l.forEach(o),this.h()},h(){a.src!==(u=s[1])&&i(a,"src",u),i(a,"alt","♥"),i(a,"class","img-fluid card"),i(t,"class","col-12 col-lg-6 p-2")},m(s,l){h(s,t,l),f(t,a),f(t,m)},p:g,d(s){s&&o(t)}}}function b(s){let t,a,g,j,b;const C=new I({props:{title:"Photos"}});let D=s[0],P=[];for(let t=0;t<D.length;t+=1)P[t]=x(w(s,D,t));return{c(){t=l("article"),u(C.$$.fragment),a=r(),g=l("section"),j=l("div");for(let s=0;s<P.length;s+=1)P[s].c();this.h()},l(s){t=e(s,"ARTICLE",{class:!0});var l=c(t);m(C.$$.fragment,l),a=n(l),g=e(l,"SECTION",{class:!0});var r=c(g);j=e(r,"DIV",{class:!0});var i=c(j);for(let s=0;s<P.length;s+=1)P[s].l(i);i.forEach(o),r.forEach(o),l.forEach(o),this.h()},h(){i(j,"class","row"),i(g,"class","container"),i(t,"class","overflow-auto bg-dark text-light svelte-v1ug61")},m(s,l){h(s,t,l),d(C,t,null),f(t,a),f(t,g),f(g,j);for(let s=0;s<P.length;s+=1)P[s].m(j,null);b=!0},p(s,[t]){if(1&t){let a;for(D=s[0],a=0;a<D.length;a+=1){const l=w(s,D,a);P[a]?P[a].p(l,t):(P[a]=x(l),P[a].c(),P[a].m(j,null))}for(;a<P.length;a+=1)P[a].d(1);P.length=D.length}},i(s){b||(p(C.$$.fragment,s),b=!0)},o(s){v(C.$$.fragment,s),b=!1},d(s){s&&o(t),$(C),E(P,s)}}}function C(s){return[(()=>{const s=[];let t=1;do{s.push(j(`${t}.jpg`))}while(t++<14);return s})()]}export default class extends s{constructor(s){super(),t(this,s,C,b,a,{})}}
