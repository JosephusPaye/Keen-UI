<template>
    <button
        class="ui-icon-button" :class="styleClasses" :aria-label="ariaLabel || tooltip"
        :type="buttonType" v-disabled="disabled || loading" v-el:button
    >
        <ui-icon
            class="ui-icon-button-icon" :icon="icon" v-show="!loading"
        ></ui-icon>

        <ui-progress-circular
            class="ui-icon-button-spinner" :color="spinnerColor" :size="24" :stroke="4.5"
            disable-transition v-show="loading"
        ></ui-progress-circular>

        <ui-ripple-ink v-if="!hideRippleInk && !disabled" :trigger="$els.button"></ui-ripple-ink>

        <ui-tooltip
            :trigger="$els.button" :content="tooltip" :position="tooltipPosition" v-if="tooltip"
            :open-on="openTooltipOn"
        ></ui-tooltip>

        <ui-menu
            class="ui-button-dropdown-menu" :trigger="$els.button" :options="menuOptions"
            :show-icons="showMenuIcons" :show-secondary-text="showMenuSecondaryText"
            :open-on="openDropdownOn" @option-selected="menuOptionSelect"
            :dropdown-position="dropdownPosition" v-if="hasDropdownMenu"
        ></ui-menu>

        <ui-popover
            :trigger="$els.button" :open-on="openDropdownOn" :dropdown-position="dropdownPosition"
            v-if="hasPopover"
        >
            <slot name="popover"></slot>
        </ui-popover>
    </button>
</template>

<script>
import UiIcon from './UiIcon.vue';
import UiMenu from './UiMenu.vue';
import UiPopover from './UiPopover.vue';
import UiProgressCircular from './UiProgressCircular.vue';

import disabled from './directives/disabled';

import HasDropdown from './mixins/HasDropdown';
import ShowsTooltip from './mixins/ShowsTooltip';
import ShowsRippleInk from './mixins/ShowsRippleInk';

export default {
    name: 'ui-icon-button',

    props: {
        type: {
            type: String,
            default: 'normal', // 'normal' or 'flat' or 'clear'
            coerce(type) {
                return 'ui-icon-button-' + type;
            }
        },
        buttonType: {
            type: String,
            default: 'button'
        },
        color: {
            type: String,
            default: 'default', // 'default', 'primary', 'accent', 'success', 'warning', or 'danger'
            coerce(color) {
                return 'color-' + color;
            }
        },
        icon: {
            type: String,
            required: true
        },
        ariaLabel: String,
        loading: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        styleClasses() {
            let classes = [this.type, this.color];

            if (this.hasDropdown) {
                classes.push('ui-dropdown');
            }

            return classes;
        },

        spinnerColor() {
            if (this.color === 'color-default' || this.color === 'color-black') {
                return 'black';
            }

            return 'white';
        }
    },

    components: {
        UiIcon,
        UiMenu,
        UiPopover,
        UiProgressCircular
    },

    mixins: [
        HasDropdown,
        ShowsTooltip,
        ShowsRippleInk
    ],

    directives: {
        disabled
    }
};
</script>

<style lang="stylus">
@import './styles/imports';
@require './styles/components/drop';

.ui-icon-button {
    background: none;
    outline: none;
    border: none;
    position: relative;
    overflow: hidden;

    // Fix for border radius not clipping internal content of positioned elements (Chrome/Opera)
    -webkit-mask-image: -webkit-radial-gradient(circle, white, black);
    // -webkit-mask-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC");

    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    border-radius: 50%;

    &::-moz-focus-inner {
      border: 0;
    }

    &[disabled] {
        opacity: 0.6;
    }

    &:not([disabled]) {
        cursor: pointer;
    }

    .ui-dropdown-menu {
        display: none;
    }
}

