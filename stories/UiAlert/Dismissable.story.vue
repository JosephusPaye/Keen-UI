<template>
    <div>
        <ui-alert v-show="showAlert" @dismiss="onDismiss">
            You can dismiss this alert.
        </ui-alert>
        <button @click="showAlert = true">Reset</button>
    </div>
</template>

<script>
import { action } from '@storybook/addon-actions';
import UiAlert from '../../src/UiAlert.vue';

export default {
    name: 'Dismissible',
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
