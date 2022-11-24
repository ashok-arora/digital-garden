"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[281],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},i="Linux",l={unversionedId:"linux",id:"linux",title:"Linux",description:"* Cronjobs are effective for scheduling tasks for a later time. They are also a great way to automate tasks that need to be done regularly. I use cronguru to help me write them. It's also a great way to learn how they work.",source:"@site/docs/linux.md",sourceDirName:".",slug:"/linux",permalink:"/digital-garden/linux",draft:!1,tags:[],version:"current",lastUpdatedAt:1669305178,formattedLastUpdatedAt:"Nov 24, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/digital-garden/kubernetes"},next:{title:"Exploring m1 mac",permalink:"/digital-garden/m1 mac"}},s={},u=[{value:"Window Manager",id:"window-manager",level:2}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"linux"},"Linux"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Cronjobs are effective for scheduling tasks for a later time. They are also a great way to automate tasks that need to be done regularly. I use ",(0,a.kt)("a",{parentName:"p",href:"https://crontab.guru/"},"cronguru")," to help me write them. It's also a great way to learn how they work. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"List the users using ",(0,a.kt)("inlineCode",{parentName:"p"},"less /etc/passwd"),". The first column is the username."))),(0,a.kt)("h2",{id:"window-manager"},"Window Manager"),(0,a.kt)("p",null,"i3wm is a good tiling window manager. It is very customizable and has a lot of features. It is also very lightweight. I use the i3-gaps version of i3wm.\nIt can be installed on Ubuntu from a PPA."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo add-apt-repository ppa:regolith-linux/release\nsudo apt update\nsudo apt install i3-gaps\n")),(0,a.kt)("p",null,"Ubuntu 22.04 Jammy Jellyfish does not have a PPA for i3-gaps. It can be installed from source.\nFirst, install the necessary dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt install libxcb1-dev libxcb-keysyms1-dev libpango1.0-dev \\\n  libxcb-util0-dev libxcb-icccm4-dev libyajl-dev \\\n  libstartup-notification0-dev libxcb-randr0-dev \\\n  libev-dev libxcb-cursor-dev libxcb-xinerama0-dev \\\n  libxcb-xkb-dev libxkbcommon-dev libxkbcommon-x11-dev \\\n  autoconf libxcb-xrm0 libxcb-xrm-dev automake libxcb-shape0-dev\n")),(0,a.kt)("p",null,"Next, clone the i3-gaps repository and build it:"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("a",{parentName:"p",href:"https://gist.github.com/boreycutts/6417980039760d9d9dac0dd2148d4783"},"installation guide")," is outdated. The ",(0,a.kt)("inlineCode",{parentName:"p"},"autoreconf")," command fails,"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"autoreconf --force --install\nrm -rf build\nmkdir build\ncd build\n../configure --prefix=/usr --sysconfdir=/etc\nmake\nsudo make install\n")),(0,a.kt)("p",{parentName:"admonition"},"with the following error:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"autoreconf: error: 'configure.ac' is required\n-bash: ../configure: No such file or directory\nmake: *** No targets specified and no makefile found.  Stop.\nmake: *** No rule to make target 'install'.  Stop.\n"))),(0,a.kt)("p",null,"Instead, use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd /tmp\ngit clone https://www.github.com/Airblader/i3.git i3-gaps\ncd i3-gaps\ngit checkout gaps && git pull\nsudo apt install meson asciidoc\nmeson -Ddocs=true -Dmans=true ../build\nmeson compile -C ../build\nsudo meson install -C ../build\n")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"RDP won't work with i3wm by default. I ended up installing ubuntu-desktop and changing the default WM from GNOME to i3wm.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"I use vim for light text editing and VSCode for more complex tasks. I also use vim for editing files on the server.")))}c.isMDXComponent=!0}}]);