<template>
    <div>
        <div class="font-sans font-semibold mb-3">Type: primary</div>
        <div class="mb-6 distribute-items">
            <ui-button color="green">Normal</ui-button>
            <ui-button color="green" raised>Raised</ui-button>
            <ui-button color="green" loading>Loading</ui-button>
            <ui-button color="green" disabled>Disabled</ui-button>
            <ui-button color="green">
                <ui-icon slot="icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                        <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                </ui-icon>
                With icon
            </ui-button>
        </div>

        <div class="font-sans font-semibold mb-3">Type: secondary</div>
        <div class="distribute-items">
            <ui-button color="green" type="secondary">Normal</ui-button>
            <ui-button color="green" type="secondary" raised>Raised</ui-button>
            <ui-button color="green" type="secondary" loading
                >Loading</ui-button
            >
            <ui-button color="green" type="secondary" disabled
                >Disabled</ui-button
            >
            <ui-button color="green" type="secondary">
                <ui-icon slot="icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                        />
                        <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                </ui-icon>
                With icon
            </ui-button>
        </div>
    </div>
</template>

<script>
import UiButton from '../../src/UiButton.vue';
import UiIcon from '../../src/UiIcon.vue';

export default {
    name: 'ColorGreen',
    components: { UiButton, UiIcon },
};
</script>

<include-source>stories/UiButton/ColorGreen.story.vue</include-source>
