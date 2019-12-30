<template>
    <button class="image-button">
        <ui-ripple-ink color="orange" opacity="0.75"></ui-ripple-ink>
    </button>
</template>

<script>
import UiRippleInk from '../../src/UiRippleInk.vue';

export default {
    name: 'CustomColorAndOpacity',
    components: { UiRippleInk },
};
</script>

<style scoped>
.image-button {
    position: relative;
    background-image: url('https://i.imgur.com/eK26qtK.jpg');
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

<include-source>stories/UiRippleInk/CustomColorAndOpacity.story.vue</include-source>
