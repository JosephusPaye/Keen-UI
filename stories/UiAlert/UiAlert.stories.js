import TypeInfo from './TypeInfo.story.vue';
import TypeSuccess from './TypeSuccess.story.vue';
import TypeWarning from './TypeWarning.story.vue';
import TypeError_ from './TypeError.story.vue';
import WithMultilineContent from './WithMultilineContent.story.vue';
import WithHtml from './WithHtml.story.vue';
import WithCustomIcon from './WithCustomIcon.story.vue';
import WithoutIcon from './WithoutIcon.story.vue';
import Dismissable from './Dismissable.story.vue';
import DismissableWithoutAnimation from './DismissableWithoutAnimation.story.vue';
import Persistent from './Persistent.story.vue';

export default {
    title: 'UiAlert',
};

export const info = () => TypeInfo;
export const success = () => TypeSuccess;
export const warning = () => TypeWarning;
export const error = () => TypeError_;
export const withMultilineContent = () => WithMultilineContent;
export const withHTML = () => WithHtml;
export const withCustomIcon = () => WithCustomIcon;
export const withoutIcon = () => WithoutIcon;
export const dismissible = () => Dismissable;
export const dismissableWithoutAnimation = () => DismissableWithoutAnimation;
export const persistent = () => Persistent;
