<template>
    <Example
        name="ui-ripple-ink"
        :extra-options="extraOptions"
        :wrapper="wrapper"
    >
        <div class="distribute-items">
            <button
                v-for="simpson in theSimpsons"
                :key="simpson.name"
                :style="{ backgroundImage: `url(${simpson.picture})` }"
                class="image-button"
            >
                <ui-ripple-ink color="orange" opacity="0.75"></ui-ripple-ink>
            </button>
        </div>
    </Example>
</template>

<script>
import dedent from 'dedent-js';

import Example, { propToOption } from '../Example.vue';
import UiRippleInk from '../../src/UiRippleInk.vue';

export default {
    name: 'InteractiveExample',
    components: { UiRippleInk, Example },
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
            extraOptions: {
                color: propToOption(UiRippleInk.props.color, 'orange'),
                opacity: propToOption(UiRippleInk.props.opacity, '0.75'),
            },
            wrapper: dedent(`
                <button style="position: relative">
                    My button label
                    {{ slot }}
                </button>
            `),
        };
    },
};
</script>

<style scoped>
.image-button {
    position: relative;
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
