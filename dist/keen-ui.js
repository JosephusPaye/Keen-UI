/*!
 * Keen UI v0.8.7 (https://github.com/JosephusPaye/keen-ui)
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
	
	var _UiAutocomplete = __webpack_require__(65);
	
	var _UiAutocomplete2 = _interopRequireDefault(_UiAutocomplete);
	
	var _UiButton = __webpack_require__(88);
	
	var _UiButton2 = _interopRequireDefault(_UiButton);
	
	var _UiCheckbox = __webpack_require__(92);
	
	var _UiCheckbox2 = _interopRequireDefault(_UiCheckbox);
	
	var _UiCollapsible = __webpack_require__(96);
	
	var _UiCollapsible2 = _interopRequireDefault(_UiCollapsible);
	
	var _UiConfirm = __webpack_require__(100);
	
	var _UiConfirm2 = _interopRequireDefault(_UiConfirm);
	
	var _UiFab = __webpack_require__(108);
	
	var _UiFab2 = _interopRequireDefault(_UiFab);
	
	var _UiIcon = __webpack_require__(6);
	
	var _UiIcon2 = _interopRequireDefault(_UiIcon);
	
	var _UiIconButton = __webpack_require__(10);
	
	var _UiIconButton2 = _interopRequireDefault(_UiIconButton);
	
	var _UiMenu = __webpack_require__(13);
	
	var _UiMenu2 = _interopRequireDefault(_UiMenu);
	
	var _UiMenuItem = __webpack_require__(16);
	
	var _UiMenuItem2 = _interopRequireDefault(_UiMenuItem);
	
	var _UiModal = __webpack_require__(103);
	
	var _UiModal2 = _interopRequireDefault(_UiModal);
	
	var _UiPopover = __webpack_require__(47);
	
	var _UiPopover2 = _interopRequireDefault(_UiPopover);
	
	var _UiPreloader = __webpack_require__(112);
	
	var _UiPreloader2 = _interopRequireDefault(_UiPreloader);
	
	var _UiProgressCircular = __webpack_require__(51);
	
	var _UiProgressCircular2 = _interopRequireDefault(_UiProgressCircular);
	
	var _UiProgressLinear = __webpack_require__(116);
	
	var _UiProgressLinear2 = _interopRequireDefault(_UiProgressLinear);
	
	var _UiRadio = __webpack_require__(120);
	
	var _UiRadio2 = _interopRequireDefault(_UiRadio);
	
	var _UiRadioGroup = __webpack_require__(124);
	
	var _UiRadioGroup2 = _interopRequireDefault(_UiRadioGroup);
	
	var _UiRating = __webpack_require__(128);
	
	var _UiRating2 = _interopRequireDefault(_UiRating);
	
	var _UiRatingIcon = __webpack_require__(131);
	
	var _UiRatingIcon2 = _interopRequireDefault(_UiRatingIcon);
	
	var _UiRatingPreview = __webpack_require__(136);
	
	var _UiRatingPreview2 = _interopRequireDefault(_UiRatingPreview);
	
	var _UiRippleInk = __webpack_require__(20);
	
	var _UiRippleInk2 = _interopRequireDefault(_UiRippleInk);
	
	var _UiSnackbar = __webpack_require__(140);
	
	var _UiSnackbar2 = _interopRequireDefault(_UiSnackbar);
	
	var _UiSnackbarContainer = __webpack_require__(144);
	
	var _UiSnackbarContainer2 = _interopRequireDefault(_UiSnackbarContainer);
	
	var _UiSwitch = __webpack_require__(148);
	
	var _UiSwitch2 = _interopRequireDefault(_UiSwitch);
	
	var _UiTab = __webpack_require__(152);
	
	var _UiTab2 = _interopRequireDefault(_UiTab);
	
	var _UiTabs = __webpack_require__(156);
	
	var _UiTabs2 = _interopRequireDefault(_UiTabs);
	
	var _UiTextbox = __webpack_require__(164);
	
	var _UiTextbox2 = _interopRequireDefault(_UiTextbox);
	
	var _UiToolbar = __webpack_require__(168);
	
	var _UiToolbar2 = _interopRequireDefault(_UiToolbar);
	
	var _UiTooltip = __webpack_require__(58);
	
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
	    UiMenuItem: _UiMenuItem2.default,
	    UiModal: _UiModal2.default,
	    UiPopover: _UiPopover2.default,
	    UiPreloader: _UiPreloader2.default,
	    UiProgressCircular: _UiProgressCircular2.default,
	    UiProgressLinear: _UiProgressLinear2.default,
	    UiRadio: _UiRadio2.default,
	    UiRadioGroup: _UiRadioGroup2.default,
	    UiRating: _UiRating2.default,
	    UiRatingIcon: _UiRatingIcon2.default,
	    UiRatingPreview: _UiRatingPreview2.default,
	    UiRippleInk: _UiRippleInk2.default,
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
	        Vue.component('ui-menu-item', _UiMenuItem2.default);
	        Vue.component('ui-modal', _UiModal2.default);
	        Vue.component('ui-popover', _UiPopover2.default);
	        Vue.component('ui-preloader', _UiPreloader2.default);
	        Vue.component('ui-progress-circular', _UiProgressCircular2.default);
	        Vue.component('ui-progress-linear', _UiProgressLinear2.default);
	        Vue.component('ui-radio', _UiRadio2.default);
	        Vue.component('ui-radio-group', _UiRadioGroup2.default);
	        Vue.component('ui-rating', _UiRating2.default);
	        Vue.component('ui-rating-icon', _UiRatingIcon2.default);
	        Vue.component('ui-rating-preview', _UiRatingPreview2.default);
	        Vue.component('ui-ripple-ink', _UiRippleInk2.default);
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

	var __vue_script__, __vue_template__
	__webpack_require__(3)
	__vue_script__ = __webpack_require__(5)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiAlert.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(64)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiAlert.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

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
	
	    props: {
	        show: {
	            type: Boolean,
	            default: true
	        },
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
	
	    created: function created() {
	        if (!this.icon) {
	            var icon = this.type;
	
	            if (this.type === 'success') {
	                icon = 'check_circle';
	            }
	
	            this.icon = icon;
	        }
	    },
	
	
	    methods: {
	        close: function close() {
	            this.show = false;
	            this.$dispatch('dismissed');
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

	var __vue_script__, __vue_template__
	__webpack_require__(7)
	__vue_script__ = __webpack_require__(8)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiIcon.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(9)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiIcon.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

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
/***/ function(module, exports) {

	module.exports = "\n<i\n    class=\"ui-icon material-icons\" :class=\"[icon]\" v-text=\"removeText ? null : icon\"\n    aria-hidden=\"true\"\n></i>\n";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(11)
	__vue_script__ = __webpack_require__(12)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiIconButton.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(63)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiIconButton.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

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
	
	var _UiPopover = __webpack_require__(47);
	
	var _UiPopover2 = _interopRequireDefault(_UiPopover);
	
	var _UiProgressCircular = __webpack_require__(51);
	
	var _UiProgressCircular2 = _interopRequireDefault(_UiProgressCircular);
	
	var _disabled = __webpack_require__(55);
	
	var _disabled2 = _interopRequireDefault(_disabled);
	
	var _HasDropdown = __webpack_require__(56);
	
	var _HasDropdown2 = _interopRequireDefault(_HasDropdown);
	
	var _ShowsTooltip = __webpack_require__(57);
	
	var _ShowsTooltip2 = _interopRequireDefault(_ShowsTooltip);
	
	var _ShowsRippleInk = __webpack_require__(19);
	
	var _ShowsRippleInk2 = _interopRequireDefault(_ShowsRippleInk);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-icon-button',
	
	    props: {
	        type: {
	            type: String,
	            default: 'normal', coerce: function coerce(type) {
	                return 'ui-icon-button-' + type;
	            }
	        },
	        color: {
	            type: String,
	            default: 'default', coerce: function coerce(color) {
	                return 'color-' + color;
	            }
	        },
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
	            var classes = [this.type, this.color];
	
	            if (this.hasDropdown) {
	                classes.push('ui-dropdown');
	            }
	
	            return classes;
	        },
	        spinnerColor: function spinnerColor() {
	            if (this.color === 'color-default' || this.color === 'color-black') {
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
	
	    mixins: [_HasDropdown2.default, _ShowsTooltip2.default, _ShowsRippleInk2.default],
	
	    directives: {
	        disabled: _disabled2.default
	    }
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(14)
	__vue_script__ = __webpack_require__(15)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiMenu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(46)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiMenu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

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
	
	var _UiMenuItem = __webpack_require__(16);
	
	var _UiMenuItem2 = _interopRequireDefault(_UiMenuItem);
	
	var _ShowsDropdown = __webpack_require__(43);
	
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
	        showKeyboardShortcuts: {
	            type: Boolean,
	            default: false
	        },
	        hideRippleInk: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    events: {
	        'dropdown-opened': function dropdownOpened() {
	            if (this.containFocus) {
	                document.addEventListener('focus', this.restrictFocus, true);
	            }
	
	            this.$dispatch('opened');
	
	            return true;
	        },
	        'dropdown-closed': function dropdownClosed() {
	            if (this.containFocus) {
	                document.removeEventListener('focus', this.restrictFocus, true);
	            }
	
	            this.$dispatch('closed');
	
	            return true;
	        }
	    },
	
	    methods: {
	        optionSelect: function optionSelect(option) {
	            if (!(option.disabled || option.type === 'divider')) {
	                this.$dispatch('option-selected', option);
	
	                this.closeDropdown();
	            }
	        },
	        restrictFocus: function restrictFocus(e) {
	            if (!this.$els.dropdown.contains(e.target)) {
	                e.stopPropagation();
	
	                this.$els.dropdown.querySelector('.ui-menu-item').focus();
	            }
	        },
	        redirectFocus: function redirectFocus(e) {
	            e.stopPropagation();
	
	            this.$els.dropdown.querySelector('.ui-menu-item').focus();
	        }
	    },
	
	    components: {
	        UiMenuItem: _UiMenuItem2.default
	    },
	
	    mixins: [_ShowsDropdown2.default]
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(17)
	__vue_script__ = __webpack_require__(18)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiMenuItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(42)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiMenuItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

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
	    name: 'ui-menu-item',
	
	    props: {
	        type: String,
	        text: String,
	        icon: String,
	        showIcon: {
	            type: Boolean,
	            default: false
	        },
	        keyboardShortcut: String,
	        showKeyboardShortcut: {
	            type: Boolean,
	            default: false
	        },
	        disabled: {
	            type: Boolean,
	            default: false
	        }
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

	var __vue_script__, __vue_template__
	__webpack_require__(21)
	__vue_script__ = __webpack_require__(22)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiRippleInk.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(41)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiRippleInk.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 21 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _dominus = __webpack_require__(23);
	
	var _dominus2 = _interopRequireDefault(_dominus);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var startRipple = function startRipple(eventType, event) {
	    var holder = event.currentTarget;
	
	    if (!(0, _dominus2.default)(holder).hasClass('ui-ripple-ink')) {
	        holder = (0, _dominus2.default)(holder).findOne('.ui-ripple-ink');
	
	        if (!holder) {
	            return;
	        }
	    }
	
	    var prev = holder.getAttribute('data-ui-event');
	
	    if (prev && prev !== eventType) {
	        return;
	    }
	
	    holder.setAttribute('data-ui-event', eventType);
	
	    var rect = holder.getBoundingClientRect();
	    var x = event.offsetX;
	    var y;
	
	    if (x !== undefined) {
	        y = event.offsetY;
	    } else {
	        x = event.clientX - rect.left;
	        y = event.clientY - rect.top;
	    }
	
	    var ripple = document.createElement('div');
	    var max;
	
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
	
	    ripple.className = 'ripple';
	    holder.appendChild(ripple);
	
	    setTimeout(function () {
	        (0, _dominus2.default)(ripple).addClass('held');
	    }, 0);
	
	    var releaseEvent = eventType === 'mousedown' ? 'mouseup' : 'touchend';
	
	    var release = function release() {
	        document.removeEventListener(releaseEvent, release);
	
	        (0, _dominus2.default)(ripple).addClass('done');
	
	        setTimeout(function () {
	            holder.removeChild(ripple);
	
	            if (!holder.children.length) {
	                (0, _dominus2.default)(holder).removeClass('active').attr('data-ui-event', null);
	            }
	        }, 450);
	    };
	
	    document.addEventListener(releaseEvent, release);
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
	            type: Element,
	            required: true
	        }
	    },
	
	    watch: {
	        trigger: function trigger() {
	            this.initialize();
	        }
	    },
	
	    ready: function ready() {
	        this.initialize();
	    },
	    beforeDestory: function beforeDestory() {
	        if (this.trigger) {
	            this.trigger.removeEventListener('mousedown', handleMouseDown);
	            this.trigger.removeEventListener('touchstart', handleTouchStart);
	        }
	    },
	
	
	    methods: {
	        initialize: function initialize() {
	            if (this.trigger) {
	                this.trigger.addEventListener('touchstart', handleTouchStart);
	                this.trigger.addEventListener('mousedown', handleMouseDown);
	            }
	        }
	    }
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(24);


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(25);
	var flatten = __webpack_require__(39);
	var dom = __webpack_require__(26);
	var custom = __webpack_require__(38);
	var classes = __webpack_require__(40);
	var Dominus = __webpack_require__(31);
	
	function equals (selector) {
	  return function equals (elem) {
	    return dom.matches(elem, selector);
	  };
	}
	
	function straight (prop, one) {
	  return function domMapping (selector) {
	    var result = this.map(function (elem) {
	      return dom[prop](elem, selector);
	    });
	    var results = flatten(result);
	    return one ? results[0] : results;
	  };
	}
	
	Dominus.prototype.prev = straight('prev');
	Dominus.prototype.next = straight('next');
	Dominus.prototype.parent = straight('parent');
	Dominus.prototype.parents = straight('parents');
	Dominus.prototype.children = straight('children');
	Dominus.prototype.find = straight('qsa');
	Dominus.prototype.findOne = straight('qs', true);
	
	Dominus.prototype.where = function (selector) {
	  return this.filter(equals(selector));
	};
	
	Dominus.prototype.is = function (selector) {
	  return this.some(equals(selector));
	};
	
	Dominus.prototype.i = function (index) {
	  return this[index] ? new Dominus(this[index]) : new Dominus();
	};
	
	function compareFactory (fn) {
	  return function compare () {
	    $.apply(null, arguments).forEach(fn, this);
	    return this;
	  };
	}
	
	Dominus.prototype.and = compareFactory(function addOne (elem) {
	  if (this.indexOf(elem) === -1) {
	    this.push(elem);
	  }
	  return this;
	});
	
	Dominus.prototype.but = compareFactory(function addOne (elem) {
	  var index = this.indexOf(elem);
	  if (index !== -1) {
	    this.splice(index, 1);
	  }
	  return this;
	});
	
	Dominus.prototype.css = function (name, value) {
	  var props;
	  var many = name && typeof name === 'object';
	  var getter = !many && !value;
	  if (getter) {
	    return this.length ? dom.getCss(this[0], name) : null;
	  }
	  if (many) {
	    props = name;
	  } else {
	    props = {};
	    props[name] = value;
	  }
	  this.forEach(dom.setCss(props));
	  return this;
	};
	
	function eventer (method) {
	  return function (types, filter, fn) {
	    var typelist = types.split(' ');
	    if (typeof fn !== 'function') {
	      fn = filter;
	      filter = null;
	    }
	    this.forEach(function (elem) {
	      typelist.forEach(function (type) {
	        var handler = custom.handlers[type];
	        if (handler) {
	          dom[method](elem, handler.event, filter, handler.wrap(fn));
	        } else {
	          dom[method](elem, type, filter, fn);
	        }
	      });
	    });
	    return this;
	  };
	}
	
	Dominus.prototype.once = eventer('once');
	Dominus.prototype.on = eventer('on');
	Dominus.prototype.off = eventer('off');
	Dominus.prototype.emit = eventer('emit');
	
	[
	  ['addClass', classes.add],
	  ['removeClass', classes.remove],
	  ['setClass', classes.set],
	  ['removeClass', classes.remove],
	  ['remove', dom.remove]
	].forEach(mapMethods);
	
	function mapMethods (data) {
	  Dominus.prototype[data[0]] = function (value) {
	    this.forEach(function (elem) {
	      data[1](elem, value);
	    });
	    return this;
	  };
	}
	
	[
	  'append',
	  'appendTo',
	  'prepend',
	  'prependTo',
	  'before',
	  'beforeOf',
	  'after',
	  'afterOf'
	].forEach(mapManipulation);
	
	function mapManipulation (method) {
	  Dominus.prototype[method] = function (value) {
	    dom[method](this, value);
	    return this;
	  };
	}
	
	Dominus.prototype.hasClass = function (value) {
	  return this.some(function (elem) {
	    return classes.contains(elem, value);
	  });
	};
	
	Dominus.prototype.attr = function (name, value) {
	  var hash = name && typeof name === 'object';
	  var set = hash ? setMany : setSingle;
	  var setter = hash || arguments.length > 1;
	  if (setter) {
	    this.forEach(set);
	    return this;
	  } else {
	    return this.length ? dom.getAttr(this[0], name) : null;
	  }
	  function setMany (elem) {
	    dom.manyAttr(elem, name);
	  }
	  function setSingle (elem) {
	    dom.attr(elem, name, value);
	  }
	};
	
	function keyValue (key, value) {
	  var getter = arguments.length < 2;
	  if (getter) {
	    return this.length ? dom[key](this[0]) : '';
	  }
	  this.forEach(function (elem) {
	    dom[key](elem, value);
	  });
	  return this;
	}
	
	function keyValueProperty (prop) {
	  Dominus.prototype[prop] = function accessor (value) {
	    var getter = arguments.length < 1;
	    if (getter) {
	      return keyValue.call(this, prop);
	    }
	    return keyValue.call(this, prop, value);
	  };
	}
	
	['html', 'text', 'value'].forEach(keyValueProperty);
	
	Dominus.prototype.clone = function () {
	  return this.map(function (elem) {
	    return dom.clone(elem);
	  });
	};
	
	Dominus.prototype.focus = function () {
	  if (this.length) {
	    this[0].focus();
	  }
	  return this;
	};
	
	module.exports = __webpack_require__(25);


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dom = __webpack_require__(26);
	var cast = __webpack_require__(34);
	var custom = __webpack_require__(38);
	var Dominus = __webpack_require__(31);
	var tag = /^\s*<([a-z]+(?:-[a-z]+)?)\s*\/?>\s*$/i;
	
	function api (selector, context) {
	  var notText = typeof selector !== 'string';
	  if (notText && arguments.length < 2) {
	    return cast(selector);
	  }
	  if (notText) {
	    return new Dominus();
	  }
	  var matches = selector.match(tag);
	  if (matches) {
	    return dom.make(matches[1]);
	  }
	  return api.find(selector, context);
	}
	
	api.find = function (selector, context) {
	  return dom.qsa(context, selector);
	};
	
	api.findOne = function (selector, context) {
	  return dom.qs(context, selector);
	};
	
	api.custom = custom.register;
	
	module.exports = api;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var sektor = __webpack_require__(27);
	var crossvent = __webpack_require__(28);
	var Dominus = __webpack_require__(31);
	var cast = __webpack_require__(34);
	var apply = __webpack_require__(36);
	var text = __webpack_require__(37);
	var test = __webpack_require__(35);
	var api = module.exports = {};
	var delegates = {};
	
	function castContext (context) {
	  if (typeof context === 'string') {
	    return api.qs(null, context);
	  }
	  if (test.isElement(context)) {
	    return context;
	  }
	  if (context instanceof Dominus) {
	    return context[0];
	  }
	  return null;
	}
	
	api.qsa = function (el, selector) {
	  var results = new Dominus();
	  return sektor(selector, castContext(el), results);
	};
	
	api.qs = function (el, selector) {
	  return api.qsa(el, selector)[0];
	};
	
	api.matches = function (el, selector) {
	  return test.isElement(el) && sektor.matchesSelector(el, selector);
	};
	
	function relatedFactory (prop) {
	  return function related (el, selector) {
	    var relative = el[prop];
	    if (relative) {
	      if (!selector || api.matches(relative, selector)) {
	        return cast(relative);
	      }
	    }
	    return new Dominus();
	  };
	}
	
	api.prev = relatedFactory('previousElementSibling');
	api.next = relatedFactory('nextElementSibling');
	api.parent = relatedFactory('parentElement');
	
	function matches (el, value) {
	  if (!value) {
	    return true;
	  }
	  if (value instanceof Dominus) {
	    return value.indexOf(el) !== -1;
	  }
	  if (test.isElement(value)) {
	    return el === value;
	  }
	  return api.matches(el, value);
	}
	
	api.parents = function (el, value) {
	  var elements = [];
	  var current = el;
	  while (current.parentElement) {
	    if (matches(current.parentElement, value)) {
	      elements.push(current.parentElement);
	    }
	    current = current.parentElement;
	  }
	  return apply(elements);
	};
	
	api.children = function (el, value) {
	  var elements = [];
	  var children = el.children;
	  var child;
	  var i;
	  for (i = 0; children && i < children.length; i++) {
	    child = children[i];
	    if (matches(child, value)) {
	      elements.push(child);
	    }
	  }
	  return apply(elements);
	};
	
	// this method caches delegates so that .off() works seamlessly
	function delegate (root, filter, fn) {
	  if (delegates[fn._dd]) {
	    return delegates[fn._dd];
	  }
	  fn._dd = Date.now();
	  delegates[fn._dd] = delegator;
	  function delegator (e) {
	    var el = e.target;
	    while (el && el !== root) {
	      if (api.matches(el, filter)) {
	        fn.apply(this, arguments); return;
	      }
	      el = el.parentElement;
	    }
	  }
	  return delegator;
	}
	
	function evented (method, el, type, filter, fn) {
	  if (filter === null) {
	    crossvent[method](el, type, fn);
	  } else {
	    crossvent[method](el, type, delegate(el, filter, fn));
	  }
	}
	
	function once (el, type, filter, fn) {
	  var things = [el, type, filter, disposable];
	  api.on.apply(api, things);
	  function disposable () {
	    api.off.apply(api, things);
	    return fn.apply(this, arguments);
	  }
	}
	
	api.once = once;
	api.on = evented.bind(null, 'add');
	api.off = evented.bind(null, 'remove');
	api.emit = evented.bind(null, 'fabricate');
	
	api.html = function (elem, html) {
	  var getter = arguments.length < 2;
	  if (getter) {
	    return elem.innerHTML;
	  } else {
	    elem.innerHTML = html;
	  }
	};
	
	api.text = function (elem, text) {
	  var checkable = test.isCheckable(elem);
	  var getter = arguments.length < 2;
	  if (getter) {
	    return checkable ? elem.value : elem.innerText || elem.textContent;
	  } else if (checkable) {
	    elem.value = text;
	  } else {
	    elem.innerText = elem.textContent = text;
	  }
	};
	
	api.value = function (el, value) {
	  var checkable = test.isCheckable(el);
	  var getter = arguments.length < 2;
	  if (getter) {
	    return checkable ? el.checked : el.value;
	  } else if (checkable) {
	    el.checked = value;
	  } else {
	    el.value = value;
	  }
	};
	
	api.attr = function (el, name, value) {
	  if (!test.isElement(el)) {
	    return;
	  }
	  if (value === null || value === void 0) {
	    el.removeAttribute(name); return;
	  }
	  var camel = text.hyphenToCamel(name);
	  if (camel in el) {
	    el[camel] = value;
	  } else {
	    el.setAttribute(name, value);
	  }
	};
	
	api.getAttr = function (el, name) {
	  var camel = text.hyphenToCamel(name);
	  if (camel in el) {
	    return el[camel];
	  } else if (el.getAttribute) {
	    return el.getAttribute(name);
	  }
	  return null;
	};
	
	api.manyAttr = function (elem, attrs) {
	  Object.keys(attrs).forEach(function (attr) {
	    api.attr(elem, attr, attrs[attr]);
	  });
	};
	
	api.make = function (type) {
	  return new Dominus(document.createElement(type));
	};
	
	api.clone = function (el) {
	  if (el.cloneNode) {
	    return el.cloneNode(true);
	  }
	  return el;
	};
	
	api.remove = function (el) {
	  if (el.parentElement) {
	    el.parentElement.removeChild(el);
	  }
	};
	
	api.append = function (el, target) {
	  if (manipulationGuard(el, target, api.append)) {
	    return;
	  }
	  if (el.appendChild) {
	    el.appendChild(target);
	  }
	};
	
	api.prepend = function (el, target) {
	  if (manipulationGuard(el, target, api.prepend)) {
	    return;
	  }
	  if (el.insertBefore) {
	    el.insertBefore(target, el.firstChild);
	  }
	};
	
	api.before = function (el, target) {
	  if (manipulationGuard(el, target, api.before)) {
	    return;
	  }
	  if (el.parentElement) {
	    el.parentElement.insertBefore(target, el);
	  }
	};
	
	api.after = function (el, target) {
	  if (manipulationGuard(el, target, api.after)) {
	    return;
	  }
	  if (el.parentElement) {
	    el.parentElement.insertBefore(target, el.nextSibling);
	  }
	};
	
	function manipulationGuard (el, target, fn) {
	  var right = target instanceof Dominus;
	  var left = el instanceof Dominus;
	  if (left) {
	    el.forEach(manipulateMany);
	  } else if (right) {
	    manipulate(el, true);
	  }
	  return !el || !target || left || right;
	
	  function manipulate (el, precondition) {
	    if (right) {
	      target.forEach(function (target, j) {
	        fn(el, cloneUnless(target, precondition && j === 0));
	      });
	    } else {
	      fn(el, cloneUnless(target, precondition));
	    }
	  }
	
	  function manipulateMany (el, i) {
	    manipulate(el, i === 0);
	  }
	}
	
	function cloneUnless (target, condition) {
	  return condition ? target : api.clone(target);
	}
	
	['appendTo', 'prependTo', 'beforeOf', 'afterOf'].forEach(flip);
	
	function flip (key) {
	  var original = key.split(/[A-Z]/)[0];
	  api[key] = function (el, target) {
	    api[original](target, el);
	  };
	}
	
	var numericCssProperties = {
	  'column-count': true,
	  'fill-opacity': true,
	  'flex-grow': true,
	  'flex-shrink': true,
	  'font-weight': true,
	  'line-height': true,
	  'opacity': true,
	  'order': true,
	  'orphans': true,
	  'widows': true,
	  'z-index': true,
	  'zoom': true
	};
	var numeric = /^\d+$/;
	var canFloat = 'float' in document.body.style;
	
	api.getCss = function (el, prop) {
	  if (!test.isElement(el)) {
	    return null;
	  }
	  var hprop = text.hyphenate(prop);
	  var fprop = !canFloat && hprop === 'float' ? 'cssFloat' : hprop;
	  var result = global.getComputedStyle(el)[hprop];
	  if (prop === 'opacity' && result === '') {
	    return 1;
	  }
	  if (result.substr(-2) === 'px' || numeric.test(result)) {
	    return parseFloat(result, 10);
	  }
	  return result;
	};
	
	api.setCss = function (props) {
	  var mapped = Object.keys(props).filter(bad).map(expand);
	  function bad (prop) {
	    var value = props[prop];
	    return value !== null && value === value;
	  }
	  function expand (prop) {
	    var hprop = text.hyphenate(prop);
	    var value = props[prop];
	    if (typeof value === 'number' && !numericCssProperties[hprop]) {
	      value += 'px';
	    }
	    return {
	      name: hprop, value: value
	    };
	  }
	  return function (el) {
	    if (!test.isElement(el)) {
	      return;
	    }
	    mapped.forEach(function (prop) {
	      el.style[prop.name] = prop.value;
	    });
	  };
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 27 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var expando = 'sektor-' + Date.now();
	var rsiblings = /[+~]/;
	var document = global.document;
	var del = document.documentElement || {};
	var match = (
	  del.matches ||
	  del.webkitMatchesSelector ||
	  del.mozMatchesSelector ||
	  del.oMatchesSelector ||
	  del.msMatchesSelector ||
	  never
	);
	
	module.exports = sektor;
	
	sektor.matches = matches;
	sektor.matchesSelector = matchesSelector;
	
	function qsa (selector, context) {
	  var existed, id, prefix, prefixed, adapter, hack = context !== document;
	  if (hack) { // id hack for context-rooted queries
	    existed = context.getAttribute('id');
	    id = existed || expando;
	    prefix = '#' + id + ' ';
	    prefixed = prefix + selector.replace(/,/g, ',' + prefix);
	    adapter = rsiblings.test(selector) && context.parentNode;
	    if (!existed) { context.setAttribute('id', id); }
	  }
	  try {
	    return (adapter || context).querySelectorAll(prefixed || selector);
	  } catch (e) {
	    return [];
	  } finally {
	    if (existed === null) { context.removeAttribute('id'); }
	  }
	}
	
	function sektor (selector, ctx, collection, seed) {
	  var element;
	  var context = ctx || document;
	  var results = collection || [];
	  var i = 0;
	  if (typeof selector !== 'string') {
	    return results;
	  }
	  if (context.nodeType !== 1 && context.nodeType !== 9) {
	    return []; // bail if context is not an element or document
	  }
	  if (seed) {
	    while ((element = seed[i++])) {
	      if (matchesSelector(element, selector)) {
	        results.push(element);
	      }
	    }
	  } else {
	    results.push.apply(results, qsa(selector, context));
	  }
	  return results;
	}
	
	function matches (selector, elements) {
	  return sektor(selector, null, null, elements);
	}
	
	function matchesSelector (element, selector) {
	  return match.call(element, selector);
	}
	
	function never () { return false; }
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var customEvent = __webpack_require__(29);
	var eventmap = __webpack_require__(30);
	var doc = global.document;
	var addEvent = addEventEasy;
	var removeEvent = removeEventEasy;
	var hardCache = [];
	
	if (!global.addEventListener) {
	  addEvent = addEventHard;
	  removeEvent = removeEventHard;
	}
	
	module.exports = {
	  add: addEvent,
	  remove: removeEvent,
	  fabricate: fabricateEvent
	};
	
	function addEventEasy (el, type, fn, capturing) {
	  return el.addEventListener(type, fn, capturing);
	}
	
	function addEventHard (el, type, fn) {
	  return el.attachEvent('on' + type, wrap(el, type, fn));
	}
	
	function removeEventEasy (el, type, fn, capturing) {
	  return el.removeEventListener(type, fn, capturing);
	}
	
	function removeEventHard (el, type, fn) {
	  var listener = unwrap(el, type, fn);
	  if (listener) {
	    return el.detachEvent('on' + type, listener);
	  }
	}
	
	function fabricateEvent (el, type, model) {
	  var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
	  if (el.dispatchEvent) {
	    el.dispatchEvent(e);
	  } else {
	    el.fireEvent('on' + type, e);
	  }
	  function makeClassicEvent () {
	    var e;
	    if (doc.createEvent) {
	      e = doc.createEvent('Event');
	      e.initEvent(type, true, true);
	    } else if (doc.createEventObject) {
	      e = doc.createEventObject();
	    }
	    return e;
	  }
	  function makeCustomEvent () {
	    return new customEvent(type, { detail: model });
	  }
	}
	
	function wrapperFactory (el, type, fn) {
	  return function wrapper (originalEvent) {
	    var e = originalEvent || global.event;
	    e.target = e.target || e.srcElement;
	    e.preventDefault = e.preventDefault || function preventDefault () { e.returnValue = false; };
	    e.stopPropagation = e.stopPropagation || function stopPropagation () { e.cancelBubble = true; };
	    e.which = e.which || e.keyCode;
	    fn.call(el, e);
	  };
	}
	
	function wrap (el, type, fn) {
	  var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
	  hardCache.push({
	    wrapper: wrapper,
	    element: el,
	    type: type,
	    fn: fn
	  });
	  return wrapper;
	}
	
	function unwrap (el, type, fn) {
	  var i = find(el, type, fn);
	  if (i) {
	    var wrapper = hardCache[i].wrapper;
	    hardCache.splice(i, 1); // free up a tad of memory
	    return wrapper;
	  }
	}
	
	function find (el, type, fn) {
	  var i, item;
	  for (i = 0; i < hardCache.length; i++) {
	    item = hardCache[i];
	    if (item.element === el && item.type === type && item.fn === fn) {
	      return i;
	    }
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 29 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	var NativeCustomEvent = global.CustomEvent;
	
	function useNative () {
	  try {
	    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
	    return  'cat' === p.type && 'bar' === p.detail.foo;
	  } catch (e) {
	  }
	  return false;
	}
	
	/**
	 * Cross-browser `CustomEvent` constructor.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
	 *
	 * @public
	 */
	
	module.exports = useNative() ? NativeCustomEvent :
	
	// IE >= 9
	'function' === typeof document.createEvent ? function CustomEvent (type, params) {
	  var e = document.createEvent('CustomEvent');
	  if (params) {
	    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
	  } else {
	    e.initCustomEvent(type, false, false, void 0);
	  }
	  return e;
	} :
	
	// IE <= 8
	function CustomEvent (type, params) {
	  var e = document.createEventObject();
	  e.type = type;
	  if (params) {
	    e.bubbles = Boolean(params.bubbles);
	    e.cancelable = Boolean(params.cancelable);
	    e.detail = params.detail;
	  } else {
	    e.bubbles = false;
	    e.cancelable = false;
	    e.detail = void 0;
	  }
	  return e;
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 30 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var eventmap = [];
	var eventname = '';
	var ron = /^on/;
	
	for (eventname in global) {
	  if (ron.test(eventname)) {
	    eventmap.push(eventname.slice(2));
	  }
	}
	
	module.exports = eventmap;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var poser = __webpack_require__(32);
	var Dominus = poser.Array();
	
	module.exports = Dominus;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var poser = __webpack_require__(33);
	
	module.exports = poser;
	
	['Array', 'Function', 'Object', 'Date', 'String'].forEach(pose);
	
	function pose (type) {
	  poser[type] = function poseComputedType () { return poser(type); };
	}


/***/ },
/* 33 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var d = global.document;
	
	function poser (type) {
	  var iframe = d.createElement('iframe');
	
	  iframe.style.display = 'none';
	  d.body.appendChild(iframe);
	
	  return map(type, iframe.contentWindow);
	}
	
	function map (type, source) { // forward polyfills to the stolen reference!
	  var original = window[type].prototype;
	  var value = source[type];
	  var prop;
	
	  for (prop in original) {
	    value.prototype[prop] = original[prop];
	  }
	
	  return value;
	}
	
	module.exports = poser;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var test = __webpack_require__(35);
	var apply = __webpack_require__(36);
	var Dominus = __webpack_require__(31);
	
	function cast (a) {
	  if (a === global) {
	    return new Dominus(a);
	  }
	  if (a instanceof Dominus) {
	    return a;
	  }
	  if (!a) {
	    return new Dominus();
	  }
	  if (test.isElement(a)) {
	    return new Dominus(a);
	  }
	  if (!test.isArray(a)) {
	    return new Dominus();
	  }
	  return apply(a).filter(function (i) {
	    return test.isElement(i);
	  });
	}
	
	module.exports = cast;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';
	
	var elementObjects = typeof HTMLElement === 'object';
	
	function isElement (o) {
	  return elementObjects ? o instanceof HTMLElement : isElementObject(o);
	}
	
	function isElementObject (o) {
	  return o &&
	    typeof o === 'object' &&
	    typeof o.nodeName === 'string' &&
	    o.nodeType === 1;
	}
	
	function isArray (a) {
	  return Object.prototype.toString.call(a) === '[object Array]';
	}
	
	function isCheckable (elem) {
	  return 'checked' in elem && elem.type === 'radio' || elem.type === 'checkbox';
	}
	
	module.exports = {
	  isElement: isElement,
	  isArray: isArray,
	  isCheckable: isCheckable
	};


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Dominus = __webpack_require__(31);
	var proto = Dominus.prototype;
	
	function Applied (args) {
	  return Dominus.apply(this, args);
	}
	
	Applied.prototype = proto;
	
	function apply (a) {
	  return new Applied(a);
	}
	
	['map', 'filter', 'concat', 'slice'].forEach(ensure);
	
	function ensure (key) {
	  var original = proto[key];
	  proto[key] = function applied () {
	    return apply(original.apply(this, arguments));
	  };
	}
	
	module.exports = apply;


/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';
	
	function hyphenToCamel (hyphens) {
	  var part = /-([a-z])/g;
	  return hyphens.replace(part, function (g, m) {
	    return m.toUpperCase();
	  });
	}
	
	function hyphenate (text) {
	  var camel = /([a-z])([A-Z])/g;
	  return text.replace(camel, '$1-$2').toLowerCase();
	}
	
	module.exports = {
	  hyphenToCamel: hyphenToCamel,
	  hyphenate: hyphenate
	};


/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';
	
	var handlers = {};
	
	function register (name, type, filter) {
	  handlers[name] = {
	    event: type,
	    filter: filter,
	    wrap: wrap
	  };
	
	  function wrap (fn) {
	    return wrapper(name, fn);
	  }
	}
	
	function wrapper (name, fn) {
	  if (!fn) {
	    return fn;
	  }
	  var key = '__dce_' + name;
	  if (fn[key]) {
	    return fn[key];
	  }
	  fn[key] = function customEvent (e) {
	    var match = handlers[name].filter(e);
	    if (match) {
	      return fn.apply(this, arguments);
	    }
	  };
	  return fn[key];
	}
	
	register('left-click', 'click', function (e) {
	  return e.which === 1 && !e.metaKey && !e.ctrlKey;
	});
	
	module.exports = {
	  register: register,
	  wrapper: wrapper,
	  handlers: handlers
	};


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Dominus = __webpack_require__(31);
	
	function flatten (a, cache) {
	  return a.reduce(function (current, item) {
	    if (Dominus.isArray(item)) {
	      return flatten(item, current);
	    } else if (current.indexOf(item) === -1) {
	      return current.concat(item);
	    }
	    return current;
	  }, cache || new Dominus());
	}
	
	module.exports = flatten;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var trim = /^\s+|\s+$/g;
	var whitespace = /\s+/g;
	var test = __webpack_require__(35);
	
	function interpret (input) {
	  return typeof input === 'string' ? input.replace(trim, '').split(whitespace) : input;
	}
	
	function classes (el) {
	  if (test.isElement(el)) {
	    return el.className.replace(trim, '').split(whitespace);
	  }
	  return [];
	}
	
	function set (el, input) {
	  if (test.isElement(el)) {
	    el.className = interpret(input).join(' ');
	  }
	}
	
	function add (el, input) {
	  var current = remove(el, input);
	  var values = interpret(input);
	  current.push.apply(current, values);
	  set(el, current);
	  return current;
	}
	
	function remove (el, input) {
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
	
	function contains (el, input) {
	  var current = classes(el);
	  var values = interpret(input);
	
	  return values.every(function (value) {
	    return current.indexOf(value) !== -1;
	  });
	}
	
	module.exports = {
	  add: add,
	  remove: remove,
	  contains: contains,
	  set: set,
	  get: classes
	};


/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ui-ripple-ink\"></div>\n";

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "\n<a\n    class=\"ui-menu-item\" role=\"menu-item\" :tabindex=\"(isDivider || disabled) ? null : '0'\"\n    :class=\"{ 'divider': isDivider, 'disabled' : disabled }\"\n\n    v-el:link\n>\n    <ui-icon\n        class=\"ui-menu-item-icon\" :icon=\"icon\" v-if=\"showIcon && !isDivider && icon\"\n    ></ui-icon>\n\n    <div class=\"ui-menu-item-text\" v-text=\"text\" v-if=\"!isDivider\"></div>\n\n    <div\n        class=\"ui-menu-item-keyboard-shortcut\" v-text=\"keyboardShortcut\"\n        v-if=\"showKeyboardShortcut && !isDivider && keyboardShortcut\"\n    ></div>\n\n    <ui-ripple-ink :trigger=\"$els.link\" v-if=\"!hideRippleInk && !disabled\"></ui-ripple-ink>\n</a>\n";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _dominus = __webpack_require__(23);
	
	var _dominus2 = _interopRequireDefault(_dominus);
	
	var _tetherDrop = __webpack_require__(44);
	
	var _tetherDrop2 = _interopRequireDefault(_tetherDrop);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: {
	        trigger: Element,
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
	    ready: function ready() {
	        if (this.trigger) {
	            this.initializeDropdown();
	        }
	    },
	    beforeDestroy: function beforeDestroy() {
	        if (this.drop) {
	            this.drop.remove();
	            this.drop.destroy();
	        }
	    },
	
	
	    methods: {
	        initializeDropdown: function initializeDropdown() {
	            this.drop = new _tetherDrop2.default({
	                target: this.trigger,
	                content: this.$els.dropdown,
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
	
	            this.drop.on('open', this.dropdownOpened);
	            this.drop.on('close', this.dropdownClosed);
	        },
	        closeDropdown: function closeDropdown() {
	            if (this.drop) {
	                this.drop.close();
	            }
	        },
	        dropdownOpened: function dropdownOpened() {
	            (0, _dominus2.default)(this.trigger).addClass('dropdown-open');
	
	            this.lastFocussedElement = document.activeElement;
	            this.$els.dropdown.focus();
	
	            this.$dispatch('dropdown-opened');
	        },
	        dropdownClosed: function dropdownClosed() {
	            (0, _dominus2.default)(this.trigger).removeClass('dropdown-open');
	
	            this.lastFocussedElement.focus();
	
	            this.$dispatch('dropdown-closed');
	        }
	    }
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether-drop 1.4.1 */
	
	(function(root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(45)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether 1.2.0 */
	
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
	
	function getScrollParent(el) {
	  // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
	  var computedStyle = getComputedStyle(el) || {};
	  var position = computedStyle.position;
	
	  if (position === 'fixed') {
	    return el;
	  }
	
	  var parent = el;
	  while (parent = parent.parentNode) {
	    var style = undefined;
	    try {
	      style = getComputedStyle(parent);
	    } catch (err) {}
	
	    if (typeof style === 'undefined' || style === null) {
	      return parent;
	    }
	
	    var _style = style;
	    var overflow = _style.overflow;
	    var overflowX = _style.overflowX;
	    var overflowY = _style.overflowY;
	
	    if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
	      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
	        return parent;
	      }
	    }
	  }
	
	  return document.body;
	}
	
	var uniqueId = (function () {
	  var id = 0;
	  return function () {
	    return ++id;
	  };
	})();
	
	var zeroPosCache = {};
	var getOrigin = function getOrigin(doc) {
	  // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
	  // jitter as the user scrolls that messes with our ability to detect if two positions
	  // are equivilant or not.  We place an element at the top left of the page that will
	  // get the same jitter, so we can cancel the two out.
	  var node = doc._tetherZeroElement;
	  if (typeof node === 'undefined') {
	    node = doc.createElement('div');
	    node.setAttribute('data-tether-id', uniqueId());
	    extend(node.style, {
	      top: 0,
	      left: 0,
	      position: 'absolute'
	    });
	
	    doc.body.appendChild(node);
	
	    doc._tetherZeroElement = node;
	  }
	
	  var id = node.getAttribute('data-tether-id');
	  if (typeof zeroPosCache[id] === 'undefined') {
	    zeroPosCache[id] = {};
	
	    var rect = node.getBoundingClientRect();
	    for (var k in rect) {
	      // Can't use extend, as on IE9, elements don't resolve to be hasOwnProperty
	      zeroPosCache[id][k] = rect[k];
	    }
	
	    // Clear the cache when this position call is done
	    defer(function () {
	      delete zeroPosCache[id];
	    });
	  }
	
	  return zeroPosCache[id];
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
	
	  var box = {};
	  // The original object returned by getBoundingClientRect is immutable, so we clone it
	  // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
	  var rect = el.getBoundingClientRect();
	  for (var k in rect) {
	    box[k] = rect[k];
	  }
	
	  var origin = getOrigin(doc);
	
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
	
	function getScrollBarSize() {
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
	
	  return { width: width, height: width };
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
	  if (el.className instanceof SVGAnimatedString) {
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
	      if (typeof this.bindings !== 'undefined' && typeof this.bindings[event] !== 'undefined') {
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
	  getScrollParent: getScrollParent,
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
	  getScrollBarSize: getScrollBarSize
	};
	/* globals TetherBase, performance */
	
	'use strict';
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	if (typeof TetherBase === 'undefined') {
	  throw new Error('You must include the utils.js file before tether.js');
	}
	
	var _TetherBase$Utils = TetherBase.Utils;
	var getScrollParent = _TetherBase$Utils.getScrollParent;
	var getBounds = _TetherBase$Utils.getBounds;
	var getOffsetParent = _TetherBase$Utils.getOffsetParent;
	var extend = _TetherBase$Utils.extend;
	var addClass = _TetherBase$Utils.addClass;
	var removeClass = _TetherBase$Utils.removeClass;
	var updateClasses = _TetherBase$Utils.updateClasses;
	var defer = _TetherBase$Utils.defer;
	var flush = _TetherBase$Utils.flush;
	var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
	
	function within(a, b) {
	  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
	
	  return a + diff >= b && b >= a - diff;
	}
	
	var transformKey = (function () {
	  if (typeof document === 'undefined') {
	    return '';
	  }
	  var el = document.createElement('div');
	
	  var transforms = ['transform', 'webkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
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
	
	    if (typeof pendingTimeout !== 'undefined') {
	      clearTimeout(pendingTimeout);
	      pendingTimeout = null;
	    }
	
	    lastCall = now();
	    position();
	    lastDuration = now() - lastCall;
	  };
	
	  if (typeof window !== 'undefined') {
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
	
	var TetherClass = (function () {
	  function TetherClass(options) {
	    var _this = this;
	
	    _classCallCheck(this, TetherClass);
	
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
	
	      if (typeof this.scrollParent !== 'undefined') {
	        this.disable();
	      }
	
	      if (this.targetModifier === 'scroll-handle') {
	        this.scrollParent = this.target;
	      } else {
	        this.scrollParent = getScrollParent(this.target);
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
	      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	      if (!(this.options.addTargetClasses === false)) {
	        addClass(this.target, this.getClass('enabled'));
	      }
	      addClass(this.element, this.getClass('enabled'));
	      this.enabled = true;
	
	      if (this.scrollParent !== document) {
	        this.scrollParent.addEventListener('scroll', this.position);
	      }
	
	      if (pos) {
	        this.position();
	      }
	    }
	  }, {
	    key: 'disable',
	    value: function disable() {
	      removeClass(this.target, this.getClass('enabled'));
	      removeClass(this.element, this.getClass('enabled'));
	      this.enabled = false;
	
	      if (typeof this.scrollParent !== 'undefined') {
	        this.scrollParent.removeEventListener('scroll', this.position);
	      }
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      var _this3 = this;
	
	      this.disable();
	
	      tethers.forEach(function (tether, i) {
	        if (tether === _this3) {
	          tethers.splice(i, 1);
	          return;
	        }
	      });
	    }
	  }, {
	    key: 'updateAttachClasses',
	    value: function updateAttachClasses(elementAttach, targetAttach) {
	      var _this4 = this;
	
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
	        all.push(_this4.getClass('element-attached') + '-' + side);
	        all.push(_this4.getClass('target-attached') + '-' + side);
	      });
	
	      defer(function () {
	        if (!(typeof _this4._addAttachClasses !== 'undefined')) {
	          return;
	        }
	
	        updateClasses(_this4.element, _this4._addAttachClasses, all);
	        if (!(_this4.options.addTargetClasses === false)) {
	          updateClasses(_this4.target, _this4._addAttachClasses, all);
	        }
	
	        delete _this4._addAttachClasses;
	      });
	    }
	  }, {
	    key: 'position',
	    value: function position() {
	      var _this5 = this;
	
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
	        return getBounds(_this5.element);
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
	        return _this5.getTargetBounds();
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
	
	      var scrollbarSize = undefined;
	      if (document.body.scrollWidth > window.innerWidth) {
	        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
	        next.viewport.bottom -= scrollbarSize.height;
	      }
	
	      if (document.body.scrollHeight > window.innerHeight) {
	        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
	        next.viewport.right -= scrollbarSize.width;
	      }
	
	      if (['', 'static'].indexOf(document.body.style.position) === -1 || ['', 'static'].indexOf(document.body.parentElement.style.position) === -1) {
	        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
	        next.page.bottom = document.body.scrollHeight - top - height;
	        next.page.right = document.body.scrollWidth - left - width;
	      }
	
	      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
	        (function () {
	          var offsetParent = _this5.cache('target-offsetparent', function () {
	            return getOffsetParent(_this5.target);
	          });
	          var offsetPosition = _this5.cache('target-offsetparent-bounds', function () {
	            return getBounds(offsetParent);
	          });
	          var offsetParentStyle = getComputedStyle(offsetParent);
	          var offsetParentSize = offsetPosition;
	
	          var offsetBorder = {};
	          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
	            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
	          });
	
	          offsetPosition.right = document.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
	          offsetPosition.bottom = document.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;
	
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
	      var _this6 = this;
	
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
	        var hasOptimizations = typeof _this6.options.optimizations !== 'undefined';
	        var gpu = hasOptimizations ? _this6.options.optimizations.gpu : null;
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
	
	          css[transformKey] = 'translateX(' + Math.round(xPos) + 'px) translateY(' + Math.round(yPos) + 'px)';
	
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
	          var offsetParent = _this6.cache('target-offsetparent', function () {
	            return getOffsetParent(_this6.target);
	          });
	
	          if (getOffsetParent(_this6.element) !== offsetParent) {
	            defer(function () {
	              _this6.element.parentNode.removeChild(_this6.element);
	              offsetParent.appendChild(_this6.element);
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
	        while (currentNode && currentNode.tagName !== 'BODY') {
	          if (getComputedStyle(currentNode).position !== 'static') {
	            offsetParentIsBody = false;
	            break;
	          }
	
	          currentNode = currentNode.parentNode;
	        }
	
	        if (!offsetParentIsBody) {
	          this.element.parentNode.removeChild(this.element);
	          document.body.appendChild(this.element);
	        }
	      }
	
	      // Any css change will trigger a repaint, so let's avoid one if nothing changed
	      var writeCSS = {};
	      var write = false;
	      for (var key in css) {
	        var val = css[key];
	        var elVal = this.element.style[key];
	
	        if (elVal !== '' && val !== '' && ['top', 'left', 'bottom', 'right'].indexOf(key) >= 0) {
	          elVal = parseFloat(elVal);
	          val = parseFloat(val);
	        }
	
	        if (elVal !== val) {
	          write = true;
	          writeCSS[key] = val;
	        }
	      }
	
	      if (write) {
	        defer(function () {
	          extend(_this6.element.style, writeCSS);
	        });
	      }
	    }
	  }]);
	
	  return TetherClass;
	})();
	
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
	    to = tether.scrollParent;
	  } else if (to === 'window') {
	    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
	  }
	
	  if (to === document) {
	    to = to.documentElement;
	  }
	
	  if (typeof to.nodeType !== 'undefined') {
	    (function () {
	      var size = getBounds(to);
	      var pos = size;
	      var style = getComputedStyle(to);
	
	      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];
	
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
	        if (top < bounds[1] && tAttachment.top === 'top') {
	          if (eAttachment.top === 'bottom') {
	            top += targetHeight;
	            tAttachment.top = 'bottom';
	
	            top += height;
	            eAttachment.top = 'top';
	          } else if (eAttachment.top === 'top') {
	            top += targetHeight;
	            tAttachment.top = 'bottom';
	
	            top -= height;
	            eAttachment.top = 'bottom';
	          }
	        }
	
	        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
	          if (eAttachment.top === 'top') {
	            top -= targetHeight;
	            tAttachment.top = 'top';
	
	            top -= height;
	            eAttachment.top = 'bottom';
	          } else if (eAttachment.top === 'bottom') {
	            top -= targetHeight;
	            tAttachment.top = 'top';
	
	            top += height;
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
/* 46 */
/***/ function(module, exports) {

	module.exports = "\n<ul\n    class=\"ui-menu\" role=\"menu\" tabindex=\"-1\" @keydown.esc=\"closeDropdown\" v-el:dropdown\n    :class=\"{ 'has-icons': showIcons, 'has-keyboard-shortcuts': showKeyboardShortcuts }\"\n>\n    <ui-menu-item\n        :type=\"o.type\" :icon=\"o.icon\" :text=\"o.text\" :keyboard-shortcut=\"o.keyboardShortcut\"\n        :show-icon=\"showIcons\" :show-keyboard-shortcut=\"showKeyboardShortcuts\"\n        :hide-ripple-ink=\"hideRippleInk\" :disabled=\"o.disabled\"\n\n        @keydown.enter.prevent=\"optionSelect(o)\" @click=\"optionSelect(o)\"\n\n        v-for=\"o in options\"\n    ></ui-menu-item>\n\n    <div\n        class=\"ui-menu-focus-redirector\" @focus=\"redirectFocus\" tabindex=\"0\"\n    ></div>\n</ul>\n";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(48)
	__vue_script__ = __webpack_require__(49)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiPopover.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(50)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiPopover.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 48 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _ShowsDropdown = __webpack_require__(43);
	
	var _ShowsDropdown2 = _interopRequireDefault(_ShowsDropdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-popover',
	
	    events: {
	        'dropdown-opened': function dropdownOpened() {
	            if (this.containFocus) {
	                document.addEventListener('focus', this.restrictFocus, true);
	            }
	
	            this.$dispatch('opened');
	
	            return true;
	        },
	        'dropdown-closed': function dropdownClosed() {
	            if (this.containFocus) {
	                document.removeEventListener('focus', this.restrictFocus, true);
	            }
	
	            this.$dispatch('closed');
	
	            return true;
	        }
	    },
	
	    methods: {
	        restrictFocus: function restrictFocus(e) {
	            if (!this.$els.dropdown.contains(e.target)) {
	                e.stopPropagation();
	
	                this.$els.dropdown.focus();
	            }
	        }
	    },
	
	    mixins: [_ShowsDropdown2.default]
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "\n<div\n    class=\"ui-popover\" role=\"dialog\" tabindex=\"-1\" @keydown.esc=\"closeDropdown\" v-el:dropdown\n>\n    <slot></slot>\n</div>\n";

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(52)
	__vue_script__ = __webpack_require__(53)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiProgressCircular.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(54)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiProgressCircular.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 52 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 53 */
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
	            return (this.size - this.stroke) / 2;
	        }
	    },
	
	    created: function created() {
	        if (!this.stroke) {
	            if (this.autoStroke) {
	                this.stroke = parseInt(this.size / 8, 10);
	            } else {
	                this.stroke = 4;
	            }
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
/* 54 */
/***/ function(module, exports) {

	module.exports = "\n<div\n    class=\"ui-progress-circular\" :style=\"{ 'width': size + 'px', 'height': size + 'px' }\"\n    v-show=\"show\" :transition=\"disableTransition ? null : 'ui-progress-circular-toggle'\"\n>\n    <svg\n        class=\"ui-progress-circular-determinate\" :width=\"size\" :height=\"size\"\n        role=\"progressbar\" :aria-valuemin=\"0\" :aria-valuemax=\"100\" :aria-valuenow=\"value\"\n        v-if=\"type === 'determinate'\"\n    >\n        <circle\n            class=\"ui-progress-circular-determinate-path\" :class=\"[color]\" :r=\"radius\"\n            :cx=\"size / 2\" :cy=\"size / 2\" fill=\"transparent\" :stroke-dasharray=\"strokeDashArray\"\n            stroke-dashoffset=\"0\"\n\n            :style=\"{ 'stroke-dashoffset': strokeDashOffset, 'stroke-width': stroke }\"\n        ></circle>\n    </svg>\n\n    <svg\n        class=\"ui-progress-circular-indeterminate\" viewBox=\"25 25 50 50\"\n        role=\"progressbar\" :aria-valuemin=\"0\" :aria-valuemax=\"100\" v-else\n    >\n        <circle\n            class=\"ui-progress-circular-indeterminate-path\" :class=\"[color]\" cx=\"50\" cy=\"50\"\n            r=\"20\" fill=\"none\" stroke-miterlimit=\"10\" :stroke-width=\"stroke\"\n        >\n    </svg>\n</div>\n";

/***/ },
/* 55 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (value) {
	    this.el.disabled = Boolean(value);
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	        showMenuKeyboardShortcuts: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    methods: {
	        menuOptionSelect: function menuOptionSelect(option) {
	            this.$dispatch('menu-option-selected', option);
	        }
	    }
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _UiTooltip = __webpack_require__(58);
	
	var _UiTooltip2 = _interopRequireDefault(_UiTooltip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: {
	        tooltip: String,
	        tooltipPosition: String
	    },
	
	    components: {
	        UiTooltip: _UiTooltip2.default
	    }
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(59)
	__vue_script__ = __webpack_require__(60)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiTooltip.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(62)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiTooltip.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 59 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _tetherTooltip = __webpack_require__(61);
	
	var _tetherTooltip2 = _interopRequireDefault(_tetherTooltip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-tooltip',
	
	    props: {
	        content: String,
	        trigger: {
	            type: Element,
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
	
	    ready: function ready() {
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
	            if (this.trigger) {
	                this.tooltip = new _tetherTooltip2.default({
	                    target: this.trigger,
	                    content: this.$els.tooltip,
	                    classes: 'ui-tooltip-theme',
	                    position: this.position,
	                    openOn: 'hover focus'
	                });
	            }
	        }
	    }
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether-tooltip 1.1.0 */
	
	(function(root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(44),__webpack_require__(45)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
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
/* 62 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ui-tooltip\" v-text=\"content\" v-el:tooltip></div>\n";

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "\n<button\n    class=\"ui-icon-button\" :class=\"styleClasses\" :aria-label=\"ariaLabel || tooltip\"\n    v-disabled=\"disabled || loading\" v-el:button\n>\n    <ui-icon\n        class=\"ui-icon-button-icon\" :icon=\"icon\" v-show=\"!loading\"\n    ></ui-icon>\n\n    <ui-progress-circular\n        class=\"ui-icon-button-spinner\" :color=\"spinnerColor\" :size=\"24\" :stroke=\"4.5\"\n        disable-transition v-show=\"loading\"\n    ></ui-progress-circular>\n\n    <ui-ripple-ink v-if=\"!hideRippleInk && !disabled\" :trigger=\"$els.button\"></ui-ripple-ink>\n\n    <ui-tooltip\n        :trigger=\"$els.button\" :content=\"tooltip\" :position=\"tooltipPosition\" v-if=\"tooltip\"\n    ></ui-tooltip>\n\n    <ui-menu\n        class=\"ui-button-dropdown-menu\" :trigger=\"$els.button\" :options=\"menuOptions\"\n        :show-icons=\"showMenuIcons\" :show-keyboard-shortcuts=\"showMenuKeyboardShortcuts\"\n        :open-on=\"openDropdownOn\" @option-selected=\"menuOptionSelect\"\n        :dropdown-position=\"dropdownPosition\" v-if=\"hasDropdownMenu\"\n    ></ui-menu>\n\n    <ui-popover :trigger=\"$els.button\" :open-on=\"openDropdownOn\" v-if=\"hasPopover\">\n        <slot name=\"popover\"></slot>\n    </ui-popover>\n</button>\n";

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ui-alert\">\n    <div\n        class=\"ui-alert-body\" :class=\"[type]\" role=\"alert\" v-show=\"show\"\n        transition=\"ui-alert-toggle\"\n    >\n        <ui-icon class=\"ui-alert-icon\" :icon=\"icon\" v-if=\"!hideIcon\"></ui-icon>\n\n        <div class=\"ui-alert-text\">\n            <slot>\n                <span v-text=\"text\"></span>\n            </slot>\n        </div>\n\n        <ui-icon-button\n            class=\"ui-alert-close-button\" type=\"clear\" icon=\"&#xE5CD\" aria-label=\"Close\"\n            @click=\"close\" v-if=\"dismissible\"\n        ></ui-icon-button>\n    </div>\n</div>\n";

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(66)
	__vue_script__ = __webpack_require__(67)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiAutocomplete.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(87)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiAutocomplete.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 66 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _validatorjs = __webpack_require__(68);
	
	var _validatorjs2 = _interopRequireDefault(_validatorjs);
	
	var _fuzzysearch = __webpack_require__(79);
	
	var _fuzzysearch2 = _interopRequireDefault(_fuzzysearch);
	
	var _UiIcon = __webpack_require__(6);
	
	var _UiIcon2 = _interopRequireDefault(_UiIcon);
	
	var _UiAutocompleteSuggestion = __webpack_require__(80);
	
	var _UiAutocompleteSuggestion2 = _interopRequireDefault(_UiAutocompleteSuggestion);
	
	var _HasTextInput = __webpack_require__(85);
	
	var _HasTextInput2 = _interopRequireDefault(_HasTextInput);
	
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
	        partial: String,
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
	        showIcon: function showIcon() {
	            return Boolean(this.icon);
	        }
	    },
	
	    events: {
	        'ui-input::reset': function uiInputReset(id) {
	            if (!this.eventTargetsComponent(id)) {
	                return;
	            }
	
	            if (document.activeElement === this.$els.input) {
	                document.activeElement.blur();
	            }
	
	            this.value = this.initialValue;
	            this.dirty = false;
	            this.valid = true;
	        }
	    },
	
	    watch: {
	        value: function value() {
	            if (!this.ignoreValueChange && this.value.length >= this.minChars) {
	                this.open();
	            }
	
	            this.highlightedItem = 0;
	        }
	    },
	
	    ready: function ready() {
	        document.addEventListener('click', this.closeOnExternalClick);
	    },
	    beforeDestroy: function beforeDestroy() {
	        document.removeEventListener('click', this.closeOnExternalClick);
	    },
	
	
	    methods: {
	        search: function search(item) {
	            var text = item.text || item;
	            var query = this.value.toLowerCase();
	
	            return (0, _fuzzysearch2.default)(query, text.toLowerCase());
	        },
	        select: function select(item) {
	            var _this = this;
	
	            if (this.append) {
	                this.value += this.appendDelimiter + (item.text || item);
	            } else {
	                this.value = item.text || item;
	            }
	
	            if (this.validationRules) {
	                this.validate();
	            }
	
	            this.$nextTick(function () {
	                _this.close();
	                _this.$els.input.focus();
	            });
	        },
	        highlight: function highlight(index) {
	            if (index < 0) {
	                index = this.$refs.items.length - 1;
	            } else if (index >= this.$refs.items.length) {
	                index = 0;
	            }
	
	            this.highlightedItem = index;
	
	            if (this.showOnUpDown) {
	                this.open();
	            }
	        },
	        selectHighlighted: function selectHighlighted(index, e) {
	            if (this.showDropdown && this.$refs.items.length) {
	                e.preventDefault();
	                this.select(this.$refs.items[index].item);
	            }
	        },
	        clearSearch: function clearSearch() {
	            this.value = '';
	        },
	        open: function open() {
	            this.showDropdown = true;
	        },
	        close: function close() {
	            this.showDropdown = false;
	
	            this.validate();
	        },
	        closeOnExternalClick: function closeOnExternalClick(e) {
	            if (!this.$els.autocomplete.contains(e.target) && this.showDropdown) {
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
	        },
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
	
	            var validation = new _validatorjs2.default(data, rules, this.validationMessages);
	            validation.setAttributeNames({ value: this.name.replace(/_/g, ' ') });
	
	            this.valid = validation.passes();
	
	            if (!this.valid) {
	                this.validationError = validation.errors.first('value');
	            }
	        }
	    },
	
	    components: {
	        UiIcon: _UiIcon2.default,
	        UiAutocompleteSuggestion: _UiAutocompleteSuggestion2.default
	    },
	
	    mixins: [_HasTextInput2.default]
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// Get required modules
	var Rules = __webpack_require__(69);
	var Lang = __webpack_require__(70);
	var Errors = __webpack_require__(77);
	var Attributes = __webpack_require__(72);
	var AsyncResolvers = __webpack_require__(78);
	
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
		numericRules: ['integer', 'numeric', 'between'],
	
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
				}
				else {
					fails();
				}
			};
	
			var validateRule = function(inputValue, ruleOptions, attribute, rule) {
				return function() {
					var resolverIndex = asyncResolvers.add(rule);
					rule.validate(inputValue, ruleOptions.value, attribute, function() { asyncResolvers.resolve(resolverIndex); });
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
			var rule = {}, ruleArray;
	
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
/* 69 */
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
			if (val === 'on' || val === 'yes' || val === 1 || val === '1') {
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
			req = req.replace(mod,"").slice(1,-1);
			req = new RegExp(req,flag);
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
				}
				else {
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
			
			if (typeof this.inputValue === 'number' || this.validator._hasNumericRule(this.attribute))
			{
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
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var Messages = __webpack_require__(71);
	
	__webpack_require__(73);
	
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
				var rawMessages = __webpack_require__(74)("./" + lang);
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
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var Attributes = __webpack_require__(72);
	
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
			}
			else if (this.messages.attributes.hasOwnProperty(attribute)) {
				name = this.messages.attributes[attribute];
			}
	
			if (this.attributeFormatter)
			{
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
			}
			else {
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
				}
				else if (messages.hasOwnProperty(format)) {
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
					message = message.replace(':' + attribute, data[attribute]);
				}
			}
	
			return message;
		}
	
	};
	
	module.exports = Messages;


/***/ },
/* 72 */
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
			return this._replacePlaceholders(rule, template, { min: parameters[0], max: parameters[1] });
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
			return this._replacePlaceholders(rule, template, { other: parameters[0], value: parameters[1] });
		}
	};
	
	function formatter(attribute)
	{
		return attribute.replace(/[_\[]/g, ' ').replace(/]/g, '');
	}
	
	module.exports = {
		replacements: replacements,
		formatter: formatter
	};


/***/ },
/* 73 */
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
			numeric: 'The :attribute must be less than :max.',
			string: 'The :attribute must be less than :max characters.'
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
		url: 'The :attribute format is invalid.',
		regex: 'The :attribute format is invalid',
		attributes: {}
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./en": 73,
		"./en.js": 73,
		"./es": 75,
		"./es.js": 75,
		"./ru": 76,
		"./ru.js": 76
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
	webpackContext.id = 74;


/***/ },
/* 75 */
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
/* 76 */
/***/ function(module, exports) {

	module.exports = {
		accepted: 'Вы должны принять :attribute.',
		alpha: 'Поле :attribute может содержать только буквы.',
		alpha_dash: '"Поле :attribute может содержать только буквы, цифры, дефисы и символы подчёркивания.',
		alpha_num: 'Поле :attribute может содержать только буквы и цифры.',
		between: 'Поле :attribute должно быть между :min :max и.',
		confirmed: 'Поле :attribute не совпадает с подтверждением.',
		email: 'Поле :attribute должно быть действительным электронным адресом.',
		def: 'Поле :attribute содержит ошибки.',
		digits: 'Длина цифрового поля :attribute должна быть :digits.',
		different: 'Поля :attribute и :different должны различаться.',
		'in': 'Выбранное значение для :attribute ошибочно.',
		integer: 'Поле :attribute должно быть целым числом.',
		min: {
			numeric: 'Поле :attribute должно быть не менее :min.',
			string: 'Количество символов в поле :attribute должно быть не менее :min.'
		},
		max: {
			numeric: 'Поле :attribute не может быть более :max.',
			string: 'Количество символов в поле :attribute не может превышать :max.'
		},
		not_in: 'Выбранное значение для :attribute ошибочно.',
		numeric: 'Поле :attribute должно быть числом.',
		required: 'Поле :attribute обязательно для заполнения.',
		required_if: 'Поле :attribute требуется при :attribute :other является.',
		same: 'Значение :attribute должно совпадать с :same.',
		size: {
			numeric: 'Поле :attribute должно быть равным :size.',
			string: 'Количество символов в поле :attribute должно быть равным :size.'
		},
		url: 'Поле :attribute имеет ошибочный формат.',
		regex: 'Поле :attribute имеет ошибочный формат.',
		attributes: {}
	};

/***/ },
/* 77 */
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
			this.errors[attribute].push(message);
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
/* 78 */
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
			}
			else if (rule.passes === false) {
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
/* 79 */
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
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(81)
	__vue_script__ = __webpack_require__(82)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiAutocompleteSuggestion.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(84)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiAutocompleteSuggestion.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 81 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _uuid = __webpack_require__(83);
	
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
	        partial: {
	            type: String,
	            default: 'ui-autocomplete-simple' },
	        highlighted: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    partials: {
	        'ui-autocomplete-simple': '<li class="ui-autocomplete-suggestion-item" v-text="item.text || item"></li>',
	
	        'ui-autocomplete-image': '<div class="image" :style="{ \'background-image\': \'url(\' + item.image + \')\' }"></div>\n            <div class="text" v-text="item.text"></div>'
	    }
	};

/***/ },
/* 83 */
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
/* 84 */
/***/ function(module, exports) {

	module.exports = "\n<li\n    class=\"ui-autocomplete-suggestion\":id=\"id\"\n    :class=\"{ 'highlighted': highlighted, [partial]: true }\"\n>\n    <partial :name=\"partial\"></partial>\n</li>\n";

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _disabled = __webpack_require__(55);
	
	var _disabled2 = _interopRequireDefault(_disabled);
	
	var _ReceivesTargetedEvent = __webpack_require__(86);
	
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
	            default: '',
	            twoWay: true
	        },
	        valid: {
	            type: Boolean,
	            default: true,
	            twoWay: true
	        },
	        dirty: {
	            type: Boolean,
	            default: false,
	            twoWay: true
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
	        hideValidationErrors: {
	            type: Boolean,
	            default: false
	        },
	        validationRules: String,
	        validationMessages: Object,
	        helpText: String,
	        disabled: {
	            type: Boolean,
	            default: false
	        },
	        debounce: {
	            type: Number,
	            default: false
	        }
	    },
	
	    data: function data() {
	        return {
	            active: false,
	            initialValue: '',
	            validationError: ''
	        };
	    },
	
	
	    computed: {
	        showFeedback: function showFeedback() {
	            var canBeValidated = Boolean(this.validationRules);
	            var helpTextAvailable = Boolean(this.helpText);
	
	            return !this.disabled && (canBeValidated || helpTextAvailable);
	        }
	    },
	
	    created: function created() {
	        this.initialValue = this.value;
	    },
	
	
	    directives: {
	        disabled: _disabled2.default
	    },
	
	    mixins: [_ReceivesTargetedEvent2.default]
	};

/***/ },
/* 86 */
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
/* 87 */
/***/ function(module, exports) {

	module.exports = "\n<div\n    class=\"ui-autocomplete\" v-el:autocomplete\n    :class=\"{\n        'disabled': disabled, 'invalid': !valid, 'dirty': dirty, 'active': active,\n        'has-label': !hideLabel, 'icon-right': iconRight\n    }\"\n>\n    <div class=\"ui-autocomplete-icon-wrapper\" v-if=\"showIcon\">\n        <ui-icon :icon=\"icon\" class=\"ui-autocomplete-icon\"></ui-icon>\n    </div>\n\n    <div class=\"ui-autocomplete-content\">\n        <label class=\"ui-autocomplete-label\">\n            <div class=\"ui-autocomplete-label-text\" v-text=\"label\" v-if=\"!hideLabel\"></div>\n\n            <ui-icon\n                class=\"ui-autocomplete-clear-button\" icon=\"&#xE5CD\" title=\"Clear\"\n                @click=\"clearSearch\" v-show=\"value.length\"\n            ></ui-icon>\n\n            <input\n                class=\"ui-autocomplete-input\" :placeholder=\"placeholder\" :name=\"name\"\n                :id=\"id\" autocomplete=\"off\"\n\n                @focus=\"focus\" @blur=\"blur\" @keydown.up=\"highlight(highlightedItem - 1)\"\n                @keydown.down=\"highlight(highlightedItem + 1)\" @keydown.tab=\"close\"\n                @keydown.enter=\"selectHighlighted(highlightedItem, $event)\"\n\n                v-model=\"value\" v-disabled=\"disabled\" v-el:input\n            >\n\n            <ul class=\"ui-autocomplete-suggestions\" v-show=\"showDropdown\">\n                <ui-autocomplete-suggestion\n                    :highlighted=\"highlightedItem === index\" :item=\"item\" :partial=\"partial\"\n                    v-for=\"(index, item) in suggestions | filterBy search | limitBy limit\"\n                    v-ref:items @click=\"select(item)\"\n                ></ui-autocomplete-suggestion>\n            </ul>\n        </label>\n\n        <div class=\"ui-autocomplete-feedback\" v-if=\"showFeedback\">\n            <div\n                class=\"ui-autocomplete-error-text\" v-text=\"validationError\"\n                transition=\"ui-autocomplete-feedback-toggle\"\n                v-show=\"!hideValidationErrors && !valid\"\n            ></div>\n\n            <div\n                class=\"ui-autocomplete-help-text\" transition=\"ui-autocomplete-feedback-toggle\"\n                v-text=\"helpText\" v-else\n            ></div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(89)
	__vue_script__ = __webpack_require__(90)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiButton.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(91)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiButton.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

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
	
	var _UiIcon = __webpack_require__(6);
	
	var _UiIcon2 = _interopRequireDefault(_UiIcon);
	
	var _UiMenu = __webpack_require__(13);
	
	var _UiMenu2 = _interopRequireDefault(_UiMenu);
	
	var _UiPopover = __webpack_require__(47);
	
	var _UiPopover2 = _interopRequireDefault(_UiPopover);
	
	var _UiProgressCircular = __webpack_require__(51);
	
	var _UiProgressCircular2 = _interopRequireDefault(_UiProgressCircular);
	
	var _disabled = __webpack_require__(55);
	
	var _disabled2 = _interopRequireDefault(_disabled);
	
	var _HasDropdown = __webpack_require__(56);
	
	var _HasDropdown2 = _interopRequireDefault(_HasDropdown);
	
	var _ShowsRippleInk = __webpack_require__(19);
	
	var _ShowsRippleInk2 = _interopRequireDefault(_ShowsRippleInk);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-button',
	
	    props: {
	        type: {
	            type: String,
	            default: 'normal', coerce: function coerce(type) {
	                return 'ui-button-' + type;
	            }
	        },
	        color: {
	            type: String,
	            default: 'default', coerce: function coerce(color) {
	                return 'color-' + color;
	            }
	        },
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
	            var classes = [this.type, this.color];
	
	            if (this.raised) {
	                classes.push('ui-button-raised');
	            }
	
	            if (this.hasDropdownMenu || this.hasPopover) {
	                classes.push('has-dropdown');
	            }
	
	            return classes;
	        },
	        spinnerColor: function spinnerColor() {
	            if (this.color === 'color-default' || this.type === 'ui-button-flat') {
	                return 'black';
	            }
	
	            return 'white';
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
	
	    mixins: [_HasDropdown2.default, _ShowsRippleInk2.default],
	
	    directives: {
	        disabled: _disabled2.default
	    }
	};

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = "\n<button\n    class=\"ui-button\" :class=\"styleClasses\" v-disabled=\"disabled || loading\"\n    v-el:button\n>\n    <div class=\"ui-button-content\" :class=\"{ 'invisible': loading }\">\n        <ui-icon\n            class=\"ui-button-icon\" :class=\"{ 'position-right': iconRight }\" :icon=\"icon\"\n            v-if=\"showIcon\"\n        ></ui-icon>\n\n        <div class=\"ui-button-text\">\n            <slot>\n                <span v-text=\"text\"></span>\n            </slot>\n        </div>\n\n        <ui-icon\n            class=\"ui-button-dropdown-icon\" icon=\"&#xE5C5;\"\n            v-if=\"!iconRight && showDropdownIcon && (hasDropdownMenu || hasPopover)\"\n        ></ui-icon>\n    </div>\n\n    <ui-progress-circular\n        class=\"ui-button-spinner\" :color=\"spinnerColor\" :size=\"18\" :stroke=\"4.5\"\n        disable-transition v-show=\"loading\"\n    ></ui-progress-circular>\n\n    <ui-ripple-ink v-if=\"!hideRippleInk && !disabled\" :trigger=\"$els.button\"></ui-ripple-ink>\n\n    <ui-menu\n        class=\"ui-button-dropdown-menu\" :trigger=\"$els.button\" :options=\"menuOptions\"\n        :show-icons=\"showMenuIcons\" :show-keyboard-shortcuts=\"showMenuKeyboardShortcuts\"\n        :open-on=\"openDropdownOn\" @option-selected=\"menuOptionSelect\"\n        :dropdown-position=\"dropdownPosition\" v-if=\"hasDropdownMenu\"\n    ></ui-menu>\n\n    <ui-popover :trigger=\"$els.button\" :open-on=\"openDropdownOn\" v-if=\"hasPopover\">\n        <slot name=\"popover\"></slot>\n    </ui-popover>\n</button>\n";

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(93)
	__vue_script__ = __webpack_require__(94)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiCheckbox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(95)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiCheckbox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 93 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _disabled = __webpack_require__(55);
	
	var _disabled2 = _interopRequireDefault(_disabled);
	
	var _ReceivesTargetedEvent = __webpack_require__(86);
	
	var _ReceivesTargetedEvent2 = _interopRequireDefault(_ReceivesTargetedEvent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-checkbox',
	
	    props: {
	        name: String,
	        value: {
	            type: Boolean,
	            required: true,
	            twoWay: true
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
	    created: function created() {
	        this.initialValue = this.value;
	    },
	
	
	    events: {
	        'ui-input::reset': function uiInputReset(id) {
	            if (!this.eventTargetsComponent(id)) {
	                return;
	            }
	
	            this.value = this.initialValue;
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
	
	    directives: {
	        disabled: _disabled2.default
	    },
	
	    mixins: [_ReceivesTargetedEvent2.default]
	};

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = "\n<label\n    class=\"ui-checkbox\"\n    :class=\"{ 'disabled': disabled, 'checked': value, 'active': active, 'label-left': labelLeft }\"\n>\n    <input\n        class=\"ui-checkbox-input\" type=\"checkbox\" :name=\"name\" @focus=\"focus\" @blur=\"blur\"\n        v-model=\"value\" v-disabled=\"disabled\"\n    >\n\n    <div class=\"ui-checkbox-checkmark\">\n        <div class=\"ui-checkbox-focus-ring\"></div>\n    </div>\n\n    <div class=\"ui-checkbox-label-text\" v-if=\"!hideLabel\">\n        <slot>\n            <span v-text=\"label\"></span>\n        </slot>\n    </div>\n</label>\n";

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(97)
	__vue_script__ = __webpack_require__(98)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiCollapsible.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(99)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiCollapsible.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 97 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _UiIcon = __webpack_require__(6);
	
	var _UiIcon2 = _interopRequireDefault(_UiIcon);
	
	var _uuid = __webpack_require__(83);
	
	var _uuid2 = _interopRequireDefault(_uuid);
	
	var _disabled = __webpack_require__(55);
	
	var _disabled2 = _interopRequireDefault(_disabled);
	
	var _ShowsRippleInk = __webpack_require__(19);
	
	var _ShowsRippleInk2 = _interopRequireDefault(_ShowsRippleInk);
	
	var _ReceivesTargetedEvent = __webpack_require__(86);
	
	var _ReceivesTargetedEvent2 = _interopRequireDefault(_ReceivesTargetedEvent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-collapsible',
	
	    props: {
	        id: String,
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
	            isReady: false
	        };
	    },
	
	
	    computed: {
	        icon: function icon() {
	            return this.open ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
	        },
	        calculatedHeight: function calculatedHeight() {
	            if (this.height === 0) {
	                return 'initial';
	            }
	
	            return this.height + 'px';
	        }
	    },
	
	    created: function created() {
	        this.id = this.id || _uuid2.default.short('ui-collapsible-');
	    },
	    ready: function ready() {
	        this.isReady = true;
	        this.setHeight();
	    },
	
	
	    events: {
	        'ui-collapsible::refresh-height': function uiCollapsibleRefreshHeight(id) {
	            if (!this.eventTargetsComponent(id)) {
	                return;
	            }
	
	            this.setHeight();
	        }
	    },
	
	    methods: {
	        toggleMenu: function toggleMenu() {
	            if (this.disabled) {
	                return;
	            }
	
	            this.open = !this.open;
	        },
	        setHeight: function setHeight() {
	            var body = this.$els.body;
	
	            body.style.display = 'block';
	            this.height = body.offsetHeight;
	
	            if (!this.open) {
	                body.style.display = 'none';
	            }
	        }
	    },
	
	    components: {
	        UiIcon: _UiIcon2.default
	    },
	
	    directives: {
	        disabled: _disabled2.default
	    },
	
	    mixins: [_ShowsRippleInk2.default, _ReceivesTargetedEvent2.default],
	
	    transitions: {
	        'ui-collapsible-toggle': {
	            afterEnter: function afterEnter() {
	                this.$dispatch('opened');
	                this.setHeight();
	            },
	            afterLeave: function afterLeave() {
	                this.$dispatch('closed');
	            }
	        }
	    }
	};

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ui-collapsible\">\n    <button\n        class=\"ui-collapsible-header\" :class=\"{ 'disabled': disabled }\" :aria-controls=\"id\"\n        :aria-expanded=\"open ? 'true' : 'false'\" @click=\"toggleMenu\" v-disabled=\"disabled\"\n        v-el:button\n    >\n        <div class=\"ui-collapsible-header-content\">\n            <slot name=\"header\">\n                <div v-text=\"header\"></div>\n            </slot>\n        </div>\n\n        <ui-icon class=\"ui-collapsible-header-icon\" :icon=\"icon\" v-if=\"!hideIcon\"></ui-icon>\n\n        <ui-ripple-ink\n            v-if=\"!hideRippleInk && !disabled && isReady\" :trigger=\"$els.button\"\n        ></ui-ripple-ink>\n    </button>\n\n    <div\n        class=\"ui-collapsible-body-wrapper\" :transition=\"transition\"\n        :style=\"{ 'height': calculatedHeight }\" v-show=\"open\"v-el:body\n    >\n        <div class=\"ui-collapsible-body\" :id=\"id\" :aria-hidden=\"open ? null : 'true'\">\n            <slot></slot>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(101)
	__vue_script__ = __webpack_require__(102)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiConfirm.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(107)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiConfirm.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 101 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _dominus = __webpack_require__(23);
	
	var _dominus2 = _interopRequireDefault(_dominus);
	
	var _UiModal = __webpack_require__(103);
	
	var _UiModal2 = _interopRequireDefault(_UiModal);
	
	var _UiButton = __webpack_require__(88);
	
	var _UiButton2 = _interopRequireDefault(_UiButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-confirm',
	
	    props: {
	        show: {
	            type: Boolean,
	            required: true,
	            twoWay: true
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
	            default: 'deny-button' },
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
	            this.$dispatch('confirmed');
	
	            if (this.closeOnConfirm) {
	                this.show = false;
	            }
	        },
	        deny: function deny() {
	            this.show = false;
	            this.$dispatch('denied');
	        },
	        opened: function opened() {
	            if (this.autofocus === 'confirm-button') {
	                (0, _dominus2.default)(this.$els.confirmButton).addClass('autofocus').once('blur', this.removeAutoFocus);
	
	                this.$els.confirmButton.focus();
	            } else if (this.autofocus === 'deny-button') {
	                (0, _dominus2.default)(this.$els.denyButton).addClass('autofocus').once('blur', this.removeAutoFocus);
	
	                this.$els.denyButton.focus();
	            }
	
	            return true;
	        },
	        removeAutoFocus: function removeAutoFocus() {
	            if (this.autofocus === 'confirm-button') {
	                (0, _dominus2.default)(this.$els.confirmButton).removeClass('autofocus');
	            } else if (this.autofocus === 'deny-button') {
	                (0, _dominus2.default)(this.$els.denyButton).removeClass('autofocus');
	            }
	        }
	    },
	
	    components: {
	        UiModal: _UiModal2.default,
	        UiButton: _UiButton2.default
	    }
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(104)
	__vue_script__ = __webpack_require__(105)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiModal.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(106)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiModal.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 104 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _dominus = __webpack_require__(23);
	
	var _dominus2 = _interopRequireDefault(_dominus);
	
	var _UiIconButton = __webpack_require__(10);
	
	var _UiIconButton2 = _interopRequireDefault(_UiIconButton);
	
	var _UiButton = __webpack_require__(88);
	
	var _UiButton2 = _interopRequireDefault(_UiButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-modal',
	
	    props: {
	        show: {
	            type: Boolean,
	            required: true,
	            twoWay: true
	        },
	        type: {
	            type: String,
	            default: 'normal', coerce: function coerce(type) {
	                return 'ui-modal-' + type;
	            }
	        },
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
	            default: 'ui-modal-scale' },
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
	        'show': function show() {
	            var _this = this;
	
	            this.$nextTick(function () {
	                if (_this.show) {
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
	
	            if (e.currentTarget === this.$els.modalMask && e.target !== e.currentTarget) {
	                return;
	            }
	
	            if (e.currentTarget === this.$els.modalMask && !this.backdropDismissible) {
	                return;
	            }
	
	            this.show = false;
	        },
	        opened: function opened() {
	            this.lastFocussedElement = document.activeElement;
	            this.$els.modalContainer.focus();
	
	            (0, _dominus2.default)('body').addClass('ui-modal-open');
	
	            document.addEventListener('focus', this.restrictFocus, true);
	
	            this.$dispatch('opened');
	        },
	        closed: function closed() {
	            this.tearDown();
	            this.$dispatch('closed');
	        },
	        redirectFocus: function redirectFocus(e) {
	            e.stopPropagation();
	
	            this.$els.modalContainer.focus();
	        },
	        restrictFocus: function restrictFocus(e) {
	            if (!this.$els.modalContainer.contains(e.target)) {
	                e.stopPropagation();
	                this.$els.modalContainer.focus();
	            }
	        },
	        tearDown: function tearDown() {
	            (0, _dominus2.default)('body').removeClass('ui-modal-open');
	
	            document.removeEventListener('focus', this.restrictFocus, true);
	
	            this.lastFocussedElement.focus();
	        }
	    },
	
	    components: {
	        UiIconButton: _UiIconButton2.default,
	        UiButton: _UiButton2.default
	    }
	};

/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = "\n<div\n    class=\"ui-modal ui-modal-mask\" v-show=\"show\" :transition=\"transition\" :class=\"[type]\"\n    :role=\"role\"\n>\n    <div class=\"ui-modal-wrapper\" @click=\"close\" v-el:modal-mask>\n        <div\n            class=\"ui-modal-container\" tabindex=\"-1\" @keydown.esc=\"close\"\n            v-el:modal-container\n        >\n            <div class=\"ui-modal-header\">\n                <slot name=\"header\">\n                    <h1 v-text=\"header\" class=\"ui-modal-header-text\"></h1>\n                </slot>\n\n                <ui-icon-button\n                    type=\"clear\" icon=\"&#xE5CD\" class=\"ui-modal-close-button\" @click=\"close\"\n                    :disabled=\"!dismissible\" v-if=\"showCloseButton\" v-el:close-button\n                ></ui-icon-button>\n            </div>\n\n            <div class=\"ui-modal-body\">\n                <slot>\n                    <div v-text=\"body\"></div>\n                </slot>\n            </div>\n\n            <div class=\"ui-modal-footer\" v-if=\"!hideFooter\">\n                <slot name=\"footer\">\n                    <ui-button @click=\"close\" v-if=\"dismissible\">Close</ui-button>\n                </slot>\n            </div>\n\n            <div class=\"focus-redirector\" @focus=\"redirectFocus\" tabindex=\"0\"></div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ui-confirm\">\n    <ui-modal\n        :show.sync=\"show\" role=\"alertdialog\" :header=\"header\" @opened=\"opened\" show-close-button\n        :dismissible=\"!loading\" :backdrop-dismissible=\"backdropDismissible\"\n    >\n        <div class=\"ui-confirm-message\">\n            <slot></slot>\n        </div>\n\n        <div slot=\"footer\">\n            <ui-button\n                :color=\"type\" :text=\"confirmButtonText\" :icon=\"confirmButtonIcon\"\n                @click=\"confirm\" :loading=\"loading\" v-el:confirm-button\n            ></ui-button>\n\n            <ui-button\n                :text=\"denyButtonText\" :icon=\"denyButtonIcon\" @click=\"deny\"\n                :disabled=\"loading\" v-el:deny-button\n            ></ui-button>\n        </div>\n    </ui-modal>\n</div>\n";

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(109)
	__vue_script__ = __webpack_require__(110)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiFab.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(111)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiFab.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 109 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _UiIcon = __webpack_require__(6);
	
	var _UiIcon2 = _interopRequireDefault(_UiIcon);
	
	var _disabled = __webpack_require__(55);
	
	var _disabled2 = _interopRequireDefault(_disabled);
	
	var _ShowsTooltip = __webpack_require__(57);
	
	var _ShowsTooltip2 = _interopRequireDefault(_ShowsTooltip);
	
	var _ShowsRippleInk = __webpack_require__(19);
	
	var _ShowsRippleInk2 = _interopRequireDefault(_ShowsRippleInk);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-fab',
	
	    props: {
	        type: {
	            type: String,
	            default: 'normal',
	            coerce: function coerce(type) {
	                return 'ui-fab-' + type;
	            }
	        },
	        color: {
	            type: String,
	            default: 'default', coerce: function coerce(color) {
	                return 'color-' + color;
	            }
	        },
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
	
	    mixins: [_ShowsTooltip2.default, _ShowsRippleInk2.default],
	
	    directives: {
	        disabled: _disabled2.default
	    }
	};

/***/ },
/* 111 */
/***/ function(module, exports) {

	module.exports = "\n<button\n    class=\"ui-fab\" :class=\"[this.type, this.color]\" :aria-label=\"ariaLabel || tooltip\"\n    v-disabled=\"disabled\" v-el:button\n>\n    <ui-icon class=\"ui-fab-icon\" :icon=\"icon\"></ui-icon>\n\n    <ui-ripple-ink :trigger=\"$els.button\" v-if=\"!hideRippleInk && !disabled\"></ui-ripple-ink>\n\n    <ui-tooltip\n        :trigger=\"$els.button\" :content=\"tooltip\" :position=\"tooltipPosition\" v-if=\"tooltip\"\n    ></ui-tooltip>\n</button>\n";

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(113)
	__vue_script__ = __webpack_require__(114)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiPreloader.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(115)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiPreloader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 113 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 114 */
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
/* 115 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ui-preloader\">\n    <div\n        class=\"ui-preloader-progressbar\" :class=\"{ 'loading' : show }\"\n        :aria-busy=\"show ? 'true' : false\" role=\"progressbar\"\n    ></div>\n</div>\n";

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(117)
	__vue_script__ = __webpack_require__(118)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiProgressLinear.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(119)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiProgressLinear.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 117 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 118 */
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
	            default: 'color-primary', coerce: function coerce(color) {
	                return 'color-' + color;
	            }
	        },
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
/* 119 */
/***/ function(module, exports) {

	module.exports = "\n<div\n    class=\"ui-progress-linear\" :class=\"[color]\" v-show=\"show\"\n    transition=\"ui-progress-linear-toggle\"\n>\n    <div\n        class=\"ui-progress-linear-determinate\" :style=\"{ 'width': progress + '%' }\"\n        role=\"progressbar\" :aria-valuemin=\"0\" :aria-valuemax=\"100\" :aria-valuenow=\"value\"\n        v-if=\"type === 'determinate'\"\n    ></div>\n\n    <div\n        class=\"ui-progress-linear-indeterminate\" role=\"progressbar\" :aria-valuemin=\"0\"\n        :aria-valuemax=\"100\" v-else\n    ></div>\n</div>\n";

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(121)
	__vue_script__ = __webpack_require__(122)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiRadio.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(123)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiRadio.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 121 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _disabled = __webpack_require__(55);
	
	var _disabled2 = _interopRequireDefault(_disabled);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-radio',
	
	    props: {
	        id: String,
	        name: String,
	        model: {
	            type: String,
	            default: '',
	            twoWay: true
	        },
	        checked: {
	            type: Boolean,
	            default: false
	        },
	        value: String,
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
	            active: false
	        };
	    },
	
	
	    methods: {
	        focus: function focus() {
	            this.active = true;
	
	            this.$dispatch('focussed');
	        },
	        blur: function blur() {
	            this.active = false;
	
	            this.$dispatch('blurred');
	        }
	    },
	
	    directives: {
	        disabled: _disabled2.default
	    }
	};

/***/ },
/* 123 */
/***/ function(module, exports) {

	module.exports = "\n<label\n    class=\"ui-radio\"\n    :class=\"{ 'disabled': disabled, 'checked': active, 'label-left': labelLeft }\"\n>\n    <div class=\"ui-radio-input-wrapper\">\n        <input\n            class=\"ui-radio-input\" type=\"radio\" :id=\"id\" :name=\"name\" :value=\"value\"\n            :checked=\"checked\" @focus=\"focus\" @blur=\"blur\" v-model=\"model\" v-disabled=\"disabled\"\n        >\n\n        <span class=\"ui-radio-border\"></span>\n        <span class=\"ui-radio-inner-dot\"></span>\n    </div>\n\n    <div class=\"ui-radio-label-text\" v-if=\"!hideLabel\">\n        <slot>\n            <span v-text=\"label\"></span>\n        </slot>\n    </div>\n</label>\n";

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(125)
	__vue_script__ = __webpack_require__(126)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiRadioGroup.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(127)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiRadioGroup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 125 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _disabled = __webpack_require__(55);
	
	var _disabled2 = _interopRequireDefault(_disabled);
	
	var _UiRadio = __webpack_require__(120);
	
	var _UiRadio2 = _interopRequireDefault(_UiRadio);
	
	var _ReceivesTargetedEvent = __webpack_require__(86);
	
	var _ReceivesTargetedEvent2 = _interopRequireDefault(_ReceivesTargetedEvent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-radio-group',
	
	    props: {
	        name: {
	            type: String,
	            required: true
	        },
	        value: {
	            type: String,
	            default: '',
	            twoWay: true
	        },
	        options: {
	            type: Array,
	            required: true
	        },
	        label: String,
	        hideLabel: {
	            type: Boolean,
	            default: false
	        },
	        helpText: String,
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
	            initialValue: ''
	        };
	    },
	    created: function created() {
	        this.initialValue = this.value;
	    },
	
	
	    computed: {
	        showHelp: function showHelp() {
	            return !this.disabled && Boolean(this.helpText);
	        }
	    },
	
	    events: {
	        'ui-input::reset': function uiInputReset(id) {
	            if (!this.eventTargetsComponent(id)) {
	                return;
	            }
	
	            this.value = this.initialValue;
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
	
	    components: {
	        UiRadio: _UiRadio2.default
	    },
	
	    directives: {
	        disabled: _disabled2.default
	    },
	
	    mixins: [_ReceivesTargetedEvent2.default]
	};

/***/ },
/* 127 */
/***/ function(module, exports) {

	module.exports = "\n<div\n    class=\"ui-radio-group\" :id=\"id\"\n    :class=\"{ 'disabled': disabled, 'active': active, 'vertical': vertical }\"\n>\n    <div class=\"ui-radio-group-label\" v-text=\"label\" v-if=\"!hideLabel\"></div>\n\n    <div class=\"ui-radio-group-options-wrapper\">\n        <ui-radio\n            class=\"ui-radio-group-radio\" v-for=\"option in options\" :model.sync=\"value\"\n            :name=\"name\" :label=\"option.text || option\" :value=\"option.value || option\"\n            :disabled=\"disabled || option.disabled\" @focussed=\"focus\" @blurred=\"blur\"\n        ></ui-radio>\n    </div>\n\n    <div\n        class=\"ui-radio-group-feedback\" v-if=\"showHelp\"\n        transition=\"ui-radio-group-feedback-toggle\"\n    >\n        <div class=\"ui-radio-group-help-text\" v-text=\"helpText\"></div>\n    </div>\n</div>\n";

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(129)
	__vue_script__ = __webpack_require__(130)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiRating.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(135)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiRating.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 129 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _UiRatingIcon = __webpack_require__(131);
	
	var _UiRatingIcon2 = _interopRequireDefault(_UiRatingIcon);
	
	var _ReceivesTargetedEvent = __webpack_require__(86);
	
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
	            coerce: Number,
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
	        showHelp: function showHelp() {
	            return !this.disabled && Boolean(this.helpText);
	        }
	    },
	
	    watch: {
	        value: function value() {
	            this.previewValue = this.value;
	        },
	        previewValue: function previewValue() {
	            this.$dispatch('preview-value-changed', this.previewValue);
	        }
	    },
	
	    created: function created() {
	        this.initialValue = this.value;
	
	        this.previewValue = this.value;
	    },
	
	
	    events: {
	        'ui-input::reset': function uiInputReset(id) {
	            if (!this.eventTargetsComponent(id)) {
	                return;
	            }
	
	            this.value = this.initialValue;
	        }
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
	
	            this.previewValue = n + 1;
	        },
	        commitValue: function commitValue(value) {
	            if (value > 0 && value <= this.total) {
	                this.value = value;
	            }
	        },
	        incrementPreviewValue: function incrementPreviewValue() {
	            var proposedValue = this.previewValue + 1;
	
	            if (proposedValue <= this.total) {
	                this.previewValue = proposedValue;
	            }
	        },
	        decrementPreviewValue: function decrementPreviewValue() {
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
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(132)
	__vue_script__ = __webpack_require__(133)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiRatingIcon.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(134)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiRatingIcon.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

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
/* 134 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ui-rating-icon\">\n    <ui-icon\n        class=\"ui-rating-icon-icon\" :icon=\"icon\"\n        :class=\"{ 'selected': selected, 'filled' : filled }\"\n    ></ui-icon>\n</div>\n";

/***/ },
/* 135 */
/***/ function(module, exports) {

	module.exports = "\n<div\n    class=\"ui-rating\" :class=\"{ 'disabled': disabled, 'preview': previewing, 'active': active }\"\n\n    :tabindex=\"disabled ? null : 0\" role=\"slider\" :aria-valuemin=\"0\" :aria-valuemax=\"total\"\n    :aria-valuenow=\"previewValue\"\n\n    @keydown.up.prevent=\"incrementPreviewValue\" @keydown.down.prevent=\"decrementPreviewValue\"\n    @keydown.right.prevent=\"incrementPreviewValue\" @keydown.left.prevent=\"decrementPreviewValue\"\n    @keydown.enter.prevent=\"commitValue(previewValue)\" @focus=\"focus\" @blur=\"blur\"\n>\n    <div class=\"ui-rating-label\" v-text=\"label\" v-if=\"!hideLabel\"></div>\n\n    <div\n        class=\"ui-rating-icons-wrapper\" @mouseenter=\"startPreview\" @mouseleave=\"endPreview\"\n    >\n        <ui-rating-icon\n            :type=\"type\" v-for=\"n in total\" :selected=\"(n + 1) <= value\" @mouseover=\"preview(n)\"\n            :filled=\"(n + 1) <= previewValue\" @click=\"commitValue(n + 1)\"\n        ></ui-rating-icon>\n    </div>\n\n    <div\n        class=\"ui-rating-feedback\" v-if=\"showHelp\" transition=\"ui-rating-feedback-toggle\"\n    >\n        <div class=\"ui-rating-help-text\" v-text=\"helpText\"></div>\n    </div>\n</div>\n";

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(137)
	__vue_script__ = __webpack_require__(138)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiRatingPreview.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(139)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiRatingPreview.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 137 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _UiRatingIcon = __webpack_require__(131);
	
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
/* 139 */
/***/ function(module, exports) {

	module.exports = "\n<div\n    class=\"ui-rating-preview\" role=\"slider\" :aria-valuemin=\"0\" :aria-valuemax=\"total\"\n    :aria-valuenow=\"value\"\n>\n    <ui-rating-icon\n        :type=\"type\" v-for=\"n in total\" :selected=\"(n + 1) <= value\"\n    ></ui-rating-icon>\n</div>\n";

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(141)
	__vue_script__ = __webpack_require__(142)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiSnackbar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(143)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiSnackbar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 141 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _UiButton = __webpack_require__(88);
	
	var _UiButton2 = _interopRequireDefault(_UiButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-snackbar',
	
	    props: {
	        id: String,
	        show: {
	            type: Boolean,
	            default: false,
	            twoWay: true
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
	            this.$dispatch('clicked');
	            this.hide();
	        },
	        actionClick: function actionClick() {
	            this.$dispatch('action-clicked');
	            this.hide();
	        },
	        hide: function hide() {
	            if (!this.persistent) {
	                this.show = false;
	            }
	        }
	    },
	
	    components: {
	        UiButton: _UiButton2.default
	    },
	
	    transitions: {
	        'ui-snackbar-toggle': {
	            afterEnter: function afterEnter() {
	                this.$dispatch('shown');
	
	                if (this.autoHide) {
	                    this.timeout = setTimeout(this.hide, this.duration);
	                }
	            },
	            afterLeave: function afterLeave() {
	                this.$dispatch('hidden');
	
	                if (this.timeout) {
	                    clearTimeout(this.timeout);
	                    this.timeout = null;
	                }
	            }
	        }
	    }
	};

/***/ },
/* 143 */
/***/ function(module, exports) {

	module.exports = "\n<div\n    class=\"ui-snackbar\" :id=\"id\" transition=\"ui-snackbar-toggle\" @click=\"click\" v-show=\"show\"\n>\n    <div class=\"ui-snackbar-text\">\n        <slot>\n            <span v-text=\"message\"></span>\n        </slot>\n    </div>\n\n    <div class=\"ui-snackbar-action\">\n        <ui-button\n            class=\"ui-snackbar-action-button\" type=\"flat\" :color=\"actionColor\"\n            :text=\"action\" @click.stop=\"actionClick\" v-if=\"action\"\n        ></ui-button>\n    </div>\n</div>\n";

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(145)
	__vue_script__ = __webpack_require__(146)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiSnackbarContainer.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(147)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiSnackbarContainer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 145 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _uuid = __webpack_require__(83);
	
	var _uuid2 = _interopRequireDefault(_uuid);
	
	var _UiSnackbar = __webpack_require__(140);
	
	var _UiSnackbar2 = _interopRequireDefault(_UiSnackbar);
	
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
	
	    events: {
	        'ui-snackbar::create': function uiSnackbarCreate(snackbar) {
	            snackbar.show = false;
	            snackbar.id = snackbar.id || _uuid2.default.short('ui-snackbar-');
	            snackbar.duration = snackbar.duration || this.defaultDuration;
	
	            this.queue.push(snackbar);
	
	            if (this.queue.length === 1) {
	                this.showNext();
	            } else {
	                if (!this.queueSnackbars) {
	                    this.queue[0].show = false;
	                }
	            }
	        }
	    },
	
	    data: function data() {
	        return {
	            queue: [] };
	    },
	
	
	    methods: {
	        showNext: function showNext() {
	            if (!this.queue.length) {
	                return;
	            }
	
	            this.queue[0].show = true;
	        },
	        shown: function shown(snackbar) {
	            this.$dispatch('snackbar-shown', snackbar);
	            this.callHook('onShow', snackbar);
	        },
	        hidden: function hidden(snackbar) {
	            this.$dispatch('snackbar-hidden', snackbar);
	            this.callHook('onHide', snackbar);
	
	            this.queue.$remove(snackbar);
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
/* 147 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ui-snackbar-container\" :class=\"[position]\">\n    <ui-snackbar\n        :message=\"s.message\" :duration=\"s.duration\" :show.sync=\"s.show\" :action=\"s.action\"\n        :action-color=\"s.actionColor\" :persistent=\"s.persistent\" :id=\"s.id\" auto-hide\n\n        @shown=\"shown(s)\" @hidden=\"hidden(s)\" @clicked=\"clicked(s)\"\n        @action-clicked=\"actionClicked(s)\"\n\n        v-for=\"s in queue\"\n    ></ui-snackbar>\n</div>\n";

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(149)
	__vue_script__ = __webpack_require__(150)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiSwitch.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(151)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiSwitch.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 149 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _disabled = __webpack_require__(55);
	
	var _disabled2 = _interopRequireDefault(_disabled);
	
	var _ReceivesTargetedEvent = __webpack_require__(86);
	
	var _ReceivesTargetedEvent2 = _interopRequireDefault(_ReceivesTargetedEvent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-switch',
	
	    props: {
	        name: String,
	        value: {
	            type: Boolean,
	            required: true,
	            twoWay: true
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
	
	
	    events: {
	        'ui-input::reset': function uiInputReset(id) {
	            if (!this.eventTargetsComponent(id)) {
	                return;
	            }
	
	            this.value = this.initialValue;
	        }
	    },
	
	    directives: {
	        disabled: _disabled2.default
	    },
	
	    mixins: [_ReceivesTargetedEvent2.default]
	};

/***/ },
/* 151 */
/***/ function(module, exports) {

	module.exports = "\n<label\n    class=\"ui-switch\"\n    :class=\"{ 'checked': value, 'disabled': disabled, 'label-left': labelLeft }\"\n>\n    <div class=\"ui-switch-container\">\n        <input\n            class=\"ui-switch-input\" type=\"checkbox\" :name=\"name\" :id=\"id\" v-model=\"value\"\n            v-disabled=\"disabled\"\n        >\n\n        <div class=\"ui-switch-track\"></div>\n        <div class=\"ui-switch-thumb\"></div>\n\n        <div class=\"ui-switch-focus-ring\"></div>\n    </div>\n\n    <div class=\"ui-switch-label-text\" v-if=\"!hideLabel\">\n        <slot>\n            <span v-text=\"label\"></span>\n        </slot>\n    </div>\n</label>\n";

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(153)
	__vue_script__ = __webpack_require__(154)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiTab.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(155)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiTab.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 153 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 154 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: 'ui-tab',
	
	    props: {
	        id: String,
	        header: String,
	        icon: String,
	        disabled: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    computed: {
	        active: function active() {
	            return this.$parent.activeTab === this.id;
	        }
	    },
	
	    watch: {
	        active: function active() {
	            if (this.active) {
	                this.$dispatch('selected', this.id);
	            } else {
	                this.$dispatch('deselected', this.id);
	            }
	        }
	    }
	};

/***/ },
/* 155 */
/***/ function(module, exports) {

	module.exports = "\n<div\n    class=\"ui-tab\" :id=\"id\" role=\"tabpanel\" :tabindex=\"active ? '0' : null\"\n    :aria-hidden=\"!active ? 'true' : null\" v-show=\"active\"\n>\n    <slot></slot>\n</div>\n";

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(157)
	__vue_script__ = __webpack_require__(158)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiTabs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(163)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiTabs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 157 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _uuid = __webpack_require__(83);
	
	var _uuid2 = _interopRequireDefault(_uuid);
	
	var _UiTabHeaderItem = __webpack_require__(159);
	
	var _UiTabHeaderItem2 = _interopRequireDefault(_UiTabHeaderItem);
	
	var _disabled = __webpack_require__(55);
	
	var _disabled2 = _interopRequireDefault(_disabled);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-tabs',
	
	    props: {
	        type: {
	            type: String,
	            default: 'text' },
	        activeTab: String,
	        backgroundColor: {
	            type: String,
	            default: 'default', coerce: function coerce(color) {
	                return 'background-color-' + color;
	            }
	        },
	        textColor: {
	            type: String,
	            default: 'black', coerce: function coerce(color) {
	                return 'text-color-' + color;
	            }
	        },
	        textColorActive: {
	            type: String,
	            default: 'primary', coerce: function coerce(color) {
	                return 'text-color-active-' + color;
	            }
	        },
	        indicatorColor: {
	            type: String,
	            default: 'primary', coerce: function coerce(color) {
	                return 'color-' + color;
	            }
	        },
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
	            activeTabElement: null
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
	                var tabContainerWidth = this.$els.tabsContainer.offsetWidth;
	
	                return tabContainerWidth - (left + width) + 'px';
	            }
	        }
	    },
	
	    ready: function ready() {
	        var _this = this;
	
	        for (var i = 0; i < this.$children.length; i++) {
	            this.$children[i].id = this.$children[i].id || _uuid2.default.short('ui-tab-');
	        }
	
	        this.activeTab = this.activeTab || this.$children[0].id;
	
	        this.$nextTick(function () {
	            if (_this.$els.tabsContainer) {
	                _this.activeTabElement = _this.$els.tabsContainer.querySelector('.active');
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
	
	            this.$dispatch('active-tab-changed', tab.id);
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
	        }
	    },
	
	    components: {
	        UiTabHeaderItem: _UiTabHeaderItem2.default
	    },
	
	    directives: {
	        disabled: _disabled2.default
	    }
	};

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(160)
	__vue_script__ = __webpack_require__(161)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiTabHeaderItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(162)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiTabHeaderItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

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
	
	var _UiIcon = __webpack_require__(6);
	
	var _UiIcon2 = _interopRequireDefault(_UiIcon);
	
	var _disabled = __webpack_require__(55);
	
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
/* 162 */
/***/ function(module, exports) {

	module.exports = "\n<li\n    class=\"ui-tab-header-item\" role=\"tab\"\n    :class=\"{ 'active': active, 'disabled': disabled, ['type-' + type]: true }\"\n\n    :tabindex=\"active ? 0 : -1\" :aria-controls=\"id\" :aria-selected=\"active ? 'true' : null\"\n    v-disabled=\"disabled\" v-el:item\n>\n    <div\n        class=\"ui-tab-header-item-icon\" v-if=\"type === 'icon' || type === 'icon-and-text'\"\n    >\n        <ui-icon :icon=\"icon\"></ui-icon>\n    </div>\n\n    <div\n        class=\"ui-tab-header-item-text\" v-text=\"text\"\n        v-if=\"type === 'text' || type === 'icon-and-text'\"\n    ></div>\n\n    <ui-ripple-ink :trigger=\"$els.item\" v-if=\"!hideRippleInk && !disabled\"></ui-ripple-ink>\n</li>\n";

/***/ },
/* 163 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ui-tabs\" :class=\"styleClasses\">\n    <div class=\"ui-tabs-header\" :class=\"[backgroundColor]\">\n        <ul\n            class=\"ui-tabs-header-items\" :class=\"[textColor, textColorActive]\" role=\"tablist\"\n            v-el:tabs-container\n        >\n            <ui-tab-header-item\n                :type=\"type\" :id=\"tab.id\" :icon=\"tab.icon\" :text=\"tab.header\"\n                :active=\"activeTab === tab.id\" :disabled=\"tab.disabled\"\n                :hide-ripple-ink=\"hideRippleInk\"\n\n                @click=\"select($event, tab)\" @keydown.left=\"selectPrev(index)\"\n                @keydown.right=\"selectNext($index)\"\n\n                v-for=\"(index, tab) in $children\" v-ref:tab-elements\n            ></ui-tab-header-item>\n        </ul>\n\n        <div\n            class=\"ui-tabs-active-tab-indicator\" :class=\"[indicatorColor]\"\n            :style=\"{ 'left': indicatorLeft, 'right': indicatorRight }\"\n        ></div>\n    </div>\n\n    <div class=\"ui-tabs-body\">\n        <slot></slot>\n    </div>\n</div>\n";

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(165)
	__vue_script__ = __webpack_require__(166)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiTextbox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(167)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiTextbox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 165 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _validatorjs = __webpack_require__(68);
	
	var _validatorjs2 = _interopRequireDefault(_validatorjs);
	
	var _UiIcon = __webpack_require__(6);
	
	var _UiIcon2 = _interopRequireDefault(_UiIcon);
	
	var _HasTextInput = __webpack_require__(85);
	
	var _HasTextInput2 = _interopRequireDefault(_HasTextInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-textbox',
	
	    props: {
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
	        autocomplete: {
	            type: Boolean,
	            default: true
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
	
	            if (this.validationRules && !this.validateOnBlur) {
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
	
	    events: {
	        'ui-input::reset': function uiInputReset(id) {
	            var _this = this;
	
	            if (!this.eventTargetsComponent(id)) {
	                return;
	            }
	
	            this.ignoreValueChange = true;
	
	            if (document.activeElement === this.$el.querySelector('input') || document.activeElement === this.$el.querySelector('textarea')) {
	                document.activeElement.blur();
	            }
	
	            this.validationError = '';
	            this.value = this.initialValue;
	            this.valid = true;
	            this.dirty = false;
	
	            this.$nextTick(function () {
	                _this.ignoreValueChange = false;
	            });
	        }
	    },
	
	    methods: {
	        focussed: function focussed() {
	            this.active = true;
	            this.$dispatch('focussed');
	        },
	        blurred: function blurred() {
	            this.active = false;
	
	            if (!this.dirty) {
	                this.dirty = true;
	            }
	
	            this.$dispatch('blurred');
	
	            if (this.validationRules) {
	                this.validate();
	            }
	        },
	        changed: function changed() {
	            this.$dispatch('changed');
	        },
	        keydown: function keydown(e) {
	            this.$dispatch('keydown', e);
	        },
	        keydownEnter: function keydownEnter(e) {
	            this.$dispatch('keydown-enter', e);
	        },
	        validate: function validate() {
	            var data = {
	                value: this.value
	            };
	
	            var rules = {
	                value: this.validationRules
	            };
	
	            var validation = new _validatorjs2.default(data, rules, this.validationMessages);
	            validation.setAttributeNames({ value: this.name.replace(/_/g, ' ') });
	
	            this.valid = validation.passes();
	
	            if (!this.valid) {
	                this.validationError = validation.errors.first('value');
	            }
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
	
	    mixins: [_HasTextInput2.default]
	};

/***/ },
/* 167 */
/***/ function(module, exports) {

	module.exports = "\n<div\n    class=\"ui-textbox\"\n    :class=\"{\n        'disabled': disabled, 'invalid': !valid, 'dirty': dirty, 'active': active,\n        'has-label': !hideLabel, 'is-multi-line': multiLine, 'icon-right': iconRight,\n        'has-counter': maxLength\n    }\"\n>\n    <div class=\"ui-textbox-icon-wrapper\" v-if=\"showIcon\">\n        <ui-icon :icon=\"icon\" class=\"ui-textbox-icon\"></ui-icon>\n    </div>\n\n    <div class=\"ui-textbox-content\">\n        <label class=\"ui-textbox-label\">\n            <div class=\"ui-textbox-label-text\" v-text=\"label\" v-if=\"!hideLabel\"></div>\n\n            <input\n                class=\"ui-textbox-input\" :type=\"type\" :placeholder=\"placeholder\" :name=\"name\"\n                :id=\"id\" :number=\"type === 'number' ? true : null\" :min=\"minValue\"\n                :max=\"maxValue\" :step=\"stepValue\" :autocomplete=\"autocomplete ? null : 'off'\"\n\n                @focus=\"focussed\" @blur=\"blurred\" @change=\"changed\" @keydown=\"keydown\"\n                @keydown.enter=\"keydownEnter\" debounce=\"debounce\"\n\n                v-model=\"value | trim\" v-disabled=\"disabled\" v-if=\"!multiLine\"\n            >\n\n            <textarea\n                class=\"ui-textbox-textarea\" :placeholder=\"placeholder\" :name=\"name\" :id=\"id\"\n                :rows=\"rows\"\n\n                @focus=\"focussed\" @blur=\"blurred\" @change=\"changed\" @keydown=\"keydown\"\n                @keydown.enter=\"keydownEnter\" debounce=\"debounce\"\n\n                v-model=\"value | trim\" v-disabled=\"disabled\" v-else\n            ></textarea>\n        </label>\n\n        <div class=\"ui-textbox-feedback\" v-if=\"showFeedback || maxLength\">\n            <div\n                class=\"ui-textbox-error-text\" transition=\"ui-textbox-feedback-toggle\"\n                v-text=\"validationError\" v-show=\"!hideValidationErrors && !valid\"\n            ></div>\n\n            <div\n                class=\"ui-textbox-help-text\" transition=\"ui-textbox-feedback-toggle\"\n                v-text=\"helpText\" v-else\n            ></div>\n\n            <div\n                class=\"ui-textbox-counter\" v-text=\"value.length + '/' + maxLength\"\n                v-if=\"maxLength\"\n            ></div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(169)
	__vue_script__ = __webpack_require__(170)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\UiToolbar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(171)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\code\\packages\\keen-ui\\src\\UiToolbar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 169 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _UiProgressLinear = __webpack_require__(116);
	
	var _UiProgressLinear2 = _interopRequireDefault(_UiProgressLinear);
	
	var _UiIconButton = __webpack_require__(10);
	
	var _UiIconButton2 = _interopRequireDefault(_UiIconButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ui-toolbar',
	
	    props: {
	        type: {
	            type: String,
	            default: 'default', coerce: function coerce(type) {
	                return 'ui-toolbar-' + type;
	            }
	        },
	        textColor: {
	            type: String,
	            default: 'black', coerce: function coerce(color) {
	                return 'text-color-' + color;
	            }
	        },
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
	            var classes = [this.type, this.textColor];
	
	            if (!this.flat) {
	                classes.push('ui-toolbar-raised');
	            }
	
	            return classes;
	        },
	        iconColor: function iconColor() {
	            if (this.textColor === 'text-color-black') {
	                return 'black';
	            }
	
	            return 'white';
	        },
	        preloaderColor: function preloaderColor() {
	            if (this.textColor === 'text-color-black') {
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
	            this.$dispatch('nav-icon-clicked');
	        }
	    },
	
	    components: {
	        UiProgressLinear: _UiProgressLinear2.default,
	        UiIconButton: _UiIconButton2.default
	    }
	};

/***/ },
/* 171 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ui-toolbar\" :class=\"styleClasses\">\n    <div class=\"ui-toolbar-left\">\n        <ui-icon-button\n            class=\"ui-toolbar-nav-icon\" type=\"clear\" :color=\"iconColor\" :icon=\"navIcon\"\n            @click=\"navIconClick\" v-if=\"!hideNavIcon\"\n        ></ui-icon-button>\n\n        <div class=\"ui-toolbar-brand\" v-if=\"showBrand\">\n            <slot name=\"brand\">\n                <div class=\"ui-toolbar-brand-text\" v-text=\"brand\"></div>\n            </slot>\n        </div>\n    </div>\n\n    <div class=\"ui-toolbar-center\">\n        <div class=\"ui-toolbar-divider\" v-if=\"brandDividerVisible\"></div>\n\n        <slot>\n            <div class=\"ui-toolbar-title\" v-text=\"title\"></div>\n        </slot>\n    </div>\n\n    <div class=\"ui-toolbar-right\">\n        <slot name=\"actions\"></slot>\n    </div>\n\n    <ui-progress-linear\n        :show=\"loading\" class=\"ui-toolbar-preloader\" :class=\"{ 'position-top' : preloaderTop }\"\n        :color=\"preloaderColor\"\n    ></ui-progress-linear>\n</div>\n";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=keen-ui.js.map