<template>
    <ui-focus-container
        class="ui-popover"
        ref="focusContainer"
        role="dialog"

        :class="{ 'is-raised': raised }"
        :contain-focus="containFocus"
        :focus-redirector="focusRedirector"

        @focus-overflow="close"
        @keydown.native.esc="close"
    >
        <slot></slot>
    </ui-focus-container>
</template>

<script>
import tippy from 'tippy.js/dist/esm/tippy.js';

import classlist from './helpers/classlist';
import elementRef from './helpers/element-ref';
import UiFocusContainer from './UiFocusContainer.vue';

export default {
    name: 'ui-popover',

    props: {
        animation: {
            type: String,
            default: 'fade' // 'fade', 'shift-away', or 'none'
        },
        appendToBody: {
            type: Boolean,
            default: true
        },
        closeOnScroll: {
            type: Boolean,
            default: true
        },
        constrainToScrollParent: {
            type: Boolean,
            default: true
        },
        containFocus: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        focusRedirector: Function,
        offset: {
            type: [Number, String],
            default: 0
        },
        openOn: {
            type: String,
            default: 'click' // 'click', 'mouseenter', 'focus', or 'always'
        },
        position: {
            type: String,
            default: 'bottom-start'
        },
        raised: {
            type: Boolean,
            default: true
        },
        trigger: {
            validator(value) {
                const warning = '[UiPopover]: Invalid prop: "trigger". Expected Element, VueComponent or CSS selector string which matches an existing element.';
                return elementRef.validate(value, warning);
            }
        }
    },

    data() {
        return {
            returnFocus: true,
        };
    },

    watch: {
        disabled(value) {
            if (this.tip) {
                if (value === true) {
                    this.tip.disable();
                } else {
                    this.tip.enable();
                }
            }
        }
    },

    mounted() {
        this.tip = null;
        this.lastFocusedElement = null;
        this.setupPopover();
    },

    beforeDestroy() {
        this.destroyPopover();
    },

    methods: {
        setupPopover() {
            this.triggerEl = elementRef.resolve(this.trigger, this.$el.parentElement);

            if (!this.triggerEl) {
                console.error('[UiPopover]: Trigger element not found.');
                return;
            }

            const options = {
                animateFill: false,
                // Default 'none' to 'fade', as it's not a valid Tippy.js option. The effect of no transition is achieved by `duration: 0` below.
                animation: this.animation === 'none' ? 'fade' : this.animation,
                arrow: false,
                content: this.$el,
                delay: [this.openDelay, 0],
                distance: 0,
                duration: this.animation === 'none' ? 0 : 250,
                hideOnClick: true,
                interactive: true,
                // lazy: false,
                multiple: true,
                offset: this.offset,
                onHidden: this.onHidden,
                onHide: this.onClose,
                onShow: this.onOpen,
                onShown: this.onShown,
                performance: true,
                placement: this.position,
                shouldPopperHideOnBlur: () => false,
                theme: 'ui-popover',
                trigger: this.openOn.indexOf('hover') === -1 ?
                    this.openOn :
                    this.openOn.replace('hover', 'mouseenter'), // COMPAT: Support 'hover' for `openOn` prop,
            };

            if (!this.constrainToScrollParent) {
                options.popperOptions = {
                    modifiers: {
                        preventOverflow: {
                            enabled: false
                        },
                        hide: {
                            enabled: false
                        }
                    }
                };
            }

            if (!this.appendToBody) {
                options.appendTo = this.triggerEl.parentNode;
            }

            this.tip = tippy.one(this.triggerEl, options);

            if (this.disabled) {
                this.tip.disable();
            }
        },

        destroyPopover() {
            if (this.tip) {
                window.removeEventListener('scroll', this.onScroll);
                this.tip.destroy();
                this.tip = null;
            }
        },

        open() {
            if (this.tip) {
                this.tip.show();
            }
        },

        close(options = { returnFocus: true }) {
            if (this.tip) {
                this.returnFocus = options.returnFocus;
                this.tip.hide();
            }
        },

        toggle(options = { returnFocus: true }) {
            if (this.tip) {
                this.returnFocus = options.returnFocus;
                this.tip[this.tip.state.isVisible ? 'hide' : 'show']();
            }
        },

        isOpen() {
            return this.tip !== null && this.tip.state.isVisible;
        },

        onOpen() {
            if (this.closeOnScroll) {
                document.addEventListener('scroll', this.onScroll, true);
            }

            classlist.add(this.triggerEl, 'has-dropdown-open');

            this.$emit('open');
        },

        onShown() {
            this.lastFocusedElement = document.activeElement;
            this.$refs.focusContainer.focus();

            this.$emit('reveal');
        },

        onClose() {
            if (this.closeOnScroll) {
                document.removeEventListener('scroll', this.onScroll, true);
            }

            classlist.remove(this.triggerEl, 'has-dropdown-open');

            this.$emit('close');
        },

        onHidden() {
            if (this.lastFocusedElement && this.returnFocus) {
                this.lastFocusedElement.focus();
            }

            this.$emit('hide');
            this.returnFocus = true;
        },

        onScroll(e) {
            if (this.isOpen() && !this.$el.contains(e.target)) {
                this.close();
            }
        }
    },

    components: {
        UiFocusContainer
    }
};
</script>

<style lang="scss">
@import './styles/imports';
@import './styles/tippy/tippy';

.ui-popover {
    &.is-raised {
        box-shadow: 0 2px 4px -1px rgba(black, 0.2),
                    0 4px 5px 0 rgba(black, 0.14),
                    0 1px 10px 0 rgba(black, 0.12);
    }

    .ui-menu {
        border: none;
    }
}

.ui-popover-theme {
    background-color: white;
}
</style>
