(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{104:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(170)),c={id:"okd3-openshift-secret",title:"Use secrets"},i={unversionedId:"okd3-openshift-secret",id:"okd3-openshift-secret",isDocsHomePage:!1,title:"Use secrets",description:"OpenShift secrets can be used to store confidential information required when the pods are running (such as passwords).",source:"@site/docs/okd3-openshift-secret.md",slug:"/okd3-openshift-secret",permalink:"/dsri-documentation/docs/okd3-openshift-secret",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/okd3-openshift-secret.md",version:"current",lastUpdatedBy:"Binosha",lastUpdatedAt:1618224070,sidebar:"docs",previous:{title:"Publish a Docker image",permalink:"/dsri-documentation/docs/okd3-guide-publish-image"},next:{title:"Delete objects (advanced)",permalink:"/dsri-documentation/docs/okd3-openshift-delete-objects"}},s=[{value:"Connect to Docker registries",id:"connect-to-docker-registries",children:[{value:"For DockerHub",id:"for-dockerhub",children:[]}]},{value:"For GitHub Container Registry",id:"for-github-container-registry",children:[]},{value:"Use in a deployment",id:"use-in-a-deployment",children:[]}],l={rightToc:s};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://docs.openshift.com/enterprise/3.1/dev_guide/secrets.html"},"OpenShift secrets")," can be used to store confidential information required when the pods are running (such as passwords)."),Object(o.b)("p",null,"Got to your project > ",Object(o.b)("inlineCode",{parentName:"p"},"Resources")," > ",Object(o.b)("inlineCode",{parentName:"p"},"Secret")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Secret Type"),": Generic Secret"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Secret Name"),": my-password"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Key"),": password"),Object(o.b)("li",{parentName:"ul"},"Enter the password in the text box ",Object(o.b)("inlineCode",{parentName:"li"},"Clean Value"))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Secret created")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The secret can now be used in deployment configs, pods, etc. "))),Object(o.b)("h2",{id:"connect-to-docker-registries"},"Connect to Docker registries"),Object(o.b)("p",null,"Create secret to login to Docker registries to pull private images."),Object(o.b)("h3",{id:"for-dockerhub"},"For DockerHub"),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Increase DockerHub limitations")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Login with DockerHub also increase the DockerHub limitations to pull images in your project"))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a secret to login to DockerHub in your project:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"oc create secret docker-registry dockerhub-secret --docker-server=docker.io --docker-username=<dockerhub-username> --docker-password=<dockerhub-password> --docker-email=<email-address>\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Link the login secret to the default service account:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"oc secrets link default dockerhub-secret --for=pull\n")),Object(o.b)("h2",{id:"for-github-container-registry"},"For GitHub Container Registry"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Go to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/settings/tokens"},"GitHub Settings"),", and create a Personal Access Token (PAT) which will be used as password to connect to the GitHub Container Registry")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a secret to login to GitHub Container Registry in your project:"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"oc create secret docker-registry github-ghcr-secret --docker-server=ghcr.io --docker-username=<github-username> --docker-password=<github-personal-access-token> --docker-email=<email-address>\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Link the login secret to the default service account:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"oc secrets link default github-ghcr-secret --for=pull\n")),Object(o.b)("h2",{id:"use-in-a-deployment"},"Use in a deployment"),Object(o.b)("p",null,"Example to define a secret in a deployment YAML file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"container:\n  image: maastrichtuids/jupyterlab:latest\n  env:\n  - name: PASSWORD\n    valueFrom:\n      secretKeyRef:\n        name: my-password\n        key: password\n")),Object(o.b)("p",null,"Now you can use the secret as environment variable in the container."))}b.isMDXComponent=!0},170:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(r),u=n,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return r?a.a.createElement(m,i(i({ref:t},l),{},{components:r})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);