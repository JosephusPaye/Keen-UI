module.exports =
/******/ (function(modules) { // webpackBootstrap
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

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 189);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(77)

/* template */
var __vue_template__ = __webpack_require__(144)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiTab.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(79)

/* template */
var __vue_template__ = __webpack_require__(148)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiTabs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);


/* harmony default export */ exports["a"] = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a();

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(55)

/* template */
var __vue_template__ = __webpack_require__(147)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiButton.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(60)

/* template */
var __vue_template__ = __webpack_require__(156)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiIcon.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiRippleInk_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiRippleInk_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__UiRippleInk_vue__);


/* harmony default export */ exports["a"] = {
    props: {
        hideRippleInk: {
            type: Boolean,
            default: false
        }
    },

    components: {
        UiRippleInk: __WEBPACK_IMPORTED_MODULE_0__UiRippleInk_vue___default.a
    }
};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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

/* harmony default export */ exports["a"] = {
    generate: generate,
    short: short
};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(61)

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
if (__vue_options__.functional) {console.error("[vue-loader] UiIconButton.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(67)

/* template */
var __vue_template__ = __webpack_require__(163)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiProgressCircular.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);

/**
 * Adapted from dominus v6.0.1
 * https://github.com/bevacqua/dominus/blob/master/src/classes.js
 */

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
    var elementObjects = (typeof HTMLElement === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(HTMLElement)) === 'object';

    return elementObjects ? o instanceof HTMLElement : isElementObject(o);
}

function isElementObject(o) {
    return o && (typeof o === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(o)) === 'object' && typeof o.nodeName === 'string' && o.nodeType === 1;
}

/* harmony default export */ exports["a"] = {
    add: add,
    remove: remove,
    contains: contains,
    has: contains,
    set: set,
    get: classes
};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(62)

/* template */
var __vue_template__ = __webpack_require__(157)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiMenu.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(65)

/* template */
var __vue_template__ = __webpack_require__(159)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiPopover.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = require("vue");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);

var typeCheck = function typeCheck(arg) {
    var t = typeof arg === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(arg);
    return (t === 'object' ? arg == null ? 'null' : Object.prototype.toString.call(arg).slice(8, -1) : t).toLowerCase();
};

/* harmony default export */ exports["a"] = typeCheck;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_event_bus__ = __webpack_require__(2);


/* harmony default export */ exports["a"] = {
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
            __WEBPACK_IMPORTED_MODULE_0__helpers_event_bus__["a" /* default */].$emit('menu-option-selected', option);
        }
    }
};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ReceivesTargetedEvent__ = __webpack_require__(5);


/* harmony default export */ exports["a"] = {
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
        // Cache value for later reset
        this.initialValue = this.value;
    },


    mixins: [__WEBPACK_IMPORTED_MODULE_0__ReceivesTargetedEvent__["a" /* default */]]
};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tether_drop__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tether_drop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tether_drop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_classlist__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_event_bus__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_type_check__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ReceivesTargetedEvent__ = __webpack_require__(5);






/* harmony default export */ exports["a"] = {
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
            default: 'click' // 'click', 'hover', 'focus', 'always'
        }
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
        __WEBPACK_IMPORTED_MODULE_2__helpers_event_bus__["a" /* default */].$on('ui-dropdown::open', function (id) {
            // Abort if event isn't meant for this component
            if (!_this.eventTargetsComponent(id)) {
                return;
            }
            _this.openDropdown();
        });

        __WEBPACK_IMPORTED_MODULE_2__helpers_event_bus__["a" /* default */].$on('ui-dropdown::close', function (id) {
            // Abort if event isn't meant for this component
            if (!_this.eventTargetsComponent(id)) {
                return;
            }
            _this.closeDropdown();
        });

        __WEBPACK_IMPORTED_MODULE_2__helpers_event_bus__["a" /* default */].$on('ui-dropdown::toggle', function (id) {
            // Abort if event isn't meant for this component
            if (!_this.eventTargetsComponent(id)) {
                return;
            }
            _this.toggleDropdown();
        });
    },


    methods: {
        initializeDropdown: function initializeDropdown() {
            var _t = this.$parent.$refs[this.trigger];

            this._trigger = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_type_check__["a" /* default */])(_t) === 'array' ? _t[0] : _t;
            this.drop = new __WEBPACK_IMPORTED_MODULE_0_tether_drop___default.a({
                target: this._trigger,
                content: this.$refs.dropdown,
                position: this.dropdownPosition,
                constrainToWindow: true,
                openOn: this.openOn
            });

            // TO FIX: Hacky workaround for Tether not positioning
            // correctly for positions other than 'bottom left'
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


        /**
         * Ensures drop is horizontally within viewport (vertical is already solved by drop.js).
         * https://github.com/HubSpot/drop/issues/16
         */
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
            __WEBPACK_IMPORTED_MODULE_1__helpers_classlist__["a" /* default */].add(this._trigger, 'dropdown-open');

            this.lastFocussedElement = document.activeElement;
            this.$refs.dropdown.focus();
            this.$emit('dropdown-opened');
        },
        dropdownClosed: function dropdownClosed() {
            __WEBPACK_IMPORTED_MODULE_1__helpers_classlist__["a" /* default */].remove(this._trigger, 'dropdown-open');

            if (this.lastFocussedElement) {
                this.lastFocussedElement.focus();
            }

            this.$emit('dropdown-closed');
        }
    },

    mixins: [__WEBPACK_IMPORTED_MODULE_4__ReceivesTargetedEvent__["a" /* default */]]
};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiTooltip_vue__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiTooltip_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__UiTooltip_vue__);


/* harmony default export */ exports["a"] = {
    props: {
        tooltip: String,
        openTooltipOn: String,
        tooltipPosition: String
    },

    components: {
        UiTooltip: __WEBPACK_IMPORTED_MODULE_0__UiTooltip_vue___default.a
    }
};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validatorjs__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validatorjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_validatorjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_event_bus__ = __webpack_require__(2);



/* harmony default export */ exports["a"] = {
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

        __WEBPACK_IMPORTED_MODULE_1__helpers_event_bus__["a" /* default */].$on('ui-input::set-validity', function (valid, error, id) {
            // Abort if event isn't meant for this component
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

            var validation = new __WEBPACK_IMPORTED_MODULE_0_validatorjs___default.a(data, rules, this._validationMessages);

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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(64)

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
if (__vue_options__.functional) {console.error("[vue-loader] UiModal.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(68)

/* template */
var __vue_template__ = __webpack_require__(162)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiProgressLinear.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(71)

/* template */
var __vue_template__ = __webpack_require__(173)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiRatingIcon.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(73)

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
if (__vue_options__.functional) {console.error("[vue-loader] UiRippleInk.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(81)

/* template */
var __vue_template__ = __webpack_require__(170)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiTooltip.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 25 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ },
/* 26 */
/***/ function(module, exports) {

module.exports = require("fuzzysearch");

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(82);



/* harmony default export */ exports["default"] = function (context) {
    __WEBPACK_IMPORTED_MODULE_1__app__["a" /* router */].push(context.url);
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve) {
        setTimeout(function () {
            resolve();
        }, 0);
    }).then(function () {
        return __WEBPACK_IMPORTED_MODULE_1__app__["b" /* app */];
    });
};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Navbar_vue__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Navbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Navbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiToolbar_vue__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiToolbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_UiToolbar_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ exports["default"] = {
    data: function data() {
        return {
            sidebar: false,
            activeModule: ''
        };
    },


    methods: {
        toggleSidebar: function toggleSidebar() {
            this.sidebar = !this.sidebar;
        }
    },

    components: {
        UiToolbar: __WEBPACK_IMPORTED_MODULE_1__src_UiToolbar_vue___default.a,
        Navbar: __WEBPACK_IMPORTED_MODULE_0__components_Navbar_vue___default.a
    },

    beforeUpdate: function beforeUpdate() {
        this.activeModule = this.$route.meta;
    }
};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiButton_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_UiButton_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var menu = [{
    id: 'alert',
    text: 'UiAlert'
}, {
    id: 'autocomplete',
    text: 'UiAutocomplete'
}, {
    id: 'button',
    text: 'UiButton'
}, {
    id: 'checkbox',
    text: 'UiCheckbox'
}, {
    id: 'collapsible',
    text: 'UiCollapsible'
}, {
    id: 'confirm',
    text: 'UiConfirm'
}, {
    id: 'fab',
    text: 'UiFab'
}, {
    id: 'icon-button',
    text: 'UiIconButton'
}, {
    id: 'icon',
    text: 'UiIcon'
}, {
    id: 'menu',
    text: 'UiMenu'
}, {
    id: 'modal',
    text: 'UiModal'
}, {
    id: 'popover',
    text: 'UiPopover'
}, {
    id: 'preloader',
    text: 'UiPreloader'
}, {
    id: 'progress-circular',
    text: 'UiProgressCircular'
}, {
    id: 'progress-linear',
    text: 'UiProgressLinear'
}, {
    id: 'radio',
    text: 'UiRadio'
}, {
    id: 'rating',
    text: 'UiRating & UiRatingPreview'
}, {
    id: 'rippleInk',
    text: 'UiRippleInk'
}, {
    id: 'select',
    text: 'UiSelect'
}, {
    id: 'slider',
    text: 'UiSlider'
}, {
    id: 'snackbar',
    text: 'UiSnackbar & UiSnackbarContainer'
}, {
    id: 'switch',
    text: 'UiSwitch'
}, {
    id: 'tabs',
    text: 'UiTabs'
}, {
    id: 'textbox',
    text: 'UiTextbox'
}, {
    id: 'toolbar',
    text: 'UiToolbar'
}, {
    id: 'tooltip',
    text: 'UiTooltip'
}].sort(function (itemA, itemB) {
    return itemA.id > itemB.id ? 1 : -1;
});
/* harmony default export */ exports["default"] = {
    props: {
        value: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            menu: menu
        };
    },

    components: {
        UiButton: __WEBPACK_IMPORTED_MODULE_0__src_UiButton_vue___default.a
    }
};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiAlert_vue__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiAlert_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_UiAlert_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ exports["default"] = {
    components: {
        UiTab: __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default.a,
        UiTabs: __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default.a,
        UiAlert: __WEBPACK_IMPORTED_MODULE_2__src_UiAlert_vue___default.a
    },
    methods: {
        eventTest: function eventTest() {
            alert('custom event: "dismissed"');
        }
    }
};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiAutocomplete_vue__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiAutocomplete_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_UiAutocomplete_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






var months = 'January February March April May June July August September October November December'.split(' ');

var theSimpsons = [{
    value: 'maggie',
    text: 'Maggie Simpson',
    image: 'https://i.imgur.com/eK26qtK.jpg'
}, {
    value: 'lisa',
    text: 'Lisa Simpson',
    image: 'https://i.imgur.com/wIb44g9.jpg'
}, {
    value: 'bart',
    text: 'Bart Simpson',
    image: 'https://i.imgur.com/XkEz9zg.jpg'
}, {
    value: 'marge',
    text: 'Marge Simpson',
    image: 'https://i.imgur.com/MuFcpQ4.jpg'
}, {
    value: 'homer',
    text: 'Homer Simpson',
    image: 'https://i.imgur.com/aYPRWX4.jpg'
}];

var externalFamily = [{
    value: 'mona',
    text: 'Mona Simpson',
    image: 'https://i.imgur.com/z5xy1eW.jpg'
}, {
    value: 'abe',
    text: 'Abe Simpson',
    image: 'https://i.imgur.com/3UF8hrf.jpg'
}];

/* harmony default export */ exports["default"] = {
    data: function data() {
        return {
            months: months,
            theSimpsons: theSimpsons,
            favouriteMonth: '',
            favouriteSimpson: '',
            favouriteDisabel: '',
            addedExtendedFamily: false
        };
    },


    methods: {
        add: function add() {
            this.theSimpsons = this.theSimpsons.concat(externalFamily);
            this.addedExtendedFamily = true;
        }
    },

    components: {
        UiTab: __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default.a,
        UiTabs: __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default.a,
        UiButton: __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default.a,
        UiAutocomplete: __WEBPACK_IMPORTED_MODULE_3__src_UiAutocomplete_vue___default.a
    }
};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var dropdownOptions = [{
    id: 'edit',
    text: 'Edit',
    icon: 'edit',
    secondaryText: 'Ctrl+E'
}, {
    id: 'duplicate',
    text: 'Duplicate',
    icon: 'content_copy',
    secondaryText: 'Ctrl+D'
}, {
    id: 'share',
    text: 'Share',
    icon: 'share',
    secondaryText: 'Ctrl+Shift+S',
    disabled: true
}, {
    type: 'divider'
}, {
    id: 'delete',
    text: 'Delete',
    icon: 'delete',
    secondaryText: 'Del'
}];

/* harmony default export */ exports["default"] = {
    data: function data() {
        return {
            loading: {
                btn1: false,
                btn2: false,
                btn3: false,
                btn4: false,
                btn5: false,
                btn6: false
            },
            shareMenuOptions: dropdownOptions
        };
    },


    methods: {
        stopSpinners: function stopSpinners() {
            this.loading.btn1 = false;
            this.loading.btn2 = false;
            this.loading.btn3 = false;
            this.loading.btn4 = false;
            this.loading.btn5 = false;
            this.loading.btn6 = false;
        },
        menuOptionSelected: function menuOptionSelected(option) {
            console.log('Selected', option.id);
        }
    },

    components: {
        UiTab: __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default.a,
        UiTabs: __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default.a,
        UiButton: __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default.a
    }
};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiCheckbox_vue__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiCheckbox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_UiCheckbox_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_helpers_event_bus__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ exports["default"] = {
    data: function data() {
        return {
            favouriteSimpsons: [],
            htmlValue: false,
            firstValues: {
                one: true,
                two: false,
                three: true,
                four: true,
                five: false,
                six: true
            },
            secondValues: {
                one: true,
                two: false,
                three: true,
                four: true,
                five: false,
                six: true
            },
            thirdValues: {
                one: true,
                two: false,
                three: true,
                four: true,
                five: false,
                six: true
            }
        };
    },


    components: {
        UiTab: __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default.a,
        UiTabs: __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default.a,
        UiButton: __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default.a,
        UiCheckbox: __WEBPACK_IMPORTED_MODULE_3__src_UiCheckbox_vue___default.a
    },

    methods: {
        resetCheckboxes: function resetCheckboxes() {
            __WEBPACK_IMPORTED_MODULE_4__src_helpers_event_bus__["a" /* default */].$emit('ui-input::reset');
        }
    }
};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiCollapsible_vue__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiCollapsible_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_UiCollapsible_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ exports["default"] = {
    components: {
        UiTab: __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default.a,
        UiTabs: __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default.a,
        UiCollapsible: __WEBPACK_IMPORTED_MODULE_2__src_UiCollapsible_vue___default.a
    }
};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiConfirm_vue__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiConfirm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_UiConfirm_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ exports["default"] = {
    data: function data() {
        return {
            confirmResult: '',
            publishRequestInProgress: false,
            deleteRequestInProgress: false,
            show: {
                genericConfirm: false,
                genericConfirm2: false,
                publishConfirm: false,
                deleteConfirm: false
            }
        };
    },


    methods: {
        confirmed: function confirmed() {
            this.confirmResult = 'You confirmed the request.';
        },
        denied: function denied() {
            this.confirmResult = 'You denied the request.';
        },
        publishConfirmed: function publishConfirmed() {
            var _this = this;

            this.publishRequestInProgress = true;

            setTimeout(function () {
                _this.publishRequestInProgress = false;

                _this.show.publishConfirm = false;
                _this.confirmResult = 'The post was published.';
            }, 5000);
        },
        publishDenied: function publishDenied() {
            this.confirmResult = 'You chose to NOT publish the post.';
        },
        deleteConfirmed: function deleteConfirmed() {
            this.confirmResult = 'You chose to delete the post.';
        },
        deleteDenied: function deleteDenied() {
            this.confirmResult = 'You chose to NOT delete the post.';
        }
    },

    components: {
        UiTab: __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default.a,
        UiTabs: __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default.a,
        UiButton: __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default.a,
        UiConfirm: __WEBPACK_IMPORTED_MODULE_3__src_UiConfirm_vue___default.a
    }
};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiFab_vue__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiFab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_UiFab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTab_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_UiTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiTabs_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_UiTabs_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ exports["default"] = {
    components: {
        UiTab: __WEBPACK_IMPORTED_MODULE_1__src_UiTab_vue___default.a,
        UiTabs: __WEBPACK_IMPORTED_MODULE_2__src_UiTabs_vue___default.a,
        UiFab: __WEBPACK_IMPORTED_MODULE_0__src_UiFab_vue___default.a
    }
};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiIconButton_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiIconButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_UiIconButton_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var menu = [{
    id: 'settings',
    text: 'Settings'
}, {
    id: 'about',
    text: 'About'
}, {
    id: 'help',
    text: 'Help'
}];

/* harmony default export */ exports["default"] = {
    data: function data() {
        return {
            loading: {
                spinner1: false,
                spinner2: false
            },
            menu: menu
        };
    },


    methods: {
        startSpinner: function startSpinner(number) {
            var _this = this;

            if (number === 1) {
                this.loading.spinner1 = true;

                setTimeout(function () {
                    _this.loading.spinner1 = false;
                }, 5000);

                return;
            }

            this.loading.spinner2 = true;

            setTimeout(function () {
                _this.loading.spinner2 = false;
            }, 5000);
        }
    },

    components: {
        UiTab: __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default.a,
        UiTabs: __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default.a,
        UiIconButton: __WEBPACK_IMPORTED_MODULE_2__src_UiIconButton_vue___default.a
    }
};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiIcon_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiIcon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_UiIcon_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ exports["default"] = {
    components: {
        UiTab: __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default.a,
        UiTabs: __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default.a,
        UiIcon: __WEBPACK_IMPORTED_MODULE_2__src_UiIcon_vue___default.a
    }
};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiMenu_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiMenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_UiMenu_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiButton_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_UiButton_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







var menuOptions = [{
    id: 'edit',
    text: 'Edit',
    icon: 'edit',
    secondaryText: 'Ctrl+E'
}, {
    id: 'duplicate',
    text: 'Duplicate',
    icon: 'content_copy',
    secondaryText: 'Ctrl+D'
}, {
    id: 'share',
    text: 'Share',
    icon: 'share',
    secondaryText: 'Ctrl+Shift+S',
    disabled: true
}, {
    type: 'divider'
}, {
    id: 'delete',
    text: 'Delete',
    icon: 'delete',
    secondaryText: 'Del'
}];

/* harmony default export */ exports["default"] = {
    data: function data() {
        return {
            menuOptions: menuOptions
        };
    },


    components: {
        UiTab: __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default.a,
        UiTabs: __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default.a,
        UiMenu: __WEBPACK_IMPORTED_MODULE_2__src_UiMenu_vue___default.a,
        UiButton: __WEBPACK_IMPORTED_MODULE_3__src_UiButton_vue___default.a
    }
};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiModal_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiModal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_UiModal_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ exports["default"] = {
    data: function data() {
        return {
            show: {
                modal1: false,
                modal2: false,
                modal3: false,
                modal4: false,
                modal5: false,
                modal6: false,
                modal7: false,
                modal8: false,
                modal9: false,
                modal10: false,
                modal11: false
            }
        };
    },

    methods: {
        say: function say(str) {
            alert(str);
        }
    },
    components: {
        UiTab: __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default.a,
        UiTabs: __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default.a,
        UiButton: __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default.a,
        UiModal: __WEBPACK_IMPORTED_MODULE_3__src_UiModal_vue___default.a
    }
};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiPopover_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiPopover_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_UiPopover_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiButton_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_UiButton_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_helpers_event_bus__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









var menuOptions = [{
    id: 'edit',
    text: 'Edit',
    icon: 'edit',
    keyboardShortcut: 'Ctrl+E'
}, {
    id: 'duplicate',
    text: 'Duplicate',
    icon: 'content_copy',
    keyboardShortcut: 'Ctrl+D'
}, {
    id: 'share',
    text: 'Share',
    icon: 'share',
    keyboardShortcut: 'Ctrl+Shift+S',
    disabled: true
}, {
    type: 'divider'
}, {
    id: 'delete',
    text: 'Delete',
    icon: 'delete',
    keyboardShortcut: 'Del'
}];

/* harmony default export */ exports["default"] = {
    data: function data() {
        return {
            menuOptions: menuOptions
        };
    },


    methods: {
        openPopover: function openPopover(id) {
            // Use timeout so the popover is open and then immediately closed due to the current
            // click event
            setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_4__src_helpers_event_bus__["a" /* default */].$emit('ui-dropdown::open', id);
            }, 100);
        }
    },

    components: {
        UiTab: __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default.a,
        UiTabs: __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default.a,
        UiPopover: __WEBPACK_IMPORTED_MODULE_2__src_UiPopover_vue___default.a,
        UiButton: __WEBPACK_IMPORTED_MODULE_3__src_UiButton_vue___default.a
    }
};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiPreloader_vue__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiPreloader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_UiPreloader_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ exports["default"] = {
    data: function data() {
        return {
            loading: true
        };
    },


    components: {
        UiTab: __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default.a,
        UiTabs: __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default.a,
        UiButton: __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default.a,
        UiPreloader: __WEBPACK_IMPORTED_MODULE_3__src_UiPreloader_vue___default.a
    }
};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiProgressCircular_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiProgressCircular_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_UiProgressCircular_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ exports["default"] = {
    data: function data() {
        return {
            progress: 0,
            loading: true,
            progressInterval: null
        };
    },


    components: {
        UiTab: __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default.a,
        UiTabs: __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default.a,
        UiButton: __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default.a,
        UiProgressCircular: __WEBPACK_IMPORTED_MODULE_3__src_UiProgressCircular_vue___default.a
    },

    mounted: function mounted() {
        var _this = this;

        this.progressInterval = setInterval(function () {
            if (_this.progress >= 100) {
                _this.progress = 0;
            } else {
                _this.progress += 5;
            }
        }, 500);
    },
    beforeDestroy: function beforeDestroy() {
        clearInterval(this.progressInterval);
    }
};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiProgressLinear_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiProgressLinear_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_UiProgressLinear_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ exports["default"] = {
    data: function data() {
        return {
            progress: 0,
            loading: true,
            progressInterval: null
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.progressInterval = setInterval(function () {
            if (_this.progress >= 100) {
                _this.progress = 0;
            } else {
                _this.progress += 5;
            }
        }, 500);
    },
    beforeDestroy: function beforeDestroy() {
        clearInterval(this.progressInterval);
    },


    components: {
        UiTab: __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default.a,
        UiTabs: __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default.a,
        UiButton: __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default.a,
        UiProgressLinear: __WEBPACK_IMPORTED_MODULE_3__src_UiProgressLinear_vue___default.a
    }
};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_helpers_event_bus__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_UiRadio_vue__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_UiRadio_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__src_UiRadio_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







var single1 = ['Default'];
var single2 = ['Label-left'];
var single3 = ['Checked'];
var single4 = [{ value: 'No-Label', hideLabel: true }];

var group1 = [{
    value: 'ned',
    text: 'Ned'
}, {
    value: 'rod',
    text: 'Rod'
}, {
    value: 'todd',
    text: 'Todd'
}];

var group2 = [{
    value: 'ned',
    text: 'Ned'
}, {
    value: 'maude',
    text: 'Maude',
    disabled: true
}, {
    value: 'rod',
    text: 'Rod'
}, {
    value: 'todd',
    text: 'Todd'
}];

/* harmony default export */ exports["default"] = {
    data: function data() {
        return {
            single1: '',
            single2: '',
            single3: 'Checked',
            single4: '',
            favourite: {
                group1: '',
                group2: 'rod',
                group3: 'todd',
                group4: 'ned',
                group5: 'ned',
                group6: 'ned'
            },
            options: {
                single1: single1,
                single2: single2,
                single3: single3,
                single4: single4,
                group1: group1,
                group2: group2
            }
        };
    },


    components: {
        UiTab: __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default.a,
        UiTabs: __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default.a,
        UiRadio: __WEBPACK_IMPORTED_MODULE_4__src_UiRadio_vue___default.a,
        UiButton: __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default.a
    },

    methods: {
        reset: function reset() {
            __WEBPACK_IMPORTED_MODULE_3__src_helpers_event_bus__["a" /* default */].$emit('ui-input::reset');
        }
    }
};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiRating_vue__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiRating_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_UiRating_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_UiRatingPreview_vue__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_UiRatingPreview_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__src_UiRatingPreview_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_helpers_event_bus__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ exports["default"] = {
    data: function data() {
        return {
            bagelRating: 'meh',
            values: {
                value1: 3,
                value2: 3,
                value3: 5
            }
        };
    },


    methods: {
        reset: function reset() {
            __WEBPACK_IMPORTED_MODULE_5__src_helpers_event_bus__["a" /* default */].$emit('ui-input::reset');
        },
        updateText: function updateText(previewRating) {
            var text;

            switch (previewRating) {
                case 1:
                    text = 'terrible';
                    break;
                case 2:
                    text = 'not bad';
                    break;
                case 3:
                    text = 'meh';
                    break;
                case 4:
                    text = 'OK';
                    break;
                case 5:
                    text = 'good';
                    break;
                case 6:
                    text = 'fantastic';
                    break;
                default:
                // do nothing
            }

            this.bagelRating = text;
        }
    },

    components: {
        UiTab: __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default.a,
        UiTabs: __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default.a,
        UiButton: __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default.a,
        UiRating: __WEBPACK_IMPORTED_MODULE_3__src_UiRating_vue___default.a,
        UiRatingPreview: __WEBPACK_IMPORTED_MODULE_4__src_UiRatingPreview_vue___default.a
    }
};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiRippleInk_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiRippleInk_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_UiRippleInk_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTab_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_UiTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiTabs_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_UiTabs_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var tvShows = [{
    name: 'Better Call Saul',
    image: 'https://i.imgur.com/SwZPSS2.jpg'
}, {
    name: 'Breaking Bad',
    image: 'https://i.imgur.com/tz6FJeN.jpg'
}, {
    name: 'Sherlock',
    image: 'https://i.imgur.com/Pf1TkJY.jpg'
}, {
    name: 'The Simpsons',
    image: 'https://i.imgur.com/HJmBlzf.jpg'
}];

var theSimpsons = [{
    value: 'maggie',
    text: 'Maggie Simpson',
    image: 'https://i.imgur.com/eK26qtK.jpg'
}, {
    value: 'lisa',
    text: 'Lisa Simpson',
    image: 'https://i.imgur.com/wIb44g9.jpg'
}, {
    value: 'bart',
    text: 'Bart Simpson',
    image: 'https://i.imgur.com/XkEz9zg.jpg'
}];

/* harmony default export */ exports["default"] = {
    data: function data() {
        return {
            theSimpsons: theSimpsons,
            tvShows: tvShows
        };
    },


    components: {
        UiTab: __WEBPACK_IMPORTED_MODULE_1__src_UiTab_vue___default.a,
        UiTabs: __WEBPACK_IMPORTED_MODULE_2__src_UiTabs_vue___default.a,
        UiRippleInk: __WEBPACK_IMPORTED_MODULE_0__src_UiRippleInk_vue___default.a,

        ImagePane: {
            props: ['image'],
            components: {
                UiRippleInk: __WEBPACK_IMPORTED_MODULE_0__src_UiRippleInk_vue___default.a
            }
        }
    }
};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiSelect_vue__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiSelect_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_UiSelect_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_helpers_event_bus__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// String.startsWith polyfill
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
        position = position || 0;
        return this.substr(position, searchString.length) === searchString;
    };
}








var colorStrings = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Pink', 'Lavender', 'Orange', 'Peach', 'Lime'];

var colors = [{
    text: 'Red',
    image: 'https://placehold.it/64/ff0000/ff0000',
    value: 'red'
}, {
    text: 'Blue',
    image: 'https://placehold.it/64/0000ff/0000ff',
    value: 'blue'
}, {
    text: 'Green',
    image: 'https://placehold.it/64/008000/008000',
    value: 'green'
}, {
    text: 'Yellow',
    image: 'https://placehold.it/64/ffff00/ffff00',
    value: 'yellow'
}, {
    text: 'Purple',
    image: 'https://placehold.it/64/800080/800080',
    value: 'purple'
}, {
    text: 'Pink',
    image: 'https://placehold.it/64/ffc0cb/ffc0cb',
    value: 'pink'
}, {
    text: 'Lavender',
    image: 'https://placehold.it/64/e6e6fa/e6e6fa',
    value: 'lavender'
}, {
    text: 'Orange',
    image: 'https://placehold.it/64/ffa500/ffa500',
    value: 'orange'
}, {
    text: 'Peach',
    image: 'https://placehold.it/64/ffdab9/ffdab9',
    value: 'peach'
}, {
    text: 'Lime',
    image: 'https://placehold.it/64/00ff00/00ff00',
    value: 'lime'
}];

var redShades = [{
    text: 'Red',
    image: 'https://placehold.it/64/ff0000/ff0000',
    value: 'red'
}, {
    text: 'Ced',
    value: 'ced',
    image: 'https://placehold.it/64/CF302C/CF302C'
}, {
    text: 'Cherry',
    value: 'cherry',
    image: 'https://placehold.it/64/9C0E04/9C0E04'
}, {
    text: 'Rose',
    value: 'rose',
    image: 'https://placehold.it/64/E3242B/E3242B'
}, {
    text: 'Jam',
    value: 'jam',
    image: 'https://placehold.it/64/5F100B/5F100B'
}, {
    text: 'Merlot',
    value: 'merlot',
    image: 'https://placehold.it/64/541F1B/541F1B'
}, {
    text: 'Garnet',
    value: 'garnet',
    image: 'https://placehold.it/64/600B04/600B04'
}, {
    text: 'Crimson',
    value: 'crimson',
    image: 'https://placehold.it/64/B80F08/B80F08'
}, {
    text: 'Ruby',
    value: 'ruby',
    image: 'https://placehold.it/64/900603/900603'
}, {
    text: 'Scarlet',
    value: 'scarlet',
    image: 'https://placehold.it/64/910D09/910D09'
}, {
    text: 'Wine',
    value: 'wine',
    image: 'https://placehold.it/64/4C0805/4C0805'
}, {
    text: 'Brick',
    value: 'brick',
    image: 'https://placehold.it/64/7D2910/7D2910'
}, {
    text: 'Apple',
    value: 'apple',
    image: 'https://placehold.it/64/A91B0D/A91B0D'
}, {
    text: 'Mahogany',
    value: 'mahogany',
    image: 'https://placehold.it/64/400D0A/400D0A'
}, {
    text: 'Blood',
    value: 'blood',
    image: 'https://placehold.it/64/710C04/710C04'
}, {
    text: 'Sangria',
    value: 'sangria',
    image: 'https://placehold.it/64/641612/641612'
}, {
    text: 'Berry',
    value: 'berry',
    image: 'https://placehold.it/64/7A1712/7A1712'
}, {
    text: 'Currant',
    value: 'currant',
    image: 'https://placehold.it/64/670C07/670C07'
}, {
    text: 'Blush',
    value: 'blush',
    image: 'https://placehold.it/64/BC544B/BC544B'
}, {
    text: 'Candy',
    value: 'candy',
    image: 'https://placehold.it/64/D21404/D21404'
}, {
    text: 'Lipstick',
    value: 'lipstick',
    image: 'https://placehold.it/64/9C1003/9C1003'
}];

var blueShades = [{
    text: 'Blue',
    value: 'blue',
    image: 'https://placehold.it/64/0000ff/0000ff'
}, {
    text: 'Slate',
    value: 'slate',
    image: 'https://placehold.it/64/747C87/747C87'
}, {
    text: 'Sky',
    value: 'sky',
    image: 'https://placehold.it/64/62C5DA/62C5DA'
}, {
    text: 'Navy',
    value: 'navy',
    image: 'https://placehold.it/64/0B1173/0B1173'
}, {
    text: 'Indigo',
    value: 'indigo',
    image: 'https://placehold.it/64/281E5D/281E5D'
}, {
    text: 'Cobalt',
    value: 'cobalt',
    image: 'https://placehold.it/64/1437BF/1437BF'
}, {
    text: 'Teal',
    value: 'teal',
    image: 'https://placehold.it/64/48AAAD/48AAAD'
}, {
    text: 'Ocean',
    value: 'ocean',
    image: 'https://placehold.it/64/016064/016064'
}, {
    text: 'Peacock',
    value: 'peacock',
    image: 'https://placehold.it/64/022D34/022D34'
}, {
    text: 'Azure',
    value: 'azure',
    image: 'https://placehold.it/64/1A1EA6/1A1EA6'
}, {
    text: 'Cerulean',
    value: 'cerulean',
    image: 'https://placehold.it/64/0393BC/0393BC'
}, {
    text: 'Lapis',
    value: 'lapis',
    image: 'https://placehold.it/64/2732C2/2732C2'
}, {
    text: 'Spruce',
    value: 'spruce',
    image: 'https://placehold.it/64/2C3E4C/2C3E4C'
}, {
    text: 'Stone',
    value: 'stone',
    image: 'https://placehold.it/64/59788D/59788D'
}, {
    text: 'Aegean',
    value: 'aegean',
    image: 'https://placehold.it/64/1F456E/1F456E'
}, {
    text: 'Berry',
    value: 'berry',
    image: 'https://placehold.it/64/27146D/27146D'
}, {
    text: 'Denim',
    value: 'denim',
    image: 'https://placehold.it/64/151E3D/151E3D'
}, {
    text: 'Admiral',
    value: 'admiral',
    image: 'https://placehold.it/64/061094/061094'
}, {
    text: 'Sapphire',
    value: 'sapphire',
    image: 'https://placehold.it/64/52B2C0/52B2C0'
}, {
    text: 'Artic',
    value: 'artic',
    image: 'https://placehold.it/64/82EDFD/82EDFD'
}];

var values = {
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    value6: '',
    value7: [],
    value8: [],
    value9: '',
    value10: []
};

/* harmony default export */ exports["default"] = {
    components: {
        UiTab: __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default.a,
        UiTabs: __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default.a,
        UiButton: __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default.a,
        UiSelect: __WEBPACK_IMPORTED_MODULE_3__src_UiSelect_vue___default.a
    },

    data: function data() {
        return {
            colors: colors,
            colorStrings: colorStrings,
            values: values,
            dynamicSelect: {
                value: null,
                options: [],
                timeout: null,
                loading: false,
                optionsLoaded: false
            }
        };
    },


    methods: {
        resetSelects: function resetSelects() {
            __WEBPACK_IMPORTED_MODULE_4__src_helpers_event_bus__["a" /* default */].$emit('ui-input::reset');
        },
        queryChanged: function queryChanged(query) {
            var _this = this;

            setTimeout(function () {
                if (!query.length) {
                    return;
                }

                _this.dynamicSelect.loading = true;
                _this.dynamicSelect.optionsLoaded = false;

                if (_this.dynamicSelect.timeout) {
                    clearTimeout(_this.dynamicSelect.timeout);
                }

                _this.dynamicSelect.timeout = setTimeout(function () {
                    if (query.toLowerCase().startsWith('red')) {
                        _this.dynamicSelect.options = redShades;
                    } else if (query.toLowerCase().startsWith('blue')) {
                        _this.dynamicSelect.options = blueShades;
                    } else {
                        _this.dynamicSelect.options = [];
                    }

                    _this.dynamicSelect.loading = false;
                    _this.dynamicSelect.optionsLoaded = true;
                }, 2500);
            }, 500);
        }
    }
};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiSlider_vue__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiSlider_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_UiSlider_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_helpers_event_bus__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






var values = {
    value1: 0,
    value2: 25,
    value3: 50,
    value4: 75,
    value5: 50
};

/* harmony default export */ exports["default"] = {
    data: function data() {
        return {
            values: values
        };
    },

    components: {
        UiTab: __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default.a,
        UiTabs: __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default.a,
        UiButton: __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default.a,
        UiSlider: __WEBPACK_IMPORTED_MODULE_3__src_UiSlider_vue___default.a
    },

    methods: {
        resetSliders: function resetSliders() {
            __WEBPACK_IMPORTED_MODULE_4__src_helpers_event_bus__["a" /* default */].$emit('ui-input::reset');
        }
    }
};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_helpers_event_bus__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ exports["default"] = {
    methods: {
        selectFavouritesTab: function selectFavouritesTab() {
            __WEBPACK_IMPORTED_MODULE_3__src_helpers_event_bus__["a" /* default */].$emit('ui-tabs::select', 'tab-set-1-favourites', 'tab-set-1');
        }
    },

    components: {
        UiTab: __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default.a,
        UiTabs: __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default.a,
        UiButton: __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default.a
    }
};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTooltip_vue__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTooltip_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_UiTooltip_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTab_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_UiTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiTabs_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_UiTabs_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var theSimpsons = [{
    position: 'top center',
    name: 'Maggie Simpson',
    image: 'https://i.imgur.com/eK26qtK.jpg'
}, {
    position: 'bottom center',
    name: 'Lisa Simpson',
    image: 'https://i.imgur.com/wIb44g9.jpg'
}, {
    position: 'right middle',
    name: 'Bart Simpson',
    image: 'https://i.imgur.com/XkEz9zg.jpg'
}];

/* harmony default export */ exports["default"] = {
    data: function data() {
        return {
            theSimpsons: theSimpsons
        };
    },


    components: {
        UiTab: __WEBPACK_IMPORTED_MODULE_1__src_UiTab_vue___default.a,
        UiTabs: __WEBPACK_IMPORTED_MODULE_2__src_UiTabs_vue___default.a,
        UiTooltip: __WEBPACK_IMPORTED_MODULE_0__src_UiTooltip_vue___default.a,

        ImagePane: {
            props: ['image', 'name', 'position'],
            components: {
                UiTooltip: __WEBPACK_IMPORTED_MODULE_0__src_UiTooltip_vue___default.a
            }
        }
    }
};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiIconButton_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiIconButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__UiIconButton_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ exports["default"] = {
    name: 'ui-alert',

    data: function data() {
        return {
            show: true
        };
    },


    props: {
        type: {
            type: String,
            default: 'info' // 'info', 'success', 'warning', or 'error'
        },
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
        UiIcon: __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue___default.a,
        UiIconButton: __WEBPACK_IMPORTED_MODULE_1__UiIconButton_vue___default.a
    }
};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fuzzysearch__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fuzzysearch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fuzzysearch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiIcon_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiIcon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__UiIcon_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UiAutocompleteSuggestion_vue__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UiAutocompleteSuggestion_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__UiAutocompleteSuggestion_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_event_bus__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_HasTextInput__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins_ValidatesInput__ = __webpack_require__(19);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ exports["default"] = {
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
        __WEBPACK_IMPORTED_MODULE_3__helpers_event_bus__["a" /* default */].$on('ui-input::reset', function (id) {
            // Abort if reset event isn't meant for this component
            if (!_this2.eventTargetsComponent(id)) {
                return;
            }

            // Blur input before resetting to avoid "required" errors
            // when input is blurred after reset
            if (document.activeElement === _this2.$refs.input) {
                document.activeElement.blur();
            }

            // Reset state
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

            return __WEBPACK_IMPORTED_MODULE_0_fuzzysearch___default()(query, text.toLowerCase());
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
                // Allows for cycling from first to last when cycling is disabled
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
        UiIcon: __WEBPACK_IMPORTED_MODULE_1__UiIcon_vue___default.a,
        UiAutocompleteSuggestion: __WEBPACK_IMPORTED_MODULE_2__UiAutocompleteSuggestion_vue___default.a
    },

    mixins: [__WEBPACK_IMPORTED_MODULE_4__mixins_HasTextInput__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__mixins_ValidatesInput__["a" /* default */]]
};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_uuid__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ exports["default"] = {
    name: 'ui-autocomplete-suggestion',

    props: {
        id: {
            type: String,
            default: function _default() {
                return __WEBPACK_IMPORTED_MODULE_0__helpers_uuid__["a" /* default */].short();
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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiMenu_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiMenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__UiMenu_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UiPopover_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UiPopover_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__UiPopover_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UiProgressCircular_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UiProgressCircular_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__UiProgressCircular_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_HasDropdown__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins_ShowsRippleInk__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ exports["default"] = {
    name: 'ui-button',

    props: {
        type: {
            type: String,
            default: 'normal' // 'normal' or 'flat'
        },
        buttonType: {
            type: String,
            default: 'submit' // HTML default
        },
        color: {
            type: String,
            default: 'default' // 'default', 'primary', 'accent', 'success', 'warning', or 'danger'
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
        UiIcon: __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue___default.a,
        UiMenu: __WEBPACK_IMPORTED_MODULE_1__UiMenu_vue___default.a,
        UiPopover: __WEBPACK_IMPORTED_MODULE_2__UiPopover_vue___default.a,
        UiProgressCircular: __WEBPACK_IMPORTED_MODULE_3__UiProgressCircular_vue___default.a
    },

    mixins: [__WEBPACK_IMPORTED_MODULE_4__mixins_HasDropdown__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__mixins_ShowsRippleInk__["a" /* default */]]
};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_ReceivesTargetedEvent__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_event_bus__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var toggleArray = function toggleArray(arr, arg) {
    if (arr.indexOf(arg) > -1) {
        arr.splice(arr.indexOf(arg), 1);
    } else {
        arr.push(arg);
    }
    return arr;
};

/* harmony default export */ exports["default"] = {
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
        // Cache initial value for later reset
        this._val = this.initialValue = this.value;
    },
    mounted: function mounted() {
        var _this = this;

        __WEBPACK_IMPORTED_MODULE_1__helpers_event_bus__["a" /* default */].$on('ui-input::reset', function (id) {

            // Abort if reset event isn't meant for this component
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

    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_ReceivesTargetedEvent__["a" /* default */]]
};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_uuid__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_event_bus__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_ShowsRippleInk__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_ReceivesTargetedEvent__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ exports["default"] = {
    name: 'ui-collapsible',

    props: {
        id: {
            type: String,
            default: __WEBPACK_IMPORTED_MODULE_1__helpers_uuid__["a" /* default */].short('ui-collapsible-')
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
        __WEBPACK_IMPORTED_MODULE_2__helpers_event_bus__["a" /* default */].$on('ui-collapsible::refresh-height', function (id) {
            // Abort if refresh event isn't meant for this component
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
        UiIcon: __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue___default.a
    },

    mixins: [__WEBPACK_IMPORTED_MODULE_3__mixins_ShowsRippleInk__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_ReceivesTargetedEvent__["a" /* default */]]
};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_classlist__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiModal_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiModal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__UiModal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UiButton_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UiButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__UiButton_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ exports["default"] = {
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
                __WEBPACK_IMPORTED_MODULE_0__helpers_classlist__["a" /* default */].add(button, 'autofocus');
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
                // This listener should run only once
                button.removeEventListener('blur', this.removeAutoFocus);

                __WEBPACK_IMPORTED_MODULE_0__helpers_classlist__["a" /* default */].remove(button, 'autofocus');
            }
        }
    },

    components: {
        UiModal: __WEBPACK_IMPORTED_MODULE_1__UiModal_vue___default.a,
        UiButton: __WEBPACK_IMPORTED_MODULE_2__UiButton_vue___default.a
    }
};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_ShowsTooltip__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_ShowsRippleInk__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ exports["default"] = {
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
        UiIcon: __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue___default.a
    },

    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_ShowsTooltip__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_ShowsRippleInk__["a" /* default */]]
};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiMenu_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiMenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__UiMenu_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UiPopover_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UiPopover_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__UiPopover_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UiProgressCircular_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UiProgressCircular_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__UiProgressCircular_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_HasDropdown__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins_ShowsTooltip__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mixins_ShowsRippleInk__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ exports["default"] = {
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
        UiIcon: __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue___default.a,
        UiMenu: __WEBPACK_IMPORTED_MODULE_1__UiMenu_vue___default.a,
        UiPopover: __WEBPACK_IMPORTED_MODULE_2__UiPopover_vue___default.a,
        UiProgressCircular: __WEBPACK_IMPORTED_MODULE_3__UiProgressCircular_vue___default.a
    },

    mixins: [__WEBPACK_IMPORTED_MODULE_4__mixins_HasDropdown__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__mixins_ShowsTooltip__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__mixins_ShowsRippleInk__["a" /* default */]]
};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiMenuOption_vue__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiMenuOption_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__UiMenuOption_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_ShowsDropdown__ = __webpack_require__(17);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ exports["default"] = {
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
        UiMenuOption: __WEBPACK_IMPORTED_MODULE_0__UiMenuOption_vue___default.a
    },

    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_ShowsDropdown__["a" /* default */]]
};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_ShowsRippleInk__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ exports["default"] = {
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
        UiIcon: __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue___default.a
    },

    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_ShowsRippleInk__["a" /* default */]]
};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_classlist__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiIconButton_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiIconButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__UiIconButton_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UiButton_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UiButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__UiButton_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_event_bus__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ exports["default"] = {
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
            // console.log(e.currentTarget, e.target)
            if (!this.dismissible) {
                return;
            }

            // Make sure the element clicked was the modal mask and not a child
            // whose click event has bubbled up
            if (e.currentTarget === this.$refs.modalMask && e.target !== e.currentTarget) {
                return;
            }

            // Don't close if this event was triggered by the modal mask
            // and this.backdropDismissible is false
            if (e.currentTarget === this.$refs.modalMask && !this.backdropDismissible) {
                return;
            }

            this.$emit('input', false);
        },
        opened: function opened() {
            this.lastFocussedElement = document.activeElement;
            this.$refs.modalContainer.focus();

            __WEBPACK_IMPORTED_MODULE_0__helpers_classlist__["a" /* default */].add(document.body, 'ui-modal-open');

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
            __WEBPACK_IMPORTED_MODULE_0__helpers_classlist__["a" /* default */].remove(document.body, 'ui-modal-open');

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
        UiIconButton: __WEBPACK_IMPORTED_MODULE_1__UiIconButton_vue___default.a,
        UiButton: __WEBPACK_IMPORTED_MODULE_2__UiButton_vue___default.a
    }
};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_ShowsDropdown__ = __webpack_require__(17);
//
//
//
//
//
//
//
//



/* harmony default export */ exports["default"] = {
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

    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_ShowsDropdown__["a" /* default */]]
};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
    name: 'ui-preloader',

    props: {
        show: {
            type: Boolean,
            required: true
        }
    }
};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
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
            default: 'primary' // 'primary', 'accent', multi-color', 'black', or 'white'
        },
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

            // Get first 3 decimal places, rounding as appropriate
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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_event_bus__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_ReceivesTargetedEvent__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ exports["default"] = {
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

        __WEBPACK_IMPORTED_MODULE_0__helpers_event_bus__["a" /* default */].$on('ui-input::reset', function (id) {
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

    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_ReceivesTargetedEvent__["a" /* default */]]
};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiRatingIcon_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiRatingIcon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__UiRatingIcon_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_event_bus__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_ReceivesTargetedEvent__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ exports["default"] = {
    name: 'ui-rating',

    props: {
        type: {
            type: String,
            default: 'star' // 'star', or 'heart'
        },
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
        // Cache initial value for later reset
        this.initialValue = this.value;

        // Initialize preivew value
        this.previewValue = this.value;
    },
    mounted: function mounted() {
        var _this = this;

        __WEBPACK_IMPORTED_MODULE_1__helpers_event_bus__["a" /* default */].$on('ui-input::reset', function (id) {
            // Abort if reset event isn't meant for this component
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
        UiRatingIcon: __WEBPACK_IMPORTED_MODULE_0__UiRatingIcon_vue___default.a
    },

    mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_ReceivesTargetedEvent__["a" /* default */]]
};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__);
//
//
//
//
//
//
//
//
//



/* harmony default export */ exports["default"] = {
    name: 'ui-rating-icon',

    props: {
        type: {
            type: String,
            default: 'star' // 'star' or 'heart'
        },
        selected: {
            type: Boolean,
            required: true
        },
        filled: { // Used when previewing a new value
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
        UiIcon: __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue___default.a
    }
};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiRatingIcon_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiRatingIcon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__UiRatingIcon_vue__);
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ exports["default"] = {
    name: 'ui-rating-preview',

    props: {
        type: {
            type: String,
            default: 'star' // 'star', 'heart'
        },
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
        UiRatingIcon: __WEBPACK_IMPORTED_MODULE_0__UiRatingIcon_vue___default.a
    }
};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//


/**
 * Adapted from rippleJS (https://github.com/samthor/rippleJS)
 * removed jQuery
 *
 * Version: 1.0.3
 */

/* harmony default export */ exports["default"] = {
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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_merge_options__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_merge_options___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_merge_options__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fuzzysearch__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fuzzysearch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fuzzysearch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_element_scroll__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UiIcon_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UiIcon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__UiIcon_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UiSelectOption_vue__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UiSelectOption_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__UiSelectOption_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__UiProgressCircular_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__UiProgressCircular_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__UiProgressCircular_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_event_bus__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mixins_HasTextInput__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mixins_ValidatesInput__ = __webpack_require__(19);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//













/* harmony default export */ exports["default"] = {
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
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers_element_scroll__["a" /* resetScroll */])(this.$refs.optionsList);
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
                this._validationMessages = __WEBPACK_IMPORTED_MODULE_0_merge_options___default()(errorMessages, this.validationMessages);
            } else {
                this._validationMessages = errorMessages;
            }
        }
    },
    mounted: function mounted() {
        var _this2 = this;

        document.addEventListener('click', this.closeOnExternalClick);
        __WEBPACK_IMPORTED_MODULE_6__helpers_event_bus__["a" /* default */].$on('ui-select::set-selected', function (value, id) {
            // Abort if event isn't meant for this component
            if (!_this2.eventTargetsComponent(id)) {
                return;
            }

            _this2.default = value;
            _this2.initValue();
        });
        __WEBPACK_IMPORTED_MODULE_6__helpers_event_bus__["a" /* default */].$on('ui-input::reset', function (id) {
            // Abort if reset event isn't meant for this component
            if (!_this2.eventTargetsComponent(id)) {
                return;
            }

            // Reset state
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

            return __WEBPACK_IMPORTED_MODULE_1_fuzzysearch___default()(query, text);
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
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers_element_scroll__["b" /* scrollIntoView */])(optionEl, this.$refs.optionsList, 80);
        }
    },

    components: {
        UiIcon: __WEBPACK_IMPORTED_MODULE_3__UiIcon_vue___default.a,
        UiSelectOption: __WEBPACK_IMPORTED_MODULE_4__UiSelectOption_vue___default.a,
        UiProgressCircular: __WEBPACK_IMPORTED_MODULE_5__UiProgressCircular_vue___default.a
    },

    mixins: [__WEBPACK_IMPORTED_MODULE_7__mixins_HasTextInput__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__mixins_ValidatesInput__["a" /* default */]]
};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ exports["default"] = {
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
        UiIcon: __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue___default.a
    }
};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_draggabilly__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_draggabilly___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_draggabilly__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiIcon_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiIcon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__UiIcon_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_event_bus__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_ReceivesTargetedEvent__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ exports["default"] = {
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

        // Cache initial value for later reset
        this.initialValue = this.value;

        // Set initial position
        this.$refs.thumb.style.left = this.value + '%';

        // Initialize Draggabilly
        this.draggable = new __WEBPACK_IMPORTED_MODULE_0_draggabilly___default.a(this.$refs.thumb, {
            containment: this.$refs.containment,
            axis: 'x'
        });

        // Setup drag events
        this.draggable.on('dragStart', this.dragStart);
        this.draggable.on('dragMove', this.dragMove);
        this.draggable.on('dragEnd', this.dragEnd);

        if (this.disabled) {
            this.draggable.disable();
        }

        __WEBPACK_IMPORTED_MODULE_2__helpers_event_bus__["a" /* default */].$on('ui-input::reset', function (id) {
            // Abort if reset event isn't meant for this component
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

            // Allow for click and drag on the track
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

            // Round the value
            var moderatedValue = Math.round(value);

            // Check for max
            if (moderatedValue >= 100) {
                moderatedValue = 100;
            }

            // Check for min
            if (moderatedValue <= 0) {
                moderatedValue = 0;
            }

            this.$emit('input', moderatedValue);
        }
    },

    components: {
        UiIcon: __WEBPACK_IMPORTED_MODULE_1__UiIcon_vue___default.a
    },

    mixins: [__WEBPACK_IMPORTED_MODULE_3__mixins_ReceivesTargetedEvent__["a" /* default */]]
};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_uuid__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//



/* harmony default export */ exports["default"] = {
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_disabled__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_ShowsRippleInk__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ exports["default"] = {
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
        UiIcon: __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue___default.a
    },

    mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_ShowsRippleInk__["a" /* default */]],

    directives: {
        disabled: __WEBPACK_IMPORTED_MODULE_1__directives_disabled__["a" /* default */]
    }
};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_uuid__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiTabHeaderItem_vue__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiTabHeaderItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__UiTabHeaderItem_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_ReceivesTargetedEvent__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_event_bus__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ exports["default"] = {
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
            this.$children[i].id = this.$children[i].id || __WEBPACK_IMPORTED_MODULE_0__helpers_uuid__["a" /* default */].short('ui-tab-');
        }

        // Set the active tab
        this.activeTab = this.$children[0].id;

        // Set the active tab element (to show indicator)
        this.$nextTick(function () {
            if (_this.$refs.tabsContainer) {
                _this.activeTabElement = _this.$refs.tabsContainer.querySelector('.active');
            }
        });

        __WEBPACK_IMPORTED_MODULE_3__helpers_event_bus__["a" /* default */].$on('ui-tabs::select', function (tabId, id) {
            // Abort if event isn't meant for this component
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
            // e can be Element (if called by selectPrev or selectNext) or Event
            // (if called by click listener)
            var newTabElement = e.currentTarget ? e.currentTarget : e;

            if (tab.disabled || this.activeTabElement === newTabElement) {
                return;
            }

            this.activeTabElement = newTabElement;
            this.activeTab = tab.id;

            this.$emit('active-tab-changed', tab.id);
        },
        selectPrev: function selectPrev(currentTabIndex) {
            // Abort if the current tab is the first tab
            if (currentTabIndex === 0) {
                return;
            }

            var prevTab = this.findTab(currentTabIndex);
            this.select(prevTab.$el, prevTab);

            this.activeTabElement.focus();
        },
        selectNext: function selectNext(currentTabIndex) {
            // Abort if the current tab is the last tab
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
        UiTabHeaderItem: __WEBPACK_IMPORTED_MODULE_1__UiTabHeaderItem_vue___default.a
    },

    mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_ReceivesTargetedEvent__["a" /* default */]]
};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiProgressLinear_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiProgressLinear_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__UiProgressLinear_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiIconButton_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiIconButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__UiIconButton_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ exports["default"] = {
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
        UiProgressLinear: __WEBPACK_IMPORTED_MODULE_0__UiProgressLinear_vue___default.a,
        UiIconButton: __WEBPACK_IMPORTED_MODULE_1__UiIconButton_vue___default.a
    }
};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tether_tooltip__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tether_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tether_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_type_check__ = __webpack_require__(14);
//
//
//
//




/* harmony default export */ exports["default"] = {
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
            this._trigger = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers_type_check__["a" /* default */])(_t) === 'array' ? _t[0] : _t;
            this.tooltip = new __WEBPACK_IMPORTED_MODULE_0_tether_tooltip___default.a({
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
/* 82 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App_vue__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(83);

/* harmony export */ __webpack_require__.d(exports, "b", function() { return app; });




var app = new __WEBPACK_IMPORTED_MODULE_1_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
    router: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */]
}, __WEBPACK_IMPORTED_MODULE_2__App_vue___default.a));

/* harmony reexport */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__router__, "a")) __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__router__["a"]; });


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_UiAlertDocs_vue__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_UiAlertDocs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_UiAlertDocs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_UiAutocompleteDocs_vue__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_UiAutocompleteDocs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_UiAutocompleteDocs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_UiButtonDocs_vue__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_UiButtonDocs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_UiButtonDocs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_UiCheckboxDocs_vue__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_UiCheckboxDocs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_UiCheckboxDocs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_UiCollapsibleDocs_vue__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_UiCollapsibleDocs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_UiCollapsibleDocs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_UiConfirmDocs_vue__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_UiConfirmDocs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_UiConfirmDocs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_UiFabDocs_vue__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_UiFabDocs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_UiFabDocs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_UiIconButtonDocs_vue__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_UiIconButtonDocs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_UiIconButtonDocs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_UiIconDocs_vue__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_UiIconDocs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_UiIconDocs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_UiMenuDocs_vue__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_UiMenuDocs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__components_UiMenuDocs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_UiModalDocs_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_UiModalDocs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__components_UiModalDocs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_UiPopoverDocs_vue__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_UiPopoverDocs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__components_UiPopoverDocs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_UiPreloaderDocs_vue__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_UiPreloaderDocs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__components_UiPreloaderDocs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_UiProgressCircularDocs_vue__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_UiProgressCircularDocs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__components_UiProgressCircularDocs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_UiProgressLinearDocs_vue__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_UiProgressLinearDocs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__components_UiProgressLinearDocs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_UiRadioDocs_vue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_UiRadioDocs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__components_UiRadioDocs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_UiRatingDocs_vue__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_UiRatingDocs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__components_UiRatingDocs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_UiRippleInkDocs_vue__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_UiRippleInkDocs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__components_UiRippleInkDocs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_UiSelectDocs_vue__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_UiSelectDocs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__components_UiSelectDocs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_UiSliderDocs_vue__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_UiSliderDocs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__components_UiSliderDocs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_UiSnackbarDocs_vue__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_UiSnackbarDocs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__components_UiSnackbarDocs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_UiSwitchDocs_vue__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_UiSwitchDocs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__components_UiSwitchDocs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_UiTabsDocs_vue__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_UiTabsDocs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__components_UiTabsDocs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_UiTextboxDocs_vue__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_UiTextboxDocs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24__components_UiTextboxDocs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_UiToolbarDocs_vue__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_UiToolbarDocs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25__components_UiToolbarDocs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_UiTooltipDocs_vue__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_UiTooltipDocs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26__components_UiTooltipDocs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_vue_router__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_vue_router__);































__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_27_vue_router___default.a);

var routes = [{
   path: '/alert',
   component: __WEBPACK_IMPORTED_MODULE_1__components_UiAlertDocs_vue___default.a,
   meta: 'UiAlert'
}, {
   path: '/autocomplete',
   component: __WEBPACK_IMPORTED_MODULE_2__components_UiAutocompleteDocs_vue___default.a,
   meta: 'UiAutocomplete'
}, {
   path: '/button',
   component: __WEBPACK_IMPORTED_MODULE_3__components_UiButtonDocs_vue___default.a,
   meta: 'UiButton'
}, {
   path: '/checkbox',
   component: __WEBPACK_IMPORTED_MODULE_4__components_UiCheckboxDocs_vue___default.a,
   meta: 'UiCheckbox'
}, {
   path: '/collapsible',
   component: __WEBPACK_IMPORTED_MODULE_5__components_UiCollapsibleDocs_vue___default.a,
   meta: 'UiCollapsiable'
}, {
   path: '/confirm',
   component: __WEBPACK_IMPORTED_MODULE_6__components_UiConfirmDocs_vue___default.a,
   meta: 'UiConfirm'
}, {
   path: '/fab',
   component: __WEBPACK_IMPORTED_MODULE_7__components_UiFabDocs_vue___default.a,
   meta: 'UiFab'
}, {
   path: '/icon-button',
   component: __WEBPACK_IMPORTED_MODULE_8__components_UiIconButtonDocs_vue___default.a,
   meta: 'UiIconButton'
}, {
   path: '/icon',
   component: __WEBPACK_IMPORTED_MODULE_9__components_UiIconDocs_vue___default.a,
   meta: 'UiIcon'
}, {
   path: '/menu',
   component: __WEBPACK_IMPORTED_MODULE_10__components_UiMenuDocs_vue___default.a
}, {
   path: '/modal',
   component: __WEBPACK_IMPORTED_MODULE_11__components_UiModalDocs_vue___default.a,
   meta: 'UiModal'
}, {
   path: '/popover',
   component: __WEBPACK_IMPORTED_MODULE_12__components_UiPopoverDocs_vue___default.a,
   meta: 'UiPopover'
}, {
   path: '/preloader',
   component: __WEBPACK_IMPORTED_MODULE_13__components_UiPreloaderDocs_vue___default.a,
   meta: 'UiPreloader'
}, {
   path: '/progress-circular',
   component: __WEBPACK_IMPORTED_MODULE_14__components_UiProgressCircularDocs_vue___default.a,
   meta: 'UiProgressCircular'
}, {
   path: '/progress-linear',
   component: __WEBPACK_IMPORTED_MODULE_15__components_UiProgressLinearDocs_vue___default.a,
   meta: 'UiProgressLinear'
}, {
   path: '/radio',
   component: __WEBPACK_IMPORTED_MODULE_16__components_UiRadioDocs_vue___default.a,
   meta: 'UiRadio'
}, {
   path: '/rating',
   component: __WEBPACK_IMPORTED_MODULE_17__components_UiRatingDocs_vue___default.a,
   meta: 'UiRating & UiRatingPreview'
}, {
   path: '/rippleInk',
   component: __WEBPACK_IMPORTED_MODULE_18__components_UiRippleInkDocs_vue___default.a,
   meta: 'UiRippleInk'
}, {
   path: '/select',
   component: __WEBPACK_IMPORTED_MODULE_19__components_UiSelectDocs_vue___default.a,
   meta: 'UiSelect'
}, {
   path: '/slider',
   component: __WEBPACK_IMPORTED_MODULE_20__components_UiSliderDocs_vue___default.a,
   meta: 'UiSlider'
}, {
   path: '/snackbar',
   component: __WEBPACK_IMPORTED_MODULE_21__components_UiSnackbarDocs_vue___default.a,
   meta: 'UiSnackbar & UiSnackbarContainer'
}, {
   path: '/switch',
   component: __WEBPACK_IMPORTED_MODULE_22__components_UiSwitchDocs_vue___default.a,
   meta: 'UiSwitch'
}, {
   path: '/tabs',
   component: __WEBPACK_IMPORTED_MODULE_23__components_UiTabsDocs_vue___default.a,
   meta: 'UiTabs'
}, {
   path: '/textbox',
   component: __WEBPACK_IMPORTED_MODULE_24__components_UiTextboxDocs_vue___default.a,
   meta: 'UiTextbox'
}, {
   path: '/toolbar',
   component: __WEBPACK_IMPORTED_MODULE_25__components_UiToolbarDocs_vue___default.a,
   meta: 'UiToolbar'
}, {
   path: '/tooltip',
   component: __WEBPACK_IMPORTED_MODULE_26__components_UiTooltipDocs_vue___default.a
}, {
   path: '*',
   redirect: '/alert'
}];

/* harmony default export */ exports["a"] = new __WEBPACK_IMPORTED_MODULE_27_vue_router___default.a({
   mode: 'history',
   scrollBehavior: function scrollBehavior() {
      return { y: 0 };
   },
   routes: routes
});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function (el, value) {
    el.disabled = Boolean(value);
};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony export inView *//* harmony export */ exports["b"] = scrollIntoView;/* harmony export */ exports["a"] = resetScroll;function inView(element, container) {
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

/* unused harmony default export */ var _unused_webpack_default_export = {
    inView: inView,
    scrollIntoView: scrollIntoView,
    resetScroll: resetScroll
};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(28)

/* template */
var __vue_template__ = __webpack_require__(127)
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
if (__vue_options__.functional) {console.error("[vue-loader] App.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(29)

/* template */
var __vue_template__ = __webpack_require__(143)
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
if (__vue_options__.functional) {console.error("[vue-loader] Navbar.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(30)

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
if (__vue_options__.functional) {console.error("[vue-loader] UiAlertDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(31)

/* template */
var __vue_template__ = __webpack_require__(149)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiAutocompleteDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(32)

/* template */
var __vue_template__ = __webpack_require__(160)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiButtonDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(33)

/* template */
var __vue_template__ = __webpack_require__(179)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiCheckboxDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(34)

/* template */
var __vue_template__ = __webpack_require__(177)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiCollapsibleDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(35)

/* template */
var __vue_template__ = __webpack_require__(171)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiConfirmDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(36)

/* template */
var __vue_template__ = __webpack_require__(178)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiFabDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(37)

/* template */
var __vue_template__ = __webpack_require__(180)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiIconButtonDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(38)

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
if (__vue_options__.functional) {console.error("[vue-loader] UiIconDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(39)

/* template */
var __vue_template__ = __webpack_require__(128)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiMenuDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(40)

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
if (__vue_options__.functional) {console.error("[vue-loader] UiModalDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(41)

/* template */
var __vue_template__ = __webpack_require__(131)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiPopoverDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(42)

/* template */
var __vue_template__ = __webpack_require__(133)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiPreloaderDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(43)

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
if (__vue_options__.functional) {console.error("[vue-loader] UiProgressCircularDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(44)

/* template */
var __vue_template__ = __webpack_require__(132)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiProgressLinearDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(45)

/* template */
var __vue_template__ = __webpack_require__(135)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiRadioDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(46)

/* template */
var __vue_template__ = __webpack_require__(136)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiRatingDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(47)

/* template */
var __vue_template__ = __webpack_require__(139)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiRippleInkDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(48)

/* template */
var __vue_template__ = __webpack_require__(140)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiSelectDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(49)

/* template */
var __vue_template__ = __webpack_require__(137)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiSliderDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(50)

/* template */
var __vue_template__ = __webpack_require__(141)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiTabsDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(51)

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
if (__vue_options__.functional) {console.error("[vue-loader] UiTooltipDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(52)

/* template */
var __vue_template__ = __webpack_require__(150)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiAlert.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(53)

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
if (__vue_options__.functional) {console.error("[vue-loader] UiAutocomplete.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(54)

/* template */
var __vue_template__ = __webpack_require__(172)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiAutocompleteSuggestion.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(56)

/* template */
var __vue_template__ = __webpack_require__(155)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiCheckbox.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(57)

/* template */
var __vue_template__ = __webpack_require__(152)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiCollapsible.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(58)

/* template */
var __vue_template__ = __webpack_require__(151)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiConfirm.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(59)

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
if (__vue_options__.functional) {console.error("[vue-loader] UiFab.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(63)

/* template */
var __vue_template__ = __webpack_require__(174)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiMenuOption.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(66)

/* template */
var __vue_template__ = __webpack_require__(161)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiPreloader.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(69)

/* template */
var __vue_template__ = __webpack_require__(164)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiRadio.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(70)

/* template */
var __vue_template__ = __webpack_require__(166)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiRating.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(72)

/* template */
var __vue_template__ = __webpack_require__(165)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiRatingPreview.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(74)

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
if (__vue_options__.functional) {console.error("[vue-loader] UiSelect.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(75)

/* template */
var __vue_template__ = __webpack_require__(176)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiSelectOption.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(76)

/* template */
var __vue_template__ = __webpack_require__(167)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiSlider.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(78)

/* template */
var __vue_template__ = __webpack_require__(175)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiTabHeaderItem.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(80)

/* template */
var __vue_template__ = __webpack_require__(145)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiToolbar.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 127 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('div', {
    attrs: {
      "id": "app"
    }
  }, [_h('navbar', {
    directives: [{
      name: "model",
      value: (sidebar),
      expression: "sidebar"
    }],
    domProps: {
      "value": (sidebar)
    },
    on: {
      "input": function($event) {
        sidebar = $event
      }
    }
  }), " ", _h('div', {
    staticClass: "page"
  }, [_h('ui-toolbar', {
    staticClass: "page-toolbar",
    attrs: {
      "title": 'Keen UI-' + activeModule,
      "text-color": "black"
    },
    on: {
      "nav-icon-clicked": toggleSidebar
    }
  }), " ", _h('div', {
    staticClass: "container"
  }, [_h('router-view')])])])
}},staticRenderFns: []}

/***/ },
/* 128 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('section', {
    staticClass: "section section-ui-menu"
  }, [_m(0), " ", _m(1), " ", _m(2), " ", _m(3), " ", _m(4), " ", _m(5), " ", _m(6), " ", _h('div', {
    staticClass: "demo"
  }, [_m(7), " ", _h('ui-menu', {
    attrs: {
      "options": menuOptions
    }
  }), " ", _m(8), " ", _h('ui-menu', {
    attrs: {
      "options": menuOptions,
      "show-icons": ""
    }
  }), " ", _m(9), " ", _h('ui-menu', {
    attrs: {
      "options": menuOptions,
      "show-secondary-text": ""
    }
  }), " ", _m(10), " ", _h('ui-menu', {
    attrs: {
      "options": menuOptions,
      "show-icons": "",
      "show-secondary-text": ""
    }
  }), " ", _m(11), " ", _h('a', {
    ref: "triggerA",
    staticClass: "link-trigger"
  }, ["Click here for the menu"]), " ", _h('ui-menu', {
    attrs: {
      "trigger": "triggerA",
      "options": menuOptions,
      "show-icons": ""
    }
  }), " ", _m(12), " ", _h('a', {
    ref: "triggerB",
    staticClass: "link-trigger"
  }, ["Hover here for the menu"]), " ", _h('ui-menu', {
    attrs: {
      "trigger": "triggerB",
      "options": menuOptions,
      "show-icons": "",
      "open-on": "hover"
    }
  }), " ", _m(13), " ", _h('a', {
    ref: "triggerC",
    staticClass: "link-trigger"
  }, ["Click here for bottom right menu"]), " ", _h('ui-menu', {
    attrs: {
      "trigger": "triggerC",
      "options": menuOptions,
      "show-icons": "",
      "dropdown-position": "bottom right"
    }
  }), " ", _m(14), _m(15), " ", _h('a', {
    ref: "triggerD",
    staticClass: "link-trigger"
  }, ["Click here for top left menu"]), " ", _h('ui-menu', {
    attrs: {
      "trigger": "triggerD",
      "options": menuOptions,
      "show-icons": "",
      "dropdown-position": "top left"
    }
  })]), " ", _m(16), " ", _h('ui-tabs', {
    attrs: {
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Props"
    }
  }, [_m(17), "\n\n            * Required prop\n        "]), " ", _h('ui-tab', {
    attrs: {
      "header": "Events"
    }
  }, [_m(18)])])])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "section-heading"
  }, ["\n        UiMenu ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiMenu.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('p', ["UiMenu creates a menu. Menu options can show an icon, secondary text (like keyboard shortcuts), or show a divider. Individual options can also be disabled."])
}},function (){with(this) {
  return _h('p', ["A trigger element can be added to create a dropdown menu and the dropdown position can be customized. The dropdown menu can be always open or set to open on hover, click or focus of the trigger element."])
}},function (){with(this) {
  return _h('p', ["UiMenu is keyboard accessible and is set by default to contain tab focus in the menu until it is closed, at which point it returns focus to the trigger element. It also emits events when opened, closed and when an option is selected from the menu."])
}},function (){with(this) {
  return _h('p', ["The dropdown is powered by ", _h('a', {
    attrs: {
      "href": "https://github.com/HubSpot/drop",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Drop"]), ", which uses ", _h('a', {
    attrs: {
      "href": "https://github.com/HubSpot/tether",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Tether"]), "."])
}},function (){with(this) {
  return _h('p', ["UiMenu is used internally by the ", _h('a', {
    attrs: {
      "href": "#/ui-button-docs"
    }
  }, ["UiButton"]), " and ", _h('a', {
    attrs: {
      "href": "#/ui-icon-button-docs"
    }
  }, ["UiIconButton"]), " components."])
}},function (){with(this) {
  return _h('h3', ["\n        Examples ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiMenuDocs.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('h4', ["Default"])
}},function (){with(this) {
  return _h('h4', ["With icons"])
}},function (){with(this) {
  return _h('h4', ["With secondary text (keyboard shortcuts)"])
}},function (){with(this) {
  return _h('h4', ["With icons and secondary text"])
}},function (){with(this) {
  return _h('h4', ["With trigger element (creates a dropdown)"])
}},function (){with(this) {
  return _h('h4', ["Open on hover"])
}},function (){with(this) {
  return _h('h4', ["Dropdown position (may change based on available space)"])
}},function (){with(this) {
  return _h('br')
}},function (){with(this) {
  return _h('br')
}},function (){with(this) {
  return _h('h3', ["API"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["id"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td', [_h('p', ["A unique identifier for the menu."]), " ", _h('p', ["Applied as the ", _h('code', ["id"]), " attribute of the menu's root element and used when targeting a specific menu for open/close/toggle."])])]), " ", _h('tr', [_h('td', ["options *"]), " ", _h('td', ["Array"]), " ", _h('td', [_h('code', ["[]"])]), " ", _h('td', [_h('p', ["The list of options to show in the menu."]), " ", _h('p', ["Each option should be an object with at least two properties: ", _h('code', ["id"]), " and ", _h('code', ["text"]), ". An option can be shown as a divider by setting its ", _h('code', ["type"]), " property to ", _h('code', ["\"divider\""]), "."]), " ", _h('p', ["The ", _h('code', ["text"]), " is shown to the user and ", _h('code', ["id"]), " is passed to the ", _h('code', ["@option-selected"]), " event handler."]), " ", _h('p', ["A menu option can also include these properties:"]), " ", _h('ul', [_h('li', [_h('code', ["type"]), ": Set to ", _h('code', ["\"divider\""]), " for a divider."]), " ", _h('li', [_h('code', ["icon"]), ": An icon to show with the option. Can be any of the ", _h('a', {
    attrs: {
      "href": "https://design.google.com/icons/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Material Icons"]), ". Note that this should be the icon codepoint if you want to support IE9."]), " ", _h('li', [_h('code', ["secondaryText"]), ": Text to show to the right of the option in the dropdown. Useful for showing keyboard shortcuts and badges."]), " ", _h('li', [_h('code', ["disabled"]), ": A Boolean that determines whether or not the option is disabled."])])])]), " ", _h('tr', [_h('td', ["showIcons"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not icons are shown for the menu options."]), " ", _h('p', ["Set to ", _h('code', ["false"]), " to hide the icons."])])]), " ", _h('tr', [_h('td', ["showSecondaryText"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not secondary text is shown for the menu options."]), " ", _h('p', ["Set to ", _h('code', ["false"]), " to hide the secondary text."])])]), " ", _h('tr', [_h('td', ["trigger"]), " ", _h('td', ["HTMLElement"]), " ", _h('td'), " ", _h('td', [_h('p', ["An element to attach the menu to."]), " ", _h('p', ["Specifying this prop creates a dropdown menu (i.e. the menu is hidden until the target is clicked/hovered/focussed)."])])]), " ", _h('tr', [_h('td', ["dropdownPosition"]), " ", _h('td', ["String"]), " ", _h('td', {
    staticClass: "no-wrap"
  }, [_h('code', ["\"bottom left\""])]), " ", _h('td', [_h('p', ["The position of the dropdown menu relative to the trigger."]), " ", _h('p', ["Can be any one of ", _h('code', ["top left"]), ", ", _h('code', ["left top"]), ", ", _h('code', ["left middle"]), ", ", _h('code', ["left bottom"]), ", ", _h('code', ["bottom left"]), ", ", _h('code', ["bottom center"]), ", ", _h('code', ["bottom right"]), ", ", _h('code', ["right bottom"]), ", ", _h('code', ["right middle"]), ", ", _h('code', ["right top"]), ", ", _h('code', ["top right"]), ", ", _h('code', ["top center"]), "."])])]), " ", _h('tr', [_h('td', ["openOn"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"click\""])]), " ", _h('td', [_h('p', ["The type of event that will cause the dropdown menu to open."]), " ", _h('p', ["One of ", _h('code', ["click"]), ", ", _h('code', ["hover"]), ", ", _h('code', ["focus"]), ", or ", _h('code', ["always"]), ". For ", _h('code', ["always"]), " the dropdown is opened when rendered and it remains open."])])]), " ", _h('tr', [_h('td', ["containFocus"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["true"])]), " ", _h('td', [_h('p', ["Determines whether or not tab focus should be contained in the menu."]), " ", _h('p', ["Set to ", _h('code', ["false"]), " to allow tabbing to focus elements outside the menu."])])]), " ", _h('tr', [_h('td', ["hideRippleInk"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not the ripple ink animation is hidden when a menu item is clicked."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to hide the ripple ink animation."])])]), " ", _h('tr', [_h('td', {
    staticClass: "new-prop"
  }, ["closeOnSelect"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["true"])]), " ", _h('td', [_h('p', ["Determines whether or not the menu should be closed when an option is selected."]), " ", _h('p', ["Set to ", _h('code', ["false"]), " to prevent the menu from closing when an option is selected."])])]), " ", _h('tr', [_h('td', {
    staticClass: "new-prop"
  }, ["partial"]), " ", _h('td', ["String"]), " ", _h('td', {
    staticClass: "no-wrap"
  }, [_h('code', ["\"ui-menu-default\""])]), " ", _h('td', [_h('p', ["The ID of a registered ", _h('a', {
    attrs: {
      "href": "http://vuejs.org/api/#partial",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Vue partial"]), " to use as the template for each menu item."]), " ", _h('p', ["This partial is rendered into an ", _h('code', ["<div>"]), " which has the partial's ID as a class. In the partial template, you have access to an ", _h('code', ["option"]), " object from the options array, which you can use to render the menu option however you like."]), " ", _h('p', ["The default partial renders the menu option with place for an icon and secondary text. It also renders dividers."])])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["opened"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the menu is opened."]), " ", _h('p', ["Listen for it using ", _h('code', ["@opened"]), "."])])]), " ", _h('tr', [_h('td', ["closed"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the menu is closed."]), " ", _h('p', ["Listen for it using ", _h('code', ["@closed"]), "."])])]), " ", _h('tr', [_h('td', {
    staticClass: "no-wrap"
  }, ["option-selected"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when an option is selected from the menu."]), " ", _h('p', ["The handler function is called with the option that was selected. Listen for it using ", _h('code', ["@option-selected"]), "."])])]), " ", _h('tr', [_h('td', {
    staticClass: "no-wrap new-prop"
  }, ["ui-dropdown::open"]), " ", _h('td', ["Received"]), " ", _h('td', [_h('p', ["Trigger this event to open the menu dropdown."]), " ", _h('p', ["You can optionally pass in an ", _h('code', ["id"]), " to only open the dropdown of a specific menu (whose ", _h('code', ["id"]), " you have set)."])])]), " ", _h('tr', [_h('td', {
    staticClass: "no-wrap new-prop"
  }, ["ui-dropdown::close"]), " ", _h('td', ["Received"]), " ", _h('td', [_h('p', ["Trigger this event to close the menu dropdown."]), " ", _h('p', ["You can optionally pass in an ", _h('code', ["id"]), " to only close the dropdown of a specific menu (whose ", _h('code', ["id"]), " you have set)."])])]), " ", _h('tr', [_h('td', {
    staticClass: "no-wrap new-prop"
  }, ["ui-dropdown::toggle"]), " ", _h('td', ["Received"]), " ", _h('td', [_h('p', ["Trigger this event to toggle the menu dropdown."]), " ", _h('p', ["You can optionally pass in an ", _h('code', ["id"]), " to only toggle the dropdown of a specific menu (whose ", _h('code', ["id"]), " you have set)."])])])])])])
}}]}

/***/ },
/* 129 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('section', {
    staticClass: "section section-ui-icon"
  }, [_m(0), " ", _m(1), " ", _m(2), " ", _m(3), " ", _m(4), " ", _m(5), " ", _m(6), " ", _m(7), " ", _h('div', {
    staticClass: "demo"
  }, [_h('div', {
    staticClass: "group"
  }, [_h('ui-icon', {
    attrs: {
      "icon": "folder_open"
    }
  }), " ", _h('ui-icon', {
    attrs: {
      "icon": "home"
    }
  }), " ", _h('ui-icon', {
    attrs: {
      "icon": "info_outline"
    }
  }), " ", _h('ui-icon', {
    attrs: {
      "icon": "watch_later"
    }
  }), " ", _h('ui-icon', {
    attrs: {
      "icon": "mail_outline"
    }
  }), " ", _h('ui-icon', {
    attrs: {
      "icon": "pin_drop"
    }
  }), " ", _h('ui-icon', {
    attrs: {
      "icon": "favorite_border"
    }
  }), " ", _h('ui-icon', {
    attrs: {
      "icon": "maps"
    }
  })]), " ", _h('div', {
    staticClass: "group icon-large"
  }, [_h('ui-icon', {
    attrs: {
      "icon": "watch"
    }
  }), " ", _h('ui-icon', {
    attrs: {
      "icon": "rss_feed"
    }
  }), " ", _h('ui-icon', {
    attrs: {
      "icon": "account_circle"
    }
  }), " ", _h('ui-icon', {
    attrs: {
      "icon": "play_circle_outline"
    }
  }), " ", _h('ui-icon', {
    attrs: {
      "icon": "drafts"
    }
  }), " ", _h('ui-icon', {
    attrs: {
      "icon": "attach_file"
    }
  }), " ", _h('ui-icon', {
    attrs: {
      "icon": "save"
    }
  }), " ", _h('ui-icon', {
    attrs: {
      "icon": "event"
    }
  })]), " ", _h('div', {
    staticClass: "group inline"
  }, [_h('p', ["Icons can also be inlined with text: ", _h('ui-icon', {
    attrs: {
      "icon": "account_circle"
    }
  }), " My Account."])])]), " ", _m(8), " ", _h('ui-tabs', {
    attrs: {
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Props"
    }
  }, [_m(9), "\n\n            * Required prop\n        "])])])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "section-heading"
  }, ["\n        UiIcon ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiIcon.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('p', ["UiIcon shows an icon glyph. By default it uses icons from the ", _h('a', {
    attrs: {
      "href": "https://design.google.com/icons/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Material Icons"]), " web font, which must be loaded for icons to display properly. The simplest way to do this is by adding the Google Web font to the head of your page:"])
}},function (){with(this) {
  return _h('pre', [_h('code', ["<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">"])])
}},function (){with(this) {
  return _h('p', ["See the ", _h('a', {
    attrs: {
      "href": "http://google.github.io/material-design-icons",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Material Icons Guide"]), " for more options on including the font."])
}},function (){with(this) {
  return _h('p', ["Icons are ", _h('code', ["24px"]), " by ", _h('code', ["24px"]), ", but this can be changed by overriding the font size using CSS."])
}},function (){with(this) {
  return _h('p', ["If you want to use another icon set, add a custom ", _h('code', ["class"]), " (the ", _h('code', ["icon"]), " prop is applied as a class also) and set the ", _h('code', ["removeText"]), " prop to ", _h('code', ["true"]), " to remove the text used for the Material Icon ligatures."])
}},function (){with(this) {
  return _h('p', ["Note that using another icon set may break other components that use UiIcon."])
}},function (){with(this) {
  return _h('h3', ["\n        Examples ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiIconDocs.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('h3', ["API"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["icon *"]), " ", _h('td', ["String"]), " ", _h('td', ["(required)"]), " ", _h('td', [_h('p', ["The icon name. Can be any of the ", _h('a', {
    attrs: {
      "href": "https://design.google.com/icons/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Material Icons"]), "."]), " ", _h('p', ["Note that this should be the icon codepoint if you want to support IE9."])])]), " ", _h('tr', [_h('td', ["removeText"]), " ", _h('td', ["Boolean"]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not to remove the icon element's inner text."]), " ", _h('p', ["The ", _h('code', ["icon"]), " prop is set as the inner text by default because Material Icons use ligatures."])])])])])])
}}]}

/***/ },
/* 130 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('section', {
    staticClass: "section section-ui-modal"
  }, [_m(0), " ", _m(1), " ", _m(2), " ", _m(3), " ", _m(4), " ", _m(5), " ", _m(6), " ", _h('div', {
    staticClass: "demo"
  }, [_h('ui-modal', {
    directives: [{
      name: "model",
      value: (show.modal1),
      expression: "show.modal1"
    }],
    attrs: {
      "header": "Default Modal",
      "body": "Hi there, World. What's happening?"
    },
    domProps: {
      "value": (show.modal1)
    },
    on: {
      "input": function($event) {
        show.modal1 = $event
      }
    }
  }), " ", _h('ui-modal', {
    directives: [{
      name: "model",
      value: (show.modal2),
      expression: "show.modal2"
    }],
    attrs: {
      "header": "Can't close by clicking backdrop",
      "backdrop-dismissible": false,
      "body": "Hi there, World. What's happening?"
    },
    domProps: {
      "value": (show.modal2)
    },
    on: {
      "input": function($event) {
        show.modal2 = $event
      }
    }
  }), " ", _h('ui-modal', {
    directives: [{
      name: "model",
      value: (show.modal3),
      expression: "show.modal3"
    }],
    attrs: {
      "header": "Stuck with me!",
      "dismissible": false,
      "body": "Can't close at all. Refresh the page to continue."
    },
    domProps: {
      "value": (show.modal3)
    },
    on: {
      "input": function($event) {
        show.modal3 = $event
      }
    }
  }), " ", _h('ui-modal', {
    directives: [{
      name: "model",
      value: (show.modal4),
      expression: "show.modal4"
    }],
    attrs: {
      "header": "Header &times; button is hidden",
      "body": "Hi there, World. What's happening?",
      "show-close-button": false
    },
    domProps: {
      "value": (show.modal4)
    },
    on: {
      "input": function($event) {
        show.modal4 = $event
      }
    }
  }), " ", _h('ui-modal', {
    directives: [{
      name: "model",
      value: (show.modal5),
      expression: "show.modal5"
    }],
    domProps: {
      "value": (show.modal5)
    },
    on: {
      "input": function($event) {
        show.modal5 = $event
      }
    }
  }, [_h('div', {
    slot: "header"
  }, [_m(7), " header has ", _m(8)]), "\n\n            Hey, some ", _m(9), " text here.\n        "]), " ", _h('ui-modal', {
    directives: [{
      name: "model",
      value: (show.modal6),
      expression: "show.modal6"
    }],
    attrs: {
      "header": "No Footer",
      "hide-footer": "",
      "body": "Hi there, World. What's happening?"
    },
    domProps: {
      "value": (show.modal6)
    },
    on: {
      "input": function($event) {
        show.modal6 = $event
      }
    }
  }), " ", _h('ui-modal', {
    directives: [{
      name: "model",
      value: (show.modal7),
      expression: "show.modal7"
    }],
    attrs: {
      "header": "Custom Footer",
      "body": "Hi there, World. What's happening?"
    },
    domProps: {
      "value": (show.modal7)
    },
    on: {
      "input": function($event) {
        show.modal7 = $event
      }
    }
  }, [_h('div', {
    slot: "footer"
  }, [_h('ui-button', {
    attrs: {
      "color": "primary"
    },
    nativeOn: {
      "click": function($event) {
        $event.stopPropagation();
        say('Hi~')
      }
    }
  }, ["Say Hi"]), " ", _h('ui-button', {
    nativeOn: {
      "click": function($event) {
        show.modal7 = false
      }
    }
  }, ["Close"])])]), " ", _h('ui-modal', {
    directives: [{
      name: "model",
      value: (show.modal8),
      expression: "show.modal8"
    }],
    attrs: {
      "type": "small",
      "header": "Small Modal",
      "body": "Hi there, World. What's happening?"
    },
    domProps: {
      "value": (show.modal8)
    },
    on: {
      "input": function($event) {
        show.modal8 = $event
      }
    }
  }), " ", _h('ui-modal', {
    directives: [{
      name: "model",
      value: (show.modal9),
      expression: "show.modal9"
    }],
    attrs: {
      "type": "large",
      "header": "Large Modal",
      "body": "Hi there, World. What's happening?"
    },
    domProps: {
      "value": (show.modal9)
    },
    on: {
      "input": function($event) {
        show.modal9 = $event
      }
    }
  }), " ", _h('ui-modal', {
    directives: [{
      name: "model",
      value: (show.modal10),
      expression: "show.modal10"
    }],
    attrs: {
      "header": "Scrolling Modal"
    },
    domProps: {
      "value": (show.modal10)
    },
    on: {
      "input": function($event) {
        show.modal10 = $event
      }
    }
  }, [_m(10), " ", _m(11), " ", _m(12), " ", _m(13), " ", _m(14), " ", _m(15), " ", _m(16), " ", _m(17), " ", _m(18), " ", _m(19)]), " ", _h('ui-modal', {
    directives: [{
      name: "model",
      value: (show.modal11),
      expression: "show.modal11"
    }],
    attrs: {
      "header": "Fade In Modal",
      "transition": "fade",
      "body": "Hi there, World. What's happening?"
    },
    domProps: {
      "value": (show.modal11)
    },
    on: {
      "input": function($event) {
        show.modal11 = $event
      }
    }
  }), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-button', {
    nativeOn: {
      "click": function($event) {
        show.modal1 = true
      }
    }
  }, ["Default Modal"]), " ", _h('ui-button', {
    nativeOn: {
      "click": function($event) {
        show.modal2 = true
      }
    }
  }, ["Can't close by clicking backdrop"]), " ", _h('ui-button', {
    nativeOn: {
      "click": function($event) {
        show.modal3 = true
      }
    }
  }, ["Can't close at all"])]), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-button', {
    nativeOn: {
      "click": function($event) {
        show.modal4 = true
      }
    }
  }, ["No header close button"]), " ", _h('ui-button', {
    nativeOn: {
      "click": function($event) {
        show.modal5 = true
      }
    }
  }, ["Custom Header"])]), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-button', {
    nativeOn: {
      "click": function($event) {
        show.modal6 = true
      }
    }
  }, ["No footer"]), " ", _h('ui-button', {
    nativeOn: {
      "click": function($event) {
        show.modal7 = true
      }
    }
  }, ["Custom footer"])]), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-button', {
    nativeOn: {
      "click": function($event) {
        show.modal8 = true
      }
    }
  }, ["Small Modal"]), " ", _h('ui-button', {
    nativeOn: {
      "click": function($event) {
        show.modal9 = true
      }
    }
  }, ["Large Modal"]), " ", _h('ui-button', {
    nativeOn: {
      "click": function($event) {
        show.modal10 = true
      }
    }
  }, ["Scrolling Modal"])]), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-button', {
    nativeOn: {
      "click": function($event) {
        show.modal11 = true
      }
    }
  }, ["Fade in Modal"])])]), " ", _m(20), " ", _h('ui-tabs', {
    attrs: {
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Props"
    }
  }, [_m(21), "\n\n            * Required prop\n        "]), " ", _h('ui-tab', {
    attrs: {
      "header": "Slots"
    }
  }, [_m(22)]), " ", _h('ui-tab', {
    attrs: {
      "header": "Events"
    }
  }, [_m(23)])])])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "section-heading"
  }, ["\n        UiModal ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiModal.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('p', ["UiModal is used to show modals. It's header, body and footer can be fully customized using ", _h('code', ["slots"]), "."])
}},function (){with(this) {
  return _h('p', ["UiModals are keyboard accessible (can be closed with the ESC key, keep tab focus in the modal and return focus to the element that had it before the modal was open)."])
}},function (){with(this) {
  return _h('p', ["UiModals can also be optionally dismissed by clicking their backdrop. Dismissing can also be disabled to prevent the user from closing the modal."])
}},function (){with(this) {
  return _h('p', ["UiModals have two transition types: a simple fade in, and scale in from above. They also emit events when opened and closed."])
}},function (){with(this) {
  return _h('p', ["UiModals have three types: ", _h('code', ["small"]), ", ", _h('code', ["normal"]), " (default) and ", _h('code', ["large"]), ". These sizes can also be customized using CSS. UiModals also automatically add a vertical scrollbar when the modal content overflows the available space."])
}},function (){with(this) {
  return _h('h3', ["\n        Examples ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiModalDocs.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('b', ["Custom"])
}},function (){with(this) {
  return _h('a', {
    attrs: {
      "href": "https://developer.mozilla.org/en-US/docs/Web/HTML",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["HTML"])
}},function (){with(this) {
  return _h('b', ["nice"])
}},function (){with(this) {
  return _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit maiores perspiciatis suscipit sit nemo. Similique dignissimos, quas nisi aperiam dolorum omnis tenetur impedit, cum eaque harum officia? Rerum ullam ratione non perferendis, vel harum quam."])
}},function (){with(this) {
  return _h('p', ["Provident iste, iusto adipisci, tenetur harum porro omnis sequi eveniet, accusantium facilis non ipsum. Excepturi deleniti tempore error atque aperiam quia dolorum perferendis. Libero accusamus dolor ipsam soluta impedit laboriosam optio veritatis obcaecati atque, asperiores!"])
}},function (){with(this) {
  return _h('p', ["Quidem reprehenderit dolorem ducimus, expedita repellendus amet eaque voluptas molestiae debitis, adipisci obcaecati in nulla dolor eos ex illum. Quas molestiae dolores voluptatibus ullam et, quisquam nisi, consequuntur quod unde earum corporis nam harum repellat."])
}},function (){with(this) {
  return _h('p', ["Dolores sapiente saepe a explicabo quia possimus obcaecati quasi, quod asperiores dolore velit animi in eligendi incidunt, corporis at ut ipsum quos inventore quas suscipit tempore voluptatem voluptates. Quae dicta magni commodi sed, nisi animi!"])
}},function (){with(this) {
  return _h('p', ["Itaque voluptas facere totam et explicabo, asperiores unde, cumque amet illo, hic sit excepturi quis architecto maxime. Aliquam nostrum ad blanditiis consequatur cum nulla, hic, reiciendis optio voluptate tenetur, maxime quisquam assumenda. Dignissimos corrupti, magnam."])
}},function (){with(this) {
  return _h('p', ["Quia, dolor, dolores? Sed dolor, maxime, nihil et cupiditate adipisci vel, accusantium repellendus voluptate quisquam optio dolorem illum tenetur rem. Voluptatem, officiis. Autem porro totam non vitae, officiis, ad dolorum, architecto dolor ratione, sed eligendi."])
}},function (){with(this) {
  return _h('p', ["Similique quidem, magni, dolores quam repellat provident? Sunt beatae ipsum, dignissimos eos iusto rem aspernatur unde commodi nam reprehenderit quis molestias accusantium. Enim quo beatae velit quisquam veritatis! Sed dolorem praesentium quidem consequuntur, impedit dolores?"])
}},function (){with(this) {
  return _h('p', ["Ab, illum necessitatibus dolorum fuga. Aspernatur repellat assumenda aliquid officia aut accusamus veniam ipsum temporibus, suscipit nulla quibusdam libero aperiam aliquam, molestias in, possimus nemo soluta vero sed architecto. Libero doloremque aliquid a quam nostrum."])
}},function (){with(this) {
  return _h('p', ["Non quam et earum soluta quasi animi numquam perferendis magni explicabo impedit tempore ducimus aperiam natus veniam, eum esse, unde delectus velit nihil laudantium dolorum rem. Soluta dignissimos libero, laboriosam cupiditate, sint ipsum ab maiores."])
}},function (){with(this) {
  return _h('p', ["Totam quas nobis iste iure voluptatem. Dolores tempore voluptates omnis inventore, laborum eaque aperiam eligendi, maxime beatae, exercitationem fugit. Quae non, eum dignissimos consequuntur voluptate vel ipsam quos minima sequi. Illum eius natus maxime reiciendis."])
}},function (){with(this) {
  return _h('h3', ["API"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Binding"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["show *"]), " ", _h('td', ["Boolean"]), " ", _h('td', ["(required)"]), " ", _h('td', ["Two-way"]), " ", _h('td', [_h('p', ["Determines whether or not the modal is shown."]), " ", _h('p', ["Changing this value will show/hide the modal."])])]), " ", _h('tr', [_h('td', ["type"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"normal\""])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines the size of the modal. One of ", _h('code', ["small"]), ", ", _h('code', ["normal"]), ", or ", _h('code', ["large"]), "."]), " ", _h('p', ["You can also customize the modal size by overriding the ", _h('code', ["width"]), " property of ", _h('code', [".ui-modal-container"]), " using CSS."])])]), " ", _h('tr', [_h('td', ["role"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"dialog\""])]), " ", _h('td'), " ", _h('td', [_h('p', ["The ARIA role for the modal (important for accessibility)."]), " ", _h('p', ["One of ", _h('code', ["dialog"]), " or ", _h('code', ["alertdialog"]), "."])])]), " ", _h('tr', [_h('td', ["header"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"UiModal Header\""])]), " ", _h('td'), " ", _h('td', [_h('p', ["Header content for the modal (text only)."]), " ", _h('p', ["To use HTML in the header, use the ", _h('code', ["header"]), " slot."])])]), " ", _h('tr', [_h('td', ["body"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"UiModal body\""])]), " ", _h('td'), " ", _h('td', [_h('p', ["Body content for the modal (text only)."]), " ", _h('p', ["To use HTML in the body, use the ", _h('code', ["default"]), " slot."])])]), " ", _h('tr', [_h('td', ["transition"]), " ", _h('td', ["String"]), " ", _h('td', {
    staticClass: "no-wrap"
  }, [_h('code', ["\"ui-modal-scale\""])]), " ", _h('td'), " ", _h('td', [_h('p', ["The modal enter/leave transition."]), " ", _h('p', ["One of ", _h('code', ["ui-modal-scale"]), " or ", _h('code', ["ui-modal-fade"]), "."]), " ", _h('p', ["You can also provide the name of your own custom ", _h('a', {
    attrs: {
      "href": "https://vuejs.org/guide/transitions.html",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Vue transition"]), "."])])]), " ", _h('tr', [_h('td', ["showCloseButton"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["true"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the header close button is shown."]), " ", _h('p', ["Set to ", _h('code', ["false"]), " to hide the header close button."])])]), " ", _h('tr', [_h('td', ["hideFooter"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the footer block is hidden."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to disable the footer block."])])]), " ", _h('tr', [_h('td', ["dismissible"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["true"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the modal can be dismissed."]), " ", _h('p', ["Set to ", _h('code', ["false"]), " to disable the close button and prevent the user from dismissing the modal."])])]), " ", _h('tr', [_h('td', ["backdropDismissible"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["true"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the modal can be dismissed by clicking the backdrop."]), " ", _h('p', ["Set to ", _h('code', ["false"]), " to disable closing the modal when the backdrop is clicked."])])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["(default)"]), " ", _h('td', ["The default slot holds the modal body and can contain HTML."])]), " ", _h('tr', [_h('td', ["header"]), " ", _h('td', ["The header slot holds the modal header and can contain HTML."])]), " ", _h('tr', [_h('td', ["footer"]), " ", _h('td', ["The footer slot holds the modal footer and can contain HTML."])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["opened"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the modal is opened."]), " ", _h('p', ["Listen for it using ", _h('code', ["@opened"]), "."])])]), " ", _h('tr', [_h('td', {
    staticClass: "new-prop"
  }, ["revealed"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the modal open transition completes."]), " ", _h('p', ["Listen for it using ", _h('code', ["@revealed"]), "."])])]), " ", _h('tr', [_h('td', ["closed"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the modal is closed."]), " ", _h('p', ["Listen for it using ", _h('code', ["@closed"]), "."])])]), " ", _h('tr', [_h('td', {
    staticClass: "new-prop"
  }, ["hidden"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the modal close transition completes."]), " ", _h('p', ["Listen for it using ", _h('code', ["@hidden"]), "."])])])])])])
}}]}

/***/ },
/* 131 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('section', {
    staticClass: "section section-ui-popover"
  }, [_m(0), " ", _m(1), " ", _m(2), " ", _m(3), " ", _m(4), " ", _m(5), " ", _h('div', {
    staticClass: "demo"
  }, [_m(6), " ", _h('a', {
    ref: "triggerA",
    staticClass: "link-trigger"
  }, ["Click here for the popover"]), " ", _h('ui-popover', {
    attrs: {
      "trigger": "triggerA"
    }
  }, ["\n            Hey there, some popover content here.\n\n            ", _m(7)]), " ", _m(8), " ", _h('a', {
    ref: "triggerB",
    staticClass: "link-trigger"
  }, ["Hover here for the popover"]), " ", _h('ui-popover', {
    attrs: {
      "trigger": "triggerB",
      "open-on": "hover"
    }
  }, ["\n            Hey there, some popover content here.\n\n            ", _m(9)]), " ", _m(10), " ", _h('a', {
    ref: "triggerC",
    staticClass: "link-trigger"
  }, ["Click here for a popover dropping bottom right"]), " ", _h('ui-popover', {
    attrs: {
      "trigger": "triggerC",
      "dropdown-position": "bottom right"
    }
  }, ["\n            Hey there, some popover content here.\n\n            ", _m(11)]), " ", _m(12), _m(13), " ", _h('a', {
    ref: "triggerD",
    staticClass: "link-trigger"
  }, ["Click here for top left popover"]), " ", _h('ui-popover', {
    attrs: {
      "trigger": "triggerD",
      "dropdown-position": "top left"
    }
  }, ["\n            Hey there, some popover content here.\n\n            ", _m(14)]), " ", _m(15), " ", _h('ui-button', {
    nativeOn: {
      "click": function($event) {
        openPopover('popover-e')
      }
    }
  }, ["Click to open"]), " ", _m(16), _m(17), " ", _h('a', {
    ref: "triggerE",
    staticClass: "link-trigger"
  }, ["Default trigger (click to open)"]), " ", _h('ui-popover', {
    attrs: {
      "trigger": "triggerE",
      "id": "popover-e"
    }
  }, ["\n            Hey there, some popover content here.\n\n            ", _m(18)])]), " ", _m(19), " ", _h('ui-tabs', {
    attrs: {
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Props"
    }
  }, [_m(20), "\n\n            * Required prop\n        "]), " ", _h('ui-tab', {
    attrs: {
      "header": "Events"
    }
  }, [_m(21)])])])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "section-heading"
  }, ["\n        UiPopover ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiPopover.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('p', ["UiPopover is used to show arbitrary content in a dropdown. It can also be setup to contain tab focus in the popover, returning focus to the trigger element on close."])
}},function (){with(this) {
  return _h('p', ["The dropdown position relative to the trigger can be customized and the drop can either be always open or set to open on hover, click or focus of the trigger element."])
}},function (){with(this) {
  return _h('p', ["The dropdown is powered by ", _h('a', {
    attrs: {
      "href": "https://github.com/HubSpot/drop",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Drop"]), ", which uses ", _h('a', {
    attrs: {
      "href": "https://github.com/HubSpot/tether",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Tether"]), "."])
}},function (){with(this) {
  return _h('p', ["UiPopover is used internally by the ", _h('a', {
    attrs: {
      "href": "#/ui-button-docs"
    }
  }, ["UiButton"]), " and ", _h('a', {
    attrs: {
      "href": "#/ui-icon-button-docs"
    }
  }, ["UiIconButton"]), " components."])
}},function (){with(this) {
  return _h('h3', ["\n        Examples ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiPopoverDocs.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('h4', ["Default"])
}},function (){with(this) {
  return _h('p', ["Add ", _h('i', ["whatever"]), " content you want here."])
}},function (){with(this) {
  return _h('h4', ["Open on hover"])
}},function (){with(this) {
  return _h('p', ["Add ", _h('i', ["whatever"]), " content you want here."])
}},function (){with(this) {
  return _h('h4', ["Dropdown position (may change based on available space)"])
}},function (){with(this) {
  return _h('p', ["Add ", _h('i', ["whatever"]), " content you want here."])
}},function (){with(this) {
  return _h('br')
}},function (){with(this) {
  return _h('br')
}},function (){with(this) {
  return _h('p', ["Add ", _h('i', ["whatever"]), " content you want here."])
}},function (){with(this) {
  return _h('h4', ["Can be opened and closed using events"])
}},function (){with(this) {
  return _h('br')
}},function (){with(this) {
  return _h('br')
}},function (){with(this) {
  return _h('p', ["Add ", _h('i', ["whatever"]), " content you want here."])
}},function (){with(this) {
  return _h('h3', ["API"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["id"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td', [_h('p', ["A unique identifier for the popover."]), " ", _h('p', ["Applied as the ", _h('code', ["id"]), " attribute of the popover's root element and used when targeting a specific popover for open/close/toggle."])])]), " ", _h('tr', [_h('td', ["trigger *"]), " ", _h('td', {
    staticClass: "no-wrap"
  }, ["HTMLElement"]), " ", _h('td'), " ", _h('td', ["An Element to attach the popover to."])]), " ", _h('tr', [_h('td', ["dropdownPosition"]), " ", _h('td', ["String"]), " ", _h('td', {
    staticClass: "no-wrap"
  }, [_h('code', ["\"bottom left\""])]), " ", _h('td', [_h('p', ["The position of the popover relative to the trigger."]), " ", _h('p', ["Can be any one of ", _h('code', ["top left"]), ", ", _h('code', ["left top"]), ", ", _h('code', ["left middle"]), ", ", _h('code', ["left bottom"]), ", ", _h('code', ["bottom left"]), ", ", _h('code', ["bottom center"]), ", ", _h('code', ["bottom right"]), ", ", _h('code', ["right bottom"]), ", ", _h('code', ["right middle"]), ", ", _h('code', ["right top"]), ", ", _h('code', ["top right"]), ", ", _h('code', ["top center"]), "."])])]), " ", _h('tr', [_h('td', ["openOn"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"click\""])]), " ", _h('td', [_h('p', ["The type of event that will cause the popover to open."]), " ", _h('p', ["One of ", _h('code', ["click"]), ", ", _h('code', ["hover"]), ", ", _h('code', ["focus"]), ", or ", _h('code', ["always"]), ". For ", _h('code', ["always"]), " the popover is opened when rendered and it remains open."])])]), " ", _h('tr', [_h('td', ["containFocus"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["true"])]), " ", _h('td', [_h('p', ["Determines whether or not tab focus should be contained in the popover."]), " ", _h('p', ["Set to ", _h('code', ["false"]), " to allow tabbing to focus elements outside the popover."])])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["opened"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the popover is opened."]), " ", _h('p', ["Listen for it using ", _h('code', ["@opened"]), "."])])]), " ", _h('tr', [_h('td', ["closed"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the popover is closed."]), " ", _h('p', ["Listen for it using ", _h('code', ["@closed"]), "."])])]), " ", _h('tr', [_h('td', {
    staticClass: "no-wrap new-prop"
  }, ["ui-dropdown::open"]), " ", _h('td', ["Received"]), " ", _h('td', [_h('p', ["Trigger this event to open the popover dropdown."]), " ", _h('p', ["You can optionally pass in an ", _h('code', ["id"]), " to only open the dropdown of a specific popover (whose ", _h('code', ["id"]), " you have set)."])])]), " ", _h('tr', [_h('td', {
    staticClass: "no-wrap new-prop"
  }, ["ui-dropdown::close"]), " ", _h('td', ["Received"]), " ", _h('td', [_h('p', ["Trigger this event to close the popover dropdown."]), " ", _h('p', ["You can optionally pass in an ", _h('code', ["id"]), " to only close the dropdown of a specific popover (whose ", _h('code', ["id"]), " you have set)."])])]), " ", _h('tr', [_h('td', {
    staticClass: "no-wrap new-prop"
  }, ["ui-dropdown::toggle"]), " ", _h('td', ["Received"]), " ", _h('td', [_h('p', ["Trigger this event to toggle the popover dropdown."]), " ", _h('p', ["You can optionally pass in an ", _h('code', ["id"]), " to only toggle the dropdown of a specific popover (whose ", _h('code', ["id"]), " you have set)."])])])])])])
}}]}

/***/ },
/* 132 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('section', {
    staticClass: "section section-ui-progress-linear"
  }, [_m(0), " ", _m(1), " ", _m(2), " ", _m(3), " ", _h('div', {
    staticClass: "demo"
  }, [_m(4), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-progress-linear', {
    attrs: {
      "show": loading,
      "type": "determinate",
      "color": "primary"
    },
    domProps: {
      "value": progress
    }
  }), " ", _h('ui-progress-linear', {
    attrs: {
      "show": loading,
      "type": "determinate",
      "color": "accent"
    },
    domProps: {
      "value": progress
    }
  }), " ", _h('ui-progress-linear', {
    attrs: {
      "show": loading,
      "type": "determinate",
      "color": "black"
    },
    domProps: {
      "value": progress
    }
  }), " ", _h('div', {
    staticClass: "color-wrapper"
  }, [_h('ui-progress-linear', {
    attrs: {
      "show": loading,
      "type": "determinate",
      "color": "white"
    },
    domProps: {
      "value": progress
    }
  })])]), " ", _m(5), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-progress-linear', {
    attrs: {
      "show": loading,
      "color": "primary"
    }
  }), " ", _h('ui-progress-linear', {
    attrs: {
      "show": loading,
      "color": "accent"
    }
  }), " ", _h('ui-progress-linear', {
    attrs: {
      "show": loading,
      "color": "black"
    }
  }), " ", _h('div', {
    staticClass: "color-wrapper"
  }, [_h('ui-progress-linear', {
    attrs: {
      "show": loading,
      "color": "white"
    }
  })])]), " ", _h('ui-button', {
    nativeOn: {
      "click": function($event) {
        loading = !loading
      }
    }
  }, ["Toggle Loading"])]), " ", _m(6), " ", _h('ui-tabs', {
    attrs: {
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Props"
    }
  }, [_m(7)])])])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "section-heading"
  }, ["\n        UiProgressLinear ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiProgressLinear.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('p', ["This component shows a linear progress bar that can be either determinate or indeterminate. A determinate progress bar shows a specific percentage of completion, while an indeterminate progress bar doesn't."])
}},function (){with(this) {
  return _h('p', ["UiProgressLinear supports four colors: ", _h('code', ["primary"]), ", ", _h('code', ["accent"]), ", ", _h('code', ["black"]), " and ", _h('code', ["white"]), "."])
}},function (){with(this) {
  return _h('h3', ["\n        Examples ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiProgressLinearDocs.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('h4', ["Determinate"])
}},function (){with(this) {
  return _h('h4', ["Indeterminate"])
}},function (){with(this) {
  return _h('h3', ["API"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["show"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not the progress bar is shown."]), " ", _h('p', ["Changing this value will show/hide the progress bar."])])]), " ", _h('tr', [_h('td', ["type"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"indeterminate\""])]), " ", _h('td', ["The type of linear progress. One of ", _h('code', ["determinate"]), " or ", _h('code', ["indeterminate"]), "."])]), " ", _h('tr', [_h('td', ["color"]), " ", _h('td', ["String"]), " ", _h('td', {
    staticClass: "no-wrap"
  }, [_h('code', [_h('code', ["\"primary\""])])]), " ", _h('td', ["The color of the progress bar. One of ", _h('code', ["primary"]), ", ", _h('code', ["accent"]), ", ", _h('code', ["black"]), " or ", _h('code', ["white"]), "."])]), " ", _h('tr', [_h('td', ["value"]), " ", _h('td', ["Number"]), " ", _h('td', [_h('code', ["0"])]), " ", _h('td', [_h('p', ["The value of progress as a number between 0 and 100. Changing this value will update the progress bar."]), " ", _h('p', ["Only applicable when the type is determinate."])])])])])])
}}]}

/***/ },
/* 133 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('section', {
    staticClass: "section section-ui-preloader"
  }, [_m(0), " ", _m(1), " ", _m(2), " ", _m(3), " ", _h('div', {
    staticClass: "demo"
  }, [_h('ui-preloader', {
    attrs: {
      "show": loading
    }
  }), " ", _h('ui-button', {
    nativeOn: {
      "click": function($event) {
        loading = !loading
      }
    }
  }, ["Toggle Loading"])]), "API", " ", _h('ui-tabs', {
    attrs: {
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Props"
    }
  }, [_m(4), "\n\n            * Required prop\n        "])])])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "section-heading"
  }, ["\n        UiPreloader ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiPreloader.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('p', ["This component shows an indeterminate progress bar using the primary Material Design colors. Useful for indicating activity like a page load."])
}},function (){with(this) {
  return _h('p', ["UiPreloader is not from the Material Design spec, but inspired by a similar component seen in Google's Inbox app."])
}},function (){with(this) {
  return _h('h3', ["\n        Examples ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiPreloaderDocs.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["show *"]), " ", _h('td', ["Boolean"]), " ", _h('td', ["(required)"]), " ", _h('td', [_h('p', ["Determines whether or not the preloader is shown."]), " ", _h('p', ["Changing this value will show/hide the preloader."])])])])])])
}}]}

/***/ },
/* 134 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('section', {
    staticClass: "section section-ui-progress-circular"
  }, [_m(0), " ", _m(1), " ", _m(2), " ", _m(3), " ", _h('div', {
    staticClass: "demo"
  }, [_m(4), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-progress-circular', {
    attrs: {
      "show": loading,
      "type": "determinate",
      "color": "primary"
    },
    domProps: {
      "value": progress
    }
  }), " ", _h('ui-progress-circular', {
    attrs: {
      "show": loading,
      "type": "determinate",
      "color": "accent"
    },
    domProps: {
      "value": progress
    }
  }), " ", _h('ui-progress-circular', {
    attrs: {
      "show": loading,
      "type": "determinate",
      "color": "black"
    },
    domProps: {
      "value": progress
    }
  }), " ", _h('div', {
    staticClass: "color-wrapper"
  }, [_h('ui-progress-circular', {
    attrs: {
      "show": loading,
      "type": "determinate",
      "color": "white"
    },
    domProps: {
      "value": progress
    }
  })])]), " ", _m(5), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-progress-circular', {
    attrs: {
      "show": loading,
      "color": "multi-color"
    }
  }), " ", _h('ui-progress-circular', {
    attrs: {
      "show": loading,
      "color": "primary"
    }
  }), " ", _h('ui-progress-circular', {
    attrs: {
      "show": loading,
      "color": "accent"
    }
  }), " ", _h('ui-progress-circular', {
    attrs: {
      "show": loading,
      "color": "black"
    }
  }), " ", _h('div', {
    staticClass: "color-wrapper"
  }, [_h('ui-progress-circular', {
    attrs: {
      "show": loading,
      "color": "white"
    }
  })])]), " ", _m(6), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-progress-circular', {
    attrs: {
      "show": loading,
      "size": 54,
      "type": "determinate",
      "auto-stroke": false
    },
    domProps: {
      "value": progress
    }
  }), " ", _h('ui-progress-circular', {
    attrs: {
      "show": loading,
      "size": 54,
      "auto-stroke": false
    }
  })]), " ", _m(7), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-progress-circular', {
    attrs: {
      "show": loading,
      "size": 48,
      "stroke": 8,
      "type": "determinate"
    },
    domProps: {
      "value": progress
    }
  }), " ", _h('ui-progress-circular', {
    attrs: {
      "show": loading,
      "size": 48,
      "stroke": 8
    }
  })]), " ", _m(8), " ", _h('ui-button', {
    nativeOn: {
      "click": function($event) {
        loading = !loading
      }
    }
  }, ["Toggle Loading"])]), " ", _m(9), " ", _h('ui-tabs', {
    attrs: {
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Props"
    }
  }, [_m(10)])])])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "section-heading"
  }, ["\n        UiProgressCircular ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiProgressCircular.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('p', ["UiProgressCircular shows a circular progress indicator (a spinner). Currently UiProgressCircular only works in browsers with ", _h('a', {
    attrs: {
      "href": "http://caniuse.com/#feat=svg-smil",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["SVG SMIL animation support"]), " (e.g. all modern browsers except IE and Edge)."])
}},function (){with(this) {
  return _h('p', ["UiProgressCircular supports five possible colors: ", _h('code', ["primary"]), ", ", _h('code', ["accent"]), ", ", _h('code', ["multi-color"]), " (alternating primary colors), ", _h('code', ["black"]), " and ", _h('code', ["white"]), ". The ", _h('code', ["size"]), " (width and height) and ", _h('code', ["stroke"]), " can be customized."])
}},function (){with(this) {
  return _h('h3', ["\n        Examples ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiProgressCircularDocs.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('h4', ["Determinate"])
}},function (){with(this) {
  return _h('h4', ["Indeterminate"])
}},function (){with(this) {
  return _h('h4', ["Custom size"])
}},function (){with(this) {
  return _h('h4', ["Custom stroke width"])
}},function (){with(this) {
  return _h('br')
}},function (){with(this) {
  return _h('h3', ["API"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["show"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not the circular progress is shown."]), " ", _h('p', ["Changing this value will show/hide the circular progress."])])]), " ", _h('tr', [_h('td', ["type"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"indeterminate\""])]), " ", _h('td', ["The type of circular progress. One of ", _h('code', ["determinate"]), " or ", _h('code', ["indeterminate"]), "."])]), " ", _h('tr', [_h('td', ["color"]), " ", _h('td', ["String"]), " ", _h('td', {
    staticClass: "no-wrap"
  }, [_h('code', ["\"primary\""])]), " ", _h('td', [_h('p', ["The color of the circular progress. One of ", _h('code', ["primary"]), ", ", _h('code', ["accent"]), ", ", _h('code', ["multi-color"]), ", ", _h('code', ["black"]), " or ", _h('code', ["white"]), "."]), " ", _h('p', [_h('code', ["multi-color"]), " is only supported on an indeterminate progress, if set on a determinate progress, the color will fall back to ", _h('code', ["primary"]), "."])])]), " ", _h('tr', [_h('td', ["size"]), " ", _h('td', ["Number"]), " ", _h('td', [_h('code', ["24"])]), " ", _h('td', ["The width and height of the circular progress in pixels (without any units)."])]), " ", _h('tr', [_h('td', ["stroke"]), " ", _h('td', ["Number"]), " ", _h('td', ["auto or ", _h('code', ["4"])]), " ", _h('td', [_h('p', ["The stroke width of the circular progress in pixels (without any units)."]), " ", _h('p', ["If ", _h('code', ["stroke"]), " is not provided, it is automatically calculated unless ", _h('code', ["autoStroke"]), " is set to ", _h('code', ["false"]), ". See below for details."])])]), " ", _h('tr', [_h('td', ["autoStroke"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not the stroke width should be automatically calculated if it is not provided."]), " ", _h('p', ["The calculated stroke is the ", _h('code', ["width"]), " divided by ", _h('code', ["8"]), "."]), " ", _h('p', ["If ", _h('code', ["autoStroke"]), " is set to ", _h('code', ["false"]), " and ", _h('code', ["stroke"]), " is not provided, it defaults to the number ", _h('code', ["4"]), "."])])]), " ", _h('tr', [_h('td', ["value"]), " ", _h('td', ["Number"]), " ", _h('td', [_h('code', ["0"])]), " ", _h('td', [_h('p', ["The value of progress as a number between 0 and 100. Changing this value will update the determinate progress ring."]), " ", _h('p', ["Only applicable when the type is determinate."])])])])])])
}}]}

/***/ },
/* 135 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('section', {
    staticClass: "section section-ui-radio"
  }, [_m(0), " ", _m(1), " ", _m(2), " ", _m(3), " ", _h('div', {
    staticClass: "demo"
  }, [_m(4), " ", _m(5), " ", _h('ui-radio', {
    directives: [{
      name: "model",
      value: (single1),
      expression: "single1"
    }],
    attrs: {
      "name": "single_1",
      "options": options.single1
    },
    domProps: {
      "value": (single1)
    },
    on: {
      "input": function($event) {
        single1 = $event
      }
    }
  }), " ", _h('p', {
    domProps: {
      "textContent": _s(("model: " + single1))
    }
  }), " ", _m(6), " ", _h('ui-radio', {
    directives: [{
      name: "model",
      value: (single2),
      expression: "single2"
    }],
    attrs: {
      "name": "single_2",
      "options": options.single2,
      "labelLeft": ""
    },
    domProps: {
      "value": (single2)
    },
    on: {
      "input": function($event) {
        single2 = $event
      }
    }
  }), " ", _h('p', {
    domProps: {
      "textContent": _s(("model: " + single2))
    }
  }), " ", _m(7), " ", _h('ui-radio', {
    directives: [{
      name: "model",
      value: (single3),
      expression: "single3"
    }],
    attrs: {
      "name": "single_3",
      "options": options.single3
    },
    domProps: {
      "value": (single3)
    },
    on: {
      "input": function($event) {
        single3 = $event
      }
    }
  }), " ", _m(8), " ", _h('ui-radio', {
    directives: [{
      name: "model",
      value: (single4),
      expression: "single4"
    }],
    attrs: {
      "name": "single_4",
      "options": options.single4
    },
    domProps: {
      "value": (single4)
    },
    on: {
      "input": function($event) {
        single4 = $event
      }
    }
  }), " ", _m(9), " ", _m(10), " ", _h('ui-radio', {
    directives: [{
      name: "model",
      value: (favourite.group1),
      expression: "favourite.group1"
    }],
    attrs: {
      "name": "favourite_1",
      "options": options.group1,
      "label": "Favourite Flanders"
    },
    domProps: {
      "value": (favourite.group1)
    },
    on: {
      "input": function($event) {
        favourite.group1 = $event
      }
    }
  }), " ", _h('p', {
    domProps: {
      "textContent": _s(("model: " + (favourite.group1)))
    }
  }), " ", _m(11), " ", _h('ui-radio', {
    directives: [{
      name: "model",
      value: (favourite.group2),
      expression: "favourite.group2"
    }],
    attrs: {
      "name": "favourite_2",
      "options": options.group1,
      "label": "Favourite Flanders"
    },
    domProps: {
      "value": (favourite.group2)
    },
    on: {
      "input": function($event) {
        favourite.group2 = $event
      }
    }
  }), " ", _h('p', {
    domProps: {
      "textContent": _s(("model: " + (favourite.group2)))
    }
  }), " ", _m(12), " ", _h('ui-radio', {
    directives: [{
      name: "model",
      value: (favourite.group3),
      expression: "favourite.group3"
    }],
    attrs: {
      "name": "favourite_3",
      "options": options.group1,
      "label": "Favourite Flanders",
      "help-text": "Choose your favourite neighbor-eeno"
    },
    domProps: {
      "value": (favourite.group3)
    },
    on: {
      "input": function($event) {
        favourite.group3 = $event
      }
    }
  }), " ", _m(13), " ", _h('ui-radio', {
    directives: [{
      name: "model",
      value: (favourite.group4),
      expression: "favourite.group4"
    }],
    attrs: {
      "name": "favourite_4",
      "options": options.group1,
      "label": "Favourite Flanders",
      "vertical": ""
    },
    domProps: {
      "value": (favourite.group4)
    },
    on: {
      "input": function($event) {
        favourite.group4 = $event
      }
    }
  }), " ", _m(14), " ", _h('ui-radio', {
    directives: [{
      name: "model",
      value: (favourite.group5),
      expression: "favourite.group5"
    }],
    attrs: {
      "name": "favourite_5",
      "options": options.group2,
      "label": "Favourite Flanders"
    },
    domProps: {
      "value": (favourite.group5)
    },
    on: {
      "input": function($event) {
        favourite.group5 = $event
      }
    }
  }), " ", _m(15), " ", _h('ui-radio', {
    directives: [{
      name: "model",
      value: (favourite.group6),
      expression: "favourite.group6"
    }],
    attrs: {
      "name": "favourite_6",
      "options": options.group2,
      "label": "Favourite Flanders",
      "disabled": ""
    },
    domProps: {
      "value": (favourite.group6)
    },
    on: {
      "input": function($event) {
        favourite.group6 = $event
      }
    }
  }), " ", _h('ui-button', {
    nativeOn: {
      "click": function($event) {
        reset($event)
      }
    }
  }, ["Reset Radio Buttons"])]), " ", _m(16), " ", _h('ui-tabs', {
    attrs: {
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Props"
    }
  }, [_m(17)]), " ", _h('ui-tab', {
    attrs: {
      "header": "Slots"
    }
  }, [_m(18)]), " ", _h('ui-tab', {
    attrs: {
      "header": "Events"
    }
  }, [_m(19)])])])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "section-heading"
  }, ["\n        UiRadio ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiRadio.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('p', ["UiRadio shows a single radio button. A radio button can have an optional label. It supports hover, focus and disabled states. The label can also be shown to the left of the radio button."])
}},function (){with(this) {
  return _h('p', ["To show a group of mutually exclusive radio buttons, use ", _h('a', {
    attrs: {
      "href": "#/ui-radio-group-docs"
    }
  }, ["UiRadioGroup"]), " or set a ", _h('code', ["value"]), " on each radio and use a common ", _h('code', ["model"]), " prop."])
}},function (){with(this) {
  return _h('h3', ["\n        Examples ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiRadioDocs.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('h3', ["Option Style"])
}},function (){with(this) {
  return _h('h4', ["Default style"])
}},function (){with(this) {
  return _h('h4', ["Label left"])
}},function (){with(this) {
  return _h('h4', ["Checked"])
}},function (){with(this) {
  return _h('h4', ["No label"])
}},function (){with(this) {
  return _h('h3', ["Radio Group"])
}},function (){with(this) {
  return _h('h4', ["Default"])
}},function (){with(this) {
  return _h('h4', ["With default selection"])
}},function (){with(this) {
  return _h('h4', ["With help text"])
}},function (){with(this) {
  return _h('h4', ["Vertical"])
}},function (){with(this) {
  return _h('h4', ["Individual option disabled"])
}},function (){with(this) {
  return _h('h4', ["Group disabled"])
}},function (){with(this) {
  return _h('h3', ["API"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Binding"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["id"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["A unique identifier for the radio button."]), " ", _h('p', ["Applied as the ", _h('code', ["id"]), " attribute of the radio ", _h('code', ["<input>"]), " element."])])]), " ", _h('tr', [_h('td', ["model"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td', ["Two-way"]), " ", _h('td', [_h('p', ["The model the radio value syncs to."]), " ", _h('p', ["Applied as the radio's ", _h('code', ["value"]), " prop or the String ", _h('code', ["\"on\""]), " when the radio is selected."]), " ", _h('p', ["When the radio is not selected, the model will be the String ", _h('code', ["\"off\""]), " or an empty string (if it's not shared between multiple radio buttons)."])])]), " ", _h('tr', [_h('td', ["checked"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the radio is checked by default."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " for a default checked state."])])]), " ", _h('tr', [_h('td', ["name"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', ["The ", _h('code', ["name"]), " attribute of the radio ", _h('code', ["<input>"]), " element."])]), " ", _h('tr', [_h('td', ["value"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td', ["Two-way"]), " ", _h('td', ["The ", _h('code', ["value"]), " attribute of the radio ", _h('code', ["<input>"]), " element."])]), " ", _h('tr', [_h('td', ["labelLeft"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the label is shown to the left of the radio button."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to show the label on the left."])])]), " ", _h('tr', [_h('td', ["label"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["The radio button label (text only)."]), " ", _h('p', ["To use HTML in the label, use the default slot."])])]), " ", _h('tr', [_h('td', ["hideLabel"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the radio button label is hidden."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to hide the label."])])]), " ", _h('tr', [_h('td', ["disabled"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the radio button is disabled."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to disable the radio."])])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["(default)"]), " ", _h('td', ["The default slot holds the radio button label and can contain HTML."])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["focussed"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the radio button is focussed."]), " ", _h('p', ["Listen for it using ", _h('code', ["@focussed"]), "."])])]), " ", _h('tr', [_h('td', ["blurred"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the radio button loses focus."]), " ", _h('p', ["Listen for it using ", _h('code', ["@blurred"]), "."])])])])])])
}}]}

/***/ },
/* 136 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('section', {
    staticClass: "section section-ui-rating"
  }, [_m(0), " ", _m(1), " ", _m(2), " ", _m(3), " ", _h('div', {
    staticClass: "demo"
  }, [_m(4), " ", _h('ui-rating-preview', {
    attrs: {
      "total": 5
    },
    domProps: {
      "value": 4
    }
  }), " ", _h('ui-rating-preview', {
    attrs: {
      "total": 5,
      "type": "heart"
    },
    domProps: {
      "value": 3
    }
  }), " ", _m(5), " ", _h('ui-rating', {
    directives: [{
      name: "model",
      value: (values.value1),
      expression: "values.value1"
    }],
    attrs: {
      "total": 5,
      "label": "Rate this post",
      "type": "heart",
      "help-text": "Be honest, it won't hurt our feelings :)"
    },
    domProps: {
      "value": (values.value1)
    },
    on: {
      "input": function($event) {
        values.value1 = $event
      }
    }
  }), " ", _h('ui-rating', {
    directives: [{
      name: "model",
      value: (values.value2),
      expression: "values.value2"
    }],
    attrs: {
      "total": 6,
      "label": "Rate your last bagel",
      "help-text": "1 for terrible, 3 for meh and 5 for fantastic"
    },
    domProps: {
      "value": (values.value2)
    },
    on: {
      "preview-value-changed": updateText,
      "input": function($event) {
        values.value2 = $event
      }
    }
  }), " ", _h('p', [_h('code', ["Your last bagel was: ", _h('b', {
    domProps: {
      "textContent": _s(bagelRating)
    }
  }), "."])]), " ", _h('ui-button', {
    nativeOn: {
      "click": function($event) {
        reset($event)
      }
    }
  }, ["Reset Ratings"]), " ", _m(6), " ", _h('ui-rating', {
    directives: [{
      name: "model",
      value: (values.value3),
      expression: "values.value3"
    }],
    attrs: {
      "total": 5,
      "label": "Rate this post",
      "disabled": ""
    },
    domProps: {
      "value": (values.value3)
    },
    on: {
      "input": function($event) {
        values.value3 = $event
      }
    }
  })]), " ", _m(7), " ", _h('ui-tabs', {
    attrs: {
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Props"
    }
  }, [_m(8), "\n\n            * Required prop\n        "]), " ", _h('ui-tab', {
    attrs: {
      "header": "Events"
    }
  }, [_m(9)])]), " ", _m(10), " ", _h('ui-tabs', {
    attrs: {
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Props"
    }
  }, [_m(11), "\n\n            * Required prop\n        "])])])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "section-heading"
  }, ["\n        UiRating & UiRatingPreview ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiRating.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('p', ["UiRating component shows a rating control whose icons can be stars or hearts. UiRatingPreview is the basic, read-only version."])
}},function (){with(this) {
  return _h('p', ["UiRating supports a label, help text, keyboard interaction and hover, focus and disabled states. It also allows for resetting to the initial state."])
}},function (){with(this) {
  return _h('h3', ["\n        Examples ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiRatingDocs.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('h4', ["UiRatingPreview"])
}},function (){with(this) {
  return _h('h4', ["UiRating"])
}},function (){with(this) {
  return _h('h4', ["UiRating, disabled"])
}},function (){with(this) {
  return _h('h3', ["API: UiRating"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Binding"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["id"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["A unique identifier for the rating."]), " ", _h('p', ["Applied as the ", _h('code', ["id"]), " attribute of the rating root element and used when targeting a specific rating for reset."])])]), " ", _h('tr', [_h('td', ["type"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"star\""])]), " ", _h('td'), " ", _h('td', [_h('p', ["The type of rating (determines the icon to show)."]), " ", _h('p', ["One of ", _h('code', ["star"]), " or ", _h('code', ["heart"]), "."])])]), " ", _h('tr', [_h('td', ["value *"]), " ", _h('td', ["Number"]), " ", _h('td', ["(required)"]), " ", _h('td', ["Two-way"]), " ", _h('td', [_h('p', ["The model that the rating value (i.e. number of filled stars or hearts) syncs to."]), " ", _h('p', ["Can be set initially to show a default rating."]), " ", _h('p', ["Must be less than or equal to ", _h('code', ["total"]), "."])])]), " ", _h('tr', [_h('td', ["total *"]), " ", _h('td', ["Number"]), " ", _h('td', ["(required)"]), " ", _h('td'), " ", _h('td', ["The rating total (i.e. number of stars or hearts to show)."])]), " ", _h('tr', [_h('td', ["label"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', ["The rating label (text-only)."])]), " ", _h('tr', [_h('td', ["hideLabel"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the rating label is hidden."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to hide the label."])])]), " ", _h('tr', [_h('td', ["helpText"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["The help text (hint) shown to the user below the rating."]), " ", _h('p', ["Extra space is reserved under the rating for the help text, but if no help text is available, this space is collapsed."])])]), " ", _h('tr', [_h('td', ["disabled"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the rating is disabled."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to disable the rating."]), " ", _h('p', [_h('b', ["Note"]), ": this is not the same as a read-only rating, for that, use UiRatingPreview."])])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["preview-value-changed"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the preview value of the rating changes."]), " ", _h('p', ["Listen for it using ", _h('code', ["@preview-value-changed"]), "."])])]), " ", _h('tr', [_h('td', {
    staticClass: "no-wrap"
  }, ["ui-input::reset"]), " ", _h('td', ["Received"]), " ", _h('td', [_h('p', ["Trigger this event to reset the rating to its initial state."]), " ", _h('p', ["This event resets the ", _h('code', ["value"]), " prop."]), " ", _h('p', ["You can optionally pass in an ", _h('code', ["id"]), " to reset only a specific rating (whose ", _h('code', ["id"]), " you have set)."])])])])])])
}},function (){with(this) {
  return _h('h3', ["API: UiRatingPreview"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["type"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"star\""])]), " ", _h('td', [_h('p', ["The type of rating (determines the icon to show)."]), " ", _h('p', ["One of ", _h('code', ["star"]), " or ", _h('code', ["heart"]), "."])])]), " ", _h('tr', [_h('td', ["value *"]), " ", _h('td', ["Number"]), " ", _h('td', ["(required)"]), " ", _h('td', [_h('p', ["The rating preview value (i.e. number of filled stars or hearts)."]), " ", _h('p', ["Must be less than or equal to ", _h('code', ["total"]), "."])])]), " ", _h('tr', [_h('td', ["total *"]), " ", _h('td', ["Number"]), " ", _h('td', ["(required)"]), " ", _h('td', ["The rating total (i.e. number of stars or hearts to show)."])])])])])
}}]}

/***/ },
/* 137 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('section', {
    staticClass: "section section-ui-slider"
  }, [_m(0), " ", _m(1), " ", _m(2), " ", _m(3), " ", _h('div', {
    staticClass: "demo"
  }, [_m(4), " ", _h('ui-slider', {
    directives: [{
      name: "model",
      value: (values.value1),
      expression: "values.value1"
    }],
    domProps: {
      "value": (values.value1)
    },
    on: {
      "input": function($event) {
        values.value1 = $event
      }
    }
  }), " ", _m(5), " ", _h('ui-slider', {
    directives: [{
      name: "model",
      value: (values.value2),
      expression: "values.value2"
    }],
    attrs: {
      "label": "Adjust volume"
    },
    domProps: {
      "value": (values.value2)
    },
    on: {
      "input": function($event) {
        values.value2 = $event
      }
    }
  }), " ", _m(6), " ", _h('ui-slider', {
    directives: [{
      name: "model",
      value: (values.value3),
      expression: "values.value3"
    }],
    attrs: {
      "icon": "volume_up"
    },
    domProps: {
      "value": (values.value3)
    },
    on: {
      "input": function($event) {
        values.value3 = $event
      }
    }
  }), " ", _m(7), " ", _h('ui-slider', {
    directives: [{
      name: "model",
      value: (values.value4),
      expression: "values.value4"
    }],
    attrs: {
      "label": "Adjust volume",
      "icon": "volume_up"
    },
    domProps: {
      "value": (values.value4)
    },
    on: {
      "input": function($event) {
        values.value4 = $event
      }
    }
  }), " ", _m(8), " ", _h('ui-slider', {
    directives: [{
      name: "model",
      value: (values.value5),
      expression: "values.value5"
    }],
    attrs: {
      "icon": "volume_up",
      "disabled": ""
    },
    domProps: {
      "value": (values.value5)
    },
    on: {
      "input": function($event) {
        values.value5 = $event
      }
    }
  }), " ", _h('ui-button', {
    nativeOn: {
      "click": function($event) {
        resetSliders($event)
      }
    }
  }, ["Reset sliders"])]), " ", _m(9), " ", _h('ui-tabs', {
    attrs: {
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Props"
    }
  }, [_m(10), "\n\n            * Required prop\n        "]), " ", _h('ui-tab', {
    attrs: {
      "header": "Events"
    }
  }, [_m(11)])])])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "section-heading"
  }, ["\n        UiSlider ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiSlider.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('p', ["UiSlider is a component that allows the user to select a value from a continuous range of values by moving the slider thumb, clicking on the slider, or using the arrow keys."])
}},function (){with(this) {
  return _h('p', ["UiSlider allows for adding a label and an icon. The slider is keyboard accessible and can be disabled."])
}},function (){with(this) {
  return _h('h3', ["\n        Examples ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiSliderDocs.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('h4', ["Default"])
}},function (){with(this) {
  return _h('h4', ["With label"])
}},function (){with(this) {
  return _h('h4', ["With icon"])
}},function (){with(this) {
  return _h('h4', ["With label and icon"])
}},function (){with(this) {
  return _h('h4', ["Default with icon, disabled"])
}},function (){with(this) {
  return _h('h3', ["API"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Binding"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["id"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["A unique identifier for the slider."]), " ", _h('p', ["Applied as the ", _h('code', ["id"]), " attribute on the root element and used when targeting a specific slider for reset."])])]), " ", _h('tr', [_h('td', ["name"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', ["The slider's hidden input ", _h('code', ["name"]), " attribute."])]), " ", _h('tr', [_h('td', ["value *"]), " ", _h('td', ["Boolean"]), " ", _h('td', ["(required)"]), " ", _h('td', ["Two way"]), " ", _h('td', ["The model that the slider value syncs to."])]), " ", _h('tr', [_h('td', ["step"]), " ", _h('td', ["Number"]), " ", _h('td', [_h('code', ["5"])]), " ", _h('td'), " ", _h('td', ["The amount to increment or decrement the slider value by when using the arrow keys."])]), " ", _h('tr', [_h('td', ["icon"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["The slider icon. Can be any of the ", _h('a', {
    attrs: {
      "href": "https://design.google.com/icons/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Material Icons"]), "."]), " ", _h('p', ["Note that this should be the icon codepoint if you want to support IE9."])])]), " ", _h('tr', [_h('td', ["label"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', ["The slider label (text only)."])]), " ", _h('tr', [_h('td', ["hideLabel"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the slider label is hidden."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to hide the label."])])]), " ", _h('tr', [_h('td', ["disabled"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the slider is disabled."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to disable the slider."])])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', {
    staticClass: "no-wrap"
  }, ["ui-input::reset"]), " ", _h('td', ["Received"]), " ", _h('td', [_h('p', ["Trigger this event to reset the slider to its initial state. This event resets the ", _h('code', ["value"]), " prop."]), " ", _h('p', ["You can optionally pass in an ", _h('code', ["id"]), " to reset only a specific slider (whose ", _h('code', ["id"]), " you have set)."])])])])])])
}}]}

/***/ },
/* 138 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('section', {
    staticClass: "section section-ui-alert"
  }, [_m(0), " ", _m(1), " ", _m(2), " ", _m(3), " ", _h('div', {
    staticClass: "demo"
  }, [_h('ui-alert', {
    attrs: {
      "text": "Hi everybody! This is the default alert."
    }
  }), " ", _h('ui-alert', {
    attrs: {
      "type": "success"
    }
  }, ["\n            Okilly dokilly, your account was updated successfully.\n        "]), " ", _h('ui-alert', {
    attrs: {
      "type": "warning"
    }
  }, ["\n            Ay caramba! Alerts can also contain HTML. ", _m(4), " for Google.com.\n        "]), " ", _h('ui-alert', {
    attrs: {
      "type": "error",
      "text": "D'oh! Something went wrong and we cannot process your request at this time. Try again later."
    },
    on: {
      "dismissed": function($event) {
        eventTest()
      }
    }
  }), " ", _h('ui-alert', {
    attrs: {
      "icon": "battery_alert",
      "type": "warning"
    }
  }, ["\n            This alert has a custom icon.\n        "]), " ", _h('ui-alert', ["\n            This is a multi-line alert. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor suscipit facilis explicabo officiis consectetur, ipsam voluptate excepturi quas quae. Dolorem.\n        "]), " ", _h('ui-alert', {
    attrs: {
      "text": "This alert is not dismissible.",
      "dismissible": false
    }
  }), " ", _h('ui-alert', {
    attrs: {
      "hide-icon": ""
    }
  }, ["\n            The icon for this alert has been removed.\n        "]), " ", _h('ui-alert', {
    attrs: {
      "dismissible": false,
      "hide-icon": ""
    }
  }, ["\n            This alert has no icon and cannot be dismissed.\n        "])]), " ", _m(5), " ", _h('ui-tabs', {
    attrs: {
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Props"
    }
  }, [_m(6)]), " ", _h('ui-tab', {
    attrs: {
      "header": "Slots"
    }
  }, [_m(7)]), " ", _h('ui-tab', {
    attrs: {
      "header": "Events"
    }
  }, [_m(8)])])])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "section-heading"
  }, ["\n        UiAlert ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiAlert.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('p', ["UiAlerts are used to show inline alert messages to the user. Supported types are ", _h('code', ["info"]), ", ", _h('code', ["success"]), ", ", _h('code', ["warning"]), " and ", _h('code', ["error"]), "."])
}},function (){with(this) {
  return _h('p', ["UiAlert supports keyboard navigation, can contain links and can be dismissible. The content can be fully customized using HTML and the icon can be changed or removed."])
}},function (){with(this) {
  return _h('h3', ["\n        Examples ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiAlertDocs.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('a', {
    attrs: {
      "href": "https://google.com",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Click here"])
}},function (){with(this) {
  return _h('h3', ["API"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["type"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"info\""])]), " ", _h('td', [_h('p', ["Determines the alert background color and default icon."]), " ", _h('p', ["One of ", _h('code', ["info"]), ", ", _h('code', ["success"]), ", ", _h('code', ["warning"]), " or ", _h('code', ["error"]), "."])])]), " ", _h('tr', [_h('td', ["text"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td', [_h('p', ["The alert body content (text-only)."]), " ", _h('p', ["To use HTML in the alert body, use the default slot."])])]), " ", _h('tr', [_h('td', ["icon"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td', [_h('p', ["The name of a custom alert icon."]), " ", _h('p', ["Can be any of the ", _h('a', {
    attrs: {
      "href": "https://design.google.com/icons/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Material Icons"]), "."]), " ", _h('p', ["Note that this should be the icon codepoint if you want to support IE9. By default the icon is based on the alert type."])])]), " ", _h('tr', [_h('td', ["hideIcon"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not the alert icon is hidden."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to hide the icon."])])]), " ", _h('tr', [_h('td', ["dismissible"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["true"])]), " ", _h('td', [_h('p', ["Determines whether or not the alert can be dismissed."]), " ", _h('p', ["Set to ", _h('code', ["false"]), " to hide the close button and prevent the user from dismissing the alert."])])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["(default)"]), " ", _h('td', ["The default slot holds the alert content and can contain HTML."])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["dismissed"]), " ", _h('td', ["Emitted"]), " ", _h('td', [_h('p', ["Emitted when the alert is dismissed."]), " ", _h('p', ["Listen for it using ", _h('code', ["@dismissed"]), " inline."])])])])])])
}}]}

/***/ },
/* 139 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('section', {
    staticClass: "section section-ui-ripple-ink"
  }, [_m(0), " ", _m(1), " ", _m(2), " ", _m(3), " ", _m(4), " ", _m(5), " ", _h('div', {
    staticClass: "demo"
  }, [_m(6), " ", _h('div', {
    staticClass: "group tv-shows custom-color color-blue"
  }, [(tvShows) && _l((tvShows), function(show) {
    return _h('image-pane', {
      attrs: {
        "image": show.image
      },
      inlineTemplate: {
        render: function() {
          with(this) {
            return _h('div', {
              staticClass: "image-pane",
              style: ({
                'background-image': 'url(' + image + ')'
              })
            }, [_h('ui-ripple-ink')])
          }
        },
        staticRenderFns: []
      }
    })
  })]), " ", _m(7), " ", _h('div', {
    staticClass: "group the-simpsons custom-color color-orange custom-opacity"
  }, [(theSimpsons) && _l((theSimpsons), function(simpson) {
    return _h('image-pane', {
      attrs: {
        "image": simpson.image
      },
      inlineTemplate: {
        render: function() {
          with(this) {
            return _h('div', {
              staticClass: "image-pane",
              style: ({
                'background-image': 'url(' + image + ')'
              })
            }, [_h('ui-ripple-ink')])
          }
        },
        staticRenderFns: []
      }
    })
  })])]), " ", _m(8), " ", _h('ui-tabs', {
    attrs: {
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Props"
    }
  }, [_m(9), "\n\n            * Required prop\n        "])])])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "section-heading"
  }, ["\n        UiRippleInk ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiRippleInk.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('p', ["UiRippleInk allows you to show a ripple ink on a material when it is touched or clicked. Using CSS, you can customize the ripple color and opacity."])
}},function (){with(this) {
  return _h('p', ["To change the color, set a ", _h('code', ["color"]), " property on the containing element (which the ripple will inherit as background color) or set a ", _h('code', ["background-color"]), " property on ", _h('code', [".ui-ripple-ink .ripple"]), "."])
}},function (){with(this) {
  return _h('p', ["To change the opacity, set ", _h('code', ["opacity"]), " on ", _h('code', [".ui-ripple-ink .ripple"]), "."])
}},function (){with(this) {
  return _h('p', ["UiRippleInk is used internally by many components, including ", _h('a', {
    attrs: {
      "href": "#/ui-button-docs"
    }
  }, ["UiButton"]), ", ", _h('a', {
    attrs: {
      "href": "#/ui-collapsible-docs"
    }
  }, ["UiCollapsible"]), ", ", _h('a', {
    attrs: {
      "href": "#/ui-icon-button-docs"
    }
  }, ["UiIconButton"]), ", ", _h('a', {
    attrs: {
      "href": "#/ui-fab-docs"
    }
  }, ["UiFab"]), ", ", _h('a', {
    attrs: {
      "href": "#/ui-menu-docs"
    }
  }, ["UiMenu"]), ", and ", _h('a', {
    attrs: {
      "href": "#/ui-tabs-docs"
    }
  }, ["UiTabs"]), "."])
}},function (){with(this) {
  return _h('h3', ["\n        Examples ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiRippleInkDocs.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('h4', ["Color: blue"])
}},function (){with(this) {
  return _h('h4', ["Color: orange, Opacity: 0.95"])
}},function (){with(this) {
  return _h('h3', ["API"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["trigger *"]), " ", _h('td', ["HTMLElement"]), " ", _h('td', ["An Element to attach the click/touch event listeners to. When this element is clicked or touched, a ripple ink will be shown."])])])])])
}}]}

/***/ },
/* 140 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('section', {
    staticClass: "section section-ui-select"
  }, [_m(0), " ", _m(1), " ", _m(2), " ", _m(3), " ", _m(4), " ", _h('div', {
    staticClass: "demo"
  }, [_m(5), " ", _h('ui-select', {
    directives: [{
      name: "model",
      value: (values.value1),
      expression: "values.value1"
    }],
    attrs: {
      "name": "color",
      "label": "Favourite color",
      "options": colorStrings,
      "placeholder": "Select a color"
    },
    domProps: {
      "value": (values.value1)
    },
    on: {
      "input": function($event) {
        values.value1 = $event
      }
    }
  }), " ", _m(6), " ", _h('ui-select', {
    directives: [{
      name: "model",
      value: (values.value2),
      expression: "values.value2"
    }],
    attrs: {
      "name": "color",
      "label": "Favourite color",
      "options": colorStrings,
      "default": "Lavender",
      "placeholder": "Select a color"
    },
    domProps: {
      "value": (values.value2)
    },
    on: {
      "input": function($event) {
        values.value2 = $event
      }
    }
  }), " ", _m(7), " ", _h('ui-select', {
    directives: [{
      name: "model",
      value: (values.value3),
      expression: "values.value3"
    }],
    attrs: {
      "name": "color",
      "label": "Favourite color",
      "options": colors,
      "type": "image",
      "placeholder": "Select a color"
    },
    domProps: {
      "value": (values.value3)
    },
    on: {
      "input": function($event) {
        values.value3 = $event
      }
    }
  }), " ", _m(8), " ", _h('ui-select', {
    directives: [{
      name: "model",
      value: (values.value4),
      expression: "values.value4"
    }],
    attrs: {
      "name": "color",
      "label": "Favourite color",
      "options": colors,
      "type": "image",
      "placeholder": "Select a color",
      "default": "lavender"
    },
    domProps: {
      "value": (values.value4)
    },
    on: {
      "input": function($event) {
        values.value4 = $event
      }
    }
  }), " ", _m(9), " ", _h('ui-select', {
    directives: [{
      name: "model",
      value: (values.value5),
      expression: "values.value5"
    }],
    attrs: {
      "name": "color",
      "label": "Favourite color",
      "options": colors,
      "type": "image",
      "placeholder": "Select a color",
      "help-text": "Will appear on your profile page"
    },
    domProps: {
      "value": (values.value5)
    },
    on: {
      "input": function($event) {
        values.value5 = $event
      }
    }
  }), " ", _m(10), " ", _h('ui-select', {
    directives: [{
      name: "model",
      value: (values.value6),
      expression: "values.value6"
    }],
    attrs: {
      "name": "color",
      "label": "Favourite color",
      "options": colors,
      "type": "image",
      "placeholder": "Select a color",
      "show-search": ""
    },
    domProps: {
      "value": (values.value6)
    },
    on: {
      "input": function($event) {
        values.value6 = $event
      }
    }
  }), " ", _m(11), " ", _h('ui-select', {
    directives: [{
      name: "model",
      value: (values.value7),
      expression: "values.value7"
    }],
    attrs: {
      "name": "color",
      "label": "Favourite colors",
      "options": colors,
      "type": "image",
      "placeholder": "Select some colors",
      "show-search": "",
      "multiple": ""
    },
    domProps: {
      "value": (values.value7)
    },
    on: {
      "input": function($event) {
        values.value7 = $event
      }
    }
  }), " ", _m(12), " ", _h('ui-select', {
    directives: [{
      name: "model",
      value: (values.value8),
      expression: "values.value8"
    }],
    attrs: {
      "name": "color",
      "label": "Favourite colors",
      "type": "image",
      "show-search": "",
      "multiple": "",
      "placeholder": "Select some colors",
      "options": colors,
      "default": ['red', 'blue']
    },
    domProps: {
      "value": (values.value8)
    },
    on: {
      "input": function($event) {
        values.value8 = $event
      }
    }
  }), " ", _m(13), " ", _m(14), " ", _h('ui-select', {
    directives: [{
      name: "model",
      value: (values.value9),
      expression: "values.value9"
    }],
    attrs: {
      "name": "favorite_color",
      "label": "Favourite color",
      "type": "image",
      "placeholder": "Select a color",
      "options": colors,
      "validation-rules": "required"
    },
    domProps: {
      "value": (values.value9)
    },
    on: {
      "input": function($event) {
        values.value9 = $event
      }
    }
  }), " ", _m(15), " ", _m(16), " ", _h('ui-select', {
    directives: [{
      name: "model",
      value: (values.value10),
      expression: "values.value10"
    }],
    attrs: {
      "label": "Favourite colors",
      "placeholder": "Select some colors",
      "name": "favorite_colors",
      "type": "image",
      "multiple": "",
      "options": colors,
      "help-text": "Select at least 2 but no more than 4 colors",
      "validation-rules": "required|min:2|max:4"
    },
    domProps: {
      "value": (values.value10)
    },
    on: {
      "input": function($event) {
        values.value10 = $event
      }
    }
  }), " ", _m(17), " ", _h('ui-select', {
    directives: [{
      name: "model",
      value: (dynamicSelect.value),
      expression: "dynamicSelect.value"
    }],
    attrs: {
      "name": "color",
      "label": "Favourite color",
      "type": "image",
      "show-search": "",
      "search-placeholder": "Type 'red' or 'blue'",
      "options-dynamic": "",
      "placeholder": "Select a color",
      "options": dynamicSelect.options,
      "loading": dynamicSelect.loading,
      "options-loaded": dynamicSelect.optionsLoaded
    },
    domProps: {
      "value": (dynamicSelect.value)
    },
    on: {
      "query-changed": queryChanged,
      "input": function($event) {
        dynamicSelect.value = $event
      }
    }
  }), " ", _m(18), " ", _h('ui-select', {
    attrs: {
      "name": "color",
      "label": "Favourite color",
      "options": colors,
      "placeholder": "Select a color",
      "disabled": ""
    }
  }), " ", _m(19), " ", _h('ui-select', {
    attrs: {
      "name": "color",
      "label": "Favourite color",
      "options": colors,
      "placeholder": "Select a color",
      "default": "blue",
      "disabled": ""
    }
  }), " ", _h('ui-button', {
    nativeOn: {
      "click": function($event) {
        resetSelects($event)
      }
    }
  }, ["Reset selects"])]), " ", _m(20), " ", _h('ui-tabs', {
    attrs: {
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Props"
    }
  }, [_m(21), "\n\n                * Required prop\n            "]), " ", _h('ui-tab', {
    attrs: {
      "header": "Events"
    }
  }, [_m(22)])])])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "section-heading"
  }, ["\n            UiSelect ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiSelect.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('p', ["UiSelect is a select component that allows the user to choose one or more options from a group of pre-defined or dynamically loaded options. It supports default options, multiple selection, filtering and a loading indicator."])
}},function (){with(this) {
  return _h('p', ["UiSelect can have a label above the input, an icon, as well as help text and error message below the input. It also supports keyboard navigation and a disabled state."])
}},function (){with(this) {
  return _h('p', ["UiSelect supports validation, and the validation state can also be set programmatically from outside the component using an event."])
}},function (){with(this) {
  return _h('h3', ["\n            Examples ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiSelectDocs.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('h4', ["Options as plain array"])
}},function (){with(this) {
  return _h('h4', ["As above, with a default selection"])
}},function (){with(this) {
  return _h('h4', ["With images (options as array of objects)"])
}},function (){with(this) {
  return _h('h4', ["As above, with a default selection"])
}},function (){with(this) {
  return _h('h4', ["With help text"])
}},function (){with(this) {
  return _h('h4', ["With filtering"])
}},function (){with(this) {
  return _h('h4', ["Multiple selection"])
}},function (){with(this) {
  return _h('h4', ["Multiple selection with defaults selected"])
}},function (){with(this) {
  return _h('h4', ["With validation"])
}},function (){with(this) {
  return _h('p', {
    staticClass: "code"
  }, [_h('code', ["validation-rules=\"required\""])])
}},function (){with(this) {
  return _h('h4', ["Multiple selection with validation"])
}},function (){with(this) {
  return _h('p', {
    staticClass: "code"
  }, [_h('code', ["validation-rules=\"required|min:2|max:4\""])])
}},function (){with(this) {
  return _h('h4', ["Search with dynamic options"])
}},function (){with(this) {
  return _h('h4', ["Disabled"])
}},function (){with(this) {
  return _h('h4', ["Disabled with a selection"])
}},function (){with(this) {
  return _h('h3', ["API"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Binding"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["id"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["A unique identifier for the select."]), " ", _h('p', ["Applied as the ", _h('code', ["id"]), " attribute of the select root element and used when targeting a specific select for reset."])])]), " ", _h('tr', [_h('td', ["name *"]), " ", _h('td', ["String"]), " ", _h('td', ["(required)"]), " ", _h('td'), " ", _h('td', [_h('p', ["The ", _h('code', ["name"]), " attribute of the select input."]), " ", _h('p', ["Used when generating validation error messages. A name with multiple words should be written in ", _h('code', ["snake_case"]), "."])])]), " ", _h('tr', [_h('td', ["value"]), " ", _h('td', ["Object or Array"]), " ", _h('td'), " ", _h('td', ["Two way"]), " ", _h('td', [_h('p', ["The selected value or array of values (is updated when the user makes a selection)."]), " ", _h('p', ["Do not set this initially, as it will be overriden when the select is initialized."]), " ", _h('p', ["For pre-selected or default values, use the ", _h('code', ["default"]), " prop."])])]), " ", _h('tr', [_h('td', ["default"]), " ", _h('td', ["String, Number, Object or Array"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["The initial/default value or values of the select."]), " ", _h('p', ["Supports any string, number or object, or an array of those, provided the string, number or ", _h('code', ["value"]), " key of the object matches with an option."]), " ", _h('p', ["Also supports an array when the ", _h('code', ["multiple"]), " prop is ", _h('code', ["true"]), "."]), " ", _h('p', ["To change the selected option after the select is initialized, trigger a ", _h('code', ["ui-select::set-selected"]), " event."])])]), " ", _h('tr', [_h('td', ["options"]), " ", _h('td', ["Array"]), " ", _h('td', [_h('code', ["[]"])]), " ", _h('td'), " ", _h('td', [_h('p', ["An array of options to show to the user."]), " ", _h('p', ["Supports a plain array, e.g. ", _h('code', ["['Red', 'Blue', 'Green']"]), " as well as an array of objects whose keys can be optionally redefined."]), " ", _h('p', ["For a plain array, the option is shown to the user and it is used for filtering."]), " ", _h('p', ["For an array of objects, the ", _h('code', ["text"]), " key is shown to the user and is used for filtering while the ", _h('code', ["value"]), " key is used for matching options (like an ID)."]), " ", _h('p', ["The option object or string or number is written to the ", _h('code', ["value"]), " prop when the user makes a selection."])])]), " ", _h('tr', [_h('td', ["multiple"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the user can select multiple values."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to allow multiple selection."])])]), " ", _h('tr', [_h('td', ["multipleDelimiter"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\", \""])]), " ", _h('td'), " ", _h('td', ["The delimiter (separator) to use for displaying multiple selected options."])]), " ", _h('tr', [_h('td', ["placeholder"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', ["Text to display in the select when no option is selected."])]), " ", _h('tr', [_h('td', ["type"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"ui-select-simple\""])]), " ", _h('td'), " ", _h('td', [_h('p', ["The ID of a registered ", _h('a', {
    attrs: {
      "href": "http://vuejs.org/api/#type",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Vue type"]), " to use as the template for each option."]), " ", _h('p', ["This type is rendered into an ", _h('code', ["<div>"]), " with a class of ", _h('code', ["ui-select-option-content"]), " which also has the type's ID as a class. In the type template, you have access to an ", _h('code', ["option"]), " object from the options array which you can use to render the option however you like."]), " ", _h('p', ["The default type simply renders the option text."]), " ", _h('p', ["There is another default type, ", _h('code', ["image"]), ", which you can use to render the items with an image. To use, set an image URL as the ", _h('code', ["image"]), " property on each option and set the type to ", _h('code', ["image"]), "."]), " ", _h('p', ["You can also redefine the ", _h('code', ["image"]), " key to fit your data using the ", _h('code', ["keys"]), " prop."])])]), " ", _h('tr', [_h('td', ["showSearch"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not to show an input for filtering the select options or searching remote options."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to show a search input."])])]), " ", _h('tr', [_h('td', ["searchPlaceholder"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', ["The ", _h('code', ["placeholder"]), " attribute of the search input."])]), " ", _h('tr', [_h('td', {
    staticClass: "new-prop"
  }, ["optionsDynamic"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the options for the select are loaded dynamically."]), " ", _h('p', ["This prop is useful when you want to implement a custom (e.g. remote) search. It disables filtering so the select search query can be used for searching."]), " ", _h('p', ["See the ", _h('b', ["Search with dynamic options"]), " section above for an example."])])]), " ", _h('tr', [_h('td', ["loading"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not to show a circular progress spinner on the search input."]), " ", _h('p', ["This prop is useful for showing feedback to the user when you are doing a remote search. Set to ", _h('code', ["true"]), " to show the spinner and ", _h('code', ["false"]), " to hide it."]), " ", _h('p', ["See the ", _h('b', ["Search with dynamic options"]), " section above for an example."])])]), " ", _h('tr', [_h('td', {
    staticClass: "new-prop"
  }, ["optionsLoaded"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the options for this select have been loaded."]), " ", _h('p', ["If this is ", _h('code', ["true"]), " and the ", _h('code', ["options"]), " array is empty, then a \"No results found\" message is shown below the search input."]), " ", _h('p', ["See the ", _h('b', ["Search with dynamic options"]), " section above for an example."])])]), " ", _h('tr', [_h('td', {
    staticClass: "new-prop"
  }, ["filter"]), " ", _h('td', ["Function"]), " ", _h('td', ["(", _h('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/fuzzysearch",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["fuzzysearch"]), ")"]), " ", _h('td'), " ", _h('td', [_h('p', ["Defines a custom filter function that is used for filtering the options when the user types into the select search box."]), " ", _h('p', ["The function is called for each item in the ", _h('code', ["options"]), " array with two arguments:"]), " ", _h('ul', [_h('li', [_h('code', ["option"]), ": the current option, may be a string or an object"]), " ", _h('li', [_h('code', ["query"]), ": the current value of the select search input (what the user has typed)"])]), " ", _h('p', ["The function should return ", _h('code', ["true"]), " if the item matches the query or ", _h('code', ["false"]), " otherwise."])])]), " ", _h('tr', [_h('td', {
    staticClass: "new-prop"
  }, ["keys"]), " ", _h('td', ["Object"]), " ", _h('td', [_h('pre', ["{\n  text: 'text',\n  value: 'value',\n  image: 'image'\n}"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Allows for redefining the ", _h('code', ["text"]), ", ", _h('code', ["value"]), " and ", _h('code', ["image"]), " keys."]), " ", _h('p', ["Pass an object with custom keys if your data does not match the default keys."]), " ", _h('p', ["Note that if you redefine one key, you have to specify the other two as well."])])]), " ", _h('tr', [_h('td', ["valid"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["true"])]), " ", _h('td', ["Two-way"]), " ", _h('td', [_h('p', ["Shows whether or not the select is valid."]), " ", _h('p', ["Only applicable when the ", _h('code', ["validationRules"]), " prop is present."])])]), " ", _h('tr', [_h('td', ["dirty"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', ["Two way"]), " ", _h('td', ["Shows whether or not the select has been opened at least once by the user."])]), " ", _h('tr', [_h('td', ["icon"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["The select icon. Can be any of the ", _h('a', {
    attrs: {
      "href": "https://design.google.com/icons/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Material Icons"]), "."]), " ", _h('p', ["Note that this should be the icon codepoint if you want to support IE9."])])]), " ", _h('tr', [_h('td', ["iconRight"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the select icon is shown to the right."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to show the icon to the right of the select."])])]), " ", _h('tr', [_h('td', ["label"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', ["The label shown above the select (text only)."])]), " ", _h('tr', [_h('td', ["hideLabel"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the select label is hidden."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to hide the label."])])]), " ", _h('tr', [_h('td', ["helpText"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["The help text (hint) shown to the user below the select."]), " ", _h('p', ["Extra space is reserved under the select for the help text and validation errors. If none of these are enabled, this space is collapsed."])])]), " ", _h('tr', [_h('td', ["hideValidationErrors"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not validation errors for the select are hidden."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to hide all validation errors."]), " ", _h('p', ["This prop is only applicable when the ", _h('code', ["validationRules"]), " prop is provided."])])]), " ", _h('tr', [_h('td', ["validationRules"]), " ", _h('td', ["String or Array"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["An array of rules or a pipe ", _h('code', ["|"]), " seperated list of rules for validating the select."]), " ", _h('p', ["The supported rules are ", _h('code', ["required"]), ", ", _h('code', ["min"]), ", ", _h('code', ["max"]), " and ", _h('code', ["between"]), ". The ", _h('code', ["min"]), ", ", _h('code', ["max"]), " and ", _h('code', ["between"]), " rules only apply for a multi select."]), " ", _h('p', ["These rules will be applied and validation will occur automatically when a selection is made or when the select is closed. The error message of the first failing validation rule will then be shown to the user."]), " ", _h('p', ["See the ", _h('code', ["validationMessages"]), " prop for customizing the error message."])])]), " ", _h('tr', [_h('td', ["validationMessages"]), " ", _h('td', ["Object"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["An object whose keys are the validation rules and whose values are the error messages for those rules."]), " ", _h('p', ["See ", _h('a', {
    attrs: {
      "href": "https://github.com/skaterdav85/validatorjs#custom-error-messages",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["validatorjs Custom Error Messages"]), " for more details."])])]), " ", _h('tr', [_h('td', ["disabled"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the select is disabled."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to disable the select."])])])])])])
}},function (){with(this) {
  return _h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["opened"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the select dropdown is opened."]), " ", _h('p', ["Listen for it using ", _h('code', ["@opened"]), "."])])]), " ", _h('tr', [_h('td', ["closed"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the select dropdown is closed."]), " ", _h('p', ["Listen for it using ", _h('code', ["@closed"]), "."])])]), " ", _h('tr', [_h('td', ["selected"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when an option is selected."]), " ", _h('p', ["The handler is called with the option that was selected. Listen for it using ", _h('code', ["@selected"]), "."])])]), " ", _h('tr', [_h('td', ["query-changed"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the search input value (the query) changes."]), " ", _h('p', ["The handler is called with the new query. Listen for it using ", _h('code', ["@query-changed"]), "."]), " ", _h('p', ["This can be used to fetch remote options dynamically. See the ", _h('b', ["Search with dynamic options"]), " section above for an example."])])]), " ", _h('tr', [_h('td', {
    staticClass: "no-wrap new-prop"
  }, ["ui-select::set-selected"]), " ", _h('td', ["Received"]), " ", _h('td', [_h('p', ["Trigger this event to programmatically set or change the currently selected option. The handler accepts the following arguments:"]), " ", _h('ul', [_h('li', [_h('code', ["value"]), ": A string, number or object (provided the string, number or ", _h('code', ["value"]), " key of the object matches with an option)"]), " ", _h('li', [_h('code', ["id"]), ": The id of the specific select whose selected option you want to set or change"])])])]), " ", _h('tr', [_h('td', {
    staticClass: "no-wrap new-prop"
  }, ["ui-input::set-validity"]), " ", _h('td', ["Received"]), " ", _h('td', [_h('p', ["Trigger this event to programmatically change the select validation state. The handler accepts the following arguments:"]), " ", _h('ul', [_h('li', [_h('code', ["valid"]), ": A Boolean indicating whether or not the select is valid"]), " ", _h('li', [_h('code', ["error"]), ": An optional string to set as the new error message"]), " ", _h('li', [_h('code', ["id"]), ": The id of the specific select whose validity you want to change"])])])]), " ", _h('tr', [_h('td', {
    staticClass: "no-wrap"
  }, ["ui-input::reset"]), " ", _h('td', ["Received"]), " ", _h('td', [_h('p', ["Trigger this event to reset the select to its initial state. This event resets the ", _h('code', ["value"]), ", ", _h('code', ["valid"]), " and ", _h('code', ["dirty"]), " props and it also clears the search query."]), " ", _h('p', ["You can optionally pass in an ", _h('code', ["id"]), " to reset only a specific select (whose ", _h('code', ["id"]), " you have set)."])])])])])
}}]}

/***/ },
/* 141 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('section', {
    staticClass: "section section-ui-tabs"
  }, [_m(0), " ", _m(1), " ", _m(2), " ", _m(3), " ", _m(4), " ", _m(5), " ", _h('div', {
    staticClass: "demo"
  }, [_m(6), " ", _h('ui-tabs', {
    attrs: {
      "type": "text"
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Books"
    }
  }, ["\n                My books\n\n                ", _m(7)]), " ", _h('ui-tab', {
    attrs: {
      "header": "Authors"
    }
  }, ["\n                Authors\n            "]), " ", _h('ui-tab', {
    attrs: {
      "header": "Collections"
    }
  }, ["\n                My collections\n            "]), " ", _h('ui-tab', {
    attrs: {
      "header": "Favourites"
    }
  }, ["\n                My favourites\n            "])]), " ", _m(8), " ", _h('ui-tabs', {
    attrs: {
      "fullwidth": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Books"
    }
  }, ["\n                My books\n            "]), " ", _h('ui-tab', {
    attrs: {
      "header": "Authors"
    }
  }, ["\n                Authors\n            "]), " ", _h('ui-tab', {
    attrs: {
      "header": "Collections"
    }
  }, ["\n                My collections\n            "]), " ", _h('ui-tab', {
    attrs: {
      "header": "Favourites"
    }
  }, ["\n                My favourites\n            "])]), " ", _m(9), " ", _h('ui-tabs', {
    attrs: {
      "type": "icon"
    }
  }, [_h('ui-tab', {
    attrs: {
      "icon": "book"
    }
  }, ["\n                My books\n            "]), " ", _h('ui-tab', {
    attrs: {
      "icon": "person"
    }
  }, ["\n                Authors\n            "]), " ", _h('ui-tab', {
    attrs: {
      "icon": "collections_bookmark"
    }
  }, ["\n                My collections\n            "]), " ", _h('ui-tab', {
    attrs: {
      "icon": "favorite"
    }
  }, [_m(10), " ", _m(11), " ", _m(12)])]), " ", _m(13), " ", _h('ui-tabs', {
    attrs: {
      "type": "icon",
      "fullwidth": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "icon": "book"
    }
  }, ["\n                My books\n            "]), " ", _h('ui-tab', {
    attrs: {
      "icon": "person"
    }
  }, ["\n                Authors\n            "]), " ", _h('ui-tab', {
    attrs: {
      "icon": "collections_bookmark"
    }
  }, ["\n                My collections\n            "]), " ", _h('ui-tab', {
    attrs: {
      "icon": "favorite"
    }
  }, [_m(14), " ", _m(15), " ", _m(16)])]), " ", _m(17), " ", _h('ui-tabs', {
    attrs: {
      "type": "icon-and-text"
    }
  }, [_h('ui-tab', {
    attrs: {
      "icon": "book",
      "header": "Books"
    }
  }, ["\n                My books\n            "]), " ", _h('ui-tab', {
    attrs: {
      "icon": "person",
      "header": "Authors"
    }
  }, ["\n                Authors\n            "]), " ", _h('ui-tab', {
    attrs: {
      "icon": "collections_bookmark",
      "header": "Collections"
    }
  }, ["\n                My collections\n            "]), " ", _h('ui-tab', {
    attrs: {
      "icon": "favorite",
      "header": "Favourites"
    }
  }, [_m(18), " ", _m(19), " ", _m(20)])]), " ", _m(21), " ", _h('ui-tabs', {
    attrs: {
      "type": "icon-and-text",
      "fullwidth": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "icon": "book",
      "header": "Books"
    }
  }, ["\n                My books\n            "]), " ", _h('ui-tab', {
    attrs: {
      "icon": "person",
      "header": "Authors"
    }
  }, ["\n                Authors\n            "]), " ", _h('ui-tab', {
    attrs: {
      "icon": "collections_bookmark",
      "header": "Collections"
    }
  }, ["\n                My collections\n            "]), " ", _h('ui-tab', {
    attrs: {
      "icon": "favorite",
      "header": "Favourites"
    }
  }, [_m(22), " ", _m(23), " ", _m(24)])]), " ", _m(25), " ", _h('ui-tabs', {
    attrs: {
      "type": "icon-and-text",
      "fullwidth": "",
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "icon": "book",
      "header": "Books"
    }
  }, ["\n                My books\n            "]), " ", _h('ui-tab', {
    attrs: {
      "icon": "person",
      "header": "Authors"
    }
  }, ["\n                Authors\n            "]), " ", _h('ui-tab', {
    attrs: {
      "icon": "collections_bookmark",
      "header": "Collections"
    }
  }, ["\n                My collections\n            "]), " ", _h('ui-tab', {
    attrs: {
      "icon": "favorite",
      "header": "Favourites"
    }
  }, [_m(26), " ", _m(27), " ", _m(28)])]), " ", _m(29), " ", _h('ui-tabs', {
    attrs: {
      "type": "icon-and-text",
      "fullwidth": "",
      "background-color": "primary",
      "text-color": "white",
      "text-color-active": "white",
      "indicator-color": "white"
    }
  }, [_h('ui-tab', {
    attrs: {
      "icon": "book",
      "header": "Books"
    }
  }, ["\n                My books\n            "]), " ", _h('ui-tab', {
    attrs: {
      "icon": "person",
      "header": "Authors"
    }
  }, ["\n                Authors\n            "]), " ", _h('ui-tab', {
    attrs: {
      "icon": "collections_bookmark",
      "header": "Collections"
    }
  }, ["\n                My collections\n            "]), " ", _h('ui-tab', {
    attrs: {
      "icon": "favorite",
      "header": "Favourites"
    }
  }, [_m(30), " ", _m(31), " ", _m(32)])]), " ", _m(33), " ", _h('ui-tabs', {
    attrs: {
      "type": "icon-and-text",
      "fullwidth": "",
      "background-color": "accent",
      "text-color": "white",
      "text-color-active": "white",
      "indicator-color": "white"
    }
  }, [_h('ui-tab', {
    attrs: {
      "icon": "book",
      "header": "Books"
    }
  }, ["\n                My books\n            "]), " ", _h('ui-tab', {
    attrs: {
      "icon": "person",
      "header": "Authors"
    }
  }, ["\n                Authors\n            "]), " ", _h('ui-tab', {
    attrs: {
      "icon": "collections_bookmark",
      "header": "Collections"
    }
  }, ["\n                My collections\n            "]), " ", _h('ui-tab', {
    attrs: {
      "icon": "favorite",
      "header": "Favourites"
    }
  }, [_m(34), " ", _m(35), " ", _m(36)])]), " ", _m(37), " ", _h('ui-tabs', {
    attrs: {
      "type": "icon-and-text",
      "id": "tab-set-1",
      "fullwidth": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "icon": "book",
      "header": "Books"
    }
  }, ["\n                My books\n            "]), " ", _h('ui-tab', {
    attrs: {
      "icon": "person",
      "header": "Authors"
    }
  }, ["\n                Authors\n            "]), " ", _h('ui-tab', {
    attrs: {
      "icon": "collections_bookmark",
      "header": "Collections"
    }
  }, ["\n                My collections\n            "]), " ", _h('ui-tab', {
    attrs: {
      "icon": "favorite",
      "header": "Favourites",
      "_id": String('tab-set-1-favourites')
    }
  }, [_m(38), " ", _m(39), " ", _m(40)])]), " ", _h('ui-button', {
    nativeOn: {
      "click": function($event) {
        selectFavouritesTab($event)
      }
    }
  }, ["Select Favourites tab"]), " ", _m(41), " ", _h('ui-tabs', {
    attrs: {
      "type": "icon-and-text",
      "fullwidth": "",
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "icon": "book",
      "header": "Books"
    }
  }, ["\n                My books\n            "]), " ", _h('ui-tab', {
    attrs: {
      "icon": "person",
      "header": "Authors",
      "disabled": ""
    }
  }, ["\n                Authors\n            "]), " ", _h('ui-tab', {
    attrs: {
      "icon": "collections_bookmark",
      "header": "Collections"
    }
  }, ["\n                My collections\n            "]), " ", _h('ui-tab', {
    attrs: {
      "icon": "favorite",
      "header": "Favourites"
    }
  }, [_m(42), " ", _m(43), " ", _m(44)])])]), " ", _m(45), " ", _h('ui-tabs', {
    attrs: {
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Props"
    }
  }, [_m(46)]), " ", _h('ui-tab', {
    attrs: {
      "header": "Slots"
    }
  }, [_m(47)]), " ", _h('ui-tab', {
    attrs: {
      "header": "Events"
    }
  }, [_m(48)])]), " ", _m(49), " ", _h('ui-tabs', {
    attrs: {
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Props"
    }
  }, [_m(50)]), " ", _h('ui-tab', {
    attrs: {
      "header": "Slots"
    }
  }, [_m(51)]), " ", _h('ui-tab', {
    attrs: {
      "header": "Events"
    }
  }, [_m(52)])])])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "section-heading"
  }, ["\n        UiTabs & UiTab ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiTabs.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('p', ["The UiTabs and UiTab components are used together to create a tab container with one or more tabs. Only a UiTab component should be the direct child of UiTabs."])
}},function (){with(this) {
  return _h('p', ["UiTabs is the tab container and it's props is what you use to customize the tab headers. UiTab is a single tab on which you set tab-specific props like ", _h('code', ["id"]), ", ", _h('code', ["header"]), ", ", _h('code', ["icon"]), " and ", _h('code', ["disabled"]), "."])
}},function (){with(this) {
  return _h('p', ["UiTabs can be one of three types: ", _h('code', ["text"]), " (for text only), ", _h('code', ["icon"]), " (for icon only) or ", _h('code', ["icon-and-text"]), ". The tab headers can also be fullwidth or take up only as much space as needed. The tab container can also be raised to add a drop shadow."])
}},function (){with(this) {
  return _h('p', ["UiTabs header can be any of four possible background colors: ", _h('code', ["default"]), ", ", _h('code', ["primary"]), ", ", _h('code', ["accent"]), " and ", _h('code', ["clear"]), ". The header text color, header active text color and the active tab indicator colors can also be customized."])
}},function (){with(this) {
  return _h('h3', ["\n        Examples ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiTabsDocs.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('h4', ["Text only"])
}},function (){with(this) {
  return _h('a', {
    attrs: {
      "href": "https://google.com",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Hey"])
}},function (){with(this) {
  return _h('h4', ["Text only, fullwidth"])
}},function (){with(this) {
  return _h('h4', ["Icon only"])
}},function (){with(this) {
  return _h('b', ["Favourite with longer content"])
}},function (){with(this) {
  return _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum laudantium nulla ex asperiores, deserunt quidem perspiciatis eligendi, dolores repudiandae."])
}},function (){with(this) {
  return _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis hic, aspernatur placeat eligendi delectus laudantium omnis nam consequatur aperiam numquam!"])
}},function (){with(this) {
  return _h('h4', ["Icon only, fullwidth"])
}},function (){with(this) {
  return _h('b', ["Favourite with longer content"])
}},function (){with(this) {
  return _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum laudantium nulla ex asperiores, deserunt quidem perspiciatis eligendi, dolores repudiandae."])
}},function (){with(this) {
  return _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis hic, aspernatur placeat eligendi delectus laudantium omnis nam consequatur aperiam numquam!"])
}},function (){with(this) {
  return _h('h4', ["Icon and Text"])
}},function (){with(this) {
  return _h('b', ["Favourite with longer content"])
}},function (){with(this) {
  return _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum laudantium nulla ex asperiores, deserunt quidem perspiciatis eligendi, dolores repudiandae."])
}},function (){with(this) {
  return _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis hic, aspernatur placeat eligendi delectus laudantium omnis nam consequatur aperiam numquam!"])
}},function (){with(this) {
  return _h('h4', ["Icon and Text, fullwidth"])
}},function (){with(this) {
  return _h('b', ["Favourite with longer content"])
}},function (){with(this) {
  return _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum laudantium nulla ex asperiores, deserunt quidem perspiciatis eligendi, dolores repudiandae."])
}},function (){with(this) {
  return _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis hic, aspernatur placeat eligendi delectus laudantium omnis nam consequatur aperiam numquam!"])
}},function (){with(this) {
  return _h('h4', ["Raised"])
}},function (){with(this) {
  return _h('b', ["Favourite with longer content"])
}},function (){with(this) {
  return _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum laudantium nulla ex asperiores, deserunt quidem perspiciatis eligendi, dolores repudiandae."])
}},function (){with(this) {
  return _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis hic, aspernatur placeat eligendi delectus laudantium omnis nam consequatur aperiam numquam!"])
}},function (){with(this) {
  return _h('h4', ["Background primary"])
}},function (){with(this) {
  return _h('b', ["Favourite with longer content"])
}},function (){with(this) {
  return _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum laudantium nulla ex asperiores, deserunt quidem perspiciatis eligendi, dolores repudiandae."])
}},function (){with(this) {
  return _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis hic, aspernatur placeat eligendi delectus laudantium omnis nam consequatur aperiam numquam!"])
}},function (){with(this) {
  return _h('h4', ["Background accent"])
}},function (){with(this) {
  return _h('b', ["Favourite with longer content"])
}},function (){with(this) {
  return _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum laudantium nulla ex asperiores, deserunt quidem perspiciatis eligendi, dolores repudiandae."])
}},function (){with(this) {
  return _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis hic, aspernatur placeat eligendi delectus laudantium omnis nam consequatur aperiam numquam!"])
}},function (){with(this) {
  return _h('h4', ["Change active tab programmatically"])
}},function (){with(this) {
  return _h('b', ["Favourite with longer content"])
}},function (){with(this) {
  return _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum laudantium nulla ex asperiores, deserunt quidem perspiciatis eligendi, dolores repudiandae."])
}},function (){with(this) {
  return _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis hic, aspernatur placeat eligendi delectus laudantium omnis nam consequatur aperiam numquam!"])
}},function (){with(this) {
  return _h('h4', ["Disabled tab"])
}},function (){with(this) {
  return _h('b', ["Favourite with longer content"])
}},function (){with(this) {
  return _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum laudantium nulla ex asperiores, deserunt quidem perspiciatis eligendi, dolores repudiandae."])
}},function (){with(this) {
  return _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis hic, aspernatur placeat eligendi delectus laudantium omnis nam consequatur aperiam numquam!"])
}},function (){with(this) {
  return _h('h3', ["API: UiTabs"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', {
    staticClass: "new-prop"
  }, ["id"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td', [_h('p', ["A unique identifier for the tab set."]), " ", _h('p', ["Used when programmatically changing the active tab of a specific tab set."])])]), " ", _h('tr', [_h('td', ["type"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"text\""])]), " ", _h('td', ["The type of tabs. One of ", _h('code', ["text"]), ", ", _h('code', ["icon"]), " or ", _h('code', ["icon-and-text"]), "."])]), " ", _h('tr', [_h('td', ["activeTab"]), " ", _h('td', ["String"]), " ", _h('td', {
    staticClass: "no-wrap"
  }, ["(The first tab in the set)"]), " ", _h('td', ["The ", _h('code', ["id"]), " of the tab to select initially."])]), " ", _h('tr', [_h('td', ["backgroundColor"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"default\""])]), " ", _h('td', [_h('p', ["The background color of the tab headers."]), " ", _h('p', ["One of ", _h('code', ["default"]), ", ", _h('code', ["primary"]), ", ", _h('code', ["accent"]), " or ", _h('code', ["clear"]), "."])])]), " ", _h('tr', [_h('td', ["textColor"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"black\""])]), " ", _h('td', [_h('p', ["The text and icon color of the deselected tab headers."]), " ", _h('p', ["One of ", _h('code', ["black"]), " or ", _h('code', ["white"]), "."])])]), " ", _h('tr', [_h('td', ["textColorActive"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"primary\""])]), " ", _h('td', [_h('p', ["The text and icon color of the selected tab header."]), " ", _h('p', ["One of ", _h('code', ["primary"]), ", ", _h('code', ["accent"]), " or ", _h('code', ["white"]), "."])])]), " ", _h('tr', [_h('td', ["indicatorColor"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"primary\""])]), " ", _h('td', [_h('p', ["The color of the selected tab indicator."]), " ", _h('p', ["One of ", _h('code', ["primary"]), ", ", _h('code', ["accent"]), " or ", _h('code', ["white"]), "."])])]), " ", _h('tr', [_h('td', ["fullwidth"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not the tab header items expand to fill the space available."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " for a fullwidth tab header."])])]), " ", _h('tr', [_h('td', ["raised"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not the tab container has a drop shadow."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to raise the tabs."])])]), " ", _h('tr', [_h('td', ["hideRippleInk"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not the ripple ink animation is hidden when a tab header is clicked."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to hide the ripple ink animation."])])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["(default)"]), " ", _h('td', ["The default slot holds the child UiTab components."])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', {
    staticClass: "no-wrap"
  }, ["active-tab-changed"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the active tab is changed."]), " ", _h('p', ["Listen for it using ", _h('code', ["@active-tab-changed"]), "."])])]), " ", _h('tr', [_h('td', {
    staticClass: "no-wrap new-prop"
  }, ["ui-tabs::select"]), " ", _h('td', ["Received"]), " ", _h('td', [_h('p', ["Trigger this event to programmatically change the active tab."]), " ", _h('p', ["You can pass the following arguments:"]), " ", _h('ul', [_h('li', [_h('code', ["tabId"]), ": The id of the tab to select"]), " ", _h('li', [_h('code', ["id"]), ": (Optional) - the id of the specific UiTabs whose active tab you want to change"])])])])])])])
}},function (){with(this) {
  return _h('h3', ["API: UiTab"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["id"]), " ", _h('td', ["String"]), " ", _h('td', {
    staticClass: "no-wrap"
  }, ["(Auto-generated ", _h('br'), " unique ID)"]), " ", _h('td', [_h('p', ["The tab id."]), " ", _h('p', ["Applied as ", _h('code', ["id"]), " attribute on the tab and used when setting a default tab and when changing the active tab."])])]), " ", _h('tr', [_h('td', ["header"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td', ["The tab header (text only)."])]), " ", _h('tr', [_h('td', ["icon"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td', [_h('p', ["The tab icon. Can be any of the ", _h('a', {
    attrs: {
      "href": "https://design.google.com/icons/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Material Icons"]), "."]), " ", _h('p', ["Note that this should be the icon codepoint if you want to support IE9."])])]), " ", _h('tr', [_h('td', ["disabled"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not the tab is disabled."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to disable the tab and prevent user interactions."])])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["(default)"]), " ", _h('td', ["The default slot holds the tab content and can contain HTML."])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', {
    staticClass: "no-wrap"
  }, ["selected"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the tab is selected."]), " ", _h('p', ["The handler is called with the tab's ", _h('code', ["id"]), "."]), " ", _h('p', ["Listen for it using ", _h('code', ["@selected"]), "."])])]), " ", _h('tr', [_h('td', {
    staticClass: "no-wrap"
  }, ["deselected"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the tab is deselected (i.e. when the user selects another tab)."]), " ", _h('p', ["The handler is called with the tab's ", _h('code', ["id"]), "."]), " ", _h('p', ["Listen for it using ", _h('code', ["@deselected"]), "."])])])])])])
}}]}

/***/ },
/* 142 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('section', {
    staticClass: "section section-ui-tooltip"
  }, [_m(0), " ", _m(1), " ", _m(2), " ", _m(3), " ", _h('div', {
    staticClass: "demo"
  }, [_h('div', {
    staticClass: "group the-simpsons"
  }, [(theSimpsons) && _l((theSimpsons), function(simpson) {
    return _h('image-pane', {
      attrs: {
        "image": simpson.image,
        "name": simpson.name,
        "position": simpson.position
      },
      inlineTemplate: {
        render: function() {
          with(this) {
            return _h('div', {
              ref: "portrait",
              refInFor: true,
              staticClass: "image-pane",
              style: ({
                'background-image': 'url(' + image + ')'
              })
            }, [_h('ui-tooltip', {
              attrs: {
                "trigger": "portrait",
                "content": name,
                "position": position
              }
            })])
          }
        },
        staticRenderFns: []
      }
    })
  })])]), " ", _m(4), " ", _h('ui-tabs', {
    attrs: {
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Props"
    }
  }, [_m(5), "\n\n            * Required prop\n        "])])])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "section-heading"
  }, ["\n        UiTooltip ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiTooltip.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('p', ["UiTooltip allows you to show a tooltip on an element. You can customize the position and the event that causes the tooltip to open."])
}},function (){with(this) {
  return _h('p', ["UiTooltip is used internally by ", _h('a', {
    attrs: {
      "href": "#/ui-icon-button-docs"
    }
  }, ["UiIconButton"]), " and ", _h('a', {
    attrs: {
      "href": "#/ui-fab-docs"
    }
  }, ["UiFab"]), "."])
}},function (){with(this) {
  return _h('h3', ["\n        Examples ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiTooltipDocs.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('h3', ["API"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["trigger *"]), " ", _h('td', ["HTMLElement"]), " ", _h('td', ["(required)"]), " ", _h('td', [_h('p', ["An Element to attach the tooltip to."]), " ", _h('p', ["By default, when this element is hovered or focused, the tooltip is shown."])])]), " ", _h('tr', [_h('td', ["content"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td', ["The tooltip content (text only)."])]), " ", _h('tr', [_h('td', ["position"]), " ", _h('td', ["String"]), " ", _h('td', {
    staticClass: "no-wrap"
  }, [_h('code', ["\"bottom center\""])]), " ", _h('td', [_h('p', ["The position of the tooltip relative to the trigger."]), " ", _h('p', ["One of ", _h('code', ["top left"]), ", ", _h('code', ["left top"]), ", ", _h('code', ["left middle"]), ", ", _h('code', ["left bottom"]), ", ", _h('code', ["bottom left"]), ", ", _h('code', ["bottom center"]), ", ", _h('code', ["bottom right"]), ", ", _h('code', ["right bottom"]), ", ", _h('code', ["right middle"]), ", ", _h('code', ["right top"]), ", ", _h('code', ["top right"]), ", or ", _h('code', ["top center"]), "."])])]), " ", _h('tr', [_h('td', ["openOn"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"hover focus\""])]), " ", _h('td', [_h('p', ["The type of event(s) that will cause the tooltip to open."]), " ", _h('p', ["One or more of ", _h('code', ["click"]), ", ", _h('code', ["hover"]), ", or ", _h('code', ["focus"]), ". Separate multiple events with a space."])])])])])])
}}]}

/***/ },
/* 143 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('div', {
    staticClass: "nav nav-root"
  }, [_h('div', {
    staticClass: "sidebar desktop"
  }, [_m(0), " ", _m(1), " ", _h('ul', {
    staticClass: "menu"
  }, [_m(2), " ", (menu) && _l((menu), function(item) {
    return _h('router-link', {
      staticClass: "menu-item",
      attrs: {
        "to": ("/" + (item.id)),
        "exact": ""
      },
      domProps: {
        "textContent": _s(item.text)
      }
    })
  })])]), " ", _h('transition', {
    attrs: {
      "name": "sidebar"
    }
  }, [_h('div', {
    directives: [{
      name: "show",
      value: (value),
      expression: "value"
    }],
    key: "overlay",
    staticClass: "sidebar-overlay",
    on: {
      "click": function($event) {
        $emit('input', false)
      }
    }
  })]), " ", _h('transition', {
    attrs: {
      "name": "sidebar"
    }
  }, [_h('div', {
    directives: [{
      name: "show",
      value: (value),
      expression: "value"
    }],
    key: "sidebar",
    staticClass: "sidebar mobile"
  }, [_m(3), " ", _m(4), " ", _h('ul', {
    staticClass: "menu"
  }, [_m(5), " ", (menu) && _l((menu), function(item) {
    return _h('router-link', {
      staticClass: "menu-item",
      attrs: {
        "to": ("/" + (item.id)),
        "exact": ""
      },
      domProps: {
        "textContent": _s(item.text)
      },
      nativeOn: {
        "click": function($event) {
          $emit('input', false)
        }
      }
    })
  })])])])])
}},staticRenderFns: [function (){with(this) {
  return _h('div', {
    staticClass: "brand"
  }, [_h('h1', {
    staticClass: "title"
  }, ["\n                Keen UI\n                ", _h('a', {
    staticClass: "version",
    attrs: {
      "title": "View release notes",
      "href": "https://github.com/JosephusPaye/Keen-UI/releases/tag/v0.8.9",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["v0.8.9"])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "subhead"
  }, [_h('p', ["A lightweight but complete collection of essential UI components written with ", _h('a', {
    attrs: {
      "href": "http://vuejs.org/",
      "target": "_blank",
      "rel": "noopener",
      "title": "VueJS"
    }
  }, ["Vue"]), " and inspired by ", _h('a', {
    attrs: {
      "href": "https://www.google.com/design/spec/material-design/introduction.html",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Material Design"]), "."]), " ", _h('p', {
    staticClass: "m-b-0"
  }, ["Created by ", _h('a', {
    attrs: {
      "href": "https://twitter.com/JosephusPaye",
      "target": "_blank",
      "rel": "noopener",
      "title": "@JosephusPaye"
    }
  }, ["Josephus Paye II"]), "."]), " ", _h('a', {
    staticClass: "ui-button ui-button-normal color-default",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Github"])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "menu-header"
  }, ["Components"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "brand"
  }, [_h('h1', {
    staticClass: "title"
  }, ["\n                    Keen UI\n                    ", _h('a', {
    staticClass: "version",
    attrs: {
      "title": "View release notes",
      "href": "https://github.com/JosephusPaye/Keen-UI/releases/tag/v0.8.9",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["v0.8.9"])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "subhead"
  }, [_h('p', ["A lightweight but complete collection of essential UI components written with ", _h('a', {
    attrs: {
      "href": "http://vuejs.org/",
      "target": "_blank",
      "rel": "noopener",
      "title": "VueJS"
    }
  }, ["Vue"]), " and inspired by ", _h('a', {
    attrs: {
      "href": "https://www.google.com/design/spec/material-design/introduction.html",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Material Design"]), "."]), " ", _h('p', {
    staticClass: "m-b-0"
  }, ["Created by ", _h('a', {
    attrs: {
      "href": "https://twitter.com/JosephusPaye",
      "target": "_blank",
      "rel": "noopener",
      "title": "@JosephusPaye"
    }
  }, ["Josephus Paye II"]), "."]), " ", _h('a', {
    staticClass: "ui-button ui-button-normal color-default",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Github"])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "menu-header"
  }, ["Components"])
}}]}

/***/ },
/* 144 */
/***/ function(module, exports) {

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
  }, [$slots["default"]])
}},staticRenderFns: []}

/***/ },
/* 145 */
/***/ function(module, exports) {

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
  }, [($slots["brand"] || [_h('div', {
    staticClass: "ui-toolbar-brand-text",
    domProps: {
      "textContent": _s(brand)
    }
  })])]) : _e()]), " ", _h('div', {
    staticClass: "ui-toolbar-center"
  }, [(brandDividerVisible) ? _h('div', {
    staticClass: "ui-toolbar-divider"
  }) : _e(), " ", ($slots["default"] || [_h('div', {
    staticClass: "ui-toolbar-title",
    domProps: {
      "textContent": _s(title)
    }
  })])]), " ", _h('div', {
    staticClass: "ui-toolbar-right"
  }, [$slots["actions"]]), " ", _h('ui-progress-linear', {
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

/***/ },
/* 146 */
/***/ function(module, exports) {

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

/***/ },
/* 147 */
/***/ function(module, exports) {

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
  }, [($slots["default"] || [_h('span', {
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
  }, [$slots["popover"]]) : _e()])
}},staticRenderFns: []}

/***/ },
/* 148 */
/***/ function(module, exports) {

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
  }, [$slots["default"]])])
}},staticRenderFns: []}

/***/ },
/* 149 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('section', {
    staticClass: "section section-ui-autocomplete"
  }, [_m(0), " ", _m(1), " ", _m(2), " ", _m(3), " ", _m(4), " ", _h('div', {
    staticClass: "examples"
  }, [_m(5), " ", _h('ui-autocomplete', {
    directives: [{
      name: "model",
      value: (favouriteMonth),
      expression: "favouriteMonth"
    }],
    attrs: {
      "label": "Favourite Month",
      "suggestions": months,
      "name": "favourite_month",
      "help-text": "Pick your favourite month of the year",
      "placeholder": "Enter your favourite month"
    },
    domProps: {
      "value": (favouriteMonth)
    },
    on: {
      "input": function($event) {
        favouriteMonth = $event
      }
    }
  }), " ", _m(6), " ", _h('ui-autocomplete', {
    directives: [{
      name: "model",
      value: (favouriteSimpson),
      expression: "favouriteSimpson"
    }],
    attrs: {
      "label": "Favourite Simpson",
      "icon": "face",
      "min-chars": 0,
      "suggestions": theSimpsons,
      "name": "favourite_simpson",
      "validation-rules": "required",
      "type": "image",
      "placeholder": "Choose your favourite Simpson",
      "help-text": "Pick your favourite member of the Simpsons family",
      "keys": {
        text: 'text',
        value: 'text',
        image: 'image'
      }
    },
    domProps: {
      "value": (favouriteSimpson)
    },
    on: {
      "input": function($event) {
        favouriteSimpson = $event
      }
    }
  }), " ", _m(7), " ", _h('ui-button', {
    attrs: {
      "disabled": addedExtendedFamily
    },
    nativeOn: {
      "click": function($event) {
        add($event)
      }
    }
  }, ["Add Grandma & Grandpa"]), " ", _m(8), " ", _h('ui-autocomplete', {
    directives: [{
      name: "model",
      value: (favouriteDisabel),
      expression: "favouriteDisabel"
    }],
    attrs: {
      "label": "Favourite Color",
      "suggestions": [],
      "name": "another_color",
      "placeholder": "You can't interact with this",
      "disabled": ""
    },
    domProps: {
      "value": (favouriteDisabel)
    },
    on: {
      "input": function($event) {
        favouriteDisabel = $event
      }
    }
  })]), " ", _m(9), " ", _h('ui-tabs', {
    attrs: {
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Props"
    }
  }, [_h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_m(10), " ", _h('tbody', [_m(11), " ", _m(12), " ", _m(13), " ", _m(14), " ", _m(15), " ", _m(16), " ", _m(17), " ", _m(18), " ", _m(19), " ", _m(20), " ", _m(21), " ", _m(22), " ", _m(23), " ", _m(24), " ", _h('tr', [_m(25), " ", _m(26), " ", _h('td', [_h('pre', [_s("{\n  text: 'text',\n  value: 'value',\n  image: 'image'\n}")])]), " ", _m(27), " ", _m(28)]), " ", _m(29), " ", _m(30), " ", _m(31), " ", _m(32), " ", _m(33), " ", _m(34), " ", _m(35), " ", _m(36), " ", _m(37), " ", _m(38), " ", _m(39), " ", _m(40)])])]), "\n\n            * Required prop\n        "]), " ", _h('ui-tab', {
    attrs: {
      "header": "Events"
    }
  }, [_m(41)])])])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "section-heading"
  }, ["\n        UiAutocomplete ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiAutocomplete.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('p', ["UiAutocomplete shows a dropdown of suggestions below an input as the user types which they can select from to replace or append to what they have entered."])
}},function (){with(this) {
  return _h('p', ["UiAutocomplete can show a label above the input as well as help text below the input, and it also supports keyboard navigation."])
}},function (){with(this) {
  return _h('p', ["UiAutocomplete supports validation, and the validation state can also be set programmatically from outside the component using an event."])
}},function (){with(this) {
  return _h('h3', ["\n        Examples ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiAutocompleteDocs.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('h4', ["Default (with label and help text), minimum characters: 2"])
}},function (){with(this) {
  return _h('h4', ["Custom template partial, minimum characters: 0, with validation"])
}},function (){with(this) {
  return _h('p', ["Suggestions are updated dynamically when the suggestions array changes."])
}},function (){with(this) {
  return _h('h4', ["Disabled"])
}},function (){with(this) {
  return _h('h3', ["API"])
}},function (){with(this) {
  return _h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Binding"]), " ", _h('th', ["Description"])])
}},function (){with(this) {
  return _h('tr', [_h('td', ["id"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["A unique identifier for the autocomplete."]), " ", _h('p', ["Applied as the ", _h('code', ["id"]), " attribute of the autocomplete ", _h('code', ["<input>"]), " and used when targeting a specific autocomplete for reset."])])])
}},function (){with(this) {
  return _h('tr', [_h('td', ["name *"]), " ", _h('td', ["String"]), " ", _h('td', ["(required)"]), " ", _h('td'), " ", _h('td', [_h('p', ["The ", _h('code', ["name"]), " attribute of the autocomplete input element."]), " ", _h('p', ["Used when generating validation error messages. A name with multiple words should be written in ", _h('code', ["snake_case"]), "."])])])
}},function (){with(this) {
  return _h('tr', [_h('td', ["v-model(value)"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["The autocomplete input value (is updated when the user types or makes a selection from the dropdown)."]), " ", _h('p', ["Component will save the initial value."])])])
}},function (){with(this) {
  return _h('tr', [_h('td', ["suggestions"]), " ", _h('td', ["Array"]), " ", _h('td', [_h('code', ["[]"])]), " ", _h('td'), " ", _h('td', [_h('p', ["An array of suggestions to show to the user. The array can either be of strings or objects (but not both)."]), " ", _h('p', ["For an array of objects, each object should have ", _h('code', ["text"]), " and ", _h('code', ["value"]), " properties. The ", _h('code', ["text"]), " is shown to the user and the ", _h('code', ["value"]), " is written to input when the user makes a selection."]), " ", _h('p', ["You can redefine these keys to fit your data using the ", _h('code', ["keys"]), " prop."]), " ", _h('p', ["For an array of strings, each string is used as both the label and the value."])])])
}},function (){with(this) {
  return _h('tr', [_h('td', ["limit"]), " ", _h('td', ["Number"]), " ", _h('td', [_h('code', ["8"])]), " ", _h('td'), " ", _h('td', ["The maximum number of suggestions to show to the user at any one time."])])
}},function (){with(this) {
  return _h('tr', [_h('td', ["append"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the value of the selected suggestion should be appended to the current value (instead of replacing the current value)."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to append selected suggestions."])])])
}},function (){with(this) {
  return _h('tr', [_h('td', ["appendDelimiter"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\", \""])]), " ", _h('td'), " ", _h('td', ["The delimiter (separator) to use when appending selected suggestions."])])
}},function (){with(this) {
  return _h('tr', [_h('td', ["debounce"]), " ", _h('td', ["Number"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["The minimum delay (in milliseconds) after each keystroke before the input’s value is synced to the model."]), " ", _h('p', ["You may want to use this if you are watching the value and making AJAX calls."])])])
}},function (){with(this) {
  return _h('tr', [_h('td', ["minChars"]), " ", _h('td', ["Number"]), " ", _h('td', [_h('code', ["2"])]), " ", _h('td'), " ", _h('td', ["The minimum number of characters the user should type before the list of suggestions is shown."])])
}},function (){with(this) {
  return _h('tr', [_h('td', ["showOnUpDown"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["true"])]), " ", _h('td'), " ", _h('td', ["Determines whether the list of suggestions should be shown when the user presses the Up or Down arrow keys in the input."])])
}},function (){with(this) {
  return _h('tr', [_h('td', ["valid"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["true"])]), " ", _h('td', ["Two-way"]), " ", _h('td', [_h('p', ["Shows whether or not the autocomplete is valid."]), " ", _h('p', ["Only applicable when the ", _h('code', ["validationRules"]), " prop is present."])])])
}},function (){with(this) {
  return _h('tr', [_h('td', ["dirty"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', ["Two way"]), " ", _h('td', ["Shows whether or not the autocomplete has been touched (focussed or clicked) by the user."])])
}},function (){with(this) {
  return _h('tr', [_h('td', {
    staticClass: "new-prop"
  }, ["autofocus"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the input should automatically receive focus on initial page load"]), " ", _h('p', ["This only works on initial page load or the first time the element is added to the DOM and not on subsequent renders. Also, only one input element should have this prop set to ", _h('code', ["true"]), " in the document for the autofocus to work properly."])])])
}},function (){with(this) {
  return _h('tr', [_h('td', {
    staticClass: "new-prop"
  }, ["filter"]), " ", _h('td', ["Function"]), " ", _h('td', ["(", _h('a', {
    attrs: {
      "href": "https://www.npmjs.com/package/fuzzysearch",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["fuzzysearch"]), ")"]), " ", _h('td'), " ", _h('td', [_h('p', ["Defines a custom filter function that is used for filtering the suggestions when the user types into the autocomplete."]), " ", _h('p', ["The function is called for each item in the ", _h('code', ["suggestions"]), " array with two arguments:"]), " ", _h('ul', [_h('li', [_h('code', ["suggestion"]), ": the current suggestion, may be a string or an object"]), " ", _h('li', [_h('code', ["query"]), ": the current value of the autocomplete input (what the user has typed)"])]), " ", _h('p', ["The function should return ", _h('code', ["true"]), " if the suggestion matches the query or ", _h('code', ["false"]), " otherwise."])])])
}},function (){with(this) {
  return _h('td', {
    staticClass: "new-prop"
  }, ["keys"])
}},function (){with(this) {
  return _h('td', ["Object"])
}},function (){with(this) {
  return _h('td')
}},function (){with(this) {
  return _h('td', [_h('p', ["Allows for redefining the ", _h('code', ["text"]), ", ", _h('code', ["value"]), " and ", _h('code', ["image"]), " keys."]), " ", _h('p', ["Pass an object with custom keys if your data does not match the default keys. Note that if you redefine one key, you have to specify the other two as well."])])
}},function (){with(this) {
  return _h('tr', [_h('td', {
    staticClass: "new-prop"
  }, ["autoHighlightFirstMatch"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["true"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the first matched suggestion is automatically highlighted when the user input changes."]), " ", _h('p', ["Set to ", _h('code', ["false"]), " to disable automatically highlighting the first match."])])])
}},function (){with(this) {
  return _h('tr', [_h('td', {
    staticClass: "new-prop"
  }, ["cycleHighlight"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["true"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not highlighting should cycle (wrap around) immediately on overflow."]), " ", _h('p', ["When this is set to ", _h('code', ["false"]), ", pressing the down arrow key when on the last suggestion will not immediately highlight the first suggestion, but pressing it a second time will."]), " ", _h('p', ["The same goes for when pressing the up arrow key on the first suggestion."])])])
}},function (){with(this) {
  return _h('tr', [_h('td', ["placeholder"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', ["The ", _h('code', ["placeholder"]), " attribute of the autocomplete input element."])])
}},function (){with(this) {
  return _h('tr', [_h('td', ["icon"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["The autocomplete icon. Can be any of the ", _h('a', {
    attrs: {
      "href": "https://design.google.com/icons/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Material Icons"]), "."]), " ", _h('p', ["Note that this should be the icon codepoint if you want to support IE9."])])])
}},function (){with(this) {
  return _h('tr', [_h('td', ["iconRight"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the autocomplete icon is shown to the right instead of to the left."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to show the icon to the right of the autocomplete."])])])
}},function (){with(this) {
  return _h('tr', [_h('td', ["label"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', ["The label shown above the autocomplete input (text only)."])])
}},function (){with(this) {
  return _h('tr', [_h('td', ["hideLabel"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the autocomplete label is hidden."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to hide the label."])])])
}},function (){with(this) {
  return _h('tr', [_h('td', ["helpText"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["The help text (hint) shown to the user below the autocomplete input."]), " ", _h('p', ["Extra space is reserved under the input for the help text and validation errors. If none of these are enabled, this space is collapsed."])])])
}},function (){with(this) {
  return _h('tr', [_h('td', ["hideValidationErrors"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not validation errors for the autocomplete are hidden."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to hide all validation errors."]), " ", _h('p', ["This prop is only applicable when the ", _h('code', ["validationRules"]), " prop is provided."])])])
}},function (){with(this) {
  return _h('tr', [_h('td', ["validationRules"]), " ", _h('td', ["String or Array"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["An array of rules or a pipe ", _h('code', ["|"]), " separated list of rules for validating the input."]), " ", _h('p', ["Can be any of the rules supported by ", _h('a', {
    attrs: {
      "href": "https://github.com/skaterdav85/validatorjs#available-rules",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["validatorjs Validation Rules"]), ", ", _h('b', ["except"]), " the ones that involve multiple fields."]), " ", _h('p', ["Example to validate a required email field: ", _h('code', ["validation-rules=\"required|email\""]), "."]), " ", _h('p', ["These rules will be applied and validation will occur automatically when the input is changed or blurred. The error message of the first failing validation rule will then be shown to the user."]), " ", _h('p', ["See the ", _h('code', ["validationMessages"]), " prop for customizing the error message."])])])
}},function (){with(this) {
  return _h('tr', [_h('td', ["validationMessages"]), " ", _h('td', ["Object"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["An Object whose keys are the validation rules and whose values are the error messages for those rules."]), " ", _h('p', ["See ", _h('a', {
    attrs: {
      "href": "https://github.com/skaterdav85/validatorjs#custom-error-messages",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["validatorjs Custom Error Messages"]), " for more details."])])])
}},function (){with(this) {
  return _h('tr', [_h('td', ["disabled"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', ["Determines whether or not the autocomplete is disabled. Set to ", _h('code', ["true"]), " to disable the autocomplete."])])
}},function (){with(this) {
  return _h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', {
    staticClass: "no-wrap new-prop"
  }, ["opened"]), " ", _h('td', ["Dispatched"]), " ", _h('td', ["Dispatched when the autocomplete dropdown is opened. Listen for it using ", _h('code', ["@opened"]), "."])]), " ", _h('tr', [_h('td', {
    staticClass: "no-wrap new-prop"
  }, ["closed"]), " ", _h('td', ["Dispatched"]), " ", _h('td', ["Dispatched when the autocomplete dropdown is closed. Listen for it using ", _h('code', ["@closed"]), "."])]), " ", _h('tr', [_h('td', {
    staticClass: "no-wrap new-prop"
  }, ["selected"]), " ", _h('td', ["Dispatched"]), " ", _h('td', ["Dispatched when a suggestion is selected. The handler is called with the suggestion that was selected. Listen for it using ", _h('code', ["@selected"]), "."])]), " ", _h('tr', [_h('td', {
    staticClass: "no-wrap new-prop"
  }, ["highlighted"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when a suggestion is highlighted using the arrow keys. The handler is called with the following arguments:"]), " ", _h('ul', [_h('li', [_h('code', ["suggestion"]), ": the suggestion that was highlighted, may be a string or an object"]), " ", _h('li', [_h('code', ["index"]), ": the index of the suggestion that was highlighted, in the ", _h('code', ["suggestions"]), " array"])]), " ", _h('p', ["Listen for it using ", _h('code', ["@highlighted"]), "."])])]), " ", _h('tr', [_h('td', {
    staticClass: "no-wrap new-prop"
  }, ["highlight-overflow"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when an attempted highlight overflows (this happens when the user is on the first suggestion and presses the up arrow key or on the last suggestion and presses the down arrow key)."]), " ", _h('p', ["This event is only dispatched when the ", _h('code', ["cycleHighlight"]), " prop is ", _h('code', ["false"]), "."]), " ", _h('p', ["The handler is called with the overflowing index. Listen for it using ", _h('code', ["@highlighted"]), "."])])]), " ", _h('tr', [_h('td', {
    staticClass: "no-wrap new-prop"
  }, ["ui-input::set-validity"]), " ", _h('td', ["Received"]), " ", _h('td', [_h('p', ["Trigger this event to programmatically change the autocomplete validation state. The handler accepts the following arguments:"]), " ", _h('ul', [_h('li', [_h('code', ["valid"]), ": A boolean indicating whether or not the autocomplete is valid"]), " ", _h('li', [_h('code', ["error"]), ": An optional string to set as the new error message"]), " ", _h('li', [_h('code', ["id"]), ": The id of the specific autocomplete whose validity you want to change"])])])]), " ", _h('tr', [_h('td', {
    staticClass: "no-wrap"
  }, ["ui-input::reset"]), " ", _h('td', ["Received"]), " ", _h('td', [_h('p', ["Trigger this event to reset the autocomplete to its initial state. This event resets the ", _h('code', ["value"]), ", ", _h('code', ["valid"]), " and ", _h('code', ["dirty"]), " props."]), " ", _h('p', ["You can optionally pass in an ", _h('code', ["id"]), " to reset only a specific autocomplete (whose ", _h('code', ["id"]), " you have set)."])])])])])
}}]}

/***/ },
/* 150 */
/***/ function(module, exports) {

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
  }, [($slots["default"] || [_h('span', {
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

/***/ },
/* 151 */
/***/ function(module, exports) {

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
  }, [$slots["default"]]), " ", _h('div', {
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

/***/ },
/* 152 */
/***/ function(module, exports) {

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
  }, [($slots["header"] || [_h('div', {
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
  }, [$slots["default"]])]), " "])])
}},staticRenderFns: []}

/***/ },
/* 153 */
/***/ function(module, exports) {

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

/***/ },
/* 154 */
/***/ function(module, exports) {

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
  }, [$slots["popover"]]) : _e()])
}},staticRenderFns: []}

/***/ },
/* 155 */
/***/ function(module, exports) {

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
  }, [($slots["default"] || [_h('span', {
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

/***/ },
/* 156 */
/***/ function(module, exports) {

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

/***/ },
/* 157 */
/***/ function(module, exports) {

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

/***/ },
/* 158 */
/***/ function(module, exports) {

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
  }, [($slots["header"] || [_h('h1', {
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
  }, [($slots["default"] || [_h('div', {
    domProps: {
      "textContent": _s(body)
    }
  })])]), " ", (!hideFooter) ? _h('div', {
    staticClass: "ui-modal-footer"
  }, [($slots["footer"] || [(dismissible) ? _h('ui-button', {
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

/***/ },
/* 159 */
/***/ function(module, exports) {

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
  }, [$slots["default"]])
}},staticRenderFns: []}

/***/ },
/* 160 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('section', {
    staticClass: "section section-ui-button"
  }, [_m(0), " ", _m(1), " ", _m(2), " ", _m(3), " ", _m(4), " ", _m(5), " ", _m(6), " ", _m(7), " ", _h('div', {
    staticClass: "demo"
  }, [_m(8), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-button', ["Default"]), " ", _h('ui-button', {
    attrs: {
      "color": "primary"
    }
  }, ["Primary"]), " ", _h('ui-button', {
    attrs: {
      "color": "accent"
    }
  }, ["Accent"]), " ", _h('ui-button', {
    attrs: {
      "color": "success"
    }
  }, ["Success"]), " ", _h('ui-button', {
    attrs: {
      "color": "warning"
    }
  }, ["Warning"]), " ", _h('ui-button', {
    attrs: {
      "color": "danger"
    }
  }, ["Danger"])]), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-button', {
    attrs: {
      "disabled": ""
    }
  }, ["Default, Disabled"]), " ", _h('ui-button', {
    attrs: {
      "disabled": "",
      "color": "primary"
    }
  }, ["Primary, Disabled"]), " ", _h('ui-button', {
    attrs: {
      "disabled": "",
      "color": "accent"
    }
  }, ["Accent, Disabled"]), " ", _h('ui-button', {
    attrs: {
      "disabled": "",
      "color": "success"
    }
  }, ["Success, Disabled"]), " ", _h('ui-button', {
    attrs: {
      "disabled": "",
      "color": "warning"
    }
  }, ["Warning, Disabled"]), " ", _h('ui-button', {
    attrs: {
      "disabled": "",
      "color": "danger"
    }
  }, ["Danger, Disabled"])]), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-button', {
    attrs: {
      "raised": ""
    }
  }, ["Default, Raised"]), " ", _h('ui-button', {
    attrs: {
      "raised": "",
      "color": "primary"
    }
  }, ["Primary, Raised"]), " ", _h('ui-button', {
    attrs: {
      "raised": "",
      "color": "accent"
    }
  }, ["Accent, Raised"]), " ", _h('ui-button', {
    attrs: {
      "raised": "",
      "color": "success"
    }
  }, ["Success, Raised"]), " ", _h('ui-button', {
    attrs: {
      "raised": "",
      "color": "warning"
    }
  }, ["Warning, Raised"]), " ", _h('ui-button', {
    attrs: {
      "raised": "",
      "color": "danger"
    }
  }, ["Danger, Raised"])]), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-button', {
    attrs: {
      "raised": "",
      "disabled": ""
    }
  }, ["Default, Raised, Disabled"]), " ", _h('ui-button', {
    attrs: {
      "color": "primary",
      "raised": "",
      "disabled": ""
    }
  }, ["Primary, Raised, Disabled"]), " ", _h('ui-button', {
    attrs: {
      "color": "accent",
      "raised": "",
      "disabled": ""
    }
  }, ["Accent, Raised, Disabled"]), " ", _h('ui-button', {
    attrs: {
      "color": "success",
      "raised": "",
      "disabled": ""
    }
  }, ["Success, Raised, Disabled"]), " ", _h('ui-button', {
    attrs: {
      "color": "warning",
      "raised": "",
      "disabled": ""
    }
  }, ["Warning, Raised, Disabled"]), " ", _h('ui-button', {
    attrs: {
      "color": "danger",
      "raised": "",
      "disabled": ""
    }
  }, ["Danger, Raised, Disabled"])])]), " ", _h('div', {
    staticClass: "demo"
  }, [_m(9), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-button', {
    attrs: {
      "type": "flat"
    }
  }, ["Default"]), " ", _h('ui-button', {
    attrs: {
      "type": "flat",
      "color": "primary"
    }
  }, ["Primary"]), " ", _h('ui-button', {
    attrs: {
      "type": "flat",
      "color": "accent"
    }
  }, ["Accent"]), " ", _h('ui-button', {
    attrs: {
      "type": "flat",
      "color": "success"
    }
  }, ["Success"]), " ", _h('ui-button', {
    attrs: {
      "type": "flat",
      "color": "warning"
    }
  }, ["Warning"]), " ", _h('ui-button', {
    attrs: {
      "type": "flat",
      "color": "danger"
    }
  }, ["Danger"])]), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-button', {
    attrs: {
      "type": "flat",
      "disabled": ""
    }
  }, ["Default, Disabled"]), " ", _h('ui-button', {
    attrs: {
      "type": "flat",
      "disabled": "",
      "color": "primary"
    }
  }, ["Primary, Disabled"]), " ", _h('ui-button', {
    attrs: {
      "type": "flat",
      "disabled": "",
      "color": "accent"
    }
  }, ["Accent, Disabled"]), " ", _h('ui-button', {
    attrs: {
      "type": "flat",
      "disabled": "",
      "color": "success"
    }
  }, ["Success, Disabled"]), " ", _h('ui-button', {
    attrs: {
      "type": "flat",
      "disabled": "",
      "color": "warning"
    }
  }, ["Warning, Disabled"]), " ", _h('ui-button', {
    attrs: {
      "type": "flat",
      "disabled": "",
      "color": "danger"
    }
  }, ["Danger, Disabled"])]), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-button', {
    attrs: {
      "type": "flat",
      "raised": ""
    }
  }, ["Default, Raised"]), " ", _h('ui-button', {
    attrs: {
      "type": "flat",
      "raised": "",
      "color": "primary"
    }
  }, ["Primary, Raised"]), " ", _h('ui-button', {
    attrs: {
      "type": "flat",
      "raised": "",
      "color": "accent"
    }
  }, ["Accent, Raised"]), " ", _h('ui-button', {
    attrs: {
      "type": "flat",
      "raised": "",
      "color": "success"
    }
  }, ["Success, Raised"]), " ", _h('ui-button', {
    attrs: {
      "type": "flat",
      "raised": "",
      "color": "warning"
    }
  }, ["Warning, Raised"]), " ", _h('ui-button', {
    attrs: {
      "type": "flat",
      "raised": "",
      "color": "danger"
    }
  }, ["Danger, Raised"])]), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-button', {
    attrs: {
      "type": "flat",
      "raised": "",
      "disabled": ""
    }
  }, ["Default, Raised, Disabled"]), " ", _h('ui-button', {
    attrs: {
      "type": "flat",
      "color": "primary",
      "raised": "",
      "disabled": ""
    }
  }, ["Primary, Raised, Disabled"]), " ", _h('ui-button', {
    attrs: {
      "type": "flat",
      "color": "accent",
      "raised": "",
      "disabled": ""
    }
  }, ["Accent, Raised, Disabled"]), " ", _h('ui-button', {
    attrs: {
      "type": "flat",
      "color": "success",
      "raised": "",
      "disabled": ""
    }
  }, ["Success, Raised, Disabled"]), " ", _h('ui-button', {
    attrs: {
      "type": "flat",
      "color": "warning",
      "raised": "",
      "disabled": ""
    }
  }, ["Warning, Raised, Disabled"]), " ", _h('ui-button', {
    attrs: {
      "type": "flat",
      "color": "danger",
      "raised": "",
      "disabled": ""
    }
  }, ["Danger, Raised, Disabled"])])]), " ", _h('div', {
    staticClass: "demo"
  }, [_m(10), " ", _h('div', {
    staticClass: "group ui-button-group"
  }, [_h('ui-button', {
    attrs: {
      "icon": "refresh"
    }
  }, ["Refresh"]), " ", _h('ui-button', {
    attrs: {
      "icon": "add",
      "color": "primary"
    }
  }, ["Add Post"]), " ", _h('ui-button', {
    attrs: {
      "icon": "delete",
      "color": "danger"
    }
  }, ["Delete"]), " ", _h('ui-button', {
    attrs: {
      "icon": "photo",
      "color": "accent",
      "icon-right": ""
    }
  }, ["Icon Right"])]), " ", _h('div', {
    staticClass: "group ui-button-group"
  }, [_h('ui-button', {
    attrs: {
      "type": "flat",
      "icon": "refresh"
    }
  }, ["Refresh"]), " ", _h('ui-button', {
    attrs: {
      "type": "flat",
      "icon": "add",
      "color": "primary"
    }
  }, ["Add Post"]), " ", _h('ui-button', {
    attrs: {
      "type": "flat",
      "icon": "delete",
      "color": "danger"
    }
  }, ["Delete"]), " ", _h('ui-button', {
    attrs: {
      "type": "flat",
      "icon": "photo",
      "color": "accent",
      "icon-right": ""
    }
  }, ["Icon Right"])])]), " ", _h('div', {
    staticClass: "demo"
  }, [_m(11), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-button', {
    attrs: {
      "icon": "refresh",
      "loading": loading.btn1
    },
    nativeOn: {
      "click": function($event) {
        loading.btn1 = true
      }
    }
  }, ["Refresh"]), " ", _h('ui-button', {
    attrs: {
      "icon": "add",
      "color": "primary",
      "loading": loading.btn2
    },
    nativeOn: {
      "click": function($event) {
        loading.btn2 = true
      }
    }
  }, ["Add Post"]), " ", _h('ui-button', {
    attrs: {
      "icon": "delete",
      "color": "danger",
      "loading": loading.btn3
    },
    nativeOn: {
      "click": function($event) {
        loading.btn3 = true
      }
    }
  }, ["Delete"])]), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-button', {
    attrs: {
      "type": "flat",
      "icon": "refresh",
      "loading": loading.btn4
    },
    nativeOn: {
      "click": function($event) {
        loading.btn4 = true
      }
    }
  }, ["Refresh"]), " ", _h('ui-button', {
    attrs: {
      "type": "flat",
      "icon": "add",
      "color": "primary",
      "loading": loading.btn5
    },
    nativeOn: {
      "click": function($event) {
        loading.btn5 = true
      }
    }
  }, ["Add Post"]), " ", _h('ui-button', {
    attrs: {
      "type": "flat",
      "icon": "delete",
      "color": "danger",
      "loading": loading.btn6
    },
    nativeOn: {
      "click": function($event) {
        loading.btn6 = true
      }
    }
  }, ["Delete"])]), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-button', {
    nativeOn: {
      "click": function($event) {
        stopSpinners($event)
      }
    }
  }, ["Stop spinners"])])]), " ", _h('div', {
    staticClass: "demo"
  }, [_m(12), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-button', {
    attrs: {
      "has-dropdown-menu": "",
      "menu-options": shareMenuOptions
    },
    on: {
      "menu-option-selected": menuOptionSelected
    }
  }, ["Menu"]), " ", _h('ui-button', {
    attrs: {
      "color": "primary",
      "has-dropdown-menu": "",
      "menu-options": shareMenuOptions,
      "dropdown-position": "top left"
    },
    on: {
      "menu-option-selected": menuOptionSelected
    }
  }, ["Menu, Position Top Left"]), " ", _h('ui-button', {
    attrs: {
      "color": "accent",
      "has-dropdown-menu": "",
      "show-menu-icons": "",
      "menu-options": shareMenuOptions
    },
    on: {
      "menu-option-selected": menuOptionSelected
    }
  }, ["Menu with Icons"]), " ", _h('ui-button', {
    attrs: {
      "type": "flat",
      "has-dropdown-menu": "",
      "show-menu-secondary-text": "",
      "menu-options": shareMenuOptions
    },
    on: {
      "menu-option-selected": menuOptionSelected
    }
  }, ["Menu with Shortcuts"]), " ", _h('ui-button', {
    attrs: {
      "has-dropdown-menu": "",
      "show-menu-icons": "",
      "show-menu-secondary-text": "",
      "menu-options": shareMenuOptions
    },
    on: {
      "menu-option-selected": menuOptionSelected
    }
  }, ["Menu with Icons & Shortcuts"]), " ", _h('ui-button', {
    attrs: {
      "has-dropdown-menu": "",
      "menu-options": shareMenuOptions,
      "open-dropdown-on": "hover"
    },
    on: {
      "menu-option-selected": menuOptionSelected
    }
  }, ["Open on Hover"])]), " ", _m(13), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-button', {
    attrs: {
      "has-popover": "",
      "text": "Popover"
    }
  }, [_h('div', {
    slot: "popover"
  }, ["Hey there! ", _m(14), "Popovers are nice for custom dropdowns."])]), " ", _h('ui-button', {
    attrs: {
      "has-popover": "",
      "text": "Open on Hover",
      "open-dropdown-on": "hover"
    }
  }, [_h('div', {
    slot: "popover"
  }, ["Hey there! ", _m(15), "Popovers are nice for custom dropdowns."])])])]), " ", _m(16), " ", _h('ui-tabs', {
    attrs: {
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Props"
    }
  }, [_m(17)]), " ", _h('ui-tab', {
    attrs: {
      "header": "Slots"
    }
  }, [_m(18)]), " ", _h('ui-tab', {
    attrs: {
      "header": "Events"
    }
  }, [_m(19)])])])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "section-heading"
  }, ["\n        UiButton ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiButton.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('p', ["UiButton is a versatile button component that largely implements the Material Design spec. UiButtons can show a dropdown and a loading spinner. They also support focus (mouse and keyboard separately), hover and disabled states."])
}},function (){with(this) {
  return _h('p', ["Visually, buttons have two main types:"])
}},function (){with(this) {
  return _h('ul', [_h('li', [_h('b', ["Normal"]), ": has a background color, with white or black text color."]), " ", _h('li', [_h('b', ["Flat"]), ": has no background, text color is the button color."])])
}},function (){with(this) {
  return _h('p', ["Supported colors are ", _h('code', ["default"]), ", ", _h('code', ["primary"]), ", ", _h('code', ["accent"]), ", ", _h('code', ["success"]), ", ", _h('code', ["warning"]), " and ", _h('code', ["danger"]), "."])
}},function (){with(this) {
  return _h('p', ["Additionally, both normal and flat buttons can be raised (with a box-shadow) using the ", _h('code', ["raised"]), " prop."])
}},function (){with(this) {
  return _h('p', [_h('b', ["Note:"]), " If you are having alignment issues when using multiple buttons next to each other, put the buttons in a container and add a class of ", _h('code', ["ui-button-group"]), " for a flex-based workaround."])
}},function (){with(this) {
  return _h('h3', ["\n        Examples ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiButtonDocs.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('h4', ["Normal"])
}},function (){with(this) {
  return _h('h4', ["Flat"])
}},function (){with(this) {
  return _h('h4', ["With Icons"])
}},function (){with(this) {
  return _h('h4', ["With Spinner (click to start spinner)"])
}},function (){with(this) {
  return _h('h4', ["With Menu"])
}},function (){with(this) {
  return _h('h4', ["With Popover"])
}},function (){with(this) {
  return _h('br')
}},function (){with(this) {
  return _h('br')
}},function (){with(this) {
  return _h('h3', ["API"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["type"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"normal\""])]), " ", _h('td', [_h('p', ["The type of button (determines the visual appearance)."]), " ", _h('p', ["Use ", _h('code', ["normal"]), " for a button with a background, and ", _h('code', ["flat"]), " for a seamless button."])])]), " ", _h('tr', [_h('td', ["buttonType"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"submit\""])]), " ", _h('td', ["The ", _h('code', ["type"]), " attribute of the button element."])]), " ", _h('tr', [_h('td', ["color"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"default\""])]), " ", _h('td', [_h('p', ["One of ", _h('code', ["default"]), ", ", _h('code', ["primary"]), ", ", _h('code', ["accent"]), ", ", _h('code', ["success"]), ", ", _h('code', ["warning"]), " or ", _h('code', ["danger"]), "."]), " ", _h('p', ["In normal buttons, this is the background color; in flat buttons, the text color."])])]), " ", _h('tr', [_h('td', ["raised"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not the button has a drop shadow."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to apply a drop shadow."])])]), " ", _h('tr', [_h('td', ["text"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td', ["The button text (text only). For HTML content, use the default slot."])]), " ", _h('tr', [_h('td', ["icon"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td', [_h('p', ["The button icon. Can be any of the ", _h('a', {
    attrs: {
      "href": "https://design.google.com/icons/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Material Icons"]), "."]), " ", _h('p', ["Note that this should be the icon codepoint if you want to support IE9."])])]), " ", _h('tr', [_h('td', ["iconRight"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not the button icon is shown at the right of the text (instead of to the left)."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to show the icon at the right."])])]), " ", _h('tr', [_h('td', ["hideRippleInk"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not the ripple ink animation is hidden when the button is clicked."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to hide the ripple ink animation."])])]), " ", _h('tr', [_h('td', ["hasPopover"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', ["Determines whether or not the button contains a popover."])]), " ", _h('tr', [_h('td', ["hasDropdownMenu"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', ["Determines whether or not the button contains a dropdown menu."])]), " ", _h('tr', [_h('td', ["menuOptions"]), " ", _h('td', ["Array"]), " ", _h('td', [_h('code', ["[]"])]), " ", _h('td', [_h('p', ["The list of options to show in the dropdown menu."]), " ", _h('p', ["Each option should be an object with at least two properties: ", _h('code', ["id"]), " and ", _h('code', ["text"]), ". An option can be shown as a divider by setting its ", _h('code', ["type"]), " property to ", _h('code', ["\"divider\""]), "."]), " ", _h('p', ["The ", _h('code', ["text"]), " is shown to the user and ", _h('code', ["id"]), " is passed to the ", _h('code', ["@menu-option-selected"]), " event handler."]), " ", _h('p', ["A menu option can also include these properties:"]), " ", _h('ul', [_h('li', [_h('code', ["type"]), ": Set to ", _h('code', ["\"divider\""]), " for a divider."]), " ", _h('li', [_h('code', ["icon"]), ": An icon to show with the option. Can be any of the ", _h('a', {
    attrs: {
      "href": "https://design.google.com/icons/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Material Icons"]), ". Note that this should be the icon codepoint if you want to support IE9."]), " ", _h('li', [_h('code', ["secondaryText"]), ": Text to show to the right of the option in the dropdown. Useful for showing keyboard shortcuts and badges."]), " ", _h('li', [_h('code', ["disabled"]), ": A Boolean that determines whether or not the option is disabled."])])])]), " ", _h('tr', [_h('td', ["showMenuIcons"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not icons are shown for the dropdown menu options."]), " ", _h('p', ["Set to ", _h('code', ["false"]), " to hide the icons."])])]), " ", _h('tr', [_h('td', ["showMenuSecondaryText"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not secondary text is shown for the dropdown menu options."]), " ", _h('p', ["Set to ", _h('code', ["false"]), " to hide the secondary text."])])]), " ", _h('tr', [_h('td', ["dropdownPosition"]), " ", _h('td', ["String"]), " ", _h('td', {
    staticClass: "no-wrap"
  }, [_h('code', ["\"bottom left\""])]), " ", _h('td', [_h('p', ["The position of the dropdown menu or popover relative to the button."]), " ", _h('p', ["Can be any one of ", _h('code', ["top left"]), ", ", _h('code', ["left top"]), ", ", _h('code', ["left middle"]), ", ", _h('code', ["left bottom"]), ", ", _h('code', ["bottom left"]), ", ", _h('code', ["bottom center"]), ", ", _h('code', ["bottom right"]), ", ", _h('code', ["right bottom"]), ", ", _h('code', ["right middle"]), ", ", _h('code', ["right top"]), ", ", _h('code', ["top right"]), ", or ", _h('code', ["top center"]), "."])])]), " ", _h('tr', [_h('td', ["showDropdownIcon"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["true"])]), " ", _h('td', [_h('p', ["Determines whether or not the dropdown chevron is shown (this is NOT the option icons, for that, see ", _h('code', ["showMenuIcons"]), ")."]), " ", _h('p', ["Set to ", _h('code', ["false"]), " to disable the dropdown chevron."]), " ", _h('p', ["This prop is only applicable if ", _h('code', ["hasDropdownMenu"]), " or ", _h('code', ["hasPopover"]), " is ", _h('code', ["true"]), " and ", _h('code', ["iconRight"]), " is ", _h('code', ["false"]), ". If not, the dropdown chevron is always hidden."])])]), " ", _h('tr', [_h('td', ["openDropdownOn"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"click\""])]), " ", _h('td', [_h('p', ["The type of event that will cause the dropdown menu or popover to open. One of ", _h('code', ["click"]), ", ", _h('code', ["hover"]), ", ", _h('code', ["focus"]), ", or ", _h('code', ["always"]), "."]), " ", _h('p', ["For ", _h('code', ["always"]), ", the dropdown is opened when rendered and it remains open."])])]), " ", _h('tr', [_h('td', ["loading"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not the loading spinner is shown."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to show the loading spinner (disables the button)."])])]), " ", _h('tr', [_h('td', ["disabled"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not the button is disabled."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to disable the button."])])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["(default)"]), " ", _h('td', ["The default slot holds the button text and can contain HTML."])]), " ", _h('tr', [_h('td', ["popover"]), " ", _h('td', ["The popover slot holds the popover content and can contain HTML."])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', {
    staticClass: "no-wrap"
  }, ["dropdown-opened"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the popover or dropdown menu is opened."]), " ", _h('p', ["Listen for it using ", _h('code', ["@dropdown-opened"]), "."])])]), " ", _h('tr', [_h('td', {
    staticClass: "no-wrap"
  }, ["dropdown-closed"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the popover or dropdown menu is closed."]), " ", _h('p', ["Listen for it using ", _h('code', ["@dropdown-closed"]), "."])])]), " ", _h('tr', [_h('td', {
    staticClass: "no-wrap"
  }, ["menu-option-selected"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when an option is selected from the dropdown menu."]), " ", _h('p', ["The handler function is called with the option that was selected. Listen for it using ", _h('code', ["@menu-option-selected"]), "."])])])])])])
}}]}

/***/ },
/* 161 */
/***/ function(module, exports) {

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

/***/ },
/* 162 */
/***/ function(module, exports) {

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

/***/ },
/* 163 */
/***/ function(module, exports) {

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

/***/ },
/* 164 */
/***/ function(module, exports) {

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

/***/ },
/* 165 */
/***/ function(module, exports) {

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

/***/ },
/* 166 */
/***/ function(module, exports) {

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

/***/ },
/* 167 */
/***/ function(module, exports) {

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

/***/ },
/* 168 */
/***/ function(module, exports) {

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

/***/ },
/* 169 */
/***/ function(module, exports) {

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

/***/ },
/* 170 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('div', {
    ref: "tooltip",
    staticClass: "ui-tooltip",
    domProps: {
      "textContent": _s(content)
    }
  })
}},staticRenderFns: []}

/***/ },
/* 171 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('section', {
    staticClass: "section section-ui-confirm"
  }, [_m(0), " ", _m(1), " ", _m(2), " ", _m(3), " ", _m(4), " ", _h('div', {
    staticClass: "demo"
  }, [_h('ui-confirm', {
    directives: [{
      name: "model",
      value: (show.genericConfirm),
      expression: "show.genericConfirm"
    }],
    attrs: {
      "close-on-confirm": ""
    },
    domProps: {
      "value": (show.genericConfirm)
    },
    on: {
      "confirmed": confirmed,
      "denied": denied,
      "input": function($event) {
        show.genericConfirm = $event
      }
    }
  }, ["\n            Do you want to confirm this?\n        "]), " ", _h('ui-confirm', {
    directives: [{
      name: "model",
      value: (show.genericConfirm2),
      expression: "show.genericConfirm2"
    }],
    attrs: {
      "header": "Confirm this",
      "confirm-button-text": "Confirm",
      "deny-button-text": "Deny",
      "autofocus": "confirm",
      "close-on-confirm": ""
    },
    domProps: {
      "value": (show.genericConfirm2)
    },
    on: {
      "confirmed": confirmed,
      "denied": denied,
      "input": function($event) {
        show.genericConfirm2 = $event
      }
    }
  }, ["\n            The confirm button in this UiConfirm is focussed by default.\n        "]), " ", _h('ui-confirm', {
    directives: [{
      name: "model",
      value: (show.publishConfirm),
      expression: "show.publishConfirm"
    }],
    attrs: {
      "type": "primary",
      "header": "Publish Post",
      "confirm-button-text": "Publish",
      "confirm-button-icon": "send",
      "deny-button-text": "Cancel",
      "loading": publishRequestInProgress
    },
    domProps: {
      "value": (show.publishConfirm)
    },
    on: {
      "confirmed": publishConfirmed,
      "denied": publishDenied,
      "input": function($event) {
        show.publishConfirm = $event
      }
    }
  }, ["\n            Publish post for the world to see?\n        "]), " ", _h('ui-confirm', {
    directives: [{
      name: "model",
      value: (show.deleteConfirm),
      expression: "show.deleteConfirm"
    }],
    attrs: {
      "header": "Delete Post",
      "type": "danger",
      "confirm-button-text": "Delete",
      "confirm-button-icon": "delete",
      "deny-button-text": "Cancel",
      "close-on-confirm": ""
    },
    domProps: {
      "value": (show.deleteConfirm)
    },
    on: {
      "confirmed": deleteConfirmed,
      "denied": deleteDenied,
      "input": function($event) {
        show.deleteConfirm = $event
      }
    }
  }, ["\n            Are you sure you want to delete the post?\n        "]), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-button', {
    nativeOn: {
      "click": function($event) {
        show.genericConfirm = true
      }
    }
  }, ["Default Confirm"]), " ", _h('ui-button', {
    nativeOn: {
      "click": function($event) {
        show.genericConfirm2 = true
      }
    }
  }, ["Focus Primary Button"]), " ", _h('ui-button', {
    attrs: {
      "color": "primary"
    },
    nativeOn: {
      "click": function($event) {
        show.publishConfirm = true
      }
    }
  }, ["Publish Post"]), " ", _h('ui-button', {
    attrs: {
      "type": "flat",
      "color": "danger"
    },
    nativeOn: {
      "click": function($event) {
        show.deleteConfirm = true
      }
    }
  }, ["Delete Post"])]), " ", (confirmResult.length) ? _h('pre', [_h('code', {
    domProps: {
      "textContent": _s(confirmResult)
    }
  })]) : _e()]), " ", _m(5), " ", _h('ui-tabs', {
    attrs: {
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Props"
    }
  }, [_m(6), "\n\n            * Required prop\n        "]), " ", _h('ui-tab', {
    attrs: {
      "header": "Slots"
    }
  }, [_m(7)]), " ", _h('ui-tab', {
    attrs: {
      "header": "Events"
    }
  }, [_m(8)])])])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "section-heading"
  }, ["\n        UiConfirm ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiConfirm.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('p', ["UiConfirm creates a confirmation dialog using ", _h('a', {
    attrs: {
      "href": "#/ui-modal-docs"
    }
  }, ["UiModal"]), "."])
}},function (){with(this) {
  return _h('p', ["The confirm and deny buttons can be customized (text, icon and color) and the component emits ", _h('code', ["opened"]), ", ", _h('code', ["closed"]), ", ", _h('code', ["confirmed"]), " and ", _h('code', ["denied"]), " events."])
}},function (){with(this) {
  return _h('p', ["UiConfirm can also show a loading spinner on the primary button (useful for AJAX operations)."])
}},function (){with(this) {
  return _h('h3', ["\n        Examples ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiConfirmDocs.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('h3', ["API"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Binding"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["show *"]), " ", _h('td', ["Boolean"]), " ", _h('td', ["(required)"]), " ", _h('td', ["Two way"]), " ", _h('td', [_h('p', ["Determines whether or not the modal is shown."]), " ", _h('p', ["Changing this value will show/hide the modal."])])]), " ", _h('tr', [_h('td', ["type"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"primary\""])]), " ", _h('td'), " ", _h('td', [_h('p', ["The type of confirm modal (determines the color of the primary confirm button)."]), " ", _h('p', ["Can be one of ", _h('code', ["default"]), ", ", _h('code', ["primary"]), ", ", _h('code', ["accent"]), ", ", _h('code', ["success"]), ", ", _h('code', ["warning"]), " or ", _h('code', ["danger"]), "."])])]), " ", _h('tr', [_h('td', ["header"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["true"])]), " ", _h('td'), " ", _h('td', [_h('p', ["The confirm modal header (text only)."]), " ", _h('p', ["If you want to use HTML in the header, consider directly using a ", _h('a', {
    attrs: {
      "href": "#/ui-modal-docs"
    }
  }, ["UiModal"]), "."])])]), " ", _h('tr', [_h('td', ["confirmButtonText"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"OK\""])]), " ", _h('td'), " ", _h('td', ["The confirm button text."])]), " ", _h('tr', [_h('td', ["confirmButtonIcon"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["The confirm button icon. Can be any of the ", _h('a', {
    attrs: {
      "href": "https://design.google.com/icons/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Material Icons"]), "."]), " ", _h('p', ["Note that this should be the icon codepoint if you want to support IE9."])])]), " ", _h('tr', [_h('td', ["denyButtonText"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"Cancel\""])]), " ", _h('td'), " ", _h('td', ["The deny button text."])]), " ", _h('tr', [_h('td', ["denyButtonIcon"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["The deny button icon. Can be any of the ", _h('a', {
    attrs: {
      "href": "https://design.google.com/icons/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Material Icons"]), "."]), " ", _h('p', ["Note that this should be the icon codepoint if you want to support IE9."])])]), " ", _h('tr', [_h('td', ["autofocus"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"none\""])]), " ", _h('td'), " ", _h('td', [_h('p', ["The button to autofocus when the modal is opened."]), " ", _h('p', ["Can be one of ", _h('code', ["confirm-button"]), ", ", _h('code', ["deny-button"]), " or ", _h('code', ["none"]), "."])])]), " ", _h('tr', [_h('td', ["closeOnConfirm"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the modal should be closed when the confirm button is clicked."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to close the modal on confirmation."])])]), " ", _h('tr', [_h('td', ["backdropDismissible"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["true"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the dialog can be closed by clicking the backdrop."]), " ", _h('p', ["Set to ", _h('code', ["false"]), " to disable this behavior."])])]), " ", _h('tr', [_h('td', ["loading"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not a loading spinner is shown on the confirm button."]), " ", _h('p', ["Setting this prop to ", _h('code', ["true"]), " will show a spinner on the confirm button, disable the deny button and prevent the modal from being dismissed."])])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["(default)"]), " ", _h('td', ["The default slot holds the confirm dialog content and can contain HTML."])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["opened"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the confirm dialog is opened."]), " ", _h('p', ["Listen for it using ", _h('code', ["@opened"]), "."])])]), " ", _h('tr', [_h('td', ["closed"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the confirm dialog is closed."]), " ", _h('p', ["Listen for it using ", _h('code', ["@closed"]), "."])])]), " ", _h('tr', [_h('td', ["confirmed"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the confirm button is selected."]), " ", _h('p', ["Listen for it using ", _h('code', ["@confirmed"]), "."])])]), " ", _h('tr', [_h('td', ["denied"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the deny button is selected."]), " ", _h('p', ["Listen for it using ", _h('code', ["@denied"]), "."])])])])])])
}}]}

/***/ },
/* 172 */
/***/ function(module, exports) {

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

/***/ },
/* 173 */
/***/ function(module, exports) {

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

/***/ },
/* 174 */
/***/ function(module, exports) {

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

/***/ },
/* 175 */
/***/ function(module, exports) {

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

/***/ },
/* 176 */
/***/ function(module, exports) {

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

/***/ },
/* 177 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('section', {
    staticClass: "section section-ui-collapsible"
  }, [_m(0), " ", _m(1), " ", _m(2), " ", _m(3), " ", _m(4), " ", _m(5), " ", _h('div', {
    staticClass: "demo"
  }, [_h('ui-collapsible', {
    attrs: {
      "header": "This is open initially",
      "open": true
    }
  }, [_m(6)]), " ", _h('ui-collapsible', {
    attrs: {
      "header": "Slightly longer body content"
    }
  }, [_m(7), " ", _m(8), " ", _m(9)]), " ", _h('ui-collapsible', [_h('div', {
    slot: "header"
  }, ["\n                HTML ", _m(10), " in header\n            "]), " ", _m(11)]), " ", _h('ui-collapsible', {
    attrs: {
      "header": "This collapsible is disabled",
      "disabled": ""
    }
  }, [_m(12)]), " ", _h('ui-collapsible', {
    attrs: {
      "header": "The header icon can be disabled",
      "hide-icon": ""
    }
  }, [_m(13)])]), " ", _m(14), " ", _h('ui-tabs', {
    attrs: {
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Props"
    }
  }, [_m(15)]), " ", _h('ui-tab', {
    attrs: {
      "header": "Slots"
    }
  }, [_m(16)]), " ", _h('ui-tab', {
    attrs: {
      "header": "Events"
    }
  }, [_m(17)])])])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "section-heading"
  }, ["\n        UiCollapsible ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiCollapsible.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('p', ["UiCollapsible is used to show collapsible content. It includes a header and a body and can be initially opened or closed (defaults to closed)."])
}},function (){with(this) {
  return _h('p', ["Both the header and body are fully customizable (using ", _h('code', ["slots"]), ") and the header icon can be removed."])
}},function (){with(this) {
  return _h('p', ["UiCollapsible supports keyboard navigation (e.g. tabbing and using the Space or Enter keys to open/close). It also has a disabled state and emits open and close events."])
}},function (){with(this) {
  return _h('p', ["However, it doesn't support accordion sets (i.e. closing other collapsibles when one is opened). You can achieve that effect by listening for ", _h('code', ["@opened"]), " or ", _h('code', ["@closed"]), " on each collapsible in the set and then adjusting their ", _h('code', ["open"]), " prop accordingly."])
}},function (){with(this) {
  return _h('h3', ["\n        Examples ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiCollapsibleDocs.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('div', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur nemo suscipit ipsa molestias, tempora dolor natus modi et incidunt tenetur!"])
}},function (){with(this) {
  return _h('b', ["Howdy!"])
}},function (){with(this) {
  return _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolore, numquam inventore esse consequatur doloribus pariatur accusantium voluptatum veritatis soluta corrupti impedit, asperiores accusamus! Ullam perferendis, ipsum officia consequatur quam! Sapiente nisi quam voluptates ipsam consequatur autem culpa repudiandae dignissimos."])
}},function (){with(this) {
  return _h('p', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolore, numquam inventore esse consequatur doloribus pariatur accusantium voluptatum veritatis soluta corrupti impedit, asperiores accusamus! Ullam perferendis, ipsum officia consequatur quam! Sapiente nisi quam voluptates ipsam consequatur autem culpa repudiandae dignissimos."])
}},function (){with(this) {
  return _h('b', ["supported"])
}},function (){with(this) {
  return _h('div', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur nemo suscipit ipsa molestias, tempora dolor natus modi et incidunt tenetur!"])
}},function (){with(this) {
  return _h('div', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur nemo suscipit ipsa molestias, tempora dolor natus modi et incidunt tenetur!"])
}},function (){with(this) {
  return _h('div', ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur nemo suscipit ipsa molestias, tempora dolor natus modi et incidunt tenetur!"])
}},function (){with(this) {
  return _h('h3', ["API"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["id"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td', [_h('p', ["A unique identifier for the collapsible."]), " ", _h('p', ["Applied as the ", _h('code', ["id"]), " attribute of the collapsible body element and used when targeting a specific collapsible for refresh."])])]), " ", _h('tr', [_h('td', ["open"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether the collapsible is open or closed."]), " ", _h('p', ["Changing this value will open/close the collapsible."])])]), " ", _h('tr', [_h('td', ["header"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td', ["The collapsible title (text only). If you want to use HTML in the header, use the header slot."])]), " ", _h('tr', [_h('td', ["hideIcon"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not the header icon is hidden."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to hide the icon."])])]), " ", _h('tr', [_h('td', ["hideRippleInk"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not the ripple ink animation is hidden when the collapsible header is clicked."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to hide the ripple ink animation."])])]), " ", _h('tr', [_h('td', ["disabled"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not the collapsible is disabled."]), " ", _h('p', ["A disabled collapsible cannot be focussed, opened or closed by the user."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to disable the collapsible."])])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["(default)"]), " ", _h('td', ["The default slot holds the collapsible content and can contain HTML."])]), " ", _h('tr', [_h('td', ["header"]), " ", _h('td', ["The header slot holds the collapsible header and can contain HTML."])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["opened"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the collapsible is opened."]), " ", _h('p', ["Listen for it using ", _h('code', ["@opened"]), "."])])]), " ", _h('tr', [_h('td', ["closed"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the collapsible is closed."]), " ", _h('p', ["Listen for it using ", _h('code', ["@closed"]), "."])])]), " ", _h('tr', [_h('td', {
    staticClass: "no-wrap"
  }, ["ui-collapsible::refresh-height"]), " ", _h('td', ["Received"]), " ", _h('td', [_h('p', ["A collapsible keeps track of its content height internally to use for the open/close transition."]), " ", _h('p', ["Trigger this event to update the collapsible's height when its content has changed since it was last opened."]), " ", _h('p', ["This will update the height of every collapsible in the scope in which it is triggered. To limit the update to a specific collapsible, pass in its ", _h('code', ["id"]), "."])])])])])])
}}]}

/***/ },
/* 178 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('section', {
    staticClass: "section section-ui-fab"
  }, [_m(0), " ", _m(1), " ", _m(2), " ", _m(3), " ", _h('div', {
    staticClass: "demo"
  }, [_h('div', {
    staticClass: "group"
  }, [_h('ui-fab', {
    attrs: {
      "color": "primary",
      "icon": "add"
    }
  }), " ", _h('ui-fab', {
    attrs: {
      "type": "mini",
      "color": "primary",
      "icon": "add"
    }
  }), " ", _h('ui-fab', {
    attrs: {
      "color": "accent",
      "icon": "edit"
    }
  }), " ", _h('ui-fab', {
    attrs: {
      "type": "mini",
      "color": "accent",
      "icon": "edit"
    }
  }), " ", _h('ui-fab', {
    attrs: {
      "icon": "keyboard_voice"
    }
  }), " ", _h('ui-fab', {
    attrs: {
      "type": "mini",
      "icon": "keyboard_voice"
    }
  })]), " ", _m(4), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-fab', {
    attrs: {
      "color": "primary",
      "icon": "edit",
      "tooltip": "Top center",
      "tooltip-position": "top center"
    }
  }), " ", _h('ui-fab', {
    attrs: {
      "color": "primary",
      "icon": "edit",
      "tooltip": "Bottom center"
    }
  }), " ", _h('ui-fab', {
    attrs: {
      "color": "primary",
      "icon": "edit",
      "tooltip": "Left middle",
      "tooltip-position": "left middle"
    }
  }), " ", _h('ui-fab', {
    attrs: {
      "color": "primary",
      "icon": "edit",
      "tooltip": "Right middle",
      "tooltip-position": "right middle"
    }
  })])]), " ", _m(5), " ", _h('ui-tabs', {
    attrs: {
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Props"
    }
  }, [_m(6), "\n\n            * Required prop\n        "])])])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "section-heading"
  }, ["\n        UiFab ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiFab.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('p', ["UiFab is the floating action button (FAB) from Material Design. It supports focus (keyboard separately), hover and disabled states."])
}},function (){with(this) {
  return _h('p', ["UiFab has two types: ", _h('code', ["normal"]), " and ", _h('code', ["mini"]), " and are three colors: ", _h('code', ["default"]), " (white), ", _h('code', ["primary"]), " and ", _h('code', ["accent"]), "."])
}},function (){with(this) {
  return _h('h3', ["\n        Examples ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiFabDocs.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('h4', ["With tooltip"])
}},function (){with(this) {
  return _h('h3', ["API"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["type"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"normal\""])]), " ", _h('td', ["The type of FAB. One of ", _h('code', ["normal"]), " or ", _h('code', ["mini"]), "."])]), " ", _h('tr', [_h('td', ["color"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"default\""])]), " ", _h('td', ["The FAB background color. One of ", _h('code', ["default"]), ", ", _h('code', ["primary"]), " or ", _h('code', ["accent"]), "."])]), " ", _h('tr', [_h('td', ["icon *"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td', [_h('p', ["The FAB icon. Can be any of the ", _h('a', {
    attrs: {
      "href": "https://design.google.com/icons/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Material Icons"]), "."]), " ", _h('p', ["Note that this should be the icon codepoint if you want to support IE9."])])]), " ", _h('tr', [_h('td', ["tooltip"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td', ["The FAB tooltip (text only)."])]), " ", _h('tr', [_h('td', ["tooltipPosition"]), " ", _h('td', ["String"]), " ", _h('td', {
    staticClass: "no-wrap"
  }, [_h('code', ["\"bottom center\""])]), " ", _h('td', [_h('p', ["The position of the tooltip relative to the FAB."]), " ", _h('p', ["One of ", _h('code', ["top left"]), ", ", _h('code', ["left top"]), ", ", _h('code', ["left middle"]), ", ", _h('code', ["left bottom"]), ", ", _h('code', ["bottom left"]), ", ", _h('code', ["bottom center"]), ", ", _h('code', ["bottom right"]), ", ", _h('code', ["right bottom"]), ", ", _h('code', ["right middle"]), ", ", _h('code', ["right top"]), ", ", _h('code', ["top right"]), ", or ", _h('code', ["top center"]), "."])])]), " ", _h('tr', [_h('td', {
    staticClass: "new-prop"
  }, ["openTooltipOn"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"hover focus\""])]), " ", _h('td', [_h('p', ["The type of event or events that will cause the tooltip to open."]), " ", _h('p', ["One or more of ", _h('code', ["click"]), ", ", _h('code', ["hover"]), ", or ", _h('code', ["focus"]), ". Separate multiple events with a space."])])]), " ", _h('tr', [_h('td', ["ariaLabel"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td', [_h('p', ["The FAB ", _h('code', ["aria-label"]), " attribute (important for accessibility)."]), " ", _h('p', ["Falls back to ", _h('code', ["tooltip"]), " if not provided."])])]), " ", _h('tr', [_h('td', ["hideRippleInk"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not the ripple ink animation is hidden when the FAB is clicked."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to hide the ripple ink animation."])])]), " ", _h('tr', [_h('td', ["disabled"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not the FAB is disabled."]), " ", _h('p', ["Set to ", _h('code', ["false"]), " to disable the FAB."]), " ", _h('p', ["You should consider hiding the FAB when it's not applicable instead of disabling it."])])])])])])
}}]}

/***/ },
/* 179 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('section', {
    staticClass: "section section-ui-checkbox"
  }, [_m(0), " ", _m(1), " ", _m(2), " ", _m(3), " ", _h('div', {
    staticClass: "demo"
  }, [_m(4), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-checkbox', {
    directives: [{
      name: "model",
      value: (firstValues.one),
      expression: "firstValues.one"
    }],
    attrs: {
      "name": "do_it_now"
    },
    domProps: {
      "value": (firstValues.one)
    },
    on: {
      "input": function($event) {
        firstValues.one = $event
      }
    }
  }, ["Do it now"]), " ", _h('ui-checkbox', {
    directives: [{
      name: "model",
      value: (firstValues.two),
      expression: "firstValues.two"
    }],
    attrs: {
      "name": "do_it_well"
    },
    domProps: {
      "value": (firstValues.two)
    },
    on: {
      "input": function($event) {
        firstValues.two = $event
      }
    }
  }, ["Do it well"]), " ", _h('ui-checkbox', {
    directives: [{
      name: "model",
      value: (firstValues.three),
      expression: "firstValues.three"
    }],
    attrs: {
      "name": "look_cool"
    },
    domProps: {
      "value": (firstValues.three)
    },
    on: {
      "input": function($event) {
        firstValues.three = $event
      }
    }
  }, ["Look cool while at it"]), " ", _h('ui-checkbox', {
    directives: [{
      name: "model",
      value: (firstValues.four),
      expression: "firstValues.four"
    }],
    attrs: {
      "name": "try_checking",
      "disabled": true
    },
    domProps: {
      "value": (firstValues.four)
    },
    on: {
      "input": function($event) {
        firstValues.four = $event
      }
    }
  }, ["Can't change this"]), " ", _h('ui-checkbox', {
    directives: [{
      name: "model",
      value: (firstValues.five),
      expression: "firstValues.five"
    }],
    attrs: {
      "name": "try_checking_another",
      "disabled": true
    },
    domProps: {
      "value": (firstValues.five)
    },
    on: {
      "input": function($event) {
        firstValues.five = $event
      }
    }
  }, ["Can't change this too"])]), " ", _m(5), " ", _h('div', {
    staticClass: "group label-left"
  }, [_h('ui-checkbox', {
    directives: [{
      name: "model",
      value: (secondValues.one),
      expression: "secondValues.one"
    }],
    attrs: {
      "name": "do_it_now",
      "label-left": ""
    },
    domProps: {
      "value": (secondValues.one)
    },
    on: {
      "input": function($event) {
        secondValues.one = $event
      }
    }
  }, ["Do it now"]), " ", _h('ui-checkbox', {
    directives: [{
      name: "model",
      value: (secondValues.two),
      expression: "secondValues.two"
    }],
    attrs: {
      "name": "do_it_well",
      "label-left": ""
    },
    domProps: {
      "value": (secondValues.two)
    },
    on: {
      "input": function($event) {
        secondValues.two = $event
      }
    }
  }, ["Do it well"]), " ", _h('ui-checkbox', {
    directives: [{
      name: "model",
      value: (secondValues.three),
      expression: "secondValues.three"
    }],
    attrs: {
      "name": "look_cool",
      "label-left": ""
    },
    domProps: {
      "value": (secondValues.three)
    },
    on: {
      "input": function($event) {
        secondValues.three = $event
      }
    }
  }, ["Look cool while at it"]), " ", _h('ui-checkbox', {
    directives: [{
      name: "model",
      value: (secondValues.four),
      expression: "secondValues.four"
    }],
    attrs: {
      "name": "try_checking",
      "disabled": true,
      "label-left": ""
    },
    domProps: {
      "value": (secondValues.four)
    },
    on: {
      "input": function($event) {
        secondValues.four = $event
      }
    }
  }, ["Can't change this"]), " ", _h('ui-checkbox', {
    directives: [{
      name: "model",
      value: (secondValues.five),
      expression: "secondValues.five"
    }],
    attrs: {
      "name": "try_checking_another",
      "disabled": true,
      "label-left": ""
    },
    domProps: {
      "value": (secondValues.five)
    },
    on: {
      "input": function($event) {
        secondValues.five = $event
      }
    }
  }, ["Can't change this too"])]), " ", _m(6), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-checkbox', {
    directives: [{
      name: "model",
      value: (htmlValue),
      expression: "htmlValue"
    }],
    attrs: {
      "name": "look_cool"
    },
    domProps: {
      "value": (htmlValue)
    },
    on: {
      "input": function($event) {
        htmlValue = $event
      }
    }
  }, ["Just ", _m(7), " it!"])]), " ", _m(8), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-checkbox', {
    directives: [{
      name: "model",
      value: (favouriteSimpsons),
      expression: "favouriteSimpsons"
    }],
    attrs: {
      "name": "favourite-simpsons",
      "payload": "Maggie"
    },
    domProps: {
      "value": (favouriteSimpsons)
    },
    on: {
      "input": function($event) {
        favouriteSimpsons = $event
      }
    }
  }, ["Maggie"]), " ", _h('ui-checkbox', {
    directives: [{
      name: "model",
      value: (favouriteSimpsons),
      expression: "favouriteSimpsons"
    }],
    attrs: {
      "name": "favourite-simpsons",
      "payload": "Lisa"
    },
    domProps: {
      "value": (favouriteSimpsons)
    },
    on: {
      "input": function($event) {
        favouriteSimpsons = $event
      }
    }
  }, ["Lisa"]), " ", _h('ui-checkbox', {
    directives: [{
      name: "model",
      value: (favouriteSimpsons),
      expression: "favouriteSimpsons"
    }],
    attrs: {
      "name": "favourite-simpsons",
      "payload": "Bart"
    },
    domProps: {
      "value": (favouriteSimpsons)
    },
    on: {
      "input": function($event) {
        favouriteSimpsons = $event
      }
    }
  }, ["Bart"]), " ", _h('ui-checkbox', {
    directives: [{
      name: "model",
      value: (favouriteSimpsons),
      expression: "favouriteSimpsons"
    }],
    attrs: {
      "name": "favourite-simpsons",
      "payload": "Marge"
    },
    domProps: {
      "value": (favouriteSimpsons)
    },
    on: {
      "input": function($event) {
        favouriteSimpsons = $event
      }
    }
  }, ["Marge"]), " ", _h('ui-checkbox', {
    directives: [{
      name: "model",
      value: (favouriteSimpsons),
      expression: "favouriteSimpsons"
    }],
    attrs: {
      "name": "favourite-simpsons",
      "payload": "Homer"
    },
    domProps: {
      "value": (favouriteSimpsons)
    },
    on: {
      "input": function($event) {
        favouriteSimpsons = $event
      }
    }
  }, ["Homer"])]), " ", _h('pre', [_h('code', {
    domProps: {
      "textContent": _s(("[" + (favouriteSimpsons.toString()) + "]"))
    }
  })]), " ", _h('ui-button', {
    nativeOn: {
      "click": function($event) {
        resetCheckboxes($event)
      }
    }
  }, ["Reset checkboxes"])]), " ", _m(9), " ", _h('ui-tabs', {
    attrs: {
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Props"
    }
  }, [_h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_m(10), " ", _h('tbody', [_m(11), " ", _m(12), " ", _h('tr', [_h('td', [_s("model(value) *")]), " ", _m(13), " ", _m(14), " ", _m(15), " ", _m(16)]), " ", _m(17), " ", _m(18), " ", _m(19), " ", _m(20), " ", _m(21)])])]), "\n\n            * Required prop\n        "]), " ", _h('ui-tab', {
    attrs: {
      "header": "Slots"
    }
  }, [_m(22)]), " ", _h('ui-tab', {
    attrs: {
      "header": "Events"
    }
  }, [_m(23)])])])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "section-heading"
  }, ["\n        UiCheckbox ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiCheckbox.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('p', ["UiCheckbox is a checkbox component that allows the user to select one or more options. It supports keyboard focus, a disabled state and showing the label to the left of the checkbox."])
}},function (){with(this) {
  return _h('p', ["It also allows for connecting multiple checkboxes to the same model, to form an array."])
}},function (){with(this) {
  return _h('h3', ["\n        Examples ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiCheckboxDocs.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('h4', ["Default"])
}},function (){with(this) {
  return _h('h4', ["Label Left"])
}},function (){with(this) {
  return _h('h4', ["HTML in Label"])
}},function (){with(this) {
  return _h('b', [_h('i', ["do"])])
}},function (){with(this) {
  return _h('h4', ["Multiple checkboxes connected to a single model"])
}},function (){with(this) {
  return _h('h3', ["API"])
}},function (){with(this) {
  return _h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Binding"]), " ", _h('th', ["Description"])])
}},function (){with(this) {
  return _h('tr', [_h('td', ["id"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["A unique identifier for the checkbox."]), " ", _h('p', ["Applied as the ", _h('code', ["id"]), " attribute of the checkbox input and used when targeting a specific checkbox for reset."])])])
}},function (){with(this) {
  return _h('tr', [_h('td', ["name"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', ["The checkbox input element ", _h('code', ["name"]), " attribute."])])
}},function (){with(this) {
  return _h('td', ["Boolean or Array"])
}},function (){with(this) {
  return _h('td', ["(required)"])
}},function (){with(this) {
  return _h('td')
}},function (){with(this) {
  return _h('td', [_h('p', ["The v-model that the checkbox value syncs to."]), " ", _h('p', ["Will be an array if the ", _h('code', ["value"]), " prop is provided, otherwise a boolean."])])
}},function (){with(this) {
  return _h('tr', [_h('td', ["payload"]), " ", _h('td', ["String or Others"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["The checkbox input ", _h('code', ["value"]), " attribute. Use this for connecting a group of checkboxes to a single model."]), " ", _h('p', ["In this case the v-model need to be an Array"]), " ", _h('p', ["See ", _h('b', ["Multiple checkboxes connected to a single model"]), " above for an example."])])])
}},function (){with(this) {
  return _h('tr', [_h('td', ["label"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', ["The checkbox label (text only). To use HTML in the label, use the default slot."])])
}},function (){with(this) {
  return _h('tr', [_h('td', ["hideLabel"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the checkbox label is hidden."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to hide the label."])])])
}},function (){with(this) {
  return _h('tr', [_h('td', ["labelLeft"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the label is shown to the left of the checkbox (instead of to the right)."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to show the label on the left."])])])
}},function (){with(this) {
  return _h('tr', [_h('td', ["disabled"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the checkbox is disabled."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to disable the checkbox."])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["(default)"]), " ", _h('td', ["The default slot holds the checkbox label and can contain HTML."])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', {
    staticClass: "no-wrap"
  }, ["ui-input::reset"]), " ", _h('td', ["Received"]), " ", _h('td', [_h('p', ["Trigger this event to reset the checkbox to its initial state. This event resets the ", _h('code', ["model"]), " prop."]), " ", _h('p', ["You can optionally pass in an ", _h('code', ["id"]), " to reset only a specific checkbox (whose ", _h('code', ["id"]), " you have set)."])])])])])])
}}]}

/***/ },
/* 180 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('section', {
    staticClass: "section section-ui-icon-button"
  }, [_m(0), " ", _m(1), " ", _m(2), " ", _m(3), " ", _m(4), " ", _m(5), " ", _h('div', {
    staticClass: "demo"
  }, [_m(6), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-icon-button', {
    attrs: {
      "icon": "refresh"
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "icon": "add",
      "color": "primary"
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "icon": "edit",
      "color": "accent"
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "icon": "star",
      "color": "success"
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "icon": "favorite",
      "color": "warning"
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "icon": "delete",
      "color": "danger"
    }
  })]), " ", _m(7), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-icon-button', {
    attrs: {
      "type": "flat",
      "icon": "refresh"
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "type": "flat",
      "icon": "add",
      "color": "primary"
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "type": "flat",
      "icon": "edit",
      "color": "accent"
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "type": "flat",
      "icon": "star",
      "color": "success"
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "type": "flat",
      "icon": "favorite",
      "color": "warning"
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "type": "flat",
      "icon": "delete",
      "color": "danger"
    }
  })]), " ", _m(8), " ", _h('div', {
    staticClass: "group box colored"
  }, [_h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "white",
      "icon": "arrow_back",
      "disabled": ""
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "white",
      "icon": "refresh",
      "loading": loading.spinner1
    },
    nativeOn: {
      "click": function($event) {
        startSpinner(1)
      }
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "white",
      "icon": "more_vert",
      "has-dropdown-menu": "",
      "menu-options": menu,
      "dropdown-position": "bottom right"
    }
  })]), " ", _m(9), " ", _h('div', {
    staticClass: "group box"
  }, [_h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "black",
      "icon": "arrow_back",
      "disabled": ""
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "black",
      "icon": "refresh",
      "loading": loading.spinner2
    },
    nativeOn: {
      "click": function($event) {
        startSpinner(2)
      }
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "black",
      "icon": "more_vert",
      "has-dropdown-menu": "",
      "menu-options": menu,
      "dropdown-position": "bottom right"
    }
  })]), " ", _m(10), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-icon-button', {
    attrs: {
      "has-popover": "",
      "icon": "settings"
    }
  }, [_h('div', {
    slot: "popover"
  }, ["Hey there! ", _m(11), "Popovers are nice for custom dropdowns."])])]), " ", _m(12), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-icon-button', {
    attrs: {
      "icon": "refresh",
      "tooltip": "Top center",
      "tooltip-position": "top center"
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "type": "flat",
      "icon": "add",
      "color": "primary",
      "tooltip": "Bottom center"
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "icon": "edit",
      "color": "accent",
      "tooltip": "Left middle",
      "tooltip-position": "left middle"
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "type": "flat",
      "icon": "star",
      "color": "success",
      "tooltip": "Right middle",
      "tooltip-position": "right middle"
    }
  })])]), " ", _m(13), " ", _h('ui-tabs', {
    attrs: {
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Props"
    }
  }, [_m(14), "\n\n            * Required prop\n        "]), " ", _h('ui-tab', {
    attrs: {
      "header": "Slots"
    }
  }, [_m(15)]), " ", _h('ui-tab', {
    attrs: {
      "header": "Events"
    }
  }, [_m(16)])])])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "section-heading"
  }, ["\n        UiIconButton ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiIconButton.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('p', ["UiIconButton shows an icon button which can include a dropdown (menu or popover) and can also show a loading spinner. It supports focus (mouse and keyboard separately), hover and disabled states."])
}},function (){with(this) {
  return _h('p', ["Visually, icon buttons have three types:"])
}},function (){with(this) {
  return _h('ul', [_h('li', [_h('b', ["Normal"]), ": has a background color, with white or black text color."]), " ", _h('li', [_h('b', ["Flat"]), ": has no background, text color is the button color."]), " ", _h('li', [_h('b', ["Clear"]), ": has no background, text color is black or white. Suitable for use in components like ", _h('a', {
    attrs: {
      "href": "#/ui-toolbar-docs"
    }
  }, ["UiToolbar"]), "."])])
}},function (){with(this) {
  return _h('p', ["Supported colors for types ", _h('code', ["normal"]), " and ", _h('code', ["flat"]), " only are ", _h('code', ["default"]), ", ", _h('code', ["primary"]), ", ", _h('code', ["accent"]), ", ", _h('code', ["success"]), ", ", _h('code', ["warning"]), " and ", _h('code', ["danger"]), ". Supported colors for type ", _h('code', ["clear"]), " are ", _h('code', ["black"]), " and ", _h('code', ["white"]), "."])
}},function (){with(this) {
  return _h('h3', ["\n        Examples ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiIconButtonDocs.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('h4', ["Normal"])
}},function (){with(this) {
  return _h('h4', ["Flat"])
}},function (){with(this) {
  return _h('h4', ["Clear, White"])
}},function (){with(this) {
  return _h('h4', ["Clear, Black"])
}},function (){with(this) {
  return _h('h4', ["With Popover"])
}},function (){with(this) {
  return _h('br')
}},function (){with(this) {
  return _h('h4', ["With tooltip"])
}},function (){with(this) {
  return _h('h3', ["API"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["type"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"normal\""])]), " ", _h('td', ["The type of icon button. One of ", _h('code', ["normal"]), ", ", _h('code', ["flat"]), " or ", _h('code', ["clear"]), "."])]), " ", _h('tr', [_h('td', ["buttonType"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"button\""])]), " ", _h('td', ["The ", _h('code', ["type"]), " attribute of the icon button element."])]), " ", _h('tr', [_h('td', ["color"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"default\""])]), " ", _h('td', [_h('p', ["In normal buttons, the background color; in flat or clear buttons, the text color."]), " ", _h('p', ["For normal or flat buttons, one of ", _h('code', ["default"]), ", ", _h('code', ["primary"]), ", ", _h('code', ["accent"]), ", ", _h('code', ["success"]), ", ", _h('code', ["warning"]), " and ", _h('code', ["danger"]), "."]), " ", _h('p', ["For clear buttons, ", _h('code', ["black"]), " or ", _h('code', ["white"]), "."])])]), " ", _h('tr', [_h('td', ["icon *"]), " ", _h('td', ["String"]), " ", _h('td', ["(required)"]), " ", _h('td', [_h('p', ["The button icon. Can be any of the ", _h('a', {
    attrs: {
      "href": "https://design.google.com/icons/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Material Icons"]), "."]), " ", _h('p', ["Note that this should be the icon codepoint if you want to support IE9."])])]), " ", _h('tr', [_h('td', ["tooltip"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td', ["The button tooltip (text only)."])]), " ", _h('tr', [_h('td', ["tooltipPosition"]), " ", _h('td', ["String"]), " ", _h('td', {
    staticClass: "no-wrap"
  }, [_h('code', ["\"bottom center\""])]), " ", _h('td', [_h('p', ["The position of the tooltip relative to the button."]), " ", _h('p', ["One of ", _h('code', ["top left"]), ", ", _h('code', ["left top"]), ", ", _h('code', ["left middle"]), ", ", _h('code', ["left bottom"]), ", ", _h('code', ["bottom left"]), ", ", _h('code', ["bottom center"]), ", ", _h('code', ["bottom right"]), ", ", _h('code', ["right bottom"]), ", ", _h('code', ["right middle"]), ", ", _h('code', ["right top"]), ", ", _h('code', ["top right"]), ", or ", _h('code', ["top center"]), "."])])]), " ", _h('tr', [_h('td', {
    staticClass: "new-prop"
  }, ["openTooltipOn"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"hover focus\""])]), " ", _h('td', [_h('p', ["The type of event or events that will cause the tooltip to open."]), " ", _h('p', ["One or more of ", _h('code', ["click"]), ", ", _h('code', ["hover"]), ", or ", _h('code', ["focus"]), ". Separate multiple events with a space."])])]), " ", _h('tr', [_h('td', ["ariaLabel"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td', [_h('p', ["The button ", _h('code', ["aria-label"]), " attribute (important for accessibility)."]), " ", _h('p', ["Falls back to ", _h('code', ["tooltip"]), " if not specified."])])]), " ", _h('tr', [_h('td', ["hideRippleInk"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not the ripple ink animation is hidden when the button is clicked."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to hide the ripple ink animation."])])]), " ", _h('tr', [_h('td', ["hasPopover"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', ["Determines whether or not the button contains a popover."])]), " ", _h('tr', [_h('td', ["hasDropdownMenu"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', ["Determines whether or not the button contains a dropdown menu."])]), " ", _h('tr', [_h('td', ["menuOptions"]), " ", _h('td', ["Array"]), " ", _h('td', [_h('code', ["[]"])]), " ", _h('td', [_h('p', ["An array of options to show in the dropdown menu."]), " ", _h('p', ["Each option should be an object with at least two properties: ", _h('code', ["id"]), " and ", _h('code', ["text"]), "."]), " ", _h('p', ["An option can be shown as a divider by setting its ", _h('code', ["type"]), " property to ", _h('code', ["\"divider\""]), "."]), " ", _h('p', ["The ", _h('code', ["text"]), " is shown to the user and ", _h('code', ["id"]), " is passed to the ", _h('code', ["@menu-option-selected"]), " event handler."]), " ", _h('p', ["A menu option may also include these properties:"]), " ", _h('ul', [_h('li', [_h('code', ["type"]), ": Set to ", _h('code', ["\"divider\""]), " for a divider."]), " ", _h('li', [_h('code', ["icon"]), ": An icon to show with the option. Can be any of the ", _h('a', {
    attrs: {
      "href": "https://design.google.com/icons/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Material Icons"]), ". Note that this should be the icon codepoint if you want to support IE9."]), " ", _h('li', [_h('code', ["secondaryText"]), ": Text to show to the right of the option in the dropdown. Useful for showing keyboard shortcuts and badges."]), " ", _h('li', [_h('code', ["disabled"]), ": A Boolean that determines whether or not the option is disabled."])])])]), " ", _h('tr', [_h('td', ["showMenuIcons"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not icons are shown for the dropdown menu options."]), " ", _h('p', ["Set to ", _h('code', ["false"]), " to hide the icons."])])]), " ", _h('tr', [_h('td', ["showMenuSecondaryText"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not secondary text is shown for the dropdown menu options."]), " ", _h('p', ["Set to ", _h('code', ["false"]), " to hide the secondary text."])])]), " ", _h('tr', [_h('td', ["dropdownPosition"]), " ", _h('td', ["String"]), " ", _h('td', {
    staticClass: "no-wrap"
  }, [_h('code', ["\"bottom left\""])]), " ", _h('td', [_h('p', ["The position of the dropdown menu or popover relative to the button."]), " ", _h('p', ["Can be any one of ", _h('code', ["top left"]), ", ", _h('code', ["left top"]), ", ", _h('code', ["left middle"]), ", ", _h('code', ["left bottom"]), ", ", _h('code', ["bottom left"]), ", ", _h('code', ["bottom center"]), ", ", _h('code', ["bottom right"]), ", ", _h('code', ["right bottom"]), ", ", _h('code', ["right middle"]), ", ", _h('code', ["right top"]), ", ", _h('code', ["top right"]), ", ", _h('code', ["top center"]), "."])])]), " ", _h('tr', [_h('td', ["openDropdownOn"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"click\""])]), " ", _h('td', [_h('p', ["The type of event that will cause the dropdown menu or popover to open."]), " ", _h('p', ["One of ", _h('code', ["click"]), ", ", _h('code', ["hover"]), ", ", _h('code', ["focus"]), ", or ", _h('code', ["always"]), ". For ", _h('code', ["always"]), " the dropdown is opened when rendered and it remains open."])])]), " ", _h('tr', [_h('td', ["loading"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not the loading spinner is shown."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to show the loading spinner (disables the button)."])])]), " ", _h('tr', [_h('td', ["disabled"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not the button is disabled."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to disable the button."])])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["popover"]), " ", _h('td', ["The popover slot holds the popover content and can contain HTML."])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', {
    staticClass: "no-wrap"
  }, ["dropdown-opened"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the popover or dropdown menu is opened."]), " ", _h('p', ["Listen for it using ", _h('code', ["@dropdown-opened"]), "."])])]), " ", _h('tr', [_h('td', {
    staticClass: "no-wrap"
  }, ["dropdown-closed"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the popover or dropdown menu is closed."]), " ", _h('p', ["Listen for it using ", _h('code', ["@dropdown-closed"]), "."])])]), " ", _h('tr', [_h('td', {
    staticClass: "no-wrap"
  }, ["menu-option-selected"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when an option is selected from the dropdown menu."]), " ", _h('p', ["The handler function is called with the option that was selected. Listen for it using ", _h('code', ["@menu-option-selected"]), "."])])])])])])
}}]}

/***/ },
/* 181 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ },
/* 182 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ },
/* 183 */
/***/ function(module, exports) {

module.exports = require("draggabilly");

/***/ },
/* 184 */
/***/ function(module, exports) {

module.exports = require("merge-options");

/***/ },
/* 185 */
/***/ function(module, exports) {

module.exports = require("tether-drop");

/***/ },
/* 186 */
/***/ function(module, exports) {

module.exports = require("tether-tooltip");

/***/ },
/* 187 */
/***/ function(module, exports) {

module.exports = require("validatorjs");

/***/ },
/* 188 */
/***/ function(module, exports) {

module.exports = require("vue-router");

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(27);


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(193)

/* template */
var __vue_template__ = __webpack_require__(207)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiSnackbar.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiSwitch_vue__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiSwitch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_UiSwitch_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_UiTextbox_vue__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_UiTextbox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__src_UiTextbox_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_UiRadio_vue__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_UiRadio_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__src_UiRadio_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_UiSnackbar_vue__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_UiSnackbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__src_UiSnackbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_UiSnackbarContainer_vue__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_UiSnackbarContainer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__src_UiSnackbarContainer_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_helpers_event_bus__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//













var model = {
    show1: true,
    show2: true,
    show3: true,
    show4: true
};

/* harmony default export */ exports["default"] = {
    components: {
        UiTab: __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default.a,
        UiTabs: __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default.a,
        UiButton: __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default.a,
        UiSwitch: __WEBPACK_IMPORTED_MODULE_3__src_UiSwitch_vue___default.a,
        UiTextbox: __WEBPACK_IMPORTED_MODULE_4__src_UiTextbox_vue___default.a,
        UiRadio: __WEBPACK_IMPORTED_MODULE_5__src_UiRadio_vue___default.a,
        UiSnackbar: __WEBPACK_IMPORTED_MODULE_6__src_UiSnackbar_vue___default.a,
        UiSnackbarContainer: __WEBPACK_IMPORTED_MODULE_7__src_UiSnackbarContainer_vue___default.a
    },

    data: function data() {
        return {
            position: 'left',
            queueSnackbars: false,

            action: '',
            duration: 5,
            actionColor: 'accent',
            message: 'Post deleted',
            model: model
        };
    },


    methods: {
        createSnackbar: function createSnackbar() {
            __WEBPACK_IMPORTED_MODULE_8__src_helpers_event_bus__["a" /* default */].$emit('ui-snackbar::create', {
                message: this.message,
                action: this.action,
                actionColor: this.actionColor,
                duration: this.duration * 1000
            });
        }
    }
};

/***/ },
/* 192 */,
/* 193 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiButton_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__UiButton_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ exports["default"] = {
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
        UiButton: __WEBPACK_IMPORTED_MODULE_0__UiButton_vue___default.a
    }
};

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_uuid__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiSnackbar_vue__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiSnackbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__UiSnackbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_event_bus__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ exports["default"] = {
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
            default: 'left', // 'left', 'center', 'right'
            coerce: function coerce(position) {
                return 'position-' + position;
            }
        }
    },

    mounted: function mounted() {
        var _this = this;

        __WEBPACK_IMPORTED_MODULE_2__helpers_event_bus__["a" /* default */].$on('ui-snackbar::create', function (snackbar) {
            snackbar.show = false;
            snackbar.id = snackbar.id || __WEBPACK_IMPORTED_MODULE_0__helpers_uuid__["a" /* default */].short('ui-snackbar-');
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
            queue: [] // List of options for snackbars to show
        };
    },


    methods: {
        showNext: function showNext() {
            var _this2 = this;

            if (!this.queue.length) {
                return;
            }

            // Show the next snackbar in the queue
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
        UiSnackbar: __WEBPACK_IMPORTED_MODULE_1__UiSnackbar_vue___default.a
    }
};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_event_bus__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_ReceivesTargetedEvent__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ exports["default"] = {
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
        // Cache initial value for later reset
        this.initialValue = this.value;
    },
    mounted: function mounted() {
        var _this = this;

        __WEBPACK_IMPORTED_MODULE_0__helpers_event_bus__["a" /* default */].$on('ui-input::reset', function (id) {
            // Abort if reset event isn't meant for this component
            if (!_this.eventTargetsComponent(id)) {
                return;
            }
            _this.$emit('input', _this.initialValue);
        });
    },

    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_ReceivesTargetedEvent__["a" /* default */]]
};

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_event_bus__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_autofocus__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_HasTextInput__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_ValidatesInput__ = __webpack_require__(19);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ exports["default"] = {
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

        __WEBPACK_IMPORTED_MODULE_1__helpers_event_bus__["a" /* default */].$on('ui-input::reset', function (id) {
            // Abort if reset event isn't meant for this component
            if (!_this.eventTargetsComponent(id)) {
                return;
            }

            // Temporarily disable watcher
            _this.ignoreValueChange = true;

            // Blur the input if it's focussed to prevent required errors
            // when it's value is reset
            if (document.activeElement === _this.$el.querySelector('input') || document.activeElement === _this.$el.querySelector('textarea')) {
                document.activeElement.blur();
            }

            // Reset state
            _this.$emit('input', _this.initialValue);
            _this.validationError = '';
            _this.valid = true;
            _this.dirty = false;

            // Re-enable watcher
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
            // Trim the value when it's written to the model
            write: function write(value) {
                if (this.type !== 'number' && this.trimValue) {
                    return value.trim();
                }

                return value;
            }
        }
    },

    components: {
        UiIcon: __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue___default.a
    },

    directives: {
        autofocus: __WEBPACK_IMPORTED_MODULE_2__directives_autofocus__["a" /* default */]
    },

    mixins: [__WEBPACK_IMPORTED_MODULE_3__mixins_HasTextInput__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_ValidatesInput__["a" /* default */]]
};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function (el, value) {
    el.autofocus = Boolean(value);
};

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(191)

/* template */
var __vue_template__ = __webpack_require__(203)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiSnackbarDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 199 */,
/* 200 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(194)

/* template */
var __vue_template__ = __webpack_require__(208)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiSnackbarContainer.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(195)

/* template */
var __vue_template__ = __webpack_require__(204)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiSwitch.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(196)

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
if (__vue_options__.functional) {console.error("[vue-loader] UiTextbox.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 203 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('section', {
    staticClass: "section section-ui-snackbar"
  }, [_m(0), " ", _m(1), " ", _m(2), " ", _m(3), " ", _h('div', {
    staticClass: "demo"
  }, [_m(4), " ", _h('ui-snackbar', {
    directives: [{
      name: "model",
      value: (model.show1),
      expression: "model.show1"
    }],
    attrs: {
      "persistent": ""
    },
    domProps: {
      "value": (model.show1)
    },
    on: {
      "input": function($event) {
        model.show1 = $event
      }
    }
  }, ["Post published"]), " ", _m(5), " ", _h('ui-snackbar', {
    directives: [{
      name: "model",
      value: (model.show2),
      expression: "model.show2"
    }],
    attrs: {
      "persistent": "",
      "action": "Retry"
    },
    domProps: {
      "value": (model.show2)
    },
    on: {
      "input": function($event) {
        model.show2 = $event
      }
    }
  }, ["Database connection failed"]), " ", _m(6), " ", _h('ui-snackbar', {
    directives: [{
      name: "model",
      value: (model.show3),
      expression: "model.show3"
    }],
    attrs: {
      "persistent": ""
    },
    domProps: {
      "value": (model.show3)
    },
    on: {
      "input": function($event) {
        model.show3 = $event
      }
    }
  }, ["\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Set sur illo hic ullam atque omnis.\n        "]), " ", _m(7), " ", _h('ui-snackbar', {
    directives: [{
      name: "model",
      value: (model.show4),
      expression: "model.show4"
    }],
    attrs: {
      "persistent": "",
      "action": "Undo",
      "action-color": "primary"
    },
    domProps: {
      "value": (model.show4)
    },
    on: {
      "input": function($event) {
        model.show4 = $event
      }
    }
  }, ["\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Set sur illo hic ullam atque omnis.\n        "])]), " ", _m(8), " ", _h('div', {
    staticClass: "preview-pane"
  }, [_h('ui-snackbar-container', {
    attrs: {
      "position": position,
      "queue-snackbars": queueSnackbars
    }
  })]), " ", _h('div', {
    staticClass: "preview-controls"
  }, [_h('ui-textbox', {
    directives: [{
      name: "model",
      value: (message),
      expression: "message"
    }],
    attrs: {
      "label": "Snackbar message",
      "name": "message",
      "placeholder": "Enter a message"
    },
    domProps: {
      "value": (message)
    },
    on: {
      "input": function($event) {
        message = $event
      }
    }
  }), " ", _h('ui-textbox', {
    directives: [{
      name: "model",
      value: (action),
      expression: "action"
    }],
    attrs: {
      "label": "Action text",
      "name": "action_text",
      "placeholder": "Enter action button text"
    },
    domProps: {
      "value": (action)
    },
    on: {
      "input": function($event) {
        action = $event
      }
    }
  }), " ", _h('ui-textbox', {
    directives: [{
      name: "model",
      value: (duration),
      expression: "duration"
    }],
    attrs: {
      "label": "Duration (seconds)",
      "name": "duration",
      "placeholder": "Enter the duration in seconds",
      "type": "number"
    },
    domProps: {
      "value": (duration)
    },
    on: {
      "input": function($event) {
        duration = _n($event)
      }
    }
  }), " ", _h('ui-radio', {
    directives: [{
      name: "model",
      value: (actionColor),
      expression: "actionColor"
    }],
    attrs: {
      "label": "Action color",
      "name": "action_color",
      "options": ['accent', 'primary']
    },
    domProps: {
      "value": (actionColor)
    },
    on: {
      "input": function($event) {
        actionColor = $event
      }
    }
  }), " ", _h('ui-radio', {
    directives: [{
      name: "model",
      value: (position),
      expression: "position"
    }],
    attrs: {
      "label": "Position",
      "name": "position",
      "options": ['left', 'center', 'right']
    },
    domProps: {
      "value": (position)
    },
    on: {
      "input": function($event) {
        position = $event
      }
    }
  }), " ", _h('ui-switch', {
    directives: [{
      name: "model",
      value: (queueSnackbars),
      expression: "queueSnackbars"
    }],
    domProps: {
      "value": (queueSnackbars)
    },
    on: {
      "input": function($event) {
        queueSnackbars = $event
      }
    }
  }, ["Queue snackbars"]), " ", _h('ui-button', {
    nativeOn: {
      "click": function($event) {
        createSnackbar($event)
      }
    }
  }, ["Create snackbar"])]), " ", _m(9), " ", _h('ui-tabs', {
    attrs: {
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Props"
    }
  }, [_m(10)]), " ", _h('ui-tab', {
    attrs: {
      "header": "Slots"
    }
  }, [_m(11)]), " ", _h('ui-tab', {
    attrs: {
      "header": "Events"
    }
  }, [_m(12)])]), " ", _m(13), " ", _h('ui-tabs', {
    attrs: {
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Props"
    }
  }, [_m(14)]), " ", _h('ui-tab', {
    attrs: {
      "header": "Events"
    }
  }, [_m(15)])])])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "section-heading"
  }, ["\n        UiSnackbar & UiSnackbarContainer ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiSnackbar.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('p', ["UiSnackbar provides lightweight feedback about an operation by showing a brief message at the bottom of the screen. Snackbars can contain an action."])
}},function (){with(this) {
  return _h('p', ["UiSnackbarContainer is a container that allows you to create snackbars using events, and it manages their visibility to ensure only one snackbar is shown at a time. It also allows you to position snackbars to the left, center or right of the container."])
}},function (){with(this) {
  return _h('h3', ["\n        Examples ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiSnackbarDocs.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('h4', ["Default"])
}},function (){with(this) {
  return _h('h4', ["With action"])
}},function (){with(this) {
  return _h('h4', ["Multi-line"])
}},function (){with(this) {
  return _h('h4', ["Multi-line with action, action color primary"])
}},function (){with(this) {
  return _h('h3', ["UiSnackbarContainer Demo"])
}},function (){with(this) {
  return _h('h3', ["API: UiSnackbar"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Binding"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["id"]), " ", _h('td', ["String"]), " ", _h('td', {
    staticClass: "no-wrap"
  }, ["(Auto-generated ", _h('br'), " unique ID)"]), " ", _h('td'), " ", _h('td', [_h('p', ["A unique identifier for the snackbar."]), " ", _h('p', ["Applied as the ", _h('code', ["id"]), " attribute of the snackbar root element."])])]), " ", _h('tr', [_h('td', ["show"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', ["Two way"]), " ", _h('td', [_h('p', ["Determines whether or not the snackbar is shown."]), " ", _h('p', ["Changing this value will show/hide the snackbar."])])]), " ", _h('tr', [_h('td', ["message"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["The snackbar message (text only)."]), " ", _h('p', ["To use HTML in the snackbar, use the default slot."])])]), " ", _h('tr', [_h('td', ["action"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["The snackbar action button text."]), " ", _h('p', ["Setting this prop will show an action button. Otherwise, no action button is shown."])])]), " ", _h('tr', [_h('td', ["actionColor"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"accent\""])]), " ", _h('td'), " ", _h('td', [_h('p', ["The snackbar action button text color."]), " ", _h('p', ["One of ", _h('code', ["accent"]), " or ", _h('code', ["primary"]), "."])])]), " ", _h('tr', [_h('td', ["duration"]), " ", _h('td', ["Number"]), " ", _h('td', [_h('code', ["5000"])]), " ", _h('td'), " ", _h('td', [_h('p', ["The duration of the snackbar in milliseconds."]), " ", _h('p', ["After this amount of time, the snackbar will be hidden if ", _h('code', ["autoHide"]), " is enabled."])])]), " ", _h('tr', [_h('td', ["autoHide"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["true"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the snackbar is automatically hidden after the given duration."]), " ", _h('p', ["Set to ", _h('code', ["false"]), " to disable auto hiding."])])]), " ", _h('tr', [_h('td', ["persistent"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the snackbar is persistent and cannot be hidden."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " for a persistent snackbar."])])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["(default)"]), " ", _h('td', ["The default slot holds the snackbar message and can contain HTML."])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["shown"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the snackbar is shown."]), " ", _h('p', ["Listen for it using ", _h('code', ["@shown"]), "."])])]), " ", _h('tr', [_h('td', ["hidden"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the snackbar is hidden."]), " ", _h('p', ["Listen for it using ", _h('code', ["@hidden"]), "."])])]), " ", _h('tr', [_h('td', ["clicked"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the snackbar is clicked."]), " ", _h('p', ["Listen for it using ", _h('code', ["@clicked"]), "."])])]), " ", _h('tr', [_h('td', ["action-clicked"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the snackbar action is action."]), " ", _h('p', ["Listen for it using ", _h('code', ["@action-clicked"]), "."])])])])])])
}},function (){with(this) {
  return _h('h3', ["API: UiSnackbarContainer"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["defaultDuration"]), " ", _h('td', ["Number"]), " ", _h('td', [_h('code', ["5000"])]), " ", _h('td', [_h('p', ["The default duration in milliseconds of snackbars shown in this container."]), " ", _h('p', ["Only applies to snackbars created without an explicit duration."])])]), " ", _h('tr', [_h('td', ["queueSnackbars"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not snackbars should be queued and shown one after the other."]), " ", _h('p', ["By default, creating a new snackbar while one is visible will cause the visible one to immediately transition out for the new one."]), " ", _h('p', ["Set this prop to ", _h('code', ["true"]), " to ensure that each snackbar is shown for its complete duration."])])]), " ", _h('tr', [_h('td', {
    staticClass: "new-prop"
  }, ["allowHtml"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', [_h('p', ["Determines whether or not snackbars created in this container can have HTML in their ", _h('code', ["message"]), " property."]), " ", _h('p', ["Set this prop to ", _h('code', ["true"]), " to allow HTML in the snackbars created in this container."])])]), " ", _h('tr', [_h('td', ["position"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"left\""])]), " ", _h('td', [_h('p', ["The position of snackbars relative to the container."]), " ", _h('p', ["One of ", _h('code', ["left"]), ", ", _h('code', ["center"]), " or ", _h('code', ["right"]), "."])])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', {
    staticClass: "no-wrap"
  }, ["ui-snackbar::create"]), " ", _h('td', ["Received"]), " ", _h('td', [_h('p', ["Trigger this event to create a new snackbar, passing in an options object with any of the props of UiSnackbar."]), " ", _h('p', ["You can also specify the following callback functions on the options object:"]), " ", _h('ul', [_h('li', [_h('b', ["onShow"]), ": called when the snackbar is shown, passed the snackbar object."]), " ", _h('li', [_h('b', ["onHide"]), ": called when the snackbar is hidden, passed the snackbar object."]), " ", _h('li', [_h('b', ["onClick"]), ": called when the snackbar is clicked, passed the snackbar object."]), " ", _h('li', [_h('b', ["onActionClick"]), ": called when the snackbar action is clicked, passed the snackbar object."])])])])])])])
}}]}

/***/ },
/* 204 */
/***/ function(module, exports) {

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
  }, [($slots["default"] || [_h('span', {
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

/***/ },
/* 205 */
/***/ function(module, exports) {

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

/***/ },
/* 206 */,
/* 207 */
/***/ function(module, exports) {

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
  }, [($slots["default"] || [_h('span', {
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

/***/ },
/* 208 */
/***/ function(module, exports) {

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

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiSwitch_vue__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiSwitch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_UiSwitch_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_helpers_event_bus__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







var values = {
    value1: true,
    value2: false,
    value3: true,
    value4: false,
    value5: false,
    value6: true,
    value7: false,
    value8: true,
    value9: false,
    value10: false,
    value11: true
};

/* harmony default export */ exports["default"] = {
    data: function data() {
        return {
            values: values
        };
    },

    components: {
        UiTab: __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default.a,
        UiTabs: __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default.a,
        UiButton: __WEBPACK_IMPORTED_MODULE_2__src_UiButton_vue___default.a,
        UiSwitch: __WEBPACK_IMPORTED_MODULE_3__src_UiSwitch_vue___default.a
    },

    methods: {
        resetSwitches: function resetSwitches() {
            __WEBPACK_IMPORTED_MODULE_4__src_helpers_event_bus__["a" /* default */].$emit('ui-input::reset');
        }
    }
};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

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
if (__vue_options__.functional) {console.error("[vue-loader] UiSwitchDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 211 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('section', {
    staticClass: "section section-ui-switch"
  }, [_m(0), " ", _m(1), " ", _m(2), " ", _h('div', {
    staticClass: "demo"
  }, [_m(3), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-switch', {
    directives: [{
      name: "model",
      value: (values.value1),
      expression: "values.value1"
    }],
    attrs: {
      "name": "do_it_now"
    },
    domProps: {
      "value": (values.value1)
    },
    on: {
      "input": function($event) {
        values.value1 = $event
      }
    }
  }, ["Do it now"]), " ", _h('ui-switch', {
    directives: [{
      name: "model",
      value: (values.value2),
      expression: "values.value2"
    }],
    attrs: {
      "name": "do_it_well"
    },
    domProps: {
      "value": (values.value2)
    },
    on: {
      "input": function($event) {
        values.value2 = $event
      }
    }
  }, ["Do it well"]), " ", _h('ui-switch', {
    directives: [{
      name: "model",
      value: (values.value3),
      expression: "values.value3"
    }],
    attrs: {
      "name": "look_cool"
    },
    domProps: {
      "value": (values.value3)
    },
    on: {
      "input": function($event) {
        values.value3 = $event
      }
    }
  }, ["Look cool while at it"]), " ", _h('ui-switch', {
    directives: [{
      name: "model",
      value: (values.value4),
      expression: "values.value4"
    }],
    attrs: {
      "name": "try_checking",
      "disabled": ""
    },
    domProps: {
      "value": (values.value4)
    },
    on: {
      "input": function($event) {
        values.value4 = $event
      }
    }
  }, ["Can't change this"]), " ", _h('ui-switch', {
    directives: [{
      name: "model",
      value: (values.value5),
      expression: "values.value5"
    }],
    attrs: {
      "name": "try_checking_another",
      "disabled": ""
    },
    domProps: {
      "value": (values.value5)
    },
    on: {
      "input": function($event) {
        values.value5 = $event
      }
    }
  }, ["Can't change this too"])]), " ", _m(4), " ", _h('div', {
    staticClass: "group label-left"
  }, [_h('ui-switch', {
    directives: [{
      name: "model",
      value: (values.value6),
      expression: "values.value6"
    }],
    attrs: {
      "name": "do_it_now",
      "label-left": ""
    },
    domProps: {
      "value": (values.value6)
    },
    on: {
      "input": function($event) {
        values.value6 = $event
      }
    }
  }, ["Do it now"]), " ", _h('ui-switch', {
    directives: [{
      name: "model",
      value: (values.value7),
      expression: "values.value7"
    }],
    attrs: {
      "name": "do_it_well",
      "label-left": ""
    },
    domProps: {
      "value": (values.value7)
    },
    on: {
      "input": function($event) {
        values.value7 = $event
      }
    }
  }, ["Do it well"]), " ", _h('ui-switch', {
    directives: [{
      name: "model",
      value: (values.value8),
      expression: "values.value8"
    }],
    attrs: {
      "name": "look_cool",
      "label-left": ""
    },
    domProps: {
      "value": (values.value8)
    },
    on: {
      "input": function($event) {
        values.value8 = $event
      }
    }
  }, ["Look cool while at it"]), " ", _h('ui-switch', {
    directives: [{
      name: "model",
      value: (values.value9),
      expression: "values.value9"
    }],
    attrs: {
      "name": "try_checking",
      "disabled": "",
      "label-left": ""
    },
    domProps: {
      "value": (values.value9)
    },
    on: {
      "input": function($event) {
        values.value9 = $event
      }
    }
  }, ["Can't change this"]), " ", _h('ui-switch', {
    directives: [{
      name: "model",
      value: (values.value10),
      expression: "values.value10"
    }],
    attrs: {
      "name": "try_checking_another",
      "disabled": "",
      "label-left": ""
    },
    domProps: {
      "value": (values.value10)
    },
    on: {
      "input": function($event) {
        values.value10 = $event
      }
    }
  }, ["Can't change this too"])]), " ", _m(5), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-switch', {
    directives: [{
      name: "model",
      value: (values.value11),
      expression: "values.value11"
    }],
    attrs: {
      "name": "look_cool"
    },
    domProps: {
      "value": (values.value11)
    },
    on: {
      "input": function($event) {
        values.value11 = $event
      }
    }
  }, ["Just ", _m(6), " it!"])]), " ", _h('ui-button', {
    nativeOn: {
      "click": function($event) {
        resetSwitches($event)
      }
    }
  }, ["Reset switches"])]), " ", _m(7), " ", _h('ui-tabs', {
    attrs: {
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Props"
    }
  }, [_m(8), "\n\n            * Required prop\n        "]), " ", _h('ui-tab', {
    attrs: {
      "header": "Slots"
    }
  }, [_m(9)]), " ", _h('ui-tab', {
    attrs: {
      "header": "Events"
    }
  }, [_m(10)])])])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "section-heading"
  }, ["\n        UiSwitch ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiSwitch.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('p', ["A switch component that allows the user to toggle between two values like on and off. Supports keyboard focus, a disabled state and showing the label to the left of the switch."])
}},function (){with(this) {
  return _h('h3', ["\n        Examples ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiSwitchDocs.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('h4', ["Default"])
}},function (){with(this) {
  return _h('h4', ["Label Left"])
}},function (){with(this) {
  return _h('h4', ["HTML in Label"])
}},function (){with(this) {
  return _h('b', [_h('i', ["do"])])
}},function (){with(this) {
  return _h('h3', ["API"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Binding"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["id"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["A unique identifier for the switch."]), " ", _h('p', ["Applied as the ", _h('code', ["id"]), " attribute of the switch input and used when targeting a specific switch for reset."])])]), " ", _h('tr', [_h('td', ["name"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', ["The switch input ", _h('code', ["name"]), " attribute."])]), " ", _h('tr', [_h('td', ["value *"]), " ", _h('td', ["Boolean"]), " ", _h('td', ["(required)"]), " ", _h('td', ["Two way"]), " ", _h('td', ["The model that the switch value syncs to."])]), " ", _h('tr', [_h('td', ["label"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["The switch label (text only)."]), " ", _h('p', ["To use HTML in the label, use the default slot."])])]), " ", _h('tr', [_h('td', ["hideLabel"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the switch label is hidden."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to hide the label."])])]), " ", _h('tr', [_h('td', ["labelLeft"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the label is shown to the left of the switch."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to show the label on the left."])])]), " ", _h('tr', [_h('td', ["disabled"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the switch is disabled."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to disable the switch."])])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["(default)"]), " ", _h('td', ["The default slot holds the switch label and can contain HTML."])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', {
    staticClass: "no-wrap"
  }, ["ui-input::reset"]), " ", _h('td', ["Received"]), " ", _h('td', [_h('p', ["Trigger this event to reset the switch to its initial state. This event resets the ", _h('code', ["value"]), " prop."]), " ", _h('p', ["You can optionally pass in an ", _h('code', ["id"]), " to reset only a specific switch (whose ", _h('code', ["id"]), " you have set)."])])])])])])
}}]}

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiTextbox_vue__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiTextbox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_UiTextbox_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiButton_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_UiButton_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_helpers_event_bus__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







var values = {
    value1: '',
    value2: '',
    value3: 'John Doe',
    value4: 'John Doe',
    value5: '',
    value6: '',
    value7: '',
    value8: '',
    value9: '',
    value10: '',
    value11: '',
    value12: '',
    value13: '',
    value14: '',
    value15: '',
    value16: ''
};
/* harmony default export */ exports["default"] = {
    components: {
        UiTab: __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default.a,
        UiTabs: __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default.a,
        UiTextbox: __WEBPACK_IMPORTED_MODULE_2__src_UiTextbox_vue___default.a,
        UiButton: __WEBPACK_IMPORTED_MODULE_3__src_UiButton_vue___default.a
    },

    data: function data() {
        return {
            validationErrorMessages: {
                required: 'Please enter your email. We won\'t be able to contact you without an email address.',
                email: 'Oops, the email address you have entered seems to be wrong. Double check?'
            },
            isValid: true,
            values: values
        };
    },


    methods: {
        resetFields: function resetFields() {
            __WEBPACK_IMPORTED_MODULE_4__src_helpers_event_bus__["a" /* default */].$emit('ui-input::reset');
        },
        toggleValidity: function toggleValidity() {
            __WEBPACK_IMPORTED_MODULE_4__src_helpers_event_bus__["a" /* default */].$emit('ui-input::set-validity', !this.isValid, 'The input is not valid. This error message was set externally.', 'set-validation-state');
        }
    }
};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(212)

/* template */
var __vue_template__ = __webpack_require__(214)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiTextboxDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 214 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('section', {
    staticClass: "section section-ui-textbox"
  }, [_m(0), " ", _m(1), " ", _m(2), " ", _m(3), " ", _m(4), " ", _m(5), " ", _h('div', {
    staticClass: "demo"
  }, [_m(6), " ", _h('ui-textbox', {
    directives: [{
      name: "model",
      value: (values.value1),
      expression: "values.value1"
    }],
    attrs: {
      "label": "Name",
      "name": "name",
      "type": "text",
      "placeholder": "Enter your name"
    },
    domProps: {
      "value": (values.value1)
    },
    on: {
      "input": function($event) {
        values.value1 = $event
      }
    }
  }), " ", _m(7), " ", _h('ui-textbox', {
    directives: [{
      name: "model",
      value: (values.value2),
      expression: "values.value2"
    }],
    attrs: {
      "label": "Name",
      "name": "name",
      "type": "text",
      "placeholder": "Enter your name",
      "disabled": ""
    },
    domProps: {
      "value": (values.value2)
    },
    on: {
      "input": function($event) {
        values.value2 = $event
      }
    }
  }), " ", _m(8), " ", _h('ui-textbox', {
    directives: [{
      name: "model",
      value: (values.value3),
      expression: "values.value3"
    }],
    attrs: {
      "label": "Name",
      "name": "name",
      "type": "text",
      "placeholder": "Enter your name"
    },
    domProps: {
      "value": (values.value3)
    },
    on: {
      "input": function($event) {
        values.value3 = $event
      }
    }
  }), " ", _m(9), " ", _h('ui-textbox', {
    directives: [{
      name: "model",
      value: (values.value4),
      expression: "values.value4"
    }],
    attrs: {
      "label": "Name",
      "name": "name",
      "type": "text",
      "placeholder": "Enter your name",
      "disabled": ""
    },
    domProps: {
      "value": (values.value4)
    },
    on: {
      "input": function($event) {
        values.value4 = $event
      }
    }
  }), " ", _m(10), " ", _h('ui-textbox', {
    directives: [{
      name: "model",
      value: (values.value5),
      expression: "values.value5"
    }],
    attrs: {
      "label": "Name",
      "name": "name",
      "type": "text",
      "placeholder": "Enter your name",
      "help-text": "If you have multiple names, enter the one you prefer"
    },
    domProps: {
      "value": (values.value5)
    },
    on: {
      "input": function($event) {
        values.value5 = $event
      }
    }
  }), " ", _m(11), " ", _h('ui-textbox', {
    directives: [{
      name: "model",
      value: (values.value6),
      expression: "values.value6"
    }],
    attrs: {
      "label": "Phone",
      "name": "phone",
      "type": "tel",
      "placeholder": "Enter your phone number",
      "icon": "phone"
    },
    domProps: {
      "value": (values.value6)
    },
    on: {
      "input": function($event) {
        values.value6 = $event
      }
    }
  }), " ", _m(12), " ", _h('ui-textbox', {
    directives: [{
      name: "model",
      value: (values.value7),
      expression: "values.value7"
    }],
    attrs: {
      "name": "search",
      "placeholder": "Search",
      "icon": "search",
      "hide-label": ""
    },
    domProps: {
      "value": (values.value7)
    },
    on: {
      "input": function($event) {
        values.value7 = $event
      }
    }
  }), " ", _m(13), " ", _h('ui-textbox', {
    directives: [{
      name: "model",
      value: (values.value8),
      expression: "values.value8"
    }],
    attrs: {
      "label": "Email",
      "name": "email",
      "type": "text",
      "placeholder": "Enter your email",
      "icon": "mail",
      "help-text": "If you have multiple email addresses, enter the one you use the most",
      "icon-right": ""
    },
    domProps: {
      "value": (values.value8)
    },
    on: {
      "input": function($event) {
        values.value8 = $event
      }
    }
  }), " ", _m(14), " ", _m(15), " ", _h('ui-textbox', {
    directives: [{
      name: "model",
      value: (values.value9),
      expression: "values.value9"
    }],
    attrs: {
      "label": "Name",
      "name": "name",
      "type": "text",
      "placeholder": "Enter your name",
      "help-text": "If you have multiple names, enter the one you prefer",
      "validation-rules": "required",
      "autocomplete": "off"
    },
    domProps: {
      "value": (values.value9)
    },
    on: {
      "input": function($event) {
        values.value9 = $event
      }
    }
  }), " ", _m(16), " ", _h('ui-textbox', {
    directives: [{
      name: "model",
      value: (values.value10),
      expression: "values.value10"
    }],
    attrs: {
      "label": "Name",
      "name": "name",
      "type": "text",
      "placeholder": "Enter your name",
      "help-text": "If you have multiple names, enter the one you prefer",
      "autocomplete": "off",
      "id": "set-validation-state"
    },
    domProps: {
      "value": (values.value10)
    },
    on: {
      "input": function($event) {
        values.value10 = $event
      }
    }
  }), " ", _h('ui-button', {
    staticClass: "m-t-8",
    nativeOn: {
      "click": function($event) {
        toggleValidity($event)
      }
    }
  }, ["Toggle validity"]), " ", _m(17), " ", _m(18), " ", _h('ui-textbox', {
    directives: [{
      name: "model",
      value: (values.value11),
      expression: "values.value11"
    }],
    attrs: {
      "label": "Username",
      "name": "username",
      "type": "text",
      "placeholder": "Enter a username",
      "icon": "person",
      "max-length": 16,
      "validation-rules": "min:8|max:16",
      "help-text": "Pick a unique username, minimum 8 characters, maximum 16 characters"
    },
    domProps: {
      "value": (values.value11)
    },
    on: {
      "input": function($event) {
        values.value11 = $event
      }
    }
  }), " ", _m(19), " ", _m(20), " ", _h('ui-textbox', {
    directives: [{
      name: "model",
      value: (values.value12),
      expression: "values.value12"
    }],
    attrs: {
      "label": "Email",
      "name": "email",
      "type": "email",
      "placeholder": "Enter your email",
      "help-text": "If you have multiple email addresses, enter the one you use most often",
      "validation-rules": "required|email|min:10|max:64",
      "validate-on-blur": "",
      "autocomplete": "off"
    },
    domProps: {
      "value": (values.value12)
    },
    on: {
      "input": function($event) {
        values.value12 = $event
      }
    }
  }), " ", _m(21), " ", _m(22), " ", _h('ui-textbox', {
    directives: [{
      name: "model",
      value: (values.value13),
      expression: "values.value13"
    }],
    attrs: {
      "label": "Email",
      "name": "email",
      "type": "text",
      "placeholder": "Enter your email",
      "help-text": "If you have multiple email addresses, enter the one you use most often",
      "validation-rules": "required|email",
      "autocomplete": "off",
      "validation-messages": validationErrorMessages
    },
    domProps: {
      "value": (values.value13)
    },
    on: {
      "input": function($event) {
        values.value13 = $event
      }
    }
  }), " ", _m(23), " ", _m(24), " ", _h('ui-textbox', {
    directives: [{
      name: "model",
      value: (values.value14),
      expression: "values.value14"
    }],
    attrs: {
      "label": "Number of Cats",
      "name": "number_of_cats",
      "type": "number",
      "placeholder": "Enter number of cats",
      "min": 0,
      "max": 99,
      "help-text": "The ideal number of cats any one person should own, minimum 0, maximum 99",
      "validation-rules": "numeric|min:0|max:99"
    },
    domProps: {
      "value": (values.value14)
    },
    on: {
      "input": function($event) {
        values.value14 = _n($event)
      }
    }
  }), " ", _m(25), " ", _h('ui-textbox', {
    directives: [{
      name: "model",
      value: (values.value15),
      expression: "values.value15"
    }],
    attrs: {
      "label": "Short bio",
      "name": "short_bio",
      "multi-line": true,
      "max-length": 256,
      "placeholder": "Introduce yourself in a few words",
      "help-text": "Max 256 characters",
      "validation-rules": "max:256"
    },
    domProps: {
      "value": (values.value15)
    },
    on: {
      "input": function($event) {
        values.value15 = $event
      }
    }
  }), " ", _m(26), " ", _h('ui-textbox', {
    directives: [{
      name: "model",
      value: (values.value16),
      expression: "values.value16"
    }],
    attrs: {
      "label": "Short bio",
      "name": "short_bio",
      "multi-line": true,
      "icon": "face",
      "max-length": 256,
      "placeholder": "Introduce yourself in a few words",
      "help-text": "Max 256 characters",
      "validation-rules": "max:256"
    },
    domProps: {
      "value": (values.value16)
    },
    on: {
      "input": function($event) {
        values.value16 = $event
      }
    }
  }), " ", _h('ui-button', {
    staticClass: "m-t-24",
    nativeOn: {
      "click": function($event) {
        resetFields($event)
      }
    }
  }, ["Reset all fields"])]), " ", _m(27), " ", _h('ui-tabs', {
    attrs: {
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Props"
    }
  }, [_m(28), "\n\n            * Required prop\n        "]), " ", _h('ui-tab', {
    attrs: {
      "header": "Events"
    }
  }, [_m(29)])])])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "section-heading"
  }, ["\n        UiTextbox ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiTextbox.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('p', ["UiTextbox is a versatile text input component that can perform validation and show errors. It supports hover, focus, active and disabled states."])
}},function (){with(this) {
  return _h('p', ["A label can be shown above the input as well as help text below the input. UiTextbox can show an icon to the left or right of the input. It can also show a counter of the number of characters entered."])
}},function (){with(this) {
  return _h('p', ["UiTextbox validation rules are written declaratively and validation is powered by ", _h('a', {
    attrs: {
      "href": "https://github.com/skaterdav85/validatorjs",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["validatorjs"]), ". If validation fails, an error message is shown below the input. Error messages can be customized."])
}},function (){with(this) {
  return _h('p', ["The validation state can be set programmatically from outside the component using an event."])
}},function (){with(this) {
  return _h('h3', ["\n        Examples ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiTextboxDocs.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('h4', ["Default"])
}},function (){with(this) {
  return _h('h4', ["Disabled"])
}},function (){with(this) {
  return _h('h4', ["With default value"])
}},function (){with(this) {
  return _h('h4', ["With default value, disabled"])
}},function (){with(this) {
  return _h('h4', ["With help text"])
}},function (){with(this) {
  return _h('h4', ["With icon"])
}},function (){with(this) {
  return _h('h4', ["With icon, no label"])
}},function (){with(this) {
  return _h('h4', ["With icon (right) and help text"])
}},function (){with(this) {
  return _h('h4', ["With validation"])
}},function (){with(this) {
  return _h('p', ["Validation rules: ", _h('code', ["\"required\""])])
}},function (){with(this) {
  return _h('h4', ["Set validation state externally"])
}},function (){with(this) {
  return _h('h4', ["With validation and counter (max length)"])
}},function (){with(this) {
  return _h('p', ["Validation rules: ", _h('code', ["\"min:8|max:16\""])])
}},function (){with(this) {
  return _h('h4', ["With multiple validation rules, validate on blur"])
}},function (){with(this) {
  return _h('p', ["Validation rules: ", _h('code', ["\"required|email|min:10|max:64\""])])
}},function (){with(this) {
  return _h('h4', ["With custom validation messages"])
}},function (){with(this) {
  return _h('p', ["Validation rules: ", _h('code', ["\"required|email\""])])
}},function (){with(this) {
  return _h('h4', ["Number Input"])
}},function (){with(this) {
  return _h('p', ["Validation rules: ", _h('code', ["\"numeric|min:0|max:99\""])])
}},function (){with(this) {
  return _h('h4', ["Multi-line input (textarea)"])
}},function (){with(this) {
  return _h('h4', ["Multi-line input (textarea) with icon"])
}},function (){with(this) {
  return _h('h3', ["API"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Binding"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["id"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["A unique identifier for the input."]), " ", _h('p', ["Applied as the ", _h('code', ["id"]), " attribute of the ", _h('code', ["<input>"]), " and used when targeting a specific input for reset."])])]), " ", _h('tr', [_h('td', ["name *"]), " ", _h('td', ["String"]), " ", _h('td', ["(required)"]), " ", _h('td'), " ", _h('td', [_h('p', ["The ", _h('code', ["name"]), " attribute of the ", _h('code', ["<input>"]), "."]), " ", _h('p', ["Used when generating validation error messages. A name with multiple words should be written in ", _h('code', ["snake_case"]), "."])])]), " ", _h('tr', [_h('td', ["value"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td', ["Two-way"]), " ", _h('td', ["The model that the input value syncs to."])]), " ", _h('tr', [_h('td', ["type"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"text\""])]), " ", _h('td'), " ", _h('td', [_h('p', ["The ", _h('code', ["type"]), " attribute of the ", _h('code', ["<input>"]), "."]), " ", _h('p', ["Supported values are ", _h('code', ["text"]), ", ", _h('code', ["search"]), ", ", _h('code', ["email"]), ", ", _h('code', ["url"]), ", ", _h('code', ["tel"]), ", and ", _h('code', ["number"]), "."]), " ", _h('p', ["The ", _h('code', ["number"]), " type causes the input value to be written to the model as a Number instead of a String."])])]), " ", _h('tr', [_h('td', ["placeholder"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', ["The ", _h('code', ["placeholder"]), " attribute of the ", _h('code', ["<input>"]), "."])]), " ", _h('tr', [_h('td', ["multiLine"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the input is a ", _h('code', ["<textarea>"]), "."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to render a textarea."])])]), " ", _h('tr', [_h('td', ["valid"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["true"])]), " ", _h('td', ["Two-way"]), " ", _h('td', [_h('p', ["Shows whether or not the input is valid."]), " ", _h('p', ["Only applicable when the ", _h('code', ["validationRules"]), " prop is provided."])])]), " ", _h('tr', [_h('td', ["dirty"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', ["Two-way"]), " ", _h('td', ["Shows whether or not the input has been touched (clicked or focussed) by the user."])]), " ", _h('tr', [_h('td', ["rows"]), " ", _h('td', ["Number"]), " ", _h('td', [_h('code', ["2"])]), " ", _h('td'), " ", _h('td', [_h('p', ["The ", _h('code', ["rows"]), " attribute of the ", _h('code', ["<textarea>"]), "."]), " ", _h('p', ["Only applicable when the ", _h('code', ["multiLine"]), " prop is ", _h('code', ["true"]), "."])])]), " ", _h('tr', [_h('td', ["maxLength"]), " ", _h('td', ["Number"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["The maximum allowed length of input. Set this prop to show a counter below the input."]), " ", _h('p', [_h('b', ["Note"]), ": this prop doesn't prevent the user from going over the maximum length, and it also doesn't affect validation."]), " ", _h('p', ["To add validation as well, use the ", _h('code', ["max"]), " validation rule."]), " ", _h('p', ["Example props for an input whose max length is 16 characters, showing a counter with validation:"]), " ", _h('p', [_h('code', [":max-length=\"16\" validation-rules=\"max:16\""])])])]), " ", _h('tr', [_h('td', {
    staticClass: "new-prop"
  }, ["autofocus"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the input should automatically receive focus."]), " ", _h('p', ["This only works on initial page load or the first time the element is added to the DOM and not on subsequent renders. Also, only one input element should have this prop set to ", _h('code', ["true"]), " in the document for the autofocus to work properly."])])]), " ", _h('tr', [_h('td', ["autocomplete"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["Determines the type of autocomplete suggestions the browser should offer for the input."]), " ", _h('p', ["See ", _h('a', {
    attrs: {
      "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autocomplete",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["here for more info"]), "."]), " ", _h('p', ["Set to ", _h('code', ["\"off\""]), " to disable browser autocomplete."])])]), " ", _h('tr', [_h('td', ["min"]), " ", _h('td', ["Number"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["The ", _h('code', ["min"]), " attribute of the ", _h('code', ["<input>"]), "."]), " ", _h('p', ["Only applicable when the ", _h('code', ["type"]), " prop is ", _h('code', ["\"number\""]), "."])])]), " ", _h('tr', [_h('td', ["max"]), " ", _h('td', ["Number"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["The ", _h('code', ["max"]), " attribute of the ", _h('code', ["<input>"]), "."]), " ", _h('p', ["Only applicable when the ", _h('code', ["type"]), " prop is ", _h('code', ["\"number\""]), "."])])]), " ", _h('tr', [_h('td', ["step"]), " ", _h('td', ["Number/String"]), " ", _h('td', [_h('code', ["\"any\""])]), " ", _h('td'), " ", _h('td', [_h('p', ["The ", _h('code', ["step"]), " attribute of the ", _h('code', ["<input>"]), "."]), " ", _h('p', ["Only applicable when the ", _h('code', ["type"]), " prop is ", _h('code', ["\"number\""]), "."])])]), " ", _h('tr', [_h('td', ["icon"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["The input icon. Can be any of the ", _h('a', {
    attrs: {
      "href": "https://design.google.com/icons/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Material Icons"]), "."]), " ", _h('p', ["Note that this should be the icon codepoint if you want to support IE9."])])]), " ", _h('tr', [_h('td', ["iconRight"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the input icon is shown to the right."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to show the icon to the right of the input."])])]), " ", _h('tr', [_h('td', ["label"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', ["The label shown above the input (text only)."])]), " ", _h('tr', [_h('td', ["hideLabel"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the input label is hidden."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to hide the label."])])]), " ", _h('tr', [_h('td', ["helpText"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["The help text (hint) shown to the user below the input."]), " ", _h('p', ["Extra space is reserved under the input for the help text, validation errors and the input length counter. If none of these are enabled, this space is collapsed."])])]), " ", _h('tr', [_h('td', ["hideValidationErrors"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not validation errors for the input are hidden."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to hide all validation errors."]), " ", _h('p', ["This prop is only applicable when the ", _h('code', ["validationRules"]), " prop is present."])])]), " ", _h('tr', [_h('td', ["validationRules"]), " ", _h('td', ["String or Array"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["An array of rules or a pipe ", _h('code', ["|"]), " separated list of rules for validating the input."]), " ", _h('p', ["Can be any of the rules supported by ", _h('a', {
    attrs: {
      "href": "https://github.com/skaterdav85/validatorjs#available-rules",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["validatorjs Validation Rules"]), ", ", _h('b', ["except"]), " the ones that involve multiple fields."]), " ", _h('p', ["Example to validate a required email field: ", _h('code', ["validation-rules=\"required|email\""]), "."]), " ", _h('p', ["These rules will be applied and validation will occur automatically when the input is changed or blurred. The error message of the first failing validation rule will then be shown to the user."]), " ", _h('p', ["See the ", _h('code', ["validationMessages"]), " prop for customizing the error message."])])]), " ", _h('tr', [_h('td', ["validationMessages"]), " ", _h('td', ["Object"]), " ", _h('td'), " ", _h('td'), " ", _h('td', [_h('p', ["An object whose keys are the validation rules and whose values are the error messages for those rules."]), " ", _h('p', ["See ", _h('a', {
    attrs: {
      "href": "https://github.com/skaterdav85/validatorjs#custom-error-messages",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["validatorjs Custom Error Messages"]), " for more details."])])]), " ", _h('tr', [_h('td', ["validateOnBlur"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the input should be validated only when it is blurred."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to perform validation only on blur."])])]), " ", _h('tr', [_h('td', ["trimValue"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["true"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the input value should be trimmed before it is written to the model."]), " ", _h('p', ["Set to ", _h('code', ["false"]), " to not trim the value. Not applicable when the ", _h('code', ["type"]), " prop is ", _h('code', ["\"number\""]), "."])])]), " ", _h('tr', [_h('td', ["debounce"]), " ", _h('td', ["Number"]), " ", _h('td'), " ", _h('td'), " ", _h('td', ["Sets the minimum delay (in milliseconds) after each keystroke before the input’s value is synced to the model."])]), " ", _h('tr', [_h('td', ["disabled"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td'), " ", _h('td', [_h('p', ["Determines whether or not the input is disabled."]), " ", _h('p', ["Set to ", _h('code', ["true"]), " to disable the input."])])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["focussed"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the input is focussed."]), " ", _h('p', ["Listen for it using ", _h('code', ["@focussed"]), "."])])]), " ", _h('tr', [_h('td', ["blurred"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the input loses focus."]), " ", _h('p', ["Listen for it using ", _h('code', ["@blurred"]), "."])])]), " ", _h('tr', [_h('td', ["changed"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the input is changed."]), " ", _h('p', ["Listen for it using ", _h('code', ["@changed"]), "."])])]), " ", _h('tr', [_h('td', ["keydown"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when a key is pressed in the input."]), " ", _h('p', ["An Event object is passed as the argument to the handler."]), " ", _h('p', ["Listen for it using ", _h('code', ["@keydown"]), "."])])]), " ", _h('tr', [_h('td', {
    staticClass: "no-wrap"
  }, ["keydown-enter"]), " ", _h('td', ["Dispatched"]), " ", _h('td', [_h('p', ["Dispatched when the ", _h('kbd', ["Enter"]), " key is pressed in the input."]), " ", _h('p', ["An event object is passed as the argument to the handler."]), " ", _h('p', ["Listen for it using ", _h('code', ["@keydown-enter"]), "."])])]), " ", _h('tr', [_h('td', {
    staticClass: "no-wrap new-prop"
  }, ["ui-input::set-validity"]), " ", _h('td', ["Received"]), " ", _h('td', [_h('p', ["Trigger this event to programmatically change the input validation state."]), " ", _h('p', ["The handler accepts the following arguments:"]), " ", _h('ul', [_h('li', [_h('code', ["valid"]), ": A Boolean indicating whether or not the input is valid"]), " ", _h('li', [_h('code', ["error"]), ": An optional string to set as the new error message"]), " ", _h('li', [_h('code', ["id"]), ": The id of the specific input whose validity you want to change"])])])]), " ", _h('tr', [_h('td', {
    staticClass: "no-wrap"
  }, ["ui-input::reset"]), " ", _h('td', ["Received"]), " ", _h('td', [_h('p', ["Trigger this event to reset the input to its initial state."]), " ", _h('p', ["This event resets the ", _h('code', ["value"]), ", ", _h('code', ["valid"]), " and ", _h('code', ["dirty"]), " props."]), " ", _h('p', ["You can optionally pass in an ", _h('code', ["id"]), " to reset only a specific input (whose ", _h('code', ["id"]), " you have set)."])])])])])])
}}]}

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiToolbar_vue__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_UiToolbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_UiToolbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiIconButton_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_UiIconButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_UiIconButton_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ exports["default"] = {
    data: function data() {
        return {
            menu: [{
                id: 'settings',
                text: 'Settings'
            }, {
                id: 'about',
                text: 'About'
            }, {
                id: 'help',
                text: 'Help'
            }]
        };
    },


    components: {
        UiTab: __WEBPACK_IMPORTED_MODULE_0__src_UiTab_vue___default.a,
        UiTabs: __WEBPACK_IMPORTED_MODULE_1__src_UiTabs_vue___default.a,
        UiToolbar: __WEBPACK_IMPORTED_MODULE_2__src_UiToolbar_vue___default.a,
        UiIconButton: __WEBPACK_IMPORTED_MODULE_3__src_UiIconButton_vue___default.a
    }
};

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(215)

/* template */
var __vue_template__ = __webpack_require__(217)
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
if (__vue_options__.functional) {console.error("[vue-loader] UiToolbarDocs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 217 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('section', {
    staticClass: "section section-ui-toolbar"
  }, [_m(0), " ", _m(1), " ", _m(2), " ", _m(3), " ", _h('div', {
    staticClass: "demo"
  }, [_m(4), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-toolbar', {
    attrs: {
      "title": "Inbox"
    }
  }, [_h('div', {
    slot: "actions"
  }, [_h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "black",
      "icon": "arrow_back"
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "black",
      "icon": "star_border"
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "black",
      "icon": "more_vert",
      "has-dropdown-menu": "",
      "menu-options": menu,
      "dropdown-position": "bottom right"
    }
  })])])]), " ", _m(5), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-toolbar', {
    attrs: {
      "title": "Inbox",
      "flat": ""
    }
  }, [_h('div', {
    slot: "actions"
  }, [_h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "black",
      "icon": "arrow_back"
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "black",
      "icon": "star_border"
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "black",
      "icon": "more_vert",
      "has-dropdown-menu": "",
      "menu-options": menu,
      "dropdown-position": "bottom right"
    }
  })])])]), " ", _m(6), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-toolbar', {
    attrs: {
      "brand": "Mail App",
      "title": "Inbox",
      "show-brand": ""
    }
  }, [_h('div', {
    slot: "actions"
  }, [_h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "black",
      "icon": "arrow_back"
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "black",
      "icon": "star_border"
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "black",
      "icon": "more_vert",
      "has-dropdown-menu": "",
      "menu-options": menu,
      "dropdown-position": "bottom right"
    }
  })])])]), " ", _m(7), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-toolbar', {
    attrs: {
      "type": "colored",
      "text-color": "white",
      "title": "Inbox"
    }
  }, [_h('div', {
    slot: "actions"
  }, [_h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "white",
      "icon": "arrow_back"
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "white",
      "icon": "star_border"
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "white",
      "icon": "more_vert",
      "has-dropdown-menu": "",
      "menu-options": menu,
      "dropdown-position": "bottom right"
    }
  })])])]), " ", _m(8), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-toolbar', {
    attrs: {
      "type": "colored",
      "text-color": "white",
      "flat": "",
      "loading": ""
    }
  }, [_h('div', {
    slot: "actions"
  }, [_h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "white",
      "icon": "arrow_back"
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "white",
      "icon": "star_border"
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "white",
      "icon": "more_vert",
      "has-dropdown-menu": "",
      "menu-options": menu,
      "dropdown-position": "bottom right"
    }
  })]), "\n\n                Inbox\n            "])]), " ", _m(9), " ", _h('div', {
    staticClass: "group"
  }, [_h('ui-toolbar', {
    attrs: {
      "type": "colored",
      "text-color": "white",
      "brand": "Mail App",
      "title": "Inbox",
      "show-brand": ""
    }
  }, [_h('div', {
    slot: "actions"
  }, [_h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "white",
      "icon": "arrow_back"
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "white",
      "icon": "star_border"
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "white",
      "icon": "more_vert",
      "has-dropdown-menu": "",
      "menu-options": menu,
      "dropdown-position": "bottom right"
    }
  })])])]), " ", _m(10), " ", _h('div', {
    staticClass: "group photo-cover photo-1"
  }, [_h('ui-toolbar', {
    attrs: {
      "type": "clear",
      "text-color": "white",
      "brand": "Photo App",
      "title": "Gallery",
      "show-brand": ""
    }
  }, [_h('div', {
    slot: "actions"
  }, [_h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "white",
      "icon": "arrow_back"
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "white",
      "icon": "star_border"
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "white",
      "icon": "more_vert",
      "has-dropdown-menu": "",
      "menu-options": menu,
      "dropdown-position": "bottom right"
    }
  })])])]), " ", _m(11), " ", _h('div', {
    staticClass: "group photo-cover photo-2"
  }, [_h('ui-toolbar', {
    attrs: {
      "type": "clear",
      "brand": "Photo App",
      "title": "Gallery",
      "show-brand": "",
      "loading": "",
      "preloader-top": ""
    }
  }, [_h('div', {
    slot: "actions"
  }, [_h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "black",
      "icon": "arrow_back"
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "black",
      "icon": "star_border"
    }
  }), " ", _h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "black",
      "icon": "more_vert",
      "has-dropdown-menu": "",
      "menu-options": menu,
      "dropdown-position": "bottom right"
    }
  })])])])]), " ", _m(12), " ", _h('div', {
    staticClass: "group toolbar-with-tabs"
  }, [_h('ui-toolbar', {
    attrs: {
      "type": "colored",
      "text-color": "white",
      "brand": "Bookish",
      "title": "Library",
      "show-brand": "",
      "flat": ""
    }
  }, [_h('div', {
    slot: "actions"
  }, [_h('ui-icon-button', {
    attrs: {
      "type": "clear",
      "color": "white",
      "icon": "more_vert",
      "has-dropdown-menu": "",
      "menu-options": menu,
      "dropdown-position": "bottom right"
    }
  })])]), " ", _h('ui-tabs', {
    attrs: {
      "type": "icon-and-text",
      "background-color": "primary",
      "text-color": "white",
      "text-color-active": "white",
      "indicator-color": "white",
      "fullwidth": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Books",
      "icon": "book"
    }
  }, ["\n                    My Books\n                "]), " ", _h('ui-tab', {
    attrs: {
      "header": "Authors",
      "icon": "people"
    }
  }, ["\n                    Authors\n                "]), " ", _h('ui-tab', {
    attrs: {
      "header": "Collections",
      "icon": "collections_bookmark"
    }
  }, ["\n                    My collections\n                "]), " ", _h('ui-tab', {
    attrs: {
      "header": "Favourites",
      "icon": "favorite"
    }
  }, ["\n                    My favourites\n                "])])]), " ", _m(13), " ", _h('ui-tabs', {
    attrs: {
      "raised": ""
    }
  }, [_h('ui-tab', {
    attrs: {
      "header": "Props"
    }
  }, [_m(14)]), " ", _h('ui-tab', {
    attrs: {
      "header": "Slots"
    }
  }, [_m(15)]), " ", _h('ui-tab', {
    attrs: {
      "header": "Events"
    }
  }, [_m(16)])])])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "section-heading"
  }, ["\n        UiToolbar ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiToolbar.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('p', ["UiToolbar components shows a toolbar with a navigation icon, branding, a title as well as actions."])
}},function (){with(this) {
  return _h('p', ["Visually, UiToolbar has two types: ", _h('code', ["default"]), " and ", _h('code', ["colored"]), ". The toolbar can be raised (with a drop shadow) or flat. You can also customize the navigation icon as well as the brand, title and actions using slots."])
}},function (){with(this) {
  return _h('h3', ["\n        Examples ", _h('a', {
    staticClass: "view-source-link",
    attrs: {
      "href": "https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiToolbarDocs.vue",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["View Source"])])
}},function (){with(this) {
  return _h('h4', ["Default"])
}},function (){with(this) {
  return _h('h4', ["Default Flat"])
}},function (){with(this) {
  return _h('h4', ["Default with Brand"])
}},function (){with(this) {
  return _h('h4', ["Colored"])
}},function (){with(this) {
  return _h('h4', ["Colored Flat (showing linear progress)"])
}},function (){with(this) {
  return _h('h4', ["Colored with Brand"])
}},function (){with(this) {
  return _h('h4', ["Clear, Text White"])
}},function (){with(this) {
  return _h('h4', ["Clear, Text Black (showing linear progress on top)"])
}},function (){with(this) {
  return _h('h4', ["With Tabs"])
}},function (){with(this) {
  return _h('h3', ["API"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["type"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"default\""])]), " ", _h('td', ["The type of toolbar (determines the background color). One of ", _h('code', ["default"]), " or ", _h('code', ["colored"]), "."])]), " ", _h('tr', [_h('td', ["textColor"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"black\""])]), " ", _h('td', ["The toolbar text and icon color. One of ", _h('code', ["black"]), " or ", _h('code', ["white"]), "."])]), " ", _h('tr', [_h('td', ["title"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td', ["The toolbar title (text only). To use HTML in the title, use the default slot."])]), " ", _h('tr', [_h('td', ["brand"]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td', ["The brand (text only). To use HTML in the brand, use the ", _h('code', ["brand"]), " slot."])]), " ", _h('tr', [_h('td', ["showBrand"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', ["Determines whether or not the brand is shown. Set to ", _h('code', ["true"]), " to show the brand."])]), " ", _h('tr', [_h('td', ["showBrandDivider"]), " ", _h('td', ["Boolean"]), " ", _h('td'), " ", _h('td', ["Determines whether or not the divider between the brand and title is shown. By default, if the brand is shown, the divider is also shown, otherwise it is hidden."])]), " ", _h('tr', [_h('td', ["navIcon"]), " ", _h('td', ["String"]), " ", _h('td', [_h('code', ["\"menu\""])]), " ", _h('td', ["The toolbar navigation icon. Can be any of the ", _h('a', {
    attrs: {
      "href": "https://design.google.com/icons/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, ["Material Icons"]), ". Note that this should be the icon codepoint if you want to support IE9."])]), " ", _h('tr', [_h('td', ["hideNavIcon"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', ["Determines whether or not the navigation icon is hidden. Set to ", _h('code', ["true"]), " to hide the nav icon."])]), " ", _h('tr', [_h('td', ["flat"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', ["Determines whether or not the toolbar is flat (i.e. has no drop shadow). Set to ", _h('code', ["true"]), " for a flat toolbar."])]), " ", _h('tr', [_h('td', ["preloaderTop"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', ["Determines whether or not the preloader is positioned at the top of the toolbar. Set to ", _h('code', ["true"]), " for a top-positioned preloader."]), _h('td')]), " ", _h('tr', [_h('td', ["loading"]), " ", _h('td', ["Boolean"]), " ", _h('td', [_h('code', ["false"])]), " ", _h('td', ["Determines whether or not the preloader is shown. Set to ", _h('code', ["true"]), " to show the preloader."])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', ["(default)"]), " ", _h('td', ["The default slot holds the toolbar title and can contain HTML."])]), " ", _h('tr', [_h('td', ["brand"]), " ", _h('td', ["The ", _h('code', ["brand"]), " slot holds the toolbar brand and can contain HTML."])]), " ", _h('tr', [_h('td', ["actions"]), " ", _h('td', ["The ", _h('code', ["actions"]), " slot holds the toolbar actions and can contain HTML."])])])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "table-responsive"
  }, [_h('table', {
    staticClass: "table"
  }, [_h('thead', [_h('th', ["Name"]), " ", _h('th', ["Type"]), " ", _h('th', ["Description"])]), " ", _h('tbody', [_h('tr', [_h('td', {
    staticClass: "no-wrap"
  }, ["nav-icon-clicked"]), " ", _h('td', ["Dispatched"]), " ", _h('td', ["Dispatched when the navigation icon is clicked. Listen for it using ", _h('code', ["@nav-icon-clicked"]), "."])])])])])
}}]}

/***/ }
/******/ ]);