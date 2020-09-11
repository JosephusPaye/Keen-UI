<template>
    <label class="ui-fileupload" :class="classes">
        <input
            class="ui-fileupload__input"
            ref="input"
            type="file"

            :accept="accept"
            :disabled="disabled"
            :multiple="multiple"
            :name="name"
            :required="required"
            :tabindex="tabindex"

            @blur="onBlur"
            @input="onInput"
            @change="onChange"
            @focus="onFocus"

            v-if="renderInput"
        >

        <div class="ui-fileupload__content">
            <div class="ui-fileupload__icon">
                <slot name="icon">
                    <ui-icon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M5.016 18h13.969v2.016H5.016V18zM9 15.984v-6H5.016L12 3l6.984 6.984H15v6H9z"/>
                        </svg>
                    </ui-icon>
                </slot>
            </div>

            <span v-if="hasSelection" class="ui-fileupload__display-text">{{ displayText }}</span>
            <slot v-else>{{ placeholder }}</slot>
        </div>

        <div class="ui-fileupload__focus-ring"></div>

        <ui-ripple-ink v-if="!disableRipple && !disabled"></ui-ripple-ink>
    </label>
</template>

<script>
import UiIcon from './UiIcon.vue';
import UiRippleInk from './UiRippleInk.vue';

