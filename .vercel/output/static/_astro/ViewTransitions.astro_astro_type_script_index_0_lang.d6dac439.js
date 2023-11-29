import{i as Y}from"./index.2b677b2f.js";var P={exports:{}};(function(e,t){function o(){var c=document.querySelector("[data-toggle-theme]"),s=c?c.getAttribute("data-key"):null;(function(i=localStorage.getItem(s||"theme")){localStorage.getItem(s||"theme")&&(document.documentElement.setAttribute("data-theme",i),c&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(r=>{r.classList.add(c.getAttribute("data-act-class"))}))})(),c&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(i=>{i.addEventListener("click",function(){var r=i.getAttribute("data-toggle-theme");if(r){var a=r.split(",");document.documentElement.getAttribute("data-theme")==a[0]?a.length==1?(document.documentElement.removeAttribute("data-theme"),localStorage.removeItem(s||"theme")):(document.documentElement.setAttribute("data-theme",a[1]),localStorage.setItem(s||"theme",a[1])):(document.documentElement.setAttribute("data-theme",a[0]),localStorage.setItem(s||"theme",a[0]))}[...document.querySelectorAll("[data-toggle-theme]")].forEach(m=>{m.classList.toggle(this.getAttribute("data-act-class"))})})})}function n(){var c=document.querySelector("[data-set-theme='']"),s=c?c.getAttribute("data-key"):null;(function(i=localStorage.getItem(s||"theme")){if(i!=null&&i!="")if(localStorage.getItem(s||"theme")&&localStorage.getItem(s||"theme")!=""){document.documentElement.setAttribute("data-theme",i);var r=document.querySelector("[data-set-theme='"+i.toString()+"']");r&&([...document.querySelectorAll("[data-set-theme]")].forEach(a=>{a.classList.remove(a.getAttribute("data-act-class"))}),r.getAttribute("data-act-class")&&r.classList.add(r.getAttribute("data-act-class")))}else{var r=document.querySelector("[data-set-theme='']");r.getAttribute("data-act-class")&&r.classList.add(r.getAttribute("data-act-class"))}})(),[...document.querySelectorAll("[data-set-theme]")].forEach(i=>{i.addEventListener("click",function(){document.documentElement.setAttribute("data-theme",this.getAttribute("data-set-theme")),localStorage.setItem(s||"theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("[data-set-theme]")].forEach(r=>{r.classList.remove(r.getAttribute("data-act-class"))}),i.getAttribute("data-act-class")&&i.classList.add(i.getAttribute("data-act-class"))})})}function l(){var c=document.querySelector("select[data-choose-theme]"),s=c?c.getAttribute("data-key"):null;(function(i=localStorage.getItem(s||"theme")){if(localStorage.getItem(s||"theme")){document.documentElement.setAttribute("data-theme",i);var r=document.querySelector("select[data-choose-theme] [value='"+i.toString()+"']");r&&[...document.querySelectorAll("select[data-choose-theme] [value='"+i.toString()+"']")].forEach(a=>{a.selected=!0})}})(),c&&[...document.querySelectorAll("select[data-choose-theme]")].forEach(i=>{i.addEventListener("change",function(){document.documentElement.setAttribute("data-theme",this.value),localStorage.setItem(s||"theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("select[data-choose-theme] [value='"+localStorage.getItem(s||"theme")+"']")].forEach(r=>{r.selected=!0})})})}function u(c=!0){c===!0?document.addEventListener("DOMContentLoaded",function(s){o(),l(),n()}):(o(),l(),n())}e.exports={themeChange:u}})(P);var se=P.exports;const K="astro:before-preparation",B="astro:after-preparation",U="astro:before-swap",W="astro:after-swap",V=e=>document.dispatchEvent(new Event(e));class O extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;constructor(t,o,n,l,u,c,s,i,r){super(t,o),this.from=n,this.to=l,this.direction=u,this.navigationType=c,this.sourceElement=s,this.info=i,this.newDocument=r,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0}})}}class j extends O{formData;loader;constructor(t,o,n,l,u,c,s,i,r){super(K,{cancelable:!0},t,o,n,l,u,c,s),this.formData=i,this.loader=r.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class G extends O{direction;viewTransition;swap;constructor(t,o,n){super(U,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument),this.direction=t.direction,this.viewTransition=o,this.swap=n.bind(this,this),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function z(e,t,o,n,l,u,c,s){const i=new j(e,t,o,n,l,u,window.document,c,s);return document.dispatchEvent(i)&&(await i.loader(),i.defaultPrevented||(V(B),i.navigationType!=="traverse"&&S({scrollX,scrollY}))),i}async function J(e,t,o){const n=new G(e,t,o);return document.dispatchEvent(n),n.swap(),n}const S=e=>{history.state&&(history.scrollRestoration="manual",history.replaceState({...history.state,...e},""))},L=!!document.startViewTransition,D=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),v=(e,t)=>e.origin===t.origin&&e.pathname===t.pathname&&e.search===t.search;let p,w,E=!1,M;const H=e=>document.dispatchEvent(new Event(e)),F=()=>H("astro:page-load"),Q=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},b="data-astro-transition-persist",N="data-astro-transition",C="data-astro-transition-fallback";let x,A=0;history.state?(A=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):D()&&(history.replaceState({index:A,scrollX,scrollY},""),history.scrollRestoration="manual");const Z=(e,t)=>{let o=!1,n=!1;return(...l)=>{if(o){n=!0;return}e(...l),o=!0,setTimeout(()=>{n&&(n=!1,e(...l)),o=!1},t)}};async function ee(e,t){try{const o=await fetch(e,t),n=o.headers.get("content-type")?.replace(/;.*$/,"");return n!=="text/html"&&n!=="application/xhtml+xml"?null:{html:await o.text(),redirected:o.redirected?o.url:void 0,mediaType:n}}catch{return null}}function _(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function te(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const n of t.attributes){if(n.name==="src"){const l=new Promise(u=>{o.onload=u});e=e.then(()=>l)}o.setAttribute(n.name,n.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const $=(e,t,o,n)=>{const l=v(t,e);let u=!1;if(e.href!==location.href&&!n)if(o.history==="replace"){const c=history.state;history.replaceState({...o.state,index:c.index,scrollX:c.scrollX,scrollY:c.scrollY},"",e.href)}else history.pushState({...o.state,index:++A,scrollX:0,scrollY:0},"",e.href);p=e,l||(scrollTo({left:0,top:0,behavior:"instant"}),u=!0),n?scrollTo(n.scrollX,n.scrollY):(e.hash?(history.scrollRestoration="auto",location.href=e.href):u||scrollTo({left:0,top:0,behavior:"instant"}),history.scrollRestoration="manual")};function ne(e){const t=[];for(const o of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${b}="${o.getAttribute(b)}"], link[rel=stylesheet][href="${o.getAttribute("href")}"]`)){const n=document.createElement("link");n.setAttribute("rel","preload"),n.setAttribute("as","style"),n.setAttribute("href",o.getAttribute("href")),t.push(new Promise(l=>{["load","error"].forEach(u=>n.addEventListener(u,l)),document.head.append(n)}))}return t}async function I(e,t,o,n){const l=(a,m)=>{const h=a.getAttribute(b),g=h&&m.head.querySelector(`[${b}="${h}"]`);if(g)return g;if(a.matches("link[rel=stylesheet]")){const y=a.getAttribute("href");return m.head.querySelector(`link[rel=stylesheet][href="${y}"]`)}return null},u=()=>{const a=document.activeElement;if(a?.closest(`[${b}]`)){if(a instanceof HTMLInputElement||a instanceof HTMLTextAreaElement){const m=a.selectionStart,h=a.selectionEnd;return{activeElement:a,start:m,end:h}}return{activeElement:a}}else return{activeElement:null}},c=({activeElement:a,start:m,end:h})=>{a&&(a.focus(),(a instanceof HTMLInputElement||a instanceof HTMLTextAreaElement)&&(a.selectionStart=m,a.selectionEnd=h))},s=a=>{const m=document.documentElement,h=[...m.attributes].filter(({name:d})=>(m.removeAttribute(d),d.startsWith("data-astro-")));[...a.newDocument.documentElement.attributes,...h].forEach(({name:d,value:f})=>m.setAttribute(d,f));for(const d of document.scripts)for(const f of a.newDocument.scripts)if(!d.src&&d.textContent===f.textContent||d.src&&d.type===f.type&&d.src===f.src){f.dataset.astroExec="";break}for(const d of Array.from(document.head.children)){const f=l(d,a.newDocument);f?f.remove():d.remove()}document.head.append(...a.newDocument.head.children);const g=document.body,y=u();document.body.replaceWith(a.newDocument.body);for(const d of g.querySelectorAll(`[${b}]`)){const f=d.getAttribute(b),T=document.querySelector(`[${b}="${f}"]`);T&&T.replaceWith(d)}c(y)};async function i(a){function m(d){const f=d.effect;return!f||!(f instanceof KeyframeEffect)||!f.target?!1:window.getComputedStyle(f.target,f.pseudoElement).animationIterationCount==="infinite"}const h=document.getAnimations();document.documentElement.setAttribute(C,a);const y=document.getAnimations().filter(d=>!h.includes(d)&&!m(d));return Promise.all(y.map(d=>d.finished))}if(!E)document.documentElement.setAttribute(N,e.direction),n==="animate"&&await i("old");else throw new DOMException("Transition was skipped");const r=await J(e,w,s);$(r.to,r.from,t,o),H(W),n==="animate"&&!E&&i("new").then(()=>M())}async function X(e,t,o,n,l){const u=l?"traverse":n.history==="replace"?"replace":"push";if(v(t,o)&&!n.formData){u!=="traverse"&&S({scrollX,scrollY}),$(o,t,n,l);return}const c=await z(t,o,e,u,n.sourceElement,n.info,n.formData,i);if(c.defaultPrevented){location.href=o.href;return}function s(r){return r.to.hash===""||!v(r.from,r.to)||r.sourceElement instanceof HTMLFormElement}async function i(r){if(s(r)){const a=r.to.href,m={};r.formData&&(m.method="POST",m.body=r.formData);const h=await ee(a,m);if(h===null){r.preventDefault();return}if(h.redirected&&(r.to=new URL(h.redirected)),x??=new DOMParser,r.newDocument=x.parseFromString(h.html,h.mediaType),r.newDocument.querySelectorAll("noscript").forEach(y=>y.remove()),!r.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!r.formData){r.preventDefault();return}const g=ne(r.newDocument);g.length&&await Promise.all(g)}else{r.newDocument=document;return}}if(E=!1,L)w=document.startViewTransition(async()=>await I(c,n,l));else{const r=(async()=>{await new Promise(a=>setTimeout(a)),await I(c,n,l,_())})();w={updateCallbackDone:r,ready:r,finished:new Promise(a=>M=a),skipTransition:()=>{E=!0}}}w.ready.then(async()=>{await te(),F(),Q()}),w.finished.then(()=>{document.documentElement.removeAttribute(N),document.documentElement.removeAttribute(C)}),await w.ready}async function R(e,t){if(!D()){location.href=e;return}await X("forward",p,new URL(e,location.href),t??{})}function oe(e){if(!D()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,o=t.index,n=o>A?"forward":"back";A=o,X(n,p,new URL(location.href),{},t)}const q=()=>{S({scrollX,scrollY})};{(L||_()!=="none")&&(p=new URL(location.href),addEventListener("popstate",oe),addEventListener("load",F),"onscrollend"in window?addEventListener("scrollend",q):addEventListener("scroll",Z(q,350),{passive:!0}));for(const e of document.scripts)e.dataset.astroExec=""}function re(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function k(e){return e.dataset.astroReload!==void 0}(L||re()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const o=t instanceof HTMLElement?t.target:t.target.baseVal,n=t instanceof HTMLElement?t.href:t.href.baseVal,l=new URL(n,location.href).origin;k(t)||t.hasAttribute("download")||!t.href||o&&o!=="_self"||l!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),R(n,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.querySelector('[name="astro-view-transitions-forms"]')&&document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||k(t))return;const o=t,n=e.submitter,l=new FormData(o);let u=n?.getAttribute("formaction")??o.action??location.pathname;const c=n?.getAttribute("formmethod")??o.method,s={sourceElement:n??o};if(c==="get"){const i=new URLSearchParams(l),r=new URL(u);r.search=i.toString(),u=r.toString()}else s.formData=l;e.preventDefault(),R(u,s)}),Y({prefetchAll:!0}));export{se as t};
