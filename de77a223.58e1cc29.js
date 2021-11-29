(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),r=(n(0),n(146)),l=["components"],c={id:"guide-dockerfile-to-openshift",title:"Deploy from a Dockerfile"},i={unversionedId:"guide-dockerfile-to-openshift",id:"guide-dockerfile-to-openshift",isDocsHomePage:!1,title:"Deploy from a Dockerfile",description:"Build from local Dockerfile",source:"@site/docs/guide-dockerfile-to-openshift.md",slug:"/guide-dockerfile-to-openshift",permalink:"/dsri-documentation/docs/guide-dockerfile-to-openshift",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/guide-dockerfile-to-openshift.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1638184229,sidebar:"docs",previous:{title:"Monitor your applications",permalink:"/dsri-documentation/docs/guide-monitoring"},next:{title:"Deploy from a Docker image",permalink:"/dsri-documentation/docs/deploy-from-docker"}},p=[{value:"Build from local Dockerfile",id:"build-from-local-dockerfile",children:[{value:"Create new build configuration.",id:"create-new-build-configuration",children:[]},{value:"Build the image",id:"build-the-image",children:[]},{value:"Create your app",id:"create-your-app",children:[]},{value:"Expose app",id:"expose-app",children:[]},{value:"Delete the created build",id:"delete-the-created-build",children:[]}]},{value:"Deploy from a local docker image",id:"deploy-from-a-local-docker-image",children:[]},{value:"Deploy from a Git repository",id:"deploy-from-a-git-repository",children:[]}],b={rightToc:p};function u(e){var t=e.components,n=Object(o.a)(e,l);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"build-from-local-dockerfile"},"Build from local Dockerfile"),Object(r.b)("p",null,"This manual shows you an example of how to convert a dockerfile from your local machine to a running container on DSRI (openshift / okd). Start by cloning the example repository to your local machine."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"git clone git@gitlab.maastrichtuniversity.nl:dsri-examples/dockerfile-to-okd.git\n")),Object(r.b)("p",null,"After cloning you now have a local folder containing a Dockerfile and index.html file. Inspect both files."),Object(r.b)("p",null,"Login with the openshift client:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc login https://console-openshift-console.apps.dsri2.unimaas.nl\n")),Object(r.b)("p",null,"Create a new project if you don't have a project yet you can work with (change myproject to a project name of your choice:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc new-project myproject\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"create-new-build-configuration"},"Create new build configuration."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc new-build --name dockerfile-to-okd --binary\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"build-the-image"},"Build the image"),Object(r.b)("p",null,"Start a new build on the DSRI with the files provided:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"cd dockerfile-to-okd\noc start-build dockerfile-to-okd --from-dir=. --follow --wait\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"create-your-app"},"Create your app"),Object(r.b)("p",null,"Create a new app using the build we just created:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc new-app dockerfile-to-okd\n")),Object(r.b)("p",null,"To properly deploy your app on OpenShift you will need to define a few more parameters:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Enable root user access (with ",Object(r.b)("inlineCode",{parentName:"li"},"serviceAccountName"),") by running this command:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'oc patch deployment/dockerfile-to-okd --patch \'{"spec":{"template": {"spec":{"serviceAccountName": "anyuid"}}}}\'\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can also add persistent storage (with ",Object(r.b)("inlineCode",{parentName:"p"},"volumes")," and ",Object(r.b)("inlineCode",{parentName:"p"},"containers: volumeMounts")," )"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"${STORAGE_NAME}"),": Name of your persistent volume claim in the ",Object(r.b)("strong",{parentName:"li"},"Storage")," page of your project in the web UI"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"${STORAGE_FOLDER}")," : Name of the folder inside the persistent volume claim to store the application data (so you can store multiple applications on the same persistent volume claim)")))),Object(r.b)("p",null,"Open the configuration of the started app to fix its configuration:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc edit deployment/dockerfile-to-okd\n")),Object(r.b)("p",null,"You can mount existing persistent volume this way (replace the variables, such as ",Object(r.b)("inlineCode",{parentName:"p"},"${STORAGE_NAME}")," by your values):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'    template:\n      spec:\n        serviceAccountName: anyuid\n        volumes:\n        - name: data\n          persistentVolumeClaim:\n            claimName: "${STORAGE_NAME}"\n        containers:\n        - image: rstudio-root:latest\n          volumeMounts:\n          - name: data\n            mountPath: "/home/rstudio"\n            subPath: "${STORAGE_FOLDER}"\n')),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Generate deployment file in YAML")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You can also generate the app deployment in a YAML file to edit it before start:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc new-app dockerfile-to-okd -o yaml > myapp.yml\n# Edit myapp.yml\noc create -f myapp.yml\n")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"expose-app"},"Expose app"),Object(r.b)("p",null,"Expose the application so you can reach it from your browser and check the route that was created"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc expose svc/dockerfile-to-okd\noc get route\n")),Object(r.b)("p",null,"You can now visit the route shown in the HOST/PORT output of the ",Object(r.b)("inlineCode",{parentName:"p"},"oc get route")," command and see if you have successfully converted the docker file. "),Object(r.b)("p",null,"You can edit the created route to enable HTTPS with this command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'oc patch route/dockerfile-to-okd --patch \'{"spec":{"tls": {"termination": "edge", "insecureEdgeTerminationPolicy": "Redirect"}}}\'\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"delete-the-created-build"},"Delete the created build"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc delete build dockerfile-to-okd\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"See ",Object(r.b)("a",{parentName:"p",href:"https://docs.openshift.com/enterprise/3.0/cli_reference/basic_cli_operations.html#application-modification-cli-operations"},"oc delete documentation"),".")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"deploy-from-a-local-docker-image"},"Deploy from a local docker image"),Object(r.b)("p",null,"You can also deploy a local docker image from your machine. "),Object(r.b)("p",null,"First build the docker image:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker build -t my-docker-image:latest .\n")),Object(r.b)("p",null,"Check you have the image locally on your system:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker images ls\n")),Object(r.b)("p",null,"You should have a docker image for your application:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"REPOSITORY                                   TAG                 \nmy-docker-image                              latest\n")),Object(r.b)("p",null,"You can then deploy providing the docker image name and the name of the application to be deployed:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-abash"},"oc new-app my-docker-image --name app-name-on-openshift\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"deploy-from-a-git-repository"},"Deploy from a Git repository"),Object(r.b)("p",null,"Go to ",Object(r.b)("strong",{parentName:"p"},"+Add")," > ",Object(r.b)("strong",{parentName:"p"},"From Git"),": ",Object(r.b)("a",{parentName:"p",href:"https://console-openshift-console.apps.dsri2.unimaas.nl/import"},"https://console-openshift-console.apps.dsri2.unimaas.nl/import")),Object(r.b)("p",null,"Follow the instructions given by the web UI: provide the URL to your git repository, the port on which the web interface will be deployed, you can also create a secret for git login if the repository is private."),Object(r.b)("p",null,"Once the container has started you will need to make a small change to enable it running with any user ID (due to OpenShift security policies)."),Object(r.b)("p",null,"You can do it with the command line (just change ",Object(r.b)("inlineCode",{parentName:"p"},"your-app-name")," by your application name)"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'oc patch deployment/your-app-name --patch \'{"spec":{"template": {"spec":{"serviceAccountName": "anyuid"}}}}\'\n')),Object(r.b)("p",null,"Or through the web UI: click on your deployment, then ",Object(r.b)("strong",{parentName:"p"},"Actions")," > ",Object(r.b)("strong",{parentName:"p"},"Edit Deployment"),". And edit the YAML of your deployment to add ",Object(r.b)("inlineCode",{parentName:"p"},"serviceAccountName: anyuid")," under ",Object(r.b)("inlineCode",{parentName:"p"},"template.spec"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"    template:\n      spec:\n        serviceAccountName: anyuid\n        containers:\n        - [...]\n")))}u.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=b(n),s=a,m=u["".concat(l,".").concat(s)]||u[s]||d[s]||r;return n?o.a.createElement(m,c(c({ref:t},p),{},{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<r;p++)l[p]=n[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);