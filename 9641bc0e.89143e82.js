(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),o=n(7),r=(n(0),n(170)),i={id:"okd3-openshift-delete-services",title:"Delete an application"},c={unversionedId:"okd3-openshift-delete-services",id:"okd3-openshift-delete-services",isDocsHomePage:!1,title:"Delete an application",description:"It is recommend to use the oc tool to delete an application, as it will allow to properly delete all objects related to the application deployment.",source:"@site/docs/okd3-openshift-delete-services.md",slug:"/okd3-openshift-delete-services",permalink:"/dsri-documentation/docs/okd3-openshift-delete-services",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/okd3-openshift-delete-services.md",version:"current",lastUpdatedBy:"Binosha",lastUpdatedAt:1618224070,sidebar:"docs",previous:{title:"Upload data",permalink:"/dsri-documentation/docs/okd3-openshift-load-data"},next:{title:"Debug an application",permalink:"/dsri-documentation/docs/okd3-openshift-debug"}},l=[{value:"From the terminal",id:"from-the-terminal",children:[]},{value:"From the web UI",id:"from-the-web-ui",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"It is recommend to use the ",Object(r.b)("inlineCode",{parentName:"p"},"oc")," tool to delete an application, as it will allow to properly delete all objects related to the application deployment."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Project")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Make sure you are connected to the right project:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc project my-project\n")))),Object(r.b)("h2",{id:"from-the-terminal"},"From the terminal"),Object(r.b)("p",null,"The best way to make sure all objects related to your application have been deleted is to use the command line providing your application name:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc delete all,secret,configmaps,serviceaccount,rolebinding --selector app=my-application\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Force deletion")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You can force the deletion if the objects are not deleting properly:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"oc delete all,secret,configmaps,serviceaccount,rolebinding --force --grace-period=0 --selector app=my-application\n")))),Object(r.b)("h2",{id:"from-the-web-ui"},"From the web UI"),Object(r.b)("p",null,"We recommend to use the ",Object(r.b)("inlineCode",{parentName:"p"},"oc")," CLI to easily delete an application. But in the case you cannot install ",Object(r.b)("inlineCode",{parentName:"p"},"oc"),"  on your computer you can delete the different objects created by the application (easy to find in the ",Object(r.b)("strong",{parentName:"p"},"Overview")," page):"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Delete the ",Object(r.b)("strong",{parentName:"li"},"Route")),Object(r.b)("li",{parentName:"ol"},"Delete the ",Object(r.b)("strong",{parentName:"li"},"Service")),Object(r.b)("li",{parentName:"ol"},"Delete the ",Object(r.b)("strong",{parentName:"li"},"Deployment Config")," ")),Object(r.b)("img",{src:"/dsri-documentation/img/screenshot_delete_application.png",alt:"Delete application from the web UI",style:{maxWidth:"100%",maxHeight:"100%"}}))}s.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),b=a,u=d["".concat(i,".").concat(b)]||d[b]||m[b]||r;return n?o.a.createElement(u,c(c({ref:t},p),{},{components:n})):o.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);