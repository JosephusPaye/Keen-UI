/*!
 * Keen UI v1.3.1 (https://github.com/JosephusPaye/keen-ui)
 * (c) 2020 Josephus Paye II
 * Released under the MIT License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["KeenUI"] = factory();
	else
		root["KeenUI"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 188);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiIcon_vue__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_39a27af7_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiIcon_vue__ = __webpack_require__(155);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(107)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiIcon_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_39a27af7_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiIcon_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiIcon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiIcon.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-39a27af7", Component.options)
  } else {
    hotAPI.reload("data-v-39a27af7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiRippleInk_vue__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ef65288_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiRippleInk_vue__ = __webpack_require__(166);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(118)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiRippleInk_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ef65288_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiRippleInk_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiRippleInk.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiRippleInk.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ef65288", Component.options)
  } else {
    hotAPI.reload("data-v-5ef65288", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultLang */
/* unused harmony export getDayFull */
/* unused harmony export getDayInitial */
/* unused harmony export getDayAbbreviated */
/* unused harmony export getMonthFull */
/* unused harmony export getMonthAbbreviated */
/* unused harmony export getDayOfMonth */
/* unused harmony export humanize */
/* unused harmony export clone */
/* unused harmony export moveToDayOfWeek */
/* unused harmony export isSameDay */
/* unused harmony export isBefore */
/* unused harmony export isAfter */
var defaultLang = {
    months: {
        full: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

        abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    days: {
        full: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

        abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

        initials: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    }
};

function pad(value, length) {
    while (value.length < length) {
        value = '0' + value;
    }

    return value;
}

function getDayFull(date) {
    var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLang;

    return lang.days.full[date.getDay()];
}

function getDayInitial(date) {
    var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLang;

    return lang.days.initials[date.getDay()];
}

function getDayAbbreviated(date) {
    var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLang;

    return lang.days.abbreviated[date.getDay()];
}

function getMonthFull(date) {
    var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLang;

    return lang.months.full[date.getMonth()];
}

function getMonthAbbreviated(date) {
    var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLang;

    return lang.months.abbreviated[date.getMonth()];
}

function getDayOfMonth(date) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { pad: true };

    var day = date.getDate().toString();
    return options.pad ? pad(day) : day;
}

function humanize(date) {
    var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLang;

    var days = lang.days.abbreviated;
    var months = lang.months.full;

    return days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
}

function clone(date) {
    return new Date(date.getTime());
}

function moveToDayOfWeek(date, dayOfWeek) {
    while (date.getDay() !== dayOfWeek) {
        date.setDate(date.getDate() - 1);
    }

    return date;
}

function isSameDay(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
}

function isBefore(date1, date2) {
    return date1.getTime() < date2.getTime();
}

function isAfter(date1, date2) {
    return date1.getTime() > date2.getTime();
}

