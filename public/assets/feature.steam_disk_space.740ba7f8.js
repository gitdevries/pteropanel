(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{344:function(e,t,n){"use strict";n.r(t);var a=n(4),o=n.n(a),i=n(1),r=n(0),c=n.n(r),s=n(2),m=n(28),l=n(6),d=n(17),u=n(12),p=n(43),f=n(5),h=Object(i.c)(d.a).withConfig({componentId:"sc-1ak76ba-0"})({marginBottom:"1rem"}),g=i.c.div.withConfig({componentId:"sc-1ak76ba-1"})({marginTop:"1rem",alignItems:"center","@media (min-width: 640px)":{display:"flex"}}),b=i.c.h2.withConfig({componentId:"sc-1ak76ba-2"})({fontSize:"1.5rem",lineHeight:"2rem",marginBottom:"1rem","--tw-text-opacity":"1",color:"rgba(228.60750000000002, 231.591, 235.4925, var(--tw-text-opacity))"}),w=i.c.p.withConfig({componentId:"sc-1ak76ba-3"})({marginTop:"1rem"}),k=i.c.p.withConfig({componentId:"sc-1ak76ba-4"})({marginTop:"1rem"}),C=i.c.code.withConfig({componentId:"sc-1ak76ba-5"})({fontFamily:'"IBM Plex Mono", "Source Code Pro", SourceCodePro, Menlo, Monaco, Consolas, monospace',"--tw-bg-opacity":"1",backgroundColor:"rgba(31.008000000000003, 40.8, 50.592, var(--tw-bg-opacity))",borderRadius:"0.25rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",paddingLeft:"0.5rem",paddingRight:"0.5rem"}),v=i.c.div.withConfig({componentId:"sc-1ak76ba-6"})({marginTop:"2rem",alignItems:"center",justifyContent:"flex-end","@media (min-width: 640px)":{display:"flex"}}),E=Object(i.c)(l.b).withConfig({componentId:"sc-1ak76ba-7"})({width:"100%",borderColor:"transparent","@media (min-width: 640px)":{width:"auto"}}),O=i.c.div.withConfig({componentId:"sc-1ak76ba-8"})({marginTop:"1rem",alignItems:"center","@media (min-width: 640px)":{display:"flex"}}),x=i.c.h2.withConfig({componentId:"sc-1ak76ba-9"})({fontSize:"1.5rem",lineHeight:"2rem",marginBottom:"1rem","--tw-text-opacity":"1",color:"rgba(228.60750000000002, 231.591, 235.4925, var(--tw-text-opacity))"}),I=i.c.p.withConfig({componentId:"sc-1ak76ba-10"})({marginTop:"1rem"}),y=i.c.div.withConfig({componentId:"sc-1ak76ba-11"})({marginTop:"2rem",alignItems:"center",justifyContent:"flex-end","@media (min-width: 640px)":{display:"flex"}}),S=Object(i.c)(l.b).withConfig({componentId:"sc-1ak76ba-12"})({width:"100%",borderColor:"transparent","@media (min-width: 640px)":{width:"auto"}});t.default=function(){var e=Object(r.useState)(!1),t=o()(e,2),n=t[0],a=t[1],i=Object(r.useState)(!1),l=o()(i,1)[0],d=s.a.useStoreState((function(e){return e.status.value})),T=Object(u.a)().clearFlashes,j=s.a.useStoreState((function(e){return e.socket})),B=j.connected,L=j.instance,P=Object(f.useStoreState)((function(e){return e.user.data.rootAdmin}));return Object(r.useEffect)((function(){if(B&&L&&"running"!==d){var e=["steamcmd needs 250mb of free disk space to update","0x202 after update job"],t=function(t){e.some((function(e){return t.toLowerCase().includes(e)}))&&a(!0)};return L.addListener(p.a.CONSOLE_OUTPUT,t),function(){L.removeListener(p.a.CONSOLE_OUTPUT,t)}}}),[B,L,d]),Object(r.useEffect)((function(){T("feature:steamDiskSpace")}),[]),c.a.createElement(m.b,{visible:n,onDismissed:function(){return a(!1)},closeOnBackground:!1,showSpinnerOverlay:l},c.a.createElement(h,{key:"feature:steamDiskSpace"}),P?c.a.createElement(c.a.Fragment,null,c.a.createElement(g,null,c.a.createElement(b,null,"Out of available disk space...")),c.a.createElement(w,null,"This server has run out of available disk space and cannot complete the install or update process."),c.a.createElement(k,null,"Ensure the machine has enough disk space by typing ",c.a.createElement(C,null,"df -h")," on the machine hosting this server. Delete files or increase the available disk space to resolve the issue."),c.a.createElement(v,null,c.a.createElement(E,{onClick:function(){return a(!1)}},"Close"))):c.a.createElement(c.a.Fragment,null,c.a.createElement(O,null,c.a.createElement(x,null,"Out of available disk space...")),c.a.createElement(I,null,"This server has run out of available disk space and cannot complete the install or update process. Please get in touch with the administrator(s) and inform them of disk space issues."),c.a.createElement(y,null,c.a.createElement(S,{onClick:function(){return a(!1)}},"Close"))))}}}]);