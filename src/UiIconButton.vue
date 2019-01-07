<template>
    <component
        class="ui-icon-button"

        :aria-label="ariaLabel || tooltip"
        :class="classes"
        :disabled="disabled || loading"
        :href="isAnchor ? (disabled ? null : href) : null"
        :is="isAnchor ? 'a' : 'button'"
        :type="isAnchor ? null : buttonType"

        @click="onClick"
    >
        <div class="ui-icon-button__icon" v-if="icon || $slots.default">
            <slot>
                <ui-icon :icon="icon"></ui-icon>
            </slot>
        </div>

        <div class="ui-icon-button__focus-ring"></div>

        <ui-progress-circular
            class="ui-icon-button__progress"

            :color="progressColor"
            :size="size === 'large' ? 24 : 18"
            :stroke="4.5"

            v-if="loading"
        ></ui-progress-circular>

        <ui-ripple-ink v-if="!disableRipple && !disabled"></ui-ripple-ink>

        <ui-popover
            constain-focus
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
    name: 'ui-icon-button',

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
            default: 'normal' // 'mini', 'small', normal', or 'large'
        },
        icon: String,
        ariaLabel: String,
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
                `ui-icon-button--type-${this.type}`,
                `ui-icon-button--color-${this.color}`,
                `ui-icon-button--size-${this.size}`,
                { 'is-anchor': this.isAnchor },
                { 'is-loading': this.loading },
                { 'is-disabled': this.disabled || this.loading },
                { 'has-dropdown': this.hasDropdown }
            ];
        },

        isAnchor() {
            return this.href !== undefined;
        },

        progressColor() {
            if (this.type === 'primary') {
                if (this.color === 'default' || this.color === 'black') {
                    return 'black';
                }

                return 'white';
            }

            if (this.color === 'white') {
                return 'white';
            }

            return 'black';
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

$ui-icon-button-size            : rem(36px) !default;
$ui-icon-button--size-mini      : rem(24px) !default;
$ui-icon-button--size-small     : rem(32px) !default;
$ui-icon-button--size-large     : rem(48px) !default;

.ui-icon-button {
    align-items: center;
    background: none;
    border-radius: 50%;
    border: none;
    cursor: default;
    display: inline-flex;
    justify-content: center;
    margin: 0;
    outline: none;
    overflow: hidden;
    padding: 0;
    position: relative;

    // Fix for border radius not clipping internal content of positioned elements (Chrome/Opera)
    -webkit-mask-image: -webkit-radial-gradient(circle, white, black);

    &,
    .ui-icon-button__focus-ring {
        height: $ui-icon-button-size;
        width: $ui-icon-button-size;
    }

    body[modality="keyboard"] &:focus {
        .ui-icon-button__focus-ring {
            opacity: 1;
            transform: scale(1);
        }
    }

    // Remove the Firefox dotted outline
    &::-moz-focus-inner {
        border: 0;
    }

    &.is-anchor {
        cursor: pointer;
        text-decoration: none;

        &.is-disabled {
            cursor: default;
        }
    }

    &.is-loading {
        .ui-icon-button__icon {
            opacity: 0;
        }
    }

    &.is-disabled {
        opacity: 0.6;
    }
}

.ui-icon-button__icon {
    align-items: center;
    color: currentColor;
    display: flex;
    height: initial;
    justify-content: center;
    opacity: 1;
    position: relative;
    transition-delay: 0.1s;
    transition: opacity 0.2s ease;
    width: 100%; // Firefox: needs the width and height reset for flexbox centering
    z-index: 1;

    .ui-icon {
        display: block;
    }
}

.ui-icon-button__focus-ring {
    border-radius: 50%;
    height: $ui-icon-button-size;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transform-origin: center;
    transform: scale(0);
    transition: transform 0.3s ease, opacity 0.3s ease;
    width: $ui-icon-button-size;
}

.ui-progress-circular.ui-icon-button__progress {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
}

// ================================================
// Sizes
// ================================================

.ui-icon-button--size-mini {
    &,
    .ui-icon-button__focus-ring {
        height: $ui-icon-button--size-mini;
        width: $ui-icon-button--size-mini;
    }

    .ui-icon {
        font-size: rem(18px);
    }
}

.ui-icon-button--size-small {
    &,
    .ui-icon-button__focus-ring {
        height: $ui-icon-button--size-small;
        width: $ui-icon-button--size-small;
    }

    .ui-icon {
        font-size: rem(18px);
    }
}

.ui-icon-button--size-large {
    &,
    .ui-icon-button__focus-ring {
        height: $ui-icon-button--size-large;
        width: $ui-icon-button--size-large;
    }
}

// ================================================
// Colors
// ================================================

.ui-icon-button--color-black,
.ui-icon-button--color-white {
    background-color: transparent;

    &:hover:not(.is-disabled),
    &.has-dropdown-open {
        background-color: rgba(black, 0.1);
    }

    .ui-icon-button__focus-ring {
        background-color: rgba(black, 0.12);
    }
}

.ui-icon-button--color-black {
    color: $secondary-text-color;
}

.ui-icon-button--color-white {
    color: white;
}

// ================================================
// Types
// ================================================

.ui-icon-button--type-primary {
    &.ui-icon-button--color-default {
        color: $primary-text-color;
        background-color: $md-grey-200;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: darken($md-grey-200, 7.5%);
        }

        .ui-icon-button__focus-ring {
            background-color: darken($md-grey-200, 12%);
        }

        .ui-ripple-ink__ink {
            opacity: 0.2;
        }
    }

    &.ui-icon-button--color-primary,
    &.ui-icon-button--color-accent,
    &.ui-icon-button--color-green,
    &.ui-icon-button--color-orange,
    &.ui-icon-button--color-red {
        color: white;

        .ui-ripple-ink__ink {
            opacity: 0.4;
        }
    }

    &.ui-icon-button--color-primary {
        background-color: $brand-primary-color;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: darken($brand-primary-color, 10%);
        }

        .ui-icon-button__focus-ring {
            background-color: darken($brand-primary-color, 12%);
        }
    }

    &.ui-icon-button--color-accent {
        background-color: $brand-accent-color;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: darken($brand-accent-color, 10%);
        }

        .ui-icon-button__focus-ring {
            background-color: darken($brand-accent-color, 12%);
        }
    }

    &.ui-icon-button--color-green {
        background-color: $md-green;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: darken($md-green, 10%);
        }

        .ui-icon-button__focus-ring {
            background-color: darken($md-green, 12%);
        }
    }

    &.ui-icon-button--color-orange {
        background-color: $md-orange;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: darken($md-orange, 10%);
        }

        .ui-icon-button__focus-ring {
            background-color: darken($md-orange, 12%);
        }
    }

    &.ui-icon-button--color-red {
        background-color: $md-red;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: darken($md-red, 10%);
        }

        .ui-icon-button__focus-ring {
            background-color: darken($md-red, 12%);
        }
    }
}

