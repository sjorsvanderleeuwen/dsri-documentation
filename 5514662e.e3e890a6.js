(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(172)),c={id:"catalog-data-streaming",title:"Data streaming"},i={unversionedId:"catalog-data-streaming",id:"catalog-data-streaming",isDocsHomePage:!1,title:"Data streaming",description:"Apache Flink",source:"@site/docs/catalog-data-streaming.md",slug:"/catalog-data-streaming",permalink:"/dsri-documentation/docs/catalog-data-streaming",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/catalog-data-streaming.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1618522024},l=[{value:"Apache Flink",id:"apache-flink",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"apache-flink"},"Apache Flink"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://flink.apache.org/"},"Apache Flink")," enables processing of Data Streams using languages such as Java or Scala ."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Root permission required")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\ud83d\udd12 You need root containers enabled (aka. anyuid) in your project to start this application."))),Object(o.b)("p",null,"Create the Apache Flink template in your project using ",Object(o.b)("a",{parentName:"p",href:"https://github.com/vemonet/flink-on-openshift"},"vemonet/flink-on-openshift")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"oc apply -f https://raw.githubusercontent.com/vemonet/flink-on-openshift/master/template-flink-dsri.yml\n")),Object(o.b)("p",null,"Use the template to start the cluster from the catalog."),Object(o.b)("p",null,"Use this command to get the Flink Jobmanager pod id and copy file to the pod."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"oc get pod --selector app=flink --selector component=jobmanager --no-headers -o=custom-columns=NAME:.metadata.name\n\n# Example creating the workspace folder and copying the RMLStreamer.jar to the pod\noc exec <pod_id> -- mkdir -p /mnt/workspace/resources\noc cp workspace/resources/RMLStreamer.jar <pod_id>:/mnt/\n")),Object(o.b)("p",null,"Delete the Apache Flink cluster (change the application name):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"oc delete all,secret,configmaps,serviceaccount,rolebinding --selector app=flink-cluster\n")))}s.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,b=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.a.createElement(b,i(i({ref:t},p),{},{components:n})):r.a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);