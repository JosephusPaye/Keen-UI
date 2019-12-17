<template>
    <ui-alert type="error" @dismiss="onDismiss">
        D'oh! Something went wrong and we cannot process your request at this
        time. Try again later.
    </ui-alert>
</template>

<script>
import { action } from '@storybook/addon-actions';
import UiAlert from '../../src/UiAlert.vue';

export default {
    name: 'TypeError',
    components: { UiAlert },
    methods: {
        onDismiss: action('dismiss'),
    },
};
</script>

<include-source>stories/UiAlert/TypeError.story.vue</include-source>