.ui-icon-button-normal {
    &.color-primary,
    &.color-accent,
    &.color-success,
    &.color-warning,
    &.color-danger {
        color: white;

        .ui-ripple-ink .ripple.held {
            opacity: 0.7;
        }
    }

    &.color-default {
        background-color: $md-grey-200;

        &:hover:not([disabled]),
        &.dropdown-open {
            background-color: darken($md-grey-200, 7.5%);
        }

        body[modality="keyboard"] &:focus {
            background-color: darken($md-grey-200, 20%);
        }

        .ui-ripple-ink .ripple.held {
            opacity: 0.2;
        }

        .ui-icon-button-icon  {
            color: $md-dark-text;
        }
    }

    &.color-primary {
        background-color: $md-brand-primary;

        &:hover:not([disabled]),
        &.dropdown-open {
            background-color: darken($md-brand-primary, 15%);
        }

        body[modality="keyboard"] &:focus {
            background-color: darken($md-brand-primary, 25%);
        }
    }

    &.color-accent {
        background-color: $md-brand-accent;

        &:hover:not([disabled]),
        &.dropdown-open {
            background-color: darken($md-brand-accent, 15%);
        }

        body[modality="keyboard"] &:focus {
            background-color: darken($md-brand-accent, 25%);
        }
    }

    &.color-success {
        background-color: $md-green;

        &:hover:not([disabled]),
        &.dropdown-open {
            background-color: darken($md-green, 15%);
        }

        body[modality="keyboard"] &:focus {
            background-color: darken($md-green, 25%);
        }
    }

    &.color-warning {
        background-color: $md-orange;

        &:hover:not([disabled]),
        &.dropdown-open {
            background-color: darken($md-orange, 15%);
        }

        body[modality="keyboard"] &:focus {
            background-color: darken($md-orange, 25%);
        }
    }

    &.color-danger {
        background-color: $md-red;

        &:hover:not([disabled]),
        &.dropdown-open {
            background-color: darken($md-red, 15%);
        }

        body[modality="keyboard"] &:focus {
            background-color: darken($md-red, 25%);
        }
    }
}

.ui-icon-button-flat {
    &.color-default,
    &.color-primary,
    &.color-accent,
    &.color-success,
    &.color-warning,
    &.color-danger {
        &:hover:not([disabled]),
        &.dropdown-open {
            background-color: darken($md-grey-200, 3%);
        }
    }

    &.color-default {
        color: $md-dark-text;

        body[modality="keyboard"] &:focus {
            border: 2px solid darken($md-grey-200, 25%);
        }

        .ui-icon-button-icon {
            color: $md-dark-text;
        }
    }

    &.color-primary {
        color: $md-brand-primary;

        body[modality="keyboard"] &:focus {
            border: 2px solid $md-brand-primary;
        }

        .ui-icon-button-icon {
            color: $md-brand-primary;
        }
    }

    &.color-accent {
        color: $md-brand-accent;

        body[modality="keyboard"] &:focus {
            border: 2px solid $md-brand-accent;
        }

        .ui-icon-button-icon {
            color: $md-brand-accent;
        }
    }

    &.color-success {
        color: $md-green-600;

        body[modality="keyboard"] &:focus {
            border: 2px solid $md-green-600;
        }

        .ui-icon-button-icon {
            color: $md-green-600;
        }
    }

    &.color-warning {
        color: $md-orange;

        body[modality="keyboard"] &:focus {
            border: 2px solid $md-orange;
        }

        .ui-icon-button-icon {
            color: $md-orange;
        }
    }

    &.color-danger {
        color: $md-red;

        body[modality="keyboard"] &:focus {
            border: 2px solid $md-red;
        }

        .ui-icon-button-icon {
            color: $md-red;
        }
    }
}

.ui-icon-button-clear {
    background-color: transparent;

    body[modality="keyboard"] &:focus,
    &:hover:not([disabled]),
    &.dropdown-open {
        background-color: alpha(black, 0.1);
    }

    &.color-white {
        color: $md-dark-secondary;

        body[modality="keyboard"] &:focus {
            border: 2px solid alpha(white, 0.8);
        }

        .ui-icon-button-icon {
            color: white;
        }
    }

    &.color-black {
        color: $md-dark-secondary;

        body[modality="keyboard"] &:focus {
            border: 2px solid alpha(black, 0.25);
        }

        .ui-icon-button-icon {
            color: $md-dark-secondary;
        }
    }
}

.ui-icon-button-icon {
    width: 100%; // Firefox: needs the width and height reset for flexbox centering
    height: initial;
}
</style>
