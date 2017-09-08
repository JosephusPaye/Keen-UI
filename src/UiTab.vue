<template>
    <div
        class="ui-tab"
        role="tabpanel"

        :aria-hidden="!isActive ? 'true' : null"
        :id="id"
        :tabindex="isActive ? '0' : null"

        v-show="isActive"
    >
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
        disabled() {
            this.$parent.onTabDisabledChange(this);
        }
    },

    created() {
        this.$parent.addTab(this);
    },

    beforeDestroy() {
        this.$parent.removeTab(this);
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