/* harmony default export */ __webpack_exports__["a"] = {
    defaultLang: defaultLang,
    getDayFull: getDayFull,
    getDayInitial: getDayInitial,
    getDayAbbreviated: getDayAbbreviated,
    getMonthFull: getMonthFull,
    getMonthAbbreviated: getMonthAbbreviated,
    getDayOfMonth: getDayOfMonth,
    humanize: humanize,
    clone: clone,
    moveToDayOfWeek: moveToDayOfWeek,
    isSameDay: isSameDay,
    isBefore: isBefore,
    isAfter: isAfter
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiPopover_vue__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_48582497_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiPopover_vue__ = __webpack_require__(158);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(110)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiPopover_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_48582497_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiPopover_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiPopover.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiPopover.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48582497", Component.options)
  } else {
    hotAPI.reload("data-v-48582497", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var trim = /^\s+|\s+$/g;
var whitespace = /\s+/g;

function interpret(input) {
    return typeof input === 'string' ? input.replace(trim, '').split(whitespace) : input;
}

function classes(el) {
    if (isElement(el)) {
        return (el.getAttribute('class') || '').replace(trim, '').split(whitespace);
    }

    return [];
}

function set(el, input) {
    if (isElement(el)) {
        el.setAttribute('class', interpret(input).join(' '));
    }
}

function add(el, input) {
    var current = remove(el, input);
    var values = interpret(input);

    current.push.apply(current, values);
    set(el, current);

    return current;
}

function remove(el, input) {
    var current = classes(el);
    var values = interpret(input);

    values.forEach(function (value) {
        var i = current.indexOf(value);
        if (i !== -1) {
            current.splice(i, 1);
        }
    });

    set(el, current);

    return current;
}

function contains(el, input) {
    var current = classes(el);
    var values = interpret(input);

    return values.every(function (value) {
        return current.indexOf(value) !== -1;
    });
}

function isElement(o) {
    var elementObjects = (typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object';
    return elementObjects ? o instanceof HTMLElement : isElementObject(o);
}

function isElementObject(o) {
    return o && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && typeof o.nodeName === 'string' && o.nodeType === 1;
}

/* harmony default export */ __webpack_exports__["a"] = {
    add: add,
    remove: remove,
    contains: contains,
    has: contains,
    set: set,
    get: classes
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isObject */
/* harmony export (immutable) */ __webpack_exports__["b"] = looseEqual;
/* harmony export (immutable) */ __webpack_exports__["c"] = looseIndexOf;
/* harmony export (immutable) */ __webpack_exports__["a"] = startsWith;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function isObject(obj) {
    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
}

function looseEqual(a, b) {
    return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
}

function looseIndexOf(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (looseEqual(arr[i], val)) {
            return i;
        }
    }

    return -1;
}

function startsWith(string, query) {
    var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    return string.substr(position, query.length) === query;
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiButton_vue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_663a40a0_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiButton_vue__ = __webpack_require__(167);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(119)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiButton_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_663a40a0_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiButton_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiButton.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiButton.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-663a40a0", Component.options)
  } else {
    hotAPI.reload("data-v-663a40a0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiProgressCircular_vue__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7bea93ea_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiProgressCircular_vue__ = __webpack_require__(175);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(127)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiProgressCircular_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7bea93ea_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiProgressCircular_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiProgressCircular.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiProgressCircular.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7bea93ea", Component.options)
  } else {
    hotAPI.reload("data-v-7bea93ea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiTooltip_vue__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6cedb6f5_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiTooltip_vue__ = __webpack_require__(169);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(121)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiTooltip_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6cedb6f5_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiTooltip_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiTooltip.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiTooltip.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6cedb6f5", Component.options)
  } else {
    hotAPI.reload("data-v-6cedb6f5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiCloseButton_vue__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ba5f488_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiCloseButton_vue__ = __webpack_require__(174);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(126)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiCloseButton_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ba5f488_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiCloseButton_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiCloseButton.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiCloseButton.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ba5f488", Component.options)
  } else {
    hotAPI.reload("data-v-7ba5f488", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiIconButton_vue__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9db4dbee_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiIconButton_vue__ = __webpack_require__(179);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(131)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiIconButton_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9db4dbee_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiIconButton_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiIconButton.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiIconButton.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9db4dbee", Component.options)
  } else {
    hotAPI.reload("data-v-9db4dbee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiModal_vue__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5cfba9c2_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiModal_vue__ = __webpack_require__(165);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(117)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiModal_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5cfba9c2_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiModal_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiModal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiModal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5cfba9c2", Component.options)
  } else {
    hotAPI.reload("data-v-5cfba9c2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export validate */
/* unused harmony export resolve */
function validate(ref, warning) {
    var isValid = ref instanceof Element || ref && ref._isVue || typeof ref === 'string';

    if (!isValid && warning) {
        console.warn(warning);
    }

    return isValid;
}

function resolve(ref, fallback) {
    if (ref instanceof Element) {
        return ref;
    } else if (ref && ref._isVue) {
        return ref.$el;
    } else if (typeof ref === 'string') {
        return document.querySelector(ref);
    }

    return fallback;
}

/* harmony default export */ __webpack_exports__["a"] = {
    validate: validate,
    resolve: resolve
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiFocusContainer_vue__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c26f987_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiFocusContainer_vue__ = __webpack_require__(168);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(120)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiFocusContainer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c26f987_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiFocusContainer_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiFocusContainer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiFocusContainer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6c26f987", Component.options)
  } else {
    hotAPI.reload("data-v-6c26f987", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiCheckbox_vue__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7905fb7e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiCheckbox_vue__ = __webpack_require__(172);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(124)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiCheckbox_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7905fb7e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiCheckbox_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiCheckbox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiCheckbox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7905fb7e", Component.options)
  } else {
    hotAPI.reload("data-v-7905fb7e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiDatepickerCalendar_vue__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b37986d0_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiDatepickerCalendar_vue__ = __webpack_require__(183);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(135)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiDatepickerCalendar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b37986d0_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiDatepickerCalendar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiDatepickerCalendar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiDatepickerCalendar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b37986d0", Component.options)
  } else {
    hotAPI.reload("data-v-b37986d0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiProgressLinear_vue__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_22995a30_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiProgressLinear_vue__ = __webpack_require__(151);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(103)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiProgressLinear_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_22995a30_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiProgressLinear_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiProgressLinear.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiProgressLinear.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-22995a30", Component.options)
  } else {
    hotAPI.reload("data-v-22995a30", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiRadio_vue__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1658ed6d_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiRadio_vue__ = __webpack_require__(150);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(102)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiRadio_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1658ed6d_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiRadio_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiRadio.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiRadio.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1658ed6d", Component.options)
  } else {
    hotAPI.reload("data-v-1658ed6d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiSnackbar_vue__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ad542fa_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiSnackbar_vue__ = __webpack_require__(163);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(115)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiSnackbar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ad542fa_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiSnackbar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiSnackbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiSnackbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ad542fa", Component.options)
  } else {
    hotAPI.reload("data-v-5ad542fa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
    inserted: function inserted(el, _ref) {
        var value = _ref.value;

        if (value) {
            el.focus();
        }
    }
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export inView */
/* harmony export (immutable) */ __webpack_exports__["b"] = scrollIntoView;
/* harmony export (immutable) */ __webpack_exports__["a"] = resetScroll;
function inView(element, container) {
    if (!element) {
        return;
    }

    container = container || element.parentElement;

    var top = element.offsetTop;
    var parentTop = container.scrollTop;
    var bottom = top + element.offsetHeight;
    var parentBottom = container.offsetHeight;

    return top >= parentTop && bottom <= parentBottom;
}

function scrollIntoView(element) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { container: null, marginTop: 0 };

    if (!element) {
        return;
    }

    options.container = options.container || element.parentElement;

    if (inView(element, options.container)) {
        return;
    }

    options.container.scrollTop = element.offsetTop - options.marginTop;
}

function resetScroll(element) {
    if (!element) {
        return;
    }

    element.scrollTop = 0;
}

/* unused harmony default export */ var _unused_webpack_default_export = {
    inView: inView,
    scrollIntoView: scrollIntoView,
    resetScroll: resetScroll
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export on */
/* unused harmony export onKeydown */
/* unused harmony export onKeyup */
/* unused harmony export onKeypress */
function on(event, target, callback) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { passive: true };

    target.addEventListener(event, callback, options);

    return function () {
        target.removeEventListener(event, callback, options);
    };
}

function onKey(key, event, target, callback, options) {
    return on(event, target, function (e) {
        if (!key) {
            callback(e);
        } else if (key === e.key || key === e.keyCode) {
            callback(e);
        }
    }, options);
}

function onKeydown(keys, target, callback, options) {
    return onKey(keys, 'keydown', target, callback, options);
}

function onKeyup(keys, target, callback, options) {
    return onKey(keys, 'keyup', target, callback, options);
}

function onKeypress(keys, target, callback, options) {
    return onKey(keys, 'keypress', target, callback, options);
}

/* harmony default export */ __webpack_exports__["a"] = {
    on: on,
    onKeydown: onKeydown,
    onKeyup: onKeyup,
    onKeypress: onKeypress
};

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Fast UUID generator, RFC4122 version 4 compliant.
 * @author Jeff Ward (jcward.com).
 * @license MIT license
 * @link http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
 */

var lut = [];

for (var i = 0; i < 256; i++) {
    lut[i] = (i < 16 ? '0' : '') + i.toString(16);
}

var generate = function generate() {
    var d0 = Math.random() * 0xffffffff | 0;
    var d1 = Math.random() * 0xffffffff | 0;
    var d2 = Math.random() * 0xffffffff | 0;
    var d3 = Math.random() * 0xffffffff | 0;

    return lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + '-' + lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + '-' + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + '-' + lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + '-' + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] + lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff];
};

var short = function short(prefix) {
    prefix = prefix || '';

    var uuid = generate();

    return prefix + uuid.split('-')[0];
};

/* harmony default export */ __webpack_exports__["a"] = {
    generate: generate,
    short: short
};

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_events__ = __webpack_require__(22);


/* harmony default export */ __webpack_exports__["a"] = {
    beforeDestroy: function beforeDestroy() {
        if (typeof this.destroyExternalClickListener === 'function') {
            this.removeExternalClickListener();
        }
    },


    methods: {
        addExternalClickListener: function addExternalClickListener() {
            var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [this.$el];

            var _this = this;

            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { passive: true };

            elements = Array.isArray(elements) ? elements : [elements];

            this.destroyExternalClickListener = __WEBPACK_IMPORTED_MODULE_0__helpers_events__["a" /* default */].on('click', document, function (e) {
                for (var i = 0; i < elements.length; i++) {
                    if (elements[i].contains(e.target)) {
                        return;
                    }
                }

                if (typeof callback === 'function') {
                    callback(e);
                } else {
                    _this.$emit('external-click', e);
                }
            }, options);
        },
        removeExternalClickListener: function removeExternalClickListener() {
            if (this.destroyExternalClickListener) {
                this.destroyExternalClickListener();
                this.destroyExternalClickListener = null;
            }
        }
    }
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function fuzzysearch (needle, haystack) {
  var tlen = haystack.length;
  var qlen = needle.length;
  if (qlen > tlen) {
    return false;
  }
  if (qlen === tlen) {
    return needle === haystack;
  }
  outer: for (var i = 0, j = 0; i < qlen; i++) {
    var nch = needle.charCodeAt(i);
    while (j < tlen) {
      if (haystack.charCodeAt(j++) === nch) {
        continue outer;
      }
    }
    return false;
  }
  return true;
}

module.exports = fuzzysearch;


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_popper_js__ = __webpack_require__(139);
/**!
* tippy.js v4.2.1
* (c) 2017-2019 atomiks
* MIT License
*/


function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var version = "4.2.1";

var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var ua = isBrowser ? navigator.userAgent : '';
var isIE = /MSIE |Trident\//.test(ua);
var isUCBrowser = /UCBrowser\//.test(ua);
var isIOS = isBrowser && /iPhone|iPad|iPod/.test(navigator.platform) && !window.MSStream;

var defaultProps = {
  a11y: true,
  allowHTML: true,
  animateFill: true,
  animation: 'shift-away',
  appendTo: function appendTo() {
    return document.body;
  },
  aria: 'describedby',
  arrow: false,
  arrowType: 'sharp',
  boundary: 'scrollParent',
  content: '',
  delay: 0,
  distance: 10,
  duration: [325, 275],
  flip: true,
  flipBehavior: 'flip',
  flipOnUpdate: false,
  followCursor: false,
  hideOnClick: true,
  ignoreAttributes: false,
  inertia: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  lazy: true,
  maxWidth: 350,
  multiple: false,
  offset: 0,
  onHidden: function onHidden() {},
  onHide: function onHide() {},
  onMount: function onMount() {},
  onShow: function onShow() {},
  onShown: function onShown() {},
  placement: 'top',
  popperOptions: {},
  role: 'tooltip',
  showOnInit: false,
  size: 'regular',
  sticky: false,
  target: '',
  theme: 'dark',
  touch: true,
  touchHold: false,
  trigger: 'mouseenter focus',
  updateDuration: 0,
  wait: null,
  zIndex: 9999
  /**
   * If the set() method encounters one of these, the popperInstance must be
   * recreated
   */

};
var POPPER_INSTANCE_DEPENDENCIES = ['arrow', 'arrowType', 'boundary', 'distance', 'flip', 'flipBehavior', 'flipOnUpdate', 'offset', 'placement', 'popperOptions'];

var elementProto = isBrowser ? Element.prototype : {};
var matches = elementProto.matches || elementProto.matchesSelector || elementProto.webkitMatchesSelector || elementProto.mozMatchesSelector || elementProto.msMatchesSelector;
/**
 * Ponyfill for Array.from - converts iterable values to an array
 */

function arrayFrom(value) {
  return [].slice.call(value);
}
/**
 * Ponyfill for Element.prototype.closest
 */

function closest(element, parentSelector) {
  return (elementProto.closest || function (selector) {
    // @ts-ignore
    var el = this;

    while (el) {
      if (matches.call(el, selector)) {
        return el;
      }

      el = el.parentElement;
    }
  }).call(element, parentSelector);
}
/**
 * Works like Element.prototype.closest, but uses a callback instead
 */

function closestCallback(element, callback) {
  while (element) {
    if (callback(element)) {
      return element;
    }

    element = element.parentElement;
  }
}

// Passive event listener config
var PASSIVE = {
  passive: true // Popper `preventOverflow` padding

};
var PADDING = 4; // Popper attributes
// In Popper v2 these will be `data-*` instead of `x-*` to adhere to HTML5 spec

var PLACEMENT_ATTRIBUTE = 'x-placement';
var OUT_OF_BOUNDARIES_ATTRIBUTE = 'x-out-of-boundaries'; // Classes

var IOS_CLASS = 'tippy-iOS';
var ACTIVE_CLASS = 'tippy-active'; // Selectors

var POPPER_SELECTOR = '.tippy-popper';
var TOOLTIP_SELECTOR = '.tippy-tooltip';
var CONTENT_SELECTOR = '.tippy-content';
var BACKDROP_SELECTOR = '.tippy-backdrop';
var ARROW_SELECTOR = '.tippy-arrow';
var ROUND_ARROW_SELECTOR = '.tippy-roundarrow';

var keys = Object.keys(defaultProps);
/**
 * Returns an object of optional props from data-tippy-* attributes
 */

function getDataAttributeOptions(reference) {
  return keys.reduce(function (acc, key) {
    var valueAsString = (reference.getAttribute("data-tippy-".concat(key)) || '').trim();

    if (!valueAsString) {
      return acc;
    }

    if (key === 'content') {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e) {
        acc[key] = valueAsString;
      }
    }

    return acc;
  }, {});
}
/**
 * Polyfills the virtual reference (plain object) with Element.prototype props
 * Mutating because DOM elements are mutated, adds `_tippy` property
 */

function polyfillElementPrototypeProperties(virtualReference) {
  var polyfills = {
    isVirtual: true,
    attributes: virtualReference.attributes || {},
    setAttribute: function setAttribute(key, value) {
      virtualReference.attributes[key] = value;
    },
    getAttribute: function getAttribute(key) {
      return virtualReference.attributes[key];
    },
    removeAttribute: function removeAttribute(key) {
      delete virtualReference.attributes[key];
    },
    hasAttribute: function hasAttribute(key) {
      return key in virtualReference.attributes;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    classList: {
      classNames: {},
      add: function add(key) {
        virtualReference.classList.classNames[key] = true;
      },
      remove: function remove(key) {
        delete virtualReference.classList.classNames[key];
      },
      contains: function contains(key) {
        return key in virtualReference.classList.classNames;
      }
    }
  };

  for (var key in polyfills) {
    virtualReference[key] = polyfills[key];
  }
}

/**
 * Determines if a value is a "bare" virtual element (before mutations done
 * by `polyfillElementPrototypeProperties()`). JSDOM elements show up as
 * [object Object], we can check if the value is "element-like" if it has
 * `addEventListener`
 */

function isBareVirtualElement(value) {
  return {}.toString.call(value) === '[object Object]' && !value.addEventListener;
}
/**
 * Safe .hasOwnProperty check, for prototype-less objects
 */

function hasOwnProperty(obj, key) {
  return {}.hasOwnProperty.call(obj, key);
}
/**
 * Returns an array of elements based on the value
 */

function getArrayOfElements(value) {
  if (isSingular(value)) {
    // TODO: VirtualReference is not compatible to type Element
    return [value];
  }

  if (value instanceof NodeList) {
    return arrayFrom(value);
  }

  if (Array.isArray(value)) {
    return value;
  }

  try {
    return arrayFrom(document.querySelectorAll(value));
  } catch (e) {
    return [];
  }
}
/**
 * Returns a value at a given index depending on if it's an array or number
 */

function getValue(value, index, defaultValue) {
  if (Array.isArray(value)) {
    var v = value[index];
    return v == null ? defaultValue : v;
  }

  return value;
}
/**
 * Debounce utility
 */

function debounce(fn, ms) {
  var timeoutId;
  return function () {
    var _this = this,
        _arguments = arguments;

    clearTimeout(timeoutId); // @ts-ignore

    timeoutId = setTimeout(function () {
      return fn.apply(_this, _arguments);
    }, ms);
  };
}
/**
 * Prevents errors from being thrown while accessing nested modifier objects
 * in `popperOptions`
 */

function getModifier(obj, key) {
  return obj && obj.modifiers && obj.modifiers[key];
}
/**
 * Determines if an array or string includes a value
 */

function includes(a, b) {
  return a.indexOf(b) > -1;
}
/**
 * Determines if the value is singular-like
 */

function isSingular(value) {
  return !!(value && hasOwnProperty(value, 'isVirtual')) || value instanceof Element;
}
/**
 * Firefox extensions don't allow setting .innerHTML directly, this will trick it
 */

function innerHTML() {
  return 'innerHTML';
}
/**
 * Evaluates a function if one, or returns the value
 */

function evaluateValue(value, args) {
  return typeof value === 'function' ? value.apply(null, args) : value;
}
/**
 * Sets a popperInstance `flip` modifier's enabled state
 */

function setFlipModifierEnabled(modifiers, value) {
  modifiers.filter(function (m) {
    return m.name === 'flip';
  })[0].enabled = value;
}
/**
 * Determines if an element can receive focus
 * Always returns true for virtual objects
 */

function canReceiveFocus(element) {
  return element instanceof Element ? matches.call(element, 'a[href],area[href],button,details,input,textarea,select,iframe,[tabindex]') && !element.hasAttribute('disabled') : true;
}
/**
 * Returns a new `div` element
 */

function div() {
  return document.createElement('div');
}
/**
 * Applies a transition duration to a list of elements
 */

function setTransitionDuration(els, value) {
  els.forEach(function (el) {
    if (el) {
      el.style.transitionDuration = "".concat(value, "ms");
    }
  });
}
/**
 * Sets the visibility state to elements so they can begin to transition
 */

function setVisibilityState(els, state) {
  els.forEach(function (el) {
    if (el) {
      el.setAttribute('data-state', state);
    }
  });
}
/**
 * Evaluates the props object by merging data attributes and
 * disabling conflicting options where necessary
 */

function evaluateProps(reference, props) {
  var out = _extends({}, props, {
    content: evaluateValue(props.content, [reference])
  }, props.ignoreAttributes ? {} : getDataAttributeOptions(reference));

  if (out.arrow || isUCBrowser) {
    out.animateFill = false;
  }

  return out;
}
/**
 * Validates an object of options with the valid default props object
 */

function validateOptions(options, defaultProps) {
  Object.keys(options).forEach(function (option) {
    if (!hasOwnProperty(defaultProps, option)) {
      throw new Error("[tippy]: `".concat(option, "` is not a valid option"));
    }
  });
}

/**
 * Sets the innerHTML of an element
 */

function setInnerHTML(element, html) {
  element[innerHTML()] = html instanceof Element ? html[innerHTML()] : html;
}
/**
 * Sets the content of a tooltip
 */

function setContent(contentEl, props) {
  if (props.content instanceof Element) {
    setInnerHTML(contentEl, '');
    contentEl.appendChild(props.content);
  } else if (typeof props.content !== 'function') {
    var key = props.allowHTML ? 'innerHTML' : 'textContent';
    contentEl[key] = props.content;
  }
}
/**
 * Returns the child elements of a popper element
 */

function getChildren(popper) {
  return {
    tooltip: popper.querySelector(TOOLTIP_SELECTOR),
    backdrop: popper.querySelector(BACKDROP_SELECTOR),
    content: popper.querySelector(CONTENT_SELECTOR),
    arrow: popper.querySelector(ARROW_SELECTOR) || popper.querySelector(ROUND_ARROW_SELECTOR)
  };
}
/**
 * Adds `data-inertia` attribute
 */

function addInertia(tooltip) {
  tooltip.setAttribute('data-inertia', '');
}
/**
 * Removes `data-inertia` attribute
 */

function removeInertia(tooltip) {
  tooltip.removeAttribute('data-inertia');
}
/**
 * Creates an arrow element and returns it
 */

function createArrowElement(arrowType) {
  var arrow = div();

  if (arrowType === 'round') {
    arrow.className = 'tippy-roundarrow';
    setInnerHTML(arrow, '<svg viewBox="0 0 18 7" xmlns="http://www.w3.org/2000/svg"><path d="M0 7s2.021-.015 5.253-4.218C6.584 1.051 7.797.007 9 0c1.203-.007 2.416 1.035 3.761 2.782C16.012 7.005 18 7 18 7H0z"/></svg>');
  } else {
    arrow.className = 'tippy-arrow';
  }

  return arrow;
}
/**
 * Creates a backdrop element and returns it
 */

function createBackdropElement() {
  var backdrop = div();
  backdrop.className = 'tippy-backdrop';
  backdrop.setAttribute('data-state', 'hidden');
  return backdrop;
}
/**
 * Adds interactive-related attributes
 */

function addInteractive(popper, tooltip) {
  popper.setAttribute('tabindex', '-1');
  tooltip.setAttribute('data-interactive', '');
}
/**
 * Removes interactive-related attributes
 */

function removeInteractive(popper, tooltip) {
  popper.removeAttribute('tabindex');
  tooltip.removeAttribute('data-interactive');
}
/**
 * Add/remove transitionend listener from tooltip
 */

function updateTransitionEndListener(tooltip, action, listener) {
  // UC Browser hasn't adopted the `transitionend` event despite supporting
  // unprefixed transitions...
  var eventName = isUCBrowser && document.body.style.webkitTransition !== undefined ? 'webkitTransitionEnd' : 'transitionend';
  tooltip[action + 'EventListener'](eventName, listener);
}
/**
 * Returns the popper's placement, ignoring shifting (top-start, etc)
 */

function getBasicPlacement(popper) {
  var fullPlacement = popper.getAttribute(PLACEMENT_ATTRIBUTE);
  return fullPlacement ? fullPlacement.split('-')[0] : '';
}
/**
 * Triggers reflow
 */

function reflow(popper) {
  void popper.offsetHeight;
}
/**
 * Adds/removes theme from tooltip's classList
 */

function updateTheme(tooltip, action, theme) {
  theme.split(' ').forEach(function (themeName) {
    tooltip.classList[action](themeName + '-theme');
  });
}
/**
 * Constructs the popper element and returns it
 */

function createPopperElement(id, props) {
  var popper = div();
  popper.className = 'tippy-popper';
  popper.id = "tippy-".concat(id);
  popper.style.zIndex = '' + props.zIndex;

  if (props.role) {
    popper.setAttribute('role', props.role);
  }

  var tooltip = div();
  tooltip.className = 'tippy-tooltip';
  tooltip.style.maxWidth = props.maxWidth + (typeof props.maxWidth === 'number' ? 'px' : '');
  tooltip.setAttribute('data-size', props.size);
  tooltip.setAttribute('data-animation', props.animation);
  tooltip.setAttribute('data-state', 'hidden');
  updateTheme(tooltip, 'add', props.theme);
  var content = div();
  content.className = 'tippy-content';
  content.setAttribute('data-state', 'hidden');

  if (props.interactive) {
    addInteractive(popper, tooltip);
  }

  if (props.arrow) {
    tooltip.appendChild(createArrowElement(props.arrowType));
  }

  if (props.animateFill) {
    tooltip.appendChild(createBackdropElement());
    tooltip.setAttribute('data-animatefill', '');
  }

  if (props.inertia) {
    addInertia(tooltip);
  }

  setContent(content, props);
  tooltip.appendChild(content);
  popper.appendChild(tooltip);
  return popper;
}
/**
 * Updates the popper element based on the new props
 */

function updatePopperElement(popper, prevProps, nextProps) {
  var _getChildren = getChildren(popper),
      tooltip = _getChildren.tooltip,
      content = _getChildren.content,
      backdrop = _getChildren.backdrop,
      arrow = _getChildren.arrow;

  popper.style.zIndex = '' + nextProps.zIndex;
  tooltip.setAttribute('data-size', nextProps.size);
  tooltip.setAttribute('data-animation', nextProps.animation);
  tooltip.style.maxWidth = nextProps.maxWidth + (typeof nextProps.maxWidth === 'number' ? 'px' : '');

  if (nextProps.role) {
    popper.setAttribute('role', nextProps.role);
  } else {
    popper.removeAttribute('role');
  }

  if (prevProps.content !== nextProps.content) {
    setContent(content, nextProps);
  } // animateFill


  if (!prevProps.animateFill && nextProps.animateFill) {
    tooltip.appendChild(createBackdropElement());
    tooltip.setAttribute('data-animatefill', '');
  } else if (prevProps.animateFill && !nextProps.animateFill) {
    tooltip.removeChild(backdrop);
    tooltip.removeAttribute('data-animatefill');
  } // arrow


  if (!prevProps.arrow && nextProps.arrow) {
    tooltip.appendChild(createArrowElement(nextProps.arrowType));
  } else if (prevProps.arrow && !nextProps.arrow) {
    tooltip.removeChild(arrow);
  } // arrowType


  if (prevProps.arrow && nextProps.arrow && prevProps.arrowType !== nextProps.arrowType) {
    tooltip.replaceChild(createArrowElement(nextProps.arrowType), arrow);
  } // interactive


  if (!prevProps.interactive && nextProps.interactive) {
    addInteractive(popper, tooltip);
  } else if (prevProps.interactive && !nextProps.interactive) {
    removeInteractive(popper, tooltip);
  } // inertia


  if (!prevProps.inertia && nextProps.inertia) {
    addInertia(tooltip);
  } else if (prevProps.inertia && !nextProps.inertia) {
    removeInertia(tooltip);
  } // theme


  if (prevProps.theme !== nextProps.theme) {
    updateTheme(tooltip, 'remove', prevProps.theme);
    updateTheme(tooltip, 'add', nextProps.theme);
  }
}
/**
 * Runs the callback after the popper's position has been updated
 * update() is debounced with Promise.resolve() or setTimeout()
 * scheduleUpdate() is update() wrapped in requestAnimationFrame()
 */

function afterPopperPositionUpdates(popperInstance, callback) {
  var popper = popperInstance.popper,
      options = popperInstance.options;
  var onCreate = options.onCreate,
      onUpdate = options.onUpdate;

  options.onCreate = options.onUpdate = function (data) {
    reflow(popper);
    callback();

    if (onUpdate) {
      onUpdate(data);
    }

    options.onCreate = onCreate;
    options.onUpdate = onUpdate;
  };
}
/**
 * Hides all visible poppers on the document
 */

function hideAll() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      checkHideOnClick = _ref.checkHideOnClick,
      exclude = _ref.exclude,
      duration = _ref.duration;

  arrayFrom(document.querySelectorAll(POPPER_SELECTOR)).forEach(function (popper) {
    var instance = popper._tippy;

    if (instance && (checkHideOnClick ? instance.props.hideOnClick === true : true) && (!exclude || popper !== exclude.popper)) {
      instance.hide(duration);
    }
  });
}
/**
 * Determines if the mouse cursor is outside of the popper's interactive border
 * region
 */

function isCursorOutsideInteractiveBorder(popperPlacement, popperRect, event, props) {
  if (!popperPlacement) {
    return true;
  }

  var x = event.clientX,
      y = event.clientY;
  var interactiveBorder = props.interactiveBorder,
      distance = props.distance;
  var exceedsTop = popperRect.top - y > (popperPlacement === 'top' ? interactiveBorder + distance : interactiveBorder);
  var exceedsBottom = y - popperRect.bottom > (popperPlacement === 'bottom' ? interactiveBorder + distance : interactiveBorder);
  var exceedsLeft = popperRect.left - x > (popperPlacement === 'left' ? interactiveBorder + distance : interactiveBorder);
  var exceedsRight = x - popperRect.right > (popperPlacement === 'right' ? interactiveBorder + distance : interactiveBorder);
  return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
}
/**
 * Returns the distance offset, taking into account the default offset due to
 * the transform: translate() rule (10px) in CSS
 */

function getOffsetDistanceInPx(distance) {
  return -(distance - 10) + 'px';
}

var isUsingTouch = false;
function onDocumentTouch() {
  if (isUsingTouch) {
    return;
  }

  isUsingTouch = true;

  if (isIOS) {
    document.body.classList.add(IOS_CLASS);
  }

  if (window.performance) {
    document.addEventListener('mousemove', onDocumentMouseMove);
  }
}
var lastMouseMoveTime = 0;
function onDocumentMouseMove() {
  var now = performance.now(); // Chrome 60+ is 1 mousemove per animation frame, use 20ms time difference

  if (now - lastMouseMoveTime < 20) {
    isUsingTouch = false;
    document.removeEventListener('mousemove', onDocumentMouseMove);

    if (!isIOS) {
      document.body.classList.remove(IOS_CLASS);
    }
  }

  lastMouseMoveTime = now;
}
function onDocumentClick(event) {
  // Simulated events dispatched on the document
  if (!(event.target instanceof Element)) {
    return hideAll();
  } // Clicked on an interactive popper


  var popper = closest(event.target, POPPER_SELECTOR);

  if (popper && popper._tippy && popper._tippy.props.interactive) {
    return;
  } // Clicked on a reference


  var reference = closestCallback(event.target, function (el) {
    return el._tippy && el._tippy.reference === el;
  });

  if (reference) {
    var instance = reference._tippy;

    if (instance) {
      var isClickTrigger = includes(instance.props.trigger || '', 'click');

      if (isUsingTouch || isClickTrigger) {
        return hideAll({
          exclude: instance,
          checkHideOnClick: true
        });
      }

      if (instance.props.hideOnClick !== true || isClickTrigger) {
        return;
      }

      instance.clearDelayTimeouts();
    }
  }

  hideAll({
    checkHideOnClick: true
  });
}
function onWindowBlur() {
  var _document = document,
      activeElement = _document.activeElement;

  if (activeElement && activeElement.blur && activeElement._tippy) {
    activeElement.blur();
  }
}
/**
 * Adds the needed global event listeners
 */

function bindGlobalEventListeners() {
  document.addEventListener('click', onDocumentClick, true);
  document.addEventListener('touchstart', onDocumentTouch, PASSIVE);
  window.addEventListener('blur', onWindowBlur);
}

var idCounter = 1;
/**
 * Creates and returns a Tippy object. We're using a closure pattern instead of
 * a class so that the exposed object API is clean without private members
 * prefixed with `_`.
 */

function createTippy(reference, collectionProps) {
  var props = evaluateProps(reference, collectionProps); // If the reference shouldn't have multiple tippys, return null early

  if (!props.multiple && reference._tippy) {
    return null;
  }
  /* ======================= 🔒 Private members 🔒 ======================= */


  var lastTriggerEventType;
  var lastMouseMoveEvent;
  var showTimeoutId;
  var hideTimeoutId;
  var animationFrameId;
  var isScheduledToShow = false;
  var currentParentNode;
  var previousPlacement;
  var wasVisibleDuringPreviousUpdate = false;
  var currentTransitionEndListener;
  var listeners = [];
  var debouncedOnMouseMove = props.interactiveDebounce > 0 ? debounce(onMouseMove, props.interactiveDebounce) : onMouseMove;
  /* ======================= 🔑 Public members 🔑 ======================= */

  var id = idCounter++;
  var popper = createPopperElement(id, props);
  var popperChildren = getChildren(popper);
  var popperInstance = null;
  var state = {
    // Is the instance currently enabled?
    isEnabled: true,
    // Is the tippy currently showing and not transitioning out?
    isVisible: false,
    // Has the instance been destroyed?
    isDestroyed: false,
    // Is the tippy currently mounted to the DOM?
    isMounted: false,
    // Has the tippy finished transitioning in?
    isShown: false
  };
  var instance = {
    // properties
    id: id,
    reference: reference,
    popper: popper,
    popperChildren: popperChildren,
    popperInstance: popperInstance,
    props: props,
    state: state,
    // methods
    clearDelayTimeouts: clearDelayTimeouts,
    set: set,
    setContent: setContent$$1,
    show: show,
    hide: hide,
    enable: enable,
    disable: disable,
    destroy: destroy
    /* ==================== Initial instance mutations =================== */

  };
  reference._tippy = instance;
  popper._tippy = instance;
  addTriggersToReference();

  if (!props.lazy) {
    createPopperInstance();
    instance.popperInstance.disableEventListeners();
  }

  if (props.showOnInit) {
    scheduleShow();
  } // Ensure the reference element can receive focus (and is not a delegate)


  if (props.a11y && !props.target && !canReceiveFocus(reference)) {
    reference.setAttribute('tabindex', '0');
  } // Prevent a tippy with a delay from hiding if the cursor left then returned
  // before it started hiding


  popper.addEventListener('mouseenter', function (event) {
    if (instance.props.interactive && instance.state.isVisible && lastTriggerEventType === 'mouseenter') {
      scheduleShow(event);
    }
  });
  popper.addEventListener('mouseleave', function () {
    if (instance.props.interactive && lastTriggerEventType === 'mouseenter') {
      document.addEventListener('mousemove', debouncedOnMouseMove);
    }
  });
  return instance;
  /* ======================= 🔒 Private methods 🔒 ======================= */

  /**
   * Removes the follow cursor listener
   */

  function removeFollowCursorListener() {
    document.removeEventListener('mousemove', positionVirtualReferenceNearCursor);
  }
  /**
   * Cleans up old listeners
   */


  function cleanupOldMouseListeners() {
    document.body.removeEventListener('mouseleave', scheduleHide);
    document.removeEventListener('mousemove', debouncedOnMouseMove);
  }
  /**
   * Returns transitionable inner elements used in show/hide methods
   */


  function getTransitionableElements() {
    return [instance.popperChildren.tooltip, instance.popperChildren.backdrop, instance.popperChildren.content];
  }
  /**
   * Determines if the instance is in `followCursor` mode
   */


  function hasFollowCursorBehavior() {
    return instance.props.followCursor && !isUsingTouch && lastTriggerEventType !== 'focus';
  }
  /**
   * Updates the tooltip's position on each animation frame
   */


  function makeSticky() {
    setTransitionDuration([instance.popper], isIE ? 0 : instance.props.updateDuration);

    function updatePosition() {
      if (instance.popperInstance) {
        instance.popperInstance.scheduleUpdate();
      }

      if (instance.state.isMounted) {
        requestAnimationFrame(updatePosition);
      } else {
        setTransitionDuration([instance.popper], 0);
      }
    }

    updatePosition();
  }
  /**
   * Invokes a callback once the tooltip has fully transitioned out
   */


  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function () {
      if (!instance.state.isVisible && currentParentNode && currentParentNode.contains(instance.popper)) {
        callback();
      }
    });
  }
  /**
   * Invokes a callback once the tooltip has fully transitioned in
   */


  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }
  /**
   * Invokes a callback once the tooltip's CSS transition ends
   */


  function onTransitionEnd(duration, callback) {
    var tooltip = instance.popperChildren.tooltip;
    /**
     * Listener added as the `transitionend` handler
     */

    function listener(event) {
      if (event.target === tooltip) {
        updateTransitionEndListener(tooltip, 'remove', listener);
        callback();
      }
    } // Make callback synchronous if duration is 0
    // `transitionend` won't fire otherwise


    if (duration === 0) {
      return callback();
    }

    updateTransitionEndListener(tooltip, 'remove', currentTransitionEndListener);
    updateTransitionEndListener(tooltip, 'add', listener);
    currentTransitionEndListener = listener;
  }
  /**
   * Adds an event listener to the reference and stores it in `listeners`
   */


  function on(eventType, handler) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    instance.reference.addEventListener(eventType, handler, options);
    listeners.push({
      eventType: eventType,
      handler: handler,
      options: options
    });
  }
  /**
   * Adds event listeners to the reference based on the `trigger` prop
   */


  function addTriggersToReference() {
    if (instance.props.touchHold && !instance.props.target) {
      on('touchstart', onTrigger, PASSIVE);
      on('touchend', onMouseLeave, PASSIVE);
    }

    instance.props.trigger.trim().split(' ').forEach(function (eventType) {
      if (eventType === 'manual') {
        return;
      } // Non-delegates


      if (!instance.props.target) {
        on(eventType, onTrigger);

        switch (eventType) {
          case 'mouseenter':
            on('mouseleave', onMouseLeave);
            break;

          case 'focus':
            on(isIE ? 'focusout' : 'blur', onBlur);
            break;
        }
      } else {
        // Delegates
        switch (eventType) {
          case 'mouseenter':
            on('mouseover', onDelegateShow);
            on('mouseout', onDelegateHide);
            break;

          case 'focus':
            on('focusin', onDelegateShow);
            on('focusout', onDelegateHide);
            break;

          case 'click':
            on(eventType, onDelegateShow);
            break;
        }
      }
    });
  }
  /**
   * Removes event listeners from the reference
   */


  function removeTriggersFromReference() {
    listeners.forEach(function (_ref) {
      var eventType = _ref.eventType,
          handler = _ref.handler,
          options = _ref.options;
      instance.reference.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }
  /**
   * Positions the virtual reference near the cursor
   */


  function positionVirtualReferenceNearCursor(event) {
    var _lastMouseMoveEvent = lastMouseMoveEvent = event,
        clientX = _lastMouseMoveEvent.clientX,
        clientY = _lastMouseMoveEvent.clientY;

    if (!instance.popperInstance) {
      return;
    } // Ensure virtual reference is padded to prevent tooltip from
    // overflowing. Maybe Popper.js issue?


    var placement = getBasicPlacement(instance.popper);
    var padding = instance.props.arrow ? PADDING + (instance.props.arrowType === 'round' ? 18 : 16) : PADDING;
    var isVerticalPlacement = includes(['top', 'bottom'], placement);
    var isHorizontalPlacement = includes(['left', 'right'], placement); // Top / left boundary

    var x = isVerticalPlacement ? Math.max(padding, clientX) : clientX;
    var y = isHorizontalPlacement ? Math.max(padding, clientY) : clientY; // Bottom / right boundary

    if (isVerticalPlacement && x > padding) {
      x = Math.min(clientX, window.innerWidth - padding);
    }

    if (isHorizontalPlacement && y > padding) {
      y = Math.min(clientY, window.innerHeight - padding);
    }

    var rect = instance.reference.getBoundingClientRect();
    var followCursor = instance.props.followCursor;
    var isHorizontal = followCursor === 'horizontal';
    var isVertical = followCursor === 'vertical';
    instance.popperInstance.reference = _extends({}, instance.popperInstance.reference, {
      getBoundingClientRect: function getBoundingClientRect() {
        return {
          width: 0,
          height: 0,
          top: isHorizontal ? rect.top : y,
          bottom: isHorizontal ? rect.bottom : y,
          left: isVertical ? rect.left : x,
          right: isVertical ? rect.right : x
        };
      },
      clientWidth: 0,
      clientHeight: 0
    });
    instance.popperInstance.scheduleUpdate();

    if (followCursor === 'initial' && instance.state.isVisible) {
      removeFollowCursorListener();
    }
  }
  /**
   * Creates the tippy instance for a delegate when it's been triggered
   */


  function createDelegateChildTippy(event) {
    if (event) {
      var targetEl = closest(event.target, instance.props.target);

      if (targetEl && !targetEl._tippy) {
        createTippy(targetEl, _extends({}, instance.props, {
          content: evaluateValue(collectionProps.content, [targetEl]),
          appendTo: collectionProps.appendTo,
          target: '',
          showOnInit: true
        }));
        scheduleShow(event);
      }
    }
  }
  /**
   * Event listener invoked upon trigger
   */


  function onTrigger(event) {
    if (!instance.state.isEnabled || isEventListenerStopped(event)) {
      return;
    }

    if (!instance.state.isVisible) {
      lastTriggerEventType = event.type;

      if (event instanceof MouseEvent) {
        lastMouseMoveEvent = event;
      }
    } // Toggle show/hide when clicking click-triggered tooltips


    if (event.type === 'click' && instance.props.hideOnClick !== false && instance.state.isVisible) {
      scheduleHide();
    } else {
      scheduleShow(event);
    }
  }
  /**
   * Event listener used for interactive tooltips to detect when they should
   * hide
   */


  function onMouseMove(event) {
    var referenceTheCursorIsOver = closestCallback(event.target, function (el) {
      return el._tippy;
    });
    var isCursorOverPopper = closest(event.target, POPPER_SELECTOR) === instance.popper;
    var isCursorOverReference = referenceTheCursorIsOver === instance.reference;

    if (isCursorOverPopper || isCursorOverReference) {
      return;
    }

    if (isCursorOutsideInteractiveBorder(getBasicPlacement(instance.popper), instance.popper.getBoundingClientRect(), event, instance.props)) {
      cleanupOldMouseListeners();
      scheduleHide();
    }
  }
  /**
   * Event listener invoked upon mouseleave
   */


  function onMouseLeave(event) {
    if (isEventListenerStopped(event)) {
      return;
    }

    if (instance.props.interactive) {
      document.body.addEventListener('mouseleave', scheduleHide);
      document.addEventListener('mousemove', debouncedOnMouseMove);
      return;
    }

    scheduleHide();
  }
  /**
   * Event listener invoked upon blur
   */


  function onBlur(event) {
    if (event.target !== instance.reference) {
      return;
    }

    if (instance.props.interactive && event.relatedTarget && instance.popper.contains(event.relatedTarget)) {
      return;
    }

    scheduleHide();
  }
  /**
   * Event listener invoked when a child target is triggered
   */


  function onDelegateShow(event) {
    if (closest(event.target, instance.props.target)) {
      scheduleShow(event);
    }
  }
  /**
   * Event listener invoked when a child target should hide
   */


  function onDelegateHide(event) {
    if (closest(event.target, instance.props.target)) {
      scheduleHide();
    }
  }
  /**
   * Determines if an event listener should stop further execution due to the
   * `touchHold` option
   */


  function isEventListenerStopped(event) {
    var supportsTouch = 'ontouchstart' in window;
    var isTouchEvent = includes(event.type, 'touch');
    var touchHold = instance.props.touchHold;
    return supportsTouch && isUsingTouch && touchHold && !isTouchEvent || isUsingTouch && !touchHold && isTouchEvent;
  }
  /**
   * Creates the popper instance for the instance
   */


  function createPopperInstance() {
    var popperOptions = instance.props.popperOptions;
    var _instance$popperChild = instance.popperChildren,
        tooltip = _instance$popperChild.tooltip,
        arrow = _instance$popperChild.arrow;
    var preventOverflowModifier = getModifier(popperOptions, 'preventOverflow');

    function applyMutations(data) {
      if (instance.props.flip && !instance.props.flipOnUpdate) {
        if (data.flipped) {
          instance.popperInstance.options.placement = data.placement;
        }

        setFlipModifierEnabled(instance.popperInstance.modifiers, false);
      } // Apply all of the popper's attributes to the tootip node as well.
      // Allows users to avoid using the .tippy-popper selector for themes.


      tooltip.setAttribute(PLACEMENT_ATTRIBUTE, data.placement);

      if (data.attributes[OUT_OF_BOUNDARIES_ATTRIBUTE] !== false) {
        tooltip.setAttribute(OUT_OF_BOUNDARIES_ATTRIBUTE, '');
      } else {
        tooltip.removeAttribute(OUT_OF_BOUNDARIES_ATTRIBUTE);
      } // Prevents a transition when changing placements (while tippy is visible)
      // for scroll/resize updates


      if (previousPlacement && previousPlacement !== data.placement && wasVisibleDuringPreviousUpdate) {
        tooltip.style.transition = 'none';
        requestAnimationFrame(function () {
          tooltip.style.transition = '';
        });
      }

      previousPlacement = data.placement;
      wasVisibleDuringPreviousUpdate = instance.state.isVisible;
      var basicPlacement = getBasicPlacement(instance.popper);
      var styles = tooltip.style; // Account for the `distance` offset

      styles.top = styles.bottom = styles.left = styles.right = '';
      styles[basicPlacement] = getOffsetDistanceInPx(instance.props.distance);
      var padding = preventOverflowModifier && preventOverflowModifier.padding !== undefined ? preventOverflowModifier.padding : PADDING;
      var isPaddingNumber = typeof padding === 'number';

      var computedPadding = _extends({
        top: isPaddingNumber ? padding : padding.top,
        bottom: isPaddingNumber ? padding : padding.bottom,
        left: isPaddingNumber ? padding : padding.left,
        right: isPaddingNumber ? padding : padding.right
      }, !isPaddingNumber && padding);

      computedPadding[basicPlacement] = isPaddingNumber ? padding + instance.props.distance : (padding[basicPlacement] || 0) + instance.props.distance;
      instance.popperInstance.modifiers.filter(function (m) {
        return m.name === 'preventOverflow';
      })[0].padding = computedPadding;
    }

    var config = _extends({
      placement: instance.props.placement
    }, popperOptions, {
      modifiers: _extends({}, popperOptions ? popperOptions.modifiers : {}, {
        preventOverflow: _extends({
          boundariesElement: instance.props.boundary,
          padding: PADDING
        }, preventOverflowModifier),
        arrow: _extends({
          element: arrow,
          enabled: !!arrow
        }, getModifier(popperOptions, 'arrow')),
        flip: _extends({
          enabled: instance.props.flip,
          // The tooltip is offset by 10px from the popper in CSS,
          // we need to account for its distance
          padding: instance.props.distance + PADDING,
          behavior: instance.props.flipBehavior
        }, getModifier(popperOptions, 'flip')),
        offset: _extends({
          offset: instance.props.offset
        }, getModifier(popperOptions, 'offset'))
      }),
      // This gets invoked when calling `.set()` and updating a popper
      // instance dependency, since a new popper instance gets created
      onCreate: function onCreate(data) {
        applyMutations(data);

        if (popperOptions && popperOptions.onCreate) {
          popperOptions.onCreate(data);
        }
      },
      // This gets invoked on initial create and show()/scroll/resize update.
      // This is due to `afterPopperPositionUpdates` overwriting onCreate()
      // with onUpdate()
      onUpdate: function onUpdate(data) {
        applyMutations(data);

        if (popperOptions && popperOptions.onUpdate) {
          popperOptions.onUpdate(data);
        }
      }
    });

    instance.popperInstance = new __WEBPACK_IMPORTED_MODULE_0_popper_js__["a" /* default */](instance.reference, instance.popper, config);
  }
  /**
   * Mounts the tooltip to the DOM, callback to show tooltip is run **after**
   * popper's position has updated
   */


  function mount(callback) {
    var shouldEnableListeners = !hasFollowCursorBehavior() && !(instance.props.followCursor === 'initial' && isUsingTouch);

    if (!instance.popperInstance) {
      createPopperInstance();

      if (!shouldEnableListeners) {
        instance.popperInstance.disableEventListeners();
      }
    } else {
      if (!hasFollowCursorBehavior()) {
        instance.popperInstance.scheduleUpdate();

        if (shouldEnableListeners) {
          instance.popperInstance.enableEventListeners();
        }
      }

      setFlipModifierEnabled(instance.popperInstance.modifiers, instance.props.flip);
    } // If the instance previously had followCursor behavior, it will be
    // positioned incorrectly if triggered by `focus` afterwards.
    // Update the reference back to the real DOM element


    instance.popperInstance.reference = instance.reference;
    var arrow = instance.popperChildren.arrow;

    if (hasFollowCursorBehavior()) {
      if (arrow) {
        arrow.style.margin = '0';
      }

      if (lastMouseMoveEvent) {
        positionVirtualReferenceNearCursor(lastMouseMoveEvent);
      }
    } else if (arrow) {
      arrow.style.margin = '';
    } // Allow followCursor: 'initial' on touch devices


    if (isUsingTouch && lastMouseMoveEvent && instance.props.followCursor === 'initial') {
      positionVirtualReferenceNearCursor(lastMouseMoveEvent);

      if (arrow) {
        arrow.style.margin = '0';
      }
    }

    afterPopperPositionUpdates(instance.popperInstance, callback);
    var appendTo = instance.props.appendTo;
    currentParentNode = appendTo === 'parent' ? instance.reference.parentNode : evaluateValue(appendTo, [instance.reference]);

    if (!currentParentNode.contains(instance.popper)) {
      currentParentNode.appendChild(instance.popper);
      instance.props.onMount(instance);
      instance.state.isMounted = true;
    }
  }
  /**
   * Setup before show() is invoked (delays, etc.)
   */


  function scheduleShow(event) {
    clearDelayTimeouts();

    if (instance.state.isVisible) {
      return;
    } // Is a delegate, create an instance for the child target


    if (instance.props.target) {
      return createDelegateChildTippy(event);
    }

    isScheduledToShow = true;

    if (instance.props.wait) {
      return instance.props.wait(instance, event);
    } // If the tooltip has a delay, we need to be listening to the mousemove as
    // soon as the trigger event is fired, so that it's in the correct position
    // upon mount.
    // Edge case: if the tooltip is still mounted, but then scheduleShow() is
    // called, it causes a jump.


    if (hasFollowCursorBehavior() && !instance.state.isMounted) {
      document.addEventListener('mousemove', positionVirtualReferenceNearCursor);
    }

    var delay = getValue(instance.props.delay, 0, defaultProps.delay);

    if (delay) {
      showTimeoutId = setTimeout(function () {
        show();
      }, delay);
    } else {
      show();
    }
  }
  /**
   * Setup before hide() is invoked (delays, etc.)
   */


  function scheduleHide() {
    clearDelayTimeouts();

    if (!instance.state.isVisible) {
      return removeFollowCursorListener();
    }

    isScheduledToShow = false;
    var delay = getValue(instance.props.delay, 1, defaultProps.delay);

    if (delay) {
      hideTimeoutId = setTimeout(function () {
        if (instance.state.isVisible) {
          hide();
        }
      }, delay);
    } else {
      // Fixes a `transitionend` problem when it fires 1 frame too
      // late sometimes, we don't want hide() to be called.
      animationFrameId = requestAnimationFrame(function () {
        hide();
      });
    }
  }
  /* ======================= 🔑 Public methods 🔑 ======================= */

  /**
   * Enables the instance to allow it to show or hide
   */


  function enable() {
    instance.state.isEnabled = true;
  }
  /**
   * Disables the instance to disallow it to show or hide
   */


  function disable() {
    instance.state.isEnabled = false;
  }
  /**
   * Clears pending timeouts related to the `delay` prop if any
   */


  function clearDelayTimeouts() {
    clearTimeout(showTimeoutId);
    clearTimeout(hideTimeoutId);
    cancelAnimationFrame(animationFrameId);
  }
  /**
   * Sets new props for the instance and redraws the tooltip
   */


  function set(options) {
    // Backwards-compatible after TypeScript change
    options = options || {};
    validateOptions(options, defaultProps);
    var prevProps = instance.props;
    var nextProps = evaluateProps(instance.reference, _extends({}, instance.props, options, {
      ignoreAttributes: true
    }));
    nextProps.ignoreAttributes = hasOwnProperty(options, 'ignoreAttributes') ? options.ignoreAttributes || false : prevProps.ignoreAttributes;
    instance.props = nextProps;

    if (hasOwnProperty(options, 'trigger') || hasOwnProperty(options, 'touchHold')) {
      removeTriggersFromReference();
      addTriggersToReference();
    }

    if (hasOwnProperty(options, 'interactiveDebounce')) {
      cleanupOldMouseListeners();
      debouncedOnMouseMove = debounce(onMouseMove, options.interactiveDebounce || 0);
    }

    updatePopperElement(instance.popper, prevProps, nextProps);
    instance.popperChildren = getChildren(instance.popper);

    if (instance.popperInstance) {
      instance.popperInstance.update();

      if (POPPER_INSTANCE_DEPENDENCIES.some(function (prop) {
        return hasOwnProperty(options, prop) && options[prop] !== prevProps[prop];
      })) {
        instance.popperInstance.destroy();
        createPopperInstance();

        if (!instance.state.isVisible) {
          instance.popperInstance.disableEventListeners();
        }

        if (instance.props.followCursor && lastMouseMoveEvent) {
          positionVirtualReferenceNearCursor(lastMouseMoveEvent);
        }
      }
    }
  }
  /**
   * Shortcut for .set({ content: newContent })
   */


  function setContent$$1(content) {
    set({
      content: content
    });
  }
  /**
   * Shows the tooltip
   */


  function show() {
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getValue(instance.props.duration, 0, defaultProps.duration[1]);

    if (instance.state.isDestroyed || !instance.state.isEnabled || isUsingTouch && !instance.props.touch) {
      return;
    } // Standardize `disabled` behavior across browsers.
    // Firefox allows events on disabled elements, but Chrome doesn't.
    // Using a wrapper element (i.e. <span>) is recommended.


    if (instance.reference.hasAttribute('disabled')) {
      return;
    }

    if (instance.props.onShow(instance) === false) {
      return;
    }

    instance.popper.style.visibility = 'visible';
    instance.state.isVisible = true;

    if (instance.props.interactive) {
      instance.reference.classList.add(ACTIVE_CLASS);
    }

    var transitionableElements = getTransitionableElements(); // Prevent a transition if the popper is at the opposite placement

    setTransitionDuration(transitionableElements.concat(instance.popper), 0);
    mount(function () {
      if (!instance.state.isVisible) {
        return;
      } // Double update will apply correct mutations


      if (!hasFollowCursorBehavior()) {
        instance.popperInstance.update();
      }

      if (instance.popperChildren.backdrop) {
        instance.popperChildren.content.style.transitionDelay = Math.round(duration / 12) + 'ms';
      }

      if (instance.props.sticky) {
        makeSticky();
      }

      setTransitionDuration([instance.popper], props.updateDuration);
      setTransitionDuration(transitionableElements, duration);
      setVisibilityState(transitionableElements, 'visible');
      onTransitionedIn(duration, function () {
        if (instance.props.aria) {
          instance.reference.setAttribute("aria-".concat(instance.props.aria), instance.popper.id);
        }

        instance.props.onShown(instance);
        instance.state.isShown = true;
      });
    });
  }
  /**
   * Hides the tooltip
   */


  function hide() {
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getValue(instance.props.duration, 1, defaultProps.duration[1]);

    if (instance.state.isDestroyed || !instance.state.isEnabled) {
      return;
    }

    if (instance.props.onHide(instance) === false) {
      return;
    }

    instance.popper.style.visibility = 'hidden';
    instance.state.isVisible = false;
    instance.state.isShown = false;
    wasVisibleDuringPreviousUpdate = false;

    if (instance.props.interactive) {
      instance.reference.classList.remove(ACTIVE_CLASS);
    }

    var transitionableElements = getTransitionableElements();
    setTransitionDuration(transitionableElements, duration);
    setVisibilityState(transitionableElements, 'hidden');
    onTransitionedOut(duration, function () {
      if (!isScheduledToShow) {
        removeFollowCursorListener();
      }

      if (instance.props.aria) {
        instance.reference.removeAttribute("aria-".concat(instance.props.aria));
      }

      instance.popperInstance.disableEventListeners();
      instance.popperInstance.options.placement = instance.props.placement;
      currentParentNode.removeChild(instance.popper);
      instance.props.onHidden(instance);
      instance.state.isMounted = false;
    });
  }
  /**
   * Destroys the tooltip
   */


  function destroy(destroyTargetInstances) {
    if (instance.state.isDestroyed) {
      return;
    } // If the popper is currently mounted to the DOM, we want to ensure it gets
    // hidden and unmounted instantly upon destruction


    if (instance.state.isMounted) {
      hide(0);
    }

    removeTriggersFromReference();
    delete instance.reference._tippy;

    if (instance.props.target && destroyTargetInstances) {
      arrayFrom(instance.reference.querySelectorAll(instance.props.target)).forEach(function (child) {
        if (child._tippy) {
          child._tippy.destroy();
        }
      });
    }

    if (instance.popperInstance) {
      instance.popperInstance.destroy();
    }

    instance.state.isDestroyed = true;
  }
}

/**
 * Groups an array of instances by taking control of their props during
 * certain lifecycles.
 */

function group(instances) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? instances[0].props.delay : _ref$delay,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 0 : _ref$duration;

  // Already grouped. Cannot group instances more than once (yet) or stale lifecycle
  // closures will be invoked, causing a stack overflow
  if (instances.some(function (instance) {
    return hasOwnProperty(instance, '_originalProps');
  })) {
    return;
  }

  var isAnyTippyOpen = false;
  instances.forEach(function (instance) {
    instance._originalProps = _extends({}, instance.props);
  });

  function setIsAnyTippyOpen(value) {
    isAnyTippyOpen = value;
    updateInstances();
  }

  function onShow(instance) {
    instance._originalProps.onShow(instance);

    instances.forEach(function (instance) {
      instance.set({
        duration: duration
      });
      instance.hide();
    });
    setIsAnyTippyOpen(true);
  }

  function onHide(instance) {
    instance._originalProps.onHide(instance);

    setIsAnyTippyOpen(false);
  }

  function onShown(instance) {
    instance._originalProps.onShown(instance);

    instance.set({
      duration: instance._originalProps.duration
    });
  }

  function updateInstances() {
    instances.forEach(function (instance) {
      instance.set({
        onShow: onShow,
        onShown: onShown,
        onHide: onHide,
        delay: isAnyTippyOpen ? [0, Array.isArray(delay) ? delay[1] : delay] : delay,
        duration: isAnyTippyOpen ? duration : instance._originalProps.duration
      });
    });
  }

  updateInstances();
}

var globalEventListenersBound = false;
/**
 * Exported module
 */

function tippy(targets, options) {
  validateOptions(options || {}, defaultProps);

  if (!globalEventListenersBound) {
    bindGlobalEventListeners();
    globalEventListenersBound = true;
  }

  var props = _extends({}, defaultProps, options); // If they are specifying a virtual positioning reference, we need to polyfill
  // some native DOM props


  if (isBareVirtualElement(targets)) {
    polyfillElementPrototypeProperties(targets);
  }

  var instances = getArrayOfElements(targets).reduce(function (acc, reference) {
    var instance = reference && createTippy(reference, props);

    if (instance) {
      acc.push(instance);
    }

    return acc;
  }, []);
  return isSingular(targets) ? instances[0] : instances;
}
/**
 * Static props
 */


tippy.version = version;
tippy.defaults = defaultProps;
/**
 * Static methods
 */

tippy.setDefaults = function (partialDefaults) {
  Object.keys(partialDefaults).forEach(function (key) {
    // @ts-ignore
    defaultProps[key] = partialDefaults[key];
  });
};

tippy.hideAll = hideAll;
tippy.group = group;
/**
 * Auto-init tooltips for elements with a `data-tippy="..."` attribute
 */

function autoInit() {
  arrayFrom(document.querySelectorAll('[data-tippy]')).forEach(function (el) {
    var content = el.getAttribute('data-tippy');

    if (content) {
      tippy(el, {
        content: content
      });
    }
  });
}

if (isBrowser) {
  setTimeout(autoInit);
}

/* harmony default export */ __webpack_exports__["a"] = tippy;
//# sourceMappingURL=index.js.map


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiCalendarControls_vue__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6fbf1812_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiCalendarControls_vue__ = __webpack_require__(170);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(122)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiCalendarControls_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6fbf1812_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiCalendarControls_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiCalendarControls.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiCalendarControls.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6fbf1812", Component.options)
  } else {
    hotAPI.reload("data-v-6fbf1812", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiCalendarMonth_vue__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e023bc58_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiCalendarMonth_vue__ = __webpack_require__(186);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(138)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiCalendarMonth_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e023bc58_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiCalendarMonth_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiCalendarMonth.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiCalendarMonth.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e023bc58", Component.options)
  } else {
    hotAPI.reload("data-v-e023bc58", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_modality__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_modality___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__helpers_modality__);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_deepmerge__ = __webpack_require__(96);
/* harmony export (immutable) */ __webpack_exports__["a"] = configure;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



function configure(Component, props) {
    Object.keys(props).forEach(function (propName) {
        if (Component.props[propName] === undefined) {
            return;
        }

        var defaultValue = Component.props[propName].default;

        if ((typeof defaultValue === 'undefined' ? 'undefined' : _typeof(defaultValue)) === 'object') {
            Component.props[propName].default = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_deepmerge__["a" /* default */])(defaultValue, props[propName]);
            return;
        }

        Component.props[propName].default = props[propName];
    });
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiAlert_vue__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0dfa6b64_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiAlert_vue__ = __webpack_require__(147);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(99)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiAlert_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0dfa6b64_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiAlert_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiAlert.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiAlert.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0dfa6b64", Component.options)
  } else {
    hotAPI.reload("data-v-0dfa6b64", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiAutocomplete_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ede18e6_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiAutocomplete_vue__ = __webpack_require__(176);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(128)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiAutocomplete_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ede18e6_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiAutocomplete_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiAutocomplete.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiAutocomplete.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ede18e6", Component.options)
  } else {
    hotAPI.reload("data-v-7ede18e6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiCalendar_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_10feac3c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiCalendar_vue__ = __webpack_require__(149);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(101)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiCalendar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_10feac3c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiCalendar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiCalendar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiCalendar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-10feac3c", Component.options)
  } else {
    hotAPI.reload("data-v-10feac3c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiCheckboxGroup_vue__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7a92836e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiCheckboxGroup_vue__ = __webpack_require__(173);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(125)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiCheckboxGroup_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7a92836e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiCheckboxGroup_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiCheckboxGroup.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiCheckboxGroup.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7a92836e", Component.options)
  } else {
    hotAPI.reload("data-v-7a92836e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiCollapsible_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ca040308_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiCollapsible_vue__ = __webpack_require__(185);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(137)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiCollapsible_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ca040308_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiCollapsible_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiCollapsible.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiCollapsible.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ca040308", Component.options)
  } else {
    hotAPI.reload("data-v-ca040308", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiConfirm_vue__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4f7f2732_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiConfirm_vue__ = __webpack_require__(160);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(112)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiConfirm_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4f7f2732_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiConfirm_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiConfirm.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiConfirm.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4f7f2732", Component.options)
  } else {
    hotAPI.reload("data-v-4f7f2732", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiDatepicker_vue__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_74517e3a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiDatepicker_vue__ = __webpack_require__(171);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(123)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiDatepicker_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_74517e3a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiDatepicker_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiDatepicker.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiDatepicker.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74517e3a", Component.options)
  } else {
    hotAPI.reload("data-v-74517e3a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiFab_vue__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4a69660e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiFab_vue__ = __webpack_require__(159);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(111)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiFab_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4a69660e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiFab_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiFab.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiFab.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a69660e", Component.options)
  } else {
    hotAPI.reload("data-v-4a69660e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiFileupload_vue__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_965da30a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiFileupload_vue__ = __webpack_require__(178);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(130)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiFileupload_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_965da30a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiFileupload_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiFileupload.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiFileupload.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-965da30a", Component.options)
  } else {
    hotAPI.reload("data-v-965da30a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiMenu_vue__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_41a170dd_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiMenu_vue__ = __webpack_require__(157);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(109)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiMenu_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_41a170dd_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiMenu_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiMenu.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiMenu.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41a170dd", Component.options)
  } else {
    hotAPI.reload("data-v-41a170dd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiPreloader_vue__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_32cd8368_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiPreloader_vue__ = __webpack_require__(154);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(106)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiPreloader_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_32cd8368_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiPreloader_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiPreloader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiPreloader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-32cd8368", Component.options)
  } else {
    hotAPI.reload("data-v-32cd8368", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiRadioGroup_vue__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0686b3c2_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiRadioGroup_vue__ = __webpack_require__(145);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(97)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiRadioGroup_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0686b3c2_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiRadioGroup_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiRadioGroup.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiRadioGroup.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0686b3c2", Component.options)
  } else {
    hotAPI.reload("data-v-0686b3c2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiSelect_vue__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54cff87a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiSelect_vue__ = __webpack_require__(162);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(114)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiSelect_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54cff87a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiSelect_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiSelect.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiSelect.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54cff87a", Component.options)
  } else {
    hotAPI.reload("data-v-54cff87a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiSlider_vue__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0d1a7c42_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiSlider_vue__ = __webpack_require__(146);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(98)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiSlider_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0d1a7c42_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiSlider_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiSlider.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiSlider.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d1a7c42", Component.options)
  } else {
    hotAPI.reload("data-v-0d1a7c42", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiSnackbarContainer_vue__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e0792ee_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiSnackbarContainer_vue__ = __webpack_require__(148);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(100)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiSnackbarContainer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e0792ee_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiSnackbarContainer_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiSnackbarContainer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiSnackbarContainer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0e0792ee", Component.options)
  } else {
    hotAPI.reload("data-v-0e0792ee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiSwitch_vue__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ba5ec29c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiSwitch_vue__ = __webpack_require__(184);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(136)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiSwitch_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ba5ec29c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiSwitch_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiSwitch.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiSwitch.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ba5ec29c", Component.options)
  } else {
    hotAPI.reload("data-v-ba5ec29c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiTab_vue__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_813aeaf2_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiTab_vue__ = __webpack_require__(177);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(129)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiTab_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_813aeaf2_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiTab_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiTab.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiTab.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-813aeaf2", Component.options)
  } else {
    hotAPI.reload("data-v-813aeaf2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiTabs_vue__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_309a677c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiTabs_vue__ = __webpack_require__(153);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(105)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiTabs_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_309a677c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiTabs_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiTabs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiTabs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-309a677c", Component.options)
  } else {
    hotAPI.reload("data-v-309a677c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiTextbox_vue__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ac038220_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiTextbox_vue__ = __webpack_require__(181);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(133)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiTextbox_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ac038220_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiTextbox_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiTextbox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiTextbox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ac038220", Component.options)
  } else {
    hotAPI.reload("data-v-ac038220", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiToolbar_vue__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b19a1326_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiToolbar_vue__ = __webpack_require__(182);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(134)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiToolbar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b19a1326_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiToolbar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiToolbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiToolbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b19a1326", Component.options)
  } else {
    hotAPI.reload("data-v-b19a1326", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Autosize 3.0.20
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		factory(exports, module);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, mod);
		global.autosize = mod.exports;
	}
})(this, function (exports, module) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : (function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			'delete': function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	})();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function (name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = ta.clientWidth;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			var originalHeight = ta.style.height;
			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = 'auto';

			var endHeight = ta.scrollHeight + heightOffset;

			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				ta.style.height = originalHeight;
				return;
			}

			ta.style.height = endHeight + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);
			var actualHeight = Math.round(parseFloat(computed.height));

			// The actual height not matching the style height (set via the resize method) indicates that
			// the max-height has been exceeded, in which case the overflow should be set to visible.
			if (actualHeight !== styleHeight) {
				if (computed.overflowY !== 'visible') {
					changeOverflow('visible');
					resize();
					actualHeight = Math.round(parseFloat(window.getComputedStyle(ta, null).height));
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = Math.round(parseFloat(window.getComputedStyle(ta, null).height));
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = (function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map['delete'](ta);
		}).bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function (el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function (el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	module.exports = autosize;
});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiCloseButton_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiIcon_vue__ = __webpack_require__(1);





/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-alert',

    props: {
        type: {
            type: String,
            default: 'info' },
        removeIcon: {
            type: Boolean,
            default: false
        },
        disableAnimation: {
            type: Boolean,
            default: false
        },
        dismissible: {
            type: Boolean,
            default: true
        }
    },

    computed: {
        classes: function classes() {
            return ['ui-alert--type-' + this.type, { 'has-no-transition': this.disableAnimation }];
        }
    },

    methods: {
        dismissAlert: function dismissAlert() {
            this.$emit('dismiss');
        }
    },

    components: {
        UiCloseButton: __WEBPACK_IMPORTED_MODULE_0__UiCloseButton_vue__["a" /* default */],
        UiIcon: __WEBPACK_IMPORTED_MODULE_1__UiIcon_vue__["a" /* default */]
    }
};

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_autofocus__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiAutocompleteSuggestion_vue__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UiIcon_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fuzzysearch__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fuzzysearch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_fuzzysearch__);








/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-autocomplete',

    props: {
        name: String,
        placeholder: String,
        tabindex: [String, Number],
        value: {
            type: [String, Number],
            default: ''
        },
        icon: String,
        iconPosition: {
            type: String,
            default: 'left' },
        label: String,
        floatingLabel: {
            type: Boolean,
            default: false
        },
        help: String,
        error: String,
        readonly: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'simple' },
        suggestions: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        limit: {
            type: Number,
            default: 8
        },
        append: {
            type: Boolean,
            default: false
        },
        appendDelimiter: {
            type: String,
            default: ', '
        },
        minChars: {
            type: Number,
            default: 2
        },
        showOnUpDown: {
            type: Boolean,
            default: true
        },
        autofocus: {
            type: Boolean,
            default: false
        },
        filter: Function,
        sort: Function,
        highlightOnFirstMatch: {
            type: Boolean,
            default: true
        },
        cycleHighlight: {
            type: Boolean,
            default: true
        },
        keys: {
            type: Object,
            default: function _default() {
                return {
                    label: 'label',
                    value: 'value',
                    image: 'image'
                };
            }
        },
        invalid: {
            type: Boolean,
            default: false
        }
    },

    data: function data() {
        return {
            initialValue: this.value,
            isActive: false,
            isTouched: false,
            showDropdown: false,
            highlightedIndex: -1
        };
    },


    computed: {
        classes: function classes() {
            return ['ui-autocomplete--type-' + this.type, 'ui-autocomplete--icon-position-' + this.iconPosition, { 'is-active': this.isActive }, { 'is-invalid': this.invalid }, { 'is-touched': this.isTouched }, { 'is-disabled': this.disabled }, { 'has-label': this.hasLabel }, { 'has-floating-label': this.hasFloatingLabel }];
        },
        labelClasses: function labelClasses() {
            return {
                'is-inline': this.hasFloatingLabel && this.isLabelInline,
                'is-floating': this.hasFloatingLabel && !this.isLabelInline
            };
        },
        hasLabel: function hasLabel() {
            return Boolean(this.label) || Boolean(this.$slots.default);
        },
        hasFloatingLabel: function hasFloatingLabel() {
            return this.hasLabel && this.floatingLabel;
        },
        isLabelInline: function isLabelInline() {
            return this.valueLength === 0 && !this.isActive;
        },
        valueLength: function valueLength() {
            return this.value ? this.value.length : 0;
        },
        hasFeedback: function hasFeedback() {
            return this.showError || this.showHelp;
        },
        showError: function showError() {
            return this.invalid && (Boolean(this.error) || Boolean(this.$slots.error));
        },
        showHelp: function showHelp() {
            return Boolean(this.help) || Boolean(this.$slots.help);
        },
        matchingSuggestions: function matchingSuggestions() {
            var _this = this;

            var suggestions = this.suggestions.filter(function (suggestion) {
                if (_this.filter) {
                    return _this.filter(suggestion, _this.value, _this.defaultFilter);
                }

                var query = _this.value === null ? '' : _this.value;

                return _this.defaultFilter(suggestion, query);
            });

            if (this.sort) {
                suggestions.sort(this.sort.bind(this));
            }

            return suggestions.slice(0, this.limit);
        }
    },

    watch: {
        value: function value() {
            if (this.isActive && this.valueLength >= this.minChars) {
                this.openDropdown();
            }

            this.highlightedIndex = this.highlightOnFirstMatch ? 0 : -1;
        }
    },

    created: function created() {
        if (this.value === null) {
            this.initialValue = '';
            this.updateValue('');
        }
    },
    mounted: function mounted() {
        document.addEventListener('click', this.onExternalClick);
    },
    beforeDestroy: function beforeDestroy() {
        document.removeEventListener('click', this.onExternalClick);
    },


    methods: {
        defaultFilter: function defaultFilter(suggestion, query) {
            var text = suggestion[this.keys.label] || suggestion;

            if (typeof query === 'string') {
                query = query.toLowerCase();
            }

            return __WEBPACK_IMPORTED_MODULE_3_fuzzysearch___default()(query, text.toLowerCase());
        },
        selectSuggestion: function selectSuggestion(suggestion) {
            var _this2 = this;

            var value = void 0;

            if (this.append) {
                value += this.appendDelimiter + (suggestion[this.keys.value] || suggestion);
            } else {
                value = suggestion[this.keys.value] || suggestion;
            }

            this.updateValue(value);
            this.$emit('select', suggestion);

            this.$nextTick(function () {
                _this2.closeDropdown();
                _this2.$refs.input.focus();
            });
        },
        highlightSuggestion: function highlightSuggestion(index) {
            var firstIndex = 0;
            var lastIndex = this.$refs.suggestions.length - 1;

            if (index === -2) {
                index = lastIndex;
            } else if (index < firstIndex) {
                index = this.cycleHighlight ? lastIndex : index;
            } else if (index > lastIndex) {
                index = this.cycleHighlight ? firstIndex : -1;
            }

            this.highlightedIndex = index;

            if (this.showOnUpDown) {
                this.openDropdown();
            }

            if (index < firstIndex || index > lastIndex) {
                this.$emit('highlight-overflow', index);
            } else {
                this.$emit('highlight', this.$refs.suggestions[index].suggestion, index);
            }
        },
        selectHighlighted: function selectHighlighted(index, e) {
            if (this.showDropdown && this.$refs.suggestions.length > 0) {
                e.preventDefault();
                this.selectSuggestion(this.$refs.suggestions[index].suggestion);
            }
        },
        focus: function focus() {
            this.$refs.input.focus();
        },
        openDropdown: function openDropdown() {
            if (!this.showDropdown) {
                this.showDropdown = true;
                this.$emit('dropdown-open');
            }
        },
        closeDropdown: function closeDropdown() {
            var _this3 = this;

            if (this.showDropdown) {
                this.$nextTick(function () {
                    _this3.showDropdown = false;
                    _this3.highlightedIndex = -1;
                    _this3.$emit('dropdown-close');
                });
            }
        },
        updateValue: function updateValue(value) {
            this.$emit('input', value);
        },
        onFocus: function onFocus(e) {
            this.isActive = true;
            this.$emit('focus', e);
        },
        onChange: function onChange(e) {
            this.$emit('change', this.value, e);
        },
        onBlur: function onBlur(e) {
            this.isActive = false;
            this.$emit('blur', e);

            if (!this.isTouched) {
                this.isTouched = true;
                this.$emit('touch');
            }
        },
        onExternalClick: function onExternalClick(e) {
            if (!this.$el.contains(e.target) && this.showDropdown) {
                this.closeDropdown();
            }
        },
        reset: function reset() {
            if (document.activeElement === this.$refs.input) {
                document.activeElement.blur();
            }

            this.updateValue(this.initialValue);
            this.isTouched = false;
        }
    },

    components: {
        UiAutocompleteSuggestion: __WEBPACK_IMPORTED_MODULE_1__UiAutocompleteSuggestion_vue__["a" /* default */],
        UiIcon: __WEBPACK_IMPORTED_MODULE_2__UiIcon_vue__["a" /* default */]
    },

    directives: {
        autofocus: __WEBPACK_IMPORTED_MODULE_0__directives_autofocus__["a" /* default */]
    }
};

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-autocomplete-suggestion',

    props: {
        suggestion: {
            type: [String, Object],
            required: true
        },
        type: {
            type: String,
            default: 'simple' },
        highlighted: {
            type: Boolean,
            default: false
        },
        keys: {
            type: Object,
            default: function _default() {
                return {
                    label: 'label',
                    image: 'image'
                };
            }
        }
    },

    computed: {
        classes: function classes() {
            return ['ui-autocomplete-suggestion--type-' + this.type, { 'is-highlighted': this.highlighted }];
        },
        imageStyle: function imageStyle() {
            return { 'background-image': 'url(' + this.suggestion[this.keys.image] + ')' };
        }
    }
};

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiPopover_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UiProgressCircular_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UiRippleInk_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UiTooltip_vue__ = __webpack_require__(9);








/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-button',

    props: {
        type: {
            type: String,
            default: 'primary' },
        buttonType: String,
        href: String,
        color: {
            type: String,
            default: 'default' },
        size: {
            type: String,
            default: 'normal' },
        raised: {
            type: Boolean,
            default: false
        },
        icon: String,
        iconPosition: {
            type: String,
            default: 'left' },
        loading: {
            type: Boolean,
            default: false
        },
        hasDropdown: {
            type: Boolean,
            default: false
        },
        dropdownPosition: {
            type: String,
            default: 'bottom-start'
        },
        appendDropdownToBody: {
            type: Boolean,
            default: true
        },
        constrainDropdownToScrollParent: {
            type: Boolean,
            default: true
        },
        openDropdownOn: {
            type: String,
            default: 'click' },
        tooltip: String,
        openTooltipOn: String,
        tooltipPosition: String,
        disableRipple: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        classes: function classes() {
            return ['ui-button--type-' + this.type, 'ui-button--color-' + this.color, 'ui-button--icon-position-' + this.iconPosition, 'ui-button--size-' + this.size, { 'is-anchor': this.isAnchor }, { 'is-raised': this.raised }, { 'is-loading': this.loading }, { 'is-disabled': this.disabled || this.loading }, { 'has-dropdown': this.hasDropdown }];
        },
        isAnchor: function isAnchor() {
            return this.href !== undefined;
        },
        progressColor: function progressColor() {
            if (this.color === 'default' || this.type === 'secondary') {
                return 'black';
            }

            return 'white';
        }
    },

    methods: {
        onClick: function onClick(e) {
            this.$emit('click', e);
        },
        onDropdownOpen: function onDropdownOpen() {
            this.$emit('dropdown-open');
        },
        onDropdownClose: function onDropdownClose() {
            this.$emit('dropdown-close');
        },
        openDropdown: function openDropdown() {
            if (this.$refs.dropdown) {
                this.$refs.dropdown.open();
            }
        },
        closeDropdown: function closeDropdown() {
            if (this.$refs.dropdown) {
                this.$refs.dropdown.close();
            }
        },
        toggleDropdown: function toggleDropdown() {
            if (this.$refs.dropdown) {
                this.$refs.dropdown.toggle();
            }
        }
    },

    components: {
        UiIcon: __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__["a" /* default */],
        UiPopover: __WEBPACK_IMPORTED_MODULE_1__UiPopover_vue__["a" /* default */],
        UiProgressCircular: __WEBPACK_IMPORTED_MODULE_2__UiProgressCircular_vue__["a" /* default */],
        UiRippleInk: __WEBPACK_IMPORTED_MODULE_3__UiRippleInk_vue__["a" /* default */],
        UiTooltip: __WEBPACK_IMPORTED_MODULE_4__UiTooltip_vue__["a" /* default */]
    }
};

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiCalendarControls_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiCalendarMonth_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_date__ = __webpack_require__(3);







/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-calendar',

    props: {
        color: {
            type: String,
            default: 'default' },
        dateFilter: Function,
        lang: {
            type: Object,
            default: function _default() {
                return __WEBPACK_IMPORTED_MODULE_2__helpers_date__["a" /* default */].defaultLang;
            }
        },
        maxDate: Date,
        minDate: Date,
        raised: {
            type: Boolean,
            default: false
        },
        startOfWeek: {
            type: Number,
            default: 0
        },
        squareCells: {
            type: Boolean,
            default: false
        },
        value: Date,
        yearRange: {
            type: Array,
            default: function _default() {
                var thisYear = new Date().getFullYear();

                return Array.apply(null, Array(200)).map(function (item, index) {
                    return thisYear - 100 + index;
                });
            }
        }
    },

    data: function data() {
        return {
            today: new Date(),
            dateInView: this.value || new Date()
        };
    },


    computed: {
        classes: function classes() {
            return ['ui-calendar--color-' + this.color, { 'is-raised': this.raised }];
        }
    },

    watch: {
        value: function value() {
            if (this.value) {
                this.dateInView = __WEBPACK_IMPORTED_MODULE_2__helpers_date__["a" /* default */].clone(this.value);
            }
        }
    },

    methods: {
        onDateSelect: function onDateSelect(date) {
            this.$emit('input', date);
            this.$emit('date-select', date);
        },
        onMonthChange: function onMonthChange(newDate) {
            this.dateInView = newDate;
            this.$emit('month-change', newDate);
        },
        goToDate: function goToDate(date) {
            this.$refs.month.goToDate(date);
        }
    },

    components: {
        UiCalendarControls: __WEBPACK_IMPORTED_MODULE_0__UiCalendarControls_vue__["a" /* default */],
        UiCalendarMonth: __WEBPACK_IMPORTED_MODULE_1__UiCalendarMonth_vue__["a" /* default */]
    }
};

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiIconButton_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_date__ = __webpack_require__(3);







/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-calendar-controls',

    props: {
        color: {
            type: String,
            default: 'default' },
        lang: Object,
        dateInView: Date,
        minDate: Date,
        maxDate: Date,
        yearRange: {
            type: Array,
            required: true
        }
    },

    computed: {
        classes: function classes() {
            return ['ui-calendar-controls--color-' + this.color];
        },
        monthAndYear: function monthAndYear() {
            return __WEBPACK_IMPORTED_MODULE_2__helpers_date__["a" /* default */].getMonthFull(this.dateInView, this.lang) + ' ' + this.dateInView.getFullYear();
        },
        previousMonthDisabled: function previousMonthDisabled() {
            var lastDayOfPreviousMonth = __WEBPACK_IMPORTED_MODULE_2__helpers_date__["a" /* default */].clone(this.dateInView);

            lastDayOfPreviousMonth.setDate(0);

            var outsideYearRange = lastDayOfPreviousMonth.getFullYear() < this.yearRange[0];

            if (this.minDate) {
                return outsideYearRange || lastDayOfPreviousMonth.getTime() < this.minDate.getTime();
            }

            return outsideYearRange;
        },
        nextMonthDisabled: function nextMonthDisabled() {
            var firstDayOfNextMonth = __WEBPACK_IMPORTED_MODULE_2__helpers_date__["a" /* default */].clone(this.dateInView);

            firstDayOfNextMonth.setMonth(this.dateInView.getMonth() + 1, 1);

            var outsideYearRange = firstDayOfNextMonth.getFullYear() > this.yearRange[this.yearRange.length - 1];

            if (this.maxDate) {
                return outsideYearRange || firstDayOfNextMonth.getTime() > this.maxDate.getTime();
            }

            return outsideYearRange;
        }
    },

    methods: {
        goToPreviousMonth: function goToPreviousMonth() {
            var date = __WEBPACK_IMPORTED_MODULE_2__helpers_date__["a" /* default */].clone(this.dateInView);

            date.setDate(1);
            date.setMonth(date.getMonth() - 1);

            this.goToDate(date);
        },
        goToNextMonth: function goToNextMonth() {
            var date = __WEBPACK_IMPORTED_MODULE_2__helpers_date__["a" /* default */].clone(this.dateInView);

            date.setDate(1);
            date.setMonth(date.getMonth() + 1);

            this.goToDate(date);
        },
        goToDate: function goToDate(date) {
            this.$emit('go-to-date', date);
        }
    },

    components: {
        UiIcon: __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__["a" /* default */],
        UiIconButton: __WEBPACK_IMPORTED_MODULE_1__UiIconButton_vue__["a" /* default */]
    }
};

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiCalendarWeek_vue__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_date__ = __webpack_require__(3);






