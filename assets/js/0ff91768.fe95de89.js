"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[878],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>g});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,g=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return t?n.createElement(g,o(o({ref:r},u),{},{components:t})):n.createElement(g,o({ref:r},u))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3726:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const i={},o=void 0,c={unversionedId:"DevOps/docker",id:"DevOps/docker",title:"docker",description:"Building a Docker image",source:"@site/docs/DevOps/docker.md",sourceDirName:"DevOps",slug:"/DevOps/docker",permalink:"/digital-garden/DevOps/docker",draft:!1,tags:[],version:"current",lastUpdatedAt:1670147739,formattedLastUpdatedAt:"Dec 4, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DevOps",permalink:"/digital-garden/DevOps/"},next:{title:"grafana",permalink:"/digital-garden/DevOps/grafana"}},l={},p=[{value:"Building a Docker image",id:"building-a-docker-image",level:2},{value:"Running a Docker image",id:"running-a-docker-image",level:2},{value:"Tips:",id:"tips",level:2}],u={toc:p};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"building-a-docker-image"},"Building a Docker image"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build -t <image-name> .\n")),(0,a.kt)("h2",{id:"running-a-docker-image"},"Running a Docker image"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -it <image-name>\n")),(0,a.kt)("h2",{id:"tips"},"Tips:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use Build Cache when building images iteratively to retrieve cached layers and save time.")))}d.isMDXComponent=!0}}]);