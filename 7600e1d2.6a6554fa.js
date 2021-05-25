(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{113:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return c})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return p}));var a=o(3),n=o(7),r=(o(0),o(173)),i={id:"openshift-migrate-project",title:"Migrate to the new cluster"},c={unversionedId:"openshift-migrate-project",id:"openshift-migrate-project",isDocsHomePage:!1,title:"Migrate to the new cluster",description:"If you currently have a project on the previous version of the DSRI (OKD 3.11), you will need to migrate your project to the new version of the DSRI cluster (OKD 4.6)",source:"@site/docs/openshift-migrate-project.md",slug:"/openshift-migrate-project",permalink:"/dsri-documentation/docs/openshift-migrate-project",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/openshift-migrate-project.md",version:"current",lastUpdatedBy:"Binosha",lastUpdatedAt:1621942685,sidebar:"docs",previous:{title:"Prepare your project",permalink:"/dsri-documentation/docs/prepare-project-for-dsri"},next:{title:"Deploy from a Dockerfile",permalink:"/dsri-documentation/docs/guide-dockerfile-to-openshift"}},s=[{value:"Migrate your applications",id:"migrate-your-applications",children:[]},{value:"Migrate your data",id:"migrate-your-data",children:[]}],l={rightToc:s};function p(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"If you currently have a project on the ",Object(r.b)("a",{parentName:"p",href:"https://app.dsri.unimaas.nl:8443/console/catalog"},"previous version of the DSRI")," (OKD 3.11), you will need to migrate your project to the ",Object(r.b)("a",{parentName:"p",href:"https://console-openshift-console.apps.dsri2.unimaas.nl/"},"new version of the DSRI")," cluster (OKD 4.6)"),Object(r.b)("p",null,"Here are some advantages to migrate to ",Object(r.b)("a",{parentName:"p",href:"https://www.okd.io/"},"OKD")," 4.6:"),Object(r.b)("p",null,"\ud83d\uddc3\ufe0f ",Object(r.b)("strong",{parentName:"p"},"Automated persistent storage"),": the DSRI can now automatically create persistent volumes for applications started from templates, and you can create more volumes yourself (on the previous version you could only use storage created by admins)"),Object(r.b)("p",null,"\u26a1 ",Object(r.b)("strong",{parentName:"p"},"Faster storage I/O"),", such as reading and writing to files. 3 storage classes are now available for different uses (regular filesystem, bloc and object storage). The new storage (Ceph) is better documented, easier to use, and more adapted to Data Science workloads."),Object(r.b)("p",null,"\ud83d\udcca ",Object(r.b)("strong",{parentName:"p"},"Better monitoring")," tools: the monitoring view now shows the details of resources used for each application (CPU, memory, storage, network, etc)"),Object(r.b)("p",null,"\ud83d\udda5\ufe0f ",Object(r.b)("strong",{parentName:"p"},"Developer oriented interface"),": the interface has been improved to focus more on developers who simply want to deploy applications. It hides some of the Kubernetes complexity, which is more for experienced sysadmins, in the Administrator view)"),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"No GPU yet")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"We will migrate the GPU node to the new cluster soon. But it is currently still deployed on the old cluster, you will need to use the old cluster to deploy an application on GPU."))),Object(r.b)("h2",{id:"migrate-your-applications"},"Migrate your applications"),Object(r.b)("p",null,"All templates you have been using on the previous version of the DSRI have been adapted to the new cluster (with improvements in some cases!), so you can easily restart the same application using a template on the new cluster (e.g. RStudio, JupyterLab, VSCode, databases, etc)"),Object(r.b)("p",null,"If you deployed a custom application you should be able to start it on the new cluster the same way you started it before."),Object(r.b)("h2",{id:"migrate-your-data"},"Migrate your data"),Object(r.b)("p",null,"The easiest way to migrate your data from the old to the new cluster is to use the ",Object(r.b)("inlineCode",{parentName:"p"},"oc")," command line tool to copy the data on your laptop, then copy it to the persistent volume of your application on the new cluster."),Object(r.b)("p",null,"For this example, we will consider a RStudio application named ",Object(r.b)("inlineCode",{parentName:"p"},"rstudio-root"),", with the persistent volume in ",Object(r.b)("inlineCode",{parentName:"p"},"/home/rstudio"),", but the same process can be applied to any other application deployed on the DSRI"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Login to the ",Object(r.b)("a",{parentName:"li",href:"https://app.dsri.unimaas.nl:8443/console/catalog"},"old cluster")," with ",Object(r.b)("inlineCode",{parentName:"li"},"oc login")),Object(r.b)("li",{parentName:"ol"},"Get the pod ID of your RStudio application (it should look like ",Object(r.b)("inlineCode",{parentName:"li"},"rstudio-root-1-bkpdf"),", you can also get it through the DSRI web UI)")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"oc get pod --selector app=rstudio-root\n")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Copy the data from the persistent storage of the old RStudio application to your laptop (in a ",Object(r.b)("inlineCode",{parentName:"li"},"rstudio-data")," folder)")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"oc cp rstudio-root-1-bkpdf:/home/rstudio ./rstudio-data\n")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Once the data has been downloaded you can login to the new cluster with ",Object(r.b)("inlineCode",{parentName:"li"},"oc login")),Object(r.b)("li",{parentName:"ol"},"Start your new application on the new cluster, and get its pod ID (we will use ",Object(r.b)("inlineCode",{parentName:"li"},"rstudio-1-gcfev")," as pod ID for this example)"),Object(r.b)("li",{parentName:"ol"},"Copy the ",Object(r.b)("inlineCode",{parentName:"li"},"rstudio-data")," folder to the new application permanent volume (",Object(r.b)("inlineCode",{parentName:"li"},"/home/rstudio")," for RStudio)")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"oc cp rstudio-1-gcfev:/home/rstudio ./rstudio-data\n")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"If you need to migrate large files it will be faster to do it on the UMnet, or Eduroam WiFi at UM. The ideal would be to use a ethernet (wired) connection. "))))}p.isMDXComponent=!0},173:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return m}));var a=o(0),n=o.n(a);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},d=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(o),b=a,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||r;return o?n.a.createElement(m,c(c({ref:t},l),{},{components:o})):n.a.createElement(m,c({ref:t},l))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=o[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"}}]);