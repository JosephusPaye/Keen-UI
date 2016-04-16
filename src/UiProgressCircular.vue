<template>
    <div
        class="ui-progress-circular" :style="{ 'width': size + 'px', 'height': size + 'px' }"
        v-show="show" :transition="disableTransition ? null : 'ui-progress-circular-toggle'"
    >
        <svg
            class="ui-progress-circular-determinate" :width="size" :height="size"
            role="progressbar" :aria-valuemin="0" :aria-valuemax="100" :aria-valuenow="value"
            v-if="type === 'determinate'"
        >
            <circle
                class="ui-progress-circular-determinate-path" :class="[color]" :r="radius"
                :cx="size / 2" :cy="size / 2" fill="transparent" :stroke-dasharray="strokeDashArray"
                stroke-dashoffset="0"

                :style="{ 'stroke-dashoffset': strokeDashOffset, 'stroke-width': stroke }"
            ></circle>
        </svg>

        <svg
            class="ui-progress-circular-indeterminate" viewBox="25 25 50 50"
            role="progressbar" :aria-valuemin="0" :aria-valuemax="100" v-else
        >
            <circle
                class="ui-progress-circular-indeterminate-path" :class="[color]" cx="50" cy="50"
                r="20" fill="none" stroke-miterlimit="10" :stroke-width="stroke"
            >
        </svg>
    </div>
</template>

<script>
export default {
    name: 'ui-progress-circular',

    props: {
        show: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'indeterminate', // 'indeterminate' or 'determinate'
        },
        color: {
            type: String,
            default: 'primary' // 'primary', 'accent', multi-color', 'black', or 'white'
        },
        value: {
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
        strokeDashArray() {
            let circumference = 2 * Math.PI * this.radius;

            // Get first 3 decimal places, rounding as appropriate
            return Math.round(circumference * 1000) / 1000;
        },

        strokeDashOffset() {
            let value = this.moderateValue(this.value);
            let circumference = 2 * Math.PI * this.radius;

            return ((100 - value) / 100) * circumference;
        },

        radius() {
            return (this.size - this.stroke) / 2;
        }
    },

    created() {
        if (!this.stroke) {
            if (this.autoStroke) {
                this.stroke = parseInt(this.size / 8, 10);
            } else {
                this.stroke = 4;
            }
        }
    },

    methods: {
        moderateValue(value) {
            if (isNaN(value) || value < 0) {
                return 0;
            }

            if (value > 100) {
                return 100;
            }

            return value;
        }
    },
};
</script>

<style lang="stylus">
@import './styles/imports';

$indeterminate-rotation-duration = 1.4s;
$indeterminate-color-duration = 6s;
$determinate-transition-duration = 0.3s;

.ui-progress-circular {
    position: relative;

    .ui-progress-circular-determinate {
        transform: rotate(270deg);

        .ui-progress-circular-determinate-path {
            stroke-dashoffset: 0;
            transition: stroke-dashoffset $determinate-transition-duration ease;

            &.primary,
            &.multi-color {
                stroke: $md-brand-primary;
            }

            &.accent {
                stroke: $md-brand-accent;
            }

            &.black {
                stroke: $md-grey-900;
            }

            &.white {
                stroke: white;
            }
        }
    }

    .ui-progress-circular-indeterminate {
        animation: ui-progress-circular-rotate $indeterminate-rotation-duration linear infinite;
        transform-origin: center center;

        width: 100%;
        height: 100%;
        margin: auto;

        position: absolute;
        top: 0;
        bottom: 0;

        left: 0;
        right: 0;
    }

    .ui-progress-circular-indeterminate-path {
        stroke-dasharray: 1,200;
        stroke-dashoffset: 0;
        stroke-linecap: round;

        animation: ui-progress-circular-dash $indeterminate-rotation-duration ease-in-out infinite;

        &.multi-color {
            animation: ui-progress-circular-dash $indeterminate-rotation-duration ease-in-out infinite,
                       ui-progress-circular-color $indeterminate-color-duration ease-in-out infinite;
        }

        &.primary {
            stroke: $md-brand-primary;
        }

        &.accent {
            stroke: $md-brand-accent;
        }

        &.black {
            stroke: $md-grey-900;
        }

        &.white {
            stroke: white;
        }
    }
}

.ui-progress-circular-toggle-transition {
    opacity: 1;
    transform: scale(1);

    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-property: transform, opacity;
}

.ui-progress-circular-toggle-enter,
.ui-progress-circular-toggle-leave {
    opacity: 0;
    transform: scale(0);
}

@keyframes ui-progress-circular-rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes ui-progress-circular-dash {
    0% {
        stroke-dasharray: 1,200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89,200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89,200;
        stroke-dashoffset: -124px;
    }
}

@keyframes ui-progress-circular-color {
    100%, 0% {
        stroke: $md-red; // #d62d20;
    }
    40% {
        stroke: $md-blue; // #0057e7;
    }
    66% {
        stroke: $md-green; // #008744;
    }
    80%, 90% {
        stroke: $md-orange; // #ffa700;
    }
}
</style>
