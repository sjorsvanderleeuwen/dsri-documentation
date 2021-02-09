(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{165:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var o=a(0),r=a.n(o);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),s=p(a),b=o,m=s["".concat(i,".").concat(b)]||s[b]||u[b]||n;return a?r.a.createElement(m,c(c({ref:t},l),{},{components:a})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=b;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<n;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return p}));var o=a(3),r=a(7),n=(a(0),a(165)),i={id:"prepare-project-for-dsri",title:"Prepare your project"},c={unversionedId:"prepare-project-for-dsri",id:"prepare-project-for-dsri",isDocsHomePage:!1,title:"Prepare your project",description:"Code in a git repository",source:"@site/docs/prepare-project-for-dsri.md",slug:"/prepare-project-for-dsri",permalink:"/dsri-documentation/docs/prepare-project-for-dsri",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/prepare-project-for-dsri.md",version:"current",lastUpdatedBy:"Binosha",lastUpdatedAt:1612893508,sidebar:"docs",previous:{title:"Delete an application",permalink:"/dsri-documentation/docs/openshift-delete-services"},next:{title:"Jupyter Notebooks",permalink:"/dsri-documentation/docs/deploy-jupyter"}},d=[{value:"Code in a git repository",id:"code-in-a-git-repository",children:[]},{value:"Develop locally or on the DSRI?",id:"develop-locally-or-on-the-dsri",children:[]},{value:"Define your deployment strategy",id:"define-your-deployment-strategy",children:[]},{value:"Get your data ready",id:"get-your-data-ready",children:[{value:"Data is on your local machine",id:"data-is-on-your-local-machine",children:[]},{value:"Data is on a server",id:"data-is-on-a-server",children:[]},{value:"Data is in a AWS S3 bucket",id:"data-is-in-a-aws-s3-bucket",children:[]}]}],l={rightToc:d};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"code-in-a-git-repository"},"Code in a git repository"),Object(n.b)("p",null,"Using ",Object(n.b)("inlineCode",{parentName:"p"},"git")," is mandatory to deploy code on the DSRI. Store your code in a git repository to keep track of changes, and make it easier to share and re-use your code outside of your computer."),Object(n.b)("div",{className:"admonition admonition-info alert alert--info"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Platform recommendations")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"We recommend those platforms depending on your use-case:"),Object(n.b)("ul",{parentName:"div"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com"},"GitHub")," for public repositories"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://gitlab.maastrichtuniversity.nl"},"GitLab hosted at Maastricht University")," for private repositories")))),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Any other git platform, such as BitBucket or gitlab.com, is fine too.")),Object(n.b)("h2",{id:"develop-locally-or-on-the-dsri"},"Develop locally or on the DSRI?"),Object(n.b)("p",null,"You can develop directly on the DSRI using VisualStudio Code or JupyterLab."),Object(n.b)("p",null,"If you prefer your local environment for development, and only run big tasks on the DSRI:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Make sure your code ",Object(n.b)("strong",{parentName:"li"},"does not use absolute paths"),". For example, ",Object(n.b)("inlineCode",{parentName:"li"},"C://Desktop/myproject/data")," will not work when running on the DSRI, use a relative path such as ",Object(n.b)("inlineCode",{parentName:"li"},"../data")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Use ",Object(n.b)("inlineCode",{parentName:"strong"},"git"))," to synchronize your local development code with the code on the DSRI")),Object(n.b)("h2",{id:"define-your-deployment-strategy"},"Define your deployment strategy"),Object(n.b)("img",{src:"/dsri-documentation/img/dsri-deploy-flowchart.png",alt:"DSRI deployment flowchart",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(n.b)("h2",{id:"get-your-data-ready"},"Get your data ready"),Object(n.b)("p",null,"If your project is using a large amount of data that cannot be pushed to a git repository, you will need to use a persistent storage to store your data on the DSRI. See the ",Object(n.b)("a",{parentName:"p",href:"/dsri-documentation/docs/openshift-storage"},"Storage on the DSRI")," documentation for more details about creating a persistent storage."),Object(n.b)("p",null,"Here are the options to upload your data to the DSRI storage:"),Object(n.b)("h3",{id:"data-is-on-your-local-machine"},"Data is on your local machine"),Object(n.b)("p",null,"If the data is stored on a local machine, such as your computer:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Drag and drop files from your computer to the VisualStudio Code or JupyterLab web UI, if applicable."),Object(n.b)("li",{parentName:"ul"},"Otherwise, use the ",Object(n.b)("inlineCode",{parentName:"li"},"oc cp")," command to copy data to your application pod. See the ",Object(n.b)("a",{parentName:"li",href:"/dsri-documentation/docs/openshift-load-data"},"Load data")," documentation page for more informations.")),Object(n.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Upload to persistent storage")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"Make sure you ",Object(n.b)("strong",{parentName:"p"},"upload the data to a folder mounted on a persistent storage")," in the pod to avoid losing your data if the pod restarts."))),Object(n.b)("h3",{id:"data-is-on-a-server"},"Data is on a server"),Object(n.b)("p",null,"Same as for your laptop, you will need to install and use the ",Object(n.b)("inlineCode",{parentName:"p"},"oc cp")," command to copy data to your application pod. See the ",Object(n.b)("a",{parentName:"p",href:"/dsri-documentation/docs/openshift-load-data"},"Load data")," documentation page for more informations."),Object(n.b)("h3",{id:"data-is-in-a-aws-s3-bucket"},"Data is in a AWS S3 bucket"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"To be developed")))}p.isMDXComponent=!0}}]);