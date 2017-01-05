<template>
    <label class="ui-radio" :class="classes" @click="toggleCheck">
        <div class="ui-radio__input-wrapper">
            <input
                class="ui-radio__input"
                type="radio"

                :disabled="disabled"
                :name="name"
                :value="trueValue"

                @blur="onBlur"
                @focus="onFocus"
                @change="onChange"
            >

            <span class="ui-radio__outer-circle"></span>
            <span class="ui-radio__inner-circle"></span>
        </div>

        <div class="ui-radio__label-text" v-if="label || $slots.default">
            <slot>{{ label }}</slot>
        </div>
    </label>
</template>

<script>
export default {
    name: 'ui-radio',

    props: {
        name: String,
        label: String,
        value: {
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
            default: 'primary' // 'primary' or 'accent'
        },
        buttonPosition: {
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
            isActive: false
        };
    },

    computed: {
        classes() {
            return [
                'ui-radio--color-' + this.color,
                'ui-radio--button-position-' + this.buttonPosition,
                { 'is-active': this.isActive },
                { 'is-checked': this.isChecked },
                { 'is-disabled': this.disabled }
            ];
        },

        isChecked() {
            // eslint-disable-next-line eqeqeq
            return (String(this.value).length > 0) && (this.value == this.trueValue);
        }
    },

    created() {
        if (this.checked) {
            this.$emit('input', this.trueValue);
        }
    },

    methods: {
        toggleCheck() {
            if (!this.disabled) {
                this.$emit('input', this.trueValue);
            }
        },

        onFocus(e) {
            this.isActive = true;
            this.$emit('focus', e);
        },

        onBlur(e) {
            this.isActive = false;
            this.$emit('blur', e);
        },

        onChange(e) {
            this.$emit('change', this.isChecked, e);
        }
    }
};
</script>

<style lang="sass">
@import '~styles/imports';

$ui-radio-size                  : 20px !default;
$ui-radio-stroke                : 2px !default;
$ui-radio-transition-duration   : 0.3s !default;
$ui-radio-label-font-size       : 16px !default;

.ui-radio {
    align-items: center;
    display: flex;
    font-family: $font-stack;
    font-size: $ui-input-label-font-size;
    height: $ui-radio-size;
    margin: 0;

    &:hover:not(.is-disabled):not(.is-checked) {
        .ui-radio__outer-circle {
            border: $ui-radio-stroke solid $secondary-text-color;
        }
    }

    &.is-checked {
        .ui-radio__inner-circle {
            opacity: 1;
            transform: scale(0.5);
            z-index: 0;
        }
    }

    &.is-disabled {
        opacity: 0.5;

        .ui-radio__label-text {
            cursor: default;
        }
    }
}

.ui-radio__input-wrapper {
    height: $ui-radio-size;
    position: relative;
    width: $ui-radio-size;
}

.ui-radio__input {
    appearance: none;
    height: 1px;
    left: 0;
    margin: 0;
    opacity: 0;
    outline: none;
    padding: 0;
    position: absolute;
    top: 0;
    width: 1px;
}

.ui-radio__outer-circle {
    background-color: transparent;
    border-radius: 50%;
    border: $ui-radio-stroke solid $hint-text-color;
    height: $ui-radio-size;
    left: 0;
    position: absolute;
    top: 0;
    transition: border-color 0.2s;
    width: $ui-radio-size;
}

.ui-radio__inner-circle {
    background-color: $hint-text-color;
    border-radius: 50%;
    height: $ui-radio-size;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transform: scale(1.2);
    transition-duration: $ui-radio-transition-duration;
    transition-property: transform, opacity, background-color;
    width: $ui-radio-size;
    z-index: -1;
}

.ui-radio__label-text {
    cursor: pointer;
    font-size: $ui-radio-label-font-size;
    margin-left: 8px;
}

// ================================================
// Button Positions
// ================================================

.ui-radio--button-position-right {
    .ui-radio__label-text {
        margin-left: 0;
        margin-right: auto;
        order: -1;
    }
}

// ================================================
// Colors
// ================================================

.ui-radio--color-primary {
    &.is-checked:not(.is-disabled) {
        .ui-radio__outer-circle {
            border-color: $brand-primary-color;
        }

        .ui-radio__inner-circle {
            background-color: $brand-primary-color;
        }
    }
}

.ui-radio--color-accent {
    &.is-checked:not(.is-disabled) {
        .ui-radio__outer-circle {
            border-color: $brand-accent-color;
        }

        .ui-radio__inner-circle {
            background-color: $brand-accent-color;
        }
    }
}
</style>
