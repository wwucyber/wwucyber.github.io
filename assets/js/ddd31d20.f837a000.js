"use strict";(self.webpackChunkcybersite=self.webpackChunkcybersite||[]).push([[7741],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=s,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5017:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(7462),s=n(3366),r=(n(7294),n(3905)),i=["components"],o={sidebar_position:3,title:"NMAP",author:"nathan"},l=void 0,c={unversionedId:"cheatsheet/Windows+Linux/nmap",id:"cheatsheet/Windows+Linux/nmap",title:"NMAP",description:"You Must Know Your Assets To Defend Them",source:"@site/docs/cheatsheet/Windows+Linux/nmap.md",sourceDirName:"cheatsheet/Windows+Linux",slug:"/cheatsheet/Windows+Linux/nmap",permalink:"/docs/cheatsheet/Windows+Linux/nmap",editUrl:"https://github.com/wwucyber/wwucybersite/edit/main/cybersite/docs/cheatsheet/Windows+Linux/nmap.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"NMAP",author:"nathan"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/cheatsheet/intro"},next:{title:"Bash",permalink:"/docs/cheatsheet/Linux/bash"}},p=[{value:"Description:",id:"description",children:[],level:2},{value:"Installation",id:"installation",children:[{value:"Ubuntu/Apt Based Systems:",id:"ubuntuapt-based-systems",children:[],level:3},{value:"Windows:",id:"windows",children:[],level:3}],level:2},{value:"Most Common Commands:",id:"most-common-commands",children:[{value:"Comprehensive Scan",id:"comprehensive-scan",children:[{value:"TCP Scan Top 1000 ports, use NSE to identify services (-sV), use NSE default scripts (-sC), force scan without ping check (-Pn), output scan in all formats (-oA), and show verbosity as its being ran (-v)",id:"tcp-scan-top-1000-ports-use-nse-to-identify-services--sv-use-nse-default-scripts--sc-force-scan-without-ping-check--pn-output-scan-in-all-formats--oa-and-show-verbosity-as-its-being-ran--v",children:[],level:4}],level:3},{value:"Comprehensive UDP Scan (same as above but UDP)",id:"comprehensive-udp-scan-same-as-above-but-udp",children:[],level:3}],level:2},{value:"Basic Commands:",id:"basic-commands",children:[{value:"Simple Scan Single IP Address",id:"simple-scan-single-ip-address",children:[],level:3},{value:"Switch Scan To UDP",id:"switch-scan-to-udp",children:[],level:3},{value:"Simple Scan IP Range",id:"simple-scan-ip-range",children:[],level:3}],level:2},{value:"Utility Switches",id:"utility-switches",children:[{value:"Display Verbosity",id:"display-verbosity",children:[],level:3},{value:"Display Help",id:"display-help",children:[],level:3},{value:"Exclude a Host",id:"exclude-a-host",children:[],level:3},{value:"Scan Range Of Ports",id:"scan-range-of-ports",children:[],level:3}],level:2},{value:"Output Formats",id:"output-formats",children:[{value:"Output Scan in &quot;Normal&quot; Format",id:"output-scan-in-normal-format",children:[],level:3},{value:"Output Scan in XML Format",id:"output-scan-in-xml-format",children:[],level:3},{value:"Output Scan in Greppable Format",id:"output-scan-in-greppable-format",children:[],level:3},{value:"Output Scan in All Formats",id:"output-scan-in-all-formats",children:[{value:"References:",id:"references",children:[],level:4}],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"You Must Know Your Assets To Defend Them"))),(0,r.kt)("h2",{id:"description"},"Description:"),(0,r.kt)("p",null,"NMAP is the widely used and established network scanning utility. It's used to get a picture of what systems are on a network and what services are running on them. It also has an in-depth scripting engine called NSE (NMAP Scripting Engine) which will be used in many commands below. It even has a GUI counterpart called ",(0,r.kt)("strong",{parentName:"p"},"zenmap")," that we will ",(0,r.kt)("strong",{parentName:"p"},"not")," be covering."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"ubuntuapt-based-systems"},"Ubuntu/Apt Based Systems:"),(0,r.kt)("p",null,"If your apt repo is configured with the correct packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install nmap\n")),(0,r.kt)("p",null,"If not run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt-get update \nsudo apt-get install nmap\n")),(0,r.kt)("h3",{id:"windows"},"Windows:"),(0,r.kt)("p",null,"Download packaged executable from"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"https://nmap.org/dist/nmap-7.92-setup.exe\n")),(0,r.kt)("p",null,"Execute it and navigate to the location you installed it to in terminal."),(0,r.kt)("p",null,"Execute commands using ",(0,r.kt)("inlineCode",{parentName:"p"},"nmap.exe")," in that folder. You can also add that executable to PATH to skip moving to the install location each time."),(0,r.kt)("h2",{id:"most-common-commands"},"Most Common Commands:"),(0,r.kt)("h3",{id:"comprehensive-scan"},"Comprehensive Scan"),(0,r.kt)("h4",{id:"tcp-scan-top-1000-ports-use-nse-to-identify-services--sv-use-nse-default-scripts--sc-force-scan-without-ping-check--pn-output-scan-in-all-formats--oa-and-show-verbosity-as-its-being-ran--v"},"TCP Scan Top 1000 ports, use NSE to identify services (-sV), use NSE default scripts (-sC), force scan without ping check (-Pn), output scan in all formats (-oA), and show verbosity as its being ran (-v)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nmap -sC -sV -Pn -v -oA OUTPUT_FILE TARGET_IP\n")),(0,r.kt)("h3",{id:"comprehensive-udp-scan-same-as-above-but-udp"},"Comprehensive UDP Scan (same as above but UDP)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nmap -sU -sC -sV -Pn -v -oA OUTPUT_FILE TARGET_IP\n")),(0,r.kt)("h2",{id:"basic-commands"},"Basic Commands:"),(0,r.kt)("h3",{id:"simple-scan-single-ip-address"},"Simple Scan Single IP Address"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nmap TARGET_IP\n")),(0,r.kt)("h3",{id:"switch-scan-to-udp"},"Switch Scan To UDP"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nmap -sU TARGET_IP\n")),(0,r.kt)("h3",{id:"simple-scan-ip-range"},"Simple Scan IP Range"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nmap FIRST_IP-LAST_IP\n")),(0,r.kt)("h2",{id:"utility-switches"},"Utility Switches"),(0,r.kt)("h3",{id:"display-verbosity"},"Display Verbosity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nmap -v\n")),(0,r.kt)("h3",{id:"display-help"},"Display Help"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nmap -h\n")),(0,r.kt)("h3",{id:"exclude-a-host"},"Exclude a Host"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nmap --exclude IP_ADDRESS\n")),(0,r.kt)("h3",{id:"scan-range-of-ports"},"Scan Range Of Ports"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nmap -p FIRST_PORT-LAST_PORT IP_ADDRESS\n")),(0,r.kt)("h2",{id:"output-formats"},"Output Formats"),(0,r.kt)("h3",{id:"output-scan-in-normal-format"},'Output Scan in "Normal" Format'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nmap -oN OUTPUT_FILE_NAME TARGET_IP\n")),(0,r.kt)("h3",{id:"output-scan-in-xml-format"},"Output Scan in XML Format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nmap -oX OUTPUT_FILE_NAME TARGET_IP\n")),(0,r.kt)("h3",{id:"output-scan-in-greppable-format"},"Output Scan in Greppable Format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nmap -oG OUTPUT_FILE_NAME TARGET_IP\n")),(0,r.kt)("h3",{id:"output-scan-in-all-formats"},"Output Scan in All Formats"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nmap -oA OUTPUT_FILE_NAME TARGET_IP\n")),(0,r.kt)("h4",{id:"references"},"References:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.stationx.net/nmap-cheat-sheet/"},"https://www.stationx.net/nmap-cheat-sheet/"))))}d.isMDXComponent=!0}}]);