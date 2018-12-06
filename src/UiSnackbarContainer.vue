<template>
    <div class="ui-snackbar-container" :class="classes">
        <ui-snackbar
            :action-color="snackbar.actionColor"
            :action="snackbar.action"
            :key="index"
            :message="snackbar.message"
            :transition="transition"

            @action-click="onActionClick(snackbar)"
            @click="onClick(snackbar)"
            @hide="onHide(snackbar, index)"
            @show="onShow(snackbar)"

            v-for="(snackbar, index) in queue"
            v-show="snackbar.show"
        >
            <div v-html="snackbar.message" v-if="allowHtml"></div>
        </ui-snackbar>
    </div>
</template>

<script>
import UiSnackbar from './UiSnackbar.vue';

export default {
    name: 'ui-snackbar-container',

    props: {
        queueSnackbars: {
            type: Boolean,
            default: false
        },
        duration: {
            type: Number,
            default: 5000
        },
        allowHtml: {
            type: Boolean,
            default: false
        },
        position: {
            type: String,
            default: 'left' // 'left', 'center', 'right'
        },
        transition: {
            type: String,
            default: 'slide' // 'slide' or 'fade'
        }
    },

    data() {
        return {
            queue: [],
            snackbarTimeout: null
        };
    },

    computed: {
        classes() {
            return [
                `ui-snackbar-container--position-${this.position}`
            ];
        }
    },

    beforeDestroy() {
        this.resetTimeout();
    },

    methods: {
        createSnackbar(snackbar) {
            snackbar.show = false;
            snackbar.duration = snackbar.duration || this.duration;

            this.queue.push(snackbar);

            if (this.queue.length === 1) {
                // If there's only one item in the queue,
                // it's the new snackbar, show it immediately
                return this.showNextSnackbar();
            } else if (!this.queueSnackbars) {
                // If we're not queuing snackbars, hide the current one.
                // This will trigger onHide(), which will show the new snackbar
                this.queue[0].show = false;
            }
        },

        showNextSnackbar() {
            if (this.queue.length === 0) {
                return;
            }

            // Show the first snackbar in the queue.
            // Will trigger onShow(), which will hide the snackbar after its duration
            this.queue[0].show = true;
        },

        onShow(snackbar) {
            // Abort if the snackbar is not the first in the queue
            // (since v-show triggers @show for all the snackbars, regardless of actual visibility)
            if (this.queue.indexOf(snackbar) !== 0) {
                return;
            }

            // Hide the snackbar after it's duration is complete.
            // Will trigger onHide(), which will remove it from
            // the queue and show the next snackbar
            this.snackbarTimeout = setTimeout(() => {
                this.queue[0].show = false;
            }, snackbar.duration);

            this.$emit('snackbar-show', snackbar);
            this.callHook('onShow', snackbar);
        },

        onHide(snackbar, index) {
            this.resetTimeout();

            if (this.queueSnackbars || this.queue.length === 1) {
                // Remove the snackbar from the queue
                this.queue.splice(index, 1);
            } else {
                // If snackbars are created too rapidly, a backlog grows even if we're
                // not queuing, due to the leave transition we have to wait for.
                //
                // When this happens, remove the current snackbar and all
                // other snackbars except the last.
                this.queue.splice(index, this.queue.length - 1);
            }

            this.$emit('snackbar-hide', snackbar);
            this.callHook('onHide', snackbar);

            this.showNextSnackbar();
        },

        onClick(snackbar) {
            snackbar.show = false;
            this.callHook('onClick', snackbar);
        },

        onActionClick(snackbar) {
            this.callHook('onActionClick', snackbar);
        },

        callHook(hook, snackbar) {
            if (typeof snackbar[hook] === 'function') {
                snackbar[hook].call(undefined, snackbar);
            }
        },

        resetTimeout() {
            clearTimeout(this.snackbarTimeout);
            this.snackbarTimeout = null;
        }
    },

    components: {
        UiSnackbar
    }
};
</script>

<style lang="scss">
@import './styles/imports';

.ui-snackbar-container {
    bottom: 0;
    left: rem(8px);
    overflow: hidden;
    pointer-events: none;
    position: absolute;

    .ui-snackbar {
        margin: rem(4px 4px 12px 4px);
        pointer-events: auto;
    }
}

.ui-snackbar-container--position-right {
    left: initial;
    right: rem(8px);
}

.ui-snackbar-container--position-center {
    display: flex;
    justify-content: center;
    left: rem(8px);
    right: rem(8px);
}
</style>
