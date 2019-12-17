<template>
    <ui-button ref="dropdownButton" has-dropdown>
        <div slot="dropdown" class="p-4 font-sans">
            <p class="mb-2"><b>Hey</b> there!</p>
            <p>Button dropdowns can have any content, not just menus.</p>
        </div>
        Click for custom dropdown
    </ui-button>
</template>

<script>
import UiButton from '../../src/UiButton.vue';

export default {
    name: 'WithDropdownCustom',
    components: { UiButton },
};
</script>

<include-source>stories/UiButton/WithDropdownCustom.story.vue</include-source>
