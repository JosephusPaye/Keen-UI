/*!
 * Keen UI v0.8.9 (https://github.com/JosephusPaye/keen-ui)
 * (c) 2016 Josephus Paye II
 * Released under the MIT License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Keen"] = factory();
	else
		root["Keen"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var _UiAlert = __webpack_require__(2);
	
	var _UiAlert2 = _interopRequireDefault(_UiAlert);
	
	var _UiAutocomplete = __webpack_require__(84);
	
	var _UiAutocomplete2 = _interopRequireDefault(_UiAutocomplete);
	
	var _UiButton = __webpack_require__(111);
	
	var _UiButton2 = _interopRequireDefault(_UiButton);
	
	var _UiCheckbox = __webpack_require__(115);
	
	var _UiCheckbox2 = _interopRequireDefault(_UiCheckbox);
	
	var _UiCollapsible = __webpack_require__(119);
	
	var _UiCollapsible2 = _interopRequireDefault(_UiCollapsible);
	
	var _UiConfirm = __webpack_require__(123);
	
	var _UiConfirm2 = _interopRequireDefault(_UiConfirm);
	
	var _UiFab = __webpack_require__(131);
	
	var _UiFab2 = _interopRequireDefault(_UiFab);
	
	var _UiIcon = __webpack_require__(6);
	
	var _UiIcon2 = _interopRequireDefault(_UiIcon);
	
	var _UiIconButton = __webpack_require__(10);
	
	var _UiIconButton2 = _interopRequireDefault(_UiIconButton);
	
	var _UiMenu = __webpack_require__(13);
	
	var _UiMenu2 = _interopRequireDefault(_UiMenu);
	
	var _UiMenuOption = __webpack_require__(16);
	
	var _UiMenuOption2 = _interopRequireDefault(_UiMenuOption);
	
	var _UiModal = __webpack_require__(126);
	
	var _UiModal2 = _interopRequireDefault(_UiModal);
	
	var _UiPopover = __webpack_require__(67);
	
	var _UiPopover2 = _interopRequireDefault(_UiPopover);
	
	var _UiPreloader = __webpack_require__(135);
	
	var _UiPreloader2 = _interopRequireDefault(_UiPreloader);
	
	var _UiProgressCircular = __webpack_require__(71);
	
	var _UiProgressCircular2 = _interopRequireDefault(_UiProgressCircular);
	
	var _UiProgressLinear = __webpack_require__(139);
	
	var _UiProgressLinear2 = _interopRequireDefault(_UiProgressLinear);
	
	var _UiRadio = __webpack_require__(143);
	
	var _UiRadio2 = _interopRequireDefault(_UiRadio);
	
	var _UiRating = __webpack_require__(147);
	
	var _UiRating2 = _interopRequireDefault(_UiRating);
	
	var _UiRatingIcon = __webpack_require__(150);
	
	var _UiRatingIcon2 = _interopRequireDefault(_UiRatingIcon);
	
	var _UiRatingPreview = __webpack_require__(155);
	
	var _UiRatingPreview2 = _interopRequireDefault(_UiRatingPreview);
	
	var _UiRippleInk = __webpack_require__(20);
	
	var _UiRippleInk2 = _interopRequireDefault(_UiRippleInk);
	
	var _UiSelect = __webpack_require__(159);
	
	var _UiSelect2 = _interopRequireDefault(_UiSelect);
	
	var _UiSlider = __webpack_require__(170);
	
	var _UiSlider2 = _interopRequireDefault(_UiSlider);
	
	var _UiSnackbar = __webpack_require__(182);
	
	var _UiSnackbar2 = _interopRequireDefault(_UiSnackbar);
	
	var _UiSnackbarContainer = __webpack_require__(186);
	
	var _UiSnackbarContainer2 = _interopRequireDefault(_UiSnackbarContainer);
	
	var _UiSwitch = __webpack_require__(190);
	
	var _UiSwitch2 = _interopRequireDefault(_UiSwitch);
	
	var _UiTab = __webpack_require__(194);
	
	var _UiTab2 = _interopRequireDefault(_UiTab);
	
	var _UiTabs = __webpack_require__(198);
	
	var _UiTabs2 = _interopRequireDefault(_UiTabs);
	
	var _UiTextbox = __webpack_require__(207);
	
	var _UiTextbox2 = _interopRequireDefault(_UiTextbox);
	
	var _UiToolbar = __webpack_require__(212);
	
	var _UiToolbar2 = _interopRequireDefault(_UiToolbar);
	
	var _UiTooltip = __webpack_require__(77);
	
	var _UiTooltip2 = _interopRequireDefault(_UiTooltip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Keen = {
	    UiAlert: _UiAlert2.default,
	    UiAutocomplete: _UiAutocomplete2.default,
	    UiButton: _UiButton2.default,
	    UiCheckbox: _UiCheckbox2.default,
	    UiCollapsible: _UiCollapsible2.default,
	    UiConfirm: _UiConfirm2.default,
	    UiFab: _UiFab2.default,
	    UiIcon: _UiIcon2.default,
	    UiIconButton: _UiIconButton2.default,
	    UiMenu: _UiMenu2.default,
	    UiMenuOption: _UiMenuOption2.default,
	    UiModal: _UiModal2.default,
	    UiPopover: _UiPopover2.default,
	    UiPreloader: _UiPreloader2.default,
	    UiProgressCircular: _UiProgressCircular2.default,
	    UiProgressLinear: _UiProgressLinear2.default,
	    UiRadio: _UiRadio2.default,
	    UiRadioGroup: UiRadioGroup,
	    UiRating: _UiRating2.default,
	    UiRatingIcon: _UiRatingIcon2.default,
	    UiRatingPreview: _UiRatingPreview2.default,
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
	        Vue.component('ui-checkbox', _UiCheckbox2.default);
	        Vue.component('ui-collapsible', _UiCollapsible2.default);
	        Vue.component('ui-confirm', _UiConfirm2.default);
	        Vue.component('ui-fab', _UiFab2.default);
	        Vue.component('ui-icon', _UiIcon2.default);
	        Vue.component('ui-icon-button', _UiIconButton2.default);
	        Vue.component('ui-menu', _UiMenu2.default);
	        Vue.component('ui-menu-option', _UiMenuOption2.default);
	        Vue.component('ui-modal', _UiModal2.default);
	        Vue.component('ui-popover', _UiPopover2.default);
	        Vue.component('ui-preloader', _UiPreloader2.default);
	        Vue.component('ui-progress-circular', _UiProgressCircular2.default);
	        Vue.component('ui-progress-linear', _UiProgressLinear2.default);
	        Vue.component('ui-radio', _UiRadio2.default);
	        Vue.component('ui-rating', _UiRating2.default);
	        Vue.component('ui-rating-icon', _UiRatingIcon2.default);
	        Vue.component('ui-rating-preview', _UiRatingPreview2.default);
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
	
	module.exports = Keen;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	document.addEventListener('DOMContentLoaded', function () {
	    var hadKeyboardEvent = false;
	    var keyboardModalityWhitelist = ['input:not([type])', 'input[type=text]', 'input[type=number]', 'input[type=date]', 'input[type=time]', 'input[type=datetime]', 'textarea', '[role=textbox]', '[supports-modality=keyboard]'].join(',');
	
	    var isHandlingKeyboardThrottle;
	
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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(3)
	
	/* script */
	__vue_exports__ = __webpack_require__(5)
	
	/* template */
	var __vue_template__ = __webpack_require__(83)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiAlert.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _UiIcon = __webpack_require__(6);
	
	var _UiIcon2 = _interopRequireDefault(_UiIcon);
	
	var _UiIconButton = __webpack_require__(10);
	
	var _UiIconButton2 = _interopRequireDefault(_UiIconButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-alert',
	
	    data: function data() {
	        return {
	            show: true
	        };
	    },
	
	
	    props: {
	        type: {
	            type: String,
	            default: 'info' },
	        text: String,
	        icon: String,
	        hideIcon: {
	            type: Boolean,
	            default: false
	        },
	        dismissible: {
	            type: Boolean,
	            default: true
	        }
	    },
	
	    computed: {
	        iconName: function iconName() {
	            if (this.icon) {
	                return this.icon;
	            }
	
	            var icon = this.type;
	
	            if (icon === 'success') {
	                icon = 'check_circle';
	            }
	
	            return icon;
	        }
	    },
	
	    methods: {
	        close: function close() {
	            this.show = false;
	            this.$emit('dismissed');
	        }
	    },
	
	    components: {
	        UiIcon: _UiIcon2.default,
	        UiIconButton: _UiIconButton2.default
	    }
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(7)
	
	/* script */
	__vue_exports__ = __webpack_require__(8)
	
	/* template */
	var __vue_template__ = __webpack_require__(9)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-7", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiIcon.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: 'ui-icon',
	
	    props: {
	        icon: {
	            type: String,
	            required: true
	        },
	        removeText: {
	            type: Boolean,
	            default: false
	        }
	    }
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('i', {
	    staticClass: "ui-icon material-icons",
	    class: [icon],
	    attrs: {
	      "aria-hidden": "true"
	    },
	    domProps: {
	      "textContent": _s(removeText ? null : icon)
	    }
	  })
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-7", module.exports)
	  }
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(11)
	
	/* script */
	__vue_exports__ = __webpack_require__(12)
	
	/* template */
	var __vue_template__ = __webpack_require__(82)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiIconButton.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _UiIcon = __webpack_require__(6);
	
	var _UiIcon2 = _interopRequireDefault(_UiIcon);
	
	var _UiMenu = __webpack_require__(13);
	
	var _UiMenu2 = _interopRequireDefault(_UiMenu);
	
	var _UiPopover = __webpack_require__(67);
	
	var _UiPopover2 = _interopRequireDefault(_UiPopover);
	
	var _UiProgressCircular = __webpack_require__(71);
	
	var _UiProgressCircular2 = _interopRequireDefault(_UiProgressCircular);
	
	var _HasDropdown = __webpack_require__(75);
	
	var _HasDropdown2 = _interopRequireDefault(_HasDropdown);
	
	var _ShowsTooltip = __webpack_require__(76);
	
	var _ShowsTooltip2 = _interopRequireDefault(_ShowsTooltip);
	
	var _ShowsRippleInk = __webpack_require__(19);
	
	var _ShowsRippleInk2 = _interopRequireDefault(_ShowsRippleInk);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-icon-button',
	
	    props: {
	        type: {
	            type: String,
	            default: 'normal' },
	        buttonType: {
	            type: String,
	            default: 'button'
	        },
	        color: {
	            type: String,
	            default: 'default' },
	        icon: {
	            type: String,
	            required: true
	        },
	        ariaLabel: String,
	        loading: {
	            type: Boolean,
	            default: false
	        },
	        disabled: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    computed: {
	        styleClasses: function styleClasses() {
	            var classes = ['ui-icon-button-' + this.type, 'color-' + this.color];
	
	            if (this.hasDropdown) {
	                classes.push('ui-dropdown');
	            }
	
	            return classes;
	        },
	        spinnerColor: function spinnerColor() {
	            if (this.color === 'default' || this.color === 'black') {
	                return 'black';
	            }
	
	            return 'white';
	        }
	    },
	
	    components: {
	        UiIcon: _UiIcon2.default,
	        UiMenu: _UiMenu2.default,
	        UiPopover: _UiPopover2.default,
	        UiProgressCircular: _UiProgressCircular2.default
	    },
	
	    mixins: [_HasDropdown2.default, _ShowsTooltip2.default, _ShowsRippleInk2.default]
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(14)
	
	/* script */
	__vue_exports__ = __webpack_require__(15)
	
	/* template */
	var __vue_template__ = __webpack_require__(66)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-9", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-9", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiMenu.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _UiMenuOption = __webpack_require__(16);
	
	var _UiMenuOption2 = _interopRequireDefault(_UiMenuOption);
	
	var _ShowsDropdown = __webpack_require__(25);
	
	var _ShowsDropdown2 = _interopRequireDefault(_ShowsDropdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-menu',
	
	    props: {
	        options: {
	            type: Array,
	            required: true,
	            default: function _default() {
	                return [];
	            }
	        },
	        showIcons: {
	            type: Boolean,
	            default: false
	        },
	        showSecondaryText: {
	            type: Boolean,
	            default: false
	        },
	        hideRippleInk: {
	            type: Boolean,
	            default: false
	        },
	        closeOnSelect: {
	            type: Boolean,
	            default: true
	        }
	    },
	
	    methods: {
	        optionSelect: function optionSelect(option) {
	            var _this = this;
	
	            if (!(option.disabled || option.type === 'divider')) {
	                if (Object.prototype.toString.call(option.callback) === '[object Function]') {
	                    option.callback();
	                } else {
	                    this.$emit('option-selected', option);
	                }
	                if (this.closeOnSelect) {
	                    setTimeout(function () {
	                        _this.closeDropdown();
	                    }, 150);
	                }
	            }
	        },
	        restrictFocus: function restrictFocus(e) {
	            if (!this.$refs.dropdown.contains(e.target)) {
	                e.stopPropagation();
	
	                this.$refs.dropdown.querySelector('.ui-menu-option').focus();
	            }
	        },
	        redirectFocus: function redirectFocus(e) {
	            e.stopPropagation();
	
	            this.$refs.dropdown.querySelector('.ui-menu-option').focus();
	        }
	    },
	
	    mounted: function mounted() {
	        this.$on('dropdown-opened', function () {
	            if (this.containFocus) {
	                document.addEventListener('focus', this.restrictFocus, true);
	            }
	            this.$emit('opened');
	        });
	
	        this.$on('dropdown-closed', function () {
	            if (this.containFocus) {
	                document.removeEventListener('focus', this.restrictFocus, true);
	            }
	            this.$emit('closed');
	        });
	    },
	
	
	    components: {
	        UiMenuOption: _UiMenuOption2.default
	    },
	
	    mixins: [_ShowsDropdown2.default]
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(17)
	
	/* script */
	__vue_exports__ = __webpack_require__(18)
	
	/* template */
	var __vue_template__ = __webpack_require__(24)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-10", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-10", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiMenuOption.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _UiIcon = __webpack_require__(6);
	
	var _UiIcon2 = _interopRequireDefault(_UiIcon);
	
	var _ShowsRippleInk = __webpack_require__(19);
	
	var _ShowsRippleInk2 = _interopRequireDefault(_ShowsRippleInk);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-menu-option',
	
	    props: {
	        type: {
	            type: String,
	            default: 'option'
	        },
	        text: String,
	        icon: String,
	        showIcon: {
	            type: Boolean,
	            default: false
	        },
	        secondaryText: String,
	        showSecondaryText: {
	            type: Boolean,
	            default: false
	        },
	        partial: {
	            type: String,
	            default: 'ui-menu-default'
	        },
	        disabled: {
	            type: Boolean,
	            default: false
	        },
	        option: Object
	    },
	
	    computed: {
	        isDivider: function isDivider() {
	            return this.type === 'divider';
	        }
	    },
	
	    components: {
	        UiIcon: _UiIcon2.default
	    },
	
	    mixins: [_ShowsRippleInk2.default]
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _UiRippleInk = __webpack_require__(20);
	
	var _UiRippleInk2 = _interopRequireDefault(_UiRippleInk);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: {
	        hideRippleInk: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    components: {
	        UiRippleInk: _UiRippleInk2.default
	    }
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(21)
	
	/* script */
	__vue_exports__ = __webpack_require__(22)
	
	/* template */
	var __vue_template__ = __webpack_require__(23)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-23", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-23", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiRippleInk.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 21 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: 'ui-ripple-ink',
	    data: function data() {
	        return {
	            show: false,
	            style: null
	        };
	    },
	
	    methods: {
	        mousedown: function mousedown(e) {
	            if (e.button === 0) {
	                this.ripple(e.type, e);
	            }
	        },
	        touchstart: function touchstart(e) {
	            if (e.changedTouches) {
	                for (var i = 0; i < e.changedTouches.length; ++i) {
	                    this.ripple(e.type, e.changedTouches[i]);
	                }
	            }
	        },
	        ripple: function ripple(eventType, e) {
	            var _this = this;
	
	            var holder = this.$el;
	            var prev = holder.getAttribute('data-ui-event');
	            if (prev && prev !== eventType) {
	                return;
	            }
	            holder.setAttribute('data-ui-event', eventType);
	            var rect = holder.getBoundingClientRect();
	            var x = e.offsetX;
	            var y = void 0;
	
	            if (x !== undefined) {
	                y = e.offsetY;
	            } else {
	                x = e.clientX - rect.left;
	                y = e.clientY - rect.top;
	            }
	
	            var max = rect.width === rect.height ? rect.width * 1.412 : Math.sqrt(rect.width * rect.width + rect.height * rect.height);
	            var dim = max * 2 + 'px';
	
	            this.style = {
	                width: dim,
	                height: dim,
	                marginLeft: -max + x + 'px',
	                marginTop: -max + y + 'px'
	            };
	            var releaseEvent = eventType === 'mousedown' ? 'mouseup' : 'touchend';
	
	            var release = function release() {
	                holder.removeEventListener(releaseEvent, release);
	                _this.show = true;
	                setTimeout(function () {
	                    _this.show = false;
	                    _this.style = null;
	                    holder.removeAttribute('data-ui-event');
	                }, 300);
	            };
	            holder.addEventListener(releaseEvent, release);
	        }
	    }
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "ui-ripple-ink",
	    on: {
	      "mousedown": function($event) {
	        mousedown($event)
	      },
	      "touchstart": function($event) {
	        touchstart($event)
	      }
	    }
	  }, [_h('transition', {
	    attrs: {
	      "name": "ripple-ink"
	    }
	  }, [(show) ? _h('div', {
	    staticClass: "ripple",
	    style: (style)
	  }) : _e()])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-23", module.exports)
	  }
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('a', {
	    staticClass: "ui-menu-option",
	    class: {
	      'divider': isDivider, 'disabled': disabled
	    },
	    attrs: {
	      "role": "menu-item",
	      "tabindex": (isDivider || disabled) ? null : '0'
	    }
	  }, [_h('div', {
	    staticClass: "ui-menu-option-content",
	    class: [partial]
	  }, [(showIcon && !isDivider && icon) ? _h('ui-icon', {
	    staticClass: "ui-menu-option-icon",
	    attrs: {
	      "icon": icon
	    }
	  }) : _e(), " ", (!isDivider) ? _h('div', {
	    staticClass: "ui-menu-option-text",
	    domProps: {
	      "textContent": _s(text)
	    }
	  }) : _e(), " ", (showSecondaryText && !isDivider && secondaryText) ? _h('div', {
	    staticClass: "ui-menu-option-secondary-text",
	    domProps: {
	      "textContent": _s(secondaryText)
	    }
	  }) : _e()]), " ", (!hideRippleInk && !disabled && !isDivider) ? _h('ui-ripple-ink') : _e()])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-10", module.exports)
	  }
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _tetherDrop = __webpack_require__(26);
	
	var _tetherDrop2 = _interopRequireDefault(_tetherDrop);
	
	var _classlist = __webpack_require__(28);
	
	var _classlist2 = _interopRequireDefault(_classlist);
	
	var _eventBus = __webpack_require__(61);
	
	var _eventBus2 = _interopRequireDefault(_eventBus);
	
	var _typeCheck = __webpack_require__(64);
	
	var _typeCheck2 = _interopRequireDefault(_typeCheck);
	
	var _ReceivesTargetedEvent = __webpack_require__(65);
	
	var _ReceivesTargetedEvent2 = _interopRequireDefault(_ReceivesTargetedEvent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: {
	        id: String,
	        trigger: {
	            type: String
	        },
	        containFocus: {
	            type: Boolean,
	            default: true
	        },
	        dropdownPosition: {
	            type: String,
	            default: 'bottom left'
	        },
	        openOn: {
	            type: String,
	            default: 'click' }
	    },
	
	    data: function data() {
	        return {
	            drop: null,
	            lastFocussedElement: null
	        };
	    },
	    beforeDestroy: function beforeDestroy() {
	        if (this.drop) {
	            this.drop.remove();
	            this.drop.destroy();
	        }
	    },
	    mounted: function mounted() {
	        var _this = this;
	
	        if (this.trigger) {
	            this.initializeDropdown();
	        }
	        _eventBus2.default.$on('ui-dropdown::open', function (id) {
	            if (!_this.eventTargetsComponent(id)) {
	                return;
	            }
	            _this.openDropdown();
	        });
	
	        _eventBus2.default.$on('ui-dropdown::close', function (id) {
	            if (!_this.eventTargetsComponent(id)) {
	                return;
	            }
	            _this.closeDropdown();
	        });
	
	        _eventBus2.default.$on('ui-dropdown::toggle', function (id) {
	            if (!_this.eventTargetsComponent(id)) {
	                return;
	            }
	            _this.toggleDropdown();
	        });
	    },
	
	
	    methods: {
	        initializeDropdown: function initializeDropdown() {
	            var _t = this.$parent.$refs[this.trigger];
	
	            this._trigger = (0, _typeCheck2.default)(_t) === 'array' ? _t[0] : _t;
	            this.drop = new _tetherDrop2.default({
	                target: this._trigger,
	                content: this.$refs.dropdown,
	                position: this.dropdownPosition,
	                constrainToWindow: true,
	                openOn: this.openOn
	            });
	
	            if (this.dropdownPosition !== 'bottom left') {
	                this.drop.open();
	                this.drop.close();
	                this.drop.open();
	                this.drop.close();
	            }
	
	            this.drop.on('open', this.positionDrop);
	            this.drop.on('open', this.dropdownOpened);
	            this.drop.on('close', this.dropdownClosed);
	        },
	        openDropdown: function openDropdown() {
	            if (this.drop) {
	                this.drop.open();
	            }
	        },
	        positionDrop: function positionDrop() {
	            var drop = this.drop;
	            var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	
	            var dropWidth = drop.drop.getBoundingClientRect().width;
	            var left = drop.target.getBoundingClientRect().left;
	            var availableSpace = windowWidth - left;
	
	            if (dropWidth > availableSpace) {
	                var direction = dropWidth > availableSpace ? 'right' : 'left';
	
	                drop.tether.attachment.left = direction;
	                drop.tether.targetAttachment.left = direction;
	
	                drop.position();
	            }
	        },
	        closeDropdown: function closeDropdown() {
	            if (this.drop) {
	                this.drop.close();
	            }
	        },
	        toggleDropdown: function toggleDropdown(e) {
	            if (this.drop) {
	                this.drop.toggle(e);
	            }
	        },
	        dropdownOpened: function dropdownOpened() {
	            _classlist2.default.add(this._trigger, 'dropdown-open');
	
	            this.lastFocussedElement = document.activeElement;
	            this.$refs.dropdown.focus();
	            this.$emit('dropdown-opened');
	        },
	        dropdownClosed: function dropdownClosed() {
	            _classlist2.default.remove(this._trigger, 'dropdown-open');
	
	            if (this.lastFocussedElement) {
	                this.lastFocussedElement.focus();
	            }
	
	            this.$emit('dropdown-closed');
	        }
	    },
	
	    mixins: [_ReceivesTargetedEvent2.default]
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether-drop 1.4.1 */
	
	(function(root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(27)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
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


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether 1.3.7 */
	
	(function(root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
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
	  if (!node) {
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


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof2 = __webpack_require__(29);
	
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

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Symbol = __webpack_require__(30)["default"];
	
	exports["default"] = function (obj) {
	  return obj && obj.constructor === _Symbol ? "symbol" : typeof obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(31), __esModule: true };

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(32);
	__webpack_require__(60);
	module.exports = __webpack_require__(39).Symbol;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(33)
	  , global         = __webpack_require__(34)
	  , has            = __webpack_require__(35)
	  , DESCRIPTORS    = __webpack_require__(36)
	  , $export        = __webpack_require__(38)
	  , redefine       = __webpack_require__(42)
	  , $fails         = __webpack_require__(37)
	  , shared         = __webpack_require__(45)
	  , setToStringTag = __webpack_require__(46)
	  , uid            = __webpack_require__(48)
	  , wks            = __webpack_require__(47)
	  , keyOf          = __webpack_require__(49)
	  , $names         = __webpack_require__(54)
	  , enumKeys       = __webpack_require__(55)
	  , isArray        = __webpack_require__(56)
	  , anObject       = __webpack_require__(57)
	  , toIObject      = __webpack_require__(50)
	  , createDesc     = __webpack_require__(44)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
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
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(59)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
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
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 33 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 35 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(37)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(34)
	  , core      = __webpack_require__(39)
	  , ctx       = __webpack_require__(40)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 39 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(41);
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

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(43);

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(33)
	  , createDesc = __webpack_require__(44);
	module.exports = __webpack_require__(36) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(34)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(33).setDesc
	  , has = __webpack_require__(35)
	  , TAG = __webpack_require__(47)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(45)('wks')
	  , uid    = __webpack_require__(48)
	  , Symbol = __webpack_require__(34).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(33)
	  , toIObject = __webpack_require__(50);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(51)
	  , defined = __webpack_require__(53);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(52);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(50)
	  , getNames  = __webpack_require__(33).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(33);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(52);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(58);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 60 */
/***/ function(module, exports) {



/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vue = __webpack_require__(62);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = new _vue2.default();

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {'use strict';
	
	/*  */
	
	/**
	 * Convert a value to a string that is actually rendered.
	 */
	function _toString (val) {
	  return val == null
	    ? ''
	    : typeof val === 'object'
	      ? JSON.stringify(val, null, 2)
	      : String(val)
	}
	
	/**
	 * Convert a input value to a number for persistence.
	 * If the conversion fails, return original string.
	 */
	function toNumber (val) {
	  var n = parseFloat(val, 10)
	  return (n || n === 0) ? n : val
	}
	
	/**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 */
	function makeMap (
	  str,
	  expectsLowerCase
	) {
	  var map = Object.create(null)
	  var list = str.split(',')
	  for (var i = 0; i < list.length; i++) {
	    map[list[i]] = true
	  }
	  return expectsLowerCase
	    ? function (val) { return map[val.toLowerCase()]; }
	    : function (val) { return map[val]; }
	}
	
	/**
	 * Check if a tag is a built-in tag.
	 */
	var isBuiltInTag = makeMap('slot,component', true)
	
	/**
	 * Remove an item from an array
	 */
	function remove (arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item)
	    if (index > -1) {
	      return arr.splice(index, 1)
	    }
	  }
	}
	
	/**
	 * Check whether the object has the property.
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty
	function hasOwn (obj, key) {
	  return hasOwnProperty.call(obj, key)
	}
	
	/**
	 * Check if value is primitive
	 */
	function isPrimitive (value) {
	  return typeof value === 'string' || typeof value === 'number'
	}
	
	/**
	 * Create a cached version of a pure function.
	 */
	function cached (fn) {
	  var cache = Object.create(null)
	  return function cachedFn (str) {
	    var hit = cache[str]
	    return hit || (cache[str] = fn(str))
	  }
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 */
	var camelizeRE = /-(\w)/g
	var camelize = cached(function (str) {
	  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
	})
	
	/**
	 * Capitalize a string.
	 */
	var capitalize = cached(function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1)
	})
	
	/**
	 * Hyphenate a camelCase string.
	 */
	var hyphenateRE = /([^-])([A-Z])/g
	var hyphenate = cached(function (str) {
	  return str
	    .replace(hyphenateRE, '$1-$2')
	    .replace(hyphenateRE, '$1-$2')
	    .toLowerCase()
	})
	
	/**
	 * Simple bind, faster than native
	 */
	function bind (fn, ctx) {
	  function boundFn (a) {
	    var l = arguments.length
	    return l
	      ? l > 1
	        ? fn.apply(ctx, arguments)
	        : fn.call(ctx, a)
	      : fn.call(ctx)
	  }
	  // record original fn length
	  boundFn._length = fn.length
	  return boundFn
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 */
	function toArray (list, start) {
	  start = start || 0
	  var i = list.length - start
	  var ret = new Array(i)
	  while (i--) {
	    ret[i] = list[i + start]
	  }
	  return ret
	}
	
	/**
	 * Mix properties into target object.
	 */
	function extend (to, _from) {
	  for (var key in _from) {
	    to[key] = _from[key]
	  }
	  return to
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */
	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 */
	var toString = Object.prototype.toString
	var OBJECT_STRING = '[object Object]'
	function isPlainObject (obj) {
	  return toString.call(obj) === OBJECT_STRING
	}
	
	/**
	 * Merge an Array of Objects into a single Object.
	 */
	function toObject (arr) {
	  var res = {}
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i]) {
	      extend(res, arr[i])
	    }
	  }
	  return res
	}
	
	/**
	 * Perform no operation.
	 */
	function noop () {}
	
	/**
	 * Always return false.
	 */
	var no = function () { return false; }
	
	/**
	 * Generate a static keys string from compiler modules.
	 */
	function genStaticKeys (modules) {
	  return modules.reduce(function (keys, m) {
	    return keys.concat(m.staticKeys || [])
	  }, []).join(',')
	}
	
	/*  */
	
	var config = {
	  /**
	   * Option merge strategies (used in core/util/options)
	   */
	  optionMergeStrategies: Object.create(null),
	
	  /**
	   * Whether to suppress warnings.
	   */
	  silent: false,
	
	  /**
	   * Whether to enable devtools
	   */
	  devtools: process.env.NODE_ENV !== 'production',
	
	  /**
	   * Error handler for watcher errors
	   */
	  errorHandler: null,
	
	  /**
	   * Ignore certain custom elements
	   */
	  ignoredElements: null,
	
	  /**
	   * Custom user key aliases for v-on
	   */
	  keyCodes: Object.create(null),
	
	  /**
	   * Check if a tag is reserved so that it cannot be registered as a
	   * component. This is platform-dependent and may be overwritten.
	   */
	  isReservedTag: no,
	
	  /**
	   * Check if a tag is an unknown element.
	   * Platform-dependent.
	   */
	  isUnknownElement: no,
	
	  /**
	   * Get the namespace of an element
	   */
	  getTagNamespace: noop,
	
	  /**
	   * Check if an attribute must be bound using property, e.g. value
	   * Platform-dependent.
	   */
	  mustUseProp: no,
	
	  /**
	   * List of asset types that a component can own.
	   */
	  _assetTypes: [
	    'component',
	    'directive',
	    'filter'
	  ],
	
	  /**
	   * List of lifecycle hooks.
	   */
	  _lifecycleHooks: [
	    'beforeCreate',
	    'created',
	    'beforeMount',
	    'mounted',
	    'beforeUpdate',
	    'updated',
	    'beforeDestroy',
	    'destroyed',
	    'activated',
	    'deactivated'
	  ],
	
	  /**
	   * Max circular updates allowed in a scheduler flush cycle.
	   */
	  _maxUpdateCount: 100,
	
	  /**
	   * Server rendering?
	   */
	  _isServer: process.env.VUE_ENV === 'server'
	}
	
	/*  */
	
	/**
	 * Check if a string starts with $ or _
	 */
	function isReserved (str) {
	  var c = (str + '').charCodeAt(0)
	  return c === 0x24 || c === 0x5F
	}
	
	/**
	 * Define a property.
	 */
	function def (obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  })
	}
	
	/**
	 * Parse simple path.
	 */
	var bailRE = /[^\w\.\$]/
	function parsePath (path) {
	  if (bailRE.test(path)) {
	    return
	  } else {
	    var segments = path.split('.')
	    return function (obj) {
	      for (var i = 0; i < segments.length; i++) {
	        if (!obj) return
	        obj = obj[segments[i]]
	      }
	      return obj
	    }
	  }
	}
	
	/*  */
	
	/* global MutationObserver */
	// can we use __proto__?
	var hasProto = '__proto__' in {}
	
	// Browser environment sniffing
	var inBrowser =
	  typeof window !== 'undefined' &&
	  Object.prototype.toString.call(window) !== '[object Object]'
	
	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__
	
	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase()
	var isIos = UA && /(iphone|ipad|ipod|ios)/i.test(UA)
	var iosVersionMatch = UA && isIos && UA.match(/os ([\d_]+)/)
	var iosVersion = iosVersionMatch && iosVersionMatch[1].split('_')
	
	// MutationObserver is unreliable in iOS 9.3 UIWebView
	// detecting it by checking presence of IndexedDB
	// ref #3027
	var hasMutationObserverBug =
	  iosVersion &&
	  Number(iosVersion[0]) >= 9 &&
	  Number(iosVersion[1]) >= 3 &&
	  !window.indexedDB
	
	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */
	var nextTick = (function () {
	  var callbacks = []
	  var pending = false
	  var timerFunc
	  function nextTickHandler () {
	    pending = false
	    var copies = callbacks.slice(0)
	    callbacks = []
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]()
	    }
	  }
	
	  /* istanbul ignore else */
	  if (typeof MutationObserver !== 'undefined' && !hasMutationObserverBug) {
	    var counter = 1
	    var observer = new MutationObserver(nextTickHandler)
	    var textNode = document.createTextNode(String(counter))
	    observer.observe(textNode, {
	      characterData: true
	    })
	    timerFunc = function () {
	      counter = (counter + 1) % 2
	      textNode.data = String(counter)
	    }
	  } else {
	    // webpack attempts to inject a shim for setImmediate
	    // if it is used as a global, so we have to work around that to
	    // avoid bundling unnecessary code.
	    var context = inBrowser
	      ? window
	      : typeof global !== 'undefined' ? global : {}
	    timerFunc = context.setImmediate || setTimeout
	  }
	  return function (cb, ctx) {
	    var func = ctx
	      ? function () { cb.call(ctx) }
	      : cb
	    callbacks.push(func)
	    if (pending) return
	    pending = true
	    timerFunc(nextTickHandler, 0)
	  }
	})()
	
	var _Set
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && /native code/.test(Set.toString())) {
	  // use native Set when available.
	  _Set = Set
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = (function () {
	    function Set () {
	      this.set = Object.create(null)
	    }
	    Set.prototype.has = function has (key) {
	      return this.set[key] !== undefined
	    };
	    Set.prototype.add = function add (key) {
	      this.set[key] = 1
	    };
	    Set.prototype.clear = function clear () {
	      this.set = Object.create(null)
	    };
	
	    return Set;
	  }())
	}
	
	/* not type checking this file because flow doesn't play well with Proxy */
	
	var hasProxy;
	var proxyHandlers;
	var initProxy;
	if (process.env.NODE_ENV !== 'production') {
	  var allowedGlobals = makeMap(
	    'Infinity,undefined,NaN,isFinite,isNaN,' +
	    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
	    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
	    'require' // for Webpack/Browserify
	  )
	
	  hasProxy =
	    typeof Proxy !== 'undefined' &&
	    Proxy.toString().match(/native code/)
	
	  proxyHandlers = {
	    has: function has (target, key) {
	      var has = key in target
	      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_'
	      if (!has && !isAllowed) {
	        warn(
	          "Property or method \"" + key + "\" is not defined on the instance but " +
	          "referenced during render. Make sure to declare reactive data " +
	          "properties in the data option.",
	          target
	        )
	      }
	      return has || !isAllowed
	    }
	  }
	
	  initProxy = function initProxy (vm) {
	    if (hasProxy) {
	      vm._renderProxy = new Proxy(vm, proxyHandlers)
	    } else {
	      vm._renderProxy = vm
	    }
	  }
	}
	
	/*  */
	
	
	var uid$2 = 0
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */
	var Dep = function Dep () {
	  this.id = uid$2++
	  this.subs = []
	};
	
	Dep.prototype.addSub = function addSub (sub) {
	  this.subs.push(sub)
	};
	
	Dep.prototype.removeSub = function removeSub (sub) {
	  remove(this.subs, sub)
	};
	
	Dep.prototype.depend = function depend () {
	  if (Dep.target) {
	    Dep.target.addDep(this)
	  }
	};
	
	Dep.prototype.notify = function notify () {
	  // stablize the subscriber list first
	  var subs = this.subs.slice()
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update()
	  }
	};
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null
	var targetStack = []
	
	function pushTarget (_target) {
	  if (Dep.target) targetStack.push(Dep.target)
	  Dep.target = _target
	}
	
	function popTarget () {
	  Dep.target = targetStack.pop()
	}
	
	/*  */
	
	
	var queue = []
	var has = {}
	var circular = {}
	var waiting = false
	var flushing = false
	var index = 0
	
	/**
	 * Reset the scheduler's state.
	 */
	function resetSchedulerState () {
	  queue.length = 0
	  has = {}
	  if (process.env.NODE_ENV !== 'production') {
	    circular = {}
	  }
	  waiting = flushing = false
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	function flushSchedulerQueue () {
	  flushing = true
	
	  // Sort queue before flush.
	  // This ensures that:
	  // 1. Components are updated from parent to child. (because parent is always
	  //    created before the child)
	  // 2. A component's user watchers are run before its render watcher (because
	  //    user watchers are created before the render watcher)
	  // 3. If a component is destroyed during a parent component's watcher run,
	  //    its watchers can be skipped.
	  queue.sort(function (a, b) { return a.id - b.id; })
	
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (index = 0; index < queue.length; index++) {
	    var watcher = queue[index]
	    var id = watcher.id
	    has[id] = null
	    watcher.run()
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1
	      if (circular[id] > config._maxUpdateCount) {
	        warn(
	          'You may have an infinite update loop ' + (
	            watcher.user
	              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
	              : "in a component render function."
	          ),
	          watcher.vm
	        )
	        break
	      }
	    }
	  }
	
	  // devtool hook
	  /* istanbul ignore if */
	  if (devtools && config.devtools) {
	    devtools.emit('flush')
	  }
	
	  resetSchedulerState()
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */
	function queueWatcher (watcher) {
	  var id = watcher.id
	  if (has[id] == null) {
	    has[id] = true
	    if (!flushing) {
	      queue.push(watcher)
	    } else {
	      // if already flushing, splice the watcher based on its id
	      // if already past its id, it will be run next immediately.
	      var i = queue.length - 1
	      while (i >= 0 && queue[i].id > watcher.id) {
	        i--
	      }
	      queue.splice(Math.max(i, index) + 1, 0, watcher)
	    }
	    // queue the flush
	    if (!waiting) {
	      waiting = true
	      nextTick(flushSchedulerQueue)
	    }
	  }
	}
	
	/*  */
	
	var uid$1 = 0
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 */
	var Watcher = function Watcher (
	  vm,
	  expOrFn,
	  cb,
	  options
	) {
	  if ( options === void 0 ) options = {};
	
	  this.vm = vm
	  vm._watchers.push(this)
	  // options
	  this.deep = !!options.deep
	  this.user = !!options.user
	  this.lazy = !!options.lazy
	  this.sync = !!options.sync
	  this.expression = expOrFn.toString()
	  this.cb = cb
	  this.id = ++uid$1 // uid for batching
	  this.active = true
	  this.dirty = this.lazy // for lazy watchers
	  this.deps = []
	  this.newDeps = []
	  this.depIds = new _Set()
	  this.newDepIds = new _Set()
	  // parse expression for getter
	  if (typeof expOrFn === 'function') {
	    this.getter = expOrFn
	  } else {
	    this.getter = parsePath(expOrFn)
	    if (!this.getter) {
	      this.getter = function () {}
	      process.env.NODE_ENV !== 'production' && warn(
	        "Failed watching path: \"" + expOrFn + "\" " +
	        'Watcher only accepts simple dot-delimited paths. ' +
	        'For full control, use a function instead.',
	        vm
	      )
	    }
	  }
	  this.value = this.lazy
	    ? undefined
	    : this.get()
	};
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	Watcher.prototype.get = function get () {
	  pushTarget(this)
	  var value = this.getter.call(this.vm, this.vm)
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value)
	  }
	  popTarget()
	  this.cleanupDeps()
	  return value
	};
	
	/**
	 * Add a dependency to this directive.
	 */
	Watcher.prototype.addDep = function addDep (dep) {
	  var id = dep.id
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id)
	    this.newDeps.push(dep)
	    if (!this.depIds.has(id)) {
	      dep.addSub(this)
	    }
	  }
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	Watcher.prototype.cleanupDeps = function cleanupDeps () {
	    var this$1 = this;
	
	  var i = this.deps.length
	  while (i--) {
	    var dep = this$1.deps[i]
	    if (!this$1.newDepIds.has(dep.id)) {
	      dep.removeSub(this$1)
	    }
	  }
	  var tmp = this.depIds
	  this.depIds = this.newDepIds
	  this.newDepIds = tmp
	  this.newDepIds.clear()
	  tmp = this.deps
	  this.deps = this.newDeps
	  this.newDeps = tmp
	  this.newDeps.length = 0
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 */
	Watcher.prototype.update = function update () {
	  /* istanbul ignore else */
	  if (this.lazy) {
	    this.dirty = true
	  } else if (this.sync) {
	    this.run()
	  } else {
	    queueWatcher(this)
	  }
	};
	
	/**
	 * Scheduler job interface.
	 * Will be called by the scheduler.
	 */
	Watcher.prototype.run = function run () {
	  if (this.active) {
	    var value = this.get()
	      if (
	        value !== this.value ||
	      // Deep watchers and watchers on Object/Arrays should fire even
	      // when the value is the same, because the value may
	      // have mutated.
	      isObject(value) ||
	      this.deep
	    ) {
	      // set new value
	      var oldValue = this.value
	      this.value = value
	      if (this.user) {
	        try {
	          this.cb.call(this.vm, value, oldValue)
	        } catch (e) {
	          process.env.NODE_ENV !== 'production' && warn(
	            ("Error in watcher \"" + (this.expression) + "\""),
	            this.vm
	          )
	          /* istanbul ignore else */
	          if (config.errorHandler) {
	            config.errorHandler.call(null, e, this.vm)
	          } else {
	            throw e
	          }
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue)
	      }
	    }
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	Watcher.prototype.evaluate = function evaluate () {
	  this.value = this.get()
	  this.dirty = false
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	Watcher.prototype.depend = function depend () {
	    var this$1 = this;
	
	  var i = this.deps.length
	  while (i--) {
	    this$1.deps[i].depend()
	  }
	};
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	Watcher.prototype.teardown = function teardown () {
	    var this$1 = this;
	
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      remove(this.vm._watchers, this)
	    }
	    var i = this.deps.length
	    while (i--) {
	      this$1.deps[i].removeSub(this$1)
	    }
	    this.active = false
	  }
	};
	
	/**
	 * Recursively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 */
	var seenObjects = new _Set()
	function traverse (val, seen) {
	  var i, keys
	  if (!seen) {
	    seen = seenObjects
	    seen.clear()
	  }
	  var isA = Array.isArray(val)
	  var isO = isObject(val)
	  if ((isA || isO) && Object.isExtensible(val)) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id
	      if (seen.has(depId)) {
	        return
	      } else {
	        seen.add(depId)
	      }
	    }
	    if (isA) {
	      i = val.length
	      while (i--) traverse(val[i], seen)
	    } else if (isO) {
	      keys = Object.keys(val)
	      i = keys.length
	      while (i--) traverse(val[keys[i]], seen)
	    }
	  }
	}
	
	/*
	 * not type checking this file because flow doesn't play well with
	 * dynamically accessing methods on Array prototype
	 */
	
	var arrayProto = Array.prototype
	var arrayMethods = Object.create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	;[
	  'push',
	  'pop',
	  'shift',
	  'unshift',
	  'splice',
	  'sort',
	  'reverse'
	]
	.forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method]
	  def(arrayMethods, method, function mutator () {
	    var arguments$1 = arguments;
	
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length
	    var args = new Array(i)
	    while (i--) {
	      args[i] = arguments$1[i]
	    }
	    var result = original.apply(this, args)
	    var ob = this.__ob__
	    var inserted
	    switch (method) {
	      case 'push':
	        inserted = args
	        break
	      case 'unshift':
	        inserted = args
	        break
	      case 'splice':
	        inserted = args.slice(2)
	        break
	    }
	    if (inserted) ob.observeArray(inserted)
	    // notify change
	    ob.dep.notify()
	    return result
	  })
	})
	
	/*  */
	
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods)
	
	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However when passing down props,
	 * we don't want to force conversion because the value may be a nested value
	 * under a frozen data structure. Converting it would defeat the optimization.
	 */
	var observerState = {
	  shouldConvert: true,
	  isSettingProps: false
	}
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 */
	var Observer = function Observer (value) {
	  this.value = value
	  this.dep = new Dep()
	  this.vmCount = 0
	  def(value, '__ob__', this)
	  if (Array.isArray(value)) {
	    var augment = hasProto
	      ? protoAugment
	      : copyAugment
	    augment(value, arrayMethods, arrayKeys)
	    this.observeArray(value)
	  } else {
	    this.walk(value)
	  }
	};
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 */
	Observer.prototype.walk = function walk (obj) {
	  var keys = Object.keys(obj)
	  for (var i = 0; i < keys.length; i++) {
	    defineReactive(obj, keys[i], obj[keys[i]])
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 */
	Observer.prototype.observeArray = function observeArray (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i])
	  }
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 */
	function protoAugment (target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src
	  /* eslint-enable no-proto */
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * istanbul ignore next
	 */
	function copyAugment (target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i]
	    def(target, key, src[key])
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 */
	function observe (value) {
	  if (!isObject(value)) {
	    return
	  }
	  var ob
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__
	  } else if (
	    observerState.shouldConvert &&
	    !config._isServer &&
	    (Array.isArray(value) || isPlainObject(value)) &&
	    Object.isExtensible(value) &&
	    !value._isVue
	  ) {
	    ob = new Observer(value)
	  }
	  return ob
	}
	
	/**
	 * Define a reactive property on an Object.
	 */
	function defineReactive (
	  obj,
	  key,
	  val,
	  customSetter
	) {
	  var dep = new Dep()
	
	  var property = Object.getOwnPropertyDescriptor(obj, key)
	  if (property && property.configurable === false) {
	    return
	  }
	
	  // cater for pre-defined getter/setters
	  var getter = property && property.get
	  var setter = property && property.set
	
	  var childOb = observe(val)
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter () {
	      var value = getter ? getter.call(obj) : val
	      if (Dep.target) {
	        dep.depend()
	        if (childOb) {
	          childOb.dep.depend()
	        }
	        if (Array.isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i]
	            e && e.__ob__ && e.__ob__.dep.depend()
	          }
	        }
	      }
	      return value
	    },
	    set: function reactiveSetter (newVal) {
	      var value = getter ? getter.call(obj) : val
	      if (newVal === value) {
	        return
	      }
	      if (process.env.NODE_ENV !== 'production' && customSetter) {
	        customSetter()
	      }
	      if (setter) {
	        setter.call(obj, newVal)
	      } else {
	        val = newVal
	      }
	      childOb = observe(newVal)
	      dep.notify()
	    }
	  })
	}
	
	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 */
	function set (obj, key, val) {
	  if (Array.isArray(obj)) {
	    obj.splice(key, 1, val)
	    return val
	  }
	  if (hasOwn(obj, key)) {
	    obj[key] = val
	    return
	  }
	  var ob = obj.__ob__
	  if (obj._isVue || (ob && ob.vmCount)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Avoid adding reactive properties to a Vue instance or its root $data ' +
	      'at runtime - declare it upfront in the data option.'
	    )
	    return
	  }
	  if (!ob) {
	    obj[key] = val
	    return
	  }
	  defineReactive(ob.value, key, val)
	  ob.dep.notify()
	  return val
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 */
	function del (obj, key) {
	  var ob = obj.__ob__
	  if (obj._isVue || (ob && ob.vmCount)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Avoid deleting properties on a Vue instance or its root $data ' +
	      '- just set it to null.'
	    )
	    return
	  }
	  if (!hasOwn(obj, key)) {
	    return
	  }
	  delete obj[key]
	  if (!ob) {
	    return
	  }
	  ob.dep.notify()
	}
	
	/*  */
	
	function initState (vm) {
	  vm._watchers = []
	  initProps(vm)
	  initData(vm)
	  initComputed(vm)
	  initMethods(vm)
	  initWatch(vm)
	}
	
	function initProps (vm) {
	  var props = vm.$options.props
	  var propsData = vm.$options.propsData
	  if (props) {
	    var keys = vm.$options._propKeys = Object.keys(props)
	    var isRoot = !vm.$parent
	    // root instance props should be converted
	    observerState.shouldConvert = isRoot
	    var loop = function ( i ) {
	      var key = keys[i]
	      /* istanbul ignore else */
	      if (process.env.NODE_ENV !== 'production') {
	        defineReactive(vm, key, validateProp(key, props, propsData, vm), function () {
	          if (vm.$parent && !observerState.isSettingProps) {
	            warn(
	              "Avoid mutating a prop directly since the value will be " +
	              "overwritten whenever the parent component re-renders. " +
	              "Instead, use a data or computed property based on the prop's " +
	              "value. Prop being mutated: \"" + key + "\"",
	              vm
	            )
	          }
	        })
	      } else {
	        defineReactive(vm, key, validateProp(key, props, propsData, vm))
	      }
	    };
	
	    for (var i = 0; i < keys.length; i++) loop( i );
	    observerState.shouldConvert = true
	  }
	}
	
	function initData (vm) {
	  var data = vm.$options.data
	  data = vm._data = typeof data === 'function'
	    ? data.call(vm)
	    : data || {}
	  if (!isPlainObject(data)) {
	    data = {}
	    process.env.NODE_ENV !== 'production' && warn(
	      'data functions should return an object.',
	      vm
	    )
	  }
	  // proxy data on instance
	  var keys = Object.keys(data)
	  var props = vm.$options.props
	  var i = keys.length
	  while (i--) {
	    if (props && hasOwn(props, keys[i])) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
	        "Use prop default value instead.",
	        vm
	      )
	    } else {
	      proxy(vm, keys[i])
	    }
	  }
	  // observe data
	  observe(data)
	  data.__ob__ && data.__ob__.vmCount++
	}
	
	var computedSharedDefinition = {
	  enumerable: true,
	  configurable: true,
	  get: noop,
	  set: noop
	}
	
	function initComputed (vm) {
	  var computed = vm.$options.computed
	  if (computed) {
	    for (var key in computed) {
	      var userDef = computed[key]
	      if (typeof userDef === 'function') {
	        computedSharedDefinition.get = makeComputedGetter(userDef, vm)
	        computedSharedDefinition.set = noop
	      } else {
	        computedSharedDefinition.get = userDef.get
	          ? userDef.cache !== false
	            ? makeComputedGetter(userDef.get, vm)
	            : bind(userDef.get, vm)
	          : noop
	        computedSharedDefinition.set = userDef.set
	          ? bind(userDef.set, vm)
	          : noop
	      }
	      Object.defineProperty(vm, key, computedSharedDefinition)
	    }
	  }
	}
	
	function makeComputedGetter (getter, owner) {
	  var watcher = new Watcher(owner, getter, noop, {
	    lazy: true
	  })
	  return function computedGetter () {
	    if (watcher.dirty) {
	      watcher.evaluate()
	    }
	    if (Dep.target) {
	      watcher.depend()
	    }
	    return watcher.value
	  }
	}
	
	function initMethods (vm) {
	  var methods = vm.$options.methods
	  if (methods) {
	    for (var key in methods) {
	      if (methods[key] != null) {
	        vm[key] = bind(methods[key], vm)
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn(("Method \"" + key + "\" is undefined in options."), vm)
	      }
	    }
	  }
	}
	
	function initWatch (vm) {
	  var watch = vm.$options.watch
	  if (watch) {
	    for (var key in watch) {
	      var handler = watch[key]
	      if (Array.isArray(handler)) {
	        for (var i = 0; i < handler.length; i++) {
	          createWatcher(vm, key, handler[i])
	        }
	      } else {
	        createWatcher(vm, key, handler)
	      }
	    }
	  }
	}
	
	function createWatcher (vm, key, handler) {
	  var options
	  if (isPlainObject(handler)) {
	    options = handler
	    handler = handler.handler
	  }
	  if (typeof handler === 'string') {
	    handler = vm[handler]
	  }
	  vm.$watch(key, handler, options)
	}
	
	function stateMixin (Vue) {
	  // flow somehow has problems with directly declared definition object
	  // when using Object.defineProperty, so we have to procedurally build up
	  // the object here.
	  var dataDef = {}
	  dataDef.get = function () {
	    return this._data
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    dataDef.set = function (newData) {
	      warn(
	        'Avoid replacing instance root $data. ' +
	        'Use nested data properties instead.',
	        this
	      )
	    }
	  }
	  Object.defineProperty(Vue.prototype, '$data', dataDef)
	
	  Vue.prototype.$set = set
	  Vue.prototype.$delete = del
	
	  Vue.prototype.$watch = function (
	    expOrFn,
	    cb,
	    options
	  ) {
	    var vm = this
	    options = options || {}
	    options.user = true
	    var watcher = new Watcher(vm, expOrFn, cb, options)
	    if (options.immediate) {
	      cb.call(vm, watcher.value)
	    }
	    return function unwatchFn () {
	      watcher.teardown()
	    }
	  }
	}
	
	function proxy (vm, key) {
	  if (!isReserved(key)) {
	    Object.defineProperty(vm, key, {
	      configurable: true,
	      enumerable: true,
	      get: function proxyGetter () {
	        return vm._data[key]
	      },
	      set: function proxySetter (val) {
	        vm._data[key] = val
	      }
	    })
	  }
	}
	
	/*  */
	
	var VNode = function VNode (
	  tag,
	  data,
	  children,
	  text,
	  elm,
	  ns,
	  context,
	  componentOptions
	) {
	  this.tag = tag
	  this.data = data
	  this.children = children
	  this.text = text
	  this.elm = elm
	  this.ns = ns
	  this.context = context
	  this.key = data && data.key
	  this.componentOptions = componentOptions
	  this.child = undefined
	  this.parent = undefined
	  this.raw = false
	  this.isStatic = false
	  this.isRootInsert = true
	  this.isComment = false
	  this.isCloned = false
	  // apply construct hook.
	  // this is applied during render, before patch happens.
	  // unlike other hooks, this is applied on both client and server.
	  var constructHook = data && data.hook && data.hook.construct
	  if (constructHook) {
	    constructHook(this)
	  }
	};
	
	var emptyVNode = function () {
	  var node = new VNode()
	  node.text = ''
	  node.isComment = true
	  return node
	}
	
	// optimized shallow clone
	// used for static nodes and slot nodes because they may be reused across
	// multiple renders, cloning them avoids errors when DOM manipulations rely
	// on their elm reference.
	function cloneVNode (vnode) {
	  var cloned = new VNode(
	    vnode.tag,
	    vnode.data,
	    vnode.children,
	    vnode.text,
	    vnode.elm,
	    vnode.ns,
	    vnode.context,
	    vnode.componentOptions
	  )
	  cloned.isStatic = vnode.isStatic
	  cloned.key = vnode.key
	  cloned.isCloned = true
	  return cloned
	}
	
	function cloneVNodes (vnodes) {
	  var res = new Array(vnodes.length)
	  for (var i = 0; i < vnodes.length; i++) {
	    res[i] = cloneVNode(vnodes[i])
	  }
	  return res
	}
	
	/*  */
	
	function normalizeChildren (
	  children,
	  ns,
	  nestedIndex
	) {
	  if (isPrimitive(children)) {
	    return [createTextVNode(children)]
	  }
	  if (Array.isArray(children)) {
	    var res = []
	    for (var i = 0, l = children.length; i < l; i++) {
	      var c = children[i]
	      var last = res[res.length - 1]
	      //  nested
	      if (Array.isArray(c)) {
	        res.push.apply(res, normalizeChildren(c, ns, i))
	      } else if (isPrimitive(c)) {
	        if (last && last.text) {
	          last.text += String(c)
	        } else if (c !== '') {
	          // convert primitive to vnode
	          res.push(createTextVNode(c))
	        }
	      } else if (c instanceof VNode) {
	        if (c.text && last && last.text) {
	          last.text += c.text
	        } else {
	          // inherit parent namespace
	          if (ns) {
	            applyNS(c, ns)
	          }
	          // default key for nested array children (likely generated by v-for)
	          if (c.key == null && nestedIndex != null) {
	            c.key = "__vlist_" + nestedIndex + "_" + i + "__"
	          }
	          res.push(c)
	        }
	      }
	    }
	    return res
	  }
	}
	
	function createTextVNode (val) {
	  return new VNode(undefined, undefined, undefined, String(val))
	}
	
	function applyNS (vnode, ns) {
	  if (vnode.tag && !vnode.ns) {
	    vnode.ns = ns
	    if (vnode.children) {
	      for (var i = 0, l = vnode.children.length; i < l; i++) {
	        applyNS(vnode.children[i], ns)
	      }
	    }
	  }
	}
	
	function getFirstComponentChild (children) {
	  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
	}
	
	function mergeVNodeHook (def, key, hook) {
	  var oldHook = def[key]
	  if (oldHook) {
	    var injectedHash = def.__injected || (def.__injected = {})
	    if (!injectedHash[key]) {
	      injectedHash[key] = true
	      def[key] = function () {
	        oldHook.apply(this, arguments)
	        hook.apply(this, arguments)
	      }
	    }
	  } else {
	    def[key] = hook
	  }
	}
	
	function updateListeners (
	  on,
	  oldOn,
	  add,
	  remove
	) {
	  var name, cur, old, fn, event, capture
	  for (name in on) {
	    cur = on[name]
	    old = oldOn[name]
	    if (!cur) {
	      process.env.NODE_ENV !== 'production' && warn(
	        ("Handler for event \"" + name + "\" is undefined.")
	      )
	    } else if (!old) {
	      capture = name.charAt(0) === '!'
	      event = capture ? name.slice(1) : name
	      if (Array.isArray(cur)) {
	        add(event, (cur.invoker = arrInvoker(cur)), capture)
	      } else {
	        if (!cur.invoker) {
	          fn = cur
	          cur = on[name] = {}
	          cur.fn = fn
	          cur.invoker = fnInvoker(cur)
	        }
	        add(event, cur.invoker, capture)
	      }
	    } else if (cur !== old) {
	      if (Array.isArray(old)) {
	        old.length = cur.length
	        for (var i = 0; i < old.length; i++) old[i] = cur[i]
	        on[name] = old
	      } else {
	        old.fn = cur
	        on[name] = old
	      }
	    }
	  }
	  for (name in oldOn) {
	    if (!on[name]) {
	      event = name.charAt(0) === '!' ? name.slice(1) : name
	      remove(event, oldOn[name].invoker)
	    }
	  }
	}
	
	function arrInvoker (arr) {
	  return function (ev) {
	    var arguments$1 = arguments;
	
	    var single = arguments.length === 1
	    for (var i = 0; i < arr.length; i++) {
	      single ? arr[i](ev) : arr[i].apply(null, arguments$1)
	    }
	  }
	}
	
	function fnInvoker (o) {
	  return function (ev) {
	    var single = arguments.length === 1
	    single ? o.fn(ev) : o.fn.apply(null, arguments)
	  }
	}
	
	/*  */
	
	var activeInstance = null
	
	function initLifecycle (vm) {
	  var options = vm.$options
	
	  // locate first non-abstract parent
	  var parent = options.parent
	  if (parent && !options.abstract) {
	    while (parent.$options.abstract && parent.$parent) {
	      parent = parent.$parent
	    }
	    parent.$children.push(vm)
	  }
	
	  vm.$parent = parent
	  vm.$root = parent ? parent.$root : vm
	
	  vm.$children = []
	  vm.$refs = {}
	
	  vm._watcher = null
	  vm._inactive = false
	  vm._isMounted = false
	  vm._isDestroyed = false
	  vm._isBeingDestroyed = false
	}
	
	function lifecycleMixin (Vue) {
	  Vue.prototype._mount = function (
	    el,
	    hydrating
	  ) {
	    var vm = this
	    vm.$el = el
	    if (!vm.$options.render) {
	      vm.$options.render = emptyVNode
	      if (process.env.NODE_ENV !== 'production') {
	        /* istanbul ignore if */
	        if (vm.$options.template) {
	          warn(
	            'You are using the runtime-only build of Vue where the template ' +
	            'option is not available. Either pre-compile the templates into ' +
	            'render functions, or use the compiler-included build.',
	            vm
	          )
	        } else {
	          warn(
	            'Failed to mount component: template or render function not defined.',
	            vm
	          )
	        }
	      }
	    }
	    callHook(vm, 'beforeMount')
	    vm._watcher = new Watcher(vm, function () {
	      vm._update(vm._render(), hydrating)
	    }, noop)
	    hydrating = false
	    // root instance, call mounted on self
	    // mounted is called for child components in its inserted hook
	    if (vm.$root === vm) {
	      vm._isMounted = true
	      callHook(vm, 'mounted')
	    }
	    return vm
	  }
	
	  Vue.prototype._update = function (vnode, hydrating) {
	    var vm = this
	    if (vm._isMounted) {
	      callHook(vm, 'beforeUpdate')
	    }
	    var prevEl = vm.$el
	    var prevActiveInstance = activeInstance
	    activeInstance = vm
	    var prevVnode = vm._vnode
	    vm._vnode = vnode
	    if (!prevVnode) {
	      // Vue.prototype.__patch__ is injected in entry points
	      // based on the rendering backend used.
	      vm.$el = vm.__patch__(vm.$el, vnode, hydrating)
	    } else {
	      vm.$el = vm.__patch__(prevVnode, vnode)
	    }
	    activeInstance = prevActiveInstance
	    // update __vue__ reference
	    if (prevEl) {
	      prevEl.__vue__ = null
	    }
	    if (vm.$el) {
	      vm.$el.__vue__ = vm
	    }
	    // if parent is an HOC, update its $el as well
	    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
	      vm.$parent.$el = vm.$el
	    }
	    if (vm._isMounted) {
	      callHook(vm, 'updated')
	    }
	  }
	
	  Vue.prototype._updateFromParent = function (
	    propsData,
	    listeners,
	    parentVnode,
	    renderChildren
	  ) {
	    var vm = this
	    var hasChildren = !!(vm.$options._renderChildren || renderChildren)
	    vm.$options._parentVnode = parentVnode
	    vm.$options._renderChildren = renderChildren
	    // update props
	    if (propsData && vm.$options.props) {
	      observerState.shouldConvert = false
	      if (process.env.NODE_ENV !== 'production') {
	        observerState.isSettingProps = true
	      }
	      var propKeys = vm.$options._propKeys || []
	      for (var i = 0; i < propKeys.length; i++) {
	        var key = propKeys[i]
	        vm[key] = validateProp(key, vm.$options.props, propsData, vm)
	      }
	      observerState.shouldConvert = true
	      if (process.env.NODE_ENV !== 'production') {
	        observerState.isSettingProps = false
	      }
	    }
	    // update listeners
	    if (listeners) {
	      var oldListeners = vm.$options._parentListeners
	      vm.$options._parentListeners = listeners
	      vm._updateListeners(listeners, oldListeners)
	    }
	    // resolve slots + force update if has children
	    if (hasChildren) {
	      vm.$slots = resolveSlots(renderChildren)
	      vm.$forceUpdate()
	    }
	  }
	
	  Vue.prototype.$forceUpdate = function () {
	    var vm = this
	    if (vm._watcher) {
	      vm._watcher.update()
	    }
	  }
	
	  Vue.prototype.$destroy = function () {
	    var vm = this
	    if (vm._isBeingDestroyed) {
	      return
	    }
	    callHook(vm, 'beforeDestroy')
	    vm._isBeingDestroyed = true
	    // remove self from parent
	    var parent = vm.$parent
	    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
	      remove(parent.$children, vm)
	    }
	    // teardown watchers
	    if (vm._watcher) {
	      vm._watcher.teardown()
	    }
	    var i = vm._watchers.length
	    while (i--) {
	      vm._watchers[i].teardown()
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (vm._data.__ob__) {
	      vm._data.__ob__.vmCount--
	    }
	    // call the last hook...
	    vm._isDestroyed = true
	    callHook(vm, 'destroyed')
	    // turn off all instance listeners.
	    vm.$off()
	    // remove __vue__ reference
	    if (vm.$el) {
	      vm.$el.__vue__ = null
	    }
	  }
	}
	
	function callHook (vm, hook) {
	  var handlers = vm.$options[hook]
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      handlers[i].call(vm)
	    }
	  }
	  vm.$emit('hook:' + hook)
	}
	
	/*  */
	
	var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy }
	var hooksToMerge = Object.keys(hooks)
	
	function createComponent (
	  Ctor,
	  data,
	  context,
	  children,
	  tag
	) {
	  if (!Ctor) {
	    return
	  }
	
	  if (isObject(Ctor)) {
	    Ctor = Vue.extend(Ctor)
	  }
	
	  if (typeof Ctor !== 'function') {
	    if (process.env.NODE_ENV !== 'production') {
	      warn(("Invalid Component definition: " + (String(Ctor))), context)
	    }
	    return
	  }
	
	  // async component
	  if (!Ctor.cid) {
	    if (Ctor.resolved) {
	      Ctor = Ctor.resolved
	    } else {
	      Ctor = resolveAsyncComponent(Ctor, function () {
	        // it's ok to queue this on every render because
	        // $forceUpdate is buffered by the scheduler.
	        context.$forceUpdate()
	      })
	      if (!Ctor) {
	        // return nothing if this is indeed an async component
	        // wait for the callback to trigger parent update.
	        return
	      }
	    }
	  }
	
	  data = data || {}
	
	  // extract props
	  var propsData = extractProps(data, Ctor)
	
	  // functional component
	  if (Ctor.options.functional) {
	    return createFunctionalComponent(Ctor, propsData, data, context, children)
	  }
	
	  // extract listeners, since these needs to be treated as
	  // child component listeners instead of DOM listeners
	  var listeners = data.on
	  // replace with listeners with .native modifier
	  data.on = data.nativeOn
	
	  if (Ctor.options.abstract) {
	    // abstract components do not keep anything
	    // other than props & listeners
	    data = {}
	  }
	
	  // merge component management hooks onto the placeholder node
	  mergeHooks(data)
	
	  // return a placeholder vnode
	  var name = Ctor.options.name || tag
	  var vnode = new VNode(
	    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
	    data, undefined, undefined, undefined, undefined, context,
	    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
	  )
	  return vnode
	}
	
	function createFunctionalComponent (
	  Ctor,
	  propsData,
	  data,
	  context,
	  children
	) {
	  var props = {}
	  var propOptions = Ctor.options.props
	  if (propOptions) {
	    for (var key in propOptions) {
	      props[key] = validateProp(key, propOptions, propsData)
	    }
	  }
	  return Ctor.options.render.call(
	    null,
	    context.$createElement,
	    {
	      props: props,
	      data: data,
	      parent: context,
	      children: normalizeChildren(children),
	      slots: function () { return resolveSlots(children); }
	    }
	  )
	}
	
	function createComponentInstanceForVnode (
	  vnode, // we know it's MountedComponentVNode but flow doesn't
	  parent // activeInstance in lifecycle state
	) {
	  var vnodeComponentOptions = vnode.componentOptions
	  var options = {
	    _isComponent: true,
	    parent: parent,
	    propsData: vnodeComponentOptions.propsData,
	    _componentTag: vnodeComponentOptions.tag,
	    _parentVnode: vnode,
	    _parentListeners: vnodeComponentOptions.listeners,
	    _renderChildren: vnodeComponentOptions.children
	  }
	  // check inline-template render functions
	  var inlineTemplate = vnode.data.inlineTemplate
	  if (inlineTemplate) {
	    options.render = inlineTemplate.render
	    options.staticRenderFns = inlineTemplate.staticRenderFns
	  }
	  return new vnodeComponentOptions.Ctor(options)
	}
	
	function init (vnode, hydrating) {
	  if (!vnode.child || vnode.child._isDestroyed) {
	    var child = vnode.child = createComponentInstanceForVnode(vnode, activeInstance)
	    child.$mount(hydrating ? vnode.elm : undefined, hydrating)
	  }
	}
	
	function prepatch (
	  oldVnode,
	  vnode
	) {
	  var options = vnode.componentOptions
	  var child = vnode.child = oldVnode.child
	  child._updateFromParent(
	    options.propsData, // updated props
	    options.listeners, // updated listeners
	    vnode, // new parent vnode
	    options.children // new children
	  )
	}
	
	function insert (vnode) {
	  if (!vnode.child._isMounted) {
	    vnode.child._isMounted = true
	    callHook(vnode.child, 'mounted')
	  }
	  if (vnode.data.keepAlive) {
	    vnode.child._inactive = false
	    callHook(vnode.child, 'activated')
	  }
	}
	
	function destroy (vnode) {
	  if (!vnode.child._isDestroyed) {
	    if (!vnode.data.keepAlive) {
	      vnode.child.$destroy()
	    } else {
	      vnode.child._inactive = true
	      callHook(vnode.child, 'deactivated')
	    }
	  }
	}
	
	function resolveAsyncComponent (
	  factory,
	  cb
	) {
	  if (factory.requested) {
	    // pool callbacks
	    factory.pendingCallbacks.push(cb)
	  } else {
	    factory.requested = true
	    var cbs = factory.pendingCallbacks = [cb]
	    var sync = true
	
	    var resolve = function (res) {
	      if (isObject(res)) {
	        res = Vue.extend(res)
	      }
	      // cache resolved
	      factory.resolved = res
	      // invoke callbacks only if this is not a synchronous resolve
	      // (async resolves are shimmed as synchronous during SSR)
	      if (!sync) {
	        for (var i = 0, l = cbs.length; i < l; i++) {
	          cbs[i](res)
	        }
	      }
	    }
	
	    var reject = function (reason) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "Failed to resolve async component: " + (String(factory)) +
	        (reason ? ("\nReason: " + reason) : '')
	      )
	    }
	
	    var res = factory(resolve, reject)
	
	    // handle promise
	    if (res && typeof res.then === 'function' && !factory.resolved) {
	      res.then(resolve, reject)
	    }
	
	    sync = false
	    // return in case resolved synchronously
	    return factory.resolved
	  }
	}
	
	function extractProps (data, Ctor) {
	  // we are only extrating raw values here.
	  // validation and default values are handled in the child
	  // component itself.
	  var propOptions = Ctor.options.props
	  if (!propOptions) {
	    return
	  }
	  var res = {}
	  var attrs = data.attrs;
	  var props = data.props;
	  var domProps = data.domProps;
	  if (attrs || props || domProps) {
	    for (var key in propOptions) {
	      var altKey = hyphenate(key)
	      checkProp(res, props, key, altKey, true) ||
	      checkProp(res, attrs, key, altKey) ||
	      checkProp(res, domProps, key, altKey)
	    }
	  }
	  return res
	}
	
	function checkProp (
	  res,
	  hash,
	  key,
	  altKey,
	  preserve
	) {
	  if (hash) {
	    if (hasOwn(hash, key)) {
	      res[key] = hash[key]
	      if (!preserve) {
	        delete hash[key]
	      }
	      return true
	    } else if (hasOwn(hash, altKey)) {
	      res[key] = hash[altKey]
	      if (!preserve) {
	        delete hash[altKey]
	      }
	      return true
	    }
	  }
	  return false
	}
	
	function mergeHooks (data) {
	  if (!data.hook) {
	    data.hook = {}
	  }
	  for (var i = 0; i < hooksToMerge.length; i++) {
	    var key = hooksToMerge[i]
	    var fromParent = data.hook[key]
	    var ours = hooks[key]
	    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours
	  }
	}
	
	function mergeHook$1 (a, b) {
	  // since all hooks have at most two args, use fixed args
	  // to avoid having to use fn.apply().
	  return function (_, __) {
	    a(_, __)
	    b(_, __)
	  }
	}
	
	/*  */
	
	// wrapper function for providing a more flexible interface
	// without getting yelled at by flow
	function createElement (
	  tag,
	  data,
	  children
	) {
	  if (data && (Array.isArray(data) || typeof data !== 'object')) {
	    children = data
	    data = undefined
	  }
	  // make sure to use real instance instead of proxy as context
	  return _createElement(this._self, tag, data, children)
	}
	
	function _createElement (
	  context,
	  tag,
	  data,
	  children
	) {
	  if (data && data.__ob__) {
	    process.env.NODE_ENV !== 'production' && warn(
	      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
	      'Always create fresh vnode data objects in each render!',
	      context
	    )
	    return
	  }
	  if (!tag) {
	    // in case of component :is set to falsy value
	    return emptyVNode()
	  }
	  if (typeof tag === 'string') {
	    var Ctor
	    var ns = config.getTagNamespace(tag)
	    if (config.isReservedTag(tag)) {
	      // platform built-in elements
	      return new VNode(
	        tag, data, normalizeChildren(children, ns),
	        undefined, undefined, ns, context
	      )
	    } else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
	      // component
	      return createComponent(Ctor, data, context, children, tag)
	    } else {
	      // unknown or unlisted namespaced elements
	      // check at runtime because it may get assigned a namespace when its
	      // parent normalizes children
	      return new VNode(
	        tag, data, normalizeChildren(children, ns),
	        undefined, undefined, ns, context
	      )
	    }
	  } else {
	    // direct component options / constructor
	    return createComponent(tag, data, context, children)
	  }
	}
	
	/*  */
	
	function initRender (vm) {
	  vm.$vnode = null // the placeholder node in parent tree
	  vm._vnode = null // the root of the child tree
	  vm._staticTrees = null
	  vm.$slots = resolveSlots(vm.$options._renderChildren)
	  // bind the public createElement fn to this instance
	  // so that we get proper render context inside it.
	  vm.$createElement = bind(createElement, vm)
	  if (vm.$options.el) {
	    vm.$mount(vm.$options.el)
	  }
	}
	
	function renderMixin (Vue) {
	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this)
	  }
	
	  Vue.prototype._render = function () {
	    var vm = this
	    var ref = vm.$options;
	    var render = ref.render;
	    var staticRenderFns = ref.staticRenderFns;
	    var _parentVnode = ref._parentVnode;
	
	    if (vm._isMounted) {
	      // clone slot nodes on re-renders
	      for (var key in vm.$slots) {
	        vm.$slots[key] = cloneVNodes(vm.$slots[key])
	      }
	    }
	
	    if (staticRenderFns && !vm._staticTrees) {
	      vm._staticTrees = []
	    }
	    // set parent vnode. this allows render functions to have access
	    // to the data on the placeholder node.
	    vm.$vnode = _parentVnode
	    // render self
	    var vnode
	    try {
	      vnode = render.call(vm._renderProxy, vm.$createElement)
	    } catch (e) {
	      if (process.env.NODE_ENV !== 'production') {
	        warn(("Error when rendering " + (formatComponentName(vm)) + ":"))
	      }
	      /* istanbul ignore else */
	      if (config.errorHandler) {
	        config.errorHandler.call(null, e, vm)
	      } else {
	        if (config._isServer) {
	          throw e
	        } else {
	          setTimeout(function () { throw e }, 0)
	        }
	      }
	      // return previous vnode to prevent render error causing blank component
	      vnode = vm._vnode
	    }
	    // return empty vnode in case the render function errored out
	    if (!(vnode instanceof VNode)) {
	      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
	        warn(
	          'Multiple root nodes returned from render function. Render function ' +
	          'should return a single root node.',
	          vm
	        )
	      }
	      vnode = emptyVNode()
	    }
	    // set parent
	    vnode.parent = _parentVnode
	    return vnode
	  }
	
	  // shorthands used in render functions
	  Vue.prototype._h = createElement
	  // toString for mustaches
	  Vue.prototype._s = _toString
	  // number conversion
	  Vue.prototype._n = toNumber
	  // empty vnode
	  Vue.prototype._e = emptyVNode
	
	  // render static tree by index
	  Vue.prototype._m = function renderStatic (
	    index,
	    isInFor
	  ) {
	    var tree = this._staticTrees[index]
	    // if has already-rendered static tree and not inside v-for,
	    // we can reuse the same tree by doing a shallow clone.
	    if (tree && !isInFor) {
	      return Array.isArray(tree)
	        ? cloneVNodes(tree)
	        : cloneVNode(tree)
	    }
	    // otherwise, render a fresh tree.
	    tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy)
	    if (Array.isArray(tree)) {
	      for (var i = 0; i < tree.length; i++) {
	        tree[i].isStatic = true
	        tree[i].key = "__static__" + index + "_" + i
	      }
	    } else {
	      tree.isStatic = true
	      tree.key = "__static__" + index
	    }
	    return tree
	  }
	
	  // filter resolution helper
	  var identity = function (_) { return _; }
	  Vue.prototype._f = function resolveFilter (id) {
	    return resolveAsset(this.$options, 'filters', id, true) || identity
	  }
	
	  // render v-for
	  Vue.prototype._l = function renderList (
	    val,
	    render
	  ) {
	    var ret, i, l, keys, key
	    if (Array.isArray(val)) {
	      ret = new Array(val.length)
	      for (i = 0, l = val.length; i < l; i++) {
	        ret[i] = render(val[i], i)
	      }
	    } else if (typeof val === 'number') {
	      ret = new Array(val)
	      for (i = 0; i < val; i++) {
	        ret[i] = render(i + 1, i)
	      }
	    } else if (isObject(val)) {
	      keys = Object.keys(val)
	      ret = new Array(keys.length)
	      for (i = 0, l = keys.length; i < l; i++) {
	        key = keys[i]
	        ret[i] = render(val[key], key, i)
	      }
	    }
	    return ret
	  }
	
	  // renderSlot
	  Vue.prototype._t = function (
	    name,
	    fallback
	  ) {
	    var slotNodes = this.$slots[name]
	    // warn duplicate slot usage
	    if (slotNodes && process.env.NODE_ENV !== 'production') {
	      slotNodes._rendered && warn(
	        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
	        "- this will likely cause render errors.",
	        this
	      )
	      slotNodes._rendered = true
	    }
	    return slotNodes || fallback
	  }
	
	  // apply v-bind object
	  Vue.prototype._b = function bindProps (
	    vnode,
	    value,
	    asProp) {
	    if (value) {
	      if (!isObject(value)) {
	        process.env.NODE_ENV !== 'production' && warn(
	          'v-bind without argument expects an Object or Array value',
	          this
	        )
	      } else {
	        if (Array.isArray(value)) {
	          value = toObject(value)
	        }
	        var data = vnode.data
	        for (var key in value) {
	          if (key === 'class' || key === 'style') {
	            data[key] = value[key]
	          } else {
	            var hash = asProp || config.mustUseProp(key)
	              ? data.domProps || (data.domProps = {})
	              : data.attrs || (data.attrs = {})
	            hash[key] = value[key]
	          }
	        }
	      }
	    }
	  }
	
	  // expose v-on keyCodes
	  Vue.prototype._k = function getKeyCodes (key) {
	    return config.keyCodes[key]
	  }
	}
	
	function resolveSlots (
	  renderChildren
	) {
	  var slots = {}
	  if (!renderChildren) {
	    return slots
	  }
	  var children = normalizeChildren(renderChildren) || []
	  var defaultSlot = []
	  var name, child
	  for (var i = 0, l = children.length; i < l; i++) {
	    child = children[i]
	    if (child.data && (name = child.data.slot)) {
	      delete child.data.slot
	      var slot = (slots[name] || (slots[name] = []))
	      if (child.tag === 'template') {
	        slot.push.apply(slot, child.children)
	      } else {
	        slot.push(child)
	      }
	    } else {
	      defaultSlot.push(child)
	    }
	  }
	  // ignore single whitespace
	  if (defaultSlot.length && !(
	    defaultSlot.length === 1 &&
	    (defaultSlot[0].text === ' ' || defaultSlot[0].isComment)
	  )) {
	    slots.default = defaultSlot
	  }
	  return slots
	}
	
	/*  */
	
	function initEvents (vm) {
	  vm._events = Object.create(null)
	  // init parent attached events
	  var listeners = vm.$options._parentListeners
	  var on = bind(vm.$on, vm)
	  var off = bind(vm.$off, vm)
	  vm._updateListeners = function (listeners, oldListeners) {
	    updateListeners(listeners, oldListeners || {}, on, off)
	  }
	  if (listeners) {
	    vm._updateListeners(listeners)
	  }
	}
	
	function eventsMixin (Vue) {
	  Vue.prototype.$on = function (event, fn) {
	    var vm = this
	    ;(vm._events[event] || (vm._events[event] = [])).push(fn)
	    return vm
	  }
	
	  Vue.prototype.$once = function (event, fn) {
	    var vm = this
	    function on () {
	      vm.$off(event, on)
	      fn.apply(vm, arguments)
	    }
	    on.fn = fn
	    vm.$on(event, on)
	    return vm
	  }
	
	  Vue.prototype.$off = function (event, fn) {
	    var vm = this
	    // all
	    if (!arguments.length) {
	      vm._events = Object.create(null)
	      return vm
	    }
	    // specific event
	    var cbs = vm._events[event]
	    if (!cbs) {
	      return vm
	    }
	    if (arguments.length === 1) {
	      vm._events[event] = null
	      return vm
	    }
	    // specific handler
	    var cb
	    var i = cbs.length
	    while (i--) {
	      cb = cbs[i]
	      if (cb === fn || cb.fn === fn) {
	        cbs.splice(i, 1)
	        break
	      }
	    }
	    return vm
	  }
	
	  Vue.prototype.$emit = function (event) {
	    var vm = this
	    var cbs = vm._events[event]
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs
	      var args = toArray(arguments, 1)
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        cbs[i].apply(vm, args)
	      }
	    }
	    return vm
	  }
	}
	
	/*  */
	
	var uid = 0
	
	function initMixin (Vue) {
	  Vue.prototype._init = function (options) {
	    var vm = this
	    // a uid
	    vm._uid = uid++
	    // a flag to avoid this being observed
	    vm._isVue = true
	    // merge options
	    if (options && options._isComponent) {
	      // optimize internal component instantiation
	      // since dynamic options merging is pretty slow, and none of the
	      // internal component options needs special treatment.
	      initInternalComponent(vm, options)
	    } else {
	      vm.$options = mergeOptions(
	        resolveConstructorOptions(vm),
	        options || {},
	        vm
	      )
	    }
	    /* istanbul ignore else */
	    if (process.env.NODE_ENV !== 'production') {
	      initProxy(vm)
	    } else {
	      vm._renderProxy = vm
	    }
	    // expose real self
	    vm._self = vm
	    initLifecycle(vm)
	    initEvents(vm)
	    callHook(vm, 'beforeCreate')
	    initState(vm)
	    callHook(vm, 'created')
	    initRender(vm)
	  }
	
	  function initInternalComponent (vm, options) {
	    var opts = vm.$options = Object.create(resolveConstructorOptions(vm))
	    // doing this because it's faster than dynamic enumeration.
	    opts.parent = options.parent
	    opts.propsData = options.propsData
	    opts._parentVnode = options._parentVnode
	    opts._parentListeners = options._parentListeners
	    opts._renderChildren = options._renderChildren
	    opts._componentTag = options._componentTag
	    if (options.render) {
	      opts.render = options.render
	      opts.staticRenderFns = options.staticRenderFns
	    }
	  }
	
	  function resolveConstructorOptions (vm) {
	    var Ctor = vm.constructor
	    var options = Ctor.options
	    if (Ctor.super) {
	      var superOptions = Ctor.super.options
	      var cachedSuperOptions = Ctor.superOptions
	      if (superOptions !== cachedSuperOptions) {
	        // super option changed
	        Ctor.superOptions = superOptions
	        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions)
	        if (options.name) {
	          options.components[options.name] = Ctor
	        }
	      }
	    }
	    return options
	  }
	}
	
	function Vue (options) {
	  this._init(options)
	}
	
	initMixin(Vue)
	stateMixin(Vue)
	eventsMixin(Vue)
	lifecycleMixin(Vue)
	renderMixin(Vue)
	
	var warn
	var formatComponentName
	
	if (process.env.NODE_ENV !== 'production') {
	  var hasConsole = typeof console !== 'undefined'
	
	  warn = function (msg, vm) {
	    if (hasConsole && (!config.silent)) {
	      console.error("[Vue warn]: " + msg + " " + (
	        vm ? formatLocation(formatComponentName(vm)) : ''
	      ))
	    }
	  }
	
	  formatComponentName = function (vm) {
	    if (vm.$root === vm) {
	      return 'root instance'
	    }
	    var name = vm._isVue
	      ? vm.$options.name || vm.$options._componentTag
	      : vm.name
	    return name ? ("component <" + name + ">") : "anonymous component"
	  }
	
	  var formatLocation = function (str) {
	    if (str === 'anonymous component') {
	      str += " - use the \"name\" option for better debugging messages."
	    }
	    return ("(found in " + str + ")")
	  }
	}
	
	/*  */
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 */
	var strats = config.optionMergeStrategies
	
	/**
	 * Options with restrictions
	 */
	if (process.env.NODE_ENV !== 'production') {
	  strats.el = strats.propsData = function (parent, child, vm, key) {
	    if (!vm) {
	      warn(
	        "option \"" + key + "\" can only be used during instance " +
	        'creation with the `new` keyword.'
	      )
	    }
	    return defaultStrat(parent, child)
	  }
	
	  strats.name = function (parent, child, vm) {
	    if (vm && child) {
	      warn(
	        'options "name" can only be used as a component definition option, ' +
	        'not during instance creation.'
	      )
	    }
	    return defaultStrat(parent, child)
	  }
	}
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	function mergeData (to, from) {
	  var key, toVal, fromVal
	  for (key in from) {
	    toVal = to[key]
	    fromVal = from[key]
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal)
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal)
	    }
	  }
	  return to
	}
	
	/**
	 * Data
	 */
	strats.data = function (
	  parentVal,
	  childVal,
	  vm
	) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn(
	        'The "data" option should be a function ' +
	        'that returns a per-instance value in component ' +
	        'definitions.',
	        vm
	      )
	      return parentVal
	    }
	    if (!parentVal) {
	      return childVal
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn () {
	      return mergeData(
	        childVal.call(this),
	        parentVal.call(this)
	      )
	    }
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn () {
	      // instance merge
	      var instanceData = typeof childVal === 'function'
	        ? childVal.call(vm)
	        : childVal
	      var defaultData = typeof parentVal === 'function'
	        ? parentVal.call(vm)
	        : undefined
	      if (instanceData) {
	        return mergeData(instanceData, defaultData)
	      } else {
	        return defaultData
	      }
	    }
	  }
	}
	
	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	function mergeHook (
	  parentVal,
	  childVal
	) {
	  return childVal
	    ? parentVal
	      ? parentVal.concat(childVal)
	      : Array.isArray(childVal)
	        ? childVal
	        : [childVal]
	    : parentVal
	}
	
	config._lifecycleHooks.forEach(function (hook) {
	  strats[hook] = mergeHook
	})
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	function mergeAssets (parentVal, childVal) {
	  var res = Object.create(parentVal || null)
	  return childVal
	    ? extend(res, childVal)
	    : res
	}
	
	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets
	})
	
	/**
	 * Watchers.
	 *
	 * Watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	strats.watch = function (parentVal, childVal) {
	  /* istanbul ignore if */
	  if (!childVal) return parentVal
	  if (!parentVal) return childVal
	  var ret = {}
	  extend(ret, parentVal)
	  for (var key in childVal) {
	    var parent = ret[key]
	    var child = childVal[key]
	    if (parent && !Array.isArray(parent)) {
	      parent = [parent]
	    }
	    ret[key] = parent
	      ? parent.concat(child)
	      : [child]
	  }
	  return ret
	}
	
	/**
	 * Other object hashes.
	 */
	strats.props =
	strats.methods =
	strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal
	  if (!parentVal) return childVal
	  var ret = Object.create(null)
	  extend(ret, parentVal)
	  extend(ret, childVal)
	  return ret
	}
	
	/**
	 * Default strategy.
	 */
	var defaultStrat = function (parentVal, childVal) {
	  return childVal === undefined
	    ? parentVal
	    : childVal
	}
	
	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 */
	function normalizeComponents (options) {
	  if (options.components) {
	    var components = options.components
	    var def
	    for (var key in components) {
	      var lower = key.toLowerCase()
	      if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
	        process.env.NODE_ENV !== 'production' && warn(
	          'Do not use built-in or reserved HTML elements as component ' +
	          'id: ' + key
	        )
	        continue
	      }
	      def = components[key]
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def)
	      }
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 */
	function normalizeProps (options) {
	  var props = options.props
	  if (!props) return
	  var res = {}
	  var i, val, name
	  if (Array.isArray(props)) {
	    i = props.length
	    while (i--) {
	      val = props[i]
	      if (typeof val === 'string') {
	        name = camelize(val)
	        res[name] = { type: null }
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('props must be strings when using array syntax.')
	      }
	    }
	  } else if (isPlainObject(props)) {
	    for (var key in props) {
	      val = props[key]
	      name = camelize(key)
	      res[name] = isPlainObject(val)
	        ? val
	        : { type: val }
	    }
	  }
	  options.props = res
	}
	
	/**
	 * Normalize raw function directives into object format.
	 */
	function normalizeDirectives (options) {
	  var dirs = options.directives
	  if (dirs) {
	    for (var key in dirs) {
	      var def = dirs[key]
	      if (typeof def === 'function') {
	        dirs[key] = { bind: def, update: def }
	      }
	    }
	  }
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 */
	function mergeOptions (
	  parent,
	  child,
	  vm
	) {
	  normalizeComponents(child)
	  normalizeProps(child)
	  normalizeDirectives(child)
	  var extendsFrom = child.extends
	  if (extendsFrom) {
	    parent = typeof extendsFrom === 'function'
	      ? mergeOptions(parent, extendsFrom.options, vm)
	      : mergeOptions(parent, extendsFrom, vm)
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i]
	      if (mixin.prototype instanceof Vue) {
	        mixin = mixin.options
	      }
	      parent = mergeOptions(parent, mixin, vm)
	    }
	  }
	  var options = {}
	  var key
	  for (key in parent) {
	    mergeField(key)
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key)
	    }
	  }
	  function mergeField (key) {
	    var strat = strats[key] || defaultStrat
	    options[key] = strat(parent[key], child[key], vm, key)
	  }
	  return options
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 */
	function resolveAsset (
	  options,
	  type,
	  id,
	  warnMissing
	) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return
	  }
	  var assets = options[type]
	  var res = assets[id] ||
	    // camelCase ID
	    assets[camelize(id)] ||
	    // Pascal Case ID
	    assets[capitalize(camelize(id))]
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn(
	      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
	      options
	    )
	  }
	  return res
	}
	
	/*  */
	
	function validateProp (
	  key,
	  propOptions,
	  propsData,
	  vm
	) {
	  /* istanbul ignore if */
	  if (!propsData) return
	  var prop = propOptions[key]
	  var absent = !hasOwn(propsData, key)
	  var value = propsData[key]
	  // handle boolean props
	  if (getType(prop.type) === 'Boolean') {
	    if (absent && !hasOwn(prop, 'default')) {
	      value = false
	    } else if (value === '' || value === hyphenate(key)) {
	      value = true
	    }
	  }
	  // check default value
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop, key)
	    // since the default value is a fresh copy,
	    // make sure to observe it.
	    var prevShouldConvert = observerState.shouldConvert
	    observerState.shouldConvert = true
	    observe(value)
	    observerState.shouldConvert = prevShouldConvert
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    assertProp(prop, key, value, vm, absent)
	  }
	  return value
	}
	
	/**
	 * Get the default value of a prop.
	 */
	function getPropDefaultValue (vm, prop, name) {
	  // no default, return undefined
	  if (!hasOwn(prop, 'default')) {
	    return undefined
	  }
	  var def = prop.default
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Invalid default value for prop "' + name + '": ' +
	      'Props with type Object/Array must use a factory function ' +
	      'to return the default value.',
	      vm
	    )
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && prop.type !== Function
	    ? def.call(vm)
	    : def
	}
	
	/**
	 * Assert whether a prop is valid.
	 */
	function assertProp (
	  prop,
	  name,
	  value,
	  vm,
	  absent
	) {
	  if (prop.required && absent) {
	    warn(
	      'Missing required prop: "' + name + '"',
	      vm
	    )
	    return
	  }
	  if (value == null && !prop.required) {
	    return
	  }
	  var type = prop.type
	  var valid = !type || type === true
	  var expectedTypes = []
	  if (type) {
	    if (!Array.isArray(type)) {
	      type = [type]
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i])
	      expectedTypes.push(assertedType.expectedType)
	      valid = assertedType.valid
	    }
	  }
	  if (!valid) {
	    warn(
	      'Invalid prop: type check failed for prop "' + name + '".' +
	      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
	      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
	      vm
	    )
	    return
	  }
	  var validator = prop.validator
	  if (validator) {
	    if (!validator(value)) {
	      warn(
	        'Invalid prop: custom validator check failed for prop "' + name + '".',
	        vm
	      )
	    }
	  }
	}
	
	/**
	 * Assert the type of a value
	 */
	function assertType (value, type) {
	  var valid
	  var expectedType = getType(type)
	  if (expectedType === 'String') {
	    valid = typeof value === (expectedType = 'string')
	  } else if (expectedType === 'Number') {
	    valid = typeof value === (expectedType = 'number')
	  } else if (expectedType === 'Boolean') {
	    valid = typeof value === (expectedType = 'boolean')
	  } else if (expectedType === 'Function') {
	    valid = typeof value === (expectedType = 'function')
	  } else if (expectedType === 'Object') {
	    valid = isPlainObject(value)
	  } else if (expectedType === 'Array') {
	    valid = Array.isArray(value)
	  } else {
	    valid = value instanceof type
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  }
	}
	
	/**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */
	function getType (fn) {
	  var match = fn && fn.toString().match(/^\s*function (\w+)/)
	  return match && match[1]
	}
	
	
	
	var util = Object.freeze({
		defineReactive: defineReactive,
		_toString: _toString,
		toNumber: toNumber,
		makeMap: makeMap,
		isBuiltInTag: isBuiltInTag,
		remove: remove,
		hasOwn: hasOwn,
		isPrimitive: isPrimitive,
		cached: cached,
		camelize: camelize,
		capitalize: capitalize,
		hyphenate: hyphenate,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		toObject: toObject,
		noop: noop,
		no: no,
		genStaticKeys: genStaticKeys,
		isReserved: isReserved,
		def: def,
		parsePath: parsePath,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		UA: UA,
		nextTick: nextTick,
		get _Set () { return _Set; },
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		get warn () { return warn; },
		get formatComponentName () { return formatComponentName; },
		validateProp: validateProp
	});
	
	/*  */
	
	function initUse (Vue) {
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return
	    }
	    // additional parameters
	    var args = toArray(arguments, 1)
	    args.unshift(this)
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args)
	    } else {
	      plugin.apply(null, args)
	    }
	    plugin.installed = true
	    return this
	  }
	}
	
	/*  */
	
	function initMixin$1 (Vue) {
	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin)
	  }
	}
	
	/*  */
	
	function initExtend (Vue) {
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	  Vue.cid = 0
	  var cid = 1
	
	  /**
	   * Class inheritance
	   */
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {}
	    var Super = this
	    var isFirstExtend = Super.cid === 0
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor
	    }
	    var name = extendOptions.name || Super.options.name
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn(
	          'Invalid component name: "' + name + '". Component names ' +
	          'can only contain alphanumeric characaters and the hyphen.'
	        )
	        name = null
	      }
	    }
	    var Sub = function VueComponent (options) {
	      this._init(options)
	    }
	    Sub.prototype = Object.create(Super.prototype)
	    Sub.prototype.constructor = Sub
	    Sub.cid = cid++
	    Sub.options = mergeOptions(
	      Super.options,
	      extendOptions
	    )
	    Sub['super'] = Super
	    // allow further extension
	    Sub.extend = Super.extend
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type]
	    })
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub
	    }
	    // keep a reference to the super options at extension time.
	    // later at instantiation we can check if Super's options have
	    // been updated.
	    Sub.superOptions = Super.options
	    Sub.extendOptions = extendOptions
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub
	    }
	    return Sub
	  }
	}
	
	/*  */
	
	function initAssetRegisters (Vue) {
	  /**
	   * Create asset registration methods.
	   */
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (
	      id,
	      definition
	    ) {
	      if (!definition) {
	        return this.options[type + 's'][id]
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && config.isReservedTag(id)) {
	            warn(
	              'Do not use built-in or reserved HTML elements as component ' +
	              'id: ' + id
	            )
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = definition.name || id
	          definition = Vue.extend(definition)
	        }
	        if (type === 'directive' && typeof definition === 'function') {
	          definition = { bind: definition, update: definition }
	        }
	        this.options[type + 's'][id] = definition
	        return definition
	      }
	    }
	  })
	}
	
	var KeepAlive = {
	  name: 'keep-alive',
	  abstract: true,
	  created: function created () {
	    this.cache = Object.create(null)
	  },
	  render: function render () {
	    var vnode = getFirstComponentChild(this.$slots.default)
	    if (vnode && vnode.componentOptions) {
	      var opts = vnode.componentOptions
	      var key = vnode.key == null
	        // same constructor may get registered as different local components
	        // so cid alone is not enough (#3269)
	        ? opts.Ctor.cid + '::' + opts.tag
	        : vnode.key
	      if (this.cache[key]) {
	        vnode.child = this.cache[key].child
	      } else {
	        this.cache[key] = vnode
	      }
	      vnode.data.keepAlive = true
	    }
	    return vnode
	  },
	  destroyed: function destroyed () {
	    var this$1 = this;
	
	    for (var key in this.cache) {
	      var vnode = this$1.cache[key]
	      callHook(vnode.child, 'deactivated')
	      vnode.child.$destroy()
	    }
	  }
	}
	
	var builtInComponents = {
	  KeepAlive: KeepAlive
	}
	
	/*  */
	
	function initGlobalAPI (Vue) {
	  // config
	  var configDef = {}
	  configDef.get = function () { return config; }
	  if (process.env.NODE_ENV !== 'production') {
	    configDef.set = function () {
	      warn(
	        'Do not replace the Vue.config object, set individual fields instead.'
	      )
	    }
	  }
	  Object.defineProperty(Vue, 'config', configDef)
	  Vue.util = util
	  Vue.set = set
	  Vue.delete = del
	  Vue.nextTick = nextTick
	
	  Vue.options = Object.create(null)
	  config._assetTypes.forEach(function (type) {
	    Vue.options[type + 's'] = Object.create(null)
	  })
	
	  extend(Vue.options.components, builtInComponents)
	
	  initUse(Vue)
	  initMixin$1(Vue)
	  initExtend(Vue)
	  initAssetRegisters(Vue)
	}
	
	initGlobalAPI(Vue)
	
	Object.defineProperty(Vue.prototype, '$isServer', {
	  get: function () { return config._isServer; }
	})
	
	Vue.version = '2.0.0-rc.6'
	
	/*  */
	
	// attributes that should be using props for binding
	var mustUseProp = makeMap('value,selected,checked,muted')
	
	var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck')
	
	var isBooleanAttr = makeMap(
	  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
	  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
	  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
	  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
	  'required,reversed,scoped,seamless,selected,sortable,translate,' +
	  'truespeed,typemustmatch,visible'
	)
	
	var isAttr = makeMap(
	  'accept,accept-charset,accesskey,action,align,alt,async,autocomplete,' +
	  'autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,' +
	  'checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,' +
	  'name,contenteditable,contextmenu,controls,coords,data,datetime,default,' +
	  'defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,' +
	  'form,formaction,headers,<th>,height,hidden,high,href,hreflang,http-equiv,' +
	  'icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,' +
	  'manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,' +
	  'muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,' +
	  'preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,' +
	  'scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,' +
	  'spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,' +
	  'target,title,type,usemap,value,width,wrap'
	)
	
	var xlinkNS = 'http://www.w3.org/1999/xlink'
	
	var isXlink = function (name) {
	  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
	}
	
	var getXlinkProp = function (name) {
	  return isXlink(name) ? name.slice(6, name.length) : ''
	}
	
	var isFalsyAttrValue = function (val) {
	  return val == null || val === false
	}
	
	/*  */
	
	function genClassForVnode (vnode) {
	  var data = vnode.data
	  var parentNode = vnode
	  var childNode = vnode
	  while (childNode.child) {
	    childNode = childNode.child._vnode
	    if (childNode.data) {
	      data = mergeClassData(childNode.data, data)
	    }
	  }
	  while ((parentNode = parentNode.parent)) {
	    if (parentNode.data) {
	      data = mergeClassData(data, parentNode.data)
	    }
	  }
	  return genClassFromData(data)
	}
	
	function mergeClassData (child, parent) {
	  return {
	    staticClass: concat(child.staticClass, parent.staticClass),
	    class: child.class
	      ? [child.class, parent.class]
	      : parent.class
	  }
	}
	
	function genClassFromData (data) {
	  var dynamicClass = data.class
	  var staticClass = data.staticClass
	  if (staticClass || dynamicClass) {
	    return concat(staticClass, stringifyClass(dynamicClass))
	  }
	  /* istanbul ignore next */
	  return ''
	}
	
	function concat (a, b) {
	  return a ? b ? (a + ' ' + b) : a : (b || '')
	}
	
	function stringifyClass (value) {
	  var res = ''
	  if (!value) {
	    return res
	  }
	  if (typeof value === 'string') {
	    return value
	  }
	  if (Array.isArray(value)) {
	    var stringified
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        if ((stringified = stringifyClass(value[i]))) {
	          res += stringified + ' '
	        }
	      }
	    }
	    return res.slice(0, -1)
	  }
	  if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) res += key + ' '
	    }
	    return res.slice(0, -1)
	  }
	  /* istanbul ignore next */
	  return res
	}
	
	/*  */
	
	var namespaceMap = {
	  svg: 'http://www.w3.org/2000/svg',
	  math: 'http://www.w3.org/1998/Math/MathML'
	}
	
	var isHTMLTag = makeMap(
	  'html,body,base,head,link,meta,style,title,' +
	  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
	  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
	  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
	  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
	  'embed,object,param,source,canvas,script,noscript,del,ins,' +
	  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
	  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
	  'output,progress,select,textarea,' +
	  'details,dialog,menu,menuitem,summary,' +
	  'content,element,shadow,template'
	)
	
	var isUnaryTag = makeMap(
	  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
	  'link,meta,param,source,track,wbr',
	  true
	)
	
	// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var canBeLeftOpenTag = makeMap(
	  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source',
	  true
	)
	
	// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
	// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
	var isNonPhrasingTag = makeMap(
	  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
	  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
	  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
	  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
	  'title,tr,track',
	  true
	)
	
	// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG = makeMap(
	  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,' +
	  'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
	  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
	  true
	)
	
	var isReservedTag = function (tag) {
	  return isHTMLTag(tag) || isSVG(tag)
	}
	
	function getTagNamespace (tag) {
	  if (isSVG(tag)) {
	    return 'svg'
	  }
	  // basic support for MathML
	  // note it doesn't support other MathML elements being component roots
	  if (tag === 'math') {
	    return 'math'
	  }
	}
	
	var unknownElementCache = Object.create(null)
	function isUnknownElement (tag) {
	  /* istanbul ignore if */
	  if (!inBrowser) {
	    return true
	  }
	  if (isReservedTag(tag)) {
	    return false
	  }
	  tag = tag.toLowerCase()
	  /* istanbul ignore if */
	  if (unknownElementCache[tag] != null) {
	    return unknownElementCache[tag]
	  }
	  var el = document.createElement(tag)
	  if (tag.indexOf('-') > -1) {
	    // http://stackoverflow.com/a/28210364/1070244
	    return (unknownElementCache[tag] = (
	      el.constructor === window.HTMLUnknownElement ||
	      el.constructor === window.HTMLElement
	    ))
	  } else {
	    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
	  }
	}
	
	/*  */
	
	var UA$1 = inBrowser && window.navigator.userAgent.toLowerCase()
	var isIE = UA$1 && /msie|trident/.test(UA$1)
	var isIE9 = UA$1 && UA$1.indexOf('msie 9.0') > 0
	var isAndroid = UA$1 && UA$1.indexOf('android') > 0
	
	/**
	 * Query an element selector if it's not an element already.
	 */
	function query (el) {
	  if (typeof el === 'string') {
	    var selector = el
	    el = document.querySelector(el)
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn(
	        'Cannot find element: ' + selector
	      )
	      return document.createElement('div')
	    }
	  }
	  return el
	}
	
	/*  */
	
	function createElement$1 (tagName) {
	  return document.createElement(tagName)
	}
	
	function createElementNS (namespace, tagName) {
	  return document.createElementNS(namespaceMap[namespace], tagName)
	}
	
	function createTextNode (text) {
	  return document.createTextNode(text)
	}
	
	function createComment (text) {
	  return document.createComment(text)
	}
	
	function insertBefore (parentNode, newNode, referenceNode) {
	  parentNode.insertBefore(newNode, referenceNode)
	}
	
	function removeChild (node, child) {
	  node.removeChild(child)
	}
	
	function appendChild (node, child) {
	  node.appendChild(child)
	}
	
	function parentNode (node) {
	  return node.parentNode
	}
	
	function nextSibling (node) {
	  return node.nextSibling
	}
	
	function tagName (node) {
	  return node.tagName
	}
	
	function setTextContent (node, text) {
	  node.textContent = text
	}
	
	function childNodes (node) {
	  return node.childNodes
	}
	
	function setAttribute (node, key, val) {
	  node.setAttribute(key, val)
	}
	
	
	var nodeOps = Object.freeze({
	  createElement: createElement$1,
	  createElementNS: createElementNS,
	  createTextNode: createTextNode,
	  createComment: createComment,
	  insertBefore: insertBefore,
	  removeChild: removeChild,
	  appendChild: appendChild,
	  parentNode: parentNode,
	  nextSibling: nextSibling,
	  tagName: tagName,
	  setTextContent: setTextContent,
	  childNodes: childNodes,
	  setAttribute: setAttribute
	});
	
	/*  */
	
	var ref = {
	  create: function create (_, vnode) {
	    registerRef(vnode)
	  },
	  update: function update (oldVnode, vnode) {
	    if (oldVnode.data.ref !== vnode.data.ref) {
	      registerRef(oldVnode, true)
	      registerRef(vnode)
	    }
	  },
	  destroy: function destroy (vnode) {
	    registerRef(vnode, true)
	  }
	}
	
	function registerRef (vnode, isRemoval) {
	  var key = vnode.data.ref
	  if (!key) return
	
	  var vm = vnode.context
	  var ref = vnode.child || vnode.elm
	  var refs = vm.$refs
	  if (isRemoval) {
	    if (Array.isArray(refs[key])) {
	      remove(refs[key], ref)
	    } else if (refs[key] === ref) {
	      refs[key] = undefined
	    }
	  } else {
	    if (vnode.data.refInFor) {
	      if (Array.isArray(refs[key])) {
	        refs[key].push(ref)
	      } else {
	        refs[key] = [ref]
	      }
	    } else {
	      refs[key] = ref
	    }
	  }
	}
	
	/**
	 * Virtual DOM patching algorithm based on Snabbdom by
	 * Simon Friis Vindum (@paldepind)
	 * Licensed under the MIT License
	 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
	 *
	 * modified by Evan You (@yyx990803)
	 *
	
	/*
	 * Not type-checking this because this file is perf-critical and the cost
	 * of making flow understand it is not worth it.
	 */
	
	var emptyData = {}
	var emptyNode = new VNode('', emptyData, [])
	var hooks$1 = ['create', 'update', 'postpatch', 'remove', 'destroy']
	
	function isUndef (s) {
	  return s == null
	}
	
	function isDef (s) {
	  return s != null
	}
	
	function sameVnode (vnode1, vnode2) {
	  return (
	    vnode1.key === vnode2.key &&
	    vnode1.tag === vnode2.tag &&
	    vnode1.isComment === vnode2.isComment &&
	    !vnode1.data === !vnode2.data
	  )
	}
	
	function createKeyToOldIdx (children, beginIdx, endIdx) {
	  var i, key
	  var map = {}
	  for (i = beginIdx; i <= endIdx; ++i) {
	    key = children[i].key
	    if (isDef(key)) map[key] = i
	  }
	  return map
	}
	
	function createPatchFunction (backend) {
	  var i, j
	  var cbs = {}
	
	  var modules = backend.modules;
	  var nodeOps = backend.nodeOps;
	
	  for (i = 0; i < hooks$1.length; ++i) {
	    cbs[hooks$1[i]] = []
	    for (j = 0; j < modules.length; ++j) {
	      if (modules[j][hooks$1[i]] !== undefined) cbs[hooks$1[i]].push(modules[j][hooks$1[i]])
	    }
	  }
	
	  function emptyNodeAt (elm) {
	    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
	  }
	
	  function createRmCb (childElm, listeners) {
	    function remove () {
	      if (--remove.listeners === 0) {
	        removeElement(childElm)
	      }
	    }
	    remove.listeners = listeners
	    return remove
	  }
	
	  function removeElement (el) {
	    var parent = nodeOps.parentNode(el)
	    nodeOps.removeChild(parent, el)
	  }
	
	  function createElm (vnode, insertedVnodeQueue, nested) {
	    var i
	    var data = vnode.data
	    vnode.isRootInsert = !nested
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) i(vnode)
	      // after calling the init hook, if the vnode is a child component
	      // it should've created a child instance and mounted it. the child
	      // component also has set the placeholder vnode's elm.
	      // in that case we can just return the element and be done.
	      if (isDef(i = vnode.child)) {
	        initComponent(vnode, insertedVnodeQueue)
	        return vnode.elm
	      }
	    }
	    var children = vnode.children
	    var tag = vnode.tag
	    if (isDef(tag)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (
	          !vnode.ns &&
	          !(config.ignoredElements && config.ignoredElements.indexOf(tag) > -1) &&
	          config.isUnknownElement(tag)
	        ) {
	          warn(
	            'Unknown custom element: <' + tag + '> - did you ' +
	            'register the component correctly? For recursive components, ' +
	            'make sure to provide the "name" option.',
	            vnode.context
	          )
	        }
	      }
	      vnode.elm = vnode.ns
	        ? nodeOps.createElementNS(vnode.ns, tag)
	        : nodeOps.createElement(tag)
	      setScope(vnode)
	      createChildren(vnode, children, insertedVnodeQueue)
	      if (isDef(data)) {
	        invokeCreateHooks(vnode, insertedVnodeQueue)
	      }
	    } else if (vnode.isComment) {
	      vnode.elm = nodeOps.createComment(vnode.text)
	    } else {
	      vnode.elm = nodeOps.createTextNode(vnode.text)
	    }
	    return vnode.elm
	  }
	
	  function createChildren (vnode, children, insertedVnodeQueue) {
	    if (Array.isArray(children)) {
	      for (var i = 0; i < children.length; ++i) {
	        nodeOps.appendChild(vnode.elm, createElm(children[i], insertedVnodeQueue, true))
	      }
	    } else if (isPrimitive(vnode.text)) {
	      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text))
	    }
	  }
	
	  function isPatchable (vnode) {
	    while (vnode.child) {
	      vnode = vnode.child._vnode
	    }
	    return isDef(vnode.tag)
	  }
	
	  function invokeCreateHooks (vnode, insertedVnodeQueue) {
	    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
	      cbs.create[i$1](emptyNode, vnode)
	    }
	    i = vnode.data.hook // Reuse variable
	    if (isDef(i)) {
	      if (i.create) i.create(emptyNode, vnode)
	      if (i.insert) insertedVnodeQueue.push(vnode)
	    }
	  }
	
	  function initComponent (vnode, insertedVnodeQueue) {
	    if (vnode.data.pendingInsert) {
	      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert)
	    }
	    vnode.elm = vnode.child.$el
	    if (isPatchable(vnode)) {
	      invokeCreateHooks(vnode, insertedVnodeQueue)
	      setScope(vnode)
	    } else {
	      // empty component root.
	      // skip all element-related modules except for ref (#3455)
	      registerRef(vnode)
	      // make sure to invoke the insert hook
	      insertedVnodeQueue.push(vnode)
	    }
	  }
	
	  // set scope id attribute for scoped CSS.
	  // this is implemented as a special case to avoid the overhead
	  // of going through the normal attribute patching process.
	  function setScope (vnode) {
	    var i
	    if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '')
	    }
	    if (isDef(i = activeInstance) &&
	        i !== vnode.context &&
	        isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '')
	    }
	  }
	
	  function addVnodes (parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      nodeOps.insertBefore(parentElm, createElm(vnodes[startIdx], insertedVnodeQueue), before)
	    }
	  }
	
	  function invokeDestroyHook (vnode) {
	    var i, j
	    var data = vnode.data
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.destroy)) i(vnode)
	      for (i = 0; i < cbs.destroy.length; ++i) cbs.destroy[i](vnode)
	    }
	    if (isDef(i = vnode.child) && !data.keepAlive) {
	      invokeDestroyHook(i._vnode)
	    }
	    if (isDef(i = vnode.children)) {
	      for (j = 0; j < vnode.children.length; ++j) {
	        invokeDestroyHook(vnode.children[j])
	      }
	    }
	  }
	
	  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      var ch = vnodes[startIdx]
	      if (isDef(ch)) {
	        if (isDef(ch.tag)) {
	          removeAndInvokeRemoveHook(ch)
	          invokeDestroyHook(ch)
	        } else { // Text node
	          nodeOps.removeChild(parentElm, ch.elm)
	        }
	      }
	    }
	  }
	
	  function removeAndInvokeRemoveHook (vnode, rm) {
	    if (rm || isDef(vnode.data)) {
	      var listeners = cbs.remove.length + 1
	      if (!rm) {
	        // directly removing
	        rm = createRmCb(vnode.elm, listeners)
	      } else {
	        // we have a recursively passed down rm callback
	        // increase the listeners count
	        rm.listeners += listeners
	      }
	      // recursively invoke hooks on child component root node
	      if (isDef(i = vnode.child) && isDef(i = i._vnode) && isDef(i.data)) {
	        removeAndInvokeRemoveHook(i, rm)
	      }
	      for (i = 0; i < cbs.remove.length; ++i) {
	        cbs.remove[i](vnode, rm)
	      }
	      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
	        i(vnode, rm)
	      } else {
	        rm()
	      }
	    } else {
	      removeElement(vnode.elm)
	    }
	  }
	
	  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
	    var oldStartIdx = 0
	    var newStartIdx = 0
	    var oldEndIdx = oldCh.length - 1
	    var oldStartVnode = oldCh[0]
	    var oldEndVnode = oldCh[oldEndIdx]
	    var newEndIdx = newCh.length - 1
	    var newStartVnode = newCh[0]
	    var newEndVnode = newCh[newEndIdx]
	    var oldKeyToIdx, idxInOld, elmToMove, before
	
	    // removeOnly is a special flag used only by <transition-group>
	    // to ensure removed elements stay in correct relative positions
	    // during leaving transitions
	    var canMove = !removeOnly
	
	    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
	      if (isUndef(oldStartVnode)) {
	        oldStartVnode = oldCh[++oldStartIdx] // Vnode has been moved left
	      } else if (isUndef(oldEndVnode)) {
	        oldEndVnode = oldCh[--oldEndIdx]
	      } else if (sameVnode(oldStartVnode, newStartVnode)) {
	        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue)
	        oldStartVnode = oldCh[++oldStartIdx]
	        newStartVnode = newCh[++newStartIdx]
	      } else if (sameVnode(oldEndVnode, newEndVnode)) {
	        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue)
	        oldEndVnode = oldCh[--oldEndIdx]
	        newEndVnode = newCh[--newEndIdx]
	      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
	        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue)
	        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm))
	        oldStartVnode = oldCh[++oldStartIdx]
	        newEndVnode = newCh[--newEndIdx]
	      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
	        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue)
	        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
	        oldEndVnode = oldCh[--oldEndIdx]
	        newStartVnode = newCh[++newStartIdx]
	      } else {
	        if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
	        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null
	        if (isUndef(idxInOld)) { // New element
	          nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm)
	          newStartVnode = newCh[++newStartIdx]
	        } else {
	          elmToMove = oldCh[idxInOld]
	          /* istanbul ignore if */
	          if (process.env.NODE_ENV !== 'production' && !elmToMove) {
	            warn(
	              'It seems there are duplicate keys that is causing an update error. ' +
	              'Make sure each v-for item has a unique key.'
	            )
	          }
	          if (elmToMove.tag !== newStartVnode.tag) {
	            // same key but different element. treat as new element
	            nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm)
	            newStartVnode = newCh[++newStartIdx]
	          } else {
	            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue)
	            oldCh[idxInOld] = undefined
	            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm)
	            newStartVnode = newCh[++newStartIdx]
	          }
	        }
	      }
	    }
	    if (oldStartIdx > oldEndIdx) {
	      before = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm
	      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)
	    } else if (newStartIdx > newEndIdx) {
	      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)
	    }
	  }
	
	  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
	    if (oldVnode === vnode) {
	      return
	    }
	    // reuse element for static trees.
	    // note we only do this if the vnode is cloned -
	    // if the new node is not cloned it means the render functions have been
	    // reset by the hot-reload-api and we need to do a proper re-render.
	    if (vnode.isStatic &&
	        oldVnode.isStatic &&
	        vnode.key === oldVnode.key &&
	        vnode.isCloned) {
	      vnode.elm = oldVnode.elm
	      return
	    }
	    var i, hook
	    var hasData = isDef(i = vnode.data)
	    if (hasData && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
	      i(oldVnode, vnode)
	    }
	    var elm = vnode.elm = oldVnode.elm
	    var oldCh = oldVnode.children
	    var ch = vnode.children
	    if (hasData && isPatchable(vnode)) {
	      for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode)
	      if (isDef(hook) && isDef(i = hook.update)) i(oldVnode, vnode)
	    }
	    if (isUndef(vnode.text)) {
	      if (isDef(oldCh) && isDef(ch)) {
	        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly)
	      } else if (isDef(ch)) {
	        if (isDef(oldVnode.text)) nodeOps.setTextContent(elm, '')
	        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)
	      } else if (isDef(oldCh)) {
	        removeVnodes(elm, oldCh, 0, oldCh.length - 1)
	      } else if (isDef(oldVnode.text)) {
	        nodeOps.setTextContent(elm, '')
	      }
	    } else if (oldVnode.text !== vnode.text) {
	      nodeOps.setTextContent(elm, vnode.text)
	    }
	    if (hasData) {
	      for (i = 0; i < cbs.postpatch.length; ++i) cbs.postpatch[i](oldVnode, vnode)
	      if (isDef(hook) && isDef(i = hook.postpatch)) i(oldVnode, vnode)
	    }
	  }
	
	  function invokeInsertHook (vnode, queue, initial) {
	    // delay insert hooks for component root nodes, invoke them after the
	    // element is really inserted
	    if (initial && vnode.parent) {
	      vnode.parent.data.pendingInsert = queue
	    } else {
	      for (var i = 0; i < queue.length; ++i) {
	        queue[i].data.hook.insert(queue[i])
	      }
	    }
	  }
	
	  var bailed = false
	  function hydrate (elm, vnode, insertedVnodeQueue) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (!assertNodeMatch(elm, vnode)) {
	        return false
	      }
	    }
	    vnode.elm = elm
	    var tag = vnode.tag;
	    var data = vnode.data;
	    var children = vnode.children;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) i(vnode, true /* hydrating */)
	      if (isDef(i = vnode.child)) {
	        // child component. it should have hydrated its own tree.
	        initComponent(vnode, insertedVnodeQueue)
	        return true
	      }
	    }
	    if (isDef(tag)) {
	      if (isDef(children)) {
	        var childNodes = nodeOps.childNodes(elm)
	        // empty element, allow client to pick up and populate children
	        if (!childNodes.length) {
	          createChildren(vnode, children, insertedVnodeQueue)
	        } else {
	          var childrenMatch = true
	          if (childNodes.length !== children.length) {
	            childrenMatch = false
	          } else {
	            for (var i$1 = 0; i$1 < children.length; i$1++) {
	              if (!hydrate(childNodes[i$1], children[i$1], insertedVnodeQueue)) {
	                childrenMatch = false
	                break
	              }
	            }
	          }
	          if (!childrenMatch) {
	            if (process.env.NODE_ENV !== 'production' &&
	                typeof console !== 'undefined' &&
	                !bailed) {
	              bailed = true
	              console.warn('Parent: ', elm)
	              console.warn('Mismatching childNodes vs. VNodes: ', childNodes, children)
	            }
	            return false
	          }
	        }
	      }
	      if (isDef(data)) {
	        invokeCreateHooks(vnode, insertedVnodeQueue)
	      }
	    }
	    return true
	  }
	
	  function assertNodeMatch (node, vnode) {
	    if (vnode.tag) {
	      return (
	        vnode.tag.indexOf('vue-component') === 0 ||
	        vnode.tag === nodeOps.tagName(node).toLowerCase()
	      )
	    } else {
	      return _toString(vnode.text) === node.data
	    }
	  }
	
	  return function patch (oldVnode, vnode, hydrating, removeOnly) {
	    var elm, parent
	    var isInitialPatch = false
	    var insertedVnodeQueue = []
	
	    if (!oldVnode) {
	      // empty mount, create new root element
	      isInitialPatch = true
	      createElm(vnode, insertedVnodeQueue)
	    } else {
	      var isRealElement = isDef(oldVnode.nodeType)
	      if (!isRealElement && sameVnode(oldVnode, vnode)) {
	        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly)
	      } else {
	        if (isRealElement) {
	          // mounting to a real element
	          // check if this is server-rendered content and if we can perform
	          // a successful hydration.
	          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
	            oldVnode.removeAttribute('server-rendered')
	            hydrating = true
	          }
	          if (hydrating) {
	            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
	              invokeInsertHook(vnode, insertedVnodeQueue, true)
	              return oldVnode
	            } else if (process.env.NODE_ENV !== 'production') {
	              warn(
	                'The client-side rendered virtual DOM tree is not matching ' +
	                'server-rendered content. This is likely caused by incorrect ' +
	                'HTML markup, for example nesting block-level elements inside ' +
	                '<p>, or missing <tbody>. Bailing hydration and performing ' +
	                'full client-side render.'
	              )
	            }
	          }
	          // either not server-rendered, or hydration failed.
	          // create an empty node and replace it
	          oldVnode = emptyNodeAt(oldVnode)
	        }
	        elm = oldVnode.elm
	        parent = nodeOps.parentNode(elm)
	
	        createElm(vnode, insertedVnodeQueue)
	
	        // component root element replaced.
	        // update parent placeholder node element.
	        if (vnode.parent) {
	          vnode.parent.elm = vnode.elm
	          if (isPatchable(vnode)) {
	            for (var i = 0; i < cbs.create.length; ++i) {
	              cbs.create[i](emptyNode, vnode.parent)
	            }
	          }
	        }
	
	        if (parent !== null) {
	          nodeOps.insertBefore(parent, vnode.elm, nodeOps.nextSibling(elm))
	          removeVnodes(parent, [oldVnode], 0, 0)
	        } else if (isDef(oldVnode.tag)) {
	          invokeDestroyHook(oldVnode)
	        }
	      }
	    }
	
	    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch)
	    return vnode.elm
	  }
	}
	
	/*  */
	
	var directives = {
	  create: function bindDirectives (oldVnode, vnode) {
	    var hasInsert = false
	    forEachDirective(oldVnode, vnode, function (def, dir) {
	      callHook$1(def, dir, 'bind', vnode, oldVnode)
	      if (def.inserted) {
	        hasInsert = true
	      }
	    })
	    if (hasInsert) {
	      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
	        applyDirectives(oldVnode, vnode, 'inserted')
	      })
	    }
	  },
	  update: function updateDirectives (oldVnode, vnode) {
	    applyDirectives(oldVnode, vnode, 'update')
	    // if old vnode has directives but new vnode doesn't
	    // we need to teardown the directives on the old one.
	    if (oldVnode.data.directives && !vnode.data.directives) {
	      applyDirectives(oldVnode, oldVnode, 'unbind')
	    }
	  },
	  postpatch: function postupdateDirectives (oldVnode, vnode) {
	    applyDirectives(oldVnode, vnode, 'componentUpdated')
	  },
	  destroy: function unbindDirectives (vnode) {
	    applyDirectives(vnode, vnode, 'unbind')
	  }
	}
	
	var emptyModifiers = Object.create(null)
	
	function forEachDirective (
	  oldVnode,
	  vnode,
	  fn
	) {
	  var dirs = vnode.data.directives
	  if (dirs) {
	    for (var i = 0; i < dirs.length; i++) {
	      var dir = dirs[i]
	      var def = resolveAsset(vnode.context.$options, 'directives', dir.name, true)
	      if (def) {
	        var oldDirs = oldVnode && oldVnode.data.directives
	        if (oldDirs) {
	          dir.oldValue = oldDirs[i].value
	        }
	        if (!dir.modifiers) {
	          dir.modifiers = emptyModifiers
	        }
	        fn(def, dir)
	      }
	    }
	  }
	}
	
	function applyDirectives (
	  oldVnode,
	  vnode,
	  hook
	) {
	  forEachDirective(oldVnode, vnode, function (def, dir) {
	    callHook$1(def, dir, hook, vnode, oldVnode)
	  })
	}
	
	function callHook$1 (def, dir, hook, vnode, oldVnode) {
	  var fn = def && def[hook]
	  if (fn) {
	    fn(vnode.elm, dir, vnode, oldVnode)
	  }
	}
	
	var baseModules = [
	  ref,
	  directives
	]
	
	/*  */
	
	function updateAttrs (oldVnode, vnode) {
	  if (!oldVnode.data.attrs && !vnode.data.attrs) {
	    return
	  }
	  var key, cur, old
	  var elm = vnode.elm
	  var oldAttrs = oldVnode.data.attrs || {}
	  var attrs = vnode.data.attrs || {}
	  // clone observed objects, as the user probably wants to mutate it
	  if (attrs.__ob__) {
	    attrs = vnode.data.attrs = extend({}, attrs)
	  }
	
	  for (key in attrs) {
	    cur = attrs[key]
	    old = oldAttrs[key]
	    if (old !== cur) {
	      setAttr(elm, key, cur)
	    }
	  }
	  for (key in oldAttrs) {
	    if (attrs[key] == null) {
	      if (isXlink(key)) {
	        elm.removeAttributeNS(xlinkNS, getXlinkProp(key))
	      } else if (!isEnumeratedAttr(key)) {
	        elm.removeAttribute(key)
	      }
	    }
	  }
	}
	
	function setAttr (el, key, value) {
	  if (isBooleanAttr(key)) {
	    // set attribute for blank value
	    // e.g. <option disabled>Select one</option>
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key)
	    } else {
	      el.setAttribute(key, key)
	    }
	  } else if (isEnumeratedAttr(key)) {
	    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true')
	  } else if (isXlink(key)) {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttributeNS(xlinkNS, getXlinkProp(key))
	    } else {
	      el.setAttributeNS(xlinkNS, key, value)
	    }
	  } else {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key)
	    } else {
	      el.setAttribute(key, value)
	    }
	  }
	}
	
	var attrs = {
	  create: updateAttrs,
	  update: updateAttrs
	}
	
	/*  */
	
	function updateClass (oldVnode, vnode) {
	  var el = vnode.elm
	  var data = vnode.data
	  var oldData = oldVnode.data
	  if (!data.staticClass && !data.class &&
	      (!oldData || (!oldData.staticClass && !oldData.class))) {
	    return
	  }
	
	  var cls = genClassForVnode(vnode)
	
	  // handle transition classes
	  var transitionClass = el._transitionClasses
	  if (transitionClass) {
	    cls = concat(cls, stringifyClass(transitionClass))
	  }
	
	  // set the class
	  if (cls !== el._prevClass) {
	    el.setAttribute('class', cls)
	    el._prevClass = cls
	  }
	}
	
	var klass = {
	  create: updateClass,
	  update: updateClass
	}
	
	// skip type checking this file because we need to attach private properties
	// to elements
	
	function updateDOMListeners (oldVnode, vnode) {
	  if (!oldVnode.data.on && !vnode.data.on) {
	    return
	  }
	  var on = vnode.data.on || {}
	  var oldOn = oldVnode.data.on || {}
	  var add = vnode.elm._v_add || (vnode.elm._v_add = function (event, handler, capture) {
	    vnode.elm.addEventListener(event, handler, capture)
	  })
	  var remove = vnode.elm._v_remove || (vnode.elm._v_remove = function (event, handler) {
	    vnode.elm.removeEventListener(event, handler)
	  })
	  updateListeners(on, oldOn, add, remove)
	}
	
	var events = {
	  create: updateDOMListeners,
	  update: updateDOMListeners
	}
	
	/*  */
	
	function updateDOMProps (oldVnode, vnode) {
	  if (!oldVnode.data.domProps && !vnode.data.domProps) {
	    return
	  }
	  var key, cur
	  var elm = vnode.elm
	  var oldProps = oldVnode.data.domProps || {}
	  var props = vnode.data.domProps || {}
	  // clone observed objects, as the user probably wants to mutate it
	  if (props.__ob__) {
	    props = vnode.data.domProps = extend({}, props)
	  }
	
	  for (key in oldProps) {
	    if (props[key] == null) {
	      elm[key] = undefined
	    }
	  }
	  for (key in props) {
	    // ignore children if the node has textContent or innerHTML,
	    // as these will throw away existing DOM nodes and cause removal errors
	    // on subsequent patches (#3360)
	    if ((key === 'textContent' || key === 'innerHTML') && vnode.children) {
	      vnode.children.length = 0
	    }
	    cur = props[key]
	    if (key === 'value') {
	      // store value as _value as well since
	      // non-string values will be stringified
	      elm._value = cur
	      // avoid resetting cursor position when value is the same
	      var strCur = cur == null ? '' : String(cur)
	      if (elm.value !== strCur) {
	        elm.value = strCur
	      }
	    } else {
	      elm[key] = cur
	    }
	  }
	}
	
	var domProps = {
	  create: updateDOMProps,
	  update: updateDOMProps
	}
	
	/*  */
	
	var prefixes = ['Webkit', 'Moz', 'ms']
	
	var testEl
	var normalize = cached(function (prop) {
	  testEl = testEl || document.createElement('div')
	  prop = camelize(prop)
	  if (prop !== 'filter' && (prop in testEl.style)) {
	    return prop
	  }
	  var upper = prop.charAt(0).toUpperCase() + prop.slice(1)
	  for (var i = 0; i < prefixes.length; i++) {
	    var prefixed = prefixes[i] + upper
	    if (prefixed in testEl.style) {
	      return prefixed
	    }
	  }
	})
	
	function updateStyle (oldVnode, vnode) {
	  if ((!oldVnode.data || !oldVnode.data.style) && !vnode.data.style) {
	    return
	  }
	  var cur, name
	  var el = vnode.elm
	  var oldStyle = oldVnode.data.style || {}
	  var style = vnode.data.style || {}
	
	  // handle string
	  if (typeof style === 'string') {
	    el.style.cssText = style
	    return
	  }
	
	  var needClone = style.__ob__
	
	  // handle array syntax
	  if (Array.isArray(style)) {
	    style = vnode.data.style = toObject(style)
	  }
	
	  // clone the style for future updates,
	  // in case the user mutates the style object in-place.
	  if (needClone) {
	    style = vnode.data.style = extend({}, style)
	  }
	
	  for (name in oldStyle) {
	    if (!style[name]) {
	      el.style[normalize(name)] = ''
	    }
	  }
	  for (name in style) {
	    cur = style[name]
	    if (cur !== oldStyle[name]) {
	      // ie9 setting to null has no effect, must use empty string
	      el.style[normalize(name)] = cur || ''
	    }
	  }
	}
	
	var style = {
	  create: updateStyle,
	  update: updateStyle
	}
	
	/*  */
	
	/**
	 * Add class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function addClass (el, cls) {
	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); })
	    } else {
	      el.classList.add(cls)
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' '
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim())
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function removeClass (el, cls) {
	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); })
	    } else {
	      el.classList.remove(cls)
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' '
	    var tar = ' ' + cls + ' '
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ')
	    }
	    el.setAttribute('class', cur.trim())
	  }
	}
	
	/*  */
	
	var hasTransition = inBrowser && !isIE9
	var TRANSITION = 'transition'
	var ANIMATION = 'animation'
	
	// Transition property/event sniffing
	var transitionProp = 'transition'
	var transitionEndEvent = 'transitionend'
	var animationProp = 'animation'
	var animationEndEvent = 'animationend'
	if (hasTransition) {
	  /* istanbul ignore if */
	  if (window.ontransitionend === undefined &&
	    window.onwebkittransitionend !== undefined) {
	    transitionProp = 'WebkitTransition'
	    transitionEndEvent = 'webkitTransitionEnd'
	  }
	  if (window.onanimationend === undefined &&
	    window.onwebkitanimationend !== undefined) {
	    animationProp = 'WebkitAnimation'
	    animationEndEvent = 'webkitAnimationEnd'
	  }
	}
	
	var raf = (inBrowser && window.requestAnimationFrame) || setTimeout
	function nextFrame (fn) {
	  raf(function () {
	    raf(fn)
	  })
	}
	
	function addTransitionClass (el, cls) {
	  (el._transitionClasses || (el._transitionClasses = [])).push(cls)
	  addClass(el, cls)
	}
	
	function removeTransitionClass (el, cls) {
	  if (el._transitionClasses) {
	    remove(el._transitionClasses, cls)
	  }
	  removeClass(el, cls)
	}
	
	function whenTransitionEnds (
	  el,
	  expectedType,
	  cb
	) {
	  var ref = getTransitionInfo(el, expectedType);
	  var type = ref.type;
	  var timeout = ref.timeout;
	  var propCount = ref.propCount;
	  if (!type) return cb()
	  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent
	  var ended = 0
	  var end = function () {
	    el.removeEventListener(event, onEnd)
	    cb()
	  }
	  var onEnd = function (e) {
	    if (e.target === el) {
	      if (++ended >= propCount) {
	        end()
	      }
	    }
	  }
	  setTimeout(function () {
	    if (ended < propCount) {
	      end()
	    }
	  }, timeout + 1)
	  el.addEventListener(event, onEnd)
	}
	
	var transformRE = /\b(transform|all)(,|$)/
	
	function getTransitionInfo (el, expectedType) {
	  var styles = window.getComputedStyle(el)
	  var transitioneDelays = styles[transitionProp + 'Delay'].split(', ')
	  var transitionDurations = styles[transitionProp + 'Duration'].split(', ')
	  var transitionTimeout = getTimeout(transitioneDelays, transitionDurations)
	  var animationDelays = styles[animationProp + 'Delay'].split(', ')
	  var animationDurations = styles[animationProp + 'Duration'].split(', ')
	  var animationTimeout = getTimeout(animationDelays, animationDurations)
	
	  var type
	  var timeout = 0
	  var propCount = 0
	  /* istanbul ignore if */
	  if (expectedType === TRANSITION) {
	    if (transitionTimeout > 0) {
	      type = TRANSITION
	      timeout = transitionTimeout
	      propCount = transitionDurations.length
	    }
	  } else if (expectedType === ANIMATION) {
	    if (animationTimeout > 0) {
	      type = ANIMATION
	      timeout = animationTimeout
	      propCount = animationDurations.length
	    }
	  } else {
	    timeout = Math.max(transitionTimeout, animationTimeout)
	    type = timeout > 0
	      ? transitionTimeout > animationTimeout
	        ? TRANSITION
	        : ANIMATION
	      : null
	    propCount = type
	      ? type === TRANSITION
	        ? transitionDurations.length
	        : animationDurations.length
	      : 0
	  }
	  var hasTransform =
	    type === TRANSITION &&
	    transformRE.test(styles[transitionProp + 'Property'])
	  return {
	    type: type,
	    timeout: timeout,
	    propCount: propCount,
	    hasTransform: hasTransform
	  }
	}
	
	function getTimeout (delays, durations) {
	  return Math.max.apply(null, durations.map(function (d, i) {
	    return toMs(d) + toMs(delays[i])
	  }))
	}
	
	function toMs (s) {
	  return Number(s.slice(0, -1)) * 1000
	}
	
	/*  */
	
	function enter (vnode) {
	  var el = vnode.elm
	
	  // call leave callback now
	  if (el._leaveCb) {
	    el._leaveCb.cancelled = true
	    el._leaveCb()
	  }
	
	  var data = resolveTransition(vnode.data.transition)
	  if (!data) {
	    return
	  }
	
	  /* istanbul ignore if */
	  if (el._enterCb || el.nodeType !== 1) {
	    return
	  }
	
	  var css = data.css;
	  var type = data.type;
	  var enterClass = data.enterClass;
	  var enterActiveClass = data.enterActiveClass;
	  var appearClass = data.appearClass;
	  var appearActiveClass = data.appearActiveClass;
	  var beforeEnter = data.beforeEnter;
	  var enter = data.enter;
	  var afterEnter = data.afterEnter;
	  var enterCancelled = data.enterCancelled;
	  var beforeAppear = data.beforeAppear;
	  var appear = data.appear;
	  var afterAppear = data.afterAppear;
	  var appearCancelled = data.appearCancelled;
	
	  // activeInstance will always be the <transition> component managing this
	  // transition. One edge case to check is when the <transition> is placed
	  // as the root node of a child component. In that case we need to check
	  // <transition>'s parent for appear check.
	  var transitionNode = activeInstance.$vnode
	  var context = transitionNode && transitionNode.parent
	    ? transitionNode.parent.context
	    : activeInstance
	
	  var isAppear = !context._isMounted || !vnode.isRootInsert
	
	  if (isAppear && !appear && appear !== '') {
	    return
	  }
	
	  var startClass = isAppear ? appearClass : enterClass
	  var activeClass = isAppear ? appearActiveClass : enterActiveClass
	  var beforeEnterHook = isAppear ? (beforeAppear || beforeEnter) : beforeEnter
	  var enterHook = isAppear ? (typeof appear === 'function' ? appear : enter) : enter
	  var afterEnterHook = isAppear ? (afterAppear || afterEnter) : afterEnter
	  var enterCancelledHook = isAppear ? (appearCancelled || enterCancelled) : enterCancelled
	
	  var expectsCSS = css !== false && !isIE9
	  var userWantsControl =
	    enterHook &&
	    // enterHook may be a bound method which exposes
	    // the length of original fn as _length
	    (enterHook._length || enterHook.length) > 1
	
	  var cb = el._enterCb = once(function () {
	    if (expectsCSS) {
	      removeTransitionClass(el, activeClass)
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, startClass)
	      }
	      enterCancelledHook && enterCancelledHook(el)
	    } else {
	      afterEnterHook && afterEnterHook(el)
	    }
	    el._enterCb = null
	  })
	
	  if (!vnode.data.show) {
	    // remove pending leave element on enter by injecting an insert hook
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
	      var parent = el.parentNode
	      var pendingNode = parent && parent._pending && parent._pending[vnode.key]
	      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
	        pendingNode.elm._leaveCb()
	      }
	      enterHook && enterHook(el, cb)
	    })
	  }
	
	  // start enter transition
	  beforeEnterHook && beforeEnterHook(el)
	  if (expectsCSS) {
	    addTransitionClass(el, startClass)
	    addTransitionClass(el, activeClass)
	    nextFrame(function () {
	      removeTransitionClass(el, startClass)
	      if (!cb.cancelled && !userWantsControl) {
	        whenTransitionEnds(el, type, cb)
	      }
	    })
	  }
	
	  if (vnode.data.show) {
	    enterHook && enterHook(el, cb)
	  }
	
	  if (!expectsCSS && !userWantsControl) {
	    cb()
	  }
	}
	
	function leave (vnode, rm) {
	  var el = vnode.elm
	
	  // call enter callback now
	  if (el._enterCb) {
	    el._enterCb.cancelled = true
	    el._enterCb()
	  }
	
	  var data = resolveTransition(vnode.data.transition)
	  if (!data) {
	    return rm()
	  }
	
	  /* istanbul ignore if */
	  if (el._leaveCb || el.nodeType !== 1) {
	    return
	  }
	
	  var css = data.css;
	  var type = data.type;
	  var leaveClass = data.leaveClass;
	  var leaveActiveClass = data.leaveActiveClass;
	  var beforeLeave = data.beforeLeave;
	  var leave = data.leave;
	  var afterLeave = data.afterLeave;
	  var leaveCancelled = data.leaveCancelled;
	  var delayLeave = data.delayLeave;
	
	  var expectsCSS = css !== false && !isIE9
	  var userWantsControl =
	    leave &&
	    // leave hook may be a bound method which exposes
	    // the length of original fn as _length
	    (leave._length || leave.length) > 1
	
	  var cb = el._leaveCb = once(function () {
	    if (el.parentNode && el.parentNode._pending) {
	      el.parentNode._pending[vnode.key] = null
	    }
	    if (expectsCSS) {
	      removeTransitionClass(el, leaveActiveClass)
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, leaveClass)
	      }
	      leaveCancelled && leaveCancelled(el)
	    } else {
	      rm()
	      afterLeave && afterLeave(el)
	    }
	    el._leaveCb = null
	  })
	
	  if (delayLeave) {
	    delayLeave(performLeave)
	  } else {
	    performLeave()
	  }
	
	  function performLeave () {
	    // the delayed leave may have already been cancelled
	    if (cb.cancelled) {
	      return
	    }
	    // record leaving element
	    if (!vnode.data.show) {
	      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode
	    }
	    beforeLeave && beforeLeave(el)
	    if (expectsCSS) {
	      addTransitionClass(el, leaveClass)
	      addTransitionClass(el, leaveActiveClass)
	      nextFrame(function () {
	        removeTransitionClass(el, leaveClass)
	        if (!cb.cancelled && !userWantsControl) {
	          whenTransitionEnds(el, type, cb)
	        }
	      })
	    }
	    leave && leave(el, cb)
	    if (!expectsCSS && !userWantsControl) {
	      cb()
	    }
	  }
	}
	
	function resolveTransition (def) {
	  if (!def) {
	    return
	  }
	  /* istanbul ignore else */
	  if (typeof def === 'object') {
	    var res = {}
	    if (def.css !== false) {
	      extend(res, autoCssTransition(def.name || 'v'))
	    }
	    extend(res, def)
	    return res
	  } else if (typeof def === 'string') {
	    return autoCssTransition(def)
	  }
	}
	
	var autoCssTransition = cached(function (name) {
	  return {
	    enterClass: (name + "-enter"),
	    leaveClass: (name + "-leave"),
	    appearClass: (name + "-enter"),
	    enterActiveClass: (name + "-enter-active"),
	    leaveActiveClass: (name + "-leave-active"),
	    appearActiveClass: (name + "-enter-active")
	  }
	})
	
	function once (fn) {
	  var called = false
	  return function () {
	    if (!called) {
	      called = true
	      fn()
	    }
	  }
	}
	
	var transition = inBrowser ? {
	  create: function create (_, vnode) {
	    if (!vnode.data.show) {
	      enter(vnode)
	    }
	  },
	  remove: function remove (vnode, rm) {
	    /* istanbul ignore else */
	    if (!vnode.data.show) {
	      leave(vnode, rm)
	    } else {
	      rm()
	    }
	  }
	} : {}
	
	var platformModules = [
	  attrs,
	  klass,
	  events,
	  domProps,
	  style,
	  transition
	]
	
	/*  */
	
	// the directive module should be applied last, after all
	// built-in modules have been applied.
	var modules = platformModules.concat(baseModules)
	
	var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules })
	
	/**
	 * Not type checking this file because flow doesn't like attaching
	 * properties to Elements.
	 */
	
	var modelableTagRE = /^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_\-]*)?$/
	
	/* istanbul ignore if */
	if (isIE9) {
	  // http://www.matts411.com/post/internet-explorer-9-oninput/
	  document.addEventListener('selectionchange', function () {
	    var el = document.activeElement
	    if (el && el.vmodel) {
	      trigger(el, 'input')
	    }
	  })
	}
	
	var model = {
	  bind: function bind (el, binding, vnode) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (!modelableTagRE.test(vnode.tag)) {
	        warn(
	          "v-model is not supported on element type: <" + (vnode.tag) + ">. " +
	          'If you are working with contenteditable, it\'s recommended to ' +
	          'wrap a library dedicated for that purpose inside a custom component.',
	          vnode.context
	        )
	      }
	    }
	    if (vnode.tag === 'select') {
	      setSelected(el, binding, vnode.context)
	    } else {
	      if (!isAndroid) {
	        el.addEventListener('compositionstart', onCompositionStart)
	        el.addEventListener('compositionend', onCompositionEnd)
	      }
	      /* istanbul ignore if */
	      if (isIE9) {
	        el.vmodel = true
	      }
	    }
	  },
	  componentUpdated: function componentUpdated (el, binding, vnode) {
	    if (vnode.tag === 'select') {
	      setSelected(el, binding, vnode.context)
	      // in case the options rendered by v-for have changed,
	      // it's possible that the value is out-of-sync with the rendered options.
	      // detect such cases and filter out values that no longer has a matchig
	      // option in the DOM.
	      var needReset = el.multiple
	        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
	        : hasNoMatchingOption(binding.value, el.options)
	      if (needReset) {
	        trigger(el, 'change')
	      }
	    }
	  }
	}
	
	function setSelected (el, binding, vm) {
	  var value = binding.value
	  var isMultiple = el.multiple
	  if (isMultiple && !Array.isArray(value)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
	      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
	      vm
	    )
	    return
	  }
	  var selected, option
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    option = el.options[i]
	    if (isMultiple) {
	      selected = value.indexOf(getValue(option)) > -1
	      if (option.selected !== selected) {
	        option.selected = selected
	      }
	    } else {
	      if (getValue(option) === value) {
	        if (el.selectedIndex !== i) {
	          el.selectedIndex = i
	        }
	        return
	      }
	    }
	  }
	  if (!isMultiple) {
	    el.selectedIndex = -1
	  }
	}
	
	function hasNoMatchingOption (value, options) {
	  for (var i = 0, l = options.length; i < l; i++) {
	    if (getValue(options[i]) === value) {
	      return false
	    }
	  }
	  return true
	}
	
	function getValue (option) {
	  return '_value' in option
	    ? option._value
	    : option.value || option.text
	}
	
	function onCompositionStart (e) {
	  e.target.composing = true
	}
	
	function onCompositionEnd (e) {
	  e.target.composing = false
	  trigger(e.target, 'input')
	}
	
	function trigger (el, type) {
	  var e = document.createEvent('HTMLEvents')
	  e.initEvent(type, true, true)
	  el.dispatchEvent(e)
	}
	
	/*  */
	
	// recursively search for possible transition defined inside the component root
	function locateNode (vnode) {
	  return vnode.child && (!vnode.data || !vnode.data.transition)
	    ? locateNode(vnode.child._vnode)
	    : vnode
	}
	
	var show = {
	  bind: function bind (el, ref, vnode) {
	    var value = ref.value;
	
	    vnode = locateNode(vnode)
	    var transition = vnode.data && vnode.data.transition
	    if (value && transition && !isIE9) {
	      enter(vnode)
	    }
	    var originalDisplay = el.style.display === 'none' ? '' : el.style.display
	    el.style.display = value ? originalDisplay : 'none'
	    el.__vOriginalDisplay = originalDisplay
	  },
	  update: function update (el, ref, vnode) {
	    var value = ref.value;
	    var oldValue = ref.oldValue;
	
	    /* istanbul ignore if */
	    if (value === oldValue) return
	    vnode = locateNode(vnode)
	    var transition = vnode.data && vnode.data.transition
	    if (transition && !isIE9) {
	      if (value) {
	        enter(vnode)
	        el.style.display = el.__vOriginalDisplay
	      } else {
	        leave(vnode, function () {
	          el.style.display = 'none'
	        })
	      }
	    } else {
	      el.style.display = value ? el.__vOriginalDisplay : 'none'
	    }
	  }
	}
	
	var platformDirectives = {
	  model: model,
	  show: show
	}
	
	/*  */
	
	// Provides transition support for a single element/component.
	// supports transition mode (out-in / in-out)
	
	var transitionProps = {
	  name: String,
	  appear: Boolean,
	  css: Boolean,
	  mode: String,
	  type: String,
	  enterClass: String,
	  leaveClass: String,
	  enterActiveClass: String,
	  leaveActiveClass: String,
	  appearClass: String,
	  appearActiveClass: String
	}
	
	// in case the child is also an abstract component, e.g. <keep-alive>
	// we want to recrusively retrieve the real component to be rendered
	function getRealChild (vnode) {
	  var compOptions = vnode && vnode.componentOptions
	  if (compOptions && compOptions.Ctor.options.abstract) {
	    return getRealChild(getFirstComponentChild(compOptions.children))
	  } else {
	    return vnode
	  }
	}
	
	function extractTransitionData (comp) {
	  var data = {}
	  var options = comp.$options
	  // props
	  for (var key in options.propsData) {
	    data[key] = comp[key]
	  }
	  // events.
	  // extract listeners and pass them directly to the transition methods
	  var listeners = options._parentListeners
	  for (var key$1 in listeners) {
	    data[camelize(key$1)] = listeners[key$1].fn
	  }
	  return data
	}
	
	function placeholder (h, rawChild) {
	  return /\d-keep-alive$/.test(rawChild.tag)
	    ? h('keep-alive')
	    : null
	}
	
	function hasParentTransition (vnode) {
	  while ((vnode = vnode.parent)) {
	    if (vnode.data.transition) {
	      return true
	    }
	  }
	}
	
	var Transition = {
	  name: 'transition',
	  props: transitionProps,
	  abstract: true,
	  render: function render (h) {
	    var this$1 = this;
	
	    var children = this.$slots.default
	    if (!children) {
	      return
	    }
	
	    // filter out text nodes (possible whitespaces)
	    children = children.filter(function (c) { return c.tag; })
	    /* istanbul ignore if */
	    if (!children.length) {
	      return
	    }
	
	    // warn multiple elements
	    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
	      warn(
	        '<transition> can only be used on a single element. Use ' +
	        '<transition-group> for lists.',
	        this.$parent
	      )
	    }
	
	    var mode = this.mode
	
	    // warn invalid mode
	    if (process.env.NODE_ENV !== 'production' &&
	        mode && mode !== 'in-out' && mode !== 'out-in') {
	      warn(
	        'invalid <transition> mode: ' + mode,
	        this.$parent
	      )
	    }
	
	    var rawChild = children[0]
	
	    // if this is a component root node and the component's
	    // parent container node also has transition, skip.
	    if (hasParentTransition(this.$vnode)) {
	      return rawChild
	    }
	
	    // apply transition data to child
	    // use getRealChild() to ignore abstract components e.g. keep-alive
	    var child = getRealChild(rawChild)
	    /* istanbul ignore if */
	    if (!child) {
	      return rawChild
	    }
	
	    if (this._leaving) {
	      return placeholder(h, rawChild)
	    }
	
	    child.key = child.key == null
	      ? ("__v" + (child.tag + this._uid) + "__")
	      : child.key
	    var data = (child.data || (child.data = {})).transition = extractTransitionData(this)
	    var oldRawChild = this._vnode
	    var oldChild = getRealChild(oldRawChild)
	
	    // mark v-show
	    // so that the transition module can hand over the control to the directive
	    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
	      child.data.show = true
	    }
	
	    if (oldChild && oldChild.data && oldChild.key !== child.key) {
	      // replace old child transition data with fresh one
	      // important for dynamic transitions!
	      var oldData = oldChild.data.transition = extend({}, data)
	
	      // handle transition mode
	      if (mode === 'out-in') {
	        // return placeholder node and queue update when leave finishes
	        this._leaving = true
	        mergeVNodeHook(oldData, 'afterLeave', function () {
	          this$1._leaving = false
	          this$1.$forceUpdate()
	        })
	        return placeholder(h, rawChild)
	      } else if (mode === 'in-out') {
	        var delayedLeave
	        var performLeave = function () { delayedLeave() }
	        mergeVNodeHook(data, 'afterEnter', performLeave)
	        mergeVNodeHook(data, 'enterCancelled', performLeave)
	        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
	          delayedLeave = leave
	        })
	      }
	    }
	
	    return rawChild
	  }
	}
	
	/*  */
	
	// Provides transition support for list items.
	// supports move transitions using the FLIP technique.
	
	// Because the vdom's children update algorithm is "unstable" - i.e.
	// it doesn't guarantee the relative positioning of removed elements,
	// we force transition-group to update its children into two passes:
	// in the first pass, we remove all nodes that need to be removed,
	// triggering their leaving transition; in the second pass, we insert/move
	// into the final disired state. This way in the second pass removed
	// nodes will remain where they should be.
	
	var props = extend({
	  tag: String,
	  moveClass: String
	}, transitionProps)
	
	delete props.mode
	
	var TransitionGroup = {
	  props: props,
	
	  render: function render (h) {
	    var tag = this.tag || this.$vnode.data.tag || 'span'
	    var map = Object.create(null)
	    var prevChildren = this.prevChildren = this.children
	    var rawChildren = this.$slots.default || []
	    var children = this.children = []
	    var transitionData = extractTransitionData(this)
	
	    for (var i = 0; i < rawChildren.length; i++) {
	      var c = rawChildren[i]
	      if (c.tag) {
	        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
	          children.push(c)
	          map[c.key] = c
	          ;(c.data || (c.data = {})).transition = transitionData
	        } else if (process.env.NODE_ENV !== 'production') {
	          var opts = c.componentOptions
	          var name = opts
	            ? (opts.Ctor.options.name || opts.tag)
	            : c.tag
	          warn(("<transition-group> children must be keyed: <" + name + ">"))
	        }
	      }
	    }
	
	    if (prevChildren) {
	      var kept = []
	      var removed = []
	      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
	        var c$1 = prevChildren[i$1]
	        c$1.data.transition = transitionData
	        c$1.data.pos = c$1.elm.getBoundingClientRect()
	        if (map[c$1.key]) {
	          kept.push(c$1)
	        } else {
	          removed.push(c$1)
	        }
	      }
	      this.kept = h(tag, null, kept)
	      this.removed = removed
	    }
	
	    return h(tag, null, children)
	  },
	
	  beforeUpdate: function beforeUpdate () {
	    // force removing pass
	    this.__patch__(
	      this._vnode,
	      this.kept,
	      false, // hydrating
	      true // removeOnly (!important, avoids unnecessary moves)
	    )
	    this._vnode = this.kept
	  },
	
	  updated: function updated () {
	    var children = this.prevChildren
	    var moveClass = this.moveClass || (this.name + '-move')
	    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
	      return
	    }
	
	    children.forEach(function (c) {
	      /* istanbul ignore if */
	      if (c.elm._moveCb) {
	        c.elm._moveCb()
	      }
	      /* istanbul ignore if */
	      if (c.elm._enterCb) {
	        c.elm._enterCb()
	      }
	      var oldPos = c.data.pos
	      var newPos = c.data.pos = c.elm.getBoundingClientRect()
	      var dx = oldPos.left - newPos.left
	      var dy = oldPos.top - newPos.top
	      if (dx || dy) {
	        c.data.moved = true
	        var s = c.elm.style
	        s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)"
	        s.transitionDuration = '0s'
	      }
	    })
	
	    // force reflow to put everything in position
	    var f = document.body.offsetHeight // eslint-disable-line
	
	    children.forEach(function (c) {
	      if (c.data.moved) {
	        var el = c.elm
	        var s = el.style
	        addTransitionClass(el, moveClass)
	        s.transform = s.WebkitTransform = s.transitionDuration = ''
	        el._moveDest = c.data.pos
	        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
	          if (!e || /transform$/.test(e.propertyName)) {
	            el.removeEventListener(transitionEndEvent, cb)
	            el._moveCb = null
	            removeTransitionClass(el, moveClass)
	          }
	        })
	      }
	    })
	  },
	
	  methods: {
	    hasMove: function hasMove (el, moveClass) {
	      /* istanbul ignore if */
	      if (!hasTransition) {
	        return false
	      }
	      if (this._hasMove != null) {
	        return this._hasMove
	      }
	      addTransitionClass(el, moveClass)
	      var info = getTransitionInfo(el)
	      removeTransitionClass(el, moveClass)
	      return (this._hasMove = info.hasTransform)
	    }
	  }
	}
	
	var platformComponents = {
	  Transition: Transition,
	  TransitionGroup: TransitionGroup
	}
	
	/*  */
	
	// install platform specific utils
	Vue.config.isUnknownElement = isUnknownElement
	Vue.config.isReservedTag = isReservedTag
	Vue.config.getTagNamespace = getTagNamespace
	Vue.config.mustUseProp = mustUseProp
	
	// install platform runtime directives & components
	extend(Vue.options.directives, platformDirectives)
	extend(Vue.options.components, platformComponents)
	
	// install platform patch function
	Vue.prototype.__patch__ = config._isServer ? noop : patch
	
	// wrap mount
	Vue.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && !config._isServer ? query(el) : undefined
	  return this._mount(el, hydrating)
	}
	
	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue)
	    } else if (
	      process.env.NODE_ENV !== 'production' &&
	      inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)
	    ) {
	      console.log(
	        'Download the Vue Devtools for a better development experience:\n' +
	        'https://github.com/vuejs/vue-devtools'
	      )
	    }
	  }
	}, 0)
	
	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(63), (function() { return this; }())))

/***/ },
/* 63 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof2 = __webpack_require__(29);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var typeCheck = function typeCheck(arg) {
	    var t = typeof arg === 'undefined' ? 'undefined' : (0, _typeof3.default)(arg);
	    return (t === 'object' ? arg == null ? 'null' : Object.prototype.toString.call(arg).slice(8, -1) : t).toLowerCase();
	};
	
	exports.default = typeCheck;

/***/ },
/* 65 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    props: {
	        id: String
	    },
	
	    methods: {
	        eventTargetsComponent: function eventTargetsComponent(eventTarget) {
	            if (eventTarget === undefined || this.id === eventTarget) {
	                return true;
	            }
	
	            return false;
	        }
	    }
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('ul', {
	    ref: "dropdown",
	    staticClass: "ui-menu",
	    class: {
	      'has-icons': showIcons, 'has-secondary-text': showSecondaryText
	    },
	    attrs: {
	      "role": "menu",
	      "tabindex": "-1"
	    },
	    on: {
	      "keydown": function($event) {
	        if ($event.keyCode !== 27) return;
	        closeDropdown($event)
	      }
	    }
	  }, [(options) && _l((options), function(option) {
	    return _h('ui-menu-option', {
	      attrs: {
	        "type": option.type,
	        "icon": option.icon,
	        "text": option.text,
	        "disabled": option.disabled,
	        "secondary-text": option.secondaryText,
	        "option": option,
	        "show-icon": showIcons,
	        "show-secondary-text": showSecondaryText,
	        "hide-ripple-ink": hideRippleInk
	      },
	      nativeOn: {
	        "keydown": function($event) {
	          if ($event.keyCode !== 13) return;
	          $event.preventDefault();
	          optionSelect(option)
	        },
	        "click": function($event) {
	          optionSelect(option)
	        }
	      }
	    })
	  }), " ", _h('div', {
	    staticClass: "ui-menu-focus-redirector",
	    attrs: {
	      "tabindex": "0"
	    },
	    on: {
	      "focus": redirectFocus
	    }
	  })])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-9", module.exports)
	  }
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(68)
	
	/* script */
	__vue_exports__ = __webpack_require__(69)
	
	/* template */
	var __vue_template__ = __webpack_require__(70)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-12", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-12", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiPopover.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 68 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _ShowsDropdown = __webpack_require__(25);
	
	var _ShowsDropdown2 = _interopRequireDefault(_ShowsDropdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-popover',
	
	    mounted: function mounted() {
	        this.$on('dropdown-opened', function () {
	            if (this.containFocus) {
	                document.addEventListener('focus', this.restrictFocus, true);
	            }
	            this.$emit('opened');
	        });
	
	        this.$on('dropdown-closed', function () {
	            if (this.containFocus) {
	                document.removeEventListener('focus', this.restrictFocus, true);
	            }
	            this.$emit('closed');
	        });
	    },
	
	
	    methods: {
	        restrictFocus: function restrictFocus(e) {
	            if (!this.$refs.dropdown.contains(e.target)) {
	                e.stopPropagation();
	
	                this.$refs.dropdown.focus();
	            }
	        }
	    },
	
	    mixins: [_ShowsDropdown2.default]
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    ref: "dropdown",
	    staticClass: "ui-popover",
	    attrs: {
	      "role": "dialog",
	      "tabindex": "-1"
	    },
	    on: {
	      "keydown": function($event) {
	        if ($event.keyCode !== 27) return;
	        closeDropdown($event)
	      }
	    }
	  }, [_t("default")])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-12", module.exports)
	  }
	}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(72)
	
	/* script */
	__vue_exports__ = __webpack_require__(73)
	
	/* template */
	var __vue_template__ = __webpack_require__(74)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-13", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-13", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiProgressCircular.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 72 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 73 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: 'ui-progress-circular',
	
	    props: {
	        show: {
	            type: Boolean,
	            default: false
	        },
	        type: {
	            type: String,
	            default: 'indeterminate' },
	        color: {
	            type: String,
	            default: 'primary' },
	        value: {
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
	        _stroke: function _stroke() {
	            return this.stroke ? this.stroke : this.autoStroke ? parseInt(this.size / 8, 10) : 4;
	        },
	        strokeDashArray: function strokeDashArray() {
	            var circumference = 2 * Math.PI * this.radius;
	
	            return Math.round(circumference * 1000) / 1000;
	        },
	        strokeDashOffset: function strokeDashOffset() {
	            var value = this.moderateValue(this.value);
	            var circumference = 2 * Math.PI * this.radius;
	
	            return (100 - value) / 100 * circumference;
	        },
	        radius: function radius() {
	            return (this.size - this._stroke) / 2;
	        }
	    },
	
	    methods: {
	        moderateValue: function moderateValue(value) {
	            if (isNaN(value) || value < 0) {
	                return 0;
	            }
	
	            if (value > 100) {
	                return 100;
	            }
	
	            return value;
	        }
	    }
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('transition', {
	    attrs: {
	      "name": disableTransition ? '' : 'ui-progress-circular-toggle'
	    }
	  }, [_h('div', {
	    directives: [{
	      name: "show",
	      value: (show),
	      expression: "show"
	    }],
	    staticClass: "ui-progress-circular",
	    style: ({
	      'width': size + 'px',
	      'height': size + 'px'
	    })
	  }, [(type === 'determinate') ? _h('svg', {
	    staticClass: "ui-progress-circular-determinate",
	    attrs: {
	      "width": size,
	      "height": size,
	      "role": "progressbar",
	      "aria-valuemin": 0,
	      "aria-valuemax": 100,
	      "aria-valuenow": value
	    }
	  }, [_h('circle', {
	    staticClass: "ui-progress-circular-determinate-path",
	    class: [color],
	    style: ({
	      'stroke-dashoffset': strokeDashOffset,
	      'stroke-width': _stroke
	    }),
	    attrs: {
	      "r": radius,
	      "cx": size / 2,
	      "cy": size / 2,
	      "fill": "transparent",
	      "stroke-dasharray": strokeDashArray,
	      "stroke-dashoffset": "0"
	    }
	  })]) : _h('svg', {
	    staticClass: "ui-progress-circular-indeterminate",
	    attrs: {
	      "viewBox": "25 25 50 50",
	      "role": "progressbar",
	      "aria-valuemin": 0,
	      "aria-valuemax": 100
	    }
	  }, [_h('circle', {
	    staticClass: "ui-progress-circular-indeterminate-path",
	    class: [color],
	    attrs: {
	      "cx": "50",
	      "cy": "50",
	      "r": "20",
	      "fill": "none",
	      "stroke-miterlimit": "10",
	      "stroke-width": _stroke
	    }
	  })]), " "])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-13", module.exports)
	  }
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _eventBus = __webpack_require__(61);
	
	var _eventBus2 = _interopRequireDefault(_eventBus);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: {
	        openDropdownOn: String,
	        dropdownPosition: String,
	        hasPopover: {
	            type: Boolean,
	            default: false
	        },
	        hasDropdownMenu: {
	            type: Boolean,
	            default: false
	        },
	        menuOptions: {
	            type: Array,
	            default: function _default() {
	                return [];
	            }
	        },
	        showMenuIcons: {
	            type: Boolean,
	            default: false
	        },
	        showMenuSecondaryText: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    methods: {
	        menuOptionSelect: function menuOptionSelect(option) {
	            _eventBus2.default.$emit('menu-option-selected', option);
	        }
	    }
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _UiTooltip = __webpack_require__(77);
	
	var _UiTooltip2 = _interopRequireDefault(_UiTooltip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: {
	        tooltip: String,
	        openTooltipOn: String,
	        tooltipPosition: String
	    },
	
	    components: {
	        UiTooltip: _UiTooltip2.default
	    }
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(78)
	
	/* script */
	__vue_exports__ = __webpack_require__(79)
	
	/* template */
	var __vue_template__ = __webpack_require__(81)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-31", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-31", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiTooltip.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 78 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _tetherTooltip = __webpack_require__(80);
	
	var _tetherTooltip2 = _interopRequireDefault(_tetherTooltip);
	
	var _typeCheck = __webpack_require__(64);
	
	var _typeCheck2 = _interopRequireDefault(_typeCheck);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-tooltip',
	
	    props: {
	        content: String,
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
	        }
	    },
	
	    data: function data() {
	        return {
	            tooltip: null
	        };
	    },
	
	
	    watch: {
	        trigger: function trigger() {
	            if (!this.tooltip) {
	                this.initialize();
	            }
	        }
	    },
	
	    mounted: function mounted() {
	        this.initialize();
	    },
	    beforeDestory: function beforeDestory() {
	        if (this.tooltip) {
	            this.tooltip.remove();
	            this.tooltip.destroy();
	        }
	    },
	
	
	    methods: {
	        initialize: function initialize() {
	            var _t = this.$parent.$refs[this.trigger];
	            this._trigger = (0, _typeCheck2.default)(_t) === 'array' ? _t[0] : _t;
	            this.tooltip = new _tetherTooltip2.default({
	                target: this._trigger,
	                content: this.$refs.tooltip,
	                classes: 'ui-tooltip-theme',
	                position: this.position,
	                openOn: 'hover focus'
	            });
	        }
	    }
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether-tooltip 1.1.0 */
	
	(function(root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(26),__webpack_require__(27)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
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


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    ref: "tooltip",
	    staticClass: "ui-tooltip",
	    domProps: {
	      "textContent": _s(content)
	    }
	  })
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-31", module.exports)
	  }
	}

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('button', {
	    ref: "button",
	    staticClass: "ui-icon-button",
	    class: styleClasses,
	    attrs: {
	      "disabled": disabled || loading,
	      "type": buttonType,
	      "aria-label": ariaLabel || tooltip
	    }
	  }, [_h('ui-icon', {
	    directives: [{
	      name: "show",
	      value: (!loading),
	      expression: "!loading"
	    }],
	    staticClass: "ui-icon-button-icon",
	    attrs: {
	      "icon": icon
	    }
	  }), " ", _h('ui-progress-circular', {
	    directives: [{
	      name: "show",
	      value: (loading),
	      expression: "loading"
	    }],
	    staticClass: "ui-icon-button-spinner",
	    attrs: {
	      "color": spinnerColor,
	      "size": 24,
	      "stroke": 4.5,
	      "disable-transition": ""
	    }
	  }), " ", (!hideRippleInk && !disabled) ? _h('ui-ripple-ink') : _e(), " ", (tooltip) ? _h('ui-tooltip', {
	    attrs: {
	      "trigger": "button",
	      "content": tooltip,
	      "position": tooltipPosition,
	      "open-on": openTooltipOn
	    }
	  }) : _e(), " ", (hasDropdownMenu) ? _h('ui-menu', {
	    staticClass: "ui-button-dropdown-menu",
	    attrs: {
	      "trigger": "button",
	      "options": menuOptions,
	      "show-icons": showMenuIcons,
	      "show-secondary-text": showMenuSecondaryText,
	      "open-on": openDropdownOn,
	      "dropdown-position": dropdownPosition
	    },
	    on: {
	      "option-selected": menuOptionSelect
	    }
	  }) : _e(), " ", (hasPopover) ? _h('ui-popover', {
	    attrs: {
	      "trigger": "button",
	      "open-on": openDropdownOn,
	      "dropdown-position": dropdownPosition
	    }
	  }, [_t("popover")]) : _e()])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6", module.exports)
	  }
	}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "ui-alert"
	  }, [_h('transition', {
	    attrs: {
	      "name": "ui-alert-toggle"
	    }
	  }, [_h('div', {
	    directives: [{
	      name: "show",
	      value: (show),
	      expression: "show"
	    }],
	    staticClass: "ui-alert-body",
	    class: [type],
	    attrs: {
	      "role": "alert"
	    }
	  }, [(!hideIcon) ? _h('ui-icon', {
	    staticClass: "ui-alert-icon",
	    attrs: {
	      "icon": iconName
	    }
	  }) : _e(), " ", _h('div', {
	    staticClass: "ui-alert-text"
	  }, [_t("default", [_h('span', {
	    domProps: {
	      "textContent": _s(text)
	    }
	  })])]), " ", (dismissible) ? _h('ui-icon-button', {
	    staticClass: "ui-alert-close-button",
	    attrs: {
	      "type": "clear",
	      "icon": String('\uE5CD'),
	      "aria-label": "Close"
	    },
	    nativeOn: {
	      "click": function($event) {
	        close($event)
	      }
	    }
	  }) : _e()])])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2", module.exports)
	  }
	}

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(85)
	
	/* script */
	__vue_exports__ = __webpack_require__(86)
	
	/* template */
	var __vue_template__ = __webpack_require__(110)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiAutocomplete.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 85 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _fuzzysearch = __webpack_require__(87);
	
	var _fuzzysearch2 = _interopRequireDefault(_fuzzysearch);
	
	var _UiIcon = __webpack_require__(6);
	
	var _UiIcon2 = _interopRequireDefault(_UiIcon);
	
	var _UiAutocompleteSuggestion = __webpack_require__(88);
	
	var _UiAutocompleteSuggestion2 = _interopRequireDefault(_UiAutocompleteSuggestion);
	
	var _eventBus = __webpack_require__(61);
	
	var _eventBus2 = _interopRequireDefault(_eventBus);
	
	var _HasTextInput = __webpack_require__(93);
	
	var _HasTextInput2 = _interopRequireDefault(_HasTextInput);
	
	var _ValidatesInput = __webpack_require__(94);
	
	var _ValidatesInput2 = _interopRequireDefault(_ValidatesInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-autocomplete',
	
	    props: {
	        suggestions: {
	            type: Array,
	            default: []
	        },
	        limit: {
	            type: Number,
	            default: 8
	        },
	        type: String,
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
	        autoHighlightFirstMatch: {
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
	                    text: 'text',
	                    value: 'value',
	                    image: 'image'
	                };
	            }
	        }
	    },
	
	    data: function data() {
	        return {
	            showDropdown: false,
	            highlightedItem: -1,
	            ignoreValueChange: false
	        };
	    },
	
	
	    computed: {
	        suggestionsAfterFilter: function suggestionsAfterFilter() {
	            var _this = this;
	
	            return this.suggestions.filter(function (item, index) {
	                return _this.search(item) && index < _this.limit;
	            });
	        },
	        showIcon: function showIcon() {
	            return Boolean(this.icon);
	        }
	    },
	
	    watch: {
	        value: function value() {
	            if (!this.ignoreValueChange && this.value.length >= this.minChars) {
	                this.open();
	            }
	
	            this.highlightedItem = this.autoHighlightFirstMatch ? 0 : -1;
	        }
	    },
	
	    mounted: function mounted() {
	        var _this2 = this;
	
	        document.addEventListener('click', this.closeOnExternalClick);
	        _eventBus2.default.$on('ui-input::reset', function (id) {
	            if (!_this2.eventTargetsComponent(id)) {
	                return;
	            }
	
	            if (document.activeElement === _this2.$refs.input) {
	                document.activeElement.blur();
	            }
	
	            _this2.$emit('input', _this2.initialValue);
	            _this2.dirty = false;
	            _this2.valid = true;
	        });
	    },
	    beforeDestroy: function beforeDestroy() {
	        document.removeEventListener('click', this.closeOnExternalClick);
	    },
	
	
	    methods: {
	        search: function search(item) {
	            if (this.filter) {
	                return this.filter(item, this.value);
	            }
	
	            var text = item[this.keys.text] || item;
	            var query = this.value;
	
	            if (typeof query === 'string') {
	                query = query.toLowerCase();
	            }
	
	            return (0, _fuzzysearch2.default)(query, text.toLowerCase());
	        },
	        select: function select(item) {
	            var _this3 = this;
	
	            if (this.append) {
	                this.$emit('input', this.value + this.appendDelimiter + (item[this.keys.value] || item));
	            } else {
	                this.$emit('input', item[this.keys.value] || item);
	            }
	
	            this.$emit('selected', item);
	
	            this.validate();
	
	            this.$nextTick(function () {
	                _this3.close();
	                _this3.$refs.input.focus();
	            });
	        },
	        highlight: function highlight(index) {
	            var firstIndex = 0;
	            var lastIndex = this.$refs.items.length - 1;
	
	            if (index === -2) {
	                index = lastIndex;
	            } else if (index < firstIndex) {
	                index = this.cycleHighlight ? lastIndex : index;
	            } else if (index > lastIndex) {
	                index = this.cycleHighlight ? firstIndex : -1;
	            }
	
	            this.highlightedItem = index;
	
	            if (this.showOnUpDown) {
	                this.open();
	            }
	
	            if (index < firstIndex || index > lastIndex) {
	                this.$emit('highlight-overflow', index);
	            } else {
	                this.$emit('highlighted', this.$refs.items[index].item, index);
	            }
	        },
	        selectHighlighted: function selectHighlighted(index, e) {
	            if (this.showDropdown && this.$refs.items.length) {
	                e.preventDefault();
	                this.select(this.$refs.items[index].item);
	            }
	        },
	        clearSearch: function clearSearch() {
	            this.$emit('input', '');
	            this.open();
	        },
	        open: function open() {
	            if (!this.showDropdown) {
	                this.showDropdown = true;
	                this.$emit('opened');
	            }
	        },
	        close: function close() {
	            if (this.showDropdown) {
	                this.showDropdown = false;
	                this.highlightedItem = -1;
	
	                this.$emit('closed');
	                this.validate();
	            }
	        },
	        closeOnExternalClick: function closeOnExternalClick(e) {
	            if (!this.$refs.autocomplete.contains(e.target) && this.showDropdown) {
	                this.close();
	            }
	        },
	        focus: function focus() {
	            this.active = true;
	        },
	        blur: function blur() {
	            this.active = false;
	
	            if (!this.dirty) {
	                this.dirty = true;
	            }
	        }
	    },
	
	    components: {
	        UiIcon: _UiIcon2.default,
	        UiAutocompleteSuggestion: _UiAutocompleteSuggestion2.default
	    },
	
	    mixins: [_HasTextInput2.default, _ValidatesInput2.default]
	};

/***/ },
/* 87 */
/***/ function(module, exports) {

	'use strict';
	
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


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(89)
	
	/* script */
	__vue_exports__ = __webpack_require__(90)
	
	/* template */
	var __vue_template__ = __webpack_require__(92)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-32", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-32", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiAutocompleteSuggestion.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 89 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _uuid = __webpack_require__(91);
	
	var _uuid2 = _interopRequireDefault(_uuid);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-autocomplete-suggestion',
	
	    props: {
	        id: {
	            type: String,
	            default: function _default() {
	                return _uuid2.default.short();
	            }
	        },
	        item: {
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
	                    text: 'text',
	                    value: 'value',
	                    image: 'image'
	                };
	            }
	        }
	    },
	
	    partials: {
	        'ui-autocomplete-simple': '\n            <li class="ui-autocomplete-suggestion-item" v-text="item[keys.text] || item"></li>\n        ',
	
	        'ui-autocomplete-image': '\n            <div\n                class="image" :style="{ \'background-image\': \'url(\' + item[keys.image] + \')\' }"\n            ></div>\n            <div class="text" v-text="item[keys.text]"></div>\n        '
	    }
	};

/***/ },
/* 91 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Fast UUID generator, RFC4122 version 4 compliant.
	 * @author Jeff Ward (jcward.com).
	 * @license MIT license
	 * @link http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
	 **/
	
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

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('li', {
	    staticClass: "ui-autocomplete-suggestion",
	    class: ['ui-autocomplete-' + type, {
	      'highlighted': highlighted
	    }],
	    attrs: {
	      "id": id
	    }
	  }, [(type === 'image') ? [_h('div', {
	    staticClass: "image",
	    style: ({
	      'background-image': 'url(' + item[keys.image] + ')'
	    })
	  }), " ", _h('div', {
	    staticClass: "text",
	    domProps: {
	      "textContent": _s(item[keys.text])
	    }
	  })] : [_h('li', {
	    staticClass: "ui-autocomplete-suggestion-item",
	    domProps: {
	      "textContent": _s(item[keys.text] || item)
	    }
	  })], " "])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-32", module.exports)
	  }
	}

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _ReceivesTargetedEvent = __webpack_require__(65);
	
	var _ReceivesTargetedEvent2 = _interopRequireDefault(_ReceivesTargetedEvent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: {
	        id: String,
	        name: {
	            type: String,
	            required: true
	        },
	        placeholder: String,
	        value: {
	            type: [String, Number],
	            default: ''
	        },
	        icon: String,
	        iconRight: {
	            type: Boolean,
	            default: false
	        },
	        label: String,
	        hideLabel: {
	            type: Boolean,
	            default: false
	        },
	        helpText: String,
	        disabled: {
	            type: Boolean,
	            default: false
	        },
	        debounce: {
	            type: Number,
	            default: null
	        }
	    },
	
	    data: function data() {
	        return {
	            active: false,
	            initialValue: ''
	        };
	    },
	
	
	    computed: {
	        showFeedback: function showFeedback() {
	            var canBeValidated = Boolean(this.validationRules);
	            var hasHelpText = Boolean(this.helpText);
	
	            return canBeValidated || hasHelpText;
	        }
	    },
	
	    created: function created() {
	        this.initialValue = this.value;
	    },
	
	
	    mixins: [_ReceivesTargetedEvent2.default]
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _validatorjs = __webpack_require__(95);
	
	var _validatorjs2 = _interopRequireDefault(_validatorjs);
	
	var _eventBus = __webpack_require__(61);
	
	var _eventBus2 = _interopRequireDefault(_eventBus);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: {
	        hideValidationErrors: {
	            type: Boolean,
	            default: false
	        },
	        validationRules: [String, Array],
	        validationMessages: Object
	    },
	
	    data: function data() {
	        return {
	            validationError: '',
	            valid: true,
	            dirty: false,
	            _validationMessages: null
	        };
	    },
	    created: function created() {
	        this._validationMessages = this.validationMessages;
	    },
	    mounted: function mounted() {
	        var _this = this;
	
	        _eventBus2.default.$on('ui-input::set-validity', function (valid, error, id) {
	            if (!_this.eventTargetsComponent(id)) {
	                return;
	            }
	            _this.setValidity(valid, error);
	        });
	    },
	
	
	    methods: {
	        validate: function validate() {
	            if (!this.validationRules || !this.dirty) {
	                return;
	            }
	
	            var data = {
	                value: this.value
	            };
	
	            var rules = {
	                value: this.validationRules
	            };
	
	            var validation = new _validatorjs2.default(data, rules, this._validationMessages);
	
	            validation.setAttributeNames({ value: this.name.replace(/_/g, ' ') });
	
	            this.setValidity(validation.passes(), validation.errors.first('value'));
	        },
	        setValidity: function setValidity(valid, error) {
	            this.valid = valid;
	
	            if (!valid && error && error.length) {
	                this.validationError = error;
	                this.$emit('validationError', error);
	            } else {
	                this.$emit('valid', valid);
	            }
	        }
	    }
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var Rules = __webpack_require__(96);
	var Lang = __webpack_require__(97);
	var Errors = __webpack_require__(108);
	var Attributes = __webpack_require__(99);
	var AsyncResolvers = __webpack_require__(109);
	
	var Validator = function(input, rules, customMessages) {
	  var lang = Validator.getDefaultLang();
	  this.input = input;
	  this.messages = Lang._make(lang);
	  this.messages._setCustom(customMessages);
	  this.setAttributeFormatter(Validator.prototype.attributeFormatter);
	
	  this.errors = new Errors();
	  this.errorCount = 0;
	
	  this.hasAsync = false;
	  this.rules = this._parseRules(rules);
	};
	
	Validator.prototype = {
	
	  constructor: Validator,
	
	  /**
	   * Default language
	   *
	   * @type {string}
	   */
	  lang: 'en',
	
	  /**
	   * Numeric based rules
	   *
	   * @type {array}
	   */
	  numericRules: ['integer', 'numeric'],
	
	  /**
	   * Attribute formatter.
	   *
	   * @type {function}
	   */
	  attributeFormatter: Attributes.formatter,
	
	  /**
	   * Run validator
	   *
	   * @return {boolean} Whether it passes; true = passes, false = fails
	   */
	  check: function() {
	    var self = this;
	
	    for (var attribute in this.rules) {
	      var attributeRules = this.rules[attribute];
	      var inputValue = this.input[attribute]; // if it doesnt exist in input, it will be undefined
	
	      for (var i = 0, len = attributeRules.length, rule, ruleOptions, rulePassed; i < len; i++) {
	        ruleOptions = attributeRules[i];
	        rule = this.getRule(ruleOptions.name);
	
	        if (!this._isValidatable(rule, inputValue)) {
	          continue;
	        }
	
	        rulePassed = rule.validate(inputValue, ruleOptions.value, attribute);
	        if (!rulePassed) {
	          this._addFailure(rule);
	        }
	
	        if (this._shouldStopValidating(attribute, rulePassed)) {
	          break;
	        }
	      }
	    }
	
	    return this.errorCount === 0;
	  },
	
	  /**
	   * Run async validator
	   *
	   * @param {function} passes
	   * @param {function} fails
	   * @return {void}
	   */
	  checkAsync: function(passes, fails) {
	    var _this = this;
	    passes = passes || function() {};
	    fails = fails || function() {};
	
	    var failsOne = function(rule, message) {
	      _this._addFailure(rule, message);
	    };
	
	    var resolvedAll = function(allPassed) {
	      if (allPassed) {
	        passes();
	      } else {
	        fails();
	      }
	    };
	
	    var validateRule = function(inputValue, ruleOptions, attribute, rule) {
	      return function() {
	        var resolverIndex = asyncResolvers.add(rule);
	        rule.validate(inputValue, ruleOptions.value, attribute, function() {
	          asyncResolvers.resolve(resolverIndex);
	        });
	      };
	    };
	
	    var asyncResolvers = new AsyncResolvers(failsOne, resolvedAll);
	
	    for (var attribute in this.rules) {
	      var attributeRules = this.rules[attribute];
	      var inputValue = this.input[attribute]; // if it doesnt exist in input, it will be undefined
	
	      for (var i = 0, len = attributeRules.length, rule, ruleOptions; i < len; i++) {
	        ruleOptions = attributeRules[i];
	
	        rule = this.getRule(ruleOptions.name);
	
	        if (!this._isValidatable(rule, inputValue)) {
	          continue;
	        }
	
	        validateRule(inputValue, ruleOptions, attribute, rule)();
	      }
	    }
	
	    asyncResolvers.enableFiring();
	    asyncResolvers.fire();
	  },
	
	  /**
	   * Add failure and error message for given rule
	   *
	   * @param {Rule} rule
	   */
	  _addFailure: function(rule) {
	    var msg = this.messages.render(rule);
	    this.errors.add(rule.attribute, msg);
	    this.errorCount++;
	  },
	
	  /**
	   * Parse rules, normalizing format into: { attribute: [{ name: 'age', value: 3 }] }
	   *
	   * @param  {object} rules
	   * @return {object}
	   */
	  _parseRules: function(rules) {
	    var parsedRules = {};
	    for (var attribute in rules) {
	      var rulesArray = rules[attribute];
	      var attributeRules = [];
	
	      if (typeof rulesArray === 'string') {
	        rulesArray = rulesArray.split('|');
	      }
	
	      for (var i = 0, len = rulesArray.length, rule; i < len; i++) {
	        rule = this._extractRuleAndRuleValue(rulesArray[i]);
	        if (Rules.isAsync(rule.name)) {
	          this.hasAsync = true;
	        }
	        attributeRules.push(rule);
	      }
	
	      parsedRules[attribute] = attributeRules;
	    }
	    return parsedRules;
	  },
	
	  /**
	   * Extract a rule and a value from a ruleString (i.e. min:3), rule = min, value = 3
	   *
	   * @param  {string} ruleString min:3
	   * @return {object} object containing the name of the rule and value
	   */
	  _extractRuleAndRuleValue: function(ruleString) {
	    var rule = {},
	      ruleArray;
	
	    rule.name = ruleString;
	
	    if (ruleString.indexOf(':') >= 0) {
	      ruleArray = ruleString.split(':');
	      rule.name = ruleArray[0];
	      rule.value = ruleArray.slice(1).join(":");
	    }
	
	    return rule;
	  },
	
	  /**
	   * Determine if attribute has any of the given rules
	   *
	   * @param  {string}  attribute
	   * @param  {array}   findRules
	   * @return {boolean}
	   */
	  _hasRule: function(attribute, findRules) {
	    var rules = this.rules[attribute] || [];
	    for (var i = 0, len = rules.length; i < len; i++) {
	      if (findRules.indexOf(rules[i].name) > -1) {
	        return true;
	      }
	    }
	    return false;
	  },
	
	  /**
	   * Determine if attribute has any numeric-based rules.
	   *
	   * @param  {string}  attribute
	   * @return {Boolean}
	   */
	  _hasNumericRule: function(attribute) {
	    return this._hasRule(attribute, this.numericRules);
	  },
	
	  /**
	   * Determine if rule is validatable
	   *
	   * @param  {Rule}   rule
	   * @param  {mixed}  value
	   * @return {boolean}
	   */
	  _isValidatable: function(rule, value) {
	    if (Rules.isImplicit(rule.name)) {
	      return true;
	    }
	
	    return this.getRule('required').validate(value);
	  },
	
	
	  /**
	   * Determine if we should stop validating.
	   *
	   * @param  {string} attribute
	   * @param  {boolean} rulePassed
	   * @return {boolean}
	   */
	  _shouldStopValidating: function(attribute, rulePassed) {
	
	    var stopOnAttributes = this.stopOnAttributes;
	    if (stopOnAttributes === false || rulePassed === true) {
	      return false;
	    }
	
	    if (stopOnAttributes instanceof Array) {
	      return stopOnAttributes.indexOf(attribute) > -1;
	    }
	
	    return true;
	  },
	
	  /**
	   * Set custom attribute names.
	   *
	   * @param {object} attributes
	   * @return {void}
	   */
	  setAttributeNames: function(attributes) {
	    this.messages._setAttributeNames(attributes);
	  },
	
	  /**
	   * Set the attribute formatter.
	   *
	   * @param {fuction} func
	   * @return {void}
	   */
	  setAttributeFormatter: function(func) {
	    this.messages._setAttributeFormatter(func);
	  },
	
	  /**
	   * Get validation rule
	   *
	   * @param  {string} name
	   * @return {Rule}
	   */
	  getRule: function(name) {
	    return Rules.make(name, this);
	  },
	
	  /**
	   * Stop on first error.
	   *
	   * @param  {boolean|array} An array of attributes or boolean true/false for all attributes.
	   * @return {void}
	   */
	  stopOnError: function(attributes) {
	    this.stopOnAttributes = attributes;
	  },
	
	  /**
	   * Determine if validation passes
	   *
	   * @param {function} passes
	   * @return {boolean|undefined}
	   */
	  passes: function(passes) {
	    var async = this._checkAsync('passes', passes);
	    if (async) {
	      return this.checkAsync(passes);
	    }
	    return this.check();
	  },
	
	  /**
	   * Determine if validation fails
	   *
	   * @param {function} fails
	   * @return {boolean|undefined}
	   */
	  fails: function(fails) {
	    var async = this._checkAsync('fails', fails);
	    if (async) {
	      return this.checkAsync(function() {}, fails);
	    }
	    return !this.check();
	  },
	
	  /**
	   * Check if validation should be called asynchronously
	   *
	   * @param  {string}   funcName Name of the caller
	   * @param  {function} callback
	   * @return {boolean}
	   */
	  _checkAsync: function(funcName, callback) {
	    var hasCallback = typeof callback === 'function';
	    if (this.hasAsync && !hasCallback) {
	      throw funcName + ' expects a callback when async rules are being tested.';
	    }
	
	    return this.hasAsync || hasCallback;
	  }
	
	};
	
	/**
	 * Set messages for language
	 *
	 * @param {string} lang
	 * @param {object} messages
	 * @return {this}
	 */
	Validator.setMessages = function(lang, messages) {
	  Lang._set(lang, messages);
	  return this;
	};
	
	/**
	 * Get messages for given language
	 *
	 * @param  {string} lang
	 * @return {Messages}
	 */
	Validator.getMessages = function(lang) {
	  return Lang._get(lang);
	};
	
	/**
	 * Set default language to use
	 *
	 * @param {string} lang
	 * @return {void}
	 */
	Validator.useLang = function(lang) {
	  this.prototype.lang = lang;
	};
	
	/**
	 * Get default language
	 *
	 * @return {string}
	 */
	Validator.getDefaultLang = function() {
	  return this.prototype.lang;
	};
	
	/**
	 * Set the attribute formatter.
	 *
	 * @param {fuction} func
	 * @return {void}
	 */
	Validator.setAttributeFormatter = function(func) {
	  this.prototype.attributeFormatter = func;
	};
	
	/**
	 * Stop on first error.
	 *
	 * @param  {boolean|array} An array of attributes or boolean true/false for all attributes.
	 * @return {void}
	 */
	Validator.stopOnError = function(attributes) {
	  this.prototype.stopOnAttributes = attributes;
	};
	
	/**
	 * Register custom validation rule
	 *
	 * @param  {string}   name
	 * @param  {function} fn
	 * @param  {string}   message
	 * @return {void}
	 */
	Validator.register = function(name, fn, message) {
	  var lang = Validator.getDefaultLang();
	  Rules.register(name, fn);
	  Lang._setRuleMessage(lang, name, message);
	};
	
	/**
	 * Register asynchronous validation rule
	 *
	 * @param  {string}   name
	 * @param  {function} fn
	 * @param  {string}   message
	 * @return {void}
	 */
	Validator.registerAsync = function(name, fn, message) {
	  var lang = Validator.getDefaultLang();
	  Rules.registerAsync(name, fn);
	  Lang._setRuleMessage(lang, name, message);
	};
	
	module.exports = Validator;


/***/ },
/* 96 */
/***/ function(module, exports) {

	var rules = {
	
	  required: function(val) {
	    var str;
	
	    if (val === undefined || val === null) {
	      return false;
	    }
	
	    str = String(val).replace(/\s/g, "");
	    return str.length > 0 ? true : false;
	  },
	
	  required_if: function(val, req, attribute) {
	    req = this.getParameters();
	    if (this.validator.input[req[0]] === req[1]) {
	      return this.validator.getRule('required').validate(val);
	    }
	
	    return true;
	  },
	
	  // compares the size of strings
	  // with numbers, compares the value
	  size: function(val, req, attribute) {
	    if (val) {
	      req = parseFloat(req);
	
	      var size = this.getSize();
	
	      return size === req;
	    }
	
	    return true;
	  },
	
	  string: function(val, req, attribute) {
	    return typeof val === 'string';
	  },
	
	  /**
	   * Compares the size of strings or the value of numbers if there is a truthy value
	   */
	  min: function(val, req, attribute) {
	    var size = this.getSize();
	    return size >= req;
	  },
	
	  /**
	   * Compares the size of strings or the value of numbers if there is a truthy value
	   */
	  max: function(val, req, attribute) {
	    var size = this.getSize();
	    return size <= req;
	  },
	
	  between: function(val, req, attribute) {
	    req = this.getParameters();
	    var size = this.getSize();
	    var min = parseFloat(req[0], 10);
	    var max = parseFloat(req[1], 10);
	    return size >= min && size <= max;
	  },
	
	  email: function(val) {
	    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(val);
	  },
	
	  numeric: function(val) {
	    var num;
	
	    num = Number(val); // tries to convert value to a number. useful if value is coming from form element
	
	    if (typeof num === 'number' && !isNaN(num) && typeof val !== 'boolean') {
	      return true;
	    } else {
	      return false;
	    }
	  },
	
	  array: function(val) {
	    return val instanceof Array;
	  },
	
	  url: function(url) {
	    return (/^https?:\/\/\S+/).test(url);
	  },
	
	  alpha: function(val) {
	    return (/^[a-zA-Z]+$/).test(val);
	  },
	
	  alpha_dash: function(val) {
	    return (/^[a-zA-Z0-9_\-]+$/).test(val);
	  },
	
	  alpha_num: function(val) {
	    return (/^[a-zA-Z0-9]+$/).test(val);
	  },
	
	  same: function(val, req) {
	    var val1 = this.validator.input[req];
	    var val2 = val;
	
	    if (val1 === val2) {
	      return true;
	    }
	
	    return false;
	  },
	
	  different: function(val, req) {
	    var val1 = this.validator.input[req];
	    var val2 = val;
	
	    if (val1 !== val2) {
	      return true;
	    }
	
	    return false;
	  },
	
	  "in": function(val, req) {
	    var list, i;
	
	    if (val) {
	      list = req.split(',');
	    }
	
	    if (val && !(val instanceof Array)) {
	      val = String(val); // if it is a number
	
	      for (i = 0; i < list.length; i++) {
	        if (val === list[i]) {
	          return true;
	        }
	      }
	
	      return false;
	    }
	
	    if (val && val instanceof Array) {
	      for (i = 0; i < val.length; i++) {
	        if (list.indexOf(val[i]) < 0) {
	          return false;
	        }
	      }
	    }
	
	    return true;
	  },
	
	  not_in: function(val, req) {
	    var list = req.split(',');
	    var len = list.length;
	    var returnVal = true;
	
	    val = String(val); // convert val to a string if it is a number
	
	    for (var i = 0; i < len; i++) {
	      if (val === list[i]) {
	        returnVal = false;
	        break;
	      }
	    }
	
	    return returnVal;
	  },
	
	  accepted: function(val) {
	    if (val === 'on' || val === 'yes' || val === 1 || val === '1' || val === true) {
	      return true;
	    }
	
	    return false;
	  },
	
	  confirmed: function(val, req, key) {
	    var confirmedKey = key + '_confirmation';
	
	    if (this.validator.input[confirmedKey] === val) {
	      return true;
	    }
	
	    return false;
	  },
	
	  integer: function(val) {
	    return String(parseInt(val, 10)) === String(val);
	  },
	
	  digits: function(val, req) {
	    var numericRule = this.validator.getRule('numeric');
	    if (numericRule.validate(val) && String(val).length === parseInt(req)) {
	      return true;
	    }
	
	    return false;
	  },
	
	  regex: function(val, req) {
	    var mod = /[g|i|m]{1,3}$/;
	    var flag = req.match(mod);
	    flag = flag ? flag[0] : "i";
	    req = req.replace(mod, "").slice(1, -1);
	    req = new RegExp(req, flag);
	    return !!val.match(req);
	  }
	
	};
	
	function Rule(name, fn, async) {
	  this.name = name;
	  this.fn = fn;
	  this.passes = null;
	  this.customMessage = undefined;
	  this.async = async;
	}
	
	Rule.prototype = {
	
	  /**
	   * Validate rule
	   *
	   * @param  {mixed} inputValue
	   * @param  {mixed} ruleValue
	   * @param  {string} attribute
	   * @param  {function} callback
	   * @return {boolean|undefined}
	   */
	  validate: function(inputValue, ruleValue, attribute, callback) {
	    var _this = this;
	    this._setValidatingData(attribute, inputValue, ruleValue);
	    if (typeof callback === 'function') {
	      this.callback = callback;
	      var handleResponse = function(passes, message) {
	        _this.response(passes, message);
	      };
	
	      if (this.async) {
	        return this.fn.apply(this, [inputValue, ruleValue, attribute, handleResponse]);
	      } else {
	        return handleResponse(this.fn.apply(this, [inputValue, ruleValue, attribute]));
	      }
	    }
	    return this.fn.apply(this, [inputValue, ruleValue, attribute]);
	  },
	
	  /**
	   * Set validating data
	   *
	   * @param {string} attribute
	   * @param {mixed} inputValue
	   * @param {mixed} ruleValue
	   * @return {void}
	   */
	  _setValidatingData: function(attribute, inputValue, ruleValue) {
	    this.attribute = attribute;
	    this.inputValue = inputValue;
	    this.ruleValue = ruleValue;
	  },
	
	  /**
	   * Get parameters
	   *
	   * @return {array}
	   */
	  getParameters: function() {
	    return this.ruleValue ? this.ruleValue.split(',') : [];
	  },
	
	  /**
	   * Get true size of value
	   *
	   * @return {integer|float}
	   */
	  getSize: function() {
	    var value = this.inputValue;
	
	    if (value instanceof Array) {
	      return value.length;
	    }
	
	    if (typeof value === 'number') {
	      return value;
	    }
	
	    if (this.validator._hasNumericRule(this.attribute)) {
	      return parseFloat(value, 10);
	    }
	
	    return value.length;
	  },
	
	  /**
	   * Get the type of value being checked; numeric or string.
	   *
	   * @return {string}
	   */
	  _getValueType: function() {
	
	    if (typeof this.inputValue === 'number' || this.validator._hasNumericRule(this.attribute)) {
	      return 'numeric';
	    }
	
	    return 'string';
	  },
	
	  /**
	   * Set the async callback response
	   *
	   * @param  {boolean|undefined} passes  Whether validation passed
	   * @param  {string|undefined} message Custom error message
	   * @return {void}
	   */
	  response: function(passes, message) {
	    this.passes = (passes === undefined || passes === true);
	    this.customMessage = message;
	    this.callback(this.passes, message);
	  },
	
	  /**
	   * Set validator instance
	   *
	   * @param {Validator} validator
	   * @return {void}
	   */
	  setValidator: function(validator) {
	    this.validator = validator;
	  }
	
	};
	
	var manager = {
	
	  /**
	   * List of async rule names
	   *
	   * @type {Array}
	   */
	  asyncRules: [],
	
	  /**
	   * Implicit rules (rules to always validate)
	   *
	   * @type {Array}
	   */
	  implicitRules: ['required', 'required_if', 'accepted'],
	
	  /**
	   * Get rule by name
	   *
	   * @param  {string} name
	   * @param {Validator}
	   * @return {Rule}
	   */
	  make: function(name, validator) {
	    var async = this.isAsync(name);
	    var rule = new Rule(name, rules[name], async);
	    rule.setValidator(validator);
	    return rule;
	  },
	
	  /**
	   * Determine if given rule is async
	   *
	   * @param  {string}  name
	   * @return {boolean}
	   */
	  isAsync: function(name) {
	    for (var i = 0, len = this.asyncRules.length; i < len; i++) {
	      if (this.asyncRules[i] === name) {
	        return true;
	      }
	    }
	    return false;
	  },
	
	  /**
	   * Determine if rule is implicit (should always validate)
	   *
	   * @param {string} name
	   * @return {boolean}
	   */
	  isImplicit: function(name) {
	    return this.implicitRules.indexOf(name) > -1;
	  },
	
	  /**
	   * Register new rule
	   *
	   * @param  {string}   name
	   * @param  {function} fn
	   * @return {void}
	   */
	  register: function(name, fn) {
	    rules[name] = fn;
	  },
	
	  /**
	   * Register async rule
	   *
	   * @param  {string}   name
	   * @param  {function} fn
	   * @return {void}
	   */
	  registerAsync: function(name, fn) {
	    this.register(name, fn);
	    this.asyncRules.push(name);
	  }
	
	};
	
	
	module.exports = manager;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var Messages = __webpack_require__(98);
	
	__webpack_require__(100);
	
	var container = {
	
	  messages: {},
	
	  /**
	   * Set messages for language
	   *
	   * @param {string} lang
	   * @param {object} rawMessages
	   * @return {void}
	   */
	  _set: function(lang, rawMessages) {
	    this.messages[lang] = rawMessages;
	  },
	
	  /**
	   * Set message for given language's rule.
	   *
	   * @param {string} lang
	   * @param {string} attribute
	   * @param {string|object} message
	   * @return {void}
	   */
	  _setRuleMessage: function(lang, attribute, message) {
	    this._load(lang);
	    if (message === undefined) {
	      message = this.messages[lang].def;
	    }
	
	    this.messages[lang][attribute] = message;
	  },
	
	  /**
	   * Load messages (if not already loaded)
	   *
	   * @param  {string} lang
	   * @return {void}
	   */
	  _load: function(lang) {
	    if (!this.messages[lang]) {
	      var rawMessages = __webpack_require__(101)("./" + lang);
	      this._set(lang, rawMessages);
	    }
	  },
	
	  /**
	   * Get raw messages for language
	   *
	   * @param  {string} lang
	   * @return {object}
	   */
	  _get: function(lang) {
	    this._load(lang);
	    return this.messages[lang];
	  },
	
	  /**
	   * Make messages for given language
	   *
	   * @param  {string} lang
	   * @return {Messages}
	   */
	  _make: function(lang) {
	    this._load(lang);
	    return new Messages(lang, this.messages[lang]);
	  }
	
	};
	
	module.exports = container;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var Attributes = __webpack_require__(99);
	
	var Messages = function(lang, messages) {
	  this.lang = lang;
	  this.messages = messages;
	  this.customMessages = {};
	  this.attributeNames = {};
	};
	
	Messages.prototype = {
	  constructor: Messages,
	
	  /**
	   * Set custom messages
	   *
	   * @param {object} customMessages
	   * @return {void}
	   */
	  _setCustom: function(customMessages) {
	    this.customMessages = customMessages || {};
	  },
	
	  /**
	   * Set custom attribute names.
	   *
	   * @param {object} attributes
	   */
	  _setAttributeNames: function(attributes) {
	    this.attributeNames = attributes;
	  },
	
	  /**
	   * Set the attribute formatter.
	   *
	   * @param {fuction} func
	   * @return {void}
	   */
	  _setAttributeFormatter: function(func) {
	    this.attributeFormatter = func;
	  },
	
	  /**
	   * Get attribute name to display.
	   *
	   * @param  {string} attribute
	   * @return {string}
	   */
	  _getAttributeName: function(attribute) {
	    var name = attribute;
	    if (this.attributeNames.hasOwnProperty(attribute)) {
	      return this.attributeNames[attribute];
	    } else if (this.messages.attributes.hasOwnProperty(attribute)) {
	      name = this.messages.attributes[attribute];
	    }
	
	    if (this.attributeFormatter) {
	      name = this.attributeFormatter(name);
	    }
	
	    return name;
	  },
	
	  /**
	   * Get all messages
	   *
	   * @return {object}
	   */
	  all: function() {
	    return this.messages;
	  },
	
	  /**
	   * Render message
	   *
	   * @param  {Rule} rule
	   * @return {string}
	   */
	  render: function(rule) {
	    if (rule.customMessage) {
	      return rule.customMessage;
	    }
	    var template = this._getTemplate(rule);
	
	    var message;
	    if (Attributes.replacements[rule.name]) {
	      message = Attributes.replacements[rule.name].apply(this, [template, rule]);
	    } else {
	      message = this._replacePlaceholders(rule, template, {});
	    }
	
	    return message;
	  },
	
	  /**
	   * Get the template to use for given rule
	   *
	   * @param  {Rule} rule
	   * @return {string}
	   */
	  _getTemplate: function(rule) {
	
	    var messages = this.messages;
	    var template = messages.def;
	    var customMessages = this.customMessages;
	    var formats = [rule.name + '.' + rule.attribute, rule.name];
	
	    for (var i = 0, format; i < formats.length; i++) {
	      format = formats[i];
	      if (customMessages.hasOwnProperty(format)) {
	        template = customMessages[format];
	        break;
	      } else if (messages.hasOwnProperty(format)) {
	        template = messages[format];
	        break;
	      }
	    }
	
	    if (typeof template === 'object') {
	      template = template[rule._getValueType()];
	    }
	
	    return template;
	  },
	
	  /**
	   * Replace placeholders in the template using the data object
	   *
	   * @param  {Rule} rule
	   * @param  {string} template
	   * @param  {object} data
	   * @return {string}
	   */
	  _replacePlaceholders: function(rule, template, data) {
	    var message, attribute;
	
	    data.attribute = this._getAttributeName(rule.attribute);
	    data[rule.name] = rule.getParameters().join(',');
	
	    if (typeof template === 'string' && typeof data === 'object') {
	      message = template;
	
	      for (attribute in data) {
	        message = message.replace(new RegExp(':' + attribute, 'g'), data[attribute]);
	      }
	    }
	
	    return message;
	  }
	
	};
	
	module.exports = Messages;


/***/ },
/* 99 */
/***/ function(module, exports) {

	var replacements = {
	
	  /**
	   * Between replacement (replaces :min and :max)
	   *
	   * @param  {string} template
	   * @param  {Rule} rule
	   * @return {string}
	   */
	  between: function(template, rule) {
	    var parameters = rule.getParameters();
	    return this._replacePlaceholders(rule, template, {
	      min: parameters[0],
	      max: parameters[1]
	    });
	  },
	
	  /**
	   * Required_if replacement.
	   *
	   * @param  {string} template
	   * @param  {Rule} rule
	   * @return {string}
	   */
	  required_if: function(template, rule) {
	    var parameters = rule.getParameters();
	    return this._replacePlaceholders(rule, template, {
	      other: parameters[0],
	      value: parameters[1]
	    });
	  }
	};
	
	function formatter(attribute) {
	  return attribute.replace(/[_\[]/g, ' ').replace(/]/g, '');
	}
	
	module.exports = {
	  replacements: replacements,
	  formatter: formatter
	};


/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = {
	  accepted: 'The :attribute must be accepted.',
	  alpha: 'The :attribute field must contain only alphabetic characters.',
	  alpha_dash: 'The :attribute field may only contain alpha-numeric characters, as well as dashes and underscores.',
	  alpha_num: 'The :attribute field must be alphanumeric.',
	  between: 'The :attribute field must be between :min and :max.',
	  confirmed: 'The :attribute confirmation does not match.',
	  email: 'The :attribute format is invalid.',
	  def: 'The :attribute attribute has errors.',
	  digits: 'The :attribute must be :digits digits.',
	  different: 'The :attribute and :different must be different.',
	  'in': 'The selected :attribute is invalid.',
	  integer: 'The :attribute must be an integer.',
	  min: {
	    numeric: 'The :attribute must be at least :min.',
	    string: 'The :attribute must be at least :min characters.'
	  },
	  max: {
	    numeric: 'The :attribute may not be greater than :max.',
	    string: 'The :attribute may not be greater than :max characters.'
	  },
	  not_in: 'The selected :attribute is invalid.',
	  numeric: 'The :attribute must be a number.',
	  required: 'The :attribute field is required.',
	  required_if: 'The :attribute field is required when :other is :value.',
	  same: 'The :attribute and :same fields must match.',
	  size: {
	    numeric: 'The :attribute must be :size.',
	    string: 'The :attribute must be :size characters.'
	  },
	  string: 'The :attribute must be a string.',
	  url: 'The :attribute format is invalid.',
	  regex: 'The :attribute format is invalid',
	  attributes: {}
	};


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./en": 100,
		"./en.js": 100,
		"./es": 102,
		"./es.js": 102,
		"./fr": 103,
		"./fr.js": 103,
		"./it": 104,
		"./it.js": 104,
		"./ja": 105,
		"./ja.js": 105,
		"./pl": 106,
		"./pl.js": 106,
		"./ru": 107,
		"./ru.js": 107
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 101;


/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = {
	  accepted: 'El campo :attribute debe ser aceptado.',
	  alpha: 'El campo :attribute solo debe contener letras.',
	  alpha_dash: 'El campo :attribute solo debe contener letras, números y guiones.',
	  alpha_num: 'El campo :attribute solo debe contener letras y números.',
	  attributes: {},
	  between: 'El campo :attribute tiene que estar entre :min - :max.',
	  confirmed: 'La confirmación de :attribute no coincide.',
	  different: 'El campo :attribute y :other deben ser diferentes.',
	  digits: 'El campo :attribute debe tener :digits dígitos.',
	  email: 'El campo :attribute no es un correo válido',
	  'in': 'El campo :attribute es inválido.',
	  integer: 'El campo :attribute debe ser un número entero.',
	  max: {
	    numeric: 'El campo :attribute no debe ser mayor a :max.',
	    string: 'El campo :attribute no debe ser mayor que :max caracteres.'
	  },
	  min: {
	    numeric: 'El tamaño del campo :attribute debe ser de al menos :min.',
	    string: 'El campo :attribute debe contener al menos :min caracteres.'
	  },
	  not_in: 'El campo :attribute es inválido.',
	  numeric: 'El campo :attribute debe ser numérico.',
	  regex: 'El formato del campo :attribute es inválido.',
	  required: 'El campo :attribute es obligatorio.',
	  required_if: 'El campo :attribute es obligatorio cuando :other es :value.',
	  same: 'El campo :attribute y :other deben coincidir.',
	  size: {
	    numeric: 'El tamaño del campo :attribute debe ser :size.',
	    string: 'El campo :attribute debe contener :size caracteres.'
	  },
	  url: 'El formato de :attribute es inválido.'
	};


/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = {
	  accepted: 'Le champs :attribute doit être accepté.',
	  alpha: 'Le champs :attribute ne peut contenir que des caractères alphabétiques.',
	  alpha_dash: 'Le champs :attribute ne peut contenir que des caractères alphanumériques, des tirets et underscores.',
	  alpha_num: 'Le champs :attribute doit être alphanumérique.',
	  between: 'Le champs :attribute doit être compris entre :min and :max.',
	  confirmed: 'Le champs :attribute ne correspond pas.',
	  email: 'Le champs :attribute contient un format invalide.',
	  def: 'Le champs :attribute contient un attribut erroné.',
	  digits: 'Le champs :attribute doit être de :digits chiffres.',
	  different: 'Le champs :attribute et :different doivent être differents.',
	  'in': 'Le champs :attribute est invalide.',
	  integer: 'Le champs :attribute doit être un entier.',
	  min: {
	    numeric: 'Le champs :attribute doit être contenir au moins :min.',
	    string: 'Le champs :attribute doit être contenir au moins :min caractères.'
	  },
	  max: {
	    numeric: 'Le champs :attribute ne doit être supérieur à :max.',
	    string: 'Le champs :attribute ne doit être plus de :max characters.'
	  },
	  not_in: 'Le champs :attribute est invalide.',
	  numeric: 'Le champs :attribute doit être un numéro.',
	  required: 'Le champs :attribute est obligatoire.',
	  required_if: 'Le champs :attribute est obligatoire quand :other est :value.',
	  same: 'Le champs :attribute et :same doivent correspondre.',
	  size: {
	    numeric: 'La taille du champs :attribute doit être :size.',
	    string: 'La taille du champs :attribute doit être de :size caractères.'
	  },
	  url: 'Le format du champs :attribute est invalide.',
	  regex: 'Le format du champs :attribute est invalide.',
	  attributes: {}
	};


/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = {
	  accepted: 'Il campo :attribute deve essere accettato.',
	  alpha: 'Il campo :attribute deve contenere sono caratteri alfabetici.',
	  alpha_dash: 'Il campo :attribute può contenere solo caratteri alfanumerici oltre a trattini e trattini bassi.',
	  alpha_num: 'Il campo :attribute deve essere alfanumerico.',
	  between: 'Il campo :attribute deve essere compreso tra :min e :max.',
	  confirmed: 'Il campo conferma :attribute non è uguale.',
	  email: 'Il formato dell\'attributo :attribute non è valido.',
	  def: 'Gli attributi del campo :attribute contengono degli errori.',
	  digits: 'Il campo :attribute deve essere di :digits cifre.',
	  different: 'Il campo :attribute e :different devo essere diversi.',
	  'in': 'Il valore del campo :attribute non è valido.',
	  integer: 'Il campo :attribute deve essere un valore intero.',
	  min: {
	    numeric: 'Il campo :attribute deve essere maggiore o uguale di :min.',
	    string: 'Il campo :attribute deve essere composto da almeno :min caratteri.'
	  },
	  max: {
	    numeric: 'Il campo :attribute deve essere minore o uguale di :max.',
	    string: 'Il campo :attribute deve essere composto da massimo :max caratteri.'
	  },
	  not_in: 'Il campo :attribute non è valido.',
	  numeric: 'Il campo :attribute deve essere un numero.',
	  required: 'Il campo :attribute è richiesto.',
	  required_if: 'Il campo :attribute è richiesto quando il campo :other è uguale a :value.',
	  same: 'I campi :attribute e :same devono essere uguali.',
	  size: {
	    numeric: 'La dimensione del campo :attribute deve essere uguale a :size.',
	    string: 'Il campo :attribute deve essere di :size caratteri.'
	  },
	  string: 'Il campo :attribute deve essere una stringa.',
	  url: 'Il formato del campo :attribute non è valido.',
	  regex: 'Il formato del campo :attribute non è valido.',
	  attributes: {}
	};


/***/ },
/* 105 */
/***/ function(module, exports) {

	module.exports = {
	    accepted: ':attributeを確認してください。',
	    alpha: ':attributeは英字のみで入力してください。',
	    alpha_dash: ':attributeは英字とダッシュと下線のみで入力してください。',
	    alpha_num: ':attributeは英数字のみで入力してください。',
	    between: ':attributeは:min〜:max文字で入力してください。',
	    confirmed: ':attributeは確認が一致しません。',
	    email: ':attributeは正しいメールアドレスを入力してください。',
	    def: ':attributeは検証エラーが含まれています。',
	    digits: ':attributeは:digitsの数字のみで入力してください。',
	    different: ':attributeと:differentは同じであってはなりません。',
	    'in': '選択された:attributeは無効です。',
	    integer: ':attributeは整数で入力してください。',
	    min        : {
	        numeric : ":attributeは:min以上を入力してください。",
	        string  : ":attributeは:min文字以上で入力してください。"
	    },
	    max : {
	        numeric : ":attributeは:max以下を入力してください。",
	        string  : ":attributeは:max文字以上で入力してください。"
	    },
	    not_in      : "選択された:attributeは無効です。",
	    numeric     : ":attributeは数値で入力してください。",
	    required    : ":attributeは必須です。",
	    required_if : ":otherは:valueになったら:attributeは必須です。",
	    same        : ":attributeと:sameは同じでなければなりません。",
	    size        : {
	        numeric : ":attributeは:sizeを入力してください。",
	        string  : ":attributeは:size文字で入力してください。"
	    },
	    url        : ":attributeはURIを入力してください。",
	    regex      : ":attributeの値 \":value\" はパターンにマッチする必要があります。",
	    attributes : {}
	};


/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = {
	    accepted: 'Pole :attribute musi być zaakceptowane.',
	    alpha: 'Pole :attribute może zawierać tylko litery.',
	    alpha_dash: 'Pole :attribute moze zawierać tylko litery, myślnik i podrkeślenie.',
	    alpha_num: 'Pole :attribute moze zawierac tylko znaki alfanumeryczne.',
	    between: 'Pole :attribute musi mieć długość od :min do :max.',
	    confirmed: 'Pole :attribute nie spełnia warunku potwierdzenia.',
	    email: 'Pole :attribute ma niepoprawny format adresu email.',
	    def: 'Pole :attribute zawiera błędy.',
	    digits: 'Pole :attribute może zawierać tylko cyfry ze zbioru :digits.',
	    different: 'Pola :attribute i :different muszą się różnić.',
	    'in': 'Pole :attribute musi należeć do zbioru :in.',
	    integer: 'Pole :attribute musi być liczbą całkowitą.',
	    min: {
	        numeric: 'Pole :attribute musi być równe conajmniej :min.',
	        string: 'Pole :attribute musi zawierać conajmniej :min znaków.'
	    },
	    max: {
	        numeric: 'Pole :attribute nie moze być większe :max.',
	        string: 'Pole :attribute nie moze być dłuższe niż :max znaków.'
	    },
	    not_in: 'Pole :attribute nie może należeć do zbioru :not_in.',
	    numeric: 'Pole :attribute musi być liczbą.',
	    required: 'Pole :attribute jest wymagane.',
	    required_if: 'Pole :attribute jest wymagane jeśli pole :other jest równe :value.',
	    same: 'Pola :attribute i :same muszą być takie same.',
	    size: {
	        numeric: 'Pole :attribute musi być równe :size.',
	        string: 'Pole :attribute musi zawierać :size znaków.'
	    },
	    string: 'Pole :attribute musi być ciągiem znaków.',
	    url: 'Pole :attribute musi być poprawnym adresem URL.',
	    regex: 'Pole :attribute nie spełnia warunku.',
	    attributes: {}
	};


/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = {
	  accepted: 'Вы должны принять :attribute.',
	  alpha: 'Поле :attribute может содержать только буквы.',
	  alpha_dash: 'Поле :attribute может содержать только буквы, цифры, дефисы и символы подчёркивания.',
	  alpha_num: 'Поле :attribute может содержать только буквы и цифры.',
	  between: 'Поле :attribute должно быть между :min и :max.',
	  confirmed: 'Поле :attribute не совпадает с подтверждением.',
	  email: 'Поле :attribute должно быть действительным электронным адресом.',
	  def: 'Поле :attribute содержит ошибки.',
	  digits: 'Длина цифрового поля :attribute должна быть :digits.',
	  different: 'Поля :attribute и :different должны различаться.',
	  'in': 'Выбранное значение для :attribute ошибочно.',
	  integer: 'Поле :attribute должно быть целым числом.',
	  min: {
	    numeric: 'Значение поля :attribute должно быть больше или равно :min.',
	    string: 'Количество символов в поле :attribute должно быть не менее :min.'
	  },
	  max: {
	    numeric: 'Значение поля :attribute должно быть меньше или равно :max.',
	    string: 'Количество символов в поле :attribute не может превышать :max.'
	  },
	  not_in: 'Выбранное значение для :attribute ошибочно.',
	  numeric: 'Поле :attribute должно быть числом.',
	  required: 'Поле :attribute обязательно для заполнения.',
	  required_if: 'Поле :attribute требуется когда значения поля :other равно :value.',
	  same: 'Значение :attribute должно совпадать с :same.',
	  size: {
	    numeric: 'Значение поля :attribute должно быть равным :size.',
	    string: 'Количество символов в поле :attribute должно быть равно :size.'
	  },
	  url: 'Поле :attribute должно содержать валидный URL.',
	  regex: 'Неверный формат поля :attribute.',
	  attributes: {}
	};


/***/ },
/* 108 */
/***/ function(module, exports) {

	var Errors = function() {
	  this.errors = {};
	};
	
	Errors.prototype = {
	  constructor: Errors,
	
	  /**
	   * Add new error message for given attribute
	   *
	   * @param  {string} attribute
	   * @param  {string} message
	   * @return {void}
	   */
	  add: function(attribute, message) {
	    if (!this.has(attribute)) {
	      this.errors[attribute] = [];
	    }
	
	    if (this.errors[attribute].indexOf(message) === -1) {
	      this.errors[attribute].push(message);
	    }
	  },
	
	  /**
	   * Returns an array of error messages for an attribute, or an empty array
	   *
	   * @param  {string} attribute A key in the data object being validated
	   * @return {array} An array of error messages
	   */
	  get: function(attribute) {
	    if (this.has(attribute)) {
	      return this.errors[attribute];
	    }
	
	    return [];
	  },
	
	  /**
	   * Returns the first error message for an attribute, false otherwise
	   *
	   * @param  {string} attribute A key in the data object being validated
	   * @return {string|false} First error message or false
	   */
	  first: function(attribute) {
	    if (this.has(attribute)) {
	      return this.errors[attribute][0];
	    }
	
	    return false;
	  },
	
	  /**
	   * Get all error messages from all failing attributes
	   *
	   * @return {Object} Failed attribute names for keys and an array of messages for values
	   */
	  all: function() {
	    return this.errors;
	  },
	
	  /**
	   * Determine if there are any error messages for an attribute
	   *
	   * @param  {string}  attribute A key in the data object being validated
	   * @return {boolean}
	   */
	  has: function(attribute) {
	    if (this.errors.hasOwnProperty(attribute)) {
	      return true;
	    }
	
	    return false;
	  }
	};
	
	module.exports = Errors;


/***/ },
/* 109 */
/***/ function(module, exports) {

	function AsyncResolvers(onFailedOne, onResolvedAll) {
	  this.onResolvedAll = onResolvedAll;
	  this.onFailedOne = onFailedOne;
	  this.resolvers = {};
	  this.resolversCount = 0;
	  this.passed = [];
	  this.failed = [];
	  this.firing = false;
	}
	
	AsyncResolvers.prototype = {
	
	  /**
	   * Add resolver
	   *
	   * @param {Rule} rule
	   * @return {integer}
	   */
	  add: function(rule) {
	    var index = this.resolversCount;
	    this.resolvers[index] = rule;
	    this.resolversCount++;
	    return index;
	  },
	
	  /**
	   * Resolve given index
	   *
	   * @param  {integer} index
	   * @return {void}
	   */
	  resolve: function(index) {
	    var rule = this.resolvers[index];
	    if (rule.passes === true) {
	      this.passed.push(rule);
	    } else if (rule.passes === false) {
	      this.failed.push(rule);
	      this.onFailedOne(rule);
	    }
	
	    this.fire();
	  },
	
	  /**
	   * Determine if all have been resolved
	   *
	   * @return {boolean}
	   */
	  isAllResolved: function() {
	    return (this.passed.length + this.failed.length) === this.resolversCount;
	  },
	
	  /**
	   * Attempt to fire final all resolved callback if completed
	   *
	   * @return {void}
	   */
	  fire: function() {
	
	    if (!this.firing) {
	      return;
	    }
	
	    if (this.isAllResolved()) {
	      this.onResolvedAll(this.failed.length === 0);
	    }
	
	  },
	
	  /**
	   * Enable firing
	   *
	   * @return {void}
	   */
	  enableFiring: function() {
	    this.firing = true;
	  }
	
	};
	
	module.exports = AsyncResolvers;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    ref: "autocomplete",
	    staticClass: "ui-autocomplete",
	    class: {
	      'disabled': disabled, 'invalid': !valid, 'dirty': dirty, 'active': active,
	      'has-label': !hideLabel, 'icon-right': iconRight
	    }
	  }, [(showIcon) ? _h('div', {
	    staticClass: "ui-autocomplete-icon-wrapper"
	  }, [_h('ui-icon', {
	    staticClass: "ui-autocomplete-icon",
	    attrs: {
	      "icon": icon
	    }
	  })]) : _e(), " ", _h('div', {
	    staticClass: "ui-autocomplete-content"
	  }, [_h('label', {
	    staticClass: "ui-autocomplete-label"
	  }, [(!hideLabel) ? _h('div', {
	    staticClass: "ui-autocomplete-label-text",
	    domProps: {
	      "textContent": _s(label)
	    }
	  }) : _e(), " ", _h('ui-icon', {
	    directives: [{
	      name: "show",
	      value: (!disabled && value.length),
	      expression: "!disabled && value.length"
	    }],
	    staticClass: "ui-autocomplete-clear-button",
	    attrs: {
	      "icon": String('\uE5CD'),
	      "title": "Clear"
	    },
	    nativeOn: {
	      "click": function($event) {
	        clearSearch($event)
	      }
	    }
	  }), " ", _h('input', {
	    ref: "input",
	    staticClass: "ui-autocomplete-input",
	    attrs: {
	      "disabled": disabled,
	      "placeholder": placeholder,
	      "name": name,
	      "id": id,
	      "autocomplete": "off",
	      "autofocus": autofocus,
	      "debounce": debounce
	    },
	    domProps: {
	      "value": value
	    },
	    on: {
	      "focus": focus,
	      "blur": blur,
	      "keydown": [function($event) {
	        if ($event.keyCode !== 38) return;
	        $event.preventDefault();
	        highlight(highlightedItem - 1)
	      }, function($event) {
	        if ($event.keyCode !== 40) return;
	        $event.preventDefault();
	        highlight(highlightedItem + 1)
	      }, function($event) {
	        if ($event.keyCode !== 9) return;
	        close($event)
	      }, function($event) {
	        if ($event.keyCode !== 13) return;
	        selectHighlighted(highlightedItem, $event)
	      }],
	      "input": function($event) {
	        $emit('input', $event.target.value)
	      }
	    }
	  }), " ", _h('ul', {
	    directives: [{
	      name: "show",
	      value: (showDropdown),
	      expression: "showDropdown"
	    }],
	    staticClass: "ui-autocomplete-suggestions"
	  }, [(suggestionsAfterFilter) && _l((suggestionsAfterFilter), function(item, index) {
	    return _h('ui-autocomplete-suggestion', {
	      ref: "items",
	      refInFor: true,
	      attrs: {
	        "highlighted": highlightedItem === index,
	        "item": item,
	        "type": type,
	        "keys": keys
	      },
	      nativeOn: {
	        "click": function($event) {
	          select(item)
	        }
	      }
	    })
	  })])]), " ", (showFeedback) ? _h('div', {
	    staticClass: "ui-autocomplete-feedback"
	  }, [_h('transition', {
	    attrs: {
	      "name": "ui-autocomplete-feedback-toggle"
	    }
	  }, [_h('div', {
	    directives: [{
	      name: "show",
	      value: (!hideValidationErrors && !valid),
	      expression: "!hideValidationErrors && !valid"
	    }],
	    staticClass: "ui-autocomplete-error-text",
	    domProps: {
	      "textContent": _s(validationError)
	    }
	  })]), " ", _h('div', {
	    directives: [{
	      name: "show",
	      value: (hideValidationErrors || valid),
	      expression: "hideValidationErrors || valid"
	    }],
	    staticClass: "ui-autocomplete-help-text",
	    attrs: {
	      "transition": "ui-autocomplete-feedback-toggle"
	    },
	    domProps: {
	      "textContent": _s(helpText)
	    }
	  })]) : _e()])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3", module.exports)
	  }
	}

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(112)
	
	/* script */
	__vue_exports__ = __webpack_require__(113)
	
	/* template */
	var __vue_template__ = __webpack_require__(114)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiButton.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 112 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _UiIcon = __webpack_require__(6);
	
	var _UiIcon2 = _interopRequireDefault(_UiIcon);
	
	var _UiMenu = __webpack_require__(13);
	
	var _UiMenu2 = _interopRequireDefault(_UiMenu);
	
	var _UiPopover = __webpack_require__(67);
	
	var _UiPopover2 = _interopRequireDefault(_UiPopover);
	
	var _UiProgressCircular = __webpack_require__(71);
	
	var _UiProgressCircular2 = _interopRequireDefault(_UiProgressCircular);
	
	var _HasDropdown = __webpack_require__(75);
	
	var _HasDropdown2 = _interopRequireDefault(_HasDropdown);
	
	var _ShowsRippleInk = __webpack_require__(19);
	
	var _ShowsRippleInk2 = _interopRequireDefault(_ShowsRippleInk);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-button',
	
	    props: {
	        type: {
	            type: String,
	            default: 'normal' },
	        buttonType: {
	            type: String,
	            default: 'submit' },
	        color: {
	            type: String,
	            default: 'default' },
	        raised: {
	            type: Boolean,
	            default: false
	        },
	        text: String,
	        icon: String,
	        iconRight: {
	            type: Boolean,
	            default: false
	        },
	        loading: {
	            type: Boolean,
	            default: false
	        },
	        showDropdownIcon: {
	            type: Boolean,
	            default: true
	        },
	        disabled: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    computed: {
	        styleClasses: function styleClasses() {
	            var classes = ['ui-button-' + this.type, 'color-' + this.color];
	
	            if (this.raised) {
	                classes.push('ui-button-raised');
	            }
	
	            if (this.hasDropdownMenu || this.hasPopover) {
	                classes.push('has-dropdown');
	            }
	
	            return classes;
	        },
	        spinnerColor: function spinnerColor() {
	            return this.color === 'default' || this.type === 'flat' ? 'black' : 'white';
	        },
	        showIcon: function showIcon() {
	            return Boolean(this.icon);
	        }
	    },
	
	    components: {
	        UiIcon: _UiIcon2.default,
	        UiMenu: _UiMenu2.default,
	        UiPopover: _UiPopover2.default,
	        UiProgressCircular: _UiProgressCircular2.default
	    },
	
	    mixins: [_HasDropdown2.default, _ShowsRippleInk2.default]
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('button', {
	    ref: "button",
	    staticClass: "ui-button",
	    class: styleClasses,
	    attrs: {
	      "disabled": disabled || loading,
	      "type": buttonType
	    }
	  }, [_h('div', {
	    staticClass: "ui-button-content",
	    class: {
	      'invisible': loading
	    }
	  }, [(showIcon) ? _h('ui-icon', {
	    staticClass: "ui-button-icon",
	    class: {
	      'position-right': iconRight
	    },
	    attrs: {
	      "icon": icon
	    }
	  }) : _e(), " ", _h('div', {
	    staticClass: "ui-button-text"
	  }, [_t("default", [_h('span', {
	    domProps: {
	      "textContent": _s(text)
	    }
	  })])]), " ", (!iconRight && showDropdownIcon && (hasDropdownMenu || hasPopover)) ? _h('ui-icon', {
	    staticClass: "ui-button-dropdown-icon",
	    attrs: {
	      "icon": String('\uE5C5')
	    }
	  }) : _e()]), " ", _h('ui-progress-circular', {
	    directives: [{
	      name: "show",
	      value: (loading),
	      expression: "loading"
	    }],
	    staticClass: "ui-button-spinner",
	    attrs: {
	      "color": spinnerColor,
	      "size": 18,
	      "stroke": 4.5,
	      "disable-transition": ""
	    }
	  }), " ", (!hideRippleInk && !disabled) ? _h('ui-ripple-ink') : _e(), " ", (hasDropdownMenu) ? _h('ui-menu', {
	    staticClass: "ui-button-dropdown-menu",
	    attrs: {
	      "trigger": "button",
	      "options": menuOptions,
	      "show-icons": showMenuIcons,
	      "show-secondary-text": showMenuSecondaryText,
	      "open-on": openDropdownOn,
	      "dropdown-position": dropdownPosition
	    },
	    on: {
	      "option-selected": menuOptionSelect
	    }
	  }) : _e(), " ", (hasPopover) ? _h('ui-popover', {
	    attrs: {
	      "trigger": "button",
	      "open-on": openDropdownOn,
	      "dropdown-position": dropdownPosition
	    }
	  }, [_t("popover")]) : _e()])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1", module.exports)
	  }
	}

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(116)
	
	/* script */
	__vue_exports__ = __webpack_require__(117)
	
	/* template */
	var __vue_template__ = __webpack_require__(118)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-8", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-8", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiCheckbox.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 116 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _ReceivesTargetedEvent = __webpack_require__(65);
	
	var _ReceivesTargetedEvent2 = _interopRequireDefault(_ReceivesTargetedEvent);
	
	var _eventBus = __webpack_require__(61);
	
	var _eventBus2 = _interopRequireDefault(_eventBus);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var toggleArray = function toggleArray(arr, arg) {
	    if (arr.indexOf(arg) > -1) {
	        arr.splice(arr.indexOf(arg), 1);
	    } else {
	        arr.push(arg);
	    }
	    return arr;
	};
	
	exports.default = {
	    name: 'ui-checkbox',
	
	    props: {
	        name: String,
	        value: {
	            type: [Array, Boolean],
	            required: true
	        },
	        payload: {
	            type: null
	        },
	        label: String,
	        hideLabel: {
	            type: Boolean,
	            default: false
	        },
	        labelLeft: {
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
	            active: false,
	            initialValue: false
	        };
	    },
	
	
	    watch: {
	        value: function value() {
	            this._val = this.value;
	        }
	    },
	
	    computed: {
	        isChecked: function isChecked() {
	            if (this.payload) {
	                return this.value.indexOf(this.payload) > -1;
	            }
	
	            return this.value;
	        }
	    },
	
	    created: function created() {
	        this._val = this.initialValue = this.value;
	    },
	    mounted: function mounted() {
	        var _this = this;
	
	        _eventBus2.default.$on('ui-input::reset', function (id) {
	            if (!_this.eventTargetsComponent(id)) {
	                return;
	            }
	            _this.$emit('input', _this.initialValue);
	        });
	    },
	
	
	    methods: {
	        toggle: function toggle(e) {
	            console.log(e.target);
	            if (typeof this.value === 'boolean') {
	                this.$emit('input', !this.value);
	            } else {
	                this.$emit('input', toggleArray(this._val.slice(0), this.payload));
	            }
	        },
	        focus: function focus() {
	            this.active = true;
	        },
	        blur: function blur() {
	            this.active = false;
	        }
	    },
	
	    mixins: [_ReceivesTargetedEvent2.default]
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('label', {
	    staticClass: "ui-checkbox",
	    class: {
	      'disabled': disabled, 'checked': isChecked, 'active': active, 'label-left': labelLeft
	    }
	  }, [_h('input', {
	    staticClass: "ui-checkbox-input",
	    attrs: {
	      "type": "checkbox",
	      "name": name,
	      "disabled": disabled
	    },
	    domProps: {
	      "value": value
	    },
	    on: {
	      "focus": focus,
	      "blur": blur,
	      "click": function($event) {
	        toggle($event)
	      },
	      "keydown": function($event) {
	        if ($event.keyCode !== 13) return;
	        $event.preventDefault();
	        toggle($event)
	      }
	    }
	  }), " ", _m(0), " ", (!hideLabel) ? _h('div', {
	    staticClass: "ui-checkbox-label-text"
	  }, [_t("default", [_h('span', {
	    domProps: {
	      "textContent": _s(label)
	    }
	  })])]) : _e()])
	}},staticRenderFns: [function (){with(this) {
	  return _h('div', {
	    staticClass: "ui-checkbox-checkmark"
	  }, [_h('div', {
	    staticClass: "ui-checkbox-focus-ring"
	  })])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-8", module.exports)
	  }
	}

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(120)
	
	/* script */
	__vue_exports__ = __webpack_require__(121)
	
	/* template */
	var __vue_template__ = __webpack_require__(122)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiCollapsible.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 120 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _UiIcon = __webpack_require__(6);
	
	var _UiIcon2 = _interopRequireDefault(_UiIcon);
	
	var _uuid = __webpack_require__(91);
	
	var _uuid2 = _interopRequireDefault(_uuid);
	
	var _eventBus = __webpack_require__(61);
	
	var _eventBus2 = _interopRequireDefault(_eventBus);
	
	var _ShowsRippleInk = __webpack_require__(19);
	
	var _ShowsRippleInk2 = _interopRequireDefault(_ShowsRippleInk);
	
	var _ReceivesTargetedEvent = __webpack_require__(65);
	
	var _ReceivesTargetedEvent2 = _interopRequireDefault(_ReceivesTargetedEvent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-collapsible',
	
	    props: {
	        id: {
	            type: String,
	            default: _uuid2.default.short('ui-collapsible-')
	        },
	        open: {
	            type: Boolean,
	            default: false
	        },
	        header: String,
	        transition: {
	            type: String,
	            default: 'ui-collapsible-toggle'
	        },
	        hideIcon: {
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
	            height: 0,
	            isReady: false,
	            state: {
	                open: false
	            }
	        };
	    },
	
	
	    computed: {
	        icon: function icon() {
	            return this.state.open ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
	        },
	        calculatedHeight: function calculatedHeight() {
	            if (this.height === 0) {
	                return 'initial';
	            }
	
	            return this.height + 'px';
	        }
	    },
	
	    created: function created() {
	        this.state.open = this.open;
	    },
	    mounted: function mounted() {
	        var _this = this;
	
	        this.isReady = true;
	        this.setHeight();
	        _eventBus2.default.$on('ui-collapsible::refresh-height', function (id) {
	            if (!_this.eventTargetsComponent(id)) {
	                return;
	            }
	
	            _this.$nextTick(_this.setHeight);
	        });
	    },
	
	
	    methods: {
	        toggleMenu: function toggleMenu() {
	            if (this.disabled) {
	                return;
	            }
	
	            this.state.open = !this.state.open;
	        },
	        setHeight: function setHeight() {
	            var body = this.$refs.body;
	
	            body.style.display = 'block';
	            this.height = body.scrollHeight;
	
	            if (!this.state.open) {
	                body.style.display = 'none';
	            }
	        },
	        afterEnter: function afterEnter() {
	            this.$emit('opened');
	            this.setHeight();
	        },
	        afterLeave: function afterLeave() {
	            this.$emit('closed');
	        }
	    },
	
	    components: {
	        UiIcon: _UiIcon2.default
	    },
	
	    mixins: [_ShowsRippleInk2.default, _ReceivesTargetedEvent2.default]
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "ui-collapsible"
	  }, [_h('button', {
	    ref: "button",
	    staticClass: "ui-collapsible-header",
	    class: {
	      'disabled': disabled
	    },
	    attrs: {
	      "aria-controls": id,
	      "aria-expanded": state.open ? 'true' : 'false',
	      "disabled": disabled
	    },
	    on: {
	      "click": toggleMenu
	    }
	  }, [_h('div', {
	    staticClass: "ui-collapsible-header-content"
	  }, [_t("header", [_h('div', {
	    domProps: {
	      "textContent": _s(header)
	    }
	  })])]), " ", (!hideIcon) ? _h('ui-icon', {
	    staticClass: "ui-collapsible-header-icon",
	    attrs: {
	      "icon": icon
	    }
	  }) : _e(), " ", (!hideRippleInk && !disabled && isReady) ? _h('ui-ripple-ink') : _e()]), " ", _h('transition', {
	    attrs: {
	      "name": "ui-collapsible-toggle",
	      "after-enter": afterEnter,
	      "after-leave": afterLeave
	    }
	  }, [_h('div', {
	    directives: [{
	      name: "show",
	      value: (state.open),
	      expression: "state.open"
	    }],
	    ref: "body",
	    staticClass: "ui-collapsible-body-wrapper",
	    style: ({
	      'height': calculatedHeight
	    })
	  }, [_h('div', {
	    staticClass: "ui-collapsible-body",
	    attrs: {
	      "id": id,
	      "aria-hidden": open ? null : 'true'
	    }
	  }, [_t("default")])]), " "])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5", module.exports)
	  }
	}

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(124)
	
	/* script */
	__vue_exports__ = __webpack_require__(125)
	
	/* template */
	var __vue_template__ = __webpack_require__(130)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-11", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-11", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiConfirm.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 124 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classlist = __webpack_require__(28);
	
	var _classlist2 = _interopRequireDefault(_classlist);
	
	var _UiModal = __webpack_require__(126);
	
	var _UiModal2 = _interopRequireDefault(_UiModal);
	
	var _UiButton = __webpack_require__(111);
	
	var _UiButton2 = _interopRequireDefault(_UiButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-confirm',
	
	    data: function data() {
	        return {
	            show: false
	        };
	    },
	
	
	    watch: {
	        value: function value() {
	            this.show = this.value;
	        }
	    },
	
	    created: function created() {
	        if (this.value !== this.show) {
	            this.show = this.value;
	        }
	    },
	
	
	    props: {
	        value: {
	            type: Boolean,
	            required: true
	        },
	        type: {
	            type: String,
	            default: 'primary' },
	        header: {
	            type: String,
	            default: 'UiConfirm'
	        },
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
	            default: 'deny' },
	        closeOnConfirm: {
	            type: Boolean,
	            default: false
	        },
	        backdropDismissible: {
	            type: Boolean,
	            default: true
	        },
	        loading: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    methods: {
	        confirm: function confirm() {
	            this.$emit('confirmed');
	
	            if (this.closeOnConfirm) {
	                this.$emit('input', false);
	            }
	        },
	        deny: function deny() {
	            this.$emit('denied');
	            this.$emit('input', false);
	        },
	        opened: function opened() {
	            var button = void 0;
	
	            if (this.autofocus === 'confirm') {
	                button = this.$refs.confirmButton.$el;
	            } else if (this.autofocus === 'deny') {
	                button = this.$refs.denyButton.$el;
	            }
	
	            if (button) {
	                _classlist2.default.add(button, 'autofocus');
	                button.addEventListener('blur', this.removeAutoFocus);
	
	                button.focus();
	            }
	        },
	        removeAutoFocus: function removeAutoFocus() {
	            var button = void 0;
	
	            if (this.autofocus === 'confirm') {
	                button = this.$refs.confirmButton.$el;
	            } else if (this.autofocus === 'deny') {
	                button = this.$refs.denyButton.$el;
	            }
	
	            if (button) {
	                button.removeEventListener('blur', this.removeAutoFocus);
	
	                _classlist2.default.remove(button, 'autofocus');
	            }
	        }
	    },
	
	    components: {
	        UiModal: _UiModal2.default,
	        UiButton: _UiButton2.default
	    }
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(127)
	
	/* script */
	__vue_exports__ = __webpack_require__(128)
	
	/* template */
	var __vue_template__ = __webpack_require__(129)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-15", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-15", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiModal.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 127 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classlist = __webpack_require__(28);
	
	var _classlist2 = _interopRequireDefault(_classlist);
	
	var _UiIconButton = __webpack_require__(10);
	
	var _UiIconButton2 = _interopRequireDefault(_UiIconButton);
	
	var _UiButton = __webpack_require__(111);
	
	var _UiButton2 = _interopRequireDefault(_UiButton);
	
	var _eventBus = __webpack_require__(61);
	
	var _eventBus2 = _interopRequireDefault(_eventBus);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-modal',
	
	    props: {
	        value: {
	            type: Boolean,
	            required: true
	        },
	        type: {
	            type: String,
	            default: 'normal' },
	        header: {
	            type: String,
	            default: 'UiModal Header'
	        },
	        body: {
	            type: String,
	            default: 'UiModal body'
	        },
	        role: {
	            type: String,
	            default: 'dialog' },
	        transition: {
	            type: String,
	            default: 'scale' },
	        showCloseButton: {
	            type: Boolean,
	            default: true
	        },
	        hideFooter: {
	            type: Boolean,
	            default: false
	        },
	        dismissible: {
	            type: Boolean,
	            default: true
	        },
	        backdropDismissible: {
	            type: Boolean,
	            default: true
	        }
	    },
	
	    data: function data() {
	        return {
	            lastFocussedElement: null
	        };
	    },
	
	
	    watch: {
	        value: function value() {
	            var _this = this;
	
	            this.$nextTick(function () {
	                if (_this.value) {
	                    _this.opened();
	                } else {
	                    _this.closed();
	                }
	            });
	        }
	    },
	
	    beforeDestroy: function beforeDestroy() {
	        if (this.show) {
	            this.tearDown();
	        }
	    },
	
	
	    methods: {
	        close: function close(e) {
	            if (!this.dismissible) {
	                return;
	            }
	
	            if (e.currentTarget === this.$refs.modalMask && e.target !== e.currentTarget) {
	                return;
	            }
	
	            if (e.currentTarget === this.$refs.modalMask && !this.backdropDismissible) {
	                return;
	            }
	
	            this.$emit('input', false);
	        },
	        opened: function opened() {
	            this.lastFocussedElement = document.activeElement;
	            this.$refs.modalContainer.focus();
	
	            _classlist2.default.add(document.body, 'ui-modal-open');
	
	            document.addEventListener('focus', this.restrictFocus, true);
	
	            this.$emit('opened');
	        },
	        closed: function closed() {
	            this.tearDown();
	            this.$emit('closed');
	        },
	        redirectFocus: function redirectFocus(e) {
	            e.stopPropagation();
	
	            this.$refs.modalContainer.focus();
	        },
	        restrictFocus: function restrictFocus(e) {
	            if (!this.$refs.modalContainer.contains(e.target)) {
	                e.stopPropagation();
	                this.$refs.modalContainer.focus();
	            }
	        },
	        tearDown: function tearDown() {
	            _classlist2.default.remove(document.body, 'ui-modal-open');
	
	            document.removeEventListener('focus', this.restrictFocus, true);
	
	            if (this.lastFocussedElement) {
	                this.lastFocussedElement.focus();
	            }
	        },
	        transitionEnd: function transitionEnd() {
	            var _this2 = this;
	
	            setTimeout(function () {
	                if (_this2.show) {
	                    _this2.$emit('revealed');
	                } else {
	                    _this2.$emit('hidden');
	                }
	            }, 500);
	        }
	    },
	
	    components: {
	        UiIconButton: _UiIconButton2.default,
	        UiButton: _UiButton2.default
	    }
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('transition', {
	    attrs: {
	      "name": ("ui-modal-" + transition)
	    }
	  }, [_h('div', {
	    directives: [{
	      name: "show",
	      value: (value),
	      expression: "value"
	    }],
	    staticClass: "ui-modal ui-modal-mask",
	    class: [("ui-modal-" + type)],
	    attrs: {
	      "role": role
	    },
	    on: {
	      "transitionEnd": transitionEnd
	    }
	  }, [_h('div', {
	    ref: "modalMask",
	    staticClass: "ui-modal-wrapper",
	    on: {
	      "click": close
	    }
	  }, [_h('div', {
	    ref: "modalContainer",
	    staticClass: "ui-modal-container",
	    attrs: {
	      "tabindex": "-1"
	    },
	    on: {
	      "keydown": function($event) {
	        if ($event.keyCode !== 27) return;
	        close($event)
	      }
	    }
	  }, [_h('div', {
	    staticClass: "ui-modal-header"
	  }, [_t("header", [_h('h1', {
	    staticClass: "ui-modal-header-text",
	    domProps: {
	      "textContent": _s(header)
	    }
	  })]), " ", (showCloseButton) ? _h('ui-icon-button', {
	    ref: "closeButton",
	    staticClass: "ui-modal-close-button",
	    attrs: {
	      "type": "clear",
	      "icon": String('\uE5CD'),
	      "disabled": !dismissible
	    },
	    nativeOn: {
	      "click": function($event) {
	        $event.stopPropagation();
	        close($event)
	      }
	    }
	  }) : _e()]), " ", _h('div', {
	    staticClass: "ui-modal-body"
	  }, [_t("default", [_h('div', {
	    domProps: {
	      "textContent": _s(body)
	    }
	  })])]), " ", (!hideFooter) ? _h('div', {
	    staticClass: "ui-modal-footer"
	  }, [_t("footer", [(dismissible) ? _h('ui-button', {
	    nativeOn: {
	      "click": function($event) {
	        $event.stopPropagation();
	        close($event)
	      }
	    }
	  }, ["Close"]) : _e()])]) : _e(), " ", _h('div', {
	    staticClass: "focus-redirector",
	    attrs: {
	      "tabindex": "0"
	    },
	    on: {
	      "focus": redirectFocus
	    }
	  })])])])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-15", module.exports)
	  }
	}

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "ui-confirm"
	  }, [_h('ui-modal', {
	    directives: [{
	      name: "model",
	      value: (show),
	      expression: "show"
	    }],
	    attrs: {
	      "role": "alertdialog",
	      "header": header,
	      "show-close-button": "",
	      "dismissible": !loading,
	      "backdrop-dismissible": backdropDismissible
	    },
	    domProps: {
	      "value": (show)
	    },
	    on: {
	      "opened": opened,
	      "closed": function($event) {
	        $emit('input', false)
	      },
	      "input": function($event) {
	        show = $event
	      }
	    }
	  }, [_h('div', {
	    staticClass: "ui-confirm-message"
	  }, [_t("default")]), " ", _h('div', {
	    slot: "footer",
	    staticClass: "slot"
	  }, [_h('ui-button', {
	    ref: "confirmButton",
	    attrs: {
	      "color": type,
	      "text": confirmButtonText,
	      "icon": confirmButtonIcon,
	      "loading": loading
	    },
	    nativeOn: {
	      "click": function($event) {
	        confirm($event)
	      }
	    }
	  }), " ", _h('ui-button', {
	    ref: "denyButton",
	    attrs: {
	      "text": denyButtonText,
	      "icon": denyButtonIcon,
	      "disabled": loading
	    },
	    nativeOn: {
	      "click": function($event) {
	        deny($event)
	      }
	    }
	  })])])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-11", module.exports)
	  }
	}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(132)
	
	/* script */
	__vue_exports__ = __webpack_require__(133)
	
	/* template */
	var __vue_template__ = __webpack_require__(134)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiFab.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 132 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _UiIcon = __webpack_require__(6);
	
	var _UiIcon2 = _interopRequireDefault(_UiIcon);
	
	var _ShowsTooltip = __webpack_require__(76);
	
	var _ShowsTooltip2 = _interopRequireDefault(_ShowsTooltip);
	
	var _ShowsRippleInk = __webpack_require__(19);
	
	var _ShowsRippleInk2 = _interopRequireDefault(_ShowsRippleInk);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-fab',
	
	    props: {
	        type: {
	            type: String,
	            default: 'normal'
	        },
	        color: {
	            type: String,
	            default: 'default' },
	        icon: {
	            type: String,
	            required: true
	        },
	        ariaLabel: String,
	        disabled: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    components: {
	        UiIcon: _UiIcon2.default
	    },
	
	    mixins: [_ShowsTooltip2.default, _ShowsRippleInk2.default]
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('button', {
	    ref: "button",
	    staticClass: "ui-fab",
	    class: [("ui-fab-" + type), ("color-" + color)],
	    attrs: {
	      "aria-label": ariaLabel || tooltip,
	      "disabled": disabled
	    }
	  }, [_h('ui-icon', {
	    staticClass: "ui-fab-icon",
	    attrs: {
	      "icon": icon
	    }
	  }), " ", (!hideRippleInk && !disabled) ? _h('ui-ripple-ink') : _e(), " ", (tooltip) ? _h('ui-tooltip', {
	    attrs: {
	      "trigger": "button",
	      "content": tooltip,
	      "position": tooltipPosition,
	      "open-on": openTooltipOn
	    }
	  }) : _e()])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-4", module.exports)
	  }
	}

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(136)
	
	/* script */
	__vue_exports__ = __webpack_require__(137)
	
	/* template */
	var __vue_template__ = __webpack_require__(138)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-14", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-14", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiPreloader.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 136 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 137 */
/***/ function(module, exports) {

	'use strict';
	
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

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "ui-preloader"
	  }, [_h('div', {
	    staticClass: "ui-preloader-progressbar",
	    class: {
	      'loading': show
	    },
	    attrs: {
	      "aria-busy": show ? 'true' : false,
	      "role": "progressbar"
	    }
	  })])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-14", module.exports)
	  }
	}

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(140)
	
	/* script */
	__vue_exports__ = __webpack_require__(141)
	
	/* template */
	var __vue_template__ = __webpack_require__(142)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-16", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-16", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiProgressLinear.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 140 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 141 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: 'ui-progress-linear',
	
	    props: {
	        show: {
	            type: Boolean,
	            default: false
	        },
	        type: {
	            type: String,
	            default: 'indeterminate' },
	        color: {
	            type: String,
	            default: 'primary' },
	        value: {
	            type: Number,
	            coerce: Number,
	            default: 0
	        }
	    },
	
	    computed: {
	        progress: function progress() {
	            if (this.value < 0) {
	                return 0;
	            }
	
	            if (this.value > 100) {
	                return 100;
	            }
	
	            return this.value;
	        }
	    }
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('transition', {
	    attrs: {
	      "name": "ui-progress-linear-toggle"
	    }
	  }, [_h('div', {
	    directives: [{
	      name: "show",
	      value: (show),
	      expression: "show"
	    }],
	    staticClass: "ui-progress-linear",
	    class: [("color-" + color)]
	  }, [(type === 'determinate') ? _h('div', {
	    staticClass: "ui-progress-linear-determinate",
	    style: ({
	      'width': progress + '%'
	    }),
	    attrs: {
	      "role": "progressbar",
	      "aria-valuemin": 0,
	      "aria-valuemax": 100,
	      "aria-valuenow": value
	    }
	  }) : _h('div', {
	    staticClass: "ui-progress-linear-indeterminate",
	    attrs: {
	      "role": "progressbar",
	      "aria-valuemin": 0,
	      "aria-valuemax": 100
	    }
	  }), " "])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-16", module.exports)
	  }
	}

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(144)
	
	/* script */
	__vue_exports__ = __webpack_require__(145)
	
	/* template */
	var __vue_template__ = __webpack_require__(146)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-18", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-18", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiRadio.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 144 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _eventBus = __webpack_require__(61);
	
	var _eventBus2 = _interopRequireDefault(_eventBus);
	
	var _ReceivesTargetedEvent = __webpack_require__(65);
	
	var _ReceivesTargetedEvent2 = _interopRequireDefault(_ReceivesTargetedEvent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-radio',
	
	    props: {
	        id: String,
	        name: {
	            type: String,
	            required: true
	        },
	        value: String,
	        options: [Array, Object],
	        helpText: String,
	        label: String,
	        hideLabel: {
	            type: Boolean,
	            default: false
	        },
	        labelLeft: {
	            type: Boolean,
	            default: false
	        },
	        vertical: {
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
	            active: false,
	            currentValue: this.value,
	            initialValue: this.value
	        };
	    },
	
	
	    computed: {
	        showFeedback: function showFeedback() {
	            return Boolean(this.helpText);
	        }
	    },
	
	    methods: {
	        focus: function focus() {
	            this.active = true;
	        },
	        blur: function blur() {
	            this.active = false;
	        }
	    },
	
	    created: function created() {
	        this.currentValue = this.value;
	        this.initialValue = this.value;
	    },
	    mounted: function mounted() {
	        var _this = this;
	
	        _eventBus2.default.$on('ui-input::reset', function (id) {
	            if (!_this.eventTargetsComponent(id)) {
	                return;
	            }
	            _this.currentValue = _this.initialValue;
	            _this.$emit('input', _this.initialValue);
	        });
	    },
	
	
	    watch: {
	        currentValue: function currentValue(val) {
	            this.$emit('input', val);
	        }
	    },
	
	    mixins: [_ReceivesTargetedEvent2.default]
	};

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "ui-radio-group",
	    class: {
	      'disabled': disabled, 'active': active, 'vertical': vertical
	    },
	    attrs: {
	      "id": id
	    }
	  }, [(!hideLabel && label) ? _h('div', {
	    staticClass: "ui-radio-group-label",
	    domProps: {
	      "textContent": _s(label)
	    }
	  }) : _e(), " ", _h('div', {
	    staticClass: "ui-radio-group-options-wrapper"
	  }, [(options) && _l((options), function(option) {
	    return [_h('label', {
	      staticClass: "ui-radio",
	      class: {
	        'disabled': disabled || option.disabled, 'checked': currentValue === option.value, 'label-left': labelLeft
	      },
	      on: {
	        "focus": focus,
	        "blur": blur
	      }
	    }, [_h('div', {
	      staticClass: "ui-radio-input-wrapper"
	    }, [_h('input', {
	      staticClass: "ui-radio-input",
	      attrs: {
	        "type": "radio",
	        "name": name,
	        "disabled": disabled || option.disabled
	      },
	      domProps: {
	        "value": option.value || option,
	        "checked": (currentValue) === (option.value || option)
	      },
	      on: {
	        "change": function($event) {
	          currentValue = option.value || option
	        }
	      }
	    }), " ", _m(0), " ", _m(1)]), " ", _h('div', {
	      staticClass: "ui-radio-label-text"
	    }, [(!option.hideLabel) ? _h('span', {
	      domProps: {
	        "textContent": _s(option.text || option)
	      }
	    }) : _e()])])]
	  })]), " ", (showFeedback) ? _h('div', {
	    staticClass: "ui-radio-group-feedback",
	    attrs: {
	      "transition": "ui-radio-group-feedback-toggle"
	    }
	  }, [_h('div', {
	    staticClass: "ui-radio-group-help-text",
	    domProps: {
	      "textContent": _s(helpText)
	    }
	  }, ["\n            " + _s(currentValue) + "\n        "])]) : _e()])
	}},staticRenderFns: [function (){with(this) {
	  return _h('span', {
	    staticClass: "ui-radio-border"
	  })
	}},function (){with(this) {
	  return _h('span', {
	    staticClass: "ui-radio-inner-dot"
	  })
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-18", module.exports)
	  }
	}

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(148)
	
	/* script */
	__vue_exports__ = __webpack_require__(149)
	
	/* template */
	var __vue_template__ = __webpack_require__(154)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-17", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-17", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiRating.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 148 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _UiRatingIcon = __webpack_require__(150);
	
	var _UiRatingIcon2 = _interopRequireDefault(_UiRatingIcon);
	
	var _eventBus = __webpack_require__(61);
	
	var _eventBus2 = _interopRequireDefault(_eventBus);
	
	var _ReceivesTargetedEvent = __webpack_require__(65);
	
	var _ReceivesTargetedEvent2 = _interopRequireDefault(_ReceivesTargetedEvent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-rating',
	
	    props: {
	        type: {
	            type: String,
	            default: 'star' },
	        value: {
	            type: Number,
	            coerce: Number,
	            required: true,
	            twoWay: true
	        },
	        total: {
	            type: Number,
	            required: true
	        },
	        label: String,
	        hideLabel: {
	            type: Boolean,
	            default: false
	        },
	        helpText: String,
	        disabled: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    data: function data() {
	        return {
	            active: false,
	            initialValue: 0,
	            previewValue: 0,
	            previewing: false
	        };
	    },
	
	
	    computed: {
	        showFeedback: function showFeedback() {
	            return Boolean(this.helpText);
	        }
	    },
	
	    watch: {
	        value: function value() {
	            this.previewValue = this.value;
	        },
	        previewValue: function previewValue() {
	            this.$emit('preview-value-changed', this.previewValue);
	        }
	    },
	
	    created: function created() {
	        this.initialValue = this.value;
	
	        this.previewValue = this.value;
	    },
	    mounted: function mounted() {
	        var _this = this;
	
	        _eventBus2.default.$on('ui-input::reset', function (id) {
	            if (!_this.eventTargetsComponent(id)) {
	                return;
	            }
	
	            _this.$emit('input', _this.initialValue);
	        });
	    },
	
	
	    methods: {
	        startPreview: function startPreview() {
	            if (this.disabled) {
	                return;
	            }
	
	            this.previewing = true;
	        },
	        endPreview: function endPreview() {
	            if (this.disabled) {
	                return;
	            }
	
	            this.previewing = false;
	            this.previewValue = this.value;
	        },
	        preview: function preview(n) {
	            if (this.disabled) {
	                return;
	            }
	
	            this.previewValue = n;
	        },
	        commitValue: function commitValue(value) {
	            if (this.disabled) {
	                return;
	            }
	
	            if (value > 0 && value <= this.total + 1) {
	                this.$emit('input', value);
	            }
	        },
	        incrementPreviewValue: function incrementPreviewValue() {
	            if (this.disabled) {
	                return;
	            }
	
	            var proposedValue = this.previewValue + 1;
	            if (proposedValue <= this.total) {
	                this.previewValue = proposedValue;
	            }
	        },
	        decrementPreviewValue: function decrementPreviewValue() {
	            if (this.disabled) {
	                return;
	            }
	
	            var proposedValue = this.previewValue - 1;
	
	            if (proposedValue > 0) {
	                this.previewValue = proposedValue;
	            }
	        },
	        focus: function focus() {
	            this.active = true;
	            this.startPreview();
	        },
	        blur: function blur() {
	            this.active = false;
	
	            this.commitValue(this.previewValue);
	            this.endPreview();
	        }
	    },
	
	    components: {
	        UiRatingIcon: _UiRatingIcon2.default
	    },
	
	    mixins: [_ReceivesTargetedEvent2.default]
	};

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(151)
	
	/* script */
	__vue_exports__ = __webpack_require__(152)
	
	/* template */
	var __vue_template__ = __webpack_require__(153)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-19", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-19", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiRatingIcon.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 151 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _UiIcon = __webpack_require__(6);
	
	var _UiIcon2 = _interopRequireDefault(_UiIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-rating-icon',
	
	    props: {
	        type: {
	            type: String,
	            default: 'star' },
	        selected: {
	            type: Boolean,
	            required: true
	        },
	        filled: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    computed: {
	        icon: function icon() {
	            if (this.filled || this.selected) {
	                return this.type === 'star' ? 'star' : 'favorite';
	            }
	
	            return this.type === 'star' ? 'star_border' : 'favorite_border';
	        }
	    },
	
	    components: {
	        UiIcon: _UiIcon2.default
	    }
	};

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "ui-rating-icon"
	  }, [_h('ui-icon', {
	    staticClass: "ui-rating-icon-icon",
	    class: {
	      'selected': selected, 'filled': filled
	    },
	    attrs: {
	      "icon": icon
	    }
	  })])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-19", module.exports)
	  }
	}

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "ui-rating",
	    class: {
	      'disabled': disabled, 'preview': previewing, 'active': active
	    },
	    attrs: {
	      "tabindex": disabled ? null : 0,
	      "role": "slider",
	      "aria-valuemin": 0,
	      "aria-valuemax": total,
	      "aria-valuenow": previewValue
	    },
	    on: {
	      "keydown": [function($event) {
	        if ($event.keyCode !== 38) return;
	        $event.preventDefault();
	        incrementPreviewValue($event)
	      }, function($event) {
	        if ($event.keyCode !== 40) return;
	        $event.preventDefault();
	        decrementPreviewValue($event)
	      }, function($event) {
	        if ($event.keyCode !== 39) return;
	        $event.preventDefault();
	        incrementPreviewValue($event)
	      }, function($event) {
	        if ($event.keyCode !== 37) return;
	        $event.preventDefault();
	        decrementPreviewValue($event)
	      }, function($event) {
	        if ($event.keyCode !== 13) return;
	        $event.preventDefault();
	        commitValue(previewValue)
	      }],
	      "focus": focus,
	      "blur": blur
	    }
	  }, [(!hideLabel) ? _h('div', {
	    staticClass: "ui-rating-label",
	    domProps: {
	      "textContent": _s(label)
	    }
	  }) : _e(), " ", _h('div', {
	    staticClass: "ui-rating-icons-wrapper",
	    on: {
	      "mouseenter": startPreview,
	      "mouseleave": endPreview
	    }
	  }, [(total) && _l((total), function(n) {
	    return _h('ui-rating-icon', {
	      attrs: {
	        "type": type,
	        "filled": n <= previewValue
	      },
	      domProps: {
	        "selected": n <= value
	      },
	      nativeOn: {
	        "mouseover": function($event) {
	          preview(n)
	        },
	        "click": function($event) {
	          commitValue(n)
	        }
	      }
	    })
	  })]), " ", (showFeedback) ? _h('div', {
	    staticClass: "ui-rating-feedback",
	    attrs: {
	      "transition": "ui-rating-feedback-toggle"
	    }
	  }, [_h('div', {
	    staticClass: "ui-rating-help-text",
	    domProps: {
	      "textContent": _s(helpText)
	    }
	  })]) : _e()])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-17", module.exports)
	  }
	}

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(156)
	
	/* script */
	__vue_exports__ = __webpack_require__(157)
	
	/* template */
	var __vue_template__ = __webpack_require__(158)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-22", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-22", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiRatingPreview.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 156 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _UiRatingIcon = __webpack_require__(150);
	
	var _UiRatingIcon2 = _interopRequireDefault(_UiRatingIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-rating-preview',
	
	    props: {
	        type: {
	            type: String,
	            default: 'star' },
	        value: {
	            type: Number,
	            coerce: Number,
	            required: true
	        },
	        total: {
	            type: Number,
	            coerce: Number,
	            required: true
	        }
	    },
	
	    components: {
	        UiRatingIcon: _UiRatingIcon2.default
	    }
	};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "ui-rating-preview",
	    attrs: {
	      "role": "slider",
	      "aria-valuemin": 0,
	      "aria-valuemax": total,
	      "aria-valuenow": value
	    }
	  }, [(total) && _l((total), function(n) {
	    return _h('ui-rating-icon', {
	      attrs: {
	        "type": type
	      },
	      domProps: {
	        "selected": (n + 1) <= value
	      }
	    })
	  })])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-22", module.exports)
	  }
	}

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(160)
	
	/* script */
	__vue_exports__ = __webpack_require__(161)
	
	/* template */
	var __vue_template__ = __webpack_require__(169)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-21", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-21", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiSelect.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 160 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mergeOptions = __webpack_require__(162);
	
	var _mergeOptions2 = _interopRequireDefault(_mergeOptions);
	
	var _fuzzysearch = __webpack_require__(87);
	
	var _fuzzysearch2 = _interopRequireDefault(_fuzzysearch);
	
	var _elementScroll = __webpack_require__(164);
	
	var _UiIcon = __webpack_require__(6);
	
	var _UiIcon2 = _interopRequireDefault(_UiIcon);
	
	var _UiSelectOption = __webpack_require__(165);
	
	var _UiSelectOption2 = _interopRequireDefault(_UiSelectOption);
	
	var _UiProgressCircular = __webpack_require__(71);
	
	var _UiProgressCircular2 = _interopRequireDefault(_UiProgressCircular);
	
	var _eventBus = __webpack_require__(61);
	
	var _eventBus2 = _interopRequireDefault(_eventBus);
	
	var _HasTextInput = __webpack_require__(93);
	
	var _HasTextInput2 = _interopRequireDefault(_HasTextInput);
	
	var _ValidatesInput = __webpack_require__(94);
	
	var _ValidatesInput2 = _interopRequireDefault(_ValidatesInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-select',
	
	    props: {
	        value: {
	            type: [Object, Array, String, Number]
	        },
	        default: {
	            type: [Object, Array, String, Number],
	            default: null
	        },
	        options: {
	            type: Array,
	            default: []
	        },
	        type: String,
	        showSearch: {
	            type: Boolean,
	            default: false
	        },
	        searchPlaceholder: {
	            type: String,
	            default: 'Search'
	        },
	        multiple: {
	            type: Boolean,
	            default: false
	        },
	        multipleDelimiter: {
	            type: String,
	            default: ', '
	        },
	        optionsDynamic: {
	            type: Boolean,
	            default: false
	        },
	        optionsLoaded: {
	            type: Boolean,
	            default: true
	        },
	        loading: {
	            type: Boolean,
	            default: false
	        },
	        keys: {
	            type: Object,
	            default: function _default() {
	                return {
	                    text: 'text',
	                    value: 'value',
	                    image: 'image'
	                };
	            }
	        },
	        filter: Function
	    },
	
	    data: function data() {
	        return {
	            query: '',
	            selectedIndex: -1,
	            highlightedIndex: -1,
	            showDropdown: false,
	            ignoreQueryChange: false,
	            previewFilteredOptions: null
	        };
	    },
	
	
	    computed: {
	        filteredOptions: function filteredOptions() {
	            if (this.optionsDynamic) {
	                return this.options;
	            }
	
	            return this.options.filter(this.search);
	        },
	        displayText: function displayText() {
	            var _this = this;
	
	            if (this.multiple && this.value.length) {
	                var labels = this.value.map(function (value) {
	                    return value[_this.keys.text] || value;
	                });
	
	                return labels.join(this.multipleDelimiter);
	            }
	
	            return this.value ? this.value[this.keys.text] || this.value : '';
	        },
	        hasDisplayText: function hasDisplayText() {
	            return this.displayText && Boolean(this.displayText.length);
	        },
	        showIcon: function showIcon() {
	            return Boolean(this.icon);
	        },
	        nothingFound: function nothingFound() {
	            if (this.optionsDynamic && !this.optionsLoaded) {
	                return false;
	            }
	
	            if (this.query.length && !this.loading) {
	                return !Boolean(this.filteredOptions.length);
	            }
	
	            return false;
	        }
	    },
	
	    watch: {
	        filteredOptions: function filteredOptions() {
	            if (this.previewFilteredOptions.length !== this.filteredOptions.length) {
	                this.highlightedIndex = 0;
	                (0, _elementScroll.resetScroll)(this.$refs.optionsList);
	                this.previewFilteredOptions = this.filteredOptions;
	            }
	        },
	        showDropdown: function showDropdown() {
	            if (this.showDropdown) {
	                this.opened();
	                this.$emit('opened');
	            } else {
	                this.closed();
	                this.$emit('closed');
	            }
	        },
	        query: function query() {
	            if (!this.ignoreQueryChange) {
	                this.$emit('query-changed', this.query);
	            }
	        }
	    },
	
	    created: function created() {
	        this.initValue();
	
	        var errorMessages = {
	            min: 'You must select at least :min options.',
	            max: 'You must select no more than :max options.',
	            between: 'You must select at least :min but no more than :max options.'
	        };
	
	        if (this.validationRules) {
	            if (this.validationMessages) {
	                this._validationMessages = (0, _mergeOptions2.default)(errorMessages, this.validationMessages);
	            } else {
	                this._validationMessages = errorMessages;
	            }
	        }
	    },
	    mounted: function mounted() {
	        var _this2 = this;
	
	        document.addEventListener('click', this.closeOnExternalClick);
	        _eventBus2.default.$on('ui-select::set-selected', function (value, id) {
	            if (!_this2.eventTargetsComponent(id)) {
	                return;
	            }
	
	            _this2.default = value;
	            _this2.initValue();
	        });
	        _eventBus2.default.$on('ui-input::reset', function (id) {
	            if (!_this2.eventTargetsComponent(id)) {
	                return;
	            }
	
	            _this2.$emit('input', _this2.initialValue);
	            _this2.dirty = false;
	            _this2.valid = true;
	
	            _this2.clearQuery();
	            _this2.selectedIndex = -1;
	            _this2.highlightedIndex = -1;
	        });
	    },
	    beforeDestroy: function beforeDestroy() {
	        document.removeEventListener('click', this.closeOnExternalClick);
	    },
	
	
	    methods: {
	        initValue: function initValue() {
	            this.previewFilteredOptions = this.filteredOptions;
	            if (this.default) {
	                var defaults = Array.isArray(this.default) ? this.default : [this.default];
	
	                if (defaults.length) {
	                    this.setDefaultValue(defaults);
	                }
	            }
	        },
	        search: function search(option) {
	            if (this.filter) {
	                return this.filter(option, this.query);
	            }
	
	            var query = this.query.toLowerCase();
	            var text = option[this.keys.text] || option;
	
	            if (typeof text === 'string') {
	                text = text.toLowerCase();
	            }
	
	            return (0, _fuzzysearch2.default)(query, text);
	        },
	        clearQuery: function clearQuery() {
	            var _this3 = this;
	
	            this.ignoreQueryChange = true;
	
	            this.$nextTick(function () {
	                _this3.query = '';
	
	                _this3.$nextTick(function () {
	                    _this3.ignoreQueryChange = false;
	                });
	            });
	        },
	        select: function select(option, index) {
	            var close = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
	
	
	            if (this.multiple) {
	
	                if (this.isSelected(option)) {
	                    this.deselect(option);
	                } else {
	                    var arr = this.value.slice(0);
	                    arr.push(option);
	
	                    this.$emit('input', arr);
	                }
	            } else {
	                this.$emit('input', option);
	                this.selectedIndex = index;
	            }
	
	            this.$emit('selected', option);
	
	            this.highlightedIndex = index;
	            this.clearQuery();
	            this.validate();
	
	            if (!this.multiple && close) {
	                this.close();
	            }
	        },
	        deselect: function deselect(option) {
	            var arr = this.value.slice(0);
	            arr.splice(this.value.indexOf(option), 1);
	            this.$emit('input', arr);
	        },
	        isSelected: function isSelected(option) {
	            if (this.multiple) {
	                return this.value.indexOf(option) > -1;
	            }
	
	            return this.value === option;
	        },
	        selectHighlighted: function selectHighlighted(index, e) {
	            if (this.$refs.options.length) {
	                e.preventDefault();
	                this.select(this.$refs.options[index].option, index);
	            }
	        },
	        highlight: function highlight(index, preventScroll) {
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
	
	            if (!preventScroll) {
	                this.scrollOptionIntoView(this.$refs.options[index].$el);
	            }
	        },
	        focus: function focus() {
	            this.active = true;
	        },
	        blur: function blur() {
	            this.active = false;
	
	            if (this.showDropdown) {
	                this.close();
	            }
	        },
	        toggle: function toggle() {
	            if (this.showDropdown) {
	                this.close();
	            } else {
	                this.open();
	            }
	        },
	        open: function open() {
	            if (this.disabled) {
	                return;
	            }
	
	            this.showDropdown = true;
	        },
	        opened: function opened() {
	            var _this4 = this;
	
	            this.$nextTick(function () {
	                if (_this4.showSearch) {
	                    _this4.$refs.searchInput.focus();
	                } else {
	                    _this4.$refs.dropdown.focus();
	                }
	
	                _this4.scrollOptionIntoView(_this4.$refs.optionsList.querySelector('.selected'));
	            });
	        },
	        close: function close(deactivate) {
	            this.showDropdown = false;
	
	            if (!this.dirty) {
	                this.dirty = true;
	            }
	
	            if (deactivate) {
	                this.active = false;
	            } else {
	                this.$refs.label.focus();
	            }
	        },
	        closeOnExternalClick: function closeOnExternalClick(e) {
	            if (!this.$el.contains(e.target) && (this.showDropdown || this.active)) {
	                this.close(true);
	            }
	        },
	        closed: function closed() {
	            this.validate();
	
	            if (this.multiple) {
	                this.highlightedIndex = -1;
	            } else {
	                this.highlightedIndex = this.selectedIndex;
	            }
	        },
	        setDefaultValue: function setDefaultValue(defaults) {
	            var optionValue = void 0;
	            var defaultOptionValue = void 0;
	            var arr = [];
	
	            for (var i = 0; i < defaults.length; i++) {
	                defaultOptionValue = defaults[i][this.keys.value] || defaults[i];
	                for (var j = 0; j < this.options.length; j++) {
	                    optionValue = this.options[j][this.keys.value] || this.options[j];
	
	                    if (optionValue === defaultOptionValue) {
	                        arr.push(this.options[j]);
	                        break;
	                    }
	                }
	            }
	            this.$emit('input', arr.length > 1 ? arr : arr[0]);
	        },
	        scrollOptionIntoView: function scrollOptionIntoView(optionEl) {
	            (0, _elementScroll.scrollIntoView)(optionEl, this.$refs.optionsList, 80);
	        }
	    },
	
	    components: {
	        UiIcon: _UiIcon2.default,
	        UiSelectOption: _UiSelectOption2.default,
	        UiProgressCircular: _UiProgressCircular2.default
	    },
	
	    mixins: [_HasTextInput2.default, _ValidatesInput2.default]
	};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isOptionObject = __webpack_require__(163);
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.propertyIsEnumerable;
	var globalThis = this;
	var defaultMergeOpts = {
		concatArrays: false
	};
	
	function getEnumerableOwnPropertyKeys(value) {
		var keys = [];
	
		for (var key in value) {
			if (hasOwnProperty.call(value, key)) {
				keys.push(key);
			}
		}
	
		if (Object.getOwnPropertySymbols) {
			var symbols = Object.getOwnPropertySymbols(value);
	
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(value, symbols[i])) {
					keys.push(symbols[i]);
				}
			}
		}
	
		return keys;
	}
	
	function clone(value) {
		if (Array.isArray(value)) {
			return cloneArray(value);
		}
	
		if (isOptionObject(value)) {
			return cloneOptionObject(value);
		}
	
		return value;
	}
	
	function cloneArray(array) {
		var result = array.slice(0, 0);
	
		getEnumerableOwnPropertyKeys(array).forEach(function (key) {
			result[key] = clone(array[key]);
		});
	
		return result;
	}
	
	function cloneOptionObject(obj) {
		var result = Object.getPrototypeOf(obj) === null ? Object.create(null) : {};
	
		getEnumerableOwnPropertyKeys(obj).forEach(function (key) {
			result[key] = clone(obj[key]);
		});
	
		return result;
	}
	
	/**
	 * @param merged {already cloned}
	 * @return {cloned Object}
	 */
	function mergeKeys(merged, source, keys, mergeOpts) {
		keys.forEach(function (key) {
			if (key in merged) {
				merged[key] = merge(merged[key], source[key], mergeOpts);
			} else {
				merged[key] = clone(source[key]);
			}
		});
	
		return merged;
	}
	
	/**
	 * @param merged {already cloned}
	 * @return {cloned Object}
	 *
	 * see [Array.prototype.concat ( ...arguments )](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.concat)
	 */
	function concatArrays(merged, source, mergeOpts) {
		var result = merged.slice(0, 0);
		var resultIndex = 0;
	
		[merged, source].forEach(function (array) {
			var indices = [];
	
			// result.concat(array) with cloning
			for (var k = 0; k < array.length; k++) {
				if (!hasOwnProperty.call(array, k)) {
					continue;
				}
	
				indices.push(String(k));
	
				if (array === merged) {
					// already cloned
					result[resultIndex++] = array[k];
				} else {
					result[resultIndex++] = clone(array[k]);
				}
			}
	
			// merge non-index keys
			result = mergeKeys(result, array, getEnumerableOwnPropertyKeys(array).filter(function (key) {
				return indices.indexOf(key) === -1;
			}), mergeOpts);
		});
	
		return result;
	}
	
	/**
	 * @param merged {already cloned}
	 * @return {cloned Object}
	 */
	function merge(merged, source, mergeOpts) {
		if (mergeOpts.concatArrays && Array.isArray(merged) && Array.isArray(source)) {
			return concatArrays(merged, source, mergeOpts);
		}
	
		if (!isOptionObject(source) || !isOptionObject(merged)) {
			return clone(source);
		}
	
		return mergeKeys(merged, source, getEnumerableOwnPropertyKeys(source), mergeOpts);
	}
	
	module.exports = function () {
		var mergeOpts = merge(clone(defaultMergeOpts), (this !== globalThis && this) || {}, defaultMergeOpts);
		var merged = {};
	
		for (var i = 0; i < arguments.length; i++) {
			var option = arguments[i];
	
			if (option === undefined) {
				continue;
			}
	
			if (!isOptionObject(option)) {
				throw new TypeError('`' + option + '` is not an Option Object');
			}
	
			merged = merge(merged, option, mergeOpts);
		}
	
		return merged;
	};


/***/ },
/* 163 */
/***/ function(module, exports) {

	'use strict';
	var toString = Object.prototype.toString;
	
	module.exports = function (x) {
		var prototype;
		return toString.call(x) === '[object Object]' && (prototype = Object.getPrototypeOf(x), prototype === null || prototype === Object.getPrototypeOf({}));
	};


/***/ },
/* 164 */
/***/ function(module, exports) {

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
	
	function scrollIntoView(element, container) {
	    var marginTop = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	
	    if (!element || inView(element, container)) {
	        return;
	    }
	
	    container = container || element.parentElement;
	
	    container.scrollTop = element.offsetTop - marginTop;
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

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(166)
	
	/* script */
	__vue_exports__ = __webpack_require__(167)
	
	/* template */
	var __vue_template__ = __webpack_require__(168)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-33", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-33", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiSelectOption.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 166 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _UiIcon = __webpack_require__(6);
	
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
	            default: 'simple' },
	        showCheckbox: {
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
	                    text: 'text',
	                    value: 'value',
	                    image: 'image'
	                };
	            }
	        }
	    },
	
	    computed: {
	        icon: function icon() {
	            return this.selected ? 'check_box' : 'check_box_outline_blank';
	        }
	    },
	
	    components: {
	        UiIcon: _UiIcon2.default
	    }
	};

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('li', {
	    staticClass: "ui-select-option",
	    class: {
	      highlighted: highlighted, selected: selected
	    }
	  }, [_h('div', {
	    staticClass: "ui-select-option-content",
	    class: [("ui-select-" + type)]
	  }, [(type === 'image') ? [_h('div', {
	    staticClass: "ui-select-item-image",
	    style: ({
	      'background-image': 'url(' + option[keys.image] + ')'
	    })
	  }), " ", _h('div', {
	    staticClass: "ui-select-item-text",
	    domProps: {
	      "textContent": _s(option[keys.text])
	    }
	  })] : [_h('li', {
	    staticClass: "ui-select-item-text",
	    domProps: {
	      "textContent": _s(option[keys.text] || option)
	    }
	  })], " "]), " ", (showCheckbox) ? _h('ui-icon', {
	    staticClass: "ui-select-option-checkbox",
	    attrs: {
	      "icon": icon
	    }
	  }) : _e()])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-33", module.exports)
	  }
	}

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "ui-select",
	    class: {
	      'disabled': disabled, 'invalid': !valid, 'dirty': dirty, 'active': active,
	      'has-label': !hideLabel, 'icon-right': iconRight
	    },
	    attrs: {
	      "id": id
	    }
	  }, [(showIcon) ? _h('div', {
	    staticClass: "ui-select-icon-wrapper"
	  }, [_h('ui-icon', {
	    staticClass: "ui-select-icon",
	    attrs: {
	      "icon": icon
	    }
	  })]) : _e(), " ", _h('div', {
	    staticClass: "ui-select-content"
	  }, [_h('div', {
	    ref: "label",
	    staticClass: "ui-select-label",
	    attrs: {
	      "tabindex": disabled ? null : '0'
	    },
	    on: {
	      "focus": focus,
	      "keydown": [function($event) {
	        if ($event.keyCode !== 9) return;
	        blur($event)
	      }, function($event) {
	        if ($event.keyCode !== 32) return;
	        $event.preventDefault();
	        open($event)
	      }, function($event) {
	        if ($event.keyCode !== 13) return;
	        $event.preventDefault();
	        open($event)
	      }],
	      "click": toggle
	    }
	  }, [(!hideLabel) ? _h('div', {
	    staticClass: "ui-select-label-text",
	    domProps: {
	      "textContent": _s(label)
	    }
	  }) : _e(), " ", _h('div', {
	    staticClass: "ui-select-display"
	  }, [_h('div', {
	    staticClass: "ui-select-value",
	    class: {
	      placeholder: !hasDisplayText
	    },
	    domProps: {
	      "textContent": _s(hasDisplayText ? displayText : placeholder)
	    }
	  }), " ", _h('ui-icon', {
	    staticClass: "ui-select-dropdown-icon",
	    attrs: {
	      "icon": "arrow_drop_down"
	    }
	  })]), " ", _h('div', {
	    directives: [{
	      name: "show",
	      value: (showDropdown),
	      expression: "showDropdown"
	    }],
	    ref: "dropdown",
	    staticClass: "ui-select-dropdown",
	    attrs: {
	      "tabindex": "-1"
	    },
	    on: {
	      "keydown": [function($event) {
	        if ($event.keyCode !== 27) return;
	        $event.preventDefault();
	        close()
	      }, function($event) {
	        if ($event.keyCode !== 9) return;
	        close()
	      }, function($event) {
	        if ($event.keyCode !== 38) return;
	        $event.preventDefault();
	        highlight(highlightedIndex - 1)
	      }, function($event) {
	        if ($event.keyCode !== 40) return;
	        $event.preventDefault();
	        highlight(highlightedIndex + 1)
	      }, function($event) {
	        if ($event.keyCode !== 13) return;
	        $event.preventDefault();
	        $event.stopPropagation();
	        selectHighlighted(highlightedIndex, $event)
	      }]
	    }
	  }, [(showSearch) ? _h('div', {
	    staticClass: "ui-select-search",
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	      },
	      "keydown": function($event) {
	        if ($event.keyCode !== 32) return;
	        $event.stopPropagation();
	      }
	    }
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      value: (query),
	      expression: "query"
	    }],
	    ref: "searchInput",
	    staticClass: "ui-select-search-input",
	    attrs: {
	      "type": "text",
	      "placeholder": searchPlaceholder,
	      "autocomplete": "off"
	    },
	    domProps: {
	      "value": _s(query)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) return;
	        query = $event.target.value
	      }
	    }
	  }), " ", _h('ui-progress-circular', {
	    staticClass: "ui-select-search-spinner",
	    attrs: {
	      "size": 24,
	      "stroke": 4,
	      "show": loading
	    }
	  })]) : _e(), " ", _h('ul', {
	    ref: "optionsList",
	    staticClass: "ui-select-options"
	  }, [(filteredOptions) && _l((filteredOptions), function(option, index) {
	    return _h('ui-select-option', {
	      ref: "options",
	      refInFor: true,
	      attrs: {
	        "option": option,
	        "type": type,
	        "show-checkbox": multiple,
	        "keys": keys,
	        "highlighted": highlightedIndex === index
	      },
	      domProps: {
	        "selected": isSelected(option)
	      },
	      nativeOn: {
	        "click": function($event) {
	          $event.stopPropagation();
	          $event.preventDefault();
	          select(option, index)
	        },
	        "mouseover": function($event) {
	          $event.stopPropagation();
	          highlight(index, true)
	        }
	      }
	    })
	  }), " ", (nothingFound) ? _h('li', {
	    staticClass: "ui-select-no-results"
	  }, ["No results found"]) : _e()])])]), " ", (showFeedback) ? _h('div', {
	    staticClass: "ui-select-feedback"
	  }, [(!hideValidationErrors && !valid) ? _h('div', {
	    staticClass: "ui-select-error-text",
	    attrs: {
	      "transition": "ui-select-feedback-toggle"
	    },
	    domProps: {
	      "textContent": _s(validationError)
	    }
	  }) : _h('div', {
	    staticClass: "ui-select-help-text",
	    attrs: {
	      "transition": "ui-select-feedback-toggle"
	    },
	    domProps: {
	      "textContent": _s(helpText)
	    }
	  }), " "]) : _e()])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-21", module.exports)
	  }
	}

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(171)
	
	/* script */
	__vue_exports__ = __webpack_require__(172)
	
	/* template */
	var __vue_template__ = __webpack_require__(181)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-20", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-20", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiSlider.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 171 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _draggabilly = __webpack_require__(173);
	
	var _draggabilly2 = _interopRequireDefault(_draggabilly);
	
	var _UiIcon = __webpack_require__(6);
	
	var _UiIcon2 = _interopRequireDefault(_UiIcon);
	
	var _eventBus = __webpack_require__(61);
	
	var _eventBus2 = _interopRequireDefault(_eventBus);
	
	var _ReceivesTargetedEvent = __webpack_require__(65);
	
	var _ReceivesTargetedEvent2 = _interopRequireDefault(_ReceivesTargetedEvent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-slider',
	
	    props: {
	        name: String,
	        value: {
	            type: Number,
	            required: true
	        },
	        step: {
	            type: Number,
	            default: 5
	        },
	        icon: String,
	        label: String,
	        hideLabel: {
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
	            active: false,
	            initialValue: 0,
	            dragging: false,
	            draggable: null
	        };
	    },
	
	
	    computed: {
	        showIcon: function showIcon() {
	            return Boolean(this.icon);
	        },
	        hasLabel: function hasLabel() {
	            if (this.hideLabel) {
	                return true;
	            }
	
	            return Boolean(this.label);
	        }
	    },
	
	    watch: {
	        value: function value() {
	            if (!this.dragging) {
	                this.$refs.thumb.style.left = this.value + '%';
	            }
	        },
	        disabled: function disabled() {
	            if (this.disabled) {
	                this.draggable.disable();
	            } else {
	                this.draggable.enable();
	            }
	        }
	    },
	
	    mounted: function mounted() {
	        var _this = this;
	
	        this.initialValue = this.value;
	
	        this.$refs.thumb.style.left = this.value + '%';
	
	        this.draggable = new _draggabilly2.default(this.$refs.thumb, {
	            containment: this.$refs.containment,
	            axis: 'x'
	        });
	
	        this.draggable.on('dragStart', this.dragStart);
	        this.draggable.on('dragMove', this.dragMove);
	        this.draggable.on('dragEnd', this.dragEnd);
	
	        if (this.disabled) {
	            this.draggable.disable();
	        }
	
	        _eventBus2.default.$on('ui-input::reset', function (id) {
	            if (!_this.eventTargetsComponent(id)) {
	                return;
	            }
	            _this.$emit('input', _this.initialValue);
	        });
	    },
	    beforeDestroy: function beforeDestroy() {
	        if (this.draggable) {
	            this.draggable.destroy();
	        }
	    },
	
	
	    methods: {
	        focus: function focus() {
	            this.active = true;
	        },
	        blur: function blur() {
	            this.active = false;
	        },
	        sliderClick: function sliderClick(e) {
	            if (this.disabled) {
	                return;
	            }
	
	            var sliderPosition = this.$refs.slider.getBoundingClientRect();
	
	            var newValue = (e.clientX - sliderPosition.left) / sliderPosition.width * 100;
	
	            this.setValue(newValue);
	
	            if (e.target !== this.$refs.thumb) {
	                this.draggable._pointerDown(e, e);
	            }
	
	            this.$el.focus();
	        },
	        dragStart: function dragStart() {
	            this.dragging = true;
	            this.$el.focus();
	        },
	        dragMove: function dragMove() {
	            var x = this.draggable.position.x;
	            var newValue = x / this.$refs.slider.getBoundingClientRect().width * 100;
	
	            this.setValue(newValue);
	        },
	        dragEnd: function dragEnd() {
	            this.dragging = false;
	        },
	        increment: function increment() {
	            if (this.value === 100) {
	                return;
	            }
	
	            this.setValue(this.value + this.step);
	        },
	        decrement: function decrement() {
	            if (this.value === 0) {
	                return;
	            }
	
	            this.setValue(this.value - this.step);
	        },
	        setValue: function setValue(value) {
	            if (value === this.value) {
	                return;
	            }
	
	            var moderatedValue = Math.round(value);
	
	            if (moderatedValue >= 100) {
	                moderatedValue = 100;
	            }
	
	            if (moderatedValue <= 0) {
	                moderatedValue = 0;
	            }
	
	            this.$emit('input', moderatedValue);
	        }
	    },
	
	    components: {
	        UiIcon: _UiIcon2.default
	    },
	
	    mixins: [_ReceivesTargetedEvent2.default]
	};

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;
	(function() {
	
	/*!
	 * Draggabilly v1.2.4
	 * Make that shiz draggable
	 * http://draggabilly.desandro.com
	 * MIT license
	 */
	
	( function( window, factory ) {
	  'use strict';
	
	  if ( typeof define == 'function' && define.amd ) {
	    // AMD
	    define( [
	        'classie/classie',
	        'get-style-property/get-style-property',
	        'get-size/get-size',
	        'unidragger/unidragger'
	      ],
	      function( classie, getStyleProperty, getSize, Unidragger ) {
	        return factory( window, classie, getStyleProperty, getSize, Unidragger );
	      });
	  } else if ( true ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      __webpack_require__(174),
	      __webpack_require__(175),
	      __webpack_require__(176),
	      __webpack_require__(177)
	    );
	  } else {
	    // browser global
	    window.Draggabilly = factory(
	      window,
	      window.classie,
	      window.getStyleProperty,
	      window.getSize,
	      window.Unidragger
	    );
	  }
	
	}( window, function factory( window, classie, getStyleProperty, getSize, Unidragger ) {
	
	'use strict';
	
	// vars
	var document = window.document;
	
	function noop() {}
	
	// -------------------------- helpers -------------------------- //
	
	// extend objects
	function extend( a, b ) {
	  for ( var prop in b ) {
	    a[ prop ] = b[ prop ];
	  }
	  return a;
	}
	
	// ----- get style ----- //
	
	var defView = document.defaultView;
	
	var getStyle = defView && defView.getComputedStyle ?
	  function( elem ) {
	    return defView.getComputedStyle( elem, null );
	  } :
	  function( elem ) {
	    return elem.currentStyle;
	  };
	
	
	// http://stackoverflow.com/a/384380/182183
	var isElement = ( typeof HTMLElement == 'object' ) ?
	  function isElementDOM2( obj ) {
	    return obj instanceof HTMLElement;
	  } :
	  function isElementQuirky( obj ) {
	    return obj && typeof obj == 'object' &&
	      obj.nodeType == 1 && typeof obj.nodeName == 'string';
	  };
	
	// -------------------------- requestAnimationFrame -------------------------- //
	
	// https://gist.github.com/1866474
	
	var lastTime = 0;
	var prefixes = 'webkit moz ms o'.split(' ');
	// get unprefixed rAF and cAF, if present
	var requestAnimationFrame = window.requestAnimationFrame;
	var cancelAnimationFrame = window.cancelAnimationFrame;
	// loop through vendor prefixes and get prefixed rAF and cAF
	var prefix;
	for( var i = 0; i < prefixes.length; i++ ) {
	  if ( requestAnimationFrame && cancelAnimationFrame ) {
	    break;
	  }
	  prefix = prefixes[i];
	  requestAnimationFrame = requestAnimationFrame || window[ prefix + 'RequestAnimationFrame' ];
	  cancelAnimationFrame  = cancelAnimationFrame  || window[ prefix + 'CancelAnimationFrame' ] ||
	                            window[ prefix + 'CancelRequestAnimationFrame' ];
	}
	
	// fallback to setTimeout and clearTimeout if either request/cancel is not supported
	if ( !requestAnimationFrame || !cancelAnimationFrame )  {
	  requestAnimationFrame = function( callback ) {
	    var currTime = new Date().getTime();
	    var timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );
	    var id = window.setTimeout( function() {
	      callback( currTime + timeToCall );
	    }, timeToCall );
	    lastTime = currTime + timeToCall;
	    return id;
	  };
	
	  cancelAnimationFrame = function( id ) {
	    window.clearTimeout( id );
	  };
	}
	
	// -------------------------- support -------------------------- //
	
	var transformProperty = getStyleProperty('transform');
	// TODO fix quick & dirty check for 3D support
	var is3d = !!getStyleProperty('perspective');
	
	var jQuery = window.jQuery;
	
	// --------------------------  -------------------------- //
	
	function Draggabilly( element, options ) {
	  // querySelector if string
	  this.element = typeof element == 'string' ?
	    document.querySelector( element ) : element;
	
	  if ( jQuery ) {
	    this.$element = jQuery( this.element );
	  }
	
	  // options
	  this.options = extend( {}, this.constructor.defaults );
	  this.option( options );
	
	  this._create();
	}
	
	// inherit Unidragger methods
	extend( Draggabilly.prototype, Unidragger.prototype );
	
	Draggabilly.defaults = {
	};
	
	/**
	 * set options
	 * @param {Object} opts
	 */
	Draggabilly.prototype.option = function( opts ) {
	  extend( this.options, opts );
	};
	
	Draggabilly.prototype._create = function() {
	
	  // properties
	  this.position = {};
	  this._getPosition();
	
	  this.startPoint = { x: 0, y: 0 };
	  this.dragPoint = { x: 0, y: 0 };
	
	  this.startPosition = extend( {}, this.position );
	
	  // set relative positioning
	  var style = getStyle( this.element );
	  if ( style.position != 'relative' && style.position != 'absolute' ) {
	    this.element.style.position = 'relative';
	  }
	
	  this.enable();
	  this.setHandles();
	
	};
	
	/**
	 * set this.handles and bind start events to 'em
	 */
	Draggabilly.prototype.setHandles = function() {
	  this.handles = this.options.handle ?
	    this.element.querySelectorAll( this.options.handle ) : [ this.element ];
	
	  this.bindHandles();
	};
	
	/**
	 * emits events via eventEmitter and jQuery events
	 * @param {String} type - name of event
	 * @param {Event} event - original event
	 * @param {Array} args - extra arguments
	 */
	Draggabilly.prototype.dispatchEvent = function( type, event, args ) {
	  var emitArgs = [ event ].concat( args );
	  this.emitEvent( type, emitArgs );
	  var jQuery = window.jQuery;
	  // trigger jQuery event
	  if ( jQuery && this.$element ) {
	    if ( event ) {
	      // create jQuery event
	      var $event = jQuery.Event( event );
	      $event.type = type;
	      this.$element.trigger( $event, args );
	    } else {
	      // just trigger with type if no event available
	      this.$element.trigger( type, args );
	    }
	  }
	};
	
	// -------------------------- position -------------------------- //
	
	// get left/top position from style
	Draggabilly.prototype._getPosition = function() {
	  // properties
	  var style = getStyle( this.element );
	
	  var x = parseInt( style.left, 10 );
	  var y = parseInt( style.top, 10 );
	
	  // clean up 'auto' or other non-integer values
	  this.position.x = isNaN( x ) ? 0 : x;
	  this.position.y = isNaN( y ) ? 0 : y;
	
	  this._addTransformPosition( style );
	};
	
	// add transform: translate( x, y ) to position
	Draggabilly.prototype._addTransformPosition = function( style ) {
	  if ( !transformProperty ) {
	    return;
	  }
	  var transform = style[ transformProperty ];
	  // bail out if value is 'none'
	  if ( transform.indexOf('matrix') !== 0 ) {
	    return;
	  }
	  // split matrix(1, 0, 0, 1, x, y)
	  var matrixValues = transform.split(',');
	  // translate X value is in 12th or 4th position
	  var xIndex = transform.indexOf('matrix3d') === 0 ? 12 : 4;
	  var translateX = parseInt( matrixValues[ xIndex ], 10 );
	  // translate Y value is in 13th or 5th position
	  var translateY = parseInt( matrixValues[ xIndex + 1 ], 10 );
	  this.position.x += translateX;
	  this.position.y += translateY;
	};
	
	// -------------------------- events -------------------------- //
	
	/**
	 * pointer start
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	Draggabilly.prototype.pointerDown = function( event, pointer ) {
	  this._dragPointerDown( event, pointer );
	  // kludge to blur focused inputs in dragger
	  var focused = document.activeElement;
	  if ( focused && focused.blur ) {
	    focused.blur();
	  }
	  // bind move and end events
	  this._bindPostStartEvents( event );
	  classie.add( this.element, 'is-pointer-down' );
	  this.dispatchEvent( 'pointerDown', event, [ pointer ] );
	};
	
	/**
	 * drag move
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	Draggabilly.prototype.pointerMove = function( event, pointer ) {
	  var moveVector = this._dragPointerMove( event, pointer );
	  this.dispatchEvent( 'pointerMove', event, [ pointer, moveVector ] );
	  this._dragMove( event, pointer, moveVector );
	};
	
	/**
	 * drag start
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	Draggabilly.prototype.dragStart = function( event, pointer ) {
	  if ( !this.isEnabled ) {
	    return;
	  }
	  this._getPosition();
	  this.measureContainment();
	  // position _when_ drag began
	  this.startPosition.x = this.position.x;
	  this.startPosition.y = this.position.y;
	  // reset left/top style
	  this.setLeftTop();
	
	  this.dragPoint.x = 0;
	  this.dragPoint.y = 0;
	
	  // reset isDragging flag
	  this.isDragging = true;
	  classie.add( this.element, 'is-dragging' );
	  this.dispatchEvent( 'dragStart', event, [ pointer ] );
	  // start animation
	  this.animate();
	};
	
	Draggabilly.prototype.measureContainment = function() {
	  var containment = this.options.containment;
	  if ( !containment ) {
	    return;
	  }
	
	  this.size = getSize( this.element );
	  var elemRect = this.element.getBoundingClientRect();
	
	  // use element if element
	  var container = isElement( containment ) ? containment :
	    // fallback to querySelector if string
	    typeof containment == 'string' ? document.querySelector( containment ) :
	    // otherwise just `true`, use the parent
	    this.element.parentNode;
	
	  this.containerSize = getSize( container );
	  var containerRect = container.getBoundingClientRect();
	
	  this.relativeStartPosition = {
	    x: elemRect.left - containerRect.left,
	    y: elemRect.top  - containerRect.top
	  };
	};
	
	// ----- move event ----- //
	
	/**
	 * drag move
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	Draggabilly.prototype.dragMove = function( event, pointer, moveVector ) {
	  if ( !this.isEnabled ) {
	    return;
	  }
	  var dragX = moveVector.x;
	  var dragY = moveVector.y;
	
	  var grid = this.options.grid;
	  var gridX = grid && grid[0];
	  var gridY = grid && grid[1];
	
	  dragX = applyGrid( dragX, gridX );
	  dragY = applyGrid( dragY, gridY );
	
	  dragX = this.containDrag( 'x', dragX, gridX );
	  dragY = this.containDrag( 'y', dragY, gridY );
	
	  // constrain to axis
	  dragX = this.options.axis == 'y' ? 0 : dragX;
	  dragY = this.options.axis == 'x' ? 0 : dragY;
	
	  this.position.x = this.startPosition.x + dragX;
	  this.position.y = this.startPosition.y + dragY;
	  // set dragPoint properties
	  this.dragPoint.x = dragX;
	  this.dragPoint.y = dragY;
	
	  this.dispatchEvent( 'dragMove', event, [ pointer, moveVector ] );
	};
	
	function applyGrid( value, grid, method ) {
	  method = method || 'round';
	  return grid ? Math[ method ]( value / grid ) * grid : value;
	}
	
	Draggabilly.prototype.containDrag = function( axis, drag, grid ) {
	  if ( !this.options.containment ) {
	    return drag;
	  }
	  var measure = axis == 'x' ? 'width' : 'height';
	
	  var rel = this.relativeStartPosition[ axis ];
	  var min = applyGrid( -rel, grid, 'ceil' );
	  var max = this.containerSize[ measure ] - rel - this.size[ measure ];
	  max = applyGrid( max, grid, 'floor' );
	  return  Math.min( max, Math.max( min, drag ) );
	};
	
	// ----- end event ----- //
	
	/**
	 * pointer up
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	Draggabilly.prototype.pointerUp = function( event, pointer ) {
	  classie.remove( this.element, 'is-pointer-down' );
	  this.dispatchEvent( 'pointerUp', event, [ pointer ] );
	  this._dragPointerUp( event, pointer );
	};
	
	/**
	 * drag end
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	Draggabilly.prototype.dragEnd = function( event, pointer ) {
	  if ( !this.isEnabled ) {
	    return;
	  }
	  this.isDragging = false;
	  // use top left position when complete
	  if ( transformProperty ) {
	    this.element.style[ transformProperty ] = '';
	    this.setLeftTop();
	  }
	  classie.remove( this.element, 'is-dragging' );
	  this.dispatchEvent( 'dragEnd', event, [ pointer ] );
	};
	
	// -------------------------- animation -------------------------- //
	
	Draggabilly.prototype.animate = function() {
	  // only render and animate if dragging
	  if ( !this.isDragging ) {
	    return;
	  }
	
	  this.positionDrag();
	
	  var _this = this;
	  requestAnimationFrame( function animateFrame() {
	    _this.animate();
	  });
	
	};
	
	// transform translate function
	var translate = is3d ?
	  function( x, y ) {
	    return 'translate3d( ' + x + 'px, ' + y + 'px, 0)';
	  } :
	  function( x, y ) {
	    return 'translate( ' + x + 'px, ' + y + 'px)';
	  };
	
	// left/top positioning
	Draggabilly.prototype.setLeftTop = function() {
	  this.element.style.left = this.position.x + 'px';
	  this.element.style.top  = this.position.y + 'px';
	};
	
	Draggabilly.prototype.positionDrag = transformProperty ?
	  function() {
	    // position with transform
	    this.element.style[ transformProperty ] = translate( this.dragPoint.x, this.dragPoint.y );
	  } : Draggabilly.prototype.setLeftTop;
	
	// ----- staticClick ----- //
	
	Draggabilly.prototype.staticClick = function( event, pointer ) {
	  this.dispatchEvent( 'staticClick', event, [ pointer ] );
	};
	
	// ----- methods ----- //
	
	Draggabilly.prototype.enable = function() {
	  this.isEnabled = true;
	};
	
	Draggabilly.prototype.disable = function() {
	  this.isEnabled = false;
	  if ( this.isDragging ) {
	    this.dragEnd();
	  }
	};
	
	Draggabilly.prototype.destroy = function() {
	  this.disable();
	  // reset styles
	  if ( transformProperty ) {
	    this.element.style[ transformProperty ] = '';
	  }
	  this.element.style.left = '';
	  this.element.style.top = '';
	  this.element.style.position = '';
	  // unbind handles
	  this.unbindHandles();
	  // remove jQuery data
	  if ( this.$element ) {
	    this.$element.removeData('draggabilly');
	  }
	};
	
	// ----- jQuery bridget ----- //
	
	// required for jQuery bridget
	Draggabilly.prototype._init = noop;
	
	if ( jQuery && jQuery.bridget ) {
	  jQuery.bridget( 'draggabilly', Draggabilly );
	}
	
	// -----  ----- //
	
	return Draggabilly;
	
	}));
	
	}.call(window));

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;
	(function() {
	
	/*!
	 * classie v1.0.1
	 * class helper functions
	 * from bonzo https://github.com/ded/bonzo
	 * MIT license
	 * 
	 * classie.has( elem, 'my-class' ) -> true/false
	 * classie.add( elem, 'my-new-class' )
	 * classie.remove( elem, 'my-unwanted-class' )
	 * classie.toggle( elem, 'my-class' )
	 */
	
	/*jshint browser: true, strict: true, undef: true, unused: true */
	/*global define: false, module: false */
	
	( function( window ) {
	
	'use strict';
	
	// class helper functions from bonzo https://github.com/ded/bonzo
	
	function classReg( className ) {
	  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
	}
	
	// classList support for class management
	// altho to be fair, the api sucks because it won't accept multiple classes at once
	var hasClass, addClass, removeClass;
	
	if ( 'classList' in document.documentElement ) {
	  hasClass = function( elem, c ) {
	    return elem.classList.contains( c );
	  };
	  addClass = function( elem, c ) {
	    elem.classList.add( c );
	  };
	  removeClass = function( elem, c ) {
	    elem.classList.remove( c );
	  };
	}
	else {
	  hasClass = function( elem, c ) {
	    return classReg( c ).test( elem.className );
	  };
	  addClass = function( elem, c ) {
	    if ( !hasClass( elem, c ) ) {
	      elem.className = elem.className + ' ' + c;
	    }
	  };
	  removeClass = function( elem, c ) {
	    elem.className = elem.className.replace( classReg( c ), ' ' );
	  };
	}
	
	function toggleClass( elem, c ) {
	  var fn = hasClass( elem, c ) ? removeClass : addClass;
	  fn( elem, c );
	}
	
	var classie = {
	  // full names
	  hasClass: hasClass,
	  addClass: addClass,
	  removeClass: removeClass,
	  toggleClass: toggleClass,
	  // short names
	  has: hasClass,
	  add: addClass,
	  remove: removeClass,
	  toggle: toggleClass
	};
	
	// transport
	if ( typeof define === 'function' && define.amd ) {
	  // AMD
	  define( classie );
	} else if ( true ) {
	  // CommonJS
	  module.exports = classie;
	} else {
	  // browser global
	  window.classie = classie;
	}
	
	})( window );
	
	}.call(window));

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;
	(function() {
	
	/*!
	 * getStyleProperty v1.0.4
	 * original by kangax
	 * http://perfectionkills.com/feature-testing-css-properties/
	 * MIT license
	 */
	
	/*jshint browser: true, strict: true, undef: true */
	/*global define: false, exports: false, module: false */
	
	( function( window ) {
	
	'use strict';
	
	var prefixes = 'Webkit Moz ms Ms O'.split(' ');
	var docElemStyle = document.documentElement.style;
	
	function getStyleProperty( propName ) {
	  if ( !propName ) {
	    return;
	  }
	
	  // test standard property first
	  if ( typeof docElemStyle[ propName ] === 'string' ) {
	    return propName;
	  }
	
	  // capitalize
	  propName = propName.charAt(0).toUpperCase() + propName.slice(1);
	
	  // test vendor specific properties
	  var prefixed;
	  for ( var i=0, len = prefixes.length; i < len; i++ ) {
	    prefixed = prefixes[i] + propName;
	    if ( typeof docElemStyle[ prefixed ] === 'string' ) {
	      return prefixed;
	    }
	  }
	}
	
	// transport
	if ( typeof define === 'function' && define.amd ) {
	  // AMD
	  define( function() {
	    return getStyleProperty;
	  });
	} else if ( true ) {
	  // CommonJS for Component
	  module.exports = getStyleProperty;
	} else {
	  // browser global
	  window.getStyleProperty = getStyleProperty;
	}
	
	})( window );
	
	}.call(window));

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;
	(function() {
	
	/*!
	 * getSize v1.2.2
	 * measure size of elements
	 * MIT license
	 */
	
	/*jshint browser: true, strict: true, undef: true, unused: true */
	/*global define: false, exports: false, require: false, module: false, console: false */
	
	( function( window, undefined ) {
	
	'use strict';
	
	// -------------------------- helpers -------------------------- //
	
	// get a number from a string, not a percentage
	function getStyleSize( value ) {
	  var num = parseFloat( value );
	  // not a percent like '100%', and a number
	  var isValid = value.indexOf('%') === -1 && !isNaN( num );
	  return isValid && num;
	}
	
	function noop() {}
	
	var logError = typeof console === 'undefined' ? noop :
	  function( message ) {
	    console.error( message );
	  };
	
	// -------------------------- measurements -------------------------- //
	
	var measurements = [
	  'paddingLeft',
	  'paddingRight',
	  'paddingTop',
	  'paddingBottom',
	  'marginLeft',
	  'marginRight',
	  'marginTop',
	  'marginBottom',
	  'borderLeftWidth',
	  'borderRightWidth',
	  'borderTopWidth',
	  'borderBottomWidth'
	];
	
	function getZeroSize() {
	  var size = {
	    width: 0,
	    height: 0,
	    innerWidth: 0,
	    innerHeight: 0,
	    outerWidth: 0,
	    outerHeight: 0
	  };
	  for ( var i=0, len = measurements.length; i < len; i++ ) {
	    var measurement = measurements[i];
	    size[ measurement ] = 0;
	  }
	  return size;
	}
	
	
	
	function defineGetSize( getStyleProperty ) {
	
	// -------------------------- setup -------------------------- //
	
	var isSetup = false;
	
	var getStyle, boxSizingProp, isBoxSizeOuter;
	
	/**
	 * setup vars and functions
	 * do it on initial getSize(), rather than on script load
	 * For Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=548397
	 */
	function setup() {
	  // setup once
	  if ( isSetup ) {
	    return;
	  }
	  isSetup = true;
	
	  var getComputedStyle = window.getComputedStyle;
	  getStyle = ( function() {
	    var getStyleFn = getComputedStyle ?
	      function( elem ) {
	        return getComputedStyle( elem, null );
	      } :
	      function( elem ) {
	        return elem.currentStyle;
	      };
	
	      return function getStyle( elem ) {
	        var style = getStyleFn( elem );
	        if ( !style ) {
	          logError( 'Style returned ' + style +
	            '. Are you running this code in a hidden iframe on Firefox? ' +
	            'See http://bit.ly/getsizebug1' );
	        }
	        return style;
	      };
	  })();
	
	  // -------------------------- box sizing -------------------------- //
	
	  boxSizingProp = getStyleProperty('boxSizing');
	
	  /**
	   * WebKit measures the outer-width on style.width on border-box elems
	   * IE & Firefox measures the inner-width
	   */
	  if ( boxSizingProp ) {
	    var div = document.createElement('div');
	    div.style.width = '200px';
	    div.style.padding = '1px 2px 3px 4px';
	    div.style.borderStyle = 'solid';
	    div.style.borderWidth = '1px 2px 3px 4px';
	    div.style[ boxSizingProp ] = 'border-box';
	
	    var body = document.body || document.documentElement;
	    body.appendChild( div );
	    var style = getStyle( div );
	
	    isBoxSizeOuter = getStyleSize( style.width ) === 200;
	    body.removeChild( div );
	  }
	
	}
	
	// -------------------------- getSize -------------------------- //
	
	function getSize( elem ) {
	  setup();
	
	  // use querySeletor if elem is string
	  if ( typeof elem === 'string' ) {
	    elem = document.querySelector( elem );
	  }
	
	  // do not proceed on non-objects
	  if ( !elem || typeof elem !== 'object' || !elem.nodeType ) {
	    return;
	  }
	
	  var style = getStyle( elem );
	
	  // if hidden, everything is 0
	  if ( style.display === 'none' ) {
	    return getZeroSize();
	  }
	
	  var size = {};
	  size.width = elem.offsetWidth;
	  size.height = elem.offsetHeight;
	
	  var isBorderBox = size.isBorderBox = !!( boxSizingProp &&
	    style[ boxSizingProp ] && style[ boxSizingProp ] === 'border-box' );
	
	  // get all measurements
	  for ( var i=0, len = measurements.length; i < len; i++ ) {
	    var measurement = measurements[i];
	    var value = style[ measurement ];
	    value = mungeNonPixel( elem, value );
	    var num = parseFloat( value );
	    // any 'auto', 'medium' value will be 0
	    size[ measurement ] = !isNaN( num ) ? num : 0;
	  }
	
	  var paddingWidth = size.paddingLeft + size.paddingRight;
	  var paddingHeight = size.paddingTop + size.paddingBottom;
	  var marginWidth = size.marginLeft + size.marginRight;
	  var marginHeight = size.marginTop + size.marginBottom;
	  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
	  var borderHeight = size.borderTopWidth + size.borderBottomWidth;
	
	  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
	
	  // overwrite width and height if we can get it from style
	  var styleWidth = getStyleSize( style.width );
	  if ( styleWidth !== false ) {
	    size.width = styleWidth +
	      // add padding and border unless it's already including it
	      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
	  }
	
	  var styleHeight = getStyleSize( style.height );
	  if ( styleHeight !== false ) {
	    size.height = styleHeight +
	      // add padding and border unless it's already including it
	      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
	  }
	
	  size.innerWidth = size.width - ( paddingWidth + borderWidth );
	  size.innerHeight = size.height - ( paddingHeight + borderHeight );
	
	  size.outerWidth = size.width + marginWidth;
	  size.outerHeight = size.height + marginHeight;
	
	  return size;
	}
	
	// IE8 returns percent values, not pixels
	// taken from jQuery's curCSS
	function mungeNonPixel( elem, value ) {
	  // IE8 and has percent value
	  if ( window.getComputedStyle || value.indexOf('%') === -1 ) {
	    return value;
	  }
	  var style = elem.style;
	  // Remember the original values
	  var left = style.left;
	  var rs = elem.runtimeStyle;
	  var rsLeft = rs && rs.left;
	
	  // Put in the new values to get a computed value out
	  if ( rsLeft ) {
	    rs.left = elem.currentStyle.left;
	  }
	  style.left = value;
	  value = style.pixelLeft;
	
	  // Revert the changed values
	  style.left = left;
	  if ( rsLeft ) {
	    rs.left = rsLeft;
	  }
	
	  return value;
	}
	
	return getSize;
	
	}
	
	// transport
	if ( typeof define === 'function' && define.amd ) {
	  // AMD for RequireJS
	  define( [ 'get-style-property/get-style-property' ], defineGetSize );
	} else if ( true ) {
	  // CommonJS for Component
	  module.exports = defineGetSize( __webpack_require__(175) );
	} else {
	  // browser global
	  window.getSize = defineGetSize( window.getStyleProperty );
	}
	
	})( window );
	
	}.call(window));

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;
	(function() {
	
	/*!
	 * Unidragger v1.1.5
	 * Draggable base class
	 * MIT license
	 */
	
	/*jshint browser: true, unused: true, undef: true, strict: true */
	
	( function( window, factory ) {
	  /*global define: false, module: false, require: false */
	  'use strict';
	  // universal module definition
	
	  if ( typeof define == 'function' && define.amd ) {
	    // AMD
	    define( [
	      'eventie/eventie',
	      'unipointer/unipointer'
	    ], function( eventie, Unipointer ) {
	      return factory( window, eventie, Unipointer );
	    });
	  } else if ( true ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      __webpack_require__(178),
	      __webpack_require__(179)
	    );
	  } else {
	    // browser global
	    window.Unidragger = factory(
	      window,
	      window.eventie,
	      window.Unipointer
	    );
	  }
	
	}( window, function factory( window, eventie, Unipointer ) {
	
	'use strict';
	
	// -----  ----- //
	
	function noop() {}
	
	// handle IE8 prevent default
	function preventDefaultEvent( event ) {
	  if ( event.preventDefault ) {
	    event.preventDefault();
	  } else {
	    event.returnValue = false;
	  }
	}
	
	// -------------------------- Unidragger -------------------------- //
	
	function Unidragger() {}
	
	// inherit Unipointer & EventEmitter
	Unidragger.prototype = new Unipointer();
	
	// ----- bind start ----- //
	
	Unidragger.prototype.bindHandles = function() {
	  this._bindHandles( true );
	};
	
	Unidragger.prototype.unbindHandles = function() {
	  this._bindHandles( false );
	};
	
	var navigator = window.navigator;
	/**
	 * works as unbinder, as you can .bindHandles( false ) to unbind
	 * @param {Boolean} isBind - will unbind if falsey
	 */
	Unidragger.prototype._bindHandles = function( isBind ) {
	  // munge isBind, default to true
	  isBind = isBind === undefined ? true : !!isBind;
	  // extra bind logic
	  var binderExtra;
	  if ( navigator.pointerEnabled ) {
	    binderExtra = function( handle ) {
	      // disable scrolling on the element
	      handle.style.touchAction = isBind ? 'none' : '';
	    };
	  } else if ( navigator.msPointerEnabled ) {
	    binderExtra = function( handle ) {
	      // disable scrolling on the element
	      handle.style.msTouchAction = isBind ? 'none' : '';
	    };
	  } else {
	    binderExtra = function() {
	      // TODO re-enable img.ondragstart when unbinding
	      if ( isBind ) {
	        disableImgOndragstart( handle );
	      }
	    };
	  }
	  // bind each handle
	  var bindMethod = isBind ? 'bind' : 'unbind';
	  for ( var i=0, len = this.handles.length; i < len; i++ ) {
	    var handle = this.handles[i];
	    this._bindStartEvent( handle, isBind );
	    binderExtra( handle );
	    eventie[ bindMethod ]( handle, 'click', this );
	  }
	};
	
	// remove default dragging interaction on all images in IE8
	// IE8 does its own drag thing on images, which messes stuff up
	
	function noDragStart() {
	  return false;
	}
	
	// TODO replace this with a IE8 test
	var isIE8 = 'attachEvent' in document.documentElement;
	
	// IE8 only
	var disableImgOndragstart = !isIE8 ? noop : function( handle ) {
	
	  if ( handle.nodeName == 'IMG' ) {
	    handle.ondragstart = noDragStart;
	  }
	
	  var images = handle.querySelectorAll('img');
	  for ( var i=0, len = images.length; i < len; i++ ) {
	    var img = images[i];
	    img.ondragstart = noDragStart;
	  }
	};
	
	// ----- start event ----- //
	
	/**
	 * pointer start
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	Unidragger.prototype.pointerDown = function( event, pointer ) {
	  // dismiss range sliders
	  if ( event.target.nodeName == 'INPUT' && event.target.type == 'range' ) {
	    // reset pointerDown logic
	    this.isPointerDown = false;
	    delete this.pointerIdentifier;
	    return;
	  }
	
	  this._dragPointerDown( event, pointer );
	  // kludge to blur focused inputs in dragger
	  var focused = document.activeElement;
	  if ( focused && focused.blur ) {
	    focused.blur();
	  }
	  // bind move and end events
	  this._bindPostStartEvents( event );
	  // track scrolling
	  this.pointerDownScroll = Unidragger.getScrollPosition();
	  eventie.bind( window, 'scroll', this );
	
	  this.emitEvent( 'pointerDown', [ event, pointer ] );
	};
	
	// base pointer down logic
	Unidragger.prototype._dragPointerDown = function( event, pointer ) {
	  // track to see when dragging starts
	  this.pointerDownPoint = Unipointer.getPointerPoint( pointer );
	
	  // prevent default, unless touchstart or <select>
	  var isTouchstart = event.type == 'touchstart';
	  var targetNodeName = event.target.nodeName;
	  if ( !isTouchstart && targetNodeName != 'SELECT' ) {
	    preventDefaultEvent( event );
	  }
	};
	
	// ----- move event ----- //
	
	/**
	 * drag move
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	Unidragger.prototype.pointerMove = function( event, pointer ) {
	  var moveVector = this._dragPointerMove( event, pointer );
	  this.emitEvent( 'pointerMove', [ event, pointer, moveVector ] );
	  this._dragMove( event, pointer, moveVector );
	};
	
	// base pointer move logic
	Unidragger.prototype._dragPointerMove = function( event, pointer ) {
	  var movePoint = Unipointer.getPointerPoint( pointer );
	  var moveVector = {
	    x: movePoint.x - this.pointerDownPoint.x,
	    y: movePoint.y - this.pointerDownPoint.y
	  };
	  // start drag if pointer has moved far enough to start drag
	  if ( !this.isDragging && this.hasDragStarted( moveVector ) ) {
	    this._dragStart( event, pointer );
	  }
	  return moveVector;
	};
	
	// condition if pointer has moved far enough to start drag
	Unidragger.prototype.hasDragStarted = function( moveVector ) {
	  return Math.abs( moveVector.x ) > 3 || Math.abs( moveVector.y ) > 3;
	};
	
	
	// ----- end event ----- //
	
	/**
	 * pointer up
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	Unidragger.prototype.pointerUp = function( event, pointer ) {
	  this.emitEvent( 'pointerUp', [ event, pointer ] );
	  this._dragPointerUp( event, pointer );
	};
	
	Unidragger.prototype._dragPointerUp = function( event, pointer ) {
	  if ( this.isDragging ) {
	    this._dragEnd( event, pointer );
	  } else {
	    // pointer didn't move enough for drag to start
	    this._staticClick( event, pointer );
	  }
	};
	
	Unipointer.prototype.pointerDone = function() {
	  eventie.unbind( window, 'scroll', this );
	};
	
	// -------------------------- drag -------------------------- //
	
	// dragStart
	Unidragger.prototype._dragStart = function( event, pointer ) {
	  this.isDragging = true;
	  this.dragStartPoint = Unidragger.getPointerPoint( pointer );
	  // prevent clicks
	  this.isPreventingClicks = true;
	
	  this.dragStart( event, pointer );
	};
	
	Unidragger.prototype.dragStart = function( event, pointer ) {
	  this.emitEvent( 'dragStart', [ event, pointer ] );
	};
	
	// dragMove
	Unidragger.prototype._dragMove = function( event, pointer, moveVector ) {
	  // do not drag if not dragging yet
	  if ( !this.isDragging ) {
	    return;
	  }
	
	  this.dragMove( event, pointer, moveVector );
	};
	
	Unidragger.prototype.dragMove = function( event, pointer, moveVector ) {
	  preventDefaultEvent( event );
	  this.emitEvent( 'dragMove', [ event, pointer, moveVector ] );
	};
	
	// dragEnd
	Unidragger.prototype._dragEnd = function( event, pointer ) {
	  // set flags
	  this.isDragging = false;
	  // re-enable clicking async
	  var _this = this;
	  setTimeout( function() {
	    delete _this.isPreventingClicks;
	  });
	
	  this.dragEnd( event, pointer );
	};
	
	Unidragger.prototype.dragEnd = function( event, pointer ) {
	  this.emitEvent( 'dragEnd', [ event, pointer ] );
	};
	
	Unidragger.prototype.pointerDone = function() {
	  eventie.unbind( window, 'scroll', this );
	  delete this.pointerDownScroll;
	};
	
	// ----- onclick ----- //
	
	// handle all clicks and prevent clicks when dragging
	Unidragger.prototype.onclick = function( event ) {
	  if ( this.isPreventingClicks ) {
	    preventDefaultEvent( event );
	  }
	};
	
	// ----- staticClick ----- //
	
	// triggered after pointer down & up with no/tiny movement
	Unidragger.prototype._staticClick = function( event, pointer ) {
	  // ignore emulated mouse up clicks
	  if ( this.isIgnoringMouseUp && event.type == 'mouseup' ) {
	    return;
	  }
	
	  // allow click in <input>s and <textarea>s
	  var nodeName = event.target.nodeName;
	  if ( nodeName == 'INPUT' || nodeName == 'TEXTAREA' ) {
	    event.target.focus();
	  }
	  this.staticClick( event, pointer );
	
	  // set flag for emulated clicks 300ms after touchend
	  if ( event.type != 'mouseup' ) {
	    this.isIgnoringMouseUp = true;
	    var _this = this;
	    // reset flag after 300ms
	    setTimeout( function() {
	      delete _this.isIgnoringMouseUp;
	    }, 400 );
	  }
	};
	
	Unidragger.prototype.staticClick = function( event, pointer ) {
	  this.emitEvent( 'staticClick', [ event, pointer ] );
	};
	
	// ----- scroll ----- //
	
	Unidragger.prototype.onscroll = function() {
	  var scroll = Unidragger.getScrollPosition();
	  var scrollMoveX = this.pointerDownScroll.x - scroll.x;
	  var scrollMoveY = this.pointerDownScroll.y - scroll.y;
	  // cancel click/tap if scroll is too much
	  if ( Math.abs( scrollMoveX ) > 3 || Math.abs( scrollMoveY ) > 3 ) {
	    this._pointerDone();
	  }
	};
	
	// ----- utils ----- //
	
	Unidragger.getPointerPoint = function( pointer ) {
	  return {
	    x: pointer.pageX !== undefined ? pointer.pageX : pointer.clientX,
	    y: pointer.pageY !== undefined ? pointer.pageY : pointer.clientY
	  };
	};
	
	var isPageOffset = window.pageYOffset !== undefined;
	
	// get scroll in { x, y }
	Unidragger.getScrollPosition = function() {
	  return {
	    x: isPageOffset ? window.pageXOffset : document.body.scrollLeft,
	    y: isPageOffset ? window.pageYOffset : document.body.scrollTop
	  };
	};
	
	// -----  ----- //
	
	Unidragger.getPointerPoint = Unipointer.getPointerPoint;
	
	return Unidragger;
	
	}));
	
	}.call(window));

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * eventie v1.0.6
	 * event binding helper
	 *   eventie.bind( elem, 'click', myFn )
	 *   eventie.unbind( elem, 'click', myFn )
	 * MIT license
	 */
	
	/*jshint browser: true, undef: true, unused: true */
	/*global define: false, module: false */
	
	( function( window ) {
	
	'use strict';
	
	var docElem = document.documentElement;
	
	var bind = function() {};
	
	function getIEEvent( obj ) {
	  var event = window.event;
	  // add event.target
	  event.target = event.target || event.srcElement || obj;
	  return event;
	}
	
	if ( docElem.addEventListener ) {
	  bind = function( obj, type, fn ) {
	    obj.addEventListener( type, fn, false );
	  };
	} else if ( docElem.attachEvent ) {
	  bind = function( obj, type, fn ) {
	    obj[ type + fn ] = fn.handleEvent ?
	      function() {
	        var event = getIEEvent( obj );
	        fn.handleEvent.call( fn, event );
	      } :
	      function() {
	        var event = getIEEvent( obj );
	        fn.call( obj, event );
	      };
	    obj.attachEvent( "on" + type, obj[ type + fn ] );
	  };
	}
	
	var unbind = function() {};
	
	if ( docElem.removeEventListener ) {
	  unbind = function( obj, type, fn ) {
	    obj.removeEventListener( type, fn, false );
	  };
	} else if ( docElem.detachEvent ) {
	  unbind = function( obj, type, fn ) {
	    obj.detachEvent( "on" + type, obj[ type + fn ] );
	    try {
	      delete obj[ type + fn ];
	    } catch ( err ) {
	      // can't delete window object properties
	      obj[ type + fn ] = undefined;
	    }
	  };
	}
	
	var eventie = {
	  bind: bind,
	  unbind: unbind
	};
	
	// ----- module definition ----- //
	
	if ( true ) {
	  // AMD
	  !(__WEBPACK_AMD_DEFINE_FACTORY__ = (eventie), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if ( typeof exports === 'object' ) {
	  // CommonJS
	  module.exports = eventie;
	} else {
	  // browser global
	  window.eventie = eventie;
	}
	
	})( window );


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;
	(function() {
	
	/*!
	 * Unipointer v1.1.0
	 * base class for doing one thing with pointer event
	 * MIT license
	 */
	
	/*jshint browser: true, undef: true, unused: true, strict: true */
	/*global define: false, module: false, require: false */
	
	( function( window, factory ) {
	  'use strict';
	  // universal module definition
	
	  if ( typeof define == 'function' && define.amd ) {
	    // AMD
	    define( [
	      'eventEmitter/EventEmitter',
	      'eventie/eventie'
	    ], function( EventEmitter, eventie ) {
	      return factory( window, EventEmitter, eventie );
	    });
	  } else if ( true ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      __webpack_require__(180),
	      __webpack_require__(178)
	    );
	  } else {
	    // browser global
	    window.Unipointer = factory(
	      window,
	      window.EventEmitter,
	      window.eventie
	    );
	  }
	
	}( window, function factory( window, EventEmitter, eventie ) {
	
	'use strict';
	
	function noop() {}
	
	function Unipointer() {}
	
	// inherit EventEmitter
	Unipointer.prototype = new EventEmitter();
	
	Unipointer.prototype.bindStartEvent = function( elem ) {
	  this._bindStartEvent( elem, true );
	};
	
	Unipointer.prototype.unbindStartEvent = function( elem ) {
	  this._bindStartEvent( elem, false );
	};
	
	/**
	 * works as unbinder, as you can ._bindStart( false ) to unbind
	 * @param {Boolean} isBind - will unbind if falsey
	 */
	Unipointer.prototype._bindStartEvent = function( elem, isBind ) {
	  // munge isBind, default to true
	  isBind = isBind === undefined ? true : !!isBind;
	  var bindMethod = isBind ? 'bind' : 'unbind';
	
	  if ( window.navigator.pointerEnabled ) {
	    // W3C Pointer Events, IE11. See https://coderwall.com/p/mfreca
	    eventie[ bindMethod ]( elem, 'pointerdown', this );
	  } else if ( window.navigator.msPointerEnabled ) {
	    // IE10 Pointer Events
	    eventie[ bindMethod ]( elem, 'MSPointerDown', this );
	  } else {
	    // listen for both, for devices like Chrome Pixel
	    eventie[ bindMethod ]( elem, 'mousedown', this );
	    eventie[ bindMethod ]( elem, 'touchstart', this );
	  }
	};
	
	// trigger handler methods for events
	Unipointer.prototype.handleEvent = function( event ) {
	  var method = 'on' + event.type;
	  if ( this[ method ] ) {
	    this[ method ]( event );
	  }
	};
	
	// returns the touch that we're keeping track of
	Unipointer.prototype.getTouch = function( touches ) {
	  for ( var i=0, len = touches.length; i < len; i++ ) {
	    var touch = touches[i];
	    if ( touch.identifier == this.pointerIdentifier ) {
	      return touch;
	    }
	  }
	};
	
	// ----- start event ----- //
	
	Unipointer.prototype.onmousedown = function( event ) {
	  // dismiss clicks from right or middle buttons
	  var button = event.button;
	  if ( button && ( button !== 0 && button !== 1 ) ) {
	    return;
	  }
	  this._pointerDown( event, event );
	};
	
	Unipointer.prototype.ontouchstart = function( event ) {
	  this._pointerDown( event, event.changedTouches[0] );
	};
	
	Unipointer.prototype.onMSPointerDown =
	Unipointer.prototype.onpointerdown = function( event ) {
	  this._pointerDown( event, event );
	};
	
	/**
	 * pointer start
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	Unipointer.prototype._pointerDown = function( event, pointer ) {
	  // dismiss other pointers
	  if ( this.isPointerDown ) {
	    return;
	  }
	
	  this.isPointerDown = true;
	  // save pointer identifier to match up touch events
	  this.pointerIdentifier = pointer.pointerId !== undefined ?
	    // pointerId for pointer events, touch.indentifier for touch events
	    pointer.pointerId : pointer.identifier;
	
	  this.pointerDown( event, pointer );
	};
	
	Unipointer.prototype.pointerDown = function( event, pointer ) {
	  this._bindPostStartEvents( event );
	  this.emitEvent( 'pointerDown', [ event, pointer ] );
	};
	
	// hash of events to be bound after start event
	var postStartEvents = {
	  mousedown: [ 'mousemove', 'mouseup' ],
	  touchstart: [ 'touchmove', 'touchend', 'touchcancel' ],
	  pointerdown: [ 'pointermove', 'pointerup', 'pointercancel' ],
	  MSPointerDown: [ 'MSPointerMove', 'MSPointerUp', 'MSPointerCancel' ]
	};
	
	Unipointer.prototype._bindPostStartEvents = function( event ) {
	  if ( !event ) {
	    return;
	  }
	  // get proper events to match start event
	  var events = postStartEvents[ event.type ];
	  // IE8 needs to be bound to document
	  var node = event.preventDefault ? window : document;
	  // bind events to node
	  for ( var i=0, len = events.length; i < len; i++ ) {
	    var evnt = events[i];
	    eventie.bind( node, evnt, this );
	  }
	  // save these arguments
	  this._boundPointerEvents = {
	    events: events,
	    node: node
	  };
	};
	
	Unipointer.prototype._unbindPostStartEvents = function() {
	  var args = this._boundPointerEvents;
	  // IE8 can trigger dragEnd twice, check for _boundEvents
	  if ( !args || !args.events ) {
	    return;
	  }
	
	  for ( var i=0, len = args.events.length; i < len; i++ ) {
	    var event = args.events[i];
	    eventie.unbind( args.node, event, this );
	  }
	  delete this._boundPointerEvents;
	};
	
	// ----- move event ----- //
	
	Unipointer.prototype.onmousemove = function( event ) {
	  this._pointerMove( event, event );
	};
	
	Unipointer.prototype.onMSPointerMove =
	Unipointer.prototype.onpointermove = function( event ) {
	  if ( event.pointerId == this.pointerIdentifier ) {
	    this._pointerMove( event, event );
	  }
	};
	
	Unipointer.prototype.ontouchmove = function( event ) {
	  var touch = this.getTouch( event.changedTouches );
	  if ( touch ) {
	    this._pointerMove( event, touch );
	  }
	};
	
	/**
	 * pointer move
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 * @private
	 */
	Unipointer.prototype._pointerMove = function( event, pointer ) {
	  this.pointerMove( event, pointer );
	};
	
	// public
	Unipointer.prototype.pointerMove = function( event, pointer ) {
	  this.emitEvent( 'pointerMove', [ event, pointer ] );
	};
	
	// ----- end event ----- //
	
	
	Unipointer.prototype.onmouseup = function( event ) {
	  this._pointerUp( event, event );
	};
	
	Unipointer.prototype.onMSPointerUp =
	Unipointer.prototype.onpointerup = function( event ) {
	  if ( event.pointerId == this.pointerIdentifier ) {
	    this._pointerUp( event, event );
	  }
	};
	
	Unipointer.prototype.ontouchend = function( event ) {
	  var touch = this.getTouch( event.changedTouches );
	  if ( touch ) {
	    this._pointerUp( event, touch );
	  }
	};
	
	/**
	 * pointer up
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 * @private
	 */
	Unipointer.prototype._pointerUp = function( event, pointer ) {
	  this._pointerDone();
	  this.pointerUp( event, pointer );
	};
	
	// public
	Unipointer.prototype.pointerUp = function( event, pointer ) {
	  this.emitEvent( 'pointerUp', [ event, pointer ] );
	};
	
	// ----- pointer done ----- //
	
	// triggered on pointer up & pointer cancel
	Unipointer.prototype._pointerDone = function() {
	  // reset properties
	  this.isPointerDown = false;
	  delete this.pointerIdentifier;
	  // remove events
	  this._unbindPostStartEvents();
	  this.pointerDone();
	};
	
	Unipointer.prototype.pointerDone = noop;
	
	// ----- pointer cancel ----- //
	
	Unipointer.prototype.onMSPointerCancel =
	Unipointer.prototype.onpointercancel = function( event ) {
	  if ( event.pointerId == this.pointerIdentifier ) {
	    this._pointerCancel( event, event );
	  }
	};
	
	Unipointer.prototype.ontouchcancel = function( event ) {
	  var touch = this.getTouch( event.changedTouches );
	  if ( touch ) {
	    this._pointerCancel( event, touch );
	  }
	};
	
	/**
	 * pointer cancel
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 * @private
	 */
	Unipointer.prototype._pointerCancel = function( event, pointer ) {
	  this._pointerDone();
	  this.pointerCancel( event, pointer );
	};
	
	// public
	Unipointer.prototype.pointerCancel = function( event, pointer ) {
	  this.emitEvent( 'pointerCancel', [ event, pointer ] );
	};
	
	// -----  ----- //
	
	// utility function for getting x/y cooridinates from event, because IE8
	Unipointer.getPointerPoint = function( pointer ) {
	  return {
	    x: pointer.pageX !== undefined ? pointer.pageX : pointer.clientX,
	    y: pointer.pageY !== undefined ? pointer.pageY : pointer.clientY
	  };
	};
	
	// -----  ----- //
	
	return Unipointer;
	
	}));
	
	}.call(window));

/***/ },
/* 180 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;
	(function() {
	
	/*!
	 * EventEmitter v4.2.11 - git.io/ee
	 * Unlicense - http://unlicense.org/
	 * Oliver Caldwell - http://oli.me.uk/
	 * @preserve
	 */
	
	;(function () {
	    'use strict';
	
	    /**
	     * Class for managing events.
	     * Can be extended to provide event functionality in other classes.
	     *
	     * @class EventEmitter Manages event registering and emitting.
	     */
	    function EventEmitter() {}
	
	    // Shortcuts to improve speed and size
	    var proto = EventEmitter.prototype;
	    var exports = this;
	    var originalGlobalValue = exports.EventEmitter;
	
	    /**
	     * Finds the index of the listener for the event in its storage array.
	     *
	     * @param {Function[]} listeners Array of listeners to search through.
	     * @param {Function} listener Method to look for.
	     * @return {Number} Index of the specified listener, -1 if not found
	     * @api private
	     */
	    function indexOfListener(listeners, listener) {
	        var i = listeners.length;
	        while (i--) {
	            if (listeners[i].listener === listener) {
	                return i;
	            }
	        }
	
	        return -1;
	    }
	
	    /**
	     * Alias a method while keeping the context correct, to allow for overwriting of target method.
	     *
	     * @param {String} name The name of the target method.
	     * @return {Function} The aliased method
	     * @api private
	     */
	    function alias(name) {
	        return function aliasClosure() {
	            return this[name].apply(this, arguments);
	        };
	    }
	
	    /**
	     * Returns the listener array for the specified event.
	     * Will initialise the event object and listener arrays if required.
	     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
	     * Each property in the object response is an array of listener functions.
	     *
	     * @param {String|RegExp} evt Name of the event to return the listeners from.
	     * @return {Function[]|Object} All listener functions for the event.
	     */
	    proto.getListeners = function getListeners(evt) {
	        var events = this._getEvents();
	        var response;
	        var key;
	
	        // Return a concatenated array of all matching events if
	        // the selector is a regular expression.
	        if (evt instanceof RegExp) {
	            response = {};
	            for (key in events) {
	                if (events.hasOwnProperty(key) && evt.test(key)) {
	                    response[key] = events[key];
	                }
	            }
	        }
	        else {
	            response = events[evt] || (events[evt] = []);
	        }
	
	        return response;
	    };
	
	    /**
	     * Takes a list of listener objects and flattens it into a list of listener functions.
	     *
	     * @param {Object[]} listeners Raw listener objects.
	     * @return {Function[]} Just the listener functions.
	     */
	    proto.flattenListeners = function flattenListeners(listeners) {
	        var flatListeners = [];
	        var i;
	
	        for (i = 0; i < listeners.length; i += 1) {
	            flatListeners.push(listeners[i].listener);
	        }
	
	        return flatListeners;
	    };
	
	    /**
	     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
	     *
	     * @param {String|RegExp} evt Name of the event to return the listeners from.
	     * @return {Object} All listener functions for an event in an object.
	     */
	    proto.getListenersAsObject = function getListenersAsObject(evt) {
	        var listeners = this.getListeners(evt);
	        var response;
	
	        if (listeners instanceof Array) {
	            response = {};
	            response[evt] = listeners;
	        }
	
	        return response || listeners;
	    };
	
	    /**
	     * Adds a listener function to the specified event.
	     * The listener will not be added if it is a duplicate.
	     * If the listener returns true then it will be removed after it is called.
	     * If you pass a regular expression as the event name then the listener will be added to all events that match it.
	     *
	     * @param {String|RegExp} evt Name of the event to attach the listener to.
	     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.addListener = function addListener(evt, listener) {
	        var listeners = this.getListenersAsObject(evt);
	        var listenerIsWrapped = typeof listener === 'object';
	        var key;
	
	        for (key in listeners) {
	            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
	                listeners[key].push(listenerIsWrapped ? listener : {
	                    listener: listener,
	                    once: false
	                });
	            }
	        }
	
	        return this;
	    };
	
	    /**
	     * Alias of addListener
	     */
	    proto.on = alias('addListener');
	
	    /**
	     * Semi-alias of addListener. It will add a listener that will be
	     * automatically removed after its first execution.
	     *
	     * @param {String|RegExp} evt Name of the event to attach the listener to.
	     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.addOnceListener = function addOnceListener(evt, listener) {
	        return this.addListener(evt, {
	            listener: listener,
	            once: true
	        });
	    };
	
	    /**
	     * Alias of addOnceListener.
	     */
	    proto.once = alias('addOnceListener');
	
	    /**
	     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
	     * You need to tell it what event names should be matched by a regex.
	     *
	     * @param {String} evt Name of the event to create.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.defineEvent = function defineEvent(evt) {
	        this.getListeners(evt);
	        return this;
	    };
	
	    /**
	     * Uses defineEvent to define multiple events.
	     *
	     * @param {String[]} evts An array of event names to define.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.defineEvents = function defineEvents(evts) {
	        for (var i = 0; i < evts.length; i += 1) {
	            this.defineEvent(evts[i]);
	        }
	        return this;
	    };
	
	    /**
	     * Removes a listener function from the specified event.
	     * When passed a regular expression as the event name, it will remove the listener from all events that match it.
	     *
	     * @param {String|RegExp} evt Name of the event to remove the listener from.
	     * @param {Function} listener Method to remove from the event.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.removeListener = function removeListener(evt, listener) {
	        var listeners = this.getListenersAsObject(evt);
	        var index;
	        var key;
	
	        for (key in listeners) {
	            if (listeners.hasOwnProperty(key)) {
	                index = indexOfListener(listeners[key], listener);
	
	                if (index !== -1) {
	                    listeners[key].splice(index, 1);
	                }
	            }
	        }
	
	        return this;
	    };
	
	    /**
	     * Alias of removeListener
	     */
	    proto.off = alias('removeListener');
	
	    /**
	     * Adds listeners in bulk using the manipulateListeners method.
	     * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
	     * You can also pass it a regular expression to add the array of listeners to all events that match it.
	     * Yeah, this function does quite a bit. That's probably a bad thing.
	     *
	     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
	     * @param {Function[]} [listeners] An optional array of listener functions to add.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.addListeners = function addListeners(evt, listeners) {
	        // Pass through to manipulateListeners
	        return this.manipulateListeners(false, evt, listeners);
	    };
	
	    /**
	     * Removes listeners in bulk using the manipulateListeners method.
	     * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	     * You can also pass it an event name and an array of listeners to be removed.
	     * You can also pass it a regular expression to remove the listeners from all events that match it.
	     *
	     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
	     * @param {Function[]} [listeners] An optional array of listener functions to remove.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.removeListeners = function removeListeners(evt, listeners) {
	        // Pass through to manipulateListeners
	        return this.manipulateListeners(true, evt, listeners);
	    };
	
	    /**
	     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
	     * The first argument will determine if the listeners are removed (true) or added (false).
	     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	     * You can also pass it an event name and an array of listeners to be added/removed.
	     * You can also pass it a regular expression to manipulate the listeners of all events that match it.
	     *
	     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
	     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
	     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
	        var i;
	        var value;
	        var single = remove ? this.removeListener : this.addListener;
	        var multiple = remove ? this.removeListeners : this.addListeners;
	
	        // If evt is an object then pass each of its properties to this method
	        if (typeof evt === 'object' && !(evt instanceof RegExp)) {
	            for (i in evt) {
	                if (evt.hasOwnProperty(i) && (value = evt[i])) {
	                    // Pass the single listener straight through to the singular method
	                    if (typeof value === 'function') {
	                        single.call(this, i, value);
	                    }
	                    else {
	                        // Otherwise pass back to the multiple function
	                        multiple.call(this, i, value);
	                    }
	                }
	            }
	        }
	        else {
	            // So evt must be a string
	            // And listeners must be an array of listeners
	            // Loop over it and pass each one to the multiple method
	            i = listeners.length;
	            while (i--) {
	                single.call(this, evt, listeners[i]);
	            }
	        }
	
	        return this;
	    };
	
	    /**
	     * Removes all listeners from a specified event.
	     * If you do not specify an event then all listeners will be removed.
	     * That means every event will be emptied.
	     * You can also pass a regex to remove all events that match it.
	     *
	     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.removeEvent = function removeEvent(evt) {
	        var type = typeof evt;
	        var events = this._getEvents();
	        var key;
	
	        // Remove different things depending on the state of evt
	        if (type === 'string') {
	            // Remove all listeners for the specified event
	            delete events[evt];
	        }
	        else if (evt instanceof RegExp) {
	            // Remove all events matching the regex.
	            for (key in events) {
	                if (events.hasOwnProperty(key) && evt.test(key)) {
	                    delete events[key];
	                }
	            }
	        }
	        else {
	            // Remove all listeners in all events
	            delete this._events;
	        }
	
	        return this;
	    };
	
	    /**
	     * Alias of removeEvent.
	     *
	     * Added to mirror the node API.
	     */
	    proto.removeAllListeners = alias('removeEvent');
	
	    /**
	     * Emits an event of your choice.
	     * When emitted, every listener attached to that event will be executed.
	     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
	     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
	     * So they will not arrive within the array on the other side, they will be separate.
	     * You can also pass a regular expression to emit to all events that match it.
	     *
	     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	     * @param {Array} [args] Optional array of arguments to be passed to each listener.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.emitEvent = function emitEvent(evt, args) {
	        var listeners = this.getListenersAsObject(evt);
	        var listener;
	        var i;
	        var key;
	        var response;
	
	        for (key in listeners) {
	            if (listeners.hasOwnProperty(key)) {
	                i = listeners[key].length;
	
	                while (i--) {
	                    // If the listener returns true then it shall be removed from the event
	                    // The function is executed either with a basic call or an apply if there is an args array
	                    listener = listeners[key][i];
	
	                    if (listener.once === true) {
	                        this.removeListener(evt, listener.listener);
	                    }
	
	                    response = listener.listener.apply(this, args || []);
	
	                    if (response === this._getOnceReturnValue()) {
	                        this.removeListener(evt, listener.listener);
	                    }
	                }
	            }
	        }
	
	        return this;
	    };
	
	    /**
	     * Alias of emitEvent
	     */
	    proto.trigger = alias('emitEvent');
	
	    /**
	     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
	     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
	     *
	     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	     * @param {...*} Optional additional arguments to be passed to each listener.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.emit = function emit(evt) {
	        var args = Array.prototype.slice.call(arguments, 1);
	        return this.emitEvent(evt, args);
	    };
	
	    /**
	     * Sets the current value to check against when executing listeners. If a
	     * listeners return value matches the one set here then it will be removed
	     * after execution. This value defaults to true.
	     *
	     * @param {*} value The new value to check for when executing listeners.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.setOnceReturnValue = function setOnceReturnValue(value) {
	        this._onceReturnValue = value;
	        return this;
	    };
	
	    /**
	     * Fetches the current value to check against when executing listeners. If
	     * the listeners return value matches this one then it should be removed
	     * automatically. It will return true by default.
	     *
	     * @return {*|Boolean} The current value to check for or the default, true.
	     * @api private
	     */
	    proto._getOnceReturnValue = function _getOnceReturnValue() {
	        if (this.hasOwnProperty('_onceReturnValue')) {
	            return this._onceReturnValue;
	        }
	        else {
	            return true;
	        }
	    };
	
	    /**
	     * Fetches the events object and creates one if required.
	     *
	     * @return {Object} The events storage object.
	     * @api private
	     */
	    proto._getEvents = function _getEvents() {
	        return this._events || (this._events = {});
	    };
	
	    /**
	     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
	     *
	     * @return {Function} Non conflicting EventEmitter class.
	     */
	    EventEmitter.noConflict = function noConflict() {
	        exports.EventEmitter = originalGlobalValue;
	        return EventEmitter;
	    };
	
	    // Expose the class either via AMD, CommonJS or the global object
	    if (typeof define === 'function' && define.amd) {
	        define(function () {
	            return EventEmitter;
	        });
	    }
	    else if (typeof module === 'object' && module.exports){
	        module.exports = EventEmitter;
	    }
	    else {
	        exports.EventEmitter = EventEmitter;
	    }
	}.call(this));
	
	}.call(window));

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "ui-slider",
	    class: {
	      min: value === 0, max: value === 100, dragging: dragging, disabled: disabled,
	        active: active, 'has-label': hasLabel
	    },
	    attrs: {
	      "id": id,
	      "tabindex": disabled ? null : 0,
	      "role": "slider",
	      "aria-valuemin": 0,
	      "aria-valuemax": 100,
	      "aria-valuenow": value
	    },
	    on: {
	      "keydown": [function($event) {
	        if ($event.keyCode !== 37) return;
	        $event.preventDefault();
	        decrement($event)
	      }, function($event) {
	        if ($event.keyCode !== 39) return;
	        $event.preventDefault();
	        increment($event)
	      }, function($event) {
	        if ($event.keyCode !== 40) return;
	        $event.preventDefault();
	        decrement($event)
	      }, function($event) {
	        if ($event.keyCode !== 38) return;
	        $event.preventDefault();
	        increment($event)
	      }],
	      "focus": focus,
	      "blur": blur
	    }
	  }, [_h('input', {
	    attrs: {
	      "type": "hidden",
	      "name": name
	    },
	    domProps: {
	      "value": value
	    }
	  }), " ", (showIcon) ? _h('div', {
	    staticClass: "ui-slider-icon-wrapper"
	  }, [_h('ui-icon', {
	    staticClass: "ui-slider-icon",
	    attrs: {
	      "icon": icon
	    }
	  })]) : _e(), " ", _h('div', {
	    staticClass: "ui-slider-content"
	  }, [(!hideLabel) ? _h('div', {
	    staticClass: "ui-slider-label",
	    domProps: {
	      "textContent": _s(label)
	    }
	  }) : _e(), " ", _h('div', {
	    ref: "slider",
	    staticClass: "ui-slider-wrapper",
	    on: {
	      "mousedown": sliderClick
	    }
	  }, [_h('div', {
	    ref: "containment",
	    staticClass: "ui-slider-containment"
	  }), " ", _h('div', {
	    staticClass: "ui-slider-track"
	  }, [_h('div', {
	    staticClass: "ui-slider-track-fill",
	    style: ({
	      width: value + '%'
	    })
	  })]), " ", _h('div', {
	    ref: "thumb",
	    staticClass: "ui-slider-thumb-container"
	  }, [_m(0), " ", _m(1)])])])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('div', {
	    staticClass: "ui-slider-focus-ring"
	  })
	}},function (){with(this) {
	  return _h('div', {
	    staticClass: "ui-slider-thumb"
	  })
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-20", module.exports)
	  }
	}

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(183)
	
	/* script */
	__vue_exports__ = __webpack_require__(184)
	
	/* template */
	var __vue_template__ = __webpack_require__(185)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-24", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-24", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiSnackbar.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 183 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _UiButton = __webpack_require__(111);
	
	var _UiButton2 = _interopRequireDefault(_UiButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-snackbar',
	
	    props: {
	        id: String,
	        value: {
	            type: Boolean,
	            default: false
	        },
	        message: String,
	        action: String,
	        actionColor: {
	            type: String,
	            default: 'accent' },
	        persistent: {
	            type: Boolean,
	            default: false
	        },
	        duration: {
	            type: Number,
	            default: 5000
	        },
	        autoHide: {
	            type: Boolean,
	            default: true
	        }
	    },
	
	    data: function data() {
	        return {
	            height: 0,
	            timeout: null
	        };
	    },
	    beforeDestroy: function beforeDestroy() {
	        if (this.timeout) {
	            clearTimeout(this.timeout);
	        }
	    },
	
	
	    methods: {
	        click: function click() {
	            this.$emit('clicked');
	            this.hide();
	        },
	        actionClick: function actionClick() {
	            this.$emit('action-clicked');
	            this.hide();
	        },
	        hide: function hide() {
	            if (!this.persistent) {
	                this.$emit('input', false);
	            }
	        },
	        afterEnter: function afterEnter() {
	            this.$emit('shown');
	
	            if (this.autoHide) {
	                this.timeout = setTimeout(this.hide, this.duration);
	            }
	        },
	        afterLeave: function afterLeave() {
	            this.$emit('hidden');
	
	            if (this.timeout) {
	                clearTimeout(this.timeout);
	                this.timeout = null;
	            }
	        }
	    },
	
	    components: {
	        UiButton: _UiButton2.default
	    }
	};

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('transition', {
	    attrs: {
	      "name": "ui-snackbar-toggle"
	    },
	    on: {
	      "after-enter": afterEnter,
	      "after-leave": afterLeave
	    }
	  }, [_h('div', {
	    directives: [{
	      name: "show",
	      value: (value),
	      expression: "value"
	    }],
	    staticClass: "ui-snackbar",
	    attrs: {
	      "id": id
	    },
	    on: {
	      "click": click
	    }
	  }, [_h('div', {
	    staticClass: "ui-snackbar-text"
	  }, [_t("default", [_h('span', {
	    domProps: {
	      "textContent": _s(message)
	    }
	  })])]), " ", _h('div', {
	    staticClass: "ui-snackbar-action"
	  }, [(action) ? _h('ui-button', {
	    staticClass: "ui-snackbar-action-button",
	    attrs: {
	      "type": "flat",
	      "color": actionColor,
	      "text": action
	    },
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        actionClick($event)
	      }
	    }
	  }) : _e()])])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-24", module.exports)
	  }
	}

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(187)
	
	/* script */
	__vue_exports__ = __webpack_require__(188)
	
	/* template */
	var __vue_template__ = __webpack_require__(189)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-27", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-27", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiSnackbarContainer.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 187 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _uuid = __webpack_require__(91);
	
	var _uuid2 = _interopRequireDefault(_uuid);
	
	var _UiSnackbar = __webpack_require__(182);
	
	var _UiSnackbar2 = _interopRequireDefault(_UiSnackbar);
	
	var _eventBus = __webpack_require__(61);
	
	var _eventBus2 = _interopRequireDefault(_eventBus);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-snackbar-container',
	
	    props: {
	        queueSnackbars: {
	            type: Boolean,
	            default: false
	        },
	        defaultDuration: {
	            type: Number,
	            default: 5000
	        },
	        position: {
	            type: String,
	            default: 'left', coerce: function coerce(position) {
	                return 'position-' + position;
	            }
	        }
	    },
	
	    mounted: function mounted() {
	        var _this = this;
	
	        _eventBus2.default.$on('ui-snackbar::create', function (snackbar) {
	            snackbar.show = false;
	            snackbar.id = snackbar.id || _uuid2.default.short('ui-snackbar-');
	            snackbar.duration = snackbar.duration || _this.defaultDuration;
	
	            _this.queue.push(snackbar);
	
	            if (_this.queue.length === 1) {
	                _this.showNext();
	            } else {
	                if (!_this.queueSnackbars) {
	                    _this.queue[0].show = false;
	                }
	            }
	        });
	    },
	    data: function data() {
	        return {
	            queue: [] };
	    },
	
	
	    methods: {
	        showNext: function showNext() {
	            var _this2 = this;
	
	            if (!this.queue.length) {
	                return;
	            }
	
	            setTimeout(function () {
	                _this2.queue[0].show = true;
	            }, 0);
	        },
	        shown: function shown(snackbar) {
	            this.$emit('snackbar-shown', snackbar);
	            this.callHook('onShow', snackbar);
	        },
	        hidden: function hidden(snackbar) {
	            this.$emit('snackbar-hidden', snackbar);
	            this.callHook('onHide', snackbar);
	
	            this.queue.shift();
	            this.showNext();
	        },
	        clicked: function clicked(snackbar) {
	            this.callHook('onClick', snackbar);
	        },
	        actionClicked: function actionClicked(snackbar) {
	            this.callHook('onActionClick', snackbar);
	        },
	        callHook: function callHook(hook, snackbar) {
	            if (typeof snackbar[hook] === 'function') {
	                snackbar[hook].call(undefined, snackbar);
	            }
	        }
	    },
	
	    components: {
	        UiSnackbar: _UiSnackbar2.default
	    }
	};

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "ui-snackbar-container",
	    class: [position]
	  }, [(queue) && _l((queue), function(s) {
	    return _h('ui-snackbar', {
	      directives: [{
	        name: "model",
	        value: (s.show),
	        expression: "s.show"
	      }],
	      attrs: {
	        "duration": s.duration,
	        "action": s.action,
	        "action-color": s.actionColor,
	        "persistent": s.persistent,
	        "id": s.id,
	        "auto-hide": ""
	      },
	      domProps: {
	        "value": (s.show)
	      },
	      on: {
	        "shown": function($event) {
	          shown(s)
	        },
	        "hidden": function($event) {
	          hidden(s)
	        },
	        "clicked": function($event) {
	          clicked(s)
	        },
	        "action-clicked": function($event) {
	          actionClicked(s)
	        },
	        "input": function($event) {
	          s.show = $event
	        }
	      }
	    }, [(s.allowHtml) ? _h('div', {
	      domProps: {
	        "innerHTML": _s(s.message)
	      }
	    }) : _h('span', {
	      domProps: {
	        "textContent": _s(s.message)
	      }
	    }), " "])
	  })])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-27", module.exports)
	  }
	}

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(191)
	
	/* script */
	__vue_exports__ = __webpack_require__(192)
	
	/* template */
	var __vue_template__ = __webpack_require__(193)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-25", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-25", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiSwitch.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 191 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _eventBus = __webpack_require__(61);
	
	var _eventBus2 = _interopRequireDefault(_eventBus);
	
	var _ReceivesTargetedEvent = __webpack_require__(65);
	
	var _ReceivesTargetedEvent2 = _interopRequireDefault(_ReceivesTargetedEvent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-switch',
	
	    props: {
	        name: String,
	        value: {
	            type: Boolean,
	            required: true
	        },
	        label: String,
	        hideLabel: {
	            type: Boolean,
	            default: false
	        },
	        labelLeft: {
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
	            initialValue: false
	        };
	    },
	    created: function created() {
	        this.initialValue = this.value;
	    },
	    mounted: function mounted() {
	        var _this = this;
	
	        _eventBus2.default.$on('ui-input::reset', function (id) {
	            if (!_this.eventTargetsComponent(id)) {
	                return;
	            }
	            _this.$emit('input', _this.initialValue);
	        });
	    },
	
	    mixins: [_ReceivesTargetedEvent2.default]
	};

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('label', {
	    staticClass: "ui-switch",
	    class: {
	      'checked': value, 'disabled': disabled, 'label-left': labelLeft
	    }
	  }, [_h('div', {
	    staticClass: "ui-switch-container"
	  }, [_h('input', {
	    staticClass: "ui-switch-input",
	    attrs: {
	      "type": "checkbox",
	      "name": name,
	      "id": id,
	      "disabled": disabled
	    },
	    domProps: {
	      "value": value
	    },
	    on: {
	      "change": function($event) {
	        $emit('input', !value)
	      }
	    }
	  }), " ", _m(0), " ", _m(1), " ", _m(2)]), " ", (!hideLabel) ? _h('div', {
	    staticClass: "ui-switch-label-text"
	  }, [_t("default", [_h('span', {
	    domProps: {
	      "textContent": _s(label)
	    }
	  })])]) : _e()])
	}},staticRenderFns: [function (){with(this) {
	  return _h('div', {
	    staticClass: "ui-switch-track"
	  })
	}},function (){with(this) {
	  return _h('div', {
	    staticClass: "ui-switch-thumb"
	  })
	}},function (){with(this) {
	  return _h('div', {
	    staticClass: "ui-switch-focus-ring"
	  })
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-25", module.exports)
	  }
	}

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(195)
	
	/* script */
	__vue_exports__ = __webpack_require__(196)
	
	/* template */
	var __vue_template__ = __webpack_require__(197)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-26", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-26", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiTab.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 195 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _uuid = __webpack_require__(91);
	
	var _uuid2 = _interopRequireDefault(_uuid);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-tab',
	    data: function data() {
	        return {
	            id: ''
	        };
	    },
	
	    props: {
	        header: String,
	        icon: String,
	        disabled: {
	            type: Boolean,
	            default: false
	        },
	        _id: String
	    },
	
	    computed: {
	        active: function active() {
	            return this.$parent.activeTab === this.id;
	        }
	    },
	
	    watch: {
	        active: function active() {
	            if (this.active) {
	                this.$emit('selected', this.id);
	            } else {
	                this.$emit('deselected', this.id);
	            }
	        },
	        id: function id() {
	            if (this._id) {
	                this.id = this._id;
	            }
	        }
	    }
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    directives: [{
	      name: "show",
	      value: (active),
	      expression: "active"
	    }],
	    staticClass: "ui-tab",
	    attrs: {
	      "id": id,
	      "role": "tabpanel",
	      "tabindex": active ? '0' : null,
	      "aria-hidden": !active ? 'true' : null
	    }
	  }, [_t("default")])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-26", module.exports)
	  }
	}

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(199)
	
	/* script */
	__vue_exports__ = __webpack_require__(200)
	
	/* template */
	var __vue_template__ = __webpack_require__(206)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-29", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-29", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiTabs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 199 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _uuid = __webpack_require__(91);
	
	var _uuid2 = _interopRequireDefault(_uuid);
	
	var _UiTabHeaderItem = __webpack_require__(201);
	
	var _UiTabHeaderItem2 = _interopRequireDefault(_UiTabHeaderItem);
	
	var _ReceivesTargetedEvent = __webpack_require__(65);
	
	var _ReceivesTargetedEvent2 = _interopRequireDefault(_ReceivesTargetedEvent);
	
	var _eventBus = __webpack_require__(61);
	
	var _eventBus2 = _interopRequireDefault(_eventBus);
	
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
	        hideRippleInk: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    data: function data() {
	        return {
	            activeTabElement: null,
	            activeTab: String,
	            tabs: null
	        };
	    },
	
	
	    computed: {
	        styleClasses: function styleClasses() {
	            var classes = ['ui-tabs-type-' + this.type];
	
	            if (this.raised) {
	                classes.push('raised');
	            }
	
	            if (this.fullwidth) {
	                classes.push('fullwidth');
	            }
	
	            return classes;
	        },
	        indicatorLeft: function indicatorLeft() {
	            if (this.activeTabElement) {
	                return this.activeTabElement.offsetLeft + 'px';
	            }
	
	            return 0;
	        },
	        indicatorRight: function indicatorRight() {
	            if (this.activeTabElement) {
	                var left = this.activeTabElement.offsetLeft;
	                var width = this.activeTabElement.offsetWidth;
	                var tabContainerWidth = this.$refs.tabsContainer.offsetWidth;
	
	                return tabContainerWidth - (left + width) + 'px';
	            }
	        }
	    },
	
	    mounted: function mounted() {
	        var _this = this;
	
	        this.tabs = this.$children.slice(0);
	        for (var i = 0; i < this.$children.length; i++) {
	            this.$children[i].id = this.$children[i].id || _uuid2.default.short('ui-tab-');
	        }
	
	        this.activeTab = this.$children[0].id;
	
	        this.$nextTick(function () {
	            if (_this.$refs.tabsContainer) {
	                _this.activeTabElement = _this.$refs.tabsContainer.querySelector('.active');
	            }
	        });
	
	        _eventBus2.default.$on('ui-tabs::select', function (tabId, id) {
	            if (!_this.eventTargetsComponent(id)) {
	                return;
	            }
	
	            var tab = _this.findTabById(tabId);
	
	            if (tab) {
	                _this.select(tab.$el, tab);
	            }
	        });
	    },
	
	
	    methods: {
	        select: function select(e, tab) {
	            var newTabElement = e.currentTarget ? e.currentTarget : e;
	
	            if (tab.disabled || this.activeTabElement === newTabElement) {
	                return;
	            }
	
	            this.activeTabElement = newTabElement;
	            this.activeTab = tab.id;
	
	            this.$emit('active-tab-changed', tab.id);
	        },
	        selectPrev: function selectPrev(currentTabIndex) {
	            if (currentTabIndex === 0) {
	                return;
	            }
	
	            var prevTab = this.findTab(currentTabIndex);
	            this.select(prevTab.$el, prevTab);
	
	            this.activeTabElement.focus();
	        },
	        selectNext: function selectNext(currentTabIndex) {
	            if (currentTabIndex === this.$refs.tabElements.length - 1) {
	                return;
	            }
	
	            var nextTab = this.findTab(currentTabIndex, true);
	            this.select(nextTab.$el, nextTab);
	
	            this.activeTabElement.focus();
	        },
	        findTab: function findTab(currentTabIndex, next) {
	            var tab = void 0;
	
	            if (next) {
	                for (var i = currentTabIndex + 1; i < this.$refs.tabElements.length; i++) {
	                    if (!this.$refs.tabElements[i].disabled) {
	                        tab = this.$refs.tabElements[i];
	                        break;
	                    }
	                }
	            } else {
	                for (var _i = currentTabIndex - 1; _i >= 0; _i--) {
	                    if (!this.$refs.tabElements[_i].disabled) {
	                        tab = this.$refs.tabElements[_i];
	                        break;
	                    }
	                }
	            }
	
	            tab = tab || this.$refs.tabElements[currentTabIndex];
	
	            return tab;
	        },
	        findTabById: function findTabById(id) {
	            var tab = null;
	
	            var numOfTabs = this.$refs.tabElements.length;
	
	            for (var i = 0; i < numOfTabs; i++) {
	                console.log(this.$refs.tabElements[i].id);
	                if (id === this.$refs.tabElements[i].id) {
	                    tab = this.$refs.tabElements[i];
	                    break;
	                }
	            }
	
	            return tab;
	        }
	    },
	
	    components: {
	        UiTabHeaderItem: _UiTabHeaderItem2.default
	    },
	
	    mixins: [_ReceivesTargetedEvent2.default]
	};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(202)
	
	/* script */
	__vue_exports__ = __webpack_require__(203)
	
	/* template */
	var __vue_template__ = __webpack_require__(205)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-34", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-34", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiTabHeaderItem.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 202 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _UiIcon = __webpack_require__(6);
	
	var _UiIcon2 = _interopRequireDefault(_UiIcon);
	
	var _disabled = __webpack_require__(204);
	
	var _disabled2 = _interopRequireDefault(_disabled);
	
	var _ShowsRippleInk = __webpack_require__(19);
	
	var _ShowsRippleInk2 = _interopRequireDefault(_ShowsRippleInk);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-tab-header-item',
	
	    props: {
	        id: String,
	        type: {
	            type: String,
	            default: 'text' },
	        text: String,
	        icon: String,
	        active: {
	            type: Boolean,
	            default: false
	        },
	        disabled: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    components: {
	        UiIcon: _UiIcon2.default
	    },
	
	    mixins: [_ShowsRippleInk2.default],
	
	    directives: {
	        disabled: _disabled2.default
	    }
	};

/***/ },
/* 204 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (el, value) {
	    el.disabled = Boolean(value);
	};

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('li', {
	    directives: [{
	      name: "disabled",
	      value: (disabled),
	      expression: "disabled"
	    }],
	    ref: "item",
	    staticClass: "ui-tab-header-item",
	    class: ['type-' + type, {
	      'active': active,
	      'disabled': disabled
	    }],
	    attrs: {
	      "role": "tab",
	      "tabindex": active ? 0 : -1,
	      "aria-controls": id,
	      "aria-selected": active ? 'true' : null
	    }
	  }, [(type === 'icon' || type === 'icon-and-text') ? _h('div', {
	    staticClass: "ui-tab-header-item-icon"
	  }, [_h('ui-icon', {
	    attrs: {
	      "icon": icon
	    }
	  })]) : _e(), " ", (type === 'text' || type === 'icon-and-text') ? _h('div', {
	    staticClass: "ui-tab-header-item-text",
	    domProps: {
	      "textContent": _s(text)
	    }
	  }) : _e(), " ", (!hideRippleInk && !disabled) ? _h('ui-ripple-ink') : _e()])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-34", module.exports)
	  }
	}

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "ui-tabs",
	    class: styleClasses
	  }, [_h('div', {
	    staticClass: "ui-tabs-header",
	    class: ['background-color-' + backgroundColor]
	  }, [_h('ul', {
	    ref: "tabsContainer",
	    staticClass: "ui-tabs-header-items",
	    class: ['text-color-' + textColor, 'text-color-active-' + textColorActive],
	    attrs: {
	      "role": "tablist"
	    }
	  }, [(tabs) && _l((tabs), function(tab, index) {
	    return _h('ui-tab-header-item', {
	      ref: "tabElements",
	      refInFor: true,
	      attrs: {
	        "type": type,
	        "id": tab.id,
	        "icon": tab.icon,
	        "text": tab.header,
	        "active": activeTab === tab.id,
	        "disabled": tab.disabled,
	        "hide-ripple-ink": hideRippleInk
	      },
	      on: {
	        "keydown": [function($event) {
	          if ($event.keyCode !== 37) return;
	          selectPrev(index)
	        }, function($event) {
	          if ($event.keyCode !== 39) return;
	          selectNext(index)
	        }]
	      },
	      nativeOn: {
	        "click": function($event) {
	          select($event, tab)
	        }
	      }
	    })
	  })]), " ", _h('div', {
	    staticClass: "ui-tabs-active-tab-indicator",
	    class: ['color-' + indicatorColor],
	    style: ({
	      'left': indicatorLeft,
	      'right': indicatorRight
	    })
	  })]), " ", _h('div', {
	    ref: "body",
	    staticClass: "ui-tabs-body"
	  }, [_t("default")])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-29", module.exports)
	  }
	}

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(208)
	
	/* script */
	__vue_exports__ = __webpack_require__(209)
	
	/* template */
	var __vue_template__ = __webpack_require__(211)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-28", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-28", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiTextbox.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 208 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _UiIcon = __webpack_require__(6);
	
	var _UiIcon2 = _interopRequireDefault(_UiIcon);
	
	var _eventBus = __webpack_require__(61);
	
	var _eventBus2 = _interopRequireDefault(_eventBus);
	
	var _autofocus = __webpack_require__(210);
	
	var _autofocus2 = _interopRequireDefault(_autofocus);
	
	var _HasTextInput = __webpack_require__(93);
	
	var _HasTextInput2 = _interopRequireDefault(_HasTextInput);
	
	var _ValidatesInput = __webpack_require__(94);
	
	var _ValidatesInput2 = _interopRequireDefault(_ValidatesInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-textbox',
	
	    props: {
	        value: {
	            type: [String, Number],
	            required: true
	        },
	        type: {
	            type: String,
	            default: 'text'
	        },
	        multiLine: {
	            type: Boolean,
	            default: false
	        },
	        rows: {
	            type: Number,
	            default: 2
	        },
	        maxLength: Number,
	        trimValue: {
	            type: Boolean,
	            default: true
	        },
	        validateOnBlur: {
	            type: Boolean,
	            default: false
	        },
	        autocomplete: String,
	        autofocus: {
	            type: Boolean,
	            default: false
	        },
	        min: Number,
	        max: Number,
	        step: {
	            type: String,
	            default: 'any',
	            coerce: String
	        }
	    },
	
	    watch: {
	        value: function value() {
	            if (this.ignoreValueChange) {
	                return;
	            }
	
	            if (!this.dirty) {
	                this.dirty = true;
	            }
	
	            if (!this.validateOnBlur) {
	                this.validate();
	            }
	        }
	    },
	
	    data: function data() {
	        return {
	            ignoreValueChange: false
	        };
	    },
	
	
	    computed: {
	        showIcon: function showIcon() {
	            return Boolean(this.icon);
	        },
	        minValue: function minValue() {
	            if (this.type !== 'number') {
	                return null;
	            }
	
	            if (this.min || this.min === 0) {
	                return this.min;
	            }
	
	            return null;
	        },
	        maxValue: function maxValue() {
	            if (this.type !== 'number') {
	                return null;
	            }
	
	            if (this.max || this.max === 0) {
	                return this.max;
	            }
	
	            return null;
	        },
	        stepValue: function stepValue() {
	            if (this.type === 'number') {
	                return this.step;
	            }
	
	            return null;
	        }
	    },
	
	    mounted: function mounted() {
	        var _this = this;
	
	        _eventBus2.default.$on('ui-input::reset', function (id) {
	            if (!_this.eventTargetsComponent(id)) {
	                return;
	            }
	
	            _this.ignoreValueChange = true;
	
	            if (document.activeElement === _this.$el.querySelector('input') || document.activeElement === _this.$el.querySelector('textarea')) {
	                document.activeElement.blur();
	            }
	
	            _this.$emit('input', _this.initialValue);
	            _this.validationError = '';
	            _this.valid = true;
	            _this.dirty = false;
	
	            _this.$nextTick(function () {
	                _this.ignoreValueChange = false;
	            });
	        });
	    },
	
	
	    methods: {
	        focussed: function focussed() {
	            this.active = true;
	            this.$emit('focussed');
	        },
	        blurred: function blurred() {
	            this.active = false;
	
	            if (!this.dirty) {
	                this.dirty = true;
	            }
	
	            this.$emit('blurred');
	            this.validate();
	        },
	        changed: function changed(e) {
	            this.$emit('input', e.target.value);
	            this.$emit('changed');
	        },
	        keydown: function keydown(e) {
	            this.$emit('keydown', e);
	        },
	        keydownEnter: function keydownEnter(e) {
	            this.$emit('keydown-enter', e);
	        }
	    },
	
	    filters: {
	        trim: {
	            write: function write(value) {
	                if (this.type !== 'number' && this.trimValue) {
	                    return value.trim();
	                }
	
	                return value;
	            }
	        }
	    },
	
	    components: {
	        UiIcon: _UiIcon2.default
	    },
	
	    directives: {
	        autofocus: _autofocus2.default
	    },
	
	    mixins: [_HasTextInput2.default, _ValidatesInput2.default]
	};

/***/ },
/* 210 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (el, value) {
	    el.autofocus = Boolean(value);
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "ui-textbox",
	    class: {
	      'disabled': disabled, 'invalid': !valid, 'dirty': dirty, 'active': active,
	      'has-label': !hideLabel, 'is-multi-line': multiLine, 'icon-right': iconRight,
	      'has-counter': maxLength
	    }
	  }, [(showIcon) ? _h('div', {
	    staticClass: "ui-textbox-icon-wrapper"
	  }, [_h('ui-icon', {
	    staticClass: "ui-textbox-icon",
	    attrs: {
	      "icon": icon
	    }
	  })]) : _e(), " ", _h('div', {
	    staticClass: "ui-textbox-content"
	  }, [_h('label', {
	    staticClass: "ui-textbox-label"
	  }, [(!hideLabel) ? _h('div', {
	    staticClass: "ui-textbox-label-text",
	    domProps: {
	      "textContent": _s(label)
	    }
	  }) : _e(), " ", (!multiLine) ? _h('input', {
	    directives: [{
	      name: "autofocus",
	      value: (autofocus),
	      expression: "autofocus"
	    }],
	    staticClass: "ui-textbox-input",
	    attrs: {
	      "type": type,
	      "placeholder": placeholder,
	      "name": name,
	      "id": id,
	      "number": type === 'number' ? true : null,
	      "min": minValue,
	      "max": maxValue,
	      "step": stepValue,
	      "autocomplete": autocomplete ? autocomplete : null,
	      "debounce": debounce,
	      "disabled": disabled
	    },
	    domProps: {
	      "value": value
	    },
	    on: {
	      "focus": focussed,
	      "blur": blurred,
	      "input": function($event) {
	        changed($event)
	      },
	      "keydown": [keydown, function($event) {
	        if ($event.keyCode !== 13) return;
	        keydownEnter($event)
	      }]
	    }
	  }) : _h('textarea', {
	    staticClass: "ui-textbox-textarea",
	    attrs: {
	      "placeholder": placeholder,
	      "name": name,
	      "id": id,
	      "rows": rows,
	      "debounce": debounce,
	      "disabled": disabled
	    },
	    domProps: {
	      "value": value
	    },
	    on: {
	      "focus": focussed,
	      "blur": blurred,
	      "input": function($event) {
	        changed($event)
	      },
	      "keydown": [keydown, function($event) {
	        if ($event.keyCode !== 13) return;
	        keydownEnter($event)
	      }]
	    }
	  }), " "]), " ", (showFeedback || maxLength) ? _h('div', {
	    staticClass: "ui-textbox-feedback"
	  }, [(!hideValidationErrors && !valid) ? _h('div', {
	    staticClass: "ui-textbox-error-text",
	    attrs: {
	      "transition": "ui-textbox-feedback-toggle"
	    },
	    domProps: {
	      "textContent": _s(validationError)
	    }
	  }) : _h('div', {
	    staticClass: "ui-textbox-help-text",
	    attrs: {
	      "transition": "ui-textbox-feedback-toggle"
	    },
	    domProps: {
	      "textContent": _s(helpText)
	    }
	  }), " ", " ", (maxLength) ? _h('div', {
	    staticClass: "ui-textbox-counter",
	    domProps: {
	      "textContent": _s(value.length + '/' + maxLength)
	    }
	  }) : _e()]) : _e()])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-28", module.exports)
	  }
	}

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(213)
	
	/* script */
	__vue_exports__ = __webpack_require__(214)
	
	/* template */
	var __vue_template__ = __webpack_require__(215)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-30", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-30", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] UiToolbar.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 213 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _UiProgressLinear = __webpack_require__(139);
	
	var _UiProgressLinear2 = _interopRequireDefault(_UiProgressLinear);
	
	var _UiIconButton = __webpack_require__(10);
	
	var _UiIconButton2 = _interopRequireDefault(_UiIconButton);
	
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
	        showBrand: {
	            type: Boolean,
	            default: false
	        },
	        showBrandDivider: {
	            type: Boolean,
	            default: null
	        },
	        navIcon: {
	            type: String,
	            default: 'menu'
	        },
	        hideNavIcon: {
	            type: Boolean,
	            default: false
	        },
	        flat: {
	            type: Boolean,
	            default: false
	        },
	        preloaderTop: {
	            type: Boolean,
	            default: false
	        },
	        loading: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    computed: {
	        styleClasses: function styleClasses() {
	            var classes = ['ui-toolbar-' + this.type, 'text-color-' + this.textColor];
	
	            if (!this.flat) {
	                classes.push('ui-toolbar-raised');
	            }
	
	            return classes;
	        },
	        iconColor: function iconColor() {
	            if (this.textColor === 'black') {
	                return 'black';
	            }
	
	            return 'white';
	        },
	        preloaderColor: function preloaderColor() {
	            if (this.textColor === 'black') {
	                return 'primary';
	            }
	
	            return 'white';
	        },
	        brandDividerVisible: function brandDividerVisible() {
	            if (this.showBrandDivider !== null) {
	                return this.showBrandDivider;
	            }
	
	            if (!this.showBrand) {
	                return false;
	            }
	
	            return true;
	        }
	    },
	
	    methods: {
	        navIconClick: function navIconClick() {
	            this.$emit('nav-icon-clicked');
	        }
	    },
	
	    components: {
	        UiProgressLinear: _UiProgressLinear2.default,
	        UiIconButton: _UiIconButton2.default
	    }
	};

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "ui-toolbar",
	    class: styleClasses
	  }, [_h('div', {
	    staticClass: "ui-toolbar-left"
	  }, [(!hideNavIcon) ? _h('ui-icon-button', {
	    staticClass: "ui-toolbar-nav-icon",
	    attrs: {
	      "type": "clear",
	      "color": iconColor,
	      "icon": navIcon
	    },
	    nativeOn: {
	      "click": function($event) {
	        navIconClick($event)
	      }
	    }
	  }) : _e(), " ", (showBrand) ? _h('div', {
	    staticClass: "ui-toolbar-brand"
	  }, [_t("brand", [_h('div', {
	    staticClass: "ui-toolbar-brand-text",
	    domProps: {
	      "textContent": _s(brand)
	    }
	  })])]) : _e()]), " ", _h('div', {
	    staticClass: "ui-toolbar-center"
	  }, [(brandDividerVisible) ? _h('div', {
	    staticClass: "ui-toolbar-divider"
	  }) : _e(), " ", _t("default", [_h('div', {
	    staticClass: "ui-toolbar-title",
	    domProps: {
	      "textContent": _s(title)
	    }
	  })])]), " ", _h('div', {
	    staticClass: "ui-toolbar-right"
	  }, [_t("actions")]), " ", _h('ui-progress-linear', {
	    staticClass: "ui-toolbar-preloader",
	    class: {
	      'position-top': preloaderTop
	    },
	    attrs: {
	      "show": loading,
	      "color": preloaderColor
	    }
	  })])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-30", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=keen-ui.js.map