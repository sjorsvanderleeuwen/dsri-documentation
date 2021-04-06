(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(169)),i={id:"neuroscience",title:"Neuroscience research"},c={unversionedId:"neuroscience",id:"neuroscience",isDocsHomePage:!1,title:"Neuroscience research",description:"We are not expert in Neuroscience ourselves, please contact us if you see any improvements that could be made to this page, or if you need any help to get it working.",source:"@site/docs/deploy-neurodocker.md",slug:"/neuroscience",permalink:"/dsri-documentation/docs/neuroscience",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/deploy-neurodocker.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1617737045,sidebar:"docs",previous:{title:"OpenMPI",permalink:"/dsri-documentation/docs/catalog-openmpi"},next:{title:"Genomics",permalink:"/dsri-documentation/docs/catalog-genomics"}},s=[{value:"FreeSurfer and FSL",id:"freesurfer-and-fsl",children:[]},{value:"FreeSurfer and AFNI",id:"freesurfer-and-afni",children:[]},{value:"Deploy the generated Dockerfile",id:"deploy-the-generated-dockerfile",children:[]}],d={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Feedbacks welcome")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"We are not expert in Neuroscience ourselves, please contact us if you see any improvements that could be made to this page, or if you need any help to get it working."))),Object(o.b)("p",null,"The Neurodocker project helps you to create a Docker image with the Neuroscience softwares you need, such as FSL, FreeSurfer, AFNI or ANTs. "),Object(o.b)("p",null,"Checkout the Neurodocker documentation for more details: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ReproNim/neurodocker"},"https://github.com/ReproNim/neurodocker")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Examples")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"In this page we will show you how to generate a Docker image with popular Neuroscience research softwares installed such as FreeSurfer and FSL. Feel free to check the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ReproNim/neurodocker"},"Neurodocker documentation"),", and adapt the installation process to your needs."))),Object(o.b)("h2",{id:"freesurfer-and-fsl"},"FreeSurfer and FSL"),Object(o.b)("p",null,"Generate a ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile")," with:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"FreeSurfer 6.0.1"),Object(o.b)("li",{parentName:"ul"},"FSL 6.0.3")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"docker run --rm repronim/neurodocker:0.7.0 generate docker \\\n    --base debian:stretch --pkg-manager apt \\\n    --freesurfer version=6.0.1 --fsl version=6.0.3 > Dockerfile\n")),Object(o.b)("h2",{id:"freesurfer-and-afni"},"FreeSurfer and AFNI"),Object(o.b)("p",null,"Generate a ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile")," with:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"FreeSurfer 6.0.1"),Object(o.b)("li",{parentName:"ul"},"AFNI, R and Python3")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"docker run --rm repronim/neurodocker:0.7.0 generate docker \\\n    --base debian:stretch --pkg-manager apt \\\n    --afni version=latest install_r=true install_r_pkgs=true install_python3=true \\\n    --freesurfer version=6.0.1 > Dockerfile\n")),Object(o.b)("h2",{id:"deploy-the-generated-dockerfile"},"Deploy the generated Dockerfile"),Object(o.b)("p",null,"Before deploying the ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile")," to the DSRI you can open it, and add commands to install additional package you are interested in, such as nighres or nipype."),Object(o.b)("p",null,"Checkout the documentation to ",Object(o.b)("a",{parentName:"p",href:"https://maastrichtu-ids.github.io/dsri-documentation/docs/guide-dockerfile-to-openshift"},"deploy the ",Object(o.b)("inlineCode",{parentName:"a"},"Dockerfile")," on DSRI"),". "),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"UI with VNC")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Running a UI with VNC (e.g. FSLeyes) is still a work in progress. See ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ReproNim/neurodocker/issues/343"},"this issue for more details"),"."))))}l.isMDXComponent=!0},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),l=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return n?a.a.createElement(m,c(c({ref:t},d),{},{components:n})):a.a.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);