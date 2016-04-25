<template>
    <li
        class="ui-tab-header-item" role="tab"
        :class="['type-' + type, { 'active': active, 'disabled': disabled }]"

        :tabindex="active ? 0 : -1" :aria-controls="id" :aria-selected="active ? 'true' : null"
        v-disabled="disabled" v-el:item
    >
        <div
            class="ui-tab-header-item-icon" v-if="type === 'icon' || type === 'icon-and-text'"
        >
            <ui-icon :icon="icon"></ui-icon>
        </div>

        <div
            class="ui-tab-header-item-text" v-text="text"
            v-if="type === 'text' || type === 'icon-and-text'"
        ></div>

        <ui-ripple-ink :trigger="$els.item" v-if="!hideRippleInk && !disabled"></ui-ripple-ink>
    </li>
</template>

<script>
import UiIcon from './UiIcon.vue';

import disabled from './directives/disabled';
import ShowsRippleInk from './mixins/ShowsRippleInk';

export default {
    name: 'ui-tab-header-item',

    props: {
        id: String,
        type: {
            type: String,
            default: 'text', // 'text', 'icon', or 'icon-and-text'
        },
        text: String,
        icon: String,
        active: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    components: {
        UiIcon
    },

    mixins: [
        ShowsRippleInk
    ],

    directives: {
        disabled
    }
};
</script>

<style lang="stylus">
@import './styles/imports';

.ui-tab-header-item {
    font-family: $font-stack;
    position: relative;

    display: flex;
    height: 48px;
    padding: 0 12px;
    text-transform: uppercase;

    align-items: center;
    justify-content: center;

    cursor: pointer;
    min-width: 80px;

    &.type-icon-and-text {
        display: flex;
        flex-direction: column;
        height: 72px;

        .ui-tab-header-item-icon {
            margin-bottom: 4px;
            margin-bottom: 4px;
        }
    }

    &.disabled {
        opacity: 0.4;
        cursor: default;
    }
}

.ui-tab-header-item-text {
    @extends $truncate-text;
}

.ui-tab-header-item-icon {
    width: 24px;
    height: 24px;

    .ui-icon {
        cursor: inherit;
    }
}
</style>
