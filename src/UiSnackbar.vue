<template>
    <transition name="ui-snackbar-toggle" @after-enter="onEnter" @after-leave="onLeave">
        <div class="ui-snackbar" @click="onClick">
            <div class="ui-snackbar__message">
                <slot>{{ message }}</slot>
            </div>

            <div class="ui-snackbar__action">
                <ui-button
                    class="ui-snackbar__action-button"
                    type="secondary"

                    :color="actionColor"

                    @click.native.stop="onActionClick"
                    v-if="action"
                >{{ action }}</ui-button>
            </div>
        </div>
    </transition>
</template>

<script>
import UiButton from './UiButton.vue';

export default {
    name: 'ui-snackbar',

    props: {
        message: String,
        action: String,
        actionColor: {
            type: String,
            default: 'accent' // 'primary' or 'accent'
        }
    },

    methods: {
        onClick() {
            this.$emit('click');
        },

        onActionClick() {
            this.$emit('action-click');
        },

        onEnter() {
            this.$emit('show');
        },

        onLeave() {
            this.$emit('hide');
        }
    },

    components: {
        UiButton
    }
};
</script>

<style lang="sass">
@import '~styles/imports';

$ui-snackbar-background-color   : #323232 !default;
$ui-snackbar-font-size          : 14px !default;

.ui-snackbar {
    align-items: center;
    background-color: $ui-snackbar-background-color;
    border-radius: $ui-default-border-radius;
    box-shadow: 0 1px 3px rgba(black, 0.12), 0 1px 2px rgba(black, 0.24);
    display: inline-flex;
    font-family: $font-stack;
    max-width: 568px;
    min-height: 48px;
    min-width: 288px;
    padding: 14px 24px;
    transition: transform 0.4s ease;
}

.ui-snackbar__message {
    color: white;
    cursor: default;
    font-size: $ui-snackbar-font-size;
    line-height: 1.5;
}

.ui-snackbar__action {
    margin: -9px -12px -9px auto;
    padding-left: 48px;
}

.ui-snackbar__action-button {
    margin: 0;
    min-height: initial;
    min-width: initial;
    padding: 12px;

    &:hover:not(.is-disabled) {
        background-color: rgba(white, 0.05);
    }
}

.ui-snackbar__message,
.ui-snackbar__action {
    opacity: 1;
    transition: opacity 0.4s ease;
}

.ui-snackbar-toggle-enter,
.ui-snackbar-toggle-leave-active {
    transform: translateY(84px);

    .ui-snackbar__message,
    .ui-snackbar__action {
        opacity: 0;
    }
}
</style>
