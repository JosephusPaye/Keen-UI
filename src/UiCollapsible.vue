<template>
    <div class="ui-collapsible" :class="classes">
        <div
            class="ui-collapsible__header"

            :aria-controls="id"
            :aria-expanded="isOpen ? 'true' : 'false'"
            :tabindex="disabled ? null : 0"

            @click="toggleCollapsible"
            @keydown.enter.prevent="toggleCollapsible"
            @keydown.space.prevent="toggleCollapsible"
        >
            <div class="ui-collapsible__header-content">
                <slot name="header">{{ title }}</slot>
            </div>

            <ui-icon class="ui-collapsible__header-icon" v-if="!removeIcon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M7.406 7.828L12 12.422l4.594-4.594L18 9.234l-6 6-6-6z"/>
                </svg>
            </ui-icon>

            <ui-ripple-ink v-if="!disableRipple && !disabled"></ui-ripple-ink>
        </div>

        <transition
            @enter="onEnter"
            @after-enter="afterEnter"
            @before-leave="beforeLeave"
            @leave="onLeave"
        >
            <div
                class="ui-collapsible__body-wrapper"
                ref="bodyWrapper"

                :aria-hidden="isOpen ? null : 'true'"
                :id="id"

                v-show="isOpen"
            >
                <div class="ui-collapsible__body">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import UiIcon from './UiIcon.vue';
import UiRippleInk from './UiRippleInk.vue';
import UUID from './helpers/uuid';

export default {
    name: 'ui-collapsible',

    props: {
        open: {
            type: Boolean,
            default: false
        },
        title: String,
        removeIcon: {
            type: Boolean,
            default: false
        },
        disableRipple: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            isOpen: this.open,
            id: UUID.short('ui-collapsible-')
        };
    },

    computed: {
        classes() {
            return [
                { 'is-open': this.isOpen },
                { 'is-disabled': this.disabled }
            ];
        }
    },

    watch: {
        open() {
            if (this.isOpen !== this.open) {
                this.isOpen = this.open;
            }
        }
    },

    mounted() {
        // Remove the max-height to allow the element to grow if it's open initially
        if (this.isOpen) {
            this.$refs.bodyWrapper.style.maxHeight = 'none';
        }
    },

    methods: {
        toggleCollapsible() {
            if (this.disabled) {
                return;
            }

            this.isOpen = !this.isOpen;
        },

        onEnter(el) {
            this.$emit('open');
            el.style.maxHeight = el.scrollHeight + 'px';
        },

        afterEnter(el) {
            // Remove the max-height to allow the element to grow
            el.style.maxHeight = 'none';
        },

        beforeLeave(el) {
            // Restore max-height for the leave transition
            el.style.maxHeight = el.scrollHeight + 'px';

            // Force repaint
            el.offsetHeight; // eslint-disable-line no-unused-expressions
        },

        onLeave(el) {
            el.style.maxHeight = 0;
            this.$emit('close');
        }
    },

    components: {
        UiIcon,
        UiRippleInk
    }
};
</script>

<style lang="scss">
@import './styles/imports';

$ui-collapsible-header-background           : $md-grey-200 !default;
$ui-collapsible-header-background-hover     : $md-grey-300 !default;

.ui-collapsible {
    font-family: $font-stack;
    margin-bottom: rem(8px);
    width: 100%;

    &:not(.is-disabled) {
        .ui-collapsible__header {
            &:hover,
            body[modality="keyboard"] &:focus {
                background-color: $ui-collapsible-header-background-hover;
            }
        }
    }

    &.is-open {
        .ui-collapsible__header-icon {
            transform: rotate(-180deg);
        }
    }

    &.is-disabled {
        .ui-collapsible__header {
            cursor: default;
            opacity: 0.6;
        }

        .ui-collapsible__header-icon {
            cursor: default;
        }
    }
}

.ui-collapsible__header {
    align-items: center;
    background-color: $ui-collapsible-header-background;
    cursor: pointer;
    display: flex;
    font-size: rem(15px);
    line-height: 1.5;
    margin: 0;
    min-height: rem(48px);
    padding: rem(12px 16px);
    position: relative;
    touch-action: manipulation; // IE
    width: 100%;

    .ui-ripple-ink__ink {
        opacity: 0.1;
    }
}

.ui-collapsible__header-content {
    padding-right: rem(8px);
}

.ui-collapsible__header-icon {
    color: $secondary-text-color;
    cursor: pointer;
    margin-left: auto;
    margin-right: rem(-4px);
    transition: transform 0.3s ease;
}

.ui-collapsible__body-wrapper {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}

.ui-collapsible__body {
    border: 1px solid $md-grey-200;
    border-top: 0;
    display: block;
    padding: rem(16px);
    width: 100%;
}
</style>
