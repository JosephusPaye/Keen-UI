<template>
    <button class="popover-button font-sans">
        Click here for the popover
        <ui-popover animation="none">
            <div class="p-4 font-sans">
                <p class="mb-2">Popover content with custom <b>HTML</b></p>
                <p>Here's <a href="https://google.com">a link</a>.</p>
            </div>
        </ui-popover>
    </button>
</template>

<script>
import UiPopover from '../../src/UiPopover.vue';

export default {
    name: 'AnimationNone',
    components: { UiPopover },
};
</script>

<style scoped>
.popover-button {
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
}
</style>

<include-source>stories/UiPopover/AnimationNone.story.vue</include-source>
