<template>
    <div
        class="ui-progress-linear" :class="[color]" v-show="show"
        transition="ui-progress-linear-toggle"
    >
        <div
            class="ui-progress-linear-determinate" :style="{ 'width': progress + '%' }"
            role="progressbar" :aria-valuemin="0" :aria-valuemax="100" :aria-valuenow="value"
            v-if="type === 'determinate'"
        ></div>

        <div
            class="ui-progress-linear-indeterminate" role="progressbar" :aria-valuemin="0"
            :aria-valuemax="100" v-else
        ></div>
    </div>
</template>

<script>
export default {
    name: 'ui-progress-linear',

    props: {
        show: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'indeterminate', // 'determinate' or 'indeterminate'
        },
        color: {
            type: String,
            default: 'primary', // 'primary', 'accent', 'black' or 'white'
            coerce(color) {
                return 'color-' + color;
            }
        },
        value: {
            type: Number,
            coerce: Number,
            default: 0
        }
    },

    computed: {
        progress() {
            if (this.value < 0) {
                return 0;
            }

            if (this.value > 100) {
                return 100;
            }

            return this.value;
        }
    }
};
</script>

<style lang="stylus">
@import './styles/imports';

.ui-progress-linear {
    position: relative;
    overflow: hidden;
    display: block;
    height: 4px;
    width: 100%;

    transition-property: height, opacity;
    transition-timing-function: ease;
    transition-duration: 0.3s;

    &.color-primary {
        background-color: alpha($md-brand-primary, 0.4);

        .ui-progress-linear-determinate,
        .ui-progress-linear-indeterminate {
            background-color: $md-brand-primary;
        }
    }

    &.color-accent {
        background-color: alpha($md-brand-accent, 0.4);

        .ui-progress-linear-determinate,
        .ui-progress-linear-indeterminate {
            background-color: $md-brand-accent;
        }
    }

    &.color-black {
        background-color: alpha($md-grey-700, 0.4);

        .ui-progress-linear-determinate,
        .ui-progress-linear-indeterminate {
            background-color: $md-grey-700;
        }
    }

    &.color-white {
        background-color: alpha(white, 0.4);

        .ui-progress-linear-determinate,
        .ui-progress-linear-indeterminate {
            background-color: white;
        }
    }
}

.ui-progress-linear-determinate {
    transition: width 0.3s linear;
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
}

.ui-progress-linear-indeterminate {
    &:before {
        background-color: inherit;
        will-change: left, right;
        position: absolute;
        content: '';
        bottom: 0;
        top: 0;
        left:0;

        animation: ui-progress-linear-indeterminate 2.1s cubic-bezier(0.650, 0.815, 0.735, 0.395) infinite;
    }

    &:after {
        background-color: inherit;
        will-change: left, right;
        position: absolute;
        content: '';
        bottom: 0;
        top: 0;
        left:0;

        animation: ui-progress-linear-indeterminate-short 2.1s cubic-bezier(0.165, 0.840, 0.440, 1.000) infinite;

        animation-delay: 1.15s;
    }
}

.ui-progress-linear-toggle-leave,
.ui-progress-linear-toggle-enter {
    opacity: 0;
    height: 0;
}

@keyframes ui-progress-linear-indeterminate {
    0% {
        left: -35%;
        right:100%;
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
</style>
