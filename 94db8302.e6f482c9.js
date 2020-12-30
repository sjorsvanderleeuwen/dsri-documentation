(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{128:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=o.a.createContext({}),p=function(e){var t=o.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,m=u["".concat(c,".").concat(b)]||u[b]||l[b]||a;return r?o.a.createElement(m,i(i({ref:t},d),{},{components:r})):o.a.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var d=2;d<a;d++)c[d]=r[d];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},98:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(128)),c={id:"deploy-neurodocker",title:"Neuroscience research"},i={unversionedId:"deploy-neurodocker",id:"deploy-neurodocker",isDocsHomePage:!1,title:"Neuroscience research",description:"The Neurodocker project helps you to create a Docker image with the Neuroscience softwares you need, such as FSL, FreeSurfer or ANTs. Checkout the Neurodocker documentation for more details//github.com/ReproNim/neurodocker",source:"@site/docs/deploy-neurodocker.md",slug:"/deploy-neurodocker",permalink:"/dsri-documentation/docs/deploy-neurodocker",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/deploy-neurodocker.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1609336773,sidebar:"docs",previous:{title:"Start a VSCode server",permalink:"/dsri-documentation/docs/deploy-vscode"},next:{title:"Start on GPU",permalink:"/dsri-documentation/docs/deploy-on-gpu"}},s=[],d={rightToc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Neurodocker project helps you to create a Docker image with the Neuroscience softwares you need, such as FSL, FreeSurfer or ANTs. Checkout the Neurodocker documentation for more details: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ReproNim/neurodocker"}),"https://github.com/ReproNim/neurodocker")),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"In this page we will show you how to generate a Docker image with FreeSurfer and FSL installed. Feel free to change it to adapt it to your needs."))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Generate a ",Object(a.b)("inlineCode",{parentName:"li"},"Dockerfile")," with FreeSurfer and FSL installation:")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker run --rm repronim/neurodocker:0.7.0 generate docker \\\n    --base debian:stretch --pkg-manager apt \\\n    --freesurfer version=6.0.1 --fsl version=6.0.3 > Dockerfile\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Checkout the documentation to ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://maastrichtu-ids.github.io/dsri-documentation/docs/guide-dockerfile-to-openshift"}),"deploy the ",Object(a.b)("inlineCode",{parentName:"a"},"Dockerfile")," on DSRI"),". ")),Object(a.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Running a UI through VNC (e.g. FSLeyes) is still a work in progress. See ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ReproNim/neurodocker/issues/343"}),"this issue for more details"),"."))))}p.isMDXComponent=!0}}]);