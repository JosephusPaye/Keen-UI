<template>
    <div class="ui-ripple-ink"></div>
</template>

<script>
/**
 * Adapted from rippleJS (https://github.com/samthor/rippleJS)
 * removed jQuery
 *
 * Version: 1.0.3
 */
import classlist from './helpers/classlist';

var startRipple = function startRipple(eventType, event) {
    var holder = event.currentTarget;

    if (holder && !classlist.has(holder, 'ui-ripple-ink')) {
        holder = holder.querySelector('.ui-ripple-ink');
    }

    if (!holder) {
        return;
    }

    // Store the event use to generate this ripple on the holder: don't allow
    // further events of different types until we're done. Prevents double-
    // ripples from mousedown/touchstart.
    var prev = holder.getAttribute('data-ui-event');

    if (prev && prev !== eventType) {
        return;
    }

    holder.setAttribute('data-ui-event', eventType);

    // Create and position the ripple
    var rect = holder.getBoundingClientRect();
    var x = event.offsetX;
    var y;

    if (x !== undefined) {
        y = event.offsetY;
    } else {
        x = event.clientX - rect.left;
        y = event.clientY - rect.top;
    }

    var ripple = document.createElement('div');
    var max;

    if (rect.width === rect.height) {
        max = rect.width * 1.412;
    } else {
        max = Math.sqrt(
            (rect.width * rect.width) + (rect.height * rect.height)
        );
    }

    var dim = (max * 2) + 'px';

    ripple.style.width = dim;
    ripple.style.height = dim;
    ripple.style.marginLeft = -max + x + 'px';
    ripple.style.marginTop = -max + y + 'px';

    // Activate/add the element
    ripple.className = 'ripple';
    holder.appendChild(ripple);

    setTimeout(function() {
        classlist.add(ripple, 'held');
    }, 0);

    var releaseEvent = (eventType === 'mousedown' ? 'mouseup' : 'touchend');

    var release = function() {
        document.removeEventListener(releaseEvent, release);

        classlist.add(ripple, 'done');

        // Larger than the animation duration in CSS
        setTimeout(function() {
            holder.removeChild(ripple);

            if (!holder.children.length) {
                classlist.remove(holder, 'active');
                holder.removeAttribute('data-ui-event');
            }
        }, 450);
    };

    document.addEventListener(releaseEvent, release);
};

var handleMouseDown = function handleMouseDown(e) {
    // Trigger on left click only
    if (e.button === 0) {
        startRipple(e.type, e);
    }
};

var handleTouchStart = function handleTouchStart(e) {
    if (e.changedTouches) {
        for (var i = 0; i < e.changedTouches.length; ++i) {
            startRipple(e.type, e.changedTouches[i]);
        }
    }
};

export default {
    name: 'ui-ripple-ink',

    props: {
        trigger: {
            type: Element,
            required: true
        }
    },

    watch: {
        trigger() {
            this.initialize();
        }
    },

    ready() {
        this.initialize();
    },

    beforeDestory() {
        if (this.trigger) {
            this.trigger.removeEventListener('mousedown', handleMouseDown);
            this.trigger.removeEventListener('touchstart', handleTouchStart);
        }
    },

    methods: {
        initialize() {
            if (this.trigger) {
                this.trigger.addEventListener('touchstart', handleTouchStart);
                this.trigger.addEventListener('mousedown', handleMouseDown);
            }
        }
    }
};
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

.ui-ripple-ink .ripple {
    position: absolute;
    width: 0;
    height: 0;

    pointer-events: none;
    user-select: none;

    border-radius: 50%;
    background-color: currentColor;
    background-clip: padding-box;

    opacity: 0.2;
    transform: scale(0);

    transition: transform 0.4s ease-out, opacity 0.4s ease-out;

    &.held {
        opacity: 0.4;
        transform: scale(1);
    }

    &.done {
        opacity: 0!important;
    }
}
</style>
