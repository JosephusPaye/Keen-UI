<template>
    <ul
        class="ui-menu" role="menu" tabindex="-1" @keydown.esc="closeDropdown" v-el:dropdown
        :class="{ 'has-icons': showIcons, 'has-secondary-text': showSecondaryText }"
    >
        <ui-menu-item
            :type="o.type" :icon="o.icon" :text="o.text" :secondary-text="o.secondaryText"
            :show-icon="showIcons" :show-secondary-text="showSecondaryText"
            :hide-ripple-ink="hideRippleInk" :disabled="o.disabled"

            @keydown.enter.prevent="optionSelect(o)" @click="optionSelect(o)"

            v-for="o in options"
        ></ui-menu-item>

        <div
            class="ui-menu-focus-redirector" @focus="redirectFocus" tabindex="0"
        ></div>
    </ul>
</template>

<script>
import UiMenuItem from './UiMenuItem.vue';

import ShowsDropdown from './mixins/ShowsDropdown';

export default {
    name: 'ui-menu',

    props: {
        options: {
            type: Array,
            required: true,
            default() {
                return [];
            }
        },
        showIcons: {
            type: Boolean,
            default: false
        },
        showSecondaryText: {
            type: Boolean,
            default: false
        },
        hideRippleInk: {
            type: Boolean,
            default: false
        }
    },

    events: {
        'dropdown-opened': function() {
            if (this.containFocus) {
                document.addEventListener('focus', this.restrictFocus, true);
            }

            this.$dispatch('opened');

            // Bubble the event up
            return true;
        },

        'dropdown-closed': function() {
            if (this.containFocus) {
                document.removeEventListener('focus', this.restrictFocus, true);
            }

            this.$dispatch('closed');

            // Bubble the event up
            return true;
        }
    },

    methods: {
        optionSelect(option) {
            if (! (option.disabled || option.type === 'divider')) {
                this.$dispatch('option-selected', option);

                this.closeDropdown();
            }
        },

        restrictFocus(e) {
            if (! this.$els.dropdown.contains(e.target)) {
                e.stopPropagation();

                this.$els.dropdown.querySelector('.ui-menu-item').focus();
            }
        },

        redirectFocus(e) {
            e.stopPropagation();

            this.$els.dropdown.querySelector('.ui-menu-item').focus();
        }
    },

    components: {
        UiMenuItem
    },

    mixins: [
        ShowsDropdown
    ]
};
</script>

<style lang="stylus">
@import './styles/imports';

.ui-menu {
    font-family: $font-stack;

    margin: 0;
    padding: 4px 0;
    outline: none;
    list-style: none;

    background-color: white;
    box-shadow: 0 2px 4px -1px alpha(black, 0.3),
                0 4px 5px 0 alpha(black, 0.15),
                0 1px 10px 0 alpha(black, 0.13);

    min-width: 168px;
    max-width: 272px;

    max-height: 100vh;
    overflow-y: auto;

    &.has-secondary-text {
        min-width: 208px;
        max-width: 304px;
    }
}
</style>
