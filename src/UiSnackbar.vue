<template>
    <transition name="ui-snackbar-toggle" @after-enter="afterEnter" @after-leave="afterLeave">
        <div
            class="ui-snackbar" :id="id"  @click="click" v-show="value"
        >
            <div class="ui-snackbar-text">
                <slot>
                    <span v-text="message"></span>
                </slot>
            </div>

            <div class="ui-snackbar-action">
                <ui-button
                    class="ui-snackbar-action-button" type="flat" :color="actionColor"
                    :text="action" @click.stop="actionClick" v-if="action"
                ></ui-button>
            </div>
        </div>
    </transition>
</template>

<script>
import UiButton from './UiButton.vue';

export default {
    name: 'ui-snackbar',

    props: {
        id: String,
        value: {
            type: Boolean,
            default: false,
        },
        message: String,
        action: String,
        actionColor: {
            type: String,
            default: 'accent', // 'primary' or 'accent'
        },
        persistent: {
            type: Boolean,
            default: false
        },
        duration: {
            type: Number,
            default: 5000
        },
        autoHide: {
            type: Boolean,
            default: true
        }
    },

    data() {
        return {
            height: 0,
            timeout: null
        };
    },

    beforeDestroy() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    },

    methods: {
        click() {
            this.$emit('clicked');
            this.hide();
        },

        actionClick() {
            this.$emit('action-clicked');
            this.hide();
        },

        hide() {
            if (!this.persistent) {
                this.$emit('input', false)
            }
        },

        afterEnter() {
            this.$emit('shown');

            if (this.autoHide) {
                this.timeout = setTimeout(this.hide, this.duration);
            }
        },

        afterLeave() {
            this.$emit('hidden');

            if (this.timeout) {
                clearTimeout(this.timeout);
                this.timeout = null;
            }
        }
    },

    components: {
        UiButton
    },
};
</script>

<style lang="stylus">
@import './styles/imports';

$md-snackbar-bg = #323232;

.ui-snackbar {
    font-family: $font-stack;
    display: inline-flex;
    align-items: center;

    min-width: 288px;
    max-width: 568px;
    min-height: 48px;

    padding: 14px 24px;

    border-radius: 2px;
    background-color: $md-snackbar-bg;

    box-shadow: 0 1px 3px alpha(black, 0.12), 0 1px 2px alpha(black, 0.24);
}

.ui-snackbar-text {
    line-height: 1.5;
    font-size: 14px;
    color: white;
    cursor: default;
}

.ui-snackbar-action {
    margin: -9px -12px -9px auto;
    padding-left: 48px;

    .ui-snackbar-action-button {
        margin: 0;
        padding: 12px;
        min-height: initial;
        min-width: initial;

        &:hover {
            background-color: alpha(white, 0.05);
        }
    }
}

.ui-snackbar-toggle-enter-active,
.ui-snackbar-toggle-leave-active {
    transition: transform .3s ease;

    .ui-snackbar-text,
    .ui-snackbar-action {
        opacity: 1;
        transition: opacity .3s ease;
    }
}

.ui-snackbar-toggle-enter,
.ui-snackbar-toggle-leave-active {
    transform: translateY(84px);

    .ui-snackbar-text,
    .ui-snackbar-action {
        opacity: 0;
    }
}
</style>
