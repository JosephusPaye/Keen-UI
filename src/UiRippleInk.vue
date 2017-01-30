<template>
    <div class="ui-ripple-ink"></div>
</template>

<script>
/**
 * Adapted from rippleJS (https://github.com/samthor/rippleJS, version 1.0.3)
 * removed jQuery, convert to ES6
 */
import classlist from './helpers/classlist';

const startRipple = function (eventType, event) {
    let holder = event.currentTarget || event.target;

    if (holder && !classlist.has(holder, 'ui-ripple-ink')) {
        holder = holder.querySelector('.ui-ripple-ink');
    }

    if (!holder) {
        return;
    }

    // Store the event use to generate this ripple on the holder: don't allow
    // further events of different types until we're done. Prevents double
    // ripples from mousedown/touchstart.
    const prev = holder.getAttribute('data-ui-event');

    if (prev && prev !== eventType) {
        return;
    }

    holder.setAttribute('data-ui-event', eventType);

    // Create and position the ripple
    const rect = holder.getBoundingClientRect();
    let x = event.offsetX;
    let y;

    if (x === undefined) {
        x = event.clientX - rect.left;
        y = event.clientY - rect.top;
    } else {
        y = event.offsetY;
    }

    const ripple = document.createElement('div');
    let max;

    if (rect.width === rect.height) {
        max = rect.width * 1.412;
    } else {
        max = Math.sqrt(
            (rect.width * rect.width) + (rect.height * rect.height)
        );
    }

    const dim = (max * 2) + 'px';

    ripple.style.width = dim;
    ripple.style.height = dim;
    ripple.style.marginLeft = -max + x + 'px';
    ripple.style.marginTop = -max + y + 'px';

    // Activate/add the element
    ripple.className = 'ui-ripple-ink__ink';
    holder.appendChild(ripple);

    setTimeout(() => {
        classlist.add(ripple, 'is-held');
    }, 0);

    const releaseEvent = (eventType === 'mousedown' ? 'mouseup' : 'touchend');

    const handleRelease = function () {
        document.removeEventListener(releaseEvent, handleRelease);

        classlist.add(ripple, 'is-done');

        // Larger than the animation duration in CSS
        setTimeout(() => {
            holder.removeChild(ripple);

            if (holder.children.length === 0) {
                holder.removeAttribute('data-ui-event');
            }
        }, 650);
    };

    document.addEventListener(releaseEvent, handleRelease);
};

const handleMouseDown = function (e) {
    // Trigger on left click only
    if (e.button === 0) {
        startRipple(e.type, e);
    }
};

const handleTouchStart = function (e) {
    if (e.changedTouches) {
        for (let i = 0; i < e.changedTouches.length; ++i) {
            startRipple(e.type, e.changedTouches[i]);
        }
    }
};

export default {
    name: 'ui-ripple-ink',

    props: {
        trigger: {
            type: String,
            required: true
        }
    },

    watch: {
        trigger() {
            this.initialize();
        }
    },

    mounted() {
        this.$nextTick(() => {
            this.initialize();
        });
    },

    beforeDestroy() {
        const triggerEl = this.trigger ? this.$parent.$refs[this.trigger] : null;

        if (!triggerEl) {
            return;
        }

        triggerEl.removeEventListener('mousedown', handleMouseDown);
        triggerEl.removeEventListener('touchstart', handleTouchStart);
    },

    methods: {
        initialize() {
            const triggerEl = this.trigger ? this.$parent.$refs[this.trigger] : null;

            if (!triggerEl) {
                return;
            }

            triggerEl.addEventListener('touchstart', handleTouchStart);
            triggerEl.addEventListener('mousedown', handleMouseDown);
        }
    }
};
</script>

<style lang="scss">
@import './styles/imports';

.ui-ripple-ink {
    border-radius: inherit;
    bottom: 0;
    display: block;
    left: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;

    // Forces webkit to properly contain content within border-radius
    -webkit-mask-image: -webkit-radial-gradient(circle, white, black);
}

.ui-ripple-ink__ink {
    background-clip: padding-box;
    background-color: currentColor;
    border-radius: 50%;
    height: 0;
    opacity: 0.2;
    pointer-events: none;
    position: absolute;
    transform: scale(0);
    transition: transform 0.6s ease-out, opacity 0.6s ease-out;
    user-select: none;
    width: 0;

    &.is-held {
        opacity: 0.4;
        transform: scale(1);
    }

    &.is-done {
        opacity: 0!important;
    }
}
</style>
