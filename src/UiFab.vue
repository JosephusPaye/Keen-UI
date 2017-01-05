<template>
    <button
        class="ui-fab"
        ref="button"

        :aria-label="ariaLabel || tooltip"
        :class="classes"
    >
        <div class="ui-fab__icon" v-if="icon || $slots.default">
            <slot>
                <ui-icon :icon="icon"></ui-icon>
            </slot>
        </div>

        <ui-ripple-ink trigger="button" v-if="!disableRipple"></ui-ripple-ink>

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
import UiTooltip from './UiTooltip.vue';
import UiRippleInk from './UiRippleInk.vue';

export default {
    name: 'ui-fab',

    props: {
        size: {
            type: String,
            default: 'normal' // 'normal' or 'small'
        },
        color: {
            type: String,
            default: 'default' // 'default', primary', or 'accent'
        },
        icon: String,
        ariaLabel: String,
        tooltip: String,
        openTooltipOn: String,
        tooltipPosition: String,
        disableRipple: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        classes() {
            return [
                'ui-fab--color-' + this.color,
                'ui-fab--size-' + this.size
            ];
        }
    },

    components: {
        UiIcon,
        UiTooltip,
        UiRippleInk
    }
};
</script>

<style lang="sass">
@import '~styles/imports';

.ui-fab {
    align-items: center;
    border-radius: 50%;
    border: none;
    box-shadow: 0 2px 5px 0 rgba(black, 0.2), 0 2px 10px 0 rgba(black, 0.16);
    cursor: pointer;
    display: flex;
    justify-content: center;
    outline: none;
    position: relative;
    transition: box-shadow 0.3s ease;
    z-index: $z-index-fab;

    // Remove the Firefox dotted outline
    &::-moz-focus-inner {
        border: 0;
    }

    &:hover,
    body[modality="keyboard"] &:focus {
        box-shadow: 0 8px 17px 0 rgba(black, 0.25), 0 6px 20px 0 rgba(black, 0.2);
    }

    .ui-ripple-ink {
        border-radius: 50%;
    }
}

.ui-fab__icon {
    margin: 0;
    width: 100%; // Firefox: needs the width and height reset for flexbox centering
    height: initial;
}

// ================================================
// Sizes
// ================================================

.ui-fab--size-normal {
    width: 56px;
    height: 56px;
}

.ui-fab--size-small {
    width: 40px;
    height: 40px;
}

// ================================================
// Colors
// ================================================

.ui-fab--color-default {
    background-color: white;
    color: $secondary-text-color;

    .ui-fab__icon {
        color: $secondary-text-color;
    }

    .ui-ripple-ink__ink {
        opacity: 0.2;
    }
}

.ui-fab--color-primary,
.ui-fab--color-accent {
    color: white;

    .ui-fab__icon {
        color: white;
    }

    .ui-ripple-ink__ink {
        opacity: 0.4;
    }
}

.ui-fab--color-primary {
    background-color: $brand-primary-color;

    body[modality="keyboard"] &:focus {
        background-color: darken($brand-primary-color, 10%);
    }
}

.ui-fab--color-accent {
    background-color: $brand-accent-color;

    body[modality="keyboard"] &:focus {
        background-color: darken($brand-accent-color, 10%);
    }
}
</style>
