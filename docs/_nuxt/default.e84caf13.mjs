import{f as m,o as l,a as p,b as t,q as e,s as n,t as b,u as s,C as c,x as f,P as v,c as r,v as d,S as $,J as N,D as B}from"./entry.3dda0487.mjs";import{_ as C,a as I,b as j,c as P,d as S}from"./mail.714da602.mjs";const V={class:"navbar bg-base-200"},A={class:"navbar-start"},L=t("div",{class:"flex-none lg:hidden"},[t("label",{class:"btn btn-ghost btn-square",for:"my-drawer-3"},[t("svg",{class:"inline-block h-6 w-6 stroke-current",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M4 6h16M4 12h16M4 18h16","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"})])])],-1),M={class:"font-bold text-secondary"},q={class:"navbar-end hidden text-xl lg:flex"},D={class:"menu menu-horizontal p-0"},F=c(" Blog "),R=c("Projects "),U=c("Resume "),z=m({__name:"Navbar",setup(g){const o=v;return(_,u)=>{const a=f;return l(),p("div",V,[t("div",A,[L,e(a,{class:"hoveranimation btn btn-ghost text-xl normal-case lg:text-3xl",to:"/"},{default:n(()=>[t("h1",M,b(s(o).short_name),1)]),_:1})]),t("div",q,[t("ul",D,[t("li",null,[e(a,{class:"hoveranimation hover:text-accent",to:"/"},{default:n(()=>[F]),_:1})]),t("li",null,[e(a,{class:"hoveranimation hover:text-accent",to:"/"},{default:n(()=>[R]),_:1})]),t("li",null,[e(a,{class:"hoveranimation hover:text-accent",to:"/"},{default:n(()=>[U]),_:1})])])])])}}}),E={class:"footer items-center bg-base-200 p-4"},H={class:"grid-flow-col items-center"},J={class:"grid-flow-col gap-4 md:place-self-center md:justify-self-end"},T=m({__name:"Footer",setup(g){const o=$,_=v;return(u,a)=>{const h=C,i=f,w=I,x=j,k=P,y=S;return l(),p("footer",E,[t("div",H,[t("p",null,"Copyright \xA9 2022 - All right reserved - "+b(s(_).full_name),1)]),t("div",J,[s(_).email!==""?(l(),r(i,{key:0,to:`mailto:${s(_).email}`,target:"_blank"},{default:n(()=>[e(h,{class:"hoveranimation h-6 w-6"})]),_:1},8,["to"])):d("",!0),s(o).twitter!==""?(l(),r(i,{key:1,to:"https://twitter.com/"+s(o).twitter,target:"_blank"},{default:n(()=>[e(w,{class:"hoveranimation h-6 w-6"})]),_:1},8,["to"])):d("",!0),s(o).discord!==""?(l(),r(i,{key:2,to:"https://discordapp.com/users/"+s(o).discord,target:"_blank"},{default:n(()=>[e(x,{class:"hoveranimation h-6 w-6"})]),_:1},8,["to"])):d("",!0),s(o).github!==""?(l(),r(i,{key:3,to:"https://github.com/"+s(o).github,target:"_blank"},{default:n(()=>[e(k,{class:"hoveranimation h-6 w-6"})]),_:1},8,["to"])):d("",!0),s(o).linkedin!==""?(l(),r(i,{key:4,to:"https://www.linkedin.com/in/"+s(o).linkedin,target:"_blank"},{default:n(()=>[e(y,{class:"hoveranimation h-6 w-6"})]),_:1},8,["to"])):d("",!0)])])}}}),G={id:"app-layout"},K={class:"drawer"},O=t("input",{id:"my-drawer-3",type:"checkbox",class:"drawer-toggle"},null,-1),Q={class:"drawer-content flex flex-col"},W={class:"drawer-side"},X=t("label",{for:"my-drawer-3",class:"drawer-overlay"},null,-1),Y={class:"menu w-80 overflow-y-auto bg-base-100 p-4"},Z=c("Blog"),tt=c("Projects"),et=c("Resume"),nt=m({__name:"default",setup(g){return N({bodyAttrs:{class:"no-scrollbar"}}),(o,_)=>{const u=z,a=f,h=T;return l(),p("div",G,[t("main",null,[t("div",K,[O,t("div",Q,[e(u),B(o.$slots,"default")]),t("div",W,[X,t("ul",Y,[t("li",null,[e(a,{to:"/"},{default:n(()=>[Z]),_:1})]),t("li",null,[e(a,{to:"/"},{default:n(()=>[tt]),_:1})]),t("li",null,[e(a,{to:"/"},{default:n(()=>[et]),_:1})])])])])]),t("footer",null,[e(h)])])}}});export{nt as default};