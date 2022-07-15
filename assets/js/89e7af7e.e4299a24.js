"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[9035],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(a),u=r,g=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3442:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),i=a(4996);const o={id:"entitiesAndRoles",title:"Giveth Entities and Roles",slug:"dapps/entitiesAndRoles"},l=void 0,s={unversionedId:"entitiesAndRoles",id:"entitiesAndRoles",title:"Giveth Entities and Roles",description:"Content and ideas have been modified from this excellent article \u201cAn Overview of the Giveth Donation Application\u201d authored by Kris Decoodt in 2017. Many things have been revised and modified since 2017. Here we breakdown the DApp as it is in 2022.",source:"@site/dapps/entitiesAndRoles.md",sourceDirName:".",slug:"/dapps/entitiesAndRoles",permalink:"/dapps/entitiesAndRoles",draft:!1,editUrl:"https://github.com/giveth/giveth-docs/edit/master/dapps/entitiesAndRoles.md",tags:[],version:"current",lastUpdatedBy:"Suga",lastUpdatedAt:1643966994,formattedLastUpdatedAt:"Feb 4, 2022",frontMatter:{id:"entitiesAndRoles",title:"Giveth Entities and Roles",slug:"dapps/entitiesAndRoles"},sidebar:"dapps",previous:{title:"Intro to Giveth TRACE",permalink:"/dapps/introTrace"},next:{title:"Getting your project on TRACE",permalink:"/dapps/makeTraceableProject"}},m={},c=[{value:"Roles",id:"roles",level:2},{value:"Website User",id:"website-user",level:3},{value:"How to become a Website User",id:"how-to-become-a-website-user",level:4},{value:"Power of a Website User",id:"power-of-a-website-user",level:4},{value:'<a name="giver">Giver</a>',id:"giver",level:3},{value:"How to become a Giver",id:"how-to-become-a-giver",level:4},{value:"Power of a Giver",id:"power-of-a-giver",level:4},{value:'<a name="communityManager">Community Manager</a> (formerly Delegate)',id:"community-manager-formerly-delegate",level:3},{value:"How to become a Community Manager",id:"how-to-become-a-community-manager",level:4},{value:"Power of a Community Manager",id:"power-of-a-community-manager",level:4},{value:'<a name="campaignManager">Campaign Manager</a>',id:"campaign-manager",level:3},{value:"How to become a Campaign Manager",id:"how-to-become-a-campaign-manager",level:4},{value:"Power of a Campaign Manager",id:"power-of-a-campaign-manager",level:4},{value:'<a name="campaignReviewer">Campaign Reviewer</a>',id:"campaign-reviewer",level:3},{value:"How to become a Campaign Reviewer",id:"how-to-become-a-campaign-reviewer",level:4},{value:"Power of a Campaign Reviewer",id:"power-of-a-campaign-reviewer",level:4},{value:'<a name="traceManager">Trace Manager</a> (formerly Milestone Manager)',id:"trace-manager-formerly-milestone-manager",level:3},{value:"How to become a Trace Manager",id:"how-to-become-a-trace-manager",level:4},{value:"Power of a Trace Manager",id:"power-of-a-trace-manager",level:4},{value:'<a name="traceReviewer">Trace Reviewer</a>',id:"trace-reviewer",level:3},{value:"Power of a Trace Reviewer",id:"power-of-a-trace-reviewer",level:4},{value:'<a name="recipient">Recipient</a>',id:"recipient",level:3},{value:"How to become a Recipient",id:"how-to-become-a-recipient",level:4},{value:"Power of a Recipient",id:"power-of-a-recipient",level:4},{value:"Latency",id:"latency",level:4},{value:"Locality of Roles",id:"locality-of-roles",level:4},{value:"Currency Flow",id:"currency-flow",level:3},{value:"Currency Flow on Giveth TRACE",id:"currency-flow-on-giveth-trace",level:6},{value:"Entities",id:"entities",level:2},{value:"Relationship between the DApp&#39;s Entities",id:"relationship-between-the-dapps-entities",level:5},{value:'<a name="communities">Communities</a>',id:"communities",level:3},{value:"<strong>State diagram for Community -&gt; Campaign delegation flow</strong>, showing how donations made to a DAC are delegated to a Campaign.",id:"state-diagram-for-community---campaign-delegation-flow-showing-how-donations-made-to-a-dac-are-delegated-to-a-campaign",level:5},{value:"<strong>State diagram for Community -&gt; Trace delegation flow</strong>, showing how donations made to a Community are delegated directly to a Trace.",id:"state-diagram-for-community---trace-delegation-flow-showing-how-donations-made-to-a-community-are-delegated-directly-to-a-trace",level:5},{value:'<a name="campaigns">Campaigns</a>',id:"campaigns",level:3},{value:"<strong>State diagram for donations made to Campaign.</strong>",id:"state-diagram-for-donations-made-to-campaign",level:5},{value:'<a name="traces">Traces</a>',id:"traces",level:3},{value:'<a name="traceTypes">Trace Entities</a>',id:"trace-entities",level:3},{value:"<strong>Milestones</strong>",id:"milestones",level:3},{value:"<strong>Bounties</strong>",id:"bounties",level:3},{value:"<strong>Expenses</strong>",id:"expenses",level:3},{value:"<strong>Payments</strong>",id:"payments",level:3},{value:"Notes:",id:"notes",level:3}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Content and ideas have been modified from this excellent article ",(0,r.kt)("a",{parentName:"em",href:"https://medium.com/giveth/what-is-the-future-of-giving-d50446b0a0e4"},"\u201cAn Overview of the Giveth Donation Application\u201d")," authored by Kris Decoodt in 2017. Many things have been revised and modified since 2017. Here we breakdown the DApp as it is in 2022.")),(0,r.kt)("p",null,"This document explains how different interactions within the Giveth DApp can be made. The goal is to provide a clear outline of the entities and roles within the Giveth TRACE DApp. This document has been tailored for several audiences and use cases as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Developers:")," can use this document as part of System Requirements."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Testers:")," can use this document to understand how the DApp should work in order to determine what behaviour is wrong and should be reported as a bug. This document is not a formal Test Case in SDLC (Software Development Life Cycle) but can still be used for guidance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"The Support Team:")," can use this document as a refererence to help new users who experience difficulties with the DApp."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"The End User:")," can use this document to gain a greater understanding of how the DApp works. However, foundational knowledge of Blockchain, Ethereum and Giveth is recommended.")),(0,r.kt)("h2",{id:"roles"},"Roles"),(0,r.kt)("p",null,"We have eight roles in Giveth TRACE. In this section we explain in-depth each role, their function, how to become one and the power each role has."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{href:"#giver"},(0,r.kt)("strong",null,"Giver"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{href:"#communityManager"},(0,r.kt)("strong",null,"Community Manager"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{href:"#campaignManager"},(0,r.kt)("strong",null,"Campaign Manager"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{href:"#campaignReviewer"},(0,r.kt)("strong",null,"Campaign Reviewer"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{href:"#traceManager"},(0,r.kt)("strong",null,"Trace Manager"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{href:"#traceReviewer"},(0,r.kt)("strong",null,"Trace Reviewer"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{href:"#recipient"},(0,r.kt)("strong",null,"Recipient"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{href:"#websiteUser"},(0,r.kt)("strong",null,"Website User")))),(0,r.kt)("h3",{id:"website-user"},"Website User"),(0,r.kt)("p",null,"This refers to any person who visits our website. Without registering as a user on Rinkeby they cannot interact with any Giveth entity nor make donations on Giveth TRACE."),(0,r.kt)("h4",{id:"how-to-become-a-website-user"},"How to become a Website User"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Anyone with the address of the Giveth TRACE website can become a User.")),(0,r.kt)("h4",{id:"power-of-a-website-user"},"Power of a Website User"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Browse through Communities, Campaigns and Traces."),(0,r.kt)("li",{parentName:"ul"},"Register a profile."),(0,r.kt)("li",{parentName:"ul"},"Edit their profile."),(0,r.kt)("li",{parentName:"ul"},"View someones else's profile."),(0,r.kt)("li",{parentName:"ul"},"Subscribe to a Community, Campaign or Trace.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"*Note:")," Most site actions require authentication through an Ethereum web wallet; currently Giveth TRACE only supports MetaMask.*"),(0,r.kt)("h3",{id:"giver"},(0,r.kt)("a",{name:"giver"},"Giver")),(0,r.kt)("p",null,"The term Giver describes anyone who uses our platform to give donations to a Community, Campaign or Trace. Givers can interact with all 3 entities but  are not explicitly part of any unless they choose to join a Community or assume another role as well."),(0,r.kt)("h4",{id:"how-to-become-a-giver"},"How to become a Giver"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Anyone with an Ethereum wallet can donate to a Community, Campaign, or Trace in the DApp and become a Giver.")),(0,r.kt)("h4",{id:"power-of-a-giver"},"Power of a Giver"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Accept or reject a delayed delegation from a Community or Campaign.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"*Note:"),' Givers can veto or "reject" a proposed Delegation within 3 days of the delegation proposal. This is referred to as a delegation "delay". After 3 days, the delayed delegation will be accepted by the DApp automatically.*'),(0,r.kt)("h3",{id:"community-manager-formerly-delegate"},(0,r.kt)("a",{name:"communityManager"},"Community Manager")," (formerly Delegate)"),(0,r.kt)("p",null,"A Community Manager is the registered user owning a Community. They can delegate the funds donated to their Communities. A delegation is a process, where the donation pledged to a Community is transferred to a Campaign or Trace. Once delegated, the Giver has 3 days to reject (or approve) the delegation. After that time, the money is auto-approved and locked in the Campaign or Trace to which the money was delegated."),(0,r.kt)("h4",{id:"how-to-become-a-community-manager"},"How to become a Community Manager"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A user can create a Community and become the Community Manager after being whitelisted by a DApp Admin.")),(0,r.kt)("h4",{id:"power-of-a-community-manager"},"Power of a Community Manager"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Edit the name, description, image, and link of their Community."),(0,r.kt)("li",{parentName:"ul"},"Give Community funds (via delayed delegation) to Campaigns, and Traces.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"*Note:")," In order to initiate a delayed delegation, the Community Manager should go to the Traces or Campaign page, and click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Delegate Funds")," button.*"),(0,r.kt)("h3",{id:"campaign-manager"},(0,r.kt)("a",{name:"campaignManager"},"Campaign Manager")),(0,r.kt)("p",null,"Campaign Managers are Giveth.io users who have chosen to make their project traceable and have passed the project verification process. The role of the Campaign Manager is to create Traces through which they can fund the work of people and the cost of resources behind the project."),(0,r.kt)("h4",{id:"how-to-become-a-campaign-manager"},"How to become a Campaign Manager"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verify their Giveth.io project and request to become traceable, upgrading to a Campaign on TRACE and becoming the Campaign Manager of said Campaign.")),(0,r.kt)("h4",{id:"power-of-a-campaign-manager"},"Power of a Campaign Manager"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Edit their Campaign."),(0,r.kt)("li",{parentName:"ul"},"Send Campaign funds (via delegation) to Traces within their Campaign."),(0,r.kt)("li",{parentName:"ul"},"Reject or accept proposed Traces to their Campaign."),(0,r.kt)("li",{parentName:"ul"},"Create or edit Traces in their own Campaign.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"*Note:")," A Trace has to belong to at least one Campaign and needs to be approved by the Campaign Manager.*"),(0,r.kt)("h3",{id:"campaign-reviewer"},(0,r.kt)("a",{name:"campaignReviewer"},"Campaign Reviewer")),(0,r.kt)("p",null,"Because donations to a Campaign are locked, a Campaign Reviewer role is critical to review and track the Campaign's progress. Campaign Reviewers have the responsiblity of checking the legitimacy of a Campaign and its Traces. They also have considerable power within a Campaign."),(0,r.kt)("h4",{id:"how-to-become-a-campaign-reviewer"},"How to become a Campaign Reviewer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Campaign Manager can assign a user to become a Campaign Reviewer.")),(0,r.kt)("h4",{id:"power-of-a-campaign-reviewer"},"Power of a Campaign Reviewer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reject or approve Completed Traces."),(0,r.kt)("li",{parentName:"ul"},"Cancel Traces within their Campaign."),(0,r.kt)("li",{parentName:"ul"},"Cancel a Campaign.")),(0,r.kt)("h3",{id:"trace-manager-formerly-milestone-manager"},(0,r.kt)("a",{name:"traceManager"},"Trace Manager")," (formerly Milestone Manager)"),(0,r.kt)("p",null,"Traces are the foundation of the Giveth system. Any registered user can propose a Trace to a Campaign. However, a Campaign Manager or Campaign Reviewer must approve the Trace proposed to their Campaign for it to become valid. Traces can represent several types of requests for funding. More info on ",(0,r.kt)("a",{href:"#traceTypes"},"types of Traces")," are detailed further in this document."),(0,r.kt)("h4",{id:"how-to-become-a-trace-manager"},"How to become a Trace Manager"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A user can propose a Trace to Campaign and become the Trace Manager.")),(0,r.kt)("h4",{id:"power-of-a-trace-manager"},"Power of a Trace Manager"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Edit their Trace."),(0,r.kt)("li",{parentName:"ul"},"In the case of creating a Bounty or Milestone, a Trace Manager can set a Trace Reviewer."),(0,r.kt)("li",{parentName:"ul"},"Mark a Trace as complete.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"*Note"),": A Trace can no longer be edited once it has received a delegation or donation.*"),(0,r.kt)("h3",{id:"trace-reviewer"},(0,r.kt)("a",{name:"traceReviewer"},"Trace Reviewer")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Trace Reviewer can be assigned by a Trace Manager.")),(0,r.kt)("h4",{id:"power-of-a-trace-reviewer"},"Power of a Trace Reviewer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reject or approve a completed Trace."),(0,r.kt)("li",{parentName:"ul"},"Cancel a Trace.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"*Note:")," In the case that a Trace is cancelled, the currency returns to the source, i.e. to the Giver for a donation or to the Community/Campaign for a delegation.*"),(0,r.kt)("h3",{id:"recipient"},(0,r.kt)("a",{name:"recipient"},"Recipient")),(0,r.kt)("p",null,"A Recipient is a registered user who will receive payment from their successfully completed Trace. In the majority of cases, the Recipient is also the Trace Manager as they are the one working on the Trace. However, in some cases the recipient is separate, such as for payments to a supplier or a Milestone for a Campaign."),(0,r.kt)("h4",{id:"how-to-become-a-recipient"},"How to become a Recipient"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Recipient can be designated by a Trace Manager; it can be the Trace Manager or another user.")),(0,r.kt)("h4",{id:"power-of-a-recipient"},"Power of a Recipient"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mark a Trace as complete."),(0,r.kt)("li",{parentName:"ul"},"Request payout of the Trace funds.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"*Note:")," In the case that the Trace has a Reviewer, collecting funds needs the Reviewer's approval.*"),(0,r.kt)("h4",{id:"latency"},"Latency"),(0,r.kt)("p",null,"Some actions need to be registered to the Ethereum blockchain network. Adding transactions to the blockchain does not happen immediately, so we observe a latency in some actions. This latency depends on the network conditions, for example traffic on the network."),(0,r.kt)("h4",{id:"locality-of-roles"},"Locality of Roles"),(0,r.kt)("p",null,"All roles have a limited scope and once an entity ceases to exist, so do the connected roles. Every Community contains exactly one Manager. Every Campaign has one Campaign Manager and one Campaign Reviewer. Every Trace has one Trace Manager, one Recipient and potentially one Reviewer. The Giver is not explicitly associated with any entity but may interact with all of them."),(0,r.kt)("img",{alt:"Relations between Communities, Campaigns and Traces",src:(0,i.Z)("img/content/trace/role-locality.svg")}),(0,r.kt)("h3",{id:"currency-flow"},"Currency Flow"),(0,r.kt)("p",null,"Giveth TRACE on a technical level is a system for managing currency. Terms referring to the movement of funds within the Giveth system are defined as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Donation:")," When a Giver sends funds from their wallet to a Trace, Campaign, or Community."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Collecting:"),' When the Recipient sends or "collects" funds from a Trace to their wallet.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Disbursing:")," When a Trace Manager sends funds from a Trace account to the Recipient's wallet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Delegation:")," When a Campaign Manager or Community Manager sends money from the Campaign or Community account to Trace account on behalf of the original Giver. A Giver can reject Delegation within 72 hours, after which the Currency transfer becomes irreversible."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Refund:")," A Giver who has contributed to a Community can withdraw their funds as long as they are not yet committed to a Campaign or Trace. A Giver contributing to a Campaign can withdraw their funds as long as they are not yet committed to a Trace.")),(0,r.kt)("img",{alt:"Currency Flow on Giveth TRACE",src:(0,i.Z)("img/content/trace/currencyFlow.svg")}),(0,r.kt)("h6",{id:"currency-flow-on-giveth-trace"},"Currency Flow on Giveth TRACE"),(0,r.kt)("h2",{id:"entities"},"Entities"),(0,r.kt)("p",null,"Giveth TRACE, on a technical level, is a system for managing currency. The DApp\u2019s entities are accounts to which people can deposit, transfer or withdraw currency. We have three entities on Giveth TRACE, ",(0,r.kt)("a",{href:"#communities"},(0,r.kt)("strong",{parentName:"p"},"Communities")),", ",(0,r.kt)("a",{href:"#campaigns"},(0,r.kt)("strong",{parentName:"p"},"Campaigns"))," and ",(0,r.kt)("a",{href:"#traces"},(0,r.kt)("strong",{parentName:"p"},"Traces")),". The relationship between them are defined in the chart below. Each entitity corresponds to one or more smart contracts."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"*Note:")," In Q1 2021 the Giveth team rebranded the entities ",(0,r.kt)("strong",{parentName:"p"},"DAC"),"s (Decentralized Altruistic Communities) to simply ",(0,r.kt)("strong",{parentName:"p"},"Communities"),", and ",(0,r.kt)("strong",{parentName:"p"},"Milestones")," to ",(0,r.kt)("strong",{parentName:"p"},"Traces"),".*"),(0,r.kt)("img",{alt:"Relationship between The DApp's Entities",src:(0,i.Z)("img/content/trace/relations.svg")}),(0,r.kt)("h5",{id:"relationship-between-the-dapps-entities"},"Relationship between the DApp's Entities"),(0,r.kt)("h3",{id:"communities"},(0,r.kt)("a",{name:"communities"},"Communities")),(0,r.kt)("p",null,"Communities, ",(0,r.kt)("strong",{parentName:"p"},"formerly known as DACs"),", are the most general entity in the Giveth System. The purpose of a Community is to unite Givers around a cause and provide them with the possibility to give money to a cause without having to do the research involved in finding the exact Campaign to contribute to. Any money donated to a Community can be retrieved by the Giver, however we strongly discourage Givers to do so. The funds remain in the Community until they are delegated to a Campaign or a Trace, or withdrawn by the Giver. ",(0,r.kt)("strong",{parentName:"p"},"Community Managers")," can support any Campaign or Trace by sending currency to the account of the recipient."),(0,r.kt)("img",{alt:"Community to Campaign delegation state diagram",src:(0,i.Z)("img/content/trace/dac-campaign-donation-statediagram.svg")}),(0,r.kt)("h5",{id:"state-diagram-for-community---campaign-delegation-flow-showing-how-donations-made-to-a-dac-are-delegated-to-a-campaign"},(0,r.kt)("strong",{parentName:"h5"},"State diagram for Community -> Campaign delegation flow"),", showing how donations made to a DAC are delegated to a Campaign."),(0,r.kt)("img",{alt:"Community to Trace delegation state diagram",src:(0,i.Z)("img/content/trace/dac-milestone-donation-statediagram.svg")}),(0,r.kt)("h5",{id:"state-diagram-for-community---trace-delegation-flow-showing-how-donations-made-to-a-community-are-delegated-directly-to-a-trace"},(0,r.kt)("strong",{parentName:"h5"},"State diagram for Community -> Trace delegation flow"),", showing how donations made to a Community are delegated directly to a Trace."),(0,r.kt)("h3",{id:"campaigns"},(0,r.kt)("a",{name:"campaigns"},"Campaigns")),(0,r.kt)("p",null,"Campaigns are in the center of the Giveth donation system. They are effectively tools to steer money towards the smallest entities, Traces. A Campaign can be supported by more than one Community or by no Community at all. Campaign co-owners can only accept or reject proposed Traces. ",(0,r.kt)("strong",{parentName:"p"},"Campaign Reviewers")," can cancel the Campaign if the Campaign is bad or no longer active."),(0,r.kt)("p",null,"Donations made to a Campaign are locked, and unless the Campaign gets cancelled, the Giver no longer has control over the donation. The reason we lock the donations is to give the people behind the Campaign some level of certainty that they can count on getting the pledged donations and pledge them to one of their Traces."),(0,r.kt)("img",{alt:"Campaign Donation state diagram",src:(0,i.Z)("img/content/trace/campaign-donation-statediagram.svg")}),(0,r.kt)("h5",{id:"state-diagram-for-donations-made-to-campaign"},(0,r.kt)("strong",{parentName:"h5"},"State diagram for donations made to Campaign.")),(0,r.kt)("h3",{id:"traces"},(0,r.kt)("a",{name:"traces"},"Traces")),(0,r.kt)("p",null,"The main building blocks of the DApp are Traces, ",(0,r.kt)("strong",{parentName:"p"},"formerly known as Milestones"),". A Trace is the only way by which funds can exit the Giveth system. Traces must be created inside of a Campaign. Compared to a Community or Campaign, Traces are more complex because more roles can interact with them."),(0,r.kt)("h3",{id:"trace-entities"},(0,r.kt)("a",{name:"traceTypes"},"Trace Entities")),(0,r.kt)("p",null,"To tailor Traces to meet the specific needs of Communities and Campaigns, there are certain rules that can be applied."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Capped Traces:")," The maximum currency which can be given to to the Trace is set. This maximum is called the cap."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Trace with Reviewer:")," The funds cannot be collected or disbursed from this Trace without confirmation by an assigned Trace Reviewer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Specify Currency Received:")," The Trace Creator is able to specify which of the whitelisted cryptocurrencies they would like to receive their funds in.")),(0,r.kt)("p",null,"Based on these rules we can have ",(0,r.kt)("em",{parentName:"p"},"four")," types of Traces with their own distinct properties: ",(0,r.kt)("strong",{parentName:"p"},"Milestones, Bounties, Expenses")," and ",(0,r.kt)("strong",{parentName:"p"},"Payments"),"."),(0,r.kt)("h3",{id:"milestones"},(0,r.kt)("strong",{parentName:"h3"},"Milestones")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important goals or events for a Campaign. Any funds collected in Milestones go to the Campaign that it is a part of.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The Lifecycle of Milestones in the DApp is as follows:")),(0,r.kt)("img",{alt:"Lifecycle of Milestones",src:(0,i.Z)("img/content/trace/milestone.png")}),(0,r.kt)("h3",{id:"bounties"},(0,r.kt)("strong",{parentName:"h3"},"Bounties")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"If a Campaign or Community needs to outsource work to be done, they can use a Bounty to compensate contributors for completing specific tasks.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The Lifecycle of Bounties is as follows:")),(0,r.kt)("img",{alt:"Lifecycle of Bounties",src:(0,i.Z)("img/content/trace/Bounty.png")}),(0,r.kt)("h3",{id:"expenses"},(0,r.kt)("strong",{parentName:"h3"},"Expenses")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"If there are recurring or singular expenses that were paid by a Campaign or Community Member, they can be tracked and reimbursed by this Trace.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The Lifecycle of Expenses is as follows:")),(0,r.kt)("img",{alt:"Lifecycle of Expenses",src:(0,i.Z)("img/content/trace/Expense.png")}),(0,r.kt)("h3",{id:"payments"},(0,r.kt)("strong",{parentName:"h3"},"Payments")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Payments are compensation to Campaign members for the work they have done. Payments can be uncapped or capped for the funding they can receive.")),(0,r.kt)("p",null," ",(0,r.kt)("em",{parentName:"p"},"The Lifecycle for Payments with NO cap is as follows:")),(0,r.kt)("img",{alt:"Lifecycle of Payments without Cap",src:(0,i.Z)("img/content/trace/paymentNoCap.png")}),(0,r.kt)("p",null," ",(0,r.kt)("em",{parentName:"p"},"The Lifecycle for Payments with a cap is as follows:")),(0,r.kt)("img",{alt:"Lifecycle of Payments with Cap",src:(0,i.Z)("img/content/trace/paymentWithCap.png")}),(0,r.kt)("p",null,"A breakdown of their functions can be summarized in the table below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Trace Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Funding is Capped"),(0,r.kt)("th",{parentName:"tr",align:null},"Specify Currency Received"),(0,r.kt)("th",{parentName:"tr",align:null},"Can Assign Reviewer"),(0,r.kt)("th",{parentName:"tr",align:null},"Currency Destination"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Milestone"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Campaign")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bounty"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Any Address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Expense"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Any Address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Payment NO Cap"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Any Address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Payment with Cap"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Any Address")))),(0,r.kt)("h3",{id:"notes"},"Notes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"In coding Entities are called ",(0,r.kt)("inlineCode",{parentName:"em"},"projects"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"When money goes from a Community to a Trace or Campaign, Giveth then connects the Community with that Campaign or Trace. This means that you will see that Campaign or Trace represented on the Community page.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"If a Trace/Campaign/Community is canceled, the funds are returned to the source contributor automatically.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Currency that goes to a Community is a loose commitment: at any point up until the moment funds are locked into a Campaign/Milestone, the Giver can decide to withdraw (refund) them.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Currency that went to a Campaign/Trace is fully committed, because Trace Managers and Campaigns Manager take actions based on these funds."))))}d.isMDXComponent=!0}}]);