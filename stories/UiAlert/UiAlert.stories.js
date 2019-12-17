import { story } from '../story';

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

export const info = story(TypeInfo);
export const success = story(TypeSuccess);
export const warning = story(TypeWarning);
export const error = story(TypeError_);
export const withMultilineContent = story(WithMultilineContent);
export const withHTML = story(WithHtml);
export const withCustomIcon = story(WithCustomIcon);
export const withoutIcon = story(WithoutIcon);
export const dismissible = story(Dismissable);
export const dismissableWithoutAnimation = story(DismissableWithoutAnimation);
export const persistent = story(Persistent);

export const interactiveExample = story(InteractiveExample, {
    withSource: false,
});
