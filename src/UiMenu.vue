<template>
    <ul
        class="ui-menu" role="menu" tabindex="-1" @keydown.esc="closeDropdown" ref="dropdown"
        :class="{ 'has-icons': showIcons, 'has-secondary-text': showSecondaryText }"
    >
        <ui-menu-option
            v-for="option in options"

            :type="option.type" :icon="option.icon" :text="option.text" :disabled="option.disabled"
            :secondary-text="option.secondaryText" :option="option" :show-icon="showIcons"
            :show-secondary-text="showSecondaryText" :hide-ripple-ink="hideRippleInk"

            @keydown.native.enter.prevent="optionSelect(option)" @click.native="optionSelect(option)"
        ></ui-menu-option>

        <div
            class="ui-menu-focus-redirector" @focus="redirectFocus" tabindex="0"
        ></div>
    </ul>
</template>

<script>
import UiMenuOption from './UiMenuOption.vue'
import ShowsDropdown from './mixins/ShowsDropdown'


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
        },
        closeOnSelect: {
            type: Boolean,
            default: true
        },
    },

    methods: {
        optionSelect(option) {
            if (!(option.disabled || option.type === 'divider')) {
                if (Object.prototype.toString.call(option.callback) === '[object Function]') {
                    option.callback()
                } else {
                    this.$emit('option-selected', option)
                }
                if (this.closeOnSelect) {
                    setTimeout(()=>{this.closeDropdown()}, 150)
                }
            }
        },

        restrictFocus(e) {
            if (! this.$refs.dropdown.contains(e.target)) {
                e.stopPropagation();

                this.$refs.dropdown.querySelector('.ui-menu-option').focus();
            }
        },

        redirectFocus(e) {
            e.stopPropagation();

            this.$refs.dropdown.querySelector('.ui-menu-option').focus();
        }
    },

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
            this.$emit('closed');
        })
    },

    components: {
        UiMenuOption
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
    overflow-x: hidden;

    &.has-secondary-text {
        min-width: 208px;
        max-width: 304px;
    }
}
</style>
