(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/trailer.06ebb184.mp4"},26:function(e,t,a){e.exports=a(45)},36:function(e,t,a){e.exports=a.p+"static/media/studiologo_black.acfb8ae2.jpeg"},37:function(e,t,a){e.exports=a.p+"static/media/trailer-placeholder.84d4071b.png"},38:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-04.836acd10.svg"},39:function(e,t,a){e.exports=a.p+"static/media/unreal-engine.b36a5d3b.svg"},40:function(e,t,a){e.exports=a.p+"static/media/puzzle.a2f03481.svg"},41:function(e,t,a){e.exports=a.p+"static/media/display1.d985e4c9.png"},42:function(e,t,a){e.exports=a.p+"static/media/display2.5fe17d32.png"},43:function(e,t,a){e.exports=a.p+"static/media/display3.31b3b2fb.png"},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(22),l=a.n(n),o=a(10),s=a(6),c=a(2),m=function(e){var t=e.component,a=e.layout,i=Object(c.a)(e,["component","layout"]);return a=void 0===a?function(e){return r.a.createElement(r.a.Fragment,null,e.children)}:a,r.a.createElement(o.a,Object.assign({},i,{render:function(e){return r.a.createElement(a,null,r.a.createElement(t,e))}}))},d=a(9),u=a(3),v=a.n(u),p=a(17),h=r.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),n=Object(d.a)(a,2),l=n[0],o=n[1],s=Object(i.useState)([]),c=Object(d.a)(s,2),m=c[0],u=c[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},h=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=l-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",f),window.addEventListener("resize",g)),h())}),[m]);var b=function(){v()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",g))},f=Object(p.throttle)((function(){b(),h()}),30),g=Object(p.throttle)((function(){o(window.innerHeight)}),30);return Object(i.useEffect)((function(){b(),h()}),[l]),r.a.createElement(r.a.Fragment,null,e.children())}));h.propTypes={children:v.a.func.isRequired};var b=h,f=a(13),g=a(1),E=a.n(g),N=a(11),O=function(e){var t=e.className,a=e.src,n=e.width,l=e.height,o=e.alt,s=Object(c.a)(e,["className","src","width","height","alt"]),m=Object(i.useState)(!1),u=Object(d.a)(m,2),v=u[0],p=u[1],h=Object(i.useRef)(null);Object(i.useEffect)((function(){b(h.current)}),[]);var b=function(e){var t,a,i=document.createElement("img");v||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return r.a.createElement("img",Object.assign({},s,{ref:h,className:t,src:a,width:n,height:l,alt:o,onLoad:function(){p(!0)}}))};O.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var w=O,y=function(e){var t=e.className,i=Object(c.a)(e,["className"]),n=E()("brand",t);return r.a.createElement("div",Object.assign({},i,{className:n}),r.a.createElement("h1",{className:"m-0"},r.a.createElement(N.a,{to:"/"},r.a.createElement(w,{src:a(36),alt:"Open",width:125,height:58}))))},D=function(e){var t=e.className,a=e.navPosition,n=e.hideNav,l=e.hideSignin,o=e.bottomOuterDivider,s=e.bottomDivider,m=Object(c.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),u=Object(i.useState)(!1),v=Object(d.a)(u,2),p=v[0],h=v[1],b=Object(i.useRef)(null),f=Object(i.useRef)(null);Object(i.useEffect)((function(){return p&&g(),document.addEventListener("keydown",O),document.addEventListener("click",w),function(){document.removeEventListener("keydown",O),document.removeEventListener("click",w),N()}}));var g=function(){document.body.classList.add("off-nav-is-active"),b.current.style.maxHeight=b.current.scrollHeight+"px",h(!0)},N=function(){document.body.classList.remove("off-nav-is-active"),b.current&&(b.current.style.maxHeight=null),h(!1)},O=function(e){p&&27===e.keyCode&&N()},w=function(e){b.current&&p&&!b.current.contains(e.target)&&e.target!==f.current&&N()},y=E()("site-header",o&&"has-bottom-divider",t);return r.a.createElement("header",Object.assign({},m,{className:y}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:E()("site-header-inner",s&&"has-bottom-divider")},!n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{ref:f,className:"header-nav-toggle",onClick:p?N:g},r.a.createElement("span",{className:"screen-reader"},"Menu"),r.a.createElement("span",{className:"hamburger"},r.a.createElement("span",{className:"hamburger-inner"}))),r.a.createElement("nav",{ref:b,className:E()("header-nav",p&&"is-active")},r.a.createElement("div",{className:"header-nav-inner"},r.a.createElement("ul",{className:E()("list-reset text-xs",a&&"header-nav-".concat(a))}),!l&&r.a.createElement("ul",{className:"list-reset header-nav-right"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://drive.google.com/file/d/1JCj62np3Ctb_JET3mtf08ukfO2AAouPz/view",target:"_blank",className:"button button-primary button-wide-mobile button-sm",onClick:N},"Download")))))))))};D.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var x=D,j=function(e){var t=e.className,a=Object(c.a)(e,["className"]),i=E()("footer-nav",t);return r.a.createElement("nav",Object.assign({},a,{className:i}),r.a.createElement("ul",{className:"list-reset"},r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:djfnzstudiosfyp@gmail.com"},"Contact Us"))))},k=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,n=Object(c.a)(e,["className","topOuterDivider","topDivider"]),l=E()("site-footer center-content-mobile",a&&"has-top-divider",t);return r.a.createElement("footer",Object.assign({},n,{className:l}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:E()("site-footer-inner",i&&"has-top-divider")},r.a.createElement("div",{className:"footer-top space-between text-xxs"},r.a.createElement(y,null)),r.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},r.a.createElement(j,null),r.a.createElement("div",{className:"footer-copyright"},"Made by ",r.a.createElement("a",{href:"https://cruip.com"},"Cruip"),". All right reserved")))))};k.defaultProps={topOuterDivider:!1,topDivider:!1};var C=k,z=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{navPosition:"right",className:"reveal-from-bottom"}),r.a.createElement("main",{className:"site-content"},t),r.a.createElement(C,null))},L=a(5),S={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},P={types:Object(L.a)({},S.types),defaults:Object(L.a)({},S.defaults)},F={types:Object(L.a)({},S.types,{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(L.a)({},S.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},A={types:Object(L.a)({},S.types,{pushLeft:v.a.bool}),defaults:Object(L.a)({},S.defaults,{pushLeft:!1})},H=function(e){var t=e.className,a=e.tag,i=e.color,n=e.size,l=e.loading,o=e.wide,s=e.wideMobile,m=e.disabled,d=Object(c.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),u=E()("button",i&&"button-".concat(i),n&&"button-".concat(n),l&&"is-loading",o&&"button-block",s&&"button-wide-mobile",t),v=a;return r.a.createElement(v,Object.assign({},d,{className:u,disabled:m}))};H.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var B=function(e){var t=e.className,a=e.children,n=e.handleClose,l=e.show,o=e.closeHidden,s=e.video,m=e.videoTag,d=Object(c.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(i.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",p),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",p)}})),Object(i.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&n(e)},p=function(e){e.stopPropagation()},h=E()("modal",l&&"is-active",s&&"modal-video",t);return r.a.createElement(r.a.Fragment,null,l&&r.a.createElement("div",Object.assign({},d,{className:h,onClick:n}),r.a.createElement("div",{className:"modal-inner",onClick:p},s?r.a.createElement("div",{className:"responsive-video"},"iframe"===m?r.a.createElement("iframe",{title:"video",src:s,frameBorder:"0",allowFullScreen:!0}):r.a.createElement("video",{"v-else":!0,controls:!0,src:s})):r.a.createElement(r.a.Fragment,null,!o&&r.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:n}),r.a.createElement("div",{className:"modal-content"},a)))))};B.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var T=B,_=a(18),R=a.n(_),M=Object(L.a)({},P.defaults),q=function(e){var t=e.className,n=e.topOuterDivider,l=e.bottomOuterDivider,o=e.topDivider,s=e.bottomDivider,m=e.hasBgColor,u=e.invertColor,v=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),p=Object(i.useState)(!1),h=Object(d.a)(p,2),b=h[0],f=h[1],g=E()("hero section center-content",n&&"has-top-divider",l&&"has-bottom-divider",m&&"has-bg-color",u&&"invert-color",t),N=E()("hero-inner section-inner",o&&"has-top-divider",s&&"has-bottom-divider");return r.a.createElement("section",Object.assign({},v,{className:g}),r.a.createElement("div",{className:"container-sm"},r.a.createElement("div",{className:N},r.a.createElement("div",{className:"hero-content"},r.a.createElement("h1",{className:"mt-0 mb-32 reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("span",{className:"text-color-primary"},"Schizophrenia")),r.a.createElement("h4",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"400"},"The first person 3D ",r.a.createElement("span",{className:"text-color-primary"},"horror-inspired puzzle")," game."),r.a.createElement("div",{className:"container-sm"},r.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"600"},"Schizophrenia is a first-person puzzle game that combines horror, exploration, and storytelling elements. The player is put into perspective of the main character to simulate the experience of a schizophrenic person. Explore and solve puzzles to unravel the tragic fictional story of the massacre which took placed in an orphanage."))),r.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},r.a.createElement("a",{"data-video":R.a,href:"#0","aria-controls":"video-modal",onClick:function(e){e.preventDefault(),f(!0)}},r.a.createElement(w,{className:"has-shadow",src:a(37),alt:"Hero",width:896,height:504}))),r.a.createElement(T,{id:"video-modal",show:b,handleClose:function(e){e.preventDefault(),f(!1)},video:R.a,videoTag:"iframe"}))))};q.defaultProps=M;var U=q,I=a(25),W=function(e){var t=e.className,a=e.data,i=e.children,n=e.tag,l=Object(c.a)(e,["className","data","children","tag"]),o=E()("section-header",t),s=n;return r.a.createElement(r.a.Fragment,null,(a.title||a.paragraph)&&r.a.createElement("div",Object.assign({},l,{className:o}),r.a.createElement("div",{className:"container-xs"},i,a.title&&r.a.createElement(s,{className:E()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&r.a.createElement("p",{className:"m-0"},a.paragraph))))};W.defaultProps={children:null,tag:"h2"};var K=W;function G(){var e=Object(I.a)(["Schizophrenia is a serious mental disorder in which people interpret reality abnormally. Schizophrenia may result in some combination of hallucinations, delusions, \n                and extremely disordered thinking and behavior that impairs daily functioning, and can be disabling.\n                People with schizophrenia require lifelong treatment. Early treatment may help get symptoms under control before serious complications develop and may help improve the long-term outlook."]);return G=function(){return e},e}var J=Object(L.a)({},A.defaults),V=function(e){var t=e.className,i=e.topOuterDivider,n=e.bottomOuterDivider,l=e.topDivider,o=e.bottomDivider,s=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=E()("features-tiles section",i&&"has-top-divider",n&&"has-bottom-divider",s&&"has-bg-color",m&&"invert-color",t),p=E()("features-tiles-inner section-inner pt-0",l&&"has-top-divider",o&&"has-bottom-divider"),h=E()("tiles-wrap center-content",d&&"push-left"),b={title:"",paragraph:String.raw(G())};return r.a.createElement("section",Object.assign({},u,{className:v}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:p},r.a.createElement(K,{data:{title:"About Us",paragraph:"We're students from the University of Wollongong embarking on our final year project: a 3d first-person puzzle game."},className:"center-content"}),r.a.createElement(K,{data:b,className:"center-content"}),r.a.createElement("div",{className:"container-sm center-content"},r.a.createElement("p",null,"Find out more about ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Schizophrenia",target:"_blank"},"Schizophrenia")," and what you can do ",r.a.createElement("a",{href:"https://www.rethink.org/get-involved/awareness-days-and-events/schizophrenia-awareness-day/",target:"_blank"},"here"),".")),r.a.createElement("div",{className:h},r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(w,{src:a(38),alt:"Features tile icon 01",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Bringing Awareness"),r.a.createElement("p",{className:"m-0 text-sm"},"Allowing the public to know more about Schizophrenia and what the patients actually feel")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"300"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(w,{src:a(39),alt:"Features tile icon 02",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Built using UE4"),r.a.createElement("p",{className:"m-0 text-sm"},"The game is built on one of the most popular existing game physics engine \u2015 Unreal Engine 4 to provide an immersive game experience.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(w,{src:a(40),alt:"Features tile icon 04",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Horrific puzzle-solving"),r.a.createElement("p",{className:"m-0 text-sm"},"A mixin of both horror and puzzles to induce anxiety in our players."))))))))};V.defaultProps=J;var Y=V,$=Object(L.a)({},F.defaults),Q=function(e){var t=e.className,i=e.topOuterDivider,n=e.bottomOuterDivider,l=e.topDivider,o=e.bottomDivider,s=e.hasBgColor,m=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,p=e.imageFill,h=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),b=E()("features-split section",i&&"has-top-divider",n&&"has-bottom-divider",s&&"has-bg-color",m&&"invert-color",t),f=E()("features-split-inner section-inner",l&&"has-top-divider",o&&"has-bottom-divider"),g=E()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return r.a.createElement("section",Object.assign({},h,{className:b}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:f},r.a.createElement(K,{data:{title:"Features",paragraph:""},className:"center-content"}),r.a.createElement("div",{className:g},r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Challenge your mind"),r.a.createElement("h3",{className:"mt-0 mb-12"},"Unique Puzzles"),r.a.createElement("p",{className:"m-0"},"Make your way through the Kinderheim Orphanage while solving different unique puzzles that are designed to stop you in your tracks!")),r.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(w,{src:a(41),alt:"Features split 01",width:528,height:396}))),r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Check who's behind you"),r.a.createElement("h3",{className:"mt-0 mb-12"},"Immersive Environment"),r.a.createElement("p",{className:"m-0"},"Using a combination of lighting, textures and sounds, always find yourself nervous about who or what is around the next corner...")),r.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(w,{src:a(42),alt:"Features split 02",width:528,height:396}))),r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Uncover the mysteries"),r.a.createElement("h3",{className:"mt-0 mb-12"},"Open-ended Interpretation"),r.a.createElement("p",{className:"m-0"},"Find out what really happened at the Kinderheim Orphanage, or what you thought had happened. Look for clues and piece them together to reveal the true mystery behind the orphanage.")),r.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(w,{src:a(43),alt:"Features split 03",width:528,height:396})))))))};Q.defaultProps=$;var X=Q,Z=Object(L.a)({},A.defaults),ee=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,l=e.bottomDivider,o=e.hasBgColor,s=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=E()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",o&&"has-bg-color",s&&"invert-color",t),v=E()("testimonial-inner section-inner",n&&"has-top-divider",l&&"has-bottom-divider"),p=E()("tiles-wrap",m&&"push-left");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:v},r.a.createElement(K,{data:{title:"Player Reviews",paragraph:"Hear about the game from our play-test players themselves!"},className:"center-content"}),r.a.createElement("div",{className:p},r.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Roman Level"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"AppName"))))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Diana Rynzhuk"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"AppName"))))),r.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Ben Stafford"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"AppName")))))))))};ee.defaultProps=Z;var te=ee,ae=function(e){var t=e.className,a=e.children,i=e.labelHidden,n=e.id,l=Object(c.a)(e,["className","children","labelHidden","id"]),o=E()("form-label",i&&"screen-reader",t);return r.a.createElement("label",Object.assign({},l,{className:o,htmlFor:n}),a)};ae.defaultProps={children:null,labelHidden:!1,id:null};var ie=ae,re=function(e){var t=e.children,a=e.className,i=e.status,n=Object(c.a)(e,["children","className","status"]),l=E()("form-hint",i&&"text-color-".concat(i),a);return r.a.createElement("div",Object.assign({},n,{className:l}),t)};re.defaultProps={children:null,status:!1};var ne=re,le=function(e){var t=e.className,a=e.children,i=e.label,n=e.labelHidden,l=e.type,o=e.name,s=e.status,m=e.disabled,d=e.value,u=e.formGroup,v=e.hasIcon,p=e.size,h=e.placeholder,b=e.rows,f=e.hint,g=Object(c.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),N=E()(u&&""!==u&&("desktop"===u?"form-group-desktop":"form-group"),v&&""!==v&&"has-icon-"+v),O=E()("form-input",p&&"form-input-".concat(p),s&&"form-".concat(s),t),w="textarea"===l?"textarea":"input";return r.a.createElement(r.a.Fragment,null,i&&r.a.createElement(ie,{labelHidden:n,id:g.id},i),r.a.createElement("div",{className:N},r.a.createElement(w,Object.assign({},g,{type:"textarea"!==l?l:null,className:O,name:o,disabled:m,value:d,placeholder:h,rows:"textarea"===l?b:null})),a),f&&r.a.createElement(ne,{status:s},f))};le.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var oe=le,se=Object(L.a)({},P.defaults,{split:!1}),ce=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,l=e.bottomDivider,o=e.hasBgColor,s=e.invertColor,m=e.split,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),u=E()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",o&&"has-bg-color",s&&"invert-color",t),v=E()("cta-inner section-inner",n&&"has-top-divider",l&&"has-bottom-divider",m&&"cta-split");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:v},r.a.createElement("div",{className:"cta-slogan"},r.a.createElement("h3",{className:"m-0"},"For previewing layouts and visual?")),r.a.createElement("div",{className:"cta-action"},r.a.createElement(oe,{id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Your best email"},r.a.createElement("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))};ce.defaultProps=se;var me=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{className:"illustration-section-01"}),r.a.createElement(Y,null),r.a.createElement(X,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),r.a.createElement(te,{topDivider:!0}))};f.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var de=function(){var e=Object(i.useRef)(),t=Object(o.f)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){f.a.set({page:e}),f.a.pageview(e)}(a)}),[t]),r.a.createElement(b,{ref:e,children:function(){return r.a.createElement(o.c,null,r.a.createElement(m,{exact:!0,path:"/",component:me,layout:z}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(44);var ue=Object(s.a)();l.a.render(r.a.createElement(o.b,{history:ue},r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.f9f7fc45.chunk.js.map