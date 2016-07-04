<template>
    <div class="ui-alert">
        <div
            class="ui-alert-body" :class="[type]" role="alert" v-show="show"
            transition="ui-alert-toggle"
        >
            <ui-icon class="ui-alert-icon" :icon="iconName" v-if="!hideIcon"></ui-icon>

            <div class="ui-alert-text">
                <slot>
                    <span v-text="text"></span>
                </slot>
            </div>

            <ui-icon-button
                class="ui-alert-close-button" type="clear" icon="&#xE5CD" aria-label="Close"
                @click="close" v-if="dismissible"
            ></ui-icon-button>
        </div>
    </div>
</template>

<script>
import UiIcon from './UiIcon.vue';
import UiIconButton from './UiIconButton.vue';

export default {
    name: 'ui-alert',

    props: {
        show: {
            type: Boolean,
            default: true
        },
        type: {
            type: String,
            default: 'info' // 'info', 'success', 'warning', or 'error'
        },
        text: String,
        icon: String,
        hideIcon: {
            type: Boolean,
            default: false
        },
        dismissible: {
            type: Boolean,
            default: true
        }
    },

    computed: {
        iconName() {
            if (this.icon) {
                return this.icon;
            }

            let icon = this.type;

            if (icon === 'success') {
                icon = 'check_circle';
            }

            return icon;
        }
    },

    methods: {
        close() {
            this.show = false;
            this.$dispatch('dismissed');
        }
    },

    components: {
        UiIcon,
        UiIconButton
    }
};
</script>

<style lang="stylus">
@import './styles/imports';

.ui-alert {
    font-family: $font-stack;
    font-size: 15px;
    line-height: 1.4em;
    overflow: hidden;
    display: flex;
    width: 100%;

    a {
        text-decoration: none;

        &:hover,
        &:focus {
            text-decoration: underline;
        }
    }

    .ui-alert-close-button {
        flex-shrink: 0;
        width: 32px;
        height: 32px;
        margin-right: -8px;
        margin-top: -4px;
        margin-bottom: -4px;
        color: $md-dark-hint;
        margin-left: 8px;

        &:not([disabled]):hover,
        body[modality="keyboard"] &:focus {
            color: alpha(black, 0.8);
        }

        .ui-icon {
            font-size: 18px;
            margin: 0;
        }
    }
}

.ui-alert-body {
    width: 100%;
    min-height: 52px;
    padding: 12px 16px;
    display: flex;
    flex-direction: row;
    align-items: center;

    &.error {
        background-color: alpha($md-red, 0.12);

        a {
            color: $md-red;
        }

        .ui-alert-icon {
            color: $md-red;
        }
    }

    &.success {
        background-color: alpha($md-green, 0.12);

        a {
            color: $md-green;
        }

        .ui-alert-icon {
            color: $md-green;
        }
    }

    &.info {
        background-color: alpha($md-blue, 0.12);

        a {
            color: $md-blue;
        }

        .ui-alert-icon {
            color: $md-blue;
        }
    }

    &.warning {
        background-color: alpha($md-orange, 0.12);

        a {
            color: $md-orange;
        }

        .ui-alert-icon {
            color: $md-orange;
        }
    }
}

.ui-alert-icon {
    flex-shrink: 0;
    margin-right: 12px;
}

.ui-alert-text {
    flex-grow: 1;
    color: alpha(black, 0.75);
}

.ui-alert-toggle-transition {
    transition: all 0.3s ease;
    margin-top: 0;
    margin-bottom: 12px;
}

.ui-alert-toggle-enter,
.ui-alert-toggle-leave {
    margin-top: -52px;
    opacity: 0;
    margin-bottom: 0;
}
</style>
