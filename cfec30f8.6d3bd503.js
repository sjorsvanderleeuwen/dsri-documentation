(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{123:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),o=(a(0),a(146)),s=["components"],c={id:"deploy-database",title:"Databases"},i={unversionedId:"deploy-database",id:"deploy-database",isDocsHomePage:!1,title:"Databases",description:"SQL databases",source:"@site/docs/deploy-database.md",slug:"/deploy-database",permalink:"/dsri-documentation/docs/deploy-database",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/deploy-database.md",version:"current",lastUpdatedBy:"Binosha",lastUpdatedAt:1636121189,sidebar:"docs",previous:{title:"VisualStudio Code",permalink:"/dsri-documentation/docs/deploy-vscode"},next:{title:"Matlab",permalink:"/dsri-documentation/docs/deploy-matlab"}},b=[{value:"SQL databases",id:"sql-databases",children:[{value:"Start PostgreSQL \ud83d\udc18",id:"start-postgresql-",children:[]},{value:"Start MySQL \ud83d\udc2c",id:"start-mysql-",children:[]}]},{value:"NoSQL databases",id:"nosql-databases",children:[{value:"MongoDB \ud83c\udf3f",id:"mongodb-",children:[]},{value:"Redis \ud83c\udfb2",id:"redis-",children:[]}]},{value:"Graph databases",id:"graph-databases",children:[{value:"OpenLink Virtuoso triplestore",id:"openlink-virtuoso-triplestore",children:[]},{value:"Ontotext GraphDB triplestore",id:"ontotext-graphdb-triplestore",children:[]},{value:"AllegroGraph",id:"allegrograph",children:[]}]}],p={rightToc:b};function l(e){var t=e.components,a=Object(r.a)(e,s);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"sql-databases"},"SQL databases"),Object(o.b)("p",null,"You can easily create a database from the templates available in the DSRI OpenShift web UI catalog:"),Object(o.b)("img",{src:"/dsri-documentation/img/screenshot-databases.png",alt:"Databases in catalog web UI",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(o.b)("p",null,"You can connect to a database from another application in the same project by using the database service name as hostname:"),Object(o.b)("img",{src:"/dsri-documentation/img/screenshot_database_service.png",alt:"Databases in catalog web UI",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(o.b)("p",null,"You can also use the ",Object(o.b)("inlineCode",{parentName:"p"},"oc")," CLI to get the services in your project:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"oc get services\n")),Object(o.b)("h3",{id:"start-postgresql-"},"Start PostgreSQL \ud83d\udc18"),Object(o.b)("p",null,"Use the ",Object(o.b)("strong",{parentName:"p"},"Postgresql")," template in the DSRI OpenShift web UI catalog to start a SQL database. "),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Connect to the database")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"When the database has been deployed, you can connect from another pod using your favorite language and connector."))),Object(o.b)("p",null,"Example with the ",Object(o.b)("inlineCode",{parentName:"p"},"psql")," Command Line Interface:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"apt-get update && apt-get install postgresql-client -y\n")),Object(o.b)("p",null,"Connect to the Postgresql database using the service name (change depending on the username and database name you chose):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"psql -h postgresql-db -U postgres db\n")),Object(o.b)("p",null,"Checkout the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/dsri-demo"},"dsri-demo repository")," for a quick demo for accessing and using a PostgreSQL database from a Jupyter notebook on the DSRI."),Object(o.b)("h3",{id:"start-mysql-"},"Start MySQL \ud83d\udc2c"),Object(o.b)("p",null,"Use the ",Object(o.b)("strong",{parentName:"p"},"MySQL")," template in the DSRI OpenShift web UI catalog."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Connect to the database")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"When the database has been deployed, you can connect from another pod using your favorite language and connector."))),Object(o.b)("p",null,"Example with the ",Object(o.b)("inlineCode",{parentName:"p"},"mysql")," Command Line Interface:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"apt-get update && apt-get install mariadb-client -y\n")),Object(o.b)("p",null,"Connect to the MySQL database using the service name:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mysql -h example-mysql -p\n")),Object(o.b)("p",null,"Checkout the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/dsri-demo"},"dsri-demo repository")," for a quick demo for accessing and using a MySQL database from a Jupyter notebook on the DSRI."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Alternatively, MySQL databases can be started using Helm, see the ",Object(o.b)("a",{parentName:"p",href:"/dsri-documentation/docs/helm#install-a-helm-chart"},"Helm documentation page")," for more details.")),Object(o.b)("h2",{id:"nosql-databases"},"NoSQL databases"),Object(o.b)("h3",{id:"mongodb-"},"MongoDB \ud83c\udf3f"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.mongodb.com/"},"MongoDB")," is a general purpose, document-based, distributed database built for modern application developers and for the cloud era. "),Object(o.b)("p",null,"Use the ",Object(o.b)("strong",{parentName:"p"},"MongoDB")," template in the DSRI OpenShift web UI catalog."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Connect to the database")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Use the service name as hostname to connect from another pod in the same project."))),Object(o.b)("h3",{id:"redis-"},"Redis \ud83c\udfb2"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"http://redis.io/"},"Redis")," is an advanced key-value cache and store. It is often referred to as a data structure server since keys can contain  strings, hashes, lists, sets, sorted sets, bitmaps and hyperlog."),Object(o.b)("p",null,"Use the ",Object(o.b)("strong",{parentName:"p"},"Redis")," template in the DSRI OpenShift web UI catalog."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Connect to the database")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Use the service name as hostname to connect from another pod in the same project."))),Object(o.b)("h2",{id:"graph-databases"},"Graph databases"),Object(o.b)("h3",{id:"openlink-virtuoso-triplestore"},"OpenLink Virtuoso triplestore"),Object(o.b)("p",null,"Search for the ",Object(o.b)("strong",{parentName:"p"},"Virtuoso triplestore")," template in the DSRI web UI catalog. Instantiate the template to create a Virtuoso triplestore in your project."),Object(o.b)("p",null,"The deployment is based on the latest open source version of Virtuoso: ",Object(o.b)("a",{parentName:"p",href:"https://hub.docker.com/r/openlink/virtuoso-opensource-7"},"https://hub.docker.com/r/openlink/virtuoso-opensource-7")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Connect to the database")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Use the service name as hostname to connect from another pod in the same project."))),Object(o.b)("h3",{id:"ontotext-graphdb-triplestore"},"Ontotext GraphDB triplestore"),Object(o.b)("p",null,"Use the official DockerHub image if you have an enterprise license. Or ",Object(o.b)("a",{parentName:"p",href:"https://maastrichtu-ids.github.io/dsri-documentation/docs/guide-dockerfile-to-openshift"},"build")," GraphDB free edition image from ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Ontotext-AD/graphdb-docker"},"graphdb-docker on GitHub"),"."),Object(o.b)("p",null,"After copying the ",Object(o.b)("inlineCode",{parentName:"p"},".zip")," file in the ",Object(o.b)("inlineCode",{parentName:"p"},"graphdb-docker/free-edition")," folder, go the ",Object(o.b)("inlineCode",{parentName:"p"},"graphdb-docker")," folder in your terminal:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cd graphdb-docker\n")),Object(o.b)("p",null,"Before creating your GraphDB ImageStream, make sure you are in the right project:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"oc project my-project\n")),Object(o.b)("p",null,"Create the ImageStream for GraphDB:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"oc new-build --name graphdb --binary\n")),Object(o.b)("p",null,"Build the image on the DSRI and save it in the ImageStream:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"oc start-build graphdb --from-dir=free-edition --follow --wait\n")),Object(o.b)("p",null,"You can now use the ",Object(o.b)("strong",{parentName:"p"},"Ontotext GraphDB")," template to deploy a GraphDB instance on DSRI. "),Object(o.b)("p",null,"Use the name of the ImageStream when instantiating the template, you can check if the image was properly built in ",Object(o.b)("strong",{parentName:"p"},"Search")," > Filter ",Object(o.b)("strong",{parentName:"p"},"Resources")," for ImageStreams"),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Connect to the database")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Use the service name as hostname to connect from another pod in the same project."))),Object(o.b)("h3",{id:"allegrograph"},"AllegroGraph"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://franz.com/agraph/"},"AllegroGraph\xae")," is a modern, high-performance, persistent graph database. It supports  SPARQL, RDFS++, and Prolog reasoning from numerous client applications. "),Object(o.b)("p",null,"AllegroGraph has not been tested on DSRI yet, but it can be deployed on Kubernetes using Helm, cf. ",Object(o.b)("a",{parentName:"p",href:"https://www.github.com/franzinc/agraph-examples/tree/master/clustering%2Fkubernetes%2Fmmr%2Fkubernetes-mmr.md"},"https://www.github.com/franzinc/agraph-examples/tree/master/clustering%2Fkubernetes%2Fmmr%2Fkubernetes-mmr.md")))}l.isMDXComponent=!0},146:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),l=p(a),m=n,h=l["".concat(s,".").concat(m)]||l[m]||d[m]||o;return a?r.a.createElement(h,c(c({ref:t},b),{},{components:a})):r.a.createElement(h,c({ref:t},b))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var b=2;b<o;b++)s[b]=a[b];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);