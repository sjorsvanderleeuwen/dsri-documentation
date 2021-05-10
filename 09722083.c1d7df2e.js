(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{173:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),b=r,d=m["".concat(o,".").concat(b)]||m[b]||u[b]||i;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(173)),o={id:"catalog-genomics",title:"Genomics"},c={unversionedId:"catalog-genomics",id:"catalog-genomics",isDocsHomePage:!1,title:"Genomics",description:"Feel free to propose new services using pull requests, or to request them by creating new issues.",source:"@site/docs/catalog-genomics.md",slug:"/catalog-genomics",permalink:"/dsri-documentation/docs/catalog-genomics",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/catalog-genomics.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1620641085,sidebar:"docs",previous:{title:"Neuroscience research",permalink:"/dsri-documentation/docs/neuroscience"},next:{title:"Imaging softwares",permalink:"/dsri-documentation/docs/catalog-imaging"}},s=[{value:"Trinity RNA Seq",id:"trinity-rna-seq",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Feel free to propose new services using ",Object(i.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/dsri-documentation/pulls"},"pull requests"),", or to request them by creating ",Object(i.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/dsri-documentation/issues"},"new issues"),"."),Object(i.b)("h2",{id:"trinity-rna-seq"},"Trinity RNA Seq"),Object(i.b)("p",null,"Trinity assembles transcript sequences from Illumina RNA-Seq data. It represents a novel method for the efficient and robust the new reconstruction of transcriptomes from RNA-seq data. See ",Object(i.b)("a",{parentName:"p",href:"https://github.com/trinityrnaseq/trinityrnaseq/wiki"},"their documentation"),"."),Object(i.b)("p",null,"You can start a container using the ",Object(i.b)("strong",{parentName:"p"},"Trinity RNA-Seq")," template in the ",Object(i.b)("a",{parentName:"p",href:"https://console-openshift-console.apps.dsri2.unimaas.nl/console/catalog"},"Catalog web UI")," (make sure the ",Object(i.b)("strong",{parentName:"p"},"Templates")," checkbox is checked)"),Object(i.b)("img",{src:"/dsri-documentation/img/screenshot_trinityrnaseq.png",alt:"Deploy Trinity RNA Seq",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(i.b)("p",null,"This template uses the Trinity RNA-Seq image hosted in the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/orgs/maastrichtu-ids/packages/container/package/trinityrnaseq"},"UM IDS GitHub Container Registry")," "),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Persistent data folder")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\ud83d\udcc2 Use the ",Object(i.b)("inlineCode",{parentName:"p"},"/usr/local/src/work")," folder (home of the root user) to store your data in the existing persistent storage. You can find the persistent volumes in the DSRI web UI, go to the ",Object(i.b)("strong",{parentName:"p"},"Administrator")," view > ",Object(i.b)("strong",{parentName:"p"},"Storage")," > ",Object(i.b)("strong",{parentName:"p"},"Persistent Volume Claims"),"."))),Object(i.b)("p",null,"We enabled the port ",Object(i.b)("inlineCode",{parentName:"p"},"8787")," in the container, if you need to deploy applications."))}l.isMDXComponent=!0}}]);