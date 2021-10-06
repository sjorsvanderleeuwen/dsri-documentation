(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{144:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),b=u(r),h=n,m=b["".concat(c,".").concat(h)]||b[h]||p[h]||i;return r?a.a.createElement(m,s(s({ref:t},l),{},{components:r})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<i;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},99:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(144)),c=["components"],s={title:"Need help?",description:"Get help with the DSRI team",hide_table_of_contents:!0},o={type:"mdx",permalink:"/dsri-documentation/help",source:"@site/src/pages/help.md"},l=[{value:"Access the DSRI",id:"access-the-dsri",children:[]},{value:"Check the issues \ud83d\udcdd",id:"check-the-issues-",children:[]},{value:"Join the DSRI Slack \ud83d\udcac",id:"join-the-dsri-slack-",children:[]},{value:"Contact us \ud83d\udcec",id:"contact-us-",children:[]}],u={rightToc:l};function b(e){var t=e.components,r=Object(a.a)(e,c);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"need-help"},"Need help?"),Object(i.b)("p",null,"If you need help or have questions about the Data Science Research Infrastructure, try one of the mechanisms above:"),Object(i.b)("h2",{id:"access-the-dsri"},"Access the DSRI"),Object(i.b)("p",null,"To access the Data Science Research Infrastructure (DSRI) you need to be working or studying at Maastricht University, and have a ",Object(i.b)("inlineCode",{parentName:"p"},"maastrichtuniversity.nl")," email account. "),Object(i.b)("p",null,"Before enabling your UM account to access the DSRI, we would like to know a bit more about your Data Science project! Please fill this ",Object(i.b)("a",{parentName:"p",href:"https://forms.gle/RorkVaNvZsBKerD58"},"form")," to provide us some information on what you plan to do with the DSRI. "),Object(i.b)("p",null,"Once this will be done, we will enable your account as soon as possible, and you will be able to login using your UM username and password."),Object(i.b)("h2",{id:"check-the-issues-"},"Check the issues \ud83d\udcdd"),Object(i.b)("p",null,"Browse ",Object(i.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/dsri-documentation/issues"},"existing issues")," to resolve your problem, and feel free to create a ",Object(i.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/dsri-documentation/issues"},"new issue")," to request new features on the DSRI, or improve the documentation."),Object(i.b)("a",{href:"https://github.com/MaastrichtU-IDS/dsri-documentation/issues",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub issues"},Object(i.b)("img",{alt:"GitHub issues",src:"https://img.shields.io/github/issues/MaastrichtU-IDS/dsri-documentation?label=dsri-documentation"})),Object(i.b)("h2",{id:"join-the-dsri-slack-"},"Join the DSRI Slack \ud83d\udcac"),Object(i.b)("p",null,"Contact us at ",Object(i.b)("a",{parentName:"p",href:"mailto:dsri-support-l@maastrichtuniversity.nl"},"dsri-support-l@maastrichtuniversity.nl")," to get an invitation to the DSRI Slack channel"),Object(i.b)("a",{href:"https://dsri.slack.com",target:"_blank",rel:"noreferrer noopener","aria-label":"Chat on Slack"},Object(i.b)("img",{alt:"Chat on Slack",src:"https://img.shields.io/badge/Chat%20on-Slack-blueviolet"})),Object(i.b)("h2",{id:"contact-us-"},"Contact us \ud83d\udcec"),Object(i.b)("p",null,"Contact us at ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"mailto:dsri-support-l@maastrichtuniversity.nl"},"dsri-support-l@maastrichtuniversity.nl"))," if you have any questions"),Object(i.b)("p",null,"From the ",Object(i.b)("a",{parentName:"p",href:"https://maastrichtuniversity.nl/ids"},"Institute of Data Science")," (IDS) and ",Object(i.b)("a",{parentName:"p",href:"https://maastrichtuniversity.nl/icts"},"Information and Communications Technology Services")," (ICTS) at ",Object(i.b)("a",{parentName:"p",href:"https://maastrichtuniversity.nl"},"Maastricht University"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Vincent Emonet")," - Data Science Engineer at ",Object(i.b)("a",{parentName:"li",href:"https://maastrichtuniversity.nl/ids"},"IDS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Binosha Weerarathna")," - Data Science Engineer at ",Object(i.b)("a",{parentName:"li",href:"https://maastrichtuniversity.nl/ids"},"IDS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Marcel Brouwers ")," - System, Security and Network Engineer at ",Object(i.b)("a",{parentName:"li",href:"https://maastrichtuniversity.nl/icts"},"ICTS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Chris Kuipers")," - System, Security and Network Engineer at ",Object(i.b)("a",{parentName:"li",href:"https://maastrichtuniversity.nl/icts"},"ICTS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Jordy Frijns")," - System, Security and Network Engineer at ",Object(i.b)("a",{parentName:"li",href:"https://maastrichtuniversity.nl/icts"},"ICTS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Rob Schlooz")," - Project Manager at ",Object(i.b)("a",{parentName:"li",href:"https://maastrichtuniversity.nl/ids"},"IDS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Michel Dumontier")," - Project Investigator at ",Object(i.b)("a",{parentName:"li",href:"https://maastrichtuniversity.nl/ids"},"IDS"))))}b.isMDXComponent=!0}}]);