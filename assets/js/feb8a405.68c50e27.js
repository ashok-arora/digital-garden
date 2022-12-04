"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[925],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8639:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i=void 0,s={unversionedId:"Reinforcement Learning/Neural Networks/CNN",id:"Reinforcement Learning/Neural Networks/CNN",title:"CNN",description:"CNN stands for Convolutional Neural Network. Compared to the traditional NNs that uses pre-defined features, CNNs use filters to extract features from an image.",source:"@site/docs/Reinforcement Learning/Neural Networks/CNN.md",sourceDirName:"Reinforcement Learning/Neural Networks",slug:"/Reinforcement Learning/Neural Networks/CNN",permalink:"/digital-garden/Reinforcement Learning/Neural Networks/CNN",draft:!1,tags:[],version:"current",lastUpdatedAt:1670147739,formattedLastUpdatedAt:"Dec 4, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cartpole Problem",permalink:"/digital-garden/Reinforcement Learning/Cartpole Problem"},next:{title:"DevOps",permalink:"/digital-garden/DevOps/"}},l={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"CNN stands for Convolutional Neural Network. Compared to the traditional NNs that uses pre-defined features, CNNs use filters to extract features from an image."),(0,a.kt)("p",null,"Downsampling the image is useful for saving memory and computation costs. Pooling layer is used to reduce the size of the image. It is done by taking the maximum value of the pixels in a window."),(0,a.kt)("p",null,"Backpropagation is used to update the weights of the network by moving in the direction of the better output. "),(0,a.kt)("p",null,"Convolutational layer is used to extract features from the image. It is done by sliding a filter over the image and multiplying the filter with the image. The filter is then moved to the next pixel and the process is repeated. The output of the convolutional layer is a feature map."),(0,a.kt)("p",null,"Traditional CNNs loose spatial information when the image is compressed. This is because the image is flattened into a vector. The encoder-decoder architecture is used to preserve the spatial information of the image. The encoder is a CNN that compresses the image into a vector. The decoder is a CNN that decompresses the vector into an image. The encoder and decoder are trained together. Traditional CNNs are used as the encoder and the decoder is a CNN with the same architecture as the encoder but with the weights reversed. "),(0,a.kt)("p",null,"CNNs are the best for image inputs. Transformers are the best for text inputs."))}p.isMDXComponent=!0}}]);