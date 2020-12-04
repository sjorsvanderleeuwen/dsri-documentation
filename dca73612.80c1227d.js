(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{115:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return c})),o.d(t,"metadata",(function(){return l})),o.d(t,"rightToc",(function(){return i})),o.d(t,"default",(function(){return d}));var n=o(3),a=o(7),r=(o(0),o(127)),c={id:"openshift-load-data",title:"Upload data"},l={unversionedId:"openshift-load-data",id:"openshift-load-data",isDocsHomePage:!1,title:"Upload data",description:"In JupyterLab and VSCode",source:"@site/docs/openshift-load-data.md",slug:"/openshift-load-data",permalink:"/dsri-documentation/docs/openshift-load-data",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/openshift-load-data.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1607049922,sidebar:"docs",previous:{title:"Install the oc tool",permalink:"/dsri-documentation/docs/openshift-install"},next:{title:"Delete an application",permalink:"/dsri-documentation/docs/openshift-delete-services"}},i=[{value:"In JupyterLab and VSCode",id:"in-jupyterlab-and-vscode",children:[]},{value:"In RStudio",id:"in-rstudio",children:[]},{value:"Copy files",id:"copy-files",children:[{value:"Copy from local to pod",id:"copy-from-local-to-pod",children:[]},{value:"Copy from pod to local",id:"copy-from-pod-to-local",children:[]}]},{value:"Rsync",id:"rsync",children:[{value:"Sync local to pod",id:"sync-local-to-pod",children:[]},{value:"Sync pod to local",id:"sync-pod-to-local",children:[]}]}],p={rightToc:i};function d(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"in-jupyterlab-and-vscode"},"In JupyterLab and VSCode"),Object(r.b)("p",null,"If you are using JupyterLab or VSCode you should be able to load data to the container by simply ",Object(r.b)("strong",{parentName:"p"},"drag and drop the files to upload")," in the JupyterLab/VSCode web UI."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If this solution doesn't work due to the files size, try one of the solutions below.")),Object(r.b)("h2",{id:"in-rstudio"},"In RStudio"),Object(r.b)("p",null,"Use the Upload file button in the RStudio web UI to upload files from your computer to the RStudio workspace."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If this solution doesn't work due to the files size, try one of the solutions below.")),Object(r.b)("h2",{id:"copy-files"},"Copy files"),Object(r.b)("p",null,"Copy a file, or directory, from your local filesystem to an OpenShift pod."),Object(r.b)("p",null,"For files that are updated regularly, we recommend using ",Object(r.b)("inlineCode",{parentName:"p"},"rsync")," (see ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/dsri-documentation/docs/openshift-load-data#rsync"}),"below"),") as it synchronizes the file if it already exists, preventing duplication and making synchronization faster. "),Object(r.b)("p",null,"But ",Object(r.b)("inlineCode",{parentName:"p"},"oc cp")," can fix issues met with rsync, such as copying symlinks for example, or files too big."),Object(r.b)("p",null,"First get the ",Object(r.b)("inlineCode",{parentName:"p"},"<pod_id>")," using your application name:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"oc get pod --selector app=<my_application_name>\n")),Object(r.b)("h3",{id:"copy-from-local-to-pod"},"Copy from local to pod"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"oc cp <file_to_copy> <pod_id>:<copy_path_in_pod>\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"It will copy folders recursively by default.")),Object(r.b)("p",null,"For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"oc cp my-folder flink-jobmanager-000:/mnt\n")),Object(r.b)("h3",{id:"copy-from-pod-to-local"},"Copy from pod to local"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"oc cp <pod-id>:<path_to_copy> <local_destination>\n")),Object(r.b)("h2",{id:"rsync"},"Rsync"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/enterprise/3.1/dev_guide/copy_files_to_container.html"}),"Synchronizes")," local directories with a pod."),Object(r.b)("h3",{id:"sync-local-to-pod"},"Sync local to pod"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"oc rsync <file_to_sync> <pod-id>:<sync_path_in_pod>\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Content of directory in local ",Object(r.b)("inlineCode",{parentName:"p"},"/data/my-dir")," is synced with the pod ",Object(r.b)("inlineCode",{parentName:"p"},"/data")," directory.")),Object(r.b)("h3",{id:"sync-pod-to-local"},"Sync pod to local"),Object(r.b)("p",null,"Getting data from the pod to local."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"oc rsync <pod-id>:<file_to_sync> <local_destination_to_sync>\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Data can be transfered from one pod to another using the same mechanisms."),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"oc rsync my-pod1:/mnt my-pod2:/mnt\n"))))}d.isMDXComponent=!0},127:function(e,t,o){"use strict";o.d(t,"a",(function(){return s})),o.d(t,"b",(function(){return m}));var n=o(0),a=o.n(n);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=d(o),u=n,m=s["".concat(c,".").concat(u)]||s[u]||b[u]||r;return o?a.a.createElement(m,l(l({ref:t},p),{},{components:o})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,c=new Array(r);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<r;p++)c[p]=o[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"}}]);