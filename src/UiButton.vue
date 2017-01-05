<template>
    <button
        class="ui-button"
        ref="button"

        :class="classes"
        :disabled="disabled || loading"
        :type="buttonType"
    >
        <div class="ui-button__content">
            <div class="ui-button__icon" v-if="icon || $slots.icon">
                <slot name="icon">
                    <ui-icon :icon="icon"></ui-icon>
                </slot>
            </div>

            <slot></slot>

            <ui-icon
                class="ui-button__dropdown-icon"
                v-if="hasDropdown && iconPosition !== 'right'"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.984 9.984h10.03L12 15z"/></svg>
            </ui-icon>
        </div>

        <ui-progress-circular
            class="ui-button__progress"

            :color="progressColor"
            :size="18"
            :stroke="4.5"

            v-show="loading"
        ></ui-progress-circular>

        <ui-ripple-ink trigger="button" v-if="!disableRipple && !disabled"></ui-ripple-ink>

        <ui-popover
            ref="dropdown"
            trigger="button"

            :dropdown-position="dropdownPosition"
            :open-on="openDropdownOn"

            @close="onDropdownClose"
            @open="onDropdownOpen"

            v-if="hasDropdown"
        >
            <slot name="dropdown"></slot>
        </ui-popover>
    </button>
</template>

<script>
import UiIcon from './UiIcon.vue';
import UiPopover from './UiPopover.vue';
import UiRippleInk from './UiRippleInk.vue';
import UiProgressCircular from './UiProgressCircular.vue';

