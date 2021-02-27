(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{100:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return u})),r.d(e,"metadata",(function(){return c})),r.d(e,"rightToc",(function(){return s})),r.d(e,"default",(function(){return p}));var o=r(3),n=r(7),i=(r(0),r(109)),a=r(112),u={id:"torusonramp",title:"Donating with Fiat via the Torus on-ramp"},c={unversionedId:"torusonramp",id:"torusonramp",isDocsHomePage:!1,title:"Donating with Fiat via the Torus on-ramp",description:"This guide will take you through the steps of donating your fiat currency using Torus. How this works is that you'll use a third party payment provider to send your fiat to Torus which will 'top-up' your Torus wallet with your chosen cryptocurrency. That cryptocurrency that was converted from fiat will then be donated to the project you've selected. There are fees associated with this conversion from Torus as well as the third party provider that you choose. We'll walk you through the steps but depending on your native currency, the payment provider you use and the crypto you're converting to, things might look a bit different.",source:"@site/guides/torusonramp.md",slug:"/torusonramp",permalink:"/guides/torusonramp",editUrl:"https://github.com/giveth/giveth-docs/edit/master/guides/torusonramp.md",version:"current",lastUpdatedBy:"Mitch",lastUpdatedAt:1614277442,sidebar:"guides",previous:{title:"How do I donate to a Project?",permalink:"/guides/projectdonating"},next:{title:"Donating with Metamask",permalink:"/guides/donatingmetamask"}},s=[],l={rightToc:s};function p(t){var e=t.components,r=Object(n.a)(t,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,r,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This guide will take you through the steps of donating your fiat currency using Torus. How this works is that you'll use a third party payment provider to send your fiat to Torus which will 'top-up' your Torus wallet with your chosen cryptocurrency. That cryptocurrency that was converted from fiat will then be donated to the project you've selected. There are fees associated with this conversion from Torus as well as the third party provider that you choose. We'll walk you through the steps but depending on your native currency, the payment provider you use and the crypto you're converting to, things might look a bit different."),Object(i.b)("p",null,"Click Donate to the project, choose your Torus wallet."),Object(i.b)("img",{alt:"Donating to the Project",src:Object(a.a)("img/content/projectselect.png")}),Object(i.b)("p",null,"In the window that pops up to make your transaction it will say ",Object(i.b)("em",{parentName:"p"},"'Insufficient Funds'")," let's fix that. At the bottom of that same pop-up window click ",Object(i.b)("inlineCode",{parentName:"p"},"TOP UP"),"."),Object(i.b)("img",{alt:"Top up Torus Wallet",src:Object(a.a)("img/content/torustopup.png")}),Object(i.b)("p",null,"From there you'll get a list of third party payment providers, look through the fees and currencies they support, choose the best match for you."),Object(i.b)("img",{alt:"Select Payment Provider",src:Object(a.a)("img/content/selectprovider.png")}),Object(i.b)("p",null,"On the following screen enter the amount of fiat you would like to donate, note that the estimate of fees will reflect here depending on the payment provider you selected. "),Object(i.b)("img",{alt:"Enter fiat amount to donate",src:Object(a.a)("img/content/torusramp.png")}),Object(i.b)("p",null,"After that you'll be redirected to the website of the payment provider you selected, follow the prompts which will be different depending on which provider you chose."),Object(i.b)("p",null,"An example from the Ramp Network:"),Object(i.b)("img",{alt:"Ramp Network Example",src:Object(a.a)("img/content/paymentmethod.png")}),Object(i.b)("p",null," Once you've completed that you'll be taken back to the Torus top-up window. You should see your funds in there. Take a second to confirm the amount to be donating, if it looks good then hit confirm. "),Object(i.b)("p",null,"You can follow up to watch the transaction being confirmed on the block explorer by clicking on ",Object(i.b)("inlineCode",{parentName:"p"},"View transaction details"),". From this point your donation should be done! Nice work!"))}p.isMDXComponent=!0},109:function(t,e,r){"use strict";r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return f}));var o=r(0),n=r.n(o);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},i=Object.keys(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=n.a.createContext({}),l=function(t){var e=n.a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):u(u({},e),t)),r},p=function(t){var e=l(t.components);return n.a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},h=n.a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,a=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),p=l(r),h=o,f=p["".concat(a,".").concat(h)]||p[h]||d[h]||i;return r?n.a.createElement(f,u(u({ref:e},s),{},{components:r})):n.a.createElement(f,u({ref:e},s))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,a=new Array(i);a[0]=h;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:o,a[1]=u;for(var s=2;s<i;s++)a[s]=r[s];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},112:function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return a}));var o=r(22),n=r(113);function i(){var t=Object(o.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,r=void 0===e?"/":e,i=t.url;return{withBaseUrl:function(t,e){return function(t,e,r,o){var i=void 0===o?{}:o,a=i.forcePrependBaseUrl,u=void 0!==a&&a,c=i.absolute,s=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if(Object(n.b)(r))return r;if(u)return e+r;var l=r.startsWith(e)?r:e+r.replace(/^\//,"");return s?t+l:l}(i,r,t,e)}}}function a(t,e){return void 0===e&&(e={}),(0,i().withBaseUrl)(t,e)}},113:function(t,e,r){"use strict";function o(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!o(t)}r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return n}))}}]);