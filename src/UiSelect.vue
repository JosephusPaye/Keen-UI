<template>
  <div class="ui-select" :class="classes">
    <input
      v-if="name"
      class="ui-select__hidden-input"
      type="hidden"
      :name="name"
      :value="submittedValue"
    />

    <div v-if="icon || $slots.icon" class="ui-select__icon-wrapper">
      <slot name="icon">
        <ui-icon :icon="icon"></ui-icon>
      </slot>
    </div>

    <div class="ui-select__content">
      <div
        ref="label"
        class="ui-select__label"
        :tabindex="disabled ? null : tabindex || '0'"
        @focus="onFocus"
        @keydown.enter.prevent="openDropdown"
        @keydown.space.prevent="openDropdown"
        @keydown.tab="onBlur"
      >
        <div v-if="label || $slots.default" class="ui-select__label-text" :class="labelClasses">
          <slot>{{ label }}</slot>
        </div>

        <ui-icon
          v-show="hasClearButton && !disabled && (multiple ? modelValue.length > 0 : Boolean(modelValue))"
          class="ui-select__clear-button"
          title="Clear"
          @click.stop="setValue(emptyValue)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M18.984 6.422L13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z"
            />
          </svg>
        </ui-icon>

        <div class="ui-select__display">
          <div class="ui-select__display-value" :class="{ 'is-placeholder': !hasDisplayText }">
            {{
              hasDisplayText ? displayText : hasFloatingLabel && isLabelInline ? null : placeholder
            }}
          </div>

          <ui-icon class="ui-select__dropdown-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M6.984 9.984h10.03L12 15z" />
            </svg>
          </ui-icon>
        </div>

        <ui-popover
          ref="dropdown"
          class="ui-select__dropdown"
          :close-on-scroll="false"
          :constrain-to-scroll-parent="false"
          :close-on-external-click="false"
          :disabled="disabled"
          @close="onClose"
          @open="onOpen"
          @reveal="onReveal"
        >
          <div
            ref="dropdownContent"
            class="ui-select__dropdown-content"
            tabindex="-1"
            @keydown.down.prevent="highlightOption(highlightedIndex + 1)"
            @keydown.enter.prevent.stop="selectHighlighted(highlightedIndex, $event)"
            @keydown.esc.prevent="closeDropdown()"
            @keydown.tab="onBlur"
            @keydown.up.prevent="highlightOption(highlightedIndex - 1)"
          >
            <div v-if="hasSearch" class="ui-select__search" @click.stop @keydown.space.stop>
              <input
                ref="searchInput"
                v-model="query"
                autocomplete="off"
                class="ui-select__search-input"
                type="text"
                :placeholder="searchPlaceholder"
              />

              <ui-icon class="ui-select__search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M9.516 14.016c2.484 0 4.5-2.016 4.5-4.5s-2.016-4.5-4.5-4.5-4.5 2.016-4.5 4.5 2.016 4.5 4.5 4.5zm6 0l4.97 4.97-1.5 1.5-4.97-4.97v-.797l-.28-.282c-1.126.984-2.626 1.547-4.22 1.547-3.61 0-6.516-2.86-6.516-6.47S5.906 3 9.516 3s6.47 2.906 6.47 6.516c0 1.594-.564 3.094-1.548 4.22l.28.28h.798z"
                  />
                </svg>
              </ui-icon>

              <ui-progress-circular
                v-if="loading"
                class="ui-select__search-progress"
                :size="20"
                :stroke="4"
              ></ui-progress-circular>
            </div>

            <ul ref="optionsList" class="ui-select__options">
              <ui-select-option
                v-for="(option, index) in filteredOptions"
                ref="options"
                :key="index"
                :highlighted="highlightedIndex === index"
                :keys="keys"
                :multiple="multiple"
                :option="option"
                :selected="isOptionSelected(option)"
                :type="type"
                @click.stop="selectOption(option, index)"
                @mouseover.stop="highlightOption(index, { autoScroll: false })"
              >
                <slot
                  name="option"
                  :highlighted="highlightedIndex === index"
                  :index="index"
                  :option="option"
                  :selected="isOptionSelected(option)"
                ></slot>
              </ui-select-option>

              <div v-show="hasNoResults" class="ui-select__no-results">
                <slot name="no-results">No results found</slot>
              </div>
            </ul>
          </div>
        </ui-popover>
      </div>

      <div v-if="hasFeedback" class="ui-select__feedback">
        <div v-if="showError" class="ui-select__feedback-text">
          <slot name="error">{{ error }}</slot>
        </div>

        <div v-else-if="showHelp" class="ui-select__feedback-text">
          <slot name="help">{{ help }}</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UiIcon from "./UiIcon.vue";
