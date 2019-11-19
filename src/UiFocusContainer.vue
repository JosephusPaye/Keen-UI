<template>
    <component class="ui-focus-container" :is="tag">
        <span
            class="ui-focus-container__focus-redirector"
            tabindex="0"

            @focus="redirectFocus($event, { isTabbingForward: false })"

            v-if="renderRedirector"
        ></span>

        <div class="ui-focus-container__content" ref="content" tabindex="-1">
            <slot></slot>
        </div>

        <span
            class="ui-focus-container__last-focusable"
            ref="lastFocusable"
            tabindex="-1"

            v-if="!disabled && containFocus"
        ></span>

        <span
            class="ui-focus-container__focus-redirector"
            tabindex="0"

            @focus="redirectFocus($event, { isTabbingForward: true })"

            v-if="renderRedirector"
        ></span>
    </component>
</template>

<script>
export default {
    name: 'ui-focus-container',

    props: {
        containFocus: {
            type: Boolean,
            default: true
        },
        focusRedirector: Function,
        disabled: {
            type: Boolean,
            default: false
        },
        tag: {
            type: String,
            default: 'div'
        },
        lazy: {
            type: Boolean,
            default: false // When true, the focus redirectors are not rendered until containFocus is true
        }
    },

    computed: {
        renderRedirector() {
            if (this.disabled) {
                return false;
            }

            return this.lazy ? this.containFocus : true;
        }
    },

    methods: {
        focus() {
            this.$refs.content.focus();
        },

        redirectFocus(e, options) {
            if (!this.containFocus) {
                this.$emit('focus-overflow', e, options);
                return;
            }

            e.stopPropagation();

            if (this.focusRedirector) {
                this.focusRedirector(e, options);
                return;
            }

            if (options.isTabbingForward) {
                this.$refs.content.focus();
            } else {
                this.$refs.lastFocusable.focus();
            }
        }
    }
};
</script>

<style lang="scss">
.ui-focus-container__focus-redirector,
.ui-focus-container__last-focusable {
    opacity: 0;
    position: absolute;
}

.ui-focus-container__content {
    outline: none;
}
</style>