/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-calendar-month',

    props: {
        lang: Object,
        dateFilter: Function,
        dateInView: Date,
        selected: Date,
        maxDate: Date,
        minDate: Date,
        startOfWeek: {
            type: Number,
            default: 0
        },
        color: {
            type: String,
            default: 'primary' },
        squareCells: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        daysOfWeek: function daysOfWeek() {
            var days = this.lang.days.initials.slice(this.startOfWeek);

            if (days.length === 7) {
                return days;
            }

            return days.concat(this.lang.days.initials.slice(0, this.startOfWeek));
        },
        currentWeekStartDates: function currentWeekStartDates() {
            return this.getWeekStartDates(this.dateInView);
        }
    },

    methods: {
        getWeekStartDates: function getWeekStartDates(dateInWeek) {
            var date = __WEBPACK_IMPORTED_MODULE_1__helpers_date__["a" /* default */].clone(dateInWeek);

            date.setDate(1);
            date = __WEBPACK_IMPORTED_MODULE_1__helpers_date__["a" /* default */].moveToDayOfWeek(date, this.startOfWeek);

            var current = __WEBPACK_IMPORTED_MODULE_1__helpers_date__["a" /* default */].clone(date);
            current.setDate(current.getDate() + 7);

            var starts = [date];
            var month = current.getMonth();

            while (current.getMonth() === month) {
                starts.push(__WEBPACK_IMPORTED_MODULE_1__helpers_date__["a" /* default */].clone(current));
                current.setDate(current.getDate() + 7);
            }

            return starts;
        },
        goToDate: function goToDate(date) {
            this.$emit('change', __WEBPACK_IMPORTED_MODULE_1__helpers_date__["a" /* default */].clone(date));
        },
        onDateSelect: function onDateSelect(date) {
            this.$emit('date-select', date);
        }
    },

    components: {
        UiCalendarWeek: __WEBPACK_IMPORTED_MODULE_0__UiCalendarWeek_vue__["a" /* default */]
    }
};

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_date__ = __webpack_require__(3);




/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-calendar-week',

    props: {
        month: Number,
        weekStart: Date,
        minDate: Date,
        maxDate: Date,
        selected: Date,
        dateFilter: Function,
        color: {
            type: String,
            default: 'primary'
        },
        squareCells: {
            type: Boolean,
            default: false
        }
    },

    data: function data() {
        return {
            today: new Date()
        };
    },


    computed: {
        dates: function dates() {
            return this.buildDays(this.weekStart);
        },
        classes: function classes() {
            return ['ui-calendar-week--color-' + this.color, { 'ui-calendar-week--has-square-cells': this.squareCells }];
        }
    },

    methods: {
        buildDays: function buildDays(weekStart) {
            var days = [__WEBPACK_IMPORTED_MODULE_0__helpers_date__["a" /* default */].clone(weekStart)];
            var day = __WEBPACK_IMPORTED_MODULE_0__helpers_date__["a" /* default */].clone(weekStart);

            for (var i = 1; i <= 6; i++) {
                day = __WEBPACK_IMPORTED_MODULE_0__helpers_date__["a" /* default */].clone(day);
                day.setDate(day.getDate() + 1);

                days.push(day);
            }

            return days;
        },
        getDateClasses: function getDateClasses(date) {
            return [{ 'is-today': __WEBPACK_IMPORTED_MODULE_0__helpers_date__["a" /* default */].isSameDay(date, this.today) }, { 'is-in-other-month': this.isDateInOtherMonth(date) }, { 'is-selected': this.selected && __WEBPACK_IMPORTED_MODULE_0__helpers_date__["a" /* default */].isSameDay(date, this.selected) }, { 'is-disabled': this.isDateDisabled(date) }];
        },
        selectDate: function selectDate(date) {
            if (this.isDateDisabled(date)) {
                return;
            }

            this.$emit('date-select', date);
        },
        isDateInOtherMonth: function isDateInOtherMonth(date) {
            return this.month !== date.getMonth();
        },
        isDateDisabled: function isDateDisabled(date) {
            var isDisabled = this.minDate && __WEBPACK_IMPORTED_MODULE_0__helpers_date__["a" /* default */].isBefore(date, this.minDate) || this.maxDate && __WEBPACK_IMPORTED_MODULE_0__helpers_date__["a" /* default */].isAfter(date, this.maxDate);

            if (isDisabled) {
                return true;
            }

            return this.dateFilter ? !this.dateFilter(date) : false;
        }
    }
};

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-checkbox',

    props: {
        name: String,
        label: String,
        tabindex: [String, Number],
        value: {
            required: true
        },
        trueValue: {
            default: true
        },
        falseValue: {
            default: false
        },
        submittedValue: {
            type: String,
            default: 'on' },
        checked: {
            type: Boolean,
            default: false
        },
        boxPosition: {
            type: String,
            default: 'left' },
        color: {
            type: String,
            default: 'primary' },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data: function data() {
        return {
            isActive: false,
            isChecked: this.value === this.trueValue || this.checked
        };
    },


    computed: {
        classes: function classes() {
            return ['ui-checkbox--color-' + this.color, 'ui-checkbox--box-position-' + this.boxPosition, { 'is-checked': this.isChecked }, { 'is-active': this.isActive }, { 'is-disabled': this.disabled }];
        }
    },

    watch: {
        value: function value() {
            this.isChecked = this.value === this.trueValue;
        }
    },

    created: function created() {
        this.$emit('input', this.isChecked ? this.trueValue : this.falseValue);
    },


    methods: {
        focus: function focus() {
            this.$refs.input.focus();
        },
        onClick: function onClick(e) {
            var isCheckedPrevious = this.isChecked;
            var isChecked = e.target.checked;

            this.$emit('input', isChecked ? this.trueValue : this.falseValue, e);

            if (isCheckedPrevious !== isChecked) {
                this.$emit('change', isChecked ? this.trueValue : this.falseValue, e);
            }
        },
        onFocus: function onFocus(e) {
            this.isActive = true;
            this.$emit('focus', e);
        },
        onBlur: function onBlur(e) {
            this.isActive = false;
            this.$emit('blur', e);
        }
    }
};

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiCheckbox_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_util__ = __webpack_require__(6);






/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-checkbox-group',

    props: {
        name: String,
        options: {
            type: Array,
            required: true
        },
        value: {
            type: Array,
            required: true
        },
        keys: {
            type: Object,
            default: function _default() {
                return {
                    id: 'id',
                    name: 'name',
                    class: 'class',
                    label: 'label',
                    value: 'value',
                    disabled: 'disabled'
                };
            }
        },
        label: String,
        color: {
            type: String,
            default: 'primary' },
        boxPosition: {
            type: String,
            default: 'left' },
        vertical: {
            type: Boolean,
            default: false
        },
        help: String,
        error: String,
        invalid: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data: function data() {
        return {
            isActive: false,
            ignoreChange: false,
            checkboxValues: [],
            initialValue: JSON.parse(JSON.stringify(this.value))
        };
    },


    computed: {
        classes: function classes() {
            return ['ui-checkbox-group--color-' + this.color, 'ui-checkbox-group--box-position-' + this.boxPosition, { 'is-vertical': this.vertical }, { 'is-active': this.isActive }, { 'is-invalid': this.invalid }, { 'is-disabled': this.disabled }];
        },
        hasFeedback: function hasFeedback() {
            return this.showError || this.showHelp;
        },
        showError: function showError() {
            return this.invalid && (Boolean(this.error) || Boolean(this.$slots.error));
        },
        showHelp: function showHelp() {
            return Boolean(this.help) || Boolean(this.$slots.help);
        }
    },

    methods: {
        reset: function reset() {
            var _this = this;

            this.ignoreChange = true;
            this.options.forEach(function (option, index) {
                _this.checkboxValues[index] = _this.isOptionCheckedByDefault(option);
            });
            this.ignoreChange = false;

            this.$emit('input', this.initialValue.length > 0 ? [].concat(this.initialValue) : []);
        },
        isOptionCheckedByDefault: function isOptionCheckedByDefault(option) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers_util__["c" /* looseIndexOf */])(this.initialValue, option[this.keys.value] || option) > -1;
        },
        onFocus: function onFocus(e) {
            this.isActive = true;
            this.$emit('focus', e);
        },
        onBlur: function onBlur(e) {
            this.isActive = false;
            this.$emit('blur', e);
        },
        onChange: function onChange(args, option) {
            if (this.ignoreChange) {
                return;
            }

            var checked = args[0];
            var e = args[1];

            var value = [];
            var optionValue = option[this.keys.value] || option;
            var i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers_util__["c" /* looseIndexOf */])(this.value, optionValue);

            if (checked && i < 0) {
                value = this.value.concat(optionValue);
            }

            if (!checked && i > -1) {
                value = this.value.slice(0, i).concat(this.value.slice(i + 1));
            }

            this.$emit('input', value);
            this.$emit('change', value, e);
        }
    },

    components: {
        UiCheckbox: __WEBPACK_IMPORTED_MODULE_0__UiCheckbox_vue__["a" /* default */]
    }
};

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiRippleInk_vue__ = __webpack_require__(2);





