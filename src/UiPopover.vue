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
import classlist from './helpers/classlist';
import Drop from 'tether-drop';

import UiFocusContainer from './UiFocusContainer.vue';

export default {
    name: 'ui-popover',

    props: {
        trigger: {
            validator(value) {
                const isValid = (value instanceof Element) || (value && value._isVue) || (typeof value === 'string');

                if (!isValid) {
                    console.warn('[UiPopover]: Invalid prop: "trigger". Expected Element, VueComponent or CSS selector string which matches an existing element.');
                }

                return isValid;
            }
        },
        position: {
            type: String,
            default: 'bottom left'
        },
        constrainToScrollParent: {
            type: Boolean,
            default: true
        },
        openOn: {
            type: String,
            default: 'click' // 'click', 'hover', 'focus', or 'always'
        },
        removeOnClose: {
            type: Boolean,
            default: false
        },
        containFocus: {
            type: Boolean,
            default: false
        },
        focusRedirector: Function,
        raised: {
            type: Boolean,
            default: true
        }
    },

    watch: {
        trigger() {
            this.destroyDrop();
            this.setupDrop();
        }
    },

    created() {
        // Instance data, not declared in data() as we don't want reactivity.
        this.triggerEl = null;
        this.dropInstance = null;
        this.lastFocusedElement = null;
    },

    mounted() {
        this.setupDrop();
    },

    beforeDestroy() {
        this.destroyDrop();
    },

    methods: {
        setTrigger() {
            if (this.trigger instanceof Element) {
                this.triggerEl = this.trigger;
            } else if (this.trigger && this.trigger._isVue) {
                this.triggerEl = this.trigger.$el;
            } else if (typeof this.trigger === 'string') {
                this.triggerEl = document.querySelector(this.trigger);
            }

            // Fallback to using the parent (DOM parent, not Vue component parent)
            // if triggerEl is invalid
            if (!(this.triggerEl instanceof Element)) {
                this.triggerEl = this.$el.parentElement;
            }
        },

        setupDrop() {
            this.setTrigger();

            if (!this.triggerEl) {
                return;
            }

            this.dropInstance = new Drop({
                target: this.triggerEl,
                content: this.$el,
                position: this.position,
                constrainToWindow: true,
                openOn: this.openOn,
                remove: this.removeOnClose,
                constrainToScrollParent: this.constrainToScrollParent
            });

            // TO FIX: Workaround for Tether not positioning
            // correctly for positions other than 'bottom left'
            if (!this.removeOnClose && this.dropdownPosition !== 'bottom left') {
                this.dropInstance.open();
                this.dropInstance.close();
                this.dropInstance.open();
                this.dropInstance.close();
            }

            this.dropInstance.on('open', this.onOpen);
            this.dropInstance.on('close', this.onClose);
        },

        destroyDrop() {
            if (this.dropInstance) {
                this.dropInstance.destroy();
                this.dropInstance = null;
            }
        },

        open() {
            if (this.dropInstance) {
                this.dropInstance.open();
            }
        },

        close() {
            if (this.dropInstance) {
                this.dropInstance.close();
            }
        },

        toggle() {
            if (this.dropInstance) {
                this.dropInstance.toggle();
            }
        },

        isOpen() {
            return Boolean(this.dropInstance) && this.dropInstance.isOpened();
        },

        /**
         * Ensures drop is horizontally within viewport (vertical is already solved by drop.js).
         * https://github.com/HubSpot/drop/issues/16
         */
        positionDrop() {
            const drop = this.dropInstance;
            const windowWidth = window.innerWidth || document.documentElement.clientWidth ||
                document.body.clientWidth;

            const width = drop.drop.getBoundingClientRect().width;
            const left = drop.target.getBoundingClientRect().left;
            const availableSpace = windowWidth - left;

            if (width > availableSpace) {
                const direction = width > availableSpace ? 'right' : 'left';

                drop.tether.attachment.left = direction;
                drop.tether.targetAttachment.left = direction;

                drop.position();
            }
        },

        onOpen() {
            this.positionDrop();
            classlist.add(this.triggerEl, 'has-dropdown-open');

            this.lastFocusedElement = document.activeElement;
            this.$refs.focusContainer.focus();

            this.$emit('open');
        },

        onClose() {
            classlist.remove(this.triggerEl, 'has-dropdown-open');

            if (this.lastFocusedElement) {
                this.lastFocusedElement.focus();
            }

            this.$emit('close');
        }
    },

    components: {
        UiFocusContainer
    }
};
</script>

<style lang="scss">
@import './styles/imports';

.ui-popover {
    background-color: white;
    outline: none;

    &.is-raised {
        box-shadow: 0 2px 4px -1px rgba(black, 0.2),
                    0 4px 5px 0 rgba(black, 0.14),
                    0 1px 10px 0 rgba(black, 0.12);
    }

    .ui-menu {
        border: none;
    }
}

.drop-element {
    display: none;
    max-height: 100%;
    max-width: 100%;
    opacity: 0;
    position: absolute;
    transition: opacity 0.2s ease;
    z-index: $z-index-dropdown;

    &,
    &:after,
    &:before,
    & *,
    & *:after,
    & *:before {
        box-sizing: border-box;
    }

    &.drop-open {
        display: block;
    }

    &.drop-after-open {
        opacity: 1;
    }
}
</style>
