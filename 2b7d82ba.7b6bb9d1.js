(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{140:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(n),h=r,d=b["".concat(i,".").concat(h)]||b[h]||p[h]||a;return n?o.a.createElement(d,s(s({ref:t},c),{},{components:n})):o.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=(n(0),n(140)),i=["components"],s={id:"workflows-github-actions",title:"Deploy GitHub Runners"},l={unversionedId:"workflows-github-actions",id:"workflows-github-actions",isDocsHomePage:!1,title:"Deploy GitHub Runners",description:"Deploy a GitHub Actions runner to run workflows simple to define using YAML, and hosted in your GitHub repository on the DSRI. This allows you to run larger workloads than on GitHub-hosted runners, which are limited to 7G RAM, 1 CPU and 6h per job.",source:"@site/docs/workflows-github-actions.md",slug:"/workflows-github-actions",permalink:"/dsri-documentation/docs/workflows-github-actions",editUrl:"https://github.com/MaastrichtU-IDS/dsri-documentation/edit/master/website/docs/workflows-github-actions.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1626264157,sidebar:"docs",previous:{title:"Introduction to workflows",permalink:"/dsri-documentation/docs/workflows-introduction"},next:{title:"Run Argo workflows",permalink:"/dsri-documentation/docs/workflows-argo"}},c=[{value:"Install the chart",id:"install-the-chart",children:[]},{value:"Deploy a Runner",id:"deploy-a-runner",children:[{value:"For an organization",id:"for-an-organization",children:[]},{value:"For a repository",id:"for-a-repository",children:[]}]},{value:"Define Actions to run on DSRI",id:"define-actions-to-run-on-dsri",children:[]},{value:"Uninstall the runner",id:"uninstall-the-runner",children:[]},{value:"See also",id:"see-also",children:[]}],u={rightToc:c};function b(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Deploy a GitHub Actions runner to run workflows simple to define using YAML, and hosted in your GitHub repository on the DSRI. This allows you to run larger workloads than on GitHub-hosted runners, which are limited to 7G RAM, 1 CPU and 6h per job."),Object(a.b)("p",null,"Here are some of the advantage of GitHub Actions:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A step can be any Bash command, or a reusable Action from the ",Object(a.b)("a",{parentName:"li",href:"https://github.com/marketplace/"},"GitHub Marketplace"),", which can be easily define from a Docker container, and share with your collaborators"),Object(a.b)("li",{parentName:"ul"},"Parallelization can easily be added manually or dynamically to up to 255 jobs"),Object(a.b)("li",{parentName:"ul"},"It provides a good logging system directly available in your repository on GitHub"),Object(a.b)("li",{parentName:"ul"},"Define triggers (on code push, cron job, manual request), and secrets (such as passwords) easily")),Object(a.b)("p",null,"For more informations about GitHub Actions workflows, go to ",Object(a.b)("a",{parentName:"p",href:"https://github.com/features/actions"},"https://github.com/features/actions")),Object(a.b)("h2",{id:"install-the-chart"},"Install the chart"),Object(a.b)("p",null,"You will need to have Helm installed on your computer to deploy a GitHub Actions Runner, see the ",Object(a.b)("a",{parentName:"p",href:"/docs/helm"},"Helm docs")," for more details."),Object(a.b)("p",null,"Install the Helm chart to be able to deploy the GitHub Actions Runner on the DSRI:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"helm repo add openshift-actions-runner https://redhat-actions.github.io/openshift-actions-runner-chart\nhelm repo update\n")),Object(a.b)("p",null,"Then create a GitHub Personal Access Token as per the instructions in the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/redhat-actions/openshift-actions-runner#pat-guidelines"},"runner image README"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"tl;dr:")," go to your Settings on GitHub: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/settings/tokens"},"https://github.com/settings/tokens"),", click the button to create a new token, give it a meaningful name (e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"DSRI Runner my-project"),"), and check the following permissions:"),Object(a.b)("p",null,"\u2705\ufe0f ",Object(a.b)("inlineCode",{parentName:"p"},"repo")," (maybe also ",Object(a.b)("inlineCode",{parentName:"p"},"workflow"),"?)"),Object(a.b)("p",null,"\u2705\ufe0f ",Object(a.b)("inlineCode",{parentName:"p"},"admin:org")," if the Runner is for an organization"),Object(a.b)("h2",{id:"deploy-a-runner"},"Deploy a Runner"),Object(a.b)("p",null,"Before deploying the runner, make sure you are in the project where you want to deploy it:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"oc project my-project\n")),Object(a.b)("h3",{id:"for-an-organization"},"For an organization"),Object(a.b)("p",null,"Deploy a runner available for all repositories of an organization (you can fine tune the access via GitHub Settings)"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Provide the token previously created, and the organization name")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'export GITHUB_PAT="TOKEN"\nexport GITHUB_OWNER=My-Org\n')),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Deploy the runner for the organization:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'helm install actions-runner openshift-actions-runner/actions-runner \\\n    --set-string githubPat=$GITHUB_PAT \\\n    --set-string githubOwner=$GITHUB_OWNER \\\n    --set runnerLabels="{ dsri, $GITHUB_OWNER }" \\\n    --set replicas=3 \\\n    --set serviceAccountName=anyuid \\\n    --set memoryRequest="512Mi" \\\n    --set memoryLimit="100Gi" \\\n    --set cpuRequest="100m" \\\n    --set cpuLimit="64"\n')),Object(a.b)("p",null,"You can also change the default runner image:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"    --set runnerImage=ghcr.io/vemonet/github-actions-conda-runner \\\n    --set runnerTag=latest\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Checkout ",Object(a.b)("a",{parentName:"p",href:"https://github.com/redhat-actions/openshift-actions-runner-chart/blob/main/values.yaml"},"all available parameters here"))),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Check the deployment:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"helm get manifest actions-runner | kubectl get -f -\n")),Object(a.b)("p",null,"Go to your organization Settings page on GitHub, then go to the ",Object(a.b)("strong",{parentName:"p"},"Actions")," tab, and scroll to the bottom. In the list of active runners you should see the runners you just deployed. "),Object(a.b)("h3",{id:"for-a-repository"},"For a repository"),Object(a.b)("p",null,"You can also deploy a runner for a specific repository:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'export GITHUB_PAT="TOKEN"\n# For an org runner, this is the org.\n# For a repo runner, this is the repo owner (org or user).\nexport GITHUB_OWNER=vemonet\n# For an org runner, omit this argument. \n# For a repo runner, the repo name.\nexport GITHUB_REPO=shapes-of-you\n')),Object(a.b)("p",null,"Deploy the runner:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'helm install actions-runner openshift-actions-runner/actions-runner \\\n    --set-string githubPat=$GITHUB_PAT \\\n    --set-string githubOwner=$GITHUB_OWNER \\\n    --set-string githubRepository=$GITHUB_REPO \\\n    --set runnerLabels="{ dsri, anything-helpful }"\n')),Object(a.b)("h2",{id:"define-actions-to-run-on-dsri"},"Define Actions to run on DSRI"),Object(a.b)("p",null,"You can now set GitHub Action workflows, in the ",Object(a.b)("inlineCode",{parentName:"p"},".github/workflows")," folder, to be run on this runner (the repository needs to be under the organization, or user you added the workflow to). The job will be sent to run on the DSRI:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},'jobs:\n    your-job:\n      runs-on: ["self-hosted", "dsri", "my-org" ]\n      steps: ...\n')),Object(a.b)("h2",{id:"uninstall-the-runner"},"Uninstall the runner"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"helm uninstall actions-runner\n")),Object(a.b)("h2",{id:"see-also"},"See also"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"GitHub runner chart repository: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/redhat-actions/openshift-actions-runner-chart"},"https://github.com/redhat-actions/openshift-actions-runner-chart"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Image for the runner: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/redhat-actions/openshift-actions-runner"},"https://github.com/redhat-actions/openshift-actions-runner"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"An action to automatically deploy a runner on a cluster (require to run openconnect to VPN first): ",Object(a.b)("a",{parentName:"p",href:"https://github.com/redhat-actions/openshift-actions-runner"},"https://github.com/redhat-actions/openshift-actions-runner")))))}b.isMDXComponent=!0}}]);