"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[375],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6474:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"digital-garden",id:"digital-garden",title:"digital-garden",description:"A digital garden is different from a blog in the way that information is slowly nurtured over time instead of presenting all the information at once. The author does not feel any pressure to be perfect at the subject and can instead slowly iterate over his knowledge.",source:"@site/docs/digital-garden.md",sourceDirName:".",slug:"/digital-garden",permalink:"/digital-garden/digital-garden",draft:!1,tags:[],version:"current",lastUpdatedAt:1669305178,formattedLastUpdatedAt:"Nov 24, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"devops",permalink:"/digital-garden/devops"},next:{title:"docker",permalink:"/digital-garden/docker"}},p={},s=[],d={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A digital garden is different from a blog in the way that information is slowly nurtured over time instead of presenting all the information at once. The author does not feel any pressure to be perfect at the subject and can instead slowly iterate over his knowledge."),(0,a.kt)("p",null,"To start a local development server, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm start\n")),(0,a.kt)("p",null,"First, I push all the changes to the repo using, "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'git add .\ngit commit -m "Add digital garden"\ngit push\n')),(0,a.kt)("p",null,"Then I run the command to deploy the site to GitHub pages, "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"USE_SSH=true yarn deploy\n")),(0,a.kt)("p",null,"which will push the changes to the ",(0,a.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"USE_SSH=true")," is an environment variable that is used to tell Docusaurus to use SSH instead of HTTPS to push the changes to the ",(0,a.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch. This is because I have set up SSH authentication for GitHub. If you have not set up SSH authentication for GitHub, you can use HTTPS instead. ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn deploy")," is a script added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file. It is a simple script that runs the ",(0,a.kt)("inlineCode",{parentName:"p"},"gh-pages")," command. ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus deploy")," is a command that is provided by Docusaurus. It will build the site and push the changes to the ",(0,a.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch."))}u.isMDXComponent=!0}}]);