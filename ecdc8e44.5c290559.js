(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{118:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(7),l=(a(0),a(125)),p={id:"deploy-spark",title:"Start a Spark cluster"},o={unversionedId:"deploy-spark",id:"deploy-spark",isDocsHomePage:!1,title:"Start a Spark cluster",description:"Currently deploying an Apache Spark cluster is a work in progress on the DSRI, contact us if you are interested in trying it out.",source:"@site/docs/deploy-spark.md",slug:"/deploy-spark",permalink:"/dsri-documentation/docs/deploy-spark",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/docs/docs/deploy-spark.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1607036214,sidebar:"docs",previous:{title:"Start on GPU",permalink:"/dsri-documentation/docs/deploy-on-gpu"},next:{title:"Additional services",permalink:"/dsri-documentation/docs/deploy-additional-services"}},c=[{value:"Create the template",id:"create-the-template",children:[]},{value:"Deploy a Spark cluster",id:"deploy-a-spark-cluster",children:[]},{value:"Run on Spark",id:"run-on-spark",children:[{value:"Using PySpark",id:"using-pyspark",children:[]}]},{value:"Delete a running Spark cluster",id:"delete-a-running-spark-cluster",children:[]},{value:"Delete the Spark template",id:"delete-the-spark-template",children:[]},{value:"Alternative: deploy Spark with Helm",id:"alternative-deploy-spark-with-helm",children:[]}],i={rightToc:c};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Currently deploying an ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://spark.apache.org/"}),"Apache Spark")," cluster is a work in progress on the DSRI, ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/dsri-documentation/help"}),"contact us")," if you are interested in trying it out.")),Object(l.b)("h2",{id:"create-the-template"},"Create the template"),Object(l.b)("p",null,"The following services are deployed by this Spark template:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"a JupyterLab all-spark-notebook"),Object(l.b)("li",{parentName:"ul"},"a configurable Spark cluster from ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/CSCfi/spark-openshift"}),"CSCfi/spark-openshift")),Object(l.b)("li",{parentName:"ul"},"a storage automatically created")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"You will need to have ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/dsri-documentation/docs/openshift-install"}),"the oc command line tool installed")," to create the template.")),Object(l.b)("p",null,"Login with the ",Object(l.b)("inlineCode",{parentName:"p"},"oc")," command line tool and go to your project:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"oc project <my_project>\n")),Object(l.b)("p",null,"Create the template:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"oc apply -f https://raw.githubusercontent.com/vemonet/spark-openshift/master/spark-template-dsri.yml\n")),Object(l.b)("h2",{id:"deploy-a-spark-cluster"},"Deploy a Spark cluster"),Object(l.b)("p",null,"Go to the DSRI OpenShift web UI catalog and click on the ",Object(l.b)("strong",{parentName:"p"},"Apache Spark (Persistent)")," application."),Object(l.b)("img",{src:"/dsri-documentation/img/screenshot-deploy-spark.png",alt:"Deploy Apache Spark",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(l.b)("p",null,"You will be prompted various parameters to configure your Spark cluster resources."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\ud83d\udeab Only 1 Spark cluster should be deployed by project.")),Object(l.b)("h2",{id:"run-on-spark"},"Run on Spark"),Object(l.b)("h3",{id:"using-pyspark"},"Using PySpark"),Object(l.b)("p",null,"Use local Spark for testing:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'import findspark\nfindspark.init()\nimport pyspark\nsc = pyspark.SparkContext(appName="Pi")\n')),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"It will use local","[*]"," as Spark cluster")),Object(l.b)("p",null,"Use the deployed Spark cluster:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'import pyspark\nsc = pyspark.SparkContext(appName="Pi", master="spark://my-spark-spark-master:7077")\n')),Object(l.b)("h2",{id:"delete-a-running-spark-cluster"},"Delete a running Spark cluster"),Object(l.b)("p",null,"Get all objects part of the Spark cluster:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"oc get all --selector app=spark\n")),Object(l.b)("p",null,"Delete all objects generated for the Spark cluster:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"oc delete all --selector app=spark\noc delete secret --selector app=spark\noc delete configmaps --selector app=spark\n")),Object(l.b)("h2",{id:"delete-the-spark-template"},"Delete the Spark template"),Object(l.b)("p",null,"In case you want to delete or update the Spark template:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"oc delete -f spark-template-dsri.yml\n")),Object(l.b)("h2",{id:"alternative-deploy-spark-with-helm"},"Alternative: deploy Spark with Helm"),Object(l.b)("p",null,"You can use Helm to deploy Spark on OpenShift."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Install Helm following instructions at ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/dsri-documentation/docs/helm"}),"this page"),".")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Install Microsoft Spark charts, with Zeppelin notebook and Livy API: ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://artifacthub.io/packages/helm/microsoft/spark"}),"https://artifacthub.io/packages/helm/microsoft/spark")))))}s.isMDXComponent=!0},125:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),s=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=s(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),b=s(a),d=r,m=b["".concat(p,".").concat(d)]||b[d]||u[d]||l;return a?n.a.createElement(m,o(o({ref:t},i),{},{components:a})):n.a.createElement(m,o({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var i=2;i<l;i++)p[i]=a[i];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);