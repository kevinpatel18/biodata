(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{21:function(e,t,a){e.exports=a(37)},31:function(e,t,a){e.exports=a.p+"static/media/WWOAE6918.4bd37930.JPG"},32:function(e,t,a){e.exports=a.p+"static/media/IMG_5512.7575ba17.JPG"},33:function(e,t,a){e.exports=a.p+"static/media/IMAGE-3.65246dae.jpeg"},34:function(e,t,a){e.exports=a.p+"static/media/IMAGE-2.12b54623.jpeg"},35:function(e,t,a){e.exports=a.p+"static/media/IMAGE-1.ab6c4647.jpeg"},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(18),i=a.n(l),c=a(38),o=a(7),s=a(3),m=function(e){var t=e.component,a=e.layout,r=Object(s.a)(e,["component","layout"]);return a=void 0===a?function(e){return n.a.createElement(n.a.Fragment,null,e.children)}:a,n.a.createElement(c.a,Object.assign({},r,{render:function(e){return n.a.createElement(a,null,n.a.createElement(t,e))}}))},d=a(8),u=a(1),v=a.n(u),b=a(12),E=n.a.forwardRef((function(e,t){var a=Object(r.useState)(window.innerHeight),l=Object(d.a)(a,2),i=l[0],c=l[1],o=Object(r.useState)([]),s=Object(d.a)(o,2),m=s[0],u=s[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},E=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),r=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=i-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,r)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(r.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(r.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",h),window.addEventListener("resize",f)),E())}),[m]);var p=function(){v()&&(window.removeEventListener("scroll",h),window.removeEventListener("resize",f))},h=Object(b.throttle)((function(){p(),E()}),30),f=Object(b.throttle)((function(){c(window.innerHeight)}),30);return Object(r.useEffect)((function(){p(),E()}),[i]),n.a.createElement(n.a.Fragment,null,e.children())}));E.propTypes={children:v.a.func.isRequired};var p=E,h=a(9),f=a(2),g=a.n(f),O=function(e){var t=e.className,a=e.navPosition,l=e.hideNav,i=e.hideSignin,c=e.bottomOuterDivider,o=e.bottomDivider,m=Object(s.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),u=Object(r.useState)(!1),v=Object(d.a)(u,2),b=v[0],E=v[1],p=Object(r.useRef)(null),h=Object(r.useRef)(null);Object(r.useEffect)((function(){return b&&f(),document.addEventListener("keydown",N),document.addEventListener("click",j),function(){document.removeEventListener("keydown",N),document.removeEventListener("click",j),O()}}));var f=function(){document.body.classList.add("off-nav-is-active"),p.current.style.maxHeight=p.current.scrollHeight+"px",E(!0)},O=function(){document.body.classList.remove("off-nav-is-active"),p.current&&(p.current.style.maxHeight=null),E(!1)},N=function(e){b&&27===e.keyCode&&O()},j=function(e){p.current&&b&&!p.current.contains(e.target)&&e.target!==h.current&&O()},D=g()("site-header",c&&"has-bottom-divider",t);return n.a.createElement("header",Object.assign({},m,{className:D}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:g()("site-header-inner",o&&"has-bottom-divider")},!l&&n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{ref:h,className:"header-nav-toggle",onClick:b?O:f},n.a.createElement("span",{className:"screen-reader"},"Menu"),n.a.createElement("span",{className:"hamburger"},n.a.createElement("span",{className:"hamburger-inner"}))),n.a.createElement("nav",{ref:p,className:g()("header-nav",b&&"is-active")},n.a.createElement("div",{className:"header-nav-inner"},n.a.createElement("ul",{className:g()("list-reset text-xs",a&&"header-nav-".concat(a))},n.a.createElement("li",null,"Download Bio data")),!i&&n.a.createElement("ul",{className:"list-reset header-nav-right"})))))))};O.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var N=O,j=function(e){var t=e.className,a=Object(s.a)(e,["className"]),r=g()("footer-nav",t);return n.a.createElement("nav",Object.assign({},a,{className:r}),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("h1",{className:"mt-0 mb-12",style:{color:"orange"}},"CONTACT US"),"  ",n.a.createElement("br",null)," ",n.a.createElement("br",null),n.a.createElement("p",{className:"m-0",style:{color:"white",textAlign:"left",fontSize:20}},"Mobile No :  \xa0 7802043155, \xa0 982441296 ",n.a.createElement("br",null)," ",n.a.createElement("br",null),"Email : \xa0 patelviraj908@gmail.com ",n.a.createElement("br",null),n.a.createElement("h6",null," Location :"),n.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7488.588289040296!2d73.1961483413662!3d22.249737164582402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc434423bd9df%3A0xe4252c050ca4b0d4!2sBhakti%20Nagar%2C%20Makarpura%2C%20Vadodara%2C%20Gujarat%20390010!5e0!3m2!1sen!2sin!4v1645249035418!5m2!1sen!2sin",width:"600",height:"450",style:{border:0},allowfullscreen:"",loading:"lazy"})))))},D=function(e){var t=e.className,a=e.topOuterDivider,r=e.topDivider,l=Object(s.a)(e,["className","topOuterDivider","topDivider"]),i=g()("site-footer center-content-mobile",a&&"has-top-divider",t);return n.a.createElement("footer",Object.assign({},l,{className:i}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:g()("site-footer-inner",r&&"has-top-divider")},n.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},n.a.createElement(j,null)))))};D.defaultProps={topOuterDivider:!1,topDivider:!1};var w=D,A=function(e){var t=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(N,{navPosition:"right",className:"reveal-from-bottom"}),n.a.createElement("main",{className:"site-content"},t),n.a.createElement(w,null))},y=a(5),C={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},T=(Object(y.a)({},C.types),Object(y.a)({},C.defaults),{types:Object(y.a)({},C.types,{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(y.a)({},C.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})}),P={types:Object(y.a)({},C.types,{pushLeft:v.a.bool}),defaults:Object(y.a)({},C.defaults,{pushLeft:!1})},L=function(e){var t=e.className,a=e.data,r=e.children,l=e.tag,i=Object(s.a)(e,["className","data","children","tag"]),c=g()("section-header",t),o=l;return n.a.createElement(n.a.Fragment,null,(a.title||a.paragraph)&&n.a.createElement("div",Object.assign({},i,{className:c}),n.a.createElement("div",{className:"container-xs"},r,a.title&&n.a.createElement(o,{className:g()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&n.a.createElement("p",{className:"m-0"},a.paragraph))))};L.defaultProps={children:null,tag:"h2"};var S=L,I=function(e){var t=e.className,a=e.src,l=e.width,i=e.height,c=e.alt,o=Object(s.a)(e,["className","src","width","height","alt"]),m=Object(r.useState)(!1),u=Object(d.a)(m,2),v=u[0],b=u[1],E=Object(r.useRef)(null);Object(r.useEffect)((function(){p(E.current)}),[]);var p=function(e){var t,a,r=document.createElement("img");v||(e.style.display="none",e.before(r),r.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),r.width=e.getAttribute("width"),r.height=e.getAttribute("height"),r.style.opacity="0",e.className&&r.classList.add(e.className),r.remove(),e.style.display="")};return n.a.createElement("img",Object.assign({},o,{ref:E,className:t,src:a,width:l,height:i,alt:c,onLoad:function(){b(!0)}}))};I.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var M=I,x=Object(y.a)({},T.defaults),B=function(e){var t=e.className,r=e.topOuterDivider,l=e.bottomOuterDivider,i=e.topDivider,c=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,b=e.imageFill,E=Object(s.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),p=g()("features-split section",r&&"has-top-divider",l&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),h=g()("features-split-inner section-inner",i&&"has-top-divider",c&&"has-bottom-divider"),f=g()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return n.a.createElement("section",Object.assign({},E,{className:p}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:h},n.a.createElement(S,{data:{title:"BIO DATA",paragraph:"Dr. Viraj Kanubhai Patel"},className:"center-content"}),n.a.createElement("div",{className:f},n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("h3",{className:"mt-0 mb-12",style:{color:"orange"}},"PERSONAL INFORMATION"),n.a.createElement("p",{className:"m-0",style:{color:"white",textAlign:"left"}},"NAME : \xa0 Dr. Viraj Kanubhai Patel",n.a.createElement("br",null),n.a.createElement("br",null),"DATE OF BIRTH :\xa0 24TH March 1996",n.a.createElement("br",null),n.a.createElement("br",null),"BIRTH PLACE : \xa0 Vadodara , Gujarat",n.a.createElement("br",null),n.a.createElement("br",null),"HEIGHT: \xa0 5\u2019 6\u201d",n.a.createElement("br",null),n.a.createElement("br",null),"WEIGHT : \xa0  65 KG",n.a.createElement("br",null),n.a.createElement("br",null),"QULIFICATION: \xa0  BHMS (Bachelor OF Homoeopathic Medicine & Surgery)",n.a.createElement("br",null)," ",n.a.createElement("br",null),"HOBBIE :  \xa0 Music, Cricket, Reading",n.a.createElement("br",null),n.a.createElement("br",null),"OCCUPATION :\xa0   Doctor",n.a.createElement("br",null),n.a.createElement("br",null),"NATIVE :\xa0   AT Maretha, Post Maneja, Vadodara 390013 ",n.a.createElement("br",null),n.a.createElement("br",null),"ADDRESS : \xa0  A/9 Bhaktinagar Socitey, Nr. New Era School, Makarpura Vadodara, 390010",n.a.createElement("br",null))),n.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",b&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(M,{src:a(31),alt:"Features split 01",width:528,height:396}))),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},n.a.createElement("h3",{className:"mt-0 mb-12",style:{color:"orange"}},"FAMILY BACKGROUND"),n.a.createElement("p",{className:"m-0",style:{color:"white",textAlign:"left"}},"FATHER:\xa0 Kanubhai Gordhanbhai Patel ",n.a.createElement("br",null),n.a.createElement("br",null),"OCCUPATION:\xa0 Business ",n.a.createElement("br",null),n.a.createElement("br",null),"MOTHER :\xa0 Ansuyaben Kanubhai Patel ",n.a.createElement("br",null),n.a.createElement("br",null),"OCCUPATION :\xa0 Housewife ",n.a.createElement("br",null),n.a.createElement("br",null),"BROTHER\xa0  Kevin Kanubhai Patel ",n.a.createElement("br",null),n.a.createElement("br",null),"OCCUPATION :\xa0 Study ",n.a.createElement("br",null),n.a.createElement("br",null),"MOSAL :\xa0 Rasulabad ",n.a.createElement("br",null),n.a.createElement("br",null))),n.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",b&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(M,{src:a(32),alt:"Features split 02",width:528,height:396})))))))};B.defaultProps=x;var R=B,F=Object(y.a)({},P.defaults),H=function(e){var t=e.className,r=e.topOuterDivider,l=e.bottomOuterDivider,i=e.topDivider,c=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(s.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=g()("testimonial section",r&&"has-top-divider",l&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),b=g()("testimonial-inner section-inner",i&&"has-top-divider",c&&"has-bottom-divider"),E=g()("tiles-wrap",d&&"push-left");return n.a.createElement("section",Object.assign({},u,{className:v}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:b},n.a.createElement(S,{data:{title:"OTHER IMAGES"},className:"center-content"}),n.a.createElement("div",{className:E},n.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement(M,{src:a(33),alt:"Features split 02",width:528,height:396})))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement(M,{src:a(34),alt:"Features split 02",width:528,height:396})))),n.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement(M,{src:a(35),alt:"Features split 02",width:528,height:396}))))))))};H.defaultProps=F;var k=H,G=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(R,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),n.a.createElement(k,{topDivider:!0}))};h.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/biodata",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var _=function(){var e=Object(r.useRef)(),t=Object(c.d)();return Object(r.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){h.a.set({page:e}),h.a.pageview(e)}(a)}),[t]),n.a.createElement(p,{ref:e,children:function(){return n.a.createElement(c.c,null,n.a.createElement(m,{exact:!0,path:"/",component:G,layout:A}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(36);var K=Object(o.a)();i.a.render(n.a.createElement(c.b,{history:K},n.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.1145acf1.chunk.js.map