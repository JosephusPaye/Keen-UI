const smallContainer = () => ({
    template: `<div style="max-width: 28rem; padding: 1rem"><story /></div>`,
});

const mediumContainer = () => ({
    template: `<div style="max-width: 36rem; padding: 1rem"><story /></div>`,
});

const largeContainer = () => ({
    template: `<div style="max-width: 48em; padding: 1rem"><story /></div>`,
});

export function story(StoryComponent, options = {}) {
    const { withSource, withContainer } = Object.assign(
        { withSource: true, withContainer: false },
        options
    );

    const storyExport = () => StoryComponent;

    if (withSource || withContainer) {
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
