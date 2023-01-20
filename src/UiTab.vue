<template>
  <div
    v-show="isActive"
    :id="id"
    class="ui-tab"
    role="tabpanel"
    :aria-hidden="!isActive ? 'true' : null"
    :tabindex="isActive ? '0' : null"
  >
    <slot></slot>
  </div>
</template>

<script>
import UUID from "./helpers/uuid";

export default {
  name: "UiTab",

  props: {
    id: {
      type: String,
      default() {
        return UUID.short("ui-tab-");
      },
    },
    title: String,
    icon: String,
    selected: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    tooltip: String,
    openTooltipOn: String,
    tooltipPosition: {
      type: String,
      default: "top",
    },
  },

  emits: ["select", "deselect"],

  data() {
    return {
      isActive: false,
    };
  },

  watch: {
    disabled() {
      this.$parent.onTabDisabledChange(this);
    },
  },

  created() {
    this.$parent.addTab(this);
  },

  beforeUnmount() {
    this.$parent.removeTab(this);
  },

  methods: {
    activate() {
      this.isActive = true;
      this.$emit("select", this.id);
    },

    deactivate() {
      this.isActive = false;
      this.$emit("deselect", this.id);
    },
  },
};
</script>

<style lang="scss">
@import "./styles/imports";

.ui-tab {
  outline: none;
}
</style>
