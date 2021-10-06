(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{144:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,h=s["".concat(r,".").concat(d)]||s[d]||m[d]||i;return n?o.a.createElement(h,c(c({ref:t},p),{},{components:n})):o.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var p=2;p<i;p++)r[p]=n[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),o=n(7),i=(n(0),n(144)),r=["components"],c={id:"openshift-install",title:"Install the client"},l={unversionedId:"openshift-install",id:"openshift-install",isDocsHomePage:!1,title:"Install the client",description:"Install the OpenShift Command Line Interface (CLI): oc to access the DSRI from your computer's terminal.",source:"@site/docs/openshift-install.md",slug:"/openshift-install",permalink:"/dsri-documentation/docs/openshift-install",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/openshift-install.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1633541917,sidebar:"docs",previous:{title:"Start your workspace",permalink:"/dsri-documentation/docs/start-workspace"},next:{title:"Upload data",permalink:"/dsri-documentation/docs/openshift-load-data"}},p=[{value:"Install the <code>oc</code> client",id:"install-the-oc-client",children:[{value:"On Linux",id:"on-linux",children:[]},{value:"On Mac",id:"on-mac",children:[]},{value:"On Windows",id:"on-windows",children:[]}]},{value:"Login in the terminal with <code>oc</code>",id:"login-in-the-terminal-with-oc",children:[]}],b={rightToc:p};function s(e){var t=e.components,n=Object(o.a)(e,r);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Install the ",Object(i.b)("strong",{parentName:"p"},"OpenShift Command Line Interface (CLI)"),": ",Object(i.b)("inlineCode",{parentName:"p"},"oc")," to access the DSRI from your computer's terminal. "),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"oc")," CLI enables to perform operations on your applications deployed on the DSRI, such as:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Copy large files to or from the DSRI using ",Object(i.b)("inlineCode",{parentName:"li"},"oc cp")),Object(i.b)("li",{parentName:"ul"},"Connect to an application terminal using ",Object(i.b)("inlineCode",{parentName:"li"},"oc rsh")),Object(i.b)("li",{parentName:"ul"},"Get the applications running in your project with ",Object(i.b)("inlineCode",{parentName:"li"},"oc get pods"))),Object(i.b)("h2",{id:"install-the-oc-client"},"Install the ",Object(i.b)("inlineCode",{parentName:"h2"},"oc")," client"),Object(i.b)("h3",{id:"on-linux"},"On Linux"),Object(i.b)("p",null,"Download the ",Object(i.b)("inlineCode",{parentName:"p"},"oc")," and ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl")," Command Line Interface clients:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"wget https://mirror.openshift.com/pub/openshift-v4/clients/oc/latest/linux/oc.tar.gz && tar xvf oc.tar.gz\nsudo mv oc kubectl /usr/local/bin/\n")),Object(i.b)("h3",{id:"on-mac"},"On Mac"),Object(i.b)("p",null,"Use ",Object(i.b)("a",{parentName:"p",href:"https://brew.sh"},Object(i.b)("inlineCode",{parentName:"a"},"brew")),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"brew install openshift-cli\n")),Object(i.b)("p",null,"Or manually download the program and add it to your path:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Download ",Object(i.b)("a",{parentName:"p",href:"https://mirror.openshift.com/pub/openshift-v4/clients/oc/latest/macosx/oc.tar.gz"},"https://mirror.openshift.com/pub/openshift-v4/clients/oc/latest/macosx/oc.tar.gz"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Unzip the archive")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Move the ",Object(i.b)("inlineCode",{parentName:"p"},"oc")," binary to a directory on your PATH."),Object(i.b)("p",{parentName:"li"},"To check your ",Object(i.b)("inlineCode",{parentName:"p"},"PATH"),", open a terminal and execute the following command:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"echo $PATH\n")))),Object(i.b)("h3",{id:"on-windows"},"On Windows"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Create a folder for OpenShift in Program Files: ",Object(i.b)("inlineCode",{parentName:"li"},"C:\\Program Files (x86)\\OpenShift")),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("a",{parentName:"li",href:"https://mirror.openshift.com/pub/openshift-v4/clients/oc/latest/windows/oc.zip"},"here")," to download the ",Object(i.b)("inlineCode",{parentName:"li"},"oc")," tool ",Object(i.b)("inlineCode",{parentName:"li"},".zip")," file, and move it to ",Object(i.b)("inlineCode",{parentName:"li"},"C:\\Program Files (x86)\\OpenShift"),"."),Object(i.b)("li",{parentName:"ol"},"Extract the ",Object(i.b)("inlineCode",{parentName:"li"},".zip")," file."),Object(i.b)("li",{parentName:"ol"},"Next set the system ",Object(i.b)("strong",{parentName:"li"},"PATH")," environment variables for the directory containing the ",Object(i.b)("inlineCode",{parentName:"li"},"oc.exe")," file, which now resides in your newly created ",Object(i.b)("strong",{parentName:"li"},"OpenShift")," folder inside of ",Object(i.b)("inlineCode",{parentName:"li"},"C:\\Program Files (x86)\\OpenShift"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Open the Control Panel, and click on ",Object(i.b)("strong",{parentName:"li"},"System")),Object(i.b)("li",{parentName:"ol"},"Click on ",Object(i.b)("strong",{parentName:"li"},"Advance system settings")," on the left or open the ",Object(i.b)("strong",{parentName:"li"},"Advance")," tab of ",Object(i.b)("em",{parentName:"li"},"System Properties.")," "),Object(i.b)("li",{parentName:"ol"},"Click the button labeled ",Object(i.b)("strong",{parentName:"li"},"Environment Variables...")," at the bottom. "),Object(i.b)("li",{parentName:"ol"},"Look for the option in the ",Object(i.b)("strong",{parentName:"li"},"User variables")," section for ",Object(i.b)("strong",{parentName:"li"},"Path"),".")))),Object(i.b)("img",{class:"screenshot",src:"/dsri-documentation/img/OC_Path.png",alt:"Set OC Path",style:{zoom:"100%",maxHeight:"500px",maxWidth:"500px"}}),Object(i.b)("p",null,"This makes it easy to access the ",Object(i.b)("inlineCode",{parentName:"p"},"oc")," command line interface by simply opening up the ",Object(i.b)("strong",{parentName:"p"},"PowerShell")," and typing in the ",Object(i.b)("inlineCode",{parentName:"p"},"oc")," command, e.g.:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-powershell"},"oc version\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Official documentation")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"See the ",Object(i.b)("a",{parentName:"p",href:"https://docs.okd.io/latest/cli_reference/openshift_cli/getting-started-cli.html#installing-openshift-cli"},"official documentation to install the client")," if needed."))),Object(i.b)("h2",{id:"login-in-the-terminal-with-oc"},"Login in the terminal with ",Object(i.b)("inlineCode",{parentName:"h2"},"oc")),Object(i.b)("p",null,"To use the ",Object(i.b)("inlineCode",{parentName:"p"},"oc")," Command Line Interface, you will need to authenticate to the ",Object(i.b)("a",{parentName:"p",href:"https://console-openshift-console.apps.dsri2.unimaas.nl/console"},"DSRI")," in you terminal (edit it to use your username):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"oc login https://api.dsri2.unimaas.nl:6443 -u Your.Username\n")),Object(i.b)("p",null,"Otherwise try to use the token provided by the Web UI:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Go to the ",Object(i.b)("a",{parentName:"p",href:"https://console-openshift-console.apps.dsri2.unimaas.nl/console"},"DSRI web UI"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click on the ",Object(i.b)("strong",{parentName:"p"},"Copy Login Command")," button (in the top right of the page)."),Object(i.b)("img",{src:"/dsri-documentation/img/screenshot_copy_login.png",alt:"Deploy VSCode",style:{maxWidth:"100%",maxHeight:"100%"}})),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Paste the copied command in your terminal, and execute it to login with ",Object(i.b)("inlineCode",{parentName:"p"},"oc")," \ud83d\udd11"))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Login command")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The command should look like this:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"oc login https://api.dsri2.unimaas.nl:6443 --token=$GENERATED_TOKEN\n")))))}s.isMDXComponent=!0}}]);