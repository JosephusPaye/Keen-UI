<template>
    <ui-alert type="warning">
        Ay caramba! Current CPU usage is almost 100%.
    </ui-alert>
</template>

<script>
import UiAlert from '../../src/UiAlert.vue';

export default {
    name: 'TypeWarning',
    components: { UiAlert },
};
</script>

<include-source>stories/UiAlert/TypeWarning.story.vue</include-source>
