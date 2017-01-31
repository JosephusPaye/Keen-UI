/*!
 * Keen UI v1.0.0 (https://github.com/JosephusPaye/keen-ui)
 * (c) 2017 Josephus Paye II
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
/******/ 	return __webpack_require__(__webpack_require__.s = 256);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
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

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(192)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(102),
  /* template */
  __webpack_require__(242),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiIcon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiIcon.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b61f66a", Component.options)
  } else {
    hotAPI.reload("data-v-6b61f66a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.KeenUiConfig = undefined;

var _classCallCheck2 = __webpack_require__(129);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(130);

var _createClass3 = _interopRequireDefault(_createClass2);

var _deepAssign = __webpack_require__(164);

var _deepAssign2 = _interopRequireDefault(_deepAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
    disableRipple: false,

    UiAutocomplete: {
        keys: {
            label: 'label',
            value: 'value',
            image: 'image'
        }
    },

    UiCheckboxGroup: {
        keys: {
            id: 'id',
            name: 'name',
            class: 'class',
            label: 'label',
            value: 'value',
            disabled: 'disabled'
        }
    },

    UiMenu: {
        keys: {
            icon: 'icon',
            type: 'type',
            label: 'label',
            secondaryText: 'secondaryText',
            iconProps: 'iconProps',
            disabled: 'disabled'
        }
    },

    UiRadioGroup: {
        keys: {
            id: 'id',
            class: 'class',
            label: 'label',
            value: 'value',
            checked: 'checked',
            disabled: 'disabled'
        }
    },

    UiSelect: {
        keys: {
            label: 'label',
            value: 'value',
            image: 'image'
        }
    }
};

var KeenUiConfig = exports.KeenUiConfig = function () {
    function KeenUiConfig() {
        (0, _classCallCheck3.default)(this, KeenUiConfig);

        this.data = (0, _deepAssign2.default)(config, window.KeenUiConfig ? window.KeenUiConfig : {});
    }

    (0, _createClass3.default)(KeenUiConfig, [{
        key: 'set',
        value: function set() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.data = (0, _deepAssign2.default)(this.data, config);
        }
    }]);
    return KeenUiConfig;
}();

exports.default = new KeenUiConfig();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(170)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(113),
  /* template */
  __webpack_require__(220),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiRippleInk.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiRippleInk.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-14e906f5", Component.options)
  } else {
    hotAPI.reload("data-v-14e906f5", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(20)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(19)
  , IE8_DOM_DEFINE = __webpack_require__(54)
  , toPrimitive    = __webpack_require__(39)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(142)
  , defined = __webpack_require__(29);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(7)
  , createDesc = __webpack_require__(23);
module.exports = __webpack_require__(5) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(37)('wks')
  , uid        = __webpack_require__(24)
  , Symbol     = __webpack_require__(4).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(51);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var trim = /^\s+|\s+$/g;
var whitespace = /\s+/g;

function interpret(input) {
    return typeof input === 'string' ? input.replace(trim, '').split(whitespace) : input;
}

function classes(el) {
    if (isElement(el)) {
        return el.className.replace(trim, '').split(whitespace);
    }

    return [];
}

function set(el, input) {
    if (isElement(el)) {
        el.className = interpret(input).join(' ');
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
    var elementObjects = (typeof HTMLElement === 'undefined' ? 'undefined' : (0, _typeof3.default)(HTMLElement)) === 'object';
    return elementObjects ? o instanceof HTMLElement : isElementObject(o);
}

function isElementObject(o) {
    return o && (typeof o === 'undefined' ? 'undefined' : (0, _typeof3.default)(o)) === 'object' && typeof o.nodeName === 'string' && o.nodeType === 1;
}

exports.default = {
    add: add,
    remove: remove,
    contains: contains,
    has: contains,
    set: set,
    get: classes
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getDayFull = getDayFull;
exports.getDayInitial = getDayInitial;
exports.getDayAbbreviated = getDayAbbreviated;
exports.getMonthFull = getMonthFull;
exports.getMonthAbbreviated = getMonthAbbreviated;
exports.getDayOfMonth = getDayOfMonth;
exports.humanize = humanize;
exports.clone = clone;
exports.moveToDayOfWeek = moveToDayOfWeek;
exports.isSameDay = isSameDay;
exports.isBefore = isBefore;
exports.isAfter = isAfter;
var defaultLang = exports.defaultLang = {
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

exports.default = {
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
/* 13 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(202)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(89),
  /* template */
  __webpack_require__(252),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiButton.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiButton.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e69d6b3a", Component.options)
  } else {
    hotAPI.reload("data-v-e69d6b3a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(204)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(107),
  /* template */
  __webpack_require__(254),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiPopover.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiPopover.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fb51df78", Component.options)
  } else {
    hotAPI.reload("data-v-fb51df78", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(174)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(109),
  /* template */
  __webpack_require__(224),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiProgressCircular.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiProgressCircular.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-20257add", Component.options)
  } else {
    hotAPI.reload("data-v-20257add", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(18);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(51);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.isObject = isObject;
exports.looseEqual = looseEqual;
exports.looseIndexOf = looseIndexOf;
exports.startsWith = startsWith;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isObject(obj) {
    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object';
}

function looseEqual(a, b) {
    return a == b || (isObject(a) && isObject(b) ? (0, _stringify2.default)(a) === (0, _stringify2.default)(b) : false);
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(132), __esModule: true };

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(21);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(59)
  , enumBugKeys = __webpack_require__(30);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(198)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(103),
  /* template */
  __webpack_require__(248),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiIconButton.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiIconButton.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8ced2988", Component.options)
  } else {
    hotAPI.reload("data-v-8ced2988", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(185)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(106),
  /* template */
  __webpack_require__(235),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiModal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiModal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-509bc3e8", Component.options)
  } else {
    hotAPI.reload("data-v-509bc3e8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(200)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(125),
  /* template */
  __webpack_require__(250),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiTooltip.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiTooltip.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b226babc", Component.options)
  } else {
    hotAPI.reload("data-v-b226babc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = __webpack_require__(206);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            windowResizeListener: null
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.windowResizeListener = (0, _lodash2.default)(function () {
            _this.$emit('window-resize');
        }, 200);

        window.addEventListener('resize', this.windowResizeListener);
    },
    beforeDestroy: function beforeDestroy() {
        window.removeEventListener('resize', this.windowResizeListener);
    }
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(4)
  , core      = __webpack_require__(13)
  , ctx       = __webpack_require__(139)
  , hide      = __webpack_require__(9)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f
  , has = __webpack_require__(6)
  , TAG = __webpack_require__(10)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(37)('keys')
  , uid    = __webpack_require__(24);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(21);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(4)
  , core           = __webpack_require__(13)
  , LIBRARY        = __webpack_require__(33)
  , wksExt         = __webpack_require__(41)
  , defineProperty = __webpack_require__(7).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(10);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(171)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(90),
  /* template */
  __webpack_require__(221),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiCalendar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiCalendar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-16dd362f", Component.options)
  } else {
    hotAPI.reload("data-v-16dd362f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(193)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(94),
  /* template */
  __webpack_require__(243),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiCheckbox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiCheckbox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6d48e798", Component.options)
  } else {
    hotAPI.reload("data-v-6d48e798", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(179)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(110),
  /* template */
  __webpack_require__(229),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiProgressLinear.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiProgressLinear.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-363761e3", Component.options)
  } else {
    hotAPI.reload("data-v-363761e3", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(172)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(111),
  /* template */
  __webpack_require__(222),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiRadio.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiRadio.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1c88e05a", Component.options)
  } else {
    hotAPI.reload("data-v-1c88e05a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(183)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(117),
  /* template */
  __webpack_require__(233),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiSnackbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiSnackbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4f182f14", Component.options)
  } else {
    hotAPI.reload("data-v-4f182f14", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    inserted: function inserted(el, _ref) {
        var value = _ref.value;

        if (value) {
            el.focus();
        }
    }
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.inView = inView;
exports.scrollIntoView = scrollIntoView;
exports.resetScroll = resetScroll;
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

exports.default = {
    inView: inView,
    scrollIntoView: scrollIntoView,
    resetScroll: resetScroll
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = {
    generate: generate,
    short: short
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(133), __esModule: true };

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(128);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(127);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 52 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(21)
  , document = __webpack_require__(4).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(20)(function(){
  return Object.defineProperty(__webpack_require__(53)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(33)
  , $export        = __webpack_require__(31)
  , redefine       = __webpack_require__(60)
  , hide           = __webpack_require__(9)
  , has            = __webpack_require__(6)
  , Iterators      = __webpack_require__(32)
  , $iterCreate    = __webpack_require__(144)
  , setToStringTag = __webpack_require__(35)
  , getPrototypeOf = __webpack_require__(151)
  , ITERATOR       = __webpack_require__(10)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(19)
  , dPs         = __webpack_require__(148)
  , enumBugKeys = __webpack_require__(30)
  , IE_PROTO    = __webpack_require__(36)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(53)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(141).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(59)
  , hiddenKeys = __webpack_require__(30).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(6)
  , toIObject    = __webpack_require__(8)
  , arrayIndexOf = __webpack_require__(138)(false)
  , IE_PROTO     = __webpack_require__(36)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);

/***/ }),
/* 61 */
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether-drop 1.4.1 */

(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(63)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = factory(require('tether'));
  } else {
    root.Drop = factory(root.Tether);
  }
}(this, function(Tether) {

/* global Tether */
'use strict';

var _bind = Function.prototype.bind;

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Tether$Utils = Tether.Utils;
var extend = _Tether$Utils.extend;
var addClass = _Tether$Utils.addClass;
var removeClass = _Tether$Utils.removeClass;
var hasClass = _Tether$Utils.hasClass;
var Evented = _Tether$Utils.Evented;

function sortAttach(str) {
  var _str$split = str.split(' ');

  var _str$split2 = _slicedToArray(_str$split, 2);

  var first = _str$split2[0];
  var second = _str$split2[1];

  if (['left', 'right'].indexOf(first) >= 0) {
    var _ref = [second, first];
    first = _ref[0];
    second = _ref[1];
  }
  return [first, second].join(' ');
}

function removeFromArray(arr, item) {
  var index = undefined;
  var results = [];
  while ((index = arr.indexOf(item)) !== -1) {
    results.push(arr.splice(index, 1));
  }
  return results;
}

var clickEvents = ['click'];
if ('ontouchstart' in document.documentElement) {
  clickEvents.push('touchstart');
}

var transitionEndEvents = {
  'WebkitTransition': 'webkitTransitionEnd',
  'MozTransition': 'transitionend',
  'OTransition': 'otransitionend',
  'transition': 'transitionend'
};

var transitionEndEvent = '';
for (var _name in transitionEndEvents) {
  if (({}).hasOwnProperty.call(transitionEndEvents, _name)) {
    var tempEl = document.createElement('p');
    if (typeof tempEl.style[_name] !== 'undefined') {
      transitionEndEvent = transitionEndEvents[_name];
    }
  }
}

var MIRROR_ATTACH = {
  left: 'right',
  right: 'left',
  top: 'bottom',
  bottom: 'top',
  middle: 'middle',
  center: 'center'
};

var allDrops = {};

// Drop can be included in external libraries.  Calling createContext gives you a fresh
// copy of drop which won't interact with other copies on the page (beyond calling the document events).

function createContext() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var drop = function drop() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new (_bind.apply(DropInstance, [null].concat(args)))();
  };

  extend(drop, {
    createContext: createContext,
    drops: [],
    defaults: {}
  });

  var defaultOptions = {
    classPrefix: 'drop',
    defaults: {
      position: 'bottom left',
      openOn: 'click',
      beforeClose: null,
      constrainToScrollParent: true,
      constrainToWindow: true,
      classes: '',
      remove: false,
      openDelay: 0,
      closeDelay: 50,
      // inherited from openDelay and closeDelay if not explicitly defined
      focusDelay: null,
      blurDelay: null,
      hoverOpenDelay: null,
      hoverCloseDelay: null,
      tetherOptions: {}
    }
  };

  extend(drop, defaultOptions, options);
  extend(drop.defaults, defaultOptions.defaults, options.defaults);

  if (typeof allDrops[drop.classPrefix] === 'undefined') {
    allDrops[drop.classPrefix] = [];
  }

  drop.updateBodyClasses = function () {
    // There is only one body, so despite the context concept, we still iterate through all
    // drops which share our classPrefix.

    var anyOpen = false;
    var drops = allDrops[drop.classPrefix];
    var len = drops.length;
    for (var i = 0; i < len; ++i) {
      if (drops[i].isOpened()) {
        anyOpen = true;
        break;
      }
    }

    if (anyOpen) {
      addClass(document.body, drop.classPrefix + '-open');
    } else {
      removeClass(document.body, drop.classPrefix + '-open');
    }
  };

  var DropInstance = (function (_Evented) {
    _inherits(DropInstance, _Evented);

    function DropInstance(opts) {
      _classCallCheck(this, DropInstance);

      _get(Object.getPrototypeOf(DropInstance.prototype), 'constructor', this).call(this);
      this.options = extend({}, drop.defaults, opts);
      this.target = this.options.target;

      if (typeof this.target === 'undefined') {
        throw new Error('Drop Error: You must provide a target.');
      }

      var dataPrefix = 'data-' + drop.classPrefix;

      var contentAttr = this.target.getAttribute(dataPrefix);
      if (contentAttr && this.options.content == null) {
        this.options.content = contentAttr;
      }

      var attrsOverride = ['position', 'openOn'];
      for (var i = 0; i < attrsOverride.length; ++i) {

        var override = this.target.getAttribute(dataPrefix + '-' + attrsOverride[i]);
        if (override && this.options[attrsOverride[i]] == null) {
          this.options[attrsOverride[i]] = override;
        }
      }

      if (this.options.classes && this.options.addTargetClasses !== false) {
        addClass(this.target, this.options.classes);
      }

      drop.drops.push(this);
      allDrops[drop.classPrefix].push(this);

      this._boundEvents = [];
      this.bindMethods();
      this.setupElements();
      this.setupEvents();
      this.setupTether();
    }

    _createClass(DropInstance, [{
      key: '_on',
      value: function _on(element, event, handler) {
        this._boundEvents.push({ element: element, event: event, handler: handler });
        element.addEventListener(event, handler);
      }
    }, {
      key: 'bindMethods',
      value: function bindMethods() {
        this.transitionEndHandler = this._transitionEndHandler.bind(this);
      }
    }, {
      key: 'setupElements',
      value: function setupElements() {
        var _this = this;

        this.drop = document.createElement('div');
        addClass(this.drop, drop.classPrefix);

        if (this.options.classes) {
          addClass(this.drop, this.options.classes);
        }

        this.content = document.createElement('div');
        addClass(this.content, drop.classPrefix + '-content');

        if (typeof this.options.content === 'function') {
          var generateAndSetContent = function generateAndSetContent() {
            // content function might return a string or an element
            var contentElementOrHTML = _this.options.content.call(_this, _this);

            if (typeof contentElementOrHTML === 'string') {
              _this.content.innerHTML = contentElementOrHTML;
            } else if (typeof contentElementOrHTML === 'object') {
              _this.content.innerHTML = '';
              _this.content.appendChild(contentElementOrHTML);
            } else {
              throw new Error('Drop Error: Content function should return a string or HTMLElement.');
            }
          };

          generateAndSetContent();
          this.on('open', generateAndSetContent.bind(this));
        } else if (typeof this.options.content === 'object') {
          this.content.appendChild(this.options.content);
        } else {
          this.content.innerHTML = this.options.content;
        }

        this.drop.appendChild(this.content);
      }
    }, {
      key: 'setupTether',
      value: function setupTether() {
        // Tether expects two attachment points, one in the target element, one in the
        // drop.  We use a single one, and use the order as well, to allow us to put
        // the drop on either side of any of the four corners.  This magic converts between
        // the two:
        var dropAttach = this.options.position.split(' ');
        dropAttach[0] = MIRROR_ATTACH[dropAttach[0]];
        dropAttach = dropAttach.join(' ');

        var constraints = [];
        if (this.options.constrainToScrollParent) {
          constraints.push({
            to: 'scrollParent',
            pin: 'top, bottom',
            attachment: 'together none'
          });
        } else {
          // To get 'out of bounds' classes
          constraints.push({
            to: 'scrollParent'
          });
        }

        if (this.options.constrainToWindow !== false) {
          constraints.push({
            to: 'window',
            attachment: 'together'
          });
        } else {
          // To get 'out of bounds' classes
          constraints.push({
            to: 'window'
          });
        }

        var opts = {
          element: this.drop,
          target: this.target,
          attachment: sortAttach(dropAttach),
          targetAttachment: sortAttach(this.options.position),
          classPrefix: drop.classPrefix,
          offset: '0 0',
          targetOffset: '0 0',
          enabled: false,
          constraints: constraints,
          addTargetClasses: this.options.addTargetClasses
        };

        if (this.options.tetherOptions !== false) {
          this.tether = new Tether(extend({}, opts, this.options.tetherOptions));
        }
      }
    }, {
      key: 'setupEvents',
      value: function setupEvents() {
        var _this2 = this;

        if (!this.options.openOn) {
          return;
        }

        if (this.options.openOn === 'always') {
          setTimeout(this.open.bind(this));
          return;
        }

        var events = this.options.openOn.split(' ');

        if (events.indexOf('click') >= 0) {
          var openHandler = function openHandler(event) {
            _this2.toggle(event);
            event.preventDefault();
          };

          var closeHandler = function closeHandler(event) {
            if (!_this2.isOpened()) {
              return;
            }

            // Clicking inside dropdown
            if (event.target === _this2.drop || _this2.drop.contains(event.target)) {
              return;
            }

            // Clicking target
            if (event.target === _this2.target || _this2.target.contains(event.target)) {
              return;
            }

            _this2.close(event);
          };

          for (var i = 0; i < clickEvents.length; ++i) {
            var clickEvent = clickEvents[i];
            this._on(this.target, clickEvent, openHandler);
            this._on(document, clickEvent, closeHandler);
          }
        }

        var inTimeout = null;
        var outTimeout = null;

        var inHandler = function inHandler(event) {
          if (outTimeout !== null) {
            clearTimeout(outTimeout);
          } else {
            inTimeout = setTimeout(function () {
              _this2.open(event);
              inTimeout = null;
            }, (event.type === 'focus' ? _this2.options.focusDelay : _this2.options.hoverOpenDelay) || _this2.options.openDelay);
          }
        };

        var outHandler = function outHandler(event) {
          if (inTimeout !== null) {
            clearTimeout(inTimeout);
          } else {
            outTimeout = setTimeout(function () {
              _this2.close(event);
              outTimeout = null;
            }, (event.type === 'blur' ? _this2.options.blurDelay : _this2.options.hoverCloseDelay) || _this2.options.closeDelay);
          }
        };

        if (events.indexOf('hover') >= 0) {
          this._on(this.target, 'mouseover', inHandler);
          this._on(this.drop, 'mouseover', inHandler);
          this._on(this.target, 'mouseout', outHandler);
          this._on(this.drop, 'mouseout', outHandler);
        }

        if (events.indexOf('focus') >= 0) {
          this._on(this.target, 'focus', inHandler);
          this._on(this.drop, 'focus', inHandler);
          this._on(this.target, 'blur', outHandler);
          this._on(this.drop, 'blur', outHandler);
        }
      }
    }, {
      key: 'isOpened',
      value: function isOpened() {
        if (this.drop) {
          return hasClass(this.drop, drop.classPrefix + '-open');
        }
      }
    }, {
      key: 'toggle',
      value: function toggle(event) {
        if (this.isOpened()) {
          this.close(event);
        } else {
          this.open(event);
        }
      }
    }, {
      key: 'open',
      value: function open(event) {
        var _this3 = this;

        /* eslint no-unused-vars: 0 */
        if (this.isOpened()) {
          return;
        }

        if (!this.drop.parentNode) {
          document.body.appendChild(this.drop);
        }

        if (typeof this.tether !== 'undefined') {
          this.tether.enable();
        }

        addClass(this.drop, drop.classPrefix + '-open');
        addClass(this.drop, drop.classPrefix + '-open-transitionend');

        setTimeout(function () {
          if (_this3.drop) {
            addClass(_this3.drop, drop.classPrefix + '-after-open');
          }
        });

        if (typeof this.tether !== 'undefined') {
          this.tether.position();
        }

        this.trigger('open');

        drop.updateBodyClasses();
      }
    }, {
      key: '_transitionEndHandler',
      value: function _transitionEndHandler(e) {
        if (e.target !== e.currentTarget) {
          return;
        }

        if (!hasClass(this.drop, drop.classPrefix + '-open')) {
          removeClass(this.drop, drop.classPrefix + '-open-transitionend');
        }
        this.drop.removeEventListener(transitionEndEvent, this.transitionEndHandler);
      }
    }, {
      key: 'beforeCloseHandler',
      value: function beforeCloseHandler(event) {
        var shouldClose = true;

        if (!this.isClosing && typeof this.options.beforeClose === 'function') {
          this.isClosing = true;
          shouldClose = this.options.beforeClose(event, this) !== false;
        }

        this.isClosing = false;

        return shouldClose;
      }
    }, {
      key: 'close',
      value: function close(event) {
        if (!this.isOpened()) {
          return;
        }

        if (!this.beforeCloseHandler(event)) {
          return;
        }

        removeClass(this.drop, drop.classPrefix + '-open');
        removeClass(this.drop, drop.classPrefix + '-after-open');

        this.drop.addEventListener(transitionEndEvent, this.transitionEndHandler);

        this.trigger('close');

        if (typeof this.tether !== 'undefined') {
          this.tether.disable();
        }

        drop.updateBodyClasses();

        if (this.options.remove) {
          this.remove(event);
        }
      }
    }, {
      key: 'remove',
      value: function remove(event) {
        this.close(event);
        if (this.drop.parentNode) {
          this.drop.parentNode.removeChild(this.drop);
        }
      }
    }, {
      key: 'position',
      value: function position() {
        if (this.isOpened() && typeof this.tether !== 'undefined') {
          this.tether.position();
        }
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        this.remove();

        if (typeof this.tether !== 'undefined') {
          this.tether.destroy();
        }

        for (var i = 0; i < this._boundEvents.length; ++i) {
          var _boundEvents$i = this._boundEvents[i];
          var element = _boundEvents$i.element;
          var _event = _boundEvents$i.event;
          var handler = _boundEvents$i.handler;

          element.removeEventListener(_event, handler);
        }

        this._boundEvents = [];

        this.tether = null;
        this.drop = null;
        this.content = null;
        this.target = null;

        removeFromArray(allDrops[drop.classPrefix], this);
        removeFromArray(drop.drops, this);
      }
    }]);

    return DropInstance;
  })(Evented);

  return drop;
}

var Drop = createContext();

document.addEventListener('DOMContentLoaded', function () {
  Drop.updateBodyClasses();
});
return Drop;

}));


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether 1.4.0 */

(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = factory(require, exports, module);
  } else {
    root.Tether = factory();
  }
}(this, function(require, exports, module) {

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TetherBase = undefined;
if (typeof TetherBase === 'undefined') {
  TetherBase = { modules: [] };
}

var zeroElement = null;

// Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
// if the element lies within a nested document (<frame> or <iframe>-like).
function getActualBoundingClientRect(node) {
  var boundingRect = node.getBoundingClientRect();

  // The original object returned by getBoundingClientRect is immutable, so we clone it
  // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
  var rect = {};
  for (var k in boundingRect) {
    rect[k] = boundingRect[k];
  }

  if (node.ownerDocument !== document) {
    var _frameElement = node.ownerDocument.defaultView.frameElement;
    if (_frameElement) {
      var frameRect = getActualBoundingClientRect(_frameElement);
      rect.top += frameRect.top;
      rect.bottom += frameRect.top;
      rect.left += frameRect.left;
      rect.right += frameRect.left;
    }
  }

  return rect;
}

function getScrollParents(el) {
  // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
  // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = getComputedStyle(el) || {};
  var position = computedStyle.position;
  var parents = [];

  if (position === 'fixed') {
    return [el];
  }

  var parent = el;
  while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
    var style = undefined;
    try {
      style = getComputedStyle(parent);
    } catch (err) {}

    if (typeof style === 'undefined' || style === null) {
      parents.push(parent);
      return parents;
    }

    var _style = style;
    var overflow = _style.overflow;
    var overflowX = _style.overflowX;
    var overflowY = _style.overflowY;

    if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
        parents.push(parent);
      }
    }
  }

  parents.push(el.ownerDocument.body);

  // If the node is within a frame, account for the parent window scroll
  if (el.ownerDocument !== document) {
    parents.push(el.ownerDocument.defaultView);
  }

  return parents;
}

var uniqueId = (function () {
  var id = 0;
  return function () {
    return ++id;
  };
})();

var zeroPosCache = {};
var getOrigin = function getOrigin() {
  // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
  // jitter as the user scrolls that messes with our ability to detect if two positions
  // are equivilant or not.  We place an element at the top left of the page that will
  // get the same jitter, so we can cancel the two out.
  var node = zeroElement;
  if (!node || !document.body.contains(node)) {
    node = document.createElement('div');
    node.setAttribute('data-tether-id', uniqueId());
    extend(node.style, {
      top: 0,
      left: 0,
      position: 'absolute'
    });

    document.body.appendChild(node);

    zeroElement = node;
  }

  var id = node.getAttribute('data-tether-id');
  if (typeof zeroPosCache[id] === 'undefined') {
    zeroPosCache[id] = getActualBoundingClientRect(node);

    // Clear the cache when this position call is done
    defer(function () {
      delete zeroPosCache[id];
    });
  }

  return zeroPosCache[id];
};

function removeUtilElements() {
  if (zeroElement) {
    document.body.removeChild(zeroElement);
  }
  zeroElement = null;
};

function getBounds(el) {
  var doc = undefined;
  if (el === document) {
    doc = document;
    el = document.documentElement;
  } else {
    doc = el.ownerDocument;
  }

  var docEl = doc.documentElement;

  var box = getActualBoundingClientRect(el);

  var origin = getOrigin();

  box.top -= origin.top;
  box.left -= origin.left;

  if (typeof box.width === 'undefined') {
    box.width = document.body.scrollWidth - box.left - box.right;
  }
  if (typeof box.height === 'undefined') {
    box.height = document.body.scrollHeight - box.top - box.bottom;
  }

  box.top = box.top - docEl.clientTop;
  box.left = box.left - docEl.clientLeft;
  box.right = doc.body.clientWidth - box.width - box.left;
  box.bottom = doc.body.clientHeight - box.height - box.top;

  return box;
}

function getOffsetParent(el) {
  return el.offsetParent || document.documentElement;
}

var _scrollBarSize = null;
function getScrollBarSize() {
  if (_scrollBarSize) {
    return _scrollBarSize;
  }
  var inner = document.createElement('div');
  inner.style.width = '100%';
  inner.style.height = '200px';

  var outer = document.createElement('div');
  extend(outer.style, {
    position: 'absolute',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    visibility: 'hidden',
    width: '200px',
    height: '150px',
    overflow: 'hidden'
  });

  outer.appendChild(inner);

  document.body.appendChild(outer);

  var widthContained = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var widthScroll = inner.offsetWidth;

  if (widthContained === widthScroll) {
    widthScroll = outer.clientWidth;
  }

  document.body.removeChild(outer);

  var width = widthContained - widthScroll;

  _scrollBarSize = { width: width, height: width };
  return _scrollBarSize;
}

function extend() {
  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var args = [];

  Array.prototype.push.apply(args, arguments);

  args.slice(1).forEach(function (obj) {
    if (obj) {
      for (var key in obj) {
        if (({}).hasOwnProperty.call(obj, key)) {
          out[key] = obj[key];
        }
      }
    }
  });

  return out;
}

function removeClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.remove(cls);
      }
    });
  } else {
    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
    var className = getClassName(el).replace(regex, ' ');
    setClassName(el, className);
  }
}

function addClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.add(cls);
      }
    });
  } else {
    removeClass(el, name);
    var cls = getClassName(el) + (' ' + name);
    setClassName(el, cls);
  }
}

function hasClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    return el.classList.contains(name);
  }
  var className = getClassName(el);
  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
}

