<template>
    <ui-autocomplete
        v-model="value"
        help="Pick your favourite month of the year"
        label="Favourite Month"
        name="favourite_month"
        placeholder="Enter your favourite month"
        :suggestions="months"
    ></ui-autocomplete>
</template>

<script>
import UiAutocomplete from '../../src/UiAutocomplete.vue';

export default {
    name: 'Basic',
    components: { UiAutocomplete },
    data() {
        return {
            value: null,
            months: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
            ],
        };
    },
};
</script>

<include-source>stories/UiAutocomplete/Basic.story.vue</include-source>
