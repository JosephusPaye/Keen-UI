/*!
 * Keen UI v1.3.2 (https://github.com/JosephusPaye/keen-ui)
 * (c) 2021 Josephus Paye II
 * Released under the MIT License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["UiSlider"] = factory();
	else
		root["KeenUI"] = root["KeenUI"] || {}, root["KeenUI"]["UiSlider"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 254);
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

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("c3ae284a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-39a27af7\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiIcon.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-39a27af7\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiIcon.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiSlider_vue__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0d1a7c42_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiSlider_vue__ = __webpack_require__(182);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(206)
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

/* harmony default export */ __webpack_exports__["default"] = Component.exports;


/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__ = __webpack_require__(6);
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
        UiIcon: __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__["default"]
    }
};

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.ui-slider {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  outline: none;\n}\n.ui-slider:not(.is-disabled).is-active:not(.has-marker) .ui-slider__thumb::before, .ui-slider:not(.is-disabled).is-dragging:not(.has-marker) .ui-slider__thumb::before {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n.ui-slider:not(.is-disabled).is-active .ui-slider__marker, .ui-slider:not(.is-disabled).is-dragging .ui-slider__marker {\n    opacity: 1;\n    -webkit-transform: scale(1) translateY(-1.625rem);\n            transform: scale(1) translateY(-1.625rem);\n}\n.ui-slider:not(.is-disabled).is-active .ui-slider__marker-text, .ui-slider:not(.is-disabled).is-dragging .ui-slider__marker-text {\n    color: white;\n}\n.ui-slider:not(.is-disabled).is-active .ui-slider__snap-point, .ui-slider:not(.is-disabled).is-dragging .ui-slider__snap-point {\n    opacity: 1;\n}\n.ui-slider:not(.is-disabled).is-active .ui-slider__icon .ui-icon, .ui-slider:not(.is-disabled).is-dragging .ui-slider__icon .ui-icon {\n    color: #2196f3;\n}\n.ui-slider.is-disabled .ui-slider__icon {\n    opacity: 0.6;\n}\n.ui-slider.is-disabled .ui-slider__track {\n    cursor: default;\n}\n.ui-slider.is-disabled .ui-slider__track-fill {\n    background-color: transparent;\n}\n.ui-slider.is-disabled .ui-slider__thumb {\n    background-color: #DDD;\n    border: 0.125rem solid white;\n}\n.ui-slider__icon {\n  margin-right: 1rem;\n}\n.ui-slider__icon .ui-icon {\n    color: rgba(0, 0, 0, 0.54);\n    -webkit-transition: color 0.2s ease;\n    transition: color 0.2s ease;\n}\n.ui-slider__track {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 1.125rem;\n  margin: 0 auto;\n  position: relative;\n  width: 100%;\n}\n.ui-slider__track-background,\n.ui-slider__track-fill {\n  content: '';\n  display: block;\n  height: 0.1875rem;\n  left: 0;\n  position: absolute;\n  top: 0.46875rem;\n}\n.ui-slider__track-background {\n  background-color: rgba(0, 0, 0, 0.12);\n  width: 100%;\n}\n.ui-slider__snap-point {\n  background-color: rgba(0, 0, 0, 0.75);\n  height: 0.1875rem;\n  opacity: 0;\n  position: absolute;\n  -webkit-transition: opacity 0.2s ease;\n  transition: opacity 0.2s ease;\n  width: 0.125rem;\n  z-index: 1;\n}\n.ui-slider__track-fill {\n  background-color: #2196f3;\n  -webkit-transform-origin: left;\n          transform-origin: left;\n  width: 100%;\n}\n.ui-slider__thumb {\n  background-color: #2196f3;\n  border-radius: 50%;\n  cursor: inherit;\n  display: block;\n  height: 0.875rem;\n  left: 0;\n  position: relative;\n  width: 0.875rem;\n  z-index: 1;\n  margin-left: -0.4375rem;\n}\n.ui-slider__thumb::before {\n    background-color: rgba(33, 150, 243, 0.38);\n    border-radius: 50%;\n    content: '';\n    display: block;\n    height: 2.25rem;\n    margin-left: -0.6875rem;\n    margin-top: -0.6875rem;\n    position: absolute;\n    -webkit-transform-origin: center;\n            transform-origin: center;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    -webkit-transition: -webkit-transform 0.2s ease;\n    transition: -webkit-transform 0.2s ease;\n    transition: transform 0.2s ease;\n    transition: transform 0.2s ease, -webkit-transform 0.2s ease;\n    width: 2.25rem;\n}\n.ui-slider__marker {\n  height: 2.25rem;\n  margin-left: -0.6875rem;\n  margin-top: -0.6875rem;\n  opacity: 0;\n  position: absolute;\n  -webkit-transform: scale(0) translateY(0);\n          transform: scale(0) translateY(0);\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 2.25rem;\n}\n.ui-slider__marker svg {\n    fill: #2196f3;\n    height: 2.25rem;\n    width: 2.25rem;\n}\n.ui-slider__marker-text {\n  color: #2196f3;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  left: 0;\n  position: absolute;\n  text-align: center;\n  top: 0.25rem;\n  -webkit-transition: color 0.2s ease;\n  transition: color 0.2s ease;\n  width: 2.25rem;\n}\n.ui-slider--is-dragging {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 182:
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

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(154);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("1dabe052", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d1a7c42\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiSlider.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d1a7c42\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiSlider.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(120);


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

/***/ 5:
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

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiIcon_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_39a27af7_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiIcon_vue__ = __webpack_require__(9);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(10)
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

/* harmony default export */ __webpack_exports__["default"] = Component.exports;


/***/ }),

/***/ 7:
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

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.ui-icon {\n  cursor: inherit;\n  display: inline-block;\n  font-size: 1.5rem;\n  height: 1em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  vertical-align: middle;\n  width: 1em;\n}\n.ui-icon svg {\n    display: block;\n    fill: currentColor;\n    height: 1em;\n    margin: 0;\n    padding: 0;\n    width: 1em;\n}\n", ""]);

// exports


/***/ }),

/***/ 9:
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

/***/ })

/******/ });
});