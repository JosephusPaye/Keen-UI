import { build } from "vite";
import getLibConfig from "./vite.config.lib.provider.mjs";

const entries = [
  "UiAlert",
  "UiAutocomplete",
  "UiButton",
  "UiCalendar",
  "UiCheckbox",
  "UiCheckboxGroup",
  "UiCloseButton",
  "UiCollapsible",
  "UiConfirm",
  "UiDatepicker",
  "UiDatepickerCalendar",
  "UiFab",
  "UiFileupload",
  "UiIcon",
  "UiIconButton",
  "UiMenu",
  "UiModal",
  "UiPopover",
  "UiPreloader",
  "UiProgressCircular",
  "UiProgressLinear",
  "UiRadio",
  "UiRadioGroup",
  "UiRippleInk",
  "UiSelect",
  "UiSlider",
  "UiSnackbar",
  "UiSnackbarContainer",
  "UiSwitch",
  "UiTab",
  "UiTabs",
  "UiTextbox",
  "UiToolbar",
  "UiTooltip",
];

entries.forEach(async (entry) => {
  await build(getLibConfig({ entry, mode: process.env.NODE_ENV || "production" }));
});
