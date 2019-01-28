<template>
    <transition name="ui-progress-linear--transition-fade">
        <div class="ui-progress-linear" :class="classes">
            <div
                class="ui-progress-linear__progress-bar is-determinate"
                role="progressbar"

                :aria-valuemax="100"
                :aria-valuemin="0"
                :aria-valuenow="moderatedProgress"
                :style="{ 'transform': `scaleX(${moderatedProgress / 100})` }"

                v-if="type === 'determinate'"
            ></div>

            <div
                class="ui-progress-linear__progress-bar is-indeterminate"
                role="progressbar"

                :aria-valuemax="100"
                :aria-valuemin="0"

                v-else
            ></div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'ui-progress-linear',

    props: {
        type: {
            type: String,
            default: 'indeterminate' // 'determinate' or 'indeterminate'
        },
        color: {
            type: String,
            default: 'primary' // 'primary', 'accent', 'black' or 'white'
        },
        progress: {
            type: Number,
            default: 0
        }
    },

    computed: {
        classes() {
            return [
                `ui-progress-linear--color-${this.color}`,
                `ui-progress-linear--type-${this.type}`
            ];
        },

        moderatedProgress() {
            if (this.progress < 0) {
                return 0;
            }

            if (this.progress > 100) {
                return 100;
            }

            return this.progress;
        }
    }
};
</script>

<style lang="scss">
@import './styles/imports';

$ui-progress-linear-height : rem(4px) !default;

.ui-progress-linear {
    display: block;
    height: $ui-progress-linear-height;
    overflow: hidden;
    position: relative;
    transition-duration: 0.3s;
    transition-property: height, opacity;
    transition-timing-function: ease;
    width: 100%;
}

.ui-progress-linear__progress-bar {
    height: $ui-progress-linear-height;
    left: 0;
    position: absolute;
    top: 0;
    transform-origin: left;
    width: 100%;

    &.is-determinate {
        transition: transform 0.2s ease;
    }

    &.is-indeterminate {
        animation: ui-progress-linear-indeterminate 2.1s linear infinite;
        transform: translateX(0) scaleX(0);
        transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
}

// ================================================
// Animations
// ================================================

@keyframes ui-progress-linear-indeterminate {
    // First half: short in, long out
    0% {
        transform: translateX(0) scaleX(0);
    }

    25% {
        transform: translateX(50%) scaleX(0.6);
    }

    49% {
        transform: translateX(110%) scaleX(0);
    }

    // Second half: long in, short out
    50% {
        transform: translateX(0) scaleX(0);
    }

    75% {
        transform: translateX(0) scaleX(0.6);
    }

    100% {
        transform: translateX(110%) scaleX(0);
    }
}

// ================================================
// Toggle transition
// ================================================

.ui-progress-linear--transition-fade-enter-active,
.ui-progress-linear--transition-fade-leave-active {
    transition: opacity 0.3s ease;
}

.ui-progress-linear--transition-fade-enter,
.ui-progress-linear--transition-fade-leave-active {
    opacity: 0;
}

// ================================================
// Colors
// ================================================

.ui-progress-linear--color-primary {
    background-color: rgba($brand-primary-color, 0.4);

    .ui-progress-linear__progress-bar {
        background-color: $brand-primary-color;
    }
}

.ui-progress-linear--color-accent {
    background-color: rgba($brand-accent-color, 0.4);

    .ui-progress-linear__progress-bar {
        background-color: $brand-accent-color;
    }
}

.ui-progress-linear--color-black {
    background-color: rgba($md-grey-700, 0.4);

    .ui-progress-linear__progress-bar {
        background-color: $md-grey-700;
    }
}

.ui-progress-linear--color-white {
    background-color: rgba(white, 0.4);

    .ui-progress-linear__progress-bar {
        background-color: white;
    }
}
</style>
