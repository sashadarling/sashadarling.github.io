(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(279)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9749:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageLoaderProps",{enumerable:!0,get:function(){return c.ImageLoaderProps}}),t.default=function(e){let t,n;var o,{src:a,sizes:m,unoptimized:_=!1,priority:y=!1,loading:b,className:x,quality:j,width:w,height:C,fill:E,style:S,onLoad:L,onLoadingComplete:M,placeholder:O="empty",blurDataURL:R}=e,k=l(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL"]);let N=i.useContext(f.ImageConfigContext),P=i.useMemo(()=>{let e=p||N||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:n})},[N]),I=k,z=I.loader||d.default;if(delete I.loader,"__next_img_default"in z){if("custom"===P.loader)throw Error('Image with src "'.concat(a,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let T=z;z=e=>{let{config:t}=e,n=l(e,["config"]);return T(n)}}let A="",D=h(w),B=h(C);if("object"==typeof(o=a)&&(g(o)||void 0!==o.src)){let U=g(a)?a.default:a;if(!U.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(U)));if(!U.height||!U.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(U)));if(t=U.blurWidth,n=U.blurHeight,R=R||U.blurDataURL,A=U.src,!E){if(D||B){if(D&&!B){let F=D/U.width;B=Math.round(U.height*F)}else if(!D&&B){let Z=B/U.height;D=Math.round(U.width*Z)}}else D=U.width,B=U.height}}let G=!y&&("lazy"===b||void 0===b);((a="string"==typeof a?a:A).startsWith("data:")||a.startsWith("blob:"))&&(_=!0,G=!1),P.unoptimized&&(_=!0);let[q,V]=i.useState(!1),[W,H]=i.useState(!1),K=h(j),X=Object.assign(E?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0}:{},W?{}:{color:"transparent"},S),J="blur"===O&&R&&!q?{backgroundSize:X.objectFit||"cover",backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(u.getImageBlurSvg({widthInt:D,heightInt:B,blurWidth:t,blurHeight:n,blurDataURL:R}),'")')}:{},Y=function(e){let{config:t,src:n,unoptimized:r,width:o,quality:a,sizes:l,loader:i}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,n){let{deviceSizes:r,allSizes:o}=e;if(n){let a=/(^|\s)(1?\d?\d)vw/g,l=[];for(let i;i=a.exec(n);i)l.push(parseInt(i[2]));if(l.length){let s=.01*Math.min(...l);return{widths:o.filter(e=>e>=r[0]*s),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let u=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:u,kind:"x"}}(t,o,l),c=s.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:s.map((e,r)=>"".concat(i({config:t,src:n,quality:a,width:e})," ").concat("w"===u?e:r+1).concat(u)).join(", "),src:i({config:t,src:n,quality:a,width:s[c]})}}({config:P,src:a,unoptimized:_,width:D,quality:K,sizes:m,loader:z}),$=a,Q="imagesrcset",ee="imagesizes";Q="imageSrcSet",ee="imageSizes";let et={[Q]:Y.srcSet,[ee]:Y.sizes,crossOrigin:I.crossOrigin},en=i.useRef(L);i.useEffect(()=>{en.current=L},[L]);let er=i.useRef(M);i.useEffect(()=>{er.current=M},[M]);let eo=r({isLazy:G,imgAttributes:Y,heightInt:B,widthInt:D,qualityInt:K,className:x,imgStyle:X,blurStyle:J,loading:b,config:P,fill:E,unoptimized:_,placeholder:O,loader:z,srcString:$,onLoadRef:en,onLoadingCompleteRef:er,setBlurComplete:V,setShowAltText:H},I);return i.default.createElement(i.default.Fragment,null,i.default.createElement(v,Object.assign({},eo)),y?i.default.createElement(s.default,null,i.default.createElement("link",Object.assign({key:"__nimg-"+Y.src+Y.srcSet+Y.sizes,rel:"preload",as:"image",href:Y.srcSet?void 0:Y.src},et))):null)};var r=n(6495).Z,o=n(2648).Z,a=n(1598).Z,l=n(7273).Z,i=a(n(7294)),s=o(n(3121)),u=n(2675),c=n(139),f=n(8730);n(670);var d=o(n(9824));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://sashadarling.imgix.net/",loader:"imgix",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,n,o,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let i="decode"in e?e.decode():Promise.resolve();i.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===n&&l(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,s=!1;o.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>s,persist(){},preventDefault(){i=!0,t.preventDefault()},stopPropagation(){s=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let v=e=>{var{imgAttributes:t,heightInt:n,widthInt:o,qualityInt:a,className:s,imgStyle:u,blurStyle:c,isLazy:f,fill:d,placeholder:p,loading:g,srcString:h,config:v,unoptimized:_,loader:y,onLoadRef:b,onLoadingCompleteRef:x,setBlurComplete:j,setShowAltText:w,onLoad:C,onError:E}=e,S=l(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=f?"lazy":g,i.default.createElement(i.default.Fragment,null,i.default.createElement("img",Object.assign({},S,t,{width:o,height:n,decoding:"async","data-nimg":d?"fill":"1",className:s,loading:g,style:r({},u,c),ref:i.useCallback(e=>{e&&(E&&(e.src=e.src),e.complete&&m(e,h,p,b,x,j))},[h,p,b,x,j,E]),onLoad(e){let t=e.currentTarget;m(t,h,p,b,x,j)},onError(e){w(!0),"blur"===p&&j(!0),E&&E(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,a=r(n(7294)),l=n(1003),i=n(4465),s=n(2692),u=n(8245),c=n(9246),f=n(227),d=n(3468);let p={};function g(e,t,n,r){if(!e||!l.isLocalURL(t))return;Promise.resolve(e.prefetch(t,n,r)).catch(e=>{});let o=r&&void 0!==r.locale?r.locale:e&&e.locale;p[t+"%"+n+(o?"%"+o:"")]=!0}let h=a.default.forwardRef(function(e,t){let n,r;let{href:h,as:m,children:v,prefetch:_,passHref:y,replace:b,shallow:x,scroll:j,locale:w,onClick:C,onMouseEnter:E,onTouchStart:S,legacyBehavior:L=!0!==Boolean(!0)}=e,M=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,L&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));let O=!1!==_,R=a.default.useContext(s.RouterContext),k=a.default.useContext(u.AppRouterContext);k&&(R=k);let{href:N,as:P}=a.default.useMemo(()=>{let[e,t]=l.resolveHref(R,h,!0);return{href:e,as:m?l.resolveHref(R,m):t||e}},[R,h,m]),I=a.default.useRef(N),z=a.default.useRef(P);L&&(r=a.default.Children.only(n));let T=L?r&&"object"==typeof r&&r.ref:t,[A,D,B]=c.useIntersection({rootMargin:"200px"}),U=a.default.useCallback(e=>{(z.current!==P||I.current!==N)&&(B(),z.current=P,I.current=N),A(e),T&&("function"==typeof T?T(e):"object"==typeof T&&(T.current=e))},[P,T,N,B,A]);a.default.useEffect(()=>{let e=D&&O&&l.isLocalURL(N),t=void 0!==w?w:R&&R.locale,n=p[N+"%"+P+(t?"%"+t:"")];e&&!n&&g(R,N,P,{locale:t})},[P,N,D,w,O,R]);let F={ref:U,onClick(e){L||"function"!=typeof C||C(e),L&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,s,u,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!l.isLocalURL(n)))return;e.preventDefault();let g=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:u,scroll:s}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};c?a.default.startTransition(g):g()}(e,R,N,P,b,x,j,w,Boolean(k),O)},onMouseEnter(e){L||"function"!=typeof E||E(e),L&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),!(!O&&k)&&l.isLocalURL(N)&&g(R,N,P,{priority:!0})},onTouchStart(e){L||"function"!=typeof S||S(e),L&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),!(!O&&k)&&l.isLocalURL(N)&&g(R,N,P,{priority:!0})}};if(!L||y||"a"===r.type&&!("href"in r.props)){let Z=void 0!==w?w:R&&R.locale,G=R&&R.isLocaleDomain&&f.getDomainLocale(P,Z,R.locales,R.domainLocales);F.href=G||d.addBasePath(i.addLocale(P,Z,R&&R.defaultLocale))}return L?a.default.cloneElement(r,F):a.default.createElement("a",Object.assign({},M,F),n)});t.default=h,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:s}=e,u=s||!a,[c,f]=r.useState(!1),[d,p]=r.useState(null);r.useEffect(()=>{if(a){if(!u&&!c&&d&&d.tagName){let e=function(e,t,n){let{id:r,observer:o,elements:a}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:a,elements:o},i.push(n),l.set(n,t),t}(n);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(r);let t=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);t>-1&&i.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!c){let r=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(r)}},[d,u,n,t,c]);let g=r.useCallback(()=>{f(!1)},[]);return[p,c,g]};var r=n(7294),o=n(4686);let a="function"==typeof IntersectionObserver,l=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8245:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294));let o=r.default.createContext(null);t.AppRouterContext=o;let a=r.default.createContext(null);t.LayoutRouterContext=a;let l=r.default.createContext(null);t.GlobalLayoutRouterContext=l;let i=r.default.createContext(null);t.TemplateContext=i},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:o,blurDataURL:a}=e,l=r||t,i=o||n,s=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&i?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(i,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&o?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(a,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:o}=e;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},279:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var r=n(5893);n(6774);var o=n(5675),a=n.n(o),l=n(6042),i=n.n(l);function s(){return(0,r.jsx)("footer",{className:i().footer,children:(0,r.jsxs)("p",{className:i().p,children:["Copyright \xa9 ",new Date().getFullYear()," Sasha Stafford"]})})}var u=n(1664),c=n.n(u),f=n(1489),d=n.n(f);function p(){return(0,r.jsx)(c(),{href:"/",className:d().a,children:(0,r.jsx)("h1",{className:d().h1,children:"sasha stafford"})})}var g=n(1163),h=n(5279),m=n.n(h);function v(){let e=(0,g.useRouter)(),t=t=>{let{children:n,href:o}=t;return e.pathname===o?(0,r.jsx)(r.Fragment,{children:n}):(0,r.jsx)(c(),{href:o,children:n})};return(0,r.jsx)("nav",{className:m().nav,children:(0,r.jsxs)("ul",{className:m().ul,children:[(0,r.jsx)("li",{className:m().li,children:(0,r.jsx)(t,{href:"/projects",children:"projects"})}),(0,r.jsx)("li",{className:m().li,children:(0,r.jsx)(t,{href:"/words",children:"words"})}),(0,r.jsx)("li",{className:m().li,children:(0,r.jsx)(t,{href:"/photography",children:"photography"})})]})})}var _=n(2984),y=n.n(_);function b(){return(0,r.jsx)("input",{className:y().menuToggle,type:"checkbox","aria-label":"open the menu"})}var x=n(2609),j=n.n(x);function w(){return(0,r.jsxs)("header",{className:j().header,children:[(0,r.jsx)(p,{}),(0,r.jsx)(b,{}),(0,r.jsx)(v,{})]})}var C=n(7012),E=n.n(C);function S(e){let{children:t}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:E().wrapper,children:[(0,r.jsx)(a(),{alt:"Photo from the underside of a highway bridge.",className:E().backgroundImage,fill:!0,src:"/images/IMG_1713.jpeg"}),(0,r.jsx)(w,{}),(0,r.jsx)("main",{className:E().main,children:t}),(0,r.jsx)(s,{})]})})}function L(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(S,{children:(0,r.jsx)(t,{...n})})}},6042:function(e){e.exports={footer:"Footer_footer__AaBZs",p:"Footer_p__g_m6D"}},2609:function(e){e.exports={header:"Header_header__za8ic"}},7012:function(e){e.exports={backgroundImage:"Layout_backgroundImage__C1XIn",main:"Layout_main__T635V",wrapper:"Layout_wrapper__Vks7d"}},1489:function(e){e.exports={a:"Logo_a__6Onzc",h1:"Logo_h1__ZUS49"}},5279:function(e){e.exports={nav:"Menu_nav__Vn50G",li:"Menu_li__Tkpwm",ul:"Menu_ul__cW8eq"}},2984:function(e){e.exports={menuToggle:"MenuToggle_menuToggle__rCt6e"}},6774:function(){},5675:function(e,t,n){e.exports=n(9749)},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){e.exports=n(880)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);