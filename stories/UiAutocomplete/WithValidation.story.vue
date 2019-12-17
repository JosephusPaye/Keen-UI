<template>
    <ui-autocomplete
        v-model="value"
        error="This field is required"
        help="Pick your favourite month of the year"
        label="Favourite month"
        name="favourite_month"
        placeholder="Enter your favourite month"
        :invalid="touched && !value.length > 0"
        :suggestions="months"
        @touch="touched = true"
    ></ui-autocomplete>
</template>

<script>
import UiAutocomplete from '../../src/UiAutocomplete.vue';

export default {
    name: 'WithValidation',
    components: { UiAutocomplete },
    data() {
        return {
            value: null,
            touched: false,
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

<include-source>stories/UiAutocomplete/WithValidation.story.vue</include-source>
