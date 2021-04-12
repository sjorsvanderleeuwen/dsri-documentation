(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{115:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var o=a(3),r=a(7),n=(a(0),a(171)),l={id:"workflows-argo",title:"Run Argo workflows"},i={unversionedId:"workflows-argo",id:"workflows-argo",isDocsHomePage:!1,title:"Run Argo workflows",description:"Argo needs to be installed in your project, contact the DSRI team to request it.",source:"@site/docs/workflows-argo.md",slug:"/workflows-argo",permalink:"/dsri-documentation/docs/workflows-argo",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/workflows-argo.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1618239763,sidebar:"docs",previous:{title:"Introduction to workflows",permalink:"/dsri-documentation/docs/workflows-introduction"},next:{title:"Run Nextflow workflows",permalink:"/dsri-documentation/docs/workflows-nextflow"}},c=[{value:"Install the <code>argo</code> client",id:"install-the-argo-client",children:[{value:"On Ubuntu",id:"on-ubuntu",children:[]},{value:"On MacOS",id:"on-macos",children:[]},{value:"On Windows",id:"on-windows",children:[]},{value:"Test Argo",id:"test-argo",children:[]}]},{value:"Install Argo in your project",id:"install-argo-in-your-project",children:[{value:"Argo workflows with Helm",id:"argo-workflows-with-helm",children:[]},{value:"ArgoCD Operator",id:"argocd-operator",children:[]},{value:"Uninstall <code>argo</code>",id:"uninstall-argo",children:[]}]},{value:"Run workflows to convert structured data to RDF",id:"run-workflows-to-convert-structured-data-to-rdf",children:[{value:"Clone the repository",id:"clone-the-repository",children:[]},{value:"Workflow to convert XML files to RDF",id:"workflow-to-convert-xml-files-to-rdf",children:[]},{value:"Workflow to convert CSV files to RDF",id:"workflow-to-convert-csv-files-to-rdf",children:[]}]},{value:"Argo commands",id:"argo-commands",children:[{value:"List running Argo workflows",id:"list-running-argo-workflows",children:[]},{value:"Stop a workflow",id:"stop-a-workflow",children:[]},{value:"Delete a workflow",id:"delete-a-workflow",children:[]}]},{value:"Debug a workflow",id:"debug-a-workflow",children:[]}],s={rightToc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Install in your project")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"Argo needs to be installed in your project, ",Object(n.b)("a",{parentName:"p",href:"mailto:dsri-support-l@maastrichtuniversity.nl"},"contact the DSRI team")," to request it."))),Object(n.b)("h2",{id:"install-the-argo-client"},"Install the ",Object(n.b)("inlineCode",{parentName:"h2"},"argo")," client"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://argoproj.github.io/argo/"},"Argo \ud83e\udd91")," is a container native workflow engine for ",Object(n.b)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes")," supporting both ",Object(n.b)("a",{parentName:"p",href:"https://argoproj.github.io/docs/argo/examples/readme.html#dag"},"DAG")," and ",Object(n.b)("a",{parentName:"p",href:"https://argoproj.github.io/docs/argo/examples/readme.html#steps"},"step based")," workflows."),Object(n.b)("p",null,"Download and install the ",Object(n.b)("a",{parentName:"p",href:"https://github.com/argoproj/argo/blob/master/demo.md#1-download-argo"},"Argo client")," on your computer to ",Object(n.b)("a",{parentName:"p",href:"https://argoproj.github.io/docs/argo/examples/readme.html"},"start workflows")," on the DSRI."),Object(n.b)("h3",{id:"on-ubuntu"},"On Ubuntu"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell"},"sudo curl -L -o /usr/local/bin/argo https://github.com/argoproj/argo/releases/download/v2.4.2/argo-linux-amd64\nsudo chmod +x /usr/local/bin/argo\n")),Object(n.b)("h3",{id:"on-macos"},"On MacOS"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell"},"brew install argoproj/tap/argo\n")),Object(n.b)("h3",{id:"on-windows"},"On Windows"),Object(n.b)("p",null,"Get ",Object(n.b)("a",{parentName:"p",href:"https://github.com/argoproj/argo/releases/download/v2.4.2/argo-windows-amd64"},"Argo executable version 2.4.2")," from ",Object(n.b)("a",{parentName:"p",href:"https://github.com/argoproj/argo/releases"},"Argo Releases")," on GitHub."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"See ",Object(n.b)("a",{parentName:"p",href:"https://argoproj.github.io/docs/argo/demo.html#1-download-argo"},"official Argo documentation"),".")),Object(n.b)("h3",{id:"test-argo"},"Test Argo"),Object(n.b)("p",null,"Run Hello world workflow to test if Argo has been properly installed. And take a look at the ",Object(n.b)("a",{parentName:"p",href:"https://argoproj.github.io/docs/argo/examples/readme.html"},"examples provided in Argo documentation")," to discover how to use the different features available."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell"},"argo submit --watch https://raw.githubusercontent.com/argoproj/argo/master/examples/hello-world.yaml\n")),Object(n.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Logged in")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"You will need to have the ",Object(n.b)("inlineCode",{parentName:"p"},"oc")," client installed and be logged in with ",Object(n.b)("inlineCode",{parentName:"p"},"oc login"),", see the ",Object(n.b)("a",{parentName:"p",href:"/dsri-documentation/docs/openshift-install"},"install documentation page"),"."))),Object(n.b)("h2",{id:"install-argo-in-your-project"},"Install Argo in your project"),Object(n.b)("h3",{id:"argo-workflows-with-helm"},"Argo workflows with Helm"),Object(n.b)("p",null,"Deploy the ",Object(n.b)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/argo/argo"},"Argo Helm chart"),"."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Install and use ",Object(n.b)("a",{parentName:"li",href:"/docs/helm"},Object(n.b)("inlineCode",{parentName:"a"},"helm"))),Object(n.b)("li",{parentName:"ol"},"Add the Helm charts repository:")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-bash"},"helm repo add argo https://argoproj.github.io/argo-helm\n")),Object(n.b)("ol",{start:3},Object(n.b)("li",{parentName:"ol"},"Install chart:")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-bash"},"helm install my-argo argo/argo --version 0.15.2\n")),Object(n.b)("h3",{id:"argocd-operator"},"ArgoCD Operator"),Object(n.b)("p",null,"Ask on the DSRI Slack ",Object(n.b)("strong",{parentName:"p"},"#helpdesk")," channel to have the ",Object(n.b)("a",{parentName:"p",href:"https://artifacthub.io/packages/olm/community-operators/argocd-operator"},"ArgoCD Operator")," installed in your project."),Object(n.b)("h3",{id:"uninstall-argo"},"Uninstall ",Object(n.b)("inlineCode",{parentName:"h3"},"argo")),Object(n.b)("h4",{id:"on-ubuntu-1"},"On Ubuntu"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell"},"sudo rm /usr/local/bin/argo\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"You can now reinstall a newer version of Argo.")),Object(n.b)("hr",null),Object(n.b)("h2",{id:"run-workflows-to-convert-structured-data-to-rdf"},"Run workflows to convert structured data to RDF"),Object(n.b)("p",null,"We will use examples from the ",Object(n.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/d2s-core"},"MaastrichtU-IDS/d2s-core")," project."),Object(n.b)("h3",{id:"clone-the-repository"},"Clone the repository"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell"},"git clone --recursive https://github.com/MaastrichtU-IDS/d2s-project-template.git\ncd d2s-project-template\n")),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"/dsri-documentation/docs/openshift-install"},"Authenticate to the OpenShift cluster")," using ",Object(n.b)("inlineCode",{parentName:"p"},"oc login")," ."),Object(n.b)("h3",{id:"workflow-to-convert-xml-files-to-rdf"},"Workflow to convert XML files to RDF"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Steps-based workflow for XML files, see the example workflow ",Object(n.b)("a",{parentName:"li",href:"https://github.com/MaastrichtU-IDS/d2s-core/blob/master/argo/d2s-workflow-xml.yaml"},"YAML file on GitHub"),".")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell"},"argo submit d2s-core/argo/workflows/d2s-workflow-transform-xml.yaml \\\n  -f support/config/config-transform-xml-drugbank.yml\n")),Object(n.b)("div",{className:"admonition admonition-info alert alert--info"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Provide config files")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"Config files can be provided using the ",Object(n.b)("inlineCode",{parentName:"p"},"-f")," arguments, but are not necessary."))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"DAG workflow for XML files, see the ",Object(n.b)("a",{parentName:"li",href:"https://github.com/MaastrichtU-IDS/d2s-core/blob/master/argo/d2s-workflow-xml-dag.yaml"},"YAML file on GitHub"),".")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell"},"argo submit d2s-core/argo/workflows/d2s-workflow-transform-xml-dag.yaml \\\n  -f support/config/config-transform-xml-drugbank.yml\n")),Object(n.b)("h3",{id:"workflow-to-convert-csv-files-to-rdf"},"Workflow to convert CSV files to RDF"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Steps-based workflow for CSV files")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell"},"argo submit d2s-core/argo/workflows/d2s-workflow-transform-csv.yaml \\\n  -f support/config/config-transform-csv-stitch.yml\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"DAG workflow for CSV files")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell"},"argo submit d2s-core/argo/workflows/d2s-workflow-transform-csv-dag.yaml \\\n  -f support/config/config-transform-csv-stitch.yml\n")),Object(n.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Solve issue")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"Try this to solve issue related to steps services IP: ",Object(n.b)("inlineCode",{parentName:"p"},"{{steps.nginx-server.pod-ip}}")))),Object(n.b)("hr",null),Object(n.b)("h2",{id:"argo-commands"},"Argo commands"),Object(n.b)("h3",{id:"list-running-argo-workflows"},"List running Argo workflows"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell"},"argo list\n")),Object(n.b)("h3",{id:"stop-a-workflow"},"Stop a workflow"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell"},"argo terminate my-workflow\n")),Object(n.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Workflow")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"This might not stop the workflow, in this case use:"),Object(n.b)("pre",{parentName:"div"},Object(n.b)("code",{parentName:"pre",className:"language-bash"},"argo delete my-workflow\n")))),Object(n.b)("h3",{id:"delete-a-workflow"},"Delete a workflow"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell"},"argo delete my-workflow\n")),Object(n.b)("hr",null),Object(n.b)("h2",{id:"debug-a-workflow"},"Debug a workflow"),Object(n.b)("p",null,"Get into a container, to understand why it bugs, by creating a YAML with the command ",Object(n.b)("inlineCode",{parentName:"p"},"tail -f /dev/null")," to keep it hanging."),Object(n.b)("p",null,"See the ",Object(n.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/d2s-core/blob/master/argo/tests/test-devnull-argo.yaml"},"example in the d2s-argo-workflow repository"),":"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: argoproj.io/v1alpha1\nkind: Workflow\nmetadata:\n  generateName: test-devnull-argo-\nspec:\n  entrypoint: execute-workflow\n\n  # Use existing volume\n  volumes:\n  - name: workdir\n    persistentVolumeClaim:\n      claimName: pvc-mapr-projects-test-vincent \n\n  templates:\n  - name: execute-workflow\n    steps:\n    - - name: run-rdfunit\n        template: rdfunit\n   \n  - name: rdfunit\n    container:\n      image: umids/rdfunit:latest\n      command: [tail]\n      args: ["-f", "/dev/null"]\n      volumeMounts:\n      - name: workdir\n        mountPath: /data\n        subPath: dqa-workspace\n')),Object(n.b)("p",null,"Then start the workflow:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell"},"argo submit --serviceaccount argo tests/test-devnull-argo.yaml\n")),Object(n.b)("p",null,"And connect with the Shell (change the pod ID to your pod ID):"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell"},"oc rsh test-devnull-argo-pod\n")))}b.isMDXComponent=!0},171:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var o=a(0),r=a.n(o);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(a),m=o,u=d["".concat(l,".").concat(m)]||d[m]||p[m]||n;return a?r.a.createElement(u,i(i({ref:t},s),{},{components:a})):r.a.createElement(u,i({ref:t},s))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<n;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);