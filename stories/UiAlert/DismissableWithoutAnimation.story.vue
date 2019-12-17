<template>
    <div>
        <ui-alert v-show="showAlert" disable-animation @dismiss="onDismiss">
            You can dismiss this alert without an animation.
        </ui-alert>
        <button @click="showAlert = true">Reset</button>
    </div>
</template>

<script>
import { action } from '@storybook/addon-actions';
import UiAlert from '../../src/UiAlert.vue';

export default {
    name: 'DismissableWithoutAnimation',
    components: { UiAlert },
    data() {
        return {
            showAlert: true,
        };
    },
    methods: {
        onDismiss() {
            action('dismiss')();
            this.showAlert = false;
        },
    },
};
</script>

<include-source>stories/UiAlert/DismissableWithoutAnimation.story.vue</include-source>