function getClassName(el) {
  // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
  // completely separately SVGAnimatedString base classes
  if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
    return el.className.baseVal;
  }
  return el.className;
}

function setClassName(el, className) {
  el.setAttribute('class', className);
}

function updateClasses(el, add, all) {
  // Of the set of 'all' classes, we need the 'add' classes, and only the
  // 'add' classes to be set.
  all.forEach(function (cls) {
    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
      removeClass(el, cls);
    }
  });

  add.forEach(function (cls) {
    if (!hasClass(el, cls)) {
      addClass(el, cls);
    }
  });
}

var deferred = [];

var defer = function defer(fn) {
  deferred.push(fn);
};

var flush = function flush() {
  var fn = undefined;
  while (fn = deferred.pop()) {
    fn();
  }
};

var Evented = (function () {
  function Evented() {
    _classCallCheck(this, Evented);
  }

  _createClass(Evented, [{
    key: 'on',
    value: function on(event, handler, ctx) {
      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

      if (typeof this.bindings === 'undefined') {
        this.bindings = {};
      }
      if (typeof this.bindings[event] === 'undefined') {
        this.bindings[event] = [];
      }
      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
    }
  }, {
    key: 'once',
    value: function once(event, handler, ctx) {
      this.on(event, handler, ctx, true);
    }
  }, {
    key: 'off',
    value: function off(event, handler) {
      if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
        return;
      }

      if (typeof handler === 'undefined') {
        delete this.bindings[event];
      } else {
        var i = 0;
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }, {
    key: 'trigger',
    value: function trigger(event) {
      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
        var i = 0;

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        while (i < this.bindings[event].length) {
          var _bindings$event$i = this.bindings[event][i];
          var handler = _bindings$event$i.handler;
          var ctx = _bindings$event$i.ctx;
          var once = _bindings$event$i.once;

          var context = ctx;
          if (typeof context === 'undefined') {
            context = this;
          }

          handler.apply(context, args);

          if (once) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }]);

  return Evented;
})();

TetherBase.Utils = {
  getActualBoundingClientRect: getActualBoundingClientRect,
  getScrollParents: getScrollParents,
  getBounds: getBounds,
  getOffsetParent: getOffsetParent,
  extend: extend,
  addClass: addClass,
  removeClass: removeClass,
  hasClass: hasClass,
  updateClasses: updateClasses,
  defer: defer,
  flush: flush,
  uniqueId: uniqueId,
  Evented: Evented,
  getScrollBarSize: getScrollBarSize,
  removeUtilElements: removeUtilElements
};
/* globals TetherBase, performance */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x6, _x7, _x8) { var _again = true; _function: while (_again) { var object = _x6, property = _x7, receiver = _x8; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x6 = parent; _x7 = property; _x8 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof TetherBase === 'undefined') {
  throw new Error('You must include the utils.js file before tether.js');
}

var _TetherBase$Utils = TetherBase.Utils;
var getScrollParents = _TetherBase$Utils.getScrollParents;
var getBounds = _TetherBase$Utils.getBounds;
var getOffsetParent = _TetherBase$Utils.getOffsetParent;
var extend = _TetherBase$Utils.extend;
var addClass = _TetherBase$Utils.addClass;
var removeClass = _TetherBase$Utils.removeClass;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;
var flush = _TetherBase$Utils.flush;
var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
var removeUtilElements = _TetherBase$Utils.removeUtilElements;

function within(a, b) {
  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

  return a + diff >= b && b >= a - diff;
}

var transformKey = (function () {
  if (typeof document === 'undefined') {
    return '';
  }
  var el = document.createElement('div');

  var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
  for (var i = 0; i < transforms.length; ++i) {
    var key = transforms[i];
    if (el.style[key] !== undefined) {
      return key;
    }
  }
})();

var tethers = [];

var position = function position() {
  tethers.forEach(function (tether) {
    tether.position(false);
  });
  flush();
};

function now() {
  if (typeof performance !== 'undefined' && typeof performance.now !== 'undefined') {
    return performance.now();
  }
  return +new Date();
}

(function () {
  var lastCall = null;
  var lastDuration = null;
  var pendingTimeout = null;

  var tick = function tick() {
    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
      // We voluntarily throttle ourselves if we can't manage 60fps
      lastDuration = Math.min(lastDuration - 16, 250);

      // Just in case this is the last event, remember to position just once more
      pendingTimeout = setTimeout(tick, 250);
      return;
    }

    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
      // Some browsers call events a little too frequently, refuse to run more than is reasonable
      return;
    }

    if (pendingTimeout != null) {
      clearTimeout(pendingTimeout);
      pendingTimeout = null;
    }

    lastCall = now();
    position();
    lastDuration = now() - lastCall;
  };

  if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
      window.addEventListener(event, tick);
    });
  }
})();

var MIRROR_LR = {
  center: 'center',
  left: 'right',
  right: 'left'
};

var MIRROR_TB = {
  middle: 'middle',
  top: 'bottom',
  bottom: 'top'
};

var OFFSET_MAP = {
  top: 0,
  left: 0,
  middle: '50%',
  center: '50%',
  bottom: '100%',
  right: '100%'
};

var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (left === 'auto') {
    left = MIRROR_LR[relativeToAttachment.left];
  }

  if (top === 'auto') {
    top = MIRROR_TB[relativeToAttachment.top];
  }

  return { left: left, top: top };
};

var attachmentToOffset = function attachmentToOffset(attachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
    left = OFFSET_MAP[attachment.left];
  }

  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
    top = OFFSET_MAP[attachment.top];
  }

  return { left: left, top: top };
};

function addOffset() {
  var out = { top: 0, left: 0 };

  for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
    offsets[_key] = arguments[_key];
  }

  offsets.forEach(function (_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (typeof top === 'string') {
      top = parseFloat(top, 10);
    }
    if (typeof left === 'string') {
      left = parseFloat(left, 10);
    }

    out.top += top;
    out.left += left;
  });

  return out;
}

function offsetToPx(offset, size) {
  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
  }
  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
  }

  return offset;
}

var parseOffset = function parseOffset(value) {
  var _value$split = value.split(' ');

  var _value$split2 = _slicedToArray(_value$split, 2);

  var top = _value$split2[0];
  var left = _value$split2[1];

  return { top: top, left: left };
};
var parseAttachment = parseOffset;

var TetherClass = (function (_Evented) {
  _inherits(TetherClass, _Evented);

  function TetherClass(options) {
    var _this = this;

    _classCallCheck(this, TetherClass);

    _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
    this.position = this.position.bind(this);

    tethers.push(this);

    this.history = [];

    this.setOptions(options, false);

    TetherBase.modules.forEach(function (module) {
      if (typeof module.initialize !== 'undefined') {
        module.initialize.call(_this);
      }
    });

    this.position();
  }

  _createClass(TetherClass, [{
    key: 'getClass',
    value: function getClass() {
      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
      var classes = this.options.classes;

      if (typeof classes !== 'undefined' && classes[key]) {
        return this.options.classes[key];
      } else if (this.options.classPrefix) {
        return this.options.classPrefix + '-' + key;
      } else {
        return key;
      }
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      var _this2 = this;

      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

      var defaults = {
        offset: '0 0',
        targetOffset: '0 0',
        targetAttachment: 'auto auto',
        classPrefix: 'tether'
      };

      this.options = extend(defaults, options);

      var _options = this.options;
      var element = _options.element;
      var target = _options.target;
      var targetModifier = _options.targetModifier;

      this.element = element;
      this.target = target;
      this.targetModifier = targetModifier;

      if (this.target === 'viewport') {
        this.target = document.body;
        this.targetModifier = 'visible';
      } else if (this.target === 'scroll-handle') {
        this.target = document.body;
        this.targetModifier = 'scroll-handle';
      }

      ['element', 'target'].forEach(function (key) {
        if (typeof _this2[key] === 'undefined') {
          throw new Error('Tether Error: Both element and target must be defined');
        }

        if (typeof _this2[key].jquery !== 'undefined') {
          _this2[key] = _this2[key][0];
        } else if (typeof _this2[key] === 'string') {
          _this2[key] = document.querySelector(_this2[key]);
        }
      });

      addClass(this.element, this.getClass('element'));
      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('target'));
      }

      if (!this.options.attachment) {
        throw new Error('Tether Error: You must provide an attachment');
      }

      this.targetAttachment = parseAttachment(this.options.targetAttachment);
      this.attachment = parseAttachment(this.options.attachment);
      this.offset = parseOffset(this.options.offset);
      this.targetOffset = parseOffset(this.options.targetOffset);

      if (typeof this.scrollParents !== 'undefined') {
        this.disable();
      }

      if (this.targetModifier === 'scroll-handle') {
        this.scrollParents = [this.target];
      } else {
        this.scrollParents = getScrollParents(this.target);
      }

      if (!(this.options.enabled === false)) {
        this.enable(pos);
      }
    }
  }, {
    key: 'getTargetBounds',
    value: function getTargetBounds() {
      if (typeof this.targetModifier !== 'undefined') {
        if (this.targetModifier === 'visible') {
          if (this.target === document.body) {
            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
          } else {
            var bounds = getBounds(this.target);

            var out = {
              height: bounds.height,
              width: bounds.width,
              top: bounds.top,
              left: bounds.left
            };

            out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
            out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
            out.height = Math.min(innerHeight, out.height);
            out.height -= 2;

            out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
            out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
            out.width = Math.min(innerWidth, out.width);
            out.width -= 2;

            if (out.top < pageYOffset) {
              out.top = pageYOffset;
            }
            if (out.left < pageXOffset) {
              out.left = pageXOffset;
            }

            return out;
          }
        } else if (this.targetModifier === 'scroll-handle') {
          var bounds = undefined;
          var target = this.target;
          if (target === document.body) {
            target = document.documentElement;

            bounds = {
              left: pageXOffset,
              top: pageYOffset,
              height: innerHeight,
              width: innerWidth
            };
          } else {
            bounds = getBounds(target);
          }

          var style = getComputedStyle(target);

          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;

          var scrollBottom = 0;
          if (hasBottomScroll) {
            scrollBottom = 15;
          }

          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;

          var out = {
            width: 15,
            height: height * 0.975 * (height / target.scrollHeight),
            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
          };

          var fitAdj = 0;
          if (height < 408 && this.target === document.body) {
            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
          }

          if (this.target !== document.body) {
            out.height = Math.max(out.height, 24);
          }

          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);

          if (this.target === document.body) {
            out.height = Math.max(out.height, 24);
          }

          return out;
        }
      } else {
        return getBounds(this.target);
      }
    }
  }, {
    key: 'clearCache',
    value: function clearCache() {
      this._cache = {};
    }
  }, {
    key: 'cache',
    value: function cache(k, getter) {
      // More than one module will often need the same DOM info, so
      // we keep a cache which is cleared on each position call
      if (typeof this._cache === 'undefined') {
        this._cache = {};
      }

      if (typeof this._cache[k] === 'undefined') {
        this._cache[k] = getter.call(this);
      }

      return this._cache[k];
    }
  }, {
    key: 'enable',
    value: function enable() {
      var _this3 = this;

      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('enabled'));
      }
      addClass(this.element, this.getClass('enabled'));
      this.enabled = true;

      this.scrollParents.forEach(function (parent) {
        if (parent !== _this3.target.ownerDocument) {
          parent.addEventListener('scroll', _this3.position);
        }
      });

      if (pos) {
        this.position();
      }
    }
  }, {
    key: 'disable',
    value: function disable() {
      var _this4 = this;

      removeClass(this.target, this.getClass('enabled'));
      removeClass(this.element, this.getClass('enabled'));
      this.enabled = false;

      if (typeof this.scrollParents !== 'undefined') {
        this.scrollParents.forEach(function (parent) {
          parent.removeEventListener('scroll', _this4.position);
        });
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this5 = this;

      this.disable();

      tethers.forEach(function (tether, i) {
        if (tether === _this5) {
          tethers.splice(i, 1);
        }
      });

      // Remove any elements we were using for convenience from the DOM
      if (tethers.length === 0) {
        removeUtilElements();
      }
    }
  }, {
    key: 'updateAttachClasses',
    value: function updateAttachClasses(elementAttach, targetAttach) {
      var _this6 = this;

      elementAttach = elementAttach || this.attachment;
      targetAttach = targetAttach || this.targetAttachment;
      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];

      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
        // updateAttachClasses can be called more than once in a position call, so
        // we need to clean up after ourselves such that when the last defer gets
        // ran it doesn't add any extra classes from previous calls.
        this._addAttachClasses.splice(0, this._addAttachClasses.length);
      }

      if (typeof this._addAttachClasses === 'undefined') {
        this._addAttachClasses = [];
      }
      var add = this._addAttachClasses;

      if (elementAttach.top) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
      }
      if (elementAttach.left) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
      }
      if (targetAttach.top) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
      }
      if (targetAttach.left) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
      }

      var all = [];
      sides.forEach(function (side) {
        all.push(_this6.getClass('element-attached') + '-' + side);
        all.push(_this6.getClass('target-attached') + '-' + side);
      });

      defer(function () {
        if (!(typeof _this6._addAttachClasses !== 'undefined')) {
          return;
        }

        updateClasses(_this6.element, _this6._addAttachClasses, all);
        if (!(_this6.options.addTargetClasses === false)) {
          updateClasses(_this6.target, _this6._addAttachClasses, all);
        }

        delete _this6._addAttachClasses;
      });
    }
  }, {
    key: 'position',
    value: function position() {
      var _this7 = this;

      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      // flushChanges commits the changes immediately, leave true unless you are positioning multiple
      // tethers (in which case call Tether.Utils.flush yourself when you're done)

      if (!this.enabled) {
        return;
      }

      this.clearCache();

      // Turn 'auto' attachments into the appropriate corner or edge
      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);

      this.updateAttachClasses(this.attachment, targetAttachment);

      var elementPos = this.cache('element-bounds', function () {
        return getBounds(_this7.element);
      });

      var width = elementPos.width;
      var height = elementPos.height;

      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
        var _lastSize = this.lastSize;

        // We cache the height and width to make it possible to position elements that are
        // getting hidden.
        width = _lastSize.width;
        height = _lastSize.height;
      } else {
        this.lastSize = { width: width, height: height };
      }

      var targetPos = this.cache('target-bounds', function () {
        return _this7.getTargetBounds();
      });
      var targetSize = targetPos;

      // Get an actual px offset from the attachment
      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);

      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);

      // Add the manually provided offset
      offset = addOffset(offset, manualOffset);
      targetOffset = addOffset(targetOffset, manualTargetOffset);

      // It's now our goal to make (element position + offset) == (target position + target offset)
      var left = targetPos.left + targetOffset.left - offset.left;
      var top = targetPos.top + targetOffset.top - offset.top;

      for (var i = 0; i < TetherBase.modules.length; ++i) {
        var _module2 = TetherBase.modules[i];
        var ret = _module2.position.call(this, {
          left: left,
          top: top,
          targetAttachment: targetAttachment,
          targetPos: targetPos,
          elementPos: elementPos,
          offset: offset,
          targetOffset: targetOffset,
          manualOffset: manualOffset,
          manualTargetOffset: manualTargetOffset,
          scrollbarSize: scrollbarSize,
          attachment: this.attachment
        });

        if (ret === false) {
          return false;
        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
          continue;
        } else {
          top = ret.top;
          left = ret.left;
        }
      }

      // We describe the position three different ways to give the optimizer
      // a chance to decide the best possible way to position the element
      // with the fewest repaints.
      var next = {
        // It's position relative to the page (absolute positioning when
        // the element is a child of the body)
        page: {
          top: top,
          left: left
        },

        // It's position relative to the viewport (fixed positioning)
        viewport: {
          top: top - pageYOffset,
          bottom: pageYOffset - top - height + innerHeight,
          left: left - pageXOffset,
          right: pageXOffset - left - width + innerWidth
        }
      };

      var doc = this.target.ownerDocument;
      var win = doc.defaultView;

      var scrollbarSize = undefined;
      if (win.innerHeight > doc.documentElement.clientHeight) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.bottom -= scrollbarSize.height;
      }

      if (win.innerWidth > doc.documentElement.clientWidth) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.right -= scrollbarSize.width;
      }

      if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
        next.page.bottom = doc.body.scrollHeight - top - height;
        next.page.right = doc.body.scrollWidth - left - width;
      }

      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
        (function () {
          var offsetParent = _this7.cache('target-offsetparent', function () {
            return getOffsetParent(_this7.target);
          });
          var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
            return getBounds(offsetParent);
          });
          var offsetParentStyle = getComputedStyle(offsetParent);
          var offsetParentSize = offsetPosition;

          var offsetBorder = {};
          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
          });

          offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
          offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;

          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
              // We're within the visible part of the target's scroll parent
              var scrollTop = offsetParent.scrollTop;
              var scrollLeft = offsetParent.scrollLeft;

              // It's position relative to the target's offset parent (absolute positioning when
              // the element is moved to be a child of the target's offset parent).
              next.offset = {
                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
              };
            }
          }
        })();
      }

      // We could also travel up the DOM and try each containing context, rather than only
      // looking at the body, but we're gonna get diminishing returns.

      this.move(next);

      this.history.unshift(next);

      if (this.history.length > 3) {
        this.history.pop();
      }

      if (flushChanges) {
        flush();
      }

      return true;
    }

    // THE ISSUE
  }, {
    key: 'move',
    value: function move(pos) {
      var _this8 = this;

      if (!(typeof this.element.parentNode !== 'undefined')) {
        return;
      }

      var same = {};

      for (var type in pos) {
        same[type] = {};

        for (var key in pos[type]) {
          var found = false;

          for (var i = 0; i < this.history.length; ++i) {
            var point = this.history[i];
            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
              found = true;
              break;
            }
          }

          if (!found) {
            same[type][key] = true;
          }
        }
      }

      var css = { top: '', left: '', right: '', bottom: '' };

      var transcribe = function transcribe(_same, _pos) {
        var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
        var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
        if (gpu !== false) {
          var yPos = undefined,
              xPos = undefined;
          if (_same.top) {
            css.top = 0;
            yPos = _pos.top;
          } else {
            css.bottom = 0;
            yPos = -_pos.bottom;
          }

          if (_same.left) {
            css.left = 0;
            xPos = _pos.left;
          } else {
            css.right = 0;
            xPos = -_pos.right;
          }

          if (window.matchMedia) {
            // HubSpot/tether#207
            var retina = window.matchMedia('only screen and (min-resolution: 1.3dppx)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3)').matches;
            if (!retina) {
              xPos = Math.round(xPos);
              yPos = Math.round(yPos);
            }
          }

          css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';

          if (transformKey !== 'msTransform') {
            // The Z transform will keep this in the GPU (faster, and prevents artifacts),
            // but IE9 doesn't support 3d transforms and will choke.
            css[transformKey] += " translateZ(0)";
          }
        } else {
          if (_same.top) {
            css.top = _pos.top + 'px';
          } else {
            css.bottom = _pos.bottom + 'px';
          }

          if (_same.left) {
            css.left = _pos.left + 'px';
          } else {
            css.right = _pos.right + 'px';
          }
        }
      };

      var moved = false;
      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
        css.position = 'absolute';
        transcribe(same.page, pos.page);
      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
        css.position = 'fixed';
        transcribe(same.viewport, pos.viewport);
      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
        (function () {
          css.position = 'absolute';
          var offsetParent = _this8.cache('target-offsetparent', function () {
            return getOffsetParent(_this8.target);
          });

          if (getOffsetParent(_this8.element) !== offsetParent) {
            defer(function () {
              _this8.element.parentNode.removeChild(_this8.element);
              offsetParent.appendChild(_this8.element);
            });
          }

          transcribe(same.offset, pos.offset);
          moved = true;
        })();
      } else {
        css.position = 'absolute';
        transcribe({ top: true, left: true }, pos.page);
      }

      if (!moved) {
        if (this.options.bodyElement) {
          this.options.bodyElement.appendChild(this.element);
        } else {
          var offsetParentIsBody = true;
          var currentNode = this.element.parentNode;
          while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
            if (getComputedStyle(currentNode).position !== 'static') {
              offsetParentIsBody = false;
              break;
            }

            currentNode = currentNode.parentNode;
          }

          if (!offsetParentIsBody) {
            this.element.parentNode.removeChild(this.element);
            this.element.ownerDocument.body.appendChild(this.element);
          }
        }
      }

      // Any css change will trigger a repaint, so let's avoid one if nothing changed
      var writeCSS = {};
      var write = false;
      for (var key in css) {
        var val = css[key];
        var elVal = this.element.style[key];

        if (elVal !== val) {
          write = true;
          writeCSS[key] = val;
        }
      }

      if (write) {
        defer(function () {
          extend(_this8.element.style, writeCSS);
          _this8.trigger('repositioned');
        });
      }
    }
  }]);

  return TetherClass;
})(Evented);

TetherClass.modules = [];

TetherBase.position = position;

var Tether = extend(TetherClass, TetherBase);
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var extend = _TetherBase$Utils.extend;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

