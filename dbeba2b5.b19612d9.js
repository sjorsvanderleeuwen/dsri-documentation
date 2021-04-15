(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{153:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var a=r(3),o=r(7),n=(r(0),r(171)),i={id:"operators",title:"Install from Operators"},c={unversionedId:"operators",id:"operators",isDocsHomePage:!1,title:"Install from Operators",description:"The Operator Framework  is an open source toolkit to manage Kubernetes native applications, called Operators, in an effective, automated, and scalable way.",source:"@site/docs/operators.md",slug:"/operators",permalink:"/dsri-documentation/docs/operators",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/operators.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1618485918,sidebar:"docs",previous:{title:"Deploy from a Docker image",permalink:"/dsri-documentation/docs/deploy-from-docker"},next:{title:"Install from Helm charts",permalink:"/dsri-documentation/docs/helm"}},l=[{value:"Install existing Operators",id:"install-existing-operators",children:[]},{value:"Build Operators",id:"build-operators",children:[{value:"External resources",id:"external-resources",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The ",Object(n.b)("a",{parentName:"p",href:"https://operatorframework.io/"},"Operator Framework"),"  is an open source toolkit to manage Kubernetes native applications, called Operators, in an effective, automated, and scalable way."),Object(n.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Use existing Operators")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"You can explore published Operators at ",Object(n.b)("a",{parentName:"p",href:"https://operatorhub.io"},"https://operatorhub.io")))),Object(n.b)("h2",{id:"install-existing-operators"},"Install existing Operators"),Object(n.b)("div",{className:"admonition admonition-info alert alert--info"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Contact us")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"Contact us on the DSRI Slack ",Object(n.b)("strong",{parentName:"p"},"#helpdesk")," channel, if you want to install a new Operator on the DSRI."))),Object(n.b)("h2",{id:"build-operators"},"Build Operators"),Object(n.b)("p",null,"Install the ",Object(n.b)("inlineCode",{parentName:"p"},"operator-sdk")," tool. See the ",Object(n.b)("a",{parentName:"p",href:"https://sdk.operatorframework.io/docs/installation/"},"official documentation"),"."),Object(n.b)("p",null,"Operators can be built using 3 different approaches:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Helm"),": a framework to define the deployment logic based on regular kubernetes YAML, but less capabilities for complete auto-update and insights. "),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Ansible"),": define the deployment logic with Ansible, provide maximum capabilities."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Golang"),": define the deployment logic in Golang, provide maximum capabilities, but require more code.")),Object(n.b)("h3",{id:"external-resources"},"External resources"),Object(n.b)("p",null,"Documentation:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://sdk.operatorframework.io"},"Official docs")," to build Operators",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Official docs to build Operator from Helm charts: ",Object(n.b)("a",{parentName:"li",href:"https://sdk.operatorframework.io/docs/building-operators/helm/tutorial"},"https://sdk.operatorframework.io/docs/building-operators/helm/tutorial")),Object(n.b)("li",{parentName:"ul"},"Official docs to build Operator with Ansible: ",Object(n.b)("a",{parentName:"li",href:"https://sdk.operatorframework.io/docs/building-operators/ansible/quickstart"},"https://sdk.operatorframework.io/docs/building-operators/ansible/quickstart")))),Object(n.b)("li",{parentName:"ul"},"RedHat Certified Operator guide",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Make an operator use ",Object(n.b)("inlineCode",{parentName:"li"},"anyuid"),": ",Object(n.b)("a",{parentName:"li",href:"https://redhat-connect.gitbook.io/certified-operator-guide/what-if-ive-already-published-a-community-operator/applying-security-context-constraints"},"https://redhat-connect.gitbook.io/certified-operator-guide/what-if-ive-already-published-a-community-operator/applying-security-context-constraints")),Object(n.b)("li",{parentName:"ul"},"Submit community Operators: ",Object(n.b)("a",{parentName:"li",href:"https://redhat-connect.gitbook.io/certified-operator-guide/troubleshooting-and-resources/submitting-a-community-operator-to-operatorhub.io"},"https://redhat-connect.gitbook.io/certified-operator-guide/troubleshooting-and-resources/submitting-a-community-operator-to-operatorhub.io"))))),Object(n.b)("p",null,"Examples:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Deployment example: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/microcks/microcks-ansible-operator/blob/master/roles/microcks/tasks/main.yml"},"https://github.com/microcks/microcks-ansible-operator/blob/master/roles/microcks/tasks/main.yml"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Older OpenShift guide: ",Object(n.b)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.1/applications/operator_sdk/osdk-ansible.html"},"https://docs.openshift.com/container-platform/4.1/applications/operator_sdk/osdk-ansible.html"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Simple older example with route: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/djzager/ansible-role-hello-world-k8s"},"https://github.com/djzager/ansible-role-hello-world-k8s")))))}p.isMDXComponent=!0},171:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return u}));var a=r(0),o=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(r),d=a,u=b["".concat(i,".").concat(d)]||b[d]||m[d]||n;return r?o.a.createElement(u,c(c({ref:t},s),{},{components:r})):o.a.createElement(u,c({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<n;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);