.ui-icon-button--type-secondary {
    &.ui-icon-button--color-default {
        color: $secondary-text-color;

        &:hover:not(.is-disabled),
        &.has-dropdown-open,
        &.has-focus-ring:focus,
        body[modality="keyboard"] &:focus {
            color: $primary-text-color;
        }

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: rgba(black, 0.1);
        }

        .ui-icon-button__focus-ring {
            background-color: rgba(black, 0.26);
        }
    }

    &.ui-icon-button--color-primary {
        color: $brand-primary-color;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: rgba($brand-primary-color, 0.12);
        }

        .ui-icon-button__focus-ring {
            background-color: rgba($brand-primary-color, 0.26);
        }
    }

    &.ui-icon-button--color-accent {
        color: $brand-accent-color;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: rgba($brand-accent-color, 0.12);
        }

        .ui-icon-button__focus-ring {
            background-color: rgba($brand-accent-color, 0.26);
        }
    }

    &.ui-icon-button--color-green {
        color: $md-green-600;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: rgba($md-green-600, 0.12);
        }

        .ui-icon-button__focus-ring {
            background-color: rgba($md-green-600, 0.26);
        }
    }

    &.ui-icon-button--color-orange {
        color: $md-orange;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: rgba($md-orange, 0.12);
        }

        .ui-icon-button__focus-ring {
            background-color: rgba($md-orange, 0.26);
        }
    }

    &.ui-icon-button--color-red {
        color: $md-red;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: rgba($md-red, 0.12);
        }

        .ui-icon-button__focus-ring {
            background-color: rgba($md-red, 0.26);
        }
    }
}
</style>
