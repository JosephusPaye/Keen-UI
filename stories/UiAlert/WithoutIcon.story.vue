<template>
    <ui-alert remove-icon @dismiss="onDismiss">
        This alert has no icon.
    </ui-alert>
</template>

<script>
import { action } from '@storybook/addon-actions';
import UiAlert from '../../src/UiAlert.vue';

export default {
    name: 'WithoutIcon',
    components: { UiAlert },
    methods: {
        onDismiss: action('dismiss'),
    },
};
</script>

<include-source>stories/UiAlert/WithoutIcon.story.vue</include-source>
