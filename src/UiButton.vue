<template>
    <component
        class="ui-button"

        :class="classes"
        :disabled="disabled || loading"
        :href="isAnchor ? (disabled ? null : href) : null"
        :is="isAnchor ? 'a' : 'button'"
        :type="isAnchor ? null : buttonType"

        @click="onClick"
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M6.984 9.984h10.03L12 15z"/>
                </svg>
            </ui-icon>
        </div>

        <div class="ui-button__focus-ring"></div>

        <ui-progress-circular
            class="ui-button__progress"
            disable-transition

            :color="progressColor"
            :size="18"
            :stroke="4.5"

            v-if="loading"
        ></ui-progress-circular>

        <ui-ripple-ink v-if="!disableRipple && !disabled"></ui-ripple-ink>

        <ui-popover
            contain-focus
            ref="dropdown"

            :append-to-body="appendDropdownToBody"
            :constrain-to-scroll-parent="constrainDropdownToScrollParent"
            :position="dropdownPosition"
            :open-on="openDropdownOn"

            @close="onDropdownClose"
            @open="onDropdownOpen"

            v-if="hasDropdown"
        >
            <slot name="dropdown"></slot>
        </ui-popover>

        <ui-tooltip
            :open-on="openTooltipOn"
            :position="tooltipPosition"

            v-if="tooltip"
        >{{ tooltip }}</ui-tooltip>
    </component>
</template>

<script>
import UiIcon from './UiIcon.vue';
import UiPopover from './UiPopover.vue';
import UiProgressCircular from './UiProgressCircular.vue';
import UiRippleInk from './UiRippleInk.vue';
import UiTooltip from './UiTooltip.vue';

export default {
    name: 'ui-button',

    props: {
        type: {
            type: String,
            default: 'primary' // 'primary' or 'secondary'
        },
        buttonType: String,
        href: String,
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
            default: 'bottom-start'
        },
        appendDropdownToBody: {
            type: Boolean,
            default: true
        },
        constrainDropdownToScrollParent: {
            type: Boolean,
            default: true
        },
        openDropdownOn: {
            type: String,
            default: 'click' // 'click', 'hover', 'focus', or 'always'
        },
        tooltip: String,
        openTooltipOn: String,
        tooltipPosition: String,
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
                `ui-button--type-${this.type}`,
                `ui-button--color-${this.color}`,
                `ui-button--icon-position-${this.iconPosition}`,
                `ui-button--size-${this.size}`,
                { 'is-anchor': this.isAnchor },
                { 'is-raised': this.raised },
                { 'is-loading': this.loading },
                { 'is-disabled': this.disabled || this.loading },
                { 'has-dropdown': this.hasDropdown }
            ];
        },

        isAnchor() {
            return this.href !== undefined;
        },

        progressColor() {
            if (this.color === 'default' || this.type === 'secondary') {
                return 'black';
            }

            return 'white';
        }
    },

    methods: {
        onClick(e) {
            this.$emit('click', e);
        },

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
        UiProgressCircular,
        UiRippleInk,
        UiTooltip
    }
};
</script>

<style lang="scss">
@import './styles/imports';

.ui-button {
    align-items: center;
    background: none;
    border-radius: $ui-default-border-radius;
    border: none;
    cursor: default;
    display: inline-flex;
    font-family: $font-stack;
    font-size: $ui-button-font-size;
    font-weight: 600;
    height: $ui-button-height;
    justify-content: center;
    letter-spacing: 0.02em;
    line-height: 1;
    min-width: rem(80px);
    outline: none;
    overflow: hidden;
    padding: 0;
    padding-left: rem(16px);
    padding-right: rem(16px);
    position: relative;
    text-transform: uppercase;
    touch-action: manipulation; // IE

    // Remove the Firefox dotted outline
    &::-moz-focus-inner {
        border: 0;
    }

    &.has-focus-ring:focus,
    body[modality="keyboard"] &:focus {
        .ui-button__focus-ring::before {
            opacity: 1;
            transform: scale(1.1);
        }
    }

    &.is-anchor {
        cursor: pointer;
        text-decoration: none;

        &.is-disabled {
            cursor: default;
        }
    }

    &.is-raised {
        box-shadow: 0 0 2px rgba(black, 0.12), 0 2px 2px rgba(black, 0.2);
        transition: box-shadow 0.3s ease;

        &.has-focus-ring:focus,
        body[modality="keyboard"] &:focus {
            box-shadow: 0 0 5px rgba(black, 0.22), 0 3px 6px rgba(black, 0.3);
        }
    }

    &.is-loading {
        .ui-button__content {
            opacity: 0;
        }
    }

    &.is-disabled {
        opacity: 0.6;
    }
}

