<template>
    <ui-alert type="info" @dismiss="onDismiss">
        Hi everybody! This is the default alert.
    </ui-alert>
</template>

<script>
import { action } from '@storybook/addon-actions';
import UiAlert from '../../src/UiAlert.vue';

export default {
    name: 'TypeInfo',
    components: { UiAlert },
    methods: {
        onDismiss: action('dismiss'),
    },
};
</script>

<include-source>stories/UiAlert/TypeInfo.story.vue</include-source>
