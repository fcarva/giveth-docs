"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[6296],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return n?o.createElement(h,l(l({ref:t},u),{},{components:n})):o.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var d=2;d<r;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6747:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],a={id:"dev-guidelines",title:"Developer Guidelines"},s=void 0,d={unversionedId:"dev-guidelines",id:"dev-guidelines",title:"Developer Guidelines",description:"Developers on Giveth are expected to follow these guidelines.",source:"@site/dapps/doc1c-developer-guidelines.md",sourceDirName:".",slug:"/dev-guidelines",permalink:"/dev-guidelines",editUrl:"https://github.com/giveth/giveth-docs/edit/master/dapps/doc1c-developer-guidelines.md",tags:[],version:"current",lastUpdatedBy:"divine-comedian",lastUpdatedAt:1624204074,formattedLastUpdatedAt:"6/20/2021",frontMatter:{id:"dev-guidelines",title:"Developer Guidelines"},sidebar:"dapps",previous:{title:"Testing Guidelines",permalink:"/dapps/testing-guidelines"},next:{title:"Installing Giveth TRACE for Local Development",permalink:"/dapps/TRACEinstallation"}},u=[{value:"Code quality",id:"code-quality",children:[],level:2},{value:"Linting",id:"linting",children:[],level:2},{value:"Test driven development",id:"test-driven-development",children:[],level:2},{value:"Gitflow",id:"gitflow",children:[{value:"Pull requests",id:"pull-requests",children:[],level:3}],level:2},{value:"Styling",id:"styling",children:[],level:2},{value:"Code conventions",id:"code-conventions",children:[],level:2}],p={toc:u};function c(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Developers on Giveth are expected to follow these guidelines."),(0,r.kt)("h2",{id:"code-quality"},"Code quality"),(0,r.kt)("p",null,"We take time to do things right, as we strive for excellence. "),(0,r.kt)("h2",{id:"linting"},"Linting"),(0,r.kt)("p",null,"We use StandardJS for all linting. All code should follow it's guidelines"),(0,r.kt)("h2",{id:"test-driven-development"},"Test driven development"),(0,r.kt)("h2",{id:"gitflow"},"Gitflow"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Commit messages"),"\nGit messages should ideally include an issue number and the title of the Issue in the commit title. For example '#235 White label Giveth Dapp - Remove search box'. Give as much detail as is reasonable in the body of the message."),(0,r.kt)("p",null,"We encourage you to clan up your git history, as much as possible before opening a pull request. You can squash consequtive commits if that makes sense, you can change older commit messages, quite easily inside of most GUI git tools."),(0,r.kt)("h3",{id:"pull-requests"},"Pull requests"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Checklist")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You should make sure there are no warnings, in the browser console, or the NodeJS console, before you open a pull request.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"master")," branch is locked and only for PR's that have been ",(0,r.kt)("strong",{parentName:"p"},"tested in staging")," and noncritical hotfixes like typo's after merging - ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," deploys to ",(0,r.kt)("a",{parentName:"p",href:"https://v2.giveth.io"},"https://v2.giveth.io")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"staging")," branch is the default branch where PR's should be directed to. A deploy preview by netlify is offered inside the Pull Request."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"New features")," should be pushed to a new branch named ",(0,r.kt)("strong",{parentName:"p"},"$featurename")," (No ",(0,r.kt)("strong",{parentName:"p"},"develop")," or ",(0,r.kt)("strong",{parentName:"p"},"release")," branches currently, but at least ",(0,r.kt)("strong",{parentName:"p"},"develop")," will be added in the future to have a proper staging environment) "),(0,r.kt)("h2",{id:"styling"},"Styling"),(0,r.kt)("p",null,"Styling should be done in cooperation with senior contributors so a minimum of new styles is introduced locally. As a rule of thumb: all styles that are used more than once or are not very specific to one component should be added in the ",(0,r.kt)("strong",{parentName:"p"},"Theme UI definition"),(0,r.kt)("inlineCode",{parentName:"p"},"src/gatsby-plugin-theme-ui/index.js")," whenever possible and additionally to a gatsby page we use to collect all defined styles ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/viewstyles.js")," to quickly check consistency.\nPlease refer to some examples in the code to see how we deal with styles. Local overrides and extensions should be done via ",(0,r.kt)("inlineCode",{parentName:"p"},"sx prop")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"emotionJS"),"."),(0,r.kt)("h2",{id:"code-conventions"},"Code conventions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"as mentioned above contributor code should be linted with StandardJS"),(0,r.kt)("li",{parentName:"ul"},"React components for into the folder ",(0,r.kt)("inlineCode",{parentName:"li"},"/src/components")," and component filenames should be written in Camel case.")))}c.isMDXComponent=!0}}]);