<template>
    <div class="ui-tooltip" v-text="content" v-el:tooltip></div>
</template>

<script>
import Tooltip from 'tether-tooltip';

export default {
    name: 'ui-tooltip',

    props: {
        content: String,
        trigger: {
            type: Element,
            required: true
        },
        position: {
            type: String,
            default: 'bottom center'
        },
        openOn: {
            type: String,
            default: 'hover focus'
        }
    },

    data() {
        return {
            tooltip: null
        };
    },

    watch: {
        trigger() {
            if (!this.tooltip) {
                this.initialize();
            }
        }
    },

    ready() {
        this.initialize();
    },

    beforeDestory() {
        if (this.tooltip) {
            this.tooltip.remove();
            this.tooltip.destroy();
        }
    },

    methods: {
        initialize() {
            if (this.trigger) {
                this.tooltip = new Tooltip({
                    target: this.trigger,
                    content: this.$els.tooltip,
                    classes: 'ui-tooltip-theme',
                    position: this.position,
                    openOn: 'hover focus'
                });
            }
        }
    }
};
</script>

<style lang="stylus">
@import './styles/imports';
@require './styles/components/tooltip';

$tooltip-content-margin = 4px;

.ui-tooltip {
    line-height: 1;
}

.tooltip-element.ui-tooltip-theme {
    max-width: 100%;
    max-height: 100%;
    pointer-events: none;
    z-index: $z-index-tooltip;

    .tooltip-content {
        display: flex;
        align-items: center;

        position: relative;
        border-radius: 2px;
        padding: 0 8px;
        height: 26px;

        font-family: inherit;
        font-size: 13px;
        line-height: 1;

        background: $md-grey-900;
        opacity: 0.9;
        color: white;
    }

    &.tooltip-element-attached-bottom.tooltip-element-attached-center .tooltip-content {
        margin-bottom: $tooltip-content-margin;
    }

    &.tooltip-element-attached-top.tooltip-element-attached-center .tooltip-content {
        margin-top: $tooltip-content-margin;
    }

    &.tooltip-element-attached-right.tooltip-element-attached-middle .tooltip-content {
        margin-right: $tooltip-content-margin;
    }

    &.tooltip-element-attached-left.tooltip-element-attached-middle .tooltip-content {
        margin-left: $tooltip-content-margin;
    }

    &.tooltip-element-attached-top.tooltip-element-attached-left.tooltip-target-attached-bottom .tooltip-content {
        margin-top: $tooltip-content-margin;
    }

    &.tooltip-element-attached-top.tooltip-element-attached-right.tooltip-target-attached-bottom .tooltip-content {
        margin-top: $tooltip-content-margin;
    }

    &.tooltip-element-attached-bottom.tooltip-element-attached-left.tooltip-target-attached-top .tooltip-content {
        margin-bottom: $tooltip-content-margin;
    }

    &.tooltip-element-attached-bottom.tooltip-element-attached-right.tooltip-target-attached-top .tooltip-content {
        margin-bottom: $tooltip-content-margin;
    }

    &.tooltip-element-attached-top.tooltip-element-attached-right.tooltip-target-attached-left .tooltip-content {
        margin-right: $tooltip-content-margin;
    }

    &.tooltip-element-attached-top.tooltip-element-attached-left.tooltip-target-attached-right .tooltip-content {
        margin-left: $tooltip-content-margin;
    }

    &.tooltip-element-attached-bottom.tooltip-element-attached-right.tooltip-target-attached-left .tooltip-content {
        margin-right: $tooltip-content-margin;
    }

    &.tooltip-element-attached-bottom.tooltip-element-attached-left.tooltip-target-attached-right .tooltip-content {
        margin-left: $tooltip-content-margin;
    }
}
</style>
