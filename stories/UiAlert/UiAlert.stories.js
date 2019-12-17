import { attachSource } from '../story-util';

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
import InteractiveExample from './InteractiveExample.story.vue';

export default {
    title: 'UiAlert',
};

export const info = () => TypeInfo;
attachSource(info, TypeInfo);

export const success = () => TypeSuccess;
attachSource(success, TypeSuccess);

export const warning = () => TypeWarning;
attachSource(warning, TypeWarning);

export const error = () => TypeError_;
attachSource(error, TypeError_);

export const withMultilineContent = () => WithMultilineContent;
attachSource(withMultilineContent, WithMultilineContent);

export const withHTML = () => WithHtml;
attachSource(withHTML, WithHtml);

export const withCustomIcon = () => WithCustomIcon;
attachSource(withCustomIcon, WithCustomIcon);

export const withoutIcon = () => WithoutIcon;
attachSource(withoutIcon, WithoutIcon);

export const dismissible = () => Dismissable;
attachSource(dismissible, Dismissable);

export const dismissableWithoutAnimation = () => DismissableWithoutAnimation;
attachSource(dismissableWithoutAnimation, DismissableWithoutAnimation);

export const persistent = () => Persistent;
attachSource(persistent, Persistent);

export const interactiveExample = () => InteractiveExample;
