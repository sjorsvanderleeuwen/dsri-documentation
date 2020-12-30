(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{128:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var n=a(0),o=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,r=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,j=d["".concat(r,".").concat(m)]||d[m]||s[m]||c;return a?o.a.createElement(j,l(l({ref:t},b),{},{components:a})):o.a.createElement(j,l({ref:t},b))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,r=new Array(c);r[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var b=2;b<c;b++)r[b]=a[b];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),c=(a(0),a(128)),r={id:"openshift-commands",title:"Command Line Interface"},l={unversionedId:"openshift-commands",id:"openshift-commands",isDocsHomePage:!1,title:"Command Line Interface",description:"Overview",source:"@site/docs/openshift-commands.md",slug:"/openshift-commands",permalink:"/dsri-documentation/docs/openshift-commands",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/openshift-commands.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1609360198,sidebar:"docs",previous:{title:"Start a Spark cluster",permalink:"/dsri-documentation/docs/deploy-spark"},next:{title:"Storage and restrictions",permalink:"/dsri-documentation/docs/openshift-storage"}},i=[{value:"Overview",id:"overview",children:[]},{value:"Projects",id:"projects",children:[{value:"List projects",id:"list-projects",children:[]},{value:"Connect to project",id:"connect-to-project",children:[]}]},{value:"Pods",id:"pods",children:[{value:"Create pod from YAML",id:"create-pod-from-yaml",children:[]},{value:"List pods",id:"list-pods",children:[]},{value:"Get specific pod",id:"get-specific-pod",children:[]},{value:"Remote Shell connection",id:"remote-shell-connection",children:[]},{value:"Execute command in pod",id:"execute-command-in-pod",children:[]},{value:"Delete pod",id:"delete-pod",children:[]},{value:"Get pod logs",id:"get-pod-logs",children:[]}]},{value:"Create app from template",id:"create-app-from-template",children:[{value:"Copy files",id:"copy-files",children:[]}]}],b={rightToc:i};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"overview"},"Overview"),Object(c.b)("p",null,"Here is an overview of common ",Object(c.b)("inlineCode",{parentName:"p"},"oc")," commands:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"th"},"Command")),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"th"},"Description")))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"oc login <host> -u <user>")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Login to the DSRI OpenShift cluster in your terminal")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"oc get projects")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"List all available projects")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"oc project <project> ")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Switch to project")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"oc get pods ")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Get running pods (a pod can run one or multiple containers for your application)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"oc rsh <pod_name> <command>")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Remote terminal connexion to a pod (Shell/Bash)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"oc cp <from> <to>")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Copy files from host to container or vice versa, e.g. from host: ",Object(c.b)("inlineCode",{parentName:"td"},"oc cp <local dir> <pod>:<pod_dir>")," or from to host: ",Object(c.b)("inlineCode",{parentName:"td"},"oc cp <pod>:<pod_dir> <local dir>"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"oc rsync <from> <to>")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Similar to rsync command on Linux to synchronize directories between container and host or the other way around")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"oc exec <pod_id> <folder_path>")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Execute command in pods")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"oc delete pod <pod_id>")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Delete pod")))),Object(c.b)("h2",{id:"projects"},"Projects"),Object(c.b)("h3",{id:"list-projects"},"List projects"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"oc projects\n")),Object(c.b)("h3",{id:"connect-to-project"},"Connect to project"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"oc project my-project\n")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"pods"},"Pods"),Object(c.b)("h3",{id:"create-pod-from-yaml"},"Create pod from YAML"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"oc create -f my-pod.yaml\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"E.g. ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/MaastrichtU-IDS/d2s-core/blob/master/argo/d2s-pod-virtuoso.yaml"}),"d2s-pod-virtuoso.yaml"),".")),Object(c.b)("h3",{id:"list-pods"},"List pods"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"oc get pod\n")),Object(c.b)("p",null,"List running pods:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc get pods --field-selector=status.phase=Running\n")),Object(c.b)("h3",{id:"get-specific-pod"},"Get specific pod"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"oc get pod | grep <pod_id>\n")),Object(c.b)("p",null,"Using selector with Apache Flink as example, and showing only the pod id without header:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc get pod --selector app=flink --selector component=jobmanager --no-headers -o=custom-columns=NAME:.metadata.name\n")),Object(c.b)("h3",{id:"remote-shell-connection"},"Remote Shell connection"),Object(c.b)("p",null,"Connect to a pod with ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://devhints.io/bash"}),"Bash"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"oc rsh <pod_id>\n")),Object(c.b)("h3",{id:"execute-command-in-pod"},"Execute command in pod"),Object(c.b)("p",null,"Example creating a folder:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"oc exec <pod_id> -- mkdir -p /mnt/workspace/resources\n")),Object(c.b)("h3",{id:"delete-pod"},"Delete pod"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"oc delete pod <pod_id>\n")),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"If the pod is not properly deleted, you can force its deletion:"),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc delete pod --force --grace-period=0 <pod_id>\n")))),Object(c.b)("h3",{id:"get-pod-logs"},"Get pod logs"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"oc logs -f <pod_id>\n")),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Get more details on how to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/dsri-documentation/docs/openshift-debug"}),"debug a pod"),"."))),Object(c.b)("h2",{id:"create-app-from-template"},"Create app from template"),Object(c.b)("p",null,"Create app from template using the CLI and providing parameters as arguments:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc new-app my-template -p APPLICATION_NAME=my-app,ADMIN_PASSWORD=mypassword\n")),Object(c.b)("p",null,"Example for the Semantic Web course notebooks:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc new-app template-jupyterstack-notebook -p APPLICATION_NAME=swcourseName,NOTEBOOK_PASSWORD=PASSWORD\n\noc delete all --selector template=template-jupyterstack-notebook\n")),Object(c.b)("h3",{id:"copy-files"},"Copy files"),Object(c.b)("p",null,"See the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://maastrichtu-ids.github.io/dsri-documentation/docs/openshift-load-data"}),"Load data")," page."))}p.isMDXComponent=!0}}]);