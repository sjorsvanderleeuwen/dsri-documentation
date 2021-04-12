(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(3),o=n(7),r=(n(0),n(171)),i={id:"okd3-openshift-debug",title:"Debug an application"},c={unversionedId:"okd3-openshift-debug",id:"okd3-openshift-debug",isDocsHomePage:!1,title:"Debug an application",description:"Debug an application deployment",source:"@site/docs/okd3-openshift-debug.md",slug:"/okd3-openshift-debug",permalink:"/dsri-documentation/docs/okd3-openshift-debug",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/okd3-openshift-debug.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1618239763,sidebar:"docs",previous:{title:"Delete an application",permalink:"/dsri-documentation/docs/okd3-openshift-delete-services"},next:{title:"Start Jupyter Notebooks",permalink:"/dsri-documentation/docs/okd3-deploy-jupyter"}},p=[{value:"Debug an application deployment",id:"debug-an-application-deployment",children:[]},{value:"Monitor your application resources use",id:"monitor-your-application-resources-use",children:[]}],s={rightToc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"debug-an-application-deployment"},"Debug an application deployment"),Object(r.b)("p",null,"If your application is facing issues when deployed:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"If the pod is not building, or not deploying properly, take a look at the ",Object(r.b)("strong",{parentName:"li"},"Events")," tab of the deployment. It shows a log of all events faced by the deployment (assign to node, pull image, build, etc).")),Object(r.b)("img",{src:"/dsri-documentation/img/screenshot_debug_event.png",alt:"Filter templates catalog",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Various ways to check the events")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You can also check the ",Object(r.b)("inlineCode",{parentName:"p"},"Monitoring")," page in the left side menu to see all events in a project."),Object(r.b)("p",{parentName:"div"},"Or use the terminal:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"oc get events\n")))),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"When a pod is running you can check its logs in the ",Object(r.b)("strong",{parentName:"li"},"Logs")," tab ( after going to the pod page).")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Get help")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"If you cannot figure out the issue by yourself:"),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Gather relevant informations to help the DSRI team")," to solve your issue: URL to the faulty application, which error was shown in the ",Object(r.b)("strong",{parentName:"li"},"Events")," tab? Or in the ",Object(r.b)("strong",{parentName:"li"},"Logs")," tab?"),Object(r.b)("li",{parentName:"ol"},"Seek help on the ",Object(r.b)("inlineCode",{parentName:"li"},"#helpdesk")," DSRI Slack channel"),Object(r.b)("li",{parentName:"ol"},"Checkout if an issue have already been created for this problem, or create a new one: ",Object(r.b)("a",{parentName:"li",href:"https://github.com/MaastrichtU-IDS/dsri-documentation/issues"},"https://github.com/MaastrichtU-IDS/dsri-documentation/issues"))))),Object(r.b)("h2",{id:"monitor-your-application-resources-use"},"Monitor your application resources use"),Object(r.b)("p",null,"Check the CPU and memory usage"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Go to your application terminal, and run:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"top\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Check the number of Cpu(s) used at the top:"),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"%Cpu(s):  ",Object(r.b)("strong",{parentName:"p"},"3,3")," us,"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Check the memory usage with the ",Object(r.b)("inlineCode",{parentName:"p"},"used")," column:"),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"MiB Mem : ",Object(r.b)("strong",{parentName:"p"},"515543.2")," total,   ",Object(r.b)("strong",{parentName:"p"},"403486.8")," free,  ",Object(r.b)("strong",{parentName:"p"},"98612.0")," used,  ",Object(r.b)("strong",{parentName:"p"},"13444.5")," buff/cache")))))}l.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(n),u=a,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||r;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);