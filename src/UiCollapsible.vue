<template>
    <div class="ui-collapsible" :class="classes">
        <div
            class="ui-collapsible__header"
            ref="header"

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

            <ui-ripple-ink
                trigger="header" v-if="!disableRipple && !disabled && isReady"
            ></ui-ripple-ink>
        </div>

        <transition
            name="ui-collapsible--transition-toggle"
            @after-enter="onEnter"
            @after-leave="onLeave"
        >
            <div
                class="ui-collapsible__body-wrapper"
                ref="body"

                :style="{ 'height': calculatedHeight }"
                v-show="isOpen"
            >
                <div class="ui-collapsible__body" :aria-hidden="isOpen ? null : 'true'" :id="id">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import UiIcon from './UiIcon.vue';
import UiRippleInk from './UiRippleInk.vue';

import config from './config';
import RespondsToWindowResize from './mixins/RespondsToWindowResize.js';
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
            default: config.data.disableRipple
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            height: 0,
            isReady: false,
            isOpen: this.open,
            useInitialHeight: false,
            id: UUID.short('ui-collapsible-')
        };
    },

    computed: {
        classes() {
            return [
                { 'is-open': this.isOpen },
                { 'is-disabled': this.disabled }
            ];
        },

        calculatedHeight() {
            return (this.height === 0 || this.useInitialHeight) ? 'initial' : this.height + 'px';
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
        this.isReady = true;
        this.refreshHeight();

        this.$on('window-resize', () => {
            this.refreshHeight();
        });
    },

    methods: {
        onEnter() {
            this.$emit('open');
            this.refreshHeight();
        },

        onLeave() {
            this.$emit('close');
        },

        toggleCollapsible() {
            if (this.disabled) {
                return;
            }

            this.isOpen = !this.isOpen;
        },

        refreshHeight() {
            const body = this.$refs.body;

            this.useInitialHeight = true;
            body.style.display = 'block';

            this.$nextTick(() => {
                this.height = body.scrollHeight + 1;
                this.useInitialHeight = false;

                if (!this.isOpen) {
                    body.style.display = 'none';
                }
            });
        }
    },

    components: {
        UiIcon,
        UiRippleInk
    },

    mixins: [
        RespondsToWindowResize
    ]
};
</script>

<style lang="scss">
@import './styles/imports';

$ui-collapsible-header-background           : $md-grey-200 !default;
$ui-collapsible-header-background-hover     : $md-grey-300 !default;

.ui-collapsible {
    font-family: $font-stack;
    margin-bottom: rem-calc(8px);
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
    font-size: rem-calc(15px);
    line-height: 1.5;
    margin: 0;
    min-height: rem-calc(48px);
    padding: rem-calc(12px 16px);
    position: relative;
    touch-action: manipulation; // IE
    width: 100%;

    .ui-ripple-ink__ink {
        opacity: 0.1;
    }
}

.ui-collapsible__header-content {
    padding-right: rem-calc(8px);
}

.ui-collapsible__header-icon {
    color: $secondary-text-color;
    cursor: pointer;
    margin-left: auto;
    margin-right: rem-calc(-4px);
    transition: transform 0.3s ease;
}

.ui-collapsible__body-wrapper {
    height: initial;
    overflow: hidden;
}

.ui-collapsible__body {
    border-top: 0;
    border: 1px solid $md-grey-200;
    display: block;
    padding: rem-calc(16px);
    width: 100%;
}

.ui-collapsible--transition-toggle-enter-active,
.ui-collapsible--transition-toggle-leave-active {
    transition: height 0.3s ease;
}

.ui-collapsible--transition-toggle-enter,
.ui-collapsible--transition-toggle-leave-active {
    height: 0!important;
}
</style>
