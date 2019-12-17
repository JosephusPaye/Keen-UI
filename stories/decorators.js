export const smallContainer = () => ({
    template: `<div class="max-w-md"><story /></div>`,
});

export const mediumContainer = () => ({
    template: `<div class="max-w-xl"><story /></div>`,
});

export const largeContainer = () => ({
    template: `<div class="max-w-3xl"><story /></div>`,
});

export const notesDecorator = notes => {
    return () => ({
        template: `
            <div>
                <div class="max-w-2xl mb-4">
                    <p class="font-sans mb-3 last:mb-0" v-for="note in notes">{{ note }}</p>
                </div>
                <story />
            </div>
        `,
        data() {
            return {
                notes: Array.isArray(notes) ? notes : [notes],
            };
        },
    });
};
