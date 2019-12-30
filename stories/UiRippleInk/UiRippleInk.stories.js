import { story } from '../story';

import Basic from './Basic.story.vue';
import CustomColorAndOpacity from './CustomColorAndOpacity.story.vue';
import InteractiveExample from './InteractiveExample.story.vue';

export default {
    title: 'UiRippleInk',
};

export const basic = story(Basic);
export const customColorAndOpacity = story(CustomColorAndOpacity);

export const interactiveExample = story(InteractiveExample, {
    withSource: false,
});
