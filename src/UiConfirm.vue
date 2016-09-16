<template>
    <div class="ui-confirm">
        <ui-modal
            v-model="show" role="alertdialog" :header="header" @opened="opened" show-close-button
            :dismissible="!loading" :backdrop-dismissible="backdropDismissible" @closed="$emit('input', false)"
        >
            <div class="ui-confirm-message">
                <slot></slot>
            </div>

            <div slot="footer" class="slot">
                <ui-button
                    :color="type" :text="confirmButtonText" :icon="confirmButtonIcon"
                    @click.native="confirm" :loading="loading" ref="confirmButton"
                ></ui-button>
                <ui-button
                    :text="denyButtonText" :icon="denyButtonIcon" @click.native="deny"
                    :disabled="loading" ref="denyButton"
                ></ui-button>
            </div>
        </ui-modal>
    </div>
</template>

<script>
import classlist from './helpers/classlist';

import UiModal from './UiModal.vue';
import UiButton from './UiButton.vue';

export default {
    name: 'ui-confirm',

    data() {
        return {
            show: false,
        }
    },

    watch: {
        value() {
            this.show = this.value
        }
    },

    created() {
        if (this.value !== this.show) {
            this.show = this.value
        }
    },

    props: {
        value: {
            type: Boolean,
            required: true,
        },
        type: {
            type: String,
            default: 'primary', // any of the color prop values of UiButton
        },
        header: {
            type: String,
            default: 'UiConfirm'
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
            default: 'deny', // 'confirm-button', 'deny-button' or 'none'
        },
        closeOnConfirm: {
            type: Boolean,
            default: false
        },
        backdropDismissible: {
            type: Boolean,
            default: true
        },
        loading: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        confirm() {
            this.$emit('confirmed');

            if (this.closeOnConfirm) {
                this.$emit('input', false)
            }
        },

        deny() {
            this.$emit('denied')
            this.$emit('input', false)
        },

        opened() {
            let button;

            if (this.autofocus === 'confirm') {
                button = this.$refs.confirmButton.$el
            } else if (this.autofocus === 'deny') {
                button = this.$refs.denyButton.$el
            }

            if (button) {
                classlist.add(button, 'autofocus')
                button.addEventListener('blur', this.removeAutoFocus)

                button.focus()
            }
        },

        removeAutoFocus() {
            let button;

            if (this.autofocus === 'confirm') {
                button = this.$refs.confirmButton.$el
            } else if (this.autofocus === 'deny') {
                button = this.$refs.denyButton.$el
            }

            if (button) {
                // This listener should run only once
                button.removeEventListener('blur', this.removeAutoFocus)

                classlist.remove(button, 'autofocus')
            }
        }
    },

    components: {
        UiModal,
        UiButton
    }
};
</script>

<style lang="stylus">
@import './styles/imports';

.ui-confirm-message {
    font-family: $font-stack;
    font-size: 15px;
}
</style>
