<template>
    <ui-alert :dismissible="false">
        You cannot dismiss this alert as it's persistent.
    </ui-alert>
</template>

<script>
import UiAlert from '../../src/UiAlert.vue';

export default {
    name: 'Persistent',
    components: { UiAlert },
};
</script>
