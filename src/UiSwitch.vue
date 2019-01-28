<template>
    <label class="ui-switch" :class="classes">
        <div class="ui-switch__input-wrapper">
            <input
                class="ui-switch__input"
                ref="input"
                type="checkbox"

                :checked.prop="isChecked"
                :disabled="disabled"
                :name="name"
                :tabindex="tabindex"
                :value="submittedValue"

                @blur="onBlur"
                @click="onClick"
                @focus="onFocus"
            >

            <div class="ui-switch__thumb">
                <div class="ui-switch__focus-ring"></div>
            </div>

            <div class="ui-switch__track"></div>
        </div>

        <div class="ui-switch__label-text" v-if="label || $slots.default">
            <slot>{{ label }}</slot>
        </div>
    </label>
</template>

<script>
import { looseEqual } from './helpers/util';

export default {
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
            default: 'on' // HTML default
        },
        checked: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: 'primary' // 'primary' or 'accent'
        },
        switchPosition: {
            type: String,
            default: 'left' // 'left' or 'right'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            isActive: false,
            isChecked: looseEqual(this.value, this.trueValue) || this.checked,
            initialValue: this.value
        };
    },

    computed: {
        classes() {
            return [
                `ui-switch--color-${this.color}`,
                `ui-switch--switch-position-${this.switchPosition}`,
                { 'is-active': this.isActive },
                { 'is-checked': this.isChecked },
                { 'is-disabled': this.disabled }
            ];
        }
    },

    watch: {
        value() {
            this.isChecked = looseEqual(this.value, this.trueValue);
        }
    },

    created() {
        this.$emit('input', this.isChecked ? this.trueValue : this.falseValue);
    },

    methods: {
        focus() {
            this.$refs.input.focus();
        },

        onClick(e) {
            const isCheckedPrevious = this.isChecked;
            const isChecked = e.target.checked;

            this.$emit('input', isChecked ? this.trueValue : this.falseValue, e);

            if (isCheckedPrevious !== isChecked) {
                this.$emit('change', isChecked ? this.trueValue : this.falseValue, e);
            }
        },

        onFocus(e) {
            this.isActive = true;
            this.$emit('focus', e);
        },

        onBlur(e) {
            this.isActive = false;
            this.$emit('blur', e);
        }
    }
};
</script>

<style lang="scss">
@import './styles/imports';

$ui-switch-height           : rem(32px) !default;

$ui-switch-thumb-size       : rem(20px) !default;
$ui-switch-thumb-color      : $md-grey-50 !default;

$ui-switch-track-width      : rem(34px) !default;
$ui-switch-track-height     : rem(14px) !default;

$ui-switch-focus-ring-size  : $ui-switch-thumb-size * 2.1 !default;

.ui-switch {
    align-items: center;
    display: flex;
    font-family: $font-stack;
    height: $ui-switch-height;
    position: relative;

    &.is-checked {
        .ui-switch__thumb {
            transform: translateX($ui-switch-track-width - $ui-switch-thumb-size);
        }
    }

    &.is-disabled {
        .ui-switch__track {
            background-color: rgba(black, 0.12);
        }

        .ui-switch__thumb {
            background-color: $md-grey-400;
            box-shadow: none;
        }

        .ui-switch__input-wrapper,
        .ui-switch__label-text {
            color: $disabled-text-color;
            cursor: default;
        }
    }
}

.ui-switch__input-wrapper {
    cursor: pointer;
    height: $ui-switch-thumb-size;
    position: relative;
    width: $ui-switch-track-width;
}

.ui-switch__input {
    opacity: 0;
    position: absolute;

    body[modality="keyboard"] &:focus + .ui-switch__thumb {
        .ui-switch__focus-ring {
            opacity: 1;
            transform: scale(1);
        }
    }
}

.ui-switch__track {
    background-color: rgba(black, 0.26);
    border-radius: rem(8px);
    height: $ui-switch-track-height;
    position: absolute;
    top: (($ui-switch-thumb-size - $ui-switch-track-height) / 2);
    transition: background-color 0.1s linear;
    width: $ui-switch-track-width;
}

.ui-switch__thumb {
    background-color: $ui-switch-thumb-color;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(black, 0.4);
    height: $ui-switch-thumb-size;
    position: absolute;
    transition-duration: 0.2s;
    transition-property: background-color, transform;
    transition-timing-function: ease;
    width: $ui-switch-thumb-size;
    z-index: 1;
}

.ui-switch__focus-ring {
    background-color: rgba(black, 0.1);
    border-radius: 50%;
    height: $ui-switch-focus-ring-size;
    left: -(($ui-switch-focus-ring-size - $ui-switch-thumb-size) / 2);
    opacity: 0;
    position: absolute;
    top: -(($ui-switch-focus-ring-size - $ui-switch-thumb-size) / 2);
    transform: scale(0);
    transition: background-color 0.2s ease, transform 0.15s ease, opacity 0.15s ease;
    width: $ui-switch-focus-ring-size;
    z-index: -1;
}

.ui-switch__label-text {
    cursor: pointer;
    font-size: rem(15px);
    margin-left: rem(16px);
}

// ================================================
// Switch positions
// ================================================

.ui-switch--switch-position-right {
    .ui-switch__label-text {
        margin-left: 0;
        margin-right: auto;
        order: -1;
    }
}

// ================================================
// Colors
// ================================================

.ui-switch--color-primary {
    &.is-checked:not(.is-disabled) {
        .ui-switch__track {
            background-color: rgba($brand-primary-color, 0.5);
        }

        .ui-switch__thumb {
            background-color: $brand-primary-color;
        }

        .ui-switch__focus-ring {
            background-color: rgba($brand-primary-color, 0.2);
        }
    }
}

.ui-switch--color-accent {
    &.is-checked:not(.is-disabled) {
        .ui-switch__track {
            background-color: rgba($brand-accent-color, 0.5);
        }

        .ui-switch__thumb {
            background-color: $brand-accent-color;
        }

        .ui-switch__focus-ring {
            background-color: rgba($brand-accent-color, 0.2);
        }
    }
}
</style>