import UiPopover from "./UiPopover.vue";
import UiProgressCircular from "./UiProgressCircular.vue";
import UiSelectOption from "./UiSelectOption.vue";

import RespondsToExternalClick from "./mixins/RespondsToExternalClick";
import { scrollIntoView, resetScroll } from "./helpers/element-scroll";

import fuzzysearch from "fuzzysearch";

export default {
  name: "UiSelect",

  components: {
    UiIcon,
    UiPopover,
    UiProgressCircular,
    UiSelectOption,
  },

  mixins: [RespondsToExternalClick],

  props: {
    name: String,
    tabindex: [String, Number],
    modelValue: {
      type: [String, Number, Boolean, Array]
    },
    options: {
      type: [Array, Object],
      default() {
        return [];
      },
    },
    placeholder: String,
    icon: String,
    iconPosition: {
      type: String,
      default: "left", // 'left' or 'right'
    },
    label: String,
    floatingLabel: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "basic", // 'basic' or 'image'
    },
    hasClearButton: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    multipleDelimiter: {
      type: String,
      default: ", ",
    },
    hasSearch: {
      type: Boolean,
      default: false,
    },
    searchPlaceholder: {
      type: String,
      default: "Search",
    },
    filter: Function,
    disableFilter: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    noResults: {
      type: Boolean,
      default: false,
    },
    keys: {
      type: Object,
      default() {
        return {
          class: "class",
          label: "label",
          value: "value",
          image: "image",
        };
      },
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    help: String,
    error: String,
    disabled: {
      type: Boolean,
      default: false,
    },
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
    "dropdown-close",
  ],

  data() {
    return {
      query: "",
      isActive: false,
      isTouched: false,
      selectedIndex: -1,
      highlightedIndex: -1,
      initialValue: JSON.stringify(this.modelValue),
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
        { "has-floating-label": this.hasFloatingLabel },
      ];
    },

    labelClasses() {
      return {
        "is-inline": this.hasFloatingLabel && this.isLabelInline,
        "is-floating": this.hasFloatingLabel && !this.isLabelInline,
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

    preparedOptions () {
      if (Array.isArray(this.options)) {
        return this.options.map(option => typeof option !== 'object'
          ? { [this.keys.label]: option, [this.keys.value]: option }
          : option
        )
      }

      return Object.keys(this.options).map((value) => {
        return {
          label: this.options[value],
          value
        }
      })
    },

    filteredOptions() {
      if (this.disableFilter) {
        return this.preparedOptions;
      }

      const options = this.preparedOptions.filter((option) => {
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
      const getLabel = (value) => {
        const selectedOption = value ? this.preparedOptions.find(o => o[this.keys.value] === value) : null;
        return selectedOption ? selectedOption[this.keys.label] : "";
      };

      if (this.multiple) {
        if (this.modelValue.length > 0) {
          return this.modelValue
            .map(value => getLabel(value))
            .join(this.multipleDelimiter);
        }

        return "";
      }

      return getLabel(this.modelValue);
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
      // Assuming that if there is no name or no value,
      // then there's no need to compute the submittedValue
      if (!this.name || !this.modelValue) {
        return;
      }

      if (Array.isArray(this.modelValue)) {
        return this.modelValue.join(",");
      }

      return this.modelValue;
    },

    emptyValue() {
      return this.multiple ? [] : null;
    },
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
    },
  },

  created() {
    const invalidMultipleValue = this.multiple && !Array.isArray(this.modelValue);
    if (invalidMultipleValue) {
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
        this.setValue(option[this.keys.value]);
        this.selectedIndex = index;
      }

      this.$emit("select", option, {
        selected: this.multiple ? shouldSelect : true,
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
        return this.modelValue.indexOf(option[this.keys.value]) > -1;
      }

      return this.modelValue === option[this.keys.value];
    },

    updateOption(option, options = { select: true }) {
      let value = [];
      let updated = false;
      const i = this.modelValue.indexOf(option[this.keys.value]);

      if (options.select && i < 0) {
        value = this.modelValue.concat(option[this.keys.value]);
        updated = true;
      }

      if (!options.select && i > -1) {
        value = this.modelValue.slice(0, i).concat(this.modelValue.slice(i + 1));
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

      return fuzzysearch(query.toLowerCase(), text);
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
        marginTop: 180,
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
    },
  },
};
</script>

<style lang="scss">
@import "./styles/imports";

.ui-select {
  align-items: flex-start;
  display: flex;
  font-family: $font-stack;
  margin-bottom: $ui-input-margin-bottom;
  outline: none;
  position: relative;

  &:hover:not(.is-disabled) {
    .ui-select__label-text {
      color: $ui-input-label-color--hover;
    }

    .ui-select__display {
      border-bottom-color: $ui-input-border-color--hover;
    }

    .ui-select__dropdown-button {
      color: $ui-input-button-color--hover;
    }
  }

  &.is-active:not(.is-disabled) {
    .ui-select__label-text,
    .ui-select__icon-wrapper .ui-icon {
      color: $ui-input-label-color--active;
    }

    .ui-select__display {
      border-bottom-color: $ui-input-border-color--active;
      border-bottom-width: $ui-input-border-width--active;
    }
  }

  &.has-floating-label {
    .ui-select__label-text {
      // Behaves like a block, but width is the width of its content.
      // Needed here so label doesn't overflow parent when scaled.
      display: table;

      &.is-inline {
        color: $ui-input-label-color; // So the hover styles don't override it
        cursor: pointer;
        transform: translateY($ui-input-label-top--inline) scale(1.1);
      }

      &.is-floating {
        transform: translateY(0) scale(1);
      }
    }
  }

  $ui-icon-size: 1em !default;

  &.has-label {
    .ui-select__icon-wrapper {
      padding-top: $ui-input-icon-margin-top--with-label;
    }

    .ui-select__clear-button {
      top: $ui-input-button-margin-top--with-label;
    }
  }

  &:not(.is-multiple) {
    .ui-select__display {
      height: $ui-input-height;
      line-height: 1;
    }
  }

  &.is-multiple {
    .ui-select__display {
      line-height: 1.4;
      padding-bottom: rem(4px);
      padding-top: rem(4px);
    }
  }

  &.is-invalid:not(.is-disabled) {
    .ui-select__label-text,
    .ui-select__icon-wrapper .ui-icon {
      color: $ui-input-label-color--invalid;
    }

    .ui-select__display {
      border-bottom-color: $ui-input-border-color--invalid;
    }

    .ui-select__feedback {
      color: $ui-input-feedback-color--invalid;
    }
  }

  &.is-disabled {
    .ui-select__display {
      border-bottom-style: $ui-input-border-style--disabled;
      border-bottom-width: $ui-input-border-width--active;
      color: $ui-input-text-color--disabled;
      cursor: default;
    }

    .ui-select__dropdown-button,
    .ui-select__display-value.is-placeholder {
      color: $ui-input-text-color--disabled;
      opacity: $ui-input-button-opacity--disabled;
    }

    .ui-select__icon-wrapper .ui-icon {
      opacity: $ui-input-icon-opacity--disabled;
    }

    .ui-select__feedback {
      opacity: $ui-input-feedback-opacity--disabled;
    }
  }
}

.ui-select__label {
  display: block;
  margin: 0;
  outline: none;
  padding: 0;
  width: 100%;
}

.ui-select__clear-button {
  color: $ui-input-button-color;
  cursor: pointer;
  font-size: $ui-input-button-size;
  position: absolute;
  right: $ui-input-button-margin-top * 2;
  top: $ui-input-button-margin-top;

  &:hover {
    color: $ui-input-button-color--hover;
  }
}

.ui-select__icon-wrapper {
  flex-shrink: 0;
  margin-right: $ui-input-icon-margin-right;
  padding-top: $ui-input-icon-margin-top;

  .ui-icon {
    color: $ui-input-icon-color;
  }
}

.ui-select__content {
  flex-grow: 1;
}

.ui-select__label-text {
  color: $ui-input-label-color;
  cursor: default;
  font-size: $ui-input-label-font-size;
  line-height: $ui-input-label-line-height;
  margin-bottom: $ui-input-label-margin-bottom;
  transform-origin: left;
  transition: color 0.1s ease, transform 0.2s ease;
}

.ui-select__display {
  align-items: center;
  border: none;
  border-bottom-color: $ui-input-border-color;
  border-bottom-style: solid;
  border-bottom-width: $ui-input-border-width;
  color: $ui-input-text-color;
  cursor: pointer;
  display: flex;
  font-family: inherit;
  font-size: $ui-input-text-font-size;
  font-weight: normal;
  min-height: $ui-input-height;
  padding: 0;
  transition: border 0.1s ease;
  user-select: none;
  width: 100%;
}

.ui-select__display-value {
  flex-grow: 1;

  &.is-placeholder {
    color: $hint-text-color;
  }
}

.ui-select__dropdown-button {
  color: $ui-input-button-color;
  font-size: $ui-input-button-size;
  margin-left: auto;
  margin-right: rem(-4px);
}

.ui-select__dropdown {
  display: block;
  list-style-type: none;
  margin: 0;
  margin-bottom: rem(8px);
  min-width: rem(180px);
  outline: none;
  padding: 0;
  width: 100%;
}

.ui-select__dropdown-content {
  outline: none;
}

.ui-select__search-input {
  background: none;
  border: none;
  border-bottom-color: $ui-input-border-color;
  border-bottom-style: solid;
  border-bottom-width: $ui-input-border-width;
  border-radius: 0;
  color: $ui-input-text-color;
  cursor: auto;
  font-family: inherit;
  font-size: $ui-input-text-font-size - rem(1px);
  font-weight: normal;
  height: $ui-input-height + rem(4px);
  outline: none;
  padding: rem(0 12px);
  padding-left: rem(40px);
  transition: border 0.1s ease;
  width: 100%;

  // Hide Edge and IE input clear button
  &::-ms-clear {
    display: none;
  }

  &:focus + .ui-select__search-icon {
    color: $ui-input-label-color--active;
  }
}

.ui-select__search {
  .ui-select__search-icon,
  .ui-select__search-progress {
    position: absolute;
    top: rem(8px);
  }
}

.ui-select__search-icon {
  color: $ui-input-icon-color;
  font-size: rem(20px);
  left: rem(12px);
}

.ui-select__search-progress {
  right: rem(12px);
}

.ui-select__options {
  background-color: white;
  color: $primary-text-color;
  display: block;
  list-style-type: none;
  margin: 0;
  max-height: rem(256px);
  min-width: 100%;
  overflow-y: auto;
  padding: 0;
  position: relative;
}

.ui-select__no-results {
  color: $secondary-text-color;
  font-size: rem(14px);
  padding: rem(8px 12px);
  width: 100%;
}

.ui-select__feedback {
  color: $ui-input-feedback-color;
  font-size: $ui-input-feedback-font-size;
  line-height: $ui-input-feedback-line-height;
  margin: 0;
  padding-top: $ui-input-feedback-padding-top;
  position: relative;
}

// ================================================
// Icon Positions
// ================================================

.ui-select--icon-position-right {
  .ui-select__icon-wrapper {
    margin-left: rem(8px);
    margin-right: 0;
    order: 1;
  }
}
</style>
