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
                    :icon="icon"
                    :icon-set="iconProps.iconSet"
                    :use-svg="iconProps.useSvg"
                    :remove-text="iconProps.removeText"
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
        disabled: {
            type: Boolean,
            default: false
        },
        disableRipple: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        classes() {
            return [
                'ui-tab-header-item--type-' + this.type,
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

<style lang="sass">
@import '~styles/imports';

.ui-tab-header-item {
    align-items: center;
    cursor: pointer;
    display: flex;
    font-family: $font-stack;
    height: 48px;
    justify-content: center;
    min-width: 80px;
    padding: 0 12px;
    position: relative;
    text-transform: uppercase;

    &.is-disabled {
        cursor: default;
        opacity: 0.4;
        user-select: none;
    }

    &:hover {
        background-color: rgba(black, 0.05);
    }
}

.ui-tab-header-item--type-icon-and-text {
    display: flex;
    flex-direction: column;
    height: 72px;

    .ui-tab-header-item__icon {
        margin-bottom: 4px;
        margin-bottom: 4px;
    }
}

.ui-tab-header-item__text {
    @include text-truncation;
    font-weight: 500;
}

.ui-tab-header-item__icon {
    height: 24px;
    width: 24px;

    .ui-icon {
        cursor: inherit;
    }
}
</style>
