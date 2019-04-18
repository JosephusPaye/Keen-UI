<template>
    <transition :name="toggleTransition" @after-enter="onEnter" @after-leave="onLeave">
        <div
            class="ui-modal ui-modal__mask"

            :class="classes"
            :role="role"

            @click.self="onBackdropClick"

            v-show="isOpen"
        >
            <div
                class="ui-modal__wrapper"

                :class="{ 'has-dummy-scrollbar': preventShift }"
                :style="alignTopStyle"

                @click.self="onBackdropClick"
            >
                <ui-focus-container
                    class="ui-modal__container"
                    ref="focusContainer"
                    tabindex="-1"

                    @keydown.native.stop.esc="onEsc"
                >
                    <div class="ui-modal__header" v-if="!removeHeader">
                        <slot name="header">
                            <h1 class="ui-modal__header-text">{{ title }}</h1>
                        </slot>

                        <div class="ui-modal__close-button">
                            <ui-close-button
                                @click="close"
                                v-if="dismissOnCloseButton && !removeCloseButton && dismissible"
                            ></ui-close-button>
                        </div>
                    </div>

                    <div class="ui-modal__body">
                        <slot></slot>
                    </div>

                    <div class="ui-modal__footer" v-if="hasFooter">
                        <slot name="footer"></slot>
                    </div>
                </ui-focus-container>
            </div>
        </div>
    </transition>
</template>

<script>
import UiCloseButton from './UiCloseButton.vue';
import UiFocusContainer from './UiFocusContainer.vue';

import classlist from './helpers/classlist';

export default {
    name: 'ui-modal',

    props: {
        title: {
            type: String,
            default: 'UiModal title'
        },
        alignTop: {
            type: Boolean,
            default: false
        },
        alignTopMargin: {
            type: Number,
            default: 60
        },
        size: {
            type: String,
            default: 'normal' // 'small', 'normal', 'large', 'fullscreen', or 'auto'
        },
        role: {
            type: String,
            default: 'dialog' // 'dialog' or 'alertdialog'
        },
        transition: {
            type: String,
            default: 'scale-down' // 'scale-up', 'scale-down', or 'fade'
        },
        removeHeader: {
            type: Boolean,
            default: false
        },
        removeCloseButton: {
            type: Boolean,
            default: false
        },
        preventShift: {
            type: Boolean,
            default: false
        },
        dismissible: {
            type: Boolean,
            default: true
        },
        dismissOn: {
            type: String,
            default: 'backdrop esc close-button'
        }
    },

    data() {
        return {
            isOpen: false,
            lastFocusedElement: null
        };
    },

    computed: {
        classes() {
            return [
                `ui-modal--size-${this.size}`,
                { 'has-footer': this.hasFooter },
                { 'is-open': this.isOpen },
                { 'is-aligned-top': this.alignTop }
            ];
        },

        alignTopStyle() {
            if (this.alignTop) {
                return { 'padding-top': this.alignTopMargin + 'px' };
            }

            return null;
        },

        toggleTransition() {
            return `ui-modal--transition-${this.transition}`;
        },

        hasFooter() {
            return Boolean(this.$slots.footer);
        },

        dismissOnBackdrop() {
            return this.dismissOn.indexOf('backdrop') > -1;
        },

        dismissOnCloseButton() {
            return this.dismissOn.indexOf('close-button') > -1;
        },

        dismissOnEsc() {
            return this.dismissOn.indexOf('esc') > -1;
        }
    },

    watch: {
        isOpen() {
            this.$nextTick(() => {
                this[this.isOpen ? 'onOpen' : 'onClose']();
            });
        }
    },

    beforeDestroy() {
        if (this.isOpen) {
            this.returnFocus();
        }
    },

    methods: {
        open() {
            this.isOpen = true;
        },

        close() {
            if (!this.dismissible) {
                return;
            }

            this.isOpen = false;
        },

        redirectFocus() {
            this.$refs.focusContainer.focus();
        },

        returnFocus() {
            if (this.lastFocusedElement) {
                this.lastFocusedElement.focus();
            }
        },

        onBackdropClick() {
            if (this.dismissOnBackdrop) {
                this.close();
            } else {
                this.redirectFocus();
            }
        },

        onEsc() {
            if (this.dismissOnEsc) {
                this.close();
            }
        },

        onOpen() {
            this.lastFocusedElement = document.activeElement;
            this.$refs.focusContainer.focus();

            classlist.add(document.body, 'ui-modal--is-open');
            this.incrementOpenModalCount();

            this.$emit('open');
        },

        onClose() {
            this.returnFocus();
            this.$emit('close');
        },

        onEnter() {
            this.$emit('reveal');
        },

        onLeave() {
            this.$emit('hide');
            const newCount = this.decrementOpenModalCount();

            if (newCount === 0) {
                classlist.remove(document.body, 'ui-modal--is-open');
            }
        },

        getOpenModalCount() {
            const count = document.body.getAttribute('data-ui-open-modals');
            return count === undefined ? 0 : Number(count);
        },

        setOpenModalCount(count) {
            const normalizedCount = Math.max(0, count);

            if (normalizedCount === 0) {
                document.body.removeAttribute('data-ui-open-modals');
            } else {
                document.body.setAttribute('data-ui-open-modals', normalizedCount);
            }

            return normalizedCount;
        },

        incrementOpenModalCount() {
            return this.setOpenModalCount(this.getOpenModalCount() + 1);
        },

        decrementOpenModalCount() {
            return this.setOpenModalCount(this.getOpenModalCount() - 1);
        }
    },

    components: {
        UiCloseButton,
        UiFocusContainer
    }
};
</script>