function getBoundingRect(tether, to) {
  if (to === 'scrollParent') {
    to = tether.scrollParents[0];
  } else if (to === 'window') {
    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
  }

  if (to === document) {
    to = to.documentElement;
  }

  if (typeof to.nodeType !== 'undefined') {
    (function () {
      var node = to;
      var size = getBounds(to);
      var pos = size;
      var style = getComputedStyle(to);

      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];

      // Account any parent Frames scroll offset
      if (node.ownerDocument !== document) {
        var win = node.ownerDocument.defaultView;
        to[0] += win.pageXOffset;
        to[1] += win.pageYOffset;
        to[2] += win.pageXOffset;
        to[3] += win.pageYOffset;
      }

      BOUNDS_FORMAT.forEach(function (side, i) {
        side = side[0].toUpperCase() + side.substr(1);
        if (side === 'Top' || side === 'Left') {
          to[i] += parseFloat(style['border' + side + 'Width']);
        } else {
          to[i] -= parseFloat(style['border' + side + 'Width']);
        }
      });
    })();
  }

  return to;
}

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;
    var targetAttachment = _ref.targetAttachment;

    if (!this.options.constraints) {
      return true;
    }

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
      var _lastSize = this.lastSize;

      // Handle the item getting hidden as a result of our positioning without glitching
      // the classes in and out
      width = _lastSize.width;
      height = _lastSize.height;
    }

    var targetSize = this.cache('target-bounds', function () {
      return _this.getTargetBounds();
    });

    var targetHeight = targetSize.height;
    var targetWidth = targetSize.width;

    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];

    this.options.constraints.forEach(function (constraint) {
      var outOfBoundsClass = constraint.outOfBoundsClass;
      var pinnedClass = constraint.pinnedClass;

      if (outOfBoundsClass) {
        allClasses.push(outOfBoundsClass);
      }
      if (pinnedClass) {
        allClasses.push(pinnedClass);
      }
    });

    allClasses.forEach(function (cls) {
      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
        allClasses.push(cls + '-' + side);
      });
    });

    var addClasses = [];

    var tAttachment = extend({}, targetAttachment);
    var eAttachment = extend({}, this.attachment);

    this.options.constraints.forEach(function (constraint) {
      var to = constraint.to;
      var attachment = constraint.attachment;
      var pin = constraint.pin;

      if (typeof attachment === 'undefined') {
        attachment = '';
      }

      var changeAttachX = undefined,
          changeAttachY = undefined;
      if (attachment.indexOf(' ') >= 0) {
        var _attachment$split = attachment.split(' ');

        var _attachment$split2 = _slicedToArray(_attachment$split, 2);

        changeAttachY = _attachment$split2[0];
        changeAttachX = _attachment$split2[1];
      } else {
        changeAttachX = changeAttachY = attachment;
      }

      var bounds = getBoundingRect(_this, to);

      if (changeAttachY === 'target' || changeAttachY === 'both') {
        if (top < bounds[1] && tAttachment.top === 'top') {
          top += targetHeight;
          tAttachment.top = 'bottom';
        }

        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
          top -= targetHeight;
          tAttachment.top = 'top';
        }
      }

      if (changeAttachY === 'together') {
        if (tAttachment.top === 'top') {
          if (eAttachment.top === 'bottom' && top < bounds[1]) {
            top += targetHeight;
            tAttachment.top = 'bottom';

            top += height;
            eAttachment.top = 'top';
          } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
            top -= height - targetHeight;
            tAttachment.top = 'bottom';

            eAttachment.top = 'bottom';
          }
        }

        if (tAttachment.top === 'bottom') {
          if (eAttachment.top === 'top' && top + height > bounds[3]) {
            top -= targetHeight;
            tAttachment.top = 'top';

            top -= height;
            eAttachment.top = 'bottom';
          } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
            top += height - targetHeight;
            tAttachment.top = 'top';

            eAttachment.top = 'top';
          }
        }

        if (tAttachment.top === 'middle') {
          if (top + height > bounds[3] && eAttachment.top === 'top') {
            top -= height;
            eAttachment.top = 'bottom';
          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
            top += height;
            eAttachment.top = 'top';
          }
        }
      }

      if (changeAttachX === 'target' || changeAttachX === 'both') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          left += targetWidth;
          tAttachment.left = 'right';
        }

        if (left + width > bounds[2] && tAttachment.left === 'right') {
          left -= targetWidth;
          tAttachment.left = 'left';
        }
      }

      if (changeAttachX === 'together') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          if (eAttachment.left === 'right') {
            left += targetWidth;
            tAttachment.left = 'right';

            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'left') {
            left += targetWidth;
            tAttachment.left = 'right';

            left -= width;
            eAttachment.left = 'right';
          }
        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
          if (eAttachment.left === 'left') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'right') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left += width;
            eAttachment.left = 'left';
          }
        } else if (tAttachment.left === 'center') {
          if (left + width > bounds[2] && eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (left < bounds[0] && eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          }
        }
      }

      if (changeAttachY === 'element' || changeAttachY === 'both') {
        if (top < bounds[1] && eAttachment.top === 'bottom') {
          top += height;
          eAttachment.top = 'top';
        }

        if (top + height > bounds[3] && eAttachment.top === 'top') {
          top -= height;
          eAttachment.top = 'bottom';
        }
      }

      if (changeAttachX === 'element' || changeAttachX === 'both') {
        if (left < bounds[0]) {
          if (eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'center') {
            left += width / 2;
            eAttachment.left = 'left';
          }
        }

        if (left + width > bounds[2]) {
          if (eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'center') {
            left -= width / 2;
            eAttachment.left = 'right';
          }
        }
      }

      if (typeof pin === 'string') {
        pin = pin.split(',').map(function (p) {
          return p.trim();
        });
      } else if (pin === true) {
        pin = ['top', 'left', 'right', 'bottom'];
      }

      pin = pin || [];

      var pinned = [];
      var oob = [];

      if (top < bounds[1]) {
        if (pin.indexOf('top') >= 0) {
          top = bounds[1];
          pinned.push('top');
        } else {
          oob.push('top');
        }
      }

      if (top + height > bounds[3]) {
        if (pin.indexOf('bottom') >= 0) {
          top = bounds[3] - height;
          pinned.push('bottom');
        } else {
          oob.push('bottom');
        }
      }

      if (left < bounds[0]) {
        if (pin.indexOf('left') >= 0) {
          left = bounds[0];
          pinned.push('left');
        } else {
          oob.push('left');
        }
      }

      if (left + width > bounds[2]) {
        if (pin.indexOf('right') >= 0) {
          left = bounds[2] - width;
          pinned.push('right');
        } else {
          oob.push('right');
        }
      }

      if (pinned.length) {
        (function () {
          var pinnedClass = undefined;
          if (typeof _this.options.pinnedClass !== 'undefined') {
            pinnedClass = _this.options.pinnedClass;
          } else {
            pinnedClass = _this.getClass('pinned');
          }

          addClasses.push(pinnedClass);
          pinned.forEach(function (side) {
            addClasses.push(pinnedClass + '-' + side);
          });
        })();
      }

      if (oob.length) {
        (function () {
          var oobClass = undefined;
          if (typeof _this.options.outOfBoundsClass !== 'undefined') {
            oobClass = _this.options.outOfBoundsClass;
          } else {
            oobClass = _this.getClass('out-of-bounds');
          }

          addClasses.push(oobClass);
          oob.forEach(function (side) {
            addClasses.push(oobClass + '-' + side);
          });
        })();
      }

      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
        eAttachment.left = tAttachment.left = false;
      }
      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
        eAttachment.top = tAttachment.top = false;
      }

      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
        _this.updateAttachClasses(eAttachment, tAttachment);
        _this.trigger('update', {
          attachment: eAttachment,
          targetAttachment: tAttachment
        });
      }
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return { top: top, left: left };
  }
});
/* globals TetherBase */

'use strict';

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    var targetPos = this.getTargetBounds();

    var bottom = top + height;
    var right = left + width;

    var abutted = [];
    if (top <= targetPos.bottom && bottom >= targetPos.top) {
      ['left', 'right'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === left || targetPosSide === right) {
          abutted.push(side);
        }
      });
    }

    if (left <= targetPos.right && right >= targetPos.left) {
      ['top', 'bottom'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === top || targetPosSide === bottom) {
          abutted.push(side);
        }
      });
    }

    var allClasses = [];
    var addClasses = [];

    var sides = ['left', 'top', 'right', 'bottom'];
    allClasses.push(this.getClass('abutted'));
    sides.forEach(function (side) {
      allClasses.push(_this.getClass('abutted') + '-' + side);
    });

    if (abutted.length) {
      addClasses.push(this.getClass('abutted'));
    }

    abutted.forEach(function (side) {
      addClasses.push(_this.getClass('abutted') + '-' + side);
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return true;
  }
});
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

