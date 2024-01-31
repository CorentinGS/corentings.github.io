import{i as W}from"./index.ZzraLCNQ.js";const O=()=>{const e=document.querySelector("#theme-select");e.addEventListener("change",function(){localStorage.setItem("theme",e.value),console.log("theme changed"),document.documentElement.setAttribute("data-theme",e.value)});const t=localStorage.getItem("theme");t&&(e.value=t)};document.addEventListener("astro:page-load",()=>{O()});document.addEventListener("DOMContentLoaded",O);var M={exports:{}};(function(e,t){function o(){var l=document.querySelector("[data-toggle-theme]"),a=l?l.getAttribute("data-key"):null;(function(n=localStorage.getItem(a||"theme")){localStorage.getItem(a||"theme")&&(document.documentElement.setAttribute("data-theme",n),l&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(c=>{c.classList.add(l.getAttribute("data-act-class"))}))})(),l&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(n=>{n.addEventListener("click",function(){var c=n.getAttribute("data-toggle-theme");if(c){var d=c.split(",");document.documentElement.getAttribute("data-theme")==d[0]?d.length==1?(document.documentElement.removeAttribute("data-theme"),localStorage.removeItem(a||"theme")):(document.documentElement.setAttribute("data-theme",d[1]),localStorage.setItem(a||"theme",d[1])):(document.documentElement.setAttribute("data-theme",d[0]),localStorage.setItem(a||"theme",d[0]))}[...document.querySelectorAll("[data-toggle-theme]")].forEach(i=>{i.classList.toggle(this.getAttribute("data-act-class"))})})})}function r(){var l=document.querySelector("[data-set-theme='']"),a=l?l.getAttribute("data-key"):null;(function(n=localStorage.getItem(a||"theme")){if(n!=null&&n!="")if(localStorage.getItem(a||"theme")&&localStorage.getItem(a||"theme")!=""){document.documentElement.setAttribute("data-theme",n);var c=document.querySelector("[data-set-theme='"+n.toString()+"']");c&&([...document.querySelectorAll("[data-set-theme]")].forEach(d=>{d.classList.remove(d.getAttribute("data-act-class"))}),c.getAttribute("data-act-class")&&c.classList.add(c.getAttribute("data-act-class")))}else{var c=document.querySelector("[data-set-theme='']");c.getAttribute("data-act-class")&&c.classList.add(c.getAttribute("data-act-class"))}})(),[...document.querySelectorAll("[data-set-theme]")].forEach(n=>{n.addEventListener("click",function(){document.documentElement.setAttribute("data-theme",this.getAttribute("data-set-theme")),localStorage.setItem(a||"theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("[data-set-theme]")].forEach(c=>{c.classList.remove(c.getAttribute("data-act-class"))}),n.getAttribute("data-act-class")&&n.classList.add(n.getAttribute("data-act-class"))})})}function s(){var l=document.querySelector("select[data-choose-theme]"),a=l?l.getAttribute("data-key"):null;(function(n=localStorage.getItem(a||"theme")){if(localStorage.getItem(a||"theme")){document.documentElement.setAttribute("data-theme",n);var c=document.querySelector("select[data-choose-theme] [value='"+n.toString()+"']");c&&[...document.querySelectorAll("select[data-choose-theme] [value='"+n.toString()+"']")].forEach(d=>{d.selected=!0})}})(),l&&[...document.querySelectorAll("select[data-choose-theme]")].forEach(n=>{n.addEventListener("change",function(){document.documentElement.setAttribute("data-theme",this.value),localStorage.setItem(a||"theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("select[data-choose-theme] [value='"+localStorage.getItem(a||"theme")+"']")].forEach(c=>{c.selected=!0})})})}function u(l=!0){l===!0?document.addEventListener("DOMContentLoaded",function(a){o(),s(),r()}):(o(),s(),r())}e.exports={themeChange:u}})(M);var V=M.exports;const H=()=>{localStorage.getItem("theme")===null?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme",localStorage.getItem("theme")),console.log("Theme set to "+localStorage.getItem("theme"))};V.themeChange();H();document.addEventListener("astro:after-swap",H);const j="astro:before-preparation",G="astro:after-preparation",z="astro:before-swap",J="astro:after-swap",Q=e=>document.dispatchEvent(new Event(e));class C extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;constructor(t,o,r,s,u,l,a,n,c){super(t,o),this.from=r,this.to=s,this.direction=u,this.navigationType=l,this.sourceElement=a,this.info=n,this.newDocument=c,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0}})}}class Z extends C{formData;loader;constructor(t,o,r,s,u,l,a,n,c){super(j,{cancelable:!0},t,o,r,s,u,l,a),this.formData=n,this.loader=c.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class ee extends C{direction;viewTransition;swap;constructor(t,o,r){super(z,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument),this.direction=t.direction,this.viewTransition=o,this.swap=r.bind(this,this),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function te(e,t,o,r,s,u,l,a){const n=new Z(e,t,o,r,s,u,window.document,l,a);return document.dispatchEvent(n)&&(await n.loader(),n.defaultPrevented||(Q(G),n.navigationType!=="traverse"&&L({scrollX,scrollY}))),n}async function ne(e,t,o){const r=new ee(e,t,o);return document.dispatchEvent(r),r.swap(),r}const oe=history.pushState.bind(history),p=history.replaceState.bind(history),L=e=>{history.state&&(history.scrollRestoration="manual",p({...history.state,...e},""))},I=!!document.startViewTransition,x=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),F=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let S,y,T=!1,N;const _=e=>document.dispatchEvent(new Event(e)),$=()=>_("astro:page-load"),re=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},b="data-astro-transition-persist",U="data-astro-transition",X="data-astro-transition-fallback";let D,A=0;history.state?(A=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):x()&&(p({index:A,scrollX,scrollY},""),history.scrollRestoration="manual");const ae=(e,t)=>{let o=!1,r=!1;return(...s)=>{if(o){r=!0;return}e(...s),o=!0,setTimeout(()=>{r&&(r=!1,e(...s)),o=!1},t)}};async function se(e,t){try{const o=await fetch(e,t),s=(o.headers.get("content-type")??"").split(";",1)[0].trim();return s!=="text/html"&&s!=="application/xhtml+xml"?null:{html:await o.text(),redirected:o.redirected?o.url:void 0,mediaType:s}}catch{return null}}function Y(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function ce(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const o=t.getAttribute("type");if(o&&o!=="module"&&o!=="text/javascript")continue;const r=document.createElement("script");r.innerHTML=t.innerHTML;for(const s of t.attributes){if(s.name==="src"){const u=new Promise(l=>{r.onload=r.onerror=l});e=e.then(()=>u)}r.setAttribute(s.name,s.value)}r.dataset.astroExec="",t.replaceWith(r)}return e}const B=(e,t,o,r,s)=>{const u=F(t,e),l=document.title;document.title=r;let a=!1;if(e.href!==location.href&&!s)if(o.history==="replace"){const n=history.state;p({...o.state,index:n.index,scrollX:n.scrollX,scrollY:n.scrollY},"",e.href)}else oe({...o.state,index:++A,scrollX:0,scrollY:0},"",e.href);if(S=e,u||(scrollTo({left:0,top:0,behavior:"instant"}),a=!0),s)scrollTo(s.scrollX,s.scrollY);else{if(e.hash){history.scrollRestoration="auto";const n=history.state;location.href=e.href,history.state||p(n,"")}else a||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}document.title=l};function ie(e){const t=[];for(const o of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${b}="${o.getAttribute(b)}"], link[rel=stylesheet][href="${o.getAttribute("href")}"]`)){const r=document.createElement("link");r.setAttribute("rel","preload"),r.setAttribute("as","style"),r.setAttribute("href",o.getAttribute("href")),t.push(new Promise(s=>{["load","error"].forEach(u=>r.addEventListener(u,s)),document.head.append(r)}))}return t}async function R(e,t,o,r){const s=(i,h)=>{const g=i.getAttribute(b),E=g&&h.head.querySelector(`[${b}="${g}"]`);if(E)return E;if(i.matches("link[rel=stylesheet]")){const w=i.getAttribute("href");return h.head.querySelector(`link[rel=stylesheet][href="${w}"]`)}return null},u=()=>{const i=document.activeElement;if(i?.closest(`[${b}]`)){if(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement){const h=i.selectionStart,g=i.selectionEnd;return{activeElement:i,start:h,end:g}}return{activeElement:i}}else return{activeElement:null}},l=({activeElement:i,start:h,end:g})=>{i&&(i.focus(),(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement)&&(i.selectionStart=h,i.selectionEnd=g))},a=i=>{const h=document.documentElement,g=[...h.attributes].filter(({name:m})=>(h.removeAttribute(m),m.startsWith("data-astro-")));[...i.newDocument.documentElement.attributes,...g].forEach(({name:m,value:f})=>h.setAttribute(m,f));for(const m of document.scripts)for(const f of i.newDocument.scripts)if(!m.src&&m.textContent===f.textContent||m.src&&m.type===f.type&&m.src===f.src){f.dataset.astroExec="";break}for(const m of Array.from(document.head.children)){const f=s(m,i.newDocument);f?f.remove():m.remove()}document.head.append(...i.newDocument.head.children);const E=document.body,w=u();document.body.replaceWith(i.newDocument.body);for(const m of E.querySelectorAll(`[${b}]`)){const f=m.getAttribute(b),v=document.querySelector(`[${b}="${f}"]`);v&&v.replaceWith(m)}l(w)};async function n(i){function h(m){const f=m.effect;return!f||!(f instanceof KeyframeEffect)||!f.target?!1:window.getComputedStyle(f.target,f.pseudoElement).animationIterationCount==="infinite"}const g=document.getAnimations();document.documentElement.setAttribute(X,i);const w=document.getAnimations().filter(m=>!g.includes(m)&&!h(m));return Promise.all(w.map(m=>m.finished))}if(!T)document.documentElement.setAttribute(U,e.direction),r==="animate"&&await n("old");else throw new DOMException("Transition was skipped");const c=document.title,d=await ne(e,y,a);B(d.to,d.from,t,c,o),_(J),r==="animate"&&!T&&n("new").then(()=>N())}async function K(e,t,o,r,s){if(!x()||location.origin!==o.origin){location.href=o.href;return}const u=s?"traverse":r.history==="replace"?"replace":"push";if(u!=="traverse"&&L({scrollX,scrollY}),F(t,o)&&o.hash){B(o,t,r,document.title,s);return}const l=await te(t,o,e,u,r.sourceElement,r.info,r.formData,a);if(l.defaultPrevented){location.href=o.href;return}async function a(n){const c=n.to.href,d={};if(n.formData){d.method="POST";const g=n.sourceElement instanceof HTMLFormElement?n.sourceElement:n.sourceElement instanceof HTMLElement&&"form"in n.sourceElement?n.sourceElement.form:n.sourceElement?.closest("form");d.body=g?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(n.formData):n.formData}const i=await se(c,d);if(i===null){n.preventDefault();return}if(i.redirected&&(n.to=new URL(i.redirected)),D??=new DOMParser,n.newDocument=D.parseFromString(i.html,i.mediaType),n.newDocument.querySelectorAll("noscript").forEach(g=>g.remove()),!n.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!n.formData){n.preventDefault();return}const h=ie(n.newDocument);h.length&&await Promise.all(h)}if(T=!1,I)y=document.startViewTransition(async()=>await R(l,r,s));else{const n=(async()=>{await new Promise(c=>setTimeout(c)),await R(l,r,s,Y())})();y={updateCallbackDone:n,ready:n,finished:new Promise(c=>N=c),skipTransition:()=>{T=!0}}}y.ready.then(async()=>{await ce(),$(),re()}),y.finished.then(()=>{document.documentElement.removeAttribute(U),document.documentElement.removeAttribute(X)}),await y.ready}async function q(e,t){await K("forward",S,new URL(e,location.href),t??{})}function le(e){if(!x()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,o=t.index,r=o>A?"forward":"back";A=o,K(r,S,new URL(location.href),{},t)}const P=()=>{L({scrollX,scrollY})};{(I||Y()!=="none")&&(S=new URL(location.href),addEventListener("popstate",le),addEventListener("load",$),"onscrollend"in window?addEventListener("scrollend",P):addEventListener("scroll",ae(P,350),{passive:!0}));for(const e of document.scripts)e.dataset.astroExec=""}function ue(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function k(e){return e.dataset.astroReload!==void 0}(I||ue()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const o=t instanceof HTMLElement?t.target:t.target.baseVal,r=t instanceof HTMLElement?t.href:t.href.baseVal,s=new URL(r,location.href).origin;k(t)||t.hasAttribute("download")||!t.href||o&&o!=="_self"||s!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),q(r,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||k(t))return;const o=t,r=e.submitter,s=new FormData(o,r);let u=r?.getAttribute("formaction")??o.action??location.pathname;const l=r?.getAttribute("formmethod")??o.method;if(l==="dialog"||location.origin!==new URL(u,location.href).origin)return;const a={sourceElement:r??o};if(l==="get"){const n=new URLSearchParams(s),c=new URL(u);c.search=n.toString(),u=c.toString()}else a.formData=s;e.preventDefault(),q(u,a)}),W({prefetchAll:!0}));
