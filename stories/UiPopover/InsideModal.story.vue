<template>
    <div>
        <button class="popover-button font-sans" @click="openModal">
            Click here for the modal
        </button>

        <ui-modal ref="modal">
            <p class="mb-2">
                The popover below has
                <code>constrainToScrollParent: false</code> to allow it to drop
                outside of the modal.
            </p>

            <button class="popover-button font-sans">
                Click here for the popover
                <ui-popover :constrain-to-scroll-parent="false">
                    <div class="p-4 font-sans">
                        <p class="mb-2">
                            Popover content with custom <b>HTML</b>
                        </p>
                        <p>Here's <a href="https://google.com">a link</a>.</p>
                    </div>
                </ui-popover>
            </button>
        </ui-modal>
    </div>
</template>

<script>
import UiModal from '../../src/UiModal.vue';
import UiPopover from '../../src/UiPopover.vue';

export default {
    name: 'InsideModal',
    components: { UiModal, UiPopover },
    methods: {
        openModal() {
            this.$refs.modal.open();
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

<include-source>stories/UiPopover/InsideModal.story.vue</include-source>
