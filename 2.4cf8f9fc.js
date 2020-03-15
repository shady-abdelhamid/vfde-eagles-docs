/*! For license information please see 2.4cf8f9fc.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{133:function(e,t,n){"use strict";var a=n(0);const r=n.n(a).a.createContext({isDarkTheme:!1,setLightTheme:()=>{},setDarkTheme:()=>{}});t.a=r},134:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(143),i=n(128),c=n(131);const l="",s="dark";var u=()=>{const{siteConfig:{themeConfig:{disableDarkMode:e}}={}}=Object(i.a)(),[t,n]=Object(a.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):l),r=Object(a.useCallback)(e=>{try{localStorage.setItem("theme",e)}catch(t){console.error(t)}},[n]),o=Object(a.useCallback)(()=>{n(l),r(l)},[]),c=Object(a.useCallback)(()=>{n(s),r(s)},[]);return Object(a.useEffect)(()=>{document.documentElement.setAttribute("data-theme",t)},[t]),Object(a.useEffect)(()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&n(e)}catch(t){console.error(t)}},[n]),Object(a.useEffect)(()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener(({matches:e})=>{n(e?s:l)})},[]),{isDarkTheme:t===s,setLightTheme:o,setDarkTheme:c}},d=n(133);var h=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:a}=u();return r.a.createElement(d.a.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:a}},e.children)},f=n(1),m=n(130),p=n(142),y=()=>null,b=n(138),g=n.n(b),v=n(129),k=n.n(v),E=n(93),O=n.n(E);const _=()=>r.a.createElement("span",{className:k()(O.a.toggle,O.a.moon)}),j=()=>r.a.createElement("span",{className:k()(O.a.toggle,O.a.sun)});var w=function(e){const{isClient:t}=Object(i.a)();return r.a.createElement(g.a,Object(f.a)({disabled:!t,icons:{checked:r.a.createElement(_,null),unchecked:r.a.createElement(j,null)}},e))},T=n(135),C=n(136);var S=function(e){const[t,n]=Object(a.useState)(e);return Object(a.useEffect)(()=>{const e=()=>n(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,n]};var N=e=>{const[t,n]=Object(a.useState)(!0),[r,o]=Object(a.useState)(!1),[i,c]=Object(a.useState)(0),[l,s]=Object(a.useState)(0),u=Object(a.useCallback)(e=>{null!==e&&s(e.getBoundingClientRect().height)},[]),d=Object(C.b)(),[h,f]=S(d.hash),m=()=>{const e=window.pageYOffset||document.documentElement.scrollTop;if(e<l)return;if(r)return o(!1),n(!1),void c(e);const t=document.documentElement.scrollHeight-l,a=window.innerHeight;i&&e>i?n(!1):e+a<t&&n(!0),c(e)};return Object(a.useEffect)(()=>{if(e)return window.addEventListener("scroll",m),()=>{window.removeEventListener("scroll",m)}},[i,l]),Object(a.useEffect)(()=>{e&&(n(!0),f(d.hash))},[d]),Object(a.useEffect)(()=>{e&&h&&o(!0)},[h]),{navbarRef:u,isNavbarVisible:t}},x=n(137),L=n(94),P=n.n(L);function A({activeBasePath:e,to:t,href:n,label:a,position:o,...i}){const l=Object(c.a)(t),s=Object(c.a)(e);return r.a.createElement(m.a,Object(f.a)({className:"navbar__item navbar__link"},n?{target:"_blank",rel:"noopener noreferrer",href:n}:{activeClassName:"navbar__link--active",to:l,...e?{isActive:(e,t)=>t.pathname.startsWith(s)}:null},i),a)}var M=function(){const{siteConfig:e={},isClient:t}=Object(i.a)(),{baseUrl:n,themeConfig:o={}}=e,{navbar:l={},disableDarkMode:s=!1}=o,{title:u,logo:d={},links:h=[],hideOnScroll:b=!1}=l,[g,v]=Object(a.useState)(!1),[E,O]=Object(a.useState)(!1),{isDarkTheme:_,setLightTheme:j,setDarkTheme:C}=Object(T.a)(),{navbarRef:S,isNavbarVisible:L}=N(b);Object(x.a)(g);const M=Object(a.useCallback)(()=>{v(!0)},[v]),D=Object(a.useCallback)(()=>{v(!1)},[v]),F=Object(a.useCallback)(e=>e.target.checked?C():j(),[j,C]),I=d.href||n;let B={};d.target?B={target:d.target}:Object(p.a)(I)||(B={rel:"noopener noreferrer",target:"_blank"});const H=d.srcDark&&_?d.srcDark:d.src,R=Object(c.a)(H);return r.a.createElement("nav",{ref:S,className:k()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":g,[P.a.navbarHideable]:b,[P.a.navbarHidden]:!L})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:M,onKeyDown:M},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(m.a,Object(f.a)({className:"navbar__brand",to:I},B),null!=d&&r.a.createElement("img",{key:t,className:"navbar__logo",src:R,alt:d.alt}),null!=u&&r.a.createElement("strong",{className:k()("navbar__title",{[P.a.hideLogoText]:E})},u)),h.filter(e=>"right"!==e.position).map((e,t)=>r.a.createElement(A,Object(f.a)({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},h.filter(e=>"right"===e.position).map((e,t)=>r.a.createElement(A,Object(f.a)({},e,{key:t}))),!s&&r.a.createElement(w,{className:P.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:_,onChange:F}),r.a.createElement(y,{handleSearchBarToggle:O,isSearchBarExpanded:E}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:D}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(m.a,Object(f.a)({className:"navbar__brand",onClick:D,to:I},B),null!=d&&r.a.createElement("img",{key:t,className:"navbar__logo",src:R,alt:d.alt}),null!=u&&r.a.createElement("strong",{className:"navbar__title"},u)),!s&&g&&r.a.createElement(w,{"aria-label":"Dark mode toggle in sidebar",checked:_,onChange:F})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},h.map((e,t)=>r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(A,Object(f.a)({className:"menu__link"},e,{onClick:D})))))))))},D=n(95),F=n.n(D);function I({to:e,href:t,label:n,...a}){const o=Object(c.a)(e);return r.a.createElement(m.a,Object(f.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:o},a),n)}const B=({url:e,alt:t})=>r.a.createElement("img",{className:"footer__logo",alt:t,src:e});var H=function(){const e=Object(i.a)(),{siteConfig:t={}}=e,{themeConfig:n={}}=t,{footer:a}=n,{copyright:o,links:l=[],logo:s={}}=a||{},u=Object(c.a)(s.src);return a?r.a.createElement("footer",{className:k()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},l&&l.length>0&&r.a.createElement("div",{className:"row footer__links"},l.map((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(I,e)))):null))),(s||o)&&r.a.createElement("div",{className:"text--center"},s&&s.src&&r.a.createElement("div",{className:"margin-bottom--sm"},s.href?r.a.createElement("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:F.a.footerLogoLink},r.a.createElement(B,{alt:s.alt,url:u})):r.a.createElement(B,{alt:s.alt,url:u})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:o}})))):null};n(96);t.a=function(e){const{siteConfig:t={}}=Object(i.a)(),{favicon:n,title:a,themeConfig:{image:l},url:s}=t,{children:u,title:d,noFooter:f,description:m,image:p,keywords:y,permalink:b,version:g}=e,v=d?`${d} | ${a}`:a,k=p||l,E=s+Object(c.a)(k),O=Object(c.a)(n);return r.a.createElement(h,null,r.a.createElement(o.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),v&&r.a.createElement("title",null,v),v&&r.a.createElement("meta",{property:"og:title",content:v}),n&&r.a.createElement("link",{rel:"shortcut icon",href:O}),m&&r.a.createElement("meta",{name:"description",content:m}),m&&r.a.createElement("meta",{property:"og:description",content:m}),g&&r.a.createElement("meta",{name:"docsearch:version",content:g}),y&&y.length&&r.a.createElement("meta",{name:"keywords",content:y.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:E}),k&&r.a.createElement("meta",{property:"twitter:image",content:E}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${v}`}),b&&r.a.createElement("meta",{property:"og:url",content:s+b}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(M,null),r.a.createElement("div",{className:"main-wrapper"},u),!f&&r.a.createElement(H,null))}},135:function(e,t,n){"use strict";var a=n(0),r=n(133);t.a=function(){return Object(a.useContext)(r.a)}},136:function(e,t,n){"use strict";var a=n(19);n.d(t,"a",(function(){return a.c})),n.d(t,"b",(function(){return a.d}))},137:function(e,t,n){"use strict";var a=n(0);t.a=function(e=!0){Object(a.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},138:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),i=h(o),c=h(n(129)),l=h(n(8)),s=h(n(139)),u=h(n(140)),d=n(141);function h(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=(t.icons,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["className","icons"])),o=(0,c.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return i.default.createElement("div",{className:o,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},i.default.createElement("div",{className:"react-toggle-track"},i.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),i.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),i.default.createElement("div",{className:"react-toggle-thumb"}),i.default.createElement("input",a({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(o.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:i.default.createElement(s.default,null),unchecked:i.default.createElement(u.default,null)}},f.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},139:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),o=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return o.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},o.default.createElement("title",null,"switch-check"),o.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},140:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),o=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return o.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},o.default.createElement("title",null,"switch-x"),o.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},141:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}},145:function(e,t,n){"use strict";var a=n(1),r=n(0),o=n.n(r),i=n(130),c=n(129),l=n.n(c),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},u={Prism:n(35).a,theme:s};function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var f=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=h({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=h({},n,{backgroundColor:null}),r};function b(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var g=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),d(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),d(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=h({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(o.style=i.plain),void 0!==r&&(o.style=void 0!==o.style?h({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),d(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var i=a?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[i].concat(c))}})),d(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,i=h({},b(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(i.style=void 0!==i.style?h({},i.style,r):r),void 0!==n&&(i.key=n),a&&(i.className+=" "+a),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),i=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,i=0,c=[],l=[c];i>-1;){for(;(o=a[i]++)<r[i];){var s=void 0,u=t[i],d=n[i][o];if("string"==typeof d?(u=i>0?u:["plain"],s=d):(u=p(u,d.type),d.alias&&(u=p(u,d.alias)),s=d.content),"string"==typeof s){var h=s.split(f),y=h.length;c.push({types:u,content:h[0]});for(var b=1;b<y;b++)m(c),l.push(c=[]),c.push({types:u,content:h[b]})}else i++,t.push(u),n.push(s),a.push(0),r.push(s.length)}i--,t.pop(),n.pop(),a.pop(),r.pop()}return m(c),l}(void 0!==i?t.tokenize(a,i,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),v=n(152),k=n.n(v),E=n(150),O=n.n(E),_=n(151),j=n.n(_),w=n(128),T=n(135),C=n(102),S=n.n(C);const N=/{([\d,-]+)}/;var x=({children:e,className:t,metastring:n})=>{const{siteConfig:{themeConfig:{prism:i={}}}}=Object(w.a)(),[c,s]=Object(r.useState)(!1),[d,h]=Object(r.useState)(!1);Object(r.useEffect)(()=>{h(!0)},[]);const f=Object(r.useRef)(null),m=Object(r.useRef)(null);let p=[];const{isDarkTheme:y}=Object(T.a)(),b=i.theme||k.a,v=i.darkTheme||b,E=y?v:b;if(n&&N.test(n)){const e=n.match(N)[1];p=j.a.parse(e).filter(e=>e>0)}Object(r.useEffect)(()=>{let e;return m.current&&(e=new O.a(m.current,{target:()=>f.current})),()=>{e&&e.destroy()}},[m.current,f.current]);let _=t&&t.replace(/language-/,"");!_&&i.defaultLanguage&&(_=i.defaultLanguage);const C=()=>{window.getSelection().empty(),s(!0),setTimeout(()=>s(!1),2e3)};return o.a.createElement(g,Object(a.a)({},u,{key:d,theme:E,code:e.replace(/\n$/,""),language:_}),({className:e,style:t,tokens:n,getLineProps:r,getTokenProps:i})=>o.a.createElement("pre",{className:l()(e,S.a.codeBlock)},o.a.createElement("button",{ref:m,type:"button","aria-label":"Copy code to clipboard",className:S.a.copyButton,onClick:C},c?"Copied":"Copy"),o.a.createElement("code",{ref:f,className:S.a.codeBlockLines,style:t},n.map((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=r({line:e,key:t});return p.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),o.a.createElement("div",Object(a.a)({key:t},n),e.map((e,t)=>o.a.createElement("span",Object(a.a)({key:t},i({token:e,key:t})))))}))))},L=(n(103),n(104)),P=n.n(L);var A=e=>function({id:t,...n}){const{siteConfig:{themeConfig:{navbar:{hideOnScroll:a=!1}={}}={}}={}}=Object(w.a)();return t?o.a.createElement(e,n,o.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:l()("anchor",{[P.a.enhancedAnchor]:!a}),id:t}),o.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:`#${t}`,title:"Direct link to heading"},"#"),n.children):o.a.createElement(e,n)},M=n(105),D=n.n(M);t.a={code:e=>{const{children:t}=e;return"string"==typeof t?o.a.createElement(x,e):t},a:e=>/\.[^./]+$/.test(e.href)?o.a.createElement("a",e):o.a.createElement(i.a,e),pre:e=>o.a.createElement("div",Object(a.a)({className:D.a.mdxCodeBlock},e)),h1:A("h1"),h2:A("h2"),h3:A("h3"),h4:A("h4"),h5:A("h5"),h6:A("h6")}},150:function(e,t,n){var a;a=function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var a=window.getSelection(),r=document.createRange();r.selectNodeContents(e),a.removeAllRanges(),a.addRange(r),t=a.toString()}return t}},function(e,t){function n(){}n.prototype={on:function(e,t,n){var a=this.e||(this.e={});return(a[e]||(a[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var a=this;function r(){a.off(e,r),t.apply(n,arguments)}return r._=t,this.on(e,r,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),a=0,r=n.length;a<r;a++)n[a].fn.apply(n[a].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),a=n[e],r=[];if(a&&t)for(var o=0,i=a.length;o<i;o++)a[o].fn!==t&&a[o].fn._!==t&&r.push(a[o]);return r.length?n[e]=r:delete n[e],this}},e.exports=n,e.exports.TinyEmitter=n},function(e,t,n){var a=n(3),r=n(4);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!a.string(t))throw new TypeError("Second argument must be a String");if(!a.fn(n))throw new TypeError("Third argument must be a Function");if(a.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(a.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}(e,t,n);if(a.string(e))return function(e,t,n){return r(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t,n){var a=n(5);function r(e,t,n,a,r){var i=o.apply(this,arguments);return e.addEventListener(n,i,r),{destroy:function(){e.removeEventListener(n,i,r)}}}function o(e,t,n,r){return function(n){n.delegateTarget=a(n.target,t),n.delegateTarget&&r.call(e,n)}}e.exports=function(e,t,n,a,o){return"function"==typeof e.addEventListener?r.apply(null,arguments):"function"==typeof n?r.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return r(e,t,n,a,o)})))}},function(e,t){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return i(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=r()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=r()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":o(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}(),l=n(1),s=n.n(l),u=n(2),d=n.n(u),h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),m=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.resolveOptions(n),a.listenClick(e),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),f(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===h(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=d()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new c({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return p("action",e)}},{key:"defaultTarget",value:function(e){var t=p("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return p("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),t}(s.a);function p(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}t.default=m}]).default},e.exports=a()},151:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],a=t[2],r=t[3];if(n&&r){var o=[],i=(n=parseInt(n))<(r=parseInt(r))?1:-1;"-"!=a&&".."!=a&&"\u2025"!=a||(r+=i);for(var c=n;c!=r;c+=i)o.push(c);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},152:function(e,t){e.exports={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]}}}]);