<template>
    <ui-alert remove-icon>
        This alert has no icon.
    </ui-alert>
</template>

<script>
import UiAlert from '../../src/UiAlert.vue';

export default {
    name: 'WithoutIcon',
    components: { UiAlert },
};
</script>

<include-source>stories/UiAlert/WithoutIcon.story.vue</include-source>
