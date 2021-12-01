(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{147:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(147)),i=["components"],l={id:"jupyterhub-spark",title:"JupyterHub with Spark cluster"},p={unversionedId:"jupyterhub-spark",id:"jupyterhub-spark",isDocsHomePage:!1,title:"JupyterHub with Spark cluster",description:"JupyterHub is ideal to enable multiple users easily start predefined workspaces in the same project. The complimentary Apache Spark cluster can be used from the workspaces to perform distributed processing.",source:"@site/docs/jupyterhub-spark.md",slug:"/jupyterhub-spark",permalink:"/dsri-documentation/docs/jupyterhub-spark",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/jupyterhub-spark.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1638396838,sidebar:"docs",previous:{title:"Matlab",permalink:"/dsri-documentation/docs/deploy-matlab"},next:{title:"Spark cluster",permalink:"/dsri-documentation/docs/deploy-spark"}},c=[{value:"\ud83e\uddca Install kfctl",id:"-install-kfctl",children:[]},{value:"\ud83e\ude90 Deploy JupyterHub and Spark",id:"-deploy-jupyterhub-and-spark",children:[]},{value:"\ud83d\uddd1\ufe0f Delete the deployment",id:"\ufe0f-delete-the-deployment",children:[]},{value:"\u2728 Start a new Spark cluster",id:"-start-a-new-spark-cluster",children:[]}],s={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"JupyterHub is ideal to enable multiple users easily start predefined workspaces in the same project. The complimentary Apache Spark cluster can be used from the workspaces to perform distributed processing."),Object(o.b)("h2",{id:"-install-kfctl"},"\ud83e\uddca Install kfctl"),Object(o.b)("p",null,"You will need to install ",Object(o.b)("inlineCode",{parentName:"p"},"kfctl")," on your machine, a tool to deploy Kubeflow applications, download the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/kubeflow/kfctl/releases"},"latest version for your OS \ud83d\udce5\ufe0f")," "),Object(o.b)("p",null,"You can then install it by downloading the binary and putting it in your path, for example on Linux:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/kubeflow/kfctl/releases/download/v1.2.0/kfctl_v1.2.0-0-gbc038f9_linux.tar.gz\ntar -xzf kfctl_v1.2.0-0-gbc038f9_linux.tar.gz\nsudo mv kfctl /usr/local/bin/\n")),Object(o.b)("p",null,"Clone the repository with the DSRI custom images and deployments for the OpenDataHub platform, and go to the ",Object(o.b)("inlineCode",{parentName:"p"},"kfdef")," folder:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/MaastrichtU-IDS/odh-manifests\ncd odh-manifests/kfdef\n")),Object(o.b)("h2",{id:"-deploy-jupyterhub-and-spark"},"\ud83e\ude90 Deploy JupyterHub and Spark"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Go the the kfdef folder")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"All scripts need to be run from the ",Object(o.b)("inlineCode",{parentName:"p"},"kfdef")," folder \ud83d\udcc2"))),Object(o.b)("p",null,"You can deploy JupyterHub with 2 different authentications system, use the file corresponding to your choice:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For the default DSRI authentication use ",Object(o.b)("inlineCode",{parentName:"p"},"kfctl_openshift_dsri.yaml"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For GitHub authentication use ",Object(o.b)("inlineCode",{parentName:"p"},"kfctl_openshift_github.yaml")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You need to create a new GitHub OAuth app: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/settings/developers"},"https://github.com/settings/developers"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"And provide the GitHub client ID and secret through environment variable before running the start script:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"export GITHUB_CLIENT_ID=YOUR_CLIENT_ID\nexport GITHUB_CLIENT_SECRET=YOUR_CLIENT_SECRET\n")))))),Object(o.b)("p",null,"First you will need to change the ",Object(o.b)("inlineCode",{parentName:"p"},"namespace:")," in the file you want to deploy, to provide the project where you want to start JupyterHub (currently ",Object(o.b)("inlineCode",{parentName:"p"},"opendatahub-ids"),"), then you can deploy JupyterHub and Spark with ",Object(o.b)("inlineCode",{parentName:"p"},"kfctl"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"./start_odh.sh kfctl_openshift_dsri.yaml\n")),Object(o.b)("p",null,"\ud83d\uddc4\ufe0f Persistent volumes are automatically created for each instance started in JupyterHub to insure persistence of the data even JupyterHub is stopped. You can find the persistent volumes in the DSRI web UI, go to the ",Object(o.b)("strong",{parentName:"p"},"Administrator")," view > ",Object(o.b)("strong",{parentName:"p"},"Storage")," > ",Object(o.b)("strong",{parentName:"p"},"Persistent Volume Claims"),"."),Object(o.b)("p",null,"\u26a1\ufe0f A Spark cluster with 3 workers is automatically created with the service name ",Object(o.b)("inlineCode",{parentName:"p"},"spark-cluster"),", you can use the URL of the master node to access it from your workspace: ",Object(o.b)("inlineCode",{parentName:"p"},"spark://spark-cluster:7077")),Object(o.b)("h2",{id:"\ufe0f-delete-the-deployment"},"\ud83d\uddd1\ufe0f Delete the deployment"),Object(o.b)("p",null,"Delete the running JupyterHub application and Spark cluster, including persistent volumes:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"./delete_odh.sh kfctl_openshift_dsri.yaml\n")),Object(o.b)("h2",{id:"-start-a-new-spark-cluster"},"\u2728 Start a new Spark cluster"),Object(o.b)("p",null,"You can create a new Spark cluster with the installed Spark Operator:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cat <<EOF | oc apply -f -\napiVersion: radanalytics.io/v1\nkind: SparkCluster\nmetadata:\n  name: new-spark-cluster\nspec:\n  worker:\n    instances: '3'\n  master:\n    instances: '1'\nEOF\n")))}u.isMDXComponent=!0}}]);