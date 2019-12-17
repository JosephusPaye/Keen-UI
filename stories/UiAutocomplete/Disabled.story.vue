<template>
    <ui-autocomplete
        v-model="value"
        label="Favourite colour"
        placeholder="You can't interact with this"
        disabled
    ></ui-autocomplete>
</template>

<script>
import UiAutocomplete from '../../src/UiAutocomplete.vue';

export default {
    name: 'Disabled',
    components: { UiAutocomplete },
    data() {
        return {
            value: '',
        };
    },
};
</script>

<include-source>stories/UiAutocomplete/Disabled.story.vue</include-source>
