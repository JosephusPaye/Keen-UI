<template>
    <ui-alert disable-animation>
        Animations for this alert are disabled.
    </ui-alert>
</template>

<script>
import UiAlert from '../../src/UiAlert.vue';

export default {
    name: 'WithoutAnimation',
    components: { UiAlert },
};
</script>

<include-source>stories/UiAlert/WithoutAnimation.story.vue</include-source>
