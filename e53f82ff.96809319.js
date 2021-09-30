(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return l}));var o=n(3),a=n(7),i=(n(0),n(144)),r=["components"],s={id:"deploy-vscode",title:"VisualStudio Code"},c={unversionedId:"deploy-vscode",id:"deploy-vscode",isDocsHomePage:!1,title:"VisualStudio Code",description:"Start VisualStudio Code server",source:"@site/docs/deploy-vscode.md",slug:"/deploy-vscode",permalink:"/dsri-documentation/docs/deploy-vscode",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/deploy-vscode.md",version:"current",lastUpdatedBy:"Binosha",lastUpdatedAt:1632940838,sidebar:"docs",previous:{title:"RStudio",permalink:"/dsri-documentation/docs/deploy-rstudio"},next:{title:"Databases",permalink:"/dsri-documentation/docs/deploy-database"}},d=[{value:"Start VisualStudio Code server",id:"start-visualstudio-code-server",children:[]},{value:"Use Git in VSCode",id:"use-git-in-vscode",children:[]},{value:"VSCode for GPU",id:"vscode-for-gpu",children:[]}],p={rightToc:d};function l(e){var t=e.components,n=Object(a.a)(e,r);return Object(i.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"start-visualstudio-code-server"},"Start VisualStudio Code server"),Object(i.b)("p",null,"Start a VisualStudio Code server with the ",Object(i.b)("inlineCode",{parentName:"p"},"coder")," user, which has ",Object(i.b)("inlineCode",{parentName:"p"},"sudo")," privileges."),Object(i.b)("p",null,"You can deploy it using the ",Object(i.b)("strong",{parentName:"p"},"VisualStudio Code server")," solution in the ",Object(i.b)("a",{parentName:"p",href:"https://console-openshift-console.apps.dsri2.unimaas.nl/console/catalog"},"Catalog web UI")," (make sure the ",Object(i.b)("strong",{parentName:"p"},"Templates")," checkbox is checked)"),Object(i.b)("p",null,"Provide a few parameters, and instantiate the template. The DSRI will automatically create a persistent volume to store data you will put in the ",Object(i.b)("inlineCode",{parentName:"p"},"/home/coder/project")," folder. You can find the persistent volumes in the DSRI web UI, go to the ",Object(i.b)("strong",{parentName:"p"},"Administrator")," view > ",Object(i.b)("strong",{parentName:"p"},"Storage")," > ",Object(i.b)("strong",{parentName:"p"},"Persistent Volume Claims"),"."),Object(i.b)("img",{src:"/dsri-documentation/img/screenshot-deploy-vscode.png",alt:"Deploy VSCode",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Use Chrome")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Unfortunately, we recommend to ",Object(i.b)("strong",{parentName:"p"},"use Google Chrome")," web browser as pasting in the terminal (",Object(i.b)("inlineCode",{parentName:"p"},"ctrl + shift + v"),") might not work on Firefox"))),Object(i.b)("h2",{id:"use-git-in-vscode"},"Use Git in VSCode"),Object(i.b)("p",null,"The easiest way to login and clone a repository from GitHub is to use the built-in authentication system of VisualStudio Code, to do so click on ",Object(i.b)("strong",{parentName:"p"},"clone repository...")," in the ",Object(i.b)("strong",{parentName:"p"},"Welcome")," page, and follow the instructions in the top of the VisualStudio window."),Object(i.b)("p",null,"If this solution does not work for you, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"git")," from the terminal to clone the git repository with ",Object(i.b)("inlineCode",{parentName:"p"},"git clone"),". VisualStudio might ask you to login in the dialog box at the top of the page, enter your username and password when requested. For GitHub you might need to generate a token at ",Object(i.b)("a",{parentName:"p",href:"https://github.com/settings/tokens"},"https://github.com/settings/tokens")," to use as password."),Object(i.b)("p",null,"Once the repository cloned, you can use git from the VSCode web UI to manage your ",Object(i.b)("inlineCode",{parentName:"p"},"git")," repositories (add, commit, push changes), or in the terminal."),Object(i.b)("p",null,"Before committing to GitHub or GitLab, you might need to configure you username and email in VSCode terminal:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'git config --global user.name "Jean Dupont"\ngit config --global user.email jeandupont@gmail.com\n')),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Save your git password")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"You can run this command to ask git to save your password for 15min:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"git config credential.helper cache\n")),Object(i.b)("p",{parentName:"div"},"Or store the password in a plain text file:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"git config --global credential.helper 'store --file ~/.git-credentials'\n")))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Git tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"We recommend to use SSH instead of HTTPS connection when possible, checkout ",Object(i.b)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"},"here")," how to generate SSH keys and use them with your GitHub account."))),Object(i.b)("h2",{id:"vscode-for-gpu"},"VSCode for GPU"),Object(i.b)("p",null,"See the ",Object(i.b)("a",{parentName:"p",href:"/dsri-documentation/docs/deploy-on-gpu"},"Deploy on GPU")," page to deploy a VisualStudio Code server on GPU."))}l.isMDXComponent=!0},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),p=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=p(n),b=o,m=l["".concat(r,".").concat(b)]||l[b]||u[b]||i;return n?a.a.createElement(m,s(s({ref:t},d),{},{components:n})):a.a.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);