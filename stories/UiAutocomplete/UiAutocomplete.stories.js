import { story } from '../story';

import Basic from './Basic.story.vue';
import FloatingLabel from './FloatingLabel.story.vue';
import WithIcon from './WithIcon.story.vue';
import WithValidation from './WithValidation.story.vue';
import WithSuggestionImage from './WithSuggestionImage.story.vue';
import DynamicSuggestions from './DynamicSuggestions.story.vue';
import WithCustomTemplate from './WithCustomTemplate.story.vue';
import Disabled from './Disabled.story.vue';

const containedStory = (StoryComponent, options) => {
    return story(
        StoryComponent,
        Object.assign({ withContainer: 'small' }, options)
    );
};

export default {
    title: 'UiAutocomplete',
};

export const basic = containedStory(Basic);
export const floatingLabel = containedStory(FloatingLabel);
export const withIcon = containedStory(WithIcon);

export const withValidation = containedStory(WithValidation, {
    withNotes: 'Validation: required. Focus and then blur to validate.',
});

export const withSuggestionImage = containedStory(WithSuggestionImage);

export const dynamicSuggestions = containedStory(DynamicSuggestions, {
    withNotes:
        'Suggestions are updated dynamically when the suggestions array changes.',
});

export const withCustomTemplate = containedStory(WithCustomTemplate, {
    withNotes:
        'The following autocomplete uses a custom template that renders the prop passed to the custom template for each suggestion.',
});

export const disabled = containedStory(Disabled);
