<template>
    <Example
        name="ui-button"
        :children="children"
        :options="options"
        :extra-options="extraOptions"
    >
        <div class="distribute-items">
            <ui-button
                :type="options.type.value"
                :size="options.size.value"
                :icon-position="options.iconPosition.value"
                :tooltip="extraOptions.tooltip.value"
                :tooltip-position="options.tooltipPosition.value"
                :raised="options.raised.value"
                :loading="options.loading.value"
                :disable-ripple="options.disableRipple.value"
                :disabled="options.disabled.value"
            >
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
                Default
            </ui-button>

            <ui-button
                color="primary"
                :type="options.type.value"
                :size="options.size.value"
                :icon-position="options.iconPosition.value"
                :tooltip="extraOptions.tooltip.value"
                :tooltip-position="options.tooltipPosition.value"
                :raised="options.raised.value"
                :loading="options.loading.value"
                :disable-ripple="options.disableRipple.value"
                :disabled="options.disabled.value"
            >
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
                Primary
            </ui-button>

            <ui-button
                color="accent"
                :type="options.type.value"
                :size="options.size.value"
                :icon-position="options.iconPosition.value"
                :tooltip="extraOptions.tooltip.value"
                :tooltip-position="options.tooltipPosition.value"
                :raised="options.raised.value"
                :loading="options.loading.value"
                :disable-ripple="options.disableRipple.value"
                :disabled="options.disabled.value"
            >
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
                Accent
            </ui-button>

            <ui-button
                color="green"
                :type="options.type.value"
                :size="options.size.value"
                :icon-position="options.iconPosition.value"
                :tooltip="extraOptions.tooltip.value"
                :tooltip-position="options.tooltipPosition.value"
                :raised="options.raised.value"
                :loading="options.loading.value"
                :disable-ripple="options.disableRipple.value"
                :disabled="options.disabled.value"
            >
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
                Green
            </ui-button>

            <ui-button
                color="orange"
                :type="options.type.value"
                :size="options.size.value"
                :icon-position="options.iconPosition.value"
                :tooltip="extraOptions.tooltip.value"
                :tooltip-position="options.tooltipPosition.value"
                :raised="options.raised.value"
                :loading="options.loading.value"
                :disable-ripple="options.disableRipple.value"
                :disabled="options.disabled.value"
            >
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
                Orange
            </ui-button>

            <ui-button
                color="red"
                :type="options.type.value"
                :size="options.size.value"
                :icon-position="options.iconPosition.value"
                :tooltip="extraOptions.tooltip.value"
                :tooltip-position="options.tooltipPosition.value"
                :raised="options.raised.value"
                :loading="options.loading.value"
                :disable-ripple="options.disableRipple.value"
                :disabled="options.disabled.value"
            >
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
                Red
            </ui-button>
        </div>
    </Example>
</template>

<script>
import dedent from 'dedent-js';

import Example, { makeComponentOptions, propToOption } from '../Example.vue';
import UiButton from '../../src/UiButton.vue';
import UiIcon from '../../src/UiIcon.vue';

export default {
    name: 'InteractiveExample',
    components: { UiButton, UiIcon, Example },
    data() {
        return {
            options: makeComponentOptions(UiButton, [
                'type',
                'size',
                'iconPosition',
                'tooltipPosition',
                'raised',
                'loading',
                'disabled',
                'disableRipple',
            ]),
            extraOptions: {
                tooltip: propToOption(UiButton.props.tooltip, 'Oh hai 👋🏾'),
            },
            children: dedent(`
                <ui-icon slot="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                </ui-icon>
                My Button
            `),
        };
    },
};
</script>
