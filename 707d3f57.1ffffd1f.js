(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{130:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(a),u=n,m=s["".concat(i,".").concat(u)]||s[u]||d[u]||r;return a?o.a.createElement(m,c(c({ref:t},b),{},{components:a})):o.a.createElement(m,c({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<r;b++)i[b]=a[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},93:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),r=(a(0),a(130)),i={id:"deploy-on-gpu",title:"Start on GPU"},c={unversionedId:"deploy-on-gpu",id:"deploy-on-gpu",isDocsHomePage:!1,title:"Start on GPU",description:"By default you do not have the permission to run pods on GPU",source:"@site/docs/deploy-on-gpu.md",slug:"/deploy-on-gpu",permalink:"/dsri-documentation/docs/deploy-on-gpu",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/deploy-on-gpu.md",version:"current",lastUpdatedBy:"Binosha",lastUpdatedAt:1611852748,sidebar:"docs",previous:{title:"Neuroscience research",permalink:"/dsri-documentation/docs/neuroscience"},next:{title:"Additional services",permalink:"/dsri-documentation/docs/deploy-additional-services"}},l=[{value:"JupyterLab on GPU",id:"jupyterlab-on-gpu",children:[]},{value:"VSCode on GPU",id:"vscode-on-gpu",children:[]}],b={rightToc:l};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Request GPU access")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"By default you do not have the permission to run pods on GPU")," "),Object(r.b)("p",{parentName:"div"},"If you want to run on GPU, ",Object(r.b)("strong",{parentName:"p"},"contact the ",Object(r.b)("a",Object(n.a)({parentName:"strong"},{href:"mailto:dsri-support-l@maastrichtuniversity.nl"}),"DSRI support team")),", they will create the templates you need to start applications on GPU."))),Object(r.b)("h2",{id:"jupyterlab-on-gpu"},"JupyterLab on GPU"),Object(r.b)("p",null,"Once your project has been granted access to GPUs, you can deploy applications on GPU from the catalog:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Go to the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://app.dsri.unimaas.nl:8443/console/catalog"}),"Catalog web UI"),": ",Object(r.b)("strong",{parentName:"li"},"Add to Project")," > ",Object(r.b)("strong",{parentName:"li"},"Browse Catalog")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Filter"),' the catalog on the publisher "',Object(r.b)("strong",{parentName:"li"},"Institute of Data Science, UM"),'"'),Object(r.b)("li",{parentName:"ul"},"Choose one of the available templates:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Pytorch on GPU with JupyterLab (Persistent)"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Tensorflow on GPU with JupyterLab (Persistent)"))))),Object(r.b)("p",null,"The following parameters can be provided:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Provide a unique ",Object(r.b)("strong",{parentName:"li"},"Application name")),Object(r.b)("li",{parentName:"ol"},"Provide a ",Object(r.b)("strong",{parentName:"li"},"Notebook token")," (password to access the notebook)"),Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("strong",{parentName:"li"},"number of GPUs")," used by the application."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Storage name"),": the storage Persistent Volume Claim (PVC)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Storage subpath"),": path to the Notebook folder in the Persistent Volume Claim storage")),Object(r.b)("p",null,"Now that your template is created and its accessible from the ",Object(r.b)("strong",{parentName:"p"},"Overview")," page of OpenShift web UI."),Object(r.b)("h2",{id:"vscode-on-gpu"},"VSCode on GPU"),Object(r.b)("p",null,"2 templates are available to deploy VisualStudio Code on GPU:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Go to the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://app.dsri.unimaas.nl:8443/console/catalog"}),"Catalog web UI"),": ",Object(r.b)("strong",{parentName:"li"},"Add to Project")," > ",Object(r.b)("strong",{parentName:"li"},"Browse Catalog")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Filter"),' the catalog on the publisher "',Object(r.b)("strong",{parentName:"li"},"Institute of Data Science, UM"),'"'),Object(r.b)("li",{parentName:"ul"},"Choose one of the available templates:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Tensorflow on GPU with VisualStudio (Persistent)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"PyTorch on GPU with VisualStudio (Persistent)"))))),Object(r.b)("p",null,"For those pods VSCode cannot be accessed directly on a DSRI URL, you will need to forward the port to your localhost:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/openshift-install"}),"Login to the DSRI")," using ",Object(r.b)("inlineCode",{parentName:"li"},"oc login")),Object(r.b)("li",{parentName:"ol"},"Get the pod ID")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc get pods\n")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Forward VSCode to http://localhost:8080")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc port-forward <pod_id> 8080:8080\n")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Access VisualStudio Code on http://localhost:8080")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Use Chrome")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"We recommend to ",Object(r.b)("strong",{parentName:"p"},"use Google Chrome")," web browser as pasting in the terminal (",Object(r.b)("inlineCode",{parentName:"p"},"ctrl + shift + v"),") won't work on Firefox"))))}p.isMDXComponent=!0}}]);