TetherBase.modules.push({
  position: function position(_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (!this.options.shift) {
      return;
    }

    var shift = this.options.shift;
    if (typeof this.options.shift === 'function') {
      shift = this.options.shift.call(this, { top: top, left: left });
    }

    var shiftTop = undefined,
        shiftLeft = undefined;
    if (typeof shift === 'string') {
      shift = shift.split(' ');
      shift[1] = shift[1] || shift[0];

      var _shift = shift;

      var _shift2 = _slicedToArray(_shift, 2);

      shiftTop = _shift2[0];
      shiftLeft = _shift2[1];

      shiftTop = parseFloat(shiftTop, 10);
      shiftLeft = parseFloat(shiftLeft, 10);
    } else {
      shiftTop = shift.top;
      shiftLeft = shift.left;
    }

    top += shiftTop;
    left += shiftLeft;

    return { top: top, left: left };
  }
});
return Tether;

}));


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(195)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(96),
  /* template */
  __webpack_require__(245),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiCloseButton.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiCloseButton.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73775a2e", Component.options)
  } else {
    hotAPI.reload("data-v-73775a2e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(126);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(165)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(86),
  /* template */
  __webpack_require__(215),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiAlert.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiAlert.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-019a858a", Component.options)
  } else {
    hotAPI.reload("data-v-019a858a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(166)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(87),
  /* template */
  __webpack_require__(216),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiAutocomplete.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiAutocomplete.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-049f1d4e", Component.options)
  } else {
    hotAPI.reload("data-v-049f1d4e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(186)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(95),
  /* template */
  __webpack_require__(236),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiCheckboxGroup.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiCheckboxGroup.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-53e98d4a", Component.options)
  } else {
    hotAPI.reload("data-v-53e98d4a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(201)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(97),
  /* template */
  __webpack_require__(251),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiCollapsible.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiCollapsible.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c1d568ae", Component.options)
  } else {
    hotAPI.reload("data-v-c1d568ae", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(203)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(98),
  /* template */
  __webpack_require__(253),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiConfirm.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiConfirm.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ed03da42", Component.options)
  } else {
    hotAPI.reload("data-v-ed03da42", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(196)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(99),
  /* template */
  __webpack_require__(246),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiDatepicker.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiDatepicker.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7cb5576d", Component.options)
  } else {
    hotAPI.reload("data-v-7cb5576d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(187)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(100),
  /* template */
  __webpack_require__(237),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiFab.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiFab.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58451726", Component.options)
  } else {
    hotAPI.reload("data-v-58451726", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(197)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(101),
  /* template */
  __webpack_require__(247),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiFileupload.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiFileupload.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8595f0a4", Component.options)
  } else {
    hotAPI.reload("data-v-8595f0a4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(194)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(104),
  /* template */
  __webpack_require__(244),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiMenu.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiMenu.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7360ec50", Component.options)
  } else {
    hotAPI.reload("data-v-7360ec50", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(176)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(108),
  /* template */
  __webpack_require__(226),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiPreloader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiPreloader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e7f9056", Component.options)
  } else {
    hotAPI.reload("data-v-2e7f9056", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(167)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(112),
  /* template */
  __webpack_require__(217),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiRadioGroup.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiRadioGroup.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0eea8cf5", Component.options)
  } else {
    hotAPI.reload("data-v-0eea8cf5", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(169)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(114),
  /* template */
  __webpack_require__(219),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiSelect.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiSelect.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-149e632d", Component.options)
  } else {
    hotAPI.reload("data-v-149e632d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(199)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(116),
  /* template */
  __webpack_require__(249),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiSlider.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiSlider.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8d7da6dc", Component.options)
  } else {
    hotAPI.reload("data-v-8d7da6dc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(173)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(118),
  /* template */
  __webpack_require__(223),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiSnackbarContainer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiSnackbarContainer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1daceb4a", Component.options)
  } else {
    hotAPI.reload("data-v-1daceb4a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(190)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(119),
  /* template */
  __webpack_require__(240),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiSwitch.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiSwitch.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-629f0965", Component.options)
  } else {
    hotAPI.reload("data-v-629f0965", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(181)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(120),
  /* template */
  __webpack_require__(231),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiTab.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiTab.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3cdc54b4", Component.options)
  } else {
    hotAPI.reload("data-v-3cdc54b4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(189)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(122),
  /* template */
  __webpack_require__(239),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiTabs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiTabs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6259e2ef", Component.options)
  } else {
    hotAPI.reload("data-v-6259e2ef", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(180)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(123),
  /* template */
  __webpack_require__(230),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiTextbox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiTextbox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3805aac6", Component.options)
  } else {
    hotAPI.reload("data-v-3805aac6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(182)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(124),
  /* template */
  __webpack_require__(232),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiToolbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiToolbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d9c3bcc", Component.options)
  } else {
    hotAPI.reload("data-v-3d9c3bcc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 85 */
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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UiCloseButton = __webpack_require__(64);

var _UiCloseButton2 = _interopRequireDefault(_UiCloseButton);

var _UiIcon = __webpack_require__(1);

var _UiIcon2 = _interopRequireDefault(_UiIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ui-alert',

    props: {
        type: {
            type: String,
            default: 'info' },
        removeIcon: {
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
            return ['ui-alert--type-' + this.type];
        }
    },

    methods: {
        dismissAlert: function dismissAlert() {
            this.$emit('dismiss');
        }
    },

    components: {
        UiCloseButton: _UiCloseButton2.default,
        UiIcon: _UiIcon2.default
    }
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _autofocus = __webpack_require__(47);

var _autofocus2 = _interopRequireDefault(_autofocus);

var _UiAutocompleteSuggestion = __webpack_require__(208);

var _UiAutocompleteSuggestion2 = _interopRequireDefault(_UiAutocompleteSuggestion);

var _UiIcon = __webpack_require__(1);

var _UiIcon2 = _interopRequireDefault(_UiIcon);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

var _fuzzysearch = __webpack_require__(61);

var _fuzzysearch2 = _interopRequireDefault(_fuzzysearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ui-autocomplete',

    props: {
        name: String,
        placeholder: String,
        value: {
            type: [String, Number],
            required: true
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
                return _config2.default.data.UiAutocomplete.keys;
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
            return this.value.length === 0 && !this.isActive;
        },
        hasFeedback: function hasFeedback() {
            return Boolean(this.help) || Boolean(this.error);
        },
        showError: function showError() {
            return this.invalid && Boolean(this.error);
        },
        showHelp: function showHelp() {
            return !this.showError && Boolean(this.help);
        },
        matchingSuggestions: function matchingSuggestions() {
            var _this = this;

            return this.suggestions.filter(function (suggestion, index) {
                if (_this.filter) {
                    return _this.filter(suggestion, _this.value);
                }

                return _this.defaultFilter(suggestion, index);
            }).slice(0, this.limit);
        }
    },

    watch: {
        value: function value() {
            if (this.isActive && this.value.length >= this.minChars) {
                this.openDropdown();
            }

            this.highlightedIndex = this.highlightOnFirstMatch ? 0 : -1;
        }
    },

    mounted: function mounted() {
        document.addEventListener('click', this.onExternalClick);
    },
    beforeDestroy: function beforeDestroy() {
        document.removeEventListener('click', this.onExternalClick);
    },


    methods: {
        defaultFilter: function defaultFilter(suggestion) {
            var text = suggestion[this.keys.label] || suggestion;
            var query = this.value;

            if (typeof query === 'string') {
                query = query.toLowerCase();
            }

            return (0, _fuzzysearch2.default)(query, text.toLowerCase());
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
            if (document.isActiveElement === this.$refs.input) {
                document.isActiveElement.blur();
            }

            this.$emit('input', this.initialValue);
            this.isTouched = false;
        }
    },

    components: {
        UiAutocompleteSuggestion: _UiAutocompleteSuggestion2.default,
        UiIcon: _UiIcon2.default
    },

    directives: {
        autofocus: _autofocus2.default
    }
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UiIcon = __webpack_require__(1);

var _UiIcon2 = _interopRequireDefault(_UiIcon);

var _UiPopover = __webpack_require__(15);

var _UiPopover2 = _interopRequireDefault(_UiPopover);

var _UiProgressCircular = __webpack_require__(16);

var _UiProgressCircular2 = _interopRequireDefault(_UiProgressCircular);

var _UiRippleInk = __webpack_require__(3);

var _UiRippleInk2 = _interopRequireDefault(_UiRippleInk);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ui-button',

    props: {
        type: {
            type: String,
            default: 'primary' },
        buttonType: {
            type: String,
            default: 'submit' },
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
            default: 'bottom left'
        },
        openDropdownOn: {
            type: String,
            default: 'click' },
        disableRipple: {
            type: Boolean,
            default: _config2.default.data.disableRipple
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data: function data() {
        return {
            focusRing: {
                top: 0,
                left: 0,
                size: 0
            }
        };
    },


    computed: {
        classes: function classes() {
            return ['ui-button--type-' + this.type, 'ui-button--color-' + this.color, 'ui-button--icon-position-' + this.iconPosition, 'ui-button--size-' + this.size, { 'is-raised': this.raised }, { 'is-loading': this.loading }, { 'is-disabled': this.disabled || this.loading }, { 'has-dropdown': this.hasDropdown }];
        },
        focusRingStyle: function focusRingStyle() {
            return {
                height: this.focusRing.size + 'px',
                width: this.focusRing.size + 'px',
                top: this.focusRing.top + 'px',
                left: this.focusRing.left + 'px'
            };
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
        onFocus: function onFocus() {
            var bounds = {
                width: this.$el.clientWidth,
                height: this.$el.clientHeight
            };

            this.focusRing.size = bounds.width - 16;
            this.focusRing.top = -1 * (this.focusRing.size - bounds.height) / 2;
            this.focusRing.left = (bounds.width - this.focusRing.size) / 2;
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
        UiIcon: _UiIcon2.default,
        UiPopover: _UiPopover2.default,
        UiProgressCircular: _UiProgressCircular2.default,
        UiRippleInk: _UiRippleInk2.default
    }
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UiCalendarControls = __webpack_require__(209);

var _UiCalendarControls2 = _interopRequireDefault(_UiCalendarControls);

var _UiCalendarMonth = __webpack_require__(210);

var _UiCalendarMonth2 = _interopRequireDefault(_UiCalendarMonth);

var _date = __webpack_require__(12);

var _date2 = _interopRequireDefault(_date);

var _elementScroll = __webpack_require__(48);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ui-calendar',

    props: {
        value: Date,
        minDate: Date,
        maxDate: Date,
        lang: {
            type: Object,
            default: function _default() {
                return _date2.default.defaultLang;
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
            dateInView: this.getDateInRange(this.value, new Date()),
            showYearPicker: false
        };
    },


    computed: {
        classes: function classes() {
            return ['ui-calendar--color-' + this.color, 'ui-calendar--orientation-' + this.orientation];
        },
        headerYear: function headerYear() {
            return this.value ? this.value.getFullYear() : this.today.getFullYear();
        },
        headerDay: function headerDay() {
            return this.value ? _date2.default.getDayAbbreviated(this.value, this.lang) : _date2.default.getDayAbbreviated(this.today, this.lang);
        },
        headerDate: function headerDate() {
            var date = this.value ? this.value : this.today;

            return _date2.default.getMonthAbbreviated(date, this.lang) + ' ' + _date2.default.getDayOfMonth(date, this.lang);
        }
    },

    watch: {
        value: function value() {
            if (this.value) {
                this.dateInView = _date2.default.clone(this.value);
            }
        },
        showYearPicker: function showYearPicker() {
            var _this = this;

            if (this.showYearPicker) {
                this.$nextTick(function () {
                    var el = _this.$refs.years.querySelector('.is-selected') || _this.$refs.years.querySelector('.is-current-year');

                    (0, _elementScroll.scrollIntoView)(el, { marginTop: 126 });
                });
            }
        }
    },

    methods: {
        selectYear: function selectYear(year) {
            var newDate = _date2.default.clone(this.dateInView);
            newDate.setFullYear(year);

            this.dateInView = this.getDateInRange(newDate);
            this.showYearPicker = false;
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

            return false;
        },
        onDateSelect: function onDateSelect(date) {
            this.$emit('input', date);
            this.$emit('date-select', date);
        },
        onGoToDate: function onGoToDate(date) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { isForward: true };

            this.$refs.month.goToDate(date, options);
        },
        onMonthChange: function onMonthChange(newDate) {
            this.dateInView = newDate;
            this.$emit('month-change', newDate);
        }
    },

    components: {
        UiCalendarControls: _UiCalendarControls2.default,
        UiCalendarMonth: _UiCalendarMonth2.default
    }
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UiIcon = __webpack_require__(1);

var _UiIcon2 = _interopRequireDefault(_UiIcon);

var _UiIconButton = __webpack_require__(25);

var _UiIconButton2 = _interopRequireDefault(_UiIconButton);

var _date = __webpack_require__(12);

var _date2 = _interopRequireDefault(_date);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ui-calendar-controls',

    props: {
        lang: Object,
        dateInView: Date,
        minDate: Date,
        maxDate: Date
    },

    computed: {
        monthAndYear: function monthAndYear() {
            return _date2.default.getMonthFull(this.dateInView, this.lang) + ' ' + this.dateInView.getFullYear();
        },
        previousMonthDisabled: function previousMonthDisabled() {
            if (!this.minDate) {
                return false;
            }

            var lastDayOfPreviousMonth = _date2.default.clone(this.dateInView);

            lastDayOfPreviousMonth.setDate(0);

            return this.minDate.getTime() > lastDayOfPreviousMonth.getTime();
        },
        nextMonthDisabled: function nextMonthDisabled() {
            if (!this.maxDate) {
                return false;
            }

            var firstDayOfNextMonth = _date2.default.clone(this.dateInView);

            firstDayOfNextMonth.setMonth(this.dateInView.getMonth() + 1, 1);

            return this.maxDate.getTime() < firstDayOfNextMonth.getTime();
        }
    },

    methods: {
        goToPreviousMonth: function goToPreviousMonth() {
            var date = _date2.default.clone(this.dateInView);
            date.setMonth(date.getMonth() - 1);

            this.goToDate(date, { isForward: false });
        },
        goToNextMonth: function goToNextMonth() {
            var date = _date2.default.clone(this.dateInView);
            date.setMonth(date.getMonth() + 1);

            this.goToDate(date, { isForward: true });
        },
        goToDate: function goToDate(date) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { isForward: true };

            this.$emit('go-to-date', date, options);
        }
    },

    components: {
        UiIcon: _UiIcon2.default,
        UiIconButton: _UiIconButton2.default
    }
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(131);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _UiCalendarWeek = __webpack_require__(211);

var _UiCalendarWeek2 = _interopRequireDefault(_UiCalendarWeek);

var _date = __webpack_require__(12);

var _date2 = _interopRequireDefault(_date);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ui-calendar-month',

    props: {
        lang: Object,
        dateFilter: Function,
        dateInView: Date,
        selected: Date,
        maxDate: Date,
        minDate: Date
    },

    data: function data() {
        return {
            dateOutOfView: _date2.default.clone(this.dateInView),
            isSliding: false,
            slideDirection: '',

            isIE: Boolean(window.MSInputMethodContext) && Boolean(document.documentMode),
            ieTimeout: null
        };
    },


    computed: {
        weekClasses: function weekClasses() {
            return [(0, _defineProperty3.default)({}, 'ui-calendar-month--slide-' + this.slideDirection, this.isSliding), { 'is-sliding': this.isSliding }];
        },
        currentWeekStartDates: function currentWeekStartDates() {
            return this.getWeekStartDates(this.dateInView);
        },
        otherWeekStartDates: function otherWeekStartDates() {
            return this.getWeekStartDates(this.dateOutOfView);
        }
    },

    methods: {
        getWeekStartDates: function getWeekStartDates(dateInWeek) {
            var date = _date2.default.clone(dateInWeek);

            date.setDate(1);
            date = _date2.default.moveToDayOfWeek(date, 0);

            var current = _date2.default.clone(date);
            current.setDate(current.getDate() + 7);

            var starts = [date];
            var month = current.getMonth();

            while (current.getMonth() === month) {
                starts.push(_date2.default.clone(current));
                current.setDate(current.getDate() + 7);
            }

            return starts;
        },
        goToDate: function goToDate(date) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { isForward: true };

            this.isSliding = true;
            this.slideDirection = options.isForward ? 'left' : 'right';
            this.dateOutOfView = _date2.default.clone(date);

            if (this.isIE) {
                this.ieTimeout = setTimeout(this.onTransitionEnd, 300);
            }
        },
        onDateSelect: function onDateSelect(date) {
            this.$emit('date-select', date);
        },
        onTransitionEnd: function onTransitionEnd() {
            if (this.ieTimeout) {
                clearTimeout(this.ieTimeout);
                this.ieTimeout = null;

                if (!this.isSliding) {
                    return;
                }
            }

            this.isSliding = false;
            this.slideDirection = '';

            this.$emit('change', _date2.default.clone(this.dateOutOfView));
            this.$emit('transition-end');
        }
    },

    components: {
        UiCalendarWeek: _UiCalendarWeek2.default
    }
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _date = __webpack_require__(12);

var _date2 = _interopRequireDefault(_date);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ui-calendar-week',

    props: {
        month: Number,
        weekStart: Date,
        minDate: Date,
        maxDate: Date,
        selected: Date,
        dateFilter: Function,
        visible: {
            type: Boolean,
            default: true
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
        }
    },

    methods: {
        buildDays: function buildDays(weekStart) {
            var days = [_date2.default.clone(weekStart)];
            var day = _date2.default.clone(weekStart);

            for (var i = 1; i <= 6; i++) {
                day = _date2.default.clone(day);
                day.setDate(day.getDate() + 1);

                days.push(day);
            }

            return days;
        },
        getDateClasses: function getDateClasses(date) {
            return [{ 'is-today': _date2.default.isSameDay(date, this.today) }, { 'is-in-other-month': this.isDateInOtherMonth(date) }, { 'is-selected': this.selected && _date2.default.isSameDay(date, this.selected) }, { 'is-disabled': this.isDateDisabled(date) }];
        },
        selectDate: function selectDate(date) {
            if (this.isDateDisabled(date)) {
                return;
            }

            this.$emit('date-select', date);
        },
        getDayOfMonth: function getDayOfMonth(date) {
            return _date2.default.getDayOfMonth(date);
        },
        isDateInOtherMonth: function isDateInOtherMonth(date) {
            return this.month !== date.getMonth();
        },
        isDateDisabled: function isDateDisabled(date) {
            var isDisabled = this.minDate && _date2.default.isBefore(date, this.minDate) || this.maxDate && _date2.default.isAfter(date, this.maxDate);

            if (isDisabled) {
                return true;
            }

            return this.dateFilter ? !this.dateFilter(date) : false;
        }
    }
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(17);

exports.default = {
    name: 'ui-checkbox',

    props: {
        name: String,
        label: String,
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
            isChecked: (0, _util.looseEqual)(this.value, this.trueValue) || this.checked
        };
    },


    computed: {
        classes: function classes() {
            return ['ui-checkbox--color-' + this.color, 'ui-checkbox--box-position-' + this.boxPosition, { 'is-checked': this.isChecked }, { 'is-active': this.isActive }, { 'is-disabled': this.disabled }];
        }
    },

    watch: {
        value: function value() {
            this.isChecked = (0, _util.looseEqual)(this.value, this.trueValue);
        }
    },

    created: function created() {
        this.$emit('input', this.isChecked ? this.trueValue : this.falseValue);
    },


    methods: {
        onClick: function onClick(e) {
            this.isChecked = e.target.checked;
            this.$emit('input', e.target.checked ? this.trueValue : this.falseValue);
        },
        onChange: function onChange(e) {
            this.$emit('change', this.isChecked ? this.trueValue : this.falseValue, e);
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
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(18);

var _stringify2 = _interopRequireDefault(_stringify);

var _UiCheckbox = __webpack_require__(43);

var _UiCheckbox2 = _interopRequireDefault(_UiCheckbox);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

var _util = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
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
                return _config2.default.data.UiCheckboxGroup.keys;
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
            initialValue: JSON.parse((0, _stringify2.default)(this.value))
        };
    },


    computed: {
        classes: function classes() {
            return ['ui-checkbox-group--color-' + this.color, 'ui-checkbox-group--box-position-' + this.boxPosition, { 'is-vertical': this.vertical }, { 'is-active': this.isActive }, { 'is-invalid': this.invalid }, { 'is-disabled': this.disabled }];
        },
        hasFeedback: function hasFeedback() {
            return Boolean(this.help) || this.showError;
        },
        showError: function showError() {
            return this.invalid && Boolean(this.error);
        },
        showHelp: function showHelp() {
            return !this.showError && Boolean(this.help);
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
            return (0, _util.looseIndexOf)(this.initialValue, option[this.keys.value] || option) > -1;
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
            var i = (0, _util.looseIndexOf)(this.value, optionValue);

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
        UiCheckbox: _UiCheckbox2.default
    }
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UiIcon = __webpack_require__(1);

var _UiIcon2 = _interopRequireDefault(_UiIcon);

var _UiRippleInk = __webpack_require__(3);

var _UiRippleInk2 = _interopRequireDefault(_UiRippleInk);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
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
            default: _config2.default.data.disableRipple
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
        UiIcon: _UiIcon2.default,
        UiRippleInk: _UiRippleInk2.default
    }
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UiIcon = __webpack_require__(1);

var _UiIcon2 = _interopRequireDefault(_UiIcon);

var _UiRippleInk = __webpack_require__(3);

var _UiRippleInk2 = _interopRequireDefault(_UiRippleInk);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

var _RespondsToWindowResize = __webpack_require__(28);

var _RespondsToWindowResize2 = _interopRequireDefault(_RespondsToWindowResize);

var _uuid = __webpack_require__(49);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
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
            default: _config2.default.data.disableRipple
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data: function data() {
        return {
            height: 0,
            isReady: false,
            isOpen: this.open,
            useInitialHeight: false,
            id: _uuid2.default.short('ui-collapsible-')
        };
    },


    computed: {
        classes: function classes() {
            return [{ 'is-open': this.isOpen }, { 'is-disabled': this.disabled }];
        },
        calculatedHeight: function calculatedHeight() {
            return this.height === 0 || this.useInitialHeight ? 'initial' : this.height + 'px';
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
        var _this = this;

        this.isReady = true;
        this.refreshHeight();

        this.$on('window-resize', function () {
            _this.refreshHeight();
        });
    },


    methods: {
        onEnter: function onEnter() {
            this.$emit('open');
            this.refreshHeight();
        },
        onLeave: function onLeave() {
            this.$emit('close');
        },
        toggleCollapsible: function toggleCollapsible() {
            if (this.disabled) {
                return;
            }

            this.isOpen = !this.isOpen;
        },
        refreshHeight: function refreshHeight() {
            var _this2 = this;

            var body = this.$refs.body;

            this.useInitialHeight = true;
            body.style.display = 'block';

            this.$nextTick(function () {
                _this2.height = body.scrollHeight + 1;
                _this2.useInitialHeight = false;

                if (!_this2.isOpen) {
                    body.style.display = 'none';
                }
            });
        }
    },

    components: {
        UiIcon: _UiIcon2.default,
        UiRippleInk: _UiRippleInk2.default
    },

    mixins: [_RespondsToWindowResize2.default]
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UiButton = __webpack_require__(14);

var _UiButton2 = _interopRequireDefault(_UiButton);

var _UiModal = __webpack_require__(26);

var _UiModal2 = _interopRequireDefault(_UiModal);

var _classlist = __webpack_require__(11);

var _classlist2 = _interopRequireDefault(_classlist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ui-confirm',

    props: {
        title: {
            type: String,
            default: 'UiConfirm'
        },
        type: {
            type: String,
            default: 'primary' },
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
                _classlist2.default.add(button, 'has-focus-ring');
                button.addEventListener('blur', this.removeAutoFocus);
                button.focus();
            }

            this.$emit('open');
        },
        onModalClose: function onModalClose() {
            this.$emit('close');
        },
        removeAutoFocus: function removeAutoFocus() {
            var button = void 0;

            if (this.autofocus === 'confirm-button') {
                button = this.$refs.confirmButton.$el;
            } else if (this.autofocus === 'deny-button') {
                button = this.$refs.denyButton.$el;
            }

            if (button) {
                _classlist2.default.remove(button, 'has-focus-ring');

                button.removeEventListener('blur', this.removeAutoFocus);
            }
        }
    },

    components: {
        UiButton: _UiButton2.default,
        UiModal: _UiModal2.default
    }
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(18);

var _stringify2 = _interopRequireDefault(_stringify);

var _UiButton = __webpack_require__(14);

var _UiButton2 = _interopRequireDefault(_UiButton);

var _UiCalendar = __webpack_require__(42);

var _UiCalendar2 = _interopRequireDefault(_UiCalendar);

var _UiIcon = __webpack_require__(1);

var _UiIcon2 = _interopRequireDefault(_UiIcon);

var _UiModal = __webpack_require__(26);

var _UiModal2 = _interopRequireDefault(_UiModal);

var _UiPopover = __webpack_require__(15);

var _UiPopover2 = _interopRequireDefault(_UiPopover);

var _date = __webpack_require__(12);

var _date2 = _interopRequireDefault(_date);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ui-datepicker',

    props: {
        name: String,
        value: Date,
        minDate: Date,
        maxDate: Date,
        yearRange: Array,
        lang: {
            type: Object,
            default: function _default() {
                return _date2.default.defaultLang;
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
        okButtonText: {
            type: String,
            default: 'OK'
        },
        cancelButtonText: {
            type: String,
            default: 'Cancel'
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
            valueAtModalOpen: null,
            initialValue: (0, _stringify2.default)(this.value)
        };
    },


    computed: {
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
            return !this.value && !this.isActive;
        },
        hasFeedback: function hasFeedback() {
            return Boolean(this.help) || Boolean(this.error);
        },
        showError: function showError() {
            return this.invalid && Boolean(this.error);
        },
        showHelp: function showHelp() {
            return !this.showError && Boolean(this.help);
        },
        displayText: function displayText() {
            if (!this.value) {
                return '';
            }

            return this.customFormatter ? this.customFormatter(this.value, this.lang) : _date2.default.humanize(this.value, this.lang);
        },
        hasDisplayText: function hasDisplayText() {
            return Boolean(this.displayText.length);
        },
        submittedValue: function submittedValue() {
            return this.value ? this.value.getFullYear() + '-' + this.value.getMonth() + '-' + this.value.getDate() : '';
        },
        usesPopover: function usesPopover() {
            return this.pickerType === 'popover';
        },
        usesModal: function usesModal() {
            return this.pickerType === 'modal';
        }
    },

    mounted: function mounted() {
        document.addEventListener('click', this.onExternalClick);
    },
    beforeDestroy: function beforeDestroy() {
        document.removeEventListener('click', this.onExternalClick);
    },


    methods: {
        onDateSelect: function onDateSelect(date) {
            this.$emit('input', date);
            this.closePicker();
        },
        openPicker: function openPicker() {
            if (this.disabled) {
                return;
            }

            this.$refs[this.usesModal ? 'modal' : 'popover'].open();
        },
        closePicker: function closePicker() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { autoBlur: false };

            if (this.usesPopover) {
                this.$refs.popover.close();
            }

            if (options.autoBlur) {
                this.isActive = false;
            } else {
                this.$refs.label.focus();
            }
        },
        onClick: function onClick() {
            if (this.usesModal && !this.disabled) {
                this.$refs.modal.open();
            }
        },
        onFocus: function onFocus(e) {
            this.isActive = true;
            this.$emit('focus', e);
        },
        onBlur: function onBlur(e) {
            this.isActive = false;
            this.$emit('blur', e);

            if (this.usesPopover && this.$refs.popover.dropInstance.isOpened()) {
                this.closePicker({ autoBlur: true });
            }
        },
        onPickerOpen: function onPickerOpen() {
            if (this.usesModal) {
                this.valueAtModalOpen = this.value ? _date2.default.clone(this.value) : null;
            }

            this.isActive = true;
            this.$emit('open');
        },
        onPickerClose: function onPickerClose() {
            this.$emit('close');

            if (!this.isTouched) {
                this.isTouched = true;
                this.$emit('touch');
            }
        },
        onPickerCancel: function onPickerCancel() {
            this.$emit('input', this.valueAtModalOpen);
            this.$refs.modal.close();
        },
        onExternalClick: function onExternalClick(e) {
            if (this.disabled) {
                return;
            }

            var clickWasInternal = this.$el.contains(e.target) || this.$refs[this.usesPopover ? 'popover' : 'modal'].$el.contains(e.target);

            if (clickWasInternal) {
                return;
            }

            if (this.isActive) {
                this.isActive = false;
            }
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
        UiButton: _UiButton2.default,
        UiCalendar: _UiCalendar2.default,
        UiIcon: _UiIcon2.default,
        UiModal: _UiModal2.default,
        UiPopover: _UiPopover2.default
    }
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UiIcon = __webpack_require__(1);

var _UiIcon2 = _interopRequireDefault(_UiIcon);

var _UiRippleInk = __webpack_require__(3);

var _UiRippleInk2 = _interopRequireDefault(_UiRippleInk);

var _UiTooltip = __webpack_require__(27);

var _UiTooltip2 = _interopRequireDefault(_UiTooltip);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
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
            default: _config2.default.data.disableRipple
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
        UiIcon: _UiIcon2.default,
        UiRippleInk: _UiRippleInk2.default,
        UiTooltip: _UiTooltip2.default
    }
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UiIcon = __webpack_require__(1);

var _UiIcon2 = _interopRequireDefault(_UiIcon);

var _UiRippleInk = __webpack_require__(3);

var _UiRippleInk2 = _interopRequireDefault(_UiRippleInk);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ui-fileupload',

    props: {
        name: {
            type: String,
            required: true
        },
        label: String,
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
            default: _config2.default.data.disableRipple
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data: function data() {
        return {
            isActive: false,
            hasSelection: false,
            hasMultiple: false,
            displayText: '',
            focusRing: {
                top: 0,
                left: 0,
                size: 0,
                initialized: false
            }
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
        },
        focusRingStyle: function focusRingStyle() {
            return {
                height: this.focusRing.size + 'px',
                width: this.focusRing.size + 'px',
                top: this.focusRing.top + 'px',
                left: this.focusRing.left + 'px'
            };
        }
    },

    methods: {
        onFocus: function onFocus(e) {
            this.isActive = true;
            this.$emit('focus', e);

            if (!this.focusRing.initialized) {
                this.initializeFocusRing();
            }
        },
        onBlur: function onBlur(e) {
            this.isActive = false;
            this.$emit('blur', e);
        },
        onChange: function onChange(e) {
            var _this = this;

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

                this.$nextTick(function () {
                    return _this.refreshFocusRing();
                });
            }

            this.$emit('change', input.files, e);
        },
        initializeFocusRing: function initializeFocusRing() {
            this.refreshFocusRing();
            this.focusRing.initialized = true;
        },
        refreshFocusRing: function refreshFocusRing() {
            var bounds = {
                width: this.$el.clientWidth,
                height: this.$el.clientHeight
            };

            this.focusRing.size = bounds.width - 16;
            this.focusRing.top = -1 * (this.focusRing.size - bounds.height) / 2;
            this.focusRing.left = (bounds.width - this.focusRing.size) / 2;
        }
    },

    components: {
        UiIcon: _UiIcon2.default,
        UiRippleInk: _UiRippleInk2.default
    }
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
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
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UiIcon = __webpack_require__(1);

var _UiIcon2 = _interopRequireDefault(_UiIcon);

var _UiPopover = __webpack_require__(15);

var _UiPopover2 = _interopRequireDefault(_UiPopover);

var _UiProgressCircular = __webpack_require__(16);

var _UiProgressCircular2 = _interopRequireDefault(_UiProgressCircular);

var _UiRippleInk = __webpack_require__(3);

var _UiRippleInk2 = _interopRequireDefault(_UiRippleInk);

var _UiTooltip = __webpack_require__(27);

var _UiTooltip2 = _interopRequireDefault(_UiTooltip);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ui-icon-button',

    props: {
        type: {
            type: String,
            default: 'primary' },
        buttonType: {
            type: String,
            default: 'button'
        },
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
            default: 'bottom left'
        },
        openDropdownOn: {
            type: String,
            default: 'click' },
        tooltip: String,
        openTooltipOn: String,
        tooltipPosition: String,
        disableRipple: {
            type: Boolean,
            default: _config2.default.data.disableRipple
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        classes: function classes() {
            return ['ui-icon-button--type-' + this.type, 'ui-icon-button--color-' + this.color, 'ui-icon-button--size-' + this.size, { 'is-loading': this.loading }, { 'is-disabled': this.disabled || this.loading }, { 'has-dropdown': this.hasDropdown }];
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
        UiIcon: _UiIcon2.default,
        UiPopover: _UiPopover2.default,
        UiProgressCircular: _UiProgressCircular2.default,
        UiRippleInk: _UiRippleInk2.default,
        UiTooltip: _UiTooltip2.default
    }
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UiMenuOption = __webpack_require__(212);

var _UiMenuOption2 = _interopRequireDefault(_UiMenuOption);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
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
                return _config2.default.data.UiMenu.keys;
            }
        },
        disableRipple: {
            type: Boolean,
            default: _config2.default.data.disableRipple
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
        },
        redirectFocus: function redirectFocus(e) {
            e.stopPropagation();
            this.$el.querySelector('.ui-menu-option').focus();
        }
    },

    components: {
        UiMenuOption: _UiMenuOption2.default
    }
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UiIcon = __webpack_require__(1);

var _UiIcon2 = _interopRequireDefault(_UiIcon);

var _UiRippleInk = __webpack_require__(3);

var _UiRippleInk2 = _interopRequireDefault(_UiRippleInk);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ui-menu-option',

    props: {
        type: String,
        label: String,
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
            default: _config2.default.data.disableRipple
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
                'is-disabled': this.disabled
            };
        },
        isDivider: function isDivider() {
            return this.type === 'divider';
        }
    },

    components: {
        UiIcon: _UiIcon2.default,
        UiRippleInk: _UiRippleInk2.default
    }
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UiCloseButton = __webpack_require__(64);

var _UiCloseButton2 = _interopRequireDefault(_UiCloseButton);

var _classlist = __webpack_require__(11);

var _classlist2 = _interopRequireDefault(_classlist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ui-modal',

    props: {
        title: {
            type: String,
            default: 'UiModal title'
        },
        size: {
            type: String,
            default: 'normal' },
        role: {
            type: String,
            default: 'dialog' },
        transition: {
            type: String,
            default: 'scale' },
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
            lastfocusedElement: null
        };
    },


    computed: {
        classes: function classes() {
            return ['ui-modal--size-' + this.size, { 'has-footer': this.hasFooter }, { 'is-open': this.isOpen }];
        },
        hasFooter: function hasFooter() {
            return Boolean(this.$slots.footer);
        },
        toggleTransition: function toggleTransition() {
            return 'ui-modal--transition-' + this.transition;
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
            this.teardownModal();
        }
    },


    methods: {
        open: function open() {
            this.isOpen = true;
        },
        close: function close() {
            this.isOpen = false;
        },
        closeModal: function closeModal(e) {
            if (!this.dismissible) {
                return;
            }

            if (e.currentTarget === this.$refs.backdrop && e.target !== e.currentTarget) {
                return;
            }

            this.isOpen = false;
        },
        onOpen: function onOpen() {
            this.lastfocusedElement = document.activeElement;
            this.$refs.container.focus();

            _classlist2.default.add(document.body, 'ui-modal--is-open');
            document.addEventListener('focus', this.restrictFocus, true);

            this.$emit('open');
        },
        onClose: function onClose() {
            this.teardownModal();
            this.$emit('close');
        },
        redirectFocus: function redirectFocus() {
            this.$refs.container.focus();
        },
        restrictFocus: function restrictFocus(e) {
            if (!this.$refs.container.contains(e.target)) {
                e.stopPropagation();
                this.$refs.container.focus();
            }
        },
        teardownModal: function teardownModal() {
            document.removeEventListener('focus', this.restrictFocus, true);

            if (this.lastfocusedElement) {
                this.lastfocusedElement.focus();
            }
        },
        onEnter: function onEnter() {
            this.$emit('reveal');
        },
        onLeave: function onLeave() {
            this.$emit('hide');

            _classlist2.default.remove(document.body, 'ui-modal--is-open');
        }
    },

    components: {
        UiCloseButton: _UiCloseButton2.default
    }
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classlist = __webpack_require__(11);

var _classlist2 = _interopRequireDefault(_classlist);

var _tetherDrop = __webpack_require__(62);

var _tetherDrop2 = _interopRequireDefault(_tetherDrop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ui-popover',

    props: {
        trigger: {
            type: String,
            required: true
        },
        dropdownPosition: {
            type: String,
            default: 'bottom left'
        },
        openOn: {
            type: String,
            default: 'click' },
        containFocus: {
            type: Boolean,
            default: false
        },
        focusRedirector: Function,
        raised: {
            type: Boolean,
            default: true
        }
    },

    data: function data() {
        return {
            dropInstance: null,
            lastfocusedElement: null
        };
    },


    computed: {
        triggerEl: function triggerEl() {
            return this.$parent.$refs[this.trigger];
        }
    },

    mounted: function mounted() {
        if (this.triggerEl) {
            this.initializeDropdown();
        }
    },
    beforeDestroy: function beforeDestroy() {
        if (this.dropInstance) {
            this.dropInstance.destroy();
        }
    },


    methods: {
        initializeDropdown: function initializeDropdown() {
            this.dropInstance = new _tetherDrop2.default({
                target: this.triggerEl,
                content: this.$el,
                position: this.dropdownPosition,
                constrainToWindow: true,
                openOn: this.openOn
            });

            if (this.dropdownPosition !== 'bottom left') {
                this.dropInstance.open();
                this.dropInstance.close();
                this.dropInstance.open();
                this.dropInstance.close();
            }

            this.dropInstance.on('open', this.onOpen);
            this.dropInstance.on('close', this.onClose);
        },
        openDropdown: function openDropdown() {
            if (this.dropInstance) {
                this.dropInstance.open();
            }
        },
        closeDropdown: function closeDropdown() {
            if (this.dropInstance) {
                this.dropInstance.close();
            }
        },
        toggleDropdown: function toggleDropdown(e) {
            if (this.dropInstance) {
                this.dropInstance.toggle(e);
            }
        },
        positionDrop: function positionDrop() {
            var drop = this.dropInstance;
            var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

            var width = drop.drop.getBoundingClientRect().width;
            var left = drop.target.getBoundingClientRect().left;
            var availableSpace = windowWidth - left;

            if (width > availableSpace) {
                var direction = width > availableSpace ? 'right' : 'left';

                drop.tether.attachment.left = direction;
                drop.tether.targetAttachment.left = direction;

                drop.position();
            }
        },
        onOpen: function onOpen() {
            this.positionDrop();
            _classlist2.default.add(this.triggerEl, 'has-dropdown-open');

            this.lastfocusedElement = document.activeElement;
            this.$el.focus();

            this.$emit('open');
        },
        onClose: function onClose() {
            _classlist2.default.remove(this.triggerEl, 'has-dropdown-open');

            if (this.lastfocusedElement) {
                this.lastfocusedElement.focus();
            }

            this.$emit('close');
        },
        restrictFocus: function restrictFocus(e) {
            if (!this.containFocus) {
                this.closeDropdown();
                return;
            }

            e.stopPropagation();

            if (this.focusRedirector) {
                this.focusRedirector(e);
            } else {
                this.$el.focus();
            }
        },
        open: function open() {
            this.openDropdown();
        },
        close: function close() {
            this.closeDropdown();
        },
        toggle: function toggle() {
            this.toggleDropdown();
        }
    }
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'ui-preloader',

    props: {
        show: {
            type: Boolean,
            required: true
        }
    }
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
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
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
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
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'ui-radio',

    props: {
        name: String,
        label: String,
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
            return String(this.value).length > 0 && this.value == this.trueValue;
        }
    },

    created: function created() {
        if (this.checked) {
            this.$emit('input', this.trueValue);
        }
    },


    methods: {
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
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UiRadio = __webpack_require__(45);

var _UiRadio2 = _interopRequireDefault(_UiRadio);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ui-radio-group',

    props: {
        name: {
            type: String,
            required: true
        },
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
                return _config2.default.data.UiRadioGroup.keys;
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
            return Boolean(this.help) || this.showError;
        },
        showError: function showError() {
            return this.invalid && Boolean(this.error);
        },
        showHelp: function showHelp() {
            return !this.showError && Boolean(this.help);
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
        UiRadio: _UiRadio2.default
    }
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classlist = __webpack_require__(11);

var _classlist2 = _interopRequireDefault(_classlist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var startRipple = function startRipple(eventType, event) {
    var holder = event.currentTarget || event.target;

    if (holder && !_classlist2.default.has(holder, 'ui-ripple-ink')) {
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
    var x = event.offsetX;
    var y = void 0;

    if (x === undefined) {
        x = event.clientX - rect.left;
        y = event.clientY - rect.top;
    } else {
        y = event.offsetY;
    }

    var ripple = document.createElement('div');
    var max = void 0;

    if (rect.width === rect.height) {
        max = rect.width * 1.412;
    } else {
        max = Math.sqrt(rect.width * rect.width + rect.height * rect.height);
    }

    var dim = max * 2 + 'px';

    ripple.style.width = dim;
    ripple.style.height = dim;
    ripple.style.marginLeft = -max + x + 'px';
    ripple.style.marginTop = -max + y + 'px';

    ripple.className = 'ui-ripple-ink__ink';
    holder.appendChild(ripple);

    setTimeout(function () {
        _classlist2.default.add(ripple, 'is-held');
    }, 0);

    var releaseEvent = eventType === 'mousedown' ? 'mouseup' : 'touchend';

    var handleRelease = function handleRelease() {
        document.removeEventListener(releaseEvent, handleRelease);

        _classlist2.default.add(ripple, 'is-done');

        setTimeout(function () {
            holder.removeChild(ripple);

            if (holder.children.length === 0) {
                holder.removeAttribute('data-ui-event');
            }
        }, 650);
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

exports.default = {
    name: 'ui-ripple-ink',

    props: {
        trigger: {
            type: String,
            required: true
        }
    },

    watch: {
        trigger: function trigger() {
            this.initialize();
        }
    },

    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {
            _this.initialize();
        });
    },
    beforeDestroy: function beforeDestroy() {
        var triggerEl = this.trigger ? this.$parent.$refs[this.trigger] : null;

        if (!triggerEl) {
            return;
        }

        triggerEl.removeEventListener('mousedown', handleMouseDown);
        triggerEl.removeEventListener('touchstart', handleTouchStart);
    },


    methods: {
        initialize: function initialize() {
            var triggerEl = this.trigger ? this.$parent.$refs[this.trigger] : null;

            if (!triggerEl) {
                return;
            }

            triggerEl.addEventListener('touchstart', handleTouchStart);
            triggerEl.addEventListener('mousedown', handleMouseDown);
        }
    }
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(18);

var _stringify2 = _interopRequireDefault(_stringify);

var _UiIcon = __webpack_require__(1);

var _UiIcon2 = _interopRequireDefault(_UiIcon);

var _UiProgressCircular = __webpack_require__(16);

var _UiProgressCircular2 = _interopRequireDefault(_UiProgressCircular);

var _UiSelectOption = __webpack_require__(213);

var _UiSelectOption2 = _interopRequireDefault(_UiSelectOption);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

var _fuzzysearch = __webpack_require__(61);

var _fuzzysearch2 = _interopRequireDefault(_fuzzysearch);

var _util = __webpack_require__(17);

var _elementScroll = __webpack_require__(48);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ui-select',

    props: {
        name: String,
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
                return _config2.default.data.UiSelect.keys;
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
            showDropdown: false,
            initialValue: (0, _stringify2.default)(this.value)
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
            return Boolean(this.help) || Boolean(this.error);
        },
        showError: function showError() {
            return this.invalid && Boolean(this.error);
        },
        showHelp: function showHelp() {
            return !this.showError && Boolean(this.help);
        },
        filteredOptions: function filteredOptions() {
            var _this = this;

            if (this.disableFilter) {
                return this.options;
            }

            return this.options.filter(function (option, index) {
                if (_this.filter) {
                    return _this.filter(option, _this.query);
                }

                return _this.defaultFilter(option, index);
            });
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
            (0, _elementScroll.resetScroll)(this.$refs.optionsList);
        },
        showDropdown: function showDropdown() {
            if (this.showDropdown) {
                this.onOpen();
                this.$emit('dropdown-open');
            } else {
                this.onClose();
                this.$emit('dropdown-close');
            }
        },
        query: function query() {
            this.$emit('query-change', this.query);
        }
    },

    created: function created() {
        if (!this.value || this.value === '') {
            this.setValue(null);
        }
    },
    mounted: function mounted() {
        document.addEventListener('click', this.onExternalClick);
    },
    beforeDestroy: function beforeDestroy() {
        document.removeEventListener('click', this.onExternalClick);
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
            this.clearQuery();

            if (!this.multiple && options.autoClose) {
                this.closeDropdown();
            }
        },
        isOptionSelected: function isOptionSelected(option) {
            if (this.multiple) {
                return (0, _util.looseIndexOf)(this.value, option) > -1;
            }

            return (0, _util.looseEqual)(this.value, option);
        },
        updateOption: function updateOption(option) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { select: true };

            var value = [];
            var updated = false;
            var i = (0, _util.looseIndexOf)(this.value, option);

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
        defaultFilter: function defaultFilter(option) {
            var query = this.query.toLowerCase();
            var text = option[this.keys.label] || option;

            if (typeof text === 'string') {
                text = text.toLowerCase();
            }

            return (0, _fuzzysearch2.default)(query, text);
        },
        clearQuery: function clearQuery() {
            this.query = '';
        },
        toggleDropdown: function toggleDropdown() {
            this[this.showDropdown ? 'closeDropdown' : 'openDropdown']();
        },
        openDropdown: function openDropdown() {
            if (this.disabled) {
                return;
            }

            this.showDropdown = true;

            if (!this.isActive) {
                this.isActive = true;
            }
        },
        closeDropdown: function closeDropdown() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { autoBlur: false };

            this.showDropdown = false;

            if (!this.isTouched) {
                this.isTouched = true;
                this.$emit('touch');
            }

            if (options.autoBlur) {
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

            if (this.showDropdown) {
                this.closeDropdown({ autoBlur: true });
            }
        },
        onOpen: function onOpen() {
            var _this4 = this;

            this.$nextTick(function () {
                _this4.$refs[_this4.hasSearch ? 'searchInput' : 'dropdown'].focus();
                _this4.scrollOptionIntoView(_this4.$refs.optionsList.querySelector('.is-selected'));
            });
        },
        onClose: function onClose() {
            this.highlightedIndex = this.multiple ? -1 : this.selectedIndex;
        },
        onExternalClick: function onExternalClick(e) {
            if (!this.$el.contains(e.target)) {
                if (this.showDropdown) {
                    this.closeDropdown({ autoBlur: true });
                } else if (this.isActive) {
                    this.isActive = false;
                }
            }
        },
        scrollOptionIntoView: function scrollOptionIntoView(optionEl) {
            (0, _elementScroll.scrollIntoView)(optionEl, {
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
        UiIcon: _UiIcon2.default,
        UiProgressCircular: _UiProgressCircular2.default,
        UiSelectOption: _UiSelectOption2.default
    }
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UiIcon = __webpack_require__(1);

var _UiIcon2 = _interopRequireDefault(_UiIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ui-select-option',

    props: {
        option: {
            type: [String, Object],
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
                    label: 'label',
                    image: 'image'
                };
            }
        }
    },

    computed: {
        classes: function classes() {
            return ['ui-select-option--type-' + this.type, { 'is-highlighted': this.highlighted }, { 'is-selected': this.selected }];
        },
        imageStyle: function imageStyle() {
            return { 'background-image': 'url(' + this.option[this.keys.image] + ')' };
        }
    },

    components: {
        UiIcon: _UiIcon2.default
    }
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UiIcon = __webpack_require__(1);

var _UiIcon2 = _interopRequireDefault(_UiIcon);

var _classlist = __webpack_require__(11);

var _classlist2 = _interopRequireDefault(_classlist);

var _RespondsToWindowResize = __webpack_require__(28);

var _RespondsToWindowResize2 = _interopRequireDefault(_RespondsToWindowResize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ui-slider',

    props: {
        name: String,
        icon: String,
        value: {
            type: Number,
            required: true
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
        markerValue: Number,
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
            thumbSize: 0,
            trackLength: 0,
            trackOffset: 0,
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
            return { transform: 'scaleX(' + this.localValue / 100 + ')' };
        },
        thumbStyle: function thumbStyle() {
            return {
                transform: 'translateX(' + (this.localValue / 100 * this.trackLength - this.thumbSize / 2) + 'px)'
            };
        },
        markerText: function markerText() {
            return this.markerValue ? this.markerValue : this.value;
        },
        snapPoints: function snapPoints() {
            var points = [];
            var index = 0;
            var point = index * this.step;

            while (point <= 100) {
                points.push(point);
                index++;
                point = index * this.step;
            }

            return points;
        }
    },

    watch: {
        value: function value() {
            this.setValue(this.value);
        },
        isDragging: function isDragging() {
            var operation = this.isDragging ? 'add' : 'remove';
            _classlist2.default[operation](document.body, 'ui-slider--is-dragging');
        }
    },

    mounted: function mounted() {
        this.initializeSlider();
    },
    beforeDestroy: function beforeDestroy() {
        this.teardownSlider();
    },


    methods: {
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
        setValue: function setValue(value) {
            if (value > 100) {
                value = 100;
            } else if (value < 0) {
                value = 0;
            }

            if (value === this.localValue) {
                return;
            }

            this.localValue = value;
            this.$emit('input', value);
            this.$emit('change', value);
        },
        incrementValue: function incrementValue() {
            this.setValue(this.localValue + this.step);
        },
        decrementValue: function decrementValue() {
            this.setValue(this.localValue - this.step);
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
        refreshSize: function refreshSize() {
            this.thumbSize = this.$refs.thumb.offsetWidth;
            this.trackLength = this.$refs.track.offsetWidth;
            this.trackOffset = this.getTrackOffset(this.$refs.track);
        },
        initializeSlider: function initializeSlider() {
            var _this = this;

            document.addEventListener('touchend', this.onDragStop);
            document.addEventListener('mouseup', this.onDragStop);
            document.addEventListener('click', this.onExternalClick);

            this.$on('window-resize', function () {
                _this.refreshSize();
                _this.isDragging = false;
            });

            this.refreshSize();
            this.initializeDrag();
        },
        teardownSlider: function teardownSlider() {
            document.removeEventListener('touchend', this.onDragStop);
            document.removeEventListener('mouseup', this.onDragStop);
            document.removeEventListener('click', this.onExternalClick);
        },
        initializeDrag: function initializeDrag() {
            var value = this.getEdge(this.localValue ? this.localValue : 0, 0, 100);
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
            var value = this.getEdge((position - this.trackOffset) / this.trackLength * 100, 0, 100);

            if (this.isDragging) {
                this.setValue(Math.round(value));
            }
        },
        onDragStop: function onDragStop(e) {
            this.isDragging = false;

            if (this.snapToSteps && this.value % this.step !== 0) {
                this.setValue(this.getNearestSnapPoint());
            }

            document.removeEventListener('touchmove', this.onDragMove);
            document.removeEventListener('mousemove', this.onDragMove);

            this.$emit('dragend', this.localValue, e);
        },
        getNearestSnapPoint: function getNearestSnapPoint() {
            var previousSnapPoint = Math.floor(this.value / this.step) * this.step;
            var nextSnapPoint = previousSnapPoint + this.step;
            var midpoint = (previousSnapPoint + nextSnapPoint) / 2;

            return this.value >= midpoint ? nextSnapPoint : previousSnapPoint;
        },
        getEdge: function getEdge(a, b, c) {
            if (a < b) {
                return b;
            }

            if (a > c) {
                return c;
            }

            return a;
        }
    },

    components: {
        UiIcon: _UiIcon2.default
    },

    mixins: [_RespondsToWindowResize2.default]
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UiButton = __webpack_require__(14);

var _UiButton2 = _interopRequireDefault(_UiButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
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
        UiButton: _UiButton2.default
    }
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UiSnackbar = __webpack_require__(46);

var _UiSnackbar2 = _interopRequireDefault(_UiSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
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
            if (this.queueSnackbars || this.queue.length === 1) {
                this.queue.splice(index, 1);
            } else {
                this.queue.splice(index, this.queue.length - 1);
            }

            this.$emit('snackbar-hide', snackbar);
            this.callHook('onHide', snackbar);

            this.resetTimeout();
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
        UiSnackbar: _UiSnackbar2.default
    }
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(17);

exports.default = {
    name: 'ui-switch',

    props: {
        name: String,
        label: String,
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
            isChecked: (0, _util.looseEqual)(this.value, this.trueValue) || this.checked,
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
            this.isChecked = (0, _util.looseEqual)(this.value, this.trueValue);
        }
    },

    created: function created() {
        this.$emit('input', this.isChecked ? this.trueValue : this.falseValue);
    },


    methods: {
        onClick: function onClick(e) {
            this.isChecked = e.target.checked;
            this.$emit('input', e.target.checked ? this.trueValue : this.falseValue);
        },
        onChange: function onChange(e) {
            this.$emit('change', this.isChecked ? this.trueValue : this.falseValue, e);
        },
        onFocus: function onFocus() {
            this.isActive = true;
            this.$emit('focus');
        },
        onBlur: function onBlur() {
            this.isActive = false;
            this.$emit('blur');
        }
    }
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _uuid = __webpack_require__(49);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ui-tab',

    props: {
        id: {
            type: String,
            default: function _default() {
                return _uuid2.default.short('ui-tab-');
            }
        },
        title: String,
        icon: String,
        iconProps: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        show: {
            type: Boolean,
            default: true
        },
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
        show: function show() {
            this.$parent.handleTabShowChange(this);
        },
        disabled: function disabled() {
            this.$parent.handleTabDisableChange(this);
        }
    },

    created: function created() {
        this.$parent.registerTab(this);
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
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UiIcon = __webpack_require__(1);

var _UiIcon2 = _interopRequireDefault(_UiIcon);

var _UiRippleInk = __webpack_require__(3);

var _UiRippleInk2 = _interopRequireDefault(_UiRippleInk);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ui-tab-header-item',

    props: {
        id: String,
        type: {
            type: String,
            default: 'text' },
        title: String,
        icon: String,
        iconProps: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        active: {
            type: Boolean,
            default: false
        },
        show: {
            type: Boolean,
            default: true
        },
        disableRipple: {
            type: Boolean,
            default: _config2.default.data.disableRipple
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        classes: function classes() {
            return ['ui-tab-header-item--type-' + this.type, { 'is-active': this.active }, { 'is-disabled': this.disabled }];
        }
    },

    components: {
        UiIcon: _UiIcon2.default,
        UiRippleInk: _UiRippleInk2.default
    }
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _RespondsToWindowResize = __webpack_require__(28);

var _RespondsToWindowResize2 = _interopRequireDefault(_RespondsToWindowResize);

var _UiTabHeaderItem = __webpack_require__(214);

var _UiTabHeaderItem2 = _interopRequireDefault(_UiTabHeaderItem);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ui-tabs',

    props: {
        type: {
            type: String,
            default: 'text' },
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
            default: _config2.default.data.disableRipple
        }
    },

    data: function data() {
        return {
            tabs: [],
            activeTabId: null,
            activeTabIndex: -1,
            activeTabElement: null,
            activeTabPosition: {
                left: 0,
                width: 0
            },
            tabContainerWidth: 0
        };
    },


    computed: {
        classes: function classes() {
            return ['ui-tabs--type-' + this.type, 'ui-tabs--text-color-' + this.textColor, 'ui-tabs--text-color-active-' + this.textColorActive, 'ui-tabs--background-color-' + this.backgroundColor, 'ui-tabs--indicator-color-' + this.textColorActive, { 'is-raised': this.raised }, { 'is-fullwidth': this.fullwidth }];
        },
        indicatorLeft: function indicatorLeft() {
            return this.activeTabPosition.left + 'px';
        },
        indicatorRight: function indicatorRight() {
            return this.tabContainerWidth - (this.activeTabPosition.left + this.activeTabPosition.width) + 'px';
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
        },
        activeTabElement: function activeTabElement() {
            this.refreshIndicator();
        }
    },

    mounted: function mounted() {
        var _this2 = this;

        this.$nextTick(function () {
            _this2.tabContainerWidth = _this2.$refs.tabsContainer.offsetWidth;
            _this2.activeTabElement = _this2.$refs.tabsContainer.querySelector('.is-active');
        });

        this.$on('window-resize', function () {
            _this2.tabContainerWidth = _this2.$refs.tabsContainer.offsetWidth;
            _this2.refreshIndicator();
        });
    },


    methods: {
        registerTab: function registerTab(tab) {
            this.tabs.push(tab);

            if (this.activeTabId === null || tab.selected) {
                this.activeTabId = tab.id;
            }
        },
        handleTabShowChange: function handleTabShowChange(tab) {
            if (this.activeTabId === tab.id && !tab.show) {
                var newTab = this.findNearestAvailableTab({ preferPrevious: true });

                if (newTab) {
                    this.selectTab(newTab.$el, newTab);
                }
            }

            this.refreshIndicator();
        },
        handleTabDisableChange: function handleTabDisableChange(tab) {
            if (this.activeTabId === tab.id && tab.disabled) {
                var newTab = this.findNearestAvailableTab({ preferPrevious: true });

                if (newTab) {
                    this.selectTab(newTab.$el, newTab);
                }
            }
        },
        selectTab: function selectTab(e, tab) {
            var newTabElement = e.currentTarget ? e.currentTarget : e;

            if (tab.disabled || this.activeTabElement === newTabElement) {
                return;
            }

            this.activeTabElement = newTabElement;
            this.activeTabId = tab.id;

            this.$emit('tab-change', tab.id);
        },
        selectPreviousTab: function selectPreviousTab() {
            if (this.activeTabIndex === 0) {
                return;
            }

            var previousTab = this.findTabByIndex(this.activeTabIndex, { findPrevious: true });

            if (!previousTab) {
                return;
            }

            this.selectTab(previousTab.$el, previousTab);
            this.activeTabElement.focus();
        },
        selectNextTab: function selectNextTab() {
            if (this.activeTabIndex === this.$refs.tabElements.length - 1) {
                return;
            }

            var nextTab = this.findTabByIndex(this.activeTabIndex);

            if (!nextTab) {
                return;
            }

            this.selectTab(nextTab.$el, nextTab);
            this.activeTabElement.focus();
        },
        findTabByIndex: function findTabByIndex(currentTabIndex) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { findPrevious: false };

            var tab = null;

            if (options.findPrevious) {
                for (var i = currentTabIndex - 1; i >= 0; i--) {
                    if (!this.$refs.tabElements[i].disabled && this.$refs.tabElements[i].show) {
                        tab = this.$refs.tabElements[i];
                        break;
                    }
                }
            } else {
                for (var _i = currentTabIndex + 1; _i < this.$refs.tabElements.length; _i++) {
                    if (!this.$refs.tabElements[_i].disabled && this.$refs.tabElements[_i].show) {
                        tab = this.$refs.tabElements[_i];
                        break;
                    }
                }
            }

            return tab;
        },
        findTabById: function findTabById(id) {
            var tab = null;
            var numberOfTabs = this.$refs.tabElements.length;

            for (var i = 0; i <= numberOfTabs; i++) {
                if (id === this.$refs.tabElements[i].id) {
                    tab = this.$refs.tabElements[i];
                    break;
                }
            }

            return tab;
        },
        findNearestAvailableTab: function findNearestAvailableTab() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { preferPrevious: false };

            var tab = this.findTabByIndex(this.activeTabIndex, {
                findPrevious: options.preferPrevious
            });

            if (tab) {
                return tab;
            }

            return this.findTabByIndex(this.activeTabIndex, {
                findPrevious: !options.preferPrevious
            });
        },
        setActiveTab: function setActiveTab(tabId) {
            var tab = this.findTabById(tabId);

            if (tab && !tab.disabled) {
                this.selectTab(tab.$el, tab);
            }
        },
        refreshIndicator: function refreshIndicator() {
            this.activeTabPosition = {
                left: this.activeTabElement ? this.activeTabElement.offsetLeft : 0,
                width: this.activeTabElement ? this.activeTabElement.offsetWidth : 0
            };
        }
    },

    components: {
        UiTabHeaderItem: _UiTabHeaderItem2.default,
        RenderVnodes: {
            name: 'render-vnodes',
            functional: true,
            props: ['nodes'],
            render: function render(createElement, context) {
                return createElement('div', context.props.nodes);
            }
        }
    },

    mixins: [_RespondsToWindowResize2.default]
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _autofocus = __webpack_require__(47);

var _autofocus2 = _interopRequireDefault(_autofocus);

var _UiIcon = __webpack_require__(1);

var _UiIcon2 = _interopRequireDefault(_UiIcon);

var _autosize = __webpack_require__(85);

var _autosize2 = _interopRequireDefault(_autosize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ui-textbox',

    props: {
        name: String,
        placeholder: String,
        value: {
            type: [String, Number],
            required: true
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
            type: String,
            default: 'any'
        },
        maxlength: Number,
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
            return this.value.length === 0 && !this.isActive;
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
        hasFeedback: function hasFeedback() {
            return Boolean(this.help) || Boolean(this.error);
        },
        showError: function showError() {
            return this.invalid && Boolean(this.error);
        },
        showHelp: function showHelp() {
            return !this.showError && Boolean(this.help);
        }
    },

    mounted: function mounted() {
        if (this.multiLine && this.autosize) {
            (0, _autosize2.default)(this.$refs.textarea);
            this.autosizeInitialized = true;
        }
    },
    beforeDestroy: function beforeDestroy() {
        if (this.autosizeInitialized) {
            _autosize2.default.destroy(this.$refs.textarea);
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
                _autosize2.default.update(this.$refs.textarea);
            }
        }
    },

    components: {
        UiIcon: _UiIcon2.default
    },

    directives: {
        autofocus: _autofocus2.default
    }
};

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UiIconButton = __webpack_require__(25);

var _UiIconButton2 = _interopRequireDefault(_UiIconButton);

var _UiProgressLinear = __webpack_require__(44);

var _UiProgressLinear2 = _interopRequireDefault(_UiProgressLinear);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
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
        UiIconButton: _UiIconButton2.default,
        UiProgressLinear: _UiProgressLinear2.default
    }
};

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tetherTooltip = __webpack_require__(207);

var _tetherTooltip2 = _interopRequireDefault(_tetherTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ui-tooltip',

    props: {
        trigger: {
            type: String,
            required: true
        },
        position: {
            type: String,
            default: 'bottom center'
        },
        openOn: {
            type: String,
            default: 'hover focus'
        },
        openDelay: {
            type: Number,
            default: 0
        }
    },

    data: function data() {
        return {
            tooltip: null
        };
    },


    watch: {
        trigger: function trigger() {
            if (this.tooltip === null) {
                this.initialize();
            }
        }
    },

    mounted: function mounted() {
        if (this.tooltip === null) {
            this.initialize();
        }
    },
    beforeDestroy: function beforeDestroy() {
        if (this.tooltip !== null) {
            this.tooltip.destroy();
        }
    },


    methods: {
        initialize: function initialize() {
            if (this.trigger !== undefined) {
                this.tooltip = new _tetherTooltip2.default({
                    target: this.$parent.$refs[this.trigger],
                    content: this.$refs.tooltip,
                    classes: 'ui-tooltip--theme-default',
                    position: this.position,
                    openOn: this.openOn,
                    openDelay: this.openDelay
                });
            }
        }
    }
};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(134), __esModule: true };

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(135), __esModule: true };

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(50);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(50);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
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

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(13)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(157);
var $Object = __webpack_require__(13).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(160);
__webpack_require__(158);
__webpack_require__(161);
__webpack_require__(162);
module.exports = __webpack_require__(13).Symbol;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(159);
__webpack_require__(163);
module.exports = __webpack_require__(41).f('iterator');

/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(8)
  , toLength  = __webpack_require__(154)
  , toIndex   = __webpack_require__(153);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(136);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(22)
  , gOPS    = __webpack_require__(58)
  , pIE     = __webpack_require__(34);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4).document && document.documentElement;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(52);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(52);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(56)
  , descriptor     = __webpack_require__(23)
  , setToStringTag = __webpack_require__(35)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(9)(IteratorPrototype, __webpack_require__(10)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(22)
  , toIObject = __webpack_require__(8);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(24)('meta')
  , isObject = __webpack_require__(21)
  , has      = __webpack_require__(6)
  , setDesc  = __webpack_require__(7).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(20)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(7)
  , anObject = __webpack_require__(19)
  , getKeys  = __webpack_require__(22);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(34)
  , createDesc     = __webpack_require__(23)
  , toIObject      = __webpack_require__(8)
  , toPrimitive    = __webpack_require__(39)
  , has            = __webpack_require__(6)
  , IE8_DOM_DEFINE = __webpack_require__(54)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(5) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(8)
  , gOPN      = __webpack_require__(57).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(6)
  , toObject    = __webpack_require__(155)
  , IE_PROTO    = __webpack_require__(36)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(38)
  , defined   = __webpack_require__(29);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(38)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(38)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(29);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(137)
  , step             = __webpack_require__(145)
  , Iterators        = __webpack_require__(32)
  , toIObject        = __webpack_require__(8);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(55)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(31);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(5), 'Object', {defineProperty: __webpack_require__(7).f});

/***/ }),
/* 158 */
/***/ (function(module, exports) {



/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(152)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(55)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(4)
  , has            = __webpack_require__(6)
  , DESCRIPTORS    = __webpack_require__(5)
  , $export        = __webpack_require__(31)
  , redefine       = __webpack_require__(60)
  , META           = __webpack_require__(147).KEY
  , $fails         = __webpack_require__(20)
  , shared         = __webpack_require__(37)
  , setToStringTag = __webpack_require__(35)
  , uid            = __webpack_require__(24)
  , wks            = __webpack_require__(10)
  , wksExt         = __webpack_require__(41)
  , wksDefine      = __webpack_require__(40)
  , keyOf          = __webpack_require__(146)
  , enumKeys       = __webpack_require__(140)
  , isArray        = __webpack_require__(143)
  , anObject       = __webpack_require__(19)
  , toIObject      = __webpack_require__(8)
  , toPrimitive    = __webpack_require__(39)
  , createDesc     = __webpack_require__(23)
  , _create        = __webpack_require__(56)
  , gOPNExt        = __webpack_require__(150)
  , $GOPD          = __webpack_require__(149)
  , $DP            = __webpack_require__(7)
  , $keys          = __webpack_require__(22)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(57).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(34).f  = $propertyIsEnumerable;
  __webpack_require__(58).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(33)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(9)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(40)('asyncIterator');

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(40)('observable');

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(156);
var global        = __webpack_require__(4)
  , hide          = __webpack_require__(9)
  , Iterators     = __webpack_require__(32)
  , TO_STRING_TAG = __webpack_require__(10)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObj = __webpack_require__(205);
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Sources cannot be null or undefined');
	}

	return Object(val);
}

function assignKey(to, from, key) {
	var val = from[key];

	if (val === undefined || val === null) {
		return;
	}

	if (hasOwnProperty.call(to, key)) {
		if (to[key] === undefined || to[key] === null) {
			throw new TypeError('Cannot convert undefined or null to object (' + key + ')');
		}
	}

	if (!hasOwnProperty.call(to, key) || !isObj(val)) {
		to[key] = val;
	} else {
		to[key] = assign(Object(to[key]), from[key]);
	}
}

function assign(to, from) {
	if (to === from) {
		return to;
	}

	from = Object(from);

	for (var key in from) {
		if (hasOwnProperty.call(from, key)) {
			assignKey(to, from, key);
		}
	}

	if (Object.getOwnPropertySymbols) {
		var symbols = Object.getOwnPropertySymbols(from);

		for (var i = 0; i < symbols.length; i++) {
			if (propIsEnumerable.call(from, symbols[i])) {
				assignKey(to, from, symbols[i]);
			}
		}
	}

	return to;
}

module.exports = function deepAssign(target) {
	target = toObject(target);

	for (var s = 1; s < arguments.length; s++) {
		assign(target, arguments[s]);
	}

	return target;
};


/***/ }),
/* 165 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 166 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 167 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 168 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 169 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 170 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 171 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 172 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 173 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 174 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 175 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 176 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 177 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 178 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 179 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 180 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 181 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 182 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 183 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 184 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 185 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 186 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 187 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 188 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 189 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 190 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 191 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 192 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 193 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 194 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 195 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 196 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 197 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 198 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 199 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 200 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 201 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 202 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 203 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 204 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (x) {
	var type = typeof x;
	return x !== null && (type === 'object' || type === 'function');
};


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(255)))

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether-tooltip 1.1.0 */

(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(62),__webpack_require__(63)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = factory(require('tether-drop'), require('tether'));
  } else {
    root.Tooltip = factory(root.Drop, root.Tether);
  }
}(this, function(Drop, Tether) {

/* global Tether Drop */

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var extend = Tether.Utils.extend;

var _Drop = Drop.createContext({
  classPrefix: 'tooltip'
});

var defaults = {
  position: 'top center',
  openOn: 'hover',
  classes: 'tooltip-theme-arrows',
  constrainToWindow: true,
  constrainToScrollParent: false
};

var tooltipCount = 0;

var Tooltip = (function () {
  function Tooltip(options) {
    _classCallCheck(this, Tooltip);

    this.options = options;

    if (!this.options.target) {
      throw new Error('Tooltip Error: You must provide a target for Tooltip to attach to');
    }

    var position = this.options.target.getAttribute('data-tooltip-position');
    if (position) {
      if (typeof this.options.position === 'undefined') {
        this.options.position = position;
      }
    }

    var content = this.options.target.getAttribute('data-tooltip');

    if (content) {
      if (typeof this.options.content === 'undefined') {
        var contentEl = document.createElement('div');
        contentEl.innerHTML = content;

        // Add ARIA attributes (see #50)
        contentEl.setAttribute('role', 'tooltip');
        contentEl.id = 'drop-tooltip-' + tooltipCount;
        this.options.target.setAttribute('aria-describedby', contentEl.id);
        tooltipCount += 1;

        this.options.content = contentEl;
      }
    }

    if (!this.options.content) {
      throw new Error('Tooltip Error: You must provide content for Tooltip to display');
    }

    this.options = extend({}, defaults, this.options);

    this.drop = new _Drop(this.options);
  }

  _createClass(Tooltip, [{
    key: 'close',
    value: function close() {
      this.drop.close();
    }
  }, {
    key: 'open',
    value: function open() {
      this.drop.open();
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      this.drop.toggle();
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.drop.remove();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.drop.destroy();
    }
  }, {
    key: 'position',
    value: function position() {
      this.drop.position();
    }
  }]);

  return Tooltip;
})();

var initialized = [];

Tooltip.init = function () {
  var tooltipElements = document.querySelectorAll('[data-tooltip]');
  var len = tooltipElements.length;
  for (var i = 0; i < len; ++i) {
    var el = tooltipElements[i];
    if (initialized.indexOf(el) === -1) {
      new Tooltip({
        target: el
      });
      initialized.push(el);
    }
  }
};

document.addEventListener('DOMContentLoaded', function () {
  if (Tooltip.autoinit !== false) {
    Tooltip.init();
  }
});
return Tooltip;

}));


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(184)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(88),
  /* template */
  __webpack_require__(234),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiAutocompleteSuggestion.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiAutocompleteSuggestion.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5073a83d", Component.options)
  } else {
    hotAPI.reload("data-v-5073a83d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(168)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(91),
  /* template */
  __webpack_require__(218),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiCalendarControls.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiCalendarControls.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-13f9ff05", Component.options)
  } else {
    hotAPI.reload("data-v-13f9ff05", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(175)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(92),
  /* template */
  __webpack_require__(225),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiCalendarMonth.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiCalendarMonth.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2932507e", Component.options)
  } else {
    hotAPI.reload("data-v-2932507e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(188)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(93),
  /* template */
  __webpack_require__(238),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiCalendarWeek.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiCalendarWeek.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60cc7cc3", Component.options)
  } else {
    hotAPI.reload("data-v-60cc7cc3", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(191)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(105),
  /* template */
  __webpack_require__(241),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiMenuOption.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiMenuOption.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6515e465", Component.options)
  } else {
    hotAPI.reload("data-v-6515e465", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(177)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(115),
  /* template */
  __webpack_require__(227),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiSelectOption.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiSelectOption.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ea40182", Component.options)
  } else {
    hotAPI.reload("data-v-2ea40182", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(178)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(121),
  /* template */
  __webpack_require__(228),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\code\\packages\\keen-ui\\src\\UiTabHeaderItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiTabHeaderItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-31ca5114", Component.options)
  } else {
    hotAPI.reload("data-v-31ca5114", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('transition', {
    attrs: {
      "name": "ui-alert--transition-toggle"
    }
  }, [_vm._c('div', {
    staticClass: "ui-alert",
    class: _vm.classes,
    attrs: {
      "role": "alert"
    }
  }, [_vm._c('div', {
    staticClass: "ui-alert__body"
  }, [(!_vm.removeIcon) ? _vm._c('div', {
    staticClass: "ui-alert__icon"
  }, [_vm._t("icon", [(_vm.type === 'info') ? _vm._c('ui-icon', [_vm._c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_vm._c('path', {
    attrs: {
      "d": "M12.984 9V6.984h-1.97V9h1.97zm0 8.016v-6h-1.97v6h1.97zm-.984-15c5.53 0 9.984 4.453 9.984 9.984S17.53 21.984 12 21.984 2.016 17.53 2.016 12 6.47 2.016 12 2.016z"
    }
  })])]) : _vm._e(), _vm._v(" "), (_vm.type === 'success') ? _vm._c('ui-icon', [_vm._c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_vm._c('path', {
    attrs: {
      "d": "M9.984 17.016l9-9-1.406-1.453-7.594 7.594-3.563-3.563L5.016 12zm2.016-15c5.53 0 9.984 4.453 9.984 9.984S17.53 21.984 12 21.984 2.016 17.53 2.016 12 6.47 2.016 12 2.016z"
    }
  })])]) : _vm._e(), _vm._v(" "), (_vm.type === 'warning') ? _vm._c('ui-icon', [_vm._c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_vm._c('path', {
    attrs: {
      "d": "M12.984 14.016v-4.03h-1.97v4.03h1.97zm0 3.984v-2.016h-1.97V18h1.97zm-12 3L12 2.016 23.016 21H.986z"
    }
  })])]) : _vm._e(), _vm._v(" "), (_vm.type === 'error') ? _vm._c('ui-icon', [_vm._c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_vm._c('path', {
    attrs: {
      "d": "M12.984 12.984v-6h-1.97v6h1.97zm0 4.032V15h-1.97v2.016h1.97zm-.984-15c5.53 0 9.984 4.453 9.984 9.984S17.53 21.984 12 21.984 2.016 17.53 2.016 12 6.47 2.016 12 2.016z"
    }
  })])]) : _vm._e()])], 2) : _vm._e(), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-alert__content"
  }, [_vm._t("default")], 2), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-alert__dismiss-button"
  }, [(_vm.dismissible) ? _vm._c('ui-close-button', {
    attrs: {
      "size": "small"
    },
    on: {
      "click": _vm.dismissAlert
    }
  }) : _vm._e()], 1)])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-019a858a", module.exports)
  }
}

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ui-autocomplete",
    class: _vm.classes
  }, [(_vm.icon || _vm.$slots.icon) ? _vm._c('div', {
    staticClass: "ui-autocomplete__icon-wrapper"
  }, [_vm._t("icon", [_vm._c('ui-icon', {
    attrs: {
      "icon": _vm.icon
    }
  })])], 2) : _vm._e(), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-autocomplete__content"
  }, [_vm._c('label', {
    staticClass: "ui-autocomplete__label"
  }, [(_vm.label || _vm.$slots.default) ? _vm._c('div', {
    staticClass: "ui-autocomplete__label-text",
    class: _vm.labelClasses
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2) : _vm._e(), _vm._v(" "), _vm._c('ui-icon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.disabled && _vm.value.length),
      expression: "!disabled && value.length"
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
  }, [_vm._c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_vm._c('path', {
    attrs: {
      "d": "M18.984 6.422L13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z"
    }
  })])]), _vm._v(" "), _vm._c('input', {
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
      "readonly": _vm.readonly ? _vm.readonly : null
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
        if (_vm._k($event.keyCode, "down", 40)) { return; }
        $event.preventDefault();
        _vm.highlightSuggestion(_vm.highlightedIndex + 1)
      }, function($event) {
        if (_vm._k($event.keyCode, "enter", 13)) { return; }
        _vm.selectHighlighted(_vm.highlightedIndex, $event)
      }, function($event) {
        if (_vm._k($event.keyCode, "esc", 27)) { return; }
        _vm.closeDropdown($event)
      }, function($event) {
        if (_vm._k($event.keyCode, "tab", 9)) { return; }
        _vm.closeDropdown($event)
      }, function($event) {
        if (_vm._k($event.keyCode, "up", 38)) { return; }
        $event.preventDefault();
        _vm.highlightSuggestion(_vm.highlightedIndex - 1)
      }]
    }
  }), _vm._v(" "), _vm._c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showDropdown),
      expression: "showDropdown"
    }],
    staticClass: "ui-autocomplete__suggestions"
  }, _vm._l((_vm.matchingSuggestions), function(suggestion, index) {
    return _vm._c('ui-autocomplete-suggestion', {
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
  }))], 1), _vm._v(" "), (_vm.hasFeedback) ? _vm._c('div', {
    staticClass: "ui-autocomplete__feedback"
  }, [(_vm.showError) ? _vm._c('div', {
    staticClass: "ui-autocomplete__feedback-text"
  }, [_vm._t("error", [_vm._v(_vm._s(_vm.error))])], 2) : (_vm.showHelp) ? _vm._c('div', {
    staticClass: "ui-autocomplete__feedback-text"
  }, [_vm._t("help", [_vm._v(_vm._s(_vm.help))])], 2) : _vm._e()]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-049f1d4e", module.exports)
  }
}

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ui-radio-group",
    class: _vm.classes
  }, [(_vm.label || _vm.$slots.default) ? _vm._c('div', {
    staticClass: "ui-radio-group__label-text"
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2) : _vm._e(), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-radio-group__radios"
  }, _vm._l((_vm.options), function(option) {
    return _vm._c('ui-radio', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.selectedOptionValue),
        expression: "selectedOptionValue"
      }],
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
        "true-value": option[_vm.keys.value] || option
      },
      domProps: {
        "value": (_vm.selectedOptionValue)
      },
      on: {
        "blur": _vm.onBlur,
        "focus": _vm.onFocus,
        "input": function($event) {
          _vm.selectedOptionValue = $event
        }
      }
    }, [_vm._v(_vm._s(option[_vm.keys.label] || option))])
  })), _vm._v(" "), (_vm.hasFeedback) ? _vm._c('div', {
    staticClass: "ui-radio-group__feedback"
  }, [(_vm.showError) ? _vm._c('div', {
    staticClass: "ui-radio-group__feedback-text"
  }, [_vm._t("error", [_vm._v(_vm._s(_vm.error))])], 2) : (_vm.showHelp) ? _vm._c('div', {
    staticClass: "ui-radio-group__feedback-text"
  }, [_vm._t("help", [_vm._v(_vm._s(_vm.help))])], 2) : _vm._e()]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0eea8cf5", module.exports)
  }
}

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ui-calendar-controls"
  }, [_vm._c('ui-icon-button', {
    staticClass: "ui-calendar-controls__nav-button",
    attrs: {
      "icon": "keyboard_arrow_left",
      "type": "secondary",
      "disabled": _vm.previousMonthDisabled
    },
    on: {
      "click": _vm.goToPreviousMonth
    }
  }, [_vm._c('ui-icon', [_vm._c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_vm._c('path', {
    attrs: {
      "d": "M15.422 16.078l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z"
    }
  })])])], 1), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-calendar-controls__month-and-year"
  }, [_vm._v(_vm._s(_vm.monthAndYear))]), _vm._v(" "), _vm._c('ui-icon-button', {
    staticClass: "ui-calendar-controls__nav-button",
    attrs: {
      "icon": "keyboard_arrow_right",
      "type": "secondary",
      "disabled": _vm.nextMonthDisabled
    },
    on: {
      "click": _vm.goToNextMonth
    }
  }, [_vm._c('ui-icon', [_vm._c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_vm._c('path', {
    attrs: {
      "d": "M8.578 16.36l4.594-4.595L8.578 7.17l1.406-1.405 6 6-6 6z"
    }
  })])])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-13f9ff05", module.exports)
  }
}

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ui-select",
    class: _vm.classes
  }, [(_vm.name) ? _vm._c('input', {
    staticClass: "ui-select__hidden-input",
    attrs: {
      "type": "hidden",
      "name": _vm.name
    },
    domProps: {
      "value": _vm.submittedValue
    }
  }) : _vm._e(), _vm._v(" "), (_vm.icon || _vm.$slots.icon) ? _vm._c('div', {
    staticClass: "ui-select__icon-wrapper"
  }, [_vm._t("icon", [_vm._c('ui-icon', {
    attrs: {
      "icon": _vm.icon
    }
  })])], 2) : _vm._e(), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-select__content"
  }, [_vm._c('div', {
    ref: "label",
    staticClass: "ui-select__label",
    attrs: {
      "tabindex": _vm.disabled ? null : '0'
    },
    on: {
      "click": _vm.toggleDropdown,
      "focus": _vm.onFocus,
      "keydown": [function($event) {
        if (_vm._k($event.keyCode, "enter", 13)) { return; }
        $event.preventDefault();
        _vm.openDropdown($event)
      }, function($event) {
        if (_vm._k($event.keyCode, "space", 32)) { return; }
        $event.preventDefault();
        _vm.openDropdown($event)
      }, function($event) {
        if (_vm._k($event.keyCode, "tab", 9)) { return; }
        _vm.onBlur($event)
      }]
    }
  }, [(_vm.label || _vm.$slots.default) ? _vm._c('div', {
    staticClass: "ui-select__label-text",
    class: _vm.labelClasses
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2) : _vm._e(), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-select__display"
  }, [_vm._c('div', {
    staticClass: "ui-select__display-value",
    class: {
      'is-placeholder': !_vm.hasDisplayText
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.hasDisplayText ? _vm.displayText : (_vm.hasFloatingLabel && _vm.isLabelInline) ? null : _vm.placeholder) + "\n                ")]), _vm._v(" "), _vm._c('ui-icon', {
    staticClass: "ui-select__dropdown-button"
  }, [_vm._c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_vm._c('path', {
    attrs: {
      "d": "M6.984 9.984h10.03L12 15z"
    }
  })])])], 1), _vm._v(" "), _vm._c('transition', {
    attrs: {
      "name": "ui-select--transition-fade"
    }
  }, [_vm._c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showDropdown),
      expression: "showDropdown"
    }],
    ref: "dropdown",
    staticClass: "ui-select__dropdown",
    attrs: {
      "tabindex": "-1"
    },
    on: {
      "keydown": [function($event) {
        if (_vm._k($event.keyCode, "down", 40)) { return; }
        $event.preventDefault();
        _vm.highlightOption(_vm.highlightedIndex + 1)
      }, function($event) {
        if (_vm._k($event.keyCode, "enter", 13)) { return; }
        $event.preventDefault();
        $event.stopPropagation();
        _vm.selectHighlighted(_vm.highlightedIndex, $event)
      }, function($event) {
        if (_vm._k($event.keyCode, "esc", 27)) { return; }
        $event.preventDefault();
        _vm.closeDropdown()
      }, function($event) {
        if (_vm._k($event.keyCode, "tab", 9)) { return; }
        _vm.onBlur($event)
      }, function($event) {
        if (_vm._k($event.keyCode, "up", 38)) { return; }
        $event.preventDefault();
        _vm.highlightOption(_vm.highlightedIndex - 1)
      }]
    }
  }, [(_vm.hasSearch) ? _vm._c('div', {
    staticClass: "ui-select__search",
    on: {
      "click": function($event) {
        $event.stopPropagation();
      },
      "keydown": function($event) {
        if (_vm._k($event.keyCode, "space", 32)) { return; }
        $event.stopPropagation();
      }
    }
  }, [_vm._c('input', {
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
      "value": _vm._s(_vm.query)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.query = $event.target.value
      }
    }
  }), _vm._v(" "), _vm._c('ui-icon', {
    staticClass: "ui-select__search-icon"
  }, [_vm._c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_vm._c('path', {
    attrs: {
      "d": "M9.516 14.016c2.484 0 4.5-2.016 4.5-4.5s-2.016-4.5-4.5-4.5-4.5 2.016-4.5 4.5 2.016 4.5 4.5 4.5zm6 0l4.97 4.97-1.5 1.5-4.97-4.97v-.797l-.28-.282c-1.126.984-2.626 1.547-4.22 1.547-3.61 0-6.516-2.86-6.516-6.47S5.906 3 9.516 3s6.47 2.906 6.47 6.516c0 1.594-.564 3.094-1.548 4.22l.28.28h.798z"
    }
  })])]), _vm._v(" "), _vm._c('ui-progress-circular', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticClass: "ui-select__search-progress",
    attrs: {
      "size": 20,
      "stroke": 4
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm._c('ul', {
    ref: "optionsList",
    staticClass: "ui-select__options"
  }, [_vm._l((_vm.filteredOptions), function(option, index) {
    return _vm._c('ui-select-option', {
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
  }), _vm._v(" "), _vm._c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.hasNoResults),
      expression: "hasNoResults"
    }],
    staticClass: "ui-select__no-results"
  }, [_vm._t("no-results", [_vm._v("No results found")])], 2)], 2)])])], 1), _vm._v(" "), (_vm.hasFeedback) ? _vm._c('div', {
    staticClass: "ui-select__feedback"
  }, [(_vm.showError) ? _vm._c('div', {
    staticClass: "ui-select__feedback-text"
  }, [_vm._t("error", [_vm._v(_vm._s(_vm.error))])], 2) : (_vm.showHelp) ? _vm._c('div', {
    staticClass: "ui-select__feedback-text"
  }, [_vm._t("help", [_vm._v(_vm._s(_vm.help))])], 2) : _vm._e()]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-149e632d", module.exports)
  }
}

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ui-ripple-ink"
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-14e906f5", module.exports)
  }
}

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ui-calendar",
    class: _vm.classes
  }, [_vm._c('div', {
    staticClass: "ui-calendar__header"
  }, [_vm._c('div', {
    staticClass: "ui-calendar__header-year",
    class: {
      'is-active': _vm.showYearPicker
    },
    attrs: {
      "tabindex": "0"
    },
    on: {
      "click": function($event) {
        _vm.showYearPicker = true
      },
      "keydown": function($event) {
        if (_vm._k($event.keyCode, "enter", 13)) { return; }
        _vm.showYearPicker = true
      }
    }
  }, [_vm._v(_vm._s(_vm.headerYear))]), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-calendar__header-details",
    class: {
      'is-active': !_vm.showYearPicker
    },
    attrs: {
      "tabindex": "0"
    },
    on: {
      "click": function($event) {
        _vm.showYearPicker = false
      },
      "keydown": function($event) {
        if (_vm._k($event.keyCode, "enter", 13)) { return; }
        _vm.showYearPicker = false
      }
    }
  }, [_vm._c('span', {
    staticClass: "ui-calendar__header-day"
  }, [_vm._v(_vm._s(_vm.headerDay) + ", ")]), _vm._v(" "), _vm._c('span', {
    staticClass: "ui-calendar__header-date"
  }, [_vm._v(_vm._s(_vm.headerDate))])])]), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-calendar__body"
  }, [_vm._c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showYearPicker),
      expression: "showYearPicker"
    }],
    ref: "years",
    staticClass: "ui-calendar__years"
  }, _vm._l((_vm.yearRange), function(year) {
    return (!_vm.isYearOutOfRange(year)) ? _vm._c('li', {
      staticClass: "ui-calendar__year",
      class: _vm.getYearClasses(year),
      attrs: {
        "tabindex": "0"
      },
      on: {
        "click": function($event) {
          _vm.selectYear(year)
        },
        "keydown": function($event) {
          if (_vm._k($event.keyCode, "enter", 13)) { return; }
          _vm.selectYear(year)
        }
      }
    }, [_vm._v(_vm._s(year))]) : _vm._e()
  })), _vm._v(" "), _vm._c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.showYearPicker),
      expression: "!showYearPicker"
    }]
  }, [_vm._c('ui-calendar-controls', {
    ref: "controls",
    attrs: {
      "date-in-view": _vm.dateInView,
      "lang": _vm.lang,
      "max-date": _vm.maxDate,
      "min-date": _vm.minDate
    },
    on: {
      "go-to-date": _vm.onGoToDate
    }
  }), _vm._v(" "), _vm._c('ui-calendar-month', {
    ref: "month",
    attrs: {
      "date-filter": _vm.dateFilter,
      "date-in-view": _vm.dateInView,
      "lang": _vm.lang,
      "max-date": _vm.maxDate,
      "min-date": _vm.minDate,
      "selected": _vm.value
    },
    on: {
      "change": _vm.onMonthChange,
      "date-select": _vm.onDateSelect
    }
  })], 1), _vm._v(" "), (_vm.$slots.footer) ? _vm._c('div', {
    staticClass: "ui-calendar__footer"
  }, [_vm._t("footer")], 2) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-16dd362f", module.exports)
  }
}

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('label', {
    staticClass: "ui-radio",
    class: _vm.classes,
    on: {
      "click": _vm.toggleCheck
    }
  }, [_vm._c('div', {
    staticClass: "ui-radio__input-wrapper"
  }, [_vm._c('input', {
    staticClass: "ui-radio__input",
    attrs: {
      "type": "radio",
      "disabled": _vm.disabled,
      "name": _vm.name
    },
    domProps: {
      "value": _vm.trueValue
    },
    on: {
      "blur": _vm.onBlur,
      "change": _vm.onChange,
      "focus": _vm.onFocus
    }
  }), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-radio__focus-ring"
  }), _vm._v(" "), _vm._c('span', {
    staticClass: "ui-radio__outer-circle"
  }), _vm._v(" "), _vm._c('span', {
    staticClass: "ui-radio__inner-circle"
  })]), _vm._v(" "), (_vm.label || _vm.$slots.default) ? _vm._c('div', {
    staticClass: "ui-radio__label-text"
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1c88e05a", module.exports)
  }
}

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ui-snackbar-container",
    class: _vm.classes
  }, _vm._l((_vm.queue), function(snackbar, index) {
    return _vm._c('ui-snackbar', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (snackbar.show),
        expression: "snackbar.show"
      }],
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
    }, [(_vm.allowHtml) ? _vm._c('div', {
      domProps: {
        "innerHTML": _vm._s(snackbar.message)
      }
    }) : _vm._e()])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1daceb4a", module.exports)
  }
}

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('transition', {
    attrs: {
      "name": _vm.disableTransition ? null : 'ui-progress-circular--transition-fade'
    }
  }, [_vm._c('div', {
    staticClass: "ui-progress-circular",
    class: _vm.classes,
    style: ({
      'width': _vm.size + 'px',
      'height': _vm.size + 'px'
    })
  }, [(_vm.type === 'determinate') ? _vm._c('svg', {
    staticClass: "ui-progress-circular__determinate",
    attrs: {
      "role": "progressbar",
      "aria-valuemax": 100,
      "aria-valuemin": 0,
      "aria-valuenow": _vm.progress,
      "height": _vm.size,
      "width": _vm.size
    }
  }, [_vm._c('circle', {
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
  })]) : _vm._c('svg', {
    staticClass: "ui-progress-circular__indeterminate",
    attrs: {
      "role": "progressbar",
      "viewBox": "25 25 50 50",
      "aria-valuemax": 100,
      "aria-valuemin": 0
    }
  }, [_vm._c('circle', {
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
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-20257add", module.exports)
  }
}

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ui-calendar-month"
  }, [_vm._c('div', {
    staticClass: "ui-calendar-month__header"
  }, _vm._l((_vm.lang.days.initials), function(day) {
    return _vm._c('span', [_vm._v(_vm._s(day))])
  })), _vm._v(" "), _vm._c('div', {
    ref: "current",
    staticClass: "ui-calendar-month__week is-current",
    class: _vm.weekClasses,
    on: {
      "transitionend": _vm.onTransitionEnd
    }
  }, _vm._l((_vm.currentWeekStartDates), function(date, index) {
    return _vm._c('ui-calendar-week', {
      key: index,
      attrs: {
        "date-filter": _vm.dateFilter,
        "max-date": _vm.maxDate,
        "min-date": _vm.minDate,
        "month": _vm.currentWeekStartDates[1].getMonth(),
        "selected": _vm.selected,
        "week-start": date
      },
      on: {
        "date-select": _vm.onDateSelect
      }
    })
  })), _vm._v(" "), _vm._c('div', {
    ref: "other",
    staticClass: "ui-calendar-month__week is-other",
    class: _vm.weekClasses
  }, _vm._l((_vm.otherWeekStartDates), function(date, index) {
    return _vm._c('ui-calendar-week', {
      key: index,
      attrs: {
        "max-date": _vm.maxDate,
        "min-date": _vm.minDate,
        "month": _vm.otherWeekStartDates[1].getMonth(),
        "selected": _vm.selected,
        "visible": false,
        "week-start": date
      },
      on: {
        "date-select": _vm.onDateSelect
      }
    })
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2932507e", module.exports)
  }
}

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ui-preloader",
    class: {
      'is-loading': _vm.show
    }
  }, [_vm._c('div', {
    staticClass: "ui-preloader__progressbar",
    attrs: {
      "role": "progressbar",
      "aria-busy": _vm.show ? 'true' : false
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2e7f9056", module.exports)
  }
}

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('li', {
    staticClass: "ui-select-option",
    class: _vm.classes
  }, [_vm._t("default", [(_vm.type === 'basic') ? _vm._c('div', {
    staticClass: "ui-select-option__basic"
  }, [_vm._v("\n            " + _vm._s(_vm.option[_vm.keys.label] || _vm.option) + "\n        ")]) : _vm._e(), _vm._v(" "), (_vm.type === 'image') ? _vm._c('div', {
    staticClass: "ui-select-option__image"
  }, [_vm._c('div', {
    staticClass: "ui-select-option__image-object",
    style: (_vm.imageStyle)
  }), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-select-option__image-text"
  }, [_vm._v(_vm._s(_vm.option[_vm.keys.label]))])]) : _vm._e(), _vm._v(" "), (_vm.multiple) ? _vm._c('div', {
    staticClass: "ui-select-option__checkbox"
  }, [(_vm.selected) ? _vm._c('ui-icon', [_vm._c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_vm._c('path', {
    attrs: {
      "d": "M9.984 17.016l9-9-1.406-1.453-7.594 7.594-3.563-3.563L5.016 12zm9-14.016C20.11 3 21 3.938 21 5.016v13.97C21 20.062 20.11 21 18.984 21H5.014C3.89 21 3 20.064 3 18.986V5.015C3 3.94 3.89 3 5.014 3h13.97z"
    }
  })])]) : _vm._c('ui-icon', [_vm._c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_vm._c('path', {
    attrs: {
      "d": "M18.984 3C20.062 3 21 3.938 21 5.016v13.97C21 20.062 20.062 21 18.984 21H5.014C3.938 21 3 20.064 3 18.986V5.015C3 3.94 3.936 3 5.014 3h13.97zm0 2.016H5.014v13.97h13.97V5.015z"
    }
  })])])], 1) : _vm._e()])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2ea40182", module.exports)
  }
}

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('li', {
    ref: "headerItem",
    staticClass: "ui-tab-header-item",
    class: _vm.classes,
    attrs: {
      "role": "tab",
      "aria-controls": _vm.id,
      "aria-selected": _vm.active ? 'true' : null,
      "disabled": _vm.disabled,
      "tabindex": _vm.active ? 0 : -1
    }
  }, [(_vm.type === 'icon' || _vm.type === 'icon-and-text') ? _vm._c('div', {
    staticClass: "ui-tab-header-item__icon"
  }, [_vm._t("icon", [_vm._c('ui-icon', {
    attrs: {
      "icon-set": _vm.iconProps.iconSet,
      "icon": _vm.icon,
      "remove-text": _vm.iconProps.removeText,
      "use-svg": _vm.iconProps.useSvg
    }
  })])], 2) : _vm._e(), _vm._v(" "), (_vm.type === 'text' || _vm.type === 'icon-and-text') ? _vm._c('div', {
    staticClass: "ui-tab-header-item__text"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), (!_vm.disableRipple && !_vm.disabled) ? _vm._c('ui-ripple-ink', {
    attrs: {
      "trigger": "headerItem"
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-31ca5114", module.exports)
  }
}

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('transition', {
    attrs: {
      "name": "ui-progress-linear--transition-fade"
    }
  }, [_vm._c('div', {
    staticClass: "ui-progress-linear",
    class: _vm.classes
  }, [(_vm.type === 'determinate') ? _vm._c('div', {
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
  }) : _vm._c('div', {
    staticClass: "ui-progress-linear__progress-bar is-indeterminate",
    attrs: {
      "role": "progressbar",
      "aria-valuemax": 100,
      "aria-valuemin": 0
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-363761e3", module.exports)
  }
}

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ui-textbox",
    class: _vm.classes
  }, [(_vm.icon || _vm.$slots.icon) ? _vm._c('div', {
    staticClass: "ui-textbox__icon-wrapper"
  }, [_vm._t("icon", [_vm._c('ui-icon', {
    attrs: {
      "icon": _vm.icon
    }
  })])], 2) : _vm._e(), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-textbox__content"
  }, [_vm._c('label', {
    staticClass: "ui-textbox__label"
  }, [(_vm.label || _vm.$slots.default) ? _vm._c('div', {
    staticClass: "ui-textbox__label-text",
    class: _vm.labelClasses
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2) : _vm._e(), _vm._v(" "), (!_vm.multiLine) ? _vm._c('input', {
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
      "min": _vm.minValue,
      "name": _vm.name,
      "number": _vm.type === 'number' ? true : null,
      "placeholder": _vm.hasFloatingLabel ? null : _vm.placeholder,
      "readonly": _vm.readonly,
      "required": _vm.required,
      "step": _vm.stepValue,
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
        if (_vm._k($event.keyCode, "enter", 13)) { return; }
        _vm.onKeydownEnter($event)
      }, _vm.onKeydown]
    }
  }) : _vm._c('textarea', {
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
      "name": _vm.name,
      "placeholder": _vm.hasFloatingLabel ? null : _vm.placeholder,
      "readonly": _vm.readonly,
      "required": _vm.required,
      "rows": _vm.rows
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
        if (_vm._k($event.keyCode, "enter", 13)) { return; }
        _vm.onKeydownEnter($event)
      }, _vm.onKeydown]
    }
  }, [_vm._v(_vm._s(_vm.value))])]), _vm._v(" "), (_vm.hasFeedback || _vm.maxlength) ? _vm._c('div', {
    staticClass: "ui-textbox__feedback"
  }, [(_vm.showError) ? _vm._c('div', {
    staticClass: "ui-textbox__feedback-text"
  }, [_vm._t("error", [_vm._v(_vm._s(_vm.error))])], 2) : (_vm.showHelp) ? _vm._c('div', {
    staticClass: "ui-textbox__feedback-text"
  }, [_vm._t("help", [_vm._v(_vm._s(_vm.help))])], 2) : _vm._e(), _vm._v(" "), (_vm.maxlength) ? _vm._c('div', {
    staticClass: "ui-textbox__counter"
  }, [_vm._v("\n                " + _vm._s(_vm.value.length + '/' + _vm.maxlength) + "\n            ")]) : _vm._e()]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3805aac6", module.exports)
  }
}

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show && _vm.isActive),
      expression: "show && isActive"
    }],
    staticClass: "ui-tab",
    attrs: {
      "role": "tabpanel",
      "aria-hidden": !_vm.isActive ? 'true' : null,
      "id": _vm.id,
      "tabindex": _vm.isActive ? '0' : null
    }
  }, [_vm._c('div', {
    staticStyle: {
      "display": "none"
    }
  }, [_vm._t("icon")], 2), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3cdc54b4", module.exports)
  }
}

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ui-toolbar",
    class: _vm.classes
  }, [_vm._c('div', {
    staticClass: "ui-toolbar__left"
  }, [(!_vm.removeNavIcon) ? _vm._c('div', {
    staticClass: "ui-toolbar__nav-icon"
  }, [_vm._t("icon", [_vm._c('ui-icon-button', {
    attrs: {
      "size": "large",
      "type": "secondary",
      "color": _vm.textColor,
      "icon": _vm.navIcon
    },
    on: {
      "click": _vm.navIconClick
    }
  })])], 2) : _vm._e(), _vm._v(" "), (_vm.brand || _vm.$slots.brand) ? _vm._c('div', {
    staticClass: "ui-toolbar__brand"
  }, [_vm._t("brand", [_vm._c('div', {
    staticClass: "ui-toolbar__brand-text"
  }, [_vm._v(_vm._s(_vm.brand))])])], 2) : _vm._e()]), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-toolbar__body",
    class: {
      'has-brand-divider': _vm.hasBrandDivider
    }
  }, [_vm._t("default", [(_vm.title) ? _vm._c('div', {
    staticClass: "ui-toolbar__title"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e()])], 2), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-toolbar__right"
  }, [_vm._t("actions")], 2), _vm._v(" "), _vm._c('ui-progress-linear', {
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
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3d9c3bcc", module.exports)
  }
}

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('transition', {
    attrs: {
      "name": _vm.transitionName
    },
    on: {
      "after-enter": _vm.onEnter,
      "after-leave": _vm.onLeave
    }
  }, [_vm._c('div', {
    staticClass: "ui-snackbar",
    on: {
      "click": _vm.onClick
    }
  }, [_vm._c('div', {
    staticClass: "ui-snackbar__message"
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.message))])], 2), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-snackbar__action"
  }, [(_vm.action) ? _vm._c('ui-button', {
    staticClass: "ui-snackbar__action-button",
    attrs: {
      "type": "secondary",
      "color": _vm.actionColor
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.onActionClick($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.action))]) : _vm._e()], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4f182f14", module.exports)
  }
}

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('li', {
    staticClass: "ui-autocomplete-suggestion",
    class: _vm.classes
  }, [_vm._t("default", [(_vm.type === 'simple') ? _vm._c('div', {
    staticClass: "ui-autocomplete-suggestion__simple"
  }, [_vm._v("\n            " + _vm._s(_vm.suggestion[_vm.keys.label] || _vm.suggestion) + "\n        ")]) : _vm._e(), _vm._v(" "), (_vm.type === 'image') ? _vm._c('div', {
    staticClass: "ui-autocomplete-suggestion__image"
  }, [_vm._c('div', {
    staticClass: "ui-autocomplete-suggestion__image-object",
    style: (_vm.imageStyle)
  }), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-autocomplete-suggestion__image-text"
  }, [_vm._v(_vm._s(_vm.suggestion[_vm.keys.label]))])]) : _vm._e()])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5073a83d", module.exports)
  }
}

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('transition', {
    attrs: {
      "name": _vm.toggleTransition
    },
    on: {
      "after-enter": _vm.onEnter,
      "after-leave": _vm.onLeave
    }
  }, [_vm._c('div', {
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
    }
  }, [_vm._c('div', {
    ref: "backdrop",
    staticClass: "ui-modal__wrapper",
    class: {
      'has-dummy-scrollbar': _vm.preventShift
    },
    on: {
      "click": function($event) {
        _vm.dismissOnBackdrop && _vm.closeModal($event)
      }
    }
  }, [_vm._c('div', {
    ref: "container",
    staticClass: "ui-modal__container",
    attrs: {
      "tabindex": "-1"
    },
    on: {
      "keydown": function($event) {
        if (_vm._k($event.keyCode, "esc", 27)) { return; }
        _vm.dismissOnEsc && _vm.closeModal($event)
      }
    }
  }, [(!_vm.removeHeader) ? _vm._c('div', {
    staticClass: "ui-modal__header"
  }, [_vm._t("header", [_vm._c('h1', {
    staticClass: "ui-modal__header-text"
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-modal__close-button"
  }, [(_vm.dismissOnCloseButton && !_vm.removeCloseButton && _vm.dismissible) ? _vm._c('ui-close-button', {
    on: {
      "click": _vm.closeModal
    }
  }) : _vm._e()], 1)], 2) : _vm._e(), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-modal__body"
  }, [_vm._t("default")], 2), _vm._v(" "), (_vm.hasFooter) ? _vm._c('div', {
    staticClass: "ui-modal__footer"
  }, [_vm._t("footer")], 2) : _vm._e(), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-modal__focus-redirect",
    attrs: {
      "tabindex": "0"
    },
    on: {
      "focus": function($event) {
        $event.stopPropagation();
        _vm.redirectFocus($event)
      }
    }
  })])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-509bc3e8", module.exports)
  }
}

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ui-checkbox-group",
    class: _vm.classes
  }, [(_vm.label || _vm.$slots.default) ? _vm._c('div', {
    staticClass: "ui-checkbox-group__label-text"
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2) : _vm._e(), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-checkbox-group__checkboxes"
  }, _vm._l((_vm.options), function(option, index) {
    return _vm._c('ui-checkbox', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.checkboxValues[index]),
        expression: "checkboxValues[index]"
      }],
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
      domProps: {
        "value": (_vm.checkboxValues[index])
      },
      on: {
        "blur": _vm.onBlur,
        "change": function($event) {
          _vm.onChange(arguments, option)
        },
        "focus": _vm.onFocus,
        "input": function($event) {
          var $$exp = _vm.checkboxValues,
            $$idx = index;
          if (!Array.isArray($$exp)) {
            _vm.checkboxValues[index] = $event
          } else {
            $$exp.splice($$idx, 1, $event)
          }
        }
      }
    }, [_vm._v(_vm._s(option[_vm.keys.label] || option))])
  })), _vm._v(" "), (_vm.hasFeedback) ? _vm._c('div', {
    staticClass: "ui-checkbox-group__feedback"
  }, [(_vm.showError) ? _vm._c('div', {
    staticClass: "ui-checkbox-group__feedback-text"
  }, [_vm._t("error", [_vm._v(_vm._s(_vm.error))])], 2) : (_vm.showHelp) ? _vm._c('div', {
    staticClass: "ui-checkbox-group__feedback-text"
  }, [_vm._t("help", [_vm._v(_vm._s(_vm.help))])], 2) : _vm._e()]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-53e98d4a", module.exports)
  }
}

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('button', {
    ref: "button",
    staticClass: "ui-fab",
    class: _vm.classes,
    attrs: {
      "aria-label": _vm.ariaLabel || _vm.tooltip
    },
    on: {
      "click": _vm.onClick
    }
  }, [(_vm.icon || _vm.$slots.default) ? _vm._c('div', {
    staticClass: "ui-fab__icon"
  }, [_vm._t("default", [_vm._c('ui-icon', {
    attrs: {
      "icon": _vm.icon
    }
  })])], 2) : _vm._e(), _vm._v(" "), _vm._c('span', {
    staticClass: "ui-fab__focus-ring"
  }), _vm._v(" "), (!_vm.disableRipple) ? _vm._c('ui-ripple-ink', {
    attrs: {
      "trigger": "button"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.tooltip) ? _vm._c('ui-tooltip', {
    attrs: {
      "trigger": "button",
      "open-on": _vm.openTooltipOn,
      "position": _vm.tooltipPosition
    }
  }, [_vm._v(_vm._s(_vm.tooltip))]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-58451726", module.exports)
  }
}

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ui-calendar-week"
  }, _vm._l((_vm.dates), function(date, index) {
    return _vm._c('div', {
      key: index,
      staticClass: "ui-calendar-week__date",
      class: _vm.getDateClasses(date),
      attrs: {
        "tabindex": (_vm.visible && !_vm.isDateDisabled(date)) ? 0 : null
      },
      on: {
        "click": function($event) {
          _vm.selectDate(date)
        },
        "keydown": function($event) {
          if (_vm._k($event.keyCode, "enter", 13)) { return; }
          _vm.selectDate(date)
        }
      }
    }, [_vm._v("\n        " + _vm._s(_vm.getDayOfMonth(date)) + "\n    ")])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-60cc7cc3", module.exports)
  }
}

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ui-tabs",
    class: _vm.classes
  }, [_vm._c('div', {
    staticClass: "ui-tabs__header"
  }, [_vm._c('ul', {
    ref: "tabsContainer",
    staticClass: "ui-tabs__header-items",
    attrs: {
      "role": "tablist"
    }
  }, _vm._l((_vm.tabs), function(tab) {
    return _vm._c('ui-tab-header-item', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (tab.show),
        expression: "tab.show"
      }],
      ref: "tabElements",
      refInFor: true,
      attrs: {
        "active": _vm.activeTabId === tab.id,
        "disable-ripple": _vm.disableRipple,
        "disabled": tab.disabled,
        "icon-props": tab.iconProps,
        "icon": tab.icon,
        "id": tab.id,
        "show": tab.show,
        "title": tab.title,
        "type": _vm.type
      },
      nativeOn: {
        "click": function($event) {
          _vm.selectTab($event, tab)
        },
        "keydown": [function($event) {
          if (_vm._k($event.keyCode, "left", 37)) { return; }
          _vm.selectPreviousTab($event)
        }, function($event) {
          if (_vm._k($event.keyCode, "right", 39)) { return; }
          _vm.selectNextTab($event)
        }]
      }
    }, [(tab.$slots.icon) ? _vm._c('render-vnodes', {
      attrs: {
        "nodes": tab.$slots.icon
      },
      slot: "icon"
    }) : _vm._e()], 1)
  })), _vm._v(" "), (_vm.tabContainerWidth != 0) ? _vm._c('div', {
    staticClass: "ui-tabs__active-tab-indicator",
    style: ({
      'left': _vm.indicatorLeft,
      'right': _vm.indicatorRight
    })
  }) : _vm._e()]), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-tabs__body"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6259e2ef", module.exports)
  }
}

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('label', {
    staticClass: "ui-switch",
    class: _vm.classes
  }, [_vm._c('div', {
    staticClass: "ui-switch__input-wrapper"
  }, [_vm._c('input', {
    staticClass: "ui-switch__input",
    attrs: {
      "type": "checkbox",
      "disabled": _vm.disabled,
      "name": _vm.name
    },
    domProps: {
      "checked": _vm.isChecked,
      "value": _vm.submittedValue
    },
    on: {
      "blur": _vm.onBlur,
      "change": _vm.onChange,
      "click": _vm.onClick,
      "focus": _vm.onFocus
    }
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-switch__track"
  })]), _vm._v(" "), (_vm.label || _vm.$slots.default) ? _vm._c('div', {
    staticClass: "ui-switch__label-text"
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ui-switch__thumb"
  }, [_vm._c('div', {
    staticClass: "ui-switch__focus-ring"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-629f0965", module.exports)
  }
}

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('li', {
    ref: "menuOption",
    staticClass: "ui-menu-option",
    class: _vm.classes,
    attrs: {
      "role": "menu-item",
      "tabindex": (_vm.isDivider || _vm.disabled) ? null : '0'
    }
  }, [(!_vm.isDivider) ? _vm._t("default", [_vm._c('div', {
    staticClass: "ui-menu-option__content"
  }, [(_vm.icon) ? _vm._c('ui-icon', {
    staticClass: "ui-menu-option__icon",
    attrs: {
      "icon-set": _vm.iconProps.iconSet,
      "icon": _vm.icon,
      "remove-text": _vm.iconProps.removeText,
      "use-svg": _vm.iconProps.useSvg
    }
  }) : _vm._e(), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-menu-option__text"
  }, [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), (_vm.secondaryText) ? _vm._c('div', {
    staticClass: "ui-menu-option__secondary-text"
  }, [_vm._v("\n                " + _vm._s(_vm.secondaryText) + "\n            ")]) : _vm._e()], 1)]) : _vm._e(), _vm._v(" "), (!_vm.disabled && !_vm.isDivider && !_vm.disableRipple) ? _vm._c('ui-ripple-ink', {
    attrs: {
      "trigger": "menuOption"
    }
  }) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6515e465", module.exports)
  }
}

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('span', {
    staticClass: "ui-icon",
    class: [_vm.iconSet, _vm.icon],
    attrs: {
      "aria-label": _vm.ariaLabel
    }
  }, [(_vm.useSvg) ? _vm._c('svg', {
    staticClass: "ui-icon__svg"
  }, [_vm._c('use', {
    attrs: {
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xlink:href": '#' + _vm.icon
    }
  })]) : _vm._t("default", [_vm._v(_vm._s(_vm.removeText ? null : _vm.icon))])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6b61f66a", module.exports)
  }
}

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('label', {
    staticClass: "ui-checkbox",
    class: _vm.classes
  }, [_vm._c('input', {
    staticClass: "ui-checkbox__input",
    attrs: {
      "type": "checkbox",
      "disabled": _vm.disabled,
      "name": _vm.name
    },
    domProps: {
      "checked": _vm.isChecked,
      "value": _vm.submittedValue
    },
    on: {
      "blur": _vm.onBlur,
      "change": _vm.onChange,
      "click": _vm.onClick,
      "focus": _vm.onFocus
    }
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), (_vm.label || _vm.$slots.default) ? _vm._c('div', {
    staticClass: "ui-checkbox__label-text"
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ui-checkbox__checkmark"
  }, [_vm._c('div', {
    staticClass: "ui-checkbox__focus-ring"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6d48e798", module.exports)
  }
}

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('ul', {
    staticClass: "ui-menu",
    class: _vm.classes,
    attrs: {
      "role": "menu"
    }
  }, [_vm._l((_vm.options), function(option) {
    return _vm._c('ui-menu-option', {
      attrs: {
        "disable-ripple": _vm.disableRipple,
        "disabled": option[_vm.keys.disabled],
        "icon-props": _vm.iconProps || option[_vm.keys.iconProps],
        "icon": _vm.hasIcons ? option[_vm.keys.icon] : null,
        "label": option[_vm.keys.type] === 'divider' ? null : option[_vm.keys.label] || option,
        "secondary-text": _vm.hasSecondaryText ? option[_vm.keys.secondaryText] : null,
        "type": option[_vm.keys.type]
      },
      nativeOn: {
        "click": function($event) {
          _vm.selectOption(option)
        },
        "keydown": [function($event) {
          if (_vm._k($event.keyCode, "enter", 13)) { return; }
          $event.preventDefault();
          _vm.selectOption(option)
        }, function($event) {
          if (_vm._k($event.keyCode, "esc", 27)) { return; }
          _vm.closeMenu($event)
        }]
      }
    }, [_vm._t("option", null, {
      option: option
    })], 2)
  }), _vm._v(" "), (_vm.containFocus) ? _vm._c('div', {
    staticClass: "ui-menu__focus-redirector",
    attrs: {
      "tabindex": "0"
    },
    on: {
      "focus": _vm.redirectFocus
    }
  }) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7360ec50", module.exports)
  }
}

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('button', {
    ref: "button",
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
  }, [_vm._c('div', {
    staticClass: "ui-close-button__icon"
  }, [_vm._c('ui-icon', [_vm._c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_vm._c('path', {
    attrs: {
      "d": "M18.984 6.422L13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z"
    }
  })])])], 1), _vm._v(" "), _vm._c('span', {
    staticClass: "ui-close-button__focus-ring"
  }), _vm._v(" "), (!_vm.disableRipple && !_vm.disabled) ? _vm._c('ui-ripple-ink', {
    attrs: {
      "trigger": "button"
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-73775a2e", module.exports)
  }
}

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ui-datepicker",
    class: _vm.classes
  }, [_vm._c('input', {
    staticClass: "ui-datepicker__hidden-input",
    attrs: {
      "type": "hidden",
      "name": _vm.name
    },
    domProps: {
      "value": _vm.submittedValue
    }
  }), _vm._v(" "), (_vm.icon || _vm.$slots.icon) ? _vm._c('div', {
    staticClass: "ui-datepicker__icon-wrapper"
  }, [_vm._t("icon", [_vm._c('ui-icon', {
    attrs: {
      "icon": _vm.icon
    }
  })])], 2) : _vm._e(), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-datepicker__content"
  }, [_vm._c('div', {
    ref: "label",
    staticClass: "ui-datepicker__label",
    attrs: {
      "tabindex": _vm.disabled ? null : '0'
    },
    on: {
      "click": _vm.onClick,
      "focus": _vm.onFocus,
      "keydown": [function($event) {
        if (_vm._k($event.keyCode, "enter", 13)) { return; }
        $event.preventDefault();
        _vm.openPicker($event)
      }, function($event) {
        if (_vm._k($event.keyCode, "space", 32)) { return; }
        $event.preventDefault();
        _vm.openPicker($event)
      }, function($event) {
        if (_vm._k($event.keyCode, "tab", 9)) { return; }
        _vm.onBlur($event)
      }]
    }
  }, [(_vm.label || _vm.$slots.default) ? _vm._c('div', {
    staticClass: "ui-datepicker__label-text",
    class: _vm.labelClasses
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2) : _vm._e(), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-datepicker__display"
  }, [_vm._c('div', {
    staticClass: "ui-datepicker__display-value",
    class: {
      'is-placeholder': !_vm.hasDisplayText
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.hasDisplayText ? _vm.displayText : (_vm.hasFloatingLabel && _vm.isLabelInline) ? null : _vm.placeholder) + "\n                ")]), _vm._v(" "), (_vm.usesPopover && !_vm.disabled) ? _vm._c('ui-icon', {
    staticClass: "ui-datepicker__dropdown-button"
  }, [_vm._c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_vm._c('path', {
    attrs: {
      "d": "M6.984 9.984h10.03L12 15z"
    }
  })])]) : _vm._e()], 1)]), _vm._v(" "), (_vm.hasFeedback) ? _vm._c('div', {
    staticClass: "ui-datepicker__feedback"
  }, [(_vm.showError) ? _vm._c('div', {
    staticClass: "ui-datepicker__feedback-text"
  }, [_vm._t("error", [_vm._v(_vm._s(_vm.error))])], 2) : (_vm.showHelp) ? _vm._c('div', {
    staticClass: "ui-datepicker__feedback-text"
  }, [_vm._t("help", [_vm._v(_vm._s(_vm.help))])], 2) : _vm._e()]) : _vm._e()]), _vm._v(" "), (_vm.usesModal && !_vm.disabled) ? _vm._c('ui-modal', {
    ref: "modal",
    attrs: {
      "remove-header": ""
    },
    on: {
      "close": _vm.onPickerClose,
      "open": _vm.onPickerOpen
    }
  }, [_vm._c('ui-calendar', {
    attrs: {
      "color": _vm.color,
      "date-filter": _vm.dateFilter,
      "lang": _vm.lang,
      "max-date": _vm.maxDate,
      "min-date": _vm.minDate,
      "orientation": _vm.orientation,
      "value": _vm.value
    },
    on: {
      "date-select": _vm.onDateSelect
    }
  }, [_vm._c('div', {
    staticClass: "ui-datepicker__modal-buttons",
    slot: "footer"
  }, [_vm._c('ui-button', {
    attrs: {
      "type": "secondary",
      "color": _vm.color
    },
    on: {
      "click": function($event) {
        _vm.$refs.modal.close()
      }
    }
  }, [_vm._v(_vm._s(_vm.okButtonText))]), _vm._v(" "), _vm._c('ui-button', {
    attrs: {
      "type": "secondary",
      "color": _vm.color
    },
    on: {
      "click": _vm.onPickerCancel
    }
  }, [_vm._v(_vm._s(_vm.cancelButtonText))])], 1)])], 1) : _vm._e(), _vm._v(" "), (_vm.usesPopover && !_vm.disabled) ? _vm._c('ui-popover', {
    ref: "popover",
    attrs: {
      "contain-focus": "",
      "trigger": "label"
    },
    on: {
      "close": _vm.onPickerClose,
      "open": _vm.onPickerOpen
    }
  }, [_vm._c('ui-calendar', {
    attrs: {
      "color": _vm.color,
      "date-filter": _vm.dateFilter,
      "lang": _vm.lang,
      "max-date": _vm.maxDate,
      "min-date": _vm.minDate,
      "orientation": _vm.orientation,
      "value": _vm.value
    },
    on: {
      "date-select": _vm.onDateSelect
    }
  })], 1) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7cb5576d", module.exports)
  }
}

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('label', {
    ref: "label",
    staticClass: "ui-fileupload",
    class: _vm.classes
  }, [_vm._c('input', {
    ref: "input",
    staticClass: "ui-fileupload__input",
    attrs: {
      "type": "file",
      "accept": _vm.accept,
      "disabled": _vm.disabled,
      "multiple": _vm.multiple,
      "name": _vm.name,
      "required": _vm.required
    },
    on: {
      "blur": _vm.onBlur,
      "change": _vm.onChange,
      "focus": _vm.onFocus
    }
  }), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-fileupload__content"
  }, [_vm._c('div', {
    staticClass: "ui-fileupload__icon"
  }, [_vm._t("icon", [_vm._c('ui-icon', [_vm._c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_vm._c('path', {
    attrs: {
      "d": "M5.016 18h13.969v2.016H5.016V18zM9 15.984v-6H5.016L12 3l6.984 6.984H15v6H9z"
    }
  })])])])], 2), _vm._v(" "), (_vm.hasSelection) ? _vm._c('span', {
    staticClass: "ui-fileupload__display-text"
  }, [_vm._v(_vm._s(_vm.displayText))]) : _vm._t("default", [_vm._v(_vm._s(_vm.placeholder))])], 2), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-fileupload__focus-ring",
    style: (_vm.focusRingStyle)
  }), _vm._v(" "), (!_vm.disableRipple && !_vm.disabled) ? _vm._c('ui-ripple-ink', {
    attrs: {
      "trigger": "label"
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8595f0a4", module.exports)
  }
}

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('button', {
    ref: "button",
    staticClass: "ui-icon-button",
    class: _vm.classes,
    attrs: {
      "aria-label": _vm.ariaLabel || _vm.tooltip,
      "disabled": _vm.disabled || _vm.loading,
      "type": _vm.buttonType
    },
    on: {
      "click": _vm.onClick
    }
  }, [(_vm.icon || _vm.$slots.default) ? _vm._c('div', {
    staticClass: "ui-icon-button__icon"
  }, [_vm._t("default", [_vm._c('ui-icon', {
    attrs: {
      "icon": _vm.icon
    }
  })])], 2) : _vm._e(), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-icon-button__focus-ring"
  }), _vm._v(" "), _vm._c('ui-progress-circular', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticClass: "ui-icon-button__progress",
    attrs: {
      "color": _vm.progressColor,
      "size": _vm.size === 'large' ? 24 : 18,
      "stroke": 4.5
    }
  }), _vm._v(" "), (!_vm.disableRipple && !_vm.disabled) ? _vm._c('ui-ripple-ink', {
    attrs: {
      "trigger": "button"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.hasDropdown) ? _vm._c('ui-popover', {
    ref: "dropdown",
    attrs: {
      "trigger": "button",
      "dropdown-position": _vm.dropdownPosition,
      "open-on": _vm.openDropdownOn
    },
    on: {
      "close": _vm.onDropdownClose,
      "open": _vm.onDropdownOpen
    }
  }, [_vm._t("dropdown")], 2) : _vm._e(), _vm._v(" "), (_vm.tooltip) ? _vm._c('ui-tooltip', {
    attrs: {
      "trigger": "button",
      "open-on": _vm.openTooltipOn,
      "position": _vm.tooltipPosition
    }
  }, [_vm._v(_vm._s(_vm.tooltip))]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8ced2988", module.exports)
  }
}

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ui-slider",
    class: _vm.classes,
    attrs: {
      "role": "slider",
      "aria-valuemax": 100,
      "aria-valuemin": 0,
      "aria-valuenow": _vm.localValue,
      "tabindex": _vm.disabled ? null : 0
    },
    on: {
      "blur": _vm.onBlur,
      "focus": _vm.onFocus,
      "keydown": [function($event) {
        if (_vm._k($event.keyCode, "down", 40)) { return; }
        $event.preventDefault();
        _vm.decrementValue($event)
      }, function($event) {
        if (_vm._k($event.keyCode, "left", 37)) { return; }
        $event.preventDefault();
        _vm.decrementValue($event)
      }, function($event) {
        if (_vm._k($event.keyCode, "right", 39)) { return; }
        $event.preventDefault();
        _vm.incrementValue($event)
      }, function($event) {
        if (_vm._k($event.keyCode, "up", 38)) { return; }
        $event.preventDefault();
        _vm.incrementValue($event)
      }]
    }
  }, [(_vm.name) ? _vm._c('input', {
    staticClass: "ui-slider__hidden-input",
    attrs: {
      "type": "hidden",
      "name": _vm.name
    },
    domProps: {
      "value": _vm.value
    }
  }) : _vm._e(), _vm._v(" "), (_vm.hasIcon) ? _vm._c('div', {
    staticClass: "ui-slider__icon"
  }, [_vm._t("icon", [_vm._c('ui-icon', {
    attrs: {
      "icon": _vm.icon
    }
  })])], 2) : _vm._e(), _vm._v(" "), _vm._c('div', {
    ref: "track",
    staticClass: "ui-slider__track",
    on: {
      "mousedown": _vm.onDragStart,
      "touchstart": _vm.onDragStart
    }
  }, [_vm._c('div', {
    staticClass: "ui-slider__track-background"
  }, _vm._l((_vm.snapPoints), function(point) {
    return (_vm.snapToSteps) ? _vm._c('span', {
      staticClass: "ui-slider__snap-point",
      style: ({
        left: point + '%'
      })
    }) : _vm._e()
  })), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-slider__track-fill",
    style: (_vm.fillStyle)
  }), _vm._v(" "), _vm._c('div', {
    ref: "thumb",
    staticClass: "ui-slider__thumb",
    style: (_vm.thumbStyle)
  }, [(_vm.showMarker) ? _vm._c('div', {
    staticClass: "ui-slider__marker"
  }, [_vm._c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 24 24",
      "width": "36",
      "height": "36"
    }
  }, [_vm._c('path', {
    attrs: {
      "d": "M11 .5c-1.7.2-3.4.9-4.7 2-1.1.9-2 2-2.5 3.2-1.2 2.4-1.2 5.1-.1 7.7 1.1 2.6 2.8 5 5.3 7.5 1.2 1.2 2.8 2.7 3 2.7 0 0 .3-.2.6-.5 3.2-2.7 5.6-5.6 7.1-8.5.8-1.5 1.1-2.6 1.3-3.8.2-1.4 0-2.9-.5-4.3-1.2-3.2-4.1-5.4-7.5-5.8-.5-.2-1.5-.2-2-.2z"
    }
  })]), _vm._v(" "), _vm._c('span', {
    staticClass: "ui-slider__marker-text"
  }, [_vm._v(_vm._s(_vm.markerText))])]) : _vm._e()])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8d7da6dc", module.exports)
  }
}

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    ref: "tooltip",
    staticClass: "ui-tooltip"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b226babc", module.exports)
  }
}

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ui-collapsible",
    class: _vm.classes
  }, [_vm._c('div', {
    ref: "header",
    staticClass: "ui-collapsible__header",
    attrs: {
      "aria-controls": _vm.id,
      "aria-expanded": _vm.isOpen ? 'true' : 'false',
      "tabindex": _vm.disabled ? null : 0
    },
    on: {
      "click": _vm.toggleCollapsible,
      "keydown": [function($event) {
        if (_vm._k($event.keyCode, "enter", 13)) { return; }
        $event.preventDefault();
        _vm.toggleCollapsible($event)
      }, function($event) {
        if (_vm._k($event.keyCode, "space", 32)) { return; }
        $event.preventDefault();
        _vm.toggleCollapsible($event)
      }]
    }
  }, [_vm._c('div', {
    staticClass: "ui-collapsible__header-content"
  }, [_vm._t("header", [_vm._v(_vm._s(_vm.title))])], 2), _vm._v(" "), (!_vm.removeIcon) ? _vm._c('ui-icon', {
    staticClass: "ui-collapsible__header-icon"
  }, [_vm._c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_vm._c('path', {
    attrs: {
      "d": "M7.406 7.828L12 12.422l4.594-4.594L18 9.234l-6 6-6-6z"
    }
  })])]) : _vm._e(), _vm._v(" "), (!_vm.disableRipple && !_vm.disabled && _vm.isReady) ? _vm._c('ui-ripple-ink', {
    attrs: {
      "trigger": "header"
    }
  }) : _vm._e()], 1), _vm._v(" "), _vm._c('transition', {
    attrs: {
      "name": "ui-collapsible--transition-toggle"
    },
    on: {
      "after-enter": _vm.onEnter,
      "after-leave": _vm.onLeave
    }
  }, [_vm._c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isOpen),
      expression: "isOpen"
    }],
    ref: "body",
    staticClass: "ui-collapsible__body-wrapper",
    style: ({
      'height': _vm.calculatedHeight
    })
  }, [_vm._c('div', {
    staticClass: "ui-collapsible__body",
    attrs: {
      "aria-hidden": _vm.isOpen ? null : 'true',
      "id": _vm.id
    }
  }, [_vm._t("default")], 2)])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c1d568ae", module.exports)
  }
}

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('button', {
    ref: "button",
    staticClass: "ui-button",
    class: _vm.classes,
    attrs: {
      "disabled": _vm.disabled || _vm.loading,
      "type": _vm.buttonType
    },
    on: {
      "click": _vm.onClick,
      "~focus": function($event) {
        _vm.onFocus($event)
      }
    }
  }, [_vm._c('div', {
    staticClass: "ui-button__content"
  }, [(_vm.icon || _vm.$slots.icon) ? _vm._c('div', {
    staticClass: "ui-button__icon"
  }, [_vm._t("icon", [_vm._c('ui-icon', {
    attrs: {
      "icon": _vm.icon
    }
  })])], 2) : _vm._e(), _vm._v(" "), _vm._t("default"), _vm._v(" "), (_vm.hasDropdown && _vm.iconPosition !== 'right') ? _vm._c('ui-icon', {
    staticClass: "ui-button__dropdown-icon"
  }, [_vm._c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_vm._c('path', {
    attrs: {
      "d": "M6.984 9.984h10.03L12 15z"
    }
  })])]) : _vm._e()], 2), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-button__focus-ring",
    style: (_vm.focusRingStyle)
  }), _vm._v(" "), _vm._c('ui-progress-circular', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticClass: "ui-button__progress",
    attrs: {
      "disable-transition": "",
      "color": _vm.progressColor,
      "size": 18,
      "stroke": 4.5
    }
  }), _vm._v(" "), (!_vm.disableRipple && !_vm.disabled) ? _vm._c('ui-ripple-ink', {
    attrs: {
      "trigger": "button"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.hasDropdown) ? _vm._c('ui-popover', {
    ref: "dropdown",
    attrs: {
      "trigger": "button",
      "dropdown-position": _vm.dropdownPosition,
      "open-on": _vm.openDropdownOn
    },
    on: {
      "close": _vm.onDropdownClose,
      "open": _vm.onDropdownOpen
    }
  }, [_vm._t("dropdown")], 2) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e69d6b3a", module.exports)
  }
}

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ui-confirm"
  }, [_vm._c('ui-modal', {
    ref: "modal",
    attrs: {
      "role": "alertdialog",
      "dismiss-on": _vm.dismissOn,
      "dismissible": !_vm.loading,
      "title": _vm.title,
      "transition": _vm.transition
    },
    on: {
      "close": _vm.onModalClose,
      "open": _vm.onModalOpen
    }
  }, [_vm._c('div', {
    staticClass: "ui-confirm__message"
  }, [_vm._t("default")], 2), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-confirm__footer",
    slot: "footer"
  }, [_vm._c('ui-button', {
    ref: "confirmButton",
    attrs: {
      "color": _vm.confirmButtonColor,
      "icon": _vm.confirmButtonIcon,
      "loading": _vm.loading
    },
    on: {
      "click": _vm.confirm
    }
  }, [_vm._v(_vm._s(_vm.confirmButtonText))]), _vm._v(" "), _vm._c('ui-button', {
    ref: "denyButton",
    attrs: {
      "disabled": _vm.loading,
      "icon": _vm.denyButtonIcon
    },
    on: {
      "click": _vm.deny
    }
  }, [_vm._v(_vm._s(_vm.denyButtonText))])], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ed03da42", module.exports)
  }
}

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "ui-popover",
    class: {
      'is-raised': _vm.raised
    },
    attrs: {
      "role": "dialog",
      "tabindex": "-1"
    },
    on: {
      "keydown": function($event) {
        if (_vm._k($event.keyCode, "esc", 27)) { return; }
        _vm.closeDropdown($event)
      }
    }
  }, [_vm._t("default"), _vm._v(" "), _vm._c('div', {
    staticClass: "ui-popover__focus-redirector",
    attrs: {
      "tabindex": "0"
    },
    on: {
      "focus": _vm.restrictFocus
    }
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fb51df78", module.exports)
  }
}

/***/ }),
/* 255 */
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
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UiTooltip = exports.UiToolbar = exports.UiTextbox = exports.UiTabs = exports.UiTab = exports.UiSwitch = exports.UiSnackbarContainer = exports.UiSnackbar = exports.UiSlider = exports.UiSelect = exports.UiRippleInk = exports.UiRadioGroup = exports.UiRadio = exports.UiProgressLinear = exports.UiProgressCircular = exports.UiPreloader = exports.UiPopover = exports.UiModal = exports.UiMenu = exports.UiIconButton = exports.UiIcon = exports.UiFileupload = exports.UiFab = exports.UiDatepicker = exports.UiConfirm = exports.UiCollapsible = exports.UiCheckboxGroup = exports.UiCheckbox = exports.UiCalendar = exports.UiButton = exports.UiAutocomplete = exports.UiAlert = undefined;

