import { story } from '../story';

import ColorDefault from './ColorDefault.story.vue';
import ColorPrimary from './ColorPrimary.story.vue';
import ColorAccent from './ColorAccent.story.vue';
import ColorGreen from './ColorGreen.story.vue';
import ColorOrange from './ColorOrange.story.vue';
import ColorRed from './ColorRed.story.vue';
import SizeSmall from './SizeSmall.story.vue';
import SizeNormal from './SizeNormal.story.vue';
import SizeLarge from './SizeLarge.story.vue';
import IconLeft from './IconLeft.story.vue';
import IconRight from './IconRight.story.vue';
import AsLink from './AsLink.story.vue';
import WithTooltip from './WithTooltip.story.vue';
import WithDropdownMenu from './WithDropdownMenu.story.vue';
import WithDropdownCustom from './WithDropdownCustom.story.vue';
import InteractiveExample from './InteractiveExample.story.vue';

export default {
    title: 'UiButton',
};

export const colorDefault = story(ColorDefault);
export const colorPrimary = story(ColorPrimary);
export const colorAccent = story(ColorAccent);
export const colorGreen = story(ColorGreen);
export const colorOrange = story(ColorOrange);
export const colorRed = story(ColorRed);
export const sizeSmall = story(SizeSmall);
export const sizeNormal = story(SizeNormal);
export const sizeLarge = story(SizeLarge);
export const iconLeft = story(IconLeft);
export const iconRight = story(IconRight);
export const asLink = story(AsLink);
export const withTooltip = story(WithTooltip);
export const withDropdownMenu = story(WithDropdownMenu);
export const withDropdownCustom = story(WithDropdownCustom);

export const interactiveExample = story(InteractiveExample, {
    withSource: false,
});
