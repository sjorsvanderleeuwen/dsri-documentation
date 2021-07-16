(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),i=(n(0),n(140)),r=["components"],c={id:"start-workspace",title:"Start your workspace"},s={unversionedId:"start-workspace",id:"start-workspace",isDocsHomePage:!1,title:"Start your workspace",description:"This page will help you to start a workspace to run your code and experiments on the DSRI in a container.",source:"@site/docs/start-workspace.md",slug:"/start-workspace",permalink:"/dsri-documentation/docs/start-workspace",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/start-workspace.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1626435996,sidebar:"docs",previous:{title:"Access the DSRI",permalink:"/dsri-documentation/docs/access-dsri"},next:{title:"Install the client",permalink:"/dsri-documentation/docs/openshift-install"}},l=[{value:"Introduction to containers",id:"introduction-to-containers",children:[]},{value:"Choose your interface",id:"choose-your-interface",children:[]},{value:"Start your workspace",id:"start-your-workspace",children:[]},{value:"Upload your code and data",id:"upload-your-code-and-data",children:[]},{value:"Install your dependencies",id:"install-your-dependencies",children:[]},{value:"Run your code",id:"run-your-code",children:[]},{value:"Stop your application",id:"stop-your-application",children:[]},{value:"Optional: define a docker image",id:"optional-define-a-docker-image",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,r);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This page will help you to start a workspace to run your code and experiments on the DSRI in a container. "),Object(i.b)("h2",{id:"introduction-to-containers"},"Introduction to containers"),Object(i.b)("p",null,"Anything running in DSRI needs to be running in a docker container. Docker containers are lightweight Virtual Machines, you can see them as a clean minimalist Linux computers with only what you need to run your programs installed. This allows you to completely control the environment where your code runs, and avoid conflicts."),Object(i.b)("p",null,"When running experiments we can start from existing images that have been already published for popular data science applications with a web interface. You can use, for example, JupyterLab when running python, RStudio when running R, or VisualStudio Code if you prefer."),Object(i.b)("p",null,"Once you access a running container, you can install anything you need like if it was a linux/ubuntu computer (most of them runs with admin privileges), and run anything via the notebook/RStudio/VSCode interface, or the terminal."),Object(i.b)("h2",{id:"choose-your-interface"},"Choose your interface"),Object(i.b)("p",null,"First step to get your code running on the DSRI is to pick the base interface you want to use to access your workspace on the DSRI."),Object(i.b)("p",null,"We prepared generic Docker images for data science workspaces with your favorite web UI pre-installed to easily deploy your workspace. So you just need to choose your favorite workspace, start the container, access it, add your code, and install your dependencies."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Login to the DSRI dashboard"),Object(i.b)("li",{parentName:"ol"},"Select your project, or create one with a meaningful short name representing your project, e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"workspace-yourname")),Object(i.b)("li",{parentName:"ol"},"Go to the ",Object(i.b)("strong",{parentName:"li"},"+Add")," page, and select to add ",Object(i.b)("strong",{parentName:"li"},"From Catalog"))),Object(i.b)("img",{src:"/dsri-documentation/img/screenshot_access_catalog.png",alt:"Access catalog",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Search for templates corresponding to the application you want to deploy among the one described below (make sure the filter for templates is properly checked). ")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"JupyterLab"),": Access and run your code using the popular Jupyter notebooks, with kernel for python, java, R, julia. It also provides a good web interface to access the terminal, upload and browse the files."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"VisualStudio Code"),": Your daily IDE, but in your browser, running on the DSRI. "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"RStudio"),": R users favorite's."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"The terminal"),": For people who are used to the terminal and just want to run scripts, it provides smaller and more stable images, which makes installation and deployment easier. You can use the ",Object(i.b)("strong",{parentName:"p"},"Ubuntu")," template to start a basic ubuntu image and access it from the terminal."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Any web interface"),": You can easily run and access most programs with a web interface on the DSRI. You can use the template ",Object(i.b)("strong",{parentName:"p"},"Custom workspace")," if your application is exposed on port 8888. Otherwise visit the page ",Object(i.b)("a",{parentName:"p",href:"/docs/anatomy-of-an-application"},"Anatomy of a DSRI application")," for more details. "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Desktop interface"),": there is the possibility to start a container as a Linux operating system with a graphical desktop interface. It can be useful to deploy software like Matlab, but the setup can be a bit more complex. You will get an Ubuntu computer with a basic Desktop interface, running on the DSRI, that you can access directly in your web browser. The desktop interface is accessed through a web application by using noVNC, which exposes the VNC connection without needing a VNC client."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"More applications")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"You can also find more documentation on the different applications that can be deployed from the DSRI under ",Object(i.b)("strong",{parentName:"p"},"Deploy applications")," in the menu on the left."))),Object(i.b)("h2",{id:"start-your-workspace"},"Start your workspace"),Object(i.b)("p",null,"Once you chose your favorite way to run your experiments, you can click on the application you want to use for your workspace. Checkout the description to learn more details about the application that will be deployed. "),Object(i.b)("p",null,"Then click on ",Object(i.b)("strong",{parentName:"p"},"Instantiate Template"),", and fill the parameters, such as the password to access the web UI. Note that the application name needs to be unique in the project. Finally click on the ",Object(i.b)("strong",{parentName:"p"},"Create")," button."),Object(i.b)("img",{src:"/dsri-documentation/img/screenshot_template_configuration.png",alt:"Filter templates catalog",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(i.b)("p",null,"You should see your application in your project dashboard, it can take a few seconds to a few minutes to pull the docker image and start the application. "),Object(i.b)("p",null,"Once the application has started you will be able to access it by clicking on its circle, then click the ",Object(i.b)("strong",{parentName:"p"},"Route"),", that has been automatically generated for the web interface, in the Resources tab."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Check the workshop")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"For a more detailed tutorial, you can follow the ",Object(i.b)("a",{parentName:"p",href:"https://maastrichtu-ids.github.io/dsri-workshop-start-app/"},"workshop to start Data Science applications on the DSRI")))),Object(i.b)("h2",{id:"upload-your-code-and-data"},"Upload your code and data"),Object(i.b)("p",null,"We recommend you to use ",Object(i.b)("inlineCode",{parentName:"p"},"git")," to clone your project code in your workspace, as it helps sharing and managing the evolution of your project. "),Object(i.b)("p",null,"It will be preinstalled in most images, otherwise you can install it easily with ",Object(i.b)("inlineCode",{parentName:"p"},"apt-get install git")),Object(i.b)("p",null,"With web interface like JupyterLab, VisualStudio Code and Rstudio you can easily upload small and medium size files directly through the UI with a drag and drop."),Object(i.b)("p",null,"Otherwise you can use the terminal, install the ",Object(i.b)("inlineCode",{parentName:"p"},"oc")," client, and use the ",Object(i.b)("inlineCode",{parentName:"p"},"oc cp")," or ",Object(i.b)("inlineCode",{parentName:"p"},"oc rsync")," commands to upload large files to your workspace on the DSRI. See the Upload data page for more details."),Object(i.b)("h2",{id:"install-your-dependencies"},"Install your dependencies"),Object(i.b)("p",null,"Once the workspace is started, you can install the different dependencies you need to run your experiments."),Object(i.b)("p",null,"It is recommended to save all the commands you used to install the different requirements in a script (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"install.sh"),"). This will insure you can reinstall the environment easily and faithfully if the container is restarted. You can also use them to create a Docker image with everything prepared for your application."),Object(i.b)("p",null,"Most containers for science are based on debian/ubuntu, so you can install new packages with ",Object(i.b)("inlineCode",{parentName:"p"},"apt-get"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"apt-get update\napt-get install -y build-essentials wget curl\n")),Object(i.b)("h2",{id:"run-your-code"},"Run your code"),Object(i.b)("p",null,"You can use your web interface to run your code as you like to do: notebooks, rstudio, execute via VSCode"),Object(i.b)("p",null,"Note that for jobs which are running for a long time the web UI is not always the best solution, e.g. Jupyter notebooks can be quite instable when running a 30 min codeblock."),Object(i.b)("p",null,"A quick solution for that is to run your code in scripts, using the bash terminal. You can use the ",Object(i.b)("inlineCode",{parentName:"p"},"nohup")," prefix, and ",Object(i.b)("inlineCode",{parentName:"p"},"&")," suffix to run your script in the background, so that you can even disconnect, and come back later to check the results and logs."),Object(i.b)("p",null,"For example with a python script, you would do:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"nohup python my_script.py &\n")),Object(i.b)("p",null,"The script will run in the background, and all terminal output will be stored in the file ",Object(i.b)("inlineCode",{parentName:"p"},"nohup.out")),Object(i.b)("p",null,"You can also check if the process is currently running by typing ",Object(i.b)("inlineCode",{parentName:"p"},"ps aux")," or ",Object(i.b)("inlineCode",{parentName:"p"},"top")," "),Object(i.b)("p",null,"You can kill the process by getting the process ID (PID) using the previous commands, and then: ",Object(i.b)("inlineCode",{parentName:"p"},"kill -9 PID")),Object(i.b)("h2",{id:"stop-your-application"},"Stop your application"),Object(i.b)("p",null,"When you are not using your application anymore you can stop the pod. If you are using a Dynamic or Persistent storage you can restart the pod and continue working with all your data in the same state as you left it."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Do not waste resources")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Please think of stopping applications you are not using to avoid consuming unnecessary resources."))),Object(i.b)("p",null,"On the ",Object(i.b)("strong",{parentName:"p"},"Topology")," page click on the down arrow \u2b07\ufe0f next to the number of pods deployed."),Object(i.b)("img",{src:"/dsri-documentation/img/screenshot_scaledown_pod.png",alt:"Scale down pod",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(i.b)("p",null,"You can then restart the pod by clicking the up arrow \u2b06\ufe0f"),Object(i.b)("p",null,"Note that starting more than 1 pod will not increase the amount of resources you have access to, most of the time it will only waste resources and might ends up in weird behavior on your side. The web UI will randomly assign you to 1 of the pod started when you access it. This only works for clusters with multiple workers, such as Apache Flink and Spark. Or if you connect directly to each pod with the terminal to run different processes."),Object(i.b)("h2",{id:"optional-define-a-docker-image"},"Optional: define a docker image"),Object(i.b)("p",null,"Once you have tested your workspace and you know how to set it up it can be helpful to define a ",Object(i.b)("inlineCode",{parentName:"p"},"Dockerfile")," to build and publish a Docker image with everything directly installed (instead of installing your requirements after starting a generic workspace)"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Start from an existing generic Docker image, depending on the base technologies you need, such as Debian, Ubuntu, Python, JupyterLab, VisualStudio Code, RStudio..."),Object(i.b)("li",{parentName:"ol"},"Add your source code in the Docker image using ",Object(i.b)("inlineCode",{parentName:"li"},"ADD . .")," or ",Object(i.b)("inlineCode",{parentName:"li"},"COPY . .")),Object(i.b)("li",{parentName:"ol"},"Install dependencies (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"RUN apt-get install gfortran"),")"),Object(i.b)("li",{parentName:"ol"},"Define which command to run when starting the container (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},'ENTRYPOINT["jupyter", "lab"]'),")")),Object(i.b)("p",null,"Here is a simple example ",Object(i.b)("inlineCode",{parentName:"p"},"Dockerfile")," for a python application:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dockerfile"},'# The base image to start from, choose the one with everything you need installed\nFROM python:3.8\n\n# Change the user and working directory to make sure we are using root\nUSER root\nWORKDIR /root\n\n# Install additional packages\nRUN apt-get update && \\\n    apt-get install build-essentials\n\n# This line will copy all files and folder that are in the same folder as the Dockerfile (usually the code you want to run in the container)\nADD . . \n\n# This line will install all the python packages described in the requirements.txt of your source code\nRUN pip install -r requirements.txt && \\\n    pip install notebook jupyterlab\n\n# Command to run when the container is started, here it starts JupyterLab as a service\nENTRYPOINT [ "jupyter", "lab" ]\n')),Object(i.b)("p",null,"Here are some examples of ",Object(i.b)("inlineCode",{parentName:"p"},"Dockerfile")," for various type of web applications:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/MaastrichtU-IDS/jupyterlab/blob/main/Dockerfile"},"Custom JupyterLab")," based on the official ",Object(i.b)("a",{parentName:"li",href:"https://github.com/jupyter/docker-stacks"},"jupyter/docker-stacks")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/MaastrichtU-IDS/rstudio/blob/main/Dockerfile"},"Custom RStudio")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/MaastrichtU-IDS/code-server/blob/main/Dockerfile"},"VisualStudio Code server")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/MaastrichtU-IDS/knowledge-collaboratory-api/blob/master/Dockerfile"},"Python web app"))),Object(i.b)("p",null,"See the guide to ",Object(i.b)("a",{parentName:"p",href:"/docs/guide-publish-image"},"Publish a Docker image")," for more details on this topic."))}u.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,h=u["".concat(r,".").concat(b)]||u[b]||d[b]||i;return n?o.a.createElement(h,c(c({ref:t},l),{},{components:n})):o.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);