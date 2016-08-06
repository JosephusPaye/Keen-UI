<template>
    <button
        class="ui-button" :class="styleClasses" :type="buttonType" v-disabled="disabled || loading"
        v-el:button
    >
        <div class="ui-button-content" :class="{ 'invisible': loading }">
            <ui-icon
                class="ui-button-icon" :class="{ 'position-right': iconRight }" :icon="icon"
                v-if="showIcon"
            ></ui-icon>

            <div class="ui-button-text">
                <slot>
                    <span v-text="text"></span>
                </slot>
            </div>

            <ui-icon
                class="ui-button-dropdown-icon" icon="&#xE5C5;"
                v-if="!iconRight && showDropdownIcon && (hasDropdownMenu || hasPopover)"
            ></ui-icon>
        </div>

        <ui-progress-circular
            class="ui-button-spinner" :color="spinnerColor" :size="18" :stroke="4.5"
            disable-transition v-show="loading"
        ></ui-progress-circular>

        <ui-ripple-ink v-if="!hideRippleInk && !disabled" :trigger="$els.button"></ui-ripple-ink>

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
import ShowsRippleInk from './mixins/ShowsRippleInk';

export default {
    name: 'ui-button',

    props: {
        type: {
            type: String,
            default: 'normal', // 'normal' or 'flat'
            coerce(type) {
                return 'ui-button-' + type;
            }
        },
        buttonType: {
            type: String,
            default: 'submit' // HTML default
        },
        color: {
            type: String,
            default: 'default', // 'default', 'primary', 'accent', 'success', 'warning', or 'danger'
            coerce(color) {
                return 'color-' + color;
            }
        },
        raised: {
            type: Boolean,
            default: false
        },
        text: String,
        icon: String,
        iconRight: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        showDropdownIcon: {
            type: Boolean,
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        styleClasses() {
            let classes = [this.type, this.color];

            if (this.raised) {
                classes.push('ui-button-raised');
            }

            if (this.hasDropdownMenu || this.hasPopover) {
                classes.push('has-dropdown');
            }

            return classes;
        },

        spinnerColor() {
            if (this.color === 'color-default' || this.type === 'ui-button-flat') {
                return 'black';
            }

            return 'white';
        },

        showIcon() {
            return Boolean(this.icon);
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

.ui-button {
    font-family: $font-stack;
    @extends $md-text-button;
    line-height: 1;

    background: none;
    overflow: hidden;
    outline: none;
    border: none;

    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    touch-action: manipulation; // IE
    cursor: default;

    border-radius: 2px;
    padding: 8px 16px;
    min-width: 80px;
    height: 40px;

    &::-moz-focus-inner {
      border: 0;
    }

    &.autofocus:focus,
    body[modality="keyboard"] &:focus {
        outline-style: solid;
    }

    &[disabled] {
        opacity: 0.6;
    }

    &:not([disabled]) {
        cursor: pointer;
    }

    .ui-button-dropdown-menu {
        display: none;
    }

    .ui-button-spinner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

.ui-button-raised {
    box-shadow: 0 0 2px alpha(black, 0.12), 0 2px 2px alpha(black, 0.2);
    transition: box-shadow 0.1s;

    &.autofocus:focus,
    body[modality="keyboard"] &:focus {
        outline: none;
        box-shadow: 0 0 5px alpha(black, 0.22), 0 3px 6px alpha(black, 0.3);
    }
}

.ui-button-normal {
    &.autofocus:focus,
    body[modality="keyboard"] &:focus {
        outline-width: 2px;
        outline-offset: 2px;
    }

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
        color: $md-dark-text;
        background-color: $md-grey-200;

        &:hover:not([disabled]),
        &.dropdown-open {
            background-color: darken($md-grey-200, 7.5%);
        }

        &.autofocus:focus,
        body[modality="keyboard"] &:focus {
            background-color: darken($md-grey-200, 15%);
            outline-color: darken($md-grey-200, 30%);
        }

        .ui-ripple-ink .ripple.held {
            opacity: 0.2;
        }

        .ui-button-icon,
        .ui-button-dropdown-icon {
            color: $md-dark-secondary;
        }
    }

    &.color-primary {
        background-color: $md-brand-primary;

        &:hover:not([disabled]),
        &.dropdown-open {
            background-color: darken($md-brand-primary, 15%);
        }

        &.autofocus:focus,
        body[modality="keyboard"] &:focus {
            background-color: darken($md-brand-primary, 20%);
            outline-color: darken($md-brand-primary, 20%);
        }
    }

    &.color-accent {
        background-color: $md-brand-accent;

        &:hover:not([disabled]),
        &.dropdown-open {
            background-color: darken($md-brand-accent, 15%);
        }

        &.autofocus:focus,
        body[modality="keyboard"] &:focus {
            background-color: darken($md-brand-accent, 20%);
            outline-color: darken($md-brand-accent, 20%);
        }
    }

    &.color-success {
        background-color: $md-green;

        &:hover:not([disabled]),
        &.dropdown-open {
            background-color: darken($md-green, 15%);
        }

        &.autofocus:focus,
        body[modality="keyboard"] &:focus {
            background-color: darken($md-green, 20%);
            outline-color: darken($md-green, 20%);
        }
    }

    &.color-warning {
        background-color: $md-orange;

        &:hover:not([disabled]),
        &.dropdown-open {
            background-color: darken($md-orange, 15%);
        }

        &.autofocus:focus,
        body[modality="keyboard"] &:focus {
            background-color: darken($md-orange, 20%);
            outline-color: darken($md-orange, 20%);
        }
    }

    &.color-danger {
        background-color: $md-red;

        &:hover:not([disabled]),
        &.dropdown-open {
            background-color: darken($md-red, 15%);
        }

        &.autofocus:focus,
        body[modality="keyboard"] &:focus {
            background-color: darken($md-red, 20%);
            outline-color: darken($md-red, 20%);
        }
    }
}

.ui-button-flat {
    background-color: transparent;

    &:hover:not([disabled]),
    &.dropdown-open {
        background-color: darken($md-grey-200, 3%);
    }

    &.autofocus:focus,
    body[modality="keyboard"] &:focus {
        outline-width: 2px;
        outline-offset: 0;
    }

    &.color-default {
        color: $md-dark-text;

        .ui-button-icon {
            color: $md-dark-secondary;
        }

        &.autofocus:focus,
        body[modality="keyboard"] &:focus {
            outline-color: darken($md-grey-200, 25%);
        }
    }

    &.color-primary {
        color: $md-brand-primary;
    }

    &.color-accent {
        color: $md-brand-accent;
    }

    &.color-success {
        color: $md-green-600;
    }

    &.color-warning {
        color: $md-orange;
    }

    &.color-danger {
        color: $md-red;
    }
}

.ui-button-icon {
    font-size: 18px;
    margin-right: 4px;
    margin-left: -4px;

    &.position-right {
        order: 1;
        margin-left: 4px;
        margin-right: -4px;
    }
}

.ui-button-content {
    display: flex;
    align-items: center;
    justify-content: center;

    &.invisible {
        visibility: hidden;
    }
}

.ui-button-dropdown-icon {
    font-size: 18px;
    margin-right: -8px;
    margin-left: 1px;
}

.ui-button-group {
    display: flex;
    flex-wrap: wrap;
}
</style>
