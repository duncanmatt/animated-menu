(self.webpackChunkanimated_menu_tutorial=self.webpackChunkanimated_menu_tutorial||[]).push([[314],{"./src/components/Header/Header.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ShowNav:()=>ShowNav,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_ShowNav$parameters,_ShowNav$parameters2,_Users_matt_dev_animated_menu_tutorial_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_Users_matt_dev_animated_menu_tutorial_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_Users_matt_dev_animated_menu_tutorial_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_Users_matt_dev_animated_menu_tutorial_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_Users_matt_dev_animated_menu_tutorial_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_Users_matt_dev_animated_menu_tutorial_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"components/Header/Header",component:__webpack_require__("./src/components/Header/Header.tsx").Z,tags:["autodocs"]};var _play,Default={tags:["autodocs"]},ShowNav={tags:["autodocs"],play:(_play=(0,_Users_matt_dev_animated_menu_tutorial_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_Users_matt_dev_animated_menu_tutorial_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee(_ref){var canvasElement,canvas,menuToggle;return _Users_matt_dev_animated_menu_tutorial_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return canvasElement=_ref.canvasElement,canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_2__.uh)(canvasElement),menuToggle=canvas.getByRole("button"),_context.next=5,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_2__.mV.click(menuToggle,{delay:300});case 5:return _context.next=7,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_2__.mV.click(menuToggle,{delay:300});case 7:case"end":return _context.stop()}}),_callee)}))),function play(_x){return _play.apply(this,arguments)})};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  tags: ['autodocs']\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),ShowNav.parameters=_objectSpread(_objectSpread({},ShowNav.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ShowNav$parameters=ShowNav.parameters)||void 0===_ShowNav$parameters?void 0:_ShowNav$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  tags: ['autodocs'],\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const menuToggle = canvas.getByRole('button');\n    await userEvent.click(menuToggle, {\n      delay: 300\n    });\n    await userEvent.click(menuToggle, {\n      delay: 300\n    });\n  }\n}"},null===(_ShowNav$parameters2=ShowNav.parameters)||void 0===_ShowNav$parameters2||null===(_ShowNav$parameters2=_ShowNav$parameters2.docs)||void 0===_ShowNav$parameters2?void 0:_ShowNav$parameters2.source)})})},"./src/components/Controls/Controls.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var __jsx=__webpack_require__("./node_modules/next/dist/compiled/react/index.js").createElement,Controls=function Controls(_ref){var menuStatus=_ref.menuStatus,handleMenu=_ref.handleMenu;return __jsx("ul",{className:"navControls"},__jsx("li",{className:"navControl"},__jsx("button",{role:"button","data-open":"".concat(menuStatus),onClick:handleMenu,className:"menuToggle"})))};Controls.displayName="Controls",Controls.__docgenInfo={description:"",methods:[],displayName:"Controls",props:{menuStatus:{required:!0,tsType:{name:"boolean"},description:""},handleMenu:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{name:"event",type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]}}],return:{name:"void"}}},description:""}}};const __WEBPACK_DEFAULT_EXPORT__=Controls;try{Controls.displayName="Controls",Controls.__docgenInfo={description:"",displayName:"Controls",props:{menuStatus:{defaultValue:null,description:"",name:"menuStatus",required:!0,type:{name:"boolean"}},handleMenu:{defaultValue:null,description:"",name:"handleMenu",required:!0,type:{name:"(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Controls/Controls.tsx#Controls"]={docgenInfo:Controls.__docgenInfo,name:"Controls",path:"src/components/Controls/Controls.tsx#Controls"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Header/Header.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_NavMenu_NavMenu__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/NavMenu/NavMenu.tsx"),_Controls_Controls__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Controls/Controls.tsx"),next_link__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Header=function Header(){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),menuActive=_useState[0],setMenuActive=_useState[1];return __jsx("nav",{className:"headerWrapper"},__jsx("header",{className:"header"},__jsx("div",{className:"headerInner"},__jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default(),{href:"/",className:"logo"},__jsx("span",{className:"headerLogo"},"LOGO")),__jsx(_Controls_Controls__WEBPACK_IMPORTED_MODULE_2__.Z,{handleMenu:function toggleMenu(event){setMenuActive(!menuActive)},menuStatus:menuActive}))),__jsx(_NavMenu_NavMenu__WEBPACK_IMPORTED_MODULE_1__.Z,{active:menuActive,resetMenu:function resetMenu(event){setMenuActive(!1)}}))};Header.displayName="Header",Header.__docgenInfo={description:"",methods:[],displayName:"Header"};const __WEBPACK_DEFAULT_EXPORT__=Header},"./src/components/NavMenu/NavMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var __jsx=__webpack_require__("./node_modules/next/dist/compiled/react/index.js").createElement,NavMenu=function NavMenu(_ref){var active=_ref.active,resetMenu=_ref.resetMenu;return __jsx("nav",{"data-active":active,className:"navMenu"},__jsx("div",{className:"navMenuInner"},__jsx("ul",{className:"navMenuLinks"},__jsx("li",null,__jsx("a",{onClick:resetMenu,href:"#content"},"Link 1")),__jsx("li",null,__jsx("a",{onClick:resetMenu,href:"#content"},"Link 2")),__jsx("li",null,__jsx("a",{onClick:resetMenu,href:"#content"},"Link 3")))))};NavMenu.displayName="NavMenu",NavMenu.__docgenInfo={description:"",methods:[],displayName:"NavMenu",props:{active:{required:!0,tsType:{name:"boolean"},description:""},resetMenu:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLAnchorElement>) => void",signature:{arguments:[{name:"event",type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLAnchorElement>",elements:[{name:"HTMLAnchorElement"}]}}],return:{name:"void"}}},description:""}}};const __WEBPACK_DEFAULT_EXPORT__=NavMenu;try{NavMenu.displayName="NavMenu",NavMenu.__docgenInfo={description:"",displayName:"NavMenu",props:{active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"boolean"}},resetMenu:{defaultValue:null,description:"",name:"resetMenu",required:!0,type:{name:"(event: MouseEvent<HTMLAnchorElement, MouseEvent>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/NavMenu/NavMenu.tsx#NavMenu"]={docgenInfo:NavMenu.__docgenInfo,name:"NavMenu",path:"src/components/NavMenu/NavMenu.tsx#NavMenu"})}catch(__react_docgen_typescript_loader_error){}},"?4f7e":()=>{}}]);