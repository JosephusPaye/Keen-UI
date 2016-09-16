<template>
    <div
        class="ui-tab" :id="id" role="tabpanel" :tabindex="active ? '0' : null"
        :aria-hidden="!active ? 'true' : null" v-show="active"
    >
        <slot></slot>
    </div>
</template>

<script>
import UUID from './helpers/uuid'

export default {
    name: 'ui-tab',
    data() {
        return {
            id: ''
        }
    },
    props: {
        header: String,
        icon: String,
        disabled: {
            type: Boolean,
            default: false
        },
        _id: String,
    },

    computed: {
        active() {
            return this.$parent.activeTab === this.id
        }
    },

    watch: {
        active() {
            if (this.active) {
                this.$emit('selected', this.id)
            } else {
                this.$emit('deselected', this.id)
            }
        },
        id() {
            if (this._id) {
                this.id = this._id
            }
        }
    }
};
</script>

<style lang="stylus">
@import './styles/imports';

.ui-tab {
    outline: none;
}
</style>
