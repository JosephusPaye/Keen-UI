<template>
  <li
    class="ui-tab-header-item"
    role="tab"
    :aria-controls="id"
    :aria-selected="active ? 'true' : null"
    :class="classes"
    :disabled="disabled ? 'true' : null"
    :tabindex="active ? 0 : -1"
  >
    <slot>
      <div v-if="hasIcon" class="ui-tab-header-item__icon">
        <slot v-if="$slots.icon" name="icon"></slot>
        <ui-icon v-else-if="icon" :icon="icon" />
      </div>

      <div v-if="hasText" class="ui-tab-header-item__text">{{ title }}</div>
    </slot>

    <ui-ripple-ink v-if="!disableRipple && !disabled"></ui-ripple-ink>

    <ui-tooltip v-if="tooltip" :open-on="openTooltipOn" :position="tooltipPosition">{{
      tooltip
    }}</ui-tooltip>
  </li>
</template>

<script>
import UiIcon from "./UiIcon.vue";
import UiRippleInk from "./UiRippleInk.vue";
import UiTooltip from "./UiTooltip.vue";

export default {
  name: "UiTabHeaderItem",

  components: {
    UiIcon,
    UiRippleInk,
    UiTooltip,
  },

  props: {
    id: String,
    type: {
      type: String,
      default: "text", // 'text', 'icon', or 'icon-and-text'
    },
    title: String,
    icon: String,
    active: {
      type: Boolean,
      default: false,
    },
    disableRipple: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    tooltip: String,
    openTooltipOn: String,
    tooltipPosition: String,
  },

  computed: {
    classes() {
      return [
        `ui-tab-header-item--type-${this.type}`,
        { "is-active": this.active },
        { "is-disabled": this.disabled },
      ];
    },

    hasIcon() {
      return this.type === "icon" || this.type === "icon-and-text";
    },

    hasText() {
      return this.type === "text" || this.type === "icon-and-text";
    },
  },
};
</script>

<style lang="scss">
@import "./styles/imports";

.ui-tab-header-item {
  align-items: center;
  cursor: pointer;
  display: flex;
  font-family: inherit;
  height: rem(48px);
  justify-content: center;
  min-width: rem(80px);
  padding: rem(0 12px);
  position: relative;
  text-transform: uppercase;
  transition: color 0.1s;

  &.is-active::after {
    opacity: 1;
    transform: scaleX(1);
  }

  &.is-disabled {
    cursor: default;
    opacity: 0.4;
    user-select: none;
  }
}

.ui-tab-header-item--type-icon-and-text {
  display: flex;
  flex-direction: column;
  height: rem(72px);

  .ui-tab-header-item__icon {
    margin-bottom: rem(4px);
  }
}

.ui-tab-header-item__text {
  @include text-truncation;
  font-size: rem(15px);
  font-weight: $font-weight--semibold;
}

.ui-tab-header-item__icon {
  height: rem(24px);
  width: rem(24px);
  color: currentColor;

  .ui-icon {
    cursor: inherit;
  }
}

.ui-tab-header-item::after {
  bottom: 0;
  content: "";
  height: rem(3px);
  left: 0;
  opacity: 0;
  position: absolute;
  transform: scaleX(0);
  transition: opacity 0.2s ease, transform 0.2s ease;
  width: 100%;
}

// ================================================
// Indicator Colors
// ================================================

.ui-tabs--indicator-color-primary {
  .ui-tab-header-item::after {
    background-color: $brand-primary-color;
  }
}

.ui-tabs--indicator-color-accent {
  .ui-tab-header-item::after {
    background-color: $brand-accent-color;
  }
}

.ui-tabs--indicator-color-white {
  .ui-tab-header-item::after {
    background-color: white;
    box-shadow: 0 1px 1px rgba(black, 0.16);
  }
}
</style>
