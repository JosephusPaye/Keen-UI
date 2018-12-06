<template>
    <button
        class="ui-fab"

        :aria-label="ariaLabel || tooltip"
        :class="classes"

        @click="onClick"
    >
        <div class="ui-fab__icon" v-if="icon || $slots.default">
            <slot>
                <ui-icon :icon="icon"></ui-icon>
            </slot>
        </div>

        <span class="ui-fab__focus-ring"></span>

        <ui-ripple-ink v-if="!disableRipple"></ui-ripple-ink>

        <ui-tooltip
            :open-on="openTooltipOn"
            :position="tooltipPosition"

            v-if="tooltip"
        >{{ tooltip }}</ui-tooltip>
    </button>
</template>

<script>
import UiIcon from './UiIcon.vue';
import UiRippleInk from './UiRippleInk.vue';
import UiTooltip from './UiTooltip.vue';

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
                `ui-fab--color-${this.color}`,
                `ui-fab--size-${this.size}`
            ];
        }
    },

    methods: {
        onClick(e) {
            this.$emit('click', e);
        }
    },

    components: {
        UiIcon,
        UiRippleInk,
        UiTooltip
    }
};
</script>

<style lang="scss">
@import './styles/imports';

$ui-fab-size--normal    : rem(56px) !default;
$ui-fab-size--small     : rem(40px) !default;

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

    body[modality="keyboard"] &:focus {
        .ui-fab__focus-ring {
            opacity: 1;
            transform: scale(1);
        }
    }

    .ui-ripple-ink {
        border-radius: 50%;
    }
}

.ui-fab__icon {
    height: initial;
    margin: 0;
    position: relative;
    width: 100%; // Firefox: needs the width and height reset for flexbox centering
    z-index: 1;
}

.ui-fab__focus-ring {
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
// Sizes
// ================================================

.ui-fab--size-normal {
    &,
    .ui-fab__focus-ring {
        height: $ui-fab-size--normal;
        width: $ui-fab-size--normal;
    }
}

.ui-fab--size-small {
    &,
    .ui-fab__focus-ring {
        width: $ui-fab-size--small;
        height: $ui-fab-size--small;
    }
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

    .ui-fab__focus-ring {
        background-color: rgba(black, 0.15);
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

    .ui-fab__focus-ring {
        background-color: darken($brand-primary-color, 10%);
    }
}

.ui-fab--color-accent {
    background-color: $brand-accent-color;

    .ui-fab__focus-ring {
        background-color: darken($brand-accent-color, 10%);
    }
}
</style>
