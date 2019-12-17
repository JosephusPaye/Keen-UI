<template>
    <ui-alert type="info">
        Hi everybody! This is the default alert.
    </ui-alert>
</template>

<script>
import UiAlert from '../../src/UiAlert.vue';

export default {
    name: 'TypeInfo',
    components: { UiAlert },
};
</script>

<include-source>stories/UiAlert/TypeInfo.story.vue</include-source>
