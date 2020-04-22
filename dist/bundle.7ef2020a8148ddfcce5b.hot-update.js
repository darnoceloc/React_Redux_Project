webpackHotUpdate("bundle",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname, process, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\");\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _todos_TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos/TodoList */ \"./src/todos/TodoList.js\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"./node_modules/express/index.js\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"./node_modules/webpack/node_modules/path-browserify/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './src/template'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './src/server'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './assets/data.json'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    margin: 1rem;\\n    font-family: Arial, Helvetica, sans-serif;\\n    color: #222222;\\n    width: 100vw;\\n    height: 100vh;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\n\n\n\n\nvar AppContainer = styled.div(_templateObject());\n\nvar App = function App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_todos_TodoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n};\n\nvar App = express__WEBPACK_IMPORTED_MODULE_3___default()(); // Serving static files\n\nApp.use('/assets', express__WEBPACK_IMPORTED_MODULE_3___default.a[\"static\"](path__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(__dirname, 'assets')));\nApp.use('/media', express__WEBPACK_IMPORTED_MODULE_3___default.a[\"static\"](path__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(__dirname, 'media'))); // hide powered by express\n\nApp.disable('x-powered-by'); // start the server\n\nApp.listen(process.env.PORT || 3000);\nvar initialState = {\n  isFetching: false,\n  apps: !(function webpackMissingModule() { var e = new Error(\"Cannot find module './assets/data.json'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())\n}; // server rendered home page\n\nApp.get('/', function (req, res) {\n  var _ssr = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './src/server'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(initialState),\n      preloadedState = _ssr.preloadedState,\n      content = _ssr.content;\n\n  var response = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './src/template'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\"Server Rendered Page\", preloadedState, content);\n  res.setHeader('Cache-Control', 'assets, max-age=604800');\n  res.send(response);\n}); // Pure client side rendered page\n\nApp.get('/client', function (req, res) {\n  var response = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './src/template'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('Client Side Rendered page');\n  res.setHeader('Cache-Control', 'assets, max-age=604800');\n  res.send(response);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_1__[\"hot\"])(module)(App));\n/* WEBPACK VAR INJECTION */}.call(this, \"/\", __webpack_require__(/*! ./../node_modules/webpack/node_modules/process/browser.js */ \"./node_modules/webpack/node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ })

})