<template>
    <ui-alert type="error">
        D'oh! Something went wrong and we cannot process your request at this
        time. Try again later.
    </ui-alert>
</template>

<script>
import UiAlert from '../../src/UiAlert.vue';

export default {
    name: 'TypeError',
    components: { UiAlert },
};
</script>

<include-source>stories/UiAlert/TypeError.story.vue</include-source>
