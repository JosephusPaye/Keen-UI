<template>
    <div class="ui-confirm">
        <ui-modal
            ref="modal"
            role="alertdialog"

            :dismiss-on="dismissOn"
            :dismissible="!loading"
            :title="title"

            @close="onModalClose"
            @open="onModalOpen"
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

                    @click.native="confirm"
                >{{ confirmButtonText }}</ui-button>

                <ui-button
                    ref="denyButton"

                    :icon="denyButtonIcon"
                    :disabled="loading"

                    @click.native="deny"
                >{{ denyButtonText }}</ui-button>
            </div>
        </ui-modal>
    </div>
</template>

<script>
import UiModal from './UiModal.vue';
import UiButton from './UiButton.vue';

import classlist from './helpers/classlist';

export default {
    name: 'ui-confirm',

    props: {
        title: {
            type: String,
            default: 'UiConfirm title'
        },
        type: {
            type: String,
            default: 'primary' // any of the color prop values of UiButton
        },
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
            default: false
        },
        dismissOn: String,
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

            // Bubble the event up
            this.$emit('open');
        },

        onModalClose() {
            this.$emit('close');
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
        UiModal,
        UiButton
    }
};
</script>

<style lang="sass">
@import '~styles/imports';

.ui-confirm__message {
    font-family: $font-stack;
    font-size: 15px;
}

.ui-confirm__footer {
    display: flex;
}
</style>
