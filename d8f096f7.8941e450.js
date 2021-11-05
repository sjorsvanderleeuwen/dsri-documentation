(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var o=n(3),r=n(7),a=(n(0),n(146)),i=["components"],c={id:"mpi-jobs",title:"Run MPI jobs"},p={unversionedId:"mpi-jobs",id:"mpi-jobs",isDocsHomePage:!1,title:"Run MPI jobs",description:"We deployed the MPI Operator from Kubeflow to run MPI jobs on the DSRI.",source:"@site/docs/mpi-jobs.md",slug:"/mpi-jobs",permalink:"/dsri-documentation/docs/mpi-jobs",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/mpi-jobs.md",version:"current",lastUpdatedBy:"Binosha",lastUpdatedAt:1636121189,sidebar:"docs",previous:{title:"Spark cluster",permalink:"/dsri-documentation/docs/deploy-spark"},next:{title:"Neuroscience research",permalink:"/dsri-documentation/docs/neuroscience"}},l=[{value:"Run MPI jobs on CPU",id:"run-mpi-jobs-on-cpu",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,i);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We deployed the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/kubeflow/mpi-operator"},"MPI Operator")," from Kubeflow to run MPI jobs on the DSRI."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The MPI Operator makes it easy to run allreduce-style distributed training on Kubernetes. Please check out ",Object(a.b)("a",{parentName:"p",href:"https://medium.com/kubeflow/introduction-to-kubeflow-mpi-operator-and-industry-adoption-296d5f2e6edc"},"this blog post")," for an introduction to MPI Operator and its industry adoption.")),Object(a.b)("h2",{id:"run-mpi-jobs-on-cpu"},"Run MPI jobs on CPU"),Object(a.b)("p",null,"Checkout the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/kubeflow/mpi-operator/tree/master/examples/horovod"},"repository of the CPU benchmark")," for a complete example of an MPI job: python script, ",Object(a.b)("inlineCode",{parentName:"p"},"Dockerfile"),", and the job deployment YAML."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Clone the repository, and go to the example folder:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/kubeflow/mpi-operator.git\ncd mpi-operator/examples/horovod\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Open the ",Object(a.b)("inlineCode",{parentName:"li"},"tensorflow-mnist.yaml")," file, and fix the ",Object(a.b)("inlineCode",{parentName:"li"},"apiVersion")," on the first line:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"# From\napiVersion: kubeflow.org/v1\n# To\napiVersion: kubeflow.org/v1alpha2\n")),Object(a.b)("p",null,"You will also need to specify those containers can run with the ",Object(a.b)("inlineCode",{parentName:"p"},"root")," user by adding the ",Object(a.b)("inlineCode",{parentName:"p"},"serviceAccountName")," between ",Object(a.b)("inlineCode",{parentName:"p"},"spec:")," and ",Object(a.b)("inlineCode",{parentName:"p"},"container:")," for the launcher and the worker templates:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"      template:\n        spec:\n          serviceAccountName: anyuid\n          containers:\n          - image: docker.io/kubeflow/mpi-horovod-mnist\n")),Object(a.b)("p",null,"Your ",Object(a.b)("inlineCode",{parentName:"p"},"tensorflow-mnist.yaml")," file should look like this: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: kubeflow.org/v1alpha2\nkind: MPIJob\nmetadata:\n  name: tensorflow-mnist\nspec:\n  slotsPerWorker: 1\n  cleanPodPolicy: Running\n  mpiReplicaSpecs:\n    Launcher:\n      replicas: 1\n      template:\n        spec:\n          serviceAccountName: anyuid\n          containers:\n          - image: docker.io/kubeflow/mpi-horovod-mnist\n            name: mpi-launcher\n            command:\n            - mpirun\n            args:\n            - -np\n            - "2"\n            - --allow-run-as-root\n            - -bind-to\n            - none\n            - -map-by\n            - slot\n            - -x\n            - LD_LIBRARY_PATH\n            - -x\n            - PATH\n            - -mca\n            - pml\n            - ob1\n            - -mca\n            - btl\n            - ^openib\n            - python\n            - /examples/tensorflow_mnist.py\n            resources:\n              limits:\n                cpu: 1\n                memory: 2Gi\n    Worker:\n      replicas: 2\n      template:\n        spec:\n          serviceAccountName: anyuid\n          containers:\n          - image: docker.io/kubeflow/mpi-horovod-mnist\n            name: mpi-worker\n            resources:\n              limits:\n                cpu: 2\n                memory: 4Gi\n\n')),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Once this has been set, create the job in your current project on the DSRI (change with ",Object(a.b)("inlineCode",{parentName:"li"},"oc project my-project"),"):")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"oc create -f tensorflow-mnist.yaml\n")),Object(a.b)("p",null,"You should see the 2 workers and the main job running in your project ",Object(a.b)("strong",{parentName:"p"},"Topology")," page in the DSRI web UI. You can then easily check the logs of the launcher and workers."),Object(a.b)("p",null,"To run your own MPI job on the DSRI, you can take a look at, and edit, the different files provided by the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/kubeflow/mpi-operator/tree/master/examples/horovod"},"MPI Operator example"),":"),Object(a.b)("p",null,"\ud83d\udc0d ",Object(a.b)("a",{parentName:"p",href:"https://github.com/kubeflow/mpi-operator/blob/master/examples/horovod/tensorflow_mnist.py"},Object(a.b)("inlineCode",{parentName:"a"},"tensorflow_mnist.py")),": the python script with the actual job to run"),Object(a.b)("p",null,"\ud83d\udc33 ",Object(a.b)("a",{parentName:"p",href:"https://github.com/kubeflow/mpi-operator/blob/master/examples/horovod/Dockerfile.cpu"},Object(a.b)("inlineCode",{parentName:"a"},"Dockerfile.cpu")),": the Dockerfile to define the image of the containers in which your job will run (install dependencies)"),Object(a.b)("p",null,"\u26f5\ufe0f ",Object(a.b)("a",{parentName:"p",href:"https://github.com/kubeflow/mpi-operator/blob/master/examples/horovod/tensorflow-mnist.yaml"},Object(a.b)("inlineCode",{parentName:"a"},"tensorflow-mnist.yaml")),": the YAML file to define the MPI deployment on Kubernetes (number and limits of workers, ",Object(a.b)("inlineCode",{parentName:"p"},"mpirun")," command, etc)"),Object(a.b)("p",null,"Visit the ",Object(a.b)("a",{parentName:"p",href:"https://www.kubeflow.org/docs/components/training/mpi/#creating-an-mpi-job"},"Kubeflow documentation to create a MPI job")," for more details."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Contact us")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Feel free to contact us on  the DSRI Slack ",Object(a.b)("strong",{parentName:"p"},"#helpdesk")," channel to discuss the use of MPI on the DSRI."))))}b.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),u=o,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||a;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);