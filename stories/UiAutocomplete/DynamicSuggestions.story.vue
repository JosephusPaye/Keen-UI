<template>
    <div>
        <ui-autocomplete
            v-model="value"
            help="Pick your favourite member of the Simpsons family"
            label="Favourite Simpson"
            name="favourite_simpson"
            placeholder="Choose your favourite Simpson"
            type="image"
            :min-chars="0"
            :suggestions="theSimpsons"
        ></ui-autocomplete>

        <button :disabled="addedGrannies" @click="addGrannies">
            Add grannies
        </button>
    </div>
</template>

<script>
import UiAutocomplete from '../../src/UiAutocomplete.vue';

export default {
    name: 'DynamicSuggestions',
    components: { UiAutocomplete },
    data() {
        return {
            value: null,
            addedGrannies: false,
            theSimpsons: [
                {
                    value: 'Maggie',
                    label: 'Maggie Simpson',
                    image: 'https://i.imgur.com/eK26qtK.jpg',
                },
                {
                    value: 'Lisa',
                    label: 'Lisa Simpson',
                    image: 'https://i.imgur.com/wIb44g9.jpg',
                },
                {
                    value: 'Bart',
                    label: 'Bart Simpson',
                    image: 'https://i.imgur.com/XkEz9zg.jpg',
                },
                {
                    value: 'Marge',
                    label: 'Marge Simpson',
                    image: 'https://i.imgur.com/MuFcpQ4.jpg',
                },
                {
                    value: 'Homer',
                    label: 'Homer Simpson',
                    image: 'https://i.imgur.com/aYPRWX4.jpg',
                },
            ],
            grannies: [
                {
                    value: 'Mona',
                    label: 'Mona Simpson',
                    image: 'https://i.imgur.com/z5xy1eW.jpg',
                },
                {
                    value: 'Abe',
                    label: 'Abe Simpson',
                    image: 'https://i.imgur.com/3UF8hrf.jpg',
                },
            ],
        };
    },
    methods: {
        addGrannies() {
            this.theSimpsons = this.theSimpsons.concat(this.grannies);
            this.addedGrannies = true;
        },
    },
};
</script>

<include-source>stories/UiAutocomplete/DynamicSuggestions.story.vue</include-source>
