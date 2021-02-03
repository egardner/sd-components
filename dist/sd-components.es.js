var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", {staticClass: "sd-icon", class: _vm.builtInClasses}, [_c("svg", {attrs: {xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 20 20", "aria-hidden": _vm.lacksTitle}}, [_vm.iconTitle ? _c("title", [_vm._v(_vm._s(_vm.iconTitle))]) : _vm._e(), _vm._v(" "), _c("g", {attrs: {fill: _vm.iconColor}}, [_c("path", {attrs: {d: _vm.iconPath}})])])]);
};
var staticRenderFns = [];
var Icon_vue_vue_type_style_index_0_lang = "/**\n * WikimediaUI Base v0.18.1\n * Wikimedia Foundation user interface base variables\n * https://gerrit.wikimedia.org/g/wikimedia-ui-base/\n *\n * See also https://design.wikimedia.org/style-guide/\n */\n.sd-icon {\n  align-items: center;\n  display: inline-flex;\n  font-size: 20 / 16 / 0.875 / 1em;\n  justify-content: center;\n  vertical-align: middle;\n  user-select: none;\n}\n[dir='rtl'] .sd-icon--flip-for-rtl svg {\n  transform: scaleX(-1);\n}\n";
function normalizeComponent(scriptExports, render2, staticRenderFns2, functionalTemplate, injectStyles2, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render2) {
    options.render = render2;
    options.staticRenderFns = staticRenderFns2;
    options._compiled = true;
  }
  if (functionalTemplate) {
    options.functional = true;
  }
  if (scopeId) {
    options._scopeId = "data-v-" + scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (injectStyles2) {
        injectStyles2.call(this, context);
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options._ssrRegister = hook;
  } else if (injectStyles2) {
    hook = shadowMode ? function() {
      injectStyles2.call(this, (options.functional ? this.parent : this).$root.$options.shadowRoot);
    } : injectStyles2;
  }
  if (hook) {
    if (options.functional) {
      options._injectStyles = hook;
      var originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options
  };
}
const script = {
  name: "SdIcon",
  props: {
    icon: {
      type: [String, Object],
      required: true
    },
    iconColor: {
      type: String,
      default: "currentColor"
    },
    iconTitle: {
      type: [String, Object],
      default: ""
    },
    langCode: {
      type: String,
      default: function() {
        return document.documentElement.lang;
      }
    }
  },
  data: function() {
    return {
      dir: document.documentElement.dir
    };
  },
  computed: {
    builtInClasses: function() {
      return {
        "sd-icon--flip-for-rtl": this.shouldFlip
      };
    },
    shouldFlip: function() {
      var exception;
      if (typeof this.icon === "string") {
        return false;
      }
      if ("shouldFlipExceptions" in this.icon) {
        exception = this.icon.shouldFlipExceptions.indexOf(this.langCode);
        return exception === void 0 || exception === -1;
      }
      if ("shouldFlip" in this.icon) {
        return !!this.icon.shouldFlip;
      }
      return false;
    },
    lacksTitle: function() {
      return !this.iconTitle;
    },
    iconPath: function() {
      var langCodeIcon;
      if (typeof this.icon === "string") {
        return this.icon;
      }
      if ("path" in this.icon) {
        return this.icon.path;
      }
      if ("langCodeMap" in this.icon) {
        langCodeIcon = this.langCode in this.icon.langCodeMap ? this.icon.langCodeMap[this.langCode] : this.icon.default;
        return typeof langCodeIcon === "string" ? langCodeIcon : langCodeIcon.path;
      }
      return this.dir === "rtl" ? this.icon.rtl : this.icon.default;
    }
  },
  mounted: function() {
    var computedStyle = window.getComputedStyle(this.$el);
    this.dir = computedStyle.direction || this.dir;
  }
};
const __cssModules = {};
var component = normalizeComponent(script, render, staticRenderFns, false, injectStyles, null, null, null);
function injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
var Icon = component.exports;
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("button", {staticClass: "sd-button", class: _vm.builtInClasses, attrs: {disabled: _vm.disabled}, on: {click: function($event) {
    return _vm.$emit("click");
  }}}, [_vm.icon ? _c("sd-icon", {attrs: {icon: _vm.icon}}) : _vm._e(), _vm._v(" "), _c("span", {staticClass: "sd-button__content"}, [_vm._t("default")], 2)], 1);
};
var staticRenderFns$1 = [];
var Button_vue_vue_type_style_index_0_lang = "/* stylelint-disable selector-class-pattern */\n/* stylelint-disable selector-no-vendor-prefix */\n/* stylelint-enable selector-no-vendor-prefix */\n/**\n * WikimediaUI Base v0.18.1\n * Wikimedia Foundation user interface base variables\n * https://gerrit.wikimedia.org/g/wikimedia-ui-base/\n *\n * See also https://design.wikimedia.org/style-guide/\n */\n.sd-button {\n  -webkit-transition: background-color 100ms, color 100ms, border-color 100ms, box-shadow 100ms;\n  -moz-transition: background-color 100ms, color 100ms, border-color 100ms, box-shadow 100ms;\n  transition: background-color 100ms, color 100ms, border-color 100ms, box-shadow 100ms;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  color: #202122;\n  cursor: pointer;\n  font-size: inherit;\n  font-weight: bold;\n  padding: 6px;\n  user-select: none;\n}\n.sd-button:hover {\n  background-color: rgba(0, 24, 73, 0.02745098);\n  color: #000;\n}\n.sd-button:focus {\n  border-color: #36c;\n  box-shadow: inset 0 0 0 1px #36c;\n  outline: 0;\n}\n.sd-button .sd-icon {\n  height: 100%;\n  left: 0.35714286em;\n  position: absolute;\n  top: 0;\n  transition: opacity 100ms;\n}\n.sd-button--icon {\n  padding-left: 2.14285714em;\n  position: relative;\n}\n.sd-button--framed {\n  background-color: #f8f9fa;\n  border-color: #a2a9b1;\n  padding: 6px 12px;\n  /* stylelint-disable-next-line no-descending-specificity */\n}\n.sd-button--framed:hover {\n  background-color: #fff;\n  color: #404244;\n}\n.sd-button--framed.sd-button--icon {\n  padding-left: 2.71428571em;\n  position: relative;\n}\n.sd-button--framed .sd-icon {\n  left: 0.78571429em;\n}\n.sd-button--progressive {\n  color: #36c;\n}\n.sd-button--progressive:hover {\n  color: #447ff5;\n}\n.sd-button--progressive.sd-button--framed:hover {\n  border-color: #447ff5;\n}\n.sd-button--destructive {\n  color: #d33;\n}\n.sd-button--destructive:hover {\n  color: #ff4242;\n}\n.sd-button--destructive:focus {\n  border-color: #d33;\n  box-shadow: inset 0 0 0 1px #d33;\n}\n.sd-button--destructive.sd-button--framed:hover {\n  border-color: #ff4242;\n}\n.sd-button--destructive.sd-button--framed:focus {\n  box-shadow: inset 0 0 0 1px #d33 inset 0 0 0 2px #fff;\n}\n.sd-button--primary.sd-button--framed {\n  background-color: #36c;\n  border-color: #36c;\n  color: #fff;\n}\n.sd-button--primary.sd-button--framed:hover {\n  background-color: #447ff5;\n  border-color: #447ff5;\n}\n.sd-button--primary.sd-button--framed:focus {\n  box-shadow: inset 0 0 0 1px #36c, inset 0 0 0 2px #fff;\n}\n.sd-button--primary.sd-button--framed.sd-button--destructive {\n  background-color: #d33;\n  border-color: #d33;\n}\n.sd-button--primary.sd-button--framed.sd-button--destructive:hover {\n  background-color: #ff4242;\n  border-color: #ff4242;\n}\n.sd-button--primary.sd-button--framed.sd-button--destructive:focus {\n  box-shadow: inset 0 0 0 1px #d33 inset 0 0 0 2px #fff;\n}\n.sd-button--invisible-text {\n  padding: 2.14285714em 0 0 2.14285714em;\n}\n.sd-button--invisible-text .sd-button__content {\n  border: 0;\n  clip: rect(1px, 1px, 1px, 1px);\n  display: block;\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n.sd-button--invisible-text .sd-icon {\n  left: 50%;\n  transform: translateX(-50%);\n}\n.sd-button:disabled {\n  color: #72777d;\n  cursor: auto;\n}\n.sd-button:disabled:hover,\n.sd-button:disabled:focus {\n  background-color: #fff;\n}\n.sd-button:disabled.sd-button--framed {\n  background-color: #c8ccd1;\n  border-color: #c8ccd1;\n  color: #fff;\n}\n.sd-button:disabled.sd-button--framed:hover,\n.sd-button:disabled.sd-button--framed:focus {\n  background-color: #c8ccd1;\n  border-color: #c8ccd1;\n  box-shadow: none;\n}\n.sd-button:disabled:not( .sd-button--framed ) .sd-icon {\n  opacity: 0.51;\n}\n";
const script$1 = {
  name: "SdButton",
  components: {
    "sd-icon": Icon
  },
  props: {
    disabled: {
      type: Boolean
    },
    frameless: {
      type: Boolean
    },
    icon: {
      type: [String, Object],
      default: null
    },
    invisibleText: {
      type: Boolean
    },
    progressive: {
      type: Boolean
    },
    destructive: {
      type: Boolean
    },
    primary: {
      type: Boolean
    }
  },
  computed: {
    builtInClasses() {
      return {
        "sd-button--framed": !this.frameless,
        "sd-button--icon": this.icon,
        "sd-button--invisible-text": this.invisibleText,
        "sd-button--progressive": this.progressive,
        "sd-button--destructive": this.destructive,
        "sd-button--primary": this.primary
      };
    }
  }
};
const __cssModules$1 = {};
var component$1 = normalizeComponent(script$1, render$1, staticRenderFns$1, false, injectStyles$1, null, null, null);
function injectStyles$1(context) {
  for (let o in __cssModules$1) {
    this[o] = __cssModules$1[o];
  }
}
var Button = component$1.exports;
var render$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {staticClass: "sd-select-menu"}, [_c("ul", {staticClass: "sd-select-menu__list", attrs: {id: _vm.listboxId, role: "listbox", "aria-labelledby": _vm.labelledBy}}, _vm._l(_vm.formattedItems, function(item, index) {
    return _c("li", {key: _vm.listboxId + "-item-" + index, staticClass: "sd-select-menu__list-item", class: _vm.getItemClasses(index), attrs: {id: _vm.listboxId + "-item-" + index, role: "option", "aria-selected": _vm.isActiveItem(index)}, on: {mousedown: function($event) {
      return _vm.onMousedown(index, item);
    }, mouseover: function($event) {
      return _vm.$emit("active-item-change", index);
    }, mouseleave: function($event) {
      return _vm.$emit("active-item-change", -1);
    }}}, [_vm._v("\n			" + _vm._s(item.label) + "\n		")]);
  }), 0)]);
};
var staticRenderFns$2 = [];
var SelectMenu_vue_vue_type_style_index_0_lang = "/* stylelint-disable selector-class-pattern */\n/* stylelint-disable selector-no-vendor-prefix */\n/* stylelint-enable selector-no-vendor-prefix */\n/**\n * WikimediaUI Base v0.18.1\n * Wikimedia Foundation user interface base variables\n * https://gerrit.wikimedia.org/g/wikimedia-ui-base/\n *\n * See also https://design.wikimedia.org/style-guide/\n */\n.sd-select-menu {\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);\n  background-color: #fff;\n  border: 1px solid #a2a9b1;\n  border-radius: 0 0 2px 2px;\n  box-sizing: border-box;\n  left: 0;\n  margin-bottom: -1px;\n  margin-top: -1px;\n  max-width: 100%;\n  min-width: 100%;\n  position: absolute;\n  z-index: 4;\n}\n@media screen and (min-width: 720px) {\n.sd-select-menu {\n    max-width: 50em;\n}\n}\n.sd-select-menu__list-item {\n  -webkit-transition: background-color 100ms, color 100ms;\n  -moz-transition: background-color 100ms, color 100ms;\n  transition: background-color 100ms, color 100ms;\n  color: #202122;\n  cursor: pointer;\n  list-style: none;\n  margin: 0;\n  overflow: hidden;\n  padding: 7px 12px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@media screen and (min-width: 720px) {\n.sd-select-menu__list-item {\n    white-space: nowrap;\n}\n}\n.sd-select-menu__list-item--active {\n  background-color: #eaecf0;\n  color: #000;\n}\n.sd-select-menu__list-item--selected {\n  background-color: #eaf3ff;\n}\n.sd-select-menu__list-item--active.sd-select-menu__list-item--selected {\n  color: #36c;\n}\nul.sd-select-menu__list {\n  margin: 0;\n  padding: 0;\n}\n";
const script$2 = {
  name: "SelectMenu",
  props: {
    items: {
      type: [Array, Object],
      default: function() {
        return [];
      }
    },
    activeItemIndex: {
      type: Number,
      default: 0
    },
    selectedItemIndex: {
      type: Number,
      default: -1
    },
    listboxId: {
      type: String,
      required: true
    },
    labelledBy: {
      type: String,
      default: null
    }
  },
  computed: {
    formattedItems: function() {
      return this.getFormattedItems(this.items);
    }
  },
  methods: {
    onMousedown: function(index, item) {
      if (index === this.selectedItemIndex) {
        return;
      }
      this.$emit("select", index, item);
    },
    isActiveItem: function(index) {
      return index === this.activeItemIndex;
    },
    isSelectedItem: function(index) {
      return index === this.selectedItemIndex;
    },
    getItemClasses: function(index) {
      return {
        "sd-select-menu__list-item--active": this.isActiveItem(index),
        "sd-select-menu__list-item--selected": this.isSelectedItem(index)
      };
    },
    getFormattedItems: function(items) {
      var keys;
      if (Array.isArray(items) && items.length && typeof items[0] === "string") {
        return items.map(function(item) {
          return {
            label: item,
            value: item
          };
        });
      }
      if (Array.isArray(items) && items.length && typeof items[0] === "object") {
        return items.map(function(item) {
          if ("label" in item && "value" in item) {
            return item;
          }
          return false;
        });
      }
      if (typeof items === "object") {
        keys = Object.keys(items);
        return keys.map(function(key) {
          return {
            label: items[key],
            value: key
          };
        });
      }
      throw new Error("Passed value format is not supported");
    }
  }
};
const __cssModules$2 = {};
var component$2 = normalizeComponent(script$2, render$2, staticRenderFns$2, false, injectStyles$2, null, null, null);
function injectStyles$2(context) {
  for (let o in __cssModules$2) {
    this[o] = __cssModules$2[o];
  }
}
var SelectMenu = component$2.exports;
const sdIconClear = "M10 0a10 10 0 1010 10A10 10 0 0010 0zm5.66 14.24l-1.41 1.41L10 11.41l-4.24 4.25-1.42-1.42L8.59 10 4.34 5.76l1.42-1.42L10 8.59l4.24-4.24 1.41 1.41L11.41 10z";
const sdIconSearch = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 017.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z";
const sdIconInfoFilled = {
  langCodeMap: {
    ar: {
      path: "M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7z"
    }
  },
  default: "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 5h2v2H9zm0 4h2v6H9z"
};
const sdIconError = "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z";
const sdIconAlert = "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z";
const sdIconCheck = "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z";
const sdIconExpand = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z";
var render$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {staticClass: "sd-input", class: _vm.rootClasses}, [_c("div", {staticClass: "sd-input__wrapper"}, [_c("label", {staticClass: "sd-input__label", attrs: {id: _vm.labelElementId, for: _vm.inputElementId}}, [_vm._v("\n			" + _vm._s(_vm.label) + "\n		")]), _vm._v(" "), _c("input", {directives: [{name: "model", rawName: "v-model", value: _vm.value, expression: "value"}], ref: "input", staticClass: "sd-input__input", attrs: {id: _vm.inputElementId, dir: "auto", type: "text", role: "combobox", "aria-autocomplete": "list", "aria-owns": _vm.lookupResultsElementId, "aria-expanded": _vm.isExpanded, "aria-activedescendant": _vm.activeLookupItemId, placeholder: _vm.placeholder}, domProps: {value: _vm.value}, on: {input: [function($event) {
    if ($event.target.composing) {
      return;
    }
    _vm.value = $event.target.value;
  }, _vm.onInput], focus: _vm.onFocus, blur: _vm.onBlur, keyup: [function($event) {
    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
      return null;
    }
    return _vm.onSubmit($event);
  }, function($event) {
    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) {
      return null;
    }
    return _vm.onArrowUp($event);
  }, function($event) {
    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) {
      return null;
    }
    return _vm.onArrowDown($event);
  }]}}), _vm._v(" "), _c("span", {staticClass: "sd-input__icon", on: {click: _vm.onIconClick}}, [_c("sd-icon", {attrs: {icon: _vm.icons.sdIconSearch}})], 1), _vm._v(" "), _vm.value ? _c("span", {staticClass: "sd-input__indicator", attrs: {role: "button"}, on: {click: _vm.onClear}}, [_c("sd-icon", {attrs: {icon: _vm.icons.sdIconClear, title: _vm.clearTitle}})], 1) : _vm._e(), _vm._v(" "), _vm.hasLookupResults && _vm.showLookupResults ? _c("sd-select-menu", {attrs: {items: _vm.lookupResults, "active-item-index": _vm.activeLookupItemIndex, "listbox-id": _vm.lookupResultsElementId, "labelled-by": _vm.labelElementId}, on: {select: _vm.onLookupItemSelect, "active-item-change": _vm.onActiveItemChange}}) : _vm._e()], 1), _vm._v(" "), _vm.hasButton ? _c("sd-button", {staticClass: "sd-input__button", attrs: {primary: true, progressive: true}, on: {click: _vm.onSubmit}}, [_vm._v("\n		" + _vm._s(_vm.$i18n("searchbutton")) + "\n	")]) : _vm._e()], 1);
};
var staticRenderFns$3 = [];
var AutocompleteSearchInput_vue_vue_type_style_index_0_lang = "/* stylelint-disable selector-class-pattern */\n/* stylelint-disable selector-no-vendor-prefix */\n/* stylelint-enable selector-no-vendor-prefix */\n/**\n * WikimediaUI Base v0.18.1\n * Wikimedia Foundation user interface base variables\n * https://gerrit.wikimedia.org/g/wikimedia-ui-base/\n *\n * See also https://design.wikimedia.org/style-guide/\n */\n.sd-input {\n  box-sizing: border-box;\n  vertical-align: middle;\n}\n.sd-input__wrapper {\n  -webkit-box-pack: justify;\n  -moz-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  width: auto;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  -webkit-box-ordinal-group: 0;\n  -moz-box-ordinal-group: 0;\n  -ms-flex-order: 0;\n  order: 0;\n  position: relative;\n}\n.sd-input__label {\n  display: block;\n  position: absolute;\n  clip: rect(1px, 1px, 1px, 1px);\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.sd-input__icon,\n.sd-input__indicator {\n  line-height: 1;\n  padding-left: 8px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.sd-input__icon {\n  padding-left: 8px;\n}\n.sd-input__indicator {\n  color: #72777d;\n  cursor: pointer;\n  padding-right: 8px;\n  right: 0;\n}\n.sd-input__indicator .sd-icon {\n  font-size: 0.85714286em;\n}\n.sd-input__input {\n  -webkit-box-shadow: inset 0 0 0 1px transparent;\n  box-shadow: inset 0 0 0 1px transparent;\n  -webkit-transition: border-color 250ms, box-shadow 250ms;\n  -moz-transition: border-color 250ms, box-shadow 250ms;\n  transition: border-color 250ms, box-shadow 250ms;\n  background-color: #fff;\n  border: 1px solid #a2a9b1;\n  border-radius: 2px;\n  box-sizing: border-box;\n  color: #000;\n  display: block;\n  font-size: inherit;\n  height: 32 / 16 / 0.875 / 1em;\n  line-height: 1.28571429em;\n  margin: 0;\n  padding: 6px 28px 6px 36px;\n  width: 100%;\n}\n.sd-input__input::placeholder {\n  color: #72777d;\n  opacity: 1;\n}\n.sd-input__input::-ms-clear {\n  display: none;\n}\n.sd-input__input:focus {\n  -webkit-box-shadow: inset 0 0 0 1px #36c;\n  box-shadow: inset 0 0 0 1px #36c;\n  border-color: #36c;\n  outline: 0;\n}\n.sd-input__input[type='search']::-webkit-search-decoration,\n.sd-input__input[type='search']::-webkit-search-cancel-button {\n  display: none;\n}\n.sd-input--pending .sd-input__input {\n  background-color: #ddd;\n  background-image: -webkit-linear-gradient(135deg, #fff 25%, transparent 25%, transparent 50%, #fff 50%, #fff 75%, transparent 75%, transparent);\n  background-image: -moz-linear-gradient(135deg, #fff 25%, transparent 25%, transparent 50%, #fff 50%, #fff 75%, transparent 75%, transparent);\n  background-image: linear-gradient(135deg, #fff 25%, transparent 25%, transparent 50%, #fff 50%, #fff 75%, transparent 75%, transparent);\n  background-size: 1.5625em 1.5625em;\n  -webkit-animation: sd-pending-stripes 650ms linear infinite;\n  -moz-animation: sd-pending-stripes 650ms linear infinite;\n  animation: sd-pending-stripes 650ms linear infinite;\n}\n@-webkit-keyframes sd-pending-stripes {\n0% {\n    background-position: -1.5625em 0;\n}\n100% {\n    background-position: 0 0;\n}\n}\n@-moz-keyframes sd-pending-stripes {\n0% {\n    background-position: -1.5625em 0;\n}\n100% {\n    background-position: 0 0;\n}\n}\n@keyframes sd-pending-stripes {\n0% {\n    background-position: -1.5625em 0;\n}\n100% {\n    background-position: 0 0;\n}\n}\n.sd-input--button {\n  display: flex;\n}\n.sd-input--button > .sd-input__wrapper .sd-input__input {\n  flex: 1;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.sd-input--button .sd-input__button {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-left-width: 0;\n  height: 32 / 16 / 0.875 / 1em;\n  line-height: 1.28571429em;\n  margin: 0;\n}\n.sd-input:hover__input {\n  border-color: #72777d;\n}\n";
const script$3 = {
  name: "SdAutocompleteSearchInput",
  components: {
    "sd-button": Button,
    "sd-icon": Icon,
    "sd-select-menu": SelectMenu
  },
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: [String, Object],
      required: true
    },
    initialValue: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: [String, Object],
      default: null
    },
    clearTitle: {
      type: [String, Object],
      default: null
    },
    buttonLabel: {
      type: [String, Object],
      default: null
    },
    lookupResults: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data: function() {
    return {
      value: this.initialValue,
      icons: {sdIconClear, sdIconSearch},
      pending: false,
      showLookupResults: false,
      activeLookupItemIndex: -1
    };
  },
  computed: {
    rootClasses: function() {
      return {
        "sd-input--button": this.hasButton,
        "sd-input--pending": this.pending
      };
    },
    hasButton: function() {
      return !!this.buttonLabel;
    },
    hasLookupResults: function() {
      return this.lookupResults.length > 0;
    },
    labelElementId: function() {
      return this.name + "__label";
    },
    inputElementId: function() {
      return this.name + "__input";
    },
    lookupResultsElementId: function() {
      return this.name + "__lookup-results";
    },
    activeLookupItem: function() {
      if (this.lookupResults.length < 1 || !this.showLookupResults || this.activeLookupItemIndex < 0) {
        return false;
      }
      return this.lookupResults[this.activeLookupItemIndex];
    },
    activeLookupItemId: function() {
      return this.activeLookupItemIndex > -1 ? this.lookupResultsElementId + "-item-" + this.activeLookupItemIndex : false;
    },
    isExpanded: function() {
      return this.hasLookupResults && this.showLookupResults ? "true" : "false";
    }
  },
  methods: {
    onInput: function() {
      this.pending = true;
      this.$emit("input", this.value);
    },
    onFocus: function(event) {
      this.toggleLookupResults(this.lookupResults.length > 0);
      this.$emit("focus", event);
    },
    onBlur: function(event) {
      this.$emit("blur", event);
      this.toggleLookupResults(false);
    },
    onSubmit: function() {
      if (this.hasLookupResults && this.activeLookupItemIndex >= 0) {
        this.value = this.activeLookupItem;
      }
      this.$emit("submit", this.value);
      this.clearLookupResults();
    },
    onLookupItemSelect: function(index) {
      this.value = this.lookupResults[index];
      this.$emit("submit", this.value);
      this.clearLookupResults();
    },
    onArrowDown: function() {
      var index = this.activeLookupItemIndex;
      if (this.hasLookupResults) {
        this.activeLookupItemIndex = this.lookupResults.length > index + 1 ? index + 1 : 0;
      }
    },
    onArrowUp: function() {
      var index = this.activeLookupItemIndex;
      if (this.hasLookupResults && index > -1) {
        this.activeLookupItemIndex = index === 0 ? this.lookupResults.length - 1 : index - 1;
      }
    },
    onActiveItemChange: function(index) {
      this.activeLookupItemIndex = index;
    },
    onIconClick: function() {
      var $input;
      this.$nextTick(function() {
        $input = this.$refs.input;
        $input.focus();
      });
    },
    onClear: function() {
      this.$emit("clear");
      this.value = "";
      this.clearLookupResults();
      this.$refs.input.focus();
    },
    clearLookupResults: function() {
      this.$emit("clear-lookup-results");
    },
    toggleLookupResults: function(show) {
      this.showLookupResults = show;
    }
  },
  watch: {
    lookupResults: function() {
      this.pending = false;
      this.activeLookupItemIndex = -1;
      this.toggleLookupResults(this.lookupResults.length > 0);
    },
    initialValue: function(newValue) {
      this.value = newValue;
    },
    value: function(newValue) {
      if (newValue === "") {
        this.clearLookupResults();
      }
    }
  }
};
const __cssModules$3 = {};
var component$3 = normalizeComponent(script$3, render$3, staticRenderFns$3, false, injectStyles$3, null, null, null);
function injectStyles$3(context) {
  for (let o in __cssModules$3) {
    this[o] = __cssModules$3[o];
  }
}
var AutocompleteSearchInput = component$3.exports;
var render$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {staticClass: "sd-message", class: _vm.builtInClasses, attrs: {"aria-live": _vm.type !== "error" ? "polite" : false, role: _vm.type === "error" ? "alert" : false}}, [_c("sd-icon", {attrs: {icon: _vm.icon}}), _vm._v(" "), _c("div", {staticClass: "sd-message__content"}, [_vm._t("default")], 2)], 1);
};
var staticRenderFns$4 = [];
var Message_vue_vue_type_style_index_0_lang = "/* stylelint-disable selector-class-pattern */\n/* stylelint-disable selector-no-vendor-prefix */\n/* stylelint-enable selector-no-vendor-prefix */\n/**\n * WikimediaUI Base v0.18.1\n * Wikimedia Foundation user interface base variables\n * https://gerrit.wikimedia.org/g/wikimedia-ui-base/\n *\n * See also https://design.wikimedia.org/style-guide/\n */\n.sd-message {\n  color: #000;\n  font-weight: bold;\n  max-width: 50em;\n  position: relative;\n}\n.sd-message--error {\n  color: #d33;\n}\n.sd-message--success {\n  color: #14866d;\n}\n.sd-message--block {\n  color: #000;\n  font-weight: normal;\n  padding: 16px 24px;\n}\n.sd-message--block.sd-message--notice {\n  background-color: #eaecf0;\n  border: 1px solid #a2a9b1;\n}\n.sd-message--block.sd-message--error {\n  background-color: #fee7e6;\n  border: 1px solid #d33;\n}\n.sd-message--block.sd-message--warning {\n  background-color: #fef6e7;\n  border: 1px solid #fc3;\n}\n.sd-message--block.sd-message--success {\n  background-color: #d5fdf4;\n  border: 1px solid #14866d;\n}\n.sd-message .sd-icon {\n  position: absolute;\n}\n.sd-message__content {\n  margin-left: 2em;\n}\n";
var ICON_MAP = {
  notice: sdIconInfoFilled,
  error: sdIconError,
  warning: sdIconAlert,
  success: sdIconCheck
};
const script$4 = {
  name: "SdMessage",
  components: {
    "sd-icon": Icon
  },
  props: {
    type: {
      type: String,
      default: "notice"
    },
    inline: {
      type: Boolean
    }
  },
  computed: {
    typeClass: function() {
      return "sd-message--" + this.type;
    },
    builtInClasses: function() {
      var classes = {"sd-message--block": !this.inline};
      classes[this.typeClass] = true;
      return classes;
    },
    icon: function() {
      return ICON_MAP[this.type];
    }
  }
};
const __cssModules$4 = {};
var component$4 = normalizeComponent(script$4, render$4, staticRenderFns$4, false, injectStyles$4, null, null, null);
function injectStyles$4(context) {
  for (let o in __cssModules$4) {
    this[o] = __cssModules$4[o];
  }
}
var Message = component$4.exports;
var render$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {staticClass: "sd-observer"});
};
var staticRenderFns$5 = [];
const script$5 = {
  name: "SdObserver",
  props: {
    options: Object
  },
  data: function() {
    return {
      observer: null
    };
  },
  mounted: function() {
    var options = this.options || {};
    function intersectionCallback(entries) {
      var entry = entries[0];
      if (entry && entry.isIntersecting) {
        this.$emit("intersect");
      }
      if (entry && !entry.isIntersecting) {
        this.$emit("hide");
      }
    }
    this.observer = new IntersectionObserver(intersectionCallback.bind(this), options);
    this.observer.observe(this.$el);
  },
  destroyed: function() {
    this.observer.disconnect();
  }
};
const __cssModules$5 = {};
var component$5 = normalizeComponent(script$5, render$5, staticRenderFns$5, false, injectStyles$5, null, null, null);
function injectStyles$5(context) {
  for (let o in __cssModules$5) {
    this[o] = __cssModules$5[o];
  }
}
var Observer = component$5.exports;
var render$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {staticClass: "sd-select", class: _vm.rootClasses}, [_c("div", {staticClass: "sd-select__content", attrs: {role: "combobox", tabindex: "0", "aria-autocomplete": "list", "aria-haspopup": "true", "aria-owns": _vm.listboxId, "aria-labelledby": _vm.textboxId, "aria-expanded": _vm.isExpanded, "aria-activedescendant": _vm.activeItemId, "aria-disabled": _vm.disabled}, on: {click: _vm.onClick, blur: function($event) {
    return _vm.toggleMenu(false);
  }, keyup: [function($event) {
    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
      return null;
    }
    return _vm.onEnter($event);
  }, function($event) {
    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) {
      return null;
    }
    return _vm.onArrowUp($event);
  }, function($event) {
    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) {
      return null;
    }
    return _vm.onArrowDown($event);
  }]}}, [_c("span", {staticClass: "sd-select__current-selection", attrs: {id: _vm.textboxId, role: "textbox", "aria-readonly": "true"}}, [_vm.selectedItemIndex > -1 ? [_vm._v("\n				" + _vm._s(_vm.prefix) + "\n			")] : _vm._e(), _vm._v("\n			" + _vm._s(_vm.currentSelection) + "\n		")], 2), _vm._v(" "), _c("sd-icon", {staticClass: "sd-select__handle", attrs: {icon: _vm.icons.sdIconExpand}})], 1), _vm._v(" "), _vm.showMenu ? _c("sd-select-menu", {attrs: {items: _vm.items, "active-item-index": _vm.activeItemIndex, "selected-item-index": _vm.selectedItemIndex, "listbox-id": _vm.listboxId}, on: {select: _vm.onSelect, "active-item-change": _vm.onActiveItemChange}}) : _vm._e()], 1);
};
var staticRenderFns$6 = [];
var Select_vue_vue_type_style_index_0_lang = "/* stylelint-disable selector-class-pattern */\n/* stylelint-disable selector-no-vendor-prefix */\n/* stylelint-enable selector-no-vendor-prefix */\n/**\n * WikimediaUI Base v0.18.1\n * Wikimedia Foundation user interface base variables\n * https://gerrit.wikimedia.org/g/wikimedia-ui-base/\n *\n * See also https://design.wikimedia.org/style-guide/\n */\n.sd-select {\n  max-width: 50em;\n  position: relative;\n}\n.sd-select__handle {\n  -webkit-transition: color 100ms;\n  -moz-transition: color 100ms;\n  transition: color 100ms;\n  color: #202122;\n  font-size: 0.85714286em;\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.sd-select__content {\n  -webkit-transition: background-color 100ms, border-color 100ms, box-shadow 100ms;\n  -moz-transition: background-color 100ms, border-color 100ms, box-shadow 100ms;\n  transition: background-color 100ms, border-color 100ms, box-shadow 100ms;\n  background-color: #f8f9fa;\n  border: 1px solid #a2a9b1;\n  border-radius: 2px;\n  box-sizing: border-box;\n  color: #202122;\n  cursor: pointer;\n  min-height: 32px;\n  padding: 11px 36px 11px 12px;\n  position: relative;\n  width: 100%;\n}\n@media screen and (min-width: 720px) {\n.sd-select__content {\n    padding: 6px 36px 6px 12px;\n}\n}\n.sd-select__content:last-child {\n  margin-right: 0;\n}\n.sd-select__content:hover {\n  background-color: #fff;\n  color: #404244;\n  border-color: #a2a9b1;\n}\n.sd-select__content:hover .sd-select__handle {\n  color: #404244;\n}\n.sd-select__content:focus {\n  -webkit-box-shadow: inset 0 0 0 1px #36c;\n  box-shadow: inset 0 0 0 1px #36c;\n  border-color: #36c;\n  outline: 0;\n}\n.sd-select__content:active {\n  color: #000;\n  border-color: #72777d;\n}\n.sd-select--open .sd-select__content {\n  background-color: #fff;\n}\n.sd-select--open .sd-select__handle {\n  color: #202122;\n}\n.sd-select--disabled .sd-select__content {\n  background-color: #eaecf0;\n  border-color: #c8ccd1;\n  color: #72777d;\n  cursor: auto;\n  text-shadow: 0 1px 1px #fff;\n}\n.sd-select--disabled .sd-select__content:hover .sd-select__handle {\n  color: #72777d;\n}\n.sd-select--disabled .sd-select__content:focus {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  border-color: #c8ccd1;\n  outline: 0;\n}\n.sd-select--disabled .sd-select__handle {\n  color: #72777d;\n}\n";
const script$6 = {
  name: "SdSelect",
  components: {
    "sd-icon": Icon,
    "sd-select-menu": SelectMenu
  },
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: null
    },
    items: {
      type: [Array, Object],
      required: true
    },
    initialSelectedItemIndex: {
      type: Number,
      default: -1
    },
    disabled: {
      type: Boolean
    },
    prefix: {
      type: [String, Object],
      default: ""
    }
  },
  data: function() {
    return {
      showMenu: false,
      icons: {sdIconExpand},
      activeItemIndex: -1,
      selectedItemIndex: this.initialSelectedItemIndex
    };
  },
  computed: {
    currentSelection: function() {
      if (this.selectedItemIndex === -1) {
        return this.label;
      } else {
        return this.items[this.selectedItemIndex].label;
      }
    },
    rootClasses: function() {
      return {
        "sd-select--open": this.showMenu,
        "sd-select--disabled": this.disabled,
        "sd-select--value-selected": this.selectedItemIndex > -1
      };
    },
    isExpanded: function() {
      return this.showMenu ? "true" : "false";
    },
    textboxId: function() {
      return this.name + "__textbox";
    },
    listboxId: function() {
      return this.name + "__listbox";
    },
    activeItemId: function() {
      return this.activeItemIndex > -1 ? this.listboxId + "-item-" + this.activeItemIndex : false;
    },
    itemsLength: function() {
      if (Array.isArray(this.items)) {
        return this.items.length;
      }
      if (typeof this.items === "object") {
        return Object.keys(this.items).length;
      }
      return 0;
    }
  },
  methods: {
    onClick: function() {
      this.toggleMenu(!this.showMenu);
    },
    onEnter: function() {
      var value, keys;
      if (!this.showMenu) {
        this.toggleMenu(true);
        return;
      }
      if (this.activeItemIndex < 0) {
        this.toggleMenu(false);
        return;
      }
      if (Array.isArray(this.items) && this.items.length && typeof this.items[0] === "string") {
        value = this.items[this.activeItemIndex];
      } else if (Array.isArray(this.items) && this.items.length && typeof this.items[0] === "object") {
        value = this.items[this.activeItemIndex].value;
      } else if (typeof this.items === "object") {
        keys = Object.keys(this.items);
        value = keys[this.activeItemIndex];
      }
      this.selectedItemIndex = this.activeItemIndex;
      this.$emit("select", value);
      this.toggleMenu(false);
    },
    onSelect: function(index, item) {
      this.activeItemIndex = index;
      this.selectedItemIndex = index;
      this.$emit("select", item.value);
      this.toggleMenu(false);
    },
    onArrowDown: function() {
      var index = this.activeItemIndex;
      this.activeItemIndex = this.itemsLength > index + 1 ? index + 1 : 0;
    },
    onArrowUp: function() {
      var index = this.activeItemIndex;
      if (index > -1) {
        this.activeItemIndex = index === 0 ? this.itemsLength - 1 : index - 1;
      }
    },
    onActiveItemChange: function(index) {
      this.activeItemIndex = index;
    },
    toggleMenu: function(show) {
      if (this.disabled) {
        return;
      }
      this.showMenu = show;
    },
    select: function(selection) {
      var selectionIndex;
      if (Array.isArray(this.items) && typeof this.items[0] === "string") {
        selectionIndex = this.items.findIndex(function(item) {
          return item === selection;
        });
      } else if (Array.isArray(this.items) && typeof this.items[0] === "object") {
        selectionIndex = this.items.findIndex(function(item) {
          return item.value === selection;
        });
      } else {
        selectionIndex = Object.keys(this.items).find(function(key) {
          return this.items[key] === selection;
        });
      }
      this.selectedItemIndex = selectionIndex;
      this.activeItemIndex = selectionIndex;
    },
    reset: function() {
      this.selectedItemIndex = this.initialSelectedItemIndex;
      this.activeItemIndex = -1;
    }
  }
};
const __cssModules$6 = {};
var component$6 = normalizeComponent(script$6, render$6, staticRenderFns$6, false, injectStyles$6, null, null, null);
function injectStyles$6(context) {
  for (let o in __cssModules$6) {
    this[o] = __cssModules$6[o];
  }
}
var Select = component$6.exports;
var render$7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("transition", {attrs: {name: "sd-tab-fade-in"}}, [_c("div", {directives: [{name: "show", rawName: "v-show", value: _vm.isActive, expression: "isActive"}], staticClass: "sd-tab", attrs: {id: _vm.id, "aria-hidden": !_vm.isActive, "aria-labeledby": _vm.id + "-label", role: "tabpanel"}}, [_vm._t("default")], 2)]);
};
var staticRenderFns$7 = [];
var Tab_vue_vue_type_style_index_0_lang = ".sd-tab-fade-in-enter {\n  opacity: 0;\n}\n.sd-tab-fade-in-enter-active {\n  transition: opacity 0.25s;\n}\n";
const script$7 = {
  name: "SdTab",
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean
    }
  },
  data: function() {
    return {
      isActive: false
    };
  },
  computed: {
    id: function() {
      return "sd-tab-" + this.name;
    }
  }
};
const __cssModules$7 = {};
var component$7 = normalizeComponent(script$7, render$7, staticRenderFns$7, false, injectStyles$7, null, null, null);
function injectStyles$7(context) {
  for (let o in __cssModules$7) {
    this[o] = __cssModules$7[o];
  }
}
var Tab = component$7.exports;
var render$8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {staticClass: "sd-tabs"}, [_c("div", {staticClass: "sd-tabs__header", class: _vm.headerClasses}, [_c("div", {staticClass: "sd-tabs__tabs-list", attrs: {role: "tablist", tabindex: "0", "aria-activedescendant": _vm.currentTabId}, on: {keydown: [function($event) {
    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "left", 37, $event.key, ["Left", "ArrowLeft"])) {
      return null;
    }
    if ("button" in $event && $event.button !== 0) {
      return null;
    }
    return _vm.moveBack($event);
  }, function($event) {
    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) {
      return null;
    }
    $event.preventDefault();
    return _vm.moveBack($event);
  }, function($event) {
    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "right", 39, $event.key, ["Right", "ArrowRight"])) {
      return null;
    }
    if ("button" in $event && $event.button !== 2) {
      return null;
    }
    return _vm.moveForward($event);
  }, function($event) {
    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) {
      return null;
    }
    $event.preventDefault();
    return _vm.moveForward($event);
  }]}}, _vm._l(_vm.tabs, function(tab, index) {
    return _c("div", {key: tab.title, staticClass: "sd-tabs__tabs-list__item", class: _vm.determineTabLabelClasses(tab), attrs: {id: tab.id + "-label", "aria-selected": tab.name === _vm.currentTabName, "aria-controls": tab.id, role: "tab", tabindex: "-1"}, on: {click: function($event) {
      return _vm.selectTab(tab.name);
    }, keyup: function($event) {
      if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
        return null;
      }
      return _vm.selectTab(tab.name);
    }}}, [_vm._v("\n				" + _vm._s(tab.title) + "\n				"), _vm.isLastTab(index) && _vm.supportsObserver ? _c("observer", {on: {intersect: _vm.removeGradientClass, hide: _vm.addGradientClass}}) : _vm._e()], 1);
  }), 0)]), _vm._v(" "), _c("div", {staticClass: "sd-tabs__content"}, [_vm._t("default")], 2)]);
};
var staticRenderFns$8 = [];
var Tabs_vue_vue_type_style_index_0_lang = "/* stylelint-disable selector-class-pattern */\n/* stylelint-disable selector-no-vendor-prefix */\n/* stylelint-enable selector-no-vendor-prefix */\n/**\n * WikimediaUI Base v0.18.1\n * Wikimedia Foundation user interface base variables\n * https://gerrit.wikimedia.org/g/wikimedia-ui-base/\n *\n * See also https://design.wikimedia.org/style-guide/\n */\n.sd-tabs__header {\n  -webkit-box-shadow: inset 0 -1px 0 0 #a2a9b1;\n  box-shadow: inset 0 -1px 0 0 #a2a9b1;\n  display: -webkit-flex;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n.sd-tabs__header--gradient {\n  position: relative;\n}\n.sd-tabs__header--gradient:after {\n  background-color: #ffffff;\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(85%, rgba(255, 255, 255, 0)), color-stop(100%, #ffffff));\n  background-image: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) 85%, #ffffff 100%);\n  background-image: -moz-linear-gradient(left, rgba(255, 255, 255, 0) 85%, #ffffff 100%);\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 85%, #ffffff 100%);\n  background-color: transparent;\n  content: '';\n  height: 100%;\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n}\n.sd-tabs__tabs-list {\n  display: -webkit-flex;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-overflow-scrolling: touch;\n  -sdms-overflow-style: -sdms-autohiding-scrollbar;\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.sd-tabs__tabs-list::-webkit-scrollbar {\n  -webkit-appearance: none;\n  display: none;\n}\n.sd-tabs__tabs-list__item {\n  -webkit-transition: color 100ms, box-shadow 100ms;\n  -moz-transition: color 100ms, box-shadow 100ms;\n  transition: color 100ms, box-shadow 100ms;\n  color: #404244;\n  cursor: pointer;\n  font-weight: bold;\n  margin: 6px 8px 0 0;\n  padding: 11px 12px;\n  white-space: nowrap;\n}\n@media screen and (min-width: 720px) {\n.sd-tabs__tabs-list__item {\n    margin: 6px 6px 0 0;\n    padding: 6px 12px;\n}\n}\n.sd-tabs__tabs-list__item--current {\n  -webkit-box-shadow: inset 0 -2px 0 0 #36c;\n  box-shadow: inset 0 -2px 0 0 #36c;\n  color: #36c;\n}\n.sd-tabs__tabs-list__item:hover {\n  -webkit-box-shadow: inset 0 -2px 0 0 #447ff5;\n  box-shadow: inset 0 -2px 0 0 #447ff5;\n  color: #447ff5;\n}\n.sd-tabs__tabs-list__item:active {\n  -webkit-box-shadow: inset 0 -2px 0 0 #2a4b8d;\n  box-shadow: inset 0 -2px 0 0 #2a4b8d;\n  color: #2a4b8d;\n}\n.sd-tabs__tabs-list__item:focus {\n  outline: 0;\n}\n.sd-tabs__tabs-list__item--disabled {\n  color: #72777d;\n  cursor: not-allowed;\n}\n.sd-tabs__tabs-list__item--disabled--current,\n.sd-tabs__tabs-list__item--disabled:hover,\n.sd-tabs__tabs-list__item--disabled:active {\n  box-shadow: unset;\n  color: #72777d;\n}\n.sd-tabs__tabs-list label {\n  cursor: pointer;\n}\n.sd-tabs__tabs-list:focus {\n  outline: 0;\n}\n.sd-tabs__tabs-list:focus .sd-tabs__tabs-list__item--current {\n  border-radius: 2px;\n  box-shadow: inset 0 0 0 2px #36c;\n}\n";
const script$8 = {
  name: "SdTabs",
  components: {
    observer: Observer
  },
  props: {
    active: {
      type: String,
      default: null
    }
  },
  data: function() {
    return {
      tabs: {},
      currentTabName: null,
      hasGradient: false
    };
  },
  computed: {
    headerClasses: function() {
      return {
        "sd-tabs__header--gradient": this.hasGradient
      };
    },
    currentTabId: function() {
      return this.tabs[this.currentTabName] ? this.tabs[this.currentTabName].id + "-label" : false;
    },
    supportsObserver: function() {
      return "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype;
    }
  },
  methods: {
    selectTab: function(tabName) {
      if (this.tabs[tabName].disabled === true) {
        return;
      }
      this.currentTabName = tabName;
    },
    setTabState: function(currentTabName) {
      var tabName;
      for (tabName in this.tabs) {
        this.tabs[tabName].isActive = tabName === currentTabName;
      }
    },
    determineTabLabelClasses: function(tab) {
      return {
        "sd-tabs__tabs-list__item--current": tab.name === this.currentTabName,
        "sd-tabs__tabs-list__item--disabled": tab.disabled
      };
    },
    moveBack: function() {
      var tabNames = Object.keys(this.tabs), previousTabIndex = tabNames.indexOf(this.currentTabName) - 1;
      if (previousTabIndex < 0) {
        return;
      }
      this.selectTab(Object.keys(this.tabs)[previousTabIndex]);
    },
    moveForward: function() {
      var tabNames = Object.keys(this.tabs), nextTabIndex = tabNames.indexOf(this.currentTabName) + 1;
      if (nextTabIndex >= tabNames.length) {
        return;
      }
      this.selectTab(tabNames[nextTabIndex]);
    },
    initializeTabs: function() {
      var tabs = this.$slots.default;
      this.tabs = {};
      tabs.forEach(function(tab) {
        if (tab.componentInstance) {
          this.tabs[tab.componentInstance.name] = tab.componentInstance;
        } else {
          return;
        }
      }.bind(this));
      this.currentTabName = this.active ? this.active : Object.keys(this.tabs)[0];
      this.setTabState(this.currentTabName);
    },
    isLastTab: function(mediaType) {
      var tabKeys = Object.keys(this.tabs);
      return mediaType === tabKeys[tabKeys.length - 1];
    },
    addGradientClass: function() {
      this.hasGradient = true;
    },
    removeGradientClass: function() {
      this.hasGradient = false;
    }
  },
  watch: {
    active: function(newTabName) {
      this.selectTab(newTabName);
    },
    currentTabName: function() {
      this.setTabState(this.currentTabName);
      if (this.currentTabName !== this.active) {
        this.$emit("tab-change", this.tabs[this.currentTabName]);
      }
    }
  },
  mounted: function() {
    this.initializeTabs();
  }
};
const __cssModules$8 = {};
var component$8 = normalizeComponent(script$8, render$8, staticRenderFns$8, false, injectStyles$8, null, null, null);
function injectStyles$8(context) {
  for (let o in __cssModules$8) {
    this[o] = __cssModules$8[o];
  }
}
var Tabs = component$8.exports;
export {AutocompleteSearchInput, Button, Icon, Message, Observer, Select, SelectMenu, Tab, Tabs};
