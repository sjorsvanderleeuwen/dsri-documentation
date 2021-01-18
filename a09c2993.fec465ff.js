(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{102:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),c=(a(0),a(130)),i={id:"introduction",title:"Introduction",slug:"/"},o={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"The Data Science Research Infrastructure is an OKD cluster (the open source version of OpenShift), using the MapR Distributed File System, using Kubernetes containers orchestration.",source:"@site/docs/introduction.md",slug:"/",permalink:"/dsri-documentation/docs/",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/introduction.md",version:"current",lastUpdatedBy:"Binosha",lastUpdatedAt:1610980966,sidebar:"docs",next:{title:"Access the DSRI",permalink:"/dsri-documentation/docs/access-dsri"}},b=[{value:"Getting started",id:"getting-started",children:[{value:"What can be done on the DSRI \u2714\ufe0f",id:"what-can-be-done-on-the-dsri-\ufe0f",children:[]},{value:"What cannot be done \u274c",id:"what-cannot-be-done-",children:[]}]},{value:"The DSRI specifications",id:"the-dsri-specifications",children:[{value:"Software",id:"software",children:[]},{value:"Hardware",id:"hardware",children:[]}]},{value:"Learn more about DSRI",id:"learn-more-about-dsri",children:[]}],s={rightToc:b};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The Data Science Research Infrastructure is an ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.okd.io/"}),"OKD")," cluster (the open source version of ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.openshift.com/"}),"OpenShift"),"), using the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://mapr.com/"}),"MapR")," Distributed File System, using ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/"}),"Kubernetes")," containers orchestration."),Object(c.b)("p",null,"The DSRI provides a graphical user interface on top of the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/"}),"Kubernetes")," containers orchestration to easily deploy and manage services. "),Object(c.b)("h2",{id:"getting-started"},"Getting started"),Object(c.b)("h3",{id:"what-can-be-done-on-the-dsri-\ufe0f"},"What can be done on the DSRI \u2714\ufe0f"),Object(c.b)("p",null,"Run Data Science applications in ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.docker.com/"}),"Docker container \ud83d\udc33")," on the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://vpn.maastrichtuniversity.nl/"}),"UM network"),", such as:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Multiple flavors of ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/jupyter/docker-stacks"}),"JupyterLab")," (scipy, tensorflow, all-spark, and more)"),Object(c.b)("li",{parentName:"ul"},"JupyterHub with GitHub authentication"),Object(c.b)("li",{parentName:"ul"},"RStudio, with a complementary Shiny server"),Object(c.b)("li",{parentName:"ul"},"VisualStudio ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/cdr/code-server"}),"Code server")),Object(c.b)("li",{parentName:"ul"},"Tensorflow or PyTorch on Nvidia GPU (with JupyterLab or VisualStudio Code)"),Object(c.b)("li",{parentName:"ul"},"Apache Flink cluster for streaming applications"),Object(c.b)("li",{parentName:"ul"},"Or any program installed in a Docker image!")),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Data storage")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"The data will be safely stored in persistent volumes."))),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Workflows")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"For user already familiar with those concepts ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/dsri-documentation/docs/workflows-introduction"}),"workflow orchestration tools")," can be installed, such as ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/dsri-documentation/docs/workflows-argo"}),"Argo workflows"),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/dsri-documentation/docs/workflows-nextflow"}),"Nextflow")," or ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/dsri-documentation/docs/workflows-cwl"}),"CWL Calrissian"),"."))),Object(c.b)("h3",{id:"what-cannot-be-done-"},"What cannot be done \u274c"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Since DSRI can only be accessed when on the physical UM network or using the ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://vpn.maastrichtuniversity.nl/"}),"UM VPN"),", deployed services will not be available on the public Internet \ud83d\udd12"),Object(c.b)("li",{parentName:"ul"},"All activities must be legal in basis. You must closely examine and abide by the terms and conditions of any data, software, or web service that you use as part of your work \ud83d\udcdc")),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Request an account")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"If you are working at Maastricht University, ",Object(c.b)("strong",{parentName:"p"},"see ",Object(c.b)("a",Object(n.a)({parentName:"strong"},{href:"https://maastrichtu-ids.github.io/dsri-documentation/docs/access-dsri"}),"this page")," to request an account"),", and run your services on the DSRI."))),Object(c.b)("h2",{id:"the-dsri-specifications"},"The DSRI specifications"),Object(c.b)("h3",{id:"software"},"Software"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"strong"},{href:"https://www.okd.io/"}),"OKD 3.11"))," (Open Source version of ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.openshift.com/"}),"RedHat OpenShift"),") to run services and jobs.",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"We are working on upgrading to ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/openshift/okd/releases"}),"OKD 4.5")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"strong"},{href:"https://mapr.com/"}),"HP MapR"))," for distributed storage.",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.redhat.com/fr/technologies/storage/ceph"}),"RedHat Ceph storage")," is also considered")))),Object(c.b)("h3",{id:"hardware"},"Hardware"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"16 CPU nodes")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"RAM (GB)"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"CPU (cores)"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Storage (TB)"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Node capacity"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"512 GB"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"128 cores"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"120 TB")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Total capacity"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8 192 GB"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2 048 cores"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1 920 TB")))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"1 GPU node: ",Object(c.b)("strong",{parentName:"li"},"Nvidia DGX1")," 8x Tesla V100 - 32GB GPU")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"GPUs"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"RAM (GB)"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"CPU (cores)"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GPU node capacity"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"528 GB"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"80 cores")))),Object(c.b)("img",{src:"/dsri-documentation/img/DSRI_infrastructure_architecture_overview.png",alt:"DSRI infrastructure ",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(c.b)("h2",{id:"learn-more-about-dsri"},"Learn more about DSRI"),Object(c.b)("p",null,"See the following presentation about the Data Science Research Infrastructure "),Object(c.b)("a",{href:"/dsri-documentation/resource/2020-11-DSRI-Community-Event.pdf",target:"_blank",rel:"noopener noreferrer"},Object(c.b)("img",{src:"/dsri-documentation/resource/DSRI-community-event.png",style:{maxWidth:"100%",maxHeight:"100%"},alt:"DSRI Nov 2020 Community Event Presentation"})))}l.isMDXComponent=!0},130:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=l(a),u=n,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||c;return a?r.a.createElement(m,o(o({ref:t},s),{},{components:a})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);