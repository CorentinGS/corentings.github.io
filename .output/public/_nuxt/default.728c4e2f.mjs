import{e as h,o as s,a as m,b as t,f as n,w as a,t as b,u as o,E as g,P as w,i as p,c as i,m as _,C as $,k as C,r as N}from"./entry.6611484c.mjs";import{_ as S,a as B,b as G,c as V,d as I}from"./mail.6771eeda.mjs";const A={class:"navbar bg-base-200"},L={class:"navbar-start"},M=t("div",{class:"flex-none lg:hidden"},[t("label",{class:"btn btn-ghost btn-square",for:"my-drawer-3"},[t("svg",{class:"inline-block h-6 w-6 stroke-current",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M4 6h16M4 12h16M4 18h16","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"})])])],-1),j={class:"font-bold text-secondary"},E={class:"navbar-end hidden text-xl lg:flex"},F={class:"menu menu-horizontal p-0"},P=t("li",null,[t("a",{class:"hoveranimation hover:text-accent",href:"/blog"}," Blog ")],-1),R=g(" Resume "),U=h({__name:"Navbar",setup(f){const e=w;return(l,d)=>{const r=p;return s(),m("div",A,[t("div",L,[M,n(r,{class:"hoveranimation btn btn-ghost text-xl normal-case lg:text-3xl",to:"/"},{default:a(()=>[t("h1",j,b(o(e).short_name),1)]),_:1})]),t("div",E,[t("ul",F,[P,t("li",null,[n(r,{class:"hoveranimation hover:text-accent",to:"https://github.com/CorentinGS/CorentinGS/blob/main/CorentinGS%20CV.pdf",target:"_blank",rel:"noopener noreferrer"},{default:a(()=>[R]),_:1})])])])])}}}),q={class:"footer items-center bg-base-200 p-4"},z={class:"grid-flow-col items-center"},D={class:"grid-flow-col gap-4 md:place-self-center md:justify-self-end"},H=h({__name:"Footer",setup(f){const e=$,l=w;return(d,r)=>{const u=S,c=p,v=B,k=G,x=V,y=I;return s(),m("footer",q,[t("div",z,[t("p",null,"Copyright \xA9 2022 - All right reserved - "+b(o(l).full_name),1)]),t("div",D,[o(l).email!==""?(s(),i(c,{key:0,to:`mailto:${o(l).email}`,target:"_blank"},{default:a(()=>[n(u,{class:"hoveranimation h-6 w-6"})]),_:1},8,["to"])):_("",!0),o(e).twitter!==""?(s(),i(c,{key:1,to:"https://twitter.com/"+o(e).twitter,target:"_blank"},{default:a(()=>[n(v,{class:"hoveranimation h-6 w-6"})]),_:1},8,["to"])):_("",!0),o(e).discord!==""?(s(),i(c,{key:2,to:"https://discordapp.com/users/"+o(e).discord,target:"_blank"},{default:a(()=>[n(k,{class:"hoveranimation h-6 w-6"})]),_:1},8,["to"])):_("",!0),o(e).github!==""?(s(),i(c,{key:3,to:"https://github.com/"+o(e).github,target:"_blank"},{default:a(()=>[n(x,{class:"hoveranimation h-6 w-6"})]),_:1},8,["to"])):_("",!0),o(e).linkedin!==""?(s(),i(c,{key:4,to:"https://www.linkedin.com/in/"+o(e).linkedin,target:"_blank"},{default:a(()=>[n(y,{class:"hoveranimation h-6 w-6"})]),_:1},8,["to"])):_("",!0)])])}}}),T={id:"app-layout"},J={class:"drawer"},K=t("input",{id:"my-drawer-3",class:"drawer-toggle",type:"checkbox"},null,-1),O={class:"drawer-content flex flex-col"},Q={class:"drawer-side"},W=t("label",{class:"drawer-overlay",for:"my-drawer-3"},null,-1),X={class:"menu w-80 overflow-y-auto bg-base-100 p-4"},Y=t("li",null,[t("a",{href:"/blog"},"Blog")],-1),Z=g("Resume "),ot=h({__name:"default",setup(f){return C({bodyAttrs:{class:"no-scrollbar"}}),(e,l)=>{const d=U,r=p,u=H;return s(),m("div",T,[t("main",null,[t("div",J,[K,t("div",O,[n(d),N(e.$slots,"default")]),t("div",Q,[W,t("ul",X,[Y,t("li",null,[n(r,{rel:"noopener noreferrer",target:"_blank",to:"https://github.com/CorentinGS/CorentinGS/blob/main/CorentinGS%20CV.pdf"},{default:a(()=>[Z]),_:1})])])])])]),t("footer",null,[n(u)])])}}});export{ot as default};
