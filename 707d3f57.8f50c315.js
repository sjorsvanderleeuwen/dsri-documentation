(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{125:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=o,m=s["".concat(l,".").concat(d)]||s[d]||u[d]||r;return n?a.a.createElement(m,c(c({ref:t},b),{},{components:n})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var b=2;b<r;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(125)),l={id:"deploy-on-gpu",title:"Start on GPU"},c={unversionedId:"deploy-on-gpu",id:"deploy-on-gpu",isDocsHomePage:!1,title:"Start on GPU",description:"\u26d4 By default you do not have the permission to run pods on GPU \u26d4",source:"@site/docs/deploy-on-gpu.md",slug:"/deploy-on-gpu",permalink:"/dsri-documentation/docs/deploy-on-gpu",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/docs/docs/deploy-on-gpu.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1607036214,sidebar:"docs",previous:{title:"Start databases",permalink:"/dsri-documentation/docs/deploy-database"},next:{title:"Start a Spark cluster",permalink:"/dsri-documentation/docs/deploy-spark"}},i=[{value:"JupyterLab on GPU",id:"jupyterlab-on-gpu",children:[]},{value:"VSCode on GPU",id:"vscode-on-gpu",children:[]}],b={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u26d4 By default you do not have the permission to run pods on GPU \u26d4")," ")),Object(r.b)("p",null,"If you want to run on GPU, ",Object(r.b)("strong",{parentName:"p"},"contact the ",Object(r.b)("a",Object(o.a)({parentName:"strong"},{href:"mailto:dsri-support-l@maastrichtuniversity.nl"}),"DSRI support team")),", they will create the templates you need to start applications on GPU."),Object(r.b)("h2",{id:"jupyterlab-on-gpu"},"JupyterLab on GPU"),Object(r.b)("p",null,"Once your project has been granted access to GPUs, you can deploy applications on GPU from the catalog:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Go to the ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://app.dsri.unimaas.nl:8443/console/catalog"}),"Catalog web UI"),": ",Object(r.b)("strong",{parentName:"li"},"Add to Project")," > ",Object(r.b)("strong",{parentName:"li"},"Browse Catalog")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Filter"),' the catalog on the publisher "',Object(r.b)("strong",{parentName:"li"},"Institute of Data Science, UM"),'"'),Object(r.b)("li",{parentName:"ul"},"Choose one of the available templates:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Pytorch on GPU with JupyterLab (Persistent)"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Tensorflow on GPU with JupyterLab (Persistent)"))))),Object(r.b)("p",null,"The following parameters can be provided:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Provide a unique ",Object(r.b)("strong",{parentName:"li"},"Application name")),Object(r.b)("li",{parentName:"ol"},"Provide a ",Object(r.b)("strong",{parentName:"li"},"Notebook token")," (password to access the notebook)"),Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("strong",{parentName:"li"},"number of GPUs")," used by the application."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Storage name"),": the storage Persistent Volume Claim (PVC)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Storage subpath"),": path to the Notebook folder in the Persistent Volume Claim storage")),Object(r.b)("p",null,"Now that your template is created and its accessible from the ",Object(r.b)("strong",{parentName:"p"},"Overview")," page of OpenShift web UI."),Object(r.b)("h2",{id:"vscode-on-gpu"},"VSCode on GPU"),Object(r.b)("p",null,"2 templates are available to deploy VisualStudio Code on GPU:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Go to the ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://app.dsri.unimaas.nl:8443/console/catalog"}),"Catalog web UI"),": ",Object(r.b)("strong",{parentName:"li"},"Add to Project")," > ",Object(r.b)("strong",{parentName:"li"},"Browse Catalog")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Filter"),' the catalog on the publisher "',Object(r.b)("strong",{parentName:"li"},"Institute of Data Science, UM"),'"'),Object(r.b)("li",{parentName:"ul"},"Choose one of the available templates:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Tensorflow on GPU with VisualStudio (Persistent)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"PyTorch on GPU with VisualStudio (Persistent)"))))),Object(r.b)("p",null,"For those pods VSCode cannot be accessed directly on a DSRI URL, you will need to forward the port to your localhost:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/openshift-login"}),"Login to the DSRI")," using ",Object(r.b)("inlineCode",{parentName:"li"},"oc login")),Object(r.b)("li",{parentName:"ol"},"Get the pod ID")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"oc get pods\n")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Forward VSCode to http://localhost:8080")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"oc port-forward <pod_id> 8080:8080\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Access VisualStudio Code on http://localhost:8080")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"We recommend to ",Object(r.b)("strong",{parentName:"p"},"use Chrome")," as pasting in the terminal (",Object(r.b)("inlineCode",{parentName:"p"},"ctrl + shift + v"),") won't work on Firefox")))}p.isMDXComponent=!0}}]);