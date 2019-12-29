<template>
    <button class="popover-button font-sans">
        Click here for the popover
        <ui-popover animation="shift-away">
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
    name: 'AnimationShiftAway',
    components: { UiPopover },
};
</script>

<style scoped>
.popover-button {
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
}
</style>

<include-source>stories/UiPopover/AnimationShiftAway.story.vue</include-source>
