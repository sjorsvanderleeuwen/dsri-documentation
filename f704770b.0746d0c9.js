(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{164:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),o=a(7),i=(a(0),a(173)),r={id:"deploy-matlab",title:"Matlab"},l={unversionedId:"deploy-matlab",id:"deploy-matlab",isDocsHomePage:!1,title:"Matlab",description:"Always stop all Matlab pods when you are not using them, the UM license server have a limited number of licenses available.",source:"@site/docs/deploy-matlab.md",slug:"/deploy-matlab",permalink:"/dsri-documentation/docs/deploy-matlab",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/deploy-matlab.md",version:"current",lastUpdatedBy:"Binosha",lastUpdatedAt:1621942685,sidebar:"docs",previous:{title:"Databases",permalink:"/dsri-documentation/docs/deploy-database"},next:{title:"Spark cluster",permalink:"/dsri-documentation/docs/deploy-spark"}},c=[{value:"Use the official Matlab image",id:"use-the-official-matlab-image",children:[]},{value:"Deploy Matlab on GPU",id:"deploy-matlab-on-gpu",children:[]},{value:"Build your own Matlab image",id:"build-your-own-matlab-image",children:[]}],b={rightToc:c};function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Stop unused Matlab")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Always stop all Matlab pods when you are not using them, the UM license server have a limited number of licenses available."))),Object(i.b)("h2",{id:"use-the-official-matlab-image"},"Use the official Matlab image"),Object(i.b)("p",null,"Start Matlab with a desktop UI accessible directly using your web browser at a URL automatically generated. "),Object(i.b)("p",null,"Go to the ",Object(i.b)("strong",{parentName:"p"},"Catalog"),", make sure ",Object(i.b)("strong",{parentName:"p"},"Templates")," are displayed (box checked), and search for ",Object(i.b)("strong",{parentName:"p"},"Matlab")," "),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Request access to Matlab")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"To be able to access the Matlab template you will need to ",Object(i.b)("a",{parentName:"p",href:"/dsri-documentation/help"},"ask the DSRI admins")," to enable it in your project."))),Object(i.b)("p",null,"You will need to provide the password you will use to access the Matlab UI when filling the template."),Object(i.b)("p",null,"Once Matlab start you can access it through 2 routes (URL), which can be accessed when clicking on the Matlab node in the ",Object(i.b)("strong",{parentName:"p"},"Topology"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The main ",Object(i.b)("inlineCode",{parentName:"li"},"matlab")," route to access Matlab desktop UI directly in your web browser"),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"matlab-vnc")," route to access Matlab using your favorite VNC client (you will need to use the full URL to your Matlab VNC route)")),Object(i.b)("p",null,"See the ",Object(i.b)("a",{parentName:"p",href:"https://hub.docker.com/r/mathworks/matlab"},"official Matlab image documentation")," for more details about this image."),Object(i.b)("h2",{id:"deploy-matlab-on-gpu"},"Deploy Matlab on GPU"),Object(i.b)("p",null,"We use the Matlab template in the DSRI catalog to deploy a pre-built ",Object(i.b)("strong",{parentName:"p"},"Nvidia Matlab Deep Learning Container")," on CPU or GPU nodes. See the ",Object(i.b)("a",{parentName:"p",href:"https://nl.mathworks.com/help/cloudcenter/ug/matlab-deep-learning-container-on-dgx.html"},"official documentation from MathWorks")," for more details about this image."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Request access to Matlab")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"To be able to access the Matlab on GPU template you will need to ",Object(i.b)("a",{parentName:"p",href:"/dsri-documentation/help"},"ask the DSRI admins")," to enable it in your project."))),Object(i.b)("p",null,"2 options are available to connect to your running Matlab pod terminal:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Go to the matlab pod page on the DSRI web UI "),Object(i.b)("li",{parentName:"ul"},"Or connect from your terminal with ",Object(i.b)("inlineCode",{parentName:"li"},"oc rsh MATLAB_POD_ID"))),Object(i.b)("p",null,"Type ",Object(i.b)("inlineCode",{parentName:"p"},"bash")," when first accessing to the terminal to have a better experience."),Object(i.b)("p",null,"Type ",Object(i.b)("inlineCode",{parentName:"p"},"cd /ContainerDeepLearningData")," to go in the persistent volume, and use this volume to store all data that should be preserved."),Object(i.b)("p",null,"Type ",Object(i.b)("inlineCode",{parentName:"p"},"matlab")," to access Matlab from the terminal"),Object(i.b)("p",null,"It is possible to access the Matlab desktop UI through VNC and a web UI, but the script to start it in ",Object(i.b)("inlineCode",{parentName:"p"},"/bin/run.sh")," seems to face some errors, let us know if you have any luck with this."),Object(i.b)("p",null,"By default the image run with the ",Object(i.b)("inlineCode",{parentName:"p"},"matlab")," user which does not have ",Object(i.b)("inlineCode",{parentName:"p"},"sudo")," privilege, you can run the container as root if you need to install packages which require admin privileges. "),Object(i.b)("h2",{id:"build-your-own-matlab-image"},"Build your own Matlab image"),Object(i.b)("p",null,"Follow the instructions at: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mathworks-ref-arch/matlab-dockerfile"},"https://github.com/mathworks-ref-arch/matlab-dockerfile")),Object(i.b)("p",null,"This will require you to retrieve Matlab installation files to build your own container"),Object(i.b)("p",null,"Once all the files have been properly placed in the folder and the license server URL has been set, you can start the build on DSRI by following the ",Object(i.b)("a",{parentName:"p",href:"https://maastrichtu-ids.github.io/dsri-documentation/docs/guide-dockerfile-to-openshift#create-new-build-configuration"},"documentation to deploy from a ",Object(i.b)("inlineCode",{parentName:"a"},"Dockerfile"))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"License server not available on your laptop")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"If you try to build Matlab directly on your laptop it will most probably fail as your machine might not have access to the license server. You will need to build the Matlab container directly on DSRI with ",Object(i.b)("inlineCode",{parentName:"p"},"oc start-build")))),Object(i.b)("p",null,"Once Matlab deployed, you will need to edit the matlab deployment YAML before it works."),Object(i.b)("p",null,"Go to ",Object(i.b)("strong",{parentName:"p"},"Topology"),", click on the Matlab node, click on the ",Object(i.b)("strong",{parentName:"p"},"Actions")," button of the matlab details, and ",Object(i.b)("strong",{parentName:"p"},"Edit deployment"),". In the deployment YAML search for ",Object(i.b)("inlineCode",{parentName:"p"},"spec:")," which has a ",Object(i.b)("inlineCode",{parentName:"p"},"containers:")," as child, and add the following under ",Object(i.b)("inlineCode",{parentName:"p"},"spec:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  serviceAccountName: anyuid\n  containers: ...\n")),Object(i.b)("p",null,"Your Matlab container should now be running!"),Object(i.b)("p",null,"2 options are available to connect to your running Matlab pod terminal:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Go to the matlab pod page on the DSRI web UI "),Object(i.b)("li",{parentName:"ul"},"Or connect from your terminal with ",Object(i.b)("inlineCode",{parentName:"li"},"oc rsh MATLAB_POD_ID"))),Object(i.b)("p",null,"You can access Matlab from the terminal by running ",Object(i.b)("inlineCode",{parentName:"p"},"matlab")),Object(i.b)("p",null,"Unfortunately Matlab did not expected their users to need the graphical UI when using Matlab in containers. So only the command line is available by default. You can find more information to ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mathworks-ref-arch/matlab-dockerfile/issues/18"},"enable the Matlab UI in this issue"),"."),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Stop unused Matlab")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Always stop all Matlab pods when you are not using them, the UM license server have a limited number of licenses available."))))}s.isMDXComponent=!0},173:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,u=p["".concat(r,".").concat(m)]||p[m]||d[m]||i;return a?o.a.createElement(u,l(l({ref:t},b),{},{components:a})):o.a.createElement(u,l({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var b=2;b<i;b++)r[b]=a[b];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);