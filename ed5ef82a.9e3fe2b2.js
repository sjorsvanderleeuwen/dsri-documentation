(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),i=n(7),r=(n(0),n(173)),o={id:"deploy-rstudio",title:"RStudio"},c={unversionedId:"deploy-rstudio",id:"deploy-rstudio",isDocsHomePage:!1,title:"RStudio",description:"Start RStudio",source:"@site/docs/deploy-rstudio.md",slug:"/deploy-rstudio",permalink:"/dsri-documentation/docs/deploy-rstudio",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/deploy-rstudio.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1619563173,sidebar:"docs",previous:{title:"Jupyter Notebooks",permalink:"/dsri-documentation/docs/deploy-jupyter"},next:{title:"VisualStudio Code",permalink:"/dsri-documentation/docs/deploy-vscode"}},s=[{value:"Start RStudio",id:"start-rstudio",children:[]},{value:"Restricted RStudio with Shiny server",id:"restricted-rstudio-with-shiny-server",children:[]},{value:"Use Git in RStudio",id:"use-git-in-rstudio",children:[]},{value:"Run jobs in RStudio",id:"run-jobs-in-rstudio",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"start-rstudio"},"Start RStudio"),Object(r.b)("p",null,"Start a RStudio container based on ",Object(r.b)("a",{parentName:"p",href:"https://github.com/rocker-org/rocker/wiki/Using-the-RStudio-image"},"Rocker RStudio tidyverse images")," (debian), with ",Object(r.b)("inlineCode",{parentName:"p"},"sudo")," privileges to install anything you need (e.g. pip or apt packages)"),Object(r.b)("p",null,"You can start a container using the ",Object(r.b)("strong",{parentName:"p"},"JupyterLab")," template in the ",Object(r.b)("a",{parentName:"p",href:"https://console-openshift-console.apps.dsri2.unimaas.nl/console/catalog"},"Catalog web UI")," (make sure the ",Object(r.b)("strong",{parentName:"p"},"Templates")," checkbox is checked)"),Object(r.b)("p",null,"Provide a few parameters, and Instantiate the template. The username will be ",Object(r.b)("strong",{parentName:"p"},"rstudio"),", and the DSRI will automatically create a persistent volume to store data you will put in the ",Object(r.b)("inlineCode",{parentName:"p"},"/home/rstudio")," folder. You can find the persistent volumes in the DSRI web UI, go to the ",Object(r.b)("strong",{parentName:"p"},"Administrator")," view > ",Object(r.b)("strong",{parentName:"p"},"Storage")," > ",Object(r.b)("strong",{parentName:"p"},"Persistent Volume Claims"),"."),Object(r.b)("img",{src:"/dsri-documentation/img/screenshot-deploy-rstudio.png",alt:"Deploy RStudio",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Official image documentation")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"See the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/rocker-org/rocker/wiki/Using-the-RStudio-image"},"official Docker image documentation")," for more details about the container deployed."))),Object(r.b)("h2",{id:"restricted-rstudio-with-shiny-server"},"Restricted RStudio with Shiny server"),Object(r.b)("p",null,"Start a RStudio application, with a complementary Shiny server, using a regular ",Object(r.b)("inlineCode",{parentName:"p"},"rstudio")," user, ",Object(r.b)("strong",{parentName:"p"},"without ",Object(r.b)("inlineCode",{parentName:"strong"},"sudo")," privileges"),"."),Object(r.b)("p",null,"Create the template in your project:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the DSRI web UI, go to ",Object(r.b)("strong",{parentName:"p"},"+ Add"),", then click on ",Object(r.b)("strong",{parentName:"p"},"YAML"),", add the content of the ",Object(r.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/MaastrichtU-IDS/dsri-documentation/master/applications/templates/restricted/template-rstudio-shiny-restricted.yml"},"template-rstudio-shiny-restricted.yml")," file, and validate.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can also do it using the terminal:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"oc apply -f https://raw.githubusercontent.com/MaastrichtU-IDS/dsri-documentation/master/applications/templates/restricted/template-rstudio-shiny-restricted.yml\n")))),Object(r.b)("p",null,"Once the template has been created in your project, use the ",Object(r.b)("strong",{parentName:"p"},"RStudio with Shiny server")," template in the OpenShift web UI catalog. It will automatically create a persistent storage for the data."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"No sudo privileges")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You will not have ",Object(r.b)("inlineCode",{parentName:"p"},"sudo")," privileges in the application."))),Object(r.b)("h2",{id:"use-git-in-rstudio"},"Use Git in RStudio"),Object(r.b)("p",null,"The fastest way to get started is to use ",Object(r.b)("inlineCode",{parentName:"p"},"git")," from the terminal, for example to clone a git repository use ",Object(r.b)("inlineCode",{parentName:"p"},"git clone")),Object(r.b)("p",null,"You can also check how to enable Git integration in RStudio at ",Object(r.b)("a",{parentName:"p",href:"https://support.rstudio.com/hc/en-us/articles/200532077"},"https://support.rstudio.com/hc/en-us/articles/200532077")),Object(r.b)("p",null,"You can run this command to ask git to save your password for 15min:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"git config credential.helper cache\n")),Object(r.b)("p",null,"Or store the password/token in a plain text file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"git config --global credential.helper 'store --file ~/.git-credentials'\n")),Object(r.b)("p",null,"Before pushing back to GitHub or GitLab, you will need to ",Object(r.b)("strong",{parentName:"p"},"configure you username and email")," in the terminal:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'git config --global user.name "Jean Dupont"\ngit config --global user.email jeandupont@gmail.com\n')),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Git tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"We recommend to use SSH instead of HTTPS connection when possible, checkout ",Object(r.b)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"},"here")," how to generate SSH keys and use them with your GitHub account."))),Object(r.b)("h2",{id:"run-jobs-in-rstudio"},"Run jobs in RStudio"),Object(r.b)("p",null,"Checkout this package to run chunks of R code as jobs directly through RStudio: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/lindeloev/job"},"https://github.com/lindeloev/job")))}l.isMDXComponent=!0},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=a,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||r;return n?i.a.createElement(m,c(c({ref:t},p),{},{components:n})):i.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<r;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);