(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{119:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return c})),o.d(t,"rightToc",(function(){return l})),o.d(t,"default",(function(){return p}));var n=o(3),a=o(7),r=(o(0),o(125)),i={id:"deploy-rstudio",title:"Start RStudio"},c={unversionedId:"deploy-rstudio",id:"deploy-rstudio",isDocsHomePage:!1,title:"Start RStudio",description:"RStudio can be easily deployed from the OpenShift web UI Catalog.",source:"@site/docs/deploy-rstudio.md",slug:"/deploy-rstudio",permalink:"/dsri-documentation/docs/deploy-rstudio",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/docs/docs/deploy-rstudio.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1607036214,sidebar:"docs",previous:{title:"Start Jupyter Notebooks",permalink:"/dsri-documentation/docs/deploy-jupyter"},next:{title:"Start a VSCode server",permalink:"/dsri-documentation/docs/deploy-vscode"}},l=[{value:"RStudio with root user",id:"rstudio-with-root-user",children:[]},{value:"RStudio with Shiny server",id:"rstudio-with-shiny-server",children:[]},{value:"Use Git in RStudio",id:"use-git-in-rstudio",children:[]},{value:"Upload data to RStudio",id:"upload-data-to-rstudio",children:[]},{value:"Stop or delete RStudio",id:"stop-or-delete-rstudio",children:[]}],s={rightToc:l};function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"RStudio can be easily deployed from the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://app.dsri.unimaas.nl:8443/console/catalog"}),"OpenShift web UI Catalog"),"."),Object(r.b)("h2",{id:"rstudio-with-root-user"},"RStudio with root user"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\ud83d\udd12 You need root containers enabled (aka. anyuid) in your project to start this application.")),Object(r.b)("p",null,"Run RStudio with ",Object(r.b)("inlineCode",{parentName:"p"},"sudo")," privileges, can be useful if need to install additional packages that requires ",Object(r.b)("inlineCode",{parentName:"p"},"sudo")),Object(r.b)("p",null,"Create the template in your project catalog if not present:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc apply -f https://raw.githubusercontent.com/MaastrichtU-IDS/dsri-openshift-applications/main/templates-anyuid/template-rstudio-root-persistent.yml\n")),Object(r.b)("p",null,"The application will use an existing Persistent Volume Claim (PVC) for a persistent storage of the data."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"See the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/rocker-org/rocker/wiki/Using-the-RStudio-image"}),"official Docker image documentation")," for more details about the container deployed.")),Object(r.b)("img",{src:"/dsri-documentation/img/screenshot-deploy-rstudio.png",alt:"Deploy RStudio",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(r.b)("h2",{id:"rstudio-with-shiny-server"},"RStudio with Shiny server"),Object(r.b)("p",null,"Start a RStudio application, with a complementary Shiny server, on the DSRI. You will be able to access the application via an URL generated by the DSRI."),Object(r.b)("p",null,"Create the template in your project catalog:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc apply -f https://raw.githubusercontent.com/MaastrichtU-IDS/dsri-openshift-applications/main/templates-restricted/template-rstudio-shiny-dynamic.yml\n")),Object(r.b)("p",null,"Use the ",Object(r.b)("strong",{parentName:"p"},"RStudio with Shiny (Dynamic)")," template in the OpenShift web UI catalog. It will automatically create a persistent storage for the data."),Object(r.b)("p",null,"Image optimized for DSRI OpenShift, does not require root containers enabled. But you will not have ",Object(r.b)("inlineCode",{parentName:"p"},"sudo")," privileges in the application."),Object(r.b)("h2",{id:"use-git-in-rstudio"},"Use Git in RStudio"),Object(r.b)("p",null,"The fastest way to get started is to use ",Object(r.b)("inlineCode",{parentName:"p"},"git")," from the terminal, for example to clone the git repository:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/MaastrichtU-IDS/dsri-openshift-applications.git\n")),Object(r.b)("p",null,"You can also check how to enable Git integration in RStudio at ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://support.rstudio.com/hc/en-us/articles/200532077"}),"https://support.rstudio.com/hc/en-us/articles/200532077")),Object(r.b)("p",null,"You can run this command to ask git to save your password for 15min:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git config credential.helper cache\n")),Object(r.b)("p",null,"Or store the password/token in a plain text file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git config --global credential.helper 'store --file ~/.git-credentials'\n")),Object(r.b)("p",null,"Before pushing back to GitHub or GitLab, you will need to ",Object(r.b)("strong",{parentName:"p"},"configure you username and email")," in the terminal:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'git config --global user.name "Jean Dupont"\ngit config --global user.email jeandupont@gmail.com\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"We recommend to use SSH instead of HTTPS connection when possible, checkout ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"}),"here")," how to generate SSH keys and use them with your GitHub account.")),Object(r.b)("h2",{id:"upload-data-to-rstudio"},"Upload data to RStudio"),Object(r.b)("p",null,"See the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/dsri-documentation/docs/openshift-load-data"}),"guide to upload data on the DSRI"),"."),Object(r.b)("h2",{id:"stop-or-delete-rstudio"},"Stop or delete RStudio"),Object(r.b)("p",null,"See the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/dsri-documentation/docs/openshift-delete-services"}),"documentation to stop and delete services"),"."))}p.isMDXComponent=!0},125:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return h}));var n=o(0),a=o.n(n);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(o),b=n,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||r;return o?a.a.createElement(h,c(c({ref:t},s),{},{components:o})):a.a.createElement(h,c({ref:t},s))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<r;s++)i[s]=o[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"}}]);