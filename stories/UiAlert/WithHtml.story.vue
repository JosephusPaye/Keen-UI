<template>
    <ui-alert>
        Alerts can also contain <b>HTML</b> via the default slot. A link to
        <a href="https://google.com/" target="_blank" rel="noopener">Google</a>.
    </ui-alert>
</template>

<script>
import UiAlert from '../../src/UiAlert.vue';

export default {
    name: 'WithHtml',
    components: { UiAlert },
};
</script>

<include-source>stories/UiAlert/WithHtml.story.vue</include-source>
