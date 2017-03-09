<template>
    <label class="ui-checkbox" :class="classes">
        <input
            class="ui-checkbox__input"
            type="checkbox"

            :checked.prop="isChecked"
            :disabled="disabled"
            :name="name"
            :value="submittedValue"

            @blur="onBlur"
            @change="onChange"
            @click="onClick"
            @focus="onFocus"
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
import { looseEqual } from './helpers/util';

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
        submittedValue: {
            type: String,
            default: 'on' // HTML default
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
                `ui-checkbox--color-${this.color}`,
                `ui-checkbox--box-position-${this.boxPosition}`,
                { 'is-checked': this.isChecked },
                { 'is-active': this.isActive },
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
        onClick(e) {
            this.isChecked = e.target.checked;
            this.$emit('input', e.target.checked ? this.trueValue : this.falseValue);
        },

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

<style lang="scss">
@import './styles/imports';

$ui-checkbox-border-width           : rem-calc(2px) !default;
$ui-checkbox-transition-duration    : 0.15s !default;
$ui-checkbox-label-font-size        : rem-calc(16px) !default;

$ui-checkbox-size                   : rem-calc(20px) !default;
$ui-checkbox-focus-ring-size        : $ui-checkbox-size * 2.1;

.ui-checkbox {
    align-items: center;
    display: flex;
    font-family: $font-stack;
    font-weight: normal;
    margin: 0;
    margin-bottom: rem-calc(8px);
    position: relative;

    &:not(.is-disabled):not(.is-checked):hover,
    &:not(.is-disabled):not(.is-checked).is-active {
        .ui-checkbox__checkmark::before {
            border-color: rgba(black, 0.6);
        }
    }

    &.is-disabled {
        .ui-checkbox__checkmark,
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
    margin-left: rem-calc(8px);
}

.ui-checkbox__checkmark {
    background-color: white;
    cursor: pointer;
    flex-shrink: 0;
    height: $ui-checkbox-size;
    position: relative;
    width: $ui-checkbox-size;

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
        background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K');
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
    border-radius: 50%;
    height: $ui-checkbox-focus-ring-size;
    margin-left: -($ui-checkbox-focus-ring-size - $ui-checkbox-size) / 2;
    margin-top: -($ui-checkbox-focus-ring-size - $ui-checkbox-size) / 2;
    opacity: 0;
    position: absolute;
    transform: scale(0);
    transition-duration: $ui-checkbox-transition-duration;
    transition-property: opacity, transform;
    transition-timing-function: ease-out;
    width: $ui-checkbox-focus-ring-size;
    background-color: rgba(black, 0.12);
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
            background-color: rgba($brand-primary-color, 0.18);
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
            background-color: rgba($brand-accent-color, 0.18);
        }
    }
}
</style>
