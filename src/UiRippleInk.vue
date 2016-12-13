<template>
<div class="ui-ripple-ink" @mousedown="mousedown($event)" @touchstart="touchstart($event)">
    <transition name="ripple-ink">
        <div class="ripple" v-if="show" :style="style"></div>
    </transition>
</div>
</template>

<script>

/**
 * Adapted from rippleJS (https://github.com/samthor/rippleJS)
 * removed jQuery
 *
 * Version: 1.0.3
 */

export default {
    name: 'ui-ripple-ink',
    data() {
        return {
            show: false,
            style: null,
        }
    },
    methods: {
        mousedown(e) {
            if (e.button === 0) {
                this.ripple(e.type, e)
            }
        },
        touchstart(e) {
            if (e.changedTouches) {
                for (let i = 0; i < e.changedTouches.length; ++i) {
                    this.ripple(e.type, e.changedTouches[i])
                }
            }
        },
        ripple(eventType, e) {
            const holder = this.$el
            const prev = holder.getAttribute('data-ui-event')
            if (prev && prev !== eventType) {
                return
            }
            holder.setAttribute('data-ui-event', eventType)
            let rect = holder.getBoundingClientRect()
            let x = e.offsetX
            let y

            if (x !== undefined) {
                y = e.offsetY;
            } else {
                x = e.clientX - rect.left;
                y = e.clientY - rect.top;
            }

            let max = rect.width === rect.height ?
                rect.width * 1.412 : Math.sqrt(
                    (rect.width * rect.width) + (rect.height * rect.height)
                )
            let dim = (max * 2) + 'px';

            this.style = {
                width: dim,
                height: dim,
                marginLeft: -max + x + 'px',
                marginTop: -max + y + 'px'
            }
            const releaseEvent = eventType === 'mousedown' ? 'mouseup' : 'touchend'

            const release = () => {
                holder.removeEventListener(releaseEvent, release)
                this.show = true
                setTimeout(() => {
                    this.show = false
                    this.style = null
                    holder.removeAttribute('data-ui-event')
                }, 300)
            }
            holder.addEventListener(releaseEvent, release)
        }
    }
}
</script>

<style lang="stylus">
@import './styles/imports';

.ui-ripple-ink {
    display: block;
    overflow: hidden;
    border-radius: inherit;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    // Forces webkit to properly contain content within border-radius
    -webkit-mask-image: -webkit-radial-gradient(circle, white, black);
}

.ripple {
    position: absolute;

    pointer-events: none;
    user-select: none;

    border-radius: 50%;
    background-color: currentColor;
    background-clip: padding-box;
    transform: scale(1);
    opacity: .1;
}
.ripple-ink-enter-active {
    transition: all .3s ease-out;
}

.ripple-ink-enter{
    opacity: 0.2;
    transform: scale(0);
}

.ripple-ink-leave-active {
    opacity: 0;
    transition: all .1s ease-out
}
</style>