__webpack_require__(65);

var _UiAlert = __webpack_require__(66);

var _UiAlert2 = _interopRequireDefault(_UiAlert);

var _UiAutocomplete = __webpack_require__(67);

var _UiAutocomplete2 = _interopRequireDefault(_UiAutocomplete);

var _UiButton = __webpack_require__(14);

var _UiButton2 = _interopRequireDefault(_UiButton);

var _UiCalendar = __webpack_require__(42);

var _UiCalendar2 = _interopRequireDefault(_UiCalendar);

var _UiCheckbox = __webpack_require__(43);

var _UiCheckbox2 = _interopRequireDefault(_UiCheckbox);

var _UiCheckboxGroup = __webpack_require__(68);

var _UiCheckboxGroup2 = _interopRequireDefault(_UiCheckboxGroup);

var _UiCollapsible = __webpack_require__(69);

var _UiCollapsible2 = _interopRequireDefault(_UiCollapsible);

var _UiConfirm = __webpack_require__(70);

var _UiConfirm2 = _interopRequireDefault(_UiConfirm);

var _UiDatepicker = __webpack_require__(71);

var _UiDatepicker2 = _interopRequireDefault(_UiDatepicker);

var _UiFab = __webpack_require__(72);

var _UiFab2 = _interopRequireDefault(_UiFab);

