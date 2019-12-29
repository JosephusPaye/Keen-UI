<template>
    <div class="ui-tooltip">
        <slot></slot>
    </div>
</template>

<script>
import tippy from 'tippy.js/esm';
import { resolveRef } from './helpers/element-ref';
import { oneOf, tippyTrigger, tippyPosition, ref } from './prop-validation';

export default {
    name: 'UiTooltip',

    props: {
        animation: {
            type: String,
            default: 'fade',
            ...oneOf('fade', 'shift-away', 'scale', 'none'),
        },
        appendToBody: {
            type: Boolean,
            default: true,
        },
        openDelay: {
            type: Number,
            default: 0,
        },
        openOn: {
            type: String,
            default: 'mouseenter focus',
            ...tippyTrigger(),
        },
        position: {
            type: String,
            default: 'bottom',
            ...tippyPosition(),
        },
        // eslint-disable-next-line vue/require-prop-types
        trigger: {
            ...ref('UiTooltip'),
        },
        zIndex: Number,
    },

    watch: {
        animation(newAnimation) {
            if (this.tip) {
                this.tip.set({
                    // See comment in setupPopover()
                    animation: newAnimation === 'none' ? 'fade' : newAnimation,
                    duration: newAnimation === 'none' ? 0 : [250, 200],
                });
            }
        },

        position(newPosition) {
            if (this.tip) {
                this.tip.set({
                    placement: newPosition,
                });
            }
        },

        openOn(newOpenOn) {
            if (this.tip) {
                this.tip.set({
                    trigger: newOpenOn.replace('hover', 'mouseenter'),
                });
            }
        },
    },

    mounted() {
        this.triggerEl = resolveRef(this.trigger, this.$el.parentElement);

        if (!this.triggerEl) {
            console.error('[UiTooltip]: Trigger element not found.');
            return;
        }

        const options = {
            // `animateFill: true` makes the backdrop animate, making the fade look like a shift-away
            animateFill: this.animation !== 'fade',
            // Use 'fade' when animation is 'none', as 'none' it's not a valid Tippy.js option.
            // The effect of no transition is achieved by `duration: 0` below.
            animation: this.animation === 'none' ? 'fade' : this.animation,
            arrow: false,
            content: this.$el,
            delay: [this.openDelay, 0],
            distance: 4,
            duration: this.animation === 'none' ? 0 : [250, 200],
            ignoreAttributes: true,
            lazy: true,
            multiple: true,
            placement: this.position,
            theme: 'ui-tooltip',
            trigger: this.openOn.replace('hover', 'mouseenter'),
            zIndex: this.zIndex,
            popperOptions: {
                modifiers: {
                    computeStyle: {
                        // Disable GPU acceleration to fix blurry text in popover on Windows (Chrome)
                        // https://github.com/twbs/bootstrap/issues/23590
                        gpuAcceleration: !(
                            window.devicePixelRatio < 1.5 &&
                            /Win/.test(navigator.platform)
                        ),
                    },
                },
            },
        };

        if (!this.appendToBody) {
            options.appendTo = this.triggerEl.parentElement;
        }

        this.tip = tippy(this.triggerEl, options);
    },

    beforeDestroy() {
        if (this.tip) {
            this.tip.destroy();
            this.tip = null;
        }
    },
};
</script>

<style lang="scss">
@import './styles/imports';
@import './styles/tippy/tippy';

.ui-tooltip-theme {
    background-color: rgba($md-grey-900, 0.9);
    border-radius: $ui-default-border-radius;
    color: white;
    font-size: rem(13px);
    line-height: 1.4;
    padding: 0.3rem rem(8px);
    text-align: center;
    font-family: $font-stack;

    .tippy-backdrop {
        background-color: rgba($md-grey-900, 0.9);
    }
}
</style>
