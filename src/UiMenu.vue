<template>
    <ul class="ui-menu" role="menu" :class="classes">
        <ui-menu-option
            :disable-ripple="disableRipple"
            :disabled="option[keys.disabled]"
            :icon-props="iconProps || option[keys.iconProps]"
            :icon="hasIcons ? option[keys.icon] : null"
            :label="option[keys.type] === 'divider' ? null : option[keys.label] || option"
            :secondary-text="hasSecondaryText ? option[keys.secondaryText] : null"
            :type="option[keys.type]"

            @click.native="selectOption(option)"
            @keydown.enter.native.prevent="selectOption(option)"
            @keydown.esc.native.esc="closeMenu"

            v-for="option in options"
        >
            <slot name="option" :option="option"></slot>
        </ui-menu-option>

        <div
            class="ui-menu__focus-redirector"
            tabindex="0"

            @focus="redirectFocus"

            v-if="containFocus"
        ></div>
    </ul>
</template>

<script>
import UiMenuOption from './UiMenuOption.vue';

import config from './config';

export default {
    name: 'ui-menu',

    props: {
        options: {
            type: Array,
            default() {
                return [];
            }
        },
        hasIcons: {
            type: Boolean,
            default: false
        },
        iconProps: Object,
        hasSecondaryText: {
            type: Boolean,
            default: false
        },
        containFocus: {
            type: Boolean,
            default: false
        },
        keys: {
            type: Object,
            default() {
                return config.data.UiMenu.keys;
            }
        },
        disableRipple: {
            type: Boolean,
            default: config.data.disableRipple
        },
        raised: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        classes() {
            return {
                'is-raised': this.raised,
                'has-icons': this.hasIcons,
                'has-secondary-text': this.hasSecondaryText
            };
        }
    },

    methods: {
        selectOption(option) {
            if (option.disabled || option.type === 'divider') {
                return;
            }

            this.$emit('select', option);
            this.closeMenu();
        },

        closeMenu() {
            this.$emit('close');
        },

        redirectFocus(e) {
            e.stopPropagation();
            this.$el.querySelector('.ui-menu-option').focus();
        }
    },

    components: {
        UiMenuOption
    }
};
</script>

<style lang="scss">
@import './styles/imports';

.ui-menu {
    background-color: white;
    border: rem-calc(1px) solid rgba(black, 0.08);
    font-family: $font-stack;
    list-style: none;
    margin: 0;
    max-height: 100vh;
    max-width: rem-calc(272px);
    min-width: rem-calc(168px);
    outline: none;
    overflow-x: hidden;
    overflow-y: auto;
    padding: rem-calc(4px 0);

    &.is-raised {
        border: none;
        box-shadow: 0 2px 4px -1px rgba(black, 0.2),
                    0 4px 5px 0 rgba(black, 0.14),
                    0 1px 10px 0 rgba(black, 0.12);
    }

    &.has-secondary-text {
        min-width: rem-calc(240px);
        max-width: rem-calc(304px);
    }
}

.ui-menu__focus-redirector {
    position: absolute;
    opacity: 0;
}
</style>