/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-close-button',

    props: {
        size: {
            type: String,
            default: 'normal' },
        color: {
            type: String,
            default: 'black' },
        disableRipple: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        classes: function classes() {
            return ['ui-close-button--size-' + this.size, 'ui-close-button--color-' + this.color, { 'is-disabled': this.disabled || this.loading }];
        }
    },

    methods: {
        onClick: function onClick(e) {
            this.$emit('click', e);
        }
    },

    components: {
        UiIcon: __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__["a" /* default */],
        UiRippleInk: __WEBPACK_IMPORTED_MODULE_1__UiRippleInk_vue__["a" /* default */]
    }
};

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiRippleInk_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_uuid__ = __webpack_require__(23);






/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-collapsible',

    props: {
        open: {
            type: Boolean,
            default: false
        },
        title: String,
        removeIcon: {
            type: Boolean,
            default: false
        },
        disableRipple: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data: function data() {
        return {
            isOpen: this.open,
            id: __WEBPACK_IMPORTED_MODULE_2__helpers_uuid__["a" /* default */].short('ui-collapsible-')
        };
    },


    computed: {
        classes: function classes() {
            return [{ 'is-open': this.isOpen }, { 'is-disabled': this.disabled }];
        }
    },

    watch: {
        open: function open() {
            if (this.isOpen !== this.open) {
                this.isOpen = this.open;
            }
        }
    },

    mounted: function mounted() {
        if (this.isOpen) {
            this.$refs.bodyWrapper.style.maxHeight = 'none';
        }
    },


    methods: {
        toggleCollapsible: function toggleCollapsible() {
            if (this.disabled) {
                return;
            }

            this.isOpen = !this.isOpen;
        },
        onEnter: function onEnter(el) {
            this.$emit('open');
            el.style.maxHeight = el.scrollHeight + 'px';
        },
        afterEnter: function afterEnter(el) {
            el.style.maxHeight = 'none';
        },
        beforeLeave: function beforeLeave(el) {
            el.style.maxHeight = el.scrollHeight + 'px';

            el.offsetHeight;
        },
        onLeave: function onLeave(el) {
            el.style.maxHeight = 0;
            this.$emit('close');
        }
    },

    components: {
        UiIcon: __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__["a" /* default */],
        UiRippleInk: __WEBPACK_IMPORTED_MODULE_1__UiRippleInk_vue__["a" /* default */]
    }
};

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiButton_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiModal_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_classlist__ = __webpack_require__(5);







/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-confirm',

    props: {
        title: {
            type: String,
            default: 'UiConfirm'
        },
        type: {
            type: String,
            default: 'primary' },
        size: String,
        confirmButtonText: {
            type: String,
            default: 'OK'
        },
        confirmButtonIcon: String,
        denyButtonText: {
            type: String,
            default: 'Cancel'
        },
        denyButtonIcon: String,
        autofocus: {
            type: String,
            default: 'deny-button' },
        closeOnConfirm: {
            type: Boolean,
            default: true
        },
        dismissOn: String,
        transition: String,
        loading: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        confirmButtonColor: function confirmButtonColor() {
            var typeToColor = {
                default: 'default',
                primary: 'primary',
                accent: 'accent',
                success: 'green',
                warning: 'orange',
                danger: 'red'
            };

            return typeToColor[this.type];
        }
    },

    methods: {
        open: function open() {
            this.$refs.modal.open();
        },
        close: function close() {
            this.$refs.modal.close();
        },
        confirm: function confirm() {
            this.$emit('confirm');

            if (this.closeOnConfirm) {
                this.$refs.modal.close();
            }
        },
        deny: function deny() {
            this.$refs.modal.close();
            this.$emit('deny');
        },
        onModalOpen: function onModalOpen() {
            var button = void 0;

            if (this.autofocus === 'confirm-button') {
                button = this.$refs.confirmButton.$el;
            } else if (this.autofocus === 'deny-button') {
                button = this.$refs.denyButton.$el;
            }

            if (button) {
                __WEBPACK_IMPORTED_MODULE_2__helpers_classlist__["a" /* default */].add(button, 'has-focus-ring');
                button.addEventListener('blur', this.removeAutoFocus);
                button.focus();
            }

            this.$emit('open');
        },
        onModalReveal: function onModalReveal() {
            this.$emit('reveal');
        },
        onModalClose: function onModalClose() {
            this.$emit('close');
        },
        onModalHide: function onModalHide() {
            this.$emit('hide');
        },
        removeAutoFocus: function removeAutoFocus() {
            var button = void 0;

            if (this.autofocus === 'confirm-button') {
                button = this.$refs.confirmButton.$el;
            } else if (this.autofocus === 'deny-button') {
                button = this.$refs.denyButton.$el;
            }

            if (button) {
                __WEBPACK_IMPORTED_MODULE_2__helpers_classlist__["a" /* default */].remove(button, 'has-focus-ring');

                button.removeEventListener('blur', this.removeAutoFocus);
            }
        }
    },

    components: {
        UiButton: __WEBPACK_IMPORTED_MODULE_0__UiButton_vue__["a" /* default */],
        UiModal: __WEBPACK_IMPORTED_MODULE_1__UiModal_vue__["a" /* default */]
    }
};

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiButton_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiDatepickerCalendar_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UiIcon_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UiModal_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UiPopover_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins_RespondsToExternalClick__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_date__ = __webpack_require__(3);











/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-datepicker',

    props: {
        name: String,
        value: [Date, String],
        tabindex: [String, Number],
        startOfWeek: {
            type: Number,
            default: 0
        },
        minDate: Date,
        maxDate: Date,
        yearRange: Array,
        lang: {
            type: Object,
            default: function _default() {
                return __WEBPACK_IMPORTED_MODULE_6__helpers_date__["a" /* default */].defaultLang;
            }
        },
        customFormatter: Function,
        dateFilter: Function,
        color: {
            type: String,
            default: 'primary' },
        orientation: {
            type: String,
            default: 'portrait' },
        pickerType: {
            type: String,
            default: 'popover' },
        defaultView: {
            type: String,
            default: 'date'
        },
        appendDropdownToBody: Boolean,
        dropdownZIndex: Number,
        placeholder: String,
        icon: String,
        iconPosition: {
            type: String,
            default: 'left' },
        label: String,
        floatingLabel: {
            type: Boolean,
            default: false
        },
        invalid: {
            type: Boolean,
            default: false
        },
        help: String,
        error: String,
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data: function data() {
        return {
            isActive: false,
            isTouched: false,
            initialValue: JSON.stringify(this.value),
            calendarView: this.defaultView
        };
    },


    computed: {
        date: function date() {
            return typeof this.value === 'string' ? new Date(this.value) : this.value;
        },
        classes: function classes() {
            return ['ui-datepicker--icon-position-' + this.iconPosition, 'ui-datepicker--orientation-' + this.orientation, { 'is-active': this.isActive }, { 'is-invalid': this.invalid }, { 'is-touched': this.isTouched }, { 'is-disabled': this.disabled }, { 'has-label': this.hasLabel }, { 'has-floating-label': this.hasFloatingLabel }];
        },
        labelClasses: function labelClasses() {
            return {
                'is-inline': this.hasFloatingLabel && this.isLabelInline,
                'is-floating': this.hasFloatingLabel && !this.isLabelInline
            };
        },
        hasLabel: function hasLabel() {
            return Boolean(this.label) || Boolean(this.$slots.default);
        },
        hasFloatingLabel: function hasFloatingLabel() {
            return this.hasLabel && this.floatingLabel;
        },
        isLabelInline: function isLabelInline() {
            return !this.date && !this.isActive;
        },
        hasFeedback: function hasFeedback() {
            return this.showError || this.showHelp;
        },
        showError: function showError() {
            return this.invalid && (Boolean(this.error) || Boolean(this.$slots.error));
        },
        showHelp: function showHelp() {
            return Boolean(this.help) || Boolean(this.$slots.help);
        },
        displayText: function displayText() {
            if (!this.date) {
                return '';
            }

            return this.customFormatter ? this.customFormatter(this.date, this.lang) : __WEBPACK_IMPORTED_MODULE_6__helpers_date__["a" /* default */].humanize(this.date, this.lang);
        },
        hasDisplayText: function hasDisplayText() {
            return Boolean(this.displayText.length);
        },
        submittedValue: function submittedValue() {
            return this.date ? this.date.getFullYear() + '-' + (1 + this.date.getMonth()) + '-' + this.date.getDate() : '';
        },
        usesPopover: function usesPopover() {
            return this.pickerType === 'popover';
        },
        usesModal: function usesModal() {
            return this.pickerType === 'modal';
        }
    },

    watch: {
        isActive: function isActive(value) {
            if (value) {
                this.addExternalClickListener([this.$el, this.getPicker().$el], this.onExternalClick);
            } else {
                this.removeExternalClickListener();
            }
        }
    },

    methods: {
        onDateSelect: function onDateSelect(date) {
            this.$emit('input', date);
            this.closePicker();
        },
        isPickerOpen: function isPickerOpen() {
            return this.usesModal ? this.$refs.modal.isOpen : this.$refs.popover.isOpen();
        },
        getPicker: function getPicker() {
            return this.$refs[this.usesModal ? 'modal' : 'popover'];
        },
        openPicker: function openPicker() {
            if (this.disabled) {
                return;
            }

            this.getPicker().open();
        },
        closePicker: function closePicker() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { returnFocus: true };

            this.getPicker().close();

            this.calendarView = this.defaultView;

            if (options.returnFocus) {
                this.$refs.label.focus();
            }
        },
        togglePicker: function togglePicker() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { returnFocus: true };

            if (this.isPickerOpen()) {
                this.closePicker(options);
            } else {
                this.openPicker();
            }
        },
        onFocus: function onFocus(e) {
            this.isActive = true;
            this.$emit('focus', e);
        },
        onTabAway: function onTabAway(e) {
            this.isActive = false;
            this.$emit('blur', e);

            if (this.isPickerOpen()) {
                this.closePicker({ returnFocus: false });
            }
        },
        onPickerOpen: function onPickerOpen() {
            this.$emit('open');
        },
        onPickerClose: function onPickerClose() {
            this.$emit('close');

            if (!this.isTouched) {
                this.isTouched = true;
                this.$emit('touch');
            }
        },
        onExternalClick: function onExternalClick() {
            this.isActive = false;
        },
        focus: function focus() {
            this.$refs.label.focus();
        },
        clear: function clear() {
            this.$emit('input', null);
        },
        reset: function reset() {
            this.$emit('input', JSON.parse(this.initialValue));
        },
        resetTouched: function resetTouched() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { touched: false };

            this.isTouched = options.touched;
        }
    },

    components: {
        UiButton: __WEBPACK_IMPORTED_MODULE_0__UiButton_vue__["a" /* default */],
        UiDatepickerCalendar: __WEBPACK_IMPORTED_MODULE_1__UiDatepickerCalendar_vue__["a" /* default */],
        UiIcon: __WEBPACK_IMPORTED_MODULE_2__UiIcon_vue__["a" /* default */],
        UiModal: __WEBPACK_IMPORTED_MODULE_3__UiModal_vue__["a" /* default */],
        UiPopover: __WEBPACK_IMPORTED_MODULE_4__UiPopover_vue__["a" /* default */]
    },

    mixins: [__WEBPACK_IMPORTED_MODULE_5__mixins_RespondsToExternalClick__["a" /* default */]]
};

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiCalendarControls_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiCalendarMonth_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_element_scroll__ = __webpack_require__(21);








/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-datepicker-calendar',

    props: {
        value: Date,
        minDate: Date,
        maxDate: Date,
        startOfWeek: {
            type: Number,
            default: 0
        },
        currentView: {
            type: String,
            validator: function validator(value) {
                return value === 'date' || value === 'year';
            }
        },
        lang: {
            type: Object,
            default: function _default() {
                return __WEBPACK_IMPORTED_MODULE_2__helpers_date__["a" /* default */].defaultLang;
            }
        },
        yearRange: {
            type: Array,
            default: function _default() {
                var thisYear = new Date().getFullYear();

                return Array.apply(null, Array(200)).map(function (item, index) {
                    return thisYear - 100 + index;
                });
            }
        },
        dateFilter: Function,
        color: {
            type: String,
            default: 'primary' },
        orientation: {
            type: String,
            default: 'portrait' }
    },

    data: function data() {
        return {
            today: new Date(),
            dateInView: this.getDateInRange(this.value, new Date())
        };
    },


    computed: {
        classes: function classes() {
            return ['ui-datepicker-calendar--color-' + this.color, 'ui-datepicker-calendar--orientation-' + this.orientation];
        },
        headerYear: function headerYear() {
            return this.value ? this.value.getFullYear() : this.today.getFullYear();
        },
        headerWeekday: function headerWeekday() {
            return this.value ? __WEBPACK_IMPORTED_MODULE_2__helpers_date__["a" /* default */].getDayAbbreviated(this.value, this.lang) : __WEBPACK_IMPORTED_MODULE_2__helpers_date__["a" /* default */].getDayAbbreviated(this.today, this.lang);
        },
        headerDay: function headerDay() {
            var date = this.value ? this.value : this.today;

            return __WEBPACK_IMPORTED_MODULE_2__helpers_date__["a" /* default */].getMonthAbbreviated(date, this.lang) + ' ' + __WEBPACK_IMPORTED_MODULE_2__helpers_date__["a" /* default */].getDayOfMonth(date, this.lang);
        },
        showYearPicker: function showYearPicker() {
            return this.currentView === 'year';
        },
        showDatePicker: function showDatePicker() {
            return this.currentView === 'date';
        }
    },

    watch: {
        value: function value() {
            if (this.value) {
                this.dateInView = __WEBPACK_IMPORTED_MODULE_2__helpers_date__["a" /* default */].clone(this.value);
            }
        },
        currentView: function currentView() {
            var _this = this;

            if (this.showYearPicker) {
                this.$nextTick(function () {
                    var el = _this.$refs.years.querySelector('.is-selected') || _this.$refs.years.querySelector('.is-current-year');

                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_element_scroll__["b" /* scrollIntoView */])(el, { marginTop: 144 });
                });
            }
        }
    },

    methods: {
        selectYear: function selectYear(year) {
            var newDate = __WEBPACK_IMPORTED_MODULE_2__helpers_date__["a" /* default */].clone(this.dateInView);
            newDate.setFullYear(year);

            this.dateInView = this.getDateInRange(newDate);
            this.$emit('update:currentView', 'date');
        },
        getDateInRange: function getDateInRange(date, fallback) {
            date = date || fallback;

            if (this.minDate && date.getTime() < this.minDate.getTime()) {
                return this.minDate;
            }

            if (this.maxDate && date.getTime() > this.maxDate.getTime()) {
                return this.maxDate;
            }

            return date;
        },
        getYearClasses: function getYearClasses(year) {
            return {
                'is-current-year': this.isYearCurrent(year),
                'is-selected': this.isYearSelected(year)
            };
        },
        isYearCurrent: function isYearCurrent(year) {
            return year === this.today.getFullYear();
        },
        isYearSelected: function isYearSelected(year) {
            return this.value && year === this.value.getFullYear();
        },
        isYearOutOfRange: function isYearOutOfRange(year) {
            if (this.minDate && year < this.minDate.getFullYear()) {
                return true;
            }

            if (this.maxDate && year > this.maxDate.getFullYear()) {
                return true;
            }

            if (this.year < this.yearRange[0]) {
                return true;
            }

            if (this.year > this.yearRange[this.yearRange.length - 1]) {
                return true;
            }

            return false;
        },
        onDateSelect: function onDateSelect(date) {
            this.$emit('input', date);
            this.$emit('date-select', date);
        },
        onGoToDate: function onGoToDate(date) {
            this.$refs.month.goToDate(date);
        },
        onMonthChange: function onMonthChange(newDate) {
            this.dateInView = newDate;
            this.$emit('month-change', newDate);
        }
    },

    components: {
        UiCalendarControls: __WEBPACK_IMPORTED_MODULE_0__UiCalendarControls_vue__["a" /* default */],
        UiCalendarMonth: __WEBPACK_IMPORTED_MODULE_1__UiCalendarMonth_vue__["a" /* default */]
    }
};

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiRippleInk_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UiTooltip_vue__ = __webpack_require__(9);






/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-fab',

    props: {
        size: {
            type: String,
            default: 'normal' },
        color: {
            type: String,
            default: 'default' },
        icon: String,
        ariaLabel: String,
        tooltip: String,
        openTooltipOn: String,
        tooltipPosition: String,
        disableRipple: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        classes: function classes() {
            return ['ui-fab--color-' + this.color, 'ui-fab--size-' + this.size];
        }
    },

    methods: {
        onClick: function onClick(e) {
            this.$emit('click', e);
        }
    },

    components: {
        UiIcon: __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__["a" /* default */],
        UiRippleInk: __WEBPACK_IMPORTED_MODULE_1__UiRippleInk_vue__["a" /* default */],
        UiTooltip: __WEBPACK_IMPORTED_MODULE_2__UiTooltip_vue__["a" /* default */]
    }
};

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiRippleInk_vue__ = __webpack_require__(2);





/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-fileupload',

    props: {
        name: {
            type: String,
            required: true
        },
        label: String,
        tabindex: [String, Number],
        accept: String,
        multiple: {
            type: Boolean,
            default: false
        },
        required: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'primary' },
        color: {
            type: String,
            default: 'default' },
        size: {
            type: String,
            default: 'normal' },
        raised: {
            type: Boolean,
            default: false
        },
        iconPosition: {
            type: String,
            default: 'left' },
        disableRipple: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data: function data() {
        return {
            isActive: false,
            renderInput: true,
            hasSelection: false,
            hasMultiple: false,
            displayText: ''
        };
    },


    computed: {
        classes: function classes() {
            return ['ui-fileupload--type-' + this.type, 'ui-fileupload--color-' + this.color, 'ui-fileupload--icon-position-' + this.iconPosition, 'ui-fileupload--size-' + this.size, { 'is-active': this.isActive }, { 'is-multiple': this.hasMultiple }, { 'is-raised': this.raised }, { 'is-disabled': this.disabled }];
        },
        placeholder: function placeholder() {
            if (this.label) {
                return this.label;
            }

            return this.multiple ? 'Choose files' : 'Choose a file';
        }
    },

    methods: {
        onFocus: function onFocus(e) {
            this.isActive = true;
            this.$emit('focus', e);
        },
        onBlur: function onBlur(e) {
            this.isActive = false;
            this.$emit('blur', e);
        },
        onInput: function onInput(e) {
            this.$emit('input', this.$refs.input.files, e);
        },
        onChange: function onChange(e) {
            this.updateDisplayText(e);
            this.$emit('change', this.$refs.input.files, e);
        },
        updateDisplayText: function updateDisplayText(e) {
            var displayText = void 0;
            var input = this.$refs.input;

            if (input.files && input.files.length > 1) {
                displayText = input.files.length + ' files selected';
            } else {
                displayText = e.target.value.split('\\').pop();
            }

            if (displayText) {
                this.hasSelection = true;
                this.displayText = displayText;
                this.hasMultiple = input.files.length > 1;
            }
        },
        focus: function focus() {
            this.$refs.input.focus();
        },
        openPicker: function openPicker() {
            this.$refs.input.click();
        },
        clear: function clear() {
            var _this = this;

            this.hasSelection = false;

            this.renderInput = false;

            this.$nextTick(function () {
                _this.renderInput = true;
            });
        }
    },

    components: {
        UiIcon: __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__["a" /* default */],
        UiRippleInk: __WEBPACK_IMPORTED_MODULE_1__UiRippleInk_vue__["a" /* default */]
    }
};

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-focus-container',

    props: {
        containFocus: {
            type: Boolean,
            default: true
        },
        focusRedirector: Function,
        disabled: {
            type: Boolean,
            default: false
        },
        tag: {
            type: String,
            default: 'div'
        },
        lazy: {
            type: Boolean,
            default: false }
    },

    computed: {
        renderRedirector: function renderRedirector() {
            if (this.disabled) {
                return false;
            }

            return this.lazy ? this.containFocus : true;
        }
    },

    methods: {
        focus: function focus() {
            this.$refs.content.focus();
        },
        redirectFocus: function redirectFocus(e, options) {
            if (!this.containFocus) {
                this.$emit('focus-overflow', e, options);
                return;
            }

            e.stopPropagation();

            if (this.focusRedirector) {
                this.focusRedirector(e, options);
                return;
            }

            if (options.isTabbingForward) {
                this.$refs.content.focus();
            } else {
                this.$refs.lastFocusable.focus();
            }
        }
    }
};

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-icon',

    props: {
        icon: String,
        iconSet: {
            type: String,
            default: 'material-icons'
        },
        ariaLabel: String,
        removeText: {
            type: Boolean,
            default: false
        },
        useSvg: {
            type: Boolean,
            default: false
        }
    }
};

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiPopover_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UiProgressCircular_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UiRippleInk_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UiTooltip_vue__ = __webpack_require__(9);








/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-icon-button',

    props: {
        type: {
            type: String,
            default: 'primary' },
        buttonType: String,
        href: String,
        color: {
            type: String,
            default: 'default' },
        size: {
            type: String,
            default: 'normal' },
        icon: String,
        ariaLabel: String,
        loading: {
            type: Boolean,
            default: false
        },
        hasDropdown: {
            type: Boolean,
            default: false
        },
        dropdownPosition: {
            type: String,
            default: 'bottom-start'
        },
        appendDropdownToBody: {
            type: Boolean,
            default: true
        },
        constrainDropdownToScrollParent: {
            type: Boolean,
            default: true
        },
        openDropdownOn: {
            type: String,
            default: 'click' },
        tooltip: String,
        openTooltipOn: String,
        tooltipPosition: String,
        disableRipple: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        classes: function classes() {
            return ['ui-icon-button--type-' + this.type, 'ui-icon-button--color-' + this.color, 'ui-icon-button--size-' + this.size, { 'is-anchor': this.isAnchor }, { 'is-loading': this.loading }, { 'is-disabled': this.disabled || this.loading }, { 'has-dropdown': this.hasDropdown }];
        },
        isAnchor: function isAnchor() {
            return this.href !== undefined;
        },
        progressColor: function progressColor() {
            if (this.type === 'primary') {
                if (this.color === 'default' || this.color === 'black') {
                    return 'black';
                }

                return 'white';
            }

            if (this.color === 'white') {
                return 'white';
            }

            return 'black';
        }
    },

    methods: {
        onClick: function onClick(e) {
            this.$emit('click', e);
        },
        onDropdownOpen: function onDropdownOpen() {
            this.$emit('dropdown-open');
        },
        onDropdownClose: function onDropdownClose() {
            this.$emit('dropdown-close');
        },
        openDropdown: function openDropdown() {
            if (this.$refs.dropdown) {
                this.$refs.dropdown.open();
            }
        },
        closeDropdown: function closeDropdown() {
            if (this.$refs.dropdown) {
                this.$refs.dropdown.close();
            }
        },
        toggleDropdown: function toggleDropdown() {
            if (this.$refs.dropdown) {
                this.$refs.dropdown.toggle();
            }
        }
    },

    components: {
        UiIcon: __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__["a" /* default */],
        UiPopover: __WEBPACK_IMPORTED_MODULE_1__UiPopover_vue__["a" /* default */],
        UiProgressCircular: __WEBPACK_IMPORTED_MODULE_2__UiProgressCircular_vue__["a" /* default */],
        UiRippleInk: __WEBPACK_IMPORTED_MODULE_3__UiRippleInk_vue__["a" /* default */],
        UiTooltip: __WEBPACK_IMPORTED_MODULE_4__UiTooltip_vue__["a" /* default */]
    }
};

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiFocusContainer_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiMenuOption_vue__ = __webpack_require__(142);





/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-menu',

    props: {
        options: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        hasIcons: {
            type: Boolean,
            default: false
        },
        iconProps: Object,
        hasSecondaryText: {
            type: Boolean,
            default: false
        },
        containFocus: {
            type: Boolean,
            default: false
        },
        keys: {
            type: Object,
            default: function _default() {
                return {
                    icon: 'icon',
                    type: 'type',
                    label: 'label',
                    secondaryText: 'secondaryText',
                    iconProps: 'iconProps',
                    disabled: 'disabled',
                    href: 'href',
                    target: 'target'
                };
            }
        },
        disableRipple: {
            type: Boolean,
            default: false
        },
        raised: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        classes: function classes() {
            return {
                'is-raised': this.raised,
                'has-icons': this.hasIcons,
                'has-secondary-text': this.hasSecondaryText
            };
        }
    },

    methods: {
        selectOption: function selectOption(option) {
            if (option.disabled || option.type === 'divider') {
                return;
            }

            this.$emit('select', option);
            this.closeMenu();
        },
        closeMenu: function closeMenu() {
            this.$emit('close');
        }
    },

    components: {
        UiFocusContainer: __WEBPACK_IMPORTED_MODULE_0__UiFocusContainer_vue__["a" /* default */],
        UiMenuOption: __WEBPACK_IMPORTED_MODULE_1__UiMenuOption_vue__["a" /* default */]
    }
};

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiRippleInk_vue__ = __webpack_require__(2);





/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-menu-option',

    props: {
        type: String,
        label: String,
        href: String,
        target: String,
        icon: String,
        iconProps: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        secondaryText: String,
        disableRipple: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        classes: function classes() {
            return {
                'is-divider': this.isDivider,
                'is-disabled': this.disabled,
                'is-anchor': this.isAnchor
            };
        },
        isDivider: function isDivider() {
            return this.type === 'divider';
        },
        isAnchor: function isAnchor() {
            return !this.isDivider && this.href !== undefined;
        }
    },

    components: {
        UiIcon: __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__["a" /* default */],
        UiRippleInk: __WEBPACK_IMPORTED_MODULE_1__UiRippleInk_vue__["a" /* default */]
    }
};

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiCloseButton_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiFocusContainer_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_classlist__ = __webpack_require__(5);







/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-modal',

    props: {
        title: {
            type: String,
            default: 'UiModal title'
        },
        alignTop: {
            type: Boolean,
            default: false
        },
        alignTopMargin: {
            type: Number,
            default: 60
        },
        size: {
            type: String,
            default: 'normal' },
        role: {
            type: String,
            default: 'dialog' },
        transition: {
            type: String,
            default: 'scale-down' },
        removeHeader: {
            type: Boolean,
            default: false
        },
        removeCloseButton: {
            type: Boolean,
            default: false
        },
        preventShift: {
            type: Boolean,
            default: false
        },
        dismissible: {
            type: Boolean,
            default: true
        },
        dismissOn: {
            type: String,
            default: 'backdrop esc close-button'
        }
    },

    data: function data() {
        return {
            isOpen: false,
            lastFocusedElement: null
        };
    },


    computed: {
        classes: function classes() {
            return ['ui-modal--size-' + this.size, { 'has-footer': this.hasFooter }, { 'is-open': this.isOpen }, { 'is-aligned-top': this.alignTop }];
        },
        alignTopStyle: function alignTopStyle() {
            if (this.alignTop) {
                return { 'padding-top': this.alignTopMargin + 'px' };
            }

            return null;
        },
        toggleTransition: function toggleTransition() {
            return 'ui-modal--transition-' + this.transition;
        },
        hasFooter: function hasFooter() {
            return Boolean(this.$slots.footer);
        },
        dismissOnBackdrop: function dismissOnBackdrop() {
            return this.dismissOn.indexOf('backdrop') > -1;
        },
        dismissOnCloseButton: function dismissOnCloseButton() {
            return this.dismissOn.indexOf('close-button') > -1;
        },
        dismissOnEsc: function dismissOnEsc() {
            return this.dismissOn.indexOf('esc') > -1;
        }
    },

    watch: {
        isOpen: function isOpen() {
            var _this = this;

            this.$nextTick(function () {
                _this[_this.isOpen ? 'onOpen' : 'onClose']();
            });
        }
    },

    beforeDestroy: function beforeDestroy() {
        if (this.isOpen) {
            this.returnFocus();
        }
    },


    methods: {
        open: function open() {
            this.isOpen = true;
        },
        close: function close() {
            if (!this.dismissible) {
                return;
            }

            this.isOpen = false;
        },
        redirectFocus: function redirectFocus() {
            this.$refs.focusContainer.focus();
        },
        returnFocus: function returnFocus() {
            if (this.lastFocusedElement) {
                this.lastFocusedElement.focus();
            }
        },
        onBackdropClick: function onBackdropClick() {
            if (this.dismissOnBackdrop) {
                this.close();
            } else {
                this.redirectFocus();
            }
        },
        onEsc: function onEsc() {
            if (this.dismissOnEsc) {
                this.close();
            }
        },
        onOpen: function onOpen() {
            this.lastFocusedElement = document.activeElement;
            this.$refs.focusContainer.focus();

            __WEBPACK_IMPORTED_MODULE_2__helpers_classlist__["a" /* default */].add(document.body, 'ui-modal--is-open');
            this.incrementOpenModalCount();

            this.$emit('open');
        },
        onClose: function onClose() {
            this.returnFocus();
            this.$emit('close');
        },
        onEnter: function onEnter() {
            this.$emit('reveal');
        },
        onLeave: function onLeave() {
            this.$emit('hide');
            var newCount = this.decrementOpenModalCount();

            if (newCount === 0) {
                __WEBPACK_IMPORTED_MODULE_2__helpers_classlist__["a" /* default */].remove(document.body, 'ui-modal--is-open');
            }
        },
        getOpenModalCount: function getOpenModalCount() {
            var count = document.body.getAttribute('data-ui-open-modals');
            return count === undefined ? 0 : Number(count);
        },
        setOpenModalCount: function setOpenModalCount(count) {
            var normalizedCount = Math.max(0, count);

            if (normalizedCount === 0) {
                document.body.removeAttribute('data-ui-open-modals');
            } else {
                document.body.setAttribute('data-ui-open-modals', normalizedCount);
            }

            return normalizedCount;
        },
        incrementOpenModalCount: function incrementOpenModalCount() {
            return this.setOpenModalCount(this.getOpenModalCount() + 1);
        },
        decrementOpenModalCount: function decrementOpenModalCount() {
            return this.setOpenModalCount(this.getOpenModalCount() - 1);
        }
    },

    components: {
        UiCloseButton: __WEBPACK_IMPORTED_MODULE_0__UiCloseButton_vue__["a" /* default */],
        UiFocusContainer: __WEBPACK_IMPORTED_MODULE_1__UiFocusContainer_vue__["a" /* default */]
    }
};

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tippy_js_esm__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_classlist__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_element_ref__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_events__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UiFocusContainer_vue__ = __webpack_require__(14);









