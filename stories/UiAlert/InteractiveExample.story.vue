<template>
    <Example
        name="ui-alert"
        children="Alert content goes here"
        :options="options"
        :extra-options="extraOptions"
    >
        <ui-alert
            v-show="showInfoAlert"
            type="info"
            :remove-icon="options.removeIcon.value"
            :disable-animation="options.disableAnimation.value"
            :dismissible="options.dismissible.value"
            @dismiss="showInfoAlert = false"
        >
            Info alert content goes here.
        </ui-alert>

        <ui-alert
            v-show="showSuccessAlert"
            type="success"
            :remove-icon="options.removeIcon.value"
            :disable-animation="options.disableAnimation.value"
            :dismissible="options.dismissible.value"
            @dismiss="showSuccessAlert = false"
        >
            Success alert content goes here.
        </ui-alert>

        <ui-alert
            v-show="showWarningAlert"
            type="warning"
            :remove-icon="options.removeIcon.value"
            :disable-animation="options.disableAnimation.value"
            :dismissible="options.dismissible.value"
            @dismiss="showWarningAlert = false"
        >
            Warning alert content goes here.
        </ui-alert>

        <ui-alert
            v-show="showErrorAlert"
            type="error"
            :remove-icon="options.removeIcon.value"
            :disable-animation="options.disableAnimation.value"
            :dismissible="options.dismissible.value"
            @dismiss="showErrorAlert = false"
        >
            Error alert content goes here.
        </ui-alert>

        <ui-button @click="onReset">Reset</ui-button>
    </Example>
</template>

<script>
import Example, { makeComponentOptions, propToOption } from '../Example.vue';
import UiAlert from '../../src/UiAlert.vue';
import UiButton from '../../src/UiButton.vue';

export default {
    name: 'InteractiveExample',
    components: { UiAlert, UiButton, Example },
    data() {
        return {
            showInfoAlert: true,
            showSuccessAlert: true,
            showWarningAlert: true,
            showErrorAlert: true,
            options: makeComponentOptions(UiAlert, [
                'removeIcon',
                'disableAnimation',
                'dismissible',
            ]),
            extraOptions: {
                type: propToOption(UiAlert.props.type),
            },
        };
    },
    methods: {
        onReset() {
            this.showInfoAlert = true;
            this.showSuccessAlert = true;
            this.showWarningAlert = true;
            this.showErrorAlert = true;
        },
    },
};
</script>
