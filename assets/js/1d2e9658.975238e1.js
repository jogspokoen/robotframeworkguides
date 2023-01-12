"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[747],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7384:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const o={},i="DataDriven Tests",s={unversionedId:"datadriven",id:"datadriven",title:"DataDriven Tests",description:"Using DataDriven Syntax in Robot Framework",source:"@site/docs/datadriven.mdx",sourceDirName:".",slug:"/datadriven",permalink:"/docs/datadriven",draft:!1,editUrl:"https://github.com/MarketSquare/robotframeworkguides/docs/datadriven.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to contribute",permalink:"/docs/contribute"},next:{title:"Dealing with flaky tests",permalink:"/docs/flaky_tests"}},l={},d=[{value:"Using DataDriven Syntax in Robot Framework",id:"using-datadriven-syntax-in-robot-framework",level:2},{value:"DataDriven Syntax",id:"datadriven-syntax",level:3},{value:"Using DataDriver Library",id:"using-datadriver-library",level:3}],u={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"datadriven-tests"},"DataDriven Tests"),(0,n.kt)("h2",{id:"using-datadriven-syntax-in-robot-framework"},"Using DataDriven Syntax in Robot Framework"),(0,n.kt)("h3",{id:"datadriven-syntax"},"DataDriven Syntax"),(0,n.kt)("p",null,"Another style to write test cases is the data-driven approach where test cases use only one higher-level keyword, often created as a user keyword, that hides the actual test workflow. These tests are very useful when there is a need to test the same scenario with different input and/or output data. It would be possible to repeat the same keyword with every test, but the test template functionality allows specifying the keyword to use only once."),(0,n.kt)("p",null,"The test template functionality is implemented in Robot Framework using the DataDriver syntax. The DataDriver syntax is a special syntax that allows defining test templates and test data in the same file. The DataDriver syntax is enabled by default in Robot Framework, but it can be disabled by using the --no-dryrun command line option."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-robotframework"},"*** Settings ***\nTest Template    Login with invalid credentials should fail\n\n*** Test Cases ***                USERNAME         PASSWORD\nInvalid User Name                 invalid          ${VALID PASSWORD}\nInvalid Password                  ${VALID USER}    invalid\nInvalid User Name and Password    invalid          invalid\nEmpty User Name                   ${EMPTY}         ${VALID PASSWORD}\nEmpty Password                    ${VALID USER}    ${EMPTY}\nEmpty User Name and Password      ${EMPTY}         ${EMPTY}\n\n*** Keywords ***\nLogin with invalid credentials should fail\n    [Arguments]    ${username}    ${password}\n    Log Many    ${username}    ${password}\n")),(0,n.kt)("h3",{id:"using-datadriver-library"},"Using DataDriver Library"),(0,n.kt)("p",null,"The DataDriver library is a Robot Framework library that provides a keyword for reading test data from a CSV file. The DataDriver library is not included in the Robot Framework distribution, but it can be installed using pip."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pip install robotframework-datadriver\n")),(0,n.kt)("p",null,"A simple Test Suite which logs the username and password from the CSV file."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-robotframework"},"*** Settings ***\nLibrary           DataDriver\nTest Template     Login With User And Password\n\n*** Test Cases ***\nLogin with user ${username} and password ${password}    Default    UserData\n\n*** Keywords ***\nLogin With User And Password\n    [Arguments]    ${username}    ${password}\n    Log Many    ${username}    ${password}\n")),(0,n.kt)("p",null,"The CSV file contains the test data."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"*** Test Cases ***;${username};${password};[Tags];[Documentation]\nRight user empty pass;demo;${EMPTY};1;This is a test case documentation of the first one.\nRight user wrong pass;demo;FooBar;2,3,foo;This test case has the Tags 2,3 and foo\n;${EMPTY};mode;1,2,3,4;This test case has a generated name based on template name.\n;${EMPTY};${EMPTY};;\n;${EMPTY};FooBar;;\n;FooBar;mode;foo,1;\n;FooBar;${EMPTY};foo;\n;FooBar;FooBar;foo,2;\n")),(0,n.kt)("p",null,"Check the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Snooz82/robotframework-datadriver"},"DataDriver Library")," repository for more information."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Let me run it"),(0,n.kt)("iframe",{src:"https://robotframework.org/embed/?code-gh-url=https://github.com/MarketSquare/robotframeworkguides/tree/main/code-examples/datadriver",width:"100%",height:"600"})))}p.isMDXComponent=!0}}]);