/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-popover',

    props: {
        animation: {
            type: String,
            default: 'fade' },
        appendToBody: {
            type: Boolean,
            default: true
        },
        closeOnScroll: {
            type: Boolean,
            default: true
        },
        constrainToScrollParent: {
            type: Boolean,
            default: true
        },
        containFocus: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        focusRedirector: Function,
        openOn: {
            type: String,
            default: 'click' },
        position: {
            type: String,
            default: 'bottom-start'
        },
        raised: {
            type: Boolean,
            default: true
        },
        trigger: {
            validator: function validator(value) {
                return __WEBPACK_IMPORTED_MODULE_2__helpers_element_ref__["a" /* default */].validate(value, '[UiPopover]: Invalid prop: "trigger". Expected Element, VueComponent or CSS selector string which matches an existing element.');
            }
        },
        zIndex: Number
    },

    data: function data() {
        return {
            returnFocus: true
        };
    },


    watch: {
        disabled: function disabled(value) {
            if (this.tip) {
                if (value === true) {
                    this.tip.disable();
                } else {
                    this.tip.enable();
                }
            }
        }
    },

    created: function created() {
        this.tip = null;
    },
    mounted: function mounted() {
        this.setupPopover();
    },
    beforeDestroy: function beforeDestroy() {
        this.destroyPopover();
    },


    methods: {
        setupPopover: function setupPopover() {
            this.triggerEl = __WEBPACK_IMPORTED_MODULE_2__helpers_element_ref__["a" /* default */].resolve(this.trigger, this.$el.parentElement);

            if (!this.triggerEl) {
                console.error('[UiPopover]: Trigger element not found.');
                return;
            }

            var options = {
                animateFill: false,

                animation: this.animation === 'none' ? 'fade' : this.animation,
                appendTo: this.appendToBody ? document.body : this.triggerEl.parentElement,
                arrow: false,
                content: this.$el,
                delay: [0, 0],
                distance: 0,
                duration: this.animation === 'none' ? 0 : [250, 200],
                hideOnClick: true,
                ignoreAttributes: true,
                interactive: true,
                lazy: true,
                maxWidth: '100%',
                multiple: true,
                onHidden: this.onHidden,
                onHide: this.onClose,
                onShow: this.onOpen,
                onShown: this.onShown,
                placement: this.position,
                role: 'dialog',
                theme: 'ui-popover',
                trigger: this.openOn.replace('hover', 'mouseenter'),
                zIndex: this.zIndex,
                popperOptions: {
                    modifiers: {
                        computeStyle: {
                            gpuAcceleration: !(window.devicePixelRatio < 1.5 && /Win/.test(navigator.platform))
                        }
                    }
                }
            };

            if (!this.constrainToScrollParent) {
                options.popperOptions.modifiers.preventOverflow = { enabled: false };
                options.popperOptions.modifiers.hide = { enabled: false };
            }

            this.tip = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tippy_js_esm__["a" /* default */])(this.triggerEl, options);

            if (this.disabled) {
                this.tip.disable();
            }
        },
        destroyPopover: function destroyPopover() {
            if (this.tip) {
                this.removeCloseEventListeners();
                this.tip.destroy();
                this.tip = null;
            }
        },
        isOpen: function isOpen() {
            return this.tip && this.tip.state.isVisible;
        },
        open: function open() {
            if (this.tip) {
                this.tip.show();
            }
        },
        close: function close() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { returnFocus: true };

            if (this.tip) {
                this.returnFocus = options.returnFocus;
                this.tip.hide();
            }
        },
        toggle: function toggle() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { returnFocus: true };

            if (this.tip) {
                this.returnFocus = options.returnFocus;
                this.tip[this.isOpen() ? 'hide' : 'show']();
            }
        },
        scheduleUpdate: function scheduleUpdate() {
            if (this.tip) {
                this.tip.popperInstance.scheduleUpdate();
            }
        },
        onOpen: function onOpen() {
            this.addCloseEventListeners();

            __WEBPACK_IMPORTED_MODULE_1__helpers_classlist__["a" /* default */].add(this.triggerEl, 'has-dropdown-open');

            this.$emit('open');
        },
        onClose: function onClose() {
            if (this.returnFocus && this.lastFocusedElement) {
                this.lastFocusedElement.focus();
            }

            this.removeCloseEventListeners();

            __WEBPACK_IMPORTED_MODULE_1__helpers_classlist__["a" /* default */].remove(this.triggerEl, 'has-dropdown-open');

            this.$emit('close');

            this.returnFocus = true;
        },
        onShown: function onShown() {
            this.lastFocusedElement = document.activeElement;
            this.$refs.focusContainer.focus();
            this.$emit('reveal');
        },
        onHidden: function onHidden() {
            this.$emit('hide');
        },
        closeOnExternal: function closeOnExternal(event, closeOptions) {
            if (!this.$el.contains(event.target)) {
                this.close(closeOptions);
            }
        },
        addCloseEventListeners: function addCloseEventListeners() {
            var _this = this;

            this.removeCloseEventListeners();

            setTimeout(function () {
                _this.removeExternalClickListener = __WEBPACK_IMPORTED_MODULE_3__helpers_events__["a" /* default */].on('click', document, function (e) {
                    _this.closeOnExternal(e, { returnFocus: false });
                });

                _this.removeEscListener = __WEBPACK_IMPORTED_MODULE_3__helpers_events__["a" /* default */].onKeydown(27, document, function () {
                    _this.close({ returnFocus: true });
                });

                if (_this.closeOnScroll) {
                    _this.removeScrollListener = __WEBPACK_IMPORTED_MODULE_3__helpers_events__["a" /* default */].on('scroll', document, function (e) {
                        _this.closeOnExternal(e, { returnFocus: true });
                    });
                }
            }, 0);
        },
        removeCloseEventListeners: function removeCloseEventListeners() {
            if (this.removeExternalClickListener) {
                this.removeExternalClickListener();
                this.removeExternalClickListener = null;
            }

            if (this.removeEscListener) {
                this.removeEscListener();
                this.removeEscListener = null;
            }

            if (this.removeScrollListener) {
                this.removeScrollListener();
                this.removeScrollListener = null;
            }
        }
    },

    components: {
        UiFocusContainer: __WEBPACK_IMPORTED_MODULE_4__UiFocusContainer_vue__["a" /* default */]
    }
};

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-preloader',

    props: {
        show: {
            type: Boolean,
            required: true
        }
    }
};

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-progress-circular',

    props: {
        type: {
            type: String,
            default: 'indeterminate' },
        color: {
            type: String,
            default: 'primary' },
        progress: {
            type: Number,
            default: 0
        },
        size: {
            type: Number,
            default: 32
        },
        stroke: Number,
        autoStroke: {
            type: Boolean,
            default: true
        },
        disableTransition: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        classes: function classes() {
            return ['ui-progress-circular--color-' + this.color, 'ui-progress-circular--type-' + this.type];
        },
        strokeDashArray: function strokeDashArray() {
            var circumference = 2 * Math.PI * this.radius;

            return Math.round(circumference * 1000) / 1000;
        },
        strokeDashOffset: function strokeDashOffset() {
            var progress = this.moderateProgress(this.progress);
            var circumference = 2 * Math.PI * this.radius;

            return (100 - progress) / 100 * circumference;
        },
        radius: function radius() {
            var stroke = this.stroke ? this.stroke : 4;
            return (this.size - stroke) / 2;
        },
        calculatedStroke: function calculatedStroke() {
            if (this.stroke) {
                return this.stroke;
            }

            if (this.autoStroke) {
                return parseInt(this.size / 8, 10);
            }

            return 4;
        }
    },

    methods: {
        moderateProgress: function moderateProgress(progress) {
            if (isNaN(progress) || progress < 0) {
                return 0;
            }

            if (progress > 100) {
                return 100;
            }

            return progress;
        }
    }
};

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-progress-linear',

    props: {
        type: {
            type: String,
            default: 'indeterminate' },
        color: {
            type: String,
            default: 'primary' },
        progress: {
            type: Number,
            default: 0
        }
    },

    computed: {
        classes: function classes() {
            return ['ui-progress-linear--color-' + this.color, 'ui-progress-linear--type-' + this.type];
        },
        moderatedProgress: function moderatedProgress() {
            if (this.progress < 0) {
                return 0;
            }

            if (this.progress > 100) {
                return 100;
            }

            return this.progress;
        }
    }
};

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-radio',

    props: {
        name: String,
        label: String,
        tabindex: [String, Number],
        value: {
            type: [Number, String],
            required: true
        },
        trueValue: {
            type: [Number, String],
            required: true
        },
        checked: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: 'primary' },
        buttonPosition: {
            type: String,
            default: 'left' },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data: function data() {
        return {
            isActive: false
        };
    },


    computed: {
        classes: function classes() {
            return ['ui-radio--color-' + this.color, 'ui-radio--button-position-' + this.buttonPosition, { 'is-active': this.isActive }, { 'is-checked': this.isChecked }, { 'is-disabled': this.disabled }];
        },
        isChecked: function isChecked() {
            return this.value === this.trueValue;
        }
    },

    created: function created() {
        if (this.checked) {
            this.$emit('input', this.trueValue);
        }
    },


    methods: {
        focus: function focus() {
            this.$refs.input.focus();
        },
        toggleCheck: function toggleCheck() {
            if (!this.disabled) {
                this.$emit('input', this.trueValue);
            }
        },
        onFocus: function onFocus(e) {
            this.isActive = true;
            this.$emit('focus', e);
        },
        onBlur: function onBlur(e) {
            this.isActive = false;
            this.$emit('blur', e);
        },
        onChange: function onChange(e) {
            this.$emit('change', this.isChecked, e);
        }
    }
};

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiRadio_vue__ = __webpack_require__(18);




/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-radio-group',

    props: {
        name: {
            type: String,
            required: true
        },
        tabindex: [String, Number],
        label: String,
        options: {
            type: Array,
            required: true
        },
        value: {
            type: [Number, String],
            required: true
        },
        keys: {
            type: Object,
            default: function _default() {
                return {
                    id: 'id',
                    class: 'class',
                    label: 'label',
                    value: 'value',
                    checked: 'checked',
                    disabled: 'disabled'
                };
            }
        },
        color: {
            type: String,
            default: 'primary' },
        buttonPosition: {
            type: String,
            default: 'left' },
        vertical: {
            type: Boolean,
            default: false
        },
        help: String,
        error: String,
        invalid: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data: function data() {
        return {
            isActive: false,
            initialValue: this.value,
            selectedOptionValue: this.value
        };
    },


    computed: {
        classes: function classes() {
            return ['ui-radio-group--color-' + this.color, 'ui-radio-group--button-position-' + this.buttonPosition, { 'is-vertical': this.vertical }, { 'is-active': this.isActive }, { 'is-invalid': this.invalid }, { 'is-disabled': this.disabled }];
        },
        hasFeedback: function hasFeedback() {
            return this.showError || this.showHelp;
        },
        showError: function showError() {
            return this.invalid && (Boolean(this.error) || Boolean(this.$slots.error));
        },
        showHelp: function showHelp() {
            return Boolean(this.help) || Boolean(this.$slots.help);
        }
    },

    watch: {
        selectedOptionValue: function selectedOptionValue() {
            this.$emit('input', this.selectedOptionValue);
            this.$emit('change', this.selectedOptionValue);
        },
        value: function value() {
            this.selectedOptionValue = this.value;
        }
    },

    methods: {
        reset: function reset() {
            this.$emit('input', this.initialValue);
        },
        isOptionCheckedByDefault: function isOptionCheckedByDefault(option) {
            return this.initialValue == option[this.keys.value] || this.initialValue == option || option[this.keys.checked];
        },
        getTrueValue: function getTrueValue(option) {
            if (typeof option === 'string' || typeof option === 'number') {
                return option;
            }

            var value = option[this.keys.value];

            if (value === undefined) {
                console.warn('[UiRadioGroup] option has no `value`: ', option);
                return option;
            }

            return value;
        },
        onFocus: function onFocus(e) {
            this.isActive = true;
            this.$emit('focus', e);
        },
        onBlur: function onBlur(e) {
            this.isActive = false;
            this.$emit('blur', e);
        }
    },

    components: {
        UiRadio: __WEBPACK_IMPORTED_MODULE_0__UiRadio_vue__["a" /* default */]
    }
};

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_classlist__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_element_ref__ = __webpack_require__(13);




var startRipple = function startRipple(eventType, event) {
    var holder = event.currentTarget || event.target;

    if (holder && !__WEBPACK_IMPORTED_MODULE_0__helpers_classlist__["a" /* default */].has(holder, 'ui-ripple-ink')) {
        holder = holder.querySelector('.ui-ripple-ink');
    }

    if (!holder) {
        return;
    }

    var prev = holder.getAttribute('data-ui-event');

    if (prev && prev !== eventType) {
        return;
    }

    holder.setAttribute('data-ui-event', eventType);

    var rect = holder.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    var ripple = document.createElement('div');
    var max = void 0;

    if (rect.width === rect.height) {
        max = rect.width * 1.412;
    } else {
        max = Math.sqrt(rect.width * rect.width + rect.height * rect.height);
    }

    var size = max * 2 + 'px';

    ripple.style.width = size;
    ripple.style.height = size;
    ripple.style.marginLeft = -max + x + 'px';
    ripple.style.marginTop = -max + y + 'px';

    ripple.className = 'ui-ripple-ink__ink';
    holder.appendChild(ripple);

    setTimeout(function () {
        __WEBPACK_IMPORTED_MODULE_0__helpers_classlist__["a" /* default */].add(ripple, 'is-held');
    }, 0);

    var releaseEvent = eventType === 'mousedown' ? 'mouseup' : 'touchend';

    var handleRelease = function handleRelease() {
        document.removeEventListener(releaseEvent, handleRelease);

        __WEBPACK_IMPORTED_MODULE_0__helpers_classlist__["a" /* default */].add(ripple, 'is-done');

        var timeout = 650;

        setTimeout(function () {
            holder.removeChild(ripple);

            if (holder.children.length === 0) {
                holder.removeAttribute('data-ui-event');
            }
        }, timeout);
    };

    document.addEventListener(releaseEvent, handleRelease);
};

var handleMouseDown = function handleMouseDown(e) {
    if (e.button === 0) {
        startRipple(e.type, e);
    }
};

var handleTouchStart = function handleTouchStart(e) {
    if (e.changedTouches) {
        for (var i = 0; i < e.changedTouches.length; ++i) {
            startRipple(e.type, e.changedTouches[i]);
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-ripple-ink',

    props: {
        trigger: {
            validator: function validator(value) {
                return __WEBPACK_IMPORTED_MODULE_1__helpers_element_ref__["a" /* default */].validate(value, '[UiRippleInk]: Invalid prop: "trigger". Expected Element, VueComponent or CSS selector string.');
            }
        }
    },

    watch: {
        trigger: function trigger() {
            this.setupRipple();
        }
    },

    created: function created() {
        this.triggerEl = null;
    },
    mounted: function mounted() {
        this.setupRipple();
    },
    beforeDestroy: function beforeDestroy() {
        this.destroyRipple();
    },


    methods: {
        setupRipple: function setupRipple() {
            this.triggerEl = __WEBPACK_IMPORTED_MODULE_1__helpers_element_ref__["a" /* default */].resolve(this.trigger, this.$el.parentElement);

            if (!this.triggerEl) {
                console.error('[UiRippleInk]: Trigger element not found.');
                return;
            }

            this.triggerEl.addEventListener('touchstart', handleTouchStart);
            this.triggerEl.addEventListener('mousedown', handleMouseDown);
        },
        destroyRipple: function destroyRipple() {
            if (!this.triggerEl) {
                return;
            }

            this.triggerEl.removeEventListener('mousedown', handleMouseDown);
            this.triggerEl.removeEventListener('touchstart', handleTouchStart);
        }
    }
};

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiPopover_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UiProgressCircular_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UiSelectOption_vue__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_RespondsToExternalClick__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_element_scroll__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_fuzzysearch__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_fuzzysearch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_fuzzysearch__);













/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-select',

    props: {
        name: String,
        tabindex: [String, Number],
        value: {
            type: [String, Number, Object, Array],
            required: true
        },
        options: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        placeholder: String,
        icon: String,
        iconPosition: {
            type: String,
            default: 'left' },
        label: String,
        floatingLabel: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'basic' },
        multiple: {
            type: Boolean,
            default: false
        },
        multipleDelimiter: {
            type: String,
            default: ', '
        },
        hasSearch: {
            type: Boolean,
            default: false
        },
        searchPlaceholder: {
            type: String,
            default: 'Search'
        },
        filter: Function,
        disableFilter: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        noResults: {
            type: Boolean,
            default: false
        },
        keys: {
            type: Object,
            default: function _default() {
                return {
                    class: 'class',
                    label: 'label',
                    value: 'value',
                    image: 'image'
                };
            }
        },
        invalid: {
            type: Boolean,
            default: false
        },
        help: String,
        error: String,
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data: function data() {
        return {
            query: '',
            isActive: false,
            isTouched: false,
            selectedIndex: -1,
            highlightedIndex: -1,
            initialValue: JSON.stringify(this.value)
        };
    },


    computed: {
        classes: function classes() {
            return ['ui-select--type-' + this.type, 'ui-select--icon-position-' + this.iconPosition, { 'is-active': this.isActive }, { 'is-invalid': this.invalid }, { 'is-touched': this.isTouched }, { 'is-disabled': this.disabled }, { 'is-multiple': this.multiple }, { 'has-label': this.hasLabel }, { 'has-floating-label': this.hasFloatingLabel }];
        },
        labelClasses: function labelClasses() {
            return {
                'is-inline': this.hasFloatingLabel && this.isLabelInline,
                'is-floating': this.hasFloatingLabel && !this.isLabelInline
            };
        },
        hasLabel: function hasLabel() {
            return Boolean(this.label) || Boolean(this.$slots.default);
        },
        hasFloatingLabel: function hasFloatingLabel() {
            return this.hasLabel && this.floatingLabel;
        },
        isLabelInline: function isLabelInline() {
            return this.value.length === 0 && !this.isActive;
        },
        hasFeedback: function hasFeedback() {
            return this.showError || this.showHelp;
        },
        showError: function showError() {
            return this.invalid && (Boolean(this.error) || Boolean(this.$slots.error));
        },
        showHelp: function showHelp() {
            return Boolean(this.help) || Boolean(this.$slots.help);
        },
        filteredOptions: function filteredOptions() {
            var _this = this;

            if (this.disableFilter) {
                return this.options;
            }

            var options = this.options.filter(function (option) {
                if (_this.filter) {
                    return _this.filter(option, _this.query, _this.defaultFilter);
                }

                return _this.defaultFilter(option, _this.query);
            });

            if (this.sort) {
                options.sort(this.sort.bind(this));
            }

            return options;
        },
        displayText: function displayText() {
            var _this2 = this;

            if (this.multiple) {
                if (this.value.length > 0) {
                    return this.value.map(function (value) {
                        return value[_this2.keys.label] || value;
                    }).join(this.multipleDelimiter);
                }

                return '';
            }

            return this.value ? this.value[this.keys.label] || this.value : '';
        },
        hasDisplayText: function hasDisplayText() {
            return Boolean(this.displayText.length);
        },
        hasNoResults: function hasNoResults() {
            if (this.loading || this.query.length === 0) {
                return false;
            }

            return this.disableFilter ? this.noResults : this.filteredOptions.length === 0;
        },
        submittedValue: function submittedValue() {
            var _this3 = this;

            if (!this.name || !this.value) {
                return;
            }

            if (Array.isArray(this.value)) {
                return this.value.map(function (option) {
                    return option[_this3.keys.value] || option;
                }).join(',');
            }

            return this.value[this.keys.value] || this.value;
        }
    },

    watch: {
        filteredOptions: function filteredOptions() {
            this.highlightedIndex = 0;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__helpers_element_scroll__["a" /* resetScroll */])(this.$refs.optionsList);
        },
        query: function query() {
            this.$emit('query-change', this.query);
        },
        isActive: function isActive(value) {
            if (value) {
                this.addExternalClickListener(this.$el, this.onExternalClick);
            } else {
                this.removeExternalClickListener();
            }
        }
    },

    created: function created() {
        if (!this.value || this.value === '') {
            this.setValue(null);
        }
    },


    methods: {
        setValue: function setValue(value) {
            value = value ? value : this.multiple ? [] : '';

            this.$emit('input', value);
            this.$emit('change', value);
        },
        highlightOption: function highlightOption(index) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { autoScroll: true };

            if (this.highlightedIndex === index || this.$refs.options.length === 0) {
                return;
            }

            var firstIndex = 0;
            var lastIndex = this.$refs.options.length - 1;

            if (index < firstIndex) {
                index = lastIndex;
            } else if (index > lastIndex) {
                index = firstIndex;
            }

            this.highlightedIndex = index;

            if (options.autoScroll) {
                this.scrollOptionIntoView(this.$refs.options[index].$el);
            }
        },
        selectHighlighted: function selectHighlighted(index, e) {
            if (this.$refs.options.length > 0) {
                e.preventDefault();
                this.selectOption(this.$refs.options[index].option, index);
            }
        },
        selectOption: function selectOption(option, index) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { autoClose: true };

            var shouldSelect = this.multiple && !this.isOptionSelected(option);

            if (this.multiple) {
                this.updateOption(option, { select: shouldSelect });
            } else {
                this.setValue(option);
                this.selectedIndex = index;
            }

            this.$emit('select', option, {
                selected: this.multiple ? shouldSelect : true
            });

            this.highlightedIndex = index;

            if (!this.multiple) {
                this.clearQuery();
            }

            if (!this.multiple && options.autoClose) {
                this.closeDropdown();
            }
        },
        isOptionSelected: function isOptionSelected(option) {
            if (this.multiple) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_util__["c" /* looseIndexOf */])(this.value, option) > -1;
            }

            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_util__["b" /* looseEqual */])(this.value, option);
        },
        updateOption: function updateOption(option) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { select: true };

            var value = [];
            var updated = false;
            var i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_util__["c" /* looseIndexOf */])(this.value, option);

            if (options.select && i < 0) {
                value = this.value.concat(option);
                updated = true;
            }

            if (!options.select && i > -1) {
                value = this.value.slice(0, i).concat(this.value.slice(i + 1));
                updated = true;
            }

            if (updated) {
                this.setValue(value);
            }
        },
        defaultFilter: function defaultFilter(option, query) {
            var text = option[this.keys.label] || option;

            if (typeof text === 'string') {
                text = text.toLowerCase();
            }

            return __WEBPACK_IMPORTED_MODULE_7_fuzzysearch___default()(query.toLowerCase(), text);
        },
        clearSelection: function clearSelection() {
            this.setValue(null);
        },
        clearQuery: function clearQuery() {
            this.query = '';
        },
        focus: function focus() {
            this.$refs.label.focus();
        },
        toggleDropdown: function toggleDropdown() {
            this.$refs.dropdown.toggle();
        },
        openDropdown: function openDropdown() {
            if (this.disabled) {
                return;
            }

            this.$refs.dropdown.open();
        },
        closeDropdown: function closeDropdown() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { blurAfterClose: false };

            this.$refs.dropdown.close();

            if (!this.isTouched) {
                this.isTouched = true;
                this.$emit('touch');
            }

            if (options.blurAfterClose) {
                this.isActive = false;
            } else {
                this.$refs.label.focus();
            }
        },
        onFocus: function onFocus(e) {
            if (this.isActive) {
                return;
            }

            this.isActive = true;
            this.$emit('focus', e);
        },
        onBlur: function onBlur(e) {
            this.isActive = false;
            this.$emit('blur', e);

            if (this.$refs.dropdown.isOpen()) {
                this.closeDropdown({ blurAfterClose: true });
            }
        },
        onOpen: function onOpen() {
            var _this4 = this;

            this.isActive = true;

            this.$refs.dropdown.$el.style.width = this.$refs.label.getBoundingClientRect().width + 'px';

            this.$nextTick(function () {
                _this4.scrollOptionIntoView(_this4.$refs.optionsList.querySelector('.is-selected'));
            });

            this.$emit('dropdown-open');
        },
        onReveal: function onReveal() {
            this.$refs[this.hasSearch ? 'searchInput' : 'dropdownContent'].focus();
        },
        onClose: function onClose() {
            this.highlightedIndex = this.multiple ? -1 : this.selectedIndex;
            this.$emit('dropdown-close');
        },
        onExternalClick: function onExternalClick() {
            if (this.$refs.dropdown.isOpen()) {
                this.closeDropdown({ blurAfterClose: true });
            } else if (this.isActive) {
                this.isActive = false;
            }
        },
        scrollOptionIntoView: function scrollOptionIntoView(optionEl) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__helpers_element_scroll__["b" /* scrollIntoView */])(optionEl, {
                container: this.$refs.optionsList,
                marginTop: 180
            });
        },
        reset: function reset() {
            this.setValue(JSON.parse(this.initialValue));
            this.clearQuery();
            this.resetTouched();

            this.selectedIndex = -1;
            this.highlightedIndex = -1;
        },
        resetTouched: function resetTouched() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { touched: false };

            this.isTouched = options.touched;
        }
    },

    components: {
        UiIcon: __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__["a" /* default */],
        UiPopover: __WEBPACK_IMPORTED_MODULE_1__UiPopover_vue__["a" /* default */],
        UiProgressCircular: __WEBPACK_IMPORTED_MODULE_2__UiProgressCircular_vue__["a" /* default */],
        UiSelectOption: __WEBPACK_IMPORTED_MODULE_3__UiSelectOption_vue__["a" /* default */]
    },

    mixins: [__WEBPACK_IMPORTED_MODULE_4__mixins_RespondsToExternalClick__["a" /* default */]]
};

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-select-option',

    props: {
        option: {
            type: [String, Number, Object],
            required: true
        },
        type: {
            type: String,
            default: 'basic' },
        multiple: {
            type: Boolean,
            default: false
        },
        highlighted: {
            type: Boolean,
            default: false
        },
        selected: {
            type: Boolean,
            default: false
        },
        keys: {
            type: Object,
            default: function _default() {
                return {
                    class: 'class',
                    label: 'label',
                    image: 'image'
                };
            }
        }
    },

    computed: {
        classes: function classes() {
            return ['ui-select-option--type-' + this.type, this.option[this.keys.class], { 'is-highlighted': this.highlighted }, { 'is-selected': this.selected }];
        },
        imageStyle: function imageStyle() {
            return { 'background-image': 'url(' + this.option[this.keys.image] + ')' };
        }
    },

    components: {
        UiIcon: __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__["a" /* default */]
    }
};

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_classlist__ = __webpack_require__(5);






/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-slider',

    props: {
        name: String,
        tabindex: [String, Number],
        icon: String,
        value: {
            type: Number,
            required: true
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        step: {
            type: Number,
            default: 10
        },
        snapToSteps: {
            type: Boolean,
            default: false
        },
        showMarker: {
            type: Boolean,
            default: false
        },
        markerValue: [String, Number],
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data: function data() {
        return {
            initialValue: this.value,
            isActive: false,
            isDragging: false,
            localValue: this.value
        };
    },


    computed: {
        classes: function classes() {
            return [{ 'is-dragging': this.isDragging }, { 'is-disabled': this.disabled }, { 'is-active': this.isActive }, { 'has-icon': this.hasIcon }, { 'has-marker': this.showMarker }];
        },
        hasIcon: function hasIcon() {
            return Boolean(this.$slots.icon) || Boolean(this.icon);
        },
        fillStyle: function fillStyle() {
            return { transform: 'scaleX(' + this.relativeValue(this.localValue) + ')' };
        },
        thumbStyle: function thumbStyle() {
            return {
                left: this.relativeValue(this.localValue) * 100 + '%'
            };
        },
        markerText: function markerText() {
            return this.markerValue === undefined ? this.value : this.markerValue;
        },
        snapPoints: function snapPoints() {
            var points = [];
            var point = this.step * Math.ceil(this.moderatedMin / this.step);

            while (point <= this.moderatedMax) {
                points.push(point);
                point += this.step;
            }

            return points;
        },
        moderatedMin: function moderatedMin() {
            return this.max > this.min ? this.min : 0;
        },
        moderatedMax: function moderatedMax() {
            return this.max > this.min ? this.max : 100;
        }
    },

    watch: {
        value: function value() {
            this.setValue(this.value);
        },
        isDragging: function isDragging() {
            var operation = this.isDragging ? 'add' : 'remove';
            __WEBPACK_IMPORTED_MODULE_1__helpers_classlist__["a" /* default */][operation](document.body, 'ui-slider--is-dragging');
        }
    },

    mounted: function mounted() {
        this.initializeSlider();
    },
    beforeDestroy: function beforeDestroy() {
        this.teardownSlider();
    },


    methods: {
        focus: function focus() {
            this.$el.focus();
        },
        reset: function reset() {
            this.setValue(this.initialValue);
        },
        onFocus: function onFocus() {
            this.isActive = true;
            this.$emit('focus');
        },
        onBlur: function onBlur() {
            this.isActive = false;
            this.$emit('blur');
        },
        onExternalClick: function onExternalClick(e) {
            if (!this.$el.contains(e.target)) {
                this.onBlur();
            }
        },
        setValueWithSnap: function setValueWithSnap(value) {
            value = this.moderateValue(value);

            if (this.snapToSteps) {
                value = this.getNearestSnapPoint(value);
            }

            this.setValue(value);
        },
        setValue: function setValue(value) {
            value = this.moderateValue(value);

            if (value === this.localValue) {
                return;
            }

            this.localValue = value;
            this.$emit('input', value);
            this.$emit('change', value);
        },
        incrementValue: function incrementValue() {
            this.setValueWithSnap(this.localValue + this.step);
        },
        decrementValue: function decrementValue() {
            this.setValueWithSnap(this.localValue - this.step);
        },
        getTrackOffset: function getTrackOffset() {
            var el = this.$refs.track;
            var offset = el.offsetLeft;

            while (el.offsetParent) {
                el = el.offsetParent;
                offset += el.offsetLeft;
            }

            return offset;
        },
        getPointStyle: function getPointStyle(point) {
            return {
                left: point + '%'
            };
        },
        initializeSlider: function initializeSlider() {
            document.addEventListener('touchend', this.onDragStop);
            document.addEventListener('mouseup', this.onDragStop);
            document.addEventListener('click', this.onExternalClick);
            this.initializeDrag();
        },
        teardownSlider: function teardownSlider() {
            document.removeEventListener('touchend', this.onDragStop);
            document.removeEventListener('mouseup', this.onDragStop);
            document.removeEventListener('click', this.onExternalClick);
        },
        initializeDrag: function initializeDrag() {
            var value = this.moderateValue(this.localValue ? this.localValue : 0);
            this.setValue(value);
        },
        onDragStart: function onDragStart(e) {
            if (this.disabled) {
                return;
            }

            if (!this.isActive) {
                this.onFocus();
            }

            this.isDragging = true;
            this.dragUpdate(e);

            document.addEventListener('touchmove', this.onDragMove);
            document.addEventListener('mousemove', this.onDragMove);

            this.$emit('dragstart', this.localValue, e);
        },
        onDragMove: function onDragMove(e) {
            this.dragUpdate(e);
        },
        dragUpdate: function dragUpdate(e) {
            var position = e.touches ? e.touches[0].pageX : e.pageX;
            var trackLength = this.$refs.track.offsetWidth;
            var relativeValue = (position - this.getTrackOffset()) / trackLength;
            var value = this.moderateValue(this.moderatedMin + relativeValue * (this.moderatedMax - this.moderatedMin));

            if (this.isDragging) {
                this.setValue(Math.round(value));
            }
        },
        onDragStop: function onDragStop(e) {
            if (this.isDragging) {
                this.isDragging = false;

                if (this.snapToSteps && this.value % this.step !== 0) {
                    this.setValueWithSnap(this.value);
                }

                document.removeEventListener('touchmove', this.onDragMove);
                document.removeEventListener('mousemove', this.onDragMove);

                this.$emit('dragend', this.localValue, e);
            }
        },
        getNearestSnapPoint: function getNearestSnapPoint(value) {
            var previousSnapPoint = Math.floor(value / this.step) * this.step;
            var nextSnapPoint = previousSnapPoint + this.step;
            var midpoint = (previousSnapPoint + nextSnapPoint) / 2;

            if (previousSnapPoint < this.moderatedMin) {
                if (nextSnapPoint > this.moderatedMax) {
                    return value;
                }
                return nextSnapPoint;
            }
            if (value >= midpoint && nextSnapPoint <= this.moderatedMax) {
                return nextSnapPoint;
            }
            return previousSnapPoint;
        },
        relativeValue: function relativeValue(value) {
            return (value - this.moderatedMin) / (this.moderatedMax - this.moderatedMin);
        },
        moderateValue: function moderateValue(value) {
            if (value < this.moderatedMin) {
                return this.moderatedMin;
            }

            if (value > this.moderatedMax) {
                return this.moderatedMax;
            }

            return value;
        }
    },

    components: {
        UiIcon: __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__["a" /* default */]
    }
};

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiButton_vue__ = __webpack_require__(7);




/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-snackbar',

    props: {
        message: String,
        action: String,
        actionColor: {
            type: String,
            default: 'accent' },
        transition: {
            type: String,
            default: 'slide' }
    },

    computed: {
        transitionName: function transitionName() {
            return 'ui-snackbar--transition-' + this.transition;
        }
    },

    methods: {
        onClick: function onClick() {
            this.$emit('click');
        },
        onActionClick: function onActionClick() {
            this.$emit('action-click');
        },
        onEnter: function onEnter() {
            this.$emit('show');
        },
        onLeave: function onLeave() {
            this.$emit('hide');
        }
    },

    components: {
        UiButton: __WEBPACK_IMPORTED_MODULE_0__UiButton_vue__["a" /* default */]
    }
};

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiSnackbar_vue__ = __webpack_require__(19);




