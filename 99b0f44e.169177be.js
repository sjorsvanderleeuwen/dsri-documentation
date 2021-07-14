(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(140)),i=["components"],l={id:"workflows-introduction",title:"Introduction to workflows"},s={unversionedId:"workflows-introduction",id:"workflows-introduction",isDocsHomePage:!1,title:"Introduction to workflows",description:"Running workflows on the DSRI is a work in progress. It usually requires some knowledge about how to orchestrate containers.",source:"@site/docs/workflows-introduction.md",slug:"/workflows-introduction",permalink:"/dsri-documentation/docs/workflows-introduction",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/workflows-introduction.md",version:"current",lastUpdatedBy:"Binosha",lastUpdatedAt:1626252448,sidebar:"docs",previous:{title:"Glossary",permalink:"/dsri-documentation/docs/glossary"},next:{title:"Deploy GitHub Runners",permalink:"/dsri-documentation/docs/workflows-github-actions"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Current solutions on the DSRI",id:"current-solutions-on-the-dsri",children:[{value:"GitHub Actions workflows",id:"github-actions-workflows",children:[]},{value:"Argo",id:"argo",children:[]}]},{value:"More options",id:"more-options",children:[{value:"Kubeflow",id:"kubeflow",children:[]},{value:"Apache Airflow",id:"apache-airflow",children:[]},{value:"Volcano",id:"volcano",children:[]},{value:"Nextflow",id:"nextflow",children:[]},{value:"CWL",id:"cwl",children:[]},{value:"KubeGene",id:"kubegene",children:[]},{value:"Seldon",id:"seldon",children:[]}]}],b={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,i);return Object(r.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Work in progress")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Running workflows on the DSRI is a work in progress. It usually requires some knowledge about how to orchestrate containers."))),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"Multiple technologies are available to run workflows on OpenShift/Kubernetes clusters. Each has its strengths and weaknesses in different areas."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Use-case dependant")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The technology to use needs to be ",Object(r.b)("strong",{parentName:"p"},"chosen depending on your use-case"),"."))),Object(r.b)("h2",{id:"current-solutions-on-the-dsri"},"Current solutions on the DSRI"),Object(r.b)("p",null,"Those solutions can easily be deployed on the DSRI. Let"),Object(r.b)("h3",{id:"github-actions-workflows"},"GitHub Actions workflows"),Object(r.b)("p",null,"GitHub Actions allows you to define automatically containerized workflows through a simple YAML file hosted in your GitHub repository."),Object(r.b)("p",null,"See the ",Object(r.b)("a",{parentName:"p",href:"/docs/workflows-github-actions"},"page about GitHub Actions runners")," for more details, and to deploy runners on the DSRI."),Object(r.b)("h3",{id:"argo"},"Argo"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://argoproj.github.io/argo/"},"Argo")," is a container native workflow engine for ",Object(r.b)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes")," supporting both ",Object(r.b)("a",{parentName:"p",href:"https://argoproj.github.io/docs/argo/examples/readme.html#dag"},"DAG")," and ",Object(r.b)("a",{parentName:"p",href:"https://argoproj.github.io/docs/argo/examples/readme.html#steps"},"step based")," workflows."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Workflows easy to define using Kubernetes-like YAML files."),Object(r.b)("li",{parentName:"ul"},"Easy to define if your workflow is composed of Docker containers to run with arguments.")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Contact us")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},Object(r.b)("a",{parentName:"p",href:"/help"},"Contact us")," if you want to run Argo workflow on the DSRI"))),Object(r.b)("h2",{id:"more-options"},"More options"),Object(r.b)("p",null,"Let us know if you are interested in deploying, and using, any of those workflows on the DSRI."),Object(r.b)("h3",{id:"kubeflow"},"Kubeflow"),Object(r.b)("p",null,"Optimized for Tensorflow workflows on Kubernetes."),Object(r.b)("p",null,"Pipelines written in Python."),Object(r.b)("h3",{id:"apache-airflow"},"Apache Airflow"),Object(r.b)("p",null,"Define, schedule and run workflows. "),Object(r.b)("p",null,"Can be deployed with OpenDataHub, see also ",Object(r.b)("a",{parentName:"p",href:"https://github.com/majordomusio/openshift-airflow"},"this deployment for OpenShift"),"."),Object(r.b)("p",null,"See also: Airflow on ",Object(r.b)("a",{parentName:"p",href:"https://kubernetes.io/blog/2018/06/28/airflow-on-kubernetes-part-1-a-different-kind-of-operator/"},"Kubernetes blog"),", and Kubernetes in ",Object(r.b)("a",{parentName:"p",href:"https://airflow.apache.org/docs/stable/kubernetes.html"},"Airflow documentation"),"."),Object(r.b)("h3",{id:"volcano"},"Volcano"),Object(r.b)("p",null,"Run batch pipelines on Kubernetes with ",Object(r.b)("a",{parentName:"p",href:"https://volcano.sh/"},"Volcano"),". "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"More a scheduler than a workflow engine. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Volcano can be used to run Spark, Kubeflow or KubeGene workflows."))),Object(r.b)("h3",{id:"nextflow"},"Nextflow"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://www.nextflow.io/"},"Nextflow")," has been developed by the genomic research scientific community and is built to run bioinformatics pipeline."),Object(r.b)("p",null,"Define your workflow in a Bash script fashion, providing input, output and the command to run. Without the need to create and use Docker container for Conda pipelines."),Object(r.b)("h3",{id:"cwl"},"CWL"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Developed by the genomic research scientific community."),Object(r.b)("li",{parentName:"ul"},"Good support for provenance description (export as RDF)."),Object(r.b)("li",{parentName:"ul"},"Support on OpenShift still in development",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://airflow.apache.org/docs/stable/kubernetes.html"},"Apache Airflow")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/Duke-GCB/calrissian/"},"workflows-cwl")))),Object(r.b)("li",{parentName:"ul"},"Propose a GUI to build the workflows: ",Object(r.b)("a",{parentName:"li",href:"https://rabix.io/"},"Rabix Composer"))),Object(r.b)("h3",{id:"kubegene"},"KubeGene"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://kubegene.io/"},"KubeGene")," is a turn-key genome sequencing workflow management framework."),Object(r.b)("p",null,"See the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/kubegene/kubegene/blob/master/example/simple-sample/simple-sample.yaml"},"Workflow example"),", and how to ",Object(r.b)("a",{parentName:"p",href:"https://kubegene.io/docs/guides/tool/"},"define a tool"),"."),Object(r.b)("h3",{id:"seldon"},"Seldon"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://www.seldon.io/tech/"},"Open-source platform")," for rapidly deploying machine learning models on Kubernetes. Manage, serve and scale models built in any framework on Kubernetes."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Contact us")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Feel free to ",Object(r.b)("a",{parentName:"p",href:"/dsri-documentation/help"},"contact us")," if you have any questions about running workflows on DSRI or to request the support of a new technology."))))}p.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=o,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||r;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);