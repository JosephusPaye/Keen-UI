<template>
    <button class="image-button">
        <ui-tooltip animation="shift-away">Maggie Simpson</ui-tooltip>
    </button>
</template>

<script>
import UiTooltip from '../../src/UiTooltip.vue';

export default {
    name: 'AnimationShiftAway',
    components: { UiTooltip },
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

<include-source>stories/UiTooltip/AnimationShiftAway.story.vue</include-source>
