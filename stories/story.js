import {
    smallContainer,
    mediumContainer,
    largeContainer,
    notesDecorator,
} from './decorators';

export function story(StoryComponent, options = {}) {
    const { withSource, withContainer, withNotes } = Object.assign(
        { withSource: true, withContainer: false },
        options
    );

    const storyExport = () => StoryComponent;

    if (withSource || withContainer || withNotes) {
        storyExport.story = {};

        if (withSource) {
            attachSource(storyExport, StoryComponent);
        }

        if (withContainer) {
            decorate(
                storyExport,
                withContainer === 'small'
                    ? smallContainer
                    : withContainer === 'medium'
                    ? mediumContainer
                    : largeContainer
            );
        }

        if (withNotes) {
            attachNotes(storyExport, withNotes);
        }
    }

    return storyExport;
}

function attachSource(storyExport, StoryComponent) {
    storyExport.story.parameters = Object.assign(
        {},
        storyExport.story.parameters,
        {
            source: StoryComponent.__source,
        }
    );
}

function decorate(storyExport, decorator) {
    storyExport.story.decorators = storyExport.story.decorators || [];
    storyExport.story.decorators.push(decorator);
}

function attachNotes(storyExport, notes) {
    decorate(storyExport, notesDecorator(notes));

    storyExport.story.parameters = Object.assign(
        {},
        storyExport.story.parameters,
        { notes }
    );
}
