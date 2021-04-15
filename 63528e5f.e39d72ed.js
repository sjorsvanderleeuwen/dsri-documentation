(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{108:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),o=(a(0),a(172)),c={id:"openshift-delete-objects",title:"Delete objects (advanced)"},r={unversionedId:"openshift-delete-objects",id:"openshift-delete-objects",isDocsHomePage:!1,title:"Delete objects (advanced)",description:"This documentation provide guidelines to delete various types of objects in the OpenShift DSRI. Be careful when you are deleting object in your project, as it could be an object required to run an application.",source:"@site/docs/openshift-delete-objects.md",slug:"/openshift-delete-objects",permalink:"/dsri-documentation/docs/openshift-delete-objects",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/openshift-delete-objects.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1618522024,sidebar:"docs",previous:{title:"Publish a Docker image",permalink:"/dsri-documentation/docs/guide-publish-image"},next:{title:"Libraries for Machine Learning",permalink:"/dsri-documentation/docs/tools-machine-learning"}},l=[{value:"Delete an application",id:"delete-an-application",children:[]},{value:"Delete pod",id:"delete-pod",children:[]},{value:"Delete a project",id:"delete-a-project",children:[]},{value:"Delete persistent storage",id:"delete-persistent-storage",children:[]},{value:"Fix stuck deletions",id:"fix-stuck-deletions",children:[{value:"Stuck provisioned service",id:"stuck-provisioned-service",children:[]},{value:"Delete stuck project",id:"delete-stuck-project",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Be careful")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This documentation provide guidelines to delete various types of objects in the OpenShift DSRI. Be careful when you are deleting object in your project, as it could be an object required to run an application."))),Object(o.b)("p",null,"It is recommend to use the ",Object(o.b)("inlineCode",{parentName:"p"},"oc")," tool to delete OpenShift objects, as it will allow to properly delete all objects related to specific deployments."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Project")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Make sure you are connected to the right project:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"oc project my-project\n")))),Object(o.b)("h2",{id:"delete-an-application"},"Delete an application"),Object(o.b)("p",null,"The best way to make sure all objects related to your application have been deleted is to use the command line providing your application name."),Object(o.b)("p",null,"Different selectors can be used to easily delete all objects generated by an application deployment. 2 selectors can easily be found in the template configuration:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"app")," : the name you gave when creating your application"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"template")," : the name of the template you used to create the application. Use it only if you want to delete all applications created by a specific template.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"oc delete all,secret,configmaps,serviceaccount,rolebinding --selector app=my-application\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Delete storage if necessary from the OpenShift web UI.")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Force deletion")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"You can force the deletion if the objects are not deleting properly:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"oc delete all,secret,configmaps,serviceaccount,rolebinding --force --grace-period=0 --selector app=my-application\n")))),Object(o.b)("h2",{id:"delete-pod"},"Delete pod"),Object(o.b)("p",null,"Get the ID of the specific pod you want to delete:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"oc get pod\n")),Object(o.b)("p",null,"Use the pod ID retrieved to delete the pod:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"oc delete pod <POD_ID>\n")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Force deletion")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If the pod is not properly deleted, you can force its deletion:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"oc delete pod --force --grace-period=0 <POD_ID>\n")))),Object(o.b)("h2",{id:"delete-a-project"},"Delete a project"),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Be careful")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"All objects and persistent storages in this project will be deleted and cannot be retrieved."))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"To properly delete a project you need to first delete all objects in this project:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"oc delete all,configmap,pvc,serviceaccount,rolebinding,secret,serviceinstance --all -n <PROJECT_ID>\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Then delete the project:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"oc delete project <PROJECT_ID>\n")),Object(o.b)("h2",{id:"delete-persistent-storage"},"Delete persistent storage"),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Be careful")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"All data stored in this persistent storage will be lost and cannot be retrieved."))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"oc delete pvc storage-name\n")),Object(o.b)("h2",{id:"fix-stuck-deletions"},"Fix stuck deletions"),Object(o.b)("h3",{id:"stuck-provisioned-service"},"Stuck provisioned service"),Object(o.b)("p",null,"If a provisioned service is stuck on ",Object(o.b)("inlineCode",{parentName:"p"},"Marked for deletion")," you might need to set finalizers to null in the YAML."),Object(o.b)("p",null,"This can be done using the OpenShift web UI:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Go to the ",Object(o.b)("strong",{parentName:"p"},"Provisionned Service")," in the OpenShift UI overview")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Click on ",Object(o.b)("strong",{parentName:"p"},"Edit YAML"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Remove the ",Object(o.b)("strong",{parentName:"p"},"finalizers"),":"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"  finalizers:\n    - kubernetes-incubator/service-catalog\n")))),Object(o.b)("p",null,"You can also do it using the ",Object(o.b)("inlineCode",{parentName:"p"},"oc")," CLI:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'oc get serviceinstance\n \n# Delete problematic line from serviceinstance to delete them\noc get serviceinstance -o yaml | grep Terminating | sed "/kubernetes-incubator/d"| oc apply -f - \n')),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"No global catalog")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The OpenShift Catalog does not handle deploying templates globally properly (on all projects). If a template is deployed globally, OpenShift will try to create unnecessary objects such as provisioned service (aka. ServiceInstance), or ClusterClasses. Those services are not used, and some of them cannot be deleted easily. "))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Catalog per project ")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"At the moment it is more reliable to create the template in directly in your project if you need to use it multiple time."))),Object(o.b)("h3",{id:"delete-stuck-project"},"Delete stuck project"),Object(o.b)("p",null,"Project can get stuck as marked for deletion. Usually due to Objects still present in the project that are not terminated or ",Object(o.b)("inlineCode",{parentName:"p"},"finalizers")," left in the some objects YAML file."),Object(o.b)("p",null,"The following commands will allow you to clean up all the projects stuck in terminating state you have access to ."),Object(o.b)("p",null,"Force deletion of terminating projects:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"for i in $(oc get projects  | grep Terminating| awk '{print $1}'); do echo $i; oc delete project --force --grace-period=0 $i ; done\n")),Object(o.b)("p",null,"Delete all objects in terminating projects:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"for i in $(oc get projects  | grep Terminating| awk '{print $1}'); do echo $i; oc delete all,configmap,pvc,serviceaccount,rolebinding,secret,serviceinstance --force --grace-period=0 --all -n $i ; done\n")),Object(o.b)("p",null,"Remove Kubernetes finalizers from terminating projects:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'for i in $(oc get projects  | grep Terminating| awk \'{print $1}\'); do echo $i; oc get project $i -o yaml | sed "/kubernetes/d" | sed "/finalizers:/d" | oc apply -f - ; done\n')),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Fix deletion")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If ",Object(o.b)("inlineCode",{parentName:"p"},"ServiceInstances")," refuses to get deleted, try to remove kubernetes finalizers:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"for i in $(oc get projects  | grep Terminating| awk '{print $1}'); do echo $i; oc get serviceinstance -n $i -o yaml | sed \"/kubernetes-incubator/d\"| oc apply -f - ; done\n")))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Check deletion")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Check if there are still objects in a project:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"oc get all,configmap,pvc,serviceaccount,secret,rolebinding,serviceinstance\n")))))}p.isMDXComponent=!0},172:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,j=d["".concat(c,".").concat(m)]||d[m]||b[m]||o;return a?i.a.createElement(j,r(r({ref:t},s),{},{components:a})):i.a.createElement(j,r({ref:t},s))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,c[1]=r;for(var s=2;s<o;s++)c[s]=a[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);