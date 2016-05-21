<template>
    <a
        class="ui-menu-item" role="menu-item" :tabindex="(isDivider || disabled) ? null : '0'"
        :class="{ 'divider': isDivider, 'disabled' : disabled }"
    >
        <ui-icon
            class="ui-menu-item-icon" :icon="icon" v-if="showIcon && !isDivider && icon"
        ></ui-icon>

        <div class="ui-menu-item-text" v-text="text" v-if="!isDivider"></div>

        <div
            class="ui-menu-item-secondary-text" v-text="secondaryText"
            v-if="showSecondaryText && !isDivider && secondaryText"
        ></div>

        <ui-ripple-ink
            :trigger="$el" v-if="!hideRippleInk && !disabled && !isDivider"
        ></ui-ripple-ink>
    </a>
</template>

<script>
import UiIcon from './UiIcon.vue';

import ShowsRippleInk from './mixins/ShowsRippleInk';

export default {
    name: 'ui-menu-item',

    props: {
        type: String,
        text: String,
        icon: String,
        showIcon: {
            type: Boolean,
            default: false
        },
        secondaryText: String,
        showSecondaryText: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        isDivider() {
            return this.type === 'divider';
        }
    },

    components: {
        UiIcon
    },

    mixins: [
        ShowsRippleInk
    ]
};
</script>

<style lang="stylus">
@import './styles/imports';

.ui-menu-item {
    font-family: $font-stack;

    position: relative;
    display: block;
    height: 40px;
    @extends $disable-user-select;

    &.divider {
        display: block;
        width: 100%;
        margin: 6px 0;
        padding: 0;
        height: 1px;

        background-color: alpha(black, 0.08);
    }

    &:not(.divider) {
        display: flex;
        align-items: center;
        padding: 8px 16px;
        width: 100%;
        text-decoration: none;
        color: $md-dark-text;
        font-size: 14px;
        font-weight: normal;
        outline: none;

        &:hover:not(.disabled) {
            background-color: alpha(black, 0.06);
        }

        body[modality="keyboard"] &:focus {
            background-color: alpha(black, 0.1);
        }

        &.disabled {
            opacity: 0.5;
            color: $md-dark-secondary;

            .ui-menu-item-secondary-text {
                color: $md-dark-secondary;
            }
        }

        &:not(.disabled) {
            cursor: pointer;
        }
    }
}

.ui-menu-item-icon {
    margin-right: 12px;
    font-size: 18px;
    color: $md-dark-secondary;
}

.ui-menu-item-text {
    flex-grow: 1;
    @extends $truncate-text;
}

.ui-menu-item-secondary-text {
    flex-shrink: 0;
    margin-left: 4px;
    font-size: 13px;
    color: $md-dark-hint;
}
</style>