var _UiFileupload = __webpack_require__(73);

var _UiFileupload2 = _interopRequireDefault(_UiFileupload);

var _UiIcon = __webpack_require__(1);

var _UiIcon2 = _interopRequireDefault(_UiIcon);

var _UiIconButton = __webpack_require__(25);

var _UiIconButton2 = _interopRequireDefault(_UiIconButton);

var _UiMenu = __webpack_require__(74);

var _UiMenu2 = _interopRequireDefault(_UiMenu);

var _UiModal = __webpack_require__(26);

var _UiModal2 = _interopRequireDefault(_UiModal);

var _UiPopover = __webpack_require__(15);

var _UiPopover2 = _interopRequireDefault(_UiPopover);

var _UiPreloader = __webpack_require__(75);

var _UiPreloader2 = _interopRequireDefault(_UiPreloader);

var _UiProgressCircular = __webpack_require__(16);

var _UiProgressCircular2 = _interopRequireDefault(_UiProgressCircular);

var _UiProgressLinear = __webpack_require__(44);

var _UiProgressLinear2 = _interopRequireDefault(_UiProgressLinear);

var _UiRadio = __webpack_require__(45);

var _UiRadio2 = _interopRequireDefault(_UiRadio);

var _UiRadioGroup = __webpack_require__(76);

