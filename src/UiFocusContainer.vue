<template>
    <div class="ui-focus-container">
        <span
            class="ui-focus-container__focus-redirector"
            tabindex="0"

            @focus="redirectFocus($event, { isTabbingForward: false })"
        ></span>

        <div class="ui-focus-container__content" ref="content" tabindex="-1">
            <slot></slot>
        </div>

        <span
            class="ui-focus-container__last-focusable"
            ref="lastFocusable"
            tabindex="-1"

            v-if="containFocus"
        ></span>

        <span
            class="ui-focus-container__focus-redirector"
            tabindex="0"

            @focus="redirectFocus($event, { isTabbingForward: true })"
        ></span>
    </div>
</template>

<script>
export default {
    name: 'ui-focus-container',

    props: {
        containFocus: {
            type: Boolean,
            default: true
        },
        focusRedirector: Function
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
