<template>
  <div class="ui-radio-group" :class="classes">
    <div v-if="label || $slots.default" class="ui-radio-group__label-text">
      <slot>{{ label }}</slot>
    </div>

    <div class="ui-radio-group__radios">
      <ui-radio
        v-for="option in options"
        :id="option[keys.id]"
        :key="option[keys.id]"
        v-model="selectedOptionValue"
        class="ui-radio-group__radio"
        :button-position="buttonPosition"
        :checked="isOptionCheckedByDefault(option)"
        :class="option[keys.class]"
        :color="color"
        :disabled="disabled || option[keys.disabled]"
        :name="name"
        :tabindex="tabindex"
        :true-value="getTrueValue(option)"
        @blur="onBlur"
        @focus="onFocus"
        >{{ option[keys.label] || option }}</ui-radio
      >
    </div>

    <div v-if="hasFeedback" class="ui-radio-group__feedback">
      <div v-if="showError" class="ui-radio-group__feedback-text">
        <slot name="error">{{ error }}</slot>
      </div>

      <div v-else-if="showHelp" class="ui-radio-group__feedback-text">
        <slot name="help">{{ help }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
import UiRadio from "./UiRadio.vue";

export default {
  name: "UiRadioGroup",

  components: {
    UiRadio,
  },

  props: {
    name: {
      type: String,
      required: true,
    },
    tabindex: [String, Number],
    label: String,
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: [Number, String],
      required: true,
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
          disabled: "disabled",
        };
      },
    },
    color: {
      type: String,
      default: "primary", // 'primary' or 'accent'
    },
    buttonPosition: {
      type: String,
      default: "left", // 'left' or 'right'
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    help: String,
    error: String,
    invalid: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["update:modelValue", "focus", "blur", "change"],

  data() {
    return {
      isActive: false,
      initialValue: this.modelValue,
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
        { "is-disabled": this.disabled },
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
      },
    },
  },

  methods: {
    reset() {
      this.$emit("update:modelValue", this.initialValue);
    },

    isOptionCheckedByDefault(option) {
      // eslint-disable-next-line eqeqeq
      return (
        this.initialValue == option[this.keys.value] ||
        this.initialValue == option ||
        option[this.keys.checked]
      );
    },

    getTrueValue(option) {
      if (typeof option === "string" || typeof option === "number") {
        return option;
      }

      const value = option[this.keys.value];

      if (value === undefined) {
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
    },
  },
};
</script>

<style lang="scss">
@import "./styles/imports";

.ui-radio-group {
  font-family: $font-stack;

  &:not(.is-disabled):not(.is-invalid):hover {
    .ui-radio-group__label-text {
      color: $ui-input-label-color--hover;
    }
  }

  &:not(.is-disabled):not(.is-invalid).is-active {
    .ui-radio-group__label-text {
      color: $ui-input-label-color--active;
    }
  }

  &.is-vertical {
    .ui-radio-group__radios {
      flex-direction: column;
      padding-top: rem(8px);
    }

    .ui-radio-group__radio {
      margin-bottom: rem(12px);
      margin-left: 0;
      width: 100%;
    }
  }

  &.is-invalid {
    .ui-radio-group__label-text {
      color: $ui-input-border-color--invalid;
    }

    .ui-radio-group__feedback {
      color: $ui-input-feedback-color--invalid;
    }
  }

  &.is-disabled {
    .ui-radio-group__feedback {
      opacity: $ui-input-feedback-opacity--disabled;
    }
  }
}

.ui-radio-group__label-text {
  color: $ui-input-label-color;
  font-size: $ui-input-label-font-size;
  line-height: $ui-input-label-line-height;
  transition: color 0.1s ease;
}

.ui-radio-group__radios {
  align-items: center;
  display: flex;
  min-height: $ui-input-height;
}

.ui-radio.ui-radio-group__radio {
  margin-left: rem(24px);

  &:first-child {
    margin-left: 0;
  }
}

.ui-radio-group__feedback {
  color: $ui-input-feedback-color;
  font-size: $ui-input-feedback-font-size;
  line-height: $ui-input-feedback-line-height;
  margin: 0;
  padding-top: $ui-input-feedback-padding-top - rem(4px);
  position: relative;
}

// ================================================
// Button Positions
// ================================================

.ui-radio-group--button-position-right {
  &:not(.is-vertical) {
    .ui-radio__label-text {
      margin-right: rem(8px);
    }
  }
}
</style>
