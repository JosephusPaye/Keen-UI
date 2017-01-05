<template>
    <label class="ui-checkbox" :class="classes">
        <input
            class="ui-checkbox__input"
            type="checkbox"

            :disabled="disabled"
            :name="name"

            @blur="onBlur"
            @change="onChange"
            @focus="onFocus"

            v-model="isChecked"
        >

        <div class="ui-checkbox__checkmark">
            <div class="ui-checkbox__focus-ring"></div>
        </div>

        <div class="ui-checkbox__label-text" v-if="label || $slots.default">
            <slot>{{ label }}</slot>
        </div>
    </label>
</template>

<script>
import { looseEqual } from 'helpers/util';

export default {
    name: 'ui-checkbox',

    props: {
        name: String,
        label: String,
        value: {
            required: true
        },
        trueValue: {
            default: true
        },
        falseValue: {
            default: false
        },
        checked: {
            type: Boolean,
            default: false
        },
        boxPosition: {
            type: String,
            default: 'left' // 'left' or 'right'
        },
        color: {
            type: String,
            default: 'primary' // 'primary' or 'accent'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            isActive: false,
            isChecked: looseEqual(this.value, this.trueValue) || this.checked
        };
    },

    computed: {
        classes() {
            return [
                'ui-checkbox--color-' + this.color,
                'ui-checkbox--box-position-' + this.boxPosition,
                { 'is-checked': this.isChecked },
                { 'is-active': this.isActive },
                { 'is-disabled': this.disabled }
            ];
        }
    },

    watch: {
        isChecked() {
            this.$emit('input', this.isChecked ? this.trueValue : this.falseValue);
        },

        value() {
            this.isChecked = looseEqual(this.value, this.trueValue);
        }
    },

    created() {
        this.$emit('input', this.isChecked ? this.trueValue : this.falseValue);
    },

    methods: {
        onChange(e) {
            this.$emit('change', this.isChecked ? this.trueValue : this.falseValue, e);
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

<style lang="sass">
@import '~styles/imports';

$ui-checkbox-border-width           : 2px !default;
$ui-checkbox-checkmark-width        : 2px !default;
$ui-checkbox-transition-duration    : 0.15s !default;
$ui-checkbox-label-font-size        : 16px !default;

.ui-checkbox {
    align-items: center;
    cursor: default;
    display: flex;
    font-family: $font-stack;
    font-weight: normal;
    margin: 0;
    margin-bottom: 8px;
    position: relative;

    &:not(.is-disabled):not(.is-checked):hover,
    &:not(.is-disabled):not(.is-checked).is-active {
        .ui-checkbox__checkmark::before {
            border-color: $secondary-text-color;
        }
    }

    &.is-checked {
        .ui-checkbox__checkmark::after {
            border-bottom: $ui-checkbox-checkmark-width solid white;
            border-right: $ui-checkbox-checkmark-width solid white;
            opacity: 1;
        }
    }

    &.is-disabled {
        .ui-checkbox__label-text {
            color: $disabled-text-color;
            cursor: default;
        }

        .ui-checkbox__checkmark::before {
            border-color: rgba(black, 0.26);
        }

        &.is-checked {
            .ui-checkbox__checkmark::before {
                background-color: rgba(black, 0.26);
                border: none;
            }
        }
    }
}

.ui-checkbox__label-text {
    cursor: pointer;
    font-size: $ui-checkbox-label-font-size;
    margin-left: 8px;
}

.ui-checkbox__checkmark {
    background-color: white;
    height: 20px;
    position: relative;
    width: 20px;

    // Background
    &::before {
        border-radius: $ui-default-border-radius;
        border: $ui-checkbox-border-width solid $hint-text-color;
        box-sizing: border-box;
        content: "";
        display: block;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        transition: all 0.3s ease;
        width: 100%;
    }

    // Checkmark
    &::after {
        bottom: 5px;
        box-sizing: border-box;
        content: "";
        display: block;
        height: 13px;
        left: 7px;
        opacity: 0;
        position: absolute;
        transform: rotate(45deg);
        transition-delay: 0.1s;
        transition: opacity 0.3s ease;
        width: 6px;
    }
}

.ui-checkbox__input {
    position: absolute;
    opacity: 0;

    body[modality="keyboard"] &:focus + .ui-checkbox__checkmark {
        .ui-checkbox__focus-ring {
            opacity: 1;
            transform: scale(1);
        }
    }
}

.ui-checkbox__focus-ring {
    background-color: rgba(black, 0.12);
    border-radius: 50%;
    height: 48px;
    margin-left: -14px;
    margin-top: -14px;
    opacity: 0;
    position: absolute;
    transform: scale(0);
    transition-duration: $ui-checkbox-transition-duration;
    transition-property: opacity, transform;
    transition-timing-function: ease-out;
    width: 48px;
}

// ================================================
// Box Positions
// ================================================

.ui-checkbox--box-position-right {
    .ui-checkbox__label-text {
        margin-left: 0;
        margin-right: auto;
        order: -1;
    }
}

// ================================================
// Colors
// ================================================

.ui-checkbox--color-primary {
    &:not(.is-disabled).is-checked:hover,
    &:not(.is-disabled).is-checked.is-active {
        .ui-checkbox__checkmark::before {
            background-color: darken($brand-primary-color, 5%);
            border-color: darken($brand-primary-color, 5%);
        }
    }

    &.is-checked {
        .ui-checkbox__checkmark::before {
            background-color: $brand-primary-color;
            border-color: $brand-primary-color;
        }

        .ui-checkbox__focus-ring {
            background-color: rgba($brand-primary-color, 0.15);
        }
    }
}

.ui-checkbox--color-accent {
    &:not(.is-disabled).is-checked:hover,
    &:not(.is-disabled).is-checked.is-active {
        .ui-checkbox__checkmark::before {
            background-color: darken($brand-accent-color, 5%);
            border-color: darken($brand-accent-color, 5%);
        }
    }

    &.is-checked {
        .ui-checkbox__checkmark::before {
            background-color: $brand-accent-color;
            border-color: $brand-accent-color;
        }

        .ui-checkbox__focus-ring {
            background-color: rgba($brand-accent-color, 0.15);
        }
    }
}
</style>
