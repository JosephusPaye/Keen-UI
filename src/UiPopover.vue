<template>
    <div
        class="ui-popover" role="dialog" tabindex="-1" @keydown.esc="closeDropdown" ref="dropdown"
    >
        <slot></slot>
    </div>
</template>

<script>
import ShowsDropdown from './mixins/ShowsDropdown';

export default {
    name: 'ui-popover',

    mounted() {
        this.$on('dropdown-opened', function() {
            if (this.containFocus) {
                document.addEventListener('focus', this.restrictFocus, true)
            }
            this.$emit('opened')
        })

        this.$on('dropdown-closed', function() {
            if (this.containFocus) {
                document.removeEventListener('focus', this.restrictFocus, true)
            }
            this.$emit('closed')
        })
    },

    methods: {
        restrictFocus(e) {
            if (! this.$refs.dropdown.contains(e.target)) {
                e.stopPropagation()

                this.$refs.dropdown.focus()
            }
        }
    },

    mixins: [
        ShowsDropdown
    ]
};
</script>

<style lang="stylus">
@import './styles/imports';

.ui-popover {
    padding: 16px;
    outline: none;

    background-color: white;
    box-shadow: 0 2px 4px -1px alpha(black, 0.3),
                0 4px 5px 0 alpha(black, 0.15),
                0 1px 10px 0 alpha(black, 0.13);
}
</style>
