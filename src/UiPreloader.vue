<template>
    <div class="ui-preloader">
        <div
            class="ui-preloader-progressbar" :class="{ 'loading' : show }"
            :aria-busy="show ? 'true' : false" role="progressbar"
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

<style lang="stylus">
@import './styles/imports';

$duration = 3s;
$height = 3px;

$color-green = #159756;
$color-red = #da4733;
$color-blue = #3b78e7;
$color-yellow = #fdba2c;

.ui-preloader {
    position: relative;
    width: 100%;
}

.ui-preloader-progressbar {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: $color-green;

    animation: ui-preloader-background linear $duration infinite;
    transition-property: opacity, padding-top;
    transition-duration: 0.3s;
    transition-timing-function: ease;

    &.loading {
        opacity: 1;
        padding-top: $height;
    }

    &::before,
    &::after {
        display: block;
        position: absolute;
        top: 0;
        z-index: 1;
        width: 0;
        height: $height;
        background: #afa;
        animation: ui-preloader-front linear $duration infinite;
        content: '';
    }

    &::before {
        right: 50%;
    }

    &::after {
        left: 50%;
    }
}

@keyframes ui-preloader-background {
    0%,
    24.9% {
        background-color: $color-green;
    }

    25%,
    49.9% {
        background-color: $color-red;
    }

    50%,
    74.9% {
        background-color: $color-blue;
    }

    75%,
    100% {
        background-color: $color-yellow;
    }
}

@keyframes ui-preloader-front {
    0% {
        width: 0;
        background-color: $color-red;
    }

    24.9% {
        width: 50%;
        background-color: $color-red;
    }

    25% {
        width: 0;
        background-color: $color-blue;
    }

    49.9% {
        width: 50%;
        background-color: $color-blue;
    }

    50% {
        width: 0;
        background-color: $color-yellow;
    }

    74.9% {
        width: 50%;
        background-color: $color-yellow;
    }

    75% {
        width: 0%;
        background-color: $color-green;
    }

    100% {
        width: 50%;
        background-color: $color-green;
    }
}
</style>
