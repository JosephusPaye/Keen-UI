<template>
    <div
        class="ui-tab"
        role="tabpanel"

        :aria-hidden="!isActive ? 'true' : null"
        :id="id"
        :tabindex="isActive ? '0' : null"

        v-show="show && isActive"
    >
        <!-- Icon slot is hidden, accessed programmatically in UiTabs -->
        <div style="display: none">
            <slot name="icon"></slot>
        </div>

        <slot></slot>
    </div>
</template>

<script>
import UUID from './helpers/uuid';

export default {
    name: 'ui-tab',

    props: {
        id: {
            type: String,
            default() {
                return UUID.short('ui-tab-');
            }
        },
        title: String,
        icon: String,
        iconProps: {
            type: Object,
            default() {
                return {};
            }
        },
        show: {
            type: Boolean,
            default: true
        },
        selected: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            isActive: false
        };
    },

    watch: {
        show() {
            this.$parent.handleTabShowChange(this);
        },

        disabled() {
            this.$parent.handleTabDisableChange(this);
        }
    },

    created() {
        this.$parent.registerTab(this);
    },

    methods: {
        activate() {
            this.isActive = true;
            this.$emit('select', this.id);
        },

        deactivate() {
            this.isActive = false;
            this.$emit('deselect', this.id);
        }
    }
};
</script>

<style lang="scss">
@import './styles/imports';

.ui-tab {
    outline: none;
}
</style>
