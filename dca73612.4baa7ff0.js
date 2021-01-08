(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{117:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var o=a(3),n=a(7),r=(a(0),a(129)),c={id:"openshift-load-data",title:"Upload data"},i={unversionedId:"openshift-load-data",id:"openshift-load-data",isDocsHomePage:!1,title:"Upload data",description:"In RStudio, JupyterLab and VSCode",source:"@site/docs/openshift-load-data.md",slug:"/openshift-load-data",permalink:"/dsri-documentation/docs/openshift-load-data",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/openshift-load-data.md",version:"current",lastUpdatedBy:"Binosha",lastUpdatedAt:1610107914,sidebar:"docs",previous:{title:"Install the oc client",permalink:"/dsri-documentation/docs/openshift-install"},next:{title:"Delete an application",permalink:"/dsri-documentation/docs/openshift-delete-services"}},l=[{value:"In RStudio, JupyterLab and VSCode",id:"in-rstudio-jupyterlab-and-vscode",children:[]},{value:"Upload large files with the <code>oc</code> tool",id:"upload-large-files-with-the-oc-tool",children:[{value:"Copy from local to pod",id:"copy-from-local-to-pod",children:[]},{value:"Copy from pod to local",id:"copy-from-pod-to-local",children:[]}]},{value:"Synchronizes files",id:"synchronizes-files",children:[{value:"Sync local to pod",id:"sync-local-to-pod",children:[]},{value:"Sync pod to local",id:"sync-pod-to-local",children:[]}]}],d={rightToc:l};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"in-rstudio-jupyterlab-and-vscode"},"In RStudio, JupyterLab and VSCode"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If you are using ",Object(r.b)("strong",{parentName:"li"},"JupyterLab")," or ",Object(r.b)("strong",{parentName:"li"},"VSCode")," you should be able to load data to the container by simply ",Object(r.b)("strong",{parentName:"li"},"drag and drop the files to upload")," in the JupyterLab/VSCode web UI."),Object(r.b)("li",{parentName:"ul"},"For ",Object(r.b)("strong",{parentName:"li"},"RStudio"),", use the Upload file button in the RStudio web UI to upload files from your computer to the RStudio workspace.")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If those solutions doesn't work due to the files size, try one of the solutions below."))),Object(r.b)("h2",{id:"upload-large-files-with-the-oc-tool"},"Upload large files with the ",Object(r.b)("inlineCode",{parentName:"h2"},"oc")," tool"),Object(r.b)("p",null,"Copy a file, or directory, from your local filesystem to an OpenShift pod."),Object(r.b)("p",null,"For files that are updated regularly, we recommend using ",Object(r.b)("inlineCode",{parentName:"p"},"rsync")," (see ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/dsri-documentation/docs/openshift-load-data#rsync"}),"below"),") as it synchronizes the file if it already exists, preventing duplication and making synchronization faster. "),Object(r.b)("p",null,"But ",Object(r.b)("inlineCode",{parentName:"p"},"oc cp")," can fix issues met with rsync, such as copying symlinks for example, or files too big."),Object(r.b)("p",null,"First get the ",Object(r.b)("inlineCode",{parentName:"p"},"<pod_id>")," using your application name:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"oc get pod --selector app=<my_application_name>\n")),Object(r.b)("h3",{id:"copy-from-local-to-pod"},"Copy from local to pod"),Object(r.b)("p",null,"Folders are uploaded recursively by default:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"oc cp <folder_to_upload> <pod_id>:<copy_path_in_pod>\n")),Object(r.b)("p",null,"For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"oc cp my-folder flink-jobmanager-000:/mnt\n")),Object(r.b)("h3",{id:"copy-from-pod-to-local"},"Copy from pod to local"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"oc cp <pod-id>:<path_to_copy> <local_destination>\n")),Object(r.b)("h2",{id:"synchronizes-files"},"Synchronizes files"),Object(r.b)("p",null,"You can also use the ",Object(r.b)("inlineCode",{parentName:"p"},"oc")," command to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.openshift.com/enterprise/3.1/dev_guide/copy_files_to_container.html"}),"synchronizes")," local directories to an application on the DSRI."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Rsync is usually faster than ",Object(r.b)("inlineCode",{parentName:"p"},"oc cp")," if you want to update data already uploaded without re-uploading everything. But it has more chances to fail (when ",Object(r.b)("inlineCode",{parentName:"p"},"oc cp")," should work in most cases)"))),Object(r.b)("h3",{id:"sync-local-to-pod"},"Sync local to pod"),Object(r.b)("p",null,"Content of directory in local ",Object(r.b)("inlineCode",{parentName:"p"},"/data/my-dir")," will be synced with the pod ",Object(r.b)("inlineCode",{parentName:"p"},"/data")," directory:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"oc rsync <folder_to_sync> <pod-id>:<sync_path_in_pod>\n")),Object(r.b)("h3",{id:"sync-pod-to-local"},"Sync pod to local"),Object(r.b)("p",null,"Getting data from the pod to local."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"oc rsync <pod-id>:<folder_to_sync> <local_destination_to_sync>\n")))}p.isMDXComponent=!0},129:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var o=a(0),n=a.n(o);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=n.a.createContext({}),p=function(e){var t=n.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(a),u=o,m=s["".concat(c,".").concat(u)]||s[u]||b[u]||r;return a?n.a.createElement(m,i(i({ref:t},d),{},{components:a})):n.a.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,c=new Array(r);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var d=2;d<r;d++)c[d]=a[d];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);