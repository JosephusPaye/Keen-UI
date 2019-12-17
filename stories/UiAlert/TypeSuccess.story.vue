<template>
    <ui-alert type="success" @dismiss="onDismiss">
        Okilly dokilly, your account was updated successfully.
    </ui-alert>
</template>

<script>
import { action } from '@storybook/addon-actions';
import UiAlert from '../../src/UiAlert.vue';

export default {
    name: 'TypeSuccess',
    components: { UiAlert },
    methods: {
        onDismiss: action('dismiss'),
    },
};
</script>

<include-source>stories/UiAlert/TypeSuccess.story.vue</include-source>
