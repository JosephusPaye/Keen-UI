<template>
    <div class="font-sans">
        <p class="mb-4">
            <a href="#" tabindex="0" @click.prevent="openPopover">
                Click to open the popover below
            </a>
        </p>

        <button class="popover-button font-sans">
            Click here for the popover
            <ui-popover ref="popover" :constrain-to-scroll-parent="false">
                <div class="p-4 font-sans">
                    <p class="mb-2">Popover content with custom <b>HTML</b></p>
                    <p>Here's <a href="https://google.com">a link</a>.</p>
                </div>
            </ui-popover>
        </button>
    </div>
</template>

<script>
import UiPopover from '../../src/UiPopover.vue';

export default {
    name: 'ControlProgrammatically',
    components: { UiPopover },
    methods: {
        openPopover() {
            setTimeout(() => {
                this.$refs.popover.toggle();
            }, 0);
        },
    },
};
</script>

<style scoped>
.popover-button {
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
}
</style>

<include-source>stories/UiPopover/ControlProgrammatically.story.vue</include-source>
