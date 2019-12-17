<template>
    <ui-alert disable-animation @dismiss="onDismiss">
        Animations for this alert are disabled.
    </ui-alert>
</template>

<script>
import { action } from '@storybook/addon-actions';
import UiAlert from '../../src/UiAlert.vue';

export default {
    name: 'WithoutAnimation',
    components: { UiAlert },
    methods: {
        onDismiss: action('dismiss'),
    },
};
</script>

<include-source>stories/UiAlert/WithoutAnimation.story.vue</include-source>
