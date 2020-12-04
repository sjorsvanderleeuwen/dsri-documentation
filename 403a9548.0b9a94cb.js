(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{125:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=p(a),m=n,d=s["".concat(l,".").concat(m)]||s[m]||u[m]||o;return a?r.a.createElement(d,c(c({ref:t},b),{},{components:a})):r.a.createElement(d,c({ref:t},b))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var b=2;b<o;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(125)),l={id:"deploy-additional-services",title:"Additional services"},c={unversionedId:"deploy-additional-services",id:"deploy-additional-services",isDocsHomePage:!1,title:"Additional services",description:"Additional services available with easy installation on the Data Science Research Infrastructure.",source:"@site/docs/deploy-additional-services.md",slug:"/deploy-additional-services",permalink:"/dsri-documentation/docs/deploy-additional-services",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/docs/docs/deploy-additional-services.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1607036214,sidebar:"docs",previous:{title:"Start a Spark cluster",permalink:"/dsri-documentation/docs/deploy-spark"},next:{title:"Start from Docker image",permalink:"/dsri-documentation/docs/deploy-from-docker"}},i=[{value:"Ubuntu",id:"ubuntu",children:[]},{value:"Apache Flink",id:"apache-flink",children:[]},{value:"OpenMPI",id:"openmpi",children:[]},{value:"File browser",id:"file-browser",children:[]}],b={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Additional services available with easy installation on the ",Object(o.b)("strong",{parentName:"p"},"Data Science Research Infrastructure"),"."),Object(o.b)("p",null,"Feel free to propose new services using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/MaastrichtU-IDS/dsri-documentation/pulls"}),"pull requests")," or request new ones by creating a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/MaastrichtU-IDS/dsri-documentation/issues"}),"new issues"),"."),Object(o.b)("p",null,"A service can be easily deployed from a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/dsri-documentation/docs/guide-dockerfile-to-openshift"}),"Docker image"),"."),Object(o.b)("h2",{id:"ubuntu"},"Ubuntu"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"To be tested")),Object(o.b)("p",null,"Start Ubuntu with the ",Object(o.b)("inlineCode",{parentName:"p"},"root")," user which has ",Object(o.b)("inlineCode",{parentName:"p"},"sudo")," permissions to install anything."),Object(o.b)("p",null,"Add the template to your project:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc apply -f https://raw.githubusercontent.com/MaastrichtU-IDS/dsri-openshift-applications/main/templates-anyuid/template-ubuntu-root-persistent.yml\n")),Object(o.b)("p",null,"This template uses the Ubuntu image hosted on DockerHub, see its documentation at ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.docker.com/r/ubuntu"}),"https://hub.docker.com/r/ubuntu")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83d\udd12 You need root containers enabled (aka. anyuid) in your project to start this application.")),Object(o.b)("p",null,"\ud83d\udcc2 Use the ",Object(o.b)("inlineCode",{parentName:"p"},"/root")," folder (home of the root user) to store your data in the existing persistent storage"),Object(o.b)("p",null,"We enabled the port 8080 in the Ubuntu container if you need to deploy applications."),Object(o.b)("p",null,"To quickly access it from the terminal:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Get the Ubuntu pod ID:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc get pods\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Connect to it:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc rsh POD_ID\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Enable Bash in the Ubuntu container (if it starts with the Shell)"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"bash\n")))),Object(o.b)("h2",{id:"apache-flink"},"Apache Flink"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://flink.apache.org/"}),"Apache Flink")," enables processing of Data Streams using languages such as Java or Scala ."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83d\udd12 You need root containers enabled (aka. anyuid) in your project to start this application.")),Object(o.b)("p",null,"Create the Apache Flink template in your project using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/vemonet/flink-on-openshift"}),"vemonet/flink-on-openshift")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"oc apply -f https://raw.githubusercontent.com/vemonet/flink-on-openshift/master/template-flink-dsri.yml\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Use the template to start the cluster.")),Object(o.b)("p",null,"Use this command to get the Flink Jobmanager pod id and copy file to the pod."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"oc get pod --selector app=flink --selector component=jobmanager --no-headers -o=custom-columns=NAME:.metadata.name\n\n# Example creating the workspace folder and copying the RMLStreamer.jar to the pod\noc exec <pod_id> -- mkdir -p /mnt/workspace/resources\noc cp workspace/resources/RMLStreamer.jar <pod_id>:/mnt/\n")),Object(o.b)("p",null,"Delete the Apache Flink cluster:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc delete all,secret,configmaps,serviceaccount,rolebinding --selector app=flink-cluster\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Change ",Object(o.b)("inlineCode",{parentName:"p"},"flink-cluster")," by the name you gave to the application.")),Object(o.b)("h2",{id:"openmpi"},"OpenMPI"),Object(o.b)("p",null,"OpenMPI can be deployed and run on the DSRI. We use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/kubeflow/mpi-operator"}),"MPI Operator from Kubeflow"),"."),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.kubeflow.org/docs/components/training/mpi/#creating-an-mpi-job"}),"Kubeflow documentation to create a MPI job")," on OpenShift."),Object(o.b)("p",null,"Create Tensorflow Benchmark:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/kubeflow/mpi-operator.git && cd mpi-operator\noc create -f examples/v1alpha2/tensorflow-benchmarks.yaml\n")),Object(o.b)("p",null,"See the GPU benchmarks for examples of MPI job definitions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/kubeflow/mpi-operator/blob/master/examples/v1alpha2/tensorflow-benchmarks.yaml"}),"MPI TensorFlow benchmark")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/kubeflow/mpi-operator/blob/master/examples/v1alpha2/tensorflow-benchmarks-imagenet.yaml"}),"MPI TensorFlow ImageNet benchmark"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:dsri-support-l@maastrichtuniversity.nl"}),"Contact us")," to get access to OpenMPI on the DSRI \ud83d\udcec")),Object(o.b)("h2",{id:"file-browser"},"File browser"),Object(o.b)("p",null,"Deploy a file browser on your persistent volume. This will provide a web UI to upload and download data to your DSRI persistent volume in case you need it (JupyterLab, RStudio and VisualStudio Code server already include a file browser)"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83d\udd12 You need root containers enabled (aka. anyuid) in your project to start this application.")),Object(o.b)("p",null,"Add the file browser template:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc apply -f https://raw.githubusercontent.com/MaastrichtU-IDS/dsri-openshift-applications/main/templates-anyuid/template-filebrowser.yml\n")),Object(o.b)("p",null,"Then the file browser can be deployed from the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://app.dsri.unimaas.nl:8443/console/catalog"}),"OpenShift Catalog"),":"),Object(o.b)("img",{src:"/dsri-documentation/img/screenshot-deploy-filebrowser.png",alt:"Deploy File browser",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(o.b)("p",null,"We can only deploy file browser as a Persistent deployment."),Object(o.b)("p",null,"\ud83d\uddc4\ufe0f ",Object(o.b)("strong",{parentName:"p"},"Persistent"),": use a Persistent Volume Claim (PVC) for a persistent storage of the data."),Object(o.b)("p",null,"The following parameters can be provided:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Provide a unique ",Object(o.b)("strong",{parentName:"li"},"Application name"),". It will be used to generate the application URL."),Object(o.b)("li",{parentName:"ol"},"The ",Object(o.b)("strong",{parentName:"li"},"Storage name")," of the Persistent Volume Claim  (PVC) that will be exposed by the filebrowser."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Storage subpath")," in the the Persistent Volume Claim that will be exposed by the filebrowser. Let it empty to use the Root folder of the persistent volume.")),Object(o.b)("p",null,"You can find the Storage name if you Go to the deployments page > Storage panel."),Object(o.b)("p",null,"This deployment require to have  root user enabled on your project. Contact the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:dsri-support-l@maastrichtuniversity.nl"}),"DSRI support team"),"  or create a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/MaastrichtU-IDS/dsri-documentation/issues"}),"new issues")," to request root access or to create persistent volume for your project if you don't have them ."),Object(o.b)("p",null,"Default credentials will be"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'login: "admin" ')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'password: "admin" '),Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"Please change the password in the Filebrowser Web UI once it has been created.")))),Object(o.b)("img",{src:"/dsri-documentation/img/screenshot-filebrowser-login.png",alt:"File browser Web UI",style:{maxWidth:"50%",maxHeight:"50%"}}))}p.isMDXComponent=!0}}]);