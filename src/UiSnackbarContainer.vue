<template>
    <div class="ui-snackbar-container" :class="[position]">
        <ui-snackbar
            :duration="s.duration" :show.sync="s.show" :action="s.action"
            :action-color="s.actionColor" :persistent="s.persistent" :id="s.id" auto-hide

            @shown="shown(s)" @hidden="hidden(s)" @clicked="clicked(s)"
            @action-clicked="actionClicked(s)"

            v-for="s in queue"
        >
            <div v-html="s.message" v-if="s.allowHtml"></div>
            <span v-text="s.message" v-else></span>
        </ui-snackbar>
    </div>
</template>

<script>
import UUID from './helpers/uuid';
import UiSnackbar from './UiSnackbar.vue';

export default {
    name: 'ui-snackbar-container',

    props: {
        queueSnackbars: {
            type: Boolean,
            default: false
        },
        defaultDuration: {
            type: Number,
            default: 5000
        },
        position: {
            type: String,
            default: 'left', // 'left', 'center', 'right'
            coerce(position) {
                return 'position-' + position;
            }
        }
    },

    events: {
        'ui-snackbar::create': function(snackbar) {
            snackbar.show = false;
            snackbar.id = snackbar.id || UUID.short('ui-snackbar-');
            snackbar.duration = snackbar.duration || this.defaultDuration;

            this.queue.push(snackbar);

            if (this.queue.length === 1) {
                this.showNext();
            } else {
                if (!this.queueSnackbars) {
                    this.queue[0].show = false;
                }
            }
        }
    },

    data() {
        return {
            queue: [] // List of options for snackbars to show
        };
    },

    methods: {
        showNext() {
            if (!this.queue.length) {
                return;
            }

            // Show the next snackbar in the queue
            this.queue[0].show = true;
        },

        shown(snackbar) {
            this.$dispatch('snackbar-shown', snackbar);
            this.callHook('onShow', snackbar);
        },

        hidden(snackbar) {
            this.$dispatch('snackbar-hidden', snackbar);
            this.callHook('onHide', snackbar);

            this.queue.$remove(snackbar);
            this.showNext();
        },

        clicked(snackbar) {
            this.callHook('onClick', snackbar);
        },

        actionClicked(snackbar) {
            this.callHook('onActionClick', snackbar);
        },

        callHook(hook, snackbar) {
            if (typeof snackbar[hook] === 'function') {
                snackbar[hook].call(undefined, snackbar);
            }
        }
    },

    components: {
        UiSnackbar
    }
};
</script>

<style lang="stylus">
@import './styles/imports';

.ui-snackbar-container {
    position: absolute;
    overflow: hidden;

    bottom: 0;
    left: 8px;

    &.position-right {
        left: initial;
        right: 8px;
    }

    &.position-center {
        left: 8px;
        right: 8px;
        display: flex;
        justify-content: center;
    }

    .ui-snackbar {
        margin: 4px 4px 12px 4px;
    }
}
</style>
