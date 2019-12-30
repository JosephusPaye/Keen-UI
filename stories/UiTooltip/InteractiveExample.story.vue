<template>
    <Example
        name="ui-tooltip"
        children="My tooltip content"
        :wrapper="wrapper"
        :options="options"
    >
        <div class="distribute-items">
            <button
                v-for="simpson in theSimpsons"
                :key="simpson.name"
                :style="{ backgroundImage: `url(${simpson.picture})` }"
                class="image-pane"
            >
                <ui-tooltip
                    :animation="options.animation.value"
                    :position="options.position.value"
                    :open-on="options.openOn.value"
                    >{{ simpson.name }}</ui-tooltip
                >
            </button>
        </div>
    </Example>
</template>

<script>
import dedent from 'dedent-js';

import Example, { makeComponentOptions } from '../Example.vue';
import UiTooltip from '../../src/UiTooltip.vue';

export default {
    name: 'InteractiveExample',
    components: { UiTooltip, Example },
    data() {
        return {
            theSimpsons: [
                {
                    name: 'Maggie Simpson',
                    picture: 'https://i.imgur.com/eK26qtK.jpg',
                },
                {
                    name: 'Lisa Simpson',
                    picture: 'https://i.imgur.com/wIb44g9.jpg',
                },
                {
                    name: 'Bart Simpson',
                    picture: 'https://i.imgur.com/XkEz9zg.jpg',
                },
            ],
            options: makeComponentOptions(UiTooltip, [
                'animation',
                'openOn',
                'position',
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
.image-pane {
    background-color: #eee;
    background-position: center;
    background-size: cover;
    border-radius: 0.5rem;
    height: 7.5rem;
    width: 7.5rem;
    appearance: none;
    border: none;
}
</style>
