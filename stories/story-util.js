export function attachSource(storyExport, StoryComponent) {
    storyExport.story = {
        parameters: {
            source: StoryComponent.__source,
        },
    };
}
