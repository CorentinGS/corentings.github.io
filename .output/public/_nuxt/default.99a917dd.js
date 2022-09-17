import{e as b,v as y,o as r,a as p,F as E,l as $,b as e,t as w,f as s,w as i,u as c,E as v,P as k,i as x,c as g,m as f,C,k as I,r as L}from"./entry.4bfd6a64.js";import{_ as q,a as N,b as B,c as G,d as V}from"./mail.357278e5.js";var A={exports:{}};(function(h,a){function d(){var t=document.querySelector("[data-toggle-theme]");(function(o=localStorage.getItem("theme")){localStorage.getItem("theme")&&(document.documentElement.setAttribute("data-theme",o),t&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(l=>{l.classList.add(t.getAttribute("data-act-class"))}))})(),t&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(o=>{o.addEventListener("click",function(){var l=o.getAttribute("data-toggle-theme");if(l){var u=l.split(",");document.documentElement.getAttribute("data-theme")==u[0]?u.length==1?(document.documentElement.removeAttribute("data-theme"),localStorage.removeItem("theme")):(document.documentElement.setAttribute("data-theme",u[1]),localStorage.setItem("theme",u[1])):(document.documentElement.setAttribute("data-theme",u[0]),localStorage.setItem("theme",u[0]))}[...document.querySelectorAll("[data-toggle-theme]")].forEach(S=>{S.classList.toggle(this.getAttribute("data-act-class"))})})})}function m(){(function(t=localStorage.getItem("theme")){if(t!=null&&t!="")if(localStorage.getItem("theme")&&localStorage.getItem("theme")!=""){document.documentElement.setAttribute("data-theme",t);var o=document.querySelector("[data-set-theme='"+t.toString()+"']");o&&([...document.querySelectorAll("[data-set-theme]")].forEach(l=>{l.classList.remove(l.getAttribute("data-act-class"))}),o.getAttribute("data-act-class")&&o.classList.add(o.getAttribute("data-act-class")))}else{var o=document.querySelector("[data-set-theme='']");o.getAttribute("data-act-class")&&o.classList.add(o.getAttribute("data-act-class"))}})(),[...document.querySelectorAll("[data-set-theme]")].forEach(t=>{t.addEventListener("click",function(){document.documentElement.setAttribute("data-theme",this.getAttribute("data-set-theme")),localStorage.setItem("theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("[data-set-theme]")].forEach(o=>{o.classList.remove(o.getAttribute("data-act-class"))}),t.getAttribute("data-act-class")&&t.classList.add(t.getAttribute("data-act-class"))})})}function n(){(function(t=localStorage.getItem("theme")){if(localStorage.getItem("theme")){document.documentElement.setAttribute("data-theme",t);var o=document.querySelector("select[data-choose-theme] [value='"+t.toString()+"']");o&&[...document.querySelectorAll("select[data-choose-theme] [value='"+t.toString()+"']")].forEach(l=>{l.selected=!0})}})(),document.querySelector("select[data-choose-theme]")&&[...document.querySelectorAll("select[data-choose-theme]")].forEach(t=>{t.addEventListener("change",function(){document.documentElement.setAttribute("data-theme",this.value),localStorage.setItem("theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("select[data-choose-theme] [value='"+localStorage.getItem("theme")+"']")].forEach(o=>{o.selected=!0})})})}function _(t=!0){t===!0?document.addEventListener("DOMContentLoaded",function(o){d(),n(),m()}):(d(),n(),m())}h.exports={themeChange:_}})(A);const M={"data-choose-theme":"",class:"select select-bordered select-secondary select-md w-full max-w-xs bg-base-200 text-base-content"},F=e("option",{disabled:"",selected:""},"Pick your theme",-1),T=["value"],P=b({__name:"ThemeSwitcher",setup(h){const a=["corporate","dark","night","fantasy","cupcake","forest","coffee","business","dracula","pastel","memnix"];return y(()=>{A.exports.themeChange(!1)}),(d,m)=>(r(),p("select",M,[F,(r(),p(E,null,$(a,n=>e("option",{value:n},w(n),9,T)),64))]))}}),U={class:"navbar bg-base-200"},j={class:"navbar-start"},D=e("div",{class:"flex-none lg:hidden"},[e("label",{class:"btn btn-ghost btn-square",for:"my-drawer-3"},[e("svg",{class:"inline-block h-6 w-6 stroke-current",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M4 6h16M4 12h16M4 18h16","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"})])])],-1),R={class:"font-bold text-secondary"},z={class:"navbar-end hidden text-xl lg:flex"},H={class:"menu menu-horizontal p-0"},O={class:"px-3"},J=v(" Blog "),K=v(" Resume "),Q=b({__name:"Navbar",setup(h){const a=k;return(d,m)=>{const n=x,_=P;return r(),p("div",U,[e("div",j,[D,s(n,{class:"hoveranimation btn btn-ghost text-xl normal-case lg:text-3xl",to:"/"},{default:i(()=>[e("h1",R,w(c(a).short_name),1)]),_:1})]),e("div",z,[e("ul",H,[e("li",O,[s(_)]),e("li",null,[s(n,{class:"hoveranimation hover:text-accent",to:"/blog"},{default:i(()=>[J]),_:1})]),e("li",null,[s(n,{class:"hoveranimation hover:text-accent",to:"https://github.com/CorentinGS/CorentinGS/blob/main/CorentinGS%20CV.pdf",target:"_blank",rel:"noopener noreferrer"},{default:i(()=>[K]),_:1})])])])])}}}),W={class:"footer items-center bg-base-200 p-4"},X={class:"grid-flow-col items-center"},Y={class:"grid-flow-col gap-4 md:place-self-center md:justify-self-end"},Z=b({__name:"Footer",setup(h){const a=C,d=k;return(m,n)=>{const _=q,t=x,o=N,l=B,u=G,S=V;return r(),p("footer",W,[e("div",X,[e("p",null,"Copyright \xA9 2022 - All right reserved - "+w(c(d).full_name),1)]),e("div",Y,[c(d).email!==""?(r(),g(t,{key:0,to:`mailto:${c(d).email}`,target:"_blank"},{default:i(()=>[s(_,{class:"hoveranimation h-6 w-6"})]),_:1},8,["to"])):f("",!0),c(a).twitter!==""?(r(),g(t,{key:1,to:"https://twitter.com/"+c(a).twitter,target:"_blank"},{default:i(()=>[s(o,{class:"hoveranimation h-6 w-6"})]),_:1},8,["to"])):f("",!0),c(a).discord!==""?(r(),g(t,{key:2,to:"https://discordapp.com/users/"+c(a).discord,target:"_blank"},{default:i(()=>[s(l,{class:"hoveranimation h-6 w-6"})]),_:1},8,["to"])):f("",!0),c(a).github!==""?(r(),g(t,{key:3,to:"https://github.com/"+c(a).github,target:"_blank"},{default:i(()=>[s(u,{class:"hoveranimation h-6 w-6"})]),_:1},8,["to"])):f("",!0),c(a).linkedin!==""?(r(),g(t,{key:4,to:"https://www.linkedin.com/in/"+c(a).linkedin,target:"_blank"},{default:i(()=>[s(S,{class:"hoveranimation h-6 w-6"})]),_:1},8,["to"])):f("",!0)])])}}}),tt={id:"app-layout"},et={class:"drawer"},ot=e("input",{id:"my-drawer-3",class:"drawer-toggle",type:"checkbox"},null,-1),at={class:"drawer-content flex flex-col"},nt={class:"drawer-side"},st=e("label",{class:"drawer-overlay",for:"my-drawer-3"},null,-1),ct={class:"menu w-80 overflow-y-auto bg-base-100 p-4"},lt=v("Blog"),rt=v("Resume "),ut=b({__name:"default",setup(h){return I({bodyAttrs:{class:"no-scrollbar"}}),(a,d)=>{const m=Q,n=x,_=Z;return r(),p("div",tt,[e("main",null,[e("div",et,[ot,e("div",at,[s(m),L(a.$slots,"default")]),e("div",nt,[st,e("ul",ct,[e("li",null,[s(n,{to:"/blog"},{default:i(()=>[lt]),_:1})]),e("li",null,[s(n,{rel:"noopener noreferrer",target:"_blank",to:"https://github.com/CorentinGS/CorentinGS/blob/main/CorentinGS%20CV.pdf"},{default:i(()=>[rt]),_:1})])])])])]),e("footer",null,[s(_)])])}}});export{ut as default};
