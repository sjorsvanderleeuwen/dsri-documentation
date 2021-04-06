(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{169:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?a.a.createElement(b,c(c({ref:t},p),{},{components:n})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(169)),i={id:"catalog-genomics",title:"Genomics"},c={unversionedId:"catalog-genomics",id:"catalog-genomics",isDocsHomePage:!1,title:"Genomics",description:"Feel free to propose new services using pull requests, or to request them by creating new issues.",source:"@site/docs/catalog-genomics.md",slug:"/catalog-genomics",permalink:"/dsri-documentation/docs/catalog-genomics",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/catalog-genomics.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1617737045,sidebar:"docs",previous:{title:"Neuroscience research",permalink:"/dsri-documentation/docs/neuroscience"},next:{title:"GPU applications",permalink:"/dsri-documentation/docs/deploy-on-gpu"}},s=[{value:"Trinity RNA Seq",id:"trinity-rna-seq",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Feel free to propose new services using ",Object(o.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/dsri-documentation/pulls"},"pull requests"),", or to request them by creating ",Object(o.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/dsri-documentation/issues"},"new issues"),"."),Object(o.b)("h2",{id:"trinity-rna-seq"},"Trinity RNA Seq"),Object(o.b)("p",null,"Trinity assembles transcript sequences from Illumina RNA-Seq data. It represents a novel method for the efficient and robust the new reconstruction of transcriptomes from RNA-seq data. See ",Object(o.b)("a",{parentName:"p",href:"https://github.com/trinityrnaseq/trinityrnaseq/wiki"},"their documentation"),"."),Object(o.b)("p",null,"You can start a container using the ",Object(o.b)("strong",{parentName:"p"},"Trinity RNA-Seq (persistent)")," template in the ",Object(o.b)("a",{parentName:"p",href:"https://console-openshift-console.apps.dsri2.unimaas.nl/console/catalog"},"Catalog web UI")," (make sure the ",Object(o.b)("strong",{parentName:"p"},"Templates")," checkbox is checked)"),Object(o.b)("img",{src:"/dsri-documentation/img/screenshot_trinityrnaseq.png",alt:"Deploy Trinity RNA Seq",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(o.b)("p",null,"This template uses the Trinity RNA-Seq image hosted in the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/orgs/maastrichtu-ids/packages/container/package/trinityrnaseq"},"UM IDS GitHub Container Registry")," "),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Persistent data folder")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\ud83d\udcc2 Use the ",Object(o.b)("inlineCode",{parentName:"p"},"/usr/local/src/work")," folder (home of the root user) to store your data in the existing persistent storage. You can find the persistent volumes in the DSRI web UI, go to the ",Object(o.b)("strong",{parentName:"p"},"Administrator")," view > ",Object(o.b)("strong",{parentName:"p"},"Storage")," > ",Object(o.b)("strong",{parentName:"p"},"Persistent Volume Claims"),"."))),Object(o.b)("p",null,"We enabled the port ",Object(o.b)("inlineCode",{parentName:"p"},"8787")," in the container, if you need to deploy applications."))}l.isMDXComponent=!0}}]);