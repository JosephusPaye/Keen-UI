<template>
    <ui-alert @dismiss="onDismiss">
        Alerts can also contain <b>HTML</b> via the default slot. A link to
        <a href="https://google.com/" target="_blank" rel="noopener">Google</a>.
    </ui-alert>
</template>

<script>
import { action } from '@storybook/addon-actions';
import UiAlert from '../../src/UiAlert.vue';

export default {
    name: 'WithHtml',
    components: { UiAlert },
    methods: {
        onDismiss: action('dismiss'),
    },
};
</script>
