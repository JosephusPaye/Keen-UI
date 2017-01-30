<template>
    <li
        class="ui-tab-header-item"
        ref="headerItem"
        role="tab"

        :aria-controls="id"
        :aria-selected="active ? 'true' : null"
        :class="classes"
        :disabled="disabled"
        :tabindex="active ? 0 : -1"
    >
        <div
            class="ui-tab-header-item__icon"
            v-if="type === 'icon' || type === 'icon-and-text'"
        >
            <slot name="icon">
                <ui-icon
                    :icon-set="iconProps.iconSet"
                    :icon="icon"
                    :remove-text="iconProps.removeText"
                    :use-svg="iconProps.useSvg"
                ></ui-icon>
            </slot>
        </div>

        <div
            class="ui-tab-header-item__text"
            v-if="type === 'text' || type === 'icon-and-text'"
        >{{ title }}</div>

        <ui-ripple-ink trigger="headerItem" v-if="!disableRipple && !disabled"></ui-ripple-ink>
    </li>
</template>

<script>
import UiIcon from './UiIcon.vue';
import UiRippleInk from './UiRippleInk.vue';

import config from './config';

export default {
    name: 'ui-tab-header-item',

    props: {
        id: String,
        type: {
            type: String,
            default: 'text' // 'text', 'icon', or 'icon-and-text'
        },
        title: String,
        icon: String,
        iconProps: {
            type: Object,
            default() {
                return {};
            }
        },
        active: {
            type: Boolean,
            default: false
        },
        show: {
            type: Boolean,
            default: true
        },
        disableRipple: {
            type: Boolean,
            default: config.data.disableRipple
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        classes() {
            return [
                `ui-tab-header-item--type-${this.type}`,
                { 'is-active': this.active },
                { 'is-disabled': this.disabled }
            ];
        }
    },

    components: {
        UiIcon,
        UiRippleInk
    }
};
</script>

<style lang="scss">
@import './styles/imports';

.ui-tab-header-item {
    align-items: center;
    cursor: pointer;
    display: flex;
    font-family: $font-stack;
    height: rem-calc(48px);
    justify-content: center;
    min-width: rem-calc(80px);
    padding: rem-calc(0 12px);
    position: relative;
    text-transform: uppercase;

    &:hover {
        background-color: rgba(black, 0.05);
    }

    &.is-disabled {
        background-color: transparent;
        cursor: default;
        opacity: 0.4;
        user-select: none;
    }
}

.ui-tab-header-item--type-icon-and-text {
    display: flex;
    flex-direction: column;
    height: rem-calc(72px);

    .ui-tab-header-item__icon {
        margin-bottom: rem-calc(4px);
    }
}

.ui-tab-header-item__text {
    @include text-truncation;
    font-size: rem-calc(15px);
    font-weight: 500;
}

.ui-tab-header-item__icon {
    height: rem-calc(24px);
    width: rem-calc(24px);

    .ui-icon {
        cursor: inherit;
    }
}
</style>
