<template>
    <label
        class="ui-fileupload"
        ref="label"

        :class="classes"
    >
        <input
            class="ui-fileupload__input"
            ref="input"
            type="file"

            :accept="accept"
            :disabled="disabled"
            :multiple="multiple"
            :name="name"
            :required="required"

            @blur="onBlur"
            @change="onChange"
            @focus="onFocus"
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

        <div class="ui-fileupload__focus-ring" :style="focusRingStyle"></div>

        <ui-ripple-ink trigger="label" v-if="!disableRipple && !disabled"></ui-ripple-ink>
    </label>
</template>

<script>
import UiIcon from './UiIcon.vue';
import UiRippleInk from './UiRippleInk.vue';

import config from './config';

export default {
    name: 'ui-fileupload',

    props: {
        name: {
            type: String,
            required: true
        },
        label: String,
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
            default: config.data.disableRipple
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            isActive: false,
            hasSelection: false,
            hasMultiple: false,
            displayText: '',
            focusRing: {
                top: 0,
                left: 0,
                size: 0,
                initialized: false
            }
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
        },

        focusRingStyle() {
            return {
                height: this.focusRing.size + 'px',
                width: this.focusRing.size + 'px',
                top: this.focusRing.top + 'px',
                left: this.focusRing.left + 'px'
            };
        }
    },

    methods: {
        onFocus(e) {
            this.isActive = true;
            this.$emit('focus', e);

            if (!this.focusRing.initialized) {
                this.initializeFocusRing();
            }
        },

        onBlur(e) {
            this.isActive = false;
            this.$emit('blur', e);
        },

        onChange(e) {
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

                this.$nextTick(() => this.refreshFocusRing());
            }

            this.$emit('change', input.files, e);
        },

        initializeFocusRing() {
            this.refreshFocusRing();
            this.focusRing.initialized = true;
        },

        refreshFocusRing() {
            const bounds = {
                width: this.$el.clientWidth,
                height: this.$el.clientHeight
            };

            this.focusRing.size = bounds.width - 16; // 8px of padding on left and right
            this.focusRing.top = -1 * (this.focusRing.size - bounds.height) / 2;
            this.focusRing.left = (bounds.width - this.focusRing.size) / 2;
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
    font-weight: 500;
    height: $ui-button-height;
    justify-content: center;
    letter-spacing: 0.02em;
    line-height: 1;
    min-width: rem-calc(80px);
    overflow: hidden;
    padding: 0;
    padding-left: rem-calc(16px);
    padding-right: rem-calc(16px);
    position: relative;
    text-transform: uppercase;

    &.has-focus-ring.is-active,
    body[modality="keyboard"] &.is-active {
        .ui-fileupload__focus-ring {
            opacity: 1;
            transform: scale(1);
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
    margin-left: rem-calc(-4px);
    margin-right: rem-calc(6px);
    margin-top: rem-calc(-2px);
}

.ui-fileupload__focus-ring {
    background-color: rgba(black, 0.12);
    border-radius: 50%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transform-origin: center;
    transform: scale(0);
    transition: transform 0.2s ease, opacity 0.2s ease;
}

// ================================================
// Icon positions
// ================================================

.ui-fileupload--icon-position-right {
    .ui-fileupload__icon {
        margin-left: rem-calc(6px);
        margin-right: rem-calc(-4px);
        order: 1;
    }
}

// ================================================
// Sizes
// ================================================

.ui-fileupload--size-small {
    font-size: $ui-button-font-size--small;
    height: $ui-button-height--small;
    padding-left: rem-calc(12px);
    padding-right: rem-calc(12px);

    .ui-fileupload__icon {
        margin-left: 0;
        margin-top: 0;

        .ui-icon {
            font-size: rem-calc(18px);
        }
    }

    &.ui-fileupload--icon-position-right {
        .ui-fileupload__icon {
            margin-left: rem-calc(6px);
            margin-right: 0;
        }
    }
}

.ui-fileupload--size-large {
    font-size: $ui-button-font-size--large;
    height: $ui-button-height--large;
    padding-left: rem-calc(24px);
    padding-right: rem-calc(24px);

    .ui-fileupload__icon {
        margin-left: rem-calc(-4px);
        margin-right: rem-calc(8px);
    }

    &.ui-fileupload--icon-position-right {
        .ui-fileupload__icon {
            margin-left: rem-calc(8px);
            margin-right: rem-calc(-4px);
        }
    }
}

// ================================================
// Types and colors
// ================================================

.ui-fileupload--type-primary {
    &.ui-fileupload--color-default {
        background-color: $md-grey-200;
        color: $primary-text-color;

        &:hover:not(.is-disabled),
        &.has-focus-ring.is-active,
        body[modality="keyboard"] &.is-active {
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

        &:hover:not(.is-disabled),
        &.has-focus-ring.is-active,
        body[modality="keyboard"] &.is-active {
            background-color: darken($brand-primary-color, 10%);
        }
    }

    &.ui-fileupload--color-accent {
        background-color: $brand-accent-color;

        &:hover:not(.is-disabled),
        &.has-focus-ring.is-active,
        body[modality="keyboard"] &.is-active {
            background-color: darken($brand-accent-color, 10%);
        }
    }
}

.ui-fileupload--type-secondary {
    background-color: transparent;

    &:hover:not(.is-disabled),
    &.has-focus-ring.is-active,
    body[modality="keyboard"] &.is-active {
        background-color: darken($md-grey-200, 3%);
    }

    &.ui-fileupload--color-default {
        color: $primary-text-color;

        .ui-fileupload__icon {
            color: $secondary-text-color;
        }
    }

    &.ui-fileupload--color-primary {
        color: $brand-primary-color;
    }

    &.ui-fileupload--color-accent {
        color: $brand-accent-color;
    }
}
</style>
