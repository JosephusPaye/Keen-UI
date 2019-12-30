<template>
    <div class="flex justify-center p-8">
        <button class="image-button">
            <ui-tooltip position="top">Maggie Simpson</ui-tooltip>
        </button>
    </div>
</template>

<script>
import UiTooltip from '../../src/UiTooltip.vue';

export default {
    name: 'PositionTop',
    components: { UiTooltip },
};
</script>

<style scoped>
.image-button {
    background-image: url('https://i.imgur.com/eK26qtK.jpg');
    background-color: #eee;
    background-position: center;
    background-size: cover;
    border-radius: 0.5rem;
    height: 7.5rem;
    width: 7.5rem;
    appearance: none;
    border: none;
    margin: 0 auto;
}
</style>

<include-source>stories/UiTooltip/PositionTop.story.vue</include-source>
