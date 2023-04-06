/*!
 * Keen UI v1.4.0 (https://github.com/JosephusPaye/keen-ui)
 * (c) 2023 Josephus Paye II
 * Released under the MIT License.
 */
(function(global2, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.KeenUI = {}, global2.Vue));
})(this, function(exports2, vue) {
  "use strict";
  document.addEventListener("DOMContentLoaded", () => {
    let hadKeyboardEvent = false;
    const keyboardModalityWhitelist = [
      "input:not([type])",
      "input[type=text]",
      "input[type=number]",
      "input[type=date]",
      "input[type=time]",
      "input[type=datetime]",
      "textarea",
      "[role=textbox]",
      "[supports-modality=keyboard]"
    ].join(",");
    let isHandlingKeyboardThrottle;
    const matcher = (() => {
      const el = document.body;
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
      console.error("Couldn't find any matchesSelector method on document.body.");
    })();
    const disableFocusRingByDefault = function() {
      const css = "body:not([modality=keyboard]) :focus { outline: none; }";
      const head = document.head || document.getElementsByTagName("head")[0];
      const style = document.createElement("style");
      style.type = "text/css";
      style.id = "disable-focus-ring";
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
      head.insertBefore(style, head.firstChild);
    };
    const focusTriggersKeyboardModality = function(el) {
      let triggers = false;
      if (matcher) {
        triggers = matcher.call(el, keyboardModalityWhitelist) && matcher.call(el, ":not([readonly])");
      }
      return triggers;
    };
    disableFocusRingByDefault();
    document.body.addEventListener("keydown", () => {
      hadKeyboardEvent = true;
      if (isHandlingKeyboardThrottle) {
        clearTimeout(isHandlingKeyboardThrottle);
      }
      isHandlingKeyboardThrottle = setTimeout(() => {
        hadKeyboardEvent = false;
      }, 100);
    }, true);
    document.body.addEventListener("focus", (e) => {
      if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
        document.body.setAttribute("modality", "keyboard");
      }
    }, true);
    document.body.addEventListener("blur", () => {
      document.body.removeAttribute("modality");
    }, true);
  });
  var isMergeableObject = function isMergeableObject2(value) {
    return isNonNullObject(value) && !isSpecial(value);
  };
  function isNonNullObject(value) {
    return !!value && typeof value === "object";
  }
  function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
  }
  var canUseSymbol = typeof Symbol === "function" && Symbol.for;
  var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
  function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
  }
  function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
  }
  function cloneUnlessOtherwiseSpecified(value, optionsArgument) {
    var clone2 = !optionsArgument || optionsArgument.clone !== false;
    return clone2 && isMergeableObject(value) ? deepmerge(emptyTarget(value), value, optionsArgument) : value;
  }
  function defaultArrayMerge(target, source, optionsArgument) {
    return target.concat(source).map(function(element) {
      return cloneUnlessOtherwiseSpecified(element, optionsArgument);
    });
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
    return destination;
  }
  function deepmerge(target, source, optionsArgument) {
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
    if (!sourceAndTargetTypesMatch) {
      return cloneUnlessOtherwiseSpecified(source, optionsArgument);
    } else if (sourceIsArray) {
      var arrayMerge = options.arrayMerge || defaultArrayMerge;
      return arrayMerge(target, source, optionsArgument);
    } else {
      return mergeObject(target, source, optionsArgument);
    }
  }
  deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array)) {
      throw new Error("first argument should be an array");
    }
    return array.reduce(function(prev, next) {
      return deepmerge(prev, next, optionsArgument);
    }, {});
  };
  var deepmerge_1 = deepmerge;
  function configure(Component, props) {
    Object.keys(props).forEach((propName) => {
      if (Component.props[propName] === void 0) {
        return;
      }
      const defaultValue = Component.props[propName].default;
      if (typeof defaultValue === "object") {
        Component.props[propName].default = deepmerge_1(defaultValue, props[propName]);
        return;
      }
      Component.props[propName].default = props[propName];
    });
  }
  function isObject(obj) {
    return obj !== null && typeof obj === "object";
  }
  function looseEqual(a, b) {
    return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
  }
  function looseIndexOf(arr, val) {
    for (let i2 = 0; i2 < arr.length; i2++) {
      if (looseEqual(arr[i2], val)) {
        return i2;
      }
    }
    return -1;
  }
  function startsWith(string, query, position = 0) {
    return string.substr(position, query.length) === query;
  }
  const UiIcon_vue_vue_type_style_index_0_lang = "";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$F = {
    name: "UiIcon",
    props: {
      icon: String,
      iconSet: {
        type: String,
        default: "material-icons"
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
  const _hoisted_1$D = ["aria-label"];
  const _hoisted_2$w = {
    key: 0,
    class: "ui-icon__svg"
  };
  const _hoisted_3$s = ["xlink:href"];
  function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("span", {
      class: vue.normalizeClass(["ui-icon", [$props.iconSet, $props.icon]]),
      "aria-label": $props.ariaLabel
    }, [
      $props.useSvg ? (vue.openBlock(), vue.createElementBlock("svg", _hoisted_2$w, [
        vue.createElementVNode("use", {
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          "xlink:href": "#" + $props.icon
        }, null, 8, _hoisted_3$s)
      ])) : vue.renderSlot(_ctx.$slots, "default", { key: 1 }, () => [
        vue.createTextVNode(vue.toDisplayString($props.removeText ? null : $props.icon), 1)
      ])
    ], 10, _hoisted_1$D);
  }
  const UiIcon = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$F], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiIcon.vue"]]);
  const trim = /^\s+|\s+$/g;
  const whitespace = /\s+/g;
  function interpret(input) {
    return typeof input === "string" ? input.replace(trim, "").split(whitespace) : input;
  }
  function classes(el) {
    if (isElement(el)) {
      return (el.getAttribute("class") || "").replace(trim, "").split(whitespace);
    }
    return [];
  }
  function set(el, input) {
    if (isElement(el)) {
      el.setAttribute("class", interpret(input).join(" "));
    }
  }
  function add(el, input) {
    const current = remove(el, input);
    const values = interpret(input);
    current.push.apply(current, values);
    set(el, current);
    return current;
  }
  function remove(el, input) {
    const current = classes(el);
    const values = interpret(input);
    values.forEach((value) => {
      const i2 = current.indexOf(value);
      if (i2 !== -1) {
        current.splice(i2, 1);
      }
    });
    set(el, current);
    return current;
  }
  function contains(el, input) {
    const current = classes(el);
    const values = interpret(input);
    return values.every((value) => {
      return current.indexOf(value) !== -1;
    });
  }
  function isElement(o) {
    const elementObjects = typeof HTMLElement === "object";
    return elementObjects ? o instanceof HTMLElement : isElementObject(o);
  }
  function isElementObject(o) {
    return o && typeof o === "object" && typeof o.nodeName === "string" && o.nodeType === 1;
  }
  const classlist = {
    add,
    remove,
    contains,
    has: contains,
    set,
    get: classes
  };
  function validate(ref, warning) {
    const isValid = ref instanceof Element || ref && ref._isVue || typeof ref === "string";
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
    } else if (typeof ref === "string") {
      return document.querySelector(ref);
    }
    return fallback;
  }
  const elementRef = {
    validate,
    resolve
  };
  const UiRippleInk_vue_vue_type_style_index_0_lang = "";
  const startRipple = function(eventType, event) {
    let holder = event.currentTarget || event.target;
    if (holder && !classlist.has(holder, "ui-ripple-ink")) {
      holder = holder.querySelector(".ui-ripple-ink");
    }
    if (!holder) {
      return;
    }
    const prev = holder.getAttribute("data-ui-event");
    if (prev && prev !== eventType) {
      return;
    }
    holder.setAttribute("data-ui-event", eventType);
    const rect = holder.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const ripple = document.createElement("div");
    let max;
    if (rect.width === rect.height) {
      max = rect.width * 1.412;
    } else {
      max = Math.sqrt(rect.width * rect.width + rect.height * rect.height);
    }
    const size = max * 2 + "px";
    ripple.style.width = size;
    ripple.style.height = size;
    ripple.style.marginLeft = -max + x + "px";
    ripple.style.marginTop = -max + y + "px";
    ripple.className = "ui-ripple-ink__ink";
    holder.appendChild(ripple);
    setTimeout(() => {
      classlist.add(ripple, "is-held");
    }, 0);
    const releaseEvent = eventType === "mousedown" ? "mouseup" : "touchend";
    const handleRelease = function() {
      document.removeEventListener(releaseEvent, handleRelease);
      classlist.add(ripple, "is-done");
      const timeout = 650;
      setTimeout(() => {
        holder.removeChild(ripple);
        if (holder.children.length === 0) {
          holder.removeAttribute("data-ui-event");
        }
      }, timeout);
    };
    document.addEventListener(releaseEvent, handleRelease);
  };
  const handleMouseDown = function(e) {
    if (e.button === 0) {
      startRipple(e.type, e);
    }
  };
  const handleTouchStart = function(e) {
    if (e.changedTouches) {
      for (let i2 = 0; i2 < e.changedTouches.length; ++i2) {
        startRipple(e.type, e.changedTouches[i2]);
      }
    }
  };
  const _sfc_main$E = {
    name: "UiRippleInk",
    props: {
      trigger: {
        validator(value) {
          return elementRef.validate(
            value,
            '[UiRippleInk]: Invalid prop: "trigger". Expected Element, VueComponent or CSS selector string.'
          );
        }
      }
    },
    watch: {
      trigger() {
        this.setupRipple();
      }
    },
    created() {
      this.triggerEl = null;
    },
    mounted() {
      this.setupRipple();
    },
    beforeUnmount() {
      this.destroyRipple();
    },
    methods: {
      setupRipple() {
        this.triggerEl = elementRef.resolve(this.trigger, this.$el.parentElement);
        if (!this.triggerEl) {
          console.error("[UiRippleInk]: Trigger element not found.");
          return;
        }
        this.triggerEl.addEventListener("touchstart", handleTouchStart, { passive: true });
        this.triggerEl.addEventListener("mousedown", handleMouseDown);
      },
      destroyRipple() {
        if (!this.triggerEl) {
          return;
        }
        this.triggerEl.removeEventListener("mousedown", handleMouseDown);
        this.triggerEl.removeEventListener("touchstart", handleTouchStart);
      }
    }
  };
  const _hoisted_1$C = { class: "ui-ripple-ink" };
  function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$C);
  }
  const UiRippleInk = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$E], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiRippleInk.vue"]]);
  const UiCloseButton_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$D = {
    name: "UiCloseButton",
    components: {
      UiIcon,
      UiRippleInk
    },
    props: {
      size: {
        type: String,
        default: "normal"
      },
      color: {
        type: String,
        default: "black"
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
      classes() {
        return [
          `ui-close-button--size-${this.size}`,
          `ui-close-button--color-${this.color}`,
          { "is-disabled": this.disabled }
        ];
      }
    }
  };
  const _hoisted_1$B = ["disabled"];
  const _hoisted_2$v = { class: "ui-close-button__icon" };
  const _hoisted_3$r = /* @__PURE__ */ vue.createElementVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ vue.createElementVNode("path", { d: "M18.984 6.422L13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z" })
  ], -1);
  const _hoisted_4$i = /* @__PURE__ */ vue.createElementVNode("span", { class: "ui-close-button__focus-ring" }, null, -1);
  function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ui_icon = vue.resolveComponent("ui-icon");
    const _component_ui_ripple_ink = vue.resolveComponent("ui-ripple-ink");
    return vue.openBlock(), vue.createElementBlock("button", {
      "aria-label": "Close",
      class: vue.normalizeClass(["ui-close-button", $options.classes]),
      type: "button",
      disabled: $props.disabled
    }, [
      vue.createElementVNode("div", _hoisted_2$v, [
        vue.createVNode(_component_ui_icon, null, {
          default: vue.withCtx(() => [
            _hoisted_3$r
          ]),
          _: 1
        })
      ]),
      _hoisted_4$i,
      !$props.disableRipple && !$props.disabled ? (vue.openBlock(), vue.createBlock(_component_ui_ripple_ink, { key: 0 })) : vue.createCommentVNode("v-if", true)
    ], 10, _hoisted_1$B);
  }
  const UiCloseButton = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$D], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiCloseButton.vue"]]);
  const UiAlert_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$C = {
    name: "UiAlert",
    components: {
      UiCloseButton,
      UiIcon
    },
    props: {
      type: {
        type: String,
        default: "info"
      },
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
    emits: ["dismiss"],
    computed: {
      classes() {
        return [`ui-alert--type-${this.type}`, { "has-no-transition": this.disableAnimation }];
      }
    },
    methods: {
      dismissAlert() {
        this.$emit("dismiss");
      }
    }
  };
  const _hoisted_1$A = { class: "ui-alert__body" };
  const _hoisted_2$u = {
    key: 0,
    class: "ui-alert__icon"
  };
  const _hoisted_3$q = /* @__PURE__ */ vue.createElementVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ vue.createElementVNode("path", { d: "M12.984 9V6.984h-1.97V9h1.97zm0 8.016v-6h-1.97v6h1.97zm-.984-15c5.53 0 9.984 4.453 9.984 9.984S17.53 21.984 12 21.984 2.016 17.53 2.016 12 6.47 2.016 12 2.016z" })
  ], -1);
  const _hoisted_4$h = /* @__PURE__ */ vue.createElementVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ vue.createElementVNode("path", { d: "M9.984 17.016l9-9-1.406-1.453-7.594 7.594-3.563-3.563L5.016 12zm2.016-15c5.53 0 9.984 4.453 9.984 9.984S17.53 21.984 12 21.984 2.016 17.53 2.016 12 6.47 2.016 12 2.016z" })
  ], -1);
  const _hoisted_5$f = /* @__PURE__ */ vue.createElementVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ vue.createElementVNode("path", { d: "M12.984 14.016v-4.03h-1.97v4.03h1.97zm0 3.984v-2.016h-1.97V18h1.97zm-12 3L12 2.016 23.016 21H.986z" })
  ], -1);
  const _hoisted_6$b = /* @__PURE__ */ vue.createElementVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ vue.createElementVNode("path", { d: "M12.984 12.984v-6h-1.97v6h1.97zm0 4.032V15h-1.97v2.016h1.97zm-.984-15c5.53 0 9.984 4.453 9.984 9.984S17.53 21.984 12 21.984 2.016 17.53 2.016 12 6.47 2.016 12 2.016z" })
  ], -1);
  const _hoisted_7$5 = { class: "ui-alert__content" };
  const _hoisted_8$4 = { class: "ui-alert__dismiss-button" };
  function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ui_icon = vue.resolveComponent("ui-icon");
    const _component_ui_close_button = vue.resolveComponent("ui-close-button");
    return vue.openBlock(), vue.createBlock(vue.Transition, {
      name: $props.disableAnimation ? null : "ui-alert--transition-toggle"
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["ui-alert", $options.classes]),
          role: "alert"
        }, [
          vue.createElementVNode("div", _hoisted_1$A, [
            !$props.removeIcon ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$u, [
              vue.renderSlot(_ctx.$slots, "icon", {}, () => [
                $props.type === "info" ? (vue.openBlock(), vue.createBlock(_component_ui_icon, { key: 0 }, {
                  default: vue.withCtx(() => [
                    _hoisted_3$q
                  ]),
                  _: 1
                })) : vue.createCommentVNode("v-if", true),
                $props.type === "success" ? (vue.openBlock(), vue.createBlock(_component_ui_icon, { key: 1 }, {
                  default: vue.withCtx(() => [
                    _hoisted_4$h
                  ]),
                  _: 1
                })) : vue.createCommentVNode("v-if", true),
                $props.type === "warning" ? (vue.openBlock(), vue.createBlock(_component_ui_icon, { key: 2 }, {
                  default: vue.withCtx(() => [
                    _hoisted_5$f
                  ]),
                  _: 1
                })) : vue.createCommentVNode("v-if", true),
                $props.type === "error" ? (vue.openBlock(), vue.createBlock(_component_ui_icon, { key: 3 }, {
                  default: vue.withCtx(() => [
                    _hoisted_6$b
                  ]),
                  _: 1
                })) : vue.createCommentVNode("v-if", true)
              ])
            ])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("div", _hoisted_7$5, [
              vue.renderSlot(_ctx.$slots, "default")
            ]),
            vue.createElementVNode("div", _hoisted_8$4, [
              $props.dismissible ? (vue.openBlock(), vue.createBlock(_component_ui_close_button, {
                key: 0,
                size: "small",
                onClick: $options.dismissAlert
              }, null, 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
            ])
          ])
        ], 2)
      ]),
      _: 3
    }, 8, ["name"]);
  }
  const UiAlert = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$C], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiAlert.vue"]]);
  const autofocus = {
    mounted(el, { value }) {
      if (value) {
        el.focus();
      }
    }
  };
  const UiAutocompleteSuggestion_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$B = {
    name: "UiAutocompleteSuggestion",
    props: {
      suggestion: {
        type: [String, Object],
        required: true
      },
      type: {
        type: String,
        default: "simple"
      },
      highlighted: {
        type: Boolean,
        default: false
      },
      keys: {
        type: Object,
        default() {
          return {
            label: "label",
            image: "image"
          };
        }
      }
    },
    computed: {
      classes() {
        return [
          "ui-autocomplete-suggestion--type-" + this.type,
          { "is-highlighted": this.highlighted }
        ];
      },
      imageStyle() {
        return { "background-image": "url(" + this.suggestion[this.keys.image] + ")" };
      }
    }
  };
  const _hoisted_1$z = {
    key: 0,
    class: "ui-autocomplete-suggestion__simple"
  };
  const _hoisted_2$t = {
    key: 1,
    class: "ui-autocomplete-suggestion__image"
  };
  const _hoisted_3$p = { class: "ui-autocomplete-suggestion__image-text" };
  function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("li", {
      class: vue.normalizeClass(["ui-autocomplete-suggestion", $options.classes])
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, () => [
        $props.type === "simple" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$z, vue.toDisplayString($props.suggestion[$props.keys.label] || $props.suggestion), 1)) : vue.createCommentVNode("v-if", true),
        $props.type === "image" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$t, [
          vue.createElementVNode("div", {
            class: "ui-autocomplete-suggestion__image-object",
            style: vue.normalizeStyle($options.imageStyle)
          }, null, 4),
          vue.createElementVNode("div", _hoisted_3$p, vue.toDisplayString($props.suggestion[$props.keys.label]), 1)
        ])) : vue.createCommentVNode("v-if", true)
      ])
    ], 2);
  }
  const UiAutocompleteSuggestion = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$B], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiAutocompleteSuggestion.vue"]]);
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function fuzzysearch(needle, haystack) {
    var tlen = haystack.length;
    var qlen = needle.length;
    if (qlen > tlen) {
      return false;
    }
    if (qlen === tlen) {
      return needle === haystack;
    }
    outer:
      for (var i2 = 0, j = 0; i2 < qlen; i2++) {
        var nch = needle.charCodeAt(i2);
        while (j < tlen) {
          if (haystack.charCodeAt(j++) === nch) {
            continue outer;
          }
        }
        return false;
      }
    return true;
  }
  var fuzzysearch_1 = fuzzysearch;
  const UiAutocomplete_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$A = {
    name: "UiAutocomplete",
    components: {
      UiAutocompleteSuggestion,
      UiIcon
    },
    directives: {
      autofocus
    },
    props: {
      name: String,
      placeholder: String,
      tabindex: [String, Number],
      modelValue: {
        type: [String, Number],
        default: ""
      },
      icon: String,
      iconPosition: {
        type: String,
        default: "left"
      },
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
        default: "simple"
      },
      suggestions: {
        type: Array,
        default() {
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
        default: ", "
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
        default() {
          return {
            label: "label",
            value: "value",
            image: "image"
          };
        }
      },
      invalid: {
        type: Boolean,
        default: false
      }
    },
    emits: [
      "update:modelValue",
      "select",
      "highlight-overflow",
      "highlight",
      "dropdown-open",
      "dropdown-close",
      "focus",
      "change",
      "blur",
      "touch"
    ],
    data() {
      return {
        initialValue: this.modelValue,
        isActive: false,
        isTouched: false,
        showDropdown: false,
        highlightedIndex: -1
      };
    },
    computed: {
      classes() {
        return [
          `ui-autocomplete--type-${this.type}`,
          `ui-autocomplete--icon-position-${this.iconPosition}`,
          { "is-active": this.isActive },
          { "is-invalid": this.invalid },
          { "is-touched": this.isTouched },
          { "is-disabled": this.disabled },
          { "has-label": this.hasLabel },
          { "has-floating-label": this.hasFloatingLabel }
        ];
      },
      labelClasses() {
        return {
          "is-inline": this.hasFloatingLabel && this.isLabelInline,
          "is-floating": this.hasFloatingLabel && !this.isLabelInline
        };
      },
      hasLabel() {
        return Boolean(this.label) || Boolean(this.$slots.default);
      },
      hasFloatingLabel() {
        return this.hasLabel && this.floatingLabel;
      },
      isLabelInline() {
        return this.valueLength === 0 && !this.isActive;
      },
      valueLength() {
        return this.modelValue ? this.modelValue.length : 0;
      },
      hasFeedback() {
        return this.showError || this.showHelp;
      },
      showError() {
        return this.invalid && (Boolean(this.error) || Boolean(this.$slots.error));
      },
      showHelp() {
        return Boolean(this.help) || Boolean(this.$slots.help);
      },
      matchingSuggestions() {
        const suggestions = this.suggestions.filter((suggestion) => {
          if (this.filter) {
            return this.filter(suggestion, this.modelValue, this.defaultFilter);
          }
          const query = this.modelValue === null ? "" : this.modelValue;
          return this.defaultFilter(suggestion, query);
        });
        if (this.sort) {
          suggestions.sort(this.sort.bind(this));
        }
        return suggestions.slice(0, this.limit);
      }
    },
    watch: {
      modelValue() {
        if (this.isActive && this.valueLength >= this.minChars) {
          this.openDropdown();
        }
        this.highlightedIndex = this.highlightOnFirstMatch ? 0 : -1;
      }
    },
    created() {
      if (this.modelValue === null) {
        this.initialValue = "";
        this.updateValue("");
      }
    },
    mounted() {
      document.addEventListener("click", this.onExternalClick);
    },
    beforeUnmount() {
      document.removeEventListener("click", this.onExternalClick);
    },
    methods: {
      defaultFilter(suggestion, query) {
        const text = suggestion[this.keys.label] || suggestion;
        if (typeof query === "string") {
          query = query.toLowerCase();
        }
        return fuzzysearch_1(query, text.toLowerCase());
      },
      selectSuggestion(suggestion) {
        let value;
        if (this.append) {
          value += this.appendDelimiter + (suggestion[this.keys.value] || suggestion);
        } else {
          value = suggestion[this.keys.value] || suggestion;
        }
        this.updateValue(value);
        this.$emit("select", suggestion);
        this.$nextTick(() => {
          this.closeDropdown();
          this.$refs.input.focus();
        });
      },
      highlightSuggestion(index) {
        const firstIndex = 0;
        const lastIndex = this.$refs.suggestions.length - 1;
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
          this.$emit("highlight-overflow", index);
        } else {
          this.$emit("highlight", this.$refs.suggestions[index].suggestion, index);
        }
      },
      selectHighlighted(index, e) {
        if (this.showDropdown && this.$refs.suggestions.length > 0) {
          e.preventDefault();
          this.selectSuggestion(this.$refs.suggestions[index].suggestion);
        }
      },
      focus() {
        this.$refs.input.focus();
      },
      openDropdown() {
        if (!this.showDropdown) {
          this.showDropdown = true;
          this.$emit("dropdown-open");
        }
      },
      closeDropdown() {
        if (this.showDropdown) {
          this.$nextTick(() => {
            this.showDropdown = false;
            this.highlightedIndex = -1;
            this.$emit("dropdown-close");
          });
        }
      },
      updateValue(value) {
        this.$emit("update:modelValue", value);
      },
      onFocus(e) {
        this.isActive = true;
        this.$emit("focus", e);
      },
      onChange(e) {
        this.$emit("change", this.modelValue, e);
      },
      onBlur(e) {
        this.isActive = false;
        this.$emit("blur", e);
        if (!this.isTouched) {
          this.isTouched = true;
          this.$emit("touch");
        }
      },
      onExternalClick(e) {
        if (!this.$el.contains(e.target) && this.showDropdown) {
          this.closeDropdown();
        }
      },
      reset() {
        if (document.activeElement === this.$refs.input) {
          document.activeElement.blur();
        }
        this.updateValue(this.initialValue);
        this.isTouched = false;
      }
    }
  };
  const _hoisted_1$y = {
    key: 0,
    class: "ui-autocomplete__icon-wrapper"
  };
  const _hoisted_2$s = { class: "ui-autocomplete__content" };
  const _hoisted_3$o = { class: "ui-autocomplete__label" };
  const _hoisted_4$g = /* @__PURE__ */ vue.createElementVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ vue.createElementVNode("path", { d: "M18.984 6.422L13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z" })
  ], -1);
  const _hoisted_5$e = ["disabled", "name", "placeholder", "readonly", "tabindex", "value"];
  const _hoisted_6$a = { class: "ui-autocomplete__suggestions" };
  const _hoisted_7$4 = {
    key: 0,
    class: "ui-autocomplete__feedback"
  };
  const _hoisted_8$3 = {
    key: 0,
    class: "ui-autocomplete__feedback-text"
  };
  const _hoisted_9$3 = {
    key: 1,
    class: "ui-autocomplete__feedback-text"
  };
  function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ui_icon = vue.resolveComponent("ui-icon");
    const _component_ui_autocomplete_suggestion = vue.resolveComponent("ui-autocomplete-suggestion");
    const _directive_autofocus = vue.resolveDirective("autofocus");
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(["ui-autocomplete", $options.classes])
    }, [
      $props.icon || _ctx.$slots.icon ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$y, [
        vue.renderSlot(_ctx.$slots, "icon", {}, () => [
          vue.createVNode(_component_ui_icon, { icon: $props.icon }, null, 8, ["icon"])
        ])
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("div", _hoisted_2$s, [
        vue.createElementVNode("label", _hoisted_3$o, [
          $props.label || _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: vue.normalizeClass(["ui-autocomplete__label-text", $options.labelClasses])
          }, [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              vue.createTextVNode(vue.toDisplayString($props.label), 1)
            ])
          ], 2)) : vue.createCommentVNode("v-if", true),
          vue.withDirectives(vue.createVNode(_component_ui_icon, {
            class: "ui-autocomplete__clear-button",
            title: "Clear",
            onClick: _cache[0] || (_cache[0] = ($event) => $options.updateValue(""))
          }, {
            default: vue.withCtx(() => [
              _hoisted_4$g
            ]),
            _: 1
          }, 512), [
            [vue.vShow, !$props.disabled && $options.valueLength > 0]
          ]),
          vue.withDirectives(vue.createElementVNode("input", {
            ref: "input",
            autocomplete: "off",
            class: "ui-autocomplete__input",
            disabled: $props.disabled,
            name: $props.name,
            placeholder: $options.hasFloatingLabel ? null : $props.placeholder,
            readonly: $props.readonly ? $props.readonly : null,
            tabindex: $props.tabindex,
            value: $props.modelValue,
            onBlur: _cache[1] || (_cache[1] = (...args) => $options.onBlur && $options.onBlur(...args)),
            onChange: _cache[2] || (_cache[2] = (...args) => $options.onChange && $options.onChange(...args)),
            onFocus: _cache[3] || (_cache[3] = (...args) => $options.onFocus && $options.onFocus(...args)),
            onInput: _cache[4] || (_cache[4] = ($event) => $options.updateValue($event.target.value)),
            onKeydown: [
              _cache[5] || (_cache[5] = vue.withKeys(vue.withModifiers(($event) => $options.highlightSuggestion($data.highlightedIndex + 1), ["prevent"]), ["down"])),
              _cache[6] || (_cache[6] = vue.withKeys(($event) => $options.selectHighlighted($data.highlightedIndex, $event), ["enter"])),
              _cache[7] || (_cache[7] = vue.withKeys((...args) => $options.closeDropdown && $options.closeDropdown(...args), ["esc"])),
              _cache[8] || (_cache[8] = vue.withKeys((...args) => $options.closeDropdown && $options.closeDropdown(...args), ["tab"])),
              _cache[9] || (_cache[9] = vue.withKeys(vue.withModifiers(($event) => $options.highlightSuggestion($data.highlightedIndex - 1), ["prevent"]), ["up"]))
            ]
          }, null, 40, _hoisted_5$e), [
            [_directive_autofocus, $props.autofocus]
          ]),
          vue.withDirectives(vue.createElementVNode("ul", _hoisted_6$a, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.matchingSuggestions, (suggestion, index) => {
              return vue.openBlock(), vue.createBlock(_component_ui_autocomplete_suggestion, {
                ref_for: true,
                ref: "suggestions",
                key: index,
                highlighted: $data.highlightedIndex === index,
                keys: $props.keys,
                suggestion,
                type: $props.type,
                onClick: ($event) => $options.selectSuggestion(suggestion)
              }, {
                default: vue.withCtx(() => [
                  vue.renderSlot(_ctx.$slots, "suggestion", {
                    highlighted: $data.highlightedIndex === index,
                    index,
                    suggestion
                  })
                ]),
                _: 2
              }, 1032, ["highlighted", "keys", "suggestion", "type", "onClick"]);
            }), 128))
          ], 512), [
            [vue.vShow, $data.showDropdown]
          ])
        ]),
        $options.hasFeedback ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_7$4, [
          $options.showError ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_8$3, [
            vue.renderSlot(_ctx.$slots, "error", {}, () => [
              vue.createTextVNode(vue.toDisplayString($props.error), 1)
            ])
          ])) : $options.showHelp ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_9$3, [
            vue.renderSlot(_ctx.$slots, "help", {}, () => [
              vue.createTextVNode(vue.toDisplayString($props.help), 1)
            ])
          ])) : vue.createCommentVNode("v-if", true)
        ])) : vue.createCommentVNode("v-if", true)
      ])
    ], 2);
  }
  const UiAutocomplete = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$A], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiAutocomplete.vue"]]);
  /**!
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
  var isBrowser$1 = typeof window !== "undefined" && typeof document !== "undefined";
  var longerTimeoutBrowsers = ["Edge", "Trident", "Firefox"];
  var timeoutDuration = 0;
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser$1 && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      timeoutDuration = 1;
      break;
    }
  }
  function microtaskDebounce(fn) {
    var called = false;
    return function() {
      if (called) {
        return;
      }
      called = true;
      window.Promise.resolve().then(function() {
        called = false;
        fn();
      });
    };
  }
  function taskDebounce(fn) {
    var scheduled = false;
    return function() {
      if (!scheduled) {
        scheduled = true;
        setTimeout(function() {
          scheduled = false;
          fn();
        }, timeoutDuration);
      }
    };
  }
  var supportsMicroTasks = isBrowser$1 && window.Promise;
  var debounce$1 = supportsMicroTasks ? microtaskDebounce : taskDebounce;
  function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === "[object Function]";
  }
  function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
      return [];
    }
    var window2 = element.ownerDocument.defaultView;
    var css = window2.getComputedStyle(element, null);
    return property ? css[property] : css;
  }
  function getParentNode(element) {
    if (element.nodeName === "HTML") {
      return element;
    }
    return element.parentNode || element.host;
  }
  function getScrollParent(element) {
    if (!element) {
      return document.body;
    }
    switch (element.nodeName) {
      case "HTML":
      case "BODY":
        return element.ownerDocument.body;
      case "#document":
        return element.body;
    }
    var _getStyleComputedProp = getStyleComputedProperty(element), overflow = _getStyleComputedProp.overflow, overflowX = _getStyleComputedProp.overflowX, overflowY = _getStyleComputedProp.overflowY;
    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      return element;
    }
    return getScrollParent(getParentNode(element));
  }
  var isIE11 = isBrowser$1 && !!(window.MSInputMethodContext && document.documentMode);
  var isIE10 = isBrowser$1 && /MSIE 10/.test(navigator.userAgent);
  function isIE$1(version2) {
    if (version2 === 11) {
      return isIE11;
    }
    if (version2 === 10) {
      return isIE10;
    }
    return isIE11 || isIE10;
  }
  function getOffsetParent(element) {
    if (!element) {
      return document.documentElement;
    }
    var noOffsetParent = isIE$1(10) ? document.body : null;
    var offsetParent = element.offsetParent || null;
    while (offsetParent === noOffsetParent && element.nextElementSibling) {
      offsetParent = (element = element.nextElementSibling).offsetParent;
    }
    var nodeName = offsetParent && offsetParent.nodeName;
    if (!nodeName || nodeName === "BODY" || nodeName === "HTML") {
      return element ? element.ownerDocument.documentElement : document.documentElement;
    }
    if (["TH", "TD", "TABLE"].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, "position") === "static") {
      return getOffsetParent(offsetParent);
    }
    return offsetParent;
  }
  function isOffsetContainer(element) {
    var nodeName = element.nodeName;
    if (nodeName === "BODY") {
      return false;
    }
    return nodeName === "HTML" || getOffsetParent(element.firstElementChild) === element;
  }
  function getRoot(node) {
    if (node.parentNode !== null) {
      return getRoot(node.parentNode);
    }
    return node;
  }
  function findCommonOffsetParent(element1, element2) {
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
      return document.documentElement;
    }
    var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    var start = order ? element1 : element2;
    var end = order ? element2 : element1;
    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer;
    if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
      if (isOffsetContainer(commonAncestorContainer)) {
        return commonAncestorContainer;
      }
      return getOffsetParent(commonAncestorContainer);
    }
    var element1root = getRoot(element1);
    if (element1root.host) {
      return findCommonOffsetParent(element1root.host, element2);
    } else {
      return findCommonOffsetParent(element1, getRoot(element2).host);
    }
  }
  function getScroll(element) {
    var side = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top";
    var upperSide = side === "top" ? "scrollTop" : "scrollLeft";
    var nodeName = element.nodeName;
    if (nodeName === "BODY" || nodeName === "HTML") {
      var html = element.ownerDocument.documentElement;
      var scrollingElement = element.ownerDocument.scrollingElement || html;
      return scrollingElement[upperSide];
    }
    return element[upperSide];
  }
  function includeScroll(rect, element) {
    var subtract = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    var scrollTop = getScroll(element, "top");
    var scrollLeft = getScroll(element, "left");
    var modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
  }
  function getBordersSize(styles, axis) {
    var sideA = axis === "x" ? "Left" : "Top";
    var sideB = sideA === "Left" ? "Right" : "Bottom";
    return parseFloat(styles["border" + sideA + "Width"], 10) + parseFloat(styles["border" + sideB + "Width"], 10);
  }
  function getSize(axis, body, html, computedStyle) {
    return Math.max(body["offset" + axis], body["scroll" + axis], html["client" + axis], html["offset" + axis], html["scroll" + axis], isIE$1(10) ? parseInt(html["offset" + axis]) + parseInt(computedStyle["margin" + (axis === "Height" ? "Top" : "Left")]) + parseInt(computedStyle["margin" + (axis === "Height" ? "Bottom" : "Right")]) : 0);
  }
  function getWindowSizes(document2) {
    var body = document2.body;
    var html = document2.documentElement;
    var computedStyle = isIE$1(10) && getComputedStyle(html);
    return {
      height: getSize("Height", body, html, computedStyle),
      width: getSize("Width", body, html, computedStyle)
    };
  }
  var classCallCheck = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  var createClass = function() {
    function defineProperties(target, props) {
      for (var i2 = 0; i2 < props.length; i2++) {
        var descriptor = props[i2];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  var defineProperty = function(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  };
  var _extends$1 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  function getClientRect(offsets) {
    return _extends$1({}, offsets, {
      right: offsets.left + offsets.width,
      bottom: offsets.top + offsets.height
    });
  }
  function getBoundingClientRect(element) {
    var rect = {};
    try {
      if (isIE$1(10)) {
        rect = element.getBoundingClientRect();
        var scrollTop = getScroll(element, "top");
        var scrollLeft = getScroll(element, "left");
        rect.top += scrollTop;
        rect.left += scrollLeft;
        rect.bottom += scrollTop;
        rect.right += scrollLeft;
      } else {
        rect = element.getBoundingClientRect();
      }
    } catch (e) {
    }
    var result = {
      left: rect.left,
      top: rect.top,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };
    var sizes = element.nodeName === "HTML" ? getWindowSizes(element.ownerDocument) : {};
    var width = sizes.width || element.clientWidth || result.right - result.left;
    var height = sizes.height || element.clientHeight || result.bottom - result.top;
    var horizScrollbar = element.offsetWidth - width;
    var vertScrollbar = element.offsetHeight - height;
    if (horizScrollbar || vertScrollbar) {
      var styles = getStyleComputedProperty(element);
      horizScrollbar -= getBordersSize(styles, "x");
      vertScrollbar -= getBordersSize(styles, "y");
      result.width -= horizScrollbar;
      result.height -= vertScrollbar;
    }
    return getClientRect(result);
  }
  function getOffsetRectRelativeToArbitraryNode(children, parent) {
    var fixedPosition = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    var isIE102 = isIE$1(10);
    var isHTML = parent.nodeName === "HTML";
    var childrenRect = getBoundingClientRect(children);
    var parentRect = getBoundingClientRect(parent);
    var scrollParent = getScrollParent(children);
    var styles = getStyleComputedProperty(parent);
    var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
    var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);
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
    if (!isIE102 && isHTML) {
      var marginTop = parseFloat(styles.marginTop, 10);
      var marginLeft = parseFloat(styles.marginLeft, 10);
      offsets.top -= borderTopWidth - marginTop;
      offsets.bottom -= borderTopWidth - marginTop;
      offsets.left -= borderLeftWidth - marginLeft;
      offsets.right -= borderLeftWidth - marginLeft;
      offsets.marginTop = marginTop;
      offsets.marginLeft = marginLeft;
    }
    if (isIE102 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== "BODY") {
      offsets = includeScroll(offsets, parent);
    }
    return offsets;
  }
  function getViewportOffsetRectRelativeToArtbitraryNode(element) {
    var excludeScroll = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var html = element.ownerDocument.documentElement;
    var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    var width = Math.max(html.clientWidth, window.innerWidth || 0);
    var height = Math.max(html.clientHeight, window.innerHeight || 0);
    var scrollTop = !excludeScroll ? getScroll(html) : 0;
    var scrollLeft = !excludeScroll ? getScroll(html, "left") : 0;
    var offset2 = {
      top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
      left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
      width,
      height
    };
    return getClientRect(offset2);
  }
  function isFixed(element) {
    var nodeName = element.nodeName;
    if (nodeName === "BODY" || nodeName === "HTML") {
      return false;
    }
    if (getStyleComputedProperty(element, "position") === "fixed") {
      return true;
    }
    var parentNode = getParentNode(element);
    if (!parentNode) {
      return false;
    }
    return isFixed(parentNode);
  }
  function getFixedPositionOffsetParent(element) {
    if (!element || !element.parentElement || isIE$1()) {
      return document.documentElement;
    }
    var el = element.parentElement;
    while (el && getStyleComputedProperty(el, "transform") === "none") {
      el = el.parentElement;
    }
    return el || document.documentElement;
  }
  function getBoundaries(popper, reference, padding, boundariesElement) {
    var fixedPosition = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
    var boundaries = { top: 0, left: 0 };
    var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
    if (boundariesElement === "viewport") {
      boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
    } else {
      var boundariesNode = void 0;
      if (boundariesElement === "scrollParent") {
        boundariesNode = getScrollParent(getParentNode(reference));
        if (boundariesNode.nodeName === "BODY") {
          boundariesNode = popper.ownerDocument.documentElement;
        }
      } else if (boundariesElement === "window") {
        boundariesNode = popper.ownerDocument.documentElement;
      } else {
        boundariesNode = boundariesElement;
      }
      var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
      if (boundariesNode.nodeName === "HTML" && !isFixed(offsetParent)) {
        var _getWindowSizes = getWindowSizes(popper.ownerDocument), height = _getWindowSizes.height, width = _getWindowSizes.width;
        boundaries.top += offsets.top - offsets.marginTop;
        boundaries.bottom = height + offsets.top;
        boundaries.left += offsets.left - offsets.marginLeft;
        boundaries.right = width + offsets.left;
      } else {
        boundaries = offsets;
      }
    }
    padding = padding || 0;
    var isPaddingNumber = typeof padding === "number";
    boundaries.left += isPaddingNumber ? padding : padding.left || 0;
    boundaries.top += isPaddingNumber ? padding : padding.top || 0;
    boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
    boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
    return boundaries;
  }
  function getArea(_ref) {
    var width = _ref.width, height = _ref.height;
    return width * height;
  }
  function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
    var padding = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
    if (placement.indexOf("auto") === -1) {
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
    var sortedAreas = Object.keys(rects).map(function(key) {
      return _extends$1({
        key
      }, rects[key], {
        area: getArea(rects[key])
      });
    }).sort(function(a, b) {
      return b.area - a.area;
    });
    var filteredAreas = sortedAreas.filter(function(_ref2) {
      var width = _ref2.width, height = _ref2.height;
      return width >= popper.clientWidth && height >= popper.clientHeight;
    });
    var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
    var variation = placement.split("-")[1];
    return computedPlacement + (variation ? "-" + variation : "");
  }
  function getReferenceOffsets(state, popper, reference) {
    var fixedPosition = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
    return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
  }
  function getOuterSizes(element) {
    var window2 = element.ownerDocument.defaultView;
    var styles = window2.getComputedStyle(element);
    var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
    var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
    var result = {
      width: element.offsetWidth + y,
      height: element.offsetHeight + x
    };
    return result;
  }
  function getOppositePlacement(placement) {
    var hash = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return placement.replace(/left|right|bottom|top/g, function(matched) {
      return hash[matched];
    });
  }
  function getPopperOffsets(popper, referenceOffsets, placement) {
    placement = placement.split("-")[0];
    var popperRect = getOuterSizes(popper);
    var popperOffsets = {
      width: popperRect.width,
      height: popperRect.height
    };
    var isHoriz = ["right", "left"].indexOf(placement) !== -1;
    var mainSide = isHoriz ? "top" : "left";
    var secondarySide = isHoriz ? "left" : "top";
    var measurement = isHoriz ? "height" : "width";
    var secondaryMeasurement = !isHoriz ? "height" : "width";
    popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
    if (placement === secondarySide) {
      popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
    } else {
      popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
    }
    return popperOffsets;
  }
  function find(arr, check) {
    if (Array.prototype.find) {
      return arr.find(check);
    }
    return arr.filter(check)[0];
  }
  function findIndex(arr, prop, value) {
    if (Array.prototype.findIndex) {
      return arr.findIndex(function(cur) {
        return cur[prop] === value;
      });
    }
    var match = find(arr, function(obj) {
      return obj[prop] === value;
    });
    return arr.indexOf(match);
  }
  function runModifiers(modifiers2, data, ends) {
    var modifiersToRun = ends === void 0 ? modifiers2 : modifiers2.slice(0, findIndex(modifiers2, "name", ends));
    modifiersToRun.forEach(function(modifier) {
      if (modifier["function"]) {
        console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
      }
      var fn = modifier["function"] || modifier.fn;
      if (modifier.enabled && isFunction(fn)) {
        data.offsets.popper = getClientRect(data.offsets.popper);
        data.offsets.reference = getClientRect(data.offsets.reference);
        data = fn(data, modifier);
      }
    });
    return data;
  }
  function update() {
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
    data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);
    data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
    data.originalPlacement = data.placement;
    data.positionFixed = this.options.positionFixed;
    data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
    data.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute";
    data = runModifiers(this.modifiers, data);
    if (!this.state.isCreated) {
      this.state.isCreated = true;
      this.options.onCreate(data);
    } else {
      this.options.onUpdate(data);
    }
  }
  function isModifierEnabled(modifiers2, modifierName) {
    return modifiers2.some(function(_ref) {
      var name = _ref.name, enabled = _ref.enabled;
      return enabled && name === modifierName;
    });
  }
  function getSupportedPropertyName(property) {
    var prefixes = [false, "ms", "Webkit", "Moz", "O"];
    var upperProp = property.charAt(0).toUpperCase() + property.slice(1);
    for (var i2 = 0; i2 < prefixes.length; i2++) {
      var prefix = prefixes[i2];
      var toCheck = prefix ? "" + prefix + upperProp : property;
      if (typeof document.body.style[toCheck] !== "undefined") {
        return toCheck;
      }
    }
    return null;
  }
  function destroy() {
    this.state.isDestroyed = true;
    if (isModifierEnabled(this.modifiers, "applyStyle")) {
      this.popper.removeAttribute("x-placement");
      this.popper.style.position = "";
      this.popper.style.top = "";
      this.popper.style.left = "";
      this.popper.style.right = "";
      this.popper.style.bottom = "";
      this.popper.style.willChange = "";
      this.popper.style[getSupportedPropertyName("transform")] = "";
    }
    this.disableEventListeners();
    if (this.options.removeOnDestroy) {
      this.popper.parentNode.removeChild(this.popper);
    }
    return this;
  }
  function getWindow(element) {
    var ownerDocument = element.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
  }
  function attachToScrollParents(scrollParent, event, callback, scrollParents) {
    var isBody = scrollParent.nodeName === "BODY";
    var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
    target.addEventListener(event, callback, { passive: true });
    if (!isBody) {
      attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
    }
    scrollParents.push(target);
  }
  function setupEventListeners(reference, options, state, updateBound) {
    state.updateBound = updateBound;
    getWindow(reference).addEventListener("resize", state.updateBound, { passive: true });
    var scrollElement = getScrollParent(reference);
    attachToScrollParents(scrollElement, "scroll", state.updateBound, state.scrollParents);
    state.scrollElement = scrollElement;
    state.eventsEnabled = true;
    return state;
  }
  function enableEventListeners() {
    if (!this.state.eventsEnabled) {
      this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
    }
  }
  function removeEventListeners(reference, state) {
    getWindow(reference).removeEventListener("resize", state.updateBound);
    state.scrollParents.forEach(function(target) {
      target.removeEventListener("scroll", state.updateBound);
    });
    state.updateBound = null;
    state.scrollParents = [];
    state.scrollElement = null;
    state.eventsEnabled = false;
    return state;
  }
  function disableEventListeners() {
    if (this.state.eventsEnabled) {
      cancelAnimationFrame(this.scheduleUpdate);
      this.state = removeEventListeners(this.reference, this.state);
    }
  }
  function isNumeric(n) {
    return n !== "" && !isNaN(parseFloat(n)) && isFinite(n);
  }
  function setStyles(element, styles) {
    Object.keys(styles).forEach(function(prop) {
      var unit = "";
      if (["width", "height", "top", "right", "bottom", "left"].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
        unit = "px";
      }
      element.style[prop] = styles[prop] + unit;
    });
  }
  function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(function(prop) {
      var value = attributes[prop];
      if (value !== false) {
        element.setAttribute(prop, attributes[prop]);
      } else {
        element.removeAttribute(prop);
      }
    });
  }
  function applyStyle(data) {
    setStyles(data.instance.popper, data.styles);
    setAttributes(data.instance.popper, data.attributes);
    if (data.arrowElement && Object.keys(data.arrowStyles).length) {
      setStyles(data.arrowElement, data.arrowStyles);
    }
    return data;
  }
  function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
    var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);
    var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
    popper.setAttribute("x-placement", placement);
    setStyles(popper, { position: options.positionFixed ? "fixed" : "absolute" });
    return options;
  }
  function getRoundedOffsets(data, shouldRound) {
    var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
    var round = Math.round, floor = Math.floor;
    var noRound = function noRound2(v) {
      return v;
    };
    var referenceWidth = round(reference.width);
    var popperWidth = round(popper.width);
    var isVertical = ["left", "right"].indexOf(data.placement) !== -1;
    var isVariation = data.placement.indexOf("-") !== -1;
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
  var isFirefox = isBrowser$1 && /Firefox/i.test(navigator.userAgent);
  function computeStyle(data, options) {
    var x = options.x, y = options.y;
    var popper = data.offsets.popper;
    var legacyGpuAccelerationOption = find(data.instance.modifiers, function(modifier) {
      return modifier.name === "applyStyle";
    }).gpuAcceleration;
    if (legacyGpuAccelerationOption !== void 0) {
      console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
    }
    var gpuAcceleration = legacyGpuAccelerationOption !== void 0 ? legacyGpuAccelerationOption : options.gpuAcceleration;
    var offsetParent = getOffsetParent(data.instance.popper);
    var offsetParentRect = getBoundingClientRect(offsetParent);
    var styles = {
      position: popper.position
    };
    var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
    var sideA = x === "bottom" ? "top" : "bottom";
    var sideB = y === "right" ? "left" : "right";
    var prefixedProperty = getSupportedPropertyName("transform");
    var left = void 0, top = void 0;
    if (sideA === "bottom") {
      if (offsetParent.nodeName === "HTML") {
        top = -offsetParent.clientHeight + offsets.bottom;
      } else {
        top = -offsetParentRect.height + offsets.bottom;
      }
    } else {
      top = offsets.top;
    }
    if (sideB === "right") {
      if (offsetParent.nodeName === "HTML") {
        left = -offsetParent.clientWidth + offsets.right;
      } else {
        left = -offsetParentRect.width + offsets.right;
      }
    } else {
      left = offsets.left;
    }
    if (gpuAcceleration && prefixedProperty) {
      styles[prefixedProperty] = "translate3d(" + left + "px, " + top + "px, 0)";
      styles[sideA] = 0;
      styles[sideB] = 0;
      styles.willChange = "transform";
    } else {
      var invertTop = sideA === "bottom" ? -1 : 1;
      var invertLeft = sideB === "right" ? -1 : 1;
      styles[sideA] = top * invertTop;
      styles[sideB] = left * invertLeft;
      styles.willChange = sideA + ", " + sideB;
    }
    var attributes = {
      "x-placement": data.placement
    };
    data.attributes = _extends$1({}, attributes, data.attributes);
    data.styles = _extends$1({}, styles, data.styles);
    data.arrowStyles = _extends$1({}, data.offsets.arrow, data.arrowStyles);
    return data;
  }
  function isModifierRequired(modifiers2, requestingName, requestedName) {
    var requesting = find(modifiers2, function(_ref) {
      var name = _ref.name;
      return name === requestingName;
    });
    var isRequired = !!requesting && modifiers2.some(function(modifier) {
      return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
    });
    if (!isRequired) {
      var _requesting = "`" + requestingName + "`";
      var requested = "`" + requestedName + "`";
      console.warn(requested + " modifier is required by " + _requesting + " modifier in order to work, be sure to include it before " + _requesting + "!");
    }
    return isRequired;
  }
  function arrow(data, options) {
    var _data$offsets$arrow;
    if (!isModifierRequired(data.instance.modifiers, "arrow", "keepTogether")) {
      return data;
    }
    var arrowElement = options.element;
    if (typeof arrowElement === "string") {
      arrowElement = data.instance.popper.querySelector(arrowElement);
      if (!arrowElement) {
        return data;
      }
    } else {
      if (!data.instance.popper.contains(arrowElement)) {
        console.warn("WARNING: `arrow.element` must be child of its popper element!");
        return data;
      }
    }
    var placement = data.placement.split("-")[0];
    var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
    var isVertical = ["left", "right"].indexOf(placement) !== -1;
    var len = isVertical ? "height" : "width";
    var sideCapitalized = isVertical ? "Top" : "Left";
    var side = sideCapitalized.toLowerCase();
    var altSide = isVertical ? "left" : "top";
    var opSide = isVertical ? "bottom" : "right";
    var arrowElementSize = getOuterSizes(arrowElement)[len];
    if (reference[opSide] - arrowElementSize < popper[side]) {
      data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
    }
    if (reference[side] + arrowElementSize > popper[opSide]) {
      data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
    }
    data.offsets.popper = getClientRect(data.offsets.popper);
    var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;
    var css = getStyleComputedProperty(data.instance.popper);
    var popperMarginSide = parseFloat(css["margin" + sideCapitalized], 10);
    var popperBorderSide = parseFloat(css["border" + sideCapitalized + "Width"], 10);
    var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;
    sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
    data.arrowElement = arrowElement;
    data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ""), _data$offsets$arrow);
    return data;
  }
  function getOppositeVariation(variation) {
    if (variation === "end") {
      return "start";
    } else if (variation === "start") {
      return "end";
    }
    return variation;
  }
  var placements = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"];
  var validPlacements = placements.slice(3);
  function clockwise(placement) {
    var counter = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var index = validPlacements.indexOf(placement);
    var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
    return counter ? arr.reverse() : arr;
  }
  var BEHAVIORS = {
    FLIP: "flip",
    CLOCKWISE: "clockwise",
    COUNTERCLOCKWISE: "counterclockwise"
  };
  function flip(data, options) {
    if (isModifierEnabled(data.instance.modifiers, "inner")) {
      return data;
    }
    if (data.flipped && data.placement === data.originalPlacement) {
      return data;
    }
    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
    var placement = data.placement.split("-")[0];
    var placementOpposite = getOppositePlacement(placement);
    var variation = data.placement.split("-")[1] || "";
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
    flipOrder.forEach(function(step, index) {
      if (placement !== step || flipOrder.length === index + 1) {
        return data;
      }
      placement = data.placement.split("-")[0];
      placementOpposite = getOppositePlacement(placement);
      var popperOffsets = data.offsets.popper;
      var refOffsets = data.offsets.reference;
      var floor = Math.floor;
      var overlapsRef = placement === "left" && floor(popperOffsets.right) > floor(refOffsets.left) || placement === "right" && floor(popperOffsets.left) < floor(refOffsets.right) || placement === "top" && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === "bottom" && floor(popperOffsets.top) < floor(refOffsets.bottom);
      var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
      var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
      var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
      var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
      var overflowsBoundaries = placement === "left" && overflowsLeft || placement === "right" && overflowsRight || placement === "top" && overflowsTop || placement === "bottom" && overflowsBottom;
      var isVertical = ["top", "bottom"].indexOf(placement) !== -1;
      var flippedVariation = !!options.flipVariations && (isVertical && variation === "start" && overflowsLeft || isVertical && variation === "end" && overflowsRight || !isVertical && variation === "start" && overflowsTop || !isVertical && variation === "end" && overflowsBottom);
      if (overlapsRef || overflowsBoundaries || flippedVariation) {
        data.flipped = true;
        if (overlapsRef || overflowsBoundaries) {
          placement = flipOrder[index + 1];
        }
        if (flippedVariation) {
          variation = getOppositeVariation(variation);
        }
        data.placement = placement + (variation ? "-" + variation : "");
        data.offsets.popper = _extends$1({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
        data = runModifiers(data.instance.modifiers, data, "flip");
      }
    });
    return data;
  }
  function keepTogether(data) {
    var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
    var placement = data.placement.split("-")[0];
    var floor = Math.floor;
    var isVertical = ["top", "bottom"].indexOf(placement) !== -1;
    var side = isVertical ? "right" : "bottom";
    var opSide = isVertical ? "left" : "top";
    var measurement = isVertical ? "width" : "height";
    if (popper[side] < floor(reference[opSide])) {
      data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
    }
    if (popper[opSide] > floor(reference[side])) {
      data.offsets.popper[opSide] = floor(reference[side]);
    }
    return data;
  }
  function toValue(str, measurement, popperOffsets, referenceOffsets) {
    var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    var value = +split[1];
    var unit = split[2];
    if (!value) {
      return str;
    }
    if (unit.indexOf("%") === 0) {
      var element = void 0;
      switch (unit) {
        case "%p":
          element = popperOffsets;
          break;
        case "%":
        case "%r":
        default:
          element = referenceOffsets;
      }
      var rect = getClientRect(element);
      return rect[measurement] / 100 * value;
    } else if (unit === "vh" || unit === "vw") {
      var size = void 0;
      if (unit === "vh") {
        size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      } else {
        size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      }
      return size / 100 * value;
    } else {
      return value;
    }
  }
  function parseOffset(offset2, popperOffsets, referenceOffsets, basePlacement) {
    var offsets = [0, 0];
    var useHeight = ["right", "left"].indexOf(basePlacement) !== -1;
    var fragments = offset2.split(/(\+|\-)/).map(function(frag) {
      return frag.trim();
    });
    var divider = fragments.indexOf(find(fragments, function(frag) {
      return frag.search(/,|\s/) !== -1;
    }));
    if (fragments[divider] && fragments[divider].indexOf(",") === -1) {
      console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
    }
    var splitRegex = /\s*,\s*|\s+/;
    var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];
    ops = ops.map(function(op, index) {
      var measurement = (index === 1 ? !useHeight : useHeight) ? "height" : "width";
      var mergeWithPrevious = false;
      return op.reduce(function(a, b) {
        if (a[a.length - 1] === "" && ["+", "-"].indexOf(b) !== -1) {
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
      }, []).map(function(str) {
        return toValue(str, measurement, popperOffsets, referenceOffsets);
      });
    });
    ops.forEach(function(op, index) {
      op.forEach(function(frag, index2) {
        if (isNumeric(frag)) {
          offsets[index] += frag * (op[index2 - 1] === "-" ? -1 : 1);
        }
      });
    });
    return offsets;
  }
  function offset(data, _ref) {
    var offset2 = _ref.offset;
    var placement = data.placement, _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
    var basePlacement = placement.split("-")[0];
    var offsets = void 0;
    if (isNumeric(+offset2)) {
      offsets = [+offset2, 0];
    } else {
      offsets = parseOffset(offset2, popper, reference, basePlacement);
    }
    if (basePlacement === "left") {
      popper.top += offsets[0];
      popper.left -= offsets[1];
    } else if (basePlacement === "right") {
      popper.top += offsets[0];
      popper.left += offsets[1];
    } else if (basePlacement === "top") {
      popper.left += offsets[0];
      popper.top -= offsets[1];
    } else if (basePlacement === "bottom") {
      popper.left += offsets[0];
      popper.top += offsets[1];
    }
    data.popper = popper;
    return data;
  }
  function preventOverflow(data, options) {
    var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);
    if (data.instance.reference === boundariesElement) {
      boundariesElement = getOffsetParent(boundariesElement);
    }
    var transformProp = getSupportedPropertyName("transform");
    var popperStyles = data.instance.popper.style;
    var top = popperStyles.top, left = popperStyles.left, transform = popperStyles[transformProp];
    popperStyles.top = "";
    popperStyles.left = "";
    popperStyles[transformProp] = "";
    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);
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
        var mainSide = placement === "right" ? "left" : "top";
        var value = popper[mainSide];
        if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
          value = Math.min(popper[mainSide], boundaries[placement] - (placement === "right" ? popper.width : popper.height));
        }
        return defineProperty({}, mainSide, value);
      }
    };
    order.forEach(function(placement) {
      var side = ["left", "top"].indexOf(placement) !== -1 ? "primary" : "secondary";
      popper = _extends$1({}, popper, check[side](placement));
    });
    data.offsets.popper = popper;
    return data;
  }
  function shift(data) {
    var placement = data.placement;
    var basePlacement = placement.split("-")[0];
    var shiftvariation = placement.split("-")[1];
    if (shiftvariation) {
      var _data$offsets = data.offsets, reference = _data$offsets.reference, popper = _data$offsets.popper;
      var isVertical = ["bottom", "top"].indexOf(basePlacement) !== -1;
      var side = isVertical ? "left" : "top";
      var measurement = isVertical ? "width" : "height";
      var shiftOffsets = {
        start: defineProperty({}, side, reference[side]),
        end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
      };
      data.offsets.popper = _extends$1({}, popper, shiftOffsets[shiftvariation]);
    }
    return data;
  }
  function hide(data) {
    if (!isModifierRequired(data.instance.modifiers, "hide", "preventOverflow")) {
      return data;
    }
    var refRect = data.offsets.reference;
    var bound = find(data.instance.modifiers, function(modifier) {
      return modifier.name === "preventOverflow";
    }).boundaries;
    if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
      if (data.hide === true) {
        return data;
      }
      data.hide = true;
      data.attributes["x-out-of-boundaries"] = "";
    } else {
      if (data.hide === false) {
        return data;
      }
      data.hide = false;
      data.attributes["x-out-of-boundaries"] = false;
    }
    return data;
  }
  function inner(data) {
    var placement = data.placement;
    var basePlacement = placement.split("-")[0];
    var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
    var isHoriz = ["left", "right"].indexOf(basePlacement) !== -1;
    var subtractLength = ["top", "left"].indexOf(basePlacement) === -1;
    popper[isHoriz ? "left" : "top"] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? "width" : "height"] : 0);
    data.placement = getOppositePlacement(placement);
    data.offsets.popper = getClientRect(popper);
    return data;
  }
  var modifiers = {
    shift: {
      order: 100,
      enabled: true,
      fn: shift
    },
    offset: {
      order: 200,
      enabled: true,
      fn: offset,
      offset: 0
    },
    preventOverflow: {
      order: 300,
      enabled: true,
      fn: preventOverflow,
      priority: ["left", "right", "top", "bottom"],
      padding: 5,
      boundariesElement: "scrollParent"
    },
    keepTogether: {
      order: 400,
      enabled: true,
      fn: keepTogether
    },
    arrow: {
      order: 500,
      enabled: true,
      fn: arrow,
      element: "[x-arrow]"
    },
    flip: {
      order: 600,
      enabled: true,
      fn: flip,
      behavior: "flip",
      padding: 5,
      boundariesElement: "viewport"
    },
    inner: {
      order: 700,
      enabled: false,
      fn: inner
    },
    hide: {
      order: 800,
      enabled: true,
      fn: hide
    },
    computeStyle: {
      order: 850,
      enabled: true,
      fn: computeStyle,
      gpuAcceleration: true,
      x: "bottom",
      y: "right"
    },
    applyStyle: {
      order: 900,
      enabled: true,
      fn: applyStyle,
      onLoad: applyStyleOnLoad,
      gpuAcceleration: void 0
    }
  };
  var Defaults = {
    placement: "bottom",
    positionFixed: false,
    eventsEnabled: true,
    removeOnDestroy: false,
    onCreate: function onCreate() {
    },
    onUpdate: function onUpdate() {
    },
    modifiers
  };
  var Popper = function() {
    function Popper2(reference, popper) {
      var _this = this;
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      classCallCheck(this, Popper2);
      this.scheduleUpdate = function() {
        return requestAnimationFrame(_this.update);
      };
      this.update = debounce$1(this.update.bind(this));
      this.options = _extends$1({}, Popper2.Defaults, options);
      this.state = {
        isDestroyed: false,
        isCreated: false,
        scrollParents: []
      };
      this.reference = reference && reference.jquery ? reference[0] : reference;
      this.popper = popper && popper.jquery ? popper[0] : popper;
      this.options.modifiers = {};
      Object.keys(_extends$1({}, Popper2.Defaults.modifiers, options.modifiers)).forEach(function(name) {
        _this.options.modifiers[name] = _extends$1({}, Popper2.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
      });
      this.modifiers = Object.keys(this.options.modifiers).map(function(name) {
        return _extends$1({
          name
        }, _this.options.modifiers[name]);
      }).sort(function(a, b) {
        return a.order - b.order;
      });
      this.modifiers.forEach(function(modifierOptions) {
        if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
          modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
        }
      });
      this.update();
      var eventsEnabled = this.options.eventsEnabled;
      if (eventsEnabled) {
        this.enableEventListeners();
      }
      this.state.eventsEnabled = eventsEnabled;
    }
    createClass(Popper2, [{
      key: "update",
      value: function update$$1() {
        return update.call(this);
      }
    }, {
      key: "destroy",
      value: function destroy$$1() {
        return destroy.call(this);
      }
    }, {
      key: "enableEventListeners",
      value: function enableEventListeners$$1() {
        return enableEventListeners.call(this);
      }
    }, {
      key: "disableEventListeners",
      value: function disableEventListeners$$1() {
        return disableEventListeners.call(this);
      }
    }]);
    return Popper2;
  }();
  Popper.Utils = (typeof window !== "undefined" ? window : global).PopperUtils;
  Popper.placements = placements;
  Popper.Defaults = Defaults;
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
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
  var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
  var ua = isBrowser ? navigator.userAgent : "";
  var isIE = /MSIE |Trident\//.test(ua);
  var isUCBrowser = /UCBrowser\//.test(ua);
  var isIOS = isBrowser && /iPhone|iPad|iPod/.test(navigator.platform) && !window.MSStream;
  var defaultProps = {
    a11y: true,
    allowHTML: true,
    animateFill: true,
    animation: "shift-away",
    appendTo: function appendTo() {
      return document.body;
    },
    aria: "describedby",
    arrow: false,
    arrowType: "sharp",
    boundary: "scrollParent",
    content: "",
    delay: 0,
    distance: 10,
    duration: [325, 275],
    flip: true,
    flipBehavior: "flip",
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
    onHidden: function onHidden() {
    },
    onHide: function onHide() {
    },
    onMount: function onMount() {
    },
    onShow: function onShow() {
    },
    onShown: function onShown() {
    },
    placement: "top",
    popperOptions: {},
    role: "tooltip",
    showOnInit: false,
    size: "regular",
    sticky: false,
    target: "",
    theme: "dark",
    touch: true,
    touchHold: false,
    trigger: "mouseenter focus",
    updateDuration: 0,
    wait: null,
    zIndex: 9999
  };
  var POPPER_INSTANCE_DEPENDENCIES = ["arrow", "arrowType", "boundary", "distance", "flip", "flipBehavior", "flipOnUpdate", "offset", "placement", "popperOptions"];
  var elementProto = isBrowser ? Element.prototype : {};
  var matches = elementProto.matches || elementProto.matchesSelector || elementProto.webkitMatchesSelector || elementProto.mozMatchesSelector || elementProto.msMatchesSelector;
  function arrayFrom(value) {
    return [].slice.call(value);
  }
  function closest(element, parentSelector) {
    return (elementProto.closest || function(selector) {
      var el = this;
      while (el) {
        if (matches.call(el, selector)) {
          return el;
        }
        el = el.parentElement;
      }
    }).call(element, parentSelector);
  }
  function closestCallback(element, callback) {
    while (element) {
      if (callback(element)) {
        return element;
      }
      element = element.parentElement;
    }
  }
  var PASSIVE = {
    passive: true
  };
  var PADDING = 4;
  var PLACEMENT_ATTRIBUTE = "x-placement";
  var OUT_OF_BOUNDARIES_ATTRIBUTE = "x-out-of-boundaries";
  var IOS_CLASS = "tippy-iOS";
  var ACTIVE_CLASS = "tippy-active";
  var POPPER_SELECTOR = ".tippy-popper";
  var TOOLTIP_SELECTOR = ".tippy-tooltip";
  var CONTENT_SELECTOR = ".tippy-content";
  var BACKDROP_SELECTOR = ".tippy-backdrop";
  var ARROW_SELECTOR = ".tippy-arrow";
  var ROUND_ARROW_SELECTOR = ".tippy-roundarrow";
  var keys = Object.keys(defaultProps);
  function getDataAttributeOptions(reference) {
    return keys.reduce(function(acc, key) {
      var valueAsString = (reference.getAttribute("data-tippy-".concat(key)) || "").trim();
      if (!valueAsString) {
        return acc;
      }
      if (key === "content") {
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
  function polyfillElementPrototypeProperties(virtualReference) {
    var polyfills = {
      isVirtual: true,
      attributes: virtualReference.attributes || {},
      setAttribute: function setAttribute(key2, value) {
        virtualReference.attributes[key2] = value;
      },
      getAttribute: function getAttribute(key2) {
        return virtualReference.attributes[key2];
      },
      removeAttribute: function removeAttribute(key2) {
        delete virtualReference.attributes[key2];
      },
      hasAttribute: function hasAttribute(key2) {
        return key2 in virtualReference.attributes;
      },
      addEventListener: function addEventListener() {
      },
      removeEventListener: function removeEventListener() {
      },
      classList: {
        classNames: {},
        add: function add2(key2) {
          virtualReference.classList.classNames[key2] = true;
        },
        remove: function remove2(key2) {
          delete virtualReference.classList.classNames[key2];
        },
        contains: function contains2(key2) {
          return key2 in virtualReference.classList.classNames;
        }
      }
    };
    for (var key in polyfills) {
      virtualReference[key] = polyfills[key];
    }
  }
  function isBareVirtualElement(value) {
    return {}.toString.call(value) === "[object Object]" && !value.addEventListener;
  }
  function hasOwnProperty(obj, key) {
    return {}.hasOwnProperty.call(obj, key);
  }
  function getArrayOfElements(value) {
    if (isSingular(value)) {
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
  function getValue(value, index, defaultValue) {
    if (Array.isArray(value)) {
      var v = value[index];
      return v == null ? defaultValue : v;
    }
    return value;
  }
  function debounce(fn, ms) {
    var timeoutId;
    return function() {
      var _this = this, _arguments = arguments;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function() {
        return fn.apply(_this, _arguments);
      }, ms);
    };
  }
  function getModifier(obj, key) {
    return obj && obj.modifiers && obj.modifiers[key];
  }
  function includes(a, b) {
    return a.indexOf(b) > -1;
  }
  function isSingular(value) {
    return !!(value && hasOwnProperty(value, "isVirtual")) || value instanceof Element;
  }
  function innerHTML() {
    return "innerHTML";
  }
  function evaluateValue(value, args) {
    return typeof value === "function" ? value.apply(null, args) : value;
  }
  function setFlipModifierEnabled(modifiers2, value) {
    modifiers2.filter(function(m) {
      return m.name === "flip";
    })[0].enabled = value;
  }
  function canReceiveFocus(element) {
    return element instanceof Element ? matches.call(element, "a[href],area[href],button,details,input,textarea,select,iframe,[tabindex]") && !element.hasAttribute("disabled") : true;
  }
  function div() {
    return document.createElement("div");
  }
  function setTransitionDuration(els, value) {
    els.forEach(function(el) {
      if (el) {
        el.style.transitionDuration = "".concat(value, "ms");
      }
    });
  }
  function setVisibilityState(els, state) {
    els.forEach(function(el) {
      if (el) {
        el.setAttribute("data-state", state);
      }
    });
  }
  function evaluateProps(reference, props) {
    var out = _extends({}, props, {
      content: evaluateValue(props.content, [reference])
    }, props.ignoreAttributes ? {} : getDataAttributeOptions(reference));
    if (out.arrow || isUCBrowser) {
      out.animateFill = false;
    }
    return out;
  }
  function validateOptions(options, defaultProps2) {
    Object.keys(options).forEach(function(option) {
      if (!hasOwnProperty(defaultProps2, option)) {
        throw new Error("[tippy]: `".concat(option, "` is not a valid option"));
      }
    });
  }
  function setInnerHTML(element, html) {
    element[innerHTML()] = html instanceof Element ? html[innerHTML()] : html;
  }
  function setContent(contentEl, props) {
    if (props.content instanceof Element) {
      setInnerHTML(contentEl, "");
      contentEl.appendChild(props.content);
    } else if (typeof props.content !== "function") {
      var key = props.allowHTML ? "innerHTML" : "textContent";
      contentEl[key] = props.content;
    }
  }
  function getChildren(popper) {
    return {
      tooltip: popper.querySelector(TOOLTIP_SELECTOR),
      backdrop: popper.querySelector(BACKDROP_SELECTOR),
      content: popper.querySelector(CONTENT_SELECTOR),
      arrow: popper.querySelector(ARROW_SELECTOR) || popper.querySelector(ROUND_ARROW_SELECTOR)
    };
  }
  function addInertia(tooltip) {
    tooltip.setAttribute("data-inertia", "");
  }
  function removeInertia(tooltip) {
    tooltip.removeAttribute("data-inertia");
  }
  function createArrowElement(arrowType) {
    var arrow2 = div();
    if (arrowType === "round") {
      arrow2.className = "tippy-roundarrow";
      setInnerHTML(arrow2, '<svg viewBox="0 0 18 7" xmlns="http://www.w3.org/2000/svg"><path d="M0 7s2.021-.015 5.253-4.218C6.584 1.051 7.797.007 9 0c1.203-.007 2.416 1.035 3.761 2.782C16.012 7.005 18 7 18 7H0z"/></svg>');
    } else {
      arrow2.className = "tippy-arrow";
    }
    return arrow2;
  }
  function createBackdropElement() {
    var backdrop = div();
    backdrop.className = "tippy-backdrop";
    backdrop.setAttribute("data-state", "hidden");
    return backdrop;
  }
  function addInteractive(popper, tooltip) {
    popper.setAttribute("tabindex", "-1");
    tooltip.setAttribute("data-interactive", "");
  }
  function removeInteractive(popper, tooltip) {
    popper.removeAttribute("tabindex");
    tooltip.removeAttribute("data-interactive");
  }
  function updateTransitionEndListener(tooltip, action, listener) {
    var eventName = isUCBrowser && document.body.style.webkitTransition !== void 0 ? "webkitTransitionEnd" : "transitionend";
    tooltip[action + "EventListener"](eventName, listener);
  }
  function getBasicPlacement(popper) {
    var fullPlacement = popper.getAttribute(PLACEMENT_ATTRIBUTE);
    return fullPlacement ? fullPlacement.split("-")[0] : "";
  }
  function reflow(popper) {
    void popper.offsetHeight;
  }
  function updateTheme(tooltip, action, theme) {
    theme.split(" ").forEach(function(themeName) {
      tooltip.classList[action](themeName + "-theme");
    });
  }
  function createPopperElement(id, props) {
    var popper = div();
    popper.className = "tippy-popper";
    popper.id = "tippy-".concat(id);
    popper.style.zIndex = "" + props.zIndex;
    if (props.role) {
      popper.setAttribute("role", props.role);
    }
    var tooltip = div();
    tooltip.className = "tippy-tooltip";
    tooltip.style.maxWidth = props.maxWidth + (typeof props.maxWidth === "number" ? "px" : "");
    tooltip.setAttribute("data-size", props.size);
    tooltip.setAttribute("data-animation", props.animation);
    tooltip.setAttribute("data-state", "hidden");
    updateTheme(tooltip, "add", props.theme);
    var content = div();
    content.className = "tippy-content";
    content.setAttribute("data-state", "hidden");
    if (props.interactive) {
      addInteractive(popper, tooltip);
    }
    if (props.arrow) {
      tooltip.appendChild(createArrowElement(props.arrowType));
    }
    if (props.animateFill) {
      tooltip.appendChild(createBackdropElement());
      tooltip.setAttribute("data-animatefill", "");
    }
    if (props.inertia) {
      addInertia(tooltip);
    }
    setContent(content, props);
    tooltip.appendChild(content);
    popper.appendChild(tooltip);
    return popper;
  }
  function updatePopperElement(popper, prevProps, nextProps) {
    var _getChildren = getChildren(popper), tooltip = _getChildren.tooltip, content = _getChildren.content, backdrop = _getChildren.backdrop, arrow2 = _getChildren.arrow;
    popper.style.zIndex = "" + nextProps.zIndex;
    tooltip.setAttribute("data-size", nextProps.size);
    tooltip.setAttribute("data-animation", nextProps.animation);
    tooltip.style.maxWidth = nextProps.maxWidth + (typeof nextProps.maxWidth === "number" ? "px" : "");
    if (nextProps.role) {
      popper.setAttribute("role", nextProps.role);
    } else {
      popper.removeAttribute("role");
    }
    if (prevProps.content !== nextProps.content) {
      setContent(content, nextProps);
    }
    if (!prevProps.animateFill && nextProps.animateFill) {
      tooltip.appendChild(createBackdropElement());
      tooltip.setAttribute("data-animatefill", "");
    } else if (prevProps.animateFill && !nextProps.animateFill) {
      tooltip.removeChild(backdrop);
      tooltip.removeAttribute("data-animatefill");
    }
    if (!prevProps.arrow && nextProps.arrow) {
      tooltip.appendChild(createArrowElement(nextProps.arrowType));
    } else if (prevProps.arrow && !nextProps.arrow) {
      tooltip.removeChild(arrow2);
    }
    if (prevProps.arrow && nextProps.arrow && prevProps.arrowType !== nextProps.arrowType) {
      tooltip.replaceChild(createArrowElement(nextProps.arrowType), arrow2);
    }
    if (!prevProps.interactive && nextProps.interactive) {
      addInteractive(popper, tooltip);
    } else if (prevProps.interactive && !nextProps.interactive) {
      removeInteractive(popper, tooltip);
    }
    if (!prevProps.inertia && nextProps.inertia) {
      addInertia(tooltip);
    } else if (prevProps.inertia && !nextProps.inertia) {
      removeInertia(tooltip);
    }
    if (prevProps.theme !== nextProps.theme) {
      updateTheme(tooltip, "remove", prevProps.theme);
      updateTheme(tooltip, "add", nextProps.theme);
    }
  }
  function afterPopperPositionUpdates(popperInstance, callback) {
    var popper = popperInstance.popper, options = popperInstance.options;
    var onCreate = options.onCreate, onUpdate = options.onUpdate;
    options.onCreate = options.onUpdate = function(data) {
      reflow(popper);
      callback();
      if (onUpdate) {
        onUpdate(data);
      }
      options.onCreate = onCreate;
      options.onUpdate = onUpdate;
    };
  }
  function hideAll() {
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, checkHideOnClick = _ref.checkHideOnClick, exclude = _ref.exclude, duration = _ref.duration;
    arrayFrom(document.querySelectorAll(POPPER_SELECTOR)).forEach(function(popper) {
      var instance = popper._tippy;
      if (instance && (checkHideOnClick ? instance.props.hideOnClick === true : true) && (!exclude || popper !== exclude.popper)) {
        instance.hide(duration);
      }
    });
  }
  function isCursorOutsideInteractiveBorder(popperPlacement, popperRect, event, props) {
    if (!popperPlacement) {
      return true;
    }
    var x = event.clientX, y = event.clientY;
    var interactiveBorder = props.interactiveBorder, distance = props.distance;
    var exceedsTop = popperRect.top - y > (popperPlacement === "top" ? interactiveBorder + distance : interactiveBorder);
    var exceedsBottom = y - popperRect.bottom > (popperPlacement === "bottom" ? interactiveBorder + distance : interactiveBorder);
    var exceedsLeft = popperRect.left - x > (popperPlacement === "left" ? interactiveBorder + distance : interactiveBorder);
    var exceedsRight = x - popperRect.right > (popperPlacement === "right" ? interactiveBorder + distance : interactiveBorder);
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  }
  function getOffsetDistanceInPx(distance) {
    return -(distance - 10) + "px";
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
      document.addEventListener("mousemove", onDocumentMouseMove);
    }
  }
  var lastMouseMoveTime = 0;
  function onDocumentMouseMove() {
    var now = performance.now();
    if (now - lastMouseMoveTime < 20) {
      isUsingTouch = false;
      document.removeEventListener("mousemove", onDocumentMouseMove);
      if (!isIOS) {
        document.body.classList.remove(IOS_CLASS);
      }
    }
    lastMouseMoveTime = now;
  }
  function onDocumentClick(event) {
    if (!(event.target instanceof Element)) {
      return hideAll();
    }
    var popper = closest(event.target, POPPER_SELECTOR);
    if (popper && popper._tippy && popper._tippy.props.interactive) {
      return;
    }
    var reference = closestCallback(event.target, function(el) {
      return el._tippy && el._tippy.reference === el;
    });
    if (reference) {
      var instance = reference._tippy;
      if (instance) {
        var isClickTrigger = includes(instance.props.trigger || "", "click");
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
    var _document = document, activeElement = _document.activeElement;
    if (activeElement && activeElement.blur && activeElement._tippy) {
      activeElement.blur();
    }
  }
  function bindGlobalEventListeners() {
    document.addEventListener("click", onDocumentClick, true);
    document.addEventListener("touchstart", onDocumentTouch, PASSIVE);
    window.addEventListener("blur", onWindowBlur);
  }
  var idCounter = 1;
  function createTippy(reference, collectionProps) {
    var props = evaluateProps(reference, collectionProps);
    if (!props.multiple && reference._tippy) {
      return null;
    }
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
    var id = idCounter++;
    var popper = createPopperElement(id, props);
    var popperChildren = getChildren(popper);
    var popperInstance = null;
    var state = {
      isEnabled: true,
      isVisible: false,
      isDestroyed: false,
      isMounted: false,
      isShown: false
    };
    var instance = {
      id,
      reference,
      popper,
      popperChildren,
      popperInstance,
      props,
      state,
      clearDelayTimeouts,
      set: set2,
      setContent: setContent$$1,
      show,
      hide: hide2,
      enable,
      disable,
      destroy: destroy2
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
    }
    if (props.a11y && !props.target && !canReceiveFocus(reference)) {
      reference.setAttribute("tabindex", "0");
    }
    popper.addEventListener("mouseenter", function(event) {
      if (instance.props.interactive && instance.state.isVisible && lastTriggerEventType === "mouseenter") {
        scheduleShow(event);
      }
    });
    popper.addEventListener("mouseleave", function() {
      if (instance.props.interactive && lastTriggerEventType === "mouseenter") {
        document.addEventListener("mousemove", debouncedOnMouseMove);
      }
    });
    return instance;
    function removeFollowCursorListener() {
      document.removeEventListener("mousemove", positionVirtualReferenceNearCursor);
    }
    function cleanupOldMouseListeners() {
      document.body.removeEventListener("mouseleave", scheduleHide);
      document.removeEventListener("mousemove", debouncedOnMouseMove);
    }
    function getTransitionableElements() {
      return [instance.popperChildren.tooltip, instance.popperChildren.backdrop, instance.popperChildren.content];
    }
    function hasFollowCursorBehavior() {
      return instance.props.followCursor && !isUsingTouch && lastTriggerEventType !== "focus";
    }
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
    function onTransitionedOut(duration, callback) {
      onTransitionEnd(duration, function() {
        if (!instance.state.isVisible && currentParentNode && currentParentNode.contains(instance.popper)) {
          callback();
        }
      });
    }
    function onTransitionedIn(duration, callback) {
      onTransitionEnd(duration, callback);
    }
    function onTransitionEnd(duration, callback) {
      var tooltip = instance.popperChildren.tooltip;
      function listener(event) {
        if (event.target === tooltip) {
          updateTransitionEndListener(tooltip, "remove", listener);
          callback();
        }
      }
      if (duration === 0) {
        return callback();
      }
      updateTransitionEndListener(tooltip, "remove", currentTransitionEndListener);
      updateTransitionEndListener(tooltip, "add", listener);
      currentTransitionEndListener = listener;
    }
    function on2(eventType, handler) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      instance.reference.addEventListener(eventType, handler, options);
      listeners.push({
        eventType,
        handler,
        options
      });
    }
    function addTriggersToReference() {
      if (instance.props.touchHold && !instance.props.target) {
        on2("touchstart", onTrigger, PASSIVE);
        on2("touchend", onMouseLeave, PASSIVE);
      }
      instance.props.trigger.trim().split(" ").forEach(function(eventType) {
        if (eventType === "manual") {
          return;
        }
        if (!instance.props.target) {
          on2(eventType, onTrigger);
          switch (eventType) {
            case "mouseenter":
              on2("mouseleave", onMouseLeave);
              break;
            case "focus":
              on2(isIE ? "focusout" : "blur", onBlur);
              break;
          }
        } else {
          switch (eventType) {
            case "mouseenter":
              on2("mouseover", onDelegateShow);
              on2("mouseout", onDelegateHide);
              break;
            case "focus":
              on2("focusin", onDelegateShow);
              on2("focusout", onDelegateHide);
              break;
            case "click":
              on2(eventType, onDelegateShow);
              break;
          }
        }
      });
    }
    function removeTriggersFromReference() {
      listeners.forEach(function(_ref) {
        var eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
        instance.reference.removeEventListener(eventType, handler, options);
      });
      listeners = [];
    }
    function positionVirtualReferenceNearCursor(event) {
      var _lastMouseMoveEvent = lastMouseMoveEvent = event, clientX = _lastMouseMoveEvent.clientX, clientY = _lastMouseMoveEvent.clientY;
      if (!instance.popperInstance) {
        return;
      }
      var placement = getBasicPlacement(instance.popper);
      var padding = instance.props.arrow ? PADDING + (instance.props.arrowType === "round" ? 18 : 16) : PADDING;
      var isVerticalPlacement = includes(["top", "bottom"], placement);
      var isHorizontalPlacement = includes(["left", "right"], placement);
      var x = isVerticalPlacement ? Math.max(padding, clientX) : clientX;
      var y = isHorizontalPlacement ? Math.max(padding, clientY) : clientY;
      if (isVerticalPlacement && x > padding) {
        x = Math.min(clientX, window.innerWidth - padding);
      }
      if (isHorizontalPlacement && y > padding) {
        y = Math.min(clientY, window.innerHeight - padding);
      }
      var rect = instance.reference.getBoundingClientRect();
      var followCursor = instance.props.followCursor;
      var isHorizontal = followCursor === "horizontal";
      var isVertical = followCursor === "vertical";
      instance.popperInstance.reference = _extends({}, instance.popperInstance.reference, {
        getBoundingClientRect: function getBoundingClientRect2() {
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
      if (followCursor === "initial" && instance.state.isVisible) {
        removeFollowCursorListener();
      }
    }
    function createDelegateChildTippy(event) {
      if (event) {
        var targetEl = closest(event.target, instance.props.target);
        if (targetEl && !targetEl._tippy) {
          createTippy(targetEl, _extends({}, instance.props, {
            content: evaluateValue(collectionProps.content, [targetEl]),
            appendTo: collectionProps.appendTo,
            target: "",
            showOnInit: true
          }));
          scheduleShow(event);
        }
      }
    }
    function onTrigger(event) {
      if (!instance.state.isEnabled || isEventListenerStopped(event)) {
        return;
      }
      if (!instance.state.isVisible) {
        lastTriggerEventType = event.type;
        if (event instanceof MouseEvent) {
          lastMouseMoveEvent = event;
        }
      }
      if (event.type === "click" && instance.props.hideOnClick !== false && instance.state.isVisible) {
        scheduleHide();
      } else {
        scheduleShow(event);
      }
    }
    function onMouseMove(event) {
      var referenceTheCursorIsOver = closestCallback(event.target, function(el) {
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
    function onMouseLeave(event) {
      if (isEventListenerStopped(event)) {
        return;
      }
      if (instance.props.interactive) {
        document.body.addEventListener("mouseleave", scheduleHide);
        document.addEventListener("mousemove", debouncedOnMouseMove);
        return;
      }
      scheduleHide();
    }
    function onBlur(event) {
      if (event.target !== instance.reference) {
        return;
      }
      if (instance.props.interactive && event.relatedTarget && instance.popper.contains(event.relatedTarget)) {
        return;
      }
      scheduleHide();
    }
    function onDelegateShow(event) {
      if (closest(event.target, instance.props.target)) {
        scheduleShow(event);
      }
    }
    function onDelegateHide(event) {
      if (closest(event.target, instance.props.target)) {
        scheduleHide();
      }
    }
    function isEventListenerStopped(event) {
      var supportsTouch = "ontouchstart" in window;
      var isTouchEvent = includes(event.type, "touch");
      var touchHold = instance.props.touchHold;
      return supportsTouch && isUsingTouch && touchHold && !isTouchEvent || isUsingTouch && !touchHold && isTouchEvent;
    }
    function createPopperInstance() {
      var popperOptions = instance.props.popperOptions;
      var _instance$popperChild = instance.popperChildren, tooltip = _instance$popperChild.tooltip, arrow2 = _instance$popperChild.arrow;
      var preventOverflowModifier = getModifier(popperOptions, "preventOverflow");
      function applyMutations(data) {
        if (instance.props.flip && !instance.props.flipOnUpdate) {
          if (data.flipped) {
            instance.popperInstance.options.placement = data.placement;
          }
          setFlipModifierEnabled(instance.popperInstance.modifiers, false);
        }
        tooltip.setAttribute(PLACEMENT_ATTRIBUTE, data.placement);
        if (data.attributes[OUT_OF_BOUNDARIES_ATTRIBUTE] !== false) {
          tooltip.setAttribute(OUT_OF_BOUNDARIES_ATTRIBUTE, "");
        } else {
          tooltip.removeAttribute(OUT_OF_BOUNDARIES_ATTRIBUTE);
        }
        if (previousPlacement && previousPlacement !== data.placement && wasVisibleDuringPreviousUpdate) {
          tooltip.style.transition = "none";
          requestAnimationFrame(function() {
            tooltip.style.transition = "";
          });
        }
        previousPlacement = data.placement;
        wasVisibleDuringPreviousUpdate = instance.state.isVisible;
        var basicPlacement = getBasicPlacement(instance.popper);
        var styles = tooltip.style;
        styles.top = styles.bottom = styles.left = styles.right = "";
        styles[basicPlacement] = getOffsetDistanceInPx(instance.props.distance);
        var padding = preventOverflowModifier && preventOverflowModifier.padding !== void 0 ? preventOverflowModifier.padding : PADDING;
        var isPaddingNumber = typeof padding === "number";
        var computedPadding = _extends({
          top: isPaddingNumber ? padding : padding.top,
          bottom: isPaddingNumber ? padding : padding.bottom,
          left: isPaddingNumber ? padding : padding.left,
          right: isPaddingNumber ? padding : padding.right
        }, !isPaddingNumber && padding);
        computedPadding[basicPlacement] = isPaddingNumber ? padding + instance.props.distance : (padding[basicPlacement] || 0) + instance.props.distance;
        instance.popperInstance.modifiers.filter(function(m) {
          return m.name === "preventOverflow";
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
            element: arrow2,
            enabled: !!arrow2
          }, getModifier(popperOptions, "arrow")),
          flip: _extends({
            enabled: instance.props.flip,
            padding: instance.props.distance + PADDING,
            behavior: instance.props.flipBehavior
          }, getModifier(popperOptions, "flip")),
          offset: _extends({
            offset: instance.props.offset
          }, getModifier(popperOptions, "offset"))
        }),
        onCreate: function onCreate(data) {
          applyMutations(data);
          if (popperOptions && popperOptions.onCreate) {
            popperOptions.onCreate(data);
          }
        },
        onUpdate: function onUpdate(data) {
          applyMutations(data);
          if (popperOptions && popperOptions.onUpdate) {
            popperOptions.onUpdate(data);
          }
        }
      });
      instance.popperInstance = new Popper(instance.reference, instance.popper, config);
    }
    function mount(callback) {
      var shouldEnableListeners = !hasFollowCursorBehavior() && !(instance.props.followCursor === "initial" && isUsingTouch);
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
      }
      instance.popperInstance.reference = instance.reference;
      var arrow2 = instance.popperChildren.arrow;
      if (hasFollowCursorBehavior()) {
        if (arrow2) {
          arrow2.style.margin = "0";
        }
        if (lastMouseMoveEvent) {
          positionVirtualReferenceNearCursor(lastMouseMoveEvent);
        }
      } else if (arrow2) {
        arrow2.style.margin = "";
      }
      if (isUsingTouch && lastMouseMoveEvent && instance.props.followCursor === "initial") {
        positionVirtualReferenceNearCursor(lastMouseMoveEvent);
        if (arrow2) {
          arrow2.style.margin = "0";
        }
      }
      afterPopperPositionUpdates(instance.popperInstance, callback);
      var appendTo = instance.props.appendTo;
      currentParentNode = appendTo === "parent" ? instance.reference.parentNode : evaluateValue(appendTo, [instance.reference]);
      if (!currentParentNode.contains(instance.popper)) {
        currentParentNode.appendChild(instance.popper);
        instance.props.onMount(instance);
        instance.state.isMounted = true;
      }
    }
    function scheduleShow(event) {
      clearDelayTimeouts();
      if (instance.state.isVisible) {
        return;
      }
      if (instance.props.target) {
        return createDelegateChildTippy(event);
      }
      isScheduledToShow = true;
      if (instance.props.wait) {
        return instance.props.wait(instance, event);
      }
      if (hasFollowCursorBehavior() && !instance.state.isMounted) {
        document.addEventListener("mousemove", positionVirtualReferenceNearCursor);
      }
      var delay = getValue(instance.props.delay, 0, defaultProps.delay);
      if (delay) {
        showTimeoutId = setTimeout(function() {
          show();
        }, delay);
      } else {
        show();
      }
    }
    function scheduleHide() {
      clearDelayTimeouts();
      if (!instance.state.isVisible) {
        return removeFollowCursorListener();
      }
      isScheduledToShow = false;
      var delay = getValue(instance.props.delay, 1, defaultProps.delay);
      if (delay) {
        hideTimeoutId = setTimeout(function() {
          if (instance.state.isVisible) {
            hide2();
          }
        }, delay);
      } else {
        animationFrameId = requestAnimationFrame(function() {
          hide2();
        });
      }
    }
    function enable() {
      instance.state.isEnabled = true;
    }
    function disable() {
      instance.state.isEnabled = false;
    }
    function clearDelayTimeouts() {
      clearTimeout(showTimeoutId);
      clearTimeout(hideTimeoutId);
      cancelAnimationFrame(animationFrameId);
    }
    function set2(options) {
      options = options || {};
      validateOptions(options, defaultProps);
      var prevProps = instance.props;
      var nextProps = evaluateProps(instance.reference, _extends({}, instance.props, options, {
        ignoreAttributes: true
      }));
      nextProps.ignoreAttributes = hasOwnProperty(options, "ignoreAttributes") ? options.ignoreAttributes || false : prevProps.ignoreAttributes;
      instance.props = nextProps;
      if (hasOwnProperty(options, "trigger") || hasOwnProperty(options, "touchHold")) {
        removeTriggersFromReference();
        addTriggersToReference();
      }
      if (hasOwnProperty(options, "interactiveDebounce")) {
        cleanupOldMouseListeners();
        debouncedOnMouseMove = debounce(onMouseMove, options.interactiveDebounce || 0);
      }
      updatePopperElement(instance.popper, prevProps, nextProps);
      instance.popperChildren = getChildren(instance.popper);
      if (instance.popperInstance) {
        instance.popperInstance.update();
        if (POPPER_INSTANCE_DEPENDENCIES.some(function(prop) {
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
    function setContent$$1(content) {
      set2({
        content
      });
    }
    function show() {
      var duration = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getValue(instance.props.duration, 0, defaultProps.duration[1]);
      if (instance.state.isDestroyed || !instance.state.isEnabled || isUsingTouch && !instance.props.touch) {
        return;
      }
      if (instance.reference.hasAttribute("disabled")) {
        return;
      }
      if (instance.props.onShow(instance) === false) {
        return;
      }
      instance.popper.style.visibility = "visible";
      instance.state.isVisible = true;
      if (instance.props.interactive) {
        instance.reference.classList.add(ACTIVE_CLASS);
      }
      var transitionableElements = getTransitionableElements();
      setTransitionDuration(transitionableElements.concat(instance.popper), 0);
      mount(function() {
        if (!instance.state.isVisible) {
          return;
        }
        if (!hasFollowCursorBehavior()) {
          instance.popperInstance.update();
        }
        if (instance.popperChildren.backdrop) {
          instance.popperChildren.content.style.transitionDelay = Math.round(duration / 12) + "ms";
        }
        if (instance.props.sticky) {
          makeSticky();
        }
        setTransitionDuration([instance.popper], props.updateDuration);
        setTransitionDuration(transitionableElements, duration);
        setVisibilityState(transitionableElements, "visible");
        onTransitionedIn(duration, function() {
          if (instance.props.aria) {
            instance.reference.setAttribute("aria-".concat(instance.props.aria), instance.popper.id);
          }
          instance.props.onShown(instance);
          instance.state.isShown = true;
        });
      });
    }
    function hide2() {
      var duration = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getValue(instance.props.duration, 1, defaultProps.duration[1]);
      if (instance.state.isDestroyed || !instance.state.isEnabled) {
        return;
      }
      if (instance.props.onHide(instance) === false) {
        return;
      }
      instance.popper.style.visibility = "hidden";
      instance.state.isVisible = false;
      instance.state.isShown = false;
      wasVisibleDuringPreviousUpdate = false;
      if (instance.props.interactive) {
        instance.reference.classList.remove(ACTIVE_CLASS);
      }
      var transitionableElements = getTransitionableElements();
      setTransitionDuration(transitionableElements, duration);
      setVisibilityState(transitionableElements, "hidden");
      onTransitionedOut(duration, function() {
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
    function destroy2(destroyTargetInstances) {
      if (instance.state.isDestroyed) {
        return;
      }
      if (instance.state.isMounted) {
        hide2(0);
      }
      removeTriggersFromReference();
      delete instance.reference._tippy;
      if (instance.props.target && destroyTargetInstances) {
        arrayFrom(instance.reference.querySelectorAll(instance.props.target)).forEach(function(child) {
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
  function group(instances) {
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$delay = _ref.delay, delay = _ref$delay === void 0 ? instances[0].props.delay : _ref$delay, _ref$duration = _ref.duration, duration = _ref$duration === void 0 ? 0 : _ref$duration;
    if (instances.some(function(instance) {
      return hasOwnProperty(instance, "_originalProps");
    })) {
      return;
    }
    var isAnyTippyOpen = false;
    instances.forEach(function(instance) {
      instance._originalProps = _extends({}, instance.props);
    });
    function setIsAnyTippyOpen(value) {
      isAnyTippyOpen = value;
      updateInstances();
    }
    function onShow(instance) {
      instance._originalProps.onShow(instance);
      instances.forEach(function(instance2) {
        instance2.set({
          duration
        });
        instance2.hide();
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
      instances.forEach(function(instance) {
        instance.set({
          onShow,
          onShown,
          onHide,
          delay: isAnyTippyOpen ? [0, Array.isArray(delay) ? delay[1] : delay] : delay,
          duration: isAnyTippyOpen ? duration : instance._originalProps.duration
        });
      });
    }
    updateInstances();
  }
  var globalEventListenersBound = false;
  function tippy(targets, options) {
    validateOptions(options || {}, defaultProps);
    if (!globalEventListenersBound) {
      bindGlobalEventListeners();
      globalEventListenersBound = true;
    }
    var props = _extends({}, defaultProps, options);
    if (isBareVirtualElement(targets)) {
      polyfillElementPrototypeProperties(targets);
    }
    var instances = getArrayOfElements(targets).reduce(function(acc, reference) {
      var instance = reference && createTippy(reference, props);
      if (instance) {
        acc.push(instance);
      }
      return acc;
    }, []);
    return isSingular(targets) ? instances[0] : instances;
  }
  tippy.version = version;
  tippy.defaults = defaultProps;
  tippy.setDefaults = function(partialDefaults) {
    Object.keys(partialDefaults).forEach(function(key) {
      defaultProps[key] = partialDefaults[key];
    });
  };
  tippy.hideAll = hideAll;
  tippy.group = group;
  function autoInit() {
    arrayFrom(document.querySelectorAll("[data-tippy]")).forEach(function(el) {
      var content = el.getAttribute("data-tippy");
      if (content) {
        tippy(el, {
          content
        });
      }
    });
  }
  if (isBrowser) {
    setTimeout(autoInit);
  }
  function on(event, target, callback, options = { passive: true }) {
    target.addEventListener(event, callback, options);
    return () => {
      target.removeEventListener(event, callback, options);
    };
  }
  function onKey(key, event, target, callback, options) {
    return on(event, target, (e) => {
      if (!key) {
        callback(e);
      } else if (key === e.key || key === e.keyCode) {
        callback(e);
      }
    }, options);
  }
  function onKeydown(keys2, target, callback, options) {
    return onKey(keys2, "keydown", target, callback, options);
  }
  function onKeyup(keys2, target, callback, options) {
    return onKey(keys2, "keyup", target, callback, options);
  }
  function onKeypress(keys2, target, callback, options) {
    return onKey(keys2, "keypress", target, callback, options);
  }
  const events = {
    on,
    onKeydown,
    onKeyup,
    onKeypress
  };
  const UiFocusContainer_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$z = {
    name: "UiFocusContainer",
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
        default: "div"
      },
      lazy: {
        type: Boolean,
        default: false
      }
    },
    emits: ["focus-overflow"],
    computed: {
      renderRedirector() {
        if (this.disabled) {
          return false;
        }
        return this.lazy ? this.containFocus : true;
      }
    },
    methods: {
      focus() {
        this.$refs.content.focus();
      },
      redirectFocus(e, options) {
        if (!this.containFocus) {
          this.$emit("focus-overflow", e, options);
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
  const _hoisted_1$x = {
    ref: "content",
    class: "ui-focus-container__content",
    tabindex: "-1"
  };
  const _hoisted_2$r = {
    key: 1,
    ref: "lastFocusable",
    class: "ui-focus-container__last-focusable",
    tabindex: "-1"
  };
  function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.tag), { class: "ui-focus-container" }, {
      default: vue.withCtx(() => [
        $options.renderRedirector ? (vue.openBlock(), vue.createElementBlock("span", {
          key: 0,
          class: "ui-focus-container__focus-redirector",
          tabindex: "0",
          onFocus: _cache[0] || (_cache[0] = ($event) => $options.redirectFocus($event, { isTabbingForward: false }))
        }, null, 32)) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("div", _hoisted_1$x, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 512),
        !$props.disabled && $props.containFocus ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2$r, null, 512)) : vue.createCommentVNode("v-if", true),
        $options.renderRedirector ? (vue.openBlock(), vue.createElementBlock("span", {
          key: 2,
          class: "ui-focus-container__focus-redirector",
          tabindex: "0",
          onFocus: _cache[1] || (_cache[1] = ($event) => $options.redirectFocus($event, { isTabbingForward: true }))
        }, null, 32)) : vue.createCommentVNode("v-if", true)
      ]),
      _: 3
    });
  }
  const UiFocusContainer = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$z], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiFocusContainer.vue"]]);
  const UiPopover_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$y = {
    name: "UiPopover",
    components: {
      UiFocusContainer
    },
    props: {
      animation: {
        type: String,
        default: "fade"
      },
      appendToBody: {
        type: Boolean,
        default: true
      },
      closeOnScroll: {
        type: Boolean,
        default: true
      },
      closeOnExternalClick: {
        type: Boolean,
        default: true
      },
      closeOnEsc: {
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
        default: "click"
      },
      position: {
        type: String,
        default: "bottom-start"
      },
      raised: {
        type: Boolean,
        default: true
      },
      trigger: {
        validator(value) {
          return elementRef.validate(
            value,
            '[UiPopover]: Invalid prop: "trigger". Expected Element, VueComponent or CSS selector string which matches an existing element.'
          );
        }
      },
      zIndex: Number
    },
    emits: ["open", "close", "reveal", "hide"],
    data() {
      return {
        returnFocus: true
      };
    },
    watch: {
      disabled(value) {
        if (this.tip) {
          if (value === true) {
            this.tip.disable();
          } else {
            this.tip.enable();
          }
        }
      }
    },
    created() {
      this.tip = null;
    },
    mounted() {
      this.setupPopover();
    },
    beforeUnmount() {
      this.destroyPopover();
    },
    methods: {
      setupPopover() {
        this.triggerEl = elementRef.resolve(this.trigger, this.$el.parentElement);
        if (!this.triggerEl) {
          console.error("[UiPopover]: Trigger element not found.");
          return;
        }
        const body = this.triggerEl.getRootNode() === document ? document.body : this.triggerEl.getRootNode();
        const options = {
          animateFill: false,
          animation: this.animation === "none" ? "fade" : this.animation,
          appendTo: this.appendToBody ? body : this.triggerEl.parentElement,
          arrow: false,
          content: this.$el,
          delay: [0, 0],
          distance: 0,
          duration: this.animation === "none" ? 0 : [250, 200],
          hideOnClick: this.closeOnExternalClick,
          ignoreAttributes: true,
          interactive: true,
          lazy: true,
          maxWidth: "100%",
          multiple: true,
          onHidden: this.onHidden,
          onHide: this.onClose,
          onShow: this.onOpen,
          onShown: this.onShown,
          placement: this.position,
          role: "dialog",
          theme: "ui-popover",
          trigger: this.openOn.replace("hover", "mouseenter"),
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
        this.tip = tippy(this.triggerEl, options);
        if (this.disabled) {
          this.tip.disable();
        }
      },
      destroyPopover() {
        if (this.tip) {
          this.removeCloseEventListeners();
          this.tip.destroy();
          this.tip = null;
        }
      },
      isOpen() {
        return this.tip && this.tip.state.isVisible;
      },
      open() {
        if (this.tip) {
          this.tip.show();
        }
      },
      close(options = { returnFocus: true }) {
        if (this.tip) {
          this.returnFocus = options.returnFocus;
          this.tip.hide();
        }
      },
      toggle(options = { returnFocus: true }) {
        if (this.tip) {
          this.returnFocus = options.returnFocus;
          this.tip[this.isOpen() ? "hide" : "show"]();
        }
      },
      scheduleUpdate() {
        if (this.tip) {
          this.tip.popperInstance.scheduleUpdate();
        }
      },
      onOpen() {
        this.addCloseEventListeners();
        classlist.add(this.triggerEl, "has-dropdown-open");
        this.$emit("open");
      },
      onClose() {
        if (this.returnFocus && this.lastFocusedElement) {
          this.lastFocusedElement.focus();
        }
        this.removeCloseEventListeners();
        classlist.remove(this.triggerEl, "has-dropdown-open");
        this.$emit("close");
        this.returnFocus = true;
      },
      onShown() {
        this.lastFocusedElement = document.activeElement;
        this.$refs.focusContainer.focus();
        this.$emit("reveal");
      },
      onHidden() {
        this.$emit("hide");
      },
      closeOnExternal(event, closeOptions) {
        if (!this.$el.contains(event.target)) {
          this.close(closeOptions);
        }
      },
      addCloseEventListeners() {
        this.removeCloseEventListeners();
        setTimeout(() => {
          if (this.closeOnExternalClick) {
            this.removeExternalClickListener = events.on("click", document, (e) => {
              this.closeOnExternal(e, { returnFocus: false });
            });
          }
          if (this.closeOnEsc) {
            this.removeEscListener = events.onKeydown(27, document, () => {
              this.close({ returnFocus: true });
            });
          }
          if (this.closeOnScroll) {
            this.removeScrollListener = events.on("scroll", document, (e) => {
              this.closeOnExternal(e, { returnFocus: true });
            });
          }
        }, 0);
      },
      removeCloseEventListeners() {
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
    }
  };
  function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ui_focus_container = vue.resolveComponent("ui-focus-container");
    return vue.openBlock(), vue.createBlock(_component_ui_focus_container, {
      ref: "focusContainer",
      class: vue.normalizeClass(["ui-popover", { "is-raised": $props.raised }]),
      role: "dialog",
      "contain-focus": $props.containFocus,
      "focus-redirector": $props.focusRedirector,
      onFocusOverflow: _cache[0] || (_cache[0] = ($event) => $options.close())
    }, {
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "contain-focus", "focus-redirector"]);
  }
  const UiPopover = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$y], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiPopover.vue"]]);
  const UiProgressCircular_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$x = {
    name: "UiProgressCircular",
    props: {
      type: {
        type: String,
        default: "indeterminate"
      },
      color: {
        type: String,
        default: "primary"
      },
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
      classes() {
        return [
          `ui-progress-circular--color-${this.color}`,
          `ui-progress-circular--type-${this.type}`
        ];
      },
      strokeDashArray() {
        const circumference = 2 * Math.PI * this.radius;
        return Math.round(circumference * 1e3) / 1e3;
      },
      strokeDashOffset() {
        const progress = this.moderateProgress(this.progress);
        const circumference = 2 * Math.PI * this.radius;
        return (100 - progress) / 100 * circumference;
      },
      radius() {
        const stroke = this.stroke ? this.stroke : 4;
        return (this.size - stroke) / 2;
      },
      calculatedStroke() {
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
      moderateProgress(progress) {
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
  const _hoisted_1$w = ["aria-valuenow", "height", "width"];
  const _hoisted_2$q = ["cx", "cy", "r", "stroke-dasharray"];
  const _hoisted_3$n = {
    key: 1,
    class: "ui-progress-circular__indeterminate",
    role: "progressbar",
    viewBox: "25 25 50 50",
    "aria-valuemax": 100,
    "aria-valuemin": 0
  };
  const _hoisted_4$f = ["stroke-width"];
  function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock(vue.Transition, {
      name: $props.disableTransition ? null : "ui-progress-circular--transition-fade"
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["ui-progress-circular", $options.classes]),
          style: vue.normalizeStyle({ width: $props.size + "px", height: $props.size + "px" })
        }, [
          vue.createCommentVNode(" Alternative circle rendering to explore: http://jsfiddle.net/6e3QJ/29/ "),
          $props.type === "determinate" ? (vue.openBlock(), vue.createElementBlock("svg", {
            key: 0,
            class: "ui-progress-circular__determinate",
            role: "progressbar",
            "aria-valuemax": 100,
            "aria-valuemin": 0,
            "aria-valuenow": $props.progress,
            height: $props.size,
            width: $props.size
          }, [
            vue.createElementVNode("circle", {
              class: "ui-progress-circular__determinate-path",
              fill: "transparent",
              "stroke-dashoffset": "0",
              cx: $props.size / 2,
              cy: $props.size / 2,
              r: $options.radius,
              "stroke-dasharray": $options.strokeDashArray,
              style: vue.normalizeStyle({ "stroke-dashoffset": $options.strokeDashOffset, "stroke-width": $options.calculatedStroke })
            }, null, 12, _hoisted_2$q)
          ], 8, _hoisted_1$w)) : (vue.openBlock(), vue.createElementBlock("svg", _hoisted_3$n, [
            vue.createElementVNode("circle", {
              class: "ui-progress-circular__indeterminate-path",
              cx: "50",
              cy: "50",
              fill: "none",
              r: "20",
              "stroke-miterlimit": "10",
              "stroke-width": $options.calculatedStroke
            }, null, 8, _hoisted_4$f)
          ]))
        ], 6)
      ]),
      _: 1
    }, 8, ["name"]);
  }
  const UiProgressCircular = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$x], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiProgressCircular.vue"]]);
  const UiTooltip_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$w = {
    name: "UiTooltip",
    props: {
      animation: {
        type: String,
        default: "fade"
      },
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
        default: "mouseenter focus"
      },
      position: {
        type: String,
        default: "bottom"
      },
      trigger: {
        validator(value) {
          return elementRef.validate(
            value,
            '[UiTooltip]: Invalid prop: "trigger". Expected Element, VueComponent or CSS selector string.'
          );
        }
      },
      zIndex: Number
    },
    mounted() {
      this.triggerEl = elementRef.resolve(this.trigger, this.$el.parentElement);
      if (!this.triggerEl) {
        console.error("[UiTooltip]: Trigger element not found.");
        return;
      }
      const body = this.triggerEl.getRootNode() === document ? document.body : this.triggerEl.getRootNode();
      const options = {
        animateFill: this.animation !== "fade",
        animation: this.animation === "none" ? "fade" : this.animation,
        appendTo: this.appendToBody ? body : this.triggerEl.parentElement,
        arrow: false,
        content: this.$el,
        delay: [this.openDelay, 0],
        distance: 4,
        duration: this.animation === "none" ? 0 : [250, 200],
        ignoreAttributes: true,
        lazy: true,
        multiple: true,
        placement: this.position,
        theme: "ui-tooltip",
        trigger: this.openOn.replace("hover", "mouseenter"),
        zIndex: this.zIndex,
        popperOptions: {
          modifiers: {
            computeStyle: {
              gpuAcceleration: !(window.devicePixelRatio < 1.5 && /Win/.test(navigator.platform))
            }
          }
        }
      };
      this.tip = tippy(this.triggerEl, options);
    },
    beforeUnmount() {
      if (this.tip) {
        this.tip.destroy();
        this.tip = null;
      }
    }
  };
  const _hoisted_1$v = { class: "ui-tooltip" };
  function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$v, [
      vue.renderSlot(_ctx.$slots, "default")
    ]);
  }
  const UiTooltip = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$w], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiTooltip.vue"]]);
  const UiButton_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$v = {
    name: "UiButton",
    components: {
      UiIcon,
      UiPopover,
      UiProgressCircular,
      UiRippleInk,
      UiTooltip
    },
    props: {
      type: {
        type: String,
        default: "primary"
      },
      buttonType: String,
      href: String,
      color: {
        type: String,
        default: "default"
      },
      size: {
        type: String,
        default: "normal"
      },
      raised: {
        type: Boolean,
        default: false
      },
      icon: String,
      iconPosition: {
        type: String,
        default: "left"
      },
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
        default: "bottom-start"
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
        default: "click"
      },
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
    emits: ["dropdown-open", "dropdown-close"],
    computed: {
      classes() {
        return [
          `ui-button--type-${this.type}`,
          `ui-button--color-${this.color}`,
          `ui-button--icon-position-${this.iconPosition}`,
          `ui-button--size-${this.size}`,
          { "is-anchor": this.isAnchor },
          { "is-raised": this.raised },
          { "is-loading": this.loading },
          { "is-disabled": this.disabled || this.loading },
          { "has-dropdown": this.hasDropdown }
        ];
      },
      isAnchor() {
        return this.href !== void 0;
      },
      progressColor() {
        if (this.color === "default" || this.type === "secondary") {
          return "black";
        }
        return "white";
      }
    },
    methods: {
      onDropdownOpen() {
        this.$emit("dropdown-open");
      },
      onDropdownClose() {
        this.$emit("dropdown-close");
      },
      openDropdown() {
        if (this.$refs.dropdown) {
          this.$refs.dropdown.open();
        }
      },
      closeDropdown() {
        if (this.$refs.dropdown) {
          this.$refs.dropdown.close();
        }
      },
      toggleDropdown() {
        if (this.$refs.dropdown) {
          this.$refs.dropdown.toggle();
        }
      }
    }
  };
  const _hoisted_1$u = { class: "ui-button__content" };
  const _hoisted_2$p = {
    key: 0,
    class: "ui-button__icon"
  };
  const _hoisted_3$m = /* @__PURE__ */ vue.createElementVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ vue.createElementVNode("path", { d: "M6.984 9.984h10.03L12 15z" })
  ], -1);
  const _hoisted_4$e = /* @__PURE__ */ vue.createElementVNode("div", { class: "ui-button__focus-ring" }, null, -1);
  function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ui_icon = vue.resolveComponent("ui-icon");
    const _component_ui_progress_circular = vue.resolveComponent("ui-progress-circular");
    const _component_ui_ripple_ink = vue.resolveComponent("ui-ripple-ink");
    const _component_ui_popover = vue.resolveComponent("ui-popover");
    const _component_ui_tooltip = vue.resolveComponent("ui-tooltip");
    return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($options.isAnchor ? "a" : "button"), {
      class: vue.normalizeClass(["ui-button", $options.classes]),
      disabled: $props.disabled || $props.loading,
      href: $options.isAnchor ? $props.disabled ? null : $props.href : null,
      type: $options.isAnchor ? null : $props.buttonType
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("div", _hoisted_1$u, [
          $props.icon || _ctx.$slots.icon ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$p, [
            vue.renderSlot(_ctx.$slots, "icon", {}, () => [
              vue.createVNode(_component_ui_icon, { icon: $props.icon }, null, 8, ["icon"])
            ])
          ])) : vue.createCommentVNode("v-if", true),
          vue.renderSlot(_ctx.$slots, "default"),
          $props.hasDropdown && $props.iconPosition !== "right" ? (vue.openBlock(), vue.createBlock(_component_ui_icon, {
            key: 1,
            class: "ui-button__dropdown-icon"
          }, {
            default: vue.withCtx(() => [
              _hoisted_3$m
            ]),
            _: 1
          })) : vue.createCommentVNode("v-if", true)
        ]),
        _hoisted_4$e,
        $props.loading ? (vue.openBlock(), vue.createBlock(_component_ui_progress_circular, {
          key: 0,
          class: "ui-button__progress",
          "disable-transition": "",
          color: $options.progressColor,
          size: 18,
          stroke: 4.5
        }, null, 8, ["color", "stroke"])) : vue.createCommentVNode("v-if", true),
        !$props.disableRipple && !$props.disabled ? (vue.openBlock(), vue.createBlock(_component_ui_ripple_ink, { key: 1 })) : vue.createCommentVNode("v-if", true),
        $props.hasDropdown ? (vue.openBlock(), vue.createBlock(_component_ui_popover, {
          key: 2,
          ref: "dropdown",
          "contain-focus": "",
          "append-to-body": $props.appendDropdownToBody,
          "constrain-to-scroll-parent": $props.constrainDropdownToScrollParent,
          position: $props.dropdownPosition,
          "open-on": $props.openDropdownOn,
          onClose: $options.onDropdownClose,
          onOpen: $options.onDropdownOpen
        }, {
          default: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "dropdown")
          ]),
          _: 3
        }, 8, ["append-to-body", "constrain-to-scroll-parent", "position", "open-on", "onClose", "onOpen"])) : vue.createCommentVNode("v-if", true),
        $props.tooltip ? (vue.openBlock(), vue.createBlock(_component_ui_tooltip, {
          key: 3,
          "open-on": $props.openTooltipOn,
          position: $props.tooltipPosition
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode(vue.toDisplayString($props.tooltip), 1)
          ]),
          _: 1
        }, 8, ["open-on", "position"])) : vue.createCommentVNode("v-if", true)
      ]),
      _: 3
    }, 8, ["class", "disabled", "href", "type"]);
  }
  const UiButton = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$v], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiButton.vue"]]);
  const UiIconButton_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$u = {
    name: "UiIconButton",
    components: {
      UiIcon,
      UiPopover,
      UiProgressCircular,
      UiRippleInk,
      UiTooltip
    },
    props: {
      type: {
        type: String,
        default: "primary"
      },
      buttonType: String,
      href: String,
      color: {
        type: String,
        default: "default"
      },
      size: {
        type: String,
        default: "normal"
      },
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
        default: "bottom-start"
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
        default: "click"
      },
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
    emits: ["dropdown-open", "dropdown-close"],
    computed: {
      classes() {
        return [
          `ui-icon-button--type-${this.type}`,
          `ui-icon-button--color-${this.color}`,
          `ui-icon-button--size-${this.size}`,
          { "is-anchor": this.isAnchor },
          { "is-loading": this.loading },
          { "is-disabled": this.disabled || this.loading },
          { "has-dropdown": this.hasDropdown }
        ];
      },
      isAnchor() {
        return this.href !== void 0;
      },
      progressColor() {
        if (this.type === "primary") {
          if (this.color === "default" || this.color === "black") {
            return "black";
          }
          return "white";
        }
        if (this.color === "white") {
          return "white";
        }
        return "black";
      }
    },
    methods: {
      onDropdownOpen() {
        this.$emit("dropdown-open");
      },
      onDropdownClose() {
        this.$emit("dropdown-close");
      },
      openDropdown() {
        if (this.$refs.dropdown) {
          this.$refs.dropdown.open();
        }
      },
      closeDropdown() {
        if (this.$refs.dropdown) {
          this.$refs.dropdown.close();
        }
      },
      toggleDropdown() {
        if (this.$refs.dropdown) {
          this.$refs.dropdown.toggle();
        }
      }
    }
  };
  const _hoisted_1$t = {
    key: 0,
    class: "ui-icon-button__icon"
  };
  const _hoisted_2$o = /* @__PURE__ */ vue.createElementVNode("div", { class: "ui-icon-button__focus-ring" }, null, -1);
  function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ui_icon = vue.resolveComponent("ui-icon");
    const _component_ui_progress_circular = vue.resolveComponent("ui-progress-circular");
    const _component_ui_ripple_ink = vue.resolveComponent("ui-ripple-ink");
    const _component_ui_popover = vue.resolveComponent("ui-popover");
    const _component_ui_tooltip = vue.resolveComponent("ui-tooltip");
    return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($options.isAnchor ? "a" : "button"), {
      class: vue.normalizeClass(["ui-icon-button", $options.classes]),
      "aria-label": $props.ariaLabel || $props.tooltip,
      disabled: $props.disabled || $props.loading,
      href: $options.isAnchor ? $props.disabled ? null : $props.href : null,
      type: $options.isAnchor ? null : $props.buttonType
    }, {
      default: vue.withCtx(() => [
        $props.icon || _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$t, [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createVNode(_component_ui_icon, { icon: $props.icon }, null, 8, ["icon"])
          ])
        ])) : vue.createCommentVNode("v-if", true),
        _hoisted_2$o,
        $props.loading ? (vue.openBlock(), vue.createBlock(_component_ui_progress_circular, {
          key: 1,
          class: "ui-icon-button__progress",
          color: $options.progressColor,
          size: $props.size === "large" ? 24 : 18,
          stroke: 4.5
        }, null, 8, ["color", "size", "stroke"])) : vue.createCommentVNode("v-if", true),
        !$props.disableRipple && !$props.disabled ? (vue.openBlock(), vue.createBlock(_component_ui_ripple_ink, { key: 2 })) : vue.createCommentVNode("v-if", true),
        $props.hasDropdown ? (vue.openBlock(), vue.createBlock(_component_ui_popover, {
          key: 3,
          ref: "dropdown",
          "contain-focus": "",
          "append-to-body": $props.appendDropdownToBody,
          "constrain-to-scroll-parent": $props.constrainDropdownToScrollParent,
          position: $props.dropdownPosition,
          "open-on": $props.openDropdownOn,
          onClose: $options.onDropdownClose,
          onOpen: $options.onDropdownOpen
        }, {
          default: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "dropdown")
          ]),
          _: 3
        }, 8, ["append-to-body", "constrain-to-scroll-parent", "position", "open-on", "onClose", "onOpen"])) : vue.createCommentVNode("v-if", true),
        $props.tooltip ? (vue.openBlock(), vue.createBlock(_component_ui_tooltip, {
          key: 4,
          "open-on": $props.openTooltipOn,
          position: $props.tooltipPosition
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode(vue.toDisplayString($props.tooltip), 1)
          ]),
          _: 1
        }, 8, ["open-on", "position"])) : vue.createCommentVNode("v-if", true)
      ]),
      _: 3
    }, 8, ["aria-label", "class", "disabled", "href", "type"]);
  }
  const UiIconButton = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$u], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiIconButton.vue"]]);
  const defaultLang = {
    months: {
      full: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      abbreviated: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ]
    },
    days: {
      full: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      abbreviated: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
      ],
      initials: [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
      ]
    }
  };
  function pad(value, length) {
    while (value.length < length) {
      value = "0" + value;
    }
    return value;
  }
  function getDayFull(date, lang = defaultLang) {
    return lang.days.full[date.getDay()];
  }
  function getDayInitial(date, lang = defaultLang) {
    return lang.days.initials[date.getDay()];
  }
  function getDayAbbreviated(date, lang = defaultLang) {
    return lang.days.abbreviated[date.getDay()];
  }
  function getMonthFull(date, lang = defaultLang) {
    return lang.months.full[date.getMonth()];
  }
  function getMonthAbbreviated(date, lang = defaultLang) {
    return lang.months.abbreviated[date.getMonth()];
  }
  function getDayOfMonth(date, options = { pad: true }) {
    const day = date.getDate().toString();
    return options.pad ? pad(day) : day;
  }
  function humanize(date, lang = defaultLang) {
    const days = lang.days.abbreviated;
    const months = lang.months.full;
    return days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
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
  const dateUtils = {
    defaultLang,
    getDayFull,
    getDayInitial,
    getDayAbbreviated,
    getMonthFull,
    getMonthAbbreviated,
    getDayOfMonth,
    humanize,
    clone,
    moveToDayOfWeek,
    isSameDay,
    isBefore,
    isAfter
  };
  const UiCalendarControls_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$t = {
    name: "UiCalendarControls",
    components: {
      UiIcon,
      UiIconButton
    },
    props: {
      color: {
        type: String,
        default: "default"
      },
      lang: Object,
      dateInView: Date,
      minDate: Date,
      maxDate: Date,
      yearRange: {
        type: Array,
        required: true
      }
    },
    emits: ["go-to-date"],
    computed: {
      classes() {
        return [`ui-calendar-controls--color-${this.color}`];
      },
      monthAndYear() {
        return dateUtils.getMonthFull(this.dateInView, this.lang) + " " + this.dateInView.getFullYear();
      },
      previousMonthDisabled() {
        const lastDayOfPreviousMonth = dateUtils.clone(this.dateInView);
        lastDayOfPreviousMonth.setDate(0);
        const firstYear = Math.min(this.yearRange[0], this.yearRange[this.yearRange.length - 1]);
        const outsideYearRange = lastDayOfPreviousMonth.getFullYear() < firstYear;
        if (this.minDate) {
          return outsideYearRange || lastDayOfPreviousMonth.getTime() < this.minDate.getTime();
        }
        return outsideYearRange;
      },
      nextMonthDisabled() {
        const firstDayOfNextMonth = dateUtils.clone(this.dateInView);
        firstDayOfNextMonth.setMonth(this.dateInView.getMonth() + 1, 1);
        const lastYear = Math.max(this.yearRange[0], this.yearRange[this.yearRange.length - 1]);
        const outsideYearRange = firstDayOfNextMonth.getFullYear() > lastYear;
        if (this.maxDate) {
          return outsideYearRange || firstDayOfNextMonth.getTime() > this.maxDate.getTime();
        }
        return outsideYearRange;
      }
    },
    methods: {
      goToPreviousMonth() {
        const date = dateUtils.clone(this.dateInView);
        date.setDate(1);
        date.setMonth(date.getMonth() - 1);
        this.goToDate(date);
      },
      goToNextMonth() {
        const date = dateUtils.clone(this.dateInView);
        date.setDate(1);
        date.setMonth(date.getMonth() + 1);
        this.goToDate(date);
      },
      goToDate(date) {
        this.$emit("go-to-date", date);
      }
    }
  };
  const _hoisted_1$s = /* @__PURE__ */ vue.createElementVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ vue.createElementVNode("path", { d: "M15.422 16.078l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z" })
  ], -1);
  const _hoisted_2$n = { class: "ui-calendar-controls__month-and-year" };
  const _hoisted_3$l = /* @__PURE__ */ vue.createElementVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ vue.createElementVNode("path", { d: "M8.578 16.36l4.594-4.595L8.578 7.17l1.406-1.405 6 6-6 6z" })
  ], -1);
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ui_icon = vue.resolveComponent("ui-icon");
    const _component_ui_icon_button = vue.resolveComponent("ui-icon-button");
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(["ui-calendar-controls", $options.classes])
    }, [
      vue.createVNode(_component_ui_icon_button, {
        class: "ui-calendar-controls__nav-button",
        icon: "keyboard_arrow_left",
        type: "secondary",
        color: $props.color === "default" ? "default" : "white",
        disabled: $options.previousMonthDisabled,
        onClick: $options.goToPreviousMonth
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_ui_icon, null, {
            default: vue.withCtx(() => [
              _hoisted_1$s
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["color", "disabled", "onClick"]),
      vue.createElementVNode("div", _hoisted_2$n, vue.toDisplayString($options.monthAndYear), 1),
      vue.createVNode(_component_ui_icon_button, {
        class: "ui-calendar-controls__nav-button",
        icon: "keyboard_arrow_right",
        type: "secondary",
        color: $props.color === "default" ? "default" : "white",
        disabled: $options.nextMonthDisabled,
        onClick: $options.goToNextMonth
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_ui_icon, null, {
            default: vue.withCtx(() => [
              _hoisted_3$l
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["color", "disabled", "onClick"])
    ], 2);
  }
  const UiCalendarControls = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$t], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiCalendarControls.vue"]]);
  const UiCalendarWeek_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$s = {
    name: "UiCalendarWeek",
    props: {
      month: Number,
      weekStart: Date,
      minDate: Date,
      maxDate: Date,
      selected: Date,
      dateFilter: Function,
      color: {
        type: String,
        default: "primary"
      },
      squareCells: {
        type: Boolean,
        default: false
      }
    },
    emits: ["date-select"],
    data() {
      return {
        today: new Date()
      };
    },
    computed: {
      dates() {
        return this.buildDays(this.weekStart);
      },
      classes() {
        return [
          `ui-calendar-week--color-${this.color}`,
          { "ui-calendar-week--has-square-cells": this.squareCells }
        ];
      }
    },
    methods: {
      buildDays(weekStart) {
        const days = [dateUtils.clone(weekStart)];
        let day = dateUtils.clone(weekStart);
        for (let i2 = 1; i2 <= 6; i2++) {
          day = dateUtils.clone(day);
          day.setDate(day.getDate() + 1);
          days.push(day);
        }
        return days;
      },
      getDateClasses(date) {
        return [
          { "is-today": dateUtils.isSameDay(date, this.today) },
          { "is-in-other-month": this.isDateInOtherMonth(date) },
          { "is-selected": this.selected && dateUtils.isSameDay(date, this.selected) },
          { "is-disabled": this.isDateDisabled(date) }
        ];
      },
      selectDate(date) {
        if (this.isDateDisabled(date)) {
          return;
        }
        this.$emit("date-select", date);
      },
      isDateInOtherMonth(date) {
        return this.month !== date.getMonth();
      },
      isDateDisabled(date) {
        const isDisabled = this.minDate && dateUtils.isBefore(date, this.minDate) || this.maxDate && dateUtils.isAfter(date, this.maxDate);
        if (isDisabled) {
          return true;
        }
        return this.dateFilter ? !this.dateFilter(date) : false;
      }
    }
  };
  const _hoisted_1$r = ["disabled", "onClick"];
  function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("tr", {
      class: vue.normalizeClass(["ui-calendar-week", $options.classes])
    }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.dates, (date) => {
        return vue.openBlock(), vue.createElementBlock("td", {
          key: date.toString()
        }, [
          vue.createElementVNode("button", {
            class: vue.normalizeClass(["ui-calendar-week__date", $options.getDateClasses(date)]),
            disabled: $options.isDateDisabled(date),
            onClick: ($event) => $options.selectDate(date)
          }, [
            vue.renderSlot(_ctx.$slots, "default", { date }, () => [
              vue.createTextVNode(vue.toDisplayString(date.getDate()), 1)
            ])
          ], 10, _hoisted_1$r)
        ]);
      }), 128))
    ], 2);
  }
  const UiCalendarWeek = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$s], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiCalendarWeek.vue"]]);
  const UiCalendarMonth_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$r = {
    name: "UiCalendarMonth",
    components: {
      UiCalendarWeek
    },
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
        default: "primary"
      },
      squareCells: {
        type: Boolean,
        default: false
      }
    },
    emits: ["date-select", "change"],
    computed: {
      daysOfWeek() {
        const days = this.lang.days.initials.slice(this.startOfWeek);
        if (days.length === 7) {
          return days;
        }
        return days.concat(this.lang.days.initials.slice(0, this.startOfWeek));
      },
      currentWeekStartDates() {
        return this.getWeekStartDates(this.dateInView);
      }
    },
    methods: {
      getWeekStartDates(dateInWeek) {
        let date = dateUtils.clone(dateInWeek);
        date.setDate(1);
        date = dateUtils.moveToDayOfWeek(date, this.startOfWeek);
        const current = dateUtils.clone(date);
        current.setDate(current.getDate() + 7);
        const starts = [date];
        const month = current.getMonth();
        while (current.getMonth() === month) {
          starts.push(dateUtils.clone(current));
          current.setDate(current.getDate() + 7);
        }
        return starts;
      },
      goToDate(date) {
        this.$emit("change", dateUtils.clone(date));
      },
      onDateSelect(date) {
        this.$emit("date-select", date);
      }
    }
  };
  const _hoisted_1$q = { class: "ui-calendar-month" };
  const _hoisted_2$m = { class: "ui-calendar-month__header" };
  const _hoisted_3$k = { class: "ui-calendar-month__body" };
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ui_calendar_week = vue.resolveComponent("ui-calendar-week");
    return vue.openBlock(), vue.createElementBlock("table", _hoisted_1$q, [
      vue.createElementVNode("thead", _hoisted_2$m, [
        vue.createElementVNode("tr", null, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.daysOfWeek, (day) => {
            return vue.openBlock(), vue.createElementBlock("th", { key: day }, vue.toDisplayString(day), 1);
          }), 128))
        ])
      ]),
      vue.createElementVNode("tbody", _hoisted_3$k, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.currentWeekStartDates, (date) => {
          return vue.openBlock(), vue.createBlock(_component_ui_calendar_week, {
            key: date.toString(),
            color: $props.color,
            "date-filter": $props.dateFilter,
            "max-date": $props.maxDate,
            "min-date": $props.minDate,
            month: $options.currentWeekStartDates[1].getMonth(),
            selected: $props.selected,
            "square-cells": $props.squareCells,
            "week-start": date,
            onDateSelect: $options.onDateSelect
          }, vue.createSlots({ _: 2 }, [
            _ctx.$slots.date ? {
              name: "default",
              fn: vue.withCtx((props) => [
                vue.renderSlot(_ctx.$slots, "date", {
                  date: props.date
                })
              ])
            } : void 0
          ]), 1032, ["color", "date-filter", "max-date", "min-date", "month", "selected", "square-cells", "week-start", "onDateSelect"]);
        }), 128))
      ])
    ]);
  }
  const UiCalendarMonth = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$r], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiCalendarMonth.vue"]]);
  const UiCalendar_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$q = {
    name: "UiCalendar",
    components: {
      UiCalendarControls,
      UiCalendarMonth
    },
    props: {
      color: {
        type: String,
        default: "default"
      },
      dateFilter: Function,
      lang: {
        type: Object,
        default() {
          return dateUtils.defaultLang;
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
      modelValue: Date,
      yearRange: {
        type: Array,
        default() {
          const thisYear = new Date().getFullYear();
          return Array.apply(null, Array(200)).map((item, index) => {
            return thisYear - 100 + index;
          });
        }
      }
    },
    emits: ["update:modelValue", "date-select", "month-change"],
    data() {
      return {
        today: new Date(),
        dateInView: this.modelValue || new Date()
      };
    },
    computed: {
      classes() {
        return [`ui-calendar--color-${this.color}`, { "is-raised": this.raised }];
      }
    },
    watch: {
      modelValue() {
        if (this.modelValue) {
          this.dateInView = dateUtils.clone(this.modelValue);
        }
      }
    },
    methods: {
      onDateSelect(date) {
        this.$emit("update:modelValue", date);
        this.$emit("date-select", date);
      },
      onMonthChange(newDate) {
        this.dateInView = newDate;
        this.$emit("month-change", newDate);
      },
      goToDate(date) {
        this.$refs.month.goToDate(date);
      }
    }
  };
  const _hoisted_1$p = { class: "ui-calendar__body" };
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ui_calendar_controls = vue.resolveComponent("ui-calendar-controls");
    const _component_ui_calendar_month = vue.resolveComponent("ui-calendar-month");
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(["ui-calendar", $options.classes])
    }, [
      vue.createVNode(_component_ui_calendar_controls, {
        ref: "controls",
        class: "ui-calendar__header",
        color: $props.color,
        "date-in-view": $data.dateInView,
        lang: $props.lang,
        "max-date": $props.maxDate,
        "min-date": $props.minDate,
        "year-range": $props.yearRange,
        onGoToDate: $options.goToDate
      }, null, 8, ["color", "date-in-view", "lang", "max-date", "min-date", "year-range", "onGoToDate"]),
      vue.createElementVNode("div", _hoisted_1$p, [
        vue.createVNode(_component_ui_calendar_month, {
          ref: "month",
          color: $props.color,
          "date-in-view": $data.dateInView,
          lang: $props.lang,
          selected: $props.modelValue,
          "start-of-week": $props.startOfWeek,
          "square-cells": $props.squareCells,
          onChange: $options.onMonthChange,
          onDateSelect: $options.onDateSelect
        }, {
          date: vue.withCtx((props) => [
            _ctx.$slots.date ? vue.renderSlot(_ctx.$slots, "date", {
              key: 0,
              date: props.date
            }) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
              vue.createTextVNode(vue.toDisplayString(props.date.getDate()), 1)
            ], 64))
          ]),
          _: 3
        }, 8, ["color", "date-in-view", "lang", "selected", "start-of-week", "square-cells", "onChange", "onDateSelect"])
      ])
    ], 2);
  }
  const UiCalendar = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$q], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiCalendar.vue"]]);
  const UiCheckbox_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$p = {
    name: "UiCheckbox",
    props: {
      name: String,
      label: String,
      tabindex: [String, Number],
      modelValue: {
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
        default: "on"
      },
      checked: {
        type: Boolean,
        default: false
      },
      boxPosition: {
        type: String,
        default: "left"
      },
      color: {
        type: String,
        default: "primary"
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    emits: ["update:modelValue", "change", "focus", "blur", "change"],
    data() {
      return {
        isActive: false,
        isChecked: this.modelValue === this.trueValue || this.checked
      };
    },
    computed: {
      classes() {
        return [
          `ui-checkbox--color-${this.color}`,
          `ui-checkbox--box-position-${this.boxPosition}`,
          { "is-checked": this.isChecked },
          { "is-active": this.isActive },
          { "is-disabled": this.disabled }
        ];
      }
    },
    watch: {
      modelValue() {
        this.isChecked = this.modelValue === this.trueValue;
      }
    },
    created() {
      const value = this.isChecked ? this.trueValue : this.falseValue;
      if (this.modelValue !== value) {
        this.$emit("update:modelValue", value);
      }
    },
    methods: {
      focus() {
        this.$refs.input.focus();
      },
      onClick(e) {
        const isCheckedPrevious = this.isChecked;
        const isChecked = e.target.checked;
        this.$emit("update:modelValue", isChecked ? this.trueValue : this.falseValue, e);
        if (isCheckedPrevious !== isChecked) {
          this.$emit("change", isChecked ? this.trueValue : this.falseValue, e);
        }
      },
      onFocus(e) {
        this.isActive = true;
        this.$emit("focus", e);
      },
      onBlur(e) {
        this.isActive = false;
        this.$emit("blur", e);
      }
    }
  };
  const _hoisted_1$o = [".checked", "disabled", "name", "tabindex", "value"];
  const _hoisted_2$l = /* @__PURE__ */ vue.createElementVNode("div", { class: "ui-checkbox__checkmark" }, [
    /* @__PURE__ */ vue.createElementVNode("div", { class: "ui-checkbox__checkmark-background" }),
    /* @__PURE__ */ vue.createElementVNode("div", { class: "ui-checkbox__focus-ring" })
  ], -1);
  const _hoisted_3$j = {
    key: 0,
    class: "ui-checkbox__label-text"
  };
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("label", {
      class: vue.normalizeClass(["ui-checkbox", $options.classes])
    }, [
      vue.createElementVNode("input", {
        ref: "input",
        class: "ui-checkbox__input",
        type: "checkbox",
        ".checked": $data.isChecked,
        disabled: $props.disabled,
        name: $props.name,
        tabindex: $props.tabindex,
        value: $props.submittedValue,
        onBlur: _cache[0] || (_cache[0] = (...args) => $options.onBlur && $options.onBlur(...args)),
        onClick: _cache[1] || (_cache[1] = (...args) => $options.onClick && $options.onClick(...args)),
        onFocus: _cache[2] || (_cache[2] = (...args) => $options.onFocus && $options.onFocus(...args))
      }, null, 40, _hoisted_1$o),
      _hoisted_2$l,
      $props.label || _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$j, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createTextVNode(vue.toDisplayString($props.label), 1)
        ])
      ])) : vue.createCommentVNode("v-if", true)
    ], 2);
  }
  const UiCheckbox = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$p], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiCheckbox.vue"]]);
  const UiCheckboxGroup_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$o = {
    name: "UiCheckboxGroup",
    components: {
      UiCheckbox
    },
    props: {
      name: String,
      options: {
        type: Array,
        required: true
      },
      modelValue: {
        type: Array,
        required: true
      },
      keys: {
        type: Object,
        default() {
          return {
            id: "id",
            name: "name",
            class: "class",
            label: "label",
            value: "value",
            disabled: "disabled"
          };
        }
      },
      label: String,
      color: {
        type: String,
        default: "primary"
      },
      boxPosition: {
        type: String,
        default: "left"
      },
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
    emits: ["update:modelValue", "focus", "blur", "change"],
    data() {
      return {
        isActive: false,
        ignoreChange: false,
        checkboxValues: [],
        initialValue: JSON.parse(JSON.stringify(this.modelValue))
      };
    },
    computed: {
      classes() {
        return [
          `ui-checkbox-group--color-${this.color}`,
          `ui-checkbox-group--box-position-${this.boxPosition}`,
          { "is-vertical": this.vertical },
          { "is-active": this.isActive },
          { "is-invalid": this.invalid },
          { "is-disabled": this.disabled }
        ];
      },
      hasFeedback() {
        return this.showError || this.showHelp;
      },
      showError() {
        return this.invalid && (Boolean(this.error) || Boolean(this.$slots.error));
      },
      showHelp() {
        return Boolean(this.help) || Boolean(this.$slots.help);
      }
    },
    methods: {
      reset() {
        this.ignoreChange = true;
        this.options.forEach((option, index) => {
          this.checkboxValues[index] = this.isOptionCheckedByDefault(option);
        });
        this.ignoreChange = false;
        this.$emit(
          "update:modelValue",
          this.initialValue.length > 0 ? [].concat(this.initialValue) : []
        );
      },
      isOptionCheckedByDefault(option) {
        return looseIndexOf(this.initialValue, option[this.keys.value] || option) > -1;
      },
      onFocus(e) {
        this.isActive = true;
        this.$emit("focus", e);
      },
      onBlur(e) {
        this.isActive = false;
        this.$emit("blur", e);
      },
      onChange(args, option) {
        if (this.ignoreChange) {
          return;
        }
        const checked = args[0];
        const e = args[1];
        let value = [];
        const optionValue = option[this.keys.value] || option;
        const i2 = looseIndexOf(this.modelValue, optionValue);
        if (checked && i2 < 0) {
          value = this.modelValue.concat(optionValue);
        }
        if (!checked && i2 > -1) {
          value = this.modelValue.slice(0, i2).concat(this.modelValue.slice(i2 + 1));
        }
        this.$emit("update:modelValue", value);
        this.$emit("change", value, e);
      }
    }
  };
  const _hoisted_1$n = {
    key: 0,
    class: "ui-checkbox-group__label-text"
  };
  const _hoisted_2$k = { class: "ui-checkbox-group__checkboxes" };
  const _hoisted_3$i = {
    key: 1,
    class: "ui-checkbox-group__feedback"
  };
  const _hoisted_4$d = {
    key: 0,
    class: "ui-checkbox-group__feedback-text"
  };
  const _hoisted_5$d = {
    key: 1,
    class: "ui-checkbox-group__feedback-text"
  };
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ui_checkbox = vue.resolveComponent("ui-checkbox");
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(["ui-checkbox-group", $options.classes])
    }, [
      $props.label || _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$n, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createTextVNode(vue.toDisplayString($props.label), 1)
        ])
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("div", _hoisted_2$k, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.options, (option, index) => {
          return vue.openBlock(), vue.createBlock(_component_ui_checkbox, {
            id: option[$props.keys.id],
            key: option[$props.keys.id],
            modelValue: $data.checkboxValues[index],
            "onUpdate:modelValue": ($event) => $data.checkboxValues[index] = $event,
            class: vue.normalizeClass(["ui-checkbox-group__checkbox", option[$props.keys.class]]),
            "box-position": $props.boxPosition,
            checked: $options.isOptionCheckedByDefault(option),
            color: $props.color,
            disabled: $props.disabled || option[$props.keys.disabled],
            name: $props.name || option[$props.keys.name],
            onBlur: $options.onBlur,
            onChange: ($event) => $options.onChange(arguments, option),
            onFocus: $options.onFocus
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(vue.toDisplayString(option[$props.keys.label] || option), 1)
            ]),
            _: 2
          }, 1032, ["id", "modelValue", "onUpdate:modelValue", "box-position", "checked", "class", "color", "disabled", "name", "onBlur", "onChange", "onFocus"]);
        }), 128))
      ]),
      $options.hasFeedback ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$i, [
        $options.showError ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4$d, [
          vue.renderSlot(_ctx.$slots, "error", {}, () => [
            vue.createTextVNode(vue.toDisplayString($props.error), 1)
          ])
        ])) : $options.showHelp ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5$d, [
          vue.renderSlot(_ctx.$slots, "help", {}, () => [
            vue.createTextVNode(vue.toDisplayString($props.help), 1)
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ])) : vue.createCommentVNode("v-if", true)
    ], 2);
  }
  const UiCheckboxGroup = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$o], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiCheckboxGroup.vue"]]);
  /**
   * Fast UUID generator, RFC4122 version 4 compliant.
   * @author Jeff Ward (jcward.com).
   * @license MIT license
   * @link http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
   */
  const lut = [];
  for (let i2 = 0; i2 < 256; i2++) {
    lut[i2] = (i2 < 16 ? "0" : "") + i2.toString(16);
  }
  const generate = function() {
    const d0 = Math.random() * 4294967295 | 0;
    const d1 = Math.random() * 4294967295 | 0;
    const d2 = Math.random() * 4294967295 | 0;
    const d3 = Math.random() * 4294967295 | 0;
    return lut[d0 & 255] + lut[d0 >> 8 & 255] + lut[d0 >> 16 & 255] + lut[d0 >> 24 & 255] + "-" + lut[d1 & 255] + lut[d1 >> 8 & 255] + "-" + lut[d1 >> 16 & 15 | 64] + lut[d1 >> 24 & 255] + "-" + lut[d2 & 63 | 128] + lut[d2 >> 8 & 255] + "-" + lut[d2 >> 16 & 255] + lut[d2 >> 24 & 255] + lut[d3 & 255] + lut[d3 >> 8 & 255] + lut[d3 >> 16 & 255] + lut[d3 >> 24 & 255];
  };
  const short = function(prefix) {
    prefix = prefix || "";
    const uuid = generate();
    return prefix + uuid.split("-")[0];
  };
  const UUID = {
    generate,
    short
  };
  const UiCollapsible_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$n = {
    name: "UiCollapsible",
    components: {
      UiIcon,
      UiRippleInk
    },
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
    emits: ["open", "close"],
    data() {
      return {
        isOpen: this.open,
        id: UUID.short("ui-collapsible-")
      };
    },
    computed: {
      classes() {
        return [{ "is-open": this.isOpen }, { "is-disabled": this.disabled }];
      }
    },
    watch: {
      open() {
        if (this.isOpen !== this.open) {
          this.isOpen = this.open;
        }
      }
    },
    mounted() {
      if (this.isOpen) {
        this.$refs.bodyWrapper.style.maxHeight = "none";
      }
    },
    methods: {
      toggleCollapsible() {
        if (this.disabled) {
          return;
        }
        this.isOpen = !this.isOpen;
      },
      onEnter(el) {
        this.$emit("open");
        el.style.maxHeight = el.scrollHeight + "px";
      },
      afterEnter(el) {
        el.style.maxHeight = "none";
      },
      beforeLeave(el) {
        el.style.maxHeight = el.scrollHeight + "px";
        el.offsetHeight;
      },
      onLeave(el) {
        el.style.maxHeight = 0;
        this.$emit("close");
      }
    }
  };
  const _hoisted_1$m = ["aria-controls", "aria-expanded", "tabindex"];
  const _hoisted_2$j = { class: "ui-collapsible__header-content" };
  const _hoisted_3$h = /* @__PURE__ */ vue.createElementVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ vue.createElementVNode("path", { d: "M7.406 7.828L12 12.422l4.594-4.594L18 9.234l-6 6-6-6z" })
  ], -1);
  const _hoisted_4$c = ["id", "aria-hidden"];
  const _hoisted_5$c = { class: "ui-collapsible__body" };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ui_icon = vue.resolveComponent("ui-icon");
    const _component_ui_ripple_ink = vue.resolveComponent("ui-ripple-ink");
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(["ui-collapsible", $options.classes])
    }, [
      vue.createElementVNode("div", {
        class: "ui-collapsible__header",
        "aria-controls": $data.id,
        "aria-expanded": $data.isOpen ? "true" : "false",
        tabindex: $props.disabled ? null : 0,
        onClick: _cache[0] || (_cache[0] = (...args) => $options.toggleCollapsible && $options.toggleCollapsible(...args)),
        onKeydown: [
          _cache[1] || (_cache[1] = vue.withKeys(vue.withModifiers((...args) => $options.toggleCollapsible && $options.toggleCollapsible(...args), ["prevent"]), ["enter"])),
          _cache[2] || (_cache[2] = vue.withKeys(vue.withModifiers((...args) => $options.toggleCollapsible && $options.toggleCollapsible(...args), ["prevent"]), ["space"]))
        ]
      }, [
        vue.createElementVNode("div", _hoisted_2$j, [
          vue.renderSlot(_ctx.$slots, "header", {}, () => [
            vue.createTextVNode(vue.toDisplayString($props.title), 1)
          ])
        ]),
        !$props.removeIcon ? (vue.openBlock(), vue.createBlock(_component_ui_icon, {
          key: 0,
          class: "ui-collapsible__header-icon"
        }, {
          default: vue.withCtx(() => [
            _hoisted_3$h
          ]),
          _: 1
        })) : vue.createCommentVNode("v-if", true),
        !$props.disableRipple && !$props.disabled ? (vue.openBlock(), vue.createBlock(_component_ui_ripple_ink, { key: 1 })) : vue.createCommentVNode("v-if", true)
      ], 40, _hoisted_1$m),
      vue.createVNode(vue.Transition, {
        onEnter: $options.onEnter,
        onAfterEnter: $options.afterEnter,
        onBeforeLeave: $options.beforeLeave,
        onLeave: $options.onLeave,
        persisted: ""
      }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createElementVNode("div", {
            id: $data.id,
            ref: "bodyWrapper",
            class: "ui-collapsible__body-wrapper",
            "aria-hidden": $data.isOpen ? null : "true"
          }, [
            vue.createElementVNode("div", _hoisted_5$c, [
              vue.renderSlot(_ctx.$slots, "default")
            ])
          ], 8, _hoisted_4$c), [
            [vue.vShow, $data.isOpen]
          ])
        ]),
        _: 3
      }, 8, ["onEnter", "onAfterEnter", "onBeforeLeave", "onLeave"])
    ], 2);
  }
  const UiCollapsible = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$n], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiCollapsible.vue"]]);
  const UiModal_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$m = {
    name: "UiModal",
    components: {
      UiCloseButton,
      UiFocusContainer
    },
    props: {
      title: {
        type: String,
        default: "UiModal title"
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
        default: "normal"
      },
      role: {
        type: String,
        default: "dialog"
      },
      transition: {
        type: String,
        default: "scale-down"
      },
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
        default: "backdrop esc close-button"
      },
      beforeClose: Function
    },
    emits: ["open", "close", "reveal", "hide"],
    data() {
      return {
        isOpen: false,
        lastFocusedElement: null
      };
    },
    computed: {
      classes() {
        return [
          `ui-modal--size-${this.size}`,
          { "has-footer": this.hasFooter },
          { "is-open": this.isOpen },
          { "is-aligned-top": this.alignTop }
        ];
      },
      alignTopStyle() {
        if (this.alignTop) {
          return { "padding-top": this.alignTopMargin + "px" };
        }
        return null;
      },
      toggleTransition() {
        return `ui-modal--transition-${this.transition}`;
      },
      hasFooter() {
        return Boolean(this.$slots.footer);
      },
      dismissOnBackdrop() {
        return this.dismissOn.indexOf("backdrop") > -1;
      },
      dismissOnCloseButton() {
        return this.dismissOn.indexOf("close-button") > -1;
      },
      dismissOnEsc() {
        return this.dismissOn.indexOf("esc") > -1;
      }
    },
    watch: {
      isOpen() {
        this.$nextTick(() => {
          this[this.isOpen ? "onOpen" : "onClose"]();
        });
      }
    },
    beforeUnmount() {
      if (this.isOpen) {
        this.returnFocus();
      }
    },
    methods: {
      open() {
        this.isOpen = true;
      },
      close() {
        if (!this.dismissible) {
          return;
        }
        if (this.beforeClose && this.beforeClose(this) === false) {
          return;
        }
        this.isOpen = false;
      },
      redirectFocus() {
        this.$refs.focusContainer.focus();
      },
      returnFocus() {
        if (this.lastFocusedElement) {
          this.lastFocusedElement.focus();
        }
      },
      onBackdropMouseDown() {
        this.mouseDownSource = "backdrop";
      },
      onBackdropMouseUp() {
        if (this.dismissOnBackdrop && this.mouseDownSource === "backdrop") {
          this.close();
        } else {
          this.redirectFocus();
        }
        this.mouseDownSource = void 0;
      },
      onEsc() {
        if (this.dismissOnEsc) {
          this.close();
        }
      },
      onOpen() {
        this.lastFocusedElement = document.activeElement;
        this.$refs.focusContainer.focus();
        classlist.add(document.body, "ui-modal--is-open");
        this.incrementOpenModalCount();
        this.$emit("open");
      },
      onClose() {
        this.returnFocus();
        this.$emit("close");
      },
      onEnter() {
        this.$emit("reveal");
      },
      onLeave() {
        this.$emit("hide");
        const newCount = this.decrementOpenModalCount();
        if (newCount === 0) {
          classlist.remove(document.body, "ui-modal--is-open");
        }
      },
      getOpenModalCount() {
        const count = document.body.getAttribute("data-ui-open-modals");
        return count === void 0 ? 0 : Number(count);
      },
      setOpenModalCount(count) {
        const normalizedCount = Math.max(0, count);
        if (normalizedCount === 0) {
          document.body.removeAttribute("data-ui-open-modals");
        } else {
          document.body.setAttribute("data-ui-open-modals", normalizedCount);
        }
        return normalizedCount;
      },
      incrementOpenModalCount() {
        return this.setOpenModalCount(this.getOpenModalCount() + 1);
      },
      decrementOpenModalCount() {
        return this.setOpenModalCount(this.getOpenModalCount() - 1);
      }
    }
  };
  const _hoisted_1$l = ["role"];
  const _hoisted_2$i = {
    key: 0,
    class: "ui-modal__header"
  };
  const _hoisted_3$g = { class: "ui-modal__header-text" };
  const _hoisted_4$b = { class: "ui-modal__close-button" };
  const _hoisted_5$b = { class: "ui-modal__body" };
  const _hoisted_6$9 = {
    key: 1,
    class: "ui-modal__footer"
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ui_close_button = vue.resolveComponent("ui-close-button");
    const _component_ui_focus_container = vue.resolveComponent("ui-focus-container");
    return vue.openBlock(), vue.createBlock(vue.Transition, {
      name: $options.toggleTransition,
      onAfterEnter: $options.onEnter,
      onAfterLeave: $options.onLeave,
      persisted: ""
    }, {
      default: vue.withCtx(() => [
        vue.withDirectives(vue.createElementVNode("div", {
          class: vue.normalizeClass(["ui-modal ui-modal__mask", $options.classes]),
          role: $props.role,
          onMousedown: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.onBackdropMouseDown && $options.onBackdropMouseDown(...args), ["self"])),
          onMouseup: _cache[3] || (_cache[3] = vue.withModifiers((...args) => $options.onBackdropMouseUp && $options.onBackdropMouseUp(...args), ["self"]))
        }, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(["ui-modal__wrapper", { "has-dummy-scrollbar": $props.preventShift }]),
            style: vue.normalizeStyle($options.alignTopStyle),
            onMousedown: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.onBackdropMouseDown && $options.onBackdropMouseDown(...args), ["self"])),
            onMouseup: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.onBackdropMouseUp && $options.onBackdropMouseUp(...args), ["self"]))
          }, [
            vue.createVNode(_component_ui_focus_container, {
              ref: "focusContainer",
              class: "ui-modal__container",
              tabindex: "-1",
              onKeydown: vue.withKeys(vue.withModifiers($options.onEsc, ["stop"]), ["esc"])
            }, {
              default: vue.withCtx(() => [
                !$props.removeHeader ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$i, [
                  vue.renderSlot(_ctx.$slots, "header", {}, () => [
                    vue.createElementVNode("h1", _hoisted_3$g, vue.toDisplayString($props.title), 1)
                  ]),
                  vue.createElementVNode("div", _hoisted_4$b, [
                    $options.dismissOnCloseButton && !$props.removeCloseButton && $props.dismissible ? (vue.openBlock(), vue.createBlock(_component_ui_close_button, {
                      key: 0,
                      onClick: $options.close
                    }, null, 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
                  ])
                ])) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("div", _hoisted_5$b, [
                  vue.renderSlot(_ctx.$slots, "default")
                ]),
                $options.hasFooter ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_6$9, [
                  vue.renderSlot(_ctx.$slots, "footer")
                ])) : vue.createCommentVNode("v-if", true)
              ]),
              _: 3
            }, 8, ["onKeydown"])
          ], 38)
        ], 42, _hoisted_1$l), [
          [vue.vShow, $data.isOpen]
        ])
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave"]);
  }
  const UiModal = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$m], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiModal.vue"]]);
  const UiConfirm_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$l = {
    name: "UiConfirm",
    components: {
      UiButton,
      UiModal
    },
    props: {
      title: {
        type: String,
        default: "UiConfirm"
      },
      type: {
        type: String,
        default: "primary"
      },
      size: String,
      confirmButtonText: {
        type: String,
        default: "OK"
      },
      confirmButtonIcon: String,
      denyButtonText: {
        type: String,
        default: "Cancel"
      },
      denyButtonIcon: String,
      autofocus: {
        type: String,
        default: "deny-button"
      },
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
    emits: ["confirm", "deny", "open", "reveal", "close", "hide"],
    computed: {
      confirmButtonColor() {
        const typeToColor = {
          default: "default",
          primary: "primary",
          accent: "accent",
          success: "green",
          warning: "orange",
          danger: "red"
        };
        return typeToColor[this.type];
      }
    },
    methods: {
      open() {
        this.$refs.modal.open();
      },
      close() {
        this.$refs.modal.close();
      },
      confirm() {
        this.$emit("confirm");
        if (this.closeOnConfirm) {
          this.$refs.modal.close();
        }
      },
      deny() {
        this.$refs.modal.close();
        this.$emit("deny");
      },
      onModalOpen() {
        let button;
        if (this.autofocus === "confirm-button") {
          button = this.$refs.confirmButton.$el;
        } else if (this.autofocus === "deny-button") {
          button = this.$refs.denyButton.$el;
        }
        if (button) {
          classlist.add(button, "has-focus-ring");
          button.addEventListener("blur", this.removeAutoFocus);
          button.focus();
        }
        this.$emit("open");
      },
      onModalReveal() {
        this.$emit("reveal");
      },
      onModalClose() {
        this.$emit("close");
      },
      onModalHide() {
        this.$emit("hide");
      },
      removeAutoFocus() {
        let button;
        if (this.autofocus === "confirm-button") {
          button = this.$refs.confirmButton.$el;
        } else if (this.autofocus === "deny-button") {
          button = this.$refs.denyButton.$el;
        }
        if (button) {
          classlist.remove(button, "has-focus-ring");
          button.removeEventListener("blur", this.removeAutoFocus);
        }
      }
    }
  };
  const _hoisted_1$k = { class: "ui-confirm__message" };
  const _hoisted_2$h = { class: "ui-confirm__footer" };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ui_button = vue.resolveComponent("ui-button");
    const _component_ui_modal = vue.resolveComponent("ui-modal");
    return vue.openBlock(), vue.createBlock(_component_ui_modal, {
      ref: "modal",
      class: "ui-confirm",
      role: "alertdialog",
      "dismiss-on": $props.dismissOn,
      dismissible: !$props.loading,
      title: $props.title,
      transition: $props.transition,
      size: $props.size,
      onClose: $options.onModalClose,
      onHide: $options.onModalHide,
      onOpen: $options.onModalOpen,
      onReveal: $options.onModalReveal
    }, {
      footer: vue.withCtx(() => [
        vue.createElementVNode("div", _hoisted_2$h, [
          vue.createVNode(_component_ui_button, {
            ref: "confirmButton",
            color: $options.confirmButtonColor,
            icon: $props.confirmButtonIcon,
            loading: $props.loading,
            onClick: $options.confirm
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(vue.toDisplayString($props.confirmButtonText), 1)
            ]),
            _: 1
          }, 8, ["color", "icon", "loading", "onClick"]),
          vue.createVNode(_component_ui_button, {
            ref: "denyButton",
            disabled: $props.loading,
            icon: $props.denyButtonIcon,
            onClick: $options.deny
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(vue.toDisplayString($props.denyButtonText), 1)
            ]),
            _: 1
          }, 8, ["disabled", "icon", "onClick"])
        ])
      ]),
      default: vue.withCtx(() => [
        vue.createElementVNode("div", _hoisted_1$k, [
          vue.renderSlot(_ctx.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["dismiss-on", "dismissible", "title", "transition", "size", "onClose", "onHide", "onOpen", "onReveal"]);
  }
  const UiConfirm = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$l], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiConfirm.vue"]]);
  function inView(element, container) {
    if (!element) {
      return;
    }
    container = container || element.parentElement;
    const top = element.offsetTop;
    const parentTop = container.scrollTop;
    const bottom = top + element.offsetHeight;
    const parentBottom = container.offsetHeight;
    return top >= parentTop && bottom <= parentBottom;
  }
  function scrollIntoView(element, options = { container: null, marginTop: 0 }) {
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
  const UiDatepickerCalendar_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$k = {
    name: "UiDatepickerCalendar",
    components: {
      UiCalendarControls,
      UiCalendarMonth
    },
    props: {
      modelValue: Date,
      minDate: Date,
      maxDate: Date,
      startOfWeek: {
        type: Number,
        default: 0
      },
      currentView: {
        type: String,
        validator: (value) => value === "date" || value === "year"
      },
      lang: {
        type: Object,
        default() {
          return dateUtils.defaultLang;
        }
      },
      yearRange: {
        type: Array,
        default() {
          const thisYear = new Date().getFullYear();
          return Array.apply(null, Array(200)).map((item, index) => {
            return thisYear - 100 + index;
          });
        }
      },
      dateFilter: Function,
      color: {
        type: String,
        default: "primary"
      },
      orientation: {
        type: String,
        default: "portrait"
      }
    },
    emits: ["update:modelValue", "update:currentView", "date-select", "month-change"],
    data() {
      return {
        today: new Date(),
        dateInView: this.getDateInRange(this.modelValue, new Date())
      };
    },
    computed: {
      classes() {
        return [
          `ui-datepicker-calendar--color-${this.color}`,
          `ui-datepicker-calendar--orientation-${this.orientation}`
        ];
      },
      headerYear() {
        return this.modelValue ? this.modelValue.getFullYear() : this.today.getFullYear();
      },
      headerWeekday() {
        return this.modelValue ? dateUtils.getDayAbbreviated(this.modelValue, this.lang) : dateUtils.getDayAbbreviated(this.today, this.lang);
      },
      headerDay() {
        const date = this.modelValue ? this.modelValue : this.today;
        return dateUtils.getMonthAbbreviated(date, this.lang) + " " + dateUtils.getDayOfMonth(date, this.lang);
      },
      showYearPicker() {
        return this.currentView === "year";
      },
      showDatePicker() {
        return this.currentView === "date";
      },
      yearRangeFiltered() {
        return this.yearRange.filter((year) => !this.isYearOutOfRange(year));
      }
    },
    watch: {
      modelValue() {
        if (this.modelValue) {
          this.dateInView = dateUtils.clone(this.modelValue);
        }
      },
      currentView() {
        if (this.showYearPicker) {
          this.$nextTick(() => {
            const el = this.$refs.years.querySelector(".is-selected") || this.$refs.years.querySelector(".is-current-year");
            scrollIntoView(el, { marginTop: 144 });
          });
        }
      }
    },
    methods: {
      selectYear(year) {
        const newDate = dateUtils.clone(this.dateInView);
        newDate.setFullYear(year);
        this.dateInView = this.getDateInRange(newDate);
        this.$emit("update:currentView", "date");
      },
      getDateInRange(date, fallback) {
        date = date || fallback;
        if (this.minDate && date.getTime() < this.minDate.getTime()) {
          return this.minDate;
        }
        if (this.maxDate && date.getTime() > this.maxDate.getTime()) {
          return this.maxDate;
        }
        return date;
      },
      getYearClasses(year) {
        return {
          "is-current-year": this.isYearCurrent(year),
          "is-selected": this.isYearSelected(year)
        };
      },
      isYearCurrent(year) {
        return year === this.today.getFullYear();
      },
      isYearSelected(year) {
        return this.modelValue && year === this.modelValue.getFullYear();
      },
      isYearOutOfRange(year) {
        if (this.minDate && year < this.minDate.getFullYear()) {
          return true;
        }
        if (this.maxDate && year > this.maxDate.getFullYear()) {
          return true;
        }
        if (year < this.yearRange[0]) {
          return true;
        }
        if (year > this.yearRange[this.yearRange.length - 1]) {
          return true;
        }
        return false;
      },
      onDateSelect(date) {
        this.$emit("update:modelValue", date);
        this.$emit("date-select", date);
      },
      onGoToDate(date) {
        this.$refs.month.goToDate(date);
      },
      onMonthChange(newDate) {
        this.dateInView = newDate;
        this.$emit("month-change", newDate);
      }
    }
  };
  const _hoisted_1$j = { class: "ui-datepicker-calendar__header" };
  const _hoisted_2$g = { class: "ui-datepicker-calendar__header-weekday" };
  const _hoisted_3$f = { class: "ui-datepicker-calendar__header-day" };
  const _hoisted_4$a = {
    ref: "years",
    class: "ui-datepicker-calendar__years"
  };
  const _hoisted_5$a = ["onClick", "onKeydown"];
  const _hoisted_6$8 = { class: "ui-datepicker-calendar__body" };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ui_calendar_controls = vue.resolveComponent("ui-calendar-controls");
    const _component_ui_calendar_month = vue.resolveComponent("ui-calendar-month");
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(["ui-datepicker-calendar", $options.classes])
    }, [
      vue.createElementVNode("div", _hoisted_1$j, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["ui-datepicker-calendar__header-year", { "is-active": $options.showYearPicker }]),
          tabindex: "0",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:currentView", "year")),
          onKeydown: _cache[1] || (_cache[1] = vue.withKeys(($event) => _ctx.$emit("update:currentView", "year"), ["enter"]))
        }, vue.toDisplayString($options.headerYear), 35),
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["ui-datepicker-calendar__header-date", { "is-active": !$options.showYearPicker }]),
          tabindex: "0",
          onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("update:currentView", "date")),
          onKeydown: _cache[3] || (_cache[3] = vue.withKeys(($event) => _ctx.$emit("update:currentView", "date"), ["enter"]))
        }, [
          vue.createElementVNode("span", _hoisted_2$g, vue.toDisplayString($options.headerWeekday) + ", ", 1),
          vue.createElementVNode("span", _hoisted_3$f, vue.toDisplayString($options.headerDay), 1)
        ], 34)
      ]),
      vue.withDirectives(vue.createElementVNode("ul", _hoisted_4$a, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.yearRangeFiltered, (year) => {
          return vue.openBlock(), vue.createElementBlock("li", {
            key: year,
            class: vue.normalizeClass(["ui-datepicker-calendar__year", $options.getYearClasses(year)]),
            tabindex: "0",
            onClick: ($event) => $options.selectYear(year),
            onKeydown: vue.withKeys(($event) => $options.selectYear(year), ["enter"])
          }, vue.toDisplayString(year), 43, _hoisted_5$a);
        }), 128))
      ], 512), [
        [vue.vShow, $options.showYearPicker]
      ]),
      vue.withDirectives(vue.createElementVNode("div", _hoisted_6$8, [
        vue.createVNode(_component_ui_calendar_controls, {
          ref: "controls",
          "date-in-view": $data.dateInView,
          lang: $props.lang,
          "max-date": $props.maxDate,
          "min-date": $props.minDate,
          "year-range": $props.yearRange,
          onGoToDate: $options.onGoToDate
        }, null, 8, ["date-in-view", "lang", "max-date", "min-date", "year-range", "onGoToDate"]),
        vue.createVNode(_component_ui_calendar_month, {
          ref: "month",
          "square-cells": "",
          color: $props.color,
          "date-filter": $props.dateFilter,
          "date-in-view": $data.dateInView,
          lang: $props.lang,
          "max-date": $props.maxDate,
          "min-date": $props.minDate,
          selected: $props.modelValue,
          "start-of-week": $props.startOfWeek,
          onChange: $options.onMonthChange,
          onDateSelect: $options.onDateSelect
        }, null, 8, ["color", "date-filter", "date-in-view", "lang", "max-date", "min-date", "selected", "start-of-week", "onChange", "onDateSelect"])
      ], 512), [
        [vue.vShow, !$options.showYearPicker]
      ])
    ], 2);
  }
  const UiDatepickerCalendar = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$k], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiDatepickerCalendar.vue"]]);
  const RespondsToExternalClick = {
    emits: ["external-click"],
    beforeUnmount() {
      if (typeof this.destroyExternalClickListener === "function") {
        this.removeExternalClickListener();
      }
    },
    methods: {
      addExternalClickListener(elements = [this.$el], callback = null, options = { passive: true }) {
        elements = Array.isArray(elements) ? elements : [elements];
        this.destroyExternalClickListener = events.on("click", document, (e) => {
          for (let i2 = 0; i2 < elements.length; i2++) {
            if (elements[i2].contains(e.target)) {
              return;
            }
          }
          if (typeof callback === "function") {
            callback(e);
          } else {
            this.$emit("external-click", e);
          }
        }, options);
      },
      removeExternalClickListener() {
        if (this.destroyExternalClickListener) {
          this.destroyExternalClickListener();
          this.destroyExternalClickListener = null;
        }
      }
    }
  };
  const UiDatepicker_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$j = {
    name: "UiDatepicker",
    components: {
      UiDatepickerCalendar,
      UiIcon,
      UiModal,
      UiPopover
    },
    mixins: [RespondsToExternalClick],
    props: {
      name: String,
      modelValue: [Date, String],
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
        default() {
          return dateUtils.defaultLang;
        }
      },
      customFormatter: Function,
      dateFilter: Function,
      color: {
        type: String,
        default: "primary"
      },
      orientation: {
        type: String,
        default: "portrait"
      },
      pickerType: {
        type: String,
        default: "popover"
      },
      defaultView: {
        type: String,
        default: "date"
      },
      appendDropdownToBody: Boolean,
      dropdownZIndex: Number,
      placeholder: String,
      icon: String,
      iconPosition: {
        type: String,
        default: "left"
      },
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
    emits: ["update:modelValue", "focus", "blur", "open", "close", "touch"],
    data() {
      return {
        isActive: false,
        isTouched: false,
        initialValue: JSON.stringify(this.modelValue),
        calendarView: this.defaultView
      };
    },
    computed: {
      date() {
        return typeof this.modelValue === "string" ? new Date(this.modelValue) : this.modelValue;
      },
      classes() {
        return [
          `ui-datepicker--icon-position-${this.iconPosition}`,
          `ui-datepicker--orientation-${this.orientation}`,
          { "is-active": this.isActive },
          { "is-invalid": this.invalid },
          { "is-touched": this.isTouched },
          { "is-disabled": this.disabled },
          { "has-label": this.hasLabel },
          { "has-floating-label": this.hasFloatingLabel }
        ];
      },
      labelClasses() {
        return {
          "is-inline": this.hasFloatingLabel && this.isLabelInline,
          "is-floating": this.hasFloatingLabel && !this.isLabelInline
        };
      },
      hasLabel() {
        return Boolean(this.label) || Boolean(this.$slots.default);
      },
      hasFloatingLabel() {
        return this.hasLabel && this.floatingLabel;
      },
      isLabelInline() {
        return !this.date && !this.isActive;
      },
      hasFeedback() {
        return this.showError || this.showHelp;
      },
      showError() {
        return this.invalid && (Boolean(this.error) || Boolean(this.$slots.error));
      },
      showHelp() {
        return Boolean(this.help) || Boolean(this.$slots.help);
      },
      displayText() {
        if (!this.date) {
          return "";
        }
        return this.customFormatter ? this.customFormatter(this.date, this.lang) : dateUtils.humanize(this.date, this.lang);
      },
      hasDisplayText() {
        return Boolean(this.displayText.length);
      },
      submittedValue() {
        return this.date ? `${this.date.getFullYear()}-${1 + this.date.getMonth()}-${this.date.getDate()}` : "";
      },
      usesPopover() {
        return this.pickerType === "popover";
      },
      usesModal() {
        return this.pickerType === "modal";
      }
    },
    watch: {
      isActive(value) {
        if (value) {
          this.addExternalClickListener([this.$el, this.getPicker().$el], this.onExternalClick);
        } else {
          this.removeExternalClickListener();
        }
      }
    },
    methods: {
      onDateSelect(date) {
        this.$emit("update:modelValue", date);
        this.closePicker();
      },
      isPickerOpen() {
        return this.usesModal ? this.$refs.modal.isOpen : this.$refs.popover.isOpen();
      },
      getPicker() {
        return this.$refs[this.usesModal ? "modal" : "popover"];
      },
      openPicker() {
        if (this.disabled) {
          return;
        }
        this.getPicker().open();
      },
      closePicker(options = { returnFocus: true }) {
        this.getPicker().close();
        this.calendarView = this.defaultView;
        if (options.returnFocus) {
          this.$refs.label.focus();
        }
      },
      togglePicker(options = { returnFocus: true }) {
        if (this.isPickerOpen()) {
          this.closePicker(options);
        } else {
          this.openPicker();
        }
      },
      onFocus(e) {
        this.isActive = true;
        this.$emit("focus", e);
      },
      onTabAway(e) {
        this.isActive = false;
        this.$emit("blur", e);
        if (this.isPickerOpen()) {
          this.closePicker({ returnFocus: false });
        }
      },
      onPickerOpen() {
        this.$emit("open");
      },
      onPickerClose() {
        this.$emit("close");
        if (!this.isTouched) {
          this.isTouched = true;
          this.$emit("touch");
        }
      },
      onExternalClick() {
        this.isActive = false;
      },
      focus() {
        this.$refs.label.focus();
      },
      clear() {
        this.$emit("update:modelValue", null);
      },
      reset() {
        this.$emit("update:modelValue", JSON.parse(this.initialValue));
      },
      resetTouched(options = { touched: false }) {
        this.isTouched = options.touched;
      }
    }
  };
  const _hoisted_1$i = ["name", "value"];
  const _hoisted_2$f = {
    key: 0,
    class: "ui-datepicker__icon-wrapper"
  };
  const _hoisted_3$e = { class: "ui-datepicker__content" };
  const _hoisted_4$9 = ["tabindex"];
  const _hoisted_5$9 = { class: "ui-datepicker__display" };
  const _hoisted_6$7 = /* @__PURE__ */ vue.createElementVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ vue.createElementVNode("path", { d: "M6.984 9.984h10.03L12 15z" })
  ], -1);
  const _hoisted_7$3 = {
    key: 0,
    class: "ui-datepicker__feedback"
  };
  const _hoisted_8$2 = {
    key: 0,
    class: "ui-datepicker__feedback-text"
  };
  const _hoisted_9$2 = {
    key: 1,
    class: "ui-datepicker__feedback-text"
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ui_icon = vue.resolveComponent("ui-icon");
    const _component_ui_datepicker_calendar = vue.resolveComponent("ui-datepicker-calendar");
    const _component_ui_popover = vue.resolveComponent("ui-popover");
    const _component_ui_modal = vue.resolveComponent("ui-modal");
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(["ui-datepicker", $options.classes])
    }, [
      vue.createElementVNode("input", {
        class: "ui-datepicker__hidden-input",
        type: "hidden",
        name: $props.name,
        value: $options.submittedValue
      }, null, 8, _hoisted_1$i),
      $props.icon || _ctx.$slots.icon ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$f, [
        vue.renderSlot(_ctx.$slots, "icon", {}, () => [
          vue.createVNode(_component_ui_icon, { icon: $props.icon }, null, 8, ["icon"])
        ])
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("div", _hoisted_3$e, [
        vue.createElementVNode("div", {
          ref: "label",
          class: "ui-datepicker__label",
          tabindex: $props.disabled ? null : $props.tabindex || "0",
          onFocus: _cache[1] || (_cache[1] = (...args) => $options.onFocus && $options.onFocus(...args)),
          onClick: _cache[2] || (_cache[2] = ($event) => $options.togglePicker({ returnFocus: false })),
          onKeydown: [
            _cache[3] || (_cache[3] = vue.withKeys(vue.withModifiers(($event) => $options.togglePicker({ returnFocus: false }), ["prevent"]), ["enter"])),
            _cache[4] || (_cache[4] = vue.withKeys(vue.withModifiers(($event) => $options.togglePicker({ returnFocus: false }), ["prevent"]), ["space"])),
            _cache[5] || (_cache[5] = vue.withKeys((...args) => $options.onTabAway && $options.onTabAway(...args), ["tab"]))
          ]
        }, [
          $props.label || _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: vue.normalizeClass(["ui-datepicker__label-text", $options.labelClasses])
          }, [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              vue.createTextVNode(vue.toDisplayString($props.label), 1)
            ])
          ], 2)) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("div", _hoisted_5$9, [
            vue.createElementVNode("div", {
              class: vue.normalizeClass(["ui-datepicker__display-value", { "is-placeholder": !$options.hasDisplayText }])
            }, vue.toDisplayString($options.hasDisplayText ? $options.displayText : $options.hasFloatingLabel && $options.isLabelInline ? null : $props.placeholder), 3),
            $options.usesPopover && !$props.disabled ? (vue.openBlock(), vue.createBlock(_component_ui_icon, {
              key: 0,
              class: "ui-datepicker__dropdown-button"
            }, {
              default: vue.withCtx(() => [
                _hoisted_6$7
              ]),
              _: 1
            })) : vue.createCommentVNode("v-if", true)
          ]),
          $options.usesPopover ? vue.withDirectives((vue.openBlock(), vue.createBlock(_component_ui_popover, {
            key: 1,
            ref: "popover",
            "contain-focus": "",
            "open-on": "manual",
            "close-on-scroll": false,
            "append-to-body": $props.appendDropdownToBody,
            "z-index": $props.dropdownZIndex,
            onClose: $options.onPickerClose,
            onOpen: $options.onPickerOpen
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_ui_datepicker_calendar, {
                currentView: $data.calendarView,
                "onUpdate:currentView": _cache[0] || (_cache[0] = ($event) => $data.calendarView = $event),
                color: $props.color,
                "date-filter": $props.dateFilter,
                lang: $props.lang,
                "max-date": $props.maxDate,
                "min-date": $props.minDate,
                orientation: $props.orientation,
                value: $options.date,
                "start-of-week": $props.startOfWeek,
                "year-range": $props.yearRange,
                onDateSelect: $options.onDateSelect
              }, null, 8, ["currentView", "color", "date-filter", "lang", "max-date", "min-date", "orientation", "value", "start-of-week", "year-range", "onDateSelect"])
            ]),
            _: 1
          }, 8, ["append-to-body", "z-index", "onClose", "onOpen"])), [
            [vue.vShow, !$props.disabled]
          ]) : vue.createCommentVNode("v-if", true)
        ], 40, _hoisted_4$9),
        $options.hasFeedback ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_7$3, [
          $options.showError ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_8$2, [
            vue.renderSlot(_ctx.$slots, "error", {}, () => [
              vue.createTextVNode(vue.toDisplayString($props.error), 1)
            ])
          ])) : $options.showHelp ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_9$2, [
            vue.renderSlot(_ctx.$slots, "help", {}, () => [
              vue.createTextVNode(vue.toDisplayString($props.help), 1)
            ])
          ])) : vue.createCommentVNode("v-if", true)
        ])) : vue.createCommentVNode("v-if", true)
      ]),
      $options.usesModal && !$props.disabled ? (vue.openBlock(), vue.createBlock(_component_ui_modal, {
        key: 1,
        ref: "modal",
        "remove-header": "",
        size: "auto",
        onHidden: $options.onPickerClose,
        onOpen: $options.onPickerOpen
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_ui_datepicker_calendar, {
            currentView: $data.calendarView,
            "onUpdate:currentView": _cache[6] || (_cache[6] = ($event) => $data.calendarView = $event),
            color: $props.color,
            "date-filter": $props.dateFilter,
            lang: $props.lang,
            "max-date": $props.maxDate,
            "min-date": $props.minDate,
            orientation: $props.orientation,
            value: $options.date,
            "start-of-week": $props.startOfWeek,
            "year-range": $props.yearRange,
            onDateSelect: $options.onDateSelect
          }, null, 8, ["currentView", "color", "date-filter", "lang", "max-date", "min-date", "orientation", "value", "start-of-week", "year-range", "onDateSelect"])
        ]),
        _: 1
      }, 8, ["onHidden", "onOpen"])) : vue.createCommentVNode("v-if", true)
    ], 2);
  }
  const UiDatepicker = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$j], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiDatepicker.vue"]]);
  const UiFab_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$i = {
    name: "UiFab",
    components: {
      UiIcon,
      UiRippleInk,
      UiTooltip
    },
    props: {
      size: {
        type: String,
        default: "normal"
      },
      color: {
        type: String,
        default: "default"
      },
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
      classes() {
        return [`ui-fab--color-${this.color}`, `ui-fab--size-${this.size}`];
      }
    }
  };
  const _hoisted_1$h = ["aria-label"];
  const _hoisted_2$e = {
    key: 0,
    class: "ui-fab__icon"
  };
  const _hoisted_3$d = /* @__PURE__ */ vue.createElementVNode("span", { class: "ui-fab__focus-ring" }, null, -1);
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ui_icon = vue.resolveComponent("ui-icon");
    const _component_ui_ripple_ink = vue.resolveComponent("ui-ripple-ink");
    const _component_ui_tooltip = vue.resolveComponent("ui-tooltip");
    return vue.openBlock(), vue.createElementBlock("button", {
      class: vue.normalizeClass(["ui-fab", $options.classes]),
      "aria-label": $props.ariaLabel || $props.tooltip
    }, [
      $props.icon || _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$e, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createVNode(_component_ui_icon, { icon: $props.icon }, null, 8, ["icon"])
        ])
      ])) : vue.createCommentVNode("v-if", true),
      _hoisted_3$d,
      !$props.disableRipple ? (vue.openBlock(), vue.createBlock(_component_ui_ripple_ink, { key: 1 })) : vue.createCommentVNode("v-if", true),
      $props.tooltip ? (vue.openBlock(), vue.createBlock(_component_ui_tooltip, {
        key: 2,
        "open-on": $props.openTooltipOn,
        position: $props.tooltipPosition
      }, {
        default: vue.withCtx(() => [
          vue.createTextVNode(vue.toDisplayString($props.tooltip), 1)
        ]),
        _: 1
      }, 8, ["open-on", "position"])) : vue.createCommentVNode("v-if", true)
    ], 10, _hoisted_1$h);
  }
  const UiFab = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$i], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiFab.vue"]]);
  const UiFileupload_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$h = {
    name: "UiFileupload",
    components: {
      UiIcon,
      UiRippleInk
    },
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
        default: "primary"
      },
      color: {
        type: String,
        default: "default"
      },
      size: {
        type: String,
        default: "normal"
      },
      raised: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: "left"
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
    emits: ["input", "focus", "blur", "change"],
    data() {
      return {
        isActive: false,
        renderInput: true,
        hasSelection: false,
        hasMultiple: false,
        displayText: ""
      };
    },
    computed: {
      classes() {
        return [
          `ui-fileupload--type-${this.type}`,
          `ui-fileupload--color-${this.color}`,
          `ui-fileupload--icon-position-${this.iconPosition}`,
          `ui-fileupload--size-${this.size}`,
          { "is-active": this.isActive },
          { "is-multiple": this.hasMultiple },
          { "is-raised": this.raised },
          { "is-disabled": this.disabled }
        ];
      },
      placeholder() {
        if (this.label) {
          return this.label;
        }
        return this.multiple ? "Choose files" : "Choose a file";
      }
    },
    methods: {
      onFocus(e) {
        this.isActive = true;
        this.$emit("focus", e);
      },
      onBlur(e) {
        this.isActive = false;
        this.$emit("blur", e);
      },
      onInput(e) {
        this.$emit("input", this.$refs.input.files, e);
      },
      onChange(e) {
        this.updateDisplayText(e);
        this.$emit("change", this.$refs.input.files, e);
      },
      updateDisplayText(e) {
        let displayText;
        const input = this.$refs.input;
        if (input.files && input.files.length > 1) {
          displayText = `${input.files.length} files selected`;
        } else {
          displayText = e.target.value.split("\\").pop();
        }
        if (displayText) {
          this.hasSelection = true;
          this.displayText = displayText;
          this.hasMultiple = input.files.length > 1;
        }
      },
      focus() {
        this.$refs.input.focus();
      },
      openPicker() {
        this.$refs.input.click();
      },
      clear() {
        this.hasSelection = false;
        this.renderInput = false;
        this.$nextTick(() => {
          this.renderInput = true;
        });
      }
    }
  };
  const _hoisted_1$g = ["accept", "disabled", "multiple", "name", "required", "tabindex"];
  const _hoisted_2$d = { class: "ui-fileupload__content" };
  const _hoisted_3$c = { class: "ui-fileupload__icon" };
  const _hoisted_4$8 = /* @__PURE__ */ vue.createElementVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ vue.createElementVNode("path", { d: "M5.016 18h13.969v2.016H5.016V18zM9 15.984v-6H5.016L12 3l6.984 6.984H15v6H9z" })
  ], -1);
  const _hoisted_5$8 = {
    key: 0,
    class: "ui-fileupload__display-text"
  };
  const _hoisted_6$6 = /* @__PURE__ */ vue.createElementVNode("div", { class: "ui-fileupload__focus-ring" }, null, -1);
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ui_icon = vue.resolveComponent("ui-icon");
    const _component_ui_ripple_ink = vue.resolveComponent("ui-ripple-ink");
    return vue.openBlock(), vue.createElementBlock("label", {
      class: vue.normalizeClass(["ui-fileupload", $options.classes])
    }, [
      $data.renderInput ? (vue.openBlock(), vue.createElementBlock("input", {
        key: 0,
        ref: "input",
        class: "ui-fileupload__input",
        type: "file",
        accept: $props.accept,
        disabled: $props.disabled,
        multiple: $props.multiple,
        name: $props.name,
        required: $props.required,
        tabindex: $props.tabindex,
        onBlur: _cache[0] || (_cache[0] = (...args) => $options.onBlur && $options.onBlur(...args)),
        onInput: _cache[1] || (_cache[1] = (...args) => $options.onInput && $options.onInput(...args)),
        onChange: _cache[2] || (_cache[2] = (...args) => $options.onChange && $options.onChange(...args)),
        onFocus: _cache[3] || (_cache[3] = (...args) => $options.onFocus && $options.onFocus(...args))
      }, null, 40, _hoisted_1$g)) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("div", _hoisted_2$d, [
        vue.createElementVNode("div", _hoisted_3$c, [
          vue.renderSlot(_ctx.$slots, "icon", {}, () => [
            vue.createVNode(_component_ui_icon, null, {
              default: vue.withCtx(() => [
                _hoisted_4$8
              ]),
              _: 1
            })
          ])
        ]),
        $data.hasSelection ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_5$8, vue.toDisplayString($data.displayText), 1)) : vue.renderSlot(_ctx.$slots, "default", { key: 1 }, () => [
          vue.createTextVNode(vue.toDisplayString($options.placeholder), 1)
        ])
      ]),
      _hoisted_6$6,
      !$props.disableRipple && !$props.disabled ? (vue.openBlock(), vue.createBlock(_component_ui_ripple_ink, { key: 1 })) : vue.createCommentVNode("v-if", true)
    ], 2);
  }
  const UiFileupload = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiFileupload.vue"]]);
  const UiMenuOption_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$g = {
    name: "UiMenuOption",
    components: {
      UiIcon,
      UiRippleInk
    },
    props: {
      type: String,
      label: String,
      href: String,
      target: String,
      icon: String,
      iconProps: {
        type: Object,
        default() {
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
      classes() {
        return {
          "is-divider": this.isDivider,
          "is-disabled": this.disabled,
          "is-anchor": this.isAnchor
        };
      },
      isDivider() {
        return this.type === "divider";
      },
      isAnchor() {
        return !this.isDivider && this.href !== void 0;
      }
    }
  };
  const _hoisted_1$f = { class: "ui-menu-option__content" };
  const _hoisted_2$c = { class: "ui-menu-option__text" };
  const _hoisted_3$b = {
    key: 1,
    class: "ui-menu-option__secondary-text"
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ui_icon = vue.resolveComponent("ui-icon");
    const _component_ui_ripple_ink = vue.resolveComponent("ui-ripple-ink");
    return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($options.isAnchor ? "a" : "li"), {
      class: vue.normalizeClass(["ui-menu-option", $options.classes]),
      role: "menu-item",
      href: $options.isAnchor ? $props.disabled ? null : $props.href : null,
      tabindex: $options.isDivider || $options.isAnchor || $props.disabled ? null : "0",
      target: $options.isAnchor ? $props.disabled ? null : $props.target : null
    }, {
      default: vue.withCtx(() => [
        !$options.isDivider ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }, () => [
          vue.createElementVNode("div", _hoisted_1$f, [
            $props.icon ? (vue.openBlock(), vue.createBlock(_component_ui_icon, {
              key: 0,
              class: "ui-menu-option__icon",
              "icon-set": $props.iconProps.iconSet,
              icon: $props.icon,
              "remove-text": $props.iconProps.removeText,
              "use-svg": $props.iconProps.useSvg
            }, null, 8, ["icon-set", "icon", "remove-text", "use-svg"])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("div", _hoisted_2$c, vue.toDisplayString($props.label), 1),
            $props.secondaryText ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$b, vue.toDisplayString($props.secondaryText), 1)) : vue.createCommentVNode("v-if", true)
          ])
        ]) : vue.createCommentVNode("v-if", true),
        !$props.disabled && !$options.isDivider && !$props.disableRipple ? (vue.openBlock(), vue.createBlock(_component_ui_ripple_ink, { key: 1 })) : vue.createCommentVNode("v-if", true)
      ]),
      _: 3
    }, 8, ["class", "href", "tabindex", "target"]);
  }
  const UiMenuOption = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiMenuOption.vue"]]);
  const UiMenu_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$f = {
    name: "UiMenu",
    components: {
      UiFocusContainer,
      UiMenuOption
    },
    props: {
      options: {
        type: Array,
        default() {
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
        default() {
          return {
            icon: "icon",
            type: "type",
            label: "label",
            secondaryText: "secondaryText",
            iconProps: "iconProps",
            disabled: "disabled",
            href: "href",
            target: "target"
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
    emits: ["select", "close"],
    computed: {
      classes() {
        return {
          "is-raised": this.raised,
          "has-icons": this.hasIcons,
          "has-secondary-text": this.hasSecondaryText
        };
      }
    },
    methods: {
      selectOption(option) {
        if (option.disabled || option.type === "divider") {
          return;
        }
        this.$emit("select", option);
        this.closeMenu();
      },
      closeMenu() {
        this.$emit("close");
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ui_menu_option = vue.resolveComponent("ui-menu-option");
    const _component_ui_focus_container = vue.resolveComponent("ui-focus-container");
    return vue.openBlock(), vue.createBlock(_component_ui_focus_container, {
      ref: "focusContainer",
      class: vue.normalizeClass(["ui-menu", $options.classes]),
      role: "menu",
      tag: "ul",
      lazy: "",
      "contain-focus": $props.containFocus
    }, {
      default: vue.withCtx(() => [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.options, (option, index) => {
          return vue.openBlock(), vue.createBlock(_component_ui_menu_option, {
            key: index,
            "disable-ripple": $props.disableRipple,
            disabled: option[$props.keys.disabled],
            href: option[$props.keys.href],
            "icon-props": $props.iconProps || option[$props.keys.iconProps],
            icon: $props.hasIcons ? option[$props.keys.icon] : null,
            label: option[$props.keys.type] === "divider" ? null : option[$props.keys.label] || option,
            "secondary-text": $props.hasSecondaryText ? option[$props.keys.secondaryText] : null,
            target: option[$props.keys.target],
            type: option[$props.keys.type],
            onClick: ($event) => $options.selectOption(option),
            onKeydown: [
              vue.withKeys(($event) => $options.selectOption(option), ["enter"]),
              vue.withKeys($options.closeMenu, ["esc"])
            ]
          }, {
            default: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "option", { option })
            ]),
            _: 2
          }, 1032, ["disable-ripple", "disabled", "href", "icon-props", "icon", "label", "secondary-text", "target", "type", "onClick", "onKeydown"]);
        }), 128))
      ]),
      _: 3
    }, 8, ["class", "contain-focus"]);
  }
  const UiMenu = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiMenu.vue"]]);
  const UiPreloader_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$e = {
    name: "UiPreloader",
    props: {
      show: {
        type: Boolean,
        required: true
      }
    }
  };
  const _hoisted_1$e = ["aria-busy"];
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(["ui-preloader", { "is-loading": $props.show }])
    }, [
      vue.createElementVNode("div", {
        class: "ui-preloader__progressbar",
        role: "progressbar",
        "aria-busy": $props.show ? "true" : false
      }, null, 8, _hoisted_1$e)
    ], 2);
  }
  const UiPreloader = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiPreloader.vue"]]);
  const UiProgressLinear_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$d = {
    name: "UiProgressLinear",
    props: {
      type: {
        type: String,
        default: "indeterminate"
      },
      color: {
        type: String,
        default: "primary"
      },
      progress: {
        type: Number,
        default: 0
      }
    },
    computed: {
      classes() {
        return [`ui-progress-linear--color-${this.color}`, `ui-progress-linear--type-${this.type}`];
      },
      moderatedProgress() {
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
  const _hoisted_1$d = ["aria-valuenow"];
  const _hoisted_2$b = {
    key: 1,
    class: "ui-progress-linear__progress-bar is-indeterminate",
    role: "progressbar",
    "aria-valuemax": 100,
    "aria-valuemin": 0
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock(vue.Transition, { name: "ui-progress-linear--transition-fade" }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["ui-progress-linear", $options.classes])
        }, [
          $props.type === "determinate" ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: "ui-progress-linear__progress-bar is-determinate",
            role: "progressbar",
            "aria-valuemax": 100,
            "aria-valuemin": 0,
            "aria-valuenow": $options.moderatedProgress,
            style: vue.normalizeStyle({ transform: `scaleX(${$options.moderatedProgress / 100})` })
          }, null, 12, _hoisted_1$d)) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$b))
        ], 2)
      ]),
      _: 1
    });
  }
  const UiProgressLinear = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiProgressLinear.vue"]]);
  const UiRadio_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$c = {
    name: "UiRadio",
    props: {
      name: String,
      label: String,
      tabindex: [String, Number],
      modelValue: {
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
        default: "primary"
      },
      buttonPosition: {
        type: String,
        default: "left"
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    emits: ["update:modelValue", "focus", "blur", "change"],
    data() {
      return {
        isActive: false
      };
    },
    computed: {
      classes() {
        return [
          `ui-radio--color-${this.color}`,
          `ui-radio--button-position-${this.buttonPosition}`,
          { "is-active": this.isActive },
          { "is-checked": this.isChecked },
          { "is-disabled": this.disabled }
        ];
      },
      isChecked() {
        return this.modelValue === this.trueValue;
      }
    },
    created() {
      if (this.checked && !this.isChecked) {
        this.$emit("update:modelValue", this.trueValue);
      }
    },
    methods: {
      focus() {
        this.$refs.input.focus();
      },
      toggleCheck() {
        if (!this.disabled) {
          this.$emit("update:modelValue", this.trueValue);
        }
      },
      onFocus(e) {
        this.isActive = true;
        this.$emit("focus", e);
      },
      onBlur(e) {
        this.isActive = false;
        this.$emit("blur", e);
      },
      onChange(e) {
        this.$emit("change", this.isChecked, e);
      }
    }
  };
  const _hoisted_1$c = { class: "ui-radio__input-wrapper" };
  const _hoisted_2$a = [".checked", "disabled", "name", "tabindex", "value"];
  const _hoisted_3$a = /* @__PURE__ */ vue.createElementVNode("div", { class: "ui-radio__focus-ring" }, null, -1);
  const _hoisted_4$7 = /* @__PURE__ */ vue.createElementVNode("span", { class: "ui-radio__outer-circle" }, null, -1);
  const _hoisted_5$7 = /* @__PURE__ */ vue.createElementVNode("span", { class: "ui-radio__inner-circle" }, null, -1);
  const _hoisted_6$5 = {
    key: 0,
    class: "ui-radio__label-text"
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("label", {
      class: vue.normalizeClass(["ui-radio", $options.classes]),
      onClick: _cache[3] || (_cache[3] = (...args) => $options.toggleCheck && $options.toggleCheck(...args))
    }, [
      vue.createElementVNode("div", _hoisted_1$c, [
        vue.createElementVNode("input", {
          ref: "input",
          class: "ui-radio__input",
          type: "radio",
          ".checked": $props.checked,
          disabled: $props.disabled,
          name: $props.name,
          tabindex: $props.tabindex,
          value: $props.trueValue,
          onBlur: _cache[0] || (_cache[0] = (...args) => $options.onBlur && $options.onBlur(...args)),
          onChange: _cache[1] || (_cache[1] = (...args) => $options.onChange && $options.onChange(...args)),
          onFocus: _cache[2] || (_cache[2] = (...args) => $options.onFocus && $options.onFocus(...args))
        }, null, 40, _hoisted_2$a),
        _hoisted_3$a,
        _hoisted_4$7,
        _hoisted_5$7
      ]),
      $props.label || _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_6$5, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createTextVNode(vue.toDisplayString($props.label), 1)
        ])
      ])) : vue.createCommentVNode("v-if", true)
    ], 2);
  }
  const UiRadio = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiRadio.vue"]]);
  const UiRadioGroup_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$b = {
    name: "UiRadioGroup",
    components: {
      UiRadio
    },
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
      modelValue: {
        type: [Number, String],
        required: true
      },
      keys: {
        type: Object,
        default() {
          return {
            id: "id",
            class: "class",
            label: "label",
            value: "value",
            checked: "checked",
            disabled: "disabled"
          };
        }
      },
      color: {
        type: String,
        default: "primary"
      },
      buttonPosition: {
        type: String,
        default: "left"
      },
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
    emits: ["update:modelValue", "focus", "blur", "change"],
    data() {
      return {
        isActive: false,
        initialValue: this.modelValue
      };
    },
    computed: {
      classes() {
        return [
          `ui-radio-group--color-${this.color}`,
          `ui-radio-group--button-position-${this.buttonPosition}`,
          { "is-vertical": this.vertical },
          { "is-active": this.isActive },
          { "is-invalid": this.invalid },
          { "is-disabled": this.disabled }
        ];
      },
      hasFeedback() {
        return this.showError || this.showHelp;
      },
      showError() {
        return this.invalid && (Boolean(this.error) || Boolean(this.$slots.error));
      },
      showHelp() {
        return Boolean(this.help) || Boolean(this.$slots.help);
      },
      selectedOptionValue: {
        get() {
          return this.modelValue;
        },
        set(value) {
          this.$emit("update:modelValue", value);
          this.$emit("change", value);
        }
      }
    },
    methods: {
      reset() {
        this.$emit("update:modelValue", this.initialValue);
      },
      isOptionCheckedByDefault(option) {
        return this.initialValue == option[this.keys.value] || this.initialValue == option || option[this.keys.checked];
      },
      getTrueValue(option) {
        if (typeof option === "string" || typeof option === "number") {
          return option;
        }
        const value = option[this.keys.value];
        if (value === void 0) {
          console.warn("[UiRadioGroup] option has no `value`: ", option);
          return option;
        }
        return value;
      },
      onFocus(e) {
        this.isActive = true;
        this.$emit("focus", e);
      },
      onBlur(e) {
        this.isActive = false;
        this.$emit("blur", e);
      }
    }
  };
  const _hoisted_1$b = {
    key: 0,
    class: "ui-radio-group__label-text"
  };
  const _hoisted_2$9 = { class: "ui-radio-group__radios" };
  const _hoisted_3$9 = {
    key: 1,
    class: "ui-radio-group__feedback"
  };
  const _hoisted_4$6 = {
    key: 0,
    class: "ui-radio-group__feedback-text"
  };
  const _hoisted_5$6 = {
    key: 1,
    class: "ui-radio-group__feedback-text"
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ui_radio = vue.resolveComponent("ui-radio");
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(["ui-radio-group", $options.classes])
    }, [
      $props.label || _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$b, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createTextVNode(vue.toDisplayString($props.label), 1)
        ])
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("div", _hoisted_2$9, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.options, (option) => {
          return vue.openBlock(), vue.createBlock(_component_ui_radio, {
            id: option[$props.keys.id],
            key: option[$props.keys.id],
            modelValue: $options.selectedOptionValue,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.selectedOptionValue = $event),
            class: vue.normalizeClass(["ui-radio-group__radio", option[$props.keys.class]]),
            "button-position": $props.buttonPosition,
            checked: $options.isOptionCheckedByDefault(option),
            color: $props.color,
            disabled: $props.disabled || option[$props.keys.disabled],
            name: $props.name,
            tabindex: $props.tabindex,
            "true-value": $options.getTrueValue(option),
            onBlur: $options.onBlur,
            onFocus: $options.onFocus
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(vue.toDisplayString(option[$props.keys.label] || option), 1)
            ]),
            _: 2
          }, 1032, ["id", "modelValue", "button-position", "checked", "class", "color", "disabled", "name", "tabindex", "true-value", "onBlur", "onFocus"]);
        }), 128))
      ]),
      $options.hasFeedback ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$9, [
        $options.showError ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4$6, [
          vue.renderSlot(_ctx.$slots, "error", {}, () => [
            vue.createTextVNode(vue.toDisplayString($props.error), 1)
          ])
        ])) : $options.showHelp ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5$6, [
          vue.renderSlot(_ctx.$slots, "help", {}, () => [
            vue.createTextVNode(vue.toDisplayString($props.help), 1)
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ])) : vue.createCommentVNode("v-if", true)
    ], 2);
  }
  const UiRadioGroup = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiRadioGroup.vue"]]);
  const UiSelectOption_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$a = {
    name: "UiSelectOption",
    components: {
      UiIcon
    },
    props: {
      option: {
        type: [String, Number, Object],
        required: true
      },
      type: {
        type: String,
        default: "basic"
      },
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
        default() {
          return {
            class: "class",
            label: "label",
            image: "image"
          };
        }
      }
    },
    computed: {
      classes() {
        return [
          `ui-select-option--type-${this.type}`,
          this.option[this.keys.class],
          { "is-highlighted": this.highlighted },
          { "is-selected": this.selected }
        ];
      },
      imageStyle() {
        return { "background-image": "url(" + this.option[this.keys.image] + ")" };
      }
    }
  };
  const _hoisted_1$a = {
    key: 0,
    class: "ui-select-option__basic"
  };
  const _hoisted_2$8 = {
    key: 1,
    class: "ui-select-option__image"
  };
  const _hoisted_3$8 = { class: "ui-select-option__image-text" };
  const _hoisted_4$5 = {
    key: 2,
    class: "ui-select-option__checkbox"
  };
  const _hoisted_5$5 = /* @__PURE__ */ vue.createElementVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ vue.createElementVNode("path", { d: "M9.984 17.016l9-9-1.406-1.453-7.594 7.594-3.563-3.563L5.016 12zm9-14.016C20.11 3 21 3.938 21 5.016v13.97C21 20.062 20.11 21 18.984 21H5.014C3.89 21 3 20.064 3 18.986V5.015C3 3.94 3.89 3 5.014 3h13.97z" })
  ], -1);
  const _hoisted_6$4 = /* @__PURE__ */ vue.createElementVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ vue.createElementVNode("path", { d: "M18.984 3C20.062 3 21 3.938 21 5.016v13.97C21 20.062 20.062 21 18.984 21H5.014C3.938 21 3 20.064 3 18.986V5.015C3 3.94 3.936 3 5.014 3h13.97zm0 2.016H5.014v13.97h13.97V5.015z" })
  ], -1);
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ui_icon = vue.resolveComponent("ui-icon");
    return vue.openBlock(), vue.createElementBlock("li", {
      class: vue.normalizeClass(["ui-select-option", $options.classes])
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, () => [
        $props.type === "basic" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$a, vue.toDisplayString($props.option[$props.keys.label] || $props.option), 1)) : vue.createCommentVNode("v-if", true),
        $props.type === "image" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$8, [
          vue.createElementVNode("div", {
            class: "ui-select-option__image-object",
            style: vue.normalizeStyle($options.imageStyle)
          }, null, 4),
          vue.createElementVNode("div", _hoisted_3$8, vue.toDisplayString($props.option[$props.keys.label]), 1)
        ])) : vue.createCommentVNode("v-if", true),
        $props.multiple ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4$5, [
          $props.selected ? (vue.openBlock(), vue.createBlock(_component_ui_icon, { key: 0 }, {
            default: vue.withCtx(() => [
              _hoisted_5$5
            ]),
            _: 1
          })) : (vue.openBlock(), vue.createBlock(_component_ui_icon, { key: 1 }, {
            default: vue.withCtx(() => [
              _hoisted_6$4
            ]),
            _: 1
          }))
        ])) : vue.createCommentVNode("v-if", true)
      ])
    ], 2);
  }
  const UiSelectOption = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiSelectOption.vue"]]);
  const UiSelect_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$9 = {
    name: "UiSelect",
    components: {
      UiIcon,
      UiPopover,
      UiProgressCircular,
      UiSelectOption
    },
    mixins: [RespondsToExternalClick],
    props: {
      name: String,
      tabindex: [String, Number],
      modelValue: {
        type: [String, Number, Object, Array],
        required: true
      },
      options: {
        type: Array,
        default() {
          return [];
        }
      },
      placeholder: String,
      icon: String,
      iconPosition: {
        type: String,
        default: "left"
      },
      label: String,
      floatingLabel: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: "basic"
      },
      multiple: {
        type: Boolean,
        default: false
      },
      multipleDelimiter: {
        type: String,
        default: ", "
      },
      hasSearch: {
        type: Boolean,
        default: false
      },
      searchPlaceholder: {
        type: String,
        default: "Search"
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
        default() {
          return {
            class: "class",
            label: "label",
            value: "value",
            image: "image"
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
    emits: [
      "update:modelValue",
      "query-change",
      "change",
      "select",
      "touch",
      "focus",
      "blur",
      "dropdown-open",
      "dropdown-close"
    ],
    data() {
      return {
        query: "",
        isActive: false,
        isTouched: false,
        selectedIndex: -1,
        highlightedIndex: -1,
        initialValue: JSON.stringify(this.modelValue)
      };
    },
    computed: {
      classes() {
        return [
          `ui-select--type-${this.type}`,
          `ui-select--icon-position-${this.iconPosition}`,
          { "is-active": this.isActive },
          { "is-invalid": this.invalid },
          { "is-touched": this.isTouched },
          { "is-disabled": this.disabled },
          { "is-multiple": this.multiple },
          { "has-label": this.hasLabel },
          { "has-floating-label": this.hasFloatingLabel }
        ];
      },
      labelClasses() {
        return {
          "is-inline": this.hasFloatingLabel && this.isLabelInline,
          "is-floating": this.hasFloatingLabel && !this.isLabelInline
        };
      },
      hasLabel() {
        return Boolean(this.label) || Boolean(this.$slots.default);
      },
      hasFloatingLabel() {
        return this.hasLabel && this.floatingLabel;
      },
      isLabelInline() {
        return this.modelValue.length === 0 && !this.isActive;
      },
      hasFeedback() {
        return this.showError || this.showHelp;
      },
      showError() {
        return this.invalid && (Boolean(this.error) || Boolean(this.$slots.error));
      },
      showHelp() {
        return Boolean(this.help) || Boolean(this.$slots.help);
      },
      filteredOptions() {
        if (this.disableFilter) {
          return this.options;
        }
        const options = this.options.filter((option) => {
          if (this.filter) {
            return this.filter(option, this.query, this.defaultFilter);
          }
          return this.defaultFilter(option, this.query);
        });
        if (this.sort) {
          options.sort(this.sort.bind(this));
        }
        return options;
      },
      displayText() {
        if (this.multiple) {
          if (this.modelValue.length > 0) {
            return this.modelValue.map((value) => value[this.keys.label] || value).join(this.multipleDelimiter);
          }
          return "";
        }
        return this.modelValue ? this.modelValue[this.keys.label] || this.modelValue : "";
      },
      hasDisplayText() {
        return Boolean(this.displayText.length);
      },
      hasNoResults() {
        if (this.loading || this.query.length === 0) {
          return false;
        }
        return this.disableFilter ? this.noResults : this.filteredOptions.length === 0;
      },
      submittedValue() {
        if (!this.name || !this.modelValue) {
          return;
        }
        if (Array.isArray(this.modelValue)) {
          return this.modelValue.map((option) => option[this.keys.value] || option).join(",");
        }
        return this.modelValue[this.keys.value] || this.modelValue;
      },
      emptyValue() {
        return this.multiple ? [] : "";
      }
    },
    watch: {
      filteredOptions() {
        this.highlightedIndex = 0;
        resetScroll(this.$refs.optionsList);
      },
      query() {
        this.$emit("query-change", this.query);
      },
      isActive(value) {
        if (value) {
          this.addExternalClickListener(this.$el, this.onExternalClick);
        } else {
          this.removeExternalClickListener();
        }
      }
    },
    created() {
      const invalidMultipleValue = this.multiple && !Array.isArray(this.modelValue);
      const invalidEmptyValue = !this.modelValue && this.modelValue !== "";
      if (invalidMultipleValue || invalidEmptyValue) {
        this.$emit("update:modelValue", this.emptyValue);
        this.initialValue = JSON.stringify(this.emptyValue);
      }
    },
    methods: {
      setValue(value) {
        this.$emit("update:modelValue", value);
        this.$emit("change", value);
      },
      highlightOption(index, options = { autoScroll: true }) {
        if (this.highlightedIndex === index || this.$refs.options.length === 0) {
          return;
        }
        const firstIndex = 0;
        const lastIndex = this.$refs.options.length - 1;
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
      selectHighlighted(index, e) {
        if (this.$refs.options.length > 0) {
          e.preventDefault();
          this.selectOption(this.$refs.options[index].option, index);
        }
      },
      selectOption(option, index, options = { autoClose: true }) {
        const shouldSelect = this.multiple && !this.isOptionSelected(option);
        if (this.multiple) {
          this.updateOption(option, { select: shouldSelect });
        } else {
          this.setValue(option);
          this.selectedIndex = index;
        }
        this.$emit("select", option, {
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
      isOptionSelected(option) {
        if (this.multiple) {
          return looseIndexOf(this.modelValue, option) > -1;
        }
        return looseEqual(this.modelValue, option);
      },
      updateOption(option, options = { select: true }) {
        let value = [];
        let updated = false;
        const i2 = looseIndexOf(this.modelValue, option);
        if (options.select && i2 < 0) {
          value = this.modelValue.concat(option);
          updated = true;
        }
        if (!options.select && i2 > -1) {
          value = this.modelValue.slice(0, i2).concat(this.modelValue.slice(i2 + 1));
          updated = true;
        }
        if (updated) {
          this.setValue(value);
        }
      },
      defaultFilter(option, query) {
        let text = option[this.keys.label] || option;
        if (typeof text === "string") {
          text = text.toLowerCase();
        }
        return fuzzysearch_1(query.toLowerCase(), text);
      },
      clearSelection() {
        this.setValue(this.emptyValue);
      },
      clearQuery() {
        this.query = "";
      },
      focus() {
        this.$refs.label.focus();
      },
      toggleDropdown() {
        this.$refs.dropdown.toggle();
      },
      openDropdown() {
        if (this.disabled) {
          return;
        }
        this.$refs.dropdown.open();
      },
      closeDropdown(options = { blurAfterClose: false }) {
        this.$refs.dropdown.close();
        if (!this.isTouched) {
          this.isTouched = true;
          this.$emit("touch");
        }
        if (options.blurAfterClose) {
          this.isActive = false;
        } else {
          this.$refs.label.focus();
        }
      },
      onFocus(e) {
        if (this.isActive) {
          return;
        }
        this.isActive = true;
        this.$emit("focus", e);
      },
      onBlur(e) {
        this.isActive = false;
        this.$emit("blur", e);
        if (this.$refs.dropdown.isOpen()) {
          this.closeDropdown({ blurAfterClose: true });
        }
      },
      onOpen() {
        this.isActive = true;
        this.$refs.dropdown.$el.style.width = this.$refs.label.getBoundingClientRect().width + "px";
        this.$nextTick(() => {
          this.scrollOptionIntoView(this.$refs.optionsList.querySelector(".is-selected"));
        });
        this.$emit("dropdown-open");
      },
      onReveal() {
        this.$refs[this.hasSearch ? "searchInput" : "dropdownContent"].focus();
      },
      onClose() {
        this.highlightedIndex = this.multiple ? -1 : this.selectedIndex;
        this.$emit("dropdown-close");
      },
      onExternalClick() {
        if (this.$refs.dropdown.isOpen()) {
          this.closeDropdown({ blurAfterClose: true });
        } else if (this.isActive) {
          this.isActive = false;
        }
      },
      scrollOptionIntoView(optionEl) {
        scrollIntoView(optionEl, {
          container: this.$refs.optionsList,
          marginTop: 180
        });
      },
      reset() {
        this.setValue(JSON.parse(this.initialValue));
        this.clearQuery();
        this.resetTouched();
        this.selectedIndex = -1;
        this.highlightedIndex = -1;
      },
      resetTouched(options = { touched: false }) {
        this.isTouched = options.touched;
      }
    }
  };
  const _hoisted_1$9 = ["name", "value"];
  const _hoisted_2$7 = {
    key: 1,
    class: "ui-select__icon-wrapper"
  };
  const _hoisted_3$7 = { class: "ui-select__content" };
  const _hoisted_4$4 = ["tabindex"];
  const _hoisted_5$4 = { class: "ui-select__display" };
  const _hoisted_6$3 = /* @__PURE__ */ vue.createElementVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ vue.createElementVNode("path", { d: "M6.984 9.984h10.03L12 15z" })
  ], -1);
  const _hoisted_7$2 = ["placeholder"];
  const _hoisted_8$1 = /* @__PURE__ */ vue.createElementVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ vue.createElementVNode("path", { d: "M9.516 14.016c2.484 0 4.5-2.016 4.5-4.5s-2.016-4.5-4.5-4.5-4.5 2.016-4.5 4.5 2.016 4.5 4.5 4.5zm6 0l4.97 4.97-1.5 1.5-4.97-4.97v-.797l-.28-.282c-1.126.984-2.626 1.547-4.22 1.547-3.61 0-6.516-2.86-6.516-6.47S5.906 3 9.516 3s6.47 2.906 6.47 6.516c0 1.594-.564 3.094-1.548 4.22l.28.28h.798z" })
  ], -1);
  const _hoisted_9$1 = {
    ref: "optionsList",
    class: "ui-select__options"
  };
  const _hoisted_10 = { class: "ui-select__no-results" };
  const _hoisted_11 = /* @__PURE__ */ vue.createTextVNode("No results found");
  const _hoisted_12 = {
    key: 0,
    class: "ui-select__feedback"
  };
  const _hoisted_13 = {
    key: 0,
    class: "ui-select__feedback-text"
  };
  const _hoisted_14 = {
    key: 1,
    class: "ui-select__feedback-text"
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ui_icon = vue.resolveComponent("ui-icon");
    const _component_ui_progress_circular = vue.resolveComponent("ui-progress-circular");
    const _component_ui_select_option = vue.resolveComponent("ui-select-option");
    const _component_ui_popover = vue.resolveComponent("ui-popover");
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(["ui-select", $options.classes])
    }, [
      $props.name ? (vue.openBlock(), vue.createElementBlock("input", {
        key: 0,
        class: "ui-select__hidden-input",
        type: "hidden",
        name: $props.name,
        value: $options.submittedValue
      }, null, 8, _hoisted_1$9)) : vue.createCommentVNode("v-if", true),
      $props.icon || _ctx.$slots.icon ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$7, [
        vue.renderSlot(_ctx.$slots, "icon", {}, () => [
          vue.createVNode(_component_ui_icon, { icon: $props.icon }, null, 8, ["icon"])
        ])
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("div", _hoisted_3$7, [
        vue.createElementVNode("div", {
          ref: "label",
          class: "ui-select__label",
          tabindex: $props.disabled ? null : $props.tabindex || "0",
          onFocus: _cache[8] || (_cache[8] = (...args) => $options.onFocus && $options.onFocus(...args)),
          onKeydown: [
            _cache[9] || (_cache[9] = vue.withKeys(vue.withModifiers((...args) => $options.openDropdown && $options.openDropdown(...args), ["prevent"]), ["enter"])),
            _cache[10] || (_cache[10] = vue.withKeys(vue.withModifiers((...args) => $options.openDropdown && $options.openDropdown(...args), ["prevent"]), ["space"])),
            _cache[11] || (_cache[11] = vue.withKeys((...args) => $options.onBlur && $options.onBlur(...args), ["tab"]))
          ]
        }, [
          $props.label || _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: vue.normalizeClass(["ui-select__label-text", $options.labelClasses])
          }, [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              vue.createTextVNode(vue.toDisplayString($props.label), 1)
            ])
          ], 2)) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("div", _hoisted_5$4, [
            vue.createElementVNode("div", {
              class: vue.normalizeClass(["ui-select__display-value", { "is-placeholder": !$options.hasDisplayText }])
            }, vue.toDisplayString($options.hasDisplayText ? $options.displayText : $options.hasFloatingLabel && $options.isLabelInline ? null : $props.placeholder), 3),
            vue.createVNode(_component_ui_icon, { class: "ui-select__dropdown-button" }, {
              default: vue.withCtx(() => [
                _hoisted_6$3
              ]),
              _: 1
            })
          ]),
          vue.createVNode(_component_ui_popover, {
            ref: "dropdown",
            class: "ui-select__dropdown",
            "close-on-scroll": false,
            "constrain-to-scroll-parent": false,
            "close-on-external-click": false,
            disabled: $props.disabled,
            onClose: $options.onClose,
            onOpen: $options.onOpen,
            onReveal: $options.onReveal
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("div", {
                ref: "dropdownContent",
                class: "ui-select__dropdown-content",
                tabindex: "-1",
                onKeydown: [
                  _cache[3] || (_cache[3] = vue.withKeys(vue.withModifiers(($event) => $options.highlightOption($data.highlightedIndex + 1), ["prevent"]), ["down"])),
                  _cache[4] || (_cache[4] = vue.withKeys(vue.withModifiers(($event) => $options.selectHighlighted($data.highlightedIndex, $event), ["prevent", "stop"]), ["enter"])),
                  _cache[5] || (_cache[5] = vue.withKeys(vue.withModifiers(($event) => $options.closeDropdown(), ["prevent"]), ["esc"])),
                  _cache[6] || (_cache[6] = vue.withKeys((...args) => $options.onBlur && $options.onBlur(...args), ["tab"])),
                  _cache[7] || (_cache[7] = vue.withKeys(vue.withModifiers(($event) => $options.highlightOption($data.highlightedIndex - 1), ["prevent"]), ["up"]))
                ]
              }, [
                $props.hasSearch ? (vue.openBlock(), vue.createElementBlock("div", {
                  key: 0,
                  class: "ui-select__search",
                  onClick: _cache[1] || (_cache[1] = vue.withModifiers(() => {
                  }, ["stop"])),
                  onKeydown: _cache[2] || (_cache[2] = vue.withKeys(vue.withModifiers(() => {
                  }, ["stop"]), ["space"]))
                }, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    ref: "searchInput",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.query = $event),
                    autocomplete: "off",
                    class: "ui-select__search-input",
                    type: "text",
                    placeholder: $props.searchPlaceholder
                  }, null, 8, _hoisted_7$2), [
                    [vue.vModelText, $data.query]
                  ]),
                  vue.createVNode(_component_ui_icon, { class: "ui-select__search-icon" }, {
                    default: vue.withCtx(() => [
                      _hoisted_8$1
                    ]),
                    _: 1
                  }),
                  $props.loading ? (vue.openBlock(), vue.createBlock(_component_ui_progress_circular, {
                    key: 0,
                    class: "ui-select__search-progress",
                    size: 20,
                    stroke: 4
                  })) : vue.createCommentVNode("v-if", true)
                ], 32)) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("ul", _hoisted_9$1, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.filteredOptions, (option, index) => {
                    return vue.openBlock(), vue.createBlock(_component_ui_select_option, {
                      ref_for: true,
                      ref: "options",
                      key: index,
                      highlighted: $data.highlightedIndex === index,
                      keys: $props.keys,
                      multiple: $props.multiple,
                      option,
                      selected: $options.isOptionSelected(option),
                      type: $props.type,
                      onClick: vue.withModifiers(($event) => $options.selectOption(option, index), ["stop"]),
                      onMouseover: vue.withModifiers(($event) => $options.highlightOption(index, { autoScroll: false }), ["stop"])
                    }, {
                      default: vue.withCtx(() => [
                        vue.renderSlot(_ctx.$slots, "option", {
                          highlighted: $data.highlightedIndex === index,
                          index,
                          option,
                          selected: $options.isOptionSelected(option)
                        })
                      ]),
                      _: 2
                    }, 1032, ["highlighted", "keys", "multiple", "option", "selected", "type", "onClick", "onMouseover"]);
                  }), 128)),
                  vue.withDirectives(vue.createElementVNode("div", _hoisted_10, [
                    vue.renderSlot(_ctx.$slots, "no-results", {}, () => [
                      _hoisted_11
                    ])
                  ], 512), [
                    [vue.vShow, $options.hasNoResults]
                  ])
                ], 512)
              ], 544)
            ]),
            _: 3
          }, 8, ["disabled", "onClose", "onOpen", "onReveal"])
        ], 40, _hoisted_4$4),
        $options.hasFeedback ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_12, [
          $options.showError ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_13, [
            vue.renderSlot(_ctx.$slots, "error", {}, () => [
              vue.createTextVNode(vue.toDisplayString($props.error), 1)
            ])
          ])) : $options.showHelp ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_14, [
            vue.renderSlot(_ctx.$slots, "help", {}, () => [
              vue.createTextVNode(vue.toDisplayString($props.help), 1)
            ])
          ])) : vue.createCommentVNode("v-if", true)
        ])) : vue.createCommentVNode("v-if", true)
      ])
    ], 2);
  }
  const UiSelect = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiSelect.vue"]]);
  const UiSlider_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$8 = {
    name: "UiSlider",
    components: {
      UiIcon
    },
    props: {
      name: String,
      tabindex: [String, Number],
      icon: String,
      modelValue: {
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
    emits: ["update:modelValue", "focus", "blur", "change", "dragstart", "dragend"],
    data() {
      return {
        initialValue: this.modelValue,
        isActive: false,
        isDragging: false,
        localValue: this.modelValue
      };
    },
    computed: {
      classes() {
        return [
          { "is-dragging": this.isDragging },
          { "is-disabled": this.disabled },
          { "is-active": this.isActive },
          { "has-icon": this.hasIcon },
          { "has-marker": this.showMarker }
        ];
      },
      hasIcon() {
        return Boolean(this.$slots.icon) || Boolean(this.icon);
      },
      fillStyle() {
        return { transform: "scaleX(" + this.relativeValue(this.localValue) + ")" };
      },
      thumbStyle() {
        return {
          left: this.relativeValue(this.localValue) * 100 + "%"
        };
      },
      markerText() {
        return this.markerValue === void 0 ? this.modelValue : this.markerValue;
      },
      snapPoints() {
        const points = [];
        let point = this.step * Math.ceil(this.moderatedMin / this.step);
        while (point <= this.moderatedMax) {
          points.push(point);
          point += this.step;
        }
        return points;
      },
      moderatedMin() {
        return this.max > this.min ? this.min : 0;
      },
      moderatedMax() {
        return this.max > this.min ? this.max : 100;
      }
    },
    watch: {
      modelValue() {
        this.setValue(this.modelValue);
      },
      isDragging() {
        const operation = this.isDragging ? "add" : "remove";
        classlist[operation](document.body, "ui-slider--is-dragging");
      }
    },
    mounted() {
      this.initializeSlider();
    },
    beforeUnmount() {
      this.teardownSlider();
    },
    methods: {
      focus() {
        this.$el.focus();
      },
      reset() {
        this.setValue(this.initialValue);
      },
      onFocus() {
        this.isActive = true;
        this.$emit("focus");
      },
      onBlur() {
        this.isActive = false;
        this.$emit("blur");
      },
      onExternalClick(e) {
        if (!this.$el.contains(e.target)) {
          this.onBlur();
        }
      },
      setValueWithSnap(value) {
        value = this.moderateValue(value);
        if (this.snapToSteps) {
          value = this.getNearestSnapPoint(value);
        }
        this.setValue(value);
      },
      setValue(value) {
        value = this.moderateValue(value);
        if (value === this.localValue) {
          return;
        }
        this.localValue = value;
        this.$emit("update:modelValue", value);
        this.$emit("change", value);
      },
      incrementValue() {
        this.setValueWithSnap(this.localValue + this.step);
      },
      decrementValue() {
        this.setValueWithSnap(this.localValue - this.step);
      },
      getTrackOffset() {
        let el = this.$refs.track;
        let offset2 = el.offsetLeft;
        while (el.offsetParent) {
          el = el.offsetParent;
          offset2 += el.offsetLeft;
        }
        return offset2;
      },
      getPointStyle(point) {
        return {
          left: point + "%"
        };
      },
      initializeSlider() {
        document.addEventListener("touchend", this.onDragStop);
        document.addEventListener("mouseup", this.onDragStop);
        document.addEventListener("click", this.onExternalClick);
        this.initializeDrag();
      },
      teardownSlider() {
        document.removeEventListener("touchend", this.onDragStop);
        document.removeEventListener("mouseup", this.onDragStop);
        document.removeEventListener("click", this.onExternalClick);
      },
      initializeDrag() {
        const value = this.moderateValue(this.localValue ? this.localValue : 0);
        this.setValue(value);
      },
      onDragStart(e) {
        if (this.disabled) {
          return;
        }
        if (!this.isActive) {
          this.onFocus();
        }
        this.isDragging = true;
        this.dragUpdate(e);
        document.addEventListener("touchmove", this.onDragMove, { passive: true });
        document.addEventListener("mousemove", this.onDragMove);
        this.$emit("dragstart", this.localValue, e);
      },
      onDragMove(e) {
        this.dragUpdate(e);
      },
      dragUpdate(e) {
        const position = e.touches ? e.touches[0].pageX : e.pageX;
        const trackLength = this.$refs.track.offsetWidth;
        const relativeValue = (position - this.getTrackOffset()) / trackLength;
        const value = this.moderateValue(
          this.moderatedMin + relativeValue * (this.moderatedMax - this.moderatedMin)
        );
        if (this.isDragging) {
          this.setValue(Math.round(value));
        }
      },
      onDragStop(e) {
        if (this.isDragging) {
          this.isDragging = false;
          if (this.snapToSteps && this.modelValue % this.step !== 0) {
            this.setValueWithSnap(this.modelValue);
          }
          document.removeEventListener("touchmove", this.onDragMove);
          document.removeEventListener("mousemove", this.onDragMove);
          this.$emit("dragend", this.localValue, e);
        }
      },
      getNearestSnapPoint(value) {
        const previousSnapPoint = Math.floor(value / this.step) * this.step;
        const nextSnapPoint = previousSnapPoint + this.step;
        const midpoint = (previousSnapPoint + nextSnapPoint) / 2;
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
      relativeValue(value) {
        return (value - this.moderatedMin) / (this.moderatedMax - this.moderatedMin);
      },
      moderateValue(value) {
        if (value < this.moderatedMin) {
          return this.moderatedMin;
        }
        if (value > this.moderatedMax) {
          return this.moderatedMax;
        }
        return value;
      }
    }
  };
  const _hoisted_1$8 = ["aria-valuemax", "aria-valuemin", "aria-valuenow", "tabindex"];
  const _hoisted_2$6 = ["name", "value"];
  const _hoisted_3$6 = {
    key: 1,
    class: "ui-slider__icon"
  };
  const _hoisted_4$3 = { class: "ui-slider__track-background" };
  const _hoisted_5$3 = {
    key: 0,
    class: "ui-slider__marker"
  };
  const _hoisted_6$2 = /* @__PURE__ */ vue.createElementVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "36",
    height: "36"
  }, [
    /* @__PURE__ */ vue.createElementVNode("path", { d: "M11 .5c-1.7.2-3.4.9-4.7 2-1.1.9-2 2-2.5 3.2-1.2 2.4-1.2 5.1-.1 7.7 1.1 2.6 2.8 5 5.3 7.5 1.2 1.2 2.8 2.7 3 2.7 0 0 .3-.2.6-.5 3.2-2.7 5.6-5.6 7.1-8.5.8-1.5 1.1-2.6 1.3-3.8.2-1.4 0-2.9-.5-4.3-1.2-3.2-4.1-5.4-7.5-5.8-.5-.2-1.5-.2-2-.2z" })
  ], -1);
  const _hoisted_7$1 = { class: "ui-slider__marker-text" };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ui_icon = vue.resolveComponent("ui-icon");
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(["ui-slider", $options.classes]),
      role: "slider",
      "aria-valuemax": $options.moderatedMax,
      "aria-valuemin": $options.moderatedMin,
      "aria-valuenow": $data.localValue,
      tabindex: $props.disabled ? null : $props.tabindex || "0",
      onBlur: _cache[2] || (_cache[2] = (...args) => $options.onBlur && $options.onBlur(...args)),
      onFocus: _cache[3] || (_cache[3] = (...args) => $options.onFocus && $options.onFocus(...args)),
      onKeydown: [
        _cache[4] || (_cache[4] = vue.withKeys(vue.withModifiers((...args) => $options.decrementValue && $options.decrementValue(...args), ["prevent"]), ["down"])),
        _cache[5] || (_cache[5] = vue.withKeys(vue.withModifiers((...args) => $options.decrementValue && $options.decrementValue(...args), ["prevent"]), ["left"])),
        _cache[6] || (_cache[6] = vue.withKeys(vue.withModifiers((...args) => $options.incrementValue && $options.incrementValue(...args), ["prevent"]), ["right"])),
        _cache[7] || (_cache[7] = vue.withKeys(vue.withModifiers((...args) => $options.incrementValue && $options.incrementValue(...args), ["prevent"]), ["up"]))
      ]
    }, [
      $props.name ? (vue.openBlock(), vue.createElementBlock("input", {
        key: 0,
        class: "ui-slider__hidden-input",
        type: "hidden",
        name: $props.name,
        value: $props.modelValue
      }, null, 8, _hoisted_2$6)) : vue.createCommentVNode("v-if", true),
      $options.hasIcon ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$6, [
        vue.renderSlot(_ctx.$slots, "icon", {}, () => [
          vue.createVNode(_component_ui_icon, { icon: $props.icon }, null, 8, ["icon"])
        ])
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("div", {
        ref: "track",
        class: "ui-slider__track",
        onMousedown: _cache[0] || (_cache[0] = (...args) => $options.onDragStart && $options.onDragStart(...args)),
        onTouchstartPassive: _cache[1] || (_cache[1] = (...args) => $options.onDragStart && $options.onDragStart(...args))
      }, [
        vue.createElementVNode("div", _hoisted_4$3, [
          $props.snapToSteps ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList($options.snapPoints, (point) => {
            return vue.openBlock(), vue.createElementBlock("span", {
              key: point,
              class: "ui-slider__snap-point",
              style: vue.normalizeStyle({ left: 100 * $options.relativeValue(point) + "%" })
            }, null, 4);
          }), 128)) : vue.createCommentVNode("v-if", true)
        ]),
        vue.createElementVNode("div", {
          class: "ui-slider__track-fill",
          style: vue.normalizeStyle($options.fillStyle)
        }, null, 4),
        vue.createElementVNode("div", {
          ref: "thumb",
          class: "ui-slider__thumb",
          style: vue.normalizeStyle($options.thumbStyle)
        }, [
          $props.showMarker ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5$3, [
            _hoisted_6$2,
            vue.createElementVNode("span", _hoisted_7$1, vue.toDisplayString($options.markerText), 1)
          ])) : vue.createCommentVNode("v-if", true)
        ], 4)
      ], 544)
    ], 42, _hoisted_1$8);
  }
  const UiSlider = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiSlider.vue"]]);
  const UiSnackbar_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$7 = {
    name: "UiSnackbar",
    components: {
      UiButton
    },
    props: {
      message: String,
      action: String,
      actionColor: {
        type: String,
        default: "accent"
      },
      transition: {
        type: String,
        default: "slide"
      }
    },
    emits: ["action-click", "show", "hide"],
    computed: {
      transitionName() {
        return "ui-snackbar--transition-" + this.transition;
      }
    },
    methods: {
      onActionClick() {
        this.$emit("action-click");
      },
      onEnter() {
        this.$emit("show");
      },
      onLeave() {
        this.$emit("hide");
      }
    }
  };
  const _hoisted_1$7 = { class: "ui-snackbar" };
  const _hoisted_2$5 = { class: "ui-snackbar__message" };
  const _hoisted_3$5 = { class: "ui-snackbar__action" };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ui_button = vue.resolveComponent("ui-button");
    return vue.openBlock(), vue.createBlock(vue.Transition, {
      name: $options.transitionName,
      appear: "",
      onAfterEnter: $options.onEnter,
      onAfterLeave: $options.onLeave
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("div", _hoisted_1$7, [
          vue.createElementVNode("div", _hoisted_2$5, [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              vue.createTextVNode(vue.toDisplayString($props.message), 1)
            ])
          ]),
          vue.createElementVNode("div", _hoisted_3$5, [
            $props.action ? (vue.openBlock(), vue.createBlock(_component_ui_button, {
              key: 0,
              class: "ui-snackbar__action-button",
              type: "secondary",
              color: $props.actionColor,
              onClick: vue.withModifiers($options.onActionClick, ["stop"])
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(vue.toDisplayString($props.action), 1)
              ]),
              _: 1
            }, 8, ["color", "onClick"])) : vue.createCommentVNode("v-if", true)
          ])
        ])
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave"]);
  }
  const UiSnackbar = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiSnackbar.vue"]]);
  const UiSnackbarContainer_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$6 = {
    name: "UiSnackbarContainer",
    components: {
      UiSnackbar
    },
    props: {
      queueSnackbars: {
        type: Boolean,
        default: false
      },
      duration: {
        type: Number,
        default: 5e3
      },
      allowHtml: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: "left"
      },
      transition: {
        type: String,
        default: "slide"
      }
    },
    emits: ["queue-end", "snackbar-show", "snackbar-hide"],
    data() {
      return {
        queue: [],
        snackbarTimeout: null
      };
    },
    computed: {
      classes() {
        return [`ui-snackbar-container--position-${this.position}`];
      }
    },
    beforeUnmount() {
      this.resetTimeout();
    },
    methods: {
      createSnackbar(snackbar) {
        snackbar.show = false;
        snackbar.duration = snackbar.duration || this.duration;
        this.queue.push(snackbar);
        if (this.queue.length === 1) {
          return this.showNextSnackbar();
        } else if (!this.queueSnackbars) {
          this.queue[0].show = false;
        }
      },
      showNextSnackbar() {
        if (this.queue.length === 0) {
          this.$emit("queue-end");
          return;
        }
        this.queue[0].show = true;
      },
      onShow(snackbar) {
        if (this.queue.indexOf(snackbar) !== 0) {
          return;
        }
        this.snackbarTimeout = setTimeout(() => {
          this.queue[0].show = false;
        }, snackbar.duration);
        this.$emit("snackbar-show", snackbar);
        this.callHook("onShow", snackbar);
      },
      onHide(snackbar, index) {
        this.resetTimeout();
        if (this.queueSnackbars || this.queue.length === 1) {
          this.queue.splice(index, 1);
        } else {
          this.queue.splice(index, this.queue.length - 1);
        }
        this.$emit("snackbar-hide", snackbar);
        this.callHook("onHide", snackbar);
        this.showNextSnackbar();
      },
      onClick(snackbar) {
        snackbar.show = false;
        this.callHook("onClick", snackbar);
      },
      onActionClick(snackbar) {
        this.callHook("onActionClick", snackbar);
      },
      callHook(hook, snackbar) {
        if (typeof snackbar[hook] === "function") {
          snackbar[hook].call(void 0, snackbar);
        }
      },
      resetTimeout() {
        clearTimeout(this.snackbarTimeout);
        this.snackbarTimeout = null;
      }
    }
  };
  const _hoisted_1$6 = ["innerHTML"];
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ui_snackbar = vue.resolveComponent("ui-snackbar");
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(["ui-snackbar-container", $options.classes])
    }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.queue, (snackbar, index) => {
        return vue.withDirectives((vue.openBlock(), vue.createBlock(_component_ui_snackbar, {
          key: index,
          "action-color": snackbar.actionColor,
          action: snackbar.action,
          message: snackbar.message,
          transition: $props.transition,
          onActionClick: ($event) => $options.onActionClick(snackbar),
          onClick: ($event) => $options.onClick(snackbar),
          onHide: ($event) => $options.onHide(snackbar, index),
          onShow: ($event) => $options.onShow(snackbar)
        }, {
          default: vue.withCtx(() => [
            vue.createCommentVNode(" eslint-disable-next-line vue/no-v-html "),
            $props.allowHtml ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              innerHTML: snackbar.message
            }, null, 8, _hoisted_1$6)) : vue.createCommentVNode("v-if", true)
          ]),
          _: 2
        }, 1032, ["action-color", "action", "message", "transition", "onActionClick", "onClick", "onHide", "onShow"])), [
          [vue.vShow, snackbar.show]
        ]);
      }), 128))
    ], 2);
  }
  const UiSnackbarContainer = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiSnackbarContainer.vue"]]);
  const UiSwitch_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$5 = {
    name: "UiSwitch",
    props: {
      name: String,
      label: String,
      tabindex: [String, Number],
      modelValue: {
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
        default: "on"
      },
      checked: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: "primary"
      },
      switchPosition: {
        type: String,
        default: "left"
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    emits: ["update:modelValue", "focus", "blur", "change"],
    data() {
      return {
        isActive: false,
        isChecked: looseEqual(this.modelValue, this.trueValue) || this.checked,
        initialValue: this.modelValue
      };
    },
    computed: {
      classes() {
        return [
          `ui-switch--color-${this.color}`,
          `ui-switch--switch-position-${this.switchPosition}`,
          { "is-active": this.isActive },
          { "is-checked": this.isChecked },
          { "is-disabled": this.disabled }
        ];
      }
    },
    watch: {
      modelValue() {
        this.isChecked = looseEqual(this.modelValue, this.trueValue);
      }
    },
    created() {
      const value = this.isChecked ? this.trueValue : this.falseValue;
      if (this.modelValue !== value) {
        this.$emit("update:modelValue", value);
      }
    },
    methods: {
      focus() {
        this.$refs.input.focus();
      },
      onClick(e) {
        const isCheckedPrevious = this.isChecked;
        const isChecked = e.target.checked;
        this.$emit("update:modelValue", isChecked ? this.trueValue : this.falseValue, e);
        if (isCheckedPrevious !== isChecked) {
          this.$emit("change", isChecked ? this.trueValue : this.falseValue, e);
        }
      },
      onFocus(e) {
        this.isActive = true;
        this.$emit("focus", e);
      },
      onBlur(e) {
        this.isActive = false;
        this.$emit("blur", e);
      }
    }
  };
  const _hoisted_1$5 = { class: "ui-switch__input-wrapper" };
  const _hoisted_2$4 = [".checked", "disabled", "name", "tabindex", "value"];
  const _hoisted_3$4 = /* @__PURE__ */ vue.createElementVNode("div", { class: "ui-switch__track" }, null, -1);
  const _hoisted_4$2 = /* @__PURE__ */ vue.createElementVNode("div", { class: "ui-switch__thumb" }, [
    /* @__PURE__ */ vue.createElementVNode("div", { class: "ui-switch__focus-ring" })
  ], -1);
  const _hoisted_5$2 = {
    key: 0,
    class: "ui-switch__label-text"
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("label", {
      class: vue.normalizeClass(["ui-switch", $options.classes])
    }, [
      vue.createElementVNode("div", _hoisted_1$5, [
        vue.createElementVNode("input", {
          ref: "input",
          class: "ui-switch__input",
          type: "checkbox",
          ".checked": $data.isChecked,
          disabled: $props.disabled,
          name: $props.name,
          tabindex: $props.tabindex,
          value: $props.submittedValue,
          onBlur: _cache[0] || (_cache[0] = (...args) => $options.onBlur && $options.onBlur(...args)),
          onClick: _cache[1] || (_cache[1] = (...args) => $options.onClick && $options.onClick(...args)),
          onFocus: _cache[2] || (_cache[2] = (...args) => $options.onFocus && $options.onFocus(...args))
        }, null, 40, _hoisted_2$4),
        _hoisted_3$4,
        _hoisted_4$2
      ]),
      $props.label || _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5$2, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createTextVNode(vue.toDisplayString($props.label), 1)
        ])
      ])) : vue.createCommentVNode("v-if", true)
    ], 2);
  }
  const UiSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiSwitch.vue"]]);
  const UiTab_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$4 = {
    name: "UiTab",
    props: {
      id: {
        type: String,
        default() {
          return UUID.short("ui-tab-");
        }
      },
      title: String,
      icon: String,
      selected: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      tooltip: String,
      openTooltipOn: String,
      tooltipPosition: {
        type: String,
        default: "top"
      }
    },
    emits: ["select", "deselect"],
    data() {
      return {
        isActive: false
      };
    },
    watch: {
      disabled() {
        this.$parent.onTabDisabledChange(this);
      }
    },
    created() {
      this.$parent.addTab(this);
    },
    beforeUnmount() {
      this.$parent.removeTab(this);
    },
    methods: {
      activate() {
        this.isActive = true;
        this.$emit("select", this.id);
      },
      deactivate() {
        this.isActive = false;
        this.$emit("deselect", this.id);
      }
    }
  };
  const _hoisted_1$4 = ["id", "aria-hidden", "tabindex"];
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
      id: $props.id,
      class: "ui-tab",
      role: "tabpanel",
      "aria-hidden": !$data.isActive ? "true" : null,
      tabindex: $data.isActive ? "0" : null
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 8, _hoisted_1$4)), [
      [vue.vShow, $data.isActive]
    ]);
  }
  const UiTab = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiTab.vue"]]);
  const UiRender = (props) => {
    return vue.h("div", { class: "ui-render" }, props.nodes);
  };
  UiRender.props = ["nodes"];
  const UiTabHeaderItem_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$3 = {
    name: "UiTabHeaderItem",
    components: {
      UiIcon,
      UiRippleInk,
      UiTooltip
    },
    props: {
      id: String,
      type: {
        type: String,
        default: "text"
      },
      title: String,
      icon: String,
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
      },
      tooltip: String,
      openTooltipOn: String,
      tooltipPosition: String
    },
    computed: {
      classes() {
        return [
          `ui-tab-header-item--type-${this.type}`,
          { "is-active": this.active },
          { "is-disabled": this.disabled }
        ];
      },
      hasIcon() {
        return this.type === "icon" || this.type === "icon-and-text";
      },
      hasText() {
        return this.type === "text" || this.type === "icon-and-text";
      }
    }
  };
  const _hoisted_1$3 = ["aria-controls", "aria-selected", "disabled", "tabindex"];
  const _hoisted_2$3 = {
    key: 0,
    class: "ui-tab-header-item__icon"
  };
  const _hoisted_3$3 = {
    key: 1,
    class: "ui-tab-header-item__text"
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ui_icon = vue.resolveComponent("ui-icon");
    const _component_ui_ripple_ink = vue.resolveComponent("ui-ripple-ink");
    const _component_ui_tooltip = vue.resolveComponent("ui-tooltip");
    return vue.openBlock(), vue.createElementBlock("li", {
      class: vue.normalizeClass(["ui-tab-header-item", $options.classes]),
      role: "tab",
      "aria-controls": $props.id,
      "aria-selected": $props.active ? "true" : null,
      disabled: $props.disabled ? "true" : null,
      tabindex: $props.active ? 0 : -1
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, () => [
        $options.hasIcon ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$3, [
          _ctx.$slots.icon ? vue.renderSlot(_ctx.$slots, "icon", { key: 0 }) : $props.icon ? (vue.openBlock(), vue.createBlock(_component_ui_icon, {
            key: 1,
            icon: $props.icon
          }, null, 8, ["icon"])) : vue.createCommentVNode("v-if", true)
        ])) : vue.createCommentVNode("v-if", true),
        $options.hasText ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$3, vue.toDisplayString($props.title), 1)) : vue.createCommentVNode("v-if", true)
      ]),
      !$props.disableRipple && !$props.disabled ? (vue.openBlock(), vue.createBlock(_component_ui_ripple_ink, { key: 0 })) : vue.createCommentVNode("v-if", true),
      $props.tooltip ? (vue.openBlock(), vue.createBlock(_component_ui_tooltip, {
        key: 1,
        "open-on": $props.openTooltipOn,
        position: $props.tooltipPosition
      }, {
        default: vue.withCtx(() => [
          vue.createTextVNode(vue.toDisplayString($props.tooltip), 1)
        ]),
        _: 1
      }, 8, ["open-on", "position"])) : vue.createCommentVNode("v-if", true)
    ], 10, _hoisted_1$3);
  }
  const UiTabHeaderItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiTabHeaderItem.vue"]]);
  const UiTabs_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$2 = {
    name: "UiTabs",
    components: {
      Render: UiRender,
      UiTabHeaderItem
    },
    props: {
      type: {
        type: String,
        default: "text"
      },
      confirmTabChange: Function,
      backgroundColor: {
        type: String,
        default: "default"
      },
      textColor: {
        type: String,
        default: "black"
      },
      textColorActive: {
        type: String,
        default: "primary"
      },
      indicatorColor: {
        type: String,
        default: "primary"
      },
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
    emits: ["tab-click", "tab-change"],
    data() {
      return {
        tabs: [],
        activeTabId: null,
        activeTabIndex: -1
      };
    },
    computed: {
      classes() {
        return [
          `ui-tabs--type-${this.type}`,
          `ui-tabs--text-color-${this.textColor}`,
          `ui-tabs--text-color-active-${this.textColorActive}`,
          `ui-tabs--background-color-${this.backgroundColor}`,
          `ui-tabs--indicator-color-${this.indicatorColor}`,
          { "is-raised": this.raised },
          { "is-fullwidth": this.fullwidth }
        ];
      },
      hasIcon() {
        return this.type === "icon" || this.type === "icon-and-text";
      }
    },
    watch: {
      activeTabId() {
        this.tabs.forEach((tab, index) => {
          if (this.activeTabId === tab.id) {
            tab.activate();
            this.activeTabIndex = index;
          } else if (tab.isActive) {
            tab.deactivate();
          }
        });
      }
    },
    methods: {
      addTab(tab) {
        this.tabs.push(tab);
        if (this.activeTabId === null || tab.selected) {
          this.activeTabId = tab.id;
        }
      },
      removeTab(tab) {
        const index = this.tabs.indexOf(tab);
        if (index > -1) {
          this.tabs.splice(index, 1);
          if (tab.id === this.activeTabId) {
            this.selectTab(this.findNearestTab());
          }
        }
      },
      onTabDisabledChange(tab) {
        if (tab.disabled && this.activeTabId === tab.id) {
          this.selectTab(this.findNearestTab());
        }
      },
      onTabClick(tab, event) {
        this.$emit("tab-click", tab, event);
        this.selectTab(tab);
      },
      selectTab(tab) {
        if (tab === null || tab.disabled || tab.id === this.activeTabId) {
          return;
        }
        if (this.confirmTabChange && !this.confirmTabChange(this.tabs[this.activeTabIndex], tab)) {
          return;
        }
        this.activeTabId = tab.id;
        this.$emit("tab-change", tab);
      },
      selectNextTab() {
        const nextTab = this.findNextTab();
        if (nextTab) {
          this.selectTab(nextTab);
          nextTab.$el.focus();
        }
      },
      selectPreviousTab() {
        const previousTab = this.findPreviousTab();
        if (previousTab) {
          this.selectTab(previousTab);
          previousTab.$el.focus();
        }
      },
      findNextTab() {
        let tab = null;
        for (let i2 = this.activeTabIndex + 1; i2 < this.$refs.tabHeaders.length; i2++) {
          if (this.$refs.tabHeaders[i2] && !this.$refs.tabHeaders[i2].disabled) {
            tab = this.$refs.tabHeaders[i2];
            break;
          }
        }
        return tab;
      },
      findPreviousTab() {
        let tab = null;
        for (let i2 = this.activeTabIndex - 1; i2 >= 0; i2--) {
          if (this.$refs.tabHeaders[i2] && !this.$refs.tabHeaders[i2].disabled) {
            tab = this.$refs.tabHeaders[i2];
            break;
          }
        }
        return tab;
      },
      findNearestTab() {
        return this.findPreviousTab() || this.findNextTab();
      },
      findTabById(id) {
        for (let i2 = 0; i2 < this.$refs.tabHeaders.length; i2++) {
          if (id === this.$refs.tabHeaders[i2].id) {
            return this.$refs.tabHeaders[i2];
          }
        }
        return null;
      },
      setActiveTab(tabId) {
        const tab = this.findTabById(tabId);
        if (tab && !tab.disabled) {
          this.selectTab(tab);
        }
      }
    }
  };
  const _hoisted_1$2 = { class: "ui-tabs__header" };
  const _hoisted_2$2 = {
    class: "ui-tabs__header-items",
    role: "tablist"
  };
  const _hoisted_3$2 = { class: "ui-tabs__body" };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_render = vue.resolveComponent("render");
    const _component_ui_tab_header_item = vue.resolveComponent("ui-tab-header-item");
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(["ui-tabs", $options.classes])
    }, [
      vue.createElementVNode("div", _hoisted_1$2, [
        vue.createElementVNode("ul", _hoisted_2$2, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.tabs, (tab) => {
            return vue.openBlock(), vue.createBlock(_component_ui_tab_header_item, {
              id: tab.id,
              ref_for: true,
              ref: "tabHeaders",
              key: tab.id,
              active: $data.activeTabId === tab.id,
              "disable-ripple": $props.disableRipple,
              disabled: tab.disabled,
              title: tab.title,
              icon: tab.icon,
              type: $props.type,
              tooltip: tab.tooltip,
              "open-tooltip-on": tab.openTooltipOn,
              "tooltip-position": tab.tooltipPosition,
              onClick: ($event) => $options.onTabClick(tab, $event),
              onKeydown: [
                vue.withKeys($options.selectPreviousTab, ["left"]),
                vue.withKeys($options.selectNextTab, ["right"])
              ]
            }, vue.createSlots({
              default: vue.withCtx(() => [
                tab.$slots.header ? (vue.openBlock(), vue.createBlock(_component_render, {
                  key: 0,
                  nodes: tab.$slots.header()
                }, null, 8, ["nodes"])) : vue.createCommentVNode("v-if", true)
              ]),
              _: 2
            }, [
              !tab.$slots.header && tab.$slots.icon && $options.hasIcon ? {
                name: "icon",
                fn: vue.withCtx(() => [
                  vue.createVNode(_component_render, {
                    nodes: tab.$slots.icon()
                  }, null, 8, ["nodes"])
                ])
              } : void 0
            ]), 1032, ["id", "active", "disable-ripple", "disabled", "title", "icon", "type", "tooltip", "open-tooltip-on", "tooltip-position", "onClick", "onKeydown"]);
          }), 128))
        ])
      ]),
      vue.createElementVNode("div", _hoisted_3$2, [
        vue.renderSlot(_ctx.$slots, "default")
      ])
    ], 2);
  }
  const UiTabs = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiTabs.vue"]]);
  var autosize$1 = { exports: {} };
  /*!
  	Autosize 3.0.20
  	license: MIT
  	http://www.jacklmoore.com/autosize
  */
  (function(module2, exports3) {
    (function(global2, factory) {
      {
        factory(exports3, module2);
      }
    })(commonjsGlobal, function(exports4, module3) {
      var map = typeof Map === "function" ? /* @__PURE__ */ new Map() : function() {
        var keys2 = [];
        var values = [];
        return {
          has: function has(key) {
            return keys2.indexOf(key) > -1;
          },
          get: function get(key) {
            return values[keys2.indexOf(key)];
          },
          set: function set2(key, value) {
            if (keys2.indexOf(key) === -1) {
              keys2.push(key);
              values.push(value);
            }
          },
          "delete": function _delete(key) {
            var index = keys2.indexOf(key);
            if (index > -1) {
              keys2.splice(index, 1);
              values.splice(index, 1);
            }
          }
        };
      }();
      var createEvent = function createEvent2(name) {
        return new Event(name, { bubbles: true });
      };
      try {
        new Event("test");
      } catch (e) {
        createEvent = function(name) {
          var evt = document.createEvent("Event");
          evt.initEvent(name, true, false);
          return evt;
        };
      }
      function assign(ta) {
        if (!ta || !ta.nodeName || ta.nodeName !== "TEXTAREA" || map.has(ta))
          return;
        var heightOffset = null;
        var clientWidth = ta.clientWidth;
        var cachedHeight = null;
        function init() {
          var style = window.getComputedStyle(ta, null);
          if (style.resize === "vertical") {
            ta.style.resize = "none";
          } else if (style.resize === "both") {
            ta.style.resize = "horizontal";
          }
          if (style.boxSizing === "content-box") {
            heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
          } else {
            heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
          }
          if (isNaN(heightOffset)) {
            heightOffset = 0;
          }
          update3();
        }
        function changeOverflow(value) {
          {
            var width = ta.style.width;
            ta.style.width = "0px";
            ta.offsetWidth;
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
          var docTop = document.documentElement && document.documentElement.scrollTop;
          ta.style.height = "auto";
          var endHeight = ta.scrollHeight + heightOffset;
          if (ta.scrollHeight === 0) {
            ta.style.height = originalHeight;
            return;
          }
          ta.style.height = endHeight + "px";
          clientWidth = ta.clientWidth;
          overflows.forEach(function(el) {
            el.node.scrollTop = el.scrollTop;
          });
          if (docTop) {
            document.documentElement.scrollTop = docTop;
          }
        }
        function update3() {
          resize();
          var styleHeight = Math.round(parseFloat(ta.style.height));
          var computed = window.getComputedStyle(ta, null);
          var actualHeight = Math.round(parseFloat(computed.height));
          if (actualHeight !== styleHeight) {
            if (computed.overflowY !== "visible") {
              changeOverflow("visible");
              resize();
              actualHeight = Math.round(parseFloat(window.getComputedStyle(ta, null).height));
            }
          } else {
            if (computed.overflowY !== "hidden") {
              changeOverflow("hidden");
              resize();
              actualHeight = Math.round(parseFloat(window.getComputedStyle(ta, null).height));
            }
          }
          if (cachedHeight !== actualHeight) {
            cachedHeight = actualHeight;
            var evt = createEvent("autosize:resized");
            try {
              ta.dispatchEvent(evt);
            } catch (err) {
            }
          }
        }
        var pageResize = function pageResize2() {
          if (ta.clientWidth !== clientWidth) {
            update3();
          }
        };
        var destroy3 = function(style) {
          window.removeEventListener("resize", pageResize, false);
          ta.removeEventListener("input", update3, false);
          ta.removeEventListener("keyup", update3, false);
          ta.removeEventListener("autosize:destroy", destroy3, false);
          ta.removeEventListener("autosize:update", update3, false);
          Object.keys(style).forEach(function(key) {
            ta.style[key] = style[key];
          });
          map["delete"](ta);
        }.bind(ta, {
          height: ta.style.height,
          resize: ta.style.resize,
          overflowY: ta.style.overflowY,
          overflowX: ta.style.overflowX,
          wordWrap: ta.style.wordWrap
        });
        ta.addEventListener("autosize:destroy", destroy3, false);
        if ("onpropertychange" in ta && "oninput" in ta) {
          ta.addEventListener("keyup", update3, false);
        }
        window.addEventListener("resize", pageResize, false);
        ta.addEventListener("input", update3, false);
        ta.addEventListener("autosize:update", update3, false);
        ta.style.overflowX = "hidden";
        ta.style.wordWrap = "break-word";
        map.set(ta, {
          destroy: destroy3,
          update: update3
        });
        init();
      }
      function destroy2(ta) {
        var methods = map.get(ta);
        if (methods) {
          methods.destroy();
        }
      }
      function update2(ta) {
        var methods = map.get(ta);
        if (methods) {
          methods.update();
        }
      }
      var autosize2 = null;
      if (typeof window === "undefined" || typeof window.getComputedStyle !== "function") {
        autosize2 = function(el) {
          return el;
        };
        autosize2.destroy = function(el) {
          return el;
        };
        autosize2.update = function(el) {
          return el;
        };
      } else {
        autosize2 = function(el, options) {
          if (el) {
            Array.prototype.forEach.call(el.length ? el : [el], function(x) {
              return assign(x);
            });
          }
          return el;
        };
        autosize2.destroy = function(el) {
          if (el) {
            Array.prototype.forEach.call(el.length ? el : [el], destroy2);
          }
          return el;
        };
        autosize2.update = function(el) {
          if (el) {
            Array.prototype.forEach.call(el.length ? el : [el], update2);
          }
          return el;
        };
      }
      module3.exports = autosize2;
    });
  })(autosize$1, autosize$1.exports);
  const autosize = autosize$1.exports;
  const UiTextbox_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$1 = {
    name: "UiTextbox",
    components: {
      UiIcon
    },
    directives: {
      autofocus
    },
    props: {
      name: String,
      placeholder: String,
      tabindex: [String, Number],
      modelValue: {
        type: [String, Number],
        default: ""
      },
      icon: String,
      iconPosition: {
        type: String,
        default: "left"
      },
      label: String,
      floatingLabel: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: "text"
      },
      multiLine: {
        type: Boolean,
        default: false
      },
      rows: {
        type: Number,
        default: 2
      },
      autocomplete: String,
      autocapitalize: String,
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
        default: "any"
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
    emits: ["update:modelValue", "focus", "blur", "change", "touch", "keydown", "keydown-enter"],
    data() {
      return {
        isActive: false,
        isTouched: false,
        initialValue: this.modelValue,
        autosizeInitialized: false
      };
    },
    computed: {
      classes() {
        return [
          `ui-textbox--icon-position-${this.iconPosition}`,
          { "is-active": this.isActive },
          { "is-invalid": this.invalid },
          { "is-touched": this.isTouched },
          { "is-multi-line": this.multiLine },
          { "has-counter": this.maxlength },
          { "is-disabled": this.disabled },
          { "has-label": this.hasLabel },
          { "has-floating-label": this.hasFloatingLabel }
        ];
      },
      labelClasses() {
        return {
          "is-inline": this.hasFloatingLabel && this.isLabelInline,
          "is-floating": this.hasFloatingLabel && !this.isLabelInline
        };
      },
      hasLabel() {
        return Boolean(this.label) || Boolean(this.$slots.default);
      },
      hasFloatingLabel() {
        return this.hasLabel && this.floatingLabel;
      },
      isLabelInline() {
        return this.valueLength === 0 && !this.isActive;
      },
      minValue() {
        if (this.type === "number" && this.min !== void 0) {
          return this.min;
        }
        return null;
      },
      maxValue() {
        if (this.type === "number" && this.max !== void 0) {
          return this.max;
        }
        return null;
      },
      stepValue() {
        return this.type === "number" ? this.step : null;
      },
      valueLength() {
        return this.modelValue === null ? 0 : String(this.modelValue).length;
      },
      hasFeedback() {
        return this.showError || this.showHelp;
      },
      showError() {
        return this.invalid && (Boolean(this.error) || Boolean(this.$slots.error));
      },
      showHelp() {
        return Boolean(this.help) || Boolean(this.$slots.help);
      }
    },
    created() {
      if (this.modelValue === null) {
        this.initialValue = "";
        this.updateValue("");
      }
    },
    mounted() {
      if (this.multiLine && this.autosize) {
        autosize(this.$refs.textarea);
        this.autosizeInitialized = true;
      }
    },
    beforeUnmount() {
      if (this.autosizeInitialized) {
        autosize.destroy(this.$refs.textarea);
      }
    },
    methods: {
      updateValue(value) {
        this.$emit("update:modelValue", value);
      },
      onChange(e) {
        this.$emit("change", this.modelValue, e);
      },
      onFocus(e) {
        this.isActive = true;
        this.$emit("focus", e);
      },
      onBlur(e) {
        this.isActive = false;
        this.$emit("blur", e);
        if (!this.isTouched) {
          this.isTouched = true;
          this.$emit("touch");
        }
      },
      onKeydown(e) {
        this.$emit("keydown", e);
      },
      onKeydownEnter(e) {
        this.$emit("keydown-enter", e);
      },
      reset() {
        if (document.activeElement === this.$refs.input || document.activeElement === this.$refs.textarea) {
          document.activeElement.blur();
        }
        this.updateValue(this.initialValue);
        this.resetTouched();
      },
      resetTouched(options = { touched: false }) {
        this.isTouched = options.touched;
      },
      refreshSize() {
        if (this.autosizeInitialized) {
          autosize.update(this.$refs.textarea);
        }
      },
      focus() {
        (this.$refs.input || this.$refs.textarea).focus();
      }
    }
  };
  const _hoisted_1$1 = {
    key: 0,
    class: "ui-textbox__icon-wrapper"
  };
  const _hoisted_2$1 = { class: "ui-textbox__content" };
  const _hoisted_3$1 = { class: "ui-textbox__label" };
  const _hoisted_4$1 = ["autocomplete", "autocapitalize", "disabled", "max", "maxlength", "minlength", "min", "name", "placeholder", "readonly", "required", "step", "tabindex", "type", "value"];
  const _hoisted_5$1 = ["autocomplete", "autocapitalize", "disabled", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "tabindex", "value"];
  const _hoisted_6$1 = {
    key: 0,
    class: "ui-textbox__feedback"
  };
  const _hoisted_7 = {
    key: 0,
    class: "ui-textbox__feedback-text"
  };
  const _hoisted_8 = {
    key: 1,
    class: "ui-textbox__feedback-text"
  };
  const _hoisted_9 = {
    key: 2,
    class: "ui-textbox__counter"
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ui_icon = vue.resolveComponent("ui-icon");
    const _directive_autofocus = vue.resolveDirective("autofocus");
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(["ui-textbox", $options.classes])
    }, [
      $props.icon || _ctx.$slots.icon ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
        vue.renderSlot(_ctx.$slots, "icon", {}, () => [
          vue.createVNode(_component_ui_icon, { icon: $props.icon }, null, 8, ["icon"])
        ])
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("div", _hoisted_2$1, [
        vue.createElementVNode("label", _hoisted_3$1, [
          !$props.multiLine ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
            key: 0,
            ref: "input",
            class: "ui-textbox__input",
            autocomplete: $props.autocomplete ? $props.autocomplete : null,
            autocapitalize: $props.autocapitalize ? $props.autocapitalize : null,
            disabled: $props.disabled,
            max: $options.maxValue,
            maxlength: $props.enforceMaxlength ? $props.maxlength : null,
            minlength: $props.minlength,
            min: $options.minValue,
            name: $props.name,
            placeholder: $options.hasFloatingLabel ? null : $props.placeholder,
            readonly: $props.readonly,
            required: $props.required,
            step: $options.stepValue,
            tabindex: $props.tabindex,
            type: $props.type,
            value: $props.modelValue,
            onBlur: _cache[0] || (_cache[0] = (...args) => $options.onBlur && $options.onBlur(...args)),
            onChange: _cache[1] || (_cache[1] = (...args) => $options.onChange && $options.onChange(...args)),
            onFocus: _cache[2] || (_cache[2] = (...args) => $options.onFocus && $options.onFocus(...args)),
            onInput: _cache[3] || (_cache[3] = ($event) => $options.updateValue($event.target.value)),
            onKeydown: [
              _cache[4] || (_cache[4] = vue.withKeys((...args) => $options.onKeydownEnter && $options.onKeydownEnter(...args), ["enter"])),
              _cache[5] || (_cache[5] = (...args) => $options.onKeydown && $options.onKeydown(...args))
            ]
          }, null, 40, _hoisted_4$1)), [
            [_directive_autofocus, $props.autofocus]
          ]) : vue.withDirectives((vue.openBlock(), vue.createElementBlock("textarea", {
            key: 1,
            ref: "textarea",
            class: "ui-textbox__textarea",
            autocomplete: $props.autocomplete ? $props.autocomplete : null,
            autocapitalize: $props.autocapitalize ? $props.autocapitalize : null,
            disabled: $props.disabled,
            maxlength: $props.enforceMaxlength ? $props.maxlength : null,
            minlength: $props.minlength,
            name: $props.name,
            placeholder: $options.hasFloatingLabel ? null : $props.placeholder,
            readonly: $props.readonly,
            required: $props.required,
            rows: $props.rows,
            tabindex: $props.tabindex,
            value: $props.modelValue,
            onBlur: _cache[6] || (_cache[6] = (...args) => $options.onBlur && $options.onBlur(...args)),
            onChange: _cache[7] || (_cache[7] = (...args) => $options.onChange && $options.onChange(...args)),
            onFocus: _cache[8] || (_cache[8] = (...args) => $options.onFocus && $options.onFocus(...args)),
            onInput: _cache[9] || (_cache[9] = ($event) => $options.updateValue($event.target.value)),
            onKeydown: [
              _cache[10] || (_cache[10] = vue.withKeys((...args) => $options.onKeydownEnter && $options.onKeydownEnter(...args), ["enter"])),
              _cache[11] || (_cache[11] = (...args) => $options.onKeydown && $options.onKeydown(...args))
            ]
          }, null, 40, _hoisted_5$1)), [
            [_directive_autofocus, $props.autofocus]
          ]),
          $props.label || _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 2,
            class: vue.normalizeClass(["ui-textbox__label-text", $options.labelClasses])
          }, [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              vue.createTextVNode(vue.toDisplayString($props.label), 1)
            ])
          ], 2)) : vue.createCommentVNode("v-if", true)
        ]),
        $options.hasFeedback || $props.maxlength ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_6$1, [
          $options.showError ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_7, [
            vue.renderSlot(_ctx.$slots, "error", {}, () => [
              vue.createTextVNode(vue.toDisplayString($props.error), 1)
            ])
          ])) : $options.showHelp ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_8, [
            vue.renderSlot(_ctx.$slots, "help", {}, () => [
              vue.createTextVNode(vue.toDisplayString($props.help), 1)
            ])
          ])) : vue.createCommentVNode("v-if", true),
          $props.maxlength ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_9, vue.toDisplayString($options.valueLength + "/" + $props.maxlength), 1)) : vue.createCommentVNode("v-if", true)
        ])) : vue.createCommentVNode("v-if", true)
      ])
    ], 2);
  }
  const UiTextbox = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiTextbox.vue"]]);
  const UiToolbar_vue_vue_type_style_index_0_lang = "";
  const _sfc_main = {
    name: "UiToolbar",
    components: {
      UiIconButton,
      UiProgressLinear
    },
    props: {
      type: {
        type: String,
        default: "default"
      },
      textColor: {
        type: String,
        default: "black"
      },
      title: String,
      brand: String,
      removeBrandDivider: {
        type: Boolean,
        default: false
      },
      navIcon: {
        type: String,
        default: "menu"
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
        default: "bottom"
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    emits: ["nav-icon-click"],
    computed: {
      classes() {
        return [
          `ui-toolbar--type-${this.type}`,
          `ui-toolbar--text-color-${this.textColor}`,
          `ui-toolbar--progress-position-${this.progressPosition}`,
          { "is-raised": this.raised }
        ];
      },
      progressColor() {
        return this.textColor === "black" ? "primary" : "white";
      },
      hasBrandDivider() {
        return this.removeBrandDivider ? false : this.brand || this.$slots.brand;
      }
    },
    methods: {
      navIconClick() {
        this.$emit("nav-icon-click");
      }
    }
  };
  const _hoisted_1 = { class: "ui-toolbar__left" };
  const _hoisted_2 = {
    key: 0,
    class: "ui-toolbar__nav-icon"
  };
  const _hoisted_3 = {
    key: 1,
    class: "ui-toolbar__brand"
  };
  const _hoisted_4 = { class: "ui-toolbar__brand-text" };
  const _hoisted_5 = {
    key: 0,
    class: "ui-toolbar__title"
  };
  const _hoisted_6 = { class: "ui-toolbar__right" };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ui_icon_button = vue.resolveComponent("ui-icon-button");
    const _component_ui_progress_linear = vue.resolveComponent("ui-progress-linear");
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(["ui-toolbar", $options.classes])
    }, [
      vue.createElementVNode("div", _hoisted_1, [
        !$props.removeNavIcon ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
          vue.renderSlot(_ctx.$slots, "icon", {}, () => [
            vue.createVNode(_component_ui_icon_button, {
              size: "large",
              type: "secondary",
              color: $props.textColor,
              icon: $props.navIcon,
              onClick: $options.navIconClick
            }, null, 8, ["color", "icon", "onClick"])
          ])
        ])) : vue.createCommentVNode("v-if", true),
        $props.brand || _ctx.$slots.brand ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3, [
          vue.renderSlot(_ctx.$slots, "brand", {}, () => [
            vue.createElementVNode("div", _hoisted_4, vue.toDisplayString($props.brand), 1)
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ]),
      vue.createElementVNode("div", {
        class: vue.normalizeClass(["ui-toolbar__body", { "has-brand-divider": $options.hasBrandDivider }])
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          $props.title ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5, vue.toDisplayString($props.title), 1)) : vue.createCommentVNode("v-if", true)
        ])
      ], 2),
      vue.createElementVNode("div", _hoisted_6, [
        vue.renderSlot(_ctx.$slots, "actions")
      ]),
      vue.withDirectives(vue.createVNode(_component_ui_progress_linear, {
        class: "ui-toolbar__progress",
        color: $options.progressColor
      }, null, 8, ["color"]), [
        [vue.vShow, $props.loading]
      ])
    ], 2);
  }
  const UiToolbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/code/JosephusPaye/keen-ui-alt/src/UiToolbar.vue"]]);
  const KeenUI = {
    UiAlert,
    UiAutocomplete,
    UiButton,
    UiCalendar,
    UiCheckbox,
    UiCheckboxGroup,
    UiCloseButton,
    UiCollapsible,
    UiConfirm,
    UiDatepicker,
    UiDatepickerCalendar,
    UiFab,
    UiFileupload,
    UiIcon,
    UiIconButton,
    UiMenu,
    UiModal,
    UiPopover,
    UiPreloader,
    UiProgressCircular,
    UiProgressLinear,
    UiRadio,
    UiRadioGroup,
    UiRippleInk,
    UiSelect,
    UiSlider,
    UiSnackbar,
    UiSnackbarContainer,
    UiSwitch,
    UiTab,
    UiTabs,
    UiTextbox,
    UiToolbar,
    UiTooltip
  };
  function install(app, config = {}) {
    Object.keys(config).forEach((key) => {
      if (startsWith(key, "Ui")) {
        if (KeenUI[key] === void 0) {
          return;
        }
        const Component = KeenUI[key];
        const props = config[key];
        configure(Component, props);
      }
    });
    Object.keys(KeenUI).forEach((key) => {
      if (startsWith(key, "Ui")) {
        const Component = KeenUI[key];
        app.component(Component.name, Component);
      }
    });
  }
  if (typeof window !== "undefined") {
    window.KeenUI = KeenUI;
  }
  exports2.UiAlert = UiAlert;
  exports2.UiAutocomplete = UiAutocomplete;
  exports2.UiButton = UiButton;
  exports2.UiCalendar = UiCalendar;
  exports2.UiCheckbox = UiCheckbox;
  exports2.UiCheckboxGroup = UiCheckboxGroup;
  exports2.UiCloseButton = UiCloseButton;
  exports2.UiCollapsible = UiCollapsible;
  exports2.UiConfirm = UiConfirm;
  exports2.UiDatepicker = UiDatepicker;
  exports2.UiDatepickerCalendar = UiDatepickerCalendar;
  exports2.UiFab = UiFab;
  exports2.UiFileupload = UiFileupload;
  exports2.UiIcon = UiIcon;
  exports2.UiIconButton = UiIconButton;
  exports2.UiMenu = UiMenu;
  exports2.UiModal = UiModal;
  exports2.UiPopover = UiPopover;
  exports2.UiPreloader = UiPreloader;
  exports2.UiProgressCircular = UiProgressCircular;
  exports2.UiProgressLinear = UiProgressLinear;
  exports2.UiRadio = UiRadio;
  exports2.UiRadioGroup = UiRadioGroup;
  exports2.UiRippleInk = UiRippleInk;
  exports2.UiSelect = UiSelect;
  exports2.UiSlider = UiSlider;
  exports2.UiSnackbar = UiSnackbar;
  exports2.UiSnackbarContainer = UiSnackbarContainer;
  exports2.UiSwitch = UiSwitch;
  exports2.UiTab = UiTab;
  exports2.UiTabs = UiTabs;
  exports2.UiTextbox = UiTextbox;
  exports2.UiToolbar = UiToolbar;
  exports2.UiTooltip = UiTooltip;
  exports2.install = install;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
