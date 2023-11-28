var N={exports:{}};(function(e,t){function o(){var l=document.querySelector("[data-toggle-theme]"),i=l?l.getAttribute("data-key"):null;(function(c=localStorage.getItem(i||"theme")){localStorage.getItem(i||"theme")&&(document.documentElement.setAttribute("data-theme",c),l&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(r=>{r.classList.add(l.getAttribute("data-act-class"))}))})(),l&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(c=>{c.addEventListener("click",function(){var r=c.getAttribute("data-toggle-theme");if(r){var s=r.split(",");document.documentElement.getAttribute("data-theme")==s[0]?s.length==1?(document.documentElement.removeAttribute("data-theme"),localStorage.removeItem(i||"theme")):(document.documentElement.setAttribute("data-theme",s[1]),localStorage.setItem(i||"theme",s[1])):(document.documentElement.setAttribute("data-theme",s[0]),localStorage.setItem(i||"theme",s[0]))}[...document.querySelectorAll("[data-toggle-theme]")].forEach(m=>{m.classList.toggle(this.getAttribute("data-act-class"))})})})}function n(){var l=document.querySelector("[data-set-theme='']"),i=l?l.getAttribute("data-key"):null;(function(c=localStorage.getItem(i||"theme")){if(c!=null&&c!="")if(localStorage.getItem(i||"theme")&&localStorage.getItem(i||"theme")!=""){document.documentElement.setAttribute("data-theme",c);var r=document.querySelector("[data-set-theme='"+c.toString()+"']");r&&([...document.querySelectorAll("[data-set-theme]")].forEach(s=>{s.classList.remove(s.getAttribute("data-act-class"))}),r.getAttribute("data-act-class")&&r.classList.add(r.getAttribute("data-act-class")))}else{var r=document.querySelector("[data-set-theme='']");r.getAttribute("data-act-class")&&r.classList.add(r.getAttribute("data-act-class"))}})(),[...document.querySelectorAll("[data-set-theme]")].forEach(c=>{c.addEventListener("click",function(){document.documentElement.setAttribute("data-theme",this.getAttribute("data-set-theme")),localStorage.setItem(i||"theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("[data-set-theme]")].forEach(r=>{r.classList.remove(r.getAttribute("data-act-class"))}),c.getAttribute("data-act-class")&&c.classList.add(c.getAttribute("data-act-class"))})})}function a(){var l=document.querySelector("select[data-choose-theme]"),i=l?l.getAttribute("data-key"):null;(function(c=localStorage.getItem(i||"theme")){if(localStorage.getItem(i||"theme")){document.documentElement.setAttribute("data-theme",c);var r=document.querySelector("select[data-choose-theme] [value='"+c.toString()+"']");r&&[...document.querySelectorAll("select[data-choose-theme] [value='"+c.toString()+"']")].forEach(s=>{s.selected=!0})}})(),l&&[...document.querySelectorAll("select[data-choose-theme]")].forEach(c=>{c.addEventListener("change",function(){document.documentElement.setAttribute("data-theme",this.value),localStorage.setItem(i||"theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("select[data-choose-theme] [value='"+localStorage.getItem(i||"theme")+"']")].forEach(r=>{r.selected=!0})})})}function u(l=!0){l===!0?document.addEventListener("DOMContentLoaded",function(i){o(),a(),n()}):(o(),a(),n())}e.exports={themeChange:u}})(N);var pe=N.exports;const F=()=>{const e=document.querySelector("#theme-select");e.addEventListener("change",function(){localStorage.setItem("theme",e.value),console.log("theme changed"),document.documentElement.setAttribute("data-theme",e.value)});const t=localStorage.getItem("theme");t&&(e.value=t)};document.addEventListener("astro:page-load",()=>{F()});document.addEventListener("DOMContentLoaded",F);const Q="astro:before-preparation",Z="astro:after-preparation",ee="astro:before-swap",te="astro:after-swap",ne=e=>document.dispatchEvent(new Event(e));class $ extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;constructor(t,o,n,a,u,l,i,c,r){super(t,o),this.from=n,this.to=a,this.direction=u,this.navigationType=l,this.sourceElement=i,this.info=c,this.newDocument=r,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0}})}}class oe extends ${formData;loader;constructor(t,o,n,a,u,l,i,c,r){super(Q,{cancelable:!0},t,o,n,a,u,l,i),this.formData=c,this.loader=r.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class re extends ${direction;viewTransition;swap;constructor(t,o,n){super(ee,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument),this.direction=t.direction,this.viewTransition=o,this.swap=n.bind(this,this),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function ae(e,t,o,n,a,u,l,i){const c=new oe(e,t,o,n,a,u,window.document,l,i);return document.dispatchEvent(c)&&(await c.loader(),c.defaultPrevented||(ne(Z),c.navigationType!=="traverse"&&I({scrollX,scrollY}))),c}async function se(e,t,o){const n=new re(e,t,o);return document.dispatchEvent(n),n.swap(),n}const I=e=>{history.state&&(history.scrollRestoration="manual",history.replaceState({...history.state,...e},""))},x=!!document.startViewTransition,k=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),L=(e,t)=>e.origin===t.origin&&e.pathname===t.pathname&&e.search===t.search;let S,w,p=!1,_;const U=e=>document.dispatchEvent(new Event(e)),B=()=>U("astro:page-load"),ie=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},y="data-astro-transition-persist",V="data-astro-transition",W="data-astro-transition-fallback";let q,v=0;history.state?(v=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):k()&&(history.replaceState({index:v,scrollX,scrollY},""),history.scrollRestoration="manual");const ce=(e,t)=>{let o=!1,n=!1;return(...a)=>{if(o){n=!0;return}e(...a),o=!0,setTimeout(()=>{n&&(n=!1,e(...a)),o=!1},t)}};async function le(e,t){try{const o=await fetch(e,t),n=o.headers.get("content-type")?.replace(/;.*$/,"");return n!=="text/html"&&n!=="application/xhtml+xml"?null:{html:await o.text(),redirected:o.redirected?o.url:void 0,mediaType:n}}catch{return null}}function X(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function ue(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const n of t.attributes){if(n.name==="src"){const a=new Promise(u=>{o.onload=u});e=e.then(()=>a)}o.setAttribute(n.name,n.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const Y=(e,t,o,n)=>{const a=L(t,e);let u=!1;if(e.href!==location.href&&!n)if(o.history==="replace"){const l=history.state;history.replaceState({...o.state,index:l.index,scrollX:l.scrollX,scrollY:l.scrollY},"",e.href)}else history.pushState({...o.state,index:++v,scrollX:0,scrollY:0},"",e.href);S=e,a||(scrollTo({left:0,top:0,behavior:"instant"}),u=!0),n?scrollTo(n.scrollX,n.scrollY):(e.hash?(history.scrollRestoration="auto",location.href=e.href):u||scrollTo({left:0,top:0,behavior:"instant"}),history.scrollRestoration="manual")};function de(e){const t=[];for(const o of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${y}="${o.getAttribute(y)}"], link[rel=stylesheet][href="${o.getAttribute("href")}"]`)){const n=document.createElement("link");n.setAttribute("rel","preload"),n.setAttribute("as","style"),n.setAttribute("href",o.getAttribute("href")),t.push(new Promise(a=>{["load","error"].forEach(u=>n.addEventListener(u,a)),document.head.append(n)}))}return t}async function P(e,t,o,n){const a=(s,m)=>{const h=s.getAttribute(y),g=h&&m.head.querySelector(`[${y}="${h}"]`);if(g)return g;if(s.matches("link[rel=stylesheet]")){const b=s.getAttribute("href");return m.head.querySelector(`link[rel=stylesheet][href="${b}"]`)}return null},u=()=>{const s=document.activeElement;if(s?.closest(`[${y}]`)){if(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement){const m=s.selectionStart,h=s.selectionEnd;return{activeElement:s,start:m,end:h}}return{activeElement:s}}else return{activeElement:null}},l=({activeElement:s,start:m,end:h})=>{s&&(s.focus(),(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement)&&(s.selectionStart=m,s.selectionEnd=h))},i=s=>{const m=document.documentElement,h=[...m.attributes].filter(({name:d})=>(m.removeAttribute(d),d.startsWith("data-astro-")));[...s.newDocument.documentElement.attributes,...h].forEach(({name:d,value:f})=>m.setAttribute(d,f));for(const d of document.scripts)for(const f of s.newDocument.scripts)if(!d.src&&d.textContent===f.textContent||d.src&&d.type===f.type&&d.src===f.src){f.dataset.astroExec="";break}for(const d of Array.from(document.head.children)){const f=a(d,s.newDocument);f?f.remove():d.remove()}document.head.append(...s.newDocument.head.children);const g=document.body,b=u();document.body.replaceWith(s.newDocument.body);for(const d of g.querySelectorAll(`[${y}]`)){const f=d.getAttribute(y),T=document.querySelector(`[${y}="${f}"]`);T&&T.replaceWith(d)}l(b)};async function c(s){function m(d){const f=d.effect;return!f||!(f instanceof KeyframeEffect)||!f.target?!1:window.getComputedStyle(f.target,f.pseudoElement).animationIterationCount==="infinite"}const h=document.getAnimations();document.documentElement.setAttribute(W,s);const b=document.getAnimations().filter(d=>!h.includes(d)&&!m(d));return Promise.all(b.map(d=>d.finished))}if(!p)document.documentElement.setAttribute(V,e.direction),n==="animate"&&await c("old");else throw new DOMException("Transition was skipped");const r=await se(e,w,i);Y(r.to,r.from,t,o),U(te),n==="animate"&&!p&&c("new").then(()=>_())}async function K(e,t,o,n,a){const u=a?"traverse":n.history==="replace"?"replace":"push";if(L(t,o)&&!n.formData){u!=="traverse"&&I({scrollX,scrollY}),Y(o,t,n,a);return}const l=await ae(t,o,e,u,n.sourceElement,n.info,n.formData,c);if(l.defaultPrevented){location.href=o.href;return}function i(r){return r.to.hash===""||!L(r.from,r.to)||r.sourceElement instanceof HTMLFormElement}async function c(r){if(i(r)){const s=r.to.href,m={};r.formData&&(m.method="POST",m.body=r.formData);const h=await le(s,m);if(h===null){r.preventDefault();return}if(h.redirected&&(r.to=new URL(h.redirected)),q??=new DOMParser,r.newDocument=q.parseFromString(h.html,h.mediaType),r.newDocument.querySelectorAll("noscript").forEach(b=>b.remove()),!r.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!r.formData){r.preventDefault();return}const g=de(r.newDocument);g.length&&await Promise.all(g)}else{r.newDocument=document;return}}if(p=!1,x)w=document.startViewTransition(async()=>await P(l,n,a));else{const r=(async()=>{await new Promise(s=>setTimeout(s)),await P(l,n,a,X())})();w={updateCallbackDone:r,ready:r,finished:new Promise(s=>_=s),skipTransition:()=>{p=!0}}}w.ready.then(async()=>{await ue(),B(),ie()}),w.finished.then(()=>{document.documentElement.removeAttribute(V),document.documentElement.removeAttribute(W)}),await w.ready}async function O(e,t){if(!k()){location.href=e;return}await K("forward",S,new URL(e,location.href),t??{})}function me(e){if(!k()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,o=t.index,n=o>v?"forward":"back";v=o,K(n,S,new URL(location.href),{},t)}const M=()=>{I({scrollX,scrollY})};{(x||X()!=="none")&&(S=new URL(location.href),addEventListener("popstate",me),addEventListener("load",B),"onscrollend"in window?addEventListener("scrollend",M):addEventListener("scroll",ce(M,350),{passive:!0}));for(const e of document.scripts)e.dataset.astroExec=""}const j=new Set,E=new WeakSet;let D,G,C=!1;function fe(e){C||(C=!0,D??=e?.prefetchAll??!1,G??=e?.defaultStrategy??"hover",he(),ge(),ye())}function he(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{A(t.target,"tap")&&R(t.target.href,{with:"fetch",ignoreSlowConnection:!0})},{passive:!0})}function ge(){let e;document.body.addEventListener("focusin",n=>{A(n.target,"hover")&&t(n)},{passive:!0}),document.body.addEventListener("focusout",o,{passive:!0}),J(()=>{for(const n of document.getElementsByTagName("a"))E.has(n)||A(n,"hover")&&(E.add(n),n.addEventListener("mouseenter",t,{passive:!0}),n.addEventListener("mouseleave",o,{passive:!0}))});function t(n){const a=n.target.href;e&&clearTimeout(e),e=setTimeout(()=>{R(a,{with:"fetch"})},80)}function o(){e&&(clearTimeout(e),e=0)}}function ye(){let e;J(()=>{for(const t of document.getElementsByTagName("a"))E.has(t)||A(t,"viewport")&&(E.add(t),e??=be(),e.observe(t))})}function be(){const e=new WeakMap;return new IntersectionObserver((t,o)=>{for(const n of t){const a=n.target,u=e.get(a);n.isIntersecting?(u&&clearTimeout(u),e.set(a,setTimeout(()=>{o.unobserve(a),e.delete(a),R(a.href,{with:"link"})},300))):u&&(clearTimeout(u),e.delete(a))}})}function R(e,t){const o=t?.ignoreSlowConnection??!1;if(!we(e,o))return;if(j.add(e),(t?.with??"link")==="link"){const a=document.createElement("link");a.rel="prefetch",a.setAttribute("href",e),document.head.append(a)}else fetch(e).catch(a=>{console.log(`[astro] Failed to prefetch ${e}`),console.error(a)})}function we(e,t){if(!navigator.onLine||!t&&z())return!1;try{const o=new URL(e,location.href);return location.origin===o.origin&&location.pathname!==o.pathname&&!j.has(e)}catch{}return!1}function A(e,t){if(e?.tagName!=="A")return!1;const o=e.dataset.astroPrefetch;return o==="false"?!1:t==="tap"&&(o!=null||D)&&z()?!0:o==null&&D||o===""?t===G:o===t}function z(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/(2|3)g/.test(e.effectiveType)}return!1}function J(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function ve(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function H(e){return e.dataset.astroReload!==void 0}(x||ve()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const o=t instanceof HTMLElement?t.target:t.target.baseVal,n=t instanceof HTMLElement?t.href:t.href.baseVal,a=new URL(n,location.href).origin;H(t)||t.hasAttribute("download")||!t.href||o&&o!=="_self"||a!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),O(n,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.querySelector('[name="astro-view-transitions-forms"]')&&document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||H(t))return;const o=t,n=e.submitter,a=new FormData(o);let u=n?.getAttribute("formaction")??o.action??location.pathname;const l=n?.getAttribute("formmethod")??o.method,i={sourceElement:n??o};if(l==="get"){const c=new URLSearchParams(a),r=new URL(u);r.search=c.toString(),u=r.toString()}else i.formData=a;e.preventDefault(),O(u,i)}),fe({prefetchAll:!0}));export{pe as t};