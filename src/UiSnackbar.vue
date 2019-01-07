<template>
    <transition :name="transitionName" @after-enter="onEnter" @after-leave="onLeave">
        <div class="ui-snackbar" @click="onClick">
            <div class="ui-snackbar__message">
                <slot>{{ message }}</slot>
            </div>

            <div class="ui-snackbar__action">
                <ui-button
                    class="ui-snackbar__action-button"
                    type="secondary"

                    :color="actionColor"

                    @click.stop="onActionClick"

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
        },
        transition: {
            type: String,
            default: 'slide' // 'slide' or 'fade'
        }
    },

    computed: {
        transitionName() {
            return 'ui-snackbar--transition-' + this.transition;
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

<style lang="scss">
@import './styles/imports';

$ui-snackbar-background-color   : #323232 !default;
$ui-snackbar-font-size          : rem(14px) !default;

.ui-snackbar {
    align-items: center;
    background-color: $ui-snackbar-background-color;
    border-radius: $ui-default-border-radius;
    box-shadow: 0 1px 3px rgba(black, 0.12), 0 1px 2px rgba(black, 0.24);
    display: inline-flex;
    font-family: $font-stack;
    max-width: rem(568px);
    min-height: rem(48px);
    min-width: rem(288px);
    padding: rem(14px 24px);
}

.ui-snackbar__message {
    color: white;
    cursor: default;
    font-size: $ui-snackbar-font-size;
    line-height: 1.5;
    flex-grow: 1;
}

.ui-snackbar__action {
    margin-left: auto;
    margin: rem(-9px -12px);
    padding-left: rem(48px);
}

.ui-snackbar__action-button {
    margin: 0;
    min-height: initial;
    min-width: initial;
    padding: rem(12px);

    &:hover:not(.is-disabled) {
        background-color: rgba(white, 0.05);
    }

    body[modality="keyboard"] &:focus {
        background-color: rgba(white, 0.1);
    }
}

.ui-snackbar--transition-slide-enter-active,
.ui-snackbar--transition-slide-leave-active {
    transition: transform 0.4s ease;
}

.ui-snackbar--transition-slide-enter,
.ui-snackbar--transition-slide-leave-active {
    transform: translateY(rem(84px));
}

.ui-snackbar--transition-fade-enter-active,
.ui-snackbar--transition-fade-leave-active {
    transition: opacity 0.4s ease;
}

.ui-snackbar--transition-fade-enter,
.ui-snackbar--transition-fade-leave-active {
    opacity: 0;
}
</style>
