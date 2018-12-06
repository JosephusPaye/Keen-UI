<template>
    <div class="ui-radio-group" :class="classes">
        <div class="ui-radio-group__label-text" v-if="label || $slots.default">
            <slot>{{ label }}</slot>
        </div>

        <div class="ui-radio-group__radios">
            <ui-radio
                class="ui-radio-group__radio"

                :button-position="buttonPosition"
                :checked="isOptionCheckedByDefault(option)"
                :class="option[keys.class]"
                :color="color"
                :disabled="disabled || option[keys.disabled]"
                :id="option[keys.id]"
                :key="option[keys.id]"
                :name="name"
                :true-value="option[keys.value] || option"

                @blur="onBlur"
                @focus="onFocus"

                v-for="option in options"
                v-model="selectedOptionValue"
            >{{ option[keys.label] || option }}</ui-radio>
        </div>

        <div class="ui-radio-group__feedback" v-if="hasFeedback">
            <div class="ui-radio-group__feedback-text" v-if="showError">
                <slot name="error">{{ error }}</slot>
            </div>

            <div class="ui-radio-group__feedback-text" v-else-if="showHelp">
                <slot name="help">{{ help }}</slot>
            </div>
        </div>
    </div>
</template>

<script>
import UiRadio from './UiRadio.vue';

export default {
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
            default() {
                return {
                    id: 'id',
                    class: 'class',
                    label: 'label',
                    value: 'value',
                    checked: 'checked',
                    disabled: 'disabled'
                };
            }
        },
        color: {
            type: String,
            default: 'primary' // 'primary' or 'accent'
        },
        buttonPosition: {
            type: String,
            default: 'left' // 'left' or 'right'
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

    data() {
        return {
            isActive: false,
            initialValue: this.value,
            selectedOptionValue: this.value
        };
    },

    computed: {
        classes() {
            return [
                `ui-radio-group--color-${this.color}`,
                `ui-radio-group--button-position-${this.buttonPosition}`,
                { 'is-vertical': this.vertical },
                { 'is-active': this.isActive },
                { 'is-invalid': this.invalid },
                { 'is-disabled': this.disabled }
            ];
        },

        hasFeedback() {
            return Boolean(this.help) || Boolean(this.error) || Boolean(this.$slots.error);
        },

        showError() {
            return this.invalid && (Boolean(this.error) || Boolean(this.$slots.error));
        },

        showHelp() {
            return !this.showError && (Boolean(this.help) || Boolean(this.$slots.help));
        }
    },

    watch: {
        selectedOptionValue() {
            this.$emit('input', this.selectedOptionValue);
            this.$emit('change', this.selectedOptionValue);
        },

        value() {
            this.selectedOptionValue = this.value;
        }
    },

    methods: {
        reset() {
            this.$emit('input', this.initialValue);
        },

        isOptionCheckedByDefault(option) {
            // eslint-disable-next-line eqeqeq
            return this.initialValue == option[this.keys.value] || this.initialValue == option ||
                option[this.keys.checked];
        },

        onFocus(e) {
            this.isActive = true;
            this.$emit('focus', e);
        },

        onBlur(e) {
            this.isActive = false;
            this.$emit('blur', e);
        }
    },

    components: {
        UiRadio
    }
};
</script>

<style lang="scss">
@import './styles/imports';

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
