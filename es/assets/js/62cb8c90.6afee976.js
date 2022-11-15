"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[9569],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={id:"installGIVeconomy",title:"Instalando el Front-end de GIVeconomy",slug:"dapps/installGIVeconomy"},l=void 0,i={unversionedId:"installGIVeconomy",id:"installGIVeconomy",title:"Instalando el Front-end de GIVeconomy",description:"Puedes encontrar el repositorio del front-end contiene el GIVeconomy en GIThub https://github.com/Giveth/liquidity-mining-dapp.",source:"@site/i18n/es/docusaurus-plugin-content-docs-dapps/current/installGIVeconomy.md",sourceDirName:".",slug:"/dapps/installGIVeconomy",permalink:"/es/dapps/installGIVeconomy",draft:!1,editUrl:"https://github.com/giveth/giveth-docs/edit/master/dapps/installGIVeconomy.md",tags:[],version:"current",lastUpdatedBy:"Mitch",lastUpdatedAt:1657905390,formattedLastUpdatedAt:"15 jul 2022",frontMatter:{id:"installGIVeconomy",title:"Instalando el Front-end de GIVeconomy",slug:"dapps/installGIVeconomy"},sidebar:"dapps",previous:{title:"Proceso de Desarrollo",permalink:"/es/dapps/developmentProcess"},next:{title:"Gu\xeda de prueba de GIVeconomy",permalink:"/es/dapps/testingGIVeconomy"}},p={},s=[{value:"Pre-Requisitos",id:"pre-requisitos",level:2},{value:"Para Empezar",id:"para-empezar",level:2},{value:"Variables de entorno",id:"variables-de-entorno",level:3},{value:"Leer M\xe1s",id:"leer-m\xe1s",level:2},{value:"Implementar en Vercel",id:"implementar-en-vercel",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Puedes encontrar el repositorio del front-end contiene el ",(0,a.kt)("a",{parentName:"p",href:"https://giveth.io"},"GIVeconomy")," en GIThub ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Giveth/liquidity-mining-dapp"},"https://github.com/Giveth/liquidity-mining-dapp"),"."),(0,a.kt)("p",null,"Esto es ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js")," un proyecto iniciado con ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/vercel/next.js/tree/canary/packages/create-next-app"},(0,a.kt)("inlineCode",{parentName:"a"},"create-next-app")),"."),(0,a.kt)("h2",{id:"pre-requisitos"},"Pre-Requisitos"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Yarn"),(0,a.kt)("li",{parentName:"ul"},"npm"),(0,a.kt)("li",{parentName:"ul"},"T\xfas propios nodos ",(0,a.kt)("a",{parentName:"li",href:"https://infura.io/"},"Infura")," para Kovan Network y Gnosis Chain (anteriormente xDai Network)"),(0,a.kt)("li",{parentName:"ul"},"T\xfa editor de c\xf3digo favorito (Recomendamos VSCode)")),(0,a.kt)("h2",{id:"para-empezar"},"Para Empezar"),(0,a.kt)("p",null,"Primero deber\xe1s obtener una copia local en t\xfa m\xe1quina. Clona el repositorio de github en tu computadora."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Consigue clonarlo aqu\xed -> git@github.com:Giveth/liquidity-mining-dapp.git\n")),(0,a.kt)("p",null,":::Info"),(0,a.kt)("h3",{id:"variables-de-entorno"},"Variables de entorno"),(0,a.kt)("p",null,"Copia ",(0,a.kt)("inlineCode",{parentName:"p"},".env.example")," en ",(0,a.kt)("inlineCode",{parentName:"p"},".env.local")," y establezca los valores para sus nodos Infura, as\xed como su clave API\n:::"),(0,a.kt)("p",null,"Luego, para ejecutar el servidor localmente:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n# or\nyarn dev\n")),(0,a.kt)("p",null,"Abre ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," con tu navegador para ver el resultado. \xa1Abre tu editor de c\xf3digo y estar\xe1s listo para comenzar!"),(0,a.kt)("h2",{id:"leer-m\xe1s"},"Leer M\xe1s"),(0,a.kt)("p",null,"Para obtener m\xe1s informaci\xf3n sobre Next.js, eche un vistazo a los siguientes recursos:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nextjs.org/docs"},"Documentaci\xf3n Next.js")," - Obtenga informaci\xf3n sobre las funciones y la API de Next.js."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nextjs.org/learn"},"Aprende Next.js")," - Tutorial interactivo de Next.js.")),(0,a.kt)("p",null,"Puedes darle un vistazo a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/vercel/next.js/"},"El repositorio Next.js de Github")," - \xa1Tus comentarios y contribuciones son bienvenidas!"),(0,a.kt)("h2",{id:"implementar-en-vercel"},"Implementar en Vercel"),(0,a.kt)("p",null,"La forma m\xe1s f\xe1cil de implementar su aplicaci\xf3n Next.js es usar la ",(0,a.kt)("a",{parentName:"p",href:"https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme"},"Plataforma Vercel")," De los creadores de Next.js."),(0,a.kt)("p",null,"Echa un vistazo a nuestro ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/deployment"},"Documentaci\xf3n de implementaci\xf3n de Next.js")," para m\xe1s detalles."))}u.isMDXComponent=!0}}]);