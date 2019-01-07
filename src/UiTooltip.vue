<template>
    <div class="ui-tooltip">
        <slot></slot>
    </div>
</template>

<script>
import tippy from 'tippy.js/dist/esm/tippy.js';
import elementRef from './helpers/element-ref';

export default {
    name: 'ui-tooltip',

    props: {
        animation: {
            type: String,
            default: 'fade' // 'fade', 'shift-away', or 'none'
        },
        appendToBody: {
            type: Boolean,
            default: true
        },
        openDelay: {
            type: Number,
            default: 0
        },
        openOn: {
            type: String,
            default: 'mouseenter focus' // 'mouseenter', 'focus', 'click', or 'manual'
        },
        position: {
            type: String,
            default: 'bottom' // 'top', 'right', 'bottom', 'left', 'top-{start|end}', 'right-{start|end}', etc.
        },
        trigger: {
            validator(value) {
                const warning = '[UiTooltip]: Invalid prop: "trigger". Expected Element, VueComponent or CSS selector string.';
                return elementRef.validate(value, warning);
            }
        }
    },

    mounted() {
        this.triggerEl = elementRef.resolve(this.trigger, this.$el.parentElement);

        if (!this.triggerEl) {
            console.error('[UiTooltip]: Trigger element not found.');
            return;
        }

        const options = {
            // `animateFill: true` makes the backdrop animate, making the fade look like a shift-away
            animateFill: this.animation !== 'fade',
            // Default 'none' to 'fade', as it's not a valid Tippy.js option. The effect of no transition is achieved by `duration: 0` below.
            animation: this.animation === 'none' ? 'fade' : this.animation,
            arrow: false,
            content: this.$el,
            delay: [this.openDelay, 0],
            distance: 4,
            duration: this.animation === 'none' ? 0 : 250,
            multiple: true,
            performance: true,
            placement: this.position,
            theme: 'ui-tooltip',
            trigger: this.openOn.indexOf('hover') === -1 ?
                this.openOn :
                this.openOn.replace('hover', 'mouseenter') // COMPAT: Support 'hover' for `openOn` prop
        };

        if (!this.appendToBody) {
            options.appendTo = this.triggerEl.parentNode;
        }

        this.tip = tippy.one(this.triggerEl, options);
    },

    beforeDestroy() {
        if (this.tip) {
            this.tip.destroy();
            this.tip = null;
        }
    }
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

    .tippy-backdrop {
        background-color: rgba($md-grey-900, 0.9);
    }
}
</style>
