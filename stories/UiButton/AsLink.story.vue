<template>
    <div class="mb-6 distribute-items">
        <ui-button
            href="https://github.com/JosephusPaye/Keen-UI"
            target="_blank"
            rel="noopener"
            >Github</ui-button
        >
        <ui-button
            href="https://github.com/JosephusPaye/Keen-UI"
            target="_blank"
            rel="noopener"
            disabled
            >Disabled Link</ui-button
        >
    </div>
</template>

<script>
import UiButton from '../../src/UiButton.vue';

export default {
    name: 'AsLink',
    components: { UiButton },
};
</script>

<include-source>stories/UiButton/AsLink.story.vue</include-source>
