"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[7731],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(r),h=o,d=m["".concat(p,".").concat(h)]||m[h]||u[h]||a;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7993:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(7462),o=(r(7294),r(3905)),a=r(4996);const i={id:"leavingTraces",title:"Leaving Traces (formerly Creating Milestones)",slug:"dapps/leavingTraces"},s=void 0,p={unversionedId:"leavingTraces",id:"leavingTraces",title:"Leaving Traces (formerly Creating Milestones)",description:"Welcome! If you are super new to Giveth, join the #\ud83d\udd28contribute channel on Discord. You can introduce yourself and ask questions there! This is a living document and will change as bugs are fixed and features added to the DApp.",source:"@site/dapps/leavingTraces.md",sourceDirName:".",slug:"/dapps/leavingTraces",permalink:"/dapps/leavingTraces",draft:!1,editUrl:"https://github.com/giveth/giveth-docs/edit/master/dapps/leavingTraces.md",tags:[],version:"current",lastUpdatedBy:"mitch",lastUpdatedAt:1641567780,formattedLastUpdatedAt:"Jan 7, 2022",frontMatter:{id:"leavingTraces",title:"Leaving Traces (formerly Creating Milestones)",slug:"dapps/leavingTraces"},sidebar:"dapps",previous:{title:"Getting your project on TRACE",permalink:"/dapps/makeTraceableProject"},next:{title:"Technical White Paper",permalink:"/technicalWhitePaper"}},c={},l=[{value:"Leaving Traces is one of the most integral features of Giveth TRACE.",id:"leaving-traces-is-one-of-the-most-integral-features-of-giveth-trace",level:3}],u={toc:l};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Welcome! If you are super new to Giveth, join the ",(0,o.kt)("a",{parentName:"em",href:"https://discord.gg/qf7XZ48gCU"},"#\ud83d\udd28contribute")," channel on Discord. You can introduce yourself and ask questions there! This is a living document and will change as bugs are fixed and features added to the DApp.")),(0,o.kt)("h3",{id:"leaving-traces-is-one-of-the-most-integral-features-of-giveth-trace"},"Leaving Traces is one of the most integral features of Giveth TRACE."),(0,o.kt)("p",null,"As part of our ongoing commitment to transparency Traces, formerly known as Milestones, represent how users can record their work or progress and submit proposals requesting compensation."),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"1.")," Go to ",(0,o.kt)("a",{parentName:"p",href:"https://trace.giveth.io"},"Giveth TRACE")," and select which campaign your Trace is for."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," From the campaign page, click ",(0,o.kt)("em",{parentName:"p"},"\u201cCreate New\u201d"),". You have four options on the following page: ",(0,o.kt)("strong",{parentName:"p"},"Payment"),", ",(0,o.kt)("strong",{parentName:"p"},"Bounty"),", ",(0,o.kt)("strong",{parentName:"p"},"Expense"),", ",(0,o.kt)("strong",{parentName:"p"},"Milestone"),", choose which is most applicable to the form of compensation you're proposing."),(0,o.kt)("img",{id:"contentimg",alt:"Trace Options",src:(0,a.Z)("img/content/trace/typesofTraces.png")}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.")," Fill in the following form with the details of your Trace. Your Title should be clear and descriptive. If you chose ",(0,o.kt)("em",{parentName:"p"},"Payment")," or ",(0,o.kt)("em",{parentName:"p"},"Expense"),'  add the Currency type, Amount and Date, if applicable, otherwise select "',(0,o.kt)("em",{parentName:"p"},"No limits"),'".'),(0,o.kt)("img",{id:"contentimg",alt:"Trace Options",src:(0,a.Z)("img/content/trace/tracesDescription.png")}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4.")," From this point on, consider copying all of your Trace text to a place where you keep your own records. If your reviewer declines to review this milestone, or if it gets caught in the process for any reason, you will have to re-propose the milestone anew."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5."),' In the "Description" text field below add more details. Include proof of work or expenses. You can link to github pages, other documents you worked on, or upload photos of receipts. Show your calculations if any.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"6.")," Add a photo for your milestone. It can be related to the work, or not!"),(0,o.kt)("img",{id:"contentimg",alt:"Trace Options",src:(0,a.Z)("img/content/trace/tracePictureSelect.png")}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"7.")," From ",(0,o.kt)("strong",{parentName:"p"},"Payment Options")," select how you wish to be compensated. Choose from the cryptocurrency options available and provide an address for which you wish to be sent payment. You can also be awesome and give 3% of your amount received to Giveth to keep the platform running(optional)!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"8.")," If at step #2 you chose a ",(0,o.kt)("em",{parentName:"p"},"Bounty")," or a ",(0,o.kt)("em",{parentName:"p"},"Milestone")," you have the option to set a Reviewer. Think about who will be the best for the job. The Reviewer is responsible for ensuring that all steps in the Trace have been completed and accomplished before the compensation should be paid out. If possible, choose a different person than the campaign manager. Having the campaign manager, reviewer, and proposer (you) be 3 different people helps ensure against mistakes being overlooked, but the most important thing is that the people approving your Trace understand the work."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"9.")," Click \u201c",(0,o.kt)("em",{parentName:"p"},"Propose"),"\u201d and now monitor your Trace\u2019s progress from the \u201c",(0,o.kt)("em",{parentName:"p"},"My Milestones"),"\u201d (NEEDS TO BE UPDATED) page. Once your campaign manager approves it, it\u2019s status will read \u201cIn Progress.\u201d It\u2019s now your turn to mark it complete, which will push it to the reviewer and status says \u201cNeeds Review.\u201d If any of these processes are moving slowly or you notice it went backwards from \u201cNeeds Review\u201d to \u201cIn Progress,\u201d (this is how it will look to you if the reviewer rejects the milestone) check in with your reviewer."))}m.isMDXComponent=!0}}]);