var _UiRadioGroup2 = _interopRequireDefault(_UiRadioGroup);

var _UiRippleInk = __webpack_require__(3);

var _UiRippleInk2 = _interopRequireDefault(_UiRippleInk);

var _UiSelect = __webpack_require__(77);

var _UiSelect2 = _interopRequireDefault(_UiSelect);

var _UiSlider = __webpack_require__(78);

var _UiSlider2 = _interopRequireDefault(_UiSlider);

var _UiSnackbar = __webpack_require__(46);

var _UiSnackbar2 = _interopRequireDefault(_UiSnackbar);

var _UiSnackbarContainer = __webpack_require__(79);

var _UiSnackbarContainer2 = _interopRequireDefault(_UiSnackbarContainer);

var _UiSwitch = __webpack_require__(80);

var _UiSwitch2 = _interopRequireDefault(_UiSwitch);

var _UiTab = __webpack_require__(81);

var _UiTab2 = _interopRequireDefault(_UiTab);

var _UiTabs = __webpack_require__(82);

var _UiTabs2 = _interopRequireDefault(_UiTabs);

var _UiTextbox = __webpack_require__(83);

var _UiTextbox2 = _interopRequireDefault(_UiTextbox);

var _UiToolbar = __webpack_require__(84);

var _UiToolbar2 = _interopRequireDefault(_UiToolbar);

