<template>
    <button
        aria-label="Close"
        class="ui-close-button"
        type="button"

        :class="classes"
        :disabled="disabled"

        @click="onClick"
    >
        <div class="ui-close-button__icon">
            <ui-icon>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M18.984 6.422L13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z"/>
                </svg>
            </ui-icon>
        </div>

        <span class="ui-close-button__focus-ring"></span>

        <ui-ripple-ink v-if="!disableRipple && !disabled"></ui-ripple-ink>
    </button>
</template>

<script>
import UiIcon from './UiIcon.vue';
import UiRippleInk from './UiRippleInk.vue';

export default {
    name: 'ui-close-button',

    props: {
        size: {
            type: String,
            default: 'normal' // 'mini', small', 'normal', or 'large'
        },
        color: {
            type: String,
            default: 'black' // 'black', or 'white'
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
                `ui-close-button--size-${this.size}`,
                `ui-close-button--color-${this.color}`,
                { 'is-disabled': this.disabled || this.loading }
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
        UiRippleInk
    }
};
</script>

<style lang="scss">
@import './styles/imports';

$ui-close-button-size            : rem(36px) !default;
$ui-close-button--size-mini      : rem(24px) !default;
$ui-close-button--size-small     : rem(32px) !default;
$ui-close-button--size-large     : rem(48px) !default;

.ui-close-button {
    align-items: center;
    background-color: transparent;
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

    // Remove the Firefox dotted outline
    &::-moz-focus-inner {
        border: 0;
    }

    &:hover:not(.is-disabled) {
        background-color: rgba(black, 0.1);
    }

    body[modality="keyboard"] &:focus {
        .ui-close-button__focus-ring {
            opacity: 1;
            transform: scale(1);
        }
    }

    &.is-disabled {
        opacity: 0.6;
    }
}

.ui-close-button__icon {
    color: currentColor;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; // IE: prevents shifting when the button is pressed
    width: 100%; // Firefox: needs the width reset for Flexbox centering
    z-index: 1;
}

.ui-close-button__focus-ring {
    background-color: rgba(black, 0.15);
    border-radius: 50%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transform-origin: center;
    transform: scale(0);
    transition: transform 0.3s ease, opacity 0.3s ease;
}

// ================================================
// Sizes
// ================================================

.ui-close-button--size-mini {
    &,
    .ui-close-button__focus-ring {
        height: $ui-close-button--size-mini;
        width: $ui-close-button--size-mini;
    }

    .ui-icon {
        font-size: rem(18px);
    }
}

.ui-close-button--size-small {
    &,
    .ui-close-button__focus-ring {
        height: $ui-close-button--size-small;
        width: $ui-close-button--size-small;
    }

    .ui-icon {
        font-size: rem(18px);
    }
}

.ui-close-button--size-normal {
    &,
    .ui-close-button__focus-ring {
        height:$ui-close-button-size;
        width:$ui-close-button-size;
    }

    .ui-icon {
        font-size: rem(20px);
    }
}

.ui-close-button--size-large {
    &,
    .ui-close-button__focus-ring {
        height: $ui-close-button--size-large;
        width: $ui-close-button--size-large;
    }

    .ui-icon {
        font-size: rem(24px);
    }
}

// ================================================
// Colors
// ================================================

.ui-close-button--color-black {
    color: rgba(black, 0.38);

    body[modality="keyboard"] &:focus,
    &:hover:not(.is-disabled) {
        .ui-close-button__icon {
            color: $primary-text-color;
        }
    }
}

.ui-close-button--color-white {
    color: white;
}
</style>
