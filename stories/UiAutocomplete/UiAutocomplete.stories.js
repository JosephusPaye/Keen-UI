import { story } from '../story';

import Basic from './Basic.story.vue';

const containedStory = StoryComponent => {
    return story(StoryComponent, { withContainer: 'small' });
};

export default {
    title: 'UiAutocomplete',
};

export const basic = containedStory(Basic);
