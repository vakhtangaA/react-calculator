(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{11:function(_,e,t){"use strict";t.r(e);var s=t(1),a=t.n(s),i=t(5),c=t.n(i),l=(t(4),t(6)),r=t(0);c.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(l.a,{})}),document.getElementById("root"))},4:function(_,e,t){},6:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_vakho_Desktop_projects_react_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),_home_vakho_Desktop_projects_react_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),_home_vakho_Desktop_projects_react_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),_home_vakho_Desktop_projects_react_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(10),_home_vakho_Desktop_projects_react_calculator_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_styles_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(4),_styles_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_6__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__),App=function(_React$Component){Object(_home_vakho_Desktop_projects_react_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(App,_React$Component);var _super=Object(_home_vakho_Desktop_projects_react_calculator_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(App);function App(props){var _this;return Object(_home_vakho_Desktop_projects_react_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),_this=_super.call(this,props),_this.calculate=function(){var result=eval(_this.state.input);_this.setState({input:result})},_this.clear=function(){_this.setState({input:"0",count:"0",includesDecimal:!1})},_this.handleDecimal=function(_){_this.state.includesDecimal?(console.log("includes"),_this.setState((function(_){return{input:_.input}}))):_this.setState((function(e){return{input:e.input+_.target.value,includesDecimal:!0}}))},_this.display=function(_){if("0"===_this.state.count&&"0"===_.target.value)_this.setState({input:0});else if("0"===_this.state.count)_this.setState({input:_.target.value,count:1});else switch(_.target.value){case"+":case"*":case"/":_this.setState({includesDecimal:!1});var e=_this.state.input.toString().split(""),t=e.length;switch(e[t-1]){case"+":case"/":case"*":e.splice(t-1,1,_.target.value),_this.setState({input:e.join("")});break;case"-":switch(e[t-2]){case"+":case"/":case"*":case"-":e.splice(t-2,2,_.target.value),_this.setState({input:e.join("")});break;default:console.log("URAAA")}break;default:_this.setState((function(e){return{input:e.input+_.target.value}}))}break;case"-":_this.setState((function(e){return{input:e.input+_.target.value,includesDecimal:!1}}));break;default:_this.setState((function(e){return{input:e.input+_.target.value}}))}},_this.state={input:"0",count:"0",includesDecimal:!1},_this.clear=_this.clear.bind(Object(_home_vakho_Desktop_projects_react_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_this)),_this.display=_this.display.bind(Object(_home_vakho_Desktop_projects_react_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_this)),_this.calculate=_this.calculate.bind(Object(_home_vakho_Desktop_projects_react_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_this)),_this}return Object(_home_vakho_Desktop_projects_react_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:"container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{id:"display",className:"screen",children:this.state.input}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input",{id:"one",type:"button",className:"one",value:"1",onClick:this.display}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input",{id:"two",type:"button",className:"two",value:"2",onClick:this.display}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input",{id:"three",type:"button",className:"three",value:"3",onClick:this.display}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input",{id:"four",type:"button",className:"one",value:"4",onClick:this.display}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input",{id:"five",type:"button",className:"five",value:"5",onClick:this.display}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input",{id:"six",type:"button",className:"six",value:"6",onClick:this.display}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input",{id:"seven",type:"button",className:"seven",value:"7",onClick:this.display}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input",{id:"eight",type:"button",className:"eight",value:"8",onClick:this.display})," ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input",{id:"nine",type:"button",className:"nine",value:"9",onClick:this.display}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input",{id:"zero",type:"button",className:"zero",value:"0",onClick:this.display}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input",{id:"equals",type:"button",className:"equals",value:"=",onClick:this.calculate}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input",{id:"add",type:"button",className:"add",value:"+",onClick:this.display}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input",{id:"subtract",type:"button",className:"subtract",value:"-",onClick:this.display}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input",{id:"multiply",type:"button",className:"multiply",value:"*",onClick:this.display}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input",{id:"divide",type:"button",className:"divide",value:"/",onClick:this.display}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input",{id:"decimal",type:"button",className:"decimal",value:".",onClick:this.handleDecimal}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input",{id:"clear",type:"button",className:"clear",value:"clear",onClick:this.clear})]})}}]),App}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=App}},[[11,1,2]]]);
//# sourceMappingURL=main.82a2b0b4.chunk.js.map