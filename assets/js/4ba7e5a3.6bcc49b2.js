"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9735],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:100,sidebar_label:"How to contribute",title:"How to contribute"},o=void 0,l={unversionedId:"contribute",id:"contribute",title:"How to contribute",description:"This documentation project is powered by Docusaurus and maintained on GitHub",source:"@site/docs/contribute.md",sourceDirName:".",slug:"/contribute",permalink:"/docs/contribute",draft:!1,editUrl:"https://github.com/MarketSquare/robotframeworkguides/docs/contribute.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100,sidebar_label:"How to contribute",title:"How to contribute"},sidebar:"tutorialSidebar",previous:{title:"Create And Release Libraries",permalink:"/docs/extending_robot_framework/releasing_your_own_libraries"},next:{title:"DataDriven Tests",permalink:"/docs/datadriven"}},s={},u=[{value:"Branches",id:"branches",level:2},{value:"Folders",id:"folders",level:2},{value:"Docs",id:"docs",level:3},{value:"Static Files (e.g. images)",id:"static-files-eg-images",level:2},{value:"Run the development server",id:"run-the-development-server",level:2},{value:"Create Build and Push",id:"create-build-and-push",level:2}],p={toc:u};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This documentation project is powered by ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus")," and maintained on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MarketSquare/robotframeworkguides"},"GitHub")),(0,r.kt)("p",null,"The basic steps to contribute to the project are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fork the project on GitHub"),(0,r.kt)("li",{parentName:"ul"},"Clone the repository locally"),(0,r.kt)("li",{parentName:"ul"},"Install the project dependencies via ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install")),(0,r.kt)("li",{parentName:"ul"},"Update existing documentation files with the new content or add new files"),(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/installation#running-the-development-server"},"Development Server")," to see changes in real time on ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:3000"},"localhost")),(0,r.kt)("li",{parentName:"ul"},"Build static html files with ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run build")),(0,r.kt)("li",{parentName:"ul"},"Test the build locally with ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run serve")),(0,r.kt)("li",{parentName:"ul"},"Commit the changes to the repository"),(0,r.kt)("li",{parentName:"ul"},"Push the changes to GitHub (only the changed .md files and other static files - ",(0,r.kt)("strong",{parentName:"li"},"Do Not push the built .html files"),")"),(0,r.kt)("li",{parentName:"ul"},"Build and Deployment will be handled by GitHub Actions")),(0,r.kt)("h1",{id:"github-repository"},"GitHub Repository"),(0,r.kt)("h2",{id:"branches"},"Branches"),(0,r.kt)("p",null,"There are two branches in the project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"main")," is the default branch and is used to maintain the documentation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gh-pages")," is only used for the deployment of the ",(0,r.kt)("inlineCode",{parentName:"li"},".html")," documentation to GitHub Pages")),(0,r.kt)("h2",{id:"folders"},"Folders"),(0,r.kt)("h3",{id:"docs"},"Docs"),(0,r.kt)("p",null,"Docs are written in Markdown and are stored ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MarketSquare/robotframeworkguides/tree/main/website/docs"},"here")),(0,r.kt)("p",null,"The following attributes can be used to customize the page, e.g. the position on the sidebar, the title and the sidebar label:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"---\nsidebar_position: 2\nsidebar_label: How to contribute\ntitle: How to contribute\n---\n")),(0,r.kt)("p",null,"Folders will added to the sidebar automatically.\nYou can use a ",(0,r.kt)("inlineCode",{parentName:"p"},"_category_.json")," file to customize the sidebar label and the position of the folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "label": "Getting Started",\n  "position": 3\n}\n')),(0,r.kt)("h2",{id:"static-files-eg-images"},"Static Files (e.g. images)"),(0,r.kt)("p",null,"Static files (like images) are stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"website/static")," folder ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MarketSquare/robotframeworkguides/tree/main/website/static"},"here"),(0,r.kt)("br",{parentName:"p"}),"\n","They will be automatically included in the built and will be accessible via the ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," path (e.g. images are accessible via ",(0,r.kt)("inlineCode",{parentName:"p"},"/img/robotframeworkguides_logo.png"),")"),(0,r.kt)("h1",{id:"updating-documentation"},"Updating Documentation"),(0,r.kt)("h2",{id:"run-the-development-server"},"Run the development server"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to directory containing the ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," file"),(0,r.kt)("li",{parentName:"ul"},"Download dependencies via ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install")),(0,r.kt)("li",{parentName:"ul"},"Run the development server via ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run start")),(0,r.kt)("li",{parentName:"ul"},"Open the browser and navigate to ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3000")),(0,r.kt)("li",{parentName:"ul"},"Make changes to the documentation files and check the changes in real time")),(0,r.kt)("p",null,"Changes are visible in real time in the browser.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"Development Server",src:n(9710).Z,width:"1418",height:"975"})),(0,r.kt)("h2",{id:"create-build-and-push"},"Create Build and Push"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run the build via ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run build")),(0,r.kt)("li",{parentName:"ul"},"Test the build locally with ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run serve")),(0,r.kt)("li",{parentName:"ul"},"Open the browser and navigate to ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3000")," to see the build"),(0,r.kt)("li",{parentName:"ul"},"Commit the changes to the repository"),(0,r.kt)("li",{parentName:"ul"},"Push the changes to GitHub (only the changed .md files and other static files - ",(0,r.kt)("strong",{parentName:"li"},"Do Not push the built .html files"),")")))}d.isMDXComponent=!0},9710:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dev_server-991c744caad6f7ab5fa5e5ce3199a97c.png"}}]);