export default {
    name: 'ui-button',

    props: {
        type: {
            type: String,
            default: 'primary' // 'primary' or 'secondary'
        },
        buttonType: {
            type: String,
            default: 'submit' // HTML default
        },
        color: {
            type: String,
            default: 'default' // 'default', 'primary', 'accent', 'green', 'orange', or 'red'
        },
        size: {
            type: String,
            default: 'normal' // 'small', 'normal', 'large'
        },
        raised: {
            type: Boolean,
            default: false
        },
        icon: String,
        iconPosition: {
            type: String,
            default: 'left' // 'left' or 'right'
        },
        loading: {
            type: Boolean,
            default: false
        },
        hasDropdown: {
            type: Boolean,
            default: false
        },
        dropdownPosition: {
            type: String,
            default: 'bottom left'
        },
        openDropdownOn: {
            type: String,
            default: 'click' // 'click', 'hover', 'focus', or 'always'
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

    computed: {
        classes() {
            return [
                'ui-button--type-' + this.type,
                'ui-button--color-' + this.color,
                'ui-button--icon-position-' + this.iconPosition,
                'ui-button--size-' + this.size,
                { 'is-raised': this.raised },
                { 'is-loading': this.loading },
                { 'is-disabled': this.disabled || this.loading },
                { 'has-dropdown': this.hasDropdown }
            ];
        },

        progressColor() {
            if (this.color === 'default' || this.type === 'secondary') {
                return 'black';
            }

            return 'white';
        }
    },

    methods: {
        onDropdownOpen() {
            this.$emit('dropdown-open');
        },

        onDropdownClose() {
            this.$emit('dropdown-close');
        },

        openDropdown() {
            if (this.$refs.dropdown) {
                this.$refs.dropdown.open();
            }
        },

        closeDropdown() {
            if (this.$refs.dropdown) {
                this.$refs.dropdown.close();
            }
        },

        toggleDropdown() {
            if (this.$refs.dropdown) {
                this.$refs.dropdown.toggle();
            }
        }
    },

    components: {
        UiIcon,
        UiPopover,
        UiRippleInk,
        UiProgressCircular
    }
};
</script>

<style lang="sass">
@import '~styles/imports';

$ui-button-font-size            : 14px !default;
$ui-button-font-size--small     : 14px !default;
$ui-button-font-size--large     : 14px !default;
$ui-button-height               : 36px !default;
$ui-button-height--small        : 32px !default;
$ui-button-height--large        : 48px !default;

.ui-button {
    align-items: center;
    background: none;
    border-radius: $ui-default-border-radius;
    border: none;
    cursor: pointer;
    display: inline-flex;
    font-family: $font-stack;
    font-size: $ui-button-font-size;
    font-weight: 500;
    height: $ui-button-height;
    justify-content: center;
    letter-spacing: 0.02em;
    line-height: 1;
    min-width: 80px;
    outline: none;
    padding: 0;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-transform: uppercase;
    touch-action: manipulation; // IE

    // Remove the Firefox dotted outline
    &::-moz-focus-inner {
        border: 0;
    }

    &.has-focus-ring:focus,
    body[modality="keyboard"] &:focus {
        outline-style: solid;
    }

    &.is-raised {
        box-shadow: 0 0 2px rgba(black, 0.12), 0 2px 2px rgba(black, 0.2);
        transition: box-shadow 0.1s;

        &.has-focus-ring:focus,
        body[modality="keyboard"] &:focus {
            box-shadow: 0 0 5px rgba(black, 0.22), 0 3px 6px rgba(black, 0.3);
            outline: none;
        }
    }

    &.is-loading {
        .ui-button__content {
            opacity: 0;
        }
    }

    &.is-disabled {
        cursor: default;
        opacity: 0.6;
    }
}

.ui-button__content {
    align-items: center;
    display: flex;
    justify-content: center;
    transition: opacity 0.3s ease;
}

.ui-button__icon {
    margin-left: -4px;
    margin-right: 6px;
    margin-top: -2px;
}

.ui-button__dropdown-icon {
    font-size: 18px;
    margin-left: 2px;
    margin-right: -6px;
}

.ui-progress-circular.ui-button__progress {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: none;
}

.ui-button-group {
    display: flex;
    flex-wrap: wrap;
}

// ================================================
// Icon positions
// ================================================

.ui-button--icon-position-right {
    .ui-button__icon {
        margin-left: 6px;
        margin-right: -4px;
        order: 1;
    }
}

// ================================================
// Sizes
// ================================================

.ui-button--size-small {
    font-size: $ui-button-font-size--small;
    height: $ui-button-height--small;
    line-height: 1;
    padding-left: 12px;
    padding-right: 12px;

    .ui-button__icon {
        margin-left: 0;
        margin-top: 0;

        .ui-icon {
            font-size: 18px;
        }
    }

    .ui-button__dropdown-icon {
        margin-right: -4px;
    }

    &.ui-button--icon-position-right {
        .ui-button__icon {
            margin-left: 6px;
            margin-right: 0;
        }
    }
}

.ui-button--size-large {
    font-size: $ui-button-font-size--large;
    height: $ui-button-height--large;
    padding-left: 24px;
    padding-right: 24px;

    .ui-button__icon {
        margin-left: -4px;
        margin-right: 8px;
    }

    .ui-button__dropdown-icon {
        font-size: 24px;
        margin-left: 4px;
    }

    &.ui-button--icon-position-right {
        .ui-button__icon {
            margin-left: 8px;
            margin-right: -4px;
        }
    }
}

// ================================================
// Types and colors
// ================================================

.ui-button--type-primary {
    &.has-focus-ring:focus,
    body[modality="keyboard"] &:focus {
        outline-offset: 2px;
        outline-width: 2px;
    }

    &.ui-button--color-default {
        background-color: $md-grey-200;
        color: $primary-text-color;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: darken($md-grey-200, 7.5%);
        }

        &.has-focus-ring:focus,
        body[modality="keyboard"] &:focus {
            background-color: darken($md-grey-200, 15%);
            outline-color: darken($md-grey-200, 30%);
        }

        .ui-ripple-ink__ink {
            opacity: 0.2;
        }

        .ui-button__icon,
        .ui-button__dropdown-icon {
            color: $secondary-text-color;
        }
    }

    &.ui-button--color-primary,
    &.ui-button--color-accent,
    &.ui-button--color-green,
    &.ui-button--color-orange,
    &.ui-button--color-red {
        color: white;

        .ui-ripple-ink__ink {
            opacity: 0.4;
        }
    }

    &.ui-button--color-primary {
        background-color: $brand-primary-color;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: darken($brand-primary-color, 10%);
        }

        &.has-focus-ring:focus,
        body[modality="keyboard"] &:focus {
            background-color: darken($brand-primary-color, 15%);
            outline-color: darken($brand-primary-color, 15%);
        }
    }

    &.ui-button--color-accent {
        background-color: $brand-accent-color;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: darken($brand-accent-color, 10%);
        }

        &.has-focus-ring:focus,
        body[modality="keyboard"] &:focus {
            background-color: darken($brand-accent-color, 15%);
            outline-color: darken($brand-accent-color, 15%);
        }
    }

    &.ui-button--color-green {
        background-color: $md-green;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: darken($md-green, 10%);
        }

        &.has-focus-ring:focus,
        body[modality="keyboard"] &:focus {
            background-color: darken($md-green, 15%);
            outline-color: darken($md-green, 15%);
        }
    }

    &.ui-button--color-orange {
        background-color: $md-orange;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: darken($md-orange, 10%);
        }

        &.has-focus-ring:focus,
        body[modality="keyboard"] &:focus {
            background-color: darken($md-orange, 15%);
            outline-color: darken($md-orange, 15%);
        }
    }

    &.ui-button--color-red {
        background-color: $md-red;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: darken($md-red, 10%);
        }

        &.has-focus-ring:focus,
        body[modality="keyboard"] &:focus {
            background-color: darken($md-red, 15%);
            outline-color: darken($md-red, 15%);
        }
    }
}

.ui-button--type-secondary {
    background-color: transparent;

    &:hover:not(.is-disabled),
    &.has-dropdown-open {
        background-color: darken($md-grey-200, 3%);
    }

    &.ui-button--color-default {
        color: $primary-text-color;

        .ui-button__icon {
            color: $secondary-text-color;
        }

        &.has-focus-ring:focus,
        body[modality="keyboard"] &:focus {
            outline-color: darken($md-grey-200, 25%);
        }
    }

    &.ui-button--color-primary {
        color: $brand-primary-color;
    }

    &.ui-button--color-accent {
        color: $brand-accent-color;
    }

    &.ui-button--color-green {
        color: $md-green-600;
    }

    &.ui-button--color-orange {
        color: $md-orange;
    }

    &.ui-button--color-red {
        color: $md-red;
    }
}
</style>