<style lang="scss">
@import './styles/imports';

$ui-modal-transition-duration   : 0.3s !default;
$ui-modal-mask-background       : rgba(black, 0.5) !default;
$ui-modal-header-height         : rem(56px);
$ui-modal-footer-height         : rem(70px);

$ui-modal-font-size             : rem(14px);
$ui-modal-header-font-size      : rem(18px);

.ui-modal {
    font-family: $font-stack;
    font-size: $ui-modal-font-size;

    &.is-aligned-top {
        .ui-modal__wrapper {
            vertical-align: initial;
        }

        &.has-footer .ui-modal__body {
            max-height: calc(100vh - #{$ui-modal-header-height + $ui-modal-footer-height});
        }
    }

    &.has-footer {
        .ui-modal__body {
            max-height: calc(100vh - #{$ui-modal-header-height + $ui-modal-footer-height});
        }
    }

    &:not(.has-footer) {
        .ui-modal__body {
            padding: rem(16px 24px 24px);
        }
    }
}

.ui-modal--is-open {
    overflow: hidden;
}

.ui-modal__mask {
    background-color: $ui-modal-mask-background;
    display: table;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    transition: opacity $ui-modal-transition-duration ease;
    width: 100%;
    z-index: $z-index-modal;
}

.ui-modal__wrapper {
    display: table-cell;
    vertical-align: middle;
    overflow-x: hidden;
    text-align: center;

    &.has-dummy-scrollbar {
        overflow-y: scroll;
    }
}

.ui-modal__container {
    background-color: white;
    border-radius: $ui-default-border-radius;
    box-shadow: 0 2px 8px rgba(black, 0.33);
    display: inline-block;
    margin: 0 auto;
    max-height: 100vh;
    max-width: 100vw;
    outline: none;
    overflow: hidden;
    padding: 0;
    text-align: initial;
    transition: all $ui-modal-transition-duration ease;
    width: rem(528px);
}

.ui-modal__header {
    align-items: center;
    background-color: #F5F5F5;
    box-shadow: 0 1px 1px rgba(black, 0.16);
    display: flex;
    height: $ui-modal-header-height;
    padding: rem(0 24px);
    position: relative;
    z-index: 1;
}

.ui-modal__header-text {
    align-items: center;
    display: flex;
    flex-grow: 1;
    font-size: $ui-modal-header-font-size;
    font-weight: normal;
    margin: 0;
}

.ui-modal__close-button {
    margin-left: auto;
    margin-right: rem(-8px);
}

.ui-modal__body {
    max-height: calc(100vh - #{$ui-modal-header-height});
    overflow-y: auto;
    padding: rem(16px 24px);
}

.ui-modal__footer {
    align-items: center;
    display: flex;
    height: $ui-modal-footer-height;
    justify-content: flex-end;
    padding: rem(0 24px);

    .ui-button {
        margin-left: rem(8px);

        &:first-child {
            margin-left: 0;
        }
    }
}

// ================================================
// Sizes
// ================================================

.ui-modal--size-small  {
    // Using immediate child selector so size doesn't affect a nested modal
    & > .ui-modal__wrapper > .ui-modal__container {
        width: rem-calc(320px);
    }
}

.ui-modal--size-large {
    // Using immediate child selector so size doesn't affect a nested modal
    & > .ui-modal__wrapper > .ui-modal__container {
        width: rem-calc(848px);
    }
}

.ui-modal--size-fullscreen {
    // Using immediate child selector so size doesn't affect a nested modal
    & > .ui-modal__wrapper > .ui-modal__container {
        width: 100vw;

        .ui-modal__body {
            height: calc(100vh - #{$ui-modal-header-height});
        }
    }
}

.ui-modal--size-auto {
    & > .ui-modal__wrapper > .ui-modal__container {
        width: initial; // Allow the modal to grow to fit the content
    }
}

// ================================================
// Transitions
// ================================================

.ui-modal--transition-fade-enter,
.ui-modal--transition-fade-leave-active {
    opacity: 0;
}

.ui-modal--transition-scale-down-enter,
.ui-modal--transition-scale-down-leave-active {
    opacity: 0;

    .ui-modal__container {
        transform: scale(1.1);
    }
}

.ui-modal--transition-scale-up-enter,
.ui-modal--transition-scale-up-leave-active {
    opacity: 0;

    .ui-modal__container {
        transform: scale(0.8);
    }
}
</style>
