<template>
<div class="ui-carousel">
    <div class="ui-carousel-wrapper-outer" ref="outerWrapper">
        <div class="ui-carousel-wrapper-inner" :style="innerStyle">
            <div class="ui-carousel-item" :class="`item-${num}`" v-for="num of itemNum" ref="item" :style="itemStyle">
                <slot :name="num"></slot>
            </div>
        </div>
    </div>
    <div class="ui-carousel-controls" v-if="dots">
        <div class="ui-carousel-pagination" :class="{disable: disable}">
            <div class="ui-carousel-page" v-for="num of itemNum" :class="{'active': num === activeNum}"
                    @click="go(num)">
                <span class="ui-carousel-border"></span>
                <span class="ui-carousel-inner-dot"></span>
            </div>
        </div>
    </div>
    <div class="ui-carousel-button">
        <ui-button type="flat" raised color="primary" @click.native="prev">Prev</ui-button>
        <ui-button type="flat" raised color="primary" @click.native="next">Next</ui-button>
    </div>
</div>
</template>

<script>
import UiButton from './UiButton.vue'
export default {
    props: {
        type: {
            type: String,
            default: 'basic'
        },
        dots: {
            type: Boolean,
            default: true
        },
        disable: {
            type: Boolean,
            default: false
        },
        itemNum: {
            type: Number,
            required: true
        },
        controllerNum: {
            type: Number,
        }
    },
    data() {
        return {
            outerWidth: 0,
            innerWidth: 0,
            translateX: 0,
            activeNum: 0,
        }
    },
    computed: {
        innerStyle() {
            return {
                width: `${this.innerWidth}px`,
                left: 0,
                display: 'block',
                transition: 'all .4s ease',
                transform: `translate3d(${this.translateX}px, 0px, 0px)`
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
    },
    methods: {
        init() {
            this.outerWidth = this.$refs.outerWrapper.clientWidth
            this.innerWidth = this.itemNum * 2 * this.outerWidth
            this.activeNum = 1
        },
        show() {
            this.translateX = -this.outerWidth * (this.activeNum - 1)
        },
        next() {
            if (this.activeNum === this.itemNum) {
                this.activeNum = 1
            } else {
                this.activeNum++
            }
            this.show()
        },
        prev() {
            if (this.activeNum === 1) {
                this.activeNum = this.itemNum
            } else {
                this.activeNum--
            }
            this.show()
        },
        go(num) {
            this.activeNum = num;
            this.show(num)
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
        transform translate3d(0, 0, 0)
        &::after
            content ''
            display block
            clear both
            visibility hidden
            line-height 0
            height 0
    .ui-carousel-item
        float left
        transform translate3d(0, 0, 0)
        // min-width 1200px
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
</style>
