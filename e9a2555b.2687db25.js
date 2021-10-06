(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{132:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),o=(a(0),a(144)),r=["components"],s={id:"catalog-utilities",title:"Utilities"},c={unversionedId:"catalog-utilities",id:"catalog-utilities",isDocsHomePage:!1,title:"Utilities",description:"Feel free to propose new services using pull requests, or to request them by creating new issues.",source:"@site/docs/catalog-utilities.md",slug:"/catalog-utilities",permalink:"/dsri-documentation/docs/catalog-utilities",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/catalog-utilities.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1633541917,sidebar:"docs",previous:{title:"GPU applications",permalink:"/dsri-documentation/docs/deploy-on-gpu"},next:{title:"Prepare your project",permalink:"/dsri-documentation/docs/prepare-project-for-dsri"}},b=[{value:"Ubuntu",id:"ubuntu",children:[{value:"With the terminal",id:"with-the-terminal",children:[]},{value:"With a web UI",id:"with-a-web-ui",children:[]}]},{value:"File browser",id:"file-browser",children:[{value:"Creating or Connecting an Existing Persistent Storage",id:"creating-or-connecting-an-existing-persistent-storage",children:[]}]}],l={rightToc:b};function p(e){var t=e.components,a=Object(i.a)(e,r);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Feel free to propose new services using ",Object(o.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/dsri-documentation/pulls"},"pull requests"),", or to request them by creating ",Object(o.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/dsri-documentation/issues"},"new issues"),"."),Object(o.b)("h2",{id:"ubuntu"},"Ubuntu"),Object(o.b)("h3",{id:"with-the-terminal"},"With the terminal"),Object(o.b)("p",null,"Start Ubuntu with the ",Object(o.b)("inlineCode",{parentName:"p"},"root")," user which has ",Object(o.b)("inlineCode",{parentName:"p"},"sudo")," permissions to install anything."),Object(o.b)("p",null,"You can start the application using the ",Object(o.b)("strong",{parentName:"p"},"Ubuntu")," template in the ",Object(o.b)("a",{parentName:"p",href:"https://console-openshift-console.apps.dsri2.unimaas.nl/console/catalog"},"Catalog web UI")," (make sure the ",Object(o.b)("strong",{parentName:"p"},"Templates")," checkbox is checked)"),Object(o.b)("p",null,"This template uses the Ubuntu image hosted on DockerHub, see its documentation at ",Object(o.b)("a",{parentName:"p",href:"https://hub.docker.com/r/ubuntu"},"https://hub.docker.com/r/ubuntu")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Persistent data folder")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\ud83d\udcc2 Use the ",Object(o.b)("inlineCode",{parentName:"p"},"/root")," folder (home of the root user) to store your data in the existing persistent storage. You can find the persistent volumes in the DSRI web UI, go to the ",Object(o.b)("strong",{parentName:"p"},"Administrator")," view > ",Object(o.b)("strong",{parentName:"p"},"Storage")," > ",Object(o.b)("strong",{parentName:"p"},"Persistent Volume Claims"),"."))),Object(o.b)("p",null,"We enabled the port ",Object(o.b)("inlineCode",{parentName:"p"},"8080")," in the Ubuntu container if you need to deploy applications."),Object(o.b)("p",null,"To quickly access it from the terminal you can use the ",Object(o.b)("strong",{parentName:"p"},"Terminal")," tab in the pod page, or via your local terminal:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Get the Ubuntu pod ID:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"oc get pods\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Connect to it:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"oc rsh POD_ID\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Enable Bash in the Ubuntu container (if it starts with the Shell)"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"bash\n")))),Object(o.b)("img",{src:"/dsri-documentation/img/screenshot-deploy-ubuntu.png",alt:"Deploy Ubuntu",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(o.b)("h3",{id:"with-a-web-ui"},"With a web UI"),Object(o.b)("p",null,"Start Ubuntu with a web UI accessible via a URL (using VNC). You will be the ",Object(o.b)("inlineCode",{parentName:"p"},"root")," user which has ",Object(o.b)("inlineCode",{parentName:"p"},"sudo")," permissions to install anything."),Object(o.b)("p",null,"You can start the application using the ",Object(o.b)("strong",{parentName:"p"},"Ubuntu with web UI")," template in the ",Object(o.b)("a",{parentName:"p",href:"https://console-openshift-console.apps.dsri2.unimaas.nl/console/catalog"},"Catalog web UI")," (make sure the ",Object(o.b)("strong",{parentName:"p"},"Templates")," checkbox is checked)"),Object(o.b)("p",null,"This template uses the Docker image defined at ",Object(o.b)("a",{parentName:"p",href:"https://github.com/fcwu/docker-ubuntu-vnc-desktop"},"https://github.com/fcwu/docker-ubuntu-vnc-desktop")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Less stable than the official image")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This image might be less stable than the original Ubuntu image. Let us know on Slack if you have any problem!"))),Object(o.b)("h2",{id:"file-browser"},"File browser"),Object(o.b)("p",null,"Deploy a file browser on your persistent volume. This will provide a web UI to upload and download data to your DSRI persistent volume in case you need it (JupyterLab, RStudio and VisualStudio Code server already include a file browser)"),Object(o.b)("p",null,"You can start a container using the ",Object(o.b)("strong",{parentName:"p"},"File Browser for existing storage")," template in the ",Object(o.b)("a",{parentName:"p",href:"https://console-openshift-console.apps.dsri2.unimaas.nl/console/catalog"},"Catalog web UI")," (make sure the ",Object(o.b)("strong",{parentName:"p"},"Templates")," checkbox is checked)"),Object(o.b)("img",{src:"/dsri-documentation/img/screenshot-deploy-filebrowser.png",alt:"Deploy File browser",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(o.b)("p",null,"You can only deploy file browser on an existing Persistent Volume Claim, this enables you to add a web UI to access this storage."),Object(o.b)("p",null,"The following parameters can be provided:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Provide a unique ",Object(o.b)("strong",{parentName:"li"},"Application name"),". It will be used to generate the application URL."),Object(o.b)("li",{parentName:"ol"},"Provide a ",Object(o.b)("strong",{parentName:"li"},"Password"),", you will need to hash the password first for extra security, use this quick docker command to do it: ",Object(o.b)("inlineCode",{parentName:"li"},"docker run filebrowser/filebrowser hash mypassword")),Object(o.b)("li",{parentName:"ol"},"The ",Object(o.b)("strong",{parentName:"li"},"Storage name")," of the Persistent Volume Claim  (PVC) that will be exposed by the filebrowser."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Storage subpath")," in the the Persistent Volume Claim that will be exposed by the filebrowser. Let it empty to use the Root folder of the persistent volume.")),Object(o.b)("p",null,"You can find the Storage name if you Go to the deployments page > Storage panel."),Object(o.b)("h3",{id:"creating-or-connecting-an-existing-persistent-storage"},"Creating or Connecting an Existing Persistent Storage"),Object(o.b)("p",null,"Find more details about the how to ",Object(o.b)("a",{parentName:"p",href:"https://maastrichtu-ids.github.io/dsri-documentation/docs/openshift-storage/#create-the-persistent-storage"},"create persistent storage")),Object(o.b)("img",{src:"/dsri-documentation/img/screenshot_pvc_storage.png",alt:"Create Persistent Storage",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(o.b)("img",{src:"/dsri-documentation/img/screenshot_pvc_storage_create.png",alt:"Create Persistent Storage",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The DSRI using the ",Object(o.b)("a",{parentName:"p",href:"https://www.openshift.com/products/container-storage/"},Object(o.b)("strong",{parentName:"a"},"Openshift Container Stroage"))," (",Object(o.b)("inlineCode",{parentName:"p"}," OCS"),")  which is based on ",Object(o.b)("a",{parentName:"p",href:"https://ceph.io/ceph-storage/"},Object(o.b)("strong",{parentName:"a"},"CEPH"))," offers ",Object(o.b)("inlineCode",{parentName:"p"},"ReadWriteOnce")," access mode. "),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ReadWriteOnce")," (",Object(o.b)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.6/storage/understanding-persistent-storage.html"},Object(o.b)("strong",{parentName:"a"},"RWO")),") volumes cannot be mounted on multiple nodes. If a node fails, the system does not allow the attached RWO volume to be mounted on a new node because it is already assigned to the failed node. If you encounter a multi-attach error message as a result, force delete the pod on a shut down or crashed node.")))),Object(o.b)("p",null,"Find more details about the how to ",Object(o.b)("a",{parentName:"p",href:"https://maastrichtu-ids.github.io/dsri-documentation/docs/openshift-storage/#connect-the-existing-persistent-storage"},"Connect the Existing persistent storage")),Object(o.b)("img",{src:"/dsri-documentation/img/screenshot_existing_storage.png",alt:"Add Existing Persistent Storage",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(o.b)("img",{src:"/dsri-documentation/img/screenshot_add_storage.png",alt:"Add Existing Persistent Storage",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"You can try above method if you want to connect ",Object(o.b)("strong",{parentName:"p"},"more applications to the same storage")))),Object(o.b)("p",null,"This deployment require to have  root user enabled on your project. Contact the ",Object(o.b)("a",{parentName:"p",href:"mailto:dsri-support-l@maastrichtuniversity.nl"},"DSRI support team"),"  or create a ",Object(o.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/dsri-documentation/issues"},"new issues")," to request root access or to create persistent volume for your project if you don't have them ."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Credentials")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Default credentials will be username ",Object(o.b)("inlineCode",{parentName:"p"},"admin")," and password ",Object(o.b)("inlineCode",{parentName:"p"},"admin")))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Change password")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Please ",Object(o.b)("strong",{parentName:"p"},"change the password in the Filebrowser Web UI")," once it has been created."))))}p.isMDXComponent=!0},144:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),l=function(e){var t=i.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=l(a),d=n,u=p["".concat(r,".").concat(d)]||p[d]||m[d]||o;return a?i.a.createElement(u,s(s({ref:t},b),{},{components:a})):i.a.createElement(u,s({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var b=2;b<o;b++)r[b]=a[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);