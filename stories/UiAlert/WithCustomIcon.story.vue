<template>
    <ui-alert type="warning" @dismiss="onDismiss">
        <ui-icon slot="icon">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
            >
                <path
                    d="M12.984 14.016V9h-1.97v5.016h1.97zm0 3.984v-2.016h-1.97V18h1.97zm2.672-14.016c.75 0 1.36.61 1.36 1.36V20.67c0 .75-.61 1.314-1.36 1.314H8.343c-.75 0-1.36-.563-1.36-1.313V5.344c0-.75.61-1.36 1.36-1.36h1.64V2.016h4.032v1.97h1.64z"
                />
            </svg>
        </ui-icon>

        Battery low: 15 minutes remaining.
    </ui-alert>
</template>

<script>
import { action } from '@storybook/addon-actions';
import UiAlert from '../../src/UiAlert.vue';
import UiIcon from '../../src/UiIcon.vue';

export default {
    name: 'WithCustomIcon',
    components: { UiAlert, UiIcon },
    methods: {
        onDismiss: action('dismiss'),
    },
};
</script>

<include-source>stories/UiAlert/WithCustomIcon.story.vue</include-source>
