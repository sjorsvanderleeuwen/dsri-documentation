(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{173:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return d}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=b(a),m=n,d=l["".concat(o,".").concat(m)]||l[m]||u[m]||r;return a?i.a.createElement(d,c(c({ref:t},s),{},{components:a})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<r;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(3),i=a(7),r=(a(0),a(173)),o={id:"deploy-jupyter",title:"Jupyter Notebooks"},c={unversionedId:"deploy-jupyter",id:"deploy-jupyter",isDocsHomePage:!1,title:"Jupyter Notebooks",description:"Start JupyterLab",source:"@site/docs/deploy-jupyter.md",slug:"/deploy-jupyter",permalink:"/dsri-documentation/docs/deploy-jupyter",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/deploy-jupyter.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1620641085,sidebar:"docs",previous:{title:"Install from Helm charts",permalink:"/dsri-documentation/docs/helm"},next:{title:"RStudio",permalink:"/dsri-documentation/docs/deploy-rstudio"}},p=[{value:"Start JupyterLab",id:"start-jupyterlab",children:[]},{value:"Use git in JupyterLab",id:"use-git-in-jupyterlab",children:[]},{value:"Advanced: JupyterHub",id:"advanced-jupyterhub",children:[]}],s={rightToc:p};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"start-jupyterlab"},"Start JupyterLab"),Object(r.b)("p",null,"Start a JupyterLab container based on the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/jupyter/docker-stacks"},"official Jupyter docker stacks")," (debian), with ",Object(r.b)("inlineCode",{parentName:"p"},"sudo")," privileges to install anything you need (e.g. pip or apt packages)"),Object(r.b)("p",null,"You can start a container using the ",Object(r.b)("strong",{parentName:"p"},"JupyterLab")," template in the ",Object(r.b)("a",{parentName:"p",href:"https://console-openshift-console.apps.dsri2.unimaas.nl/console/catalog"},"Catalog web UI")," (make sure the ",Object(r.b)("strong",{parentName:"p"},"Templates")," checkbox is checked)"),Object(r.b)("p",null,"Provide a few parameters, and Instantiate the template. The DSRI will automatically create a persistent volume to store data you will put in the ",Object(r.b)("inlineCode",{parentName:"p"},"/home/jovyan")," folder. You can find the persistent volumes in the DSRI web UI, go to the ",Object(r.b)("strong",{parentName:"p"},"Administrator")," view > ",Object(r.b)("strong",{parentName:"p"},"Storage")," > ",Object(r.b)("strong",{parentName:"p"},"Persistent Volume Claims"),"."),Object(r.b)("img",{src:"/dsri-documentation/img/screenshot-deploy-jupyter.png",alt:"Deploy Jupyter",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(r.b)("p",null,"You can use any image based on the official Jupyter docker stack: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/jupyter/docker-stacks"},"https://github.com/jupyter/docker-stacks")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"jupyter/scipy-notebook")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"jupyter/datascience-notebook")," (with Julia kernel)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"jupyter/tensorflow-notebook")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"jupyter/r-notebook")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"jupyter/pyspark-notebook")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"jupyter/all-spark-notebook")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ghcr.io/maastrichtu-ids/jupyterlab")," (with Java and SPARQL kernels, and autocomplete for Python)")),Object(r.b)("p",null,"You can also build your own image, feel free to use this repository as example to extend a JupyterLab image: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/jupyterlab"},"https://github.com/MaastrichtU-IDS/jupyterlab")),Object(r.b)("h2",{id:"use-git-in-jupyterlab"},"Use git in JupyterLab"),Object(r.b)("p",null,"You can always use ",Object(r.b)("inlineCode",{parentName:"p"},"git")," from the terminal."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Configure username")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Before pushing back to GitHub or GitLab, you will need to ",Object(r.b)("strong",{parentName:"p"},"configure you username and email")," in VSCode terminal:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},'git config --global user.name "Jean Dupont"\ngit config --global user.email jeandupont@gmail.com\n')))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Save your password")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You can run this command to ask git to save your password for 15min:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"git config credential.helper cache\n")),Object(r.b)("p",{parentName:"div"},"Or store the password in a plain text file:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"git config --global credential.helper 'store --file ~/.git-credentials'\n")))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Git tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"We recommend to use SSH instead of HTTPS connection when possible, checkout ",Object(r.b)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"},"here")," how to generate SSH keys and use them with your GitHub account."))),Object(r.b)("p",null,"You can also enable and use the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/jupyterlab/jupyterlab-git"},"JupyterLab Git extension")," to clone and manage your ",Object(r.b)("inlineCode",{parentName:"p"},"git")," repositories."),Object(r.b)("p",null,"It will prompt you for a username and password if the repository is private."),Object(r.b)("img",{src:"https://raw.githubusercontent.com/jupyterlab/jupyterlab-git/master/docs/figs/preview.gif",alt:"JupyterLab Git extension",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(r.b)("h2",{id:"advanced-jupyterhub"},"Advanced: JupyterHub"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"For multiple users")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This application is useful if you want to provide JupyterLab to multiple users."))),Object(r.b)("p",null,"Use the ",Object(r.b)("strong",{parentName:"p"},"JupyterHub with GitHub authentication (Dynamic)")," template to start a JupyterHub service, users will be able to login with their GitHub account, and start a notebook choosing from various images."),Object(r.b)("p",null,"This solution enable you to use the DSRI to run Jupyter notebooks for multiple users without the need for a DSRI account, or knowledge of OpenShift. All they need is a GitHub account and access to the UM network (via the UM VPN)."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Use different authentication systems")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Checkout the ",Object(r.b)("a",{parentName:"p",href:"https://jupyterhub.readthedocs.io/en/stable/reference/authenticators.html"},"different authenticators implemented by JupyterHub"),", and let us know if you would like to work together on implementing a new authentication system."))),Object(r.b)("p",null,"Create the template in your project catalog:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"oc apply -f https://raw.githubusercontent.com/MaastrichtU-IDS/dsri-documentation/master/applications/templates/restricted/template-jupyterhub-github-auth.yml\n")),Object(r.b)("p",null,"A custom image can be built and provided when deploying JupyterHub, see this repository as example to build a JupyterLab Docker image supported by OpenShift: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/jupyterlab-on-openshift"},"https://github.com/MaastrichtU-IDS/jupyterlab-on-openshift")),Object(r.b)("p",null,"You will need to register a new GitHub OAuth application for your JupyterHub instance to authenticate via GitHub:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create a new OAuth app at ",Object(r.b)("a",{parentName:"p",href:"https://github.com/settings/developers"},"https://github.com/settings/developers"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Provide the following callback URL:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://APPLICATION_NAME-OPENSHIFT_PROJECT.app.dsri.unimaas.nl/hub/oauth_callback"},"https://APPLICATION_NAME-OPENSHIFT_PROJECT.app.dsri.unimaas.nl/hub/oauth_callback")),Object(r.b)("li",{parentName:"ul"},"e.g. for the ",Object(r.b)("inlineCode",{parentName:"li"},"ids-projects")," project: ",Object(r.b)("a",{parentName:"li",href:"https://jupyterhub-ids-projects.app.dsri.unimaas.nl/hub/oauth_callback"},"https://jupyterhub-ids-projects.app.dsri.unimaas.nl/hub/oauth_callback")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Add authorized GitHub users to the JupyterHub users when submitting the template to deploy JupyterHub in the OpenShift web UI. It can be changed from the ",Object(r.b)("strong",{parentName:"p"},"Admin")," tab in the JupyterHub UI later."))),Object(r.b)("p",null,"Persistent volumes are automatically created for each instance started in JupyterHub to insure persistence of the data even if the instances or JupyterHub are stopped. You can find the persistent volumes in the DSRI web UI, go to the ",Object(r.b)("strong",{parentName:"p"},"Administrator")," view > ",Object(r.b)("strong",{parentName:"p"},"Storage")," > ",Object(r.b)("strong",{parentName:"p"},"Persistent Volume Claims"),"."),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Restricted user")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The users will be able to install new ",Object(r.b)("inlineCode",{parentName:"p"},"pip")," packages in their JupyterLab instance, but they will not have ",Object(r.b)("inlineCode",{parentName:"p"},"sudo")," privileges (so they cannot install ",Object(r.b)("inlineCode",{parentName:"p"},"apt")," or ",Object(r.b)("inlineCode",{parentName:"p"},"yum")," packages for example). This can be changed by editing the KubeSpawner python script in the ConfigMap to use ",Object(r.b)("inlineCode",{parentName:"p"},"serviceAccountName: anyuid")))))}b.isMDXComponent=!0}}]);