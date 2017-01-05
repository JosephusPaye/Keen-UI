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
                'ui-progress-linear--color-' + this.color,
                'ui-progress-linear--type-' + this.type
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

<style lang="sass">
@import '~styles/imports';

.ui-progress-linear {
    display: block;
    height: 4px;
    overflow: hidden;
    position: relative;
    transition-duration: 0.3s;
    transition-property: height, opacity;
    transition-timing-function: ease;
    width: 100%;
}

.ui-progress-linear__progress-bar {
    &.is-determinate {
        height: 4px;
        left: 0;
        position: absolute;
        top: 0;
        transform-origin: left;
        transition: transform 0.2s linear;
        width: 100%;
    }

    &.is-indeterminate {
        &::before {
            animation: ui-progress-linear-indeterminate 2.1s cubic-bezier(0.650, 0.815, 0.735, 0.395) infinite;
            background-color: inherit;
            content: '';
            height: 4px;
            left: 0;
            position: absolute;
            top: 0;
        }

        &::after {
            animation: ui-progress-linear-indeterminate-short 2.1s cubic-bezier(0.165, 0.840, 0.440, 1.000) infinite;
            animation-delay: 1.15s;
            background-color: inherit;
            content: '';
            height: 4px;
            left: 0;
            position: absolute;
            top: 0;
        }
    }
}

// ================================================
// Animations
// ================================================

@keyframes ui-progress-linear-indeterminate {
    0% {
        left: -35%;
        right: 100%;
    }

    60% {
        left: 100%;
        right: -90%;
    }

    100% {
        left: 100%;
        right: -90%;
    }
}

@keyframes ui-progress-linear-indeterminate-short {
    0% {
        left: -200%;
        right: 100%;
    }

    60% {
        left: 107%;
        right: -8%;
    }

    100% {
        left: 107%;
        right: -8%;
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
