(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(279)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,r=n(7273).Z,l=o(n(7294)),a=n(1003),u=n(4465),c=n(2692),s=n(8245),i=n(9246),f=n(227),d=n(3468);let p={};function h(e,t,n,o){if(!e||!a.isLocalURL(t))return;Promise.resolve(e.prefetch(t,n,o)).catch(e=>{});let r=o&&void 0!==o.locale?o.locale:e&&e.locale;p[t+"%"+n+(r?"%"+r:"")]=!0}let _=l.default.forwardRef(function(e,t){let n,o;let{href:_,as:x,children:m,prefetch:v,passHref:y,replace:g,shallow:j,scroll:b,locale:C,onClick:L,onMouseEnter:M,onTouchStart:N,legacyBehavior:w=!0!==Boolean(!0)}=e,R=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=m,w&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let k=!1!==v,E=l.default.useContext(c.RouterContext),O=l.default.useContext(s.AppRouterContext);O&&(E=O);let{href:T,as:P}=l.default.useMemo(()=>{let[e,t]=a.resolveHref(E,_,!0);return{href:e,as:x?a.resolveHref(E,x):t||e}},[E,_,x]),I=l.default.useRef(T),S=l.default.useRef(P);w&&(o=l.default.Children.only(n));let U=w?o&&"object"==typeof o&&o.ref:t,[D,A,B]=i.useIntersection({rootMargin:"200px"}),F=l.default.useCallback(e=>{(S.current!==P||I.current!==T)&&(B(),S.current=P,I.current=T),D(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[P,U,T,B,D]);l.default.useEffect(()=>{let e=A&&k&&a.isLocalURL(T),t=void 0!==C?C:E&&E.locale,n=p[T+"%"+P+(t?"%"+t:"")];e&&!n&&h(E,T,P,{locale:t})},[P,T,A,C,k,E]);let Z={ref:F,onClick(e){w||"function"!=typeof L||L(e),w&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,u,c,s,i,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:u,locale:s,scroll:c}):t[r?"replace":"push"](o||n,{forceOptimisticNavigation:!f})};i?l.default.startTransition(h):h()}(e,E,T,P,g,j,b,C,Boolean(O),k)},onMouseEnter(e){w||"function"!=typeof M||M(e),w&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),!(!k&&O)&&a.isLocalURL(T)&&h(E,T,P,{priority:!0})},onTouchStart(e){w||"function"!=typeof N||N(e),w&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),!(!k&&O)&&a.isLocalURL(T)&&h(E,T,P,{priority:!0})}};if(!w||y||"a"===o.type&&!("href"in o.props)){let H=void 0!==C?C:E&&E.locale,K=E&&E.isLocaleDomain&&f.getDomainLocale(P,H,E.locales,E.domainLocales);Z.href=K||d.addBasePath(u.addLocale(P,H,E&&E.defaultLocale))}return w?l.default.cloneElement(o,Z):l.default.createElement("a",Object.assign({},R,Z),n)});t.default=_,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:c}=e,s=c||!l,[i,f]=o.useState(!1),[d,p]=o.useState(null);o.useEffect(()=>{if(l){if(!s&&!i&&d&&d.tagName){let e=function(e,t,n){let{id:o,observer:r,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=u.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=a.get(o)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:r},u.push(n),a.set(n,t),t}(n);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),a.delete(o);let t=u.findIndex(e=>e.root===o.root&&e.margin===o.margin);t>-1&&u.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!i){let o=r.requestIdleCallback(()=>f(!0));return()=>r.cancelIdleCallback(o)}},[d,s,n,t,i]);let h=o.useCallback(()=>{f(!1)},[]);return[p,i,h]};var o=n(7294),r=n(4686);let l="function"==typeof IntersectionObserver,a=new Map,u=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8245:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var o=(0,n(2648).Z)(n(7294));let r=o.default.createContext(null);t.AppRouterContext=r;let l=o.default.createContext(null);t.LayoutRouterContext=l;let a=o.default.createContext(null);t.GlobalLayoutRouterContext=a;let u=o.default.createContext(null);t.TemplateContext=u},279:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var o=n(5893);n(6774);var r=n(6042),l=n.n(r);function a(){return(0,o.jsx)("footer",{className:l().footer,children:(0,o.jsxs)("p",{className:l().p,children:["Copyright \xa9 ",new Date().getFullYear()," Sasha Stafford"]})})}var u=n(1664),c=n.n(u),s=n(1489),i=n.n(s);function f(){return(0,o.jsx)(c(),{href:"/",className:i().a,children:(0,o.jsx)("h1",{className:i().h1,children:"sasha stafford"})})}var d=n(1163),p=n(5279),h=n.n(p);function _(){let e=(0,d.useRouter)(),t=t=>{let{children:n,href:r}=t;return e.pathname===r?(0,o.jsx)(o.Fragment,{children:n}):(0,o.jsx)(c(),{href:r,children:n})};return(0,o.jsx)("nav",{className:h().nav,children:(0,o.jsxs)("ul",{className:h().ul,children:[(0,o.jsx)("li",{className:h().li,children:(0,o.jsx)(t,{href:"/projects",children:"projects"})}),(0,o.jsx)("li",{className:h().li,children:(0,o.jsx)(t,{href:"/words",children:"words"})}),(0,o.jsx)("li",{className:h().li,children:(0,o.jsx)(t,{href:"/photography",children:"photography"})})]})})}var x=n(2984),m=n.n(x);function v(){return(0,o.jsx)("input",{className:m().menuToggle,type:"checkbox","aria-label":"open the menu"})}var y=n(2609),g=n.n(y);function j(){return(0,o.jsxs)("header",{className:g().header,children:[(0,o.jsx)(f,{}),(0,o.jsx)(v,{}),(0,o.jsx)(_,{})]})}var b=n(7012),C=n.n(b);function L(e){let{children:t}=e;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:C().wrapper,children:[(0,o.jsx)(j,{}),(0,o.jsx)("main",{className:C().main,children:t}),(0,o.jsx)(a,{})]})})}function M(e){let{Component:t,pageProps:n}=e;return(0,o.jsx)(L,{children:(0,o.jsx)(t,{...n})})}},6042:function(e){e.exports={footer:"Footer_footer__AaBZs",p:"Footer_p__g_m6D"}},2609:function(e){e.exports={header:"Header_header__za8ic"}},7012:function(e){e.exports={backgroundImage:"Layout_backgroundImage__C1XIn",main:"Layout_main__T635V",wrapper:"Layout_wrapper__Vks7d"}},1489:function(e){e.exports={a:"Logo_a__6Onzc",h1:"Logo_h1__ZUS49"}},5279:function(e){e.exports={nav:"Menu_nav__Vn50G",li:"Menu_li__Tkpwm",ul:"Menu_ul__cW8eq"}},2984:function(e){e.exports={menuToggle:"MenuToggle_menuToggle__rCt6e"}},6774:function(){},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){e.exports=n(880)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);