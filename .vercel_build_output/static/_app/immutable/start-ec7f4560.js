var rt=Object.defineProperty,at=Object.defineProperties;var it=Object.getOwnPropertyDescriptors;var ae=Object.getOwnPropertySymbols;var De=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable;var ze=(t,e,n)=>e in t?rt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,P=(t,e)=>{for(var n in e||(e={}))De.call(e,n)&&ze(t,n,e[n]);if(ae)for(var n of ae(e))qe.call(e,n)&&ze(t,n,e[n]);return t},te=(t,e)=>at(t,it(e));var Ve=(t,e)=>{var n={};for(var r in t)De.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&ae)for(var r of ae(t))e.indexOf(r)<0&&qe.call(t,r)&&(n[r]=t[r]);return n};import{s as tt,n as _e,S as ot,i as ct,e as lt,c as ft,a as ut,d as z,b as ge,f as T,g as K,t as dt,h as pt,j as ht,k as mt,l as D,m as _t,o as oe,p as q,q as ce,r as V,u as gt,v as wt,w as ye,x as G,y as ke,z as M,A as $e,B as Re,C as F,D as Se,E as Je}from"./chunks/index-c3650d4a.js";const Y=[];function ie(t,e=_e){let n;const r=new Set;function l(s){if(tt(t,s)&&(t=s,n)){const o=!Y.length;for(const i of r)i[1](),Y.push(i,t);if(o){for(let i=0;i<Y.length;i+=2)Y[i][0](Y[i+1]);Y.length=0}}}function f(s){l(s(t))}function u(s,o=_e){const i=[s,o];return r.add(i),r.size===1&&(n=e(l)||_e),s(t),()=>{r.delete(i),r.size===0&&(n(),n=null)}}return{set:l,update:f,subscribe:u}}let Ke="",nt="";function bt(t){Ke=t.base,nt=t.assets||Ke}function yt(t){let e,n,r;const l=[t[1]||{}];var f=t[0][0];function u(s){let o={};for(let i=0;i<l.length;i+=1)o=Se(o,l[i]);return{props:o}}return f&&(e=new f(u())),{c(){e&&G(e.$$.fragment),n=D()},l(s){e&&ke(e.$$.fragment,s),n=D()},m(s,o){e&&M(e,s,o),K(s,n,o),r=!0},p(s,o){const i=o&2?$e(l,[Re(s[1]||{})]):{};if(f!==(f=s[0][0])){if(e){oe();const h=e;q(h.$$.fragment,1,0,()=>{F(h,1)}),ce()}f?(e=new f(u()),G(e.$$.fragment),V(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}else f&&e.$set(i)},i(s){r||(e&&V(e.$$.fragment,s),r=!0)},o(s){e&&q(e.$$.fragment,s),r=!1},d(s){s&&z(n),e&&F(e,s)}}}function vt(t){let e,n,r;const l=[t[1]||{}];var f=t[0][0];function u(s){let o={$$slots:{default:[Et]},$$scope:{ctx:s}};for(let i=0;i<l.length;i+=1)o=Se(o,l[i]);return{props:o}}return f&&(e=new f(u(t))),{c(){e&&G(e.$$.fragment),n=D()},l(s){e&&ke(e.$$.fragment,s),n=D()},m(s,o){e&&M(e,s,o),K(s,n,o),r=!0},p(s,o){const i=o&2?$e(l,[Re(s[1]||{})]):{};if(o&261&&(i.$$scope={dirty:o,ctx:s}),f!==(f=s[0][0])){if(e){oe();const h=e;q(h.$$.fragment,1,0,()=>{F(h,1)}),ce()}f?(e=new f(u(s)),G(e.$$.fragment),V(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}else f&&e.$set(i)},i(s){r||(e&&V(e.$$.fragment,s),r=!0)},o(s){e&&q(e.$$.fragment,s),r=!1},d(s){s&&z(n),e&&F(e,s)}}}function Et(t){let e,n,r;const l=[t[2]||{}];var f=t[0][1];function u(s){let o={};for(let i=0;i<l.length;i+=1)o=Se(o,l[i]);return{props:o}}return f&&(e=new f(u())),{c(){e&&G(e.$$.fragment),n=D()},l(s){e&&ke(e.$$.fragment,s),n=D()},m(s,o){e&&M(e,s,o),K(s,n,o),r=!0},p(s,o){const i=o&4?$e(l,[Re(s[2]||{})]):{};if(f!==(f=s[0][1])){if(e){oe();const h=e;q(h.$$.fragment,1,0,()=>{F(h,1)}),ce()}f?(e=new f(u()),G(e.$$.fragment),V(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}else f&&e.$set(i)},i(s){r||(e&&V(e.$$.fragment,s),r=!0)},o(s){e&&q(e.$$.fragment,s),r=!1},d(s){s&&z(n),e&&F(e,s)}}}function Be(t){let e,n=t[4]&&We(t);return{c(){e=lt("div"),n&&n.c(),this.h()},l(r){e=ft(r,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var l=ut(e);n&&n.l(l),l.forEach(z),this.h()},h(){ge(e,"id","svelte-announcer"),ge(e,"aria-live","assertive"),ge(e,"aria-atomic","true"),T(e,"position","absolute"),T(e,"left","0"),T(e,"top","0"),T(e,"clip","rect(0 0 0 0)"),T(e,"clip-path","inset(50%)"),T(e,"overflow","hidden"),T(e,"white-space","nowrap"),T(e,"width","1px"),T(e,"height","1px")},m(r,l){K(r,e,l),n&&n.m(e,null)},p(r,l){r[4]?n?n.p(r,l):(n=We(r),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(r){r&&z(e),n&&n.d()}}}function We(t){let e;return{c(){e=dt(t[5])},l(n){e=pt(n,t[5])},m(n,r){K(n,e,r)},p(n,r){r&32&&ht(e,n[5])},d(n){n&&z(e)}}}function kt(t){let e,n,r,l,f;const u=[vt,yt],s=[];function o(h,E){return h[0][1]?0:1}e=o(t),n=s[e]=u[e](t);let i=t[3]&&Be(t);return{c(){n.c(),r=mt(),i&&i.c(),l=D()},l(h){n.l(h),r=_t(h),i&&i.l(h),l=D()},m(h,E){s[e].m(h,E),K(h,r,E),i&&i.m(h,E),K(h,l,E),f=!0},p(h,[E]){let C=e;e=o(h),e===C?s[e].p(h,E):(oe(),q(s[C],1,1,()=>{s[C]=null}),ce(),n=s[e],n?n.p(h,E):(n=s[e]=u[e](h),n.c()),V(n,1),n.m(r.parentNode,r)),h[3]?i?i.p(h,E):(i=Be(h),i.c(),i.m(l.parentNode,l)):i&&(i.d(1),i=null)},i(h){f||(V(n),f=!0)},o(h){q(n),f=!1},d(h){s[e].d(h),h&&z(r),i&&i.d(h),h&&z(l)}}}function $t(t,e,n){let{stores:r}=e,{page:l}=e,{components:f}=e,{props_0:u=null}=e,{props_1:s=null}=e;gt("__svelte__",r),wt(r.page.notify);let o=!1,i=!1,h=null;return ye(()=>{const E=r.page.subscribe(()=>{o&&(n(4,i=!0),n(5,h=document.title||"untitled page"))});return n(3,o=!0),E}),t.$$set=E=>{"stores"in E&&n(6,r=E.stores),"page"in E&&n(7,l=E.page),"components"in E&&n(0,f=E.components),"props_0"in E&&n(1,u=E.props_0),"props_1"in E&&n(2,s=E.props_1)},t.$$.update=()=>{t.$$.dirty&192&&r.page.set(l)},[f,u,s,o,i,h,r,l]}class Rt extends ot{constructor(e){super(),ct(this,e,$t,kt,tt,{stores:6,page:7,components:0,props_0:1,props_1:2})}}const St="modulepreload",Ye={},Lt="/_app/immutable/",Ge=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${Lt}${r}`,r in Ye)return;Ye[r]=!0;const l=r.endsWith(".css"),f=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${f}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":St,l||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),l)return new Promise((s,o)=>{u.addEventListener("load",s),u.addEventListener("error",()=>o(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},Ut={},le=[()=>Ge(()=>import("./layout.svelte-8187eef2.js"),["layout.svelte-8187eef2.js","chunks/index-c3650d4a.js"]),()=>Ge(()=>import("./error.svelte-61066a60.js"),["error.svelte-61066a60.js","chunks/index-c3650d4a.js"])],xt={};function Me(t){return t instanceof Error||t&&t.name&&t.message?t:new Error(JSON.stringify(t))}function Fe(t){if(t.fallthrough)throw new Error("fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching");if("maxage"in t)throw new Error("maxage should be replaced with cache: { maxage }");const e=t.status&&t.status>=400&&t.status<=599&&!t.redirect;if(t.error||e){const n=t.status;if(!t.error&&e)return{status:n||500,error:new Error};const r=typeof t.error=="string"?new Error(t.error):t.error;return r instanceof Error?!n||n<400||n>599?(console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500'),{status:500,error:r}):{status:n,error:r}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof r}"`)}}if(t.redirect){if(!t.status||Math.floor(t.status/100)!==3)throw new Error('"redirect" property returned from load() must be accompanied by a 3xx status code');if(typeof t.redirect!="string")throw new Error('"redirect" property returned from load() must be a string')}if(t.dependencies&&(!Array.isArray(t.dependencies)||t.dependencies.some(n=>typeof n!="string")))throw new Error('"dependencies" property returned from load() must be of type string[]');if(t.context)throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');return t}function At(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function Xe(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}function ve(){return{x:pageXOffset,y:pageYOffset}}function He(t){return t.composedPath().find(n=>n instanceof Node&&n.nodeName.toUpperCase()==="A")}function Ze(t){return t instanceof SVGAElement?new URL(t.href.baseVal,document.baseURI):new URL(t.href)}function Qe(t){const e=ie(t);let n=!0;function r(){n=!0,e.update(u=>u)}function l(u){n=!1,e.set(u)}function f(u){let s;return e.subscribe(o=>{(s===void 0||n&&o!==s)&&u(s=o)})}return{notify:r,set:l,subscribe:f}}function Ot(){const{set:t,subscribe:e}=ie(!1),n="1655797992242";let r;async function l(){clearTimeout(r);const u=await fetch(`${nt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(u.ok){const{version:s}=await u.json(),o=s!==n;return o&&(t(!0),clearTimeout(r)),o}else throw new Error(`Version check failed: ${u.status}`)}return{subscribe:e,check:l}}function Pt(t){let e=5381,n=t.length;if(typeof t=="string")for(;n;)e=e*33^t.charCodeAt(--n);else for(;n;)e=e*33^t[--n];return(e>>>0).toString(36)}const Ee=window.fetch;function Ct(t,e){let r=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof t=="string"?t:t.url)}]`;e&&typeof e.body=="string"&&(r+=`[sveltekit\\:data-body="${Pt(e.body)}"]`);const l=document.querySelector(r);if(l&&l.textContent){const f=JSON.parse(l.textContent),{body:u}=f,s=Ve(f,["body"]);return Promise.resolve(new Response(u,s))}return Ee(t,e)}const Nt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function jt(t){const e=[],n=[];let r=!0;return{pattern:t===""?/^\/$/:new RegExp(`^${decodeURIComponent(t).split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/).map((f,u,s)=>{const o=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(f);if(o)return e.push(o[1]),n.push(o[2]),"(?:/(.*))?";const i=u===s.length-1;return f&&"/"+f.split(/\[(.+?)\]/).map((h,E)=>{if(E%2){const[,C,X,B]=Nt.exec(h);return e.push(X),n.push(B),C?"(.*?)":"([^/]+?)"}return i&&h.includes(".")&&(r=!1),h.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${r?"/?":""}$`),names:e,types:n}}function Tt(t,e,n,r){const l={};for(let f=0;f<e.length;f+=1){const u=e[f],s=n[f],o=t[f+1]||"";if(s){const i=r[s];if(!i)throw new Error(`Missing "${s}" param matcher`);if(!i(o))return}l[u]=o}return l}function It(t,e,n){return Object.entries(e).map(([l,[f,u,s]])=>{const{pattern:o,names:i,types:h}=jt(l);return{id:l,exec:E=>{const C=o.exec(E);if(C)return Tt(C,i,h,n)},a:f.map(E=>t[E]),b:u.map(E=>t[E]),has_shadow:!!s}})}const st="sveltekit:scroll",I="sveltekit:index",we=It(le,xt,Ut),zt=le[0](),Dt=le[1](),et={};let ne={};try{ne=JSON.parse(sessionStorage[st])}catch{}function be(t){ne[t]=ve()}function qt({target:t,session:e,base:n,trailing_slash:r}){var Te;const l=new Map,f=[],u={url:Qe({}),page:Qe({}),navigating:ie(null),session:ie(e),updated:Ot()},s={id:null,promise:null},o={before_navigate:[],after_navigate:[]};let i={branch:[],error:null,session_id:0,stuff:et,url:null},h=!1,E=!0,C=!1,X=1,B=null,Le,Ue,xe=!1;u.session.subscribe(async a=>{Ue=a,xe&&(X+=1,pe(new URL(location.href),[],!0))}),xe=!0;let W=!0,N=(Te=history.state)==null?void 0:Te[I];N||(N=Date.now(),history.replaceState(te(P({},history.state),{[I]:N}),"",location.href));const fe=ne[N];fe&&(history.scrollRestoration="manual",scrollTo(fe.x,fe.y));let ue=!1,de,Ae;async function Oe(a,{noscroll:d=!1,replaceState:g=!1,keepfocus:c=!1,state:p={}},w){const k=new URL(a,Xe(document));if(W)return me({url:k,scroll:d?ve():null,keepfocus:c,redirect_chain:w,details:{state:p,replaceState:g},accepted:()=>{},blocked:()=>{}});await Q(k)}async function Pe(a){const d=je(a);if(!d)throw new Error("Attempted to prefetch a URL that does not belong to this app");return s.promise=Ne(d,!1),s.id=d.id,s.promise}async function pe(a,d,g,c,p){var R,L,U;const w=je(a),k=Ae={};let m=w&&await Ne(w,g);if(!m&&a.origin===location.origin&&a.pathname===location.pathname&&(m=await Z({status:404,error:new Error(`Not found: ${a.pathname}`),url:a,routeId:null})),!m)return await Q(a),!1;if(Ae!==k)return!1;if(f.length=0,m.redirect)if(d.length>10||d.includes(a.pathname))m=await Z({status:500,error:new Error("Redirect loop"),url:a,routeId:null});else return W?Oe(new URL(m.redirect,a).href,{},[...d,a.pathname]):await Q(new URL(m.redirect,location.href)),!1;else((L=(R=m.props)==null?void 0:R.page)==null?void 0:L.status)>=400&&await u.updated.check()&&await Q(a);if(C=!0,c&&c.details){const{details:y}=c,v=y.replaceState?0:1;y.state[I]=N+=v,history[y.replaceState?"replaceState":"pushState"](y.state,"",a)}if(h?(i=m.state,m.props.page&&(m.props.page.url=a),Le.$set(m.props)):Ce(m),c){const{scroll:y,keepfocus:v}=c;if(!v){const b=document.body,$=b.getAttribute("tabindex");(U=getSelection())==null||U.removeAllRanges(),b.tabIndex=-1,b.focus({preventScroll:!0}),$!==null?b.setAttribute("tabindex",$):b.removeAttribute("tabindex")}if(await Je(),E){const b=a.hash&&document.getElementById(a.hash.slice(1));y?scrollTo(y.x,y.y):b?b.scrollIntoView():scrollTo(0,0)}}else await Je();s.promise=null,s.id=null,E=!0,m.props.page&&(de=m.props.page);const _=m.state.branch[m.state.branch.length-1];W=(_==null?void 0:_.module.router)!==!1,p&&p(),C=!1}function Ce(a){i=a.state;const d=document.querySelector("style[data-sveltekit]");if(d&&d.remove(),de=a.props.page,Le=new Rt({target:t,props:te(P({},a.props),{stores:u}),hydrate:!0}),W){const g={from:null,to:new URL(location.href)};o.after_navigate.forEach(c=>c(g))}h=!0}async function he({url:a,params:d,stuff:g,branch:c,status:p,error:w,routeId:k}){var v,b;const m=c.filter(Boolean),_=m.find($=>{var x;return(x=$.loaded)==null?void 0:x.redirect}),R={redirect:(v=_==null?void 0:_.loaded)==null?void 0:v.redirect,state:{url:a,params:d,branch:c,error:w,stuff:g,session_id:X},props:{components:m.map($=>$.module.default)}};for(let $=0;$<m.length;$+=1){const x=m[$].loaded;R.props[`props_${$}`]=x?await x.props:null}if(!i.url||a.href!==i.url.href||i.error!==w||i.stuff!==g){R.props.page={error:w,params:d,routeId:k,status:p,stuff:g,url:a};const $=(x,S)=>{Object.defineProperty(R.props.page,x,{get:()=>{throw new Error(`$page.${x} has been replaced by $page.url.${S}`)}})};$("origin","origin"),$("path","pathname"),$("query","searchParams")}const U=m[m.length-1],y=(b=U==null?void 0:U.loaded)==null?void 0:b.cache;if(y){const $=a.pathname+a.search;let x=!1;const S=()=>{l.get($)===R&&l.delete($),O(),clearTimeout(A)},A=setTimeout(S,y.maxage*1e3),O=u.session.subscribe(()=>{x&&S()});x=!0,l.set($,R)}return R}async function H({status:a,error:d,module:g,url:c,params:p,stuff:w,props:k,routeId:m}){const _={module:g,uses:{params:new Set,url:!1,session:!1,stuff:!1,dependencies:new Set},loaded:null,stuff:w};function R(y){const{href:v}=new URL(y,c);_.uses.dependencies.add(v)}k&&_.uses.dependencies.add(c.href);const L={};for(const y in p)Object.defineProperty(L,y,{get(){return _.uses.params.add(y),p[y]},enumerable:!0});const U=Ue;if(g.load){const y={routeId:m,params:L,props:k||{},get url(){return _.uses.url=!0,new Proxy(c,{get:(b,$)=>{if($==="hash")throw new Error("url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component.");return Reflect.get(b,$,b)}})},get session(){return _.uses.session=!0,U},get stuff(){return _.uses.stuff=!0,P({},w)},async fetch(b,$){let x;typeof b=="string"?x=b:(x=b.url,$=P({body:b.method==="GET"||b.method==="HEAD"?void 0:await b.blob(),cache:b.cache,credentials:b.credentials,headers:b.headers,integrity:b.integrity,keepalive:b.keepalive,method:b.method,mode:b.mode,redirect:b.redirect,referrer:b.referrer,referrerPolicy:b.referrerPolicy,signal:b.signal},$));const S=new URL(x,c).href;return R(S),h?Ee(S,$):Ct(x,$)},status:a!=null?a:null,error:d!=null?d:null};let v;if(v=await g.load.call(null,y),!v)throw new Error("load function must return a value");_.loaded=Fe(v),_.loaded.stuff&&(_.stuff=_.loaded.stuff),_.loaded.dependencies&&_.loaded.dependencies.forEach(R)}else k&&(_.loaded=Fe({props:k}));return _}async function Ne({id:a,url:d,params:g,route:c},p){var b,$,x;if(s.id===a&&s.promise)return s.promise;if(!p){const S=l.get(a);if(S)return S}const{a:w,b:k,has_shadow:m}=c,_=i.url&&{url:a!==i.url.pathname+i.url.search,params:Object.keys(g).filter(S=>i.params[S]!==g[S]),session:X!==i.session_id};let R=[],L=et,U=!1,y=200,v=null;w.forEach(S=>S().catch(()=>{}));e:for(let S=0;S<w.length;S+=1){let A;try{if(!w[S])continue;const O=await w[S](),j=i.branch[S];if(!j||O!==j.module||_.url&&j.uses.url||_.params.some(J=>j.uses.params.has(J))||_.session&&j.uses.session||Array.from(j.uses.dependencies).some(J=>f.some(re=>re(J)))||U&&j.uses.stuff){let J={};const re=m&&S===w.length-1;if(re){const ee=await Ee(`${d.pathname}${d.pathname.endsWith("/")?"":"/"}__data.json${d.search}`,{headers:{"x-sveltekit-load":"true"}});if(ee.ok){const Ie=ee.headers.get("x-sveltekit-location");if(Ie)return{redirect:Ie,props:{},state:i};J=ee.status===204?{}:await ee.json()}else y=ee.status,v=new Error("Failed to load data")}if(v||(A=await H({module:O,url:d,params:g,props:J,stuff:L,routeId:c.id})),A&&(re&&(A.uses.url=!0),A.loaded)){if(A.loaded.error&&(y=A.loaded.status,v=A.loaded.error),A.loaded.redirect)return{redirect:A.loaded.redirect,props:{},state:i};A.loaded.stuff&&(U=!0)}}else A=j}catch(O){y=500,v=Me(O)}if(v){for(;S--;)if(k[S]){let O,j,se=S;for(;!(j=R[se]);)se-=1;try{if(O=await H({status:y,error:v,module:await k[S](),url:d,params:g,stuff:j.stuff,routeId:c.id}),(b=O==null?void 0:O.loaded)!=null&&b.error)continue;($=O==null?void 0:O.loaded)!=null&&$.stuff&&(L=P(P({},L),O.loaded.stuff)),R=R.slice(0,se+1).concat(O);break e}catch{continue}}return await Z({status:y,error:v,url:d,routeId:c.id})}else(x=A==null?void 0:A.loaded)!=null&&x.stuff&&(L=P(P({},L),A.loaded.stuff)),R.push(A)}return await he({url:d,params:g,stuff:L,branch:R,status:y,error:v,routeId:c.id})}async function Z({status:a,error:d,url:g,routeId:c}){var m,_;const p={},w=await H({module:await zt,url:g,params:p,stuff:{},routeId:c}),k=await H({status:a,error:d,module:await Dt,url:g,params:p,stuff:w&&w.loaded&&w.loaded.stuff||{},routeId:c});return await he({url:g,params:p,stuff:P(P({},(m=w==null?void 0:w.loaded)==null?void 0:m.stuff),(_=k==null?void 0:k.loaded)==null?void 0:_.stuff),branch:[w,k],status:a,error:d,routeId:c})}function je(a){if(a.origin!==location.origin||!a.pathname.startsWith(n))return;const d=decodeURI(a.pathname.slice(n.length)||"/");for(const g of we){const c=g.exec(d);if(c)return{id:a.pathname+a.search,route:g,params:c,url:a}}}async function me({url:a,scroll:d,keepfocus:g,redirect_chain:c,details:p,accepted:w,blocked:k}){const m=i.url;let _=!1;const R={from:m,to:a,cancel:()=>_=!0};if(o.before_navigate.forEach(y=>y(R)),_){k();return}const L=At(a.pathname,r),U=new URL(a.origin+L+a.search+a.hash);be(N),w(),h&&u.navigating.set({from:i.url,to:U}),await pe(U,c,!1,{scroll:d,keepfocus:g,details:p},()=>{const y={from:m,to:U};o.after_navigate.forEach(v=>v(y)),u.navigating.set(null)})}function Q(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{ye(()=>(o.after_navigate.push(a),()=>{const d=o.after_navigate.indexOf(a);o.after_navigate.splice(d,1)}))},before_navigate:a=>{ye(()=>(o.before_navigate.push(a),()=>{const d=o.before_navigate.indexOf(a);o.before_navigate.splice(d,1)}))},disable_scroll_handling:()=>{(C||!h)&&(E=!1)},goto:(a,d={})=>Oe(a,d,[]),invalidate:a=>{if(typeof a=="function")f.push(a);else{const{href:d}=new URL(a,location.href);f.push(g=>g===d)}return B||(B=Promise.resolve().then(async()=>{await pe(new URL(location.href),[],!0),B=null})),B},prefetch:async a=>{const d=new URL(a,Xe(document));await Pe(d)},prefetch_routes:async a=>{const g=(a?we.filter(c=>a.some(p=>c.exec(p))):we).map(c=>Promise.all(c.a.map(p=>p())));await Promise.all(g)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",c=>{let p=!1;const w={from:i.url,to:null,cancel:()=>p=!0};o.before_navigate.forEach(k=>k(w)),p?(c.preventDefault(),c.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){be(N);try{sessionStorage[st]=JSON.stringify(ne)}catch{}}});const a=c=>{const p=He(c);p&&p.href&&p.hasAttribute("sveltekit:prefetch")&&Pe(Ze(p))};let d;const g=c=>{clearTimeout(d),d=setTimeout(()=>{var p;(p=c.target)==null||p.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",g),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",c=>{if(!W||c.button||c.which!==1||c.metaKey||c.ctrlKey||c.shiftKey||c.altKey||c.defaultPrevented)return;const p=He(c);if(!p||!p.href)return;const w=p instanceof SVGAElement,k=Ze(p);if(!w&&k.origin==="null")return;const m=(p.getAttribute("rel")||"").split(/\s+/);if(p.hasAttribute("download")||m.includes("external")||p.hasAttribute("sveltekit:reload")||(w?p.target.baseVal:p.target))return;const[_,R]=k.href.split("#");if(R!==void 0&&_===location.href.split("#")[0]){ue=!0,be(N),u.page.set(te(P({},de),{url:k})),u.page.notify();return}me({url:k,scroll:p.hasAttribute("sveltekit:noscroll")?ve():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:k.href===location.href},accepted:()=>c.preventDefault(),blocked:()=>c.preventDefault()})}),addEventListener("popstate",c=>{if(c.state&&W){if(c.state[I]===N)return;me({url:new URL(location.href),scroll:ne[c.state[I]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{N=c.state[I]},blocked:()=>{const p=N-c.state[I];history.go(p)}})}}),addEventListener("hashchange",()=>{ue&&(ue=!1,history.replaceState(te(P({},history.state),{[I]:++N}),"",location.href))})},_hydrate:async({status:a,error:d,nodes:g,params:c,routeId:p})=>{const w=new URL(location.href),k=[];let m={},_,R;try{for(let L=0;L<g.length;L+=1){const U=L===g.length-1;let y;if(U){const b=document.querySelector('script[sveltekit\\:data-type="props"]');b&&(y=JSON.parse(b.textContent))}const v=await H({module:await le[g[L]](),url:w,params:c,stuff:m,status:U?a:void 0,error:U?d:void 0,props:y,routeId:p});if(y&&(v.uses.dependencies.add(w.href),v.uses.url=!0),k.push(v),v&&v.loaded)if(v.loaded.error){if(d)throw v.loaded.error;R={status:v.loaded.status,error:v.loaded.error,url:w,routeId:p}}else v.loaded.stuff&&(m=P(P({},m),v.loaded.stuff))}_=R?await Z(R):await he({url:w,params:c,stuff:m,branch:k,status:a,error:d,routeId:p})}catch(L){if(d)throw L;_=await Z({status:500,error:Me(L),url:w,routeId:p})}_.redirect&&await Q(new URL(_.redirect,location.href)),Ce(_)}}}async function Kt({paths:t,target:e,session:n,route:r,spa:l,trailing_slash:f,hydrate:u}){const s=qt({target:e,session:n,base:t.base,trailing_slash:f});bt(t),u&&await s._hydrate(u),r&&(l&&s.goto(location.href,{replaceState:!0}),s._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Kt as start};
