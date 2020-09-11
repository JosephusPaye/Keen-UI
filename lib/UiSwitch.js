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
		exports["UiSwitch"] = factory();
	else
		root["KeenUI"] = root["KeenUI"] || {}, root["KeenUI"]["UiSwitch"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 257);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 1:
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

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiSwitch_vue__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ba5ec29c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiSwitch_vue__ = __webpack_require__(203);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(227)
}
var normalizeComponent = __webpack_require__(1)
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

/* harmony default export */ __webpack_exports__["default"] = Component.exports;


/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_util__ = __webpack_require__(62);




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
            isChecked: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers_util__["a" /* looseEqual */])(this.value, this.trueValue) || this.checked,
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
            this.isChecked = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers_util__["a" /* looseEqual */])(this.value, this.trueValue);
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

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.ui-switch {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  height: 2rem;\n  position: relative;\n}\n.ui-switch.is-checked .ui-switch__thumb {\n    -webkit-transform: translateX(0.875rem);\n            transform: translateX(0.875rem);\n}\n.ui-switch.is-disabled .ui-switch__track {\n    background-color: rgba(0, 0, 0, 0.12);\n}\n.ui-switch.is-disabled .ui-switch__thumb {\n    background-color: #bdbdbd;\n    box-shadow: none;\n}\n.ui-switch.is-disabled .ui-switch__input-wrapper,\n  .ui-switch.is-disabled .ui-switch__label-text {\n    color: rgba(0, 0, 0, 0.38);\n    cursor: default;\n}\n.ui-switch__input-wrapper {\n  cursor: pointer;\n  height: 1.25rem;\n  position: relative;\n  width: 2.125rem;\n}\n.ui-switch__input {\n  opacity: 0;\n  position: absolute;\n}\nbody[modality=\"keyboard\"] .ui-switch__input:focus + .ui-switch__thumb .ui-switch__focus-ring {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n.ui-switch__track {\n  background-color: rgba(0, 0, 0, 0.26);\n  border-radius: 0.5rem;\n  height: 0.875rem;\n  position: absolute;\n  top: 0.1875rem;\n  -webkit-transition: background-color 0.1s linear;\n  transition: background-color 0.1s linear;\n  width: 2.125rem;\n}\n.ui-switch__thumb {\n  background-color: #fafafa;\n  border-radius: 50%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  height: 1.25rem;\n  position: absolute;\n  -webkit-transition-duration: 0.2s;\n          transition-duration: 0.2s;\n  -webkit-transition-property: background-color, -webkit-transform;\n  transition-property: background-color, -webkit-transform;\n  transition-property: background-color, transform;\n  transition-property: background-color, transform, -webkit-transform;\n  -webkit-transition-timing-function: ease;\n          transition-timing-function: ease;\n  width: 1.25rem;\n  z-index: 1;\n}\n.ui-switch__focus-ring {\n  background-color: rgba(0, 0, 0, 0.1);\n  border-radius: 50%;\n  height: 2.625rem;\n  left: -0.6875rem;\n  opacity: 0;\n  position: absolute;\n  top: -0.6875rem;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transition: background-color 0.2s ease, opacity 0.15s ease, -webkit-transform 0.15s ease;\n  transition: background-color 0.2s ease, opacity 0.15s ease, -webkit-transform 0.15s ease;\n  transition: background-color 0.2s ease, transform 0.15s ease, opacity 0.15s ease;\n  transition: background-color 0.2s ease, transform 0.15s ease, opacity 0.15s ease, -webkit-transform 0.15s ease;\n  width: 2.625rem;\n  z-index: -1;\n}\n.ui-switch__label-text {\n  cursor: pointer;\n  font-size: 0.9375rem;\n  margin-left: 1rem;\n}\n.ui-switch--switch-position-right .ui-switch__label-text {\n  margin-left: 0;\n  margin-right: auto;\n  -webkit-box-ordinal-group: 0;\n      -ms-flex-order: -1;\n          order: -1;\n}\n.ui-switch--color-primary.is-checked:not(.is-disabled) .ui-switch__track {\n  background-color: rgba(33, 150, 243, 0.5);\n}\n.ui-switch--color-primary.is-checked:not(.is-disabled) .ui-switch__thumb {\n  background-color: #2196f3;\n}\n.ui-switch--color-primary.is-checked:not(.is-disabled) .ui-switch__focus-ring {\n  background-color: rgba(33, 150, 243, 0.2);\n}\n.ui-switch--color-accent.is-checked:not(.is-disabled) .ui-switch__track {\n  background-color: rgba(213, 0, 249, 0.5);\n}\n.ui-switch--color-accent.is-checked:not(.is-disabled) .ui-switch__thumb {\n  background-color: #d500f9;\n}\n.ui-switch--color-accent.is-checked:not(.is-disabled) .ui-switch__focus-ring {\n  background-color: rgba(213, 0, 249, 0.2);\n}\n", ""]);

// exports


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(3)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 203:
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

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(175);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("53d1292a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ba5ec29c\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiSwitch.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ba5ec29c\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiSwitch.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(122);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isObject */
/* harmony export (immutable) */ __webpack_exports__["a"] = looseEqual;
/* harmony export (immutable) */ __webpack_exports__["b"] = looseIndexOf;
/* unused harmony export startsWith */
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

/***/ })

/******/ });
});