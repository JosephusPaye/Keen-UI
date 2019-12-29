<template>
    <div class="flex justify-center p-16">
        <button class="popover-button font-sans">
            Click here for the popover
            <ui-popover position="left">
                <p class="p-4 font-sans">
                    Some popover content with
                    <a href="https://google.com">a link</a>.
                </p>
            </ui-popover>
        </button>
    </div>
</template>

<script>
import UiPopover from '../../src/UiPopover.vue';

export default {
    name: 'PositionLeft',
    components: { UiPopover },
};
</script>

<style scoped>
.popover-button {
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
}
</style>

<include-source>stories/UiPopover/PositionLeft.story.vue</include-source>
