<template>
    <div class="ui-preloader" :class="{ 'is-loading' : show }">
        <div
            class="ui-preloader__progressbar"
            role="progressbar"

            :aria-busy="show ? 'true' : false"
        ></div>
    </div>
</template>

<script>
export default {
    name: 'ui-preloader',

    props: {
        show: {
            type: Boolean,
            required: true
        }
    }
};
</script>

<style lang="scss">
@import './styles/imports';

$ui-preloader-duration  : 3s !default;
$ui-preloader-height    : rem(3px) !default;

$ui-preloader-color-1   : #159756 !default; // green
$ui-preloader-color-2   : #da4733 !default; // red
$ui-preloader-color-3   : #3b78e7 !default; // blue
$ui-preloader-color-4   : #fdba2c !default; // orange

.ui-preloader {
    position: relative;
    width: 100%;

    &.is-loading {
        .ui-preloader__progressbar {
            opacity: 1;
            padding-top: $ui-preloader-height;
        }
    }
}

.ui-preloader__progressbar {
    animation: ui-preloader-background linear $ui-preloader-duration infinite;
    background-color: $ui-preloader-color-1;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition-duration: 0.3s;
    transition-property: opacity, padding-top;
    transition-timing-function: ease;
    width: 100%;
    overflow: hidden;

    &::before,
    &::after {
        animation: ui-preloader-front linear $ui-preloader-duration infinite;
        content: '';
        display: block;
        height: $ui-preloader-height;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 1;
    }

    &::before {
        right: 50%;
        transform-origin: right;
    }

    &::after {
        left: 50%;
        transform-origin: left;
    }
}

@keyframes ui-preloader-background {
    0%,
    24.9% {
        background-color: $ui-preloader-color-1;
    }

    25%,
    49.9% {
        background-color: $ui-preloader-color-2;
    }

    50%,
    74.9% {
        background-color: $ui-preloader-color-3;
    }

    75%,
    100% {
        background-color: $ui-preloader-color-4;
    }
}

@keyframes ui-preloader-front {
    0% {
        transform: scaleX(0);
        background-color: $ui-preloader-color-2;
    }

    24.9% {
        transform: scaleX(0.5);
        background-color: $ui-preloader-color-2;
    }

    25% {
        transform: scaleX(0);
        background-color: $ui-preloader-color-3;
    }

    49.9% {
        transform: scaleX(0.5);
        background-color: $ui-preloader-color-3;
    }

    50% {
        transform: scaleX(0);
        background-color: $ui-preloader-color-4;
    }

    74.9% {
        transform: scaleX(0.5);
        background-color: $ui-preloader-color-4;
    }

    75% {
        transform: scaleX(0);
        background-color: $ui-preloader-color-1;
    }

    100% {
        transform: scaleX(0.5);
        background-color: $ui-preloader-color-1;
    }
}
</style>
