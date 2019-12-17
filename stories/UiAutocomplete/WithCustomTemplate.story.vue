<template>
    <ui-autocomplete
        v-model="value"
        help="Pick your favourite month of the year"
        label="Favourite month"
        name="favourite_month"
        placeholder="Enter your favourite month"
        :suggestions="months"
    >
        <template slot="suggestion" slot-scope="props">
            <code>{{ props }}</code>
        </template>
    </ui-autocomplete>
</template>

<script>
import UiAutocomplete from '../../src/UiAutocomplete.vue';

export default {
    name: 'WithCustomTemplate',
    components: { UiAutocomplete },
    data() {
        return {
            value: '',
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

<include-source>stories/UiAutocomplete/WithCustomTemplate.story.vue</include-source>