/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-snackbar-container',

    props: {
        queueSnackbars: {
            type: Boolean,
            default: false
        },
        duration: {
            type: Number,
            default: 5000
        },
        allowHtml: {
            type: Boolean,
            default: false
        },
        position: {
            type: String,
            default: 'left' },
        transition: {
            type: String,
            default: 'slide' }
    },

    data: function data() {
        return {
            queue: [],
            snackbarTimeout: null
        };
    },


    computed: {
        classes: function classes() {
            return ['ui-snackbar-container--position-' + this.position];
        }
    },

    beforeDestroy: function beforeDestroy() {
        this.resetTimeout();
    },


    methods: {
        createSnackbar: function createSnackbar(snackbar) {
            snackbar.show = false;
            snackbar.duration = snackbar.duration || this.duration;

            this.queue.push(snackbar);

            if (this.queue.length === 1) {
                return this.showNextSnackbar();
            } else if (!this.queueSnackbars) {
                this.queue[0].show = false;
            }
        },
        showNextSnackbar: function showNextSnackbar() {
            if (this.queue.length === 0) {
                this.$emit('queue-end');
                return;
            }

            this.queue[0].show = true;
        },
        onShow: function onShow(snackbar) {
            var _this = this;

            if (this.queue.indexOf(snackbar) !== 0) {
                return;
            }

            this.snackbarTimeout = setTimeout(function () {
                _this.queue[0].show = false;
            }, snackbar.duration);

            this.$emit('snackbar-show', snackbar);
            this.callHook('onShow', snackbar);
        },
        onHide: function onHide(snackbar, index) {
            this.resetTimeout();

            if (this.queueSnackbars || this.queue.length === 1) {
                this.queue.splice(index, 1);
            } else {
                this.queue.splice(index, this.queue.length - 1);
            }

            this.$emit('snackbar-hide', snackbar);
            this.callHook('onHide', snackbar);

            this.showNextSnackbar();
        },
        onClick: function onClick(snackbar) {
            snackbar.show = false;
            this.callHook('onClick', snackbar);
        },
        onActionClick: function onActionClick(snackbar) {
            this.callHook('onActionClick', snackbar);
        },
        callHook: function callHook(hook, snackbar) {
            if (typeof snackbar[hook] === 'function') {
                snackbar[hook].call(undefined, snackbar);
            }
        },
        resetTimeout: function resetTimeout() {
            clearTimeout(this.snackbarTimeout);
            this.snackbarTimeout = null;
        }
    },

    components: {
        UiSnackbar: __WEBPACK_IMPORTED_MODULE_0__UiSnackbar_vue__["a" /* default */]
    }
};

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_util__ = __webpack_require__(6);




/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-switch',

    props: {
        name: String,
        label: String,
        tabindex: [String, Number],
        value: {
            required: true
        },
        trueValue: {
            default: true
        },
        falseValue: {
            default: false
        },
        submittedValue: {
            type: String,
            default: 'on' },
        checked: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: 'primary' },
        switchPosition: {
            type: String,
            default: 'left' },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data: function data() {
        return {
            isActive: false,
            isChecked: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers_util__["b" /* looseEqual */])(this.value, this.trueValue) || this.checked,
            initialValue: this.value
        };
    },


    computed: {
        classes: function classes() {
            return ['ui-switch--color-' + this.color, 'ui-switch--switch-position-' + this.switchPosition, { 'is-active': this.isActive }, { 'is-checked': this.isChecked }, { 'is-disabled': this.disabled }];
        }
    },

    watch: {
        value: function value() {
            this.isChecked = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers_util__["b" /* looseEqual */])(this.value, this.trueValue);
        }
    },

    created: function created() {
        this.$emit('input', this.isChecked ? this.trueValue : this.falseValue);
    },


    methods: {
        focus: function focus() {
            this.$refs.input.focus();
        },
        onClick: function onClick(e) {
            var isCheckedPrevious = this.isChecked;
            var isChecked = e.target.checked;

            this.$emit('input', isChecked ? this.trueValue : this.falseValue, e);

            if (isCheckedPrevious !== isChecked) {
                this.$emit('change', isChecked ? this.trueValue : this.falseValue, e);
            }
        },
        onFocus: function onFocus(e) {
            this.isActive = true;
            this.$emit('focus', e);
        },
        onBlur: function onBlur(e) {
            this.isActive = false;
            this.$emit('blur', e);
        }
    }
};

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_uuid__ = __webpack_require__(23);




/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-tab',

    props: {
        id: {
            type: String,
            default: function _default() {
                return __WEBPACK_IMPORTED_MODULE_0__helpers_uuid__["a" /* default */].short('ui-tab-');
            }
        },
        title: String,
        selected: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data: function data() {
        return {
            isActive: false
        };
    },


    watch: {
        disabled: function disabled() {
            this.$parent.onTabDisabledChange(this);
        }
    },

    created: function created() {
        this.$parent.addTab(this);
    },
    beforeDestroy: function beforeDestroy() {
        this.$parent.removeTab(this);
    },


    methods: {
        activate: function activate() {
            this.isActive = true;
            this.$emit('select', this.id);
        },
        deactivate: function deactivate() {
            this.isActive = false;
            this.$emit('deselect', this.id);
        }
    }
};

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiRippleInk_vue__ = __webpack_require__(2);





/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-tab-header-item',

    components: {
        UiIcon: __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__["a" /* default */],
        UiRippleInk: __WEBPACK_IMPORTED_MODULE_1__UiRippleInk_vue__["a" /* default */]
    },

    props: {
        id: String,
        type: {
            type: String,
            default: 'text' },
        title: String,
        active: {
            type: Boolean,
            default: false
        },
        disableRipple: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        classes: function classes() {
            return ['ui-tab-header-item--type-' + this.type, { 'is-active': this.active }, { 'is-disabled': this.disabled }];
        },
        hasIcon: function hasIcon() {
            return this.type === 'icon' || this.type === 'icon-and-text';
        },
        hasText: function hasText() {
            return this.type === 'text' || this.type === 'icon-and-text';
        }
    }
};

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiTabHeaderItem_vue__ = __webpack_require__(144);





/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-tabs',

    components: {
        Render: __WEBPACK_IMPORTED_MODULE_0__render__["a" /* default */],
        UiTabHeaderItem: __WEBPACK_IMPORTED_MODULE_1__UiTabHeaderItem_vue__["a" /* default */]
    },

    props: {
        type: {
            type: String,
            default: 'text' },
        confirmTabChange: Function,
        backgroundColor: {
            type: String,
            default: 'default' },
        textColor: {
            type: String,
            default: 'black' },
        textColorActive: {
            type: String,
            default: 'primary' },
        indicatorColor: {
            type: String,
            default: 'primary' },
        fullwidth: {
            type: Boolean,
            default: false
        },
        raised: {
            type: Boolean,
            default: false
        },
        disableRipple: {
            type: Boolean,
            default: false
        }
    },

    data: function data() {
        return {
            tabs: [],
            activeTabId: null,
            activeTabIndex: -1
        };
    },


    computed: {
        classes: function classes() {
            return ['ui-tabs--type-' + this.type, 'ui-tabs--text-color-' + this.textColor, 'ui-tabs--text-color-active-' + this.textColorActive, 'ui-tabs--background-color-' + this.backgroundColor, 'ui-tabs--indicator-color-' + this.indicatorColor, { 'is-raised': this.raised }, { 'is-fullwidth': this.fullwidth }];
        },
        hasIcon: function hasIcon() {
            return this.type === 'icon' || this.type === 'icon-and-text';
        }
    },

    watch: {
        activeTabId: function activeTabId() {
            var _this = this;

            this.tabs.forEach(function (tab, index) {
                if (_this.activeTabId === tab.id) {
                    tab.activate();
                    _this.activeTabIndex = index;
                } else if (tab.isActive) {
                    tab.deactivate();
                }
            });
        }
    },

    methods: {
        addTab: function addTab(tab) {
            this.tabs.push(tab);

            if (this.activeTabId === null || tab.selected) {
                this.activeTabId = tab.id;
            }
        },
        removeTab: function removeTab(tab) {
            var index = this.tabs.indexOf(tab);

            if (index > -1) {
                this.tabs.splice(index, 1);

                if (tab.id === this.activeTabId) {
                    this.selectTab(this.findNearestTab());
                }
            }
        },
        onTabDisabledChange: function onTabDisabledChange(tab) {
            if (tab.disabled && this.activeTabId === tab.id) {
                this.selectTab(this.findNearestTab());
            }
        },
        onTabClick: function onTabClick(tab, event) {
            this.$emit('tab-click', tab, event);
            this.selectTab(tab);
        },
        selectTab: function selectTab(tab) {
            if (tab === null || tab.disabled || tab.id === this.activeTabId) {
                return;
            }

            if (this.confirmTabChange && !this.confirmTabChange(this.tabs[this.activeTabIndex], tab)) {
                return;
            }

            this.activeTabId = tab.id;
            this.$emit('tab-change', tab);
        },
        selectNextTab: function selectNextTab() {
            var nextTab = this.findNextTab();

            if (nextTab) {
                this.selectTab(nextTab);
                nextTab.$el.focus();
            }
        },
        selectPreviousTab: function selectPreviousTab() {
            var previousTab = this.findPreviousTab();

            if (previousTab) {
                this.selectTab(previousTab);
                previousTab.$el.focus();
            }
        },
        findNextTab: function findNextTab() {
            var tab = null;

            for (var i = this.activeTabIndex + 1; i < this.$refs.tabHeaders.length; i++) {
                if (this.$refs.tabHeaders[i] && !this.$refs.tabHeaders[i].disabled) {
                    tab = this.$refs.tabHeaders[i];
                    break;
                }
            }

            return tab;
        },
        findPreviousTab: function findPreviousTab() {
            var tab = null;

            for (var i = this.activeTabIndex - 1; i >= 0; i--) {
                if (this.$refs.tabHeaders[i] && !this.$refs.tabHeaders[i].disabled) {
                    tab = this.$refs.tabHeaders[i];
                    break;
                }
            }

            return tab;
        },
        findNearestTab: function findNearestTab() {
            return this.findPreviousTab() || this.findNextTab();
        },
        findTabById: function findTabById(id) {
            for (var i = 0; i < this.$refs.tabHeaders.length; i++) {
                if (id === this.$refs.tabHeaders[i].id) {
                    return this.$refs.tabHeaders[i];
                }
            }

            return null;
        },
        setActiveTab: function setActiveTab(tabId) {
            var tab = this.findTabById(tabId);

            if (tab && !tab.disabled) {
                this.selectTab(tab);
            }
        }
    }
};

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_autofocus__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiIcon_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_autosize__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_autosize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_autosize__);







/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-textbox',

    props: {
        name: String,
        placeholder: String,
        tabindex: [String, Number],
        value: {
            type: [String, Number],
            default: ''
        },
        icon: String,
        iconPosition: {
            type: String,
            default: 'left' },
        label: String,
        floatingLabel: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'text' },
        multiLine: {
            type: Boolean,
            default: false
        },
        rows: {
            type: Number,
            default: 2
        },
        autocomplete: String,
        autofocus: {
            type: Boolean,
            default: false
        },
        autosize: {
            type: Boolean,
            default: true
        },
        min: Number,
        max: Number,
        step: {
            type: [String, Number],
            default: 'any'
        },
        maxlength: Number,
        minlength: Number,
        enforceMaxlength: {
            type: Boolean,
            default: false
        },
        required: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        help: String,
        error: String,
        invalid: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data: function data() {
        return {
            isActive: false,
            isTouched: false,
            initialValue: this.value,
            autosizeInitialized: false
        };
    },


    computed: {
        classes: function classes() {
            return ['ui-textbox--icon-position-' + this.iconPosition, { 'is-active': this.isActive }, { 'is-invalid': this.invalid }, { 'is-touched': this.isTouched }, { 'is-multi-line': this.multiLine }, { 'has-counter': this.maxlength }, { 'is-disabled': this.disabled }, { 'has-label': this.hasLabel }, { 'has-floating-label': this.hasFloatingLabel }];
        },
        labelClasses: function labelClasses() {
            return {
                'is-inline': this.hasFloatingLabel && this.isLabelInline,
                'is-floating': this.hasFloatingLabel && !this.isLabelInline
            };
        },
        hasLabel: function hasLabel() {
            return Boolean(this.label) || Boolean(this.$slots.default);
        },
        hasFloatingLabel: function hasFloatingLabel() {
            return this.hasLabel && this.floatingLabel;
        },
        isLabelInline: function isLabelInline() {
            return this.valueLength === 0 && !this.isActive;
        },
        minValue: function minValue() {
            if (this.type === 'number' && this.min !== undefined) {
                return this.min;
            }

            return null;
        },
        maxValue: function maxValue() {
            if (this.type === 'number' && this.max !== undefined) {
                return this.max;
            }

            return null;
        },
        stepValue: function stepValue() {
            return this.type === 'number' ? this.step : null;
        },
        valueLength: function valueLength() {
            return this.value ? this.value.length : 0;
        },
        hasFeedback: function hasFeedback() {
            return this.showError || this.showHelp;
        },
        showError: function showError() {
            return this.invalid && (Boolean(this.error) || Boolean(this.$slots.error));
        },
        showHelp: function showHelp() {
            return Boolean(this.help) || Boolean(this.$slots.help);
        }
    },

    created: function created() {
        if (this.value === null) {
            this.initialValue = '';
            this.updateValue('');
        }
    },
    mounted: function mounted() {
        if (this.multiLine && this.autosize) {
            __WEBPACK_IMPORTED_MODULE_2_autosize___default()(this.$refs.textarea);
            this.autosizeInitialized = true;
        }
    },
    beforeDestroy: function beforeDestroy() {
        if (this.autosizeInitialized) {
            __WEBPACK_IMPORTED_MODULE_2_autosize___default.a.destroy(this.$refs.textarea);
        }
    },


    methods: {
        updateValue: function updateValue(value) {
            this.$emit('input', value);
        },
        onChange: function onChange(e) {
            this.$emit('change', this.value, e);
        },
        onFocus: function onFocus(e) {
            this.isActive = true;
            this.$emit('focus', e);
        },
        onBlur: function onBlur(e) {
            this.isActive = false;
            this.$emit('blur', e);

            if (!this.isTouched) {
                this.isTouched = true;
                this.$emit('touch');
            }
        },
        onKeydown: function onKeydown(e) {
            this.$emit('keydown', e);
        },
        onKeydownEnter: function onKeydownEnter(e) {
            this.$emit('keydown-enter', e);
        },
        reset: function reset() {
            if (document.activeElement === this.$refs.input || document.activeElement === this.$refs.textarea) {
                document.activeElement.blur();
            }

            this.updateValue(this.initialValue);
            this.resetTouched();
        },
        resetTouched: function resetTouched() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { touched: false };

            this.isTouched = options.touched;
        },
        refreshSize: function refreshSize() {
            if (this.autosizeInitialized) {
                __WEBPACK_IMPORTED_MODULE_2_autosize___default.a.update(this.$refs.textarea);
            }
        },
        focus: function focus() {
            (this.$refs.input || this.$refs.textarea).focus();
        }
    },

    components: {
        UiIcon: __WEBPACK_IMPORTED_MODULE_1__UiIcon_vue__["a" /* default */]
    },

    directives: {
        autofocus: __WEBPACK_IMPORTED_MODULE_0__directives_autofocus__["a" /* default */]
    }
};

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIconButton_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiProgressLinear_vue__ = __webpack_require__(17);





/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-toolbar',

    props: {
        type: {
            type: String,
            default: 'default' },
        textColor: {
            type: String,
            default: 'black' },
        title: String,
        brand: String,
        removeBrandDivider: {
            type: Boolean,
            default: false
        },
        navIcon: {
            type: String,
            default: 'menu'
        },
        removeNavIcon: {
            type: Boolean,
            default: false
        },
        raised: {
            type: Boolean,
            default: true
        },
        progressPosition: {
            type: String,
            default: 'bottom' },
        loading: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        classes: function classes() {
            return ['ui-toolbar--type-' + this.type, 'ui-toolbar--text-color-' + this.textColor, 'ui-toolbar--progress-position-' + this.progressPosition, { 'is-raised': this.raised }];
        },
        progressColor: function progressColor() {
            return this.textColor === 'black' ? 'primary' : 'white';
        },
        hasBrandDivider: function hasBrandDivider() {
            return this.removeBrandDivider ? false : this.brand || this.$slots.brand;
        }
    },

    methods: {
        navIconClick: function navIconClick() {
            this.$emit('nav-icon-click');
        }
    },

    components: {
        UiIconButton: __WEBPACK_IMPORTED_MODULE_0__UiIconButton_vue__["a" /* default */],
        UiProgressLinear: __WEBPACK_IMPORTED_MODULE_1__UiProgressLinear_vue__["a" /* default */]
    }
};

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tippy_js_esm__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_element_ref__ = __webpack_require__(13);





/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-tooltip',

    props: {
        animation: {
            type: String,
            default: 'fade' },
        appendToBody: {
            type: Boolean,
            default: true
        },
        openDelay: {
            type: Number,
            default: 0
        },
        openOn: {
            type: String,
            default: 'mouseenter focus' },
        position: {
            type: String,
            default: 'bottom' },
        trigger: {
            validator: function validator(value) {
                return __WEBPACK_IMPORTED_MODULE_1__helpers_element_ref__["a" /* default */].validate(value, '[UiTooltip]: Invalid prop: "trigger". Expected Element, VueComponent or CSS selector string.');
            }
        },
        zIndex: Number
    },

    mounted: function mounted() {
        this.triggerEl = __WEBPACK_IMPORTED_MODULE_1__helpers_element_ref__["a" /* default */].resolve(this.trigger, this.$el.parentElement);

        if (!this.triggerEl) {
            console.error('[UiTooltip]: Trigger element not found.');
            return;
        }

        var options = {
            animateFill: this.animation !== 'fade',

            animation: this.animation === 'none' ? 'fade' : this.animation,
            arrow: false,
            content: this.$el,
            delay: [this.openDelay, 0],
            distance: 4,
            duration: this.animation === 'none' ? 0 : [250, 200],
            ignoreAttributes: true,
            lazy: true,
            multiple: true,
            placement: this.position,
            theme: 'ui-tooltip',
            trigger: this.openOn.replace('hover', 'mouseenter'),
            zIndex: this.zIndex,
            popperOptions: {
                modifiers: {
                    computeStyle: {
                        gpuAcceleration: !(window.devicePixelRatio < 1.5 && /Win/.test(navigator.platform))
                    }
                }
            }
        };

        if (!this.appendToBody) {
            options.appendTo = this.triggerEl.parentElement;
        }

        this.tip = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tippy_js_esm__["a" /* default */])(this.triggerEl, options);
    },
    beforeDestroy: function beforeDestroy() {
        if (this.tip) {
            this.tip.destroy();
            this.tip = null;
        }
    }
};

/***/ }),
/* 94 */
/***/ (function(module, exports) {


document.addEventListener('DOMContentLoaded', function () {
    var hadKeyboardEvent = false;
    var keyboardModalityWhitelist = ['input:not([type])', 'input[type=text]', 'input[type=number]', 'input[type=date]', 'input[type=time]', 'input[type=datetime]', 'textarea', '[role=textbox]', '[supports-modality=keyboard]'].join(',');

    var isHandlingKeyboardThrottle = void 0;

    var matcher = function () {
        var el = document.body;

        if (el.matchesSelector) {
            return el.matchesSelector;
        }

        if (el.webkitMatchesSelector) {
            return el.webkitMatchesSelector;
        }

        if (el.mozMatchesSelector) {
            return el.mozMatchesSelector;
        }

        if (el.msMatchesSelector) {
            return el.msMatchesSelector;
        }

        console.error('Couldn\'t find any matchesSelector method on document.body.');
    }();

    var disableFocusRingByDefault = function disableFocusRingByDefault() {
        var css = 'body:not([modality=keyboard]) :focus { outline: none; }';
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');

        style.type = 'text/css';
        style.id = 'disable-focus-ring';

        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        head.insertBefore(style, head.firstChild);
    };

    var focusTriggersKeyboardModality = function focusTriggersKeyboardModality(el) {
        var triggers = false;

        if (matcher) {
            triggers = matcher.call(el, keyboardModalityWhitelist) && matcher.call(el, ':not([readonly])');
        }

        return triggers;
    };

    disableFocusRingByDefault();

    document.body.addEventListener('keydown', function () {
        hadKeyboardEvent = true;

        if (isHandlingKeyboardThrottle) {
            clearTimeout(isHandlingKeyboardThrottle);
        }

        isHandlingKeyboardThrottle = setTimeout(function () {
            hadKeyboardEvent = false;
        }, 100);
    }, true);

    document.body.addEventListener('focus', function (e) {
        if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
            document.body.setAttribute('modality', 'keyboard');
        }
    }, true);

    document.body.addEventListener('blur', function () {
        document.body.removeAttribute('modality');
    }, true);
});

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
    name: 'render',

    functional: true,

    props: ['nodes'],

    render: function render(createElement, context) {
        return createElement('div', { class: 'ui-render' }, context.props.nodes);
    }
};

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, optionsArgument) {
	var clone = !optionsArgument || optionsArgument.clone !== false;

	return (clone && isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, optionsArgument)
		: value
}

function defaultArrayMerge(target, source, optionsArgument) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, optionsArgument)
	})
}

function mergeObject(target, source, optionsArgument) {
	var destination = {};
	if (isMergeableObject(target)) {
		Object.keys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], optionsArgument);
		});
	}
	Object.keys(source).forEach(function(key) {
		if (!isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], optionsArgument);
		} else {
			destination[key] = deepmerge(target[key], source[key], optionsArgument);
		}
	});
	return destination
}

function deepmerge(target, source, optionsArgument) {
	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var options = optionsArgument || { arrayMerge: defaultArrayMerge };
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, optionsArgument)
	} else if (sourceIsArray) {
		var arrayMerge = options.arrayMerge || defaultArrayMerge;
		return arrayMerge(target, source, optionsArgument)
	} else {
		return mergeObject(target, source, optionsArgument)
	}
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, optionsArgument)
	}, {})
};

var deepmerge_1 = deepmerge;

