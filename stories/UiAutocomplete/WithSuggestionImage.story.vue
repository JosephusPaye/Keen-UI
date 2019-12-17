<template>
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
</template>

<script>
import UiAutocomplete from '../../src/UiAutocomplete.vue';

export default {
    name: 'WithSuggestionImage',
    components: { UiAutocomplete },
    data() {
        return {
            value: null,
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
        };
    },
};
</script>

<include-source>stories/UiAutocomplete/WithSuggestionImage.story.vue</include-source>
