(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{172:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),c=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,b=u["".concat(r,".").concat(d)]||u[d]||m[d]||i;return n?o.a.createElement(b,s(s({ref:t},l),{},{components:n})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return c}));var a=n(3),o=n(7),i=(n(0),n(172)),r={id:"anatomy-of-an-application",title:"Anatomy of a DSRI application"},s={unversionedId:"anatomy-of-an-application",id:"anatomy-of-an-application",isDocsHomePage:!1,title:"Anatomy of a DSRI application",description:"This page will present you how an applications is typically built using an OpenShift template. This will also help you understand more in general the different objects that needs to be defined when deploying an application on a Kubernetes cluster. Even if OpenShift templates can only be deployed to OpenShift, the objects they define are the same as in Kubernetes (apart from the Route which becomes Ingress).",source:"@site/docs/anatomy-of-an-application.md",slug:"/anatomy-of-an-application",permalink:"/dsri-documentation/docs/anatomy-of-an-application",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/anatomy-of-an-application.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1618522024,sidebar:"docs",previous:{title:"Deploy from a Docker image",permalink:"/dsri-documentation/docs/deploy-from-docker"},next:{title:"Install from Operators",permalink:"/dsri-documentation/docs/operators"}},p=[{value:"Application walkthrough",id:"application-walkthrough",children:[]},{value:"The complete application",id:"the-complete-application",children:[]},{value:"Add a configuration file",id:"add-a-configuration-file",children:[]},{value:"Define resource limits",id:"define-resource-limits",children:[]}],l={rightToc:p};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This page will present you how an applications is typically built using an ",Object(i.b)("strong",{parentName:"p"},"OpenShift template"),". This will also help you understand more in general the different objects that needs to be defined when ",Object(i.b)("strong",{parentName:"p"},"deploying an application on a Kubernetes cluster"),". Even if OpenShift templates can only be deployed to OpenShift, the objects they define are the same as in Kubernetes (apart from the Route which becomes Ingress)."),Object(i.b)("p",null,"There are other ways to describe applications on OpenShift cluster (here the DSRI), such as Helm or Operators. But OpenShift templates are the easiest and quickest way to build an application that can be deployed from the DSRI web UI catalog in a few clicks, and by providing a few parameters."),Object(i.b)("p",null,"It is better to have a basic understanding of what a docker container is to fully understand this walkthrough, but it should already gives a good idea of the different objects deployed with each DSRI application."),Object(i.b)("p",null,"We will use the template used to deploy JupyterLab as example, and we will describe the goal, importance and caveats of each parts of the application definition. But the same template and instructions can be easily reused for other applications with a web UI to access."),Object(i.b)("p",null,"Checkout the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/dsri-documentation/blob/master/applications/templates/template-jupyterlab-root.yml"},"complete JupyterLab template here")," (it will be slightly different with a bit more comments, but there are globally the same)"),Object(i.b)("p",null,"You will see that deploying on Kubernetes (and by extension, here OpenShift), is just about defining objects in a YAML file, like a complex ",Object(i.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," file. "),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Do you got what it takes?")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The amount of objects might seems a bit overwhelming at first, but this is what it takes to automatically deploy a complex application on a large cluster, automatically available through a generated URL, with ",Object(i.b)("inlineCode",{parentName:"p"},"HTTPS")," encryption to protect your passwords when you log to a web UI!"))),Object(i.b)("h2",{id:"application-walkthrough"},"Application walkthrough"),Object(i.b)("p",null,"First, you need to create your ",Object(i.b)("strong",{parentName:"p"},"Template")," objects, this will be the main object we will create here as all other objects defined will be deployed by this template. "),Object(i.b)("p",null,"In this part we mainly just provide the description and informations that will be shown to users when deploying the application from the DSRI web UI catalog."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"---\nkind: Template\napiVersion: template.openshift.io/v1\nlabels:\n  template: jupyterlab-root\nmetadata:\n  name: jupyterlab-root\n  annotations:\n    openshift.io/display-name: JupyterLab\n    description: |-\n      Start JupyterLab images as the `jovyan` user, with sudo privileges to install anything you need. \n      \ud83d\udcc2 Use the `/home/jovyan` folder (workspace of the JupyterLab UI) to store your data in the persistent storage automatically created\n      You can find the persistent storage in the DSRI web UI, go to Administrator view > Storage > Persistent Volume Claims\n      You can use any image based on the official Jupyter docker stack https://github.com/jupyter/docker-stacks\n      - jupyter/tensorflow-notebook\n      - jupyter/r-notebook\n      - jupyter/all-spark-notebook\n      - ghcr.io/maastrichtu-ids/jupyterlab (with Java and SPARQL kernels)\n      Or build your own! Checkout https://github.com/MaastrichtU-IDS/jupyterlab for an example of custom image\n      Once JupyterLab is deployed you can install any pip packages, JupyterLab extensions, and apt packages.\n    iconClass: icon-python\n    tags: python,jupyter,notebook\n    openshift.io/provider-display-name: Institute of Data Science, UM\n    openshift.io/documentation-url: https://maastrichtu-ids.github.io/dsri-documentation/docs/deploy-jupyter\n    openshift.io/support-url: https://maastrichtu-ids.github.io/dsri-documentation/help\n")),Object(i.b)("p",null,"Then define the ",Object(i.b)("strong",{parentName:"p"},"parameters")," the user will be able to define in the DSRI catalog web UI when instantiating the application.  ",Object(i.b)("inlineCode",{parentName:"p"},"APPLICATION_NAME")," is the most important as it will be used everywhere to create the objects and identify the application."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"parameters:\n- name: APPLICATION_NAME\n  displayName: Name for the application\n  description: Must be without spaces (use -), and unique in the project.\n  value: jupyterlab\n  required: true\n- name: PASSWORD\n  displayName: JupyterLab UI Password\n  description: The password/token to access the JupyterLab web UI\n  required: true\n- name: APPLICATION_IMAGE\n  displayName: Jupyter notebook Docker image\n  value: ghcr.io/maastrichtu-ids/jupyterlab:latest\n  required: true\n  description: You can use any image based on https://github.com/jupyter/docker-stacks\n- name: STORAGE_SIZE\n  displayName: Storage size\n  description: Size of the storage allocated to the notebook persistent storage in `/home/jovyan`.\n  value: 5Gi\n  required: true\n")),Object(i.b)("p",null,"We can then refer to those parameters value (filled by the users of the template) in the rest of the template using this syntax: ",Object(i.b)("inlineCode",{parentName:"p"},"${APPLICATION_NAME}")),Object(i.b)("p",null,"We will now ",Object(i.b)("strong",{parentName:"p"},"describe all objects deployed")," when we instantiate this template (to start an application). "),Object(i.b)("p",null,"First we define the ",Object(i.b)("strong",{parentName:"p"},"ImageStream")," object to import the Docker image(s) of your application(s) on the DSRI cluster"),Object(i.b)("p",null,"Setting the ",Object(i.b)("inlineCode",{parentName:"p"},"importPolicy: scheduled")," to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," will have the DSRI to automatically check for new version of this image, which can be useful if you want to always have the latest published version of an applications. Visit the ",Object(i.b)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.6/openshift_images/image-streams-manage.html"},"OpenShift ImageStreams documentation")," for more details. Be careful as enabling this feature without real need will cause the DSRI to query DockerHub more, which might require you to login to DockerHub to increase your pull request quota."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'objects:\n- kind: "ImageStream"\n  apiVersion: image.openshift.io/v1\n  metadata:\n    name: ${APPLICATION_NAME}\n    labels:\n      app: ${APPLICATION_NAME}\n  spec:\n    tags:\n    - name: latest\n      from:\n        kind: DockerImage\n        name: ${APPLICATION_IMAGE}\n      importPolicy:\n        scheduled: true\n    lookupPolicy:\n      local: true\n')),Object(i.b)("p",null,"Then we define the ",Object(i.b)("strong",{parentName:"p"},"PersistentVolumeClaim"),", which is a persistent storage on which we will mount the ",Object(i.b)("inlineCode",{parentName:"p"},"/home/jovyan")," folder to avoid loosing data if our application is restarted."),Object(i.b)("p",null,"Any file outside of a persistent volume can be lost at any moment if the pod restart, usually it only consists in temporary file if you are properly working in the persistent volume folder. This can be useful also if your application is crashing, stopping and restarting your pod (application) might fix it."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'- kind: "PersistentVolumeClaim"\n  apiVersion: "v1"\n  metadata:\n    name: ${APPLICATION_NAME}\n    labels:\n      app: ${APPLICATION_NAME}\n  spec:\n    accessModes:\n      - "ReadWriteMany"\n    resources:\n      requests:\n        storage: ${STORAGE_SIZE}\n')),Object(i.b)("p",null,"Then the ",Object(i.b)("strong",{parentName:"p"},"Secret")," to store the password"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'- kind: "Secret"\n  apiVersion: v1\n  metadata:\n    name: "${APPLICATION_NAME}"\n    labels:\n      app: ${APPLICATION_NAME}\n  stringData:\n    application-password: "${PASSWORD}"\n')),Object(i.b)("p",null,"Then the ",Object(i.b)("strong",{parentName:"p"},"DeploymentConfig")," (aka. Deployment) define how to deploy the JupyterLab image, if you want to deploy another application alongside JupyterLab you can do it by adding as many deployments as you want! (and use the same, or different, persistent volume claims for storage). Checkout the ",Object(i.b)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.6/applications/deployments/what-deployments-are.html"},"OpenShift Deployments documentation")," for more details."),Object(i.b)("p",null,"In this first block we will define the strategy to update and recreate our applications if you change the YAML configuration, or when a new latest docker image is updated, allowing your service to always use the latest up-to-date version of a software without any intervention from you. "),Object(i.b)("p",null,"We chose the ",Object(i.b)("inlineCode",{parentName:"p"},"Recreate")," release option to make sure the container is properly recreated and avoid unnecessary resources consumption, but you can also use ",Object(i.b)("inlineCode",{parentName:"p"},"Rolling")," to have a downtime free transition between deployments."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'- kind: "DeploymentConfig"\n  apiVersion: v1\n  metadata:\n    name: "${APPLICATION_NAME}"\n    labels:\n      app: "${APPLICATION_NAME}"\n  spec:\n    replicas: 1\n    strategy:\n      type: "Recreate"\n    triggers:\n    - type: "ConfigChange"\n    - type: "ImageChange"\n      imageChangeParams:\n        automatic: true\n        containerNames:\n        - jupyter-notebook\n        from:\n          kind: ImageStreamTag\n          name: ${APPLICATION_NAME}:latest\n    selector:\n      app: "${APPLICATION_NAME}"\n      deploymentconfig: "${APPLICATION_NAME}"\n')),Object(i.b)("p",null,"Then we define the spec of the ",Object(i.b)("strong",{parentName:"p"},"pod")," that will be deployed by this DeploymentConfig."),Object(i.b)("p",null,"Setting the ",Object(i.b)("inlineCode",{parentName:"p"},"serviceAccountName: anyuid")," is required for most Docker containers as it allows to run a container using any user ID (e.g. root). Otherwise OpenShift expect to use a random user ID, which is require to build the Docker image especially to work with random user IDs."),Object(i.b)("p",null,"We then create the ",Object(i.b)("inlineCode",{parentName:"p"},"containers:")," array which is where we will define the containers deployed in the pod. It is recommended to deploy 1 container per pod, as it enables a better separation and management of the applications, apart if you know what you are doing. You can also provide the command to run at the start of the container to overwrite the default one, and define the exposed ports (here 8080)."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'    template:\n      metadata:\n        labels:\n          app: "${APPLICATION_NAME}"\n          deploymentconfig: "${APPLICATION_NAME}"\n      spec:\n        serviceAccountName: "anyuid"\n        containers:\n        - name: "jupyter-notebook"\n          image: "${APPLICATION_NAME}:latest"\n          command:\n          - "start-notebook.sh"\n          - "--no-browser"\n          - "--ip=0.0.0.0"\n          ports:\n          - containerPort: 8888\n            protocol: TCP\n')),Object(i.b)("p",null,"Then define the ",Object(i.b)("strong",{parentName:"p"},"environment variables")," used in your container, usually the password and most parameters are set here, such as enabling ",Object(i.b)("inlineCode",{parentName:"p"},"sudo")," in the container."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'          env:\n          - name: JUPYTER_TOKEN\n            valueFrom:\n              secretKeyRef:\n                key: "application-password"\n                name: "${APPLICATION_NAME}"\n          - name: JUPYTER_ENABLE_LAB\n            value: "yes"\n          - name: GRANT_SUDO\n            value: "yes"\n')),Object(i.b)("p",null,"Then we need to mount the previously created ",Object(i.b)("strong",{parentName:"p"},"PersistentVolume")," on ",Object(i.b)("inlineCode",{parentName:"p"},"/home/jovyan")," , the workspace of JupyterLab. Be careful: ",Object(i.b)("inlineCode",{parentName:"p"},"volumeMounts")," is in the ",Object(i.b)("inlineCode",{parentName:"p"},"containers:")," object, and ",Object(i.b)("inlineCode",{parentName:"p"},"volumes")," is defined in the ",Object(i.b)("inlineCode",{parentName:"p"},"spec:")," object"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'          volumeMounts:\n          - name: data\n            mountPath: "/home/jovyan"\n        volumes:\n        - name: data\n          persistentVolumeClaim:\n            claimName: "${APPLICATION_NAME}"\n')),Object(i.b)("p",null,"Then we define the ",Object(i.b)("strong",{parentName:"p"},"securityContext")," to allow JupyterLab to run as root, this is not required for most applications, just a specificity of the official Jupyter images to run with root privileges."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"        securityContext:\n          runAsUser: 0\n          supplementalGroups:\n          - 100\n        automountServiceAccountToken: false\n")),Object(i.b)("p",null,"Then we create the ",Object(i.b)("strong",{parentName:"p"},"Service")," to expose the port 8888 of our JupyterLab container on the project network. This means that the JupyterLab web UI will reachable by all other application deployed in your project using its application name as hostname (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"jupyterlab"),")"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'- kind: "Service"\n  apiVersion: v1\n  metadata:\n    name: "${APPLICATION_NAME}"\n    labels:\n      app: ${APPLICATION_NAME}\n  spec:\n    ports:\n    - name: 8888-tcp\n      protocol: TCP\n      port: 8888\n      targetPort: 8888\n    selector:\n      app: ${APPLICATION_NAME}\n      deploymentconfig: "${APPLICATION_NAME}"\n    type: ClusterIP\n')),Object(i.b)("p",null,"Then we define the ",Object(i.b)("strong",{parentName:"p"},"Route")," which will automatically generate a URL for the service of your application based following this template: ",Object(i.b)("inlineCode",{parentName:"p"},"APPLICATION_NAME-PROJECT_ID-DSRI_URL")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'- kind: "Route"\n  apiVersion: v1\n  metadata:\n    name: "${APPLICATION_NAME}"\n    labels:\n      app: ${APPLICATION_NAME}\n  spec:\n    host: \'\'\n    to:\n      kind: Service\n      name: "${APPLICATION_NAME}"\n      weight: 100\n    port:\n      targetPort: 8888-tcp\n    tls:\n      termination: edge\n      insecureEdgeTerminationPolicy: Redirect\n')),Object(i.b)("h2",{id:"the-complete-application"},"The complete application"),Object(i.b)("p",null,"Here is a complete file to describe the JupyterLab deployment template, you can add it to your project catalog by going to ",Object(i.b)("strong",{parentName:"p"},"+ Add")," in the DSRI web UI, then click on the option to add a ",Object(i.b)("strong",{parentName:"p"},"YAML")," file content, and copy paste the template YAML."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'---\nkind: Template\napiVersion: template.openshift.io/v1\nlabels:\n  template: jupyterlab-root\nmetadata:\n  name: jupyterlab-root\n  annotations:\n    openshift.io/display-name: JupyterLab\n    description: |-\n      Start JupyterLab images as the `jovyan` user, with sudo privileges to install anything you need. \n      \ud83d\udcc2 Use the `/home/jovyan` folder (workspace of the JupyterLab UI) to store your data in the persistent storage automatically created\n      You can find the persistent storage in the DSRI web UI, go to Administrator view > Storage > Persistent Volume Claims\n      You can use any image based on the official Jupyter docker stack https://github.com/jupyter/docker-stacks\n      - jupyter/tensorflow-notebook\n      - jupyter/r-notebook\n      - jupyter/all-spark-notebook\n      - ghcr.io/maastrichtu-ids/jupyterlab (with Java and SPARQL kernels)\n      Or build your own! Checkout https://github.com/MaastrichtU-IDS/jupyterlab for an example of custom image\n      Once JupyterLab is deployed you can install any pip packages, JupyterLab extensions, and apt packages.\n    iconClass: icon-python\n    tags: python,jupyter,notebook\n    openshift.io/provider-display-name: Institute of Data Science, UM\n    openshift.io/documentation-url: https://maastrichtu-ids.github.io/dsri-documentation/docs/deploy-jupyter\n    openshift.io/support-url: https://maastrichtu-ids.github.io/dsri-documentation/help\n    \nparameters:\n- name: APPLICATION_NAME\n  displayName: Name for the application\n  description: Must be without spaces (use -), and unique in the project.\n  value: jupyterlab\n  required: true\n- name: PASSWORD\n  displayName: JupyterLab UI Password\n  description: The password/token to access the JupyterLab web UI\n  required: true\n- name: APPLICATION_IMAGE\n  displayName: Jupyter notebook Docker image\n  value: ghcr.io/maastrichtu-ids/jupyterlab:latest\n  required: true\n  description: You can use any image based on https://github.com/jupyter/docker-stacks\n- name: STORAGE_SIZE\n  displayName: Storage size\n  description: Size of the storage allocated to the notebook persistent storage in `/home/jovyan`.\n  value: 5Gi\n  required: true\n    \nobjects:\n- kind: "PersistentVolumeClaim"\n  apiVersion: "v1"\n  metadata:\n    name: ${APPLICATION_NAME}\n    labels:\n      app: ${APPLICATION_NAME}\n  spec:\n    accessModes:\n      - "ReadWriteMany"\n    resources:\n      requests:\n        storage: ${STORAGE_SIZE}\n\n- kind: "Secret"\n  apiVersion: v1\n  metadata:\n    name: "${APPLICATION_NAME}"\n    labels:\n      app: ${APPLICATION_NAME}\n  stringData:\n    application-password: "${PASSWORD}"\n\n- kind: "DeploymentConfig"\n  apiVersion: v1\n  metadata:\n    name: "${APPLICATION_NAME}"\n    labels:\n      app: "${APPLICATION_NAME}"\n  spec:\n    replicas: 1\n    strategy:\n      type: Recreate\n    triggers:\n    - type: ConfigChange\n    - type: ImageChange\n      imageChangeParams:\n        automatic: true\n        containerNames:\n        - jupyter-notebook\n        from:\n          kind: ImageStreamTag\n          name: ${APPLICATION_NAME}:latest\n    selector:\n      app: "${APPLICATION_NAME}"\n      deploymentconfig: "${APPLICATION_NAME}"\n\n    template:\n      metadata:\n        labels:\n          app: "${APPLICATION_NAME}"\n          deploymentconfig: "${APPLICATION_NAME}"\n      spec:\n        serviceAccountName: "anyuid"\n        containers:\n        - name: jupyter-notebook\n          image: "${APPLICATION_NAME}:latest"\n          command:\n          - "start-notebook.sh"\n          - "--no-browser"\n          - "--ip=0.0.0.0"\n          ports:\n          - containerPort: 8888\n            protocol: TCP\n\n          env:\n          - name: "JUPYTER_TOKEN"\n            valueFrom:\n              secretKeyRef:\n                key: application-password\n                name: "${APPLICATION_NAME}"\n          - name: JUPYTER_ENABLE_LAB\n            value: "yes"\n          - name: GRANT_SUDO\n            value: "yes"\n\n          volumeMounts:\n          - name: data\n            mountPath: "/home/jovyan"\n        volumes:\n        - name: data\n          persistentVolumeClaim:\n            claimName: "${APPLICATION_NAME}"\n\n        securityContext:\n          runAsUser: 0\n          supplementalGroups:\n          - 100\n        automountServiceAccountToken: false\n\n- kind: "Service"\n  apiVersion: v1\n  metadata:\n    name: "${APPLICATION_NAME}"\n    labels:\n      app: ${APPLICATION_NAME}\n  spec:\n    ports:\n    - name: 8888-tcp\n      protocol: TCP\n      port: 8888\n      targetPort: 8888\n    selector:\n      app: ${APPLICATION_NAME}\n      deploymentconfig: "${APPLICATION_NAME}"\n    type: ClusterIP\n\n- kind: "Route"\n  apiVersion: v1\n  metadata:\n    name: "${APPLICATION_NAME}"\n    labels:\n      app: ${APPLICATION_NAME}\n  spec:\n    host: \'\'\n    to:\n      kind: Service\n      name: "${APPLICATION_NAME}"\n      weight: 100\n    port:\n      targetPort: 8888-tcp\n    tls:\n      termination: edge\n      insecureEdgeTerminationPolicy: Redirect\n')),Object(i.b)("h2",{id:"add-a-configuration-file"},"Add a configuration file"),Object(i.b)("p",null,"This practice is a bit advanced and is not required for most deployments, but you can easily create a ",Object(i.b)("strong",{parentName:"p"},"ConfigMap")," object to define any file to be provided at runtime to the application. For example here we are going to define a ",Object(i.b)("inlineCode",{parentName:"p"},"jupyter_notebook_config.py")," which will be run at runtime (to do something with the notebook password)"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"- kind: ConfigMap\n  apiVersion: v1\n  metadata:\n    name: \"${APPLICATION_NAME}-cfg\"\n    labels:\n      app: ${APPLICATION_NAME}\n  data:\n    jupyter_notebook_config.py: |\n      import os\n      password = os.environ.get('JUPYTER_NOTEBOOK_PASSWORD')\n      if password:\n          import notebook.auth\n          c.NotebookApp.password = notebook.auth.passwd(password)\n          del password\n          del os.environ['JUPYTER_NOTEBOOK_PASSWORD']\n      image_config_file = '/home/jovyan/.jupyter/jupyter_notebook_config.py'\n      if os.path.exists(image_config_file):\n          with open(image_config_file) as fp:\n              exec(compile(fp.read(), image_config_file, 'exec'), globals())\n")),Object(i.b)("p",null,"We will then need to mount this config file like a persistent volume at where we want it to be, change the ",Object(i.b)("strong",{parentName:"p"},"volumes")," and ",Object(i.b)("strong",{parentName:"p"},"volumeMounts")," of your ",Object(i.b)("strong",{parentName:"p"},"DeploymentConfig"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'          volumeMounts:\n          - name: data\n            mountPath: "/home/jovyan"\n          - name: configs\n            mountPath: "/etc/jupyter/openshift"\n        automountServiceAccountToken: false\n        volumes:\n        - name: data\n          persistentVolumeClaim:\n            claimName: "${APPLICATION_NAME}"\n        - name: configs\n          configMap:\n            name: "${APPLICATION_NAME}-cfg"\n')),Object(i.b)("p",null,"Finally change the ",Object(i.b)("inlineCode",{parentName:"p"},"jupyter-notebook")," container start command to include this config file:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'          command:\n          - "start-notebook.sh"\n          - "--no-browser"\n          - "--ip=0.0.0.0"\n          - "--config=/etc/jupyter/openshift/jupyter_notebook_config.py"\n')),Object(i.b)("h2",{id:"define-resource-limits"},"Define resource limits"),Object(i.b)("p",null,"You can also define resources request and limits for each ",Object(i.b)("strong",{parentName:"p"},"DeploymentConfig"),", in ",Object(i.b)("inlineCode",{parentName:"p"},"spec:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'        spec:\n          resources:\n            requests: \n              cpu: "1"\n              memory: "2Gi"\n            limits:\n              cpu: "128"\n              memory: "300Gi"\n')))}c.isMDXComponent=!0}}]);