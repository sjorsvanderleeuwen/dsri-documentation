(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{125:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var o=a(0),n=a.n(o);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return a?n.a.createElement(b,c(c({ref:t},l),{},{components:a})):n.a.createElement(b,c({ref:t},l))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},72:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var o=a(3),n=a(7),r=(a(0),a(125)),i={id:"deploy-from-template",title:"Quickstart with templates"},c={unversionedId:"deploy-from-template",id:"deploy-from-template",isDocsHomePage:!1,title:"Quickstart with templates",description:"The easiest to get started with the DSRI is to use the predefined templates to deploy an application.",source:"@site/docs/deploy-from-template.md",slug:"/deploy-from-template",permalink:"/dsri-documentation/docs/deploy-from-template",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/docs/docs/deploy-from-template.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1607042561,sidebar:"docs",previous:{title:"Access the DSRI",permalink:"/dsri-documentation/docs/access-dsri"},next:{title:"Install the CLI",permalink:"/dsri-documentation/docs/openshift-install"}},s=[{value:"Access the catalog",id:"access-the-catalog",children:[]},{value:"Start an application using a template",id:"start-an-application-using-a-template",children:[]},{value:"Stop your application",id:"stop-your-application",children:[]}],l={rightToc:s};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The easiest to get started with the DSRI is to use the predefined templates to deploy an application."),Object(r.b)("h2",{id:"access-the-catalog"},"Access the catalog"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Access the templates catalog")," in your project:"),Object(r.b)("img",{src:"/dsri-documentation/img/screenshot_access_catalog.png",alt:"Access catalog",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Filter the templates catalog")," to only see data science applications:"),Object(r.b)("img",{src:"/dsri-documentation/img/screenshot_filter_templates.png",alt:"Filter templates catalog",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You might wonder why do you see less templates in your project? Because templates needs to be earned! \ud83c\udfc6 "),Object(r.b)("p",{parentName:"blockquote"},"Get started with deploying, and using a service on the DSRI, then we will be able to give you access to more advanced uses of the DSRI!")),Object(r.b)("h2",{id:"start-an-application-using-a-template"},"Start an application using a template"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You will need root containers (aka. ",Object(r.b)("inlineCode",{parentName:"p"},"anyuid"),") to have been enabled by the DSRI team to be able to start applications with the root user.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Click on the template")," of the application you want to start, in this example we will use ",Object(r.b)("strong",{parentName:"p"},"RStudio"),", but you can easily try the same with ",Object(r.b)("strong",{parentName:"p"},"VisualStudio Code")," and ",Object(r.b)("strong",{parentName:"p"},"JupyterLab"),"."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Check the informations about the applications you are going to start (such as the path of the persistent storage in the container application, or if this application run as root)")),Object(r.b)("img",{src:"/dsri-documentation/img/screenshot_template_information.png",alt:"Filter templates catalog",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Provide a few informations to configure your application:")),Object(r.b)("img",{src:"/dsri-documentation/img/screenshot_template_configuration.png",alt:"Filter templates catalog",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Click on the ",Object(r.b)("strong",{parentName:"li"},"Create")," button, and go back to your project ",Object(r.b)("strong",{parentName:"li"},"Overview")," page to see the application starting! It can take from a few seconds up to a few minutes.")),Object(r.b)("p",null,"You can view this 1 minute video to guide you through the process to get the storage name, start, and access a RStudio application:"),Object(r.b)("div",{className:"container"},Object(r.b)("video",{width:"100%",height:"100%",autoplay:!0,muted:!0,loop:!0,controls:!0},Object(r.b)("source",{src:"/dsri-documentation/img/screencast_dsri_deploy_template.webm",type:"video/webm"}))),Object(r.b)("h2",{id:"stop-your-application"},"Stop your application"),Object(r.b)("p",null,"When you are not using your application anymore you can stop the pod. If you are using a Dynamic or Persistent storage you can restart the pod and continue working with all your data in the same state as you left it."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f Please think of stopping applications you are not using to avoid consuming unnecessary resources.")),Object(r.b)("p",null,"On the ",Object(r.b)("strong",{parentName:"p"},"Overview")," page click on the down arrow \u2b07\ufe0f next to the number of pods deployed."),Object(r.b)("img",{src:"/dsri-documentation/img/screenshot_scaledown_pod.png",alt:"Scale down pod",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(r.b)("p",null,"You can then restart the pod by clicking the up arrow \u2b06\ufe0f"))}p.isMDXComponent=!0}}]);