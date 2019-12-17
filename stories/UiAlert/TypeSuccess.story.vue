<template>
    <ui-alert type="success">
        Okilly dokilly, your account was updated successfully.
    </ui-alert>
</template>

<script>
import UiAlert from '../../src/UiAlert.vue';

export default {
    name: 'TypeSuccess',
    components: { UiAlert },
};
</script>

<include-source>stories/UiAlert/TypeSuccess.story.vue</include-source>
