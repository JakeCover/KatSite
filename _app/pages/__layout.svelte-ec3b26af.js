import{S as t,i as e,s,e as a,t as r,c as n,a as o,g as c,d as l,b as i,D as h,f as u,E as f,F as g,G as m,H as d,k as $,n as p,I as b,J as w,h as v,K as E,j as k,m as x,o as I,p as y,q as A,x as O,u as P,v as T,r as _,w as j,L as C,B as D,M as G,N as B,O as M,P as S}from"../chunks/vendor-70185db0.js";function V(t){let e,s,$,p;return{c(){e=a("div"),s=r("Back to Top"),this.h()},l(t){e=n(t,"DIV",{class:!0});var a=o(e);s=c(a,"Back to Top"),a.forEach(l),this.h()},h(){i(e,"class","back-to-top svelte-976fyx"),h(e,"hidden",t[0])},m(a,r){u(a,e,r),f(e,s),$||(p=[g(window,"scroll",t[1]),g(e,"click",q)],$=!0)},p(t,[s]){1&s&&h(e,"hidden",t[0])},i:m,o:m,d(t){t&&l(e),$=!1,d(p)}}}function q(){document.body.scrollIntoView()}function W(){return document.documentElement||document.body}function F(t,e,s){let{showOnPx:a=150}=e,r=!0;return t.$$set=t=>{"showOnPx"in t&&s(2,a=t.showOnPx)},[r,function(){W()&&(W().scrollTop>a?s(0,r=!1):s(0,r=!0))},a]}class H extends t{constructor(t){super(),e(this,t,F,V,s,{showOnPx:2})}}function N(t){let e,s,h,g,d,w,v,E,k,x,I,y,A,O,P,T,_,j,C,D,G,B;return{c(){e=a("footer"),s=a("div"),h=a("p"),g=r("If you wish to reach out to me for business inquiries, please contact me through\n      "),d=a("a"),w=r("Instagram"),v=r(",\n      "),E=a("a"),k=r("Twitter"),x=r(", or Gmail ("),I=a("a"),y=r("katedejer@gmail.com"),A=r(")"),O=$(),P=a("img"),_=$(),j=a("p"),C=r("Made with 🧡🧡 by @Cobular - Contact for Web Design at "),D=a("a"),G=r("www.cobular.com"),B=r("!"),this.h()},l(t){e=n(t,"FOOTER",{id:!0,class:!0});var a=o(e);s=n(a,"DIV",{id:!0,class:!0});var r=o(s);h=n(r,"P",{class:!0});var i=o(h);g=c(i,"If you wish to reach out to me for business inquiries, please contact me through\n      "),d=n(i,"A",{href:!0});var u=o(d);w=c(u,"Instagram"),u.forEach(l),v=c(i,",\n      "),E=n(i,"A",{href:!0});var f=o(E);k=c(f,"Twitter"),f.forEach(l),x=c(i,", or Gmail ("),I=n(i,"A",{href:!0});var m=o(I);y=c(m,"katedejer@gmail.com"),m.forEach(l),A=c(i,")"),i.forEach(l),O=p(r),P=n(r,"IMG",{src:!0,alt:!0,class:!0}),_=p(r),j=n(r,"P",{class:!0});var $=o(j);C=c($,"Made with 🧡🧡 by @Cobular - Contact for Web Design at "),D=n($,"A",{href:!0});var b=o(D);G=c(b,"www.cobular.com"),b.forEach(l),B=c($,"!"),$.forEach(l),r.forEach(l),a.forEach(l),this.h()},h(){i(d,"href","https://www.instagram.com/shushicate/"),i(E,"href","https://twitter.com/Shushicate"),i(I,"href","mailto:katedejer@gmail.com"),i(h,"class","svelte-1owgucg"),b(P.src,T="/img/bottom_icon.png")||i(P,"src","/img/bottom_icon.png"),i(P,"alt","An icon of what appears to be a green mototcycle helmet with cat ears. It's very cute."),i(P,"class","svelte-1owgucg"),i(D,"href","http://www.cobular.com"),i(j,"class","svelte-1owgucg"),i(s,"id","footer-content"),i(s,"class","svelte-1owgucg"),i(e,"id","contact"),i(e,"class","svelte-1owgucg")},m(t,a){u(t,e,a),f(e,s),f(s,h),f(h,g),f(h,d),f(d,w),f(h,v),f(h,E),f(E,k),f(h,x),f(h,I),f(I,y),f(h,A),f(s,O),f(s,P),f(s,_),f(s,j),f(j,C),f(j,D),f(D,G),f(j,B)},p:m,i:m,o:m,d(t){t&&l(e)}}}class J extends t{constructor(t){super(),e(this,t,null,N,s,{})}}const K={subscribe:t=>(()=>{const t=w("__svelte__");return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},session:t.session}})().page.subscribe(t)};function L(t){let e,s;return{c(){e=a("a"),s=r(t[0]),this.h()},l(a){e=n(a,"A",{href:!0,class:!0});var r=o(e);s=c(r,t[0]),r.forEach(l),this.h()},h(){i(e,"href",t[1]),i(e,"class","nav-item link svelte-n9xvcw"),h(e,"selected",t[3](t[2].path))},m(t,a){u(t,e,a),f(e,s)},p(t,[a]){1&a&&v(s,t[0]),2&a&&i(e,"href",t[1]),12&a&&h(e,"selected",t[3](t[2].path))},i:m,o:m,d(t){t&&l(e)}}}function R(t,e,s){let a;E(t,K,(t=>s(2,a=t)));let{label:r}=e,{url:n}=e;return t.$$set=t=>{"label"in t&&s(0,r=t.label),"url"in t&&s(1,n=t.url)},[r,n,a,function(t){return t.startsWith(n)}]}class z extends t{constructor(t){super(),e(this,t,R,L,s,{label:0,url:1})}}function Q(t,e,s){const a=t.slice();return a[1]=e[s],a}function U(t){let e,s;const a=[t[1]];let r={};for(let n=0;n<a.length;n+=1)r=D(r,a[n]);return e=new z({props:r}),{c(){k(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,a){I(e,t,a),s=!0},p(t,s){const r=1&s?y(a,[A(t[1])]):{};e.$set(r)},i(t){s||(O(e.$$.fragment,t),s=!0)},o(t){P(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function X(t){let e,s,h,g,m,d,b=t[0],w=[];for(let a=0;a<b.length;a+=1)w[a]=U(Q(t,b,a));const v=t=>P(w[t],1,1,(()=>{w[t]=null}));return{c(){e=a("nav"),s=a("a"),h=a("h1"),g=r("Shushicate"),m=$();for(let t=0;t<w.length;t+=1)w[t].c();this.h()},l(t){e=n(t,"NAV",{class:!0});var a=o(e);s=n(a,"A",{href:!0,id:!0,class:!0});var r=o(s);h=n(r,"H1",{class:!0});var i=o(h);g=c(i,"Shushicate"),i.forEach(l),r.forEach(l),m=p(a);for(let e=0;e<w.length;e+=1)w[e].l(a);a.forEach(l),this.h()},h(){i(h,"class","svelte-arakgs"),i(s,"href","."),i(s,"id","title"),i(s,"class","svelte-arakgs"),i(e,"class","svelte-arakgs")},m(t,a){u(t,e,a),f(e,s),f(s,h),f(h,g),f(e,m);for(let s=0;s<w.length;s+=1)w[s].m(e,null);d=!0},p(t,[s]){if(1&s){let a;for(b=t[0],a=0;a<b.length;a+=1){const r=Q(t,b,a);w[a]?(w[a].p(r,s),O(w[a],1)):(w[a]=U(r),w[a].c(),O(w[a],1),w[a].m(e,null))}for(_(),a=b.length;a<w.length;a+=1)v(a);j()}},i(t){if(!d){for(let t=0;t<b.length;t+=1)O(w[t]);d=!0}},o(t){w=w.filter(Boolean);for(let e=0;e<w.length;e+=1)P(w[e]);d=!1},d(t){t&&l(e),C(w,t)}}}function Y(t){return[[{label:"Graphic",url:"/"},{label:"Illustrated",url:"/illustrated"},{label:"Contact Info",url:"#contact"}]]}class Z extends t{constructor(t){super(),e(this,t,Y,X,s,{})}}function tt(t){let e,s,a,r,n,o,c;e=new Z({});const i=t[1].default,h=G(i,t,t[0],null);return r=new J({}),o=new H({}),{c(){k(e.$$.fragment),s=$(),h&&h.c(),a=$(),k(r.$$.fragment),n=$(),k(o.$$.fragment)},l(t){x(e.$$.fragment,t),s=p(t),h&&h.l(t),a=p(t),x(r.$$.fragment,t),n=p(t),x(o.$$.fragment,t)},m(t,l){I(e,t,l),u(t,s,l),h&&h.m(t,l),u(t,a,l),I(r,t,l),u(t,n,l),I(o,t,l),c=!0},p(t,[e]){h&&h.p&&(!c||1&e)&&B(h,i,t,t[0],c?S(i,t[0],e,null):M(t[0]),null)},i(t){c||(O(e.$$.fragment,t),O(h,t),O(r.$$.fragment,t),O(o.$$.fragment,t),c=!0)},o(t){P(e.$$.fragment,t),P(h,t),P(r.$$.fragment,t),P(o.$$.fragment,t),c=!1},d(t){T(e,t),t&&l(s),h&&h.d(t),t&&l(a),T(r,t),t&&l(n),T(o,t)}}}function et(t,e,s){let{$$slots:a={},$$scope:r}=e;return t.$$set=t=>{"$$scope"in t&&s(0,r=t.$$scope)},[r,a]}export default class extends t{constructor(t){super(),e(this,t,et,tt,s,{})}}