var _UiTooltip = __webpack_require__(27);

var _UiTooltip2 = _interopRequireDefault(_UiTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Keen = {
    UiAlert: _UiAlert2.default,
    UiAutocomplete: _UiAutocomplete2.default,
    UiButton: _UiButton2.default,
    UiCalendar: _UiCalendar2.default,
    UiCheckbox: _UiCheckbox2.default,
    UiCheckboxGroup: _UiCheckboxGroup2.default,
    UiCollapsible: _UiCollapsible2.default,
    UiConfirm: _UiConfirm2.default,
    UiDatepicker: _UiDatepicker2.default,
    UiFab: _UiFab2.default,
    UiFileupload: _UiFileupload2.default,
    UiIcon: _UiIcon2.default,
    UiIconButton: _UiIconButton2.default,
    UiMenu: _UiMenu2.default,
    UiModal: _UiModal2.default,
    UiPopover: _UiPopover2.default,
    UiPreloader: _UiPreloader2.default,
    UiProgressCircular: _UiProgressCircular2.default,
    UiProgressLinear: _UiProgressLinear2.default,
    UiRadio: _UiRadio2.default,
    UiRadioGroup: _UiRadioGroup2.default,
    UiRippleInk: _UiRippleInk2.default,
    UiSelect: _UiSelect2.default,
    UiSlider: _UiSlider2.default,
    UiSnackbar: _UiSnackbar2.default,
    UiSnackbarContainer: _UiSnackbarContainer2.default,
    UiSwitch: _UiSwitch2.default,
    UiTab: _UiTab2.default,
    UiTabs: _UiTabs2.default,
    UiTextbox: _UiTextbox2.default,
    UiToolbar: _UiToolbar2.default,
    UiTooltip: _UiTooltip2.default,

    install: function install(Vue) {
        Vue.component('ui-alert', _UiAlert2.default);
        Vue.component('ui-autocomplete', _UiAutocomplete2.default);
        Vue.component('ui-button', _UiButton2.default);
        Vue.component('ui-calendar', _UiCalendar2.default);
        Vue.component('ui-checkbox', _UiCheckbox2.default);
        Vue.component('ui-checkbox-group', _UiCheckboxGroup2.default);
        Vue.component('ui-collapsible', _UiCollapsible2.default);
        Vue.component('ui-confirm', _UiConfirm2.default);
        Vue.component('ui-datepicker', _UiDatepicker2.default);
        Vue.component('ui-fab', _UiFab2.default);
        Vue.component('ui-fileupload', _UiFileupload2.default);
        Vue.component('ui-icon', _UiIcon2.default);
        Vue.component('ui-icon-button', _UiIconButton2.default);
        Vue.component('ui-menu', _UiMenu2.default);
        Vue.component('ui-modal', _UiModal2.default);
        Vue.component('ui-popover', _UiPopover2.default);
        Vue.component('ui-preloader', _UiPreloader2.default);
        Vue.component('ui-progress-circular', _UiProgressCircular2.default);
        Vue.component('ui-progress-linear', _UiProgressLinear2.default);
        Vue.component('ui-radio', _UiRadio2.default);
        Vue.component('ui-radio-group', _UiRadioGroup2.default);
        Vue.component('ui-ripple-ink', _UiRippleInk2.default);
        Vue.component('ui-select', _UiSelect2.default);
        Vue.component('ui-slider', _UiSlider2.default);
        Vue.component('ui-snackbar', _UiSnackbar2.default);
        Vue.component('ui-snackbar-container', _UiSnackbarContainer2.default);
        Vue.component('ui-switch', _UiSwitch2.default);
        Vue.component('ui-tab', _UiTab2.default);
        Vue.component('ui-tabs', _UiTabs2.default);
        Vue.component('ui-textbox', _UiTextbox2.default);
        Vue.component('ui-toolbar', _UiToolbar2.default);
        Vue.component('ui-tooltip', _UiTooltip2.default);
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Keen);
}

exports.default = Keen;
exports.UiAlert = _UiAlert2.default;
exports.UiAutocomplete = _UiAutocomplete2.default;
exports.UiButton = _UiButton2.default;
exports.UiCalendar = _UiCalendar2.default;
exports.UiCheckbox = _UiCheckbox2.default;
exports.UiCheckboxGroup = _UiCheckboxGroup2.default;
exports.UiCollapsible = _UiCollapsible2.default;
exports.UiConfirm = _UiConfirm2.default;
exports.UiDatepicker = _UiDatepicker2.default;
exports.UiFab = _UiFab2.default;
exports.UiFileupload = _UiFileupload2.default;
exports.UiIcon = _UiIcon2.default;
exports.UiIconButton = _UiIconButton2.default;
exports.UiMenu = _UiMenu2.default;
exports.UiModal = _UiModal2.default;
exports.UiPopover = _UiPopover2.default;
exports.UiPreloader = _UiPreloader2.default;
exports.UiProgressCircular = _UiProgressCircular2.default;
exports.UiProgressLinear = _UiProgressLinear2.default;
exports.UiRadio = _UiRadio2.default;
exports.UiRadioGroup = _UiRadioGroup2.default;
exports.UiRippleInk = _UiRippleInk2.default;
exports.UiSelect = _UiSelect2.default;
exports.UiSlider = _UiSlider2.default;
exports.UiSnackbar = _UiSnackbar2.default;
exports.UiSnackbarContainer = _UiSnackbarContainer2.default;
exports.UiSwitch = _UiSwitch2.default;
exports.UiTab = _UiTab2.default;
exports.UiTabs = _UiTabs2.default;
exports.UiTextbox = _UiTextbox2.default;
exports.UiToolbar = _UiToolbar2.default;
exports.UiTooltip = _UiTooltip2.default;

/***/ })
/******/ ]);
});