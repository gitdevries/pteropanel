(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{339:function(e,t,a){"use strict";a.r(t);var n=a(4),i=a.n(n),r=a(1),o=a(0),c=a.n(o),l=a(272),d=a.n(l),s=a(2),m=a(14),p=a(273),u=a.n(p),g=a(35),f=a(7),b=a(43),h=a(67),w=function(e){return{type:"line",options:{legend:{display:!1},tooltips:{enabled:!1},animation:{duration:0},elements:{point:{radius:0},line:{tension:.3,backgroundColor:"rgba(15, 178, 184, 0.45)",borderColor:"#32D0D9"}},scales:{xAxes:[{ticks:{display:!1},gridLines:{display:!1}}],yAxes:[{gridLines:{drawTicks:!1,color:"rgba(229, 232, 235, 0.15)",zeroLineColor:"rgba(15, 178, 184, 0.45)",zeroLineWidth:3},ticks:u()(e||{},{fontSize:10,fontFamily:'"IBM Plex Mono", monospace',fontColor:"rgb(229, 232, 235)",min:0,beginAtZero:!0,maxTicksLimit:5})}]}},data:{labels:Array(20).fill(""),datasets:[{fill:!0,data:Array(20).fill(0)}]}}},x=r.c.div.withConfig({componentId:"sc-19da077-0"})({display:"flex",flexWrap:"wrap",marginTop:"1rem"}),y=r.c.div.withConfig({componentId:"sc-19da077-1"})({width:"100%","@media (min-width: 640px)":{width:"50%"}}),v=Object(r.c)(g.a).withConfig({componentId:"sc-19da077-2"})({marginRight:"0px","@media (min-width: 640px)":{marginRight:"1rem"}}),C=r.c.p.withConfig({componentId:"sc-19da077-3"})({fontSize:"0.75rem",lineHeight:"1rem","--tw-text-opacity":"1",color:"rgba(123.16500000000002, 134.7505, 147.135, var(--tw-text-opacity))",textAlign:"center",padding:"0.75rem"}),S=r.c.div.withConfig({componentId:"sc-19da077-4"})({width:"100%",marginTop:"1rem","@media (min-width: 640px)":{width:"50%",marginTop:"0px"}}),k=Object(r.c)(g.a).withConfig({componentId:"sc-19da077-5"})({marginLeft:"0px","@media (min-width: 640px)":{marginLeft:"1rem"}}),E=r.c.p.withConfig({componentId:"sc-19da077-6"})({fontSize:"0.75rem",lineHeight:"1rem","--tw-text-opacity":"1",color:"rgba(123.16500000000002, 134.7505, 147.135, var(--tw-text-opacity))",textAlign:"center",padding:"0.75rem"});t.default=function(){var e=s.a.useStoreState((function(e){return e.status.value})),t=s.a.useStoreState((function(e){return e.server.data.limits})),a=Object(o.useState)(),n=i()(a,2),r=n[0],l=n[1],p=Object(o.useState)(),u=i()(p,2),g=u[0],O=u[1],j=Object(o.useCallback)((function(e){e&&l(new d.a(e.getContext("2d"),w({callback:function(e){return"".concat(e,"Mb  ")},suggestedMax:t.memory})))}),[]),A=Object(o.useCallback)((function(e){e&&O(new d.a(e.getContext("2d"),w({callback:function(e){return"".concat(e,"%  ")},suggestedMax:t.cpu})))}),[]);return Object(h.a)(b.a.STATS,(function(e){var t={};try{t=JSON.parse(e)}catch(e){return}if(r&&r.data.datasets){var a=r.data.datasets[0].data;a.push(Object(m.b)(t.memory_bytes)),a.shift(),r.update({lazy:!0})}if(g&&g.data.datasets){var n=g.data.datasets[0].data;n.push(t.cpu_absolute),n.shift(),g.update({lazy:!0})}})),c.a.createElement(x,null,c.a.createElement(y,null,c.a.createElement(v,{title:"Memory usage",icon:f.E},"offline"!==e?c.a.createElement("canvas",{id:"memory_chart",ref:j,"aria-label":"Server Memory Usage Graph",role:"img"}):c.a.createElement(C,null,"Server is offline."))),c.a.createElement(S,null,c.a.createElement(k,{title:"CPU usage",icon:f.F},"offline"!==e?c.a.createElement("canvas",{id:"cpu_chart",ref:A,"aria-label":"Server CPU Usage Graph",role:"img"}):c.a.createElement(E,null,"Server is offline."))))}}}]);