export default {
    name: 'ui-fileupload',

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
            default: 'primary' // 'primary' or 'secondary'
        },
        color: {
            type: String,
            default: 'default' // 'default', 'primary', 'accent'
        },
        size: {
            type: String,
            default: 'normal' // 'small', 'normal', 'large'
        },
        raised: {
            type: Boolean,
            default: false
        },
        iconPosition: {
            type: String,
            default: 'left' // 'left' or 'right'
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

    data() {
        return {
            isActive: false,
            renderInput: true,
            hasSelection: false,
            hasMultiple: false,
            displayText: ''
        };
    },

    computed: {
        classes() {
            return [
                `ui-fileupload--type-${this.type}`,
                `ui-fileupload--color-${this.color}`,
                `ui-fileupload--icon-position-${this.iconPosition}`,
                `ui-fileupload--size-${this.size}`,
                { 'is-active': this.isActive },
                { 'is-multiple': this.hasMultiple },
                { 'is-raised': this.raised },
                { 'is-disabled': this.disabled }
            ];
        },

        placeholder() {
            if (this.label) {
                return this.label;
            }

            return this.multiple ? 'Choose files' : 'Choose a file';
        }
    },

    methods: {
        onFocus(e) {
            this.isActive = true;
            this.$emit('focus', e);
        },

        onBlur(e) {
            this.isActive = false;
            this.$emit('blur', e);
        },

        onInput(e) {
            this.$emit('input', this.$refs.input.files, e);
        },

        onChange(e) {
            this.updateDisplayText(e);
            this.$emit('change', this.$refs.input.files, e);
        },

        updateDisplayText(e) {
            let displayText;
            const input = this.$refs.input;

            if (input.files && input.files.length > 1) {
                displayText = `${input.files.length} files selected`;
            } else {
                displayText = e.target.value.split('\\').pop();
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

            // Clear the file input by removing the element and re-rendering (via v-if)
            this.renderInput = false;

            this.$nextTick(() => {
                this.renderInput = true;
            });
        }
    },

    components: {
        UiIcon,
        UiRippleInk
    }
};
</script>

<style lang="scss">
@import './styles/imports';

.ui-fileupload {
    align-items: center;
    border-radius: $ui-default-border-radius;
    cursor: pointer;
    display: inline-flex;
    font-family: $font-stack;
    font-size: $ui-button-font-size;
    font-weight: 600;
    height: $ui-button-height;
    justify-content: center;
    letter-spacing: 0.02em;
    line-height: 1;
    min-width: rem(80px);
    overflow: hidden;
    padding: 0;
    padding-left: rem(16px);
    padding-right: rem(16px);
    position: relative;
    text-transform: uppercase;

    &.has-focus-ring.is-active,
    body[modality="keyboard"] &.is-active {
        .ui-fileupload__focus-ring::before {
            opacity: 1;
            transform: scale(1.1);
        }
    }

    &:not(.is-multiple) {
        .ui-fileupload__display-text {
            text-transform: none;
        }
    }

    &.is-raised {
        box-shadow: 0 0 2px rgba(black, 0.12), 0 2px 2px rgba(black, 0.2);
        transition: box-shadow 0.1s;

        &.has-focus-ring.is-active,
        body[modality="keyboard"] &.is-active {
            box-shadow: 0 0 5px rgba(black, 0.22), 0 3px 6px rgba(black, 0.3);
        }
    }

    &.is-disabled {
        cursor: default;
        opacity: 0.6;
    }
}

.ui-fileupload__input {
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
    width: 0.1px;
}

.ui-fileupload__content {
    align-items: center;
    display: flex;
    justify-content: center;
    transition: opacity 0.3s ease;
    z-index: 1;
}

.ui-fileupload__icon {
    margin-left: rem(-4px);
    margin-right: rem(6px);
    margin-top: rem(-2px);
}

.ui-fileupload__focus-ring {
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;

    &::before {
        border-radius: 50%;
        content: "";
        display: block;
        left: 0;
        margin-top: calc(-1 * (50% - #{$ui-button-height / 2}));
        padding-top: 100%; // 1:1 aspect ratio - makes height the same as button width
        position: relative;
        top: 0;
        opacity: 0;
        transform: scale(0);
        transition: opacity 0.3s ease, transform 0.3s ease;
    }
}

// ================================================
// Icon positions
// ================================================

.ui-fileupload--icon-position-right {
    .ui-fileupload__icon {
        margin-left: rem(6px);
        margin-right: rem(-4px);
        order: 1;
    }
}

// ================================================
// Sizes
// ================================================

.ui-fileupload--size-small {
    font-size: $ui-button-font-size--small;
    height: $ui-button-height--small;
    padding-left: rem(12px);
    padding-right: rem(12px);

    .ui-fileupload__icon {
        margin-left: 0;
        margin-top: 0;

        .ui-icon {
            font-size: rem(18px);
        }
    }

    &.ui-fileupload--icon-position-right {
        .ui-fileupload__icon {
            margin-left: rem(6px);
            margin-right: 0;
        }
    }
}

.ui-fileupload--size-large {
    font-size: $ui-button-font-size--large;
    height: $ui-button-height--large;
    padding-left: rem(24px);
    padding-right: rem(24px);

    .ui-fileupload__icon {
        margin-left: rem(-4px);
        margin-right: rem(8px);
    }

    &.ui-fileupload--icon-position-right {
        .ui-fileupload__icon {
            margin-left: rem(8px);
            margin-right: rem(-4px);
        }
    }
}

// ================================================
// Types and colors
// ================================================

.ui-fileupload--type-primary {
    .ui-fileupload__focus-ring::before {
        background-color: rgba(black, 0.12);
    }

    &.ui-fileupload--color-default {
        background-color: $md-grey-200;
        color: $primary-text-color;

        &:hover:not(.is-disabled) {
            background-color: darken($md-grey-200, 7.5%);
        }

        .ui-ripple-ink__ink {
            opacity: 0.2;
        }

        .ui-fileupload__icon {
            color: $secondary-text-color;
        }
    }

    &.ui-fileupload--color-primary,
    &.ui-fileupload--color-accent {
        color: white;

        .ui-ripple-ink__ink {
            opacity: 0.4;
        }
    }

    &.ui-fileupload--color-primary {
        background-color: $brand-primary-color;

        &:hover:not(.is-disabled) {
            background-color: darken($brand-primary-color, 10%);
        }
    }

    &.ui-fileupload--color-accent {
        background-color: $brand-accent-color;

        &:hover:not(.is-disabled) {
            background-color: darken($brand-accent-color, 10%);
        }
    }
}

.ui-fileupload--type-secondary {
    background-color: transparent;

    &.ui-fileupload--color-default {
        color: $primary-text-color;

        &:hover:not(.is-disabled) {
            background-color: $md-grey-200;
        }

        .ui-fileupload__focus-ring::before {
            background-color: rgba(black, 0.12);
        }

        .ui-fileupload__icon {
            color: $secondary-text-color;
        }
    }

    &.ui-fileupload--color-primary {
        color: $brand-primary-color;

        &:hover:not(.is-disabled) {
            background-color: rgba($brand-primary-color, 0.12);
        }

        .ui-fileupload__focus-ring::before {
            background-color: rgba($brand-primary-color, 0.26);
        }
    }

    &.ui-fileupload--color-accent {
        color: $brand-accent-color;

        &:hover:not(.is-disabled) {
            background-color: rgba($brand-accent-color, 0.12);
        }

        .ui-fileupload__focus-ring::before {
            background-color: rgba($brand-accent-color, 0.26);
        }
    }
}
</style>
