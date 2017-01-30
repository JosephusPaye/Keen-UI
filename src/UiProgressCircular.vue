<template>
    <transition :name="disableTransition ? null : 'ui-progress-circular--transition-fade'">
        <div
            class="ui-progress-circular"

            :class="classes"
            :style="{ 'width': size + 'px', 'height': size + 'px' }"
        >
            <!-- Alternative circle rendering to explore: http://jsfiddle.net/6e3QJ/29/ -->
            <svg
                class="ui-progress-circular__determinate"
                role="progressbar"

                :aria-valuemax="100"
                :aria-valuemin="0"
                :aria-valuenow="progress"
                :height="size"
                :width="size"

                v-if="type === 'determinate'"
            >
                <circle
                    class="ui-progress-circular__determinate-path"
                    fill="transparent"
                    stroke-dashoffset="0"

                    :cx="size / 2"
                    :cy="size / 2"
                    :r="radius"
                    :stroke-dasharray="strokeDashArray"
                    :style="{ 'stroke-dashoffset': strokeDashOffset, 'stroke-width': calculatedStroke }"
                ></circle>
            </svg>

            <svg
                class="ui-progress-circular__indeterminate"
                role="progressbar"
                viewBox="25 25 50 50"

                :aria-valuemax="100"
                :aria-valuemin="0"

                v-else
            >
                <circle
                    class="ui-progress-circular__indeterminate-path"
                    cx="50"
                    cy="50"
                    fill="none"
                    r="20"
                    stroke-miterlimit="10"

                    :stroke-width="calculatedStroke"
                ></circle>
            </svg>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'ui-progress-circular',

    props: {
        type: {
            type: String,
            default: 'indeterminate' // 'indeterminate' or 'determinate'
        },
        color: {
            type: String,
            default: 'primary' // 'primary', 'accent', multi-color', 'black', or 'white'
        },
        progress: {
            type: Number,
            default: 0
        },
        size: {
            type: Number,
            default: 32
        },
        stroke: Number,
        autoStroke: {
            type: Boolean,
            default: true
        },
        disableTransition: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        classes() {
            return [
                `ui-progress-circular--color-${this.color}`,
                `ui-progress-circular--type-${this.type}`
            ];
        },

        strokeDashArray() {
            const circumference = 2 * Math.PI * this.radius;

            // Use first 3 decimal places, rounded as appropriate
            return Math.round(circumference * 1000) / 1000;
        },

        strokeDashOffset() {
            const progress = this.moderateProgress(this.progress);
            const circumference = 2 * Math.PI * this.radius;

            return ((100 - progress) / 100) * circumference;
        },

        radius() {
            const stroke = this.stroke ? this.stroke : 4;
            return (this.size - stroke) / 2;
        },

        calculatedStroke() {
            if (this.stroke) {
                return this.stroke;
            }

            if (this.autoStroke) {
                return parseInt(this.size / 8, 10);
            }

            return 4;
        }
    },

    methods: {
        moderateProgress(progress) {
            if (isNaN(progress) || progress < 0) {
                return 0;
            }

            if (progress > 100) {
                return 100;
            }

            return progress;
        }
    }
};
</script>

<style lang="scss">
@import './styles/imports';

$ui-progress-indeterminate-rotation-duration    : 0.7s !default;
$ui-progress-indeterminate-color-duration       : 6s !default;
$ui-progress-determinate-transition-duration    : 0.3s !default;

.ui-progress-circular {
    position: relative;
}

.ui-progress-circular__determinate {
    transform: rotate(270deg);
}

.ui-progress-circular__determinate-path {
    stroke-dashoffset: 0;
    transition: stroke-dashoffset $ui-progress-determinate-transition-duration;
}

.ui-progress-circular__indeterminate {
    animation: ui-progress-circular-rotate $ui-progress-indeterminate-rotation-duration linear infinite;
    bottom: 0;
    height: 100%;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    transform-origin: center center;
    width: 100%;
}

.ui-progress-circular__indeterminate-path {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -35px;
    stroke-linecap: round;
}

// ================================================
// Colors
// ================================================

.ui-progress-circular--color-multi-color {
    .ui-progress-circular__determinate-path {
        stroke: $brand-primary-color;
    }

    .ui-progress-circular__indeterminate-path {
        animation: ui-progress-circular-color $ui-progress-indeterminate-color-duration ease-in-out infinite;
    }
}

.ui-progress-circular--color-primary {
    .ui-progress-circular__determinate-path,
    .ui-progress-circular__indeterminate-path {
        stroke: $brand-primary-color;
    }
}

.ui-progress-circular--color-accent {
    .ui-progress-circular__determinate-path,
    .ui-progress-circular__indeterminate-path {
        stroke: $brand-accent-color;
    }
}

.ui-progress-circular--color-black {
    .ui-progress-circular__determinate-path,
    .ui-progress-circular__indeterminate-path {
        stroke: $md-grey-900;
    }
}

.ui-progress-circular--color-white {
    .ui-progress-circular__determinate-path,
    .ui-progress-circular__indeterminate-path {
        stroke: white;
    }
}

// ================================================
// Toggle transition
// ================================================

.ui-progress-circular--transition-fade-enter-active,
.ui-progress-circular--transition-fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.ui-progress-circular--transition-fade-enter,
.ui-progress-circular--transition-fade-leave-active {
    opacity: 0;
    transform: scale(0);
}

// ================================================
// Animations
// ================================================

@keyframes ui-progress-circular-rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes ui-progress-circular-color {
    0%,
    100% {
        stroke: $md-red;
    }

    40% {
        stroke: $md-blue;
    }

    66% {
        stroke: $md-green;
    }

    80%,
    90% {
        stroke: $md-orange;
    }
}
</style>
