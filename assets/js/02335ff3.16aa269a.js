"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),f=i,g=s["".concat(p,".").concat(f)]||s[f]||m[f]||o;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={},a="\ud83d\udce6 Plugins",l={unversionedId:"plugins/index",id:"plugins/index",title:"\ud83d\udce6 Plugins",description:"Configuring LazyVim plugins is exactly the same as using lazy.nvim to build",source:"@site/docs/plugins/index.md",sourceDirName:"plugins",slug:"/plugins/",permalink:"/plugins/",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/plugins/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/configuration/examples"},next:{title:"Coding",permalink:"/plugins/coding"}},p={},u=[],c={toc:u};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-plugins"},"\ud83d\udce6 Plugins"),(0,i.kt)("p",null,"Configuring ",(0,i.kt)("strong",{parentName:"p"},"LazyVim")," plugins is exactly the same as using ",(0,i.kt)("strong",{parentName:"p"},"lazy.nvim")," to build\na config from scratch."),(0,i.kt)("p",null,"For the full plugin spec documentation please check the ",(0,i.kt)("strong",{parentName:"p"},"lazy.nvim"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/folke/lazy.nvim"},"readme"),"."),(0,i.kt)("p",null,"Refer to the ",(0,i.kt)("strong",{parentName:"p"},"plugins")," section in the sidebar for configuring\nincluded plugins."))}s.isMDXComponent=!0}}]);