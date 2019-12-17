<template>
    <ui-alert type="warning" @dismiss="onDismiss">
        Ay caramba! Current CPU usage is almost 100%.
    </ui-alert>
</template>

<script>
import { action } from '@storybook/addon-actions';
import UiAlert from '../../src/UiAlert.vue';

export default {
    name: 'TypeWarning',
    components: { UiAlert },
    methods: {
        onDismiss: action('dismiss'),
    },
};
</script>

<include-source>stories/UiAlert/TypeWarning.story.vue</include-source>
