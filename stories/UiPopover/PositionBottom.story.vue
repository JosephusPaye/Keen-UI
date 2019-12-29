<template>
    <div class="flex justify-center p-16">
        <button class="popover-button font-sans">
            Click here for the popover
            <ui-popover position="bottom">
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
    name: 'PositionBottom',
    components: { UiPopover },
};
</script>

<style scoped>
.popover-button {
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
}
</style>

<include-source>stories/UiPopover/PositionBottom.story.vue</include-source>
