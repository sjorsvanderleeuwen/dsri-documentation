(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{138:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var o=a(3),n=a(7),r=(a(0),a(144)),i=["components"],c={id:"deploy-from-docker",title:"Deploy from a Docker image"},l={unversionedId:"deploy-from-docker",id:"deploy-from-docker",isDocsHomePage:!1,title:"Deploy from a Docker image",description:"The DSRI is an OpenShift OKD cluster, based on Kubernetes. It uses Docker containers to deploy services and applications in pods.",source:"@site/docs/deploy-from-docker.md",slug:"/deploy-from-docker",permalink:"/dsri-documentation/docs/deploy-from-docker",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/deploy-from-docker.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1633541917,sidebar:"docs",previous:{title:"Deploy from a Dockerfile",permalink:"/dsri-documentation/docs/guide-dockerfile-to-openshift"},next:{title:"Anatomy of a DSRI application",permalink:"/dsri-documentation/docs/anatomy-of-an-application"}},s=[{value:"Find an image for your service",id:"find-an-image-for-your-service",children:[]},{value:"Deploy the image on DSRI",id:"deploy-the-image-on-dsri",children:[]},{value:"Build and push a new Docker image",id:"build-and-push-a-new-docker-image",children:[{value:"Define a Dockerfile",id:"define-a-dockerfile",children:[]},{value:"Build the image",id:"build-the-image",children:[]},{value:"Push to DockerHub",id:"push-to-dockerhub",children:[]}]}],b={rightToc:s};function p(e){var t=e.components,a=Object(n.a)(e,i);return Object(r.b)("wrapper",Object(o.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The DSRI is an ",Object(r.b)("a",{parentName:"p",href:"https://www.okd.io/"},"OpenShift OKD")," cluster, based on ",Object(r.b)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes"),". It uses ",Object(r.b)("a",{parentName:"p",href:"https://www.docker.com"},"Docker containers")," to deploy services and applications in ",Object(r.b)("strong",{parentName:"p"},"pods"),"."),Object(r.b)("p",null,"Any service or job can be run in a Docker container. If you want to run a service in Python for example, you will find Docker images for Python. "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You can find already existing images for the service you want to run on DockerHub"),Object(r.b)("li",{parentName:"ul"},"or create a custom Docker image in a few minutes. ")),Object(r.b)("h2",{id:"find-an-image-for-your-service"},"Find an image for your service"),Object(r.b)("p",null,"The easiest way to deploy a service on the DSRI is to use a Docker image from ",Object(r.b)("a",{parentName:"p",href:"https://hub.docker.com/"},"DockerHub \ud83d\udc33"),"."),Object(r.b)("p",null,"Search for an image for your service published on ",Object(r.b)("a",{parentName:"p",href:"https://hub.docker.com/"},"DockerHub")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.google.com/search?q=dockerhub+python"},'Google "dockerhub my_service_name"')),Object(r.b)("li",{parentName:"ul"},"Sometimes multiple images can be found for your service. Take the official image when possible, or the one most relevant to your use-case.")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Deploy from a Dockerfile")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"If no suitable image can be found on ",Object(r.b)("a",{parentName:"p",href:"https://hub.docker.com/"},"DockerHub"),", it can be ",Object(r.b)("strong",{parentName:"p"},"deployed from a Dockerfile"),". See above to do so."))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"deploy-the-image-on-dsri"},"Deploy the image on DSRI"),Object(r.b)("p",null,"Once you have a Docker image for your application you can deploy it using the ",Object(r.b)("a",{parentName:"p",href:"https://console-openshift-console.apps.dsri2.unimaas.nl/console/projects"},"DSRI web UI"),"."),Object(r.b)("p",null,"Go to the ",Object(r.b)("a",{parentName:"p",href:"https://console-openshift-console.apps.dsri2.unimaas.nl/console/projects"},"Overview page")," of your project."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Click the ",Object(r.b)("strong",{parentName:"li"},"Add to Project")," button in top right corner > ",Object(r.b)("strong",{parentName:"li"},"Deploy Image")),Object(r.b)("li",{parentName:"ul"},"Select to deploy from ",Object(r.b)("strong",{parentName:"li"},"Image Name"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Provide your image name, e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"umdsri/freesurfer")),Object(r.b)("li",{parentName:"ul"},"Eventually change the ",Object(r.b)("strong",{parentName:"li"},"Name"),", it needs to be unique by project."),Object(r.b)("li",{parentName:"ul"},"Click ",Object(r.b)("strong",{parentName:"li"},"Deploy"),".")))),Object(r.b)("img",{src:"/dsri-documentation/img/screenshot-deploy_image_from_ui.png",alt:"Deploy image from UI",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Fix a common problem")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Once the application is deployed it will most probably fail because it has not been optimized to work with OpenShift random user ID. You will need to add an entry to the deployment to enable your image to run using any user ID."))),Object(r.b)("p",null,"Go to ",Object(r.b)("strong",{parentName:"p"},"Topology"),", click on your application node, click on the ",Object(r.b)("strong",{parentName:"p"},"Actions")," button of your application details, and ",Object(r.b)("strong",{parentName:"p"},"Edit deployment"),". In the deployment YAML search for ",Object(r.b)("inlineCode",{parentName:"p"},"spec:")," which has a ",Object(r.b)("inlineCode",{parentName:"p"},"containers:")," as child, and add the following under ",Object(r.b)("inlineCode",{parentName:"p"},"spec:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  serviceAccountName: anyuid\n  containers: ...\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Access the application")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You should now see your pod deployed on the ",Object(r.b)("a",{parentName:"p",href:"https://console-openshift-console.apps.dsri2.unimaas.nl/console/projects"},"Overview")," page of your project."),Object(r.b)("p",{parentName:"div"},"You can expose routes to this pod in the ",Object(r.b)("a",{parentName:"p",href:"https://console-openshift-console.apps.dsri2.unimaas.nl/console/projects"},"Overview")," page: ",Object(r.b)("strong",{parentName:"p"},"Create route")))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"build-and-push-a-new-docker-image"},"Build and push a new Docker image"),Object(r.b)("p",null,"In case you there is no Docker image for your application you can build and push one."),Object(r.b)("p",null,"To build and push a Docker image you will need to have ",Object(r.b)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker installed"),"."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Install Docker")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"See the ",Object(r.b)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"official documentation to install Docker"),"."))),Object(r.b)("h3",{id:"define-a-dockerfile"},"Define a Dockerfile"),Object(r.b)("p",null,"If no images are available on DockerHub, it is still possible that the developers created the ",Object(r.b)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/builder/"},"Dockerfile to build the image")," without pushing it to DockerHub. Go to the GitHub/GitLab source code repository and search for a ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile"),", it can usually be found in"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the source code repository root folder"),Object(r.b)("li",{parentName:"ul"},"a ",Object(r.b)("inlineCode",{parentName:"li"},"docker")," subfolder"),Object(r.b)("li",{parentName:"ul"},"as instructions in the ",Object(r.b)("inlineCode",{parentName:"li"},"README.md"))),Object(r.b)("p",null,"If no ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile")," are available we will need to define one. "),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Contact us")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Feel free to ",Object(r.b)("a",{parentName:"p",href:"/help"},"contact us")," to get help with this, especially if you are unfamiliar with ",Object(r.b)("a",{parentName:"p",href:"https://docs.docker.com/get-started/"},"Docker"),"."))),Object(r.b)("h3",{id:"build-the-image"},"Build the image"),Object(r.b)("p",null,"Once a Dockerfile has been defined for the service you can build it by running the following command from the source code root folder, where the Dockerfile is:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker build -t username/my-service .\n")),Object(r.b)("p",null,"Arguments can be provided when starting the build, they need to be defined in the Dockerfile to be used."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker build -t username/my-service --build-args MY_ARG=my_value .\n")),Object(r.b)("h3",{id:"push-to-dockerhub"},"Push to DockerHub"),Object(r.b)("p",null,"Before pushing it to DockerHub you will need to create a repository. To do so, click on ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"https://hub.docker.com/repository/create"},"Create Repository")),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"DockerHub is free for public repositories"),Object(r.b)("li",{parentName:"ul"},"Images can be published under your DockerHub user or an organization you belong to")),Object(r.b)("p",null,"Login to DockerHub, if not already done:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker login\n")),Object(r.b)("p",null,"Push the image previously built to DockerHub:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker push username/my-service\n")),Object(r.b)("p",null,"You can link DockerHub to your source code repository and ask it to build the Docker image automatically (from the Dockerfile in the root folder). It should take between 10 and 30min for DockerHub to build your image"),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Deploy from a local Dockerfile")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You can also deploy a service on the DSRI directly from a local ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile"),", to avoid using DockerHub. See ",Object(r.b)("a",{parentName:"p",href:"/dsri-documentation/docs/guide-dockerfile-to-openshift"},"this page to deploy a service from a local Dockerfile")," for more instructions"))))}p.isMDXComponent=!0},144:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var o=a(0),n=a.n(o);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),m=o,u=p["".concat(i,".").concat(m)]||p[m]||d[m]||r;return a?n.a.createElement(u,c(c({ref:t},s),{},{components:a})):n.a.createElement(u,c({ref:t},s))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);