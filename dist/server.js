module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_path__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_serve_favicon__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_serve_favicon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_serve_favicon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_cookie_parser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_body_parser__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_xtpl__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_xtpl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_xtpl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_serialize_javascript__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_pretty_error__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_pretty_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_pretty_error__);




var _this = this;

process.env.VUE_ENV = 'server';











var fs = __webpack_require__(10);
var createBundleRenderer = __webpack_require__(15).createBundleRenderer;
var bundlePath = __WEBPACK_IMPORTED_MODULE_3_path___default.a.resolve(__dirname, './server-bundle.js');
var renderer = createBundleRenderer(fs.readFileSync(bundlePath, 'utf-8'), {
	cache: __webpack_require__(11)({ max: 10000 })
});
var assets = __webpack_require__(3);

var app = __WEBPACK_IMPORTED_MODULE_5_express___default()();
app.set('views', __WEBPACK_IMPORTED_MODULE_3_path___default.a.resolve(__dirname, './views'));
app.set('view engine', 'xtpl');

app.use(__WEBPACK_IMPORTED_MODULE_6_serve_favicon___default()(__WEBPACK_IMPORTED_MODULE_3_path___default.a.resolve(__dirname, './public/logo.png')));
app.use(__WEBPACK_IMPORTED_MODULE_5_express___default.a.static(__WEBPACK_IMPORTED_MODULE_3_path___default.a.resolve(__dirname, 'public')));
app.use(__WEBPACK_IMPORTED_MODULE_7_cookie_parser___default()());
app.use(__WEBPACK_IMPORTED_MODULE_8_body_parser___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_8_body_parser___default.a.json());
app.get('*', function () {
	var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(req, res, next) {
		return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						try {
							(function () {
								var statusCode = 200;
								var data = {
									title: 'Vuepack-SSR',
									// description: '',
									// css: '',
									body: '',
									entry: assets.main.js
								};
								var context = { url: req.url };
								new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve) {
									renderer.renderToString(context, function (err, html) {
										if (err) {
											next(err);
										}
										data.body = html;
										resolve();
									});
								}).then(function () {
									data.initialState = __WEBPACK_IMPORTED_MODULE_10_serialize_javascript___default()(context.initialState, { isJSON: true });
									res.status(statusCode);
									res.render('index', data);
								});
							})();
						} catch (e) {
							next(err);
						}

					case 1:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, _this);
	}));

	return function (_x, _x2, _x3) {
		return _ref.apply(this, arguments);
	};
}());

var pe = new __WEBPACK_IMPORTED_MODULE_11_pretty_error___default.a();
pe.skipNodeFiles();
pe.skipPackage('express');

app.use(function (err, req, res, next) {
	console.log(pe.render(err));
	var statusCode = err.status || 500;
	res.status(statusCode);
	res.render('error', {
		title: 'Error',
		message: err.message,
		stack:  false ? '' : err.stack
	});
});

app.listen(__WEBPACK_IMPORTED_MODULE_4__config_js__["a" /* default */].port, function () {
	console.log('The server is running at http://localhost:' + __WEBPACK_IMPORTED_MODULE_4__config_js__["a" /* default */].port + '/');
});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);


const config = {

	// path
	path: {
		root: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_path__["resolve"])(__dirname),
		src: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_path__["join"])(__dirname, './src'),
		dist: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_path__["join"])(__dirname, './dist'),
		static: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_path__["join"])(__dirname, './dist/public')
	},

	// post-css
	AUTOPREFIXER_BROWSERS: [
		'Android 2.3',
		'Android >= 4',
		'Firefox >= 31',
		'Explorer >= 9',
		'Chrome >= 35',
		'iOS >= 7',
		'Opera >= 12',
		'Safari >= 7.1'
	],

	// server
	port: 5000,

	//mongoose
}

/* harmony default export */ exports["a"] = config;


/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("./assets");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("body-parser");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("cookie-parser");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("fs");

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("lru-cache");

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("pretty-error");

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = require("serialize-javascript");

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = require("serve-favicon");

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = require("vue-server-renderer");

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = require("xtpl");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map