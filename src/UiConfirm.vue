<template>
    <ui-modal
        class="ui-confirm"
        ref="modal"
        role="alertdialog"

        :dismiss-on="dismissOn"
        :dismissible="!loading"
        :title="title"
        :transition="transition"
        :size="size"

        @close="onModalClose"
        @hide="onModalHide"
        @open="onModalOpen"
        @reveal="onModalReveal"
    >
        <div class="ui-confirm__message">
            <slot></slot>
        </div>

        <div class="ui-confirm__footer" slot="footer">
            <ui-button
                ref="confirmButton"

                :color="confirmButtonColor"
                :icon="confirmButtonIcon"
                :loading="loading"

                @click="confirm"
            >{{ confirmButtonText }}</ui-button>

            <ui-button
                ref="denyButton"

                :disabled="loading"
                :icon="denyButtonIcon"

                @click="deny"
            >{{ denyButtonText }}</ui-button>
        </div>
    </ui-modal>
</template>

<script>
import UiButton from './UiButton.vue';
import UiModal from './UiModal.vue';

import classlist from './helpers/classlist';

export default {
    name: 'ui-confirm',

    props: {
        title: {
            type: String,
            default: 'UiConfirm'
        },
        type: {
            type: String,
            default: 'primary' // any of the color prop values of UiButton
        },
        size: String,
        confirmButtonText: {
            type: String,
            default: 'OK'
        },
        confirmButtonIcon: String,
        denyButtonText: {
            type: String,
            default: 'Cancel'
        },
        denyButtonIcon: String,
        autofocus: {
            type: String,
            default: 'deny-button' // 'confirm-button', 'deny-button' or 'none'
        },
        closeOnConfirm: {
            type: Boolean,
            default: true
        },
        dismissOn: String,
        transition: String,
        loading: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        confirmButtonColor() {
            const typeToColor = {
                default: 'default',
                primary: 'primary',
                accent: 'accent',
                success: 'green',
                warning: 'orange',
                danger: 'red'
            };

            return typeToColor[this.type];
        }
    },

    methods: {
        open() {
            this.$refs.modal.open();
        },

        close() {
            this.$refs.modal.close();
        },

        confirm() {
            this.$emit('confirm');

            if (this.closeOnConfirm) {
                this.$refs.modal.close();
            }
        },

        deny() {
            this.$refs.modal.close();
            this.$emit('deny');
        },

        onModalOpen() {
            let button;

            if (this.autofocus === 'confirm-button') {
                button = this.$refs.confirmButton.$el;
            } else if (this.autofocus === 'deny-button') {
                button = this.$refs.denyButton.$el;
            }

            if (button) {
                classlist.add(button, 'has-focus-ring');
                button.addEventListener('blur', this.removeAutoFocus);
                button.focus();
            }

            this.$emit('open');
        },

        onModalReveal() {
            this.$emit('reveal');
        },

        onModalClose() {
            this.$emit('close');
        },

        onModalHide() {
            this.$emit('hide');
        },

        removeAutoFocus() {
            let button;

            if (this.autofocus === 'confirm-button') {
                button = this.$refs.confirmButton.$el;
            } else if (this.autofocus === 'deny-button') {
                button = this.$refs.denyButton.$el;
            }

            if (button) {
                classlist.remove(button, 'has-focus-ring');

                // This listener should run only once
                button.removeEventListener('blur', this.removeAutoFocus);
            }
        }
    },

    components: {
        UiButton,
        UiModal
    }
};
</script>

<style lang="scss">
@import './styles/imports';

.ui-confirm__message {
    font-size: rem(15px);
}

.ui-confirm__footer {
    display: flex;
}
</style>
