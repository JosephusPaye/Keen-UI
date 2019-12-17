<template>
    <ui-alert>
        This is a multi-line alert. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Est ex assumenda dolor, sunt obcaecati molestiae
        eveniet et veniam fugit architecto incidunt illum eius veritatis quis
        dolorum aut distinctio laboriosam, deserunt blanditiis sequi porro sit
        ut vitae voluptas. Reiciendis, quos, dicta.
    </ui-alert>
</template>

<script>
import UiAlert from '../../src/UiAlert.vue';

export default {
    name: 'WithMultilineContent',
    components: { UiAlert },
};
</script>

<include-source>stories/UiAlert/WithMultilineContent.story.vue</include-source>