/* harmony default export */ __webpack_exports__["a"] = deepmerge_1;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 98 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 99 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 100 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 101 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 102 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 103 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 104 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 105 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 106 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 107 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 108 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 109 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 110 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 111 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 112 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 113 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 114 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 115 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 116 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 117 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 118 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 119 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 120 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 121 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 122 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 123 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 124 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 125 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 126 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 127 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 128 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 129 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 130 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 131 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 132 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 133 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 134 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 135 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 136 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 137 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 138 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.7
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["a"] = Popper;
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(187)))

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiAutocompleteSuggestion_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2ff3038a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiAutocompleteSuggestion_vue__ = __webpack_require__(152);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(104)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiAutocompleteSuggestion_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2ff3038a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiAutocompleteSuggestion_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiAutocompleteSuggestion.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiAutocompleteSuggestion.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ff3038a", Component.options)
  } else {
    hotAPI.reload("data-v-2ff3038a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiCalendarWeek_vue__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3c0bb760_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiCalendarWeek_vue__ = __webpack_require__(156);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(108)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiCalendarWeek_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3c0bb760_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiCalendarWeek_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiCalendarWeek.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiCalendarWeek.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c0bb760", Component.options)
  } else {
    hotAPI.reload("data-v-3c0bb760", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiMenuOption_vue__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5cb20b32_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiMenuOption_vue__ = __webpack_require__(164);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(116)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiMenuOption_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5cb20b32_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiMenuOption_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiMenuOption.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiMenuOption.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5cb20b32", Component.options)
  } else {
    hotAPI.reload("data-v-5cb20b32", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiSelectOption_vue__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a05cade2_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiSelectOption_vue__ = __webpack_require__(180);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(132)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiSelectOption_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a05cade2_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiSelectOption_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiSelectOption.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiSelectOption.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a05cade2", Component.options)
  } else {
    hotAPI.reload("data-v-a05cade2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiTabHeaderItem_vue__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_535cc9b2_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiTabHeaderItem_vue__ = __webpack_require__(161);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(113)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiTabHeaderItem_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_535cc9b2_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiTabHeaderItem_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiTabHeaderItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiTabHeaderItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-535cc9b2", Component.options)
  } else {
    hotAPI.reload("data-v-535cc9b2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = Component.exports;


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui-radio-group",
    class: _vm.classes
  }, [(_vm.label || _vm.$slots.default) ? _c('div', {
    staticClass: "ui-radio-group__label-text"
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "ui-radio-group__radios"
  }, _vm._l((_vm.options), function(option) {
    return _c('ui-radio', {
      key: option[_vm.keys.id],
      staticClass: "ui-radio-group__radio",
      class: option[_vm.keys.class],
      attrs: {
        "button-position": _vm.buttonPosition,
        "checked": _vm.isOptionCheckedByDefault(option),
        "color": _vm.color,
        "disabled": _vm.disabled || option[_vm.keys.disabled],
        "id": option[_vm.keys.id],
        "name": _vm.name,
        "tabindex": _vm.tabindex,
        "true-value": _vm.getTrueValue(option)
      },
      on: {
        "blur": _vm.onBlur,
        "focus": _vm.onFocus
      },
      model: {
        value: (_vm.selectedOptionValue),
        callback: function($$v) {
          _vm.selectedOptionValue = $$v
        },
        expression: "selectedOptionValue"
      }
    }, [_vm._v(_vm._s(option[_vm.keys.label] || option))])
  }), 1), _vm._v(" "), (_vm.hasFeedback) ? _c('div', {
    staticClass: "ui-radio-group__feedback"
  }, [(_vm.showError) ? _c('div', {
    staticClass: "ui-radio-group__feedback-text"
  }, [_vm._t("error", [_vm._v(_vm._s(_vm.error))])], 2) : (_vm.showHelp) ? _c('div', {
    staticClass: "ui-radio-group__feedback-text"
  }, [_vm._t("help", [_vm._v(_vm._s(_vm.help))])], 2) : _vm._e()]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0686b3c2", esExports)
  }
}

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui-slider",
    class: _vm.classes,
    attrs: {
      "role": "slider",
      "aria-valuemax": _vm.moderatedMax,
      "aria-valuemin": _vm.moderatedMin,
      "aria-valuenow": _vm.localValue,
      "tabindex": _vm.disabled ? null : (_vm.tabindex || '0')
    },
    on: {
      "blur": _vm.onBlur,
      "focus": _vm.onFocus,
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) { return null; }
        $event.preventDefault();
        return _vm.decrementValue($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "left", 37, $event.key, ["Left", "ArrowLeft"])) { return null; }
        if ('button' in $event && $event.button !== 0) { return null; }
        $event.preventDefault();
        return _vm.decrementValue($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "right", 39, $event.key, ["Right", "ArrowRight"])) { return null; }
        if ('button' in $event && $event.button !== 2) { return null; }
        $event.preventDefault();
        return _vm.incrementValue($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) { return null; }
        $event.preventDefault();
        return _vm.incrementValue($event)
      }]
    }
  }, [(_vm.name) ? _c('input', {
    staticClass: "ui-slider__hidden-input",
    attrs: {
      "type": "hidden",
      "name": _vm.name
    },
    domProps: {
      "value": _vm.value
    }
  }) : _vm._e(), _vm._v(" "), (_vm.hasIcon) ? _c('div', {
    staticClass: "ui-slider__icon"
  }, [_vm._t("icon", [_c('ui-icon', {
    attrs: {
      "icon": _vm.icon
    }
  })])], 2) : _vm._e(), _vm._v(" "), _c('div', {
    ref: "track",
    staticClass: "ui-slider__track",
    on: {
      "mousedown": _vm.onDragStart,
      "touchstart": _vm.onDragStart
    }
  }, [_c('div', {
    staticClass: "ui-slider__track-background"
  }, _vm._l((_vm.snapPoints), function(point) {
    return (_vm.snapToSteps) ? _c('span', {
      staticClass: "ui-slider__snap-point",
      style: ({
        left: 100 * _vm.relativeValue(point) + '%'
      })
    }) : _vm._e()
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "ui-slider__track-fill",
    style: (_vm.fillStyle)
  }), _vm._v(" "), _c('div', {
    ref: "thumb",
    staticClass: "ui-slider__thumb",
    style: (_vm.thumbStyle)
  }, [(_vm.showMarker) ? _c('div', {
    staticClass: "ui-slider__marker"
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 24 24",
      "width": "36",
      "height": "36"
    }
  }, [_c('path', {
    attrs: {
      "d": "M11 .5c-1.7.2-3.4.9-4.7 2-1.1.9-2 2-2.5 3.2-1.2 2.4-1.2 5.1-.1 7.7 1.1 2.6 2.8 5 5.3 7.5 1.2 1.2 2.8 2.7 3 2.7 0 0 .3-.2.6-.5 3.2-2.7 5.6-5.6 7.1-8.5.8-1.5 1.1-2.6 1.3-3.8.2-1.4 0-2.9-.5-4.3-1.2-3.2-4.1-5.4-7.5-5.8-.5-.2-1.5-.2-2-.2z"
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "ui-slider__marker-text"
  }, [_vm._v(_vm._s(_vm.markerText))])]) : _vm._e()])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0d1a7c42", esExports)
  }
}

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": _vm.disableAnimation ? null : 'ui-alert--transition-toggle'
    }
  }, [_c('div', {
    staticClass: "ui-alert",
    class: _vm.classes,
    attrs: {
      "role": "alert"
    }
  }, [_c('div', {
    staticClass: "ui-alert__body"
  }, [(!_vm.removeIcon) ? _c('div', {
    staticClass: "ui-alert__icon"
  }, [_vm._t("icon", [(_vm.type === 'info') ? _c('ui-icon', [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M12.984 9V6.984h-1.97V9h1.97zm0 8.016v-6h-1.97v6h1.97zm-.984-15c5.53 0 9.984 4.453 9.984 9.984S17.53 21.984 12 21.984 2.016 17.53 2.016 12 6.47 2.016 12 2.016z"
    }
  })])]) : _vm._e(), _vm._v(" "), (_vm.type === 'success') ? _c('ui-icon', [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M9.984 17.016l9-9-1.406-1.453-7.594 7.594-3.563-3.563L5.016 12zm2.016-15c5.53 0 9.984 4.453 9.984 9.984S17.53 21.984 12 21.984 2.016 17.53 2.016 12 6.47 2.016 12 2.016z"
    }
  })])]) : _vm._e(), _vm._v(" "), (_vm.type === 'warning') ? _c('ui-icon', [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M12.984 14.016v-4.03h-1.97v4.03h1.97zm0 3.984v-2.016h-1.97V18h1.97zm-12 3L12 2.016 23.016 21H.986z"
    }
  })])]) : _vm._e(), _vm._v(" "), (_vm.type === 'error') ? _c('ui-icon', [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M12.984 12.984v-6h-1.97v6h1.97zm0 4.032V15h-1.97v2.016h1.97zm-.984-15c5.53 0 9.984 4.453 9.984 9.984S17.53 21.984 12 21.984 2.016 17.53 2.016 12 6.47 2.016 12 2.016z"
    }
  })])]) : _vm._e()])], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "ui-alert__content"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
    staticClass: "ui-alert__dismiss-button"
  }, [(_vm.dismissible) ? _c('ui-close-button', {
    attrs: {
      "size": "small"
    },
    on: {
      "click": _vm.dismissAlert
    }
  }) : _vm._e()], 1)])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0dfa6b64", esExports)
  }
}

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui-snackbar-container",
    class: _vm.classes
  }, _vm._l((_vm.queue), function(snackbar, index) {
    return _c('ui-snackbar', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (snackbar.show),
        expression: "snackbar.show"
      }],
      key: index,
      attrs: {
        "action-color": snackbar.actionColor,
        "action": snackbar.action,
        "message": snackbar.message,
        "transition": _vm.transition
      },
      on: {
        "action-click": function($event) {
          _vm.onActionClick(snackbar)
        },
        "click": function($event) {
          _vm.onClick(snackbar)
        },
        "hide": function($event) {
          _vm.onHide(snackbar, index)
        },
        "show": function($event) {
          _vm.onShow(snackbar)
        }
      }
    }, [(_vm.allowHtml) ? _c('div', {
      domProps: {
        "innerHTML": _vm._s(snackbar.message)
      }
    }) : _vm._e()])
  }), 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0e0792ee", esExports)
  }
}

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui-calendar",
    class: _vm.classes
  }, [_c('ui-calendar-controls', {
    ref: "controls",
    staticClass: "ui-calendar__header",
    attrs: {
      "color": _vm.color,
      "date-in-view": _vm.dateInView,
      "lang": _vm.lang,
      "max-date": _vm.maxDate,
      "min-date": _vm.minDate,
      "year-range": _vm.yearRange
    },
    on: {
      "go-to-date": _vm.goToDate
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "ui-calendar__body"
  }, [_c('ui-calendar-month', {
    ref: "month",
    attrs: {
      "color": _vm.color,
      "date-in-view": _vm.dateInView,
      "lang": _vm.lang,
      "selected": _vm.value,
      "start-of-week": _vm.startOfWeek,
      "square-cells": _vm.squareCells
    },
    on: {
      "change": _vm.onMonthChange,
      "date-select": _vm.onDateSelect
    },
    scopedSlots: _vm._u([{
      key: "date",
      fn: function(props) {
        return [(_vm.$scopedSlots.date) ? _vm._t("date", null, {
          date: props.date
        }) : [_vm._v(_vm._s(props.date.getDate()))]]
      }
    }])
  })], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-10feac3c", esExports)
  }
}

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "ui-radio",
    class: _vm.classes,
    on: {
      "click": _vm.toggleCheck
    }
  }, [_c('div', {
    staticClass: "ui-radio__input-wrapper"
  }, [_c('input', {
    ref: "input",
    staticClass: "ui-radio__input",
    attrs: {
      "type": "radio",
      "disabled": _vm.disabled,
      "name": _vm.name,
      "tabindex": _vm.tabindex
    },
    domProps: {
      "checked": _vm.checked,
      "value": _vm.trueValue
    },
    on: {
      "blur": _vm.onBlur,
      "change": _vm.onChange,
      "focus": _vm.onFocus
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "ui-radio__focus-ring"
  }), _vm._v(" "), _c('span', {
    staticClass: "ui-radio__outer-circle"
  }), _vm._v(" "), _c('span', {
    staticClass: "ui-radio__inner-circle"
  })]), _vm._v(" "), (_vm.label || _vm.$slots.default) ? _c('div', {
    staticClass: "ui-radio__label-text"
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1658ed6d", esExports)
  }
}

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "ui-progress-linear--transition-fade"
    }
  }, [_c('div', {
    staticClass: "ui-progress-linear",
    class: _vm.classes
  }, [(_vm.type === 'determinate') ? _c('div', {
    staticClass: "ui-progress-linear__progress-bar is-determinate",
    style: ({
      'transform': ("scaleX(" + (_vm.moderatedProgress / 100) + ")")
    }),
    attrs: {
      "role": "progressbar",
      "aria-valuemax": 100,
      "aria-valuemin": 0,
      "aria-valuenow": _vm.moderatedProgress
    }
  }) : _c('div', {
    staticClass: "ui-progress-linear__progress-bar is-indeterminate",
    attrs: {
      "role": "progressbar",
      "aria-valuemax": 100,
      "aria-valuemin": 0
    }
  })])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-22995a30", esExports)
  }
}

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "ui-autocomplete-suggestion",
    class: _vm.classes
  }, [_vm._t("default", [(_vm.type === 'simple') ? _c('div', {
    staticClass: "ui-autocomplete-suggestion__simple"
  }, [_vm._v("\n            " + _vm._s(_vm.suggestion[_vm.keys.label] || _vm.suggestion) + "\n        ")]) : _vm._e(), _vm._v(" "), (_vm.type === 'image') ? _c('div', {
    staticClass: "ui-autocomplete-suggestion__image"
  }, [_c('div', {
    staticClass: "ui-autocomplete-suggestion__image-object",
    style: (_vm.imageStyle)
  }), _vm._v(" "), _c('div', {
    staticClass: "ui-autocomplete-suggestion__image-text"
  }, [_vm._v(_vm._s(_vm.suggestion[_vm.keys.label]))])]) : _vm._e()])], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2ff3038a", esExports)
  }
}

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui-tabs",
    class: _vm.classes
  }, [_c('div', {
    staticClass: "ui-tabs__header"
  }, [_c('ul', {
    staticClass: "ui-tabs__header-items",
    attrs: {
      "role": "tablist"
    }
  }, _vm._l((_vm.tabs), function(tab) {
    return _c('ui-tab-header-item', {
      key: tab.id,
      ref: "tabHeaders",
      refInFor: true,
      attrs: {
        "active": _vm.activeTabId === tab.id,
        "disable-ripple": _vm.disableRipple,
        "disabled": tab.disabled,
        "id": tab.id,
        "title": tab.title,
        "type": _vm.type
      },
      nativeOn: {
        "click": function($event) {
          _vm.onTabClick(tab, $event)
        },
        "keydown": [function($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "left", 37, $event.key, ["Left", "ArrowLeft"])) { return null; }
          if ('button' in $event && $event.button !== 0) { return null; }
          return _vm.selectPreviousTab($event)
        }, function($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "right", 39, $event.key, ["Right", "ArrowRight"])) { return null; }
          if ('button' in $event && $event.button !== 2) { return null; }
          return _vm.selectNextTab($event)
        }]
      }
    }, [(tab.$slots.header) ? _c('render', {
      attrs: {
        "nodes": tab.$slots.header
      }
    }) : (_vm.hasIcon && Boolean(tab.$slots.icon)) ? _c('render', {
      attrs: {
        "slot": "icon",
        "nodes": tab.$slots.icon
      },
      slot: "icon"
    }) : _vm._e()], 1)
  }), 1)]), _vm._v(" "), _c('div', {
    staticClass: "ui-tabs__body"
  }, [_vm._t("default")], 2)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-309a677c", esExports)
  }
}

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui-preloader",
    class: {
      'is-loading': _vm.show
    }
  }, [_c('div', {
    staticClass: "ui-preloader__progressbar",
    attrs: {
      "role": "progressbar",
      "aria-busy": _vm.show ? 'true' : false
    }
  })])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-32cd8368", esExports)
  }
}

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "ui-icon",
    class: [_vm.iconSet, _vm.icon],
    attrs: {
      "aria-label": _vm.ariaLabel
    }
  }, [(_vm.useSvg) ? _c('svg', {
    staticClass: "ui-icon__svg"
  }, [_c('use', {
    attrs: {
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xlink:href": '#' + _vm.icon
    }
  })]) : _vm._t("default", [_vm._v(_vm._s(_vm.removeText ? null : _vm.icon))])], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-39a27af7", esExports)
  }
}

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', {
    staticClass: "ui-calendar-week",
    class: _vm.classes
  }, _vm._l((_vm.dates), function(date) {
    return _c('td', {
      key: date.toString()
    }, [_c('button', {
      staticClass: "ui-calendar-week__date",
      class: _vm.getDateClasses(date),
      attrs: {
        "disabled": _vm.isDateDisabled(date)
      },
      on: {
        "click": function($event) {
          _vm.selectDate(date)
        }
      }
    }, [_vm._t("default", [_vm._v(_vm._s(date.getDate()))], {
      date: date
    })], 2)])
  }), 0)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3c0bb760", esExports)
  }
}

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ui-focus-container', {
    ref: "focusContainer",
    staticClass: "ui-menu",
    class: _vm.classes,
    attrs: {
      "role": "menu",
      "tag": "ul",
      "lazy": "",
      "contain-focus": _vm.containFocus
    }
  }, _vm._l((_vm.options), function(option, index) {
    return _c('ui-menu-option', {
      key: index,
      attrs: {
        "disable-ripple": _vm.disableRipple,
        "disabled": option[_vm.keys.disabled],
        "href": option[_vm.keys.href],
        "icon-props": _vm.iconProps || option[_vm.keys.iconProps],
        "icon": _vm.hasIcons ? option[_vm.keys.icon] : null,
        "label": option[_vm.keys.type] === 'divider' ? null : option[_vm.keys.label] || option,
        "secondary-text": _vm.hasSecondaryText ? option[_vm.keys.secondaryText] : null,
        "target": option[_vm.keys.target],
        "type": option[_vm.keys.type]
      },
      nativeOn: {
        "click": function($event) {
          _vm.selectOption(option)
        },
        "keydown": [function($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
          _vm.selectOption(option)
        }, function($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) { return null; }
          return _vm.closeMenu($event)
        }]
      }
    }, [_vm._t("option", null, {
      option: option
    })], 2)
  }), 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-41a170dd", esExports)
  }
}

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ui-focus-container', {
    ref: "focusContainer",
    staticClass: "ui-popover",
    class: {
      'is-raised': _vm.raised
    },
    attrs: {
      "role": "dialog",
      "contain-focus": _vm.containFocus,
      "focus-redirector": _vm.focusRedirector
    },
    on: {
      "focus-overflow": function($event) {
        _vm.close()
      }
    }
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-48582497", esExports)
  }
}

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "ui-fab",
    class: _vm.classes,
    attrs: {
      "aria-label": _vm.ariaLabel || _vm.tooltip
    },
    on: {
      "click": _vm.onClick
    }
  }, [(_vm.icon || _vm.$slots.default) ? _c('div', {
    staticClass: "ui-fab__icon"
  }, [_vm._t("default", [_c('ui-icon', {
    attrs: {
      "icon": _vm.icon
    }
  })])], 2) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "ui-fab__focus-ring"
  }), _vm._v(" "), (!_vm.disableRipple) ? _c('ui-ripple-ink') : _vm._e(), _vm._v(" "), (_vm.tooltip) ? _c('ui-tooltip', {
    attrs: {
      "open-on": _vm.openTooltipOn,
      "position": _vm.tooltipPosition
    }
  }, [_vm._v(_vm._s(_vm.tooltip))]) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4a69660e", esExports)
  }
}

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ui-modal', {
    ref: "modal",
    staticClass: "ui-confirm",
    attrs: {
      "role": "alertdialog",
      "dismiss-on": _vm.dismissOn,
      "dismissible": !_vm.loading,
      "title": _vm.title,
      "transition": _vm.transition,
      "size": _vm.size
    },
    on: {
      "close": _vm.onModalClose,
      "hide": _vm.onModalHide,
      "open": _vm.onModalOpen,
      "reveal": _vm.onModalReveal
    }
  }, [_c('div', {
    staticClass: "ui-confirm__message"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
    staticClass: "ui-confirm__footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('ui-button', {
    ref: "confirmButton",
    attrs: {
      "color": _vm.confirmButtonColor,
      "icon": _vm.confirmButtonIcon,
      "loading": _vm.loading
    },
    on: {
      "click": _vm.confirm
    }
  }, [_vm._v(_vm._s(_vm.confirmButtonText))]), _vm._v(" "), _c('ui-button', {
    ref: "denyButton",
    attrs: {
      "disabled": _vm.loading,
      "icon": _vm.denyButtonIcon
    },
    on: {
      "click": _vm.deny
    }
  }, [_vm._v(_vm._s(_vm.denyButtonText))])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4f7f2732", esExports)
  }
}

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "ui-tab-header-item",
    class: _vm.classes,
    attrs: {
      "role": "tab",
      "aria-controls": _vm.id,
      "aria-selected": _vm.active ? 'true' : null,
      "disabled": _vm.disabled,
      "tabindex": _vm.active ? 0 : -1
    }
  }, [_vm._t("default", [(_vm.hasIcon) ? _c('div', {
    staticClass: "ui-tab-header-item__icon"
  }, [_vm._t("icon")], 2) : _vm._e(), _vm._v(" "), (_vm.hasText) ? _c('div', {
    staticClass: "ui-tab-header-item__text"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e()]), _vm._v(" "), (!_vm.disableRipple && !_vm.disabled) ? _c('ui-ripple-ink') : _vm._e()], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-535cc9b2", esExports)
  }
}

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui-select",
    class: _vm.classes
  }, [(_vm.name) ? _c('input', {
    staticClass: "ui-select__hidden-input",
    attrs: {
      "type": "hidden",
      "name": _vm.name
    },
    domProps: {
      "value": _vm.submittedValue
    }
  }) : _vm._e(), _vm._v(" "), (_vm.icon || _vm.$slots.icon) ? _c('div', {
    staticClass: "ui-select__icon-wrapper"
  }, [_vm._t("icon", [_c('ui-icon', {
    attrs: {
      "icon": _vm.icon
    }
  })])], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "ui-select__content"
  }, [_c('div', {
    ref: "label",
    staticClass: "ui-select__label",
    attrs: {
      "tabindex": _vm.disabled ? null : (_vm.tabindex || '0')
    },
    on: {
      "focus": _vm.onFocus,
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        $event.preventDefault();
        return _vm.openDropdown($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) { return null; }
        $event.preventDefault();
        return _vm.openDropdown($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")) { return null; }
        return _vm.onBlur($event)
      }]
    }
  }, [(_vm.label || _vm.$slots.default) ? _c('div', {
    staticClass: "ui-select__label-text",
    class: _vm.labelClasses
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "ui-select__display"
  }, [_c('div', {
    staticClass: "ui-select__display-value",
    class: {
      'is-placeholder': !_vm.hasDisplayText
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.hasDisplayText ? _vm.displayText : (_vm.hasFloatingLabel && _vm.isLabelInline) ? null : _vm.placeholder) + "\n                ")]), _vm._v(" "), _c('ui-icon', {
    staticClass: "ui-select__dropdown-button"
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M6.984 9.984h10.03L12 15z"
    }
  })])])], 1), _vm._v(" "), _c('ui-popover', {
    ref: "dropdown",
    staticClass: "ui-select__dropdown",
    attrs: {
      "close-on-scroll": false,
      "constrain-to-scroll-parent": false,
      "disabled": _vm.disabled
    },
    on: {
      "close": _vm.onClose,
      "open": _vm.onOpen,
      "reveal": _vm.onReveal
    }
  }, [_c('div', {
    ref: "dropdownContent",
    staticClass: "ui-select__dropdown-content",
    attrs: {
      "tabindex": "-1"
    },
    on: {
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) { return null; }
        $event.preventDefault();
        _vm.highlightOption(_vm.highlightedIndex + 1)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        $event.preventDefault();
        $event.stopPropagation();
        _vm.selectHighlighted(_vm.highlightedIndex, $event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) { return null; }
        $event.preventDefault();
        _vm.closeDropdown()
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")) { return null; }
        return _vm.onBlur($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) { return null; }
        $event.preventDefault();
        _vm.highlightOption(_vm.highlightedIndex - 1)
      }]
    }
  }, [(_vm.hasSearch) ? _c('div', {
    staticClass: "ui-select__search",
    on: {
      "click": function($event) {
        $event.stopPropagation();
      },
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) { return null; }
        $event.stopPropagation();
      }
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.query),
      expression: "query"
    }],
    ref: "searchInput",
    staticClass: "ui-select__search-input",
    attrs: {
      "autocomplete": "off",
      "type": "text",
      "placeholder": _vm.searchPlaceholder
    },
    domProps: {
      "value": (_vm.query)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.query = $event.target.value
      }
    }
  }), _vm._v(" "), _c('ui-icon', {
    staticClass: "ui-select__search-icon"
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M9.516 14.016c2.484 0 4.5-2.016 4.5-4.5s-2.016-4.5-4.5-4.5-4.5 2.016-4.5 4.5 2.016 4.5 4.5 4.5zm6 0l4.97 4.97-1.5 1.5-4.97-4.97v-.797l-.28-.282c-1.126.984-2.626 1.547-4.22 1.547-3.61 0-6.516-2.86-6.516-6.47S5.906 3 9.516 3s6.47 2.906 6.47 6.516c0 1.594-.564 3.094-1.548 4.22l.28.28h.798z"
    }
  })])]), _vm._v(" "), (_vm.loading) ? _c('ui-progress-circular', {
    staticClass: "ui-select__search-progress",
    attrs: {
      "size": 20,
      "stroke": 4
    }
  }) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c('ul', {
    ref: "optionsList",
    staticClass: "ui-select__options"
  }, [_vm._l((_vm.filteredOptions), function(option, index) {
    return _c('ui-select-option', {
      key: index,
      ref: "options",
      refInFor: true,
      attrs: {
        "highlighted": _vm.highlightedIndex === index,
        "keys": _vm.keys,
        "multiple": _vm.multiple,
        "option": option,
        "selected": _vm.isOptionSelected(option),
        "type": _vm.type
      },
      nativeOn: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.selectOption(option, index)
        },
        "mouseover": function($event) {
          $event.stopPropagation();
          _vm.highlightOption(index, {
            autoScroll: false
          })
        }
      }
    }, [_vm._t("option", null, {
      highlighted: _vm.highlightedIndex === index,
      index: index,
      option: option,
      selected: _vm.isOptionSelected(option)
    })], 2)
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.hasNoResults),
      expression: "hasNoResults"
    }],
    staticClass: "ui-select__no-results"
  }, [_vm._t("no-results", [_vm._v("No results found")])], 2)], 2)])])], 1), _vm._v(" "), (_vm.hasFeedback) ? _c('div', {
    staticClass: "ui-select__feedback"
  }, [(_vm.showError) ? _c('div', {
    staticClass: "ui-select__feedback-text"
  }, [_vm._t("error", [_vm._v(_vm._s(_vm.error))])], 2) : (_vm.showHelp) ? _c('div', {
    staticClass: "ui-select__feedback-text"
  }, [_vm._t("help", [_vm._v(_vm._s(_vm.help))])], 2) : _vm._e()]) : _vm._e()])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-54cff87a", esExports)
  }
}

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": _vm.transitionName
    },
    on: {
      "after-enter": _vm.onEnter,
      "after-leave": _vm.onLeave
    }
  }, [_c('div', {
    staticClass: "ui-snackbar",
    on: {
      "click": _vm.onClick
    }
  }, [_c('div', {
    staticClass: "ui-snackbar__message"
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.message))])], 2), _vm._v(" "), _c('div', {
    staticClass: "ui-snackbar__action"
  }, [(_vm.action) ? _c('ui-button', {
    staticClass: "ui-snackbar__action-button",
    attrs: {
      "type": "secondary",
      "color": _vm.actionColor
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.onActionClick($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.action))]) : _vm._e()], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5ad542fa", esExports)
  }
}

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c(_vm.isAnchor ? 'a' : 'li', {
    tag: "component",
    staticClass: "ui-menu-option",
    class: _vm.classes,
    attrs: {
      "role": "menu-item",
      "href": _vm.isAnchor ? (_vm.disabled ? null : _vm.href) : null,
      "tabindex": (_vm.isDivider || _vm.isAnchor || _vm.disabled) ? null : '0',
      "target": _vm.isAnchor ? (_vm.disabled ? null : _vm.target) : null
    }
  }, [(!_vm.isDivider) ? _vm._t("default", [_c('div', {
    staticClass: "ui-menu-option__content"
  }, [(_vm.icon) ? _c('ui-icon', {
    staticClass: "ui-menu-option__icon",
    attrs: {
      "icon-set": _vm.iconProps.iconSet,
      "icon": _vm.icon,
      "remove-text": _vm.iconProps.removeText,
      "use-svg": _vm.iconProps.useSvg
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "ui-menu-option__text"
  }, [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), (_vm.secondaryText) ? _c('div', {
    staticClass: "ui-menu-option__secondary-text"
  }, [_vm._v("\n                " + _vm._s(_vm.secondaryText) + "\n            ")]) : _vm._e()], 1)]) : _vm._e(), _vm._v(" "), (!_vm.disabled && !_vm.isDivider && !_vm.disableRipple) ? _c('ui-ripple-ink') : _vm._e()], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5cb20b32", esExports)
  }
}

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": _vm.toggleTransition
    },
    on: {
      "after-enter": _vm.onEnter,
      "after-leave": _vm.onLeave
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isOpen),
      expression: "isOpen"
    }],
    staticClass: "ui-modal ui-modal__mask",
    class: _vm.classes,
    attrs: {
      "role": _vm.role
    },
    on: {
      "click": function($event) {
        if ($event.target !== $event.currentTarget) { return null; }
        return _vm.onBackdropClick($event)
      }
    }
  }, [_c('div', {
    staticClass: "ui-modal__wrapper",
    class: {
      'has-dummy-scrollbar': _vm.preventShift
    },
    style: (_vm.alignTopStyle),
    on: {
      "click": function($event) {
        if ($event.target !== $event.currentTarget) { return null; }
        return _vm.onBackdropClick($event)
      }
    }
  }, [_c('ui-focus-container', {
    ref: "focusContainer",
    staticClass: "ui-modal__container",
    attrs: {
      "tabindex": "-1"
    },
    nativeOn: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) { return null; }
        $event.stopPropagation();
        return _vm.onEsc($event)
      }
    }
  }, [(!_vm.removeHeader) ? _c('div', {
    staticClass: "ui-modal__header"
  }, [_vm._t("header", [_c('h1', {
    staticClass: "ui-modal__header-text"
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _c('div', {
    staticClass: "ui-modal__close-button"
  }, [(_vm.dismissOnCloseButton && !_vm.removeCloseButton && _vm.dismissible) ? _c('ui-close-button', {
    on: {
      "click": _vm.close
    }
  }) : _vm._e()], 1)], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "ui-modal__body"
  }, [_vm._t("default")], 2), _vm._v(" "), (_vm.hasFooter) ? _c('div', {
    staticClass: "ui-modal__footer"
  }, [_vm._t("footer")], 2) : _vm._e()])], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5cfba9c2", esExports)
  }
}

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui-ripple-ink"
  })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5ef65288", esExports)
  }
}

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c(_vm.isAnchor ? 'a' : 'button', {
    tag: "component",
    staticClass: "ui-button",
    class: _vm.classes,
    attrs: {
      "disabled": _vm.disabled || _vm.loading,
      "href": _vm.isAnchor ? (_vm.disabled ? null : _vm.href) : null,
      "type": _vm.isAnchor ? null : _vm.buttonType
    },
    on: {
      "click": _vm.onClick
    }
  }, [_c('div', {
    staticClass: "ui-button__content"
  }, [(_vm.icon || _vm.$slots.icon) ? _c('div', {
    staticClass: "ui-button__icon"
  }, [_vm._t("icon", [_c('ui-icon', {
    attrs: {
      "icon": _vm.icon
    }
  })])], 2) : _vm._e(), _vm._v(" "), _vm._t("default"), _vm._v(" "), (_vm.hasDropdown && _vm.iconPosition !== 'right') ? _c('ui-icon', {
    staticClass: "ui-button__dropdown-icon"
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M6.984 9.984h10.03L12 15z"
    }
  })])]) : _vm._e()], 2), _vm._v(" "), _c('div', {
    staticClass: "ui-button__focus-ring"
  }), _vm._v(" "), (_vm.loading) ? _c('ui-progress-circular', {
    staticClass: "ui-button__progress",
    attrs: {
      "disable-transition": "",
      "color": _vm.progressColor,
      "size": 18,
      "stroke": 4.5
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.disableRipple && !_vm.disabled) ? _c('ui-ripple-ink') : _vm._e(), _vm._v(" "), (_vm.hasDropdown) ? _c('ui-popover', {
    ref: "dropdown",
    attrs: {
      "contain-focus": "",
      "append-to-body": _vm.appendDropdownToBody,
      "constrain-to-scroll-parent": _vm.constrainDropdownToScrollParent,
      "position": _vm.dropdownPosition,
      "open-on": _vm.openDropdownOn
    },
    on: {
      "close": _vm.onDropdownClose,
      "open": _vm.onDropdownOpen
    }
  }, [_vm._t("dropdown")], 2) : _vm._e(), _vm._v(" "), (_vm.tooltip) ? _c('ui-tooltip', {
    attrs: {
      "open-on": _vm.openTooltipOn,
      "position": _vm.tooltipPosition
    }
  }, [_vm._v(_vm._s(_vm.tooltip))]) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-663a40a0", esExports)
  }
}

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c(_vm.tag, {
    tag: "component",
    staticClass: "ui-focus-container"
  }, [(_vm.renderRedirector) ? _c('span', {
    staticClass: "ui-focus-container__focus-redirector",
    attrs: {
      "tabindex": "0"
    },
    on: {
      "focus": function($event) {
        _vm.redirectFocus($event, {
          isTabbingForward: false
        })
      }
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    ref: "content",
    staticClass: "ui-focus-container__content",
    attrs: {
      "tabindex": "-1"
    }
  }, [_vm._t("default")], 2), _vm._v(" "), (!_vm.disabled && _vm.containFocus) ? _c('span', {
    ref: "lastFocusable",
    staticClass: "ui-focus-container__last-focusable",
    attrs: {
      "tabindex": "-1"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.renderRedirector) ? _c('span', {
    staticClass: "ui-focus-container__focus-redirector",
    attrs: {
      "tabindex": "0"
    },
    on: {
      "focus": function($event) {
        _vm.redirectFocus($event, {
          isTabbingForward: true
        })
      }
    }
  }) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6c26f987", esExports)
  }
}

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui-tooltip"
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6cedb6f5", esExports)
  }
}

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui-calendar-controls",
    class: _vm.classes
  }, [_c('ui-icon-button', {
    staticClass: "ui-calendar-controls__nav-button",
    attrs: {
      "icon": "keyboard_arrow_left",
      "type": "secondary",
      "color": _vm.color === 'default' ? 'default' : 'white',
      "disabled": _vm.previousMonthDisabled
    },
    on: {
      "click": _vm.goToPreviousMonth
    }
  }, [_c('ui-icon', [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M15.422 16.078l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z"
    }
  })])])], 1), _vm._v(" "), _c('div', {
    staticClass: "ui-calendar-controls__month-and-year"
  }, [_vm._v(_vm._s(_vm.monthAndYear))]), _vm._v(" "), _c('ui-icon-button', {
    staticClass: "ui-calendar-controls__nav-button",
    attrs: {
      "icon": "keyboard_arrow_right",
      "type": "secondary",
      "color": _vm.color === 'default' ? 'default' : 'white',
      "disabled": _vm.nextMonthDisabled
    },
    on: {
      "click": _vm.goToNextMonth
    }
  }, [_c('ui-icon', [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M8.578 16.36l4.594-4.595L8.578 7.17l1.406-1.405 6 6-6 6z"
    }
  })])])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6fbf1812", esExports)
  }
}

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui-datepicker",
    class: _vm.classes
  }, [_c('input', {
    staticClass: "ui-datepicker__hidden-input",
    attrs: {
      "type": "hidden",
      "name": _vm.name
    },
    domProps: {
      "value": _vm.submittedValue
    }
  }), _vm._v(" "), (_vm.icon || _vm.$slots.icon) ? _c('div', {
    staticClass: "ui-datepicker__icon-wrapper"
  }, [_vm._t("icon", [_c('ui-icon', {
    attrs: {
      "icon": _vm.icon
    }
  })])], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "ui-datepicker__content"
  }, [_c('div', {
    ref: "label",
    staticClass: "ui-datepicker__label",
    attrs: {
      "tabindex": _vm.disabled ? null : (_vm.tabindex || '0')
    },
    on: {
      "focus": _vm.onFocus,
      "click": function($event) {
        _vm.togglePicker({
          returnFocus: false
        })
      },
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        $event.preventDefault();
        _vm.togglePicker({
          returnFocus: false
        })
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) { return null; }
        $event.preventDefault();
        _vm.togglePicker({
          returnFocus: false
        })
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")) { return null; }
        return _vm.onTabAway($event)
      }]
    }
  }, [(_vm.label || _vm.$slots.default) ? _c('div', {
    staticClass: "ui-datepicker__label-text",
    class: _vm.labelClasses
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "ui-datepicker__display"
  }, [_c('div', {
    staticClass: "ui-datepicker__display-value",
    class: {
      'is-placeholder': !_vm.hasDisplayText
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.hasDisplayText ? _vm.displayText : (_vm.hasFloatingLabel && _vm.isLabelInline) ? null : _vm.placeholder) + "\n                ")]), _vm._v(" "), (_vm.usesPopover && !_vm.disabled) ? _c('ui-icon', {
    staticClass: "ui-datepicker__dropdown-button"
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M6.984 9.984h10.03L12 15z"
    }
  })])]) : _vm._e()], 1), _vm._v(" "), (_vm.usesPopover) ? _c('ui-popover', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.disabled),
      expression: "!disabled"
    }],
    ref: "popover",
    attrs: {
      "contain-focus": "",
      "open-on": "manual",
      "close-on-scroll": false,
      "append-to-body": _vm.appendDropdownToBody,
      "z-index": _vm.dropdownZIndex
    },
    on: {
      "close": _vm.onPickerClose,
      "open": _vm.onPickerOpen
    }
  }, [_c('ui-datepicker-calendar', {
    attrs: {
      "color": _vm.color,
      "date-filter": _vm.dateFilter,
      "lang": _vm.lang,
      "max-date": _vm.maxDate,
      "min-date": _vm.minDate,
      "orientation": _vm.orientation,
      "current-view": _vm.calendarView,
      "value": _vm.date,
      "start-of-week": _vm.startOfWeek,
      "year-range": _vm.yearRange
    },
    on: {
      "update:currentView": function($event) {
        _vm.calendarView = $event
      },
      "date-select": _vm.onDateSelect
    }
  })], 1) : _vm._e()], 1), _vm._v(" "), (_vm.hasFeedback) ? _c('div', {
    staticClass: "ui-datepicker__feedback"
  }, [(_vm.showError) ? _c('div', {
    staticClass: "ui-datepicker__feedback-text"
  }, [_vm._t("error", [_vm._v(_vm._s(_vm.error))])], 2) : (_vm.showHelp) ? _c('div', {
    staticClass: "ui-datepicker__feedback-text"
  }, [_vm._t("help", [_vm._v(_vm._s(_vm.help))])], 2) : _vm._e()]) : _vm._e()]), _vm._v(" "), (_vm.usesModal && !_vm.disabled) ? _c('ui-modal', {
    ref: "modal",
    attrs: {
      "remove-header": "",
      "size": "auto"
    },
    on: {
      "hidden": _vm.onPickerClose,
      "open": _vm.onPickerOpen
    }
  }, [_c('ui-datepicker-calendar', {
    attrs: {
      "color": _vm.color,
      "date-filter": _vm.dateFilter,
      "lang": _vm.lang,
      "max-date": _vm.maxDate,
      "min-date": _vm.minDate,
      "orientation": _vm.orientation,
      "current-view": _vm.calendarView,
      "value": _vm.date,
      "start-of-week": _vm.startOfWeek,
      "year-range": _vm.yearRange
    },
    on: {
      "update:currentView": function($event) {
        _vm.calendarView = $event
      },
      "date-select": _vm.onDateSelect
    }
  })], 1) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-74517e3a", esExports)
  }
}

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "ui-checkbox",
    class: _vm.classes
  }, [_c('input', {
    ref: "input",
    staticClass: "ui-checkbox__input",
    attrs: {
      "type": "checkbox",
      "disabled": _vm.disabled,
      "name": _vm.name,
      "tabindex": _vm.tabindex
    },
    domProps: {
      "checked": _vm.isChecked,
      "value": _vm.submittedValue
    },
    on: {
      "blur": _vm.onBlur,
      "click": _vm.onClick,
      "focus": _vm.onFocus
    }
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), (_vm.label || _vm.$slots.default) ? _c('div', {
    staticClass: "ui-checkbox__label-text"
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2) : _vm._e()])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui-checkbox__checkmark"
  }, [_c('div', {
    staticClass: "ui-checkbox__checkmark-background"
  }), _vm._v(" "), _c('div', {
    staticClass: "ui-checkbox__focus-ring"
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7905fb7e", esExports)
  }
}

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui-checkbox-group",
    class: _vm.classes
  }, [(_vm.label || _vm.$slots.default) ? _c('div', {
    staticClass: "ui-checkbox-group__label-text"
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "ui-checkbox-group__checkboxes"
  }, _vm._l((_vm.options), function(option, index) {
    return _c('ui-checkbox', {
      key: option[_vm.keys.id],
      staticClass: "ui-checkbox-group__checkbox",
      class: option[_vm.keys.class],
      attrs: {
        "box-position": _vm.boxPosition,
        "checked": _vm.isOptionCheckedByDefault(option),
        "color": _vm.color,
        "disabled": _vm.disabled || option[_vm.keys.disabled],
        "id": option[_vm.keys.id],
        "name": _vm.name || option[_vm.keys.name]
      },
      on: {
        "blur": _vm.onBlur,
        "change": function($event) {
          _vm.onChange(arguments, option)
        },
        "focus": _vm.onFocus
      },
      model: {
        value: (_vm.checkboxValues[index]),
        callback: function($$v) {
          _vm.$set(_vm.checkboxValues, index, $$v)
        },
        expression: "checkboxValues[index]"
      }
    }, [_vm._v(_vm._s(option[_vm.keys.label] || option))])
  }), 1), _vm._v(" "), (_vm.hasFeedback) ? _c('div', {
    staticClass: "ui-checkbox-group__feedback"
  }, [(_vm.showError) ? _c('div', {
    staticClass: "ui-checkbox-group__feedback-text"
  }, [_vm._t("error", [_vm._v(_vm._s(_vm.error))])], 2) : (_vm.showHelp) ? _c('div', {
    staticClass: "ui-checkbox-group__feedback-text"
  }, [_vm._t("help", [_vm._v(_vm._s(_vm.help))])], 2) : _vm._e()]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7a92836e", esExports)
  }
}

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "ui-close-button",
    class: _vm.classes,
    attrs: {
      "aria-label": "Close",
      "type": "button",
      "disabled": _vm.disabled
    },
    on: {
      "click": _vm.onClick
    }
  }, [_c('div', {
    staticClass: "ui-close-button__icon"
  }, [_c('ui-icon', [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M18.984 6.422L13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z"
    }
  })])])], 1), _vm._v(" "), _c('span', {
    staticClass: "ui-close-button__focus-ring"
  }), _vm._v(" "), (!_vm.disableRipple && !_vm.disabled) ? _c('ui-ripple-ink') : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7ba5f488", esExports)
  }
}

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": _vm.disableTransition ? null : 'ui-progress-circular--transition-fade'
    }
  }, [_c('div', {
    staticClass: "ui-progress-circular",
    class: _vm.classes,
    style: ({
      'width': _vm.size + 'px',
      'height': _vm.size + 'px'
    })
  }, [(_vm.type === 'determinate') ? _c('svg', {
    staticClass: "ui-progress-circular__determinate",
    attrs: {
      "role": "progressbar",
      "aria-valuemax": 100,
      "aria-valuemin": 0,
      "aria-valuenow": _vm.progress,
      "height": _vm.size,
      "width": _vm.size
    }
  }, [_c('circle', {
    staticClass: "ui-progress-circular__determinate-path",
    style: ({
      'stroke-dashoffset': _vm.strokeDashOffset,
      'stroke-width': _vm.calculatedStroke
    }),
    attrs: {
      "fill": "transparent",
      "stroke-dashoffset": "0",
      "cx": _vm.size / 2,
      "cy": _vm.size / 2,
      "r": _vm.radius,
      "stroke-dasharray": _vm.strokeDashArray
    }
  })]) : _c('svg', {
    staticClass: "ui-progress-circular__indeterminate",
    attrs: {
      "role": "progressbar",
      "viewBox": "25 25 50 50",
      "aria-valuemax": 100,
      "aria-valuemin": 0
    }
  }, [_c('circle', {
    staticClass: "ui-progress-circular__indeterminate-path",
    attrs: {
      "cx": "50",
      "cy": "50",
      "fill": "none",
      "r": "20",
      "stroke-miterlimit": "10",
      "stroke-width": _vm.calculatedStroke
    }
  })])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7bea93ea", esExports)
  }
}

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui-autocomplete",
    class: _vm.classes
  }, [(_vm.icon || _vm.$slots.icon) ? _c('div', {
    staticClass: "ui-autocomplete__icon-wrapper"
  }, [_vm._t("icon", [_c('ui-icon', {
    attrs: {
      "icon": _vm.icon
    }
  })])], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "ui-autocomplete__content"
  }, [_c('label', {
    staticClass: "ui-autocomplete__label"
  }, [(_vm.label || _vm.$slots.default) ? _c('div', {
    staticClass: "ui-autocomplete__label-text",
    class: _vm.labelClasses
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2) : _vm._e(), _vm._v(" "), _c('ui-icon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.disabled && _vm.valueLength > 0),
      expression: "!disabled && valueLength > 0"
    }],
    staticClass: "ui-autocomplete__clear-button",
    attrs: {
      "title": "Clear"
    },
    nativeOn: {
      "click": function($event) {
        _vm.updateValue('')
      }
    }
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M18.984 6.422L13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z"
    }
  })])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "autofocus",
      rawName: "v-autofocus",
      value: (_vm.autofocus),
      expression: "autofocus"
    }],
    ref: "input",
    staticClass: "ui-autocomplete__input",
    attrs: {
      "autocomplete": "off",
      "disabled": _vm.disabled,
      "name": _vm.name,
      "placeholder": _vm.hasFloatingLabel ? null : _vm.placeholder,
      "readonly": _vm.readonly ? _vm.readonly : null,
      "tabindex": _vm.tabindex
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "blur": _vm.onBlur,
      "change": _vm.onChange,
      "focus": _vm.onFocus,
      "input": function($event) {
        _vm.updateValue($event.target.value)
      },
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) { return null; }
        $event.preventDefault();
        _vm.highlightSuggestion(_vm.highlightedIndex + 1)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        _vm.selectHighlighted(_vm.highlightedIndex, $event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) { return null; }
        return _vm.closeDropdown($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")) { return null; }
        return _vm.closeDropdown($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) { return null; }
        $event.preventDefault();
        _vm.highlightSuggestion(_vm.highlightedIndex - 1)
      }]
    }
  }), _vm._v(" "), _c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showDropdown),
      expression: "showDropdown"
    }],
    staticClass: "ui-autocomplete__suggestions"
  }, _vm._l((_vm.matchingSuggestions), function(suggestion, index) {
    return _c('ui-autocomplete-suggestion', {
      key: index,
      ref: "suggestions",
      refInFor: true,
      attrs: {
        "highlighted": _vm.highlightedIndex === index,
        "keys": _vm.keys,
        "suggestion": suggestion,
        "type": _vm.type
      },
      nativeOn: {
        "click": function($event) {
          _vm.selectSuggestion(suggestion)
        }
      }
    }, [_vm._t("suggestion", null, {
      highlighted: _vm.highlightedIndex === index,
      index: index,
      suggestion: suggestion
    })], 2)
  }), 1)], 1), _vm._v(" "), (_vm.hasFeedback) ? _c('div', {
    staticClass: "ui-autocomplete__feedback"
  }, [(_vm.showError) ? _c('div', {
    staticClass: "ui-autocomplete__feedback-text"
  }, [_vm._t("error", [_vm._v(_vm._s(_vm.error))])], 2) : (_vm.showHelp) ? _c('div', {
    staticClass: "ui-autocomplete__feedback-text"
  }, [_vm._t("help", [_vm._v(_vm._s(_vm.help))])], 2) : _vm._e()]) : _vm._e()])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7ede18e6", esExports)
  }
}

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isActive),
      expression: "isActive"
    }],
    staticClass: "ui-tab",
    attrs: {
      "role": "tabpanel",
      "aria-hidden": !_vm.isActive ? 'true' : null,
      "id": _vm.id,
      "tabindex": _vm.isActive ? '0' : null
    }
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-813aeaf2", esExports)
  }
}

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "ui-fileupload",
    class: _vm.classes
  }, [(_vm.renderInput) ? _c('input', {
    ref: "input",
    staticClass: "ui-fileupload__input",
    attrs: {
      "type": "file",
      "accept": _vm.accept,
      "disabled": _vm.disabled,
      "multiple": _vm.multiple,
      "name": _vm.name,
      "required": _vm.required,
      "tabindex": _vm.tabindex
    },
    on: {
      "blur": _vm.onBlur,
      "input": _vm.onInput,
      "change": _vm.onChange,
      "focus": _vm.onFocus
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "ui-fileupload__content"
  }, [_c('div', {
    staticClass: "ui-fileupload__icon"
  }, [_vm._t("icon", [_c('ui-icon', [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M5.016 18h13.969v2.016H5.016V18zM9 15.984v-6H5.016L12 3l6.984 6.984H15v6H9z"
    }
  })])])])], 2), _vm._v(" "), (_vm.hasSelection) ? _c('span', {
    staticClass: "ui-fileupload__display-text"
  }, [_vm._v(_vm._s(_vm.displayText))]) : _vm._t("default", [_vm._v(_vm._s(_vm.placeholder))])], 2), _vm._v(" "), _c('div', {
    staticClass: "ui-fileupload__focus-ring"
  }), _vm._v(" "), (!_vm.disableRipple && !_vm.disabled) ? _c('ui-ripple-ink') : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-965da30a", esExports)
  }
}

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c(_vm.isAnchor ? 'a' : 'button', {
    tag: "component",
    staticClass: "ui-icon-button",
    class: _vm.classes,
    attrs: {
      "aria-label": _vm.ariaLabel || _vm.tooltip,
      "disabled": _vm.disabled || _vm.loading,
      "href": _vm.isAnchor ? (_vm.disabled ? null : _vm.href) : null,
      "type": _vm.isAnchor ? null : _vm.buttonType
    },
    on: {
      "click": _vm.onClick
    }
  }, [(_vm.icon || _vm.$slots.default) ? _c('div', {
    staticClass: "ui-icon-button__icon"
  }, [_vm._t("default", [_c('ui-icon', {
    attrs: {
      "icon": _vm.icon
    }
  })])], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "ui-icon-button__focus-ring"
  }), _vm._v(" "), (_vm.loading) ? _c('ui-progress-circular', {
    staticClass: "ui-icon-button__progress",
    attrs: {
      "color": _vm.progressColor,
      "size": _vm.size === 'large' ? 24 : 18,
      "stroke": 4.5
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.disableRipple && !_vm.disabled) ? _c('ui-ripple-ink') : _vm._e(), _vm._v(" "), (_vm.hasDropdown) ? _c('ui-popover', {
    ref: "dropdown",
    attrs: {
      "constain-focus": "",
      "append-to-body": _vm.appendDropdownToBody,
      "constrain-to-scroll-parent": _vm.constrainDropdownToScrollParent,
      "position": _vm.dropdownPosition,
      "open-on": _vm.openDropdownOn
    },
    on: {
      "close": _vm.onDropdownClose,
      "open": _vm.onDropdownOpen
    }
  }, [_vm._t("dropdown")], 2) : _vm._e(), _vm._v(" "), (_vm.tooltip) ? _c('ui-tooltip', {
    attrs: {
      "open-on": _vm.openTooltipOn,
      "position": _vm.tooltipPosition
    }
  }, [_vm._v(_vm._s(_vm.tooltip))]) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9db4dbee", esExports)
  }
}

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "ui-select-option",
    class: _vm.classes
  }, [_vm._t("default", [(_vm.type === 'basic') ? _c('div', {
    staticClass: "ui-select-option__basic"
  }, [_vm._v("\n            " + _vm._s(_vm.option[_vm.keys.label] || _vm.option) + "\n        ")]) : _vm._e(), _vm._v(" "), (_vm.type === 'image') ? _c('div', {
    staticClass: "ui-select-option__image"
  }, [_c('div', {
    staticClass: "ui-select-option__image-object",
    style: (_vm.imageStyle)
  }), _vm._v(" "), _c('div', {
    staticClass: "ui-select-option__image-text"
  }, [_vm._v(_vm._s(_vm.option[_vm.keys.label]))])]) : _vm._e(), _vm._v(" "), (_vm.multiple) ? _c('div', {
    staticClass: "ui-select-option__checkbox"
  }, [(_vm.selected) ? _c('ui-icon', [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M9.984 17.016l9-9-1.406-1.453-7.594 7.594-3.563-3.563L5.016 12zm9-14.016C20.11 3 21 3.938 21 5.016v13.97C21 20.062 20.11 21 18.984 21H5.014C3.89 21 3 20.064 3 18.986V5.015C3 3.94 3.89 3 5.014 3h13.97z"
    }
  })])]) : _c('ui-icon', [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M18.984 3C20.062 3 21 3.938 21 5.016v13.97C21 20.062 20.062 21 18.984 21H5.014C3.938 21 3 20.064 3 18.986V5.015C3 3.94 3.936 3 5.014 3h13.97zm0 2.016H5.014v13.97h13.97V5.015z"
    }
  })])])], 1) : _vm._e()])], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a05cade2", esExports)
  }
}

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui-textbox",
    class: _vm.classes
  }, [(_vm.icon || _vm.$slots.icon) ? _c('div', {
    staticClass: "ui-textbox__icon-wrapper"
  }, [_vm._t("icon", [_c('ui-icon', {
    attrs: {
      "icon": _vm.icon
    }
  })])], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "ui-textbox__content"
  }, [_c('label', {
    staticClass: "ui-textbox__label"
  }, [(!_vm.multiLine) ? _c('input', {
    directives: [{
      name: "autofocus",
      rawName: "v-autofocus",
      value: (_vm.autofocus),
      expression: "autofocus"
    }],
    ref: "input",
    staticClass: "ui-textbox__input",
    attrs: {
      "autocomplete": _vm.autocomplete ? _vm.autocomplete : null,
      "disabled": _vm.disabled,
      "max": _vm.maxValue,
      "maxlength": _vm.enforceMaxlength ? _vm.maxlength : null,
      "minlength": _vm.minlength,
      "min": _vm.minValue,
      "name": _vm.name,
      "number": _vm.type === 'number' ? true : null,
      "placeholder": _vm.hasFloatingLabel ? null : _vm.placeholder,
      "readonly": _vm.readonly,
      "required": _vm.required,
      "step": _vm.stepValue,
      "tabindex": _vm.tabindex,
      "type": _vm.type
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "blur": _vm.onBlur,
      "change": _vm.onChange,
      "focus": _vm.onFocus,
      "input": function($event) {
        _vm.updateValue($event.target.value)
      },
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.onKeydownEnter($event)
      }, _vm.onKeydown]
    }
  }) : _c('textarea', {
    directives: [{
      name: "autofocus",
      rawName: "v-autofocus",
      value: (_vm.autofocus),
      expression: "autofocus"
    }],
    ref: "textarea",
    staticClass: "ui-textbox__textarea",
    attrs: {
      "autocomplete": _vm.autocomplete ? _vm.autocomplete : null,
      "disabled": _vm.disabled,
      "maxlength": _vm.enforceMaxlength ? _vm.maxlength : null,
      "minlength": _vm.minlength,
      "name": _vm.name,
      "placeholder": _vm.hasFloatingLabel ? null : _vm.placeholder,
      "readonly": _vm.readonly,
      "required": _vm.required,
      "rows": _vm.rows,
      "tabindex": _vm.tabindex
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "blur": _vm.onBlur,
      "change": _vm.onChange,
      "focus": _vm.onFocus,
      "input": function($event) {
        _vm.updateValue($event.target.value)
      },
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.onKeydownEnter($event)
      }, _vm.onKeydown]
    }
  }), _vm._v(" "), (_vm.label || _vm.$slots.default) ? _c('div', {
    staticClass: "ui-textbox__label-text",
    class: _vm.labelClasses
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2) : _vm._e()]), _vm._v(" "), (_vm.hasFeedback || _vm.maxlength) ? _c('div', {
    staticClass: "ui-textbox__feedback"
  }, [(_vm.showError) ? _c('div', {
    staticClass: "ui-textbox__feedback-text"
  }, [_vm._t("error", [_vm._v(_vm._s(_vm.error))])], 2) : (_vm.showHelp) ? _c('div', {
    staticClass: "ui-textbox__feedback-text"
  }, [_vm._t("help", [_vm._v(_vm._s(_vm.help))])], 2) : _vm._e(), _vm._v(" "), (_vm.maxlength) ? _c('div', {
    staticClass: "ui-textbox__counter"
  }, [_vm._v("\n                " + _vm._s(_vm.valueLength + '/' + _vm.maxlength) + "\n            ")]) : _vm._e()]) : _vm._e()])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ac038220", esExports)
  }
}

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui-toolbar",
    class: _vm.classes
  }, [_c('div', {
    staticClass: "ui-toolbar__left"
  }, [(!_vm.removeNavIcon) ? _c('div', {
    staticClass: "ui-toolbar__nav-icon"
  }, [_vm._t("icon", [_c('ui-icon-button', {
    attrs: {
      "size": "large",
      "type": "secondary",
      "color": _vm.textColor,
      "icon": _vm.navIcon
    },
    on: {
      "click": _vm.navIconClick
    }
  })])], 2) : _vm._e(), _vm._v(" "), (_vm.brand || _vm.$slots.brand) ? _c('div', {
    staticClass: "ui-toolbar__brand"
  }, [_vm._t("brand", [_c('div', {
    staticClass: "ui-toolbar__brand-text"
  }, [_vm._v(_vm._s(_vm.brand))])])], 2) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "ui-toolbar__body",
    class: {
      'has-brand-divider': _vm.hasBrandDivider
    }
  }, [_vm._t("default", [(_vm.title) ? _c('div', {
    staticClass: "ui-toolbar__title"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e()])], 2), _vm._v(" "), _c('div', {
    staticClass: "ui-toolbar__right"
  }, [_vm._t("actions")], 2), _vm._v(" "), _c('ui-progress-linear', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticClass: "ui-toolbar__progress",
    attrs: {
      "color": _vm.progressColor
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b19a1326", esExports)
  }
}

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui-datepicker-calendar",
    class: _vm.classes
  }, [_c('div', {
    staticClass: "ui-datepicker-calendar__header"
  }, [_c('div', {
    staticClass: "ui-datepicker-calendar__header-year",
    class: {
      'is-active': _vm.showYearPicker
    },
    attrs: {
      "tabindex": "0"
    },
    on: {
      "click": function($event) {
        _vm.$emit('update:currentView', 'year')
      },
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        _vm.$emit('update:currentView', 'year')
      }
    }
  }, [_vm._v(_vm._s(_vm.headerYear))]), _vm._v(" "), _c('div', {
    staticClass: "ui-datepicker-calendar__header-date",
    class: {
      'is-active': !_vm.showYearPicker
    },
    attrs: {
      "tabindex": "0"
    },
    on: {
      "click": function($event) {
        _vm.$emit('update:currentView', 'date')
      },
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        _vm.$emit('update:currentView', 'date')
      }
    }
  }, [_c('span', {
    staticClass: "ui-datepicker-calendar__header-weekday"
  }, [_vm._v(_vm._s(_vm.headerWeekday) + ", ")]), _vm._v(" "), _c('span', {
    staticClass: "ui-datepicker-calendar__header-day"
  }, [_vm._v(_vm._s(_vm.headerDay))])])]), _vm._v(" "), _c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showYearPicker),
      expression: "showYearPicker"
    }],
    ref: "years",
    staticClass: "ui-datepicker-calendar__years"
  }, _vm._l((_vm.yearRange), function(year) {
    return (!_vm.isYearOutOfRange(year)) ? _c('li', {
      staticClass: "ui-datepicker-calendar__year",
      class: _vm.getYearClasses(year),
      attrs: {
        "tabindex": "0"
      },
      on: {
        "click": function($event) {
          _vm.selectYear(year)
        },
        "keydown": function($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
          _vm.selectYear(year)
        }
      }
    }, [_vm._v(_vm._s(year))]) : _vm._e()
  }), 0), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.showYearPicker),
      expression: "!showYearPicker"
    }],
    staticClass: "ui-datepicker-calendar__body"
  }, [_c('ui-calendar-controls', {
    ref: "controls",
    attrs: {
      "date-in-view": _vm.dateInView,
      "lang": _vm.lang,
      "max-date": _vm.maxDate,
      "min-date": _vm.minDate,
      "year-range": _vm.yearRange
    },
    on: {
      "go-to-date": _vm.onGoToDate
    }
  }), _vm._v(" "), _c('ui-calendar-month', {
    ref: "month",
    attrs: {
      "square-cells": "",
      "color": _vm.color,
      "date-filter": _vm.dateFilter,
      "date-in-view": _vm.dateInView,
      "lang": _vm.lang,
      "max-date": _vm.maxDate,
      "min-date": _vm.minDate,
      "selected": _vm.value,
      "start-of-week": _vm.startOfWeek
    },
    on: {
      "change": _vm.onMonthChange,
      "date-select": _vm.onDateSelect
    }
  })], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b37986d0", esExports)
  }
}

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "ui-switch",
    class: _vm.classes
  }, [_c('div', {
    staticClass: "ui-switch__input-wrapper"
  }, [_c('input', {
    ref: "input",
    staticClass: "ui-switch__input",
    attrs: {
      "type": "checkbox",
      "disabled": _vm.disabled,
      "name": _vm.name,
      "tabindex": _vm.tabindex
    },
    domProps: {
      "checked": _vm.isChecked,
      "value": _vm.submittedValue
    },
    on: {
      "blur": _vm.onBlur,
      "click": _vm.onClick,
      "focus": _vm.onFocus
    }
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "ui-switch__track"
  })]), _vm._v(" "), (_vm.label || _vm.$slots.default) ? _c('div', {
    staticClass: "ui-switch__label-text"
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2) : _vm._e()])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui-switch__thumb"
  }, [_c('div', {
    staticClass: "ui-switch__focus-ring"
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ba5ec29c", esExports)
  }
}

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui-collapsible",
    class: _vm.classes
  }, [_c('div', {
    staticClass: "ui-collapsible__header",
    attrs: {
      "aria-controls": _vm.id,
      "aria-expanded": _vm.isOpen ? 'true' : 'false',
      "tabindex": _vm.disabled ? null : 0
    },
    on: {
      "click": _vm.toggleCollapsible,
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        $event.preventDefault();
        return _vm.toggleCollapsible($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) { return null; }
        $event.preventDefault();
        return _vm.toggleCollapsible($event)
      }]
    }
  }, [_c('div', {
    staticClass: "ui-collapsible__header-content"
  }, [_vm._t("header", [_vm._v(_vm._s(_vm.title))])], 2), _vm._v(" "), (!_vm.removeIcon) ? _c('ui-icon', {
    staticClass: "ui-collapsible__header-icon"
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M7.406 7.828L12 12.422l4.594-4.594L18 9.234l-6 6-6-6z"
    }
  })])]) : _vm._e(), _vm._v(" "), (!_vm.disableRipple && !_vm.disabled) ? _c('ui-ripple-ink') : _vm._e()], 1), _vm._v(" "), _c('transition', {
    on: {
      "enter": _vm.onEnter,
      "after-enter": _vm.afterEnter,
      "before-leave": _vm.beforeLeave,
      "leave": _vm.onLeave
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isOpen),
      expression: "isOpen"
    }],
    ref: "bodyWrapper",
    staticClass: "ui-collapsible__body-wrapper",
    attrs: {
      "aria-hidden": _vm.isOpen ? null : 'true',
      "id": _vm.id
    }
  }, [_c('div', {
    staticClass: "ui-collapsible__body"
  }, [_vm._t("default")], 2)])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ca040308", esExports)
  }
}

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "ui-calendar-month"
  }, [_c('thead', {
    staticClass: "ui-calendar-month__header"
  }, [_c('tr', _vm._l((_vm.daysOfWeek), function(day) {
    return _c('th', [_vm._v(_vm._s(day))])
  }), 0)]), _vm._v(" "), _c('tbody', {
    staticClass: "ui-calendar-month__body"
  }, _vm._l((_vm.currentWeekStartDates), function(date) {
    return _c("ui-calendar-week", {
      key: date.toString(),
      tag: "tr",
      attrs: {
        "color": _vm.color,
        "date-filter": _vm.dateFilter,
        "max-date": _vm.maxDate,
        "min-date": _vm.minDate,
        "month": _vm.currentWeekStartDates[1].getMonth(),
        "selected": _vm.selected,
        "square-cells": _vm.squareCells,
        "week-start": date
      },
      on: {
        "date-select": _vm.onDateSelect
      },
      scopedSlots: _vm._u([{
        key: "default",
        fn: function(props) {
          return (_vm.$scopedSlots.date) ? [_vm._t("date", null, {
            date: props.date
          })] : undefined
        }
      }])
    })
  }), 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e023bc58", esExports)
  }
}

