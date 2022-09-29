"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[776],{3905:(a,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>c});var s=t(7294);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function n(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,s)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,s,m=function(a,e){if(null==a)return{};var t,s,m={},n=Object.keys(a);for(s=0;s<n.length;s++)t=n[s],e.indexOf(t)>=0||(m[t]=a[t]);return m}(a,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);for(s=0;s<n.length;s++)t=n[s],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(m[t]=a[t])}return m}var l=s.createContext({}),N=function(a){var e=s.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},i=function(a){var e=N(a.components);return s.createElement(l.Provider,{value:e},a.children)},o={inlineCode:"code",wrapper:function(a){var e=a.children;return s.createElement(s.Fragment,{},e)}},k=s.forwardRef((function(a,e){var t=a.components,m=a.mdxType,n=a.originalType,l=a.parentName,i=r(a,["components","mdxType","originalType","parentName"]),k=N(t),c=m,h=k["".concat(l,".").concat(c)]||k[c]||o[c]||n;return t?s.createElement(h,p(p({ref:e},i),{},{components:t})):s.createElement(h,p({ref:e},i))}));function c(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var n=t.length,p=new Array(n);p[0]=k;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=a,r.mdxType="string"==typeof a?a:m,p[1]=r;for(var N=2;N<n;N++)p[N]=t[N];return s.createElement.apply(null,p)}return s.createElement.apply(null,t)}k.displayName="MDXCreateElement"},6795:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>o,frontMatter:()=>n,metadata:()=>r,toc:()=>N});var s=t(7462),m=(t(7294),t(3905));const n={},p=void 0,r={unversionedId:"Reinforcement Learning",id:"Reinforcement Learning",title:"Reinforcement Learning",description:"The traditional Q-learning model is weak since it requires access to the Q-table. Instead, we can use a Neural Network to approximate the Q-table. This is called Deep Q-Learning. The network takes in the state as input and outputs the Q-values for each action. The NN estimates the possible actions from the state provided.",source:"@site/docs/Reinforcement Learning.md",sourceDirName:".",slug:"/Reinforcement Learning",permalink:"/digital-garden/Reinforcement Learning",draft:!1,tags:[],version:"current",lastUpdatedAt:1664485881,formattedLastUpdatedAt:"Sep 29, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hello World!",permalink:"/digital-garden/"},next:{title:"arduino",permalink:"/digital-garden/arduino"}},l={},N=[],i={toc:N};function o(a){let{components:e,...t}=a;return(0,m.kt)("wrapper",(0,s.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("p",null,"The traditional Q-learning model is weak since it requires access to the Q-table. Instead, we can use a Neural Network to approximate the Q-table. This is called Deep Q-Learning. The network takes in the state as input and outputs the Q-values for each action. The NN estimates the possible actions from the state provided."),(0,m.kt)("p",null,"A relatively newer algorithm is Asynchronous Advantage Actor Critic (A3C). "),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"This algorithm is an extension of the Actor-Critic algorithm. "),(0,m.kt)("li",{parentName:"ul"},"The Actor-Critic algorithm is an extension of the Policy Gradient algorithm. "),(0,m.kt)("li",{parentName:"ul"},"The Policy Gradient algorithm is an extension of the REINFORCE algorithm. "),(0,m.kt)("li",{parentName:"ul"},"The REINFORCE algorithm is an extension of the Monte Carlo algorithm. "),(0,m.kt)("li",{parentName:"ul"},"The Monte Carlo algorithm is an extension of the Dynamic Programming algorithm. "),(0,m.kt)("li",{parentName:"ul"},"The Dynamic Programming algorithm is an extension of the Bellman Equation. "),(0,m.kt)("li",{parentName:"ul"},"According to the Bellman Equation, long-term reward in a given action is equal to the reward from the current action combined with the expected reward from the future actions taken at the following time.")),(0,m.kt)("p",null,"The Bellman Equation is given by:"),(0,m.kt)("div",{className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"V"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mi",{parentName:"mrow"},"m"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"x"),(0,m.kt)("mi",{parentName:"msub"},"a")),(0,m.kt)("munder",{parentName:"mrow"},(0,m.kt)("mo",{parentName:"munder"},"\u2211"),(0,m.kt)("mrow",{parentName:"munder"},(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup"},"s"),(0,m.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"r"))),(0,m.kt)("mi",{parentName:"mrow"},"p"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup"},"s"),(0,m.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("mi",{parentName:"mrow"},"\u03b3"),(0,m.kt)("mi",{parentName:"mrow"},"V"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup"},"s"),(0,m.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,m.kt)("mspace",{parentName:"mrow",linebreak:"newline"}),(0,m.kt)("mtable",{parentName:"mrow",rowspacing:"0.25em",columnalign:"right left",columnspacing:"0em"},(0,m.kt)("mtr",{parentName:"mtable"},(0,m.kt)("mtd",{parentName:"mtr"},(0,m.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,m.kt)("mrow",{parentName:"mstyle"}))),(0,m.kt)("mtd",{parentName:"mtr"},(0,m.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,m.kt)("mrow",{parentName:"mstyle"},(0,m.kt)("mrow",{parentName:"mrow"}),(0,m.kt)("mtext",{parentName:"mrow"},"where,\xa0"))))),(0,m.kt)("mtr",{parentName:"mtable"},(0,m.kt)("mtd",{parentName:"mtr"},(0,m.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,m.kt)("mrow",{parentName:"mstyle"}))),(0,m.kt)("mtd",{parentName:"mtr"},(0,m.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,m.kt)("mrow",{parentName:"mstyle"},(0,m.kt)("mrow",{parentName:"mrow"}),(0,m.kt)("mrow",{parentName:"mrow"},(0,m.kt)("mstyle",{parentName:"mrow",scriptlevel:"0",displaystyle:"false"},(0,m.kt)("mi",{parentName:"mstyle"},"s")),(0,m.kt)("mtext",{parentName:"mrow"},"\xa0is\xa0the\xa0current\xa0state,")))))),(0,m.kt)("mtr",{parentName:"mtable"},(0,m.kt)("mtd",{parentName:"mtr"},(0,m.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,m.kt)("mrow",{parentName:"mstyle"}))),(0,m.kt)("mtd",{parentName:"mtr"},(0,m.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,m.kt)("mrow",{parentName:"mstyle"},(0,m.kt)("mrow",{parentName:"mrow"}),(0,m.kt)("mrow",{parentName:"mrow"},(0,m.kt)("mstyle",{parentName:"mrow",scriptlevel:"0",displaystyle:"false"},(0,m.kt)("mi",{parentName:"mstyle"},"V"),(0,m.kt)("mo",{parentName:"mstyle",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mstyle"},"s"),(0,m.kt)("mo",{parentName:"mstyle",stretchy:"false"},")")),(0,m.kt)("mtext",{parentName:"mrow"},"\xa0is\xa0the\xa0value\xa0of\xa0the\xa0state\xa0"),(0,m.kt)("mstyle",{parentName:"mrow",scriptlevel:"0",displaystyle:"false"},(0,m.kt)("mi",{parentName:"mstyle"},"s")),(0,m.kt)("mtext",{parentName:"mrow"},",")))))),(0,m.kt)("mtr",{parentName:"mtable"},(0,m.kt)("mtd",{parentName:"mtr"},(0,m.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,m.kt)("mrow",{parentName:"mstyle"}))),(0,m.kt)("mtd",{parentName:"mtr"},(0,m.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,m.kt)("mrow",{parentName:"mstyle"},(0,m.kt)("mrow",{parentName:"mrow"}),(0,m.kt)("mrow",{parentName:"mrow"},(0,m.kt)("mstyle",{parentName:"mrow",scriptlevel:"0",displaystyle:"false"},(0,m.kt)("msup",{parentName:"mstyle"},(0,m.kt)("mi",{parentName:"msup"},"s"),(0,m.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032"))),(0,m.kt)("mtext",{parentName:"mrow"},"\xa0is\xa0the\xa0next\xa0state,")))))),(0,m.kt)("mtr",{parentName:"mtable"},(0,m.kt)("mtd",{parentName:"mtr"},(0,m.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,m.kt)("mrow",{parentName:"mstyle"}))),(0,m.kt)("mtd",{parentName:"mtr"},(0,m.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,m.kt)("mrow",{parentName:"mstyle"},(0,m.kt)("mrow",{parentName:"mrow"}),(0,m.kt)("mrow",{parentName:"mrow"},(0,m.kt)("mstyle",{parentName:"mrow",scriptlevel:"0",displaystyle:"false"},(0,m.kt)("mi",{parentName:"mstyle"},"r")),(0,m.kt)("mtext",{parentName:"mrow"},"\xa0is\xa0the\xa0reward,")))))),(0,m.kt)("mtr",{parentName:"mtable"},(0,m.kt)("mtd",{parentName:"mtr"},(0,m.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,m.kt)("mrow",{parentName:"mstyle"}))),(0,m.kt)("mtd",{parentName:"mtr"},(0,m.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,m.kt)("mrow",{parentName:"mstyle"},(0,m.kt)("mrow",{parentName:"mrow"}),(0,m.kt)("mrow",{parentName:"mrow"},(0,m.kt)("mstyle",{parentName:"mrow",scriptlevel:"0",displaystyle:"false"},(0,m.kt)("mi",{parentName:"mstyle"},"a")),(0,m.kt)("mtext",{parentName:"mrow"},"\xa0is\xa0the\xa0action,")))))),(0,m.kt)("mtr",{parentName:"mtable"},(0,m.kt)("mtd",{parentName:"mtr"},(0,m.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,m.kt)("mrow",{parentName:"mstyle"}))),(0,m.kt)("mtd",{parentName:"mtr"},(0,m.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,m.kt)("mrow",{parentName:"mstyle"},(0,m.kt)("mrow",{parentName:"mrow"}),(0,m.kt)("mrow",{parentName:"mrow"},(0,m.kt)("mstyle",{parentName:"mrow",scriptlevel:"0",displaystyle:"false"},(0,m.kt)("mi",{parentName:"mstyle"},"\u03b3")),(0,m.kt)("mtext",{parentName:"mrow"},"\xa0is\xa0the\xa0discount\xa0factor,")))))),(0,m.kt)("mtr",{parentName:"mtable"},(0,m.kt)("mtd",{parentName:"mtr"},(0,m.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,m.kt)("mrow",{parentName:"mstyle"}))),(0,m.kt)("mtd",{parentName:"mtr"},(0,m.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,m.kt)("mrow",{parentName:"mstyle"},(0,m.kt)("mrow",{parentName:"mrow"}),(0,m.kt)("mtext",{parentName:"mrow"},"p(s\u2019,r|s,a)\xa0is\xa0the\xa0probability\xa0of\xa0transition,\xa0and,"))))),(0,m.kt)("mtr",{parentName:"mtable"},(0,m.kt)("mtd",{parentName:"mtr"},(0,m.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,m.kt)("mrow",{parentName:"mstyle"}))),(0,m.kt)("mtd",{parentName:"mtr"},(0,m.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,m.kt)("mrow",{parentName:"mstyle"},(0,m.kt)("mrow",{parentName:"mrow"}),(0,m.kt)("mrow",{parentName:"mrow"},(0,m.kt)("mstyle",{parentName:"mrow",scriptlevel:"0",displaystyle:"false"},(0,m.kt)("mi",{parentName:"mstyle"},"m"),(0,m.kt)("mi",{parentName:"mstyle"},"a"),(0,m.kt)("msub",{parentName:"mstyle"},(0,m.kt)("mi",{parentName:"msub"},"x"),(0,m.kt)("mi",{parentName:"msub"},"a"))),(0,m.kt)("mtext",{parentName:"mrow"},"\xa0is\xa0the\xa0maximum\xa0value\xa0of\xa0the\xa0sum\xa0of\xa0the\xa0reward\xa0and\xa0the\xa0discounted\xa0value\xa0of\xa0the\xa0next\xa0state.")))))))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"V(s) = max_a \\sum_{s',r} p(s',r|s,a)[r + \\gamma V(s')] \\newline \\begin{align*} & \\textnormal{where, } \\\\ & \\textnormal{$s$ is the current state,} \\\\ & \\textnormal{$V(s)$ is the value of the state $s$,} \\\\ & \\textnormal{$s'$ is the next state,} \\\\ & \\textnormal{$r$ is the reward,} \\\\ & \\textnormal{$a$ is the action,} \\\\ & \\textnormal{$\\gamma$ is the discount factor,} \\\\ & \\textnormal{p(s',r|s,a) is the probability of transition, and,}\\\\ & \\textnormal{$max_a$ is the maximum value of the sum of the reward and the discounted value of the next state.} \\\\ \\end{align*}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"2.4801em",verticalAlign:"-1.4301em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"ma"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mop op-limits"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.05em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-1.856em",marginLeft:"0em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"s"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6828em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.786em",marginRight:"0.0714em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,m.kt)("span",{parentName:"span",className:"mpunct mtight"},","),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"r")))),(0,m.kt)("span",{parentName:"span",style:{top:"-3.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,m.kt)("span",{parentName:"span"},(0,m.kt)("span",{parentName:"span",className:"mop op-symbol large-op"},"\u2211")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.4301em"}},(0,m.kt)("span",{parentName:"span"}))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8019em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.113em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"mord"},"\u2223"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0519em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"\u03b3V"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8019em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.113em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,m.kt)("span",{parentName:"span",className:"mclose"},")]")),(0,m.kt)("span",{parentName:"span",className:"mspace newline"}),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"13.5em",verticalAlign:"-6.5em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mtable"},(0,m.kt)("span",{parentName:"span",className:"col-align-r"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"7em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-9em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.84em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"})),(0,m.kt)("span",{parentName:"span",style:{top:"-7.5em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.84em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"})),(0,m.kt)("span",{parentName:"span",style:{top:"-6em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.84em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"})),(0,m.kt)("span",{parentName:"span",style:{top:"-4.5em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.84em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"})),(0,m.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.84em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"})),(0,m.kt)("span",{parentName:"span",style:{top:"-1.5em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.84em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"})),(0,m.kt)("span",{parentName:"span",style:{top:"0em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.84em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"})),(0,m.kt)("span",{parentName:"span",style:{top:"1.5em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.84em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"})),(0,m.kt)("span",{parentName:"span",style:{top:"3em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.84em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"}))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"6.5em"}},(0,m.kt)("span",{parentName:"span"}))))),(0,m.kt)("span",{parentName:"span",className:"col-align-l"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"7em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-9.16em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"}),(0,m.kt)("span",{parentName:"span",className:"mord text"},(0,m.kt)("span",{parentName:"span",className:"mord textrm"},"where,\xa0")))),(0,m.kt)("span",{parentName:"span",style:{top:"-7.66em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"}),(0,m.kt)("span",{parentName:"span",className:"mord text"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord textrm"},"\xa0is\xa0the\xa0current\xa0state,")))),(0,m.kt)("span",{parentName:"span",style:{top:"-6.16em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"}),(0,m.kt)("span",{parentName:"span",className:"mord text"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mord textrm"},"\xa0is\xa0the\xa0value\xa0of\xa0the\xa0state\xa0"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord textrm"},",")))),(0,m.kt)("span",{parentName:"span",style:{top:"-4.66em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"}),(0,m.kt)("span",{parentName:"span",className:"mord text"},(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7519em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,m.kt)("span",{parentName:"span",className:"mord textrm"},"\xa0is\xa0the\xa0next\xa0state,")))),(0,m.kt)("span",{parentName:"span",style:{top:"-3.16em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"}),(0,m.kt)("span",{parentName:"span",className:"mord text"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"mord textrm"},"\xa0is\xa0the\xa0reward,")))),(0,m.kt)("span",{parentName:"span",style:{top:"-1.66em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"}),(0,m.kt)("span",{parentName:"span",className:"mord text"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mord textrm"},"\xa0is\xa0the\xa0action,")))),(0,m.kt)("span",{parentName:"span",style:{top:"-0.16em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"}),(0,m.kt)("span",{parentName:"span",className:"mord text"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05556em"}},"\u03b3"),(0,m.kt)("span",{parentName:"span",className:"mord textrm"},"\xa0is\xa0the\xa0discount\xa0factor,")))),(0,m.kt)("span",{parentName:"span",style:{top:"1.34em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"}),(0,m.kt)("span",{parentName:"span",className:"mord text"},(0,m.kt)("span",{parentName:"span",className:"mord textrm"},"p(s\u2019,r|s,a)\xa0is\xa0the\xa0probability\xa0of\xa0transition,\xa0and,")))),(0,m.kt)("span",{parentName:"span",style:{top:"2.84em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"}),(0,m.kt)("span",{parentName:"span",className:"mord text"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"ma"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mord textrm"},"\xa0is\xa0the\xa0maximum\xa0value\xa0of\xa0the\xa0sum\xa0of\xa0the\xa0reward\xa0and\xa0the\xa0discounted\xa0value\xa0of\xa0the\xa0next\xa0state."))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"6.5em"}},(0,m.kt)("span",{parentName:"span"})))))))))))),(0,m.kt)("p",null,"Links:"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("a",{parentName:"li",href:"https://github.com/udacity/deep-reinforcement-learning/blob/master/cheatsheet/cheatsheet.pdf"},"Good cheatsheet on Bellman Equation"))))}o.isMDXComponent=!0}}]);