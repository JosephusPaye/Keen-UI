<template>
    <Example
        name="ui-popover"
        children="My popover content"
        :wrapper="wrapper"
        :options="options"
    >
        <div class="distribute-items justify-center p-16">
            <button class="popover-button font-sans">
                Open first popover
                <ui-popover
                    :animation="options.animation.value"
                    :position="options.position.value"
                    :open-on="options.openOn.value"
                    :contain-focus="options.containFocus.value"
                    :raised="options.raised.value"
                    :disabled="options.disabled.value"
                >
                    <div class="p-4 font-sans">
                        <p class="mb-2">
                            Popover content with custom <b>HTML</b>
                        </p>
                        <p class="mb-2">
                            Here's <a href="https://google.com">a link</a> and
                            here's
                            <a href="https://google.com">another link</a>.
                        </p>
                    </div>
                </ui-popover>
            </button>

            <button class="popover-button font-sans">
                Open second popover
                <ui-popover
                    :animation="options.animation.value"
                    :position="options.position.value"
                    :open-on="options.openOn.value"
                    :contain-focus="options.containFocus.value"
                    :raised="options.raised.value"
                    :disabled="options.disabled.value"
                >
                    <div class="p-4 font-sans">
                        <p class="mb-2">
                            Popover content with custom <b>HTML</b>
                        </p>
                        <p class="mb-2">
                            Here's <a href="https://google.com">a link</a> and
                            here's
                            <a href="https://google.com">another link</a>.
                        </p>
                    </div>
                </ui-popover>
            </button>
        </div>
    </Example>
</template>

<script>
import dedent from 'dedent-js';

import Example, { makeComponentOptions } from '../Example.vue';
import UiPopover from '../../src/UiPopover.vue';

export default {
    name: 'InteractiveExample',
    components: { UiPopover, Example },
    data() {
        return {
            options: makeComponentOptions(UiPopover, [
                'animation',
                'openOn',
                'position',
                'containFocus',
                'raised',
                'disabled',
            ]),
            wrapper: dedent(`
                <button>
                    My button label
                    {{ slot }}
                </button>
            `),
        };
    },
};
</script>

<style scoped>
.popover-button {
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
}
</style>
