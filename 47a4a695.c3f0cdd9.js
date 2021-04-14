(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{171:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||a;return r?o.a.createElement(m,c(c({ref:t},l),{},{components:r})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(171)),i={id:"login-docker-registry",title:"Login to Docker registries"},c={unversionedId:"login-docker-registry",id:"login-docker-registry",isDocsHomePage:!1,title:"Login to Docker registries",description:"Login to an external container registry can be helpful to pull private images, or increase the DockerHub pull limitations.",source:"@site/docs/login-docker-registry.md",slug:"/login-docker-registry",permalink:"/dsri-documentation/docs/login-docker-registry",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/login-docker-registry.md",version:"current",lastUpdatedBy:"Binosha",lastUpdatedAt:1618425412,sidebar:"docs",previous:{title:"Known Issues",permalink:"/dsri-documentation/docs/guide-known-issues"},next:{title:"Command Line Interface",permalink:"/dsri-documentation/docs/openshift-commands"}},s=[{value:"GitHub Container Registry",id:"github-container-registry",children:[]},{value:"DockerHub",id:"dockerhub",children:[]}],l={rightToc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Login to an external container registry can be helpful to pull private images, or increase the DockerHub pull limitations."),Object(a.b)("p",null,"You will need to create a secret in your project, then link it to the default service account of this project."),Object(a.b)("p",null,"We detail here the process for the ",Object(a.b)("a",{parentName:"p",href:"https://docs.github.com/en/packages/guides/about-github-container-registry"},"GitHub Container Registry")," and DockerHub, but the process is similar for any other container registry (e.g. ",Object(a.b)("a",{parentName:"p",href:"https://quay.io/"},"quay.io"),")"),Object(a.b)("h2",{id:"github-container-registry"},"GitHub Container Registry"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Go to ",Object(a.b)("a",{parentName:"p",href:"https://github.com/settings/tokens"},"GitHub Settings"),", and create a Personal Access Token (PAT) which will be used as password to connect to the GitHub Container Registry")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Create a secret to login to GitHub Container Registry in your project:"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"oc create secret docker-registry github-ghcr-secret --docker-server=ghcr.io --docker-username=<github-username> --docker-password=<github-personal-access-token> --docker-email=<email-address>\n")),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Link the login secret to the default service account:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"oc secrets link default github-ghcr-secret --for=pull\n")),Object(a.b)("h2",{id:"dockerhub"},"DockerHub"),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Increase DockerHub limitations")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Login with DockerHub also increase the DockerHub limitations to pull images in your project"))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Create a secret to login to DockerHub in your project:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"oc create secret docker-registry dockerhub-secret --docker-server=docker.io --docker-username=<dockerhub-username> --docker-password=<dockerhub-password> --docker-email=<email-address>\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Link the login secret to the default service account:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"oc secrets link default dockerhub-secret --for=pull\n")))}u.isMDXComponent=!0}}]);