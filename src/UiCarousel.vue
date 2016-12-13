<template>
<div class="ui-carousel">
    <div class="ui-carousel-wrapper-outer" ref="outerWrapper">
        <div class="ui-carousel-wrapper-inner" :style="innerStyle">
            <transition :name="type" v-for="num of itemNum">
                <div class="ui-carousel-item" :class="`item-${num}`" ref="item" :style="itemStyle" v-show="num === activeNum" key="num">
                    <slot :name="num"></slot>
                </div>
            </transition>
        </div>
    </div>
    <div class="ui-carousel-controls" v-if="controlDot">
        <div class="ui-carousel-pagination" :class="{disable: disable}">
            <div class="ui-carousel-page" v-for="num of itemNum" :class="{'active': num === activeNum}"
                    @click="go(num)">
                <span class="ui-carousel-border"></span>
                <span class="ui-carousel-inner-dot"></span>
            </div>
        </div>
    </div>
    <div class="ui-carousel-button" v-if="controlButton">
        <ui-button type="flat" raised color="primary" @click.native="prev">Prev</ui-button>
        <ui-button type="flat" raised color="primary" @click.native="next">Next</ui-button>
    </div>
</div>
</template>

<script>
import UiButton from './UiButton.vue'
import { throttle } from 'lodash'

export default {
    props: {
        type: {
            type: String,
            default: 'basic'
        },
        autoLoop: {
            type: Boolean,
            default: true
        },
        loopTime: {
            type: Number,
            default: 10000
        },
        controlDot: {
            type: Boolean,
            default: true
        },
        controlButton: {
            type: Boolean,
            default: false
        },
        buttonType: {
            type: String,
            default: 'basic'
        },
        disable: {
            type: Boolean,
            default: false
        },
        itemNum: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            outerWidth: 0,
            innerWidth: 0,
            activeNum: 1,
        }
    },
    computed: {
        innerStyle() {
            return {
                width: `${this.innerWidth}px`,
                left: 0,
                display: 'block'
            }
        },
        itemStyle() {
            return {
                width: `${this.outerWidth}px`
            }
        }
    },
    mounted() {
        this.init()
        this.resizeThrottled = throttle(this.recaculate, 500)
        window.addEventListener('resize', this.resizeThrottled, false)
        if (this.autoLoop) {
            this.loop()
        }
    },
    destroy() {
        window.removeEventListener('resize', this.resizeThrottled)
        if (this.autoLoop) {
            this.clearLoop()
        }
    },
    methods: {
        init() {
            this.outerWidth = this.$refs.outerWrapper.clientWidth
            this.innerWidth = 2 * this.outerWidth
        },
        recaculate() {
            this.outerWidth = this.$refs.outerWrapper.clientWidth
            this.innerWidth = 2 * this.outerWidth
            this.resetLoop()
        },
        next() {
            if (this.activeNum === this.itemNum) {
                this.activeNum = 1
            } else {
                this.activeNum++
            }
        },
        prev() {
            if (this.activeNum === 1) {
                this.activeNum = this.itemNum
            } else {
                this.activeNum--
            }
        },
        go(num) {
            this.activeNum = num;

            // reset interval
            if (this.autoLoop) {
                this.resetLoop()
            }
        },
        loop() {
            this.loopInterval = setInterval(this.next, this.loopTime)
        },
        clearLoop() {
            clearInterval(this.loopInterval)
            this.loopInterval = null
        },
        resetLoop() {
            this.clearLoop()
            setTimeout(() => {
                this.loop()
            }, 500)
        }
    },
    components: {UiButton}
}
</script>

<style lang="stylus">
@import './styles/imports';
$size = 20px;
$border-width = 2px;
$transition-duration = 0.3s;

.ui-carousel
    position relative
    width 100%
    -ms-touch-action pan-y
    .ui-carousel-wrapper-outer
        overflow hidden
        position relative
        width 100%
        &.auto-height
            transition height .5s ease-in-out
    .ui-carousel-wrapper-inner
        position relative
        perspective-origin 25% center
        perspective 1200px
        transform-origin 0px center 0px
        &::after
            content ''
            display block
            clear both
            visibility hidden
            line-height 0
            height 0
    .ui-carousel-item
        float left
    .ui-carousel-item,
    .ui-carousel-wrapper-inner
        backface-visibility hidden
    .ui-carousel-controls
        margin-top 10px
        text-align center
        user-select none
        .ui-carousel-page
            display inline-block
            zoom 1
            *display inline
            cursor pointer
    .ui-carousel-pagination
        &.disable
            opacity .5
        &:not(.disable)
            .ui-carousel-page:not(.active):hover
                .ui-carousel-border
                    border $border-width solid $md-dark-secondary
    .ui-carousel-page
        position relative
        width $size
        height $size
        margin 0 7px
        &.active
            .ui-carousel-border
                border-color $md-brand-primary
            .ui-carousel-inner-dot
                background-color $md-brand-primary
                transform scale(.5)
                opacity 1
                z-index 0
    .ui-carousel-border
        position absolute
        top 0
        left 0
        width $size
        height $size
        border-radius 50%
        border $border-width solid $md-dark-hint
        background-color transparent

        transition border-color .2s
    .ui-carousel-inner-dot
        position absolute
        top 0
        left 0

        width $size
        height $size
        border-radius 50%

        background-color $md-dark-hint

        opacity 0
        z-index -1
        transform scale(1.2)

        transition-property transform, opacity, background-color
        transition-duration $transition-duration

// transition part
.basic-enter-active
    animation basicIn .4s both ease
    position absolute
.basic-leave-active
    animation basicOut .4s both ease

.fade-enter-active
    animation fadeIn .7s both ease
    position absolute
.fade-leave-active
    animation fadeOut .7s both ease

.backSlide-enter-active
    animation backSlideIn 1s both ease
    position absolute
.backSlide-leave-active
    animation backSlideOut 1s both ease

.goDown-enter-active
    animation goDown .7s both ease
    position absolute
.goDown-leave-active
    animation scaleToFade .7s both ease

.fadeUp-enter-active
    animation scaleUpFrom .5s both ease
    position absolute
.fadeUp-leave-active
    animation scaleUpTo .5s both ease

@keyframes basicIn
    0%
        transform translateX(100%)
    100%
        transform translateX(0)
@keyframes basicOut
    0%
        transform translateX(0)
    100%
        transform translateX(-100%)

@keyframes fadeIn
    0%
        opacity 0
    100%
        opacity 1
@keyframes fadeOut
    0%
        opacity 1
    100%
        opacity 0

@keyframes backSlideIn
    0%,
    25%
        opacity .5
        transform translateZ(-500px) translateX(200%)
    75%
        opacity .5
        transform translateZ(-500px)
    100%
        opacity .5
        transform translateZ(0) translateX(0)
@keyframes backSlideOut
    25%
        opacity .5
        transform translateZ(-500px)
    75%
        opacity .5
        transform translateZ(-500px) translateX(-200%)
    100%
        opacity .5
        transform translateZ(-500px) translateX(-200%)

@keyframes goDown
    from
        transform translateY(-100%)
        opacity .5
@keyframes scaleToFade
    to
        transform scale(.8)
        opacity 0

@keyframes scaleUpFrom
    from
        opacity 0
        transform scale(1.5)
@keyframes scaleUpTo
    to
        opacity 0
        transform scale(1.5)
</style>
