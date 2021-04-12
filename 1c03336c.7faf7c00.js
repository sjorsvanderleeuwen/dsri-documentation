(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{171:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=a,u=b["".concat(i,".").concat(d)]||b[d]||m[d]||o;return n?r.a.createElement(u,c(c({ref:t},p),{},{components:n})):r.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(171)),i={id:"okd3-access-dsri",title:"Access the OKD 3.11 cluster"},c={unversionedId:"okd3-access-dsri",id:"okd3-access-dsri",isDocsHomePage:!1,title:"Access the OKD 3.11 cluster",description:"Request an account",source:"@site/docs/okd3-access-dsri.md",slug:"/okd3-access-dsri",permalink:"/dsri-documentation/docs/okd3-access-dsri",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/okd3-access-dsri.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1618239763,sidebar:"docs",previous:{title:"Introduction",permalink:"/dsri-documentation/docs/okd3-introduction"},next:{title:"Quickstart with templates",permalink:"/dsri-documentation/docs/okd3-deploy-from-template"}},s=[{value:"Request an account",id:"request-an-account",children:[]},{value:"Connect to the UM network",id:"connect-to-the-um-network",children:[]},{value:"Access the web UI",id:"access-the-web-ui",children:[]},{value:"Go to your project",id:"go-to-your-project",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"request-an-account"},"Request an account"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You will need to have an account at Maastricht University with an email ending with ",Object(o.b)("inlineCode",{parentName:"p"},"@maastrichtuniversity.nl")," or ",Object(o.b)("inlineCode",{parentName:"p"},"@student.maastrichtuniversity.nl"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Request access to the DSRI for your account  ",Object(o.b)("a",{parentName:"p",href:"mailto:dsri-support-l@maastrichtuniversity.nl"},"to the DSRI support team \ud83d\udcec"),"."))),Object(o.b)("h2",{id:"connect-to-the-um-network"},"Connect to the UM network"),Object(o.b)("p",null,"You need to be connected to the UM network to access the DSRI."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Use the ",Object(o.b)("strong",{parentName:"p"},"Maastricht University VPN")," at ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://vpn.maastrichtuniversity.nl/"},"vpn.maastrichtuniversity.nl")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Connect to ",Object(o.b)("strong",{parentName:"p"},"UMnet")," or ",Object(o.b)("strong",{parentName:"p"},"eduroam")," WiFi at Maastricht University")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For ",Object(o.b)("strong",{parentName:"p"},"students"),", use the Athena Student Desktop at ",Object(o.b)("a",{parentName:"p",href:"https://athenadesktop.maastrichtuniversity.nl"},"athenadesktop.maastrichtuniversity.nl"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For ",Object(o.b)("strong",{parentName:"p"},"Linux"),", use ",Object(o.b)("inlineCode",{parentName:"p"},"openconnect")," to connect to the UM VPN:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"sudo apt install openconnect\nsudo openconnect -u YOUR.USER --authgroup 01-Employees vpn-rw1.maastrichtuniversity.nl\n")),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"Provide your UM password when prompted.")))),Object(o.b)("h2",{id:"access-the-web-ui"},"Access the web UI"),Object(o.b)("p",null,"Access the DSRI web UI at ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://app.dsri.unimaas.nl:8443"},"https://app.dsri.unimaas.nl:8443"))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Password")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Use your general UM password."))),Object(o.b)("p",null,"If you do not have access to the DSRI ",Object(o.b)("a",{parentName:"p",href:"mailto:dsri-support-l@maastrichtuniversity.nl"},"contact us"),"."),Object(o.b)("p",null,"You will be able to login at ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://app.dsri.unimaas.nl:8443"},"https://app.dsri.unimaas.nl:8443"))," either using:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("strong",{parentName:"li"},"prefix of your UM email address")," with the first letter capitalized, e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"Firstname.Lastname")," or ",Object(o.b)("inlineCode",{parentName:"li"},"F.Lastname")),Object(o.b)("li",{parentName:"ul"},"Or your ",Object(o.b)("strong",{parentName:"li"},"employee number")," at Maastricht University (a.k.a. P number), e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"P7000000"))),Object(o.b)("img",{src:"/dsri-documentation/img/screenshot_login_screen.png",alt:"Login screen",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Command line interface")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"We recommend you to install the ",Object(o.b)("inlineCode",{parentName:"p"},"oc")," command line interface to perform additional operations on your applications, such as loading large amount of data using ",Object(o.b)("inlineCode",{parentName:"p"},"oc cp"),", or deploying an application from a local ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile"),"."))),Object(o.b)("h2",{id:"go-to-your-project"},"Go to your project"),Object(o.b)("p",null,"Once in the DSRI OpenShift web UI, ",Object(o.b)("strong",{parentName:"p"},"go to your project")," (applications are deployed in a project)"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Project")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"A project should have already been created for you when you registered to the DSRI. Use this project."))),Object(o.b)("img",{src:"/dsri-documentation/img/screenshot_go_to_project.png",alt:"Login screen",style:{maxWidth:"100%",maxHeight:"100%"}}))}l.isMDXComponent=!0}}]);