.ui-button__content {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative; // IE: prevents shifting when the button is pressed
    transition: opacity 0.3s ease;
    z-index: 1;
}

.ui-button__icon {
    margin-left: rem(-4px);
    margin-right: rem(6px);
    margin-top: rem(-2px);
}

.ui-button__dropdown-icon {
    font-size: rem(18px);
    margin-left: rem(2px);
    margin-right: rem(-6px);
}

.ui-button__focus-ring {
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

.ui-progress-circular.ui-button__progress {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
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
        margin-left: rem(6px);
        margin-right: rem(-4px);
        order: 1;
    }
}

// ================================================
// Sizes
// ================================================

.ui-button--size-small {
    font-size: $ui-button-font-size--small;
    height: $ui-button-height--small;
    padding-left: rem(12px);
    padding-right: rem(12px);

    .ui-button__icon {
        margin-left: 0;
        margin-top: 0;

        .ui-icon {
            font-size: rem(18px);
        }
    }

    .ui-button__dropdown-icon {
        margin-right: rem(-4px);
    }

    &.ui-button--icon-position-right {
        .ui-button__icon {
            margin-left: rem(6px);
            margin-right: 0;
        }
    }
}

.ui-button--size-large {
    font-size: $ui-button-font-size--large;
    height: $ui-button-height--large;
    padding-left: rem(24px);
    padding-right: rem(24px);

    .ui-button__icon {
        margin-left: rem(-4px);
        margin-right: rem(8px);
    }

    .ui-button__dropdown-icon {
        font-size: rem(24px);
        margin-left: rem(4px);
    }

    &.ui-button--icon-position-right {
        .ui-button__icon {
            margin-left: rem(8px);
            margin-right: rem(-4px);
        }
    }
}

// ================================================
// Types and colors
// ================================================

.ui-button--type-primary {
    .ui-button__focus-ring::before {
        background-color: rgba(black, 0.12);
    }

    &.ui-button--color-default {
        background-color: $md-grey-200;
        color: $primary-text-color;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: darken($md-grey-200, 7.5%);
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
    }

    &.ui-button--color-accent {
        background-color: $brand-accent-color;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: darken($brand-accent-color, 10%);
        }
    }

    &.ui-button--color-green {
        background-color: $md-green;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: darken($md-green, 10%);
        }
    }

    &.ui-button--color-orange {
        background-color: $md-orange;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: darken($md-orange, 10%);
        }
    }

    &.ui-button--color-red {
        background-color: $md-red;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: darken($md-red, 10%);
        }
    }
}

.ui-button--type-secondary {
    background-color: transparent;

    &.ui-button--color-default {
        color: $primary-text-color;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: $md-grey-200;
        }

        .ui-button__focus-ring::before {
            background-color: rgba(black, 0.12);
        }

        .ui-button__icon {
            color: $secondary-text-color;
        }
    }

    &.ui-button--color-primary {
        color: $brand-primary-color;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: rgba($brand-primary-color, 0.12);
        }

        .ui-button__focus-ring::before {
            background-color: rgba($brand-primary-color, 0.26);
        }
    }

    &.ui-button--color-accent {
        color: $brand-accent-color;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: rgba($brand-accent-color, 0.12);
        }

        .ui-button__focus-ring::before {
            background-color: rgba($brand-accent-color, 0.26);
        }
    }

    &.ui-button--color-green {
        color: $md-green-600;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: rgba($md-green-600, 0.12);
        }

        .ui-button__focus-ring::before {
            background-color: rgba($md-green-600, 0.26);
        }
    }

    &.ui-button--color-orange {
        color: $md-orange;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: rgba($md-orange, 0.12);
        }

        .ui-button__focus-ring::before {
            background-color: rgba($md-orange, 0.26);
        }
    }

    &.ui-button--color-red {
        color: $md-red;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: rgba($md-red, 0.12);
        }

        .ui-button__focus-ring::before {
            background-color: rgba($md-red, 0.26);
        }
    }
}
</style>
