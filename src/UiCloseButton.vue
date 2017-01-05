<template>
    <button
        aria-label="Close"
        class="ui-close-button"
        ref="button"
        type="button"

        :class="classes"
        :disabled="disabled"
    >
        <div class="ui-close-button__icon">
            <span class="ui-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.984 6.422L13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z"/></svg>
            </span>
        </div>

        <ui-ripple-ink trigger="button" v-if="!disableRipple && !disabled"></ui-ripple-ink>
    </button>
</template>

<script>
import UiRippleInk from './UiRippleInk.vue';

export default {
    name: 'ui-close-button',

    props: {
        size: {
            type: String,
            default: 'normal' // 'small', 'normal', or 'large'
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
                'ui-close-button--size-' + this.size,
                'ui-close-button--color-' + this.color,
                { 'is-disabled': this.disabled || this.loading }
            ];
        }
    },

    components: {
        UiRippleInk
    }
};
</script>

<style lang="sass">
@import '~styles/imports';

.ui-close-button {
    align-items: center;
    background-color: transparent;
    background: none;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: inline-flex;
    height: 36px;
    justify-content: center;
    margin: 0;
    outline: none;
    overflow: hidden;
    padding: 0;
    position: relative;
    width: 36px;

    // Fix for border radius not clipping internal content of positioned elements (Chrome/Opera)
    // -webkit-mask-image: -webkit-radial-gradient(circle, white, black);
    // -webkit-mask-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC");

    // Remove the Firefox dotted outline
    &::-moz-focus-inner {
        border: 0;
    }

    body[modality="keyboard"] &:focus,
    &:hover:not(.is-disabled) {
        background-color: rgba(black, 0.1);
    }

    &.is-disabled {
        cursor: default;
        opacity: 0.6;
    }
}

.ui-close-button__icon {
    width: 100%; // Firefox: needs the width and height reset for flexbox centering
    height: initial;
}

// ================================================
// Sizes
// ================================================

.ui-close-button--size-small {
    height: 32px;
    width: 32px;

    .ui-icon {
        font-size: 18px;
    }
}

.ui-close-button--size-normal {
    .ui-icon {
        font-size: 20px;
    }
}

.ui-close-button--size-large {
    height: 48px;
    width: 48px;
}

// ================================================
// Colors
// ================================================

.ui-close-button--color-black {
    body[modality="keyboard"] &:focus,
    &:hover:not(.is-disabled) {
        .ui-close-button__icon {
            color: $primary-text-color;
        }
    }

    body[modality="keyboard"] &:focus {
        border: 2px solid rgba(black, 0.25);
    }

    .ui-close-button__icon {
        color: rgba(black, 0.38);
    }
}

.ui-close-button--color-white {
    body[modality="keyboard"] &:focus,
    &:hover:not(.is-disabled) {
        .ui-close-button__icon {
            color: white;
        }
    }

    body[modality="keyboard"] &:focus {
        border: 2px solid rgba(white, 0.8);
    }

    .ui-close-button__icon {
        color: $secondary-text-color;
    }
}
</style>
