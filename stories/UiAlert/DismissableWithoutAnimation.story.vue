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

const logDismiss = action('dismiss');

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
            this.showAlert = false;
            logDismiss();
        },
    },
};
</script>

<include-source>stories/UiAlert/DismissableWithoutAnimation.story.vue</include-source>
