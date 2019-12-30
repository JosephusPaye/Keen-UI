<template>
    <button class="image-button">
        <ui-ripple-ink></ui-ripple-ink>
    </button>
</template>

<script>
import UiRippleInk from '../../src/UiRippleInk.vue';

export default {
    name: 'Basic',
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

<include-source>stories/UiRippleInk/Basic.story.vue</include-source>