/***/ }),
/* 187 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootstrap__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configure__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UiAlert_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UiAutocomplete_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__UiButton_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__UiCalendar_vue__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__UiCheckbox_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__UiCheckboxGroup_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__UiCloseButton_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__UiCollapsible_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__UiConfirm_vue__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__UiDatepicker_vue__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__UiDatepickerCalendar_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__UiFab_vue__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__UiFileupload_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__UiIcon_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__UiIconButton_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__UiMenu_vue__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__UiModal_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__UiPopover_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__UiPreloader_vue__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__UiProgressCircular_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__UiProgressLinear_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__UiRadio_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__UiRadioGroup_vue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__UiRippleInk_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__UiSelect_vue__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__UiSlider_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__UiSnackbar_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__UiSnackbarContainer_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__UiSwitch_vue__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__UiTab_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__UiTabs_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__UiTextbox_vue__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__UiToolbar_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__UiTooltip_vue__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiAlert", function() { return __WEBPACK_IMPORTED_MODULE_3__UiAlert_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiAutocomplete", function() { return __WEBPACK_IMPORTED_MODULE_4__UiAutocomplete_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiButton", function() { return __WEBPACK_IMPORTED_MODULE_5__UiButton_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiCalendar", function() { return __WEBPACK_IMPORTED_MODULE_6__UiCalendar_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiCheckbox", function() { return __WEBPACK_IMPORTED_MODULE_7__UiCheckbox_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiCheckboxGroup", function() { return __WEBPACK_IMPORTED_MODULE_8__UiCheckboxGroup_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiCloseButton", function() { return __WEBPACK_IMPORTED_MODULE_9__UiCloseButton_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiCollapsible", function() { return __WEBPACK_IMPORTED_MODULE_10__UiCollapsible_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiConfirm", function() { return __WEBPACK_IMPORTED_MODULE_11__UiConfirm_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiDatepicker", function() { return __WEBPACK_IMPORTED_MODULE_12__UiDatepicker_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiDatepickerCalendar", function() { return __WEBPACK_IMPORTED_MODULE_13__UiDatepickerCalendar_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiFab", function() { return __WEBPACK_IMPORTED_MODULE_14__UiFab_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiFileupload", function() { return __WEBPACK_IMPORTED_MODULE_15__UiFileupload_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiIcon", function() { return __WEBPACK_IMPORTED_MODULE_16__UiIcon_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiIconButton", function() { return __WEBPACK_IMPORTED_MODULE_17__UiIconButton_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiMenu", function() { return __WEBPACK_IMPORTED_MODULE_18__UiMenu_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiModal", function() { return __WEBPACK_IMPORTED_MODULE_19__UiModal_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiPopover", function() { return __WEBPACK_IMPORTED_MODULE_20__UiPopover_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiPreloader", function() { return __WEBPACK_IMPORTED_MODULE_21__UiPreloader_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiProgressCircular", function() { return __WEBPACK_IMPORTED_MODULE_22__UiProgressCircular_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiProgressLinear", function() { return __WEBPACK_IMPORTED_MODULE_23__UiProgressLinear_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiRadio", function() { return __WEBPACK_IMPORTED_MODULE_24__UiRadio_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiRadioGroup", function() { return __WEBPACK_IMPORTED_MODULE_25__UiRadioGroup_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiRippleInk", function() { return __WEBPACK_IMPORTED_MODULE_26__UiRippleInk_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiSelect", function() { return __WEBPACK_IMPORTED_MODULE_27__UiSelect_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiSlider", function() { return __WEBPACK_IMPORTED_MODULE_28__UiSlider_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiSnackbar", function() { return __WEBPACK_IMPORTED_MODULE_29__UiSnackbar_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiSnackbarContainer", function() { return __WEBPACK_IMPORTED_MODULE_30__UiSnackbarContainer_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiSwitch", function() { return __WEBPACK_IMPORTED_MODULE_31__UiSwitch_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiTab", function() { return __WEBPACK_IMPORTED_MODULE_32__UiTab_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiTabs", function() { return __WEBPACK_IMPORTED_MODULE_33__UiTabs_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiTextbox", function() { return __WEBPACK_IMPORTED_MODULE_34__UiTextbox_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiToolbar", function() { return __WEBPACK_IMPORTED_MODULE_35__UiToolbar_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UiTooltip", function() { return __WEBPACK_IMPORTED_MODULE_36__UiTooltip_vue__["a"]; });







































var KeenUI = {
    UiAlert: __WEBPACK_IMPORTED_MODULE_3__UiAlert_vue__["a" /* default */],
    UiAutocomplete: __WEBPACK_IMPORTED_MODULE_4__UiAutocomplete_vue__["a" /* default */],
    UiButton: __WEBPACK_IMPORTED_MODULE_5__UiButton_vue__["a" /* default */],
    UiCalendar: __WEBPACK_IMPORTED_MODULE_6__UiCalendar_vue__["a" /* default */],
    UiCheckbox: __WEBPACK_IMPORTED_MODULE_7__UiCheckbox_vue__["a" /* default */],
    UiCheckboxGroup: __WEBPACK_IMPORTED_MODULE_8__UiCheckboxGroup_vue__["a" /* default */],
    UiCloseButton: __WEBPACK_IMPORTED_MODULE_9__UiCloseButton_vue__["a" /* default */],
    UiCollapsible: __WEBPACK_IMPORTED_MODULE_10__UiCollapsible_vue__["a" /* default */],
    UiConfirm: __WEBPACK_IMPORTED_MODULE_11__UiConfirm_vue__["a" /* default */],
    UiDatepicker: __WEBPACK_IMPORTED_MODULE_12__UiDatepicker_vue__["a" /* default */],
    UiDatepickerCalendar: __WEBPACK_IMPORTED_MODULE_13__UiDatepickerCalendar_vue__["a" /* default */],
    UiFab: __WEBPACK_IMPORTED_MODULE_14__UiFab_vue__["a" /* default */],
    UiFileupload: __WEBPACK_IMPORTED_MODULE_15__UiFileupload_vue__["a" /* default */],
    UiIcon: __WEBPACK_IMPORTED_MODULE_16__UiIcon_vue__["a" /* default */],
    UiIconButton: __WEBPACK_IMPORTED_MODULE_17__UiIconButton_vue__["a" /* default */],
    UiMenu: __WEBPACK_IMPORTED_MODULE_18__UiMenu_vue__["a" /* default */],
    UiModal: __WEBPACK_IMPORTED_MODULE_19__UiModal_vue__["a" /* default */],
    UiPopover: __WEBPACK_IMPORTED_MODULE_20__UiPopover_vue__["a" /* default */],
    UiPreloader: __WEBPACK_IMPORTED_MODULE_21__UiPreloader_vue__["a" /* default */],
    UiProgressCircular: __WEBPACK_IMPORTED_MODULE_22__UiProgressCircular_vue__["a" /* default */],
    UiProgressLinear: __WEBPACK_IMPORTED_MODULE_23__UiProgressLinear_vue__["a" /* default */],
    UiRadio: __WEBPACK_IMPORTED_MODULE_24__UiRadio_vue__["a" /* default */],
    UiRadioGroup: __WEBPACK_IMPORTED_MODULE_25__UiRadioGroup_vue__["a" /* default */],
    UiRippleInk: __WEBPACK_IMPORTED_MODULE_26__UiRippleInk_vue__["a" /* default */],
    UiSelect: __WEBPACK_IMPORTED_MODULE_27__UiSelect_vue__["a" /* default */],
    UiSlider: __WEBPACK_IMPORTED_MODULE_28__UiSlider_vue__["a" /* default */],
    UiSnackbar: __WEBPACK_IMPORTED_MODULE_29__UiSnackbar_vue__["a" /* default */],
    UiSnackbarContainer: __WEBPACK_IMPORTED_MODULE_30__UiSnackbarContainer_vue__["a" /* default */],
    UiSwitch: __WEBPACK_IMPORTED_MODULE_31__UiSwitch_vue__["a" /* default */],
    UiTab: __WEBPACK_IMPORTED_MODULE_32__UiTab_vue__["a" /* default */],
    UiTabs: __WEBPACK_IMPORTED_MODULE_33__UiTabs_vue__["a" /* default */],
    UiTextbox: __WEBPACK_IMPORTED_MODULE_34__UiTextbox_vue__["a" /* default */],
    UiToolbar: __WEBPACK_IMPORTED_MODULE_35__UiToolbar_vue__["a" /* default */],
    UiTooltip: __WEBPACK_IMPORTED_MODULE_36__UiTooltip_vue__["a" /* default */]
};

KeenUI.install = function (Vue) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    Object.keys(config).forEach(function (key) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers_util__["a" /* startsWith */])(key, 'Ui')) {
            if (KeenUI[key] === undefined) {
                return;
            }

            var Component = KeenUI[key];
            var props = config[key];

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__configure__["a" /* default */])(Component, props);
        }
    });

    Object.keys(KeenUI).forEach(function (key) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers_util__["a" /* startsWith */])(key, 'Ui')) {
            var Component = KeenUI[key];
            Vue.component(Component.name, Component);
        }
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(KeenUI, window.KeenUiConfig);
}

/* harmony default export */ __webpack_exports__["default"] = KeenUI;



/***/ })
/******/ ]);
});