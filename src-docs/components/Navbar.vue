<template>
    <div class="nav nav-root">
        <div class="sidebar desktop">
            <div class="brand">
                <h1 class="title">
                    Keen UI
                    <a
                        class="version" title="View release notes"
                        href="https://github.com/JosephusPaye/Keen-UI/releases/tag/v0.8.9"
                        target="_blank" rel="noopener"
                    >v0.8.9</a>
                </h1>
            </div>

            <div class="subhead">
                <p>A lightweight but complete collection of essential UI components written with <a href="http://vuejs.org/" target="_blank" rel="noopener" title="VueJS">Vue</a> and inspired by <a href="https://www.google.com/design/spec/material-design/introduction.html" target="_blank" rel="noopener">Material Design</a>.</p>

                <p class="m-b-0">Created by <a href="https://twitter.com/JosephusPaye" target="_blank" rel="noopener" title="@JosephusPaye">Josephus Paye II</a>.</p>


                    <a class="ui-button ui-button-normal color-default" href="https://github.com/JosephusPaye/Keen-UI/" target="_blank" rel="noopener">Github</a>

            </div>

            <ul class="menu">
                <div class="menu-header">Components</div>
                <router-link
                    class="menu-item" v-for="item in menu" v-text="item.text" :to="`/${item.id}`"
                    exact
                ></router-link>
            </ul>
        </div>

        <transition name="sidebar">
            <div
                class="sidebar-overlay" v-show="value"
                @click="$emit('input', false)" key="overlay"
            ></div>
        </transition>
        <transition name="sidebar">
            <div class="sidebar mobile" v-show="value" key="sidebar">
                <div class="brand">
                    <h1 class="title">
                        Keen UI
                        <a
                            class="version" title="View release notes"
                            href="https://github.com/JosephusPaye/Keen-UI/releases/tag/v0.8.9"
                            target="_blank" rel="noopener"
                        >v0.8.9</a>
                    </h1>
                </div>

                <div class="subhead">
                    <p>A lightweight but complete collection of essential UI components written with <a href="http://vuejs.org/" target="_blank" rel="noopener" title="VueJS">Vue</a> and inspired by <a href="https://www.google.com/design/spec/material-design/introduction.html" target="_blank" rel="noopener">Material Design</a>.</p>

                    <p class="m-b-0">Created by <a href="https://twitter.com/JosephusPaye" target="_blank" rel="noopener" title="@JosephusPaye">Josephus Paye II</a>.</p>

                    <a class="ui-button ui-button-normal color-default" href="https://github.com/JosephusPaye/Keen-UI/" target="_blank" rel="noopener">Github</a>
                </div>

                <ul class="menu">
                    <div class="menu-header">Components</div>

                    <router-link
                        class="menu-item" v-for="item in menu" v-text="item.text" :to="`/${item.id}`"
                        @click.native="$emit('input',false)" exact
                    ></router-link>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
import UiButton from '../../src/UiButton.vue'
let menu = [
    {
        id: 'alert',
        text: 'UiAlert'
    }, {
        id: 'autocomplete',
        text: 'UiAutocomplete'
    }, {
        id: 'button',
        text: 'UiButton'
    },{
        id: 'carousel',
        text: 'UiCarousel'
    },{
        id: 'checkbox',
        text: 'UiCheckbox'
    }, {
        id: 'collapsible',
        text: 'UiCollapsible'
    }, {
        id: 'confirm',
        text: 'UiConfirm'
    }, {
        id: 'fab',
        text: 'UiFab'
    }, {
        id: 'icon-button',
        text: 'UiIconButton'
    }, {
        id: 'icon',
        text: 'UiIcon'
    }, {
        id: 'menu',
        text: 'UiMenu'
    }, {
        id: 'modal',
        text: 'UiModal'
    }, {
        id: 'popover',
        text: 'UiPopover'
    }, {
        id: 'preloader',
        text: 'UiPreloader'
    }, {
        id: 'progress-circular',
        text: 'UiProgressCircular'
    }, {
        id: 'progress-linear',
        text: 'UiProgressLinear'
    }, {
        id: 'radio',
        text: 'UiRadio'
    }, {
        id: 'rating',
        text: 'UiRating & UiRatingPreview'
    }, {
        id: 'rippleInk',
        text: 'UiRippleInk'
    }, {
        id: 'select',
        text: 'UiSelect'
    }, {
        id: 'slider',
        text: 'UiSlider'
    }, {
        id: 'snackbar',
        text: 'UiSnackbar & UiSnackbarContainer'
    }, {
        id: 'switch',
        text: 'UiSwitch'
    }, {
        id: 'tabs',
        text: 'UiTabs'
    }, {
        id: 'textbox',
        text: 'UiTextbox'
    }, {
        id: 'toolbar',
        text: 'UiToolbar'
    }, {
        id: 'tooltip',
        text: 'UiTooltip'
    }
].sort((itemA, itemB) => {
    return itemA.id > itemB.id ? 1 : -1
})
export default {
    props: {
        value: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            menu
        }
    },
    components: {
        UiButton
    }
}
</script>

<style lang="stylus">
@import '../../src/styles/imports.styl'

.sidebar-overlay
    width 100vw
    height 100vh
    position fixed
    z-index $z-index-nav-drawer - 1
    background-color alpha(black, 0.4)
    opacity 1

.mobile
    left 0

.sidebar-enter-active,
.sidebar-leave-active
    transition all .3s ease


.sidebar-enter,
.sidebar-leave-active

    &.mobile
        left -272px

    &.sidebar-overlay
        opacity 0

.sidebar
    width 272px
    height 100vh
    flex-shrink 0
    overflow-y auto
    position fixed
    background-color white
    box-shadow 0 0 3px alpha(black, 0.35), 0 2px 2px alpha(black, 0.2)
    z-index 5

    &.mobile
        z-index $z-index-nav-drawer

    .brand
        height 64px
        padding 0 16px
        color $md-dark-text
        border-bottom: 1px solid #EEE
        display flex
        align-items center

        .title
            font-size 28px
            font-weight normal
            margin 0

        .version
            margin-left 8px
            font-size 0.5em
            display inline-block
            vertical-align: super

    .subhead
        padding 16px
        font-size 14px
        padding-top 12px
        line-height 1.71em
        color alpha(black, 0.75)
        border-bottom 1px solid #EEE

        .ui-button
            margin-top 16px

        p
            &:first-child
                margin-top 0

            &:last-child
                margin-bottom 0

    .menu
        margin 0
        padding 0
        padding-bottom 16px

        .menu-header
            padding 12px 16px
            font-weight 500
            font-size 16px

        .menu-item
            display block
            padding 8px 16px
            padding-left 40px
            color $md-dark-text
            cursor pointer
            text-decoration none

            &:focus,
            &:hover
                background-color $md-grey-200

            &.router-link-active
                background-color $md-grey-100
                color $md-blue-700
                font-weight 500
</style>
