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

// We need to get the env variable here because it later gets poluted by child processes
const mode = process.env.NODE_ENV || "production";
entries.forEach(async (entry) => {
  await build(getLibConfig({ entry, mode }));
});
