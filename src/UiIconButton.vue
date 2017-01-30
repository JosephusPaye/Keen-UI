<template>
    <button
        class="ui-icon-button"
        ref="button"

        :aria-label="ariaLabel || tooltip"
        :class="classes"
        :disabled="disabled || loading"
        :type="buttonType"

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

        <ui-tooltip
            trigger="button"

            :open-on="openTooltipOn"
            :position="tooltipPosition"

            v-if="tooltip"
        >{{ tooltip }}</ui-tooltip>
    </button>
</template>

<script>
import UiIcon from './UiIcon.vue';
import UiPopover from './UiPopover.vue';
import UiProgressCircular from './UiProgressCircular.vue';
import UiRippleInk from './UiRippleInk.vue';
import UiTooltip from './UiTooltip.vue';

import config from './config';

export default {
    name: 'ui-icon-button',

    props: {
        type: {
            type: String,
            default: 'primary' // 'primary' or 'secondary'
        },
        buttonType: {
            type: String,
            default: 'button'
        },
        color: {
            type: String,
            default: 'default' // 'default', 'primary', 'accent', 'green', 'orange', or 'red'
        },
        size: {
            type: String,
            default: 'normal' // 'small', normal', or 'large'
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
            default: 'bottom left'
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
            default: config.data.disableRipple
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
                { 'is-loading': this.loading },
                { 'is-disabled': this.disabled || this.loading },
                { 'has-dropdown': this.hasDropdown }
            ];
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

$ui-icon-button-size            : rem-calc(36px) !default;
$ui-icon-button--size-small     : rem-calc(32px) !default;
$ui-icon-button--size-large     : rem-calc(48px) !default;

.ui-icon-button {
    align-items: center;
    background: none;
    border-radius: 50%;
    border: none;
    cursor: pointer;
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

    &.is-loading {
        .ui-icon-button__icon {
            opacity: 0;
        }
    }

    &.is-disabled {
        cursor: default;
        opacity: 0.6;
    }
}

.ui-icon-button__icon {
    height: initial;
    opacity: 1;
    position: relative;
    transition-delay: 0.1s;
    transition: opacity 0.2s ease;
    width: 100%; // Firefox: needs the width and height reset for flexbox centering
    z-index: 1;
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
    transition: transform 0.2s ease, opacity 0.2s ease;
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

.ui-icon-button--size-small {
    &,
    .ui-icon-button__focus-ring {
        height: $ui-icon-button--size-small;
        width: $ui-icon-button--size-small;
    }

    .ui-icon {
        font-size: rem-calc(18px);
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
        background-color: rgba(black, 0.15);
    }
}

.ui-icon-button--color-black {
    color: $secondary-text-color;

    .ui-icon-button__icon {
        color: $secondary-text-color;
    }
}

.ui-icon-button--color-white {
    color: $secondary-text-color;

    .ui-icon-button__icon {
        color: white;
    }
}

// ================================================
// Types
// ================================================

.ui-icon-button--type-primary {
    &.ui-icon-button--color-default {
        background-color: $md-grey-200;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: darken($md-grey-200, 7.5%);
        }

        .ui-icon-button__focus-ring {
            background-color: darken($md-grey-200, 15%);
        }

        .ui-ripple-ink__ink {
            opacity: 0.2;
        }

        .ui-icon-button__icon  {
            color: $primary-text-color;
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
            background-color: darken($brand-primary-color, 15%);
        }
    }

    &.ui-icon-button--color-accent {
        background-color: $brand-accent-color;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: darken($brand-accent-color, 10%);
        }

        .ui-icon-button__focus-ring {
            background-color: darken($brand-accent-color, 15%);
        }
    }

    &.ui-icon-button--color-green {
        background-color: $md-green;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: darken($md-green, 10%);
        }

        .ui-icon-button__focus-ring {
            background-color: darken($md-green, 15%);
        }
    }

    &.ui-icon-button--color-orange {
        background-color: $md-orange;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: darken($md-orange, 10%);
        }

        .ui-icon-button__focus-ring {
            background-color: darken($md-orange, 15%);
        }
    }

    &.ui-icon-button--color-red {
        background-color: $md-red;

        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: darken($md-red, 10%);
        }

        .ui-icon-button__focus-ring {
            background-color: darken($md-red, 15%);
        }
    }
}

.ui-icon-button--type-secondary {
    &.ui-icon-button--color-default {
        color: $primary-text-color;

        .ui-icon-button__icon {
            color: $primary-text-color;
        }
    }

    &.ui-icon-button--color-default,
    &.ui-icon-button--color-primary,
    &.ui-icon-button--color-accent,
    &.ui-icon-button--color-green,
    &.ui-icon-button--color-orange,
    &.ui-icon-button--color-red {
        &:hover:not(.is-disabled),
        &.has-dropdown-open {
            background-color: rgba(black, 0.1);
        }

        .ui-icon-button__focus-ring {
            background-color: rgba(black, 0.15);
        }
    }

    &.ui-icon-button--color-primary {
        color: $brand-primary-color;

        .ui-icon-button__icon {
            color: $brand-primary-color;
        }
    }

    &.ui-icon-button--color-accent {
        color: $brand-accent-color;

        .ui-icon-button__icon {
            color: $brand-accent-color;
        }
    }

    &.ui-icon-button--color-green {
        color: $md-green-600;

        .ui-icon-button__icon {
            color: $md-green-600;
        }
    }

    &.ui-icon-button--color-orange {
        color: $md-orange;

        .ui-icon-button__icon {
            color: $md-orange;
        }
    }

    &.ui-icon-button--color-red {
        color: $md-red;

        .ui-icon-button__icon {
            color: $md-red;
        }
    }
}
</style>
