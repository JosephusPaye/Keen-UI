<template>
    <div>
        <ui-alert v-show="showAlert" @dismiss="showAlert = false">
            You can dismiss this alert.
        </ui-alert>
        <button @click="showAlert = true">Reset</button>
    </div>
</template>

<script>
import UiAlert from '../../src/UiAlert.vue';

export default {
    name: 'Dismissible',
    components: { UiAlert },
    data() {
        return {
            showAlert: true,
        };
    },
};
</script>

<include-source>stories/UiAlert/Dismissable.story.vue</include-source>
