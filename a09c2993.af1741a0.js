(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{106:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(140)),o=["components"],c={id:"introduction",title:"Introduction",slug:"/"},l={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"The Data Science Research Infrastructure is an OKD 4.6 cluster, the open source version of OpenShift, using RedHat Ceph Storage.",source:"@site/docs/introduction.md",slug:"/",permalink:"/dsri-documentation/docs/",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/introduction.md",version:"current",lastUpdatedBy:"Binosha",lastUpdatedAt:1626252448,sidebar:"docs",next:{title:"Access the DSRI",permalink:"/dsri-documentation/docs/access-dsri"}},b=[{value:"Getting started",id:"getting-started",children:[{value:"What can be done on the DSRI \u2714\ufe0f",id:"what-can-be-done-on-the-dsri-\ufe0f",children:[]},{value:"What cannot be done \u274c",id:"what-cannot-be-done-",children:[]}]},{value:"The DSRI architecture",id:"the-dsri-architecture",children:[]},{value:"The DSRI specifications",id:"the-dsri-specifications",children:[{value:"Software",id:"software",children:[]},{value:"Hardware",id:"hardware",children:[]}]},{value:"Learn more about DSRI",id:"learn-more-about-dsri",children:[]}],s={rightToc:b};function p(e){var t=e.components,a=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Data Science Research Infrastructure is an ",Object(i.b)("a",{parentName:"p",href:"https://www.okd.io/"},"OKD 4.6")," cluster, the open source version of ",Object(i.b)("a",{parentName:"p",href:"https://www.openshift.com/"},"OpenShift"),", using ",Object(i.b)("a",{parentName:"p",href:"https://www.redhat.com/en/technologies/storage/ceph"},"RedHat Ceph Storage"),"."),Object(i.b)("p",null,"The DSRI provides a graphical user interface on top of the ",Object(i.b)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes")," containers orchestration to easily deploy and manage workspaces and services. "),Object(i.b)("h2",{id:"getting-started"},"Getting started"),Object(i.b)("h3",{id:"what-can-be-done-on-the-dsri-\ufe0f"},"What can be done on the DSRI \u2714\ufe0f"),Object(i.b)("p",null,"The DSRI works best when you work with code, scripts to run, and web applications. Especially if they require an important amount of computing resources. If you work on desktop softwares with graphical user interface, such as Matlab or Spyder, the installation will be much more complex, and usually using your laptop will be more comfortable, stable and reactive than accessing a desktop interface on a remote server through the UM VPN."),Object(i.b)("p",null,"Here is a non-exhaustive list of some of the services that can easily be deployed on the DSRI:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Multiple flavors of ",Object(i.b)("a",{parentName:"p",href:"https://github.com/jupyter/docker-stacks"},"JupyterLab")," (scipy, tensorflow, all-spark, and more)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"JupyterHub with GitHub authentication")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"RStudio, with a complementary Shiny server")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"VisualStudio ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cdr/code-server"},"Code server"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Tensorflow or PyTorch on Nvidia GPU (with JupyterLab or VisualStudio Code)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"SQL databases (MariaDB, MySQL, PostgreSQL)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"NoSQL databases (MongoDB, Redis)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Graph databases (GraphDB, Blazegraph, Virtuoso)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Apache Flink cluster for streaming applications")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Apache Spark cluster for distributed computing")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Or any program installed in a Docker image!"))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Data storage")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"DSRI is a computing infrastructure"),", built and used to run data science workloads. DSRI stores data in a persistent manner, but all data stored on the DSRI is susceptible to be altered by the workloads you are running, and we cannot guarantee its immutability."),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"Always keep a safe copy of your data outside the DSRI"),". And don't rely on the DSRI for long term storage."))),Object(i.b)("h3",{id:"what-cannot-be-done-"},"What cannot be done \u274c"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Since DSRI can only be accessed when on the physical UM network or using the ",Object(i.b)("a",{parentName:"li",href:"https://vpn.maastrichtuniversity.nl/"},"UM VPN"),", deployed services will not be available on the public Internet \ud83d\udd12"),Object(i.b)("li",{parentName:"ul"},"All activities must be legal in basis. You must closely examine and abide by the terms and conditions of any data, software, or web service that you use as part of your work \ud83d\udcdc")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Request an account")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"If you are working at Maastricht University, ",Object(i.b)("strong",{parentName:"p"},"see ",Object(i.b)("a",{parentName:"strong",href:"https://maastrichtu-ids.github.io/dsri-documentation/docs/access-dsri"},"this page")," to request an account"),", and run your services on the DSRI."))),Object(i.b)("h2",{id:"the-dsri-architecture"},"The DSRI architecture"),Object(i.b)("p",null,"Here is a diagram providing a simplified explanation of how the DSRI works, using popular data science applications as examples (JupyterLab, RStudio, VSCode server)"),Object(i.b)("img",{src:"/dsri-documentation/img/dsri_simplified_overview.png",alt:"DSRI in a nutshell ",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(i.b)("h2",{id:"the-dsri-specifications"},"The DSRI specifications"),Object(i.b)("h3",{id:"software"},"Software"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.okd.io/"},Object(i.b)("strong",{parentName:"a"},"OKD 4.6"))," (Open Source version of ",Object(i.b)("a",{parentName:"li",href:"https://www.openshift.com/"},"RedHat OpenShift"),") to run services and jobs."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.redhat.com/fr/technologies/storage/ceph"},Object(i.b)("strong",{parentName:"a"},"RedHat Ceph storage"))," for distributed storage.")),Object(i.b)("h3",{id:"hardware"},"Hardware"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"16 CPU nodes")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null}),Object(i.b)("th",{parentName:"tr",align:null},"RAM (GB)"),Object(i.b)("th",{parentName:"tr",align:null},"CPU (cores)"),Object(i.b)("th",{parentName:"tr",align:null},"Storage (TB)"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Node capacity"),Object(i.b)("td",{parentName:"tr",align:null},"512 GB"),Object(i.b)("td",{parentName:"tr",align:null},"64 cores (128 threads)"),Object(i.b)("td",{parentName:"tr",align:null},"120 TB")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Total capacity"),Object(i.b)("td",{parentName:"tr",align:null},"8 192 GB"),Object(i.b)("td",{parentName:"tr",align:null},"1 024 cores"),Object(i.b)("td",{parentName:"tr",align:null},"1 920 TB")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"1 GPU node: ",Object(i.b)("strong",{parentName:"li"},"Nvidia DGX1")," 8x Tesla V100 - 32GB GPU")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null}),Object(i.b)("th",{parentName:"tr",align:null},"GPUs"),Object(i.b)("th",{parentName:"tr",align:null},"RAM (GB)"),Object(i.b)("th",{parentName:"tr",align:null},"CPU (cores)"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"GPU node capacity"),Object(i.b)("td",{parentName:"tr",align:null},"8"),Object(i.b)("td",{parentName:"tr",align:null},"528 GB"),Object(i.b)("td",{parentName:"tr",align:null},"40 cores")))),Object(i.b)("img",{src:"/dsri-documentation/img/DSRI_infrastructure_architecture_overview.png",alt:"DSRI infrastructure ",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(i.b)("h2",{id:"learn-more-about-dsri"},"Learn more about DSRI"),Object(i.b)("p",null,"See the following presentation about the Data Science Research Infrastructure "),Object(i.b)("a",{href:"/dsri-documentation/resource/2021-04-DSRI-Community-Event.pdf",target:"_blank",rel:"noopener noreferrer"},Object(i.b)("img",{src:"/dsri-documentation/resource/DSRI-community-event.png",style:{maxWidth:"100%",maxHeight:"100%"},alt:"DSRI April 2021 Community Event Presentation"})))}p.isMDXComponent=!0},140:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return a?r.a.createElement(m,c(c({ref:t},b),{},{components:a})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<i;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);