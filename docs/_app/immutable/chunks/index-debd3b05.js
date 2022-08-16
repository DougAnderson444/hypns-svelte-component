import{S as ke,i as De,s as Le,l as S,W as U,m as R,p as y,X as z,h as u,q as o,Y as Oe,b as Y,J as m,n as Ue,F as ot,x as ie,a as G,y as ae,c as F,Z as be,z as oe,Q as x,_ as ct,G as ut,H as ft,I as dt,f as N,t as H,C as ce,U as Be,$ as Mt,g as ve,d as pe,a0 as Pt,a1 as ue,a2 as ee,a3 as te,r as q,a4 as Ve,P as Ne,a5 as Te,a6 as St,o as ht,a7 as gt,u as vt,v as pt,w as mt,L as Ge,e as qe,M as Rt,T as Vt}from"./index-fe5e0b48.js";import{_ as Nt}from"./preload-helper-cdbd96e6.js";function At(t,n){var e=n&&n.cache?n.cache:jt,s=n&&n.serializer?n.serializer:Tt,l=n&&n.strategy?n.strategy:zt;return l(t,{cache:e,serializer:s})}function Wt(t){return t==null||typeof t=="number"||typeof t=="boolean"}function Ht(t,n,e,s){var l=Wt(s)?s:e(s),r=n.get(l);return typeof r>"u"&&(r=t.call(this,s),n.set(l,r)),r}function Ot(t,n,e){var s=Array.prototype.slice.call(arguments,3),l=e(s),r=n.get(l);return typeof r>"u"&&(r=t.apply(this,s),n.set(l,r)),r}function Ut(t,n,e,s,l){return e.bind(n,t,s,l)}function zt(t,n){var e=t.length===1?Ht:Ot;return Ut(t,this,e,n.cache.create(),n.serializer)}function Tt(){return JSON.stringify(arguments)}function Ae(){this.cache=Object.create(null)}Ae.prototype.has=function(t){return t in this.cache};Ae.prototype.get=function(t){return this.cache[t]};Ae.prototype.set=function(t,n){this.cache[t]=n};var jt={create:function(){return new Ae}},Bt=At,Ie={MAIN:"svelte-draggable",DRAGGING:"svelte-draggable-dragging",DRAGGED:"svelte-draggable-dragged"},_t=(t,n={})=>{var e,s;let{bounds:l,axis:r="both",gpuAcceleration:i=!0,applyUserSelectHack:a=!0,disabled:c=!1,ignoreMultitouch:h=!1,grid:f,position:v,cancel:g,handle:p,defaultClass:I=Ie.MAIN,defaultClassDragging:w=Ie.DRAGGING,defaultClassDragged:_=Ie.DRAGGED,defaultPosition:C={x:0,y:0},onDragStart:D,onDrag:d,onDragEnd:E}=n;const A=new Promise(requestAnimationFrame);let O=!1,[V,B]=[0,0],[$,b]=[0,0],[X,k]=[0,0],{x:L,y:W}={x:(e=v==null?void 0:v.x)!=null?e:0,y:(s=v==null?void 0:v.y)!=null?s:0};ze(L,W,t,i);let M,T,j="",K,Z,le,Ce,It=!!v;const He=()=>({offsetX:V,offsetY:B,domRect:t.getBoundingClientRect()});function kt(P){const J=He();P.dispatchEvent(new CustomEvent("svelte-drag:start",{detail:J})),D==null||D(J)}function Dt(P){const J=He();P.dispatchEvent(new CustomEvent("svelte-drag:end",{detail:J})),E==null||E(J)}function Lt(P,J,fe){const Q=He();P.dispatchEvent(new CustomEvent("svelte-drag",{detail:Q})),d==null||d(Q)}const _e=addEventListener;_e("touchstart",Pe,!1),_e("touchend",Se,!1),_e("touchmove",Re,!1),_e("mousedown",Pe,!1),_e("mouseup",Se,!1),_e("mousemove",Re,!1),t.style.touchAction="none";const Ye=()=>{let P=t.offsetWidth/Z.width;return isNaN(P)&&(P=1),P};function Pe(P){if(c||h&&P.type==="touchstart"&&P.touches.length>1)return;if(t.classList.add(I),le=Ft(p,t),Ce=Yt(g,t),M=["both","x"].includes(r),T=["both","y"].includes(r),typeof l<"u"&&(K=Kt(l,t)),Z=t.getBoundingClientRect(),Qe(p)&&Qe(g)&&p===g)throw new Error("`handle` selector can't be same as `cancel` selector");if(Ce!=null&&Ce.contains(le))throw new Error("Element being dragged can't be a child of the element on which `cancel` is applied");if(le.contains(P.target)&&!(Ce!=null&&Ce.contains(P.target))&&(O=!0),!O)return;a&&(j=document.body.style.userSelect,document.body.style.userSelect="none"),kt(t);const{clientX:J,clientY:fe}=$e(P)?P.touches[0]:P,Q=Ye();M&&($=J-L/Q),T&&(b=fe-W/Q),K&&(X=J-Z.left,k=fe-Z.top)}function Se(){!O||(t.classList.remove(w),t.classList.add(_),a&&(document.body.style.userSelect=j),Dt(t),M&&($=V),M&&(b=B),O=!1)}function Re(P){if(!O)return;t.classList.add(w),P.preventDefault(),Z=t.getBoundingClientRect();const{clientX:J,clientY:fe}=$e(P)?P.touches[0]:P;let[Q,de]=[J,fe];const ge=Ye();if(K){const re={left:K.left+X,top:K.top+k,right:K.right+X-Z.width,bottom:K.bottom+k-Z.height};Q=Je(Q,re.left,re.right),de=Je(de,re.top,re.bottom)}if(Array.isArray(f)){let[re,we]=f;if(isNaN(+re)||re<0)throw new Error("1st argument of `grid` must be a valid positive number");if(isNaN(+we)||we<0)throw new Error("2nd argument of `grid` must be a valid positive number");let[Ee,ye]=[Q-$,de-b];[Ee,ye]=Gt([Math.floor(re/ge),Math.floor(we/ge)],Ee,ye),[Q,de]=[$+Ee,b+ye]}M&&(V=(Q-$)*ge),T&&(B=(de-b)*ge),[L,W]=[V,B],Lt(t),A.then(()=>ze(V,B,t,i))}return{destroy:()=>{const P=removeEventListener;P("touchstart",Pe,!1),P("touchend",Se,!1),P("touchmove",Re,!1),P("mousedown",Pe,!1),P("mouseup",Se,!1),P("mousemove",Re,!1)},update:P=>{var J,fe,Q,de,ge,re,we,Ee,ye,Ke,Xe;r=P.axis||"both",c=(J=P.disabled)!=null?J:!1,h=(fe=P.ignoreMultitouch)!=null?fe:!1,p=P.handle,l=P.bounds,g=P.cancel,a=(Q=P.applyUserSelectHack)!=null?Q:!0,f=P.grid,i=(de=P.gpuAcceleration)!=null?de:!0;const Ct=t.classList.contains(_);t.classList.remove(I,_),I=(ge=P.defaultClass)!=null?ge:Ie.MAIN,w=(re=P.defaultClassDragging)!=null?re:Ie.DRAGGING,_=(we=P.defaultClassDragged)!=null?we:Ie.DRAGGED,t.classList.add(I),Ct&&t.classList.add(_),It&&(L=V=(ye=(Ee=P.position)==null?void 0:Ee.x)!=null?ye:V,W=B=(Xe=(Ke=P.position)==null?void 0:Ke.y)!=null?Xe:B,A.then(()=>ze(V,B,t,i)))}}};function $e(t){return Boolean(t.touches&&t.touches.length)}function Je(t,n,e){return Math.min(Math.max(t,n),e)}function Qe(t){return typeof t=="string"}var Gt=Bt(([t,n],e,s)=>{const l=Math.round(e/t)*t,r=Math.round(s/n)*n;return[l,r]});function Ft(t,n){if(!t)return n;const e=n.querySelector(t);if(e===null)throw new Error("Selector passed for `handle` option should be child of the element on which the action is applied");return e}function Yt(t,n){if(!t)return;const e=n.querySelector(t);if(e===null)throw new Error("Selector passed for `cancel` option should be child of the element on which the action is applied");return e}function Kt(t,n){if(typeof t=="object"){const[l,r]=[window.innerWidth,window.innerHeight],{top:i=0,left:a=0,right:c=0,bottom:h=0}=t,f=l-c,v=r-h;return{top:i,right:f,bottom:v,left:a}}if(t==="parent")return n.parentNode.getBoundingClientRect();const e=document.querySelector(t);if(e===null)throw new Error("The selector provided for bound doesn't exists in the document.");return e.getBoundingClientRect()}function ze(t,n,e,s){e.style.transform=s?`translate3d(${+t}px, ${+n}px, 0)`:`translate(${+t}px, ${+n}px)`}function Xt(t){let n,e,s,l,r,i,a,c,h,f,v,g,p;return{c(){n=S("div"),e=U("svg"),s=U("defs"),l=U("defs"),r=U("path"),i=U("path"),a=U("path"),c=U("radialGradient"),h=U("stop"),f=U("stop"),v=U("use"),g=U("use"),p=U("use"),this.h()},l(I){n=R(I,"DIV",{});var w=y(n);e=z(w,"svg",{xmlns:!0,"xmlns:xlink":!0,viewBox:!0,width:!0,height:!0,class:!0});var _=y(e);s=z(_,"defs",{}),y(s).forEach(u),l=z(_,"defs",{});var C=y(l);r=z(C,"path",{id:!0,d:!0}),y(r).forEach(u),i=z(C,"path",{id:!0,d:!0}),y(i).forEach(u),a=z(C,"path",{id:!0,d:!0}),y(a).forEach(u),c=z(C,"radialGradient",{id:!0,cx:!0,cy:!0,r:!0,gradientUnits:!0});var D=y(c);h=z(D,"stop",{offset:!0,"stop-color":!0}),y(h).forEach(u),f=z(D,"stop",{offset:!0,"stop-color":!0}),y(f).forEach(u),D.forEach(u),C.forEach(u),v=z(_,"use",{fill:!0,"xlink:href":!0}),y(v).forEach(u),g=z(_,"use",{fill:!0,"xlink:href":!0}),y(g).forEach(u),p=z(_,"use",{fill:!0,"xlink:href":!0}),y(p).forEach(u),_.forEach(u),w.forEach(u),this.h()},h(){o(r,"id","a"),o(r,"d","M258 1321c9-304 6-917 0-1191 52-161 1082-280 1083 330 1 609-618 545-701 538-2 67-2 208 0 422-222 56-349 23-382-99z"),o(i,"id","c"),o(i,"d","M1122 560c-107 223-284 293-529 209l-38 79c-1 2-4 2-5-1l-99-287c-1-5 1-11 6-13l273-106c3-1 6 2 5 5l-36 75c70 126 211 139 423 39z"),o(a,"id","d"),o(a,"d","M451 447c107-223 284-292 529-209l38-78c1-3 5-2 5 0l99 288c1 5-1 10-6 12L843 567c-3 1-6-3-5-6l37-75c-71-126-212-139-424-39z"),o(h,"offset","0%"),o(h,"stop-color","#69ed66"),o(f,"offset","100%"),o(f,"stop-color","#279c19"),o(c,"id","b"),o(c,"cx","992.3"),o(c,"cy","174.2"),o(c,"r","1312.8"),o(c,"gradientUnits","userSpaceOnUse"),o(v,"fill","url(#b)"),Oe(v,"xlink:href","#a"),o(g,"fill","#fff"),Oe(g,"xlink:href","#c"),o(p,"fill","#fff"),Oe(p,"xlink:href","#d"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),o(e,"viewBox","0 0 1440 1440"),o(e,"width","100"),o(e,"height","100"),o(e,"class","svelte-1es2uhx")},m(I,w){Y(I,n,w),m(n,e),m(e,s),m(e,l),m(l,r),m(l,i),m(l,a),m(l,c),m(c,h),m(c,f),m(e,v),m(e,g),m(e,p)},p:Ue,i:Ue,o:Ue,d(I){I&&u(n)}}}class Fe extends ke{constructor(n){super(),De(this,n,null,Xt,Le,{})}}const qt=t=>({openNav:t&1,hideNav:t&1}),Ze=t=>({openNav:t[5],hideNav:t[6]});function $t(t){let n,e,s,l,r,i,a,c,h,f,v,g,p,I,w,_;e=new Fe({});const C=t[4].default,D=ot(C,t,t[3],Ze);return{c(){n=S("div"),ie(e.$$.fragment),s=G(),l=S("div"),r=S("div"),i=G(),a=S("div"),c=G(),h=S("div"),f=G(),v=S("div"),g=G(),p=S("div"),D&&D.c(),this.h()},l(d){n=R(d,"DIV",{class:!0});var E=y(n);ae(e.$$.fragment,E),s=F(E),l=R(E,"DIV",{class:!0});var A=y(l);r=R(A,"DIV",{class:!0}),y(r).forEach(u),i=F(A),a=R(A,"DIV",{class:!0}),y(a).forEach(u),c=F(A),h=R(A,"DIV",{class:!0}),y(h).forEach(u),A.forEach(u),E.forEach(u),f=F(d),v=R(d,"DIV",{class:!0}),y(v).forEach(u),g=F(d),p=R(d,"DIV",{class:!0});var O=y(p);D&&D.l(O),O.forEach(u),this.h()},h(){o(r,"class","bar1 svelte-1wkx32a"),o(a,"class","bar2 svelte-1wkx32a"),o(h,"class","bar3 svelte-1wkx32a"),o(l,"class","menu-icon svelte-1wkx32a"),o(n,"class","container svelte-1wkx32a"),be(n,"change",t[0]),o(v,"class","svelte-1wkx32a"),be(v,"mask",t[0]),o(p,"class","sidenav svelte-1wkx32a"),be(p,"open",t[0])},m(d,E){Y(d,n,E),oe(e,n,null),m(n,s),m(n,l),m(l,r),m(l,i),m(l,a),m(l,c),m(l,h),Y(d,f,E),Y(d,v,E),Y(d,g,E),Y(d,p,E),D&&D.m(p,null),I=!0,w||(_=[x(n,"click",t[1]),ct(_t.call(null,n)),x(v,"click",t[2])],w=!0)},p(d,[E]){E&1&&be(n,"change",d[0]),E&1&&be(v,"mask",d[0]),D&&D.p&&(!I||E&9)&&ut(D,C,d,d[3],I?dt(C,d[3],E,qt):ft(d[3]),Ze),E&1&&be(p,"open",d[0])},i(d){I||(N(e.$$.fragment,d),N(D,d),I=!0)},o(d){H(e.$$.fragment,d),H(D,d),I=!1},d(d){d&&u(n),ce(e),d&&u(f),d&&u(v),d&&u(g),d&&u(p),D&&D.d(d),w=!1,Be(_)}}}function Jt(t,n,e){let{$$slots:s={},$$scope:l}=n,r=!1;function i(){e(0,r=!r)}function a(f){e(0,r=!1)}const c=()=>e(0,r=!0),h=()=>e(0,r=!1);return t.$$set=f=>{"$$scope"in f&&e(3,l=f.$$scope)},[r,i,a,l,s,c,h]}class Qt extends ke{constructor(n){super(),De(this,n,Jt,$t,Le,{})}}function ne(t,{delay:n=0,duration:e=400,easing:s=Mt}={}){const l=+getComputedStyle(t).opacity;return{delay:n,duration:e,easing:s,css:r=>`opacity: ${r*l}`}}var se;(function(t){t.Call="call",t.Reply="reply",t.Syn="syn",t.SynAck="synAck",t.Ack="ack"})(se||(se={}));var me;(function(t){t.Fulfilled="fulfilled",t.Rejected="rejected"})(me||(me={}));var Me;(function(t){t.ConnectionDestroyed="ConnectionDestroyed",t.ConnectionTimeout="ConnectionTimeout",t.NoIframeSrc="NoIframeSrc"})(Me||(Me={}));var je;(function(t){t.DataCloneError="DataCloneError"})(je||(je={}));var he;(function(t){t.Message="message"})(he||(he={}));const Zt=(t,n)=>{const e=[];let s=!1;return{destroy(l){s||(s=!0,n(`${t}: Destroying connection`),e.forEach(r=>{r(l)}))},onDestroy(l){s?l():e.push(l)}}},xt=t=>(...n)=>{t&&console.log("[Penpal]",...n)},en={"http:":"80","https:":"443"},tn=/^(https?:)?\/\/([^/:]+)?(:(\d+))?/,nn=["file:","data:"],rn=t=>{if(t&&nn.find(a=>t.startsWith(a)))return"null";const n=document.location,e=tn.exec(t);let s,l,r;e?(s=e[1]?e[1]:n.protocol,l=e[2],r=e[4]):(s=n.protocol,l=n.hostname,r=n.port);const i=r&&r!==en[s]?`:${r}`:"";return`${s}//${l}${i}`},xe=({name:t,message:n,stack:e})=>({name:t,message:n,stack:e}),sn=t=>{const n=new Error;return Object.keys(t).forEach(e=>n[e]=t[e]),n},ln=(t,n,e)=>{const{localName:s,local:l,remote:r,originForSending:i,originForReceiving:a}=t;let c=!1;const h=f=>{if(f.source!==r||f.data.penpal!==se.Call)return;if(a!=="*"&&f.origin!==a){e(`${s} received message from origin ${f.origin} which did not match expected origin ${a}`);return}const v=f.data,{methodName:g,args:p,id:I}=v;e(`${s}: Received ${g}() call`);const w=_=>C=>{if(e(`${s}: Sending ${g}() reply`),c){e(`${s}: Unable to send ${g}() reply due to destroyed connection`);return}const D={penpal:se.Reply,id:I,resolution:_,returnValue:C};_===me.Rejected&&C instanceof Error&&(D.returnValue=xe(C),D.returnValueIsError=!0);try{r.postMessage(D,i)}catch(d){if(d.name===je.DataCloneError){const E={penpal:se.Reply,id:I,resolution:me.Rejected,returnValue:xe(d),returnValueIsError:!0};r.postMessage(E,i)}throw d}};new Promise(_=>_(n[g].apply(n,p))).then(w(me.Fulfilled),w(me.Rejected))};return l.addEventListener(he.Message,h),()=>{c=!0,l.removeEventListener(he.Message,h)}};let an=0;const on=()=>++an,wt=".",Et=t=>t?t.split(wt):[],cn=t=>t.join(wt),un=(t,n)=>{const e=Et(n||"");return e.push(t),cn(e)},fn=(t,n,e)=>{const s=Et(n);return s.reduce((l,r,i)=>(typeof l[r]>"u"&&(l[r]={}),i===s.length-1&&(l[r]=e),l[r]),t),t},yt=(t,n)=>{const e={};return Object.keys(t).forEach(s=>{const l=t[s],r=un(s,n);typeof l=="object"&&Object.assign(e,yt(l,r)),typeof l=="function"&&(e[r]=l)}),e},dn=t=>{const n={};for(const e in t)fn(n,e,t[e]);return n},hn=(t,n,e,s,l)=>{const{localName:r,local:i,remote:a,originForSending:c,originForReceiving:h}=n;let f=!1;l(`${r}: Connecting call sender`);const v=p=>(...I)=>{l(`${r}: Sending ${p}() call`);let w;try{a.closed&&(w=!0)}catch{w=!0}if(w&&s(),f){const _=new Error(`Unable to send ${p}() call due to destroyed connection`);throw _.code=Me.ConnectionDestroyed,_}return new Promise((_,C)=>{const D=on(),d=A=>{if(A.source!==a||A.data.penpal!==se.Reply||A.data.id!==D)return;if(h!=="*"&&A.origin!==h){l(`${r} received message from origin ${A.origin} which did not match expected origin ${h}`);return}const O=A.data;l(`${r}: Received ${p}() reply`),i.removeEventListener(he.Message,d);let V=O.returnValue;O.returnValueIsError&&(V=sn(V)),(O.resolution===me.Fulfilled?_:C)(V)};i.addEventListener(he.Message,d);const E={penpal:se.Call,id:D,methodName:p,args:I};a.postMessage(E,c)})},g=e.reduce((p,I)=>(p[I]=v(I),p),{});return Object.assign(t,dn(g)),()=>{f=!0}},gn=(t,n,e,s,l)=>{const{destroy:r,onDestroy:i}=s;let a,c;const h={};return f=>{if(n!=="*"&&f.origin!==n){l(`Parent: Handshake - Received ACK message from origin ${f.origin} which did not match expected origin ${n}`);return}l("Parent: Handshake - Received ACK");const v={localName:"Parent",local:window,remote:f.source,originForSending:e,originForReceiving:n};a&&a(),a=ln(v,t,l),i(a),c&&c.forEach(p=>{delete h[p]}),c=f.data.methodNames;const g=hn(h,v,c,r,l);return i(g),h}},vn=(t,n,e,s)=>l=>{if(!l.source)return;if(e!=="*"&&l.origin!==e){t(`Parent: Handshake - Received SYN message from origin ${l.origin} which did not match expected origin ${e}`);return}t("Parent: Handshake - Received SYN, responding with SYN-ACK");const r={penpal:se.SynAck,methodNames:Object.keys(n)};l.source.postMessage(r,s)},pn=6e4,mn=(t,n)=>{const{destroy:e,onDestroy:s}=n,l=setInterval(()=>{t.isConnected||(clearInterval(l),e())},pn);s(()=>{clearInterval(l)})},_n=(t,n)=>{let e;return t!==void 0&&(e=window.setTimeout(()=>{const s=new Error(`Connection timed out after ${t}ms`);s.code=Me.ConnectionTimeout,n(s)},t)),()=>{clearTimeout(e)}},wn=t=>{if(!t.src&&!t.srcdoc){const n=new Error("Iframe must have src or srcdoc property defined.");throw n.code=Me.NoIframeSrc,n}},bt=t=>{let{iframe:n,methods:e={},childOrigin:s,timeout:l,debug:r=!1}=t;const i=xt(r),a=Zt("Parent",i),{onDestroy:c,destroy:h}=a;s||(wn(n),s=rn(n.src));const f=s==="null"?"*":s,v=yt(e),g=vn(i,v,s,f),p=gn(v,s,f,a,i);return{promise:new Promise((w,_)=>{const C=_n(l,h),D=d=>{if(!(d.source!==n.contentWindow||!d.data)){if(d.data.penpal===se.Syn){g(d);return}if(d.data.penpal===se.Ack){const E=p(d);E&&(C(),w(E));return}}};window.addEventListener(he.Message,D),i("Parent: Awaiting handshake"),mn(n,a),c(d=>{window.removeEventListener(he.Message,D),d&&_(d)})}),destroy(){h()}}};function et(t){let n,e,s,l,r,i;return{c(){n=S("div"),e=U("svg"),s=U("rect"),l=U("path"),this.h()},l(a){n=R(a,"DIV",{});var c=y(n);e=z(c,"svg",{"v-if":!0,xmlns:!0,"enable-background":!0,viewBox:!0,fill:!0,class:!0});var h=y(e);s=z(h,"rect",{fill:!0,height:!0,width:!0}),y(s).forEach(u),l=z(h,"path",{d:!0}),y(l).forEach(u),h.forEach(u),c.forEach(u),this.h()},h(){o(s,"fill","none"),o(s,"height","24"),o(s,"width","24"),o(l,"d","M3,3v18h18V3H3z M17,15.59L15.59,17L12,13.41L8.41,17L7,15.59L10.59,12L7,8.41L8.41,7L12,10.59L15.59,7L17,8.41L13.41,12 L17,15.59z"),o(e,"v-if","icon === 'close'"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"enable-background","new 0 0 24 24"),o(e,"viewBox","0 0 24 24"),o(e,"fill","currentColor"),o(e,"class","svelte-boxns1")},m(a,c){Y(a,n,c),m(n,e),m(e,s),m(e,l),i=!0},i(a){i||(ue(()=>{r||(r=ee(n,ne,{delay:100,duration:100},!0)),r.run(1)}),i=!0)},o(a){r||(r=ee(n,ne,{delay:100,duration:100},!1)),r.run(0),i=!1},d(a){a&&u(n),a&&r&&r.end()}}}function tt(t){let n,e,s,l,r,i;return{c(){n=S("div"),e=U("svg"),s=U("path"),l=U("path"),this.h()},l(a){n=R(a,"DIV",{});var c=y(n);e=z(c,"svg",{"v-else-if":!0,xmlns:!0,viewBox:!0,fill:!0,class:!0});var h=y(e);s=z(h,"path",{d:!0,fill:!0}),y(s).forEach(u),l=z(h,"path",{d:!0}),y(l).forEach(u),h.forEach(u),c.forEach(u),this.h()},h(){o(s,"d","M0 0h24v24H0z"),o(s,"fill","none"),o(l,"d","M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"),o(e,"v-else-if","icon === 'launch'"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"viewBox","0 0 24 24"),o(e,"fill","currentColor"),o(e,"class","svelte-boxns1")},m(a,c){Y(a,n,c),m(n,e),m(e,s),m(e,l),i=!0},i(a){i||(ue(()=>{r||(r=ee(n,ne,{delay:100,duration:100},!0)),r.run(1)}),i=!0)},o(a){r||(r=ee(n,ne,{delay:100,duration:100},!1)),r.run(0),i=!1},d(a){a&&u(n),a&&r&&r.end()}}}function nt(t){let n,e,s,l,r,i;return{c(){n=S("div"),e=U("svg"),s=U("path"),l=U("path"),this.h()},l(a){n=R(a,"DIV",{});var c=y(n);e=z(c,"svg",{"v-else-if":!0,xmlns:!0,viewBox:!0,fill:!0,class:!0});var h=y(e);s=z(h,"path",{d:!0,fill:!0}),y(s).forEach(u),l=z(h,"path",{d:!0}),y(l).forEach(u),h.forEach(u),c.forEach(u),this.h()},h(){o(s,"d","M0 0h24v24H0z"),o(s,"fill","none"),o(l,"d","M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z"),o(e,"v-else-if","icon === 'plug'"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"viewBox","0 0 24 24"),o(e,"fill","currentColor"),o(e,"class","svelte-boxns1")},m(a,c){Y(a,n,c),m(n,e),m(e,s),m(e,l),i=!0},i(a){i||(ue(()=>{r||(r=ee(n,ne,{delay:100,duration:100},!0)),r.run(1)}),i=!0)},o(a){r||(r=ee(n,ne,{delay:100,duration:100},!1)),r.run(0),i=!1},d(a){a&&u(n),a&&r&&r.end()}}}function rt(t){let n,e,s,l,r,i;return{c(){n=S("div"),e=U("svg"),s=U("path"),l=U("path"),this.h()},l(a){n=R(a,"DIV",{});var c=y(n);e=z(c,"svg",{"v-else-if":!0,xmlns:!0,viewBox:!0,fill:!0,class:!0});var h=y(e);s=z(h,"path",{d:!0,fill:!0}),y(s).forEach(u),l=z(h,"path",{d:!0}),y(l).forEach(u),h.forEach(u),c.forEach(u),this.h()},h(){o(s,"d","M0 0h24v24H0V0z"),o(s,"fill","none"),o(l,"d","M18 14.49V9c0-1-1.01-2.01-2-2V3h-2v4h-4V3H8v2.48l9.51 9.5.49-.49zm-1.76 1.77L7.2 7.2l-.01.01L3.98 4 2.71 5.25l3.36 3.36C6.04 8.74 6 8.87 6 9v5.48L9.5 18v3h5v-3l.48-.48L19.45 22l1.26-1.28-4.47-4.46z"),o(e,"v-else-if","icon === 'unplug'"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"viewBox","0 0 24 24"),o(e,"fill","currentColor"),o(e,"class","svelte-boxns1")},m(a,c){Y(a,n,c),m(n,e),m(e,s),m(e,l),i=!0},i(a){i||(ue(()=>{r||(r=ee(n,ne,{delay:100,duration:100},!0)),r.run(1)}),i=!0)},o(a){r||(r=ee(n,ne,{delay:100,duration:100},!1)),r.run(0),i=!1},d(a){a&&u(n),a&&r&&r.end()}}}function En(t){let n,e,s,l,r,i,a,c,h,f=t[0]==="close"&&et(),v=t[0]==="launch"&&tt(),g=t[0]==="plug"&&nt(),p=t[0]==="unplug"&&rt();const I=t[3].default,w=ot(I,t,t[2],null);return{c(){n=S("button"),e=S("div"),f&&f.c(),s=G(),v&&v.c(),l=G(),g&&g.c(),r=G(),p&&p.c(),i=G(),w&&w.c(),this.h()},l(_){n=R(_,"BUTTON",{class:!0});var C=y(n);e=R(C,"DIV",{class:!0});var D=y(e);f&&f.l(D),s=F(D),v&&v.l(D),l=F(D),g&&g.l(D),r=F(D),p&&p.l(D),D.forEach(u),i=F(C),w&&w.l(C),C.forEach(u),this.h()},h(){o(e,"class","img-container svelte-boxns1"),o(n,"class","svelte-boxns1")},m(_,C){Y(_,n,C),m(n,e),f&&f.m(e,null),m(e,s),v&&v.m(e,null),m(e,l),g&&g.m(e,null),m(e,r),p&&p.m(e,null),m(n,i),w&&w.m(n,null),a=!0,c||(h=x(n,"click",t[4]),c=!0)},p(_,[C]){_[0]==="close"?f?C&1&&N(f,1):(f=et(),f.c(),N(f,1),f.m(e,s)):f&&(ve(),H(f,1,1,()=>{f=null}),pe()),_[0]==="launch"?v?C&1&&N(v,1):(v=tt(),v.c(),N(v,1),v.m(e,l)):v&&(ve(),H(v,1,1,()=>{v=null}),pe()),_[0]==="plug"?g?C&1&&N(g,1):(g=nt(),g.c(),N(g,1),g.m(e,r)):g&&(ve(),H(g,1,1,()=>{g=null}),pe()),_[0]==="unplug"?p?C&1&&N(p,1):(p=rt(),p.c(),N(p,1),p.m(e,null)):p&&(ve(),H(p,1,1,()=>{p=null}),pe()),w&&w.p&&(!a||C&4)&&ut(w,I,_,_[2],a?dt(I,_[2],C,null):ft(_[2]),null)},i(_){a||(N(f),N(v),N(g),N(p),N(w,_),a=!0)},o(_){H(f),H(v),H(g),H(p),H(w,_),a=!1},d(_){_&&u(n),f&&f.d(),v&&v.d(),g&&g.d(),p&&p.d(),w&&w.d(_),c=!1,h()}}}function yn(t,n,e){let{$$slots:s={},$$scope:l}=n,{icon:r}=n;const i=Pt(),a=()=>i("click","detail value");return t.$$set=c=>{"icon"in c&&e(0,r=c.icon),"$$scope"in c&&e(2,l=c.$$scope)},[r,i,l,s,a]}class We extends ke{constructor(n){super(),De(this,n,yn,En,Le,{icon:0})}}const{window:bn}=gt;function st(t){let n,e,s,l,r;return e=new We({props:{icon:t[12]}}),e.$on("click",t[15]),{c(){n=S("div"),ie(e.$$.fragment),this.h()},l(i){n=R(i,"DIV",{class:!0});var a=y(n);ae(e.$$.fragment,a),a.forEach(u),this.h()},h(){var i;o(n,"class",s=te((i=t[0])!=null&&i.keepPopup?"action":"action dim")+" svelte-1jxvnse")},m(i,a){Y(i,n,a),oe(e,n,null),r=!0},p(i,a){var h;const c={};a&4096&&(c.icon=i[12]),e.$set(c),(!r||a&1&&s!==(s=te((h=i[0])!=null&&h.keepPopup?"action":"action dim")+" svelte-1jxvnse"))&&o(n,"class",s)},i(i){r||(N(e.$$.fragment,i),ue(()=>{l||(l=ee(n,ne,{delay:100,duration:100},!0)),l.run(1)}),r=!0)},o(i){H(e.$$.fragment,i),l||(l=ee(n,ne,{delay:100,duration:100},!1)),l.run(0),r=!1},d(i){i&&u(n),ce(e),i&&l&&l.end()}}}function In(t){let n,e=t[10].loading||!t[6]?"Loading...":"Load",s,l;return{c(){n=S("span"),s=vt(e),this.h()},l(r){n=R(r,"SPAN",{class:!0});var i=y(n);s=pt(i,e),i.forEach(u),this.h()},h(){var r;o(n,"class",l=te((r=t[0])!=null&&r.address?" connected ":" disconnected ")+" svelte-1jxvnse")},m(r,i){Y(r,n,i),m(n,s)},p(r,i){var a;i&1088&&e!==(e=r[10].loading||!r[6]?"Loading...":"Load")&&mt(s,e),i&1&&l!==(l=te((a=r[0])!=null&&a.address?" connected ":" disconnected ")+" svelte-1jxvnse")&&o(n,"class",l)},d(r){r&&u(n)}}}function kn(t){var X;let n,e,s,l,r,i,a,c,h,f,v,g,p,I,w,_,C,D,d,E,A,O,V,B,$;r=new Fe({});let b=(((X=t[0])==null?void 0:X.address)||t[1])&&st(t);return w=new We({props:{icon:t[11],$$slots:{default:[In]},$$scope:{ctx:t}}}),w.$on("click",t[23]),{c(){n=S("div"),e=S("div"),s=S("a"),l=S("div"),ie(r.$$.fragment),i=G(),a=S("div"),c=S("input"),h=G(),f=S("span"),v=G(),g=S("div"),b&&b.c(),p=G(),I=S("div"),ie(w.$$.fragment),D=G(),d=S("div"),E=S("iframe"),this.h()},l(k){n=R(k,"DIV",{class:!0});var L=y(n);e=R(L,"DIV",{class:!0,style:!0});var W=y(e);s=R(W,"A",{href:!0,target:!0,rel:!0});var M=y(s);l=R(M,"DIV",{class:!0});var T=y(l);ae(r.$$.fragment,T),T.forEach(u),M.forEach(u),i=F(W),a=R(W,"DIV",{class:!0});var j=y(a);c=R(j,"INPUT",{class:!0,placeholder:!0}),h=F(j),f=R(j,"SPAN",{class:!0}),y(f).forEach(u),j.forEach(u),v=F(W),g=R(W,"DIV",{class:!0});var K=y(g);b&&b.l(K),p=F(K),I=R(K,"DIV",{class:!0});var Z=y(I);ae(w.$$.fragment,Z),Z.forEach(u),K.forEach(u),W.forEach(u),D=F(L),d=R(L,"DIV",{class:!0,style:!0});var le=y(d);E=R(le,"IFRAME",{title:!0,src:!0,allow:!0,class:!0}),y(E).forEach(u),le.forEach(u),L.forEach(u),this.h()},h(){var k,L;o(l,"class","actions logo svelte-1jxvnse"),o(s,"href","https://PeerPiper.io"),o(s,"target","_blank"),o(s,"rel","noreferrer"),o(c,"class","url svelte-1jxvnse"),o(c,"placeholder",Dn),o(f,"class","green-line svelte-1jxvnse"),o(a,"class","url-input-container svelte-1jxvnse"),o(I,"class",_=te((k=t[10])!=null&&k.loading?"action dim":(L=t[0])!=null&&L.address?" connected ":" disconnected ")+" svelte-1jxvnse"),o(g,"class","actions svelte-1jxvnse"),o(e,"class","top svelte-1jxvnse"),q(e,"--topOffsetHeight",t[2]),ue(()=>t[24].call(e)),o(E,"title","Web Wallet"),Ve(E.src,A=t[6])||o(E,"src",A),o(E,"allow","clipboard-read 'self' 'src'; clipboard-write 'self' 'src';"),o(E,"class","svelte-1jxvnse"),o(d,"class","iframe svelte-1jxvnse"),q(d,"height","calc("+t[4]+"px + 18px)"),ue(()=>t[26].call(d)),o(n,"class","connector-container svelte-1jxvnse")},m(k,L){Y(k,n,L),m(n,e),m(e,s),m(s,l),oe(r,l,null),m(e,i),m(e,a),m(a,c),Ne(c,t[1]),m(a,h),m(a,f),m(e,v),m(e,g),b&&b.m(g,null),m(g,p),m(g,I),oe(w,I,null),C=Te(e,t[24].bind(e)),m(n,D),m(n,d),m(d,E),t[25](E),O=Te(d,t[26].bind(d)),V=!0,B||($=[x(bn,"keydown",t[16]),x(c,"focus",t[20]),x(c,"blur",t[21]),x(c,"input",t[22]),x(c,"input",function(){St(t[8])&&t[8].apply(this,arguments)})],B=!0)},p(k,[L]){var M,T,j;t=k,L&2&&c.value!==t[1]&&Ne(c,t[1]),((M=t[0])==null?void 0:M.address)||t[1]?b?(b.p(t,L),L&3&&N(b,1)):(b=st(t),b.c(),N(b,1),b.m(g,p)):b&&(ve(),H(b,1,1,()=>{b=null}),pe());const W={};L&2048&&(W.icon=t[11]),L&536872001&&(W.$$scope={dirty:L,ctx:t}),w.$set(W),(!V||L&1025&&_!==(_=te((T=t[10])!=null&&T.loading?"action dim":(j=t[0])!=null&&j.address?" connected ":" disconnected ")+" svelte-1jxvnse"))&&o(I,"class",_),(!V||L&4)&&q(e,"--topOffsetHeight",t[2]),(!V||L&64&&!Ve(E.src,A=t[6]))&&o(E,"src",A),(!V||L&16)&&q(d,"height","calc("+t[4]+"px + 18px)")},i(k){V||(N(r.$$.fragment,k),N(b),N(w.$$.fragment,k),V=!0)},o(k){H(r.$$.fragment,k),H(b),H(w.$$.fragment,k),V=!1},d(k){k&&u(n),ce(r),b&&b.d(),ce(w),C(),t[25](null),O(),B=!1,Be($)}}}let Dn="Enter Wallet Url";const lt="INPUT_URL";function Ln(t,n,e){let s,l,{wallet:r}=n,{inputUrl:i="https://douganderson444.github.io/iframe-wallet-kit/"}=n,{topOffsetHeight:a=0}=n,{topOffsetWidth:c=0}=n,{iframeParentHeight:h=0}=n,{iframeParentWidth:f=0}=n,v,{show:g}=n,{hide:p}=n,I,w,_,C;const D={loading:!0};ht(async()=>{const{ImmortalDB:M}=await Nt(()=>import("./index-f3824ee7.js"),[]);e(8,C=async()=>{try{await M.set(lt,I)}catch(T){console.warn("Did not save",I,T)}});try{const T=await M.get(lt,null);T&&e(1,i=T)}catch(T){console.warn("Did not get",T)}E()});async function d(){e(10,D.loading=!1,D);let M;M=await bt({iframe:w,methods:{setIframeParentHeight(j){e(4,h=j)},setIframeParentWidth(j){e(17,f=j)},show(){g()},hide(){p()},walletReady(){e(0,r=M),window.arweaveWallet=r.arweaveWalletAPI}}}).promise,g()}const E=()=>{I!==i&&(e(6,I=""),e(6,I=i),e(10,D.loading=!0,D))},A=()=>r.disconnect(),O=()=>window.open(i);function V(M){M.key==="Enter"&&_&&E()}const B=()=>e(9,_=!0),$=()=>e(9,_=!1);function b(){i=this.value,e(1,i)}const X=()=>{r!=null&&r.address?A():E()};function k(){a=this.offsetHeight,c=this.offsetWidth,e(2,a),e(3,c)}function L(M){Ge[M?"unshift":"push"](()=>{w=M,e(7,w)})}function W(){v=this.offsetWidth,e(5,v)}return t.$$set=M=>{"wallet"in M&&e(0,r=M.wallet),"inputUrl"in M&&e(1,i=M.inputUrl),"topOffsetHeight"in M&&e(2,a=M.topOffsetHeight),"topOffsetWidth"in M&&e(3,c=M.topOffsetWidth),"iframeParentHeight"in M&&e(4,h=M.iframeParentHeight),"iframeParentWidth"in M&&e(17,f=M.iframeParentWidth),"show"in M&&e(18,g=M.show),"hide"in M&&e(19,p=M.hide)},t.$$.update=()=>{t.$$.dirty&320&&I&&C&&C(),t.$$.dirty&128&&w&&w.addEventListener("load",d),t.$$.dirty&1&&e(12,s=r!=null&&r.keepPopup?"close":"launch"),t.$$.dirty&1&&e(11,l=r!=null&&r.address?"unplug":"plug"),t.$$.dirty&33&&v&&r&&(r==null||r.setWidth(v))},[r,i,a,c,h,v,I,w,C,_,D,l,s,E,A,O,V,f,g,p,B,$,b,X,k,L,W]}class Cn extends ke{constructor(n){super(),De(this,n,Ln,kn,Le,{wallet:0,inputUrl:1,topOffsetHeight:2,topOffsetWidth:3,iframeParentHeight:4,iframeParentWidth:17,show:18,hide:19})}}function it(t){let n,e;return n=new Qt({props:{$$slots:{default:[Mn,({openNav:s,hideNav:l})=>({4:s,5:l}),({openNav:s,hideNav:l})=>(s?16:0)|(l?32:0)]},$$scope:{ctx:t}}}),{c(){ie(n.$$.fragment)},l(s){ae(n.$$.fragment,s)},m(s,l){oe(n,s,l),e=!0},p(s,l){const r={};l&115&&(r.$$scope={dirty:l,ctx:s}),n.$set(r)},i(s){e||(N(n.$$.fragment,s),e=!0)},o(s){H(n.$$.fragment,s),e=!1},d(s){ce(n,s)}}}function Mn(t){let n,e,s;function l(i){t[3](i)}let r={inputUrl:t[1],show:t[4],hide:t[5]};return t[0]!==void 0&&(r.wallet=t[0]),n=new Cn({props:r}),Ge.push(()=>Rt(n,"wallet",l)),{c(){ie(n.$$.fragment)},l(i){ae(n.$$.fragment,i)},m(i,a){oe(n,i,a),s=!0},p(i,a){const c={};a&2&&(c.inputUrl=i[1]),a&16&&(c.show=i[4]),a&32&&(c.hide=i[5]),!e&&a&1&&(e=!0,c.wallet=i[0],Vt(()=>e=!1)),n.$set(c)},i(i){s||(N(n.$$.fragment,i),s=!0)},o(i){H(n.$$.fragment,i),s=!1},d(i){ce(n,i)}}}function Pn(t){let n,e,s=t[2]&&it(t);return{c(){s&&s.c(),n=qe()},l(l){s&&s.l(l),n=qe()},m(l,r){s&&s.m(l,r),Y(l,n,r),e=!0},p(l,[r]){l[2]?s?(s.p(l,r),r&4&&N(s,1)):(s=it(l),s.c(),N(s,1),s.m(n.parentNode,n)):s&&(ve(),H(s,1,1,()=>{s=null}),pe())},i(l){e||(N(s),e=!0)},o(l){H(s),e=!1},d(l){s&&s.d(l),l&&u(n)}}}function Sn(t,n,e){let{inputUrl:s}=n,{wallet:l}=n,r;ht(()=>{e(2,r=!0)});function i(a){l=a,e(0,l)}return t.$$set=a=>{"inputUrl"in a&&e(1,s=a.inputUrl),"wallet"in a&&e(0,l=a.wallet)},[l,s,r,i]}class Rn extends ke{constructor(n){super(),De(this,n,Sn,Pn,Le,{inputUrl:1,wallet:0})}}const Tn=Rn;const{window:Vn}=gt;function at(t){let n,e,s,l,r;return e=new We({props:{icon:t[11]}}),e.$on("click",t[14]),{c(){n=S("div"),ie(e.$$.fragment),this.h()},l(i){n=R(i,"DIV",{class:!0});var a=y(n);ae(e.$$.fragment,a),a.forEach(u),this.h()},h(){var i;o(n,"class",s=te((i=t[0])!=null&&i.keepPopup?"action":"action dim")+" svelte-1gf2ryb")},m(i,a){Y(i,n,a),oe(e,n,null),r=!0},p(i,a){var h;const c={};a&2048&&(c.icon=i[11]),e.$set(c),(!r||a&1&&s!==(s=te((h=i[0])!=null&&h.keepPopup?"action":"action dim")+" svelte-1gf2ryb"))&&o(n,"class",s)},i(i){r||(N(e.$$.fragment,i),ue(()=>{l||(l=ee(n,ne,{delay:100,duration:100},!0)),l.run(1)}),r=!0)},o(i){H(e.$$.fragment,i),l||(l=ee(n,ne,{delay:100,duration:100},!1)),l.run(0),r=!1},d(i){i&&u(n),ce(e),i&&l&&l.end()}}}function Nn(t){let n,e=t[9].loading||!t[3]?"Loading...":"Load",s,l;return{c(){n=S("span"),s=vt(e),this.h()},l(r){n=R(r,"SPAN",{class:!0});var i=y(n);s=pt(i,e),i.forEach(u),this.h()},h(){var r;o(n,"class",l=te((r=t[0])!=null&&r.address?" connected ":" disconnected ")+" svelte-1gf2ryb")},m(r,i){Y(r,n,i),m(n,s)},p(r,i){var a;i&520&&e!==(e=r[9].loading||!r[3]?"Loading...":"Load")&&mt(s,e),i&1&&l!==(l=te((a=r[0])!=null&&a.address?" connected ":" disconnected ")+" svelte-1gf2ryb")&&o(n,"class",l)},d(r){r&&u(n)}}}function An(t){var X;let n,e,s,l,r,i,a,c,h,f,v,g,p,I,w,_,C,D,d,E,A,O,V,B,$;r=new Fe({});let b=(((X=t[0])==null?void 0:X.address)||t[1])&&at(t);return w=new We({props:{icon:t[10],$$slots:{default:[Nn]},$$scope:{ctx:t}}}),w.$on("click",t[19]),{c(){n=S("div"),e=S("div"),s=S("a"),l=S("div"),ie(r.$$.fragment),i=G(),a=S("div"),c=S("input"),h=G(),f=S("span"),v=G(),g=S("div"),b&&b.c(),p=G(),I=S("div"),ie(w.$$.fragment),D=G(),d=S("div"),E=S("iframe"),this.h()},l(k){n=R(k,"DIV",{class:!0,style:!0});var L=y(n);e=R(L,"DIV",{class:!0,style:!0});var W=y(e);s=R(W,"A",{href:!0,target:!0,rel:!0});var M=y(s);l=R(M,"DIV",{class:!0});var T=y(l);ae(r.$$.fragment,T),T.forEach(u),M.forEach(u),i=F(W),a=R(W,"DIV",{class:!0});var j=y(a);c=R(j,"INPUT",{class:!0,placeholder:!0}),h=F(j),f=R(j,"SPAN",{class:!0}),y(f).forEach(u),j.forEach(u),v=F(W),g=R(W,"DIV",{class:!0});var K=y(g);b&&b.l(K),p=F(K),I=R(K,"DIV",{class:!0});var Z=y(I);ae(w.$$.fragment,Z),Z.forEach(u),K.forEach(u),W.forEach(u),D=F(L),d=R(L,"DIV",{class:!0,style:!0});var le=y(d);E=R(le,"IFRAME",{title:!0,src:!0,style:!0,allow:!0,class:!0}),y(E).forEach(u),le.forEach(u),L.forEach(u),this.h()},h(){var k,L;o(l,"class","actions logo svelte-1gf2ryb"),o(s,"href","https://PeerPiper.io"),o(s,"target","_blank"),o(s,"rel","noreferrer"),o(c,"class","url svelte-1gf2ryb"),o(c,"placeholder",Wn),o(f,"class","green-line svelte-1gf2ryb"),o(a,"class","url-input-container svelte-1gf2ryb"),o(I,"class",_=te((k=t[9])!=null&&k.loading?"action dim":(L=t[0])!=null&&L.address?" connected ":" disconnected ")+" svelte-1gf2ryb"),o(g,"class","actions svelte-1gf2ryb"),o(e,"class","top svelte-1gf2ryb"),q(e,"--topOffsetHeight",t[5]),ue(()=>t[20].call(e)),o(E,"title","Web Wallet"),Ve(E.src,A=t[3])||o(E,"src",A),q(E,"width","100%"),q(E,"height","100%"),o(E,"allow",O="clipboard-write 'self' "+t[3]),o(E,"class","svelte-1gf2ryb"),o(d,"class","iframe svelte-1gf2ryb"),q(d,"height",t[7]+"px"),o(n,"class","url-input svelte-1gf2ryb"),q(n,"height","calc(var(--spacing) * 2 + "+t[5]+"px + "+t[7]+"px + 2px)"),q(n,"--url-input-width","calc(var(--spacing) * 2 + "+t[8]+"px + 2px)"),q(n,"--url-input-min-width",t[6]+"px")},m(k,L){Y(k,n,L),m(n,e),m(e,s),m(s,l),oe(r,l,null),m(e,i),m(e,a),m(a,c),Ne(c,t[1]),m(a,h),m(a,f),m(e,v),m(e,g),b&&b.m(g,null),m(g,p),m(g,I),oe(w,I,null),C=Te(e,t[20].bind(e)),m(n,D),m(n,d),m(d,E),t[21](E),V=!0,B||($=[x(Vn,"keydown",t[15]),x(c,"focus",t[16]),x(c,"blur",t[17]),x(c,"input",t[18]),ct(_t.call(null,n))],B=!0)},p(k,[L]){var M,T,j;L&2&&c.value!==k[1]&&Ne(c,k[1]),((M=k[0])==null?void 0:M.address)||k[1]?b?(b.p(k,L),L&3&&N(b,1)):(b=at(k),b.c(),N(b,1),b.m(g,p)):b&&(ve(),H(b,1,1,()=>{b=null}),pe());const W={};L&1024&&(W.icon=k[10]),L&16777737&&(W.$$scope={dirty:L,ctx:k}),w.$set(W),(!V||L&513&&_!==(_=te((T=k[9])!=null&&T.loading?"action dim":(j=k[0])!=null&&j.address?" connected ":" disconnected ")+" svelte-1gf2ryb"))&&o(I,"class",_),(!V||L&32)&&q(e,"--topOffsetHeight",k[5]),(!V||L&8&&!Ve(E.src,A=k[3]))&&o(E,"src",A),(!V||L&8&&O!==(O="clipboard-write 'self' "+k[3]))&&o(E,"allow",O),(!V||L&128)&&q(d,"height",k[7]+"px"),(!V||L&160)&&q(n,"height","calc(var(--spacing) * 2 + "+k[5]+"px + "+k[7]+"px + 2px)"),(!V||L&256)&&q(n,"--url-input-width","calc(var(--spacing) * 2 + "+k[8]+"px + 2px)"),(!V||L&64)&&q(n,"--url-input-min-width",k[6]+"px")},i(k){V||(N(r.$$.fragment,k),N(b),N(w.$$.fragment,k),V=!0)},o(k){H(r.$$.fragment,k),H(b),H(w.$$.fragment,k),V=!1},d(k){k&&u(n),ce(r),b&&b.d(),ce(w),C(),t[21](null),B=!1,Be($)}}}let Wn="Enter Wallet Url";function Hn(t,n,e){let s,l,{wallet:r}=n,{inputUrl:i="https://douganderson444.github.io/iframe-wallet-kit/"}=n,a=i,c,h,f,v,g,p;const I={loading:!0};async function w(){e(9,I.loading=!1,I);const b=bt({iframe:c,methods:{setIframeParentHeight(X){e(7,g=X)},setIframeParentWidth(X){console.log("Rx width",X),e(8,p=X)}}});return e(0,r=await b.promise),r}const _=()=>{e(3,a=""),e(3,a=i),e(9,I.loading=!0,I)},C=()=>r.disconnect(),D=()=>window.open(i);function d(b){b.key==="Enter"&&h&&_()}const E=()=>e(4,h=!0),A=()=>e(4,h=!1);function O(){i=this.value,e(1,i)}const V=()=>{r!=null&&r.address?C():_()};function B(){f=this.offsetHeight,v=this.offsetWidth,e(5,f),e(6,v)}function $(b){Ge[b?"unshift":"push"](()=>{c=b,e(2,c)})}return t.$$set=b=>{"wallet"in b&&e(0,r=b.wallet),"inputUrl"in b&&e(1,i=b.inputUrl)},t.$$.update=()=>{t.$$.dirty&4&&c&&c.addEventListener("load",w),t.$$.dirty&1&&e(11,s=r!=null&&r.keepPopup?"close":"launch"),t.$$.dirty&1&&e(10,l=r!=null&&r.address?"unplug":"plug")},[r,i,c,a,h,f,v,g,p,I,l,s,_,C,D,d,E,A,O,V,B,$]}class On extends ke{constructor(n){super(),De(this,n,Hn,An,Le,{wallet:0,inputUrl:1})}}const jn=On;export{jn as Web3WalletConnector,Tn as Web3WalletMenu,jn as default};