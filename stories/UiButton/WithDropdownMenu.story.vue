<template>
    <ui-button ref="dropdownButton" has-dropdown>
        <ui-menu
            slot="dropdown"
            contain-focus
            has-icons
            has-secondary-text
            :options="menuOptions"
            @close="$refs.dropdownButton.closeDropdown()"
        ></ui-menu>
        Click for menu
    </ui-button>
</template>

<script>
import UiButton from '../../src/UiButton.vue';
import UiMenu from '../../src/UiMenu.vue';

export default {
    name: 'WithDropdownMenu',
    components: { UiButton, UiMenu },
    data() {
        return {
            menuOptions: [
                {
                    id: 'edit',
                    label: 'Edit',
                    icon: 'edit',
                    secondaryText: 'Ctrl+E',
                },
                {
                    id: 'duplicate',
                    label: 'Duplicate',
                    icon: 'content_copy',
                    secondaryText: 'Ctrl+D',
                },
                {
                    id: 'share',
                    label: 'Share',
                    icon: 'share',
                    secondaryText: 'Ctrl+Shift+S',
                    disabled: true,
                },
                {
                    type: 'divider',
                },
                {
                    id: 'delete',
                    label: 'Delete',
                    icon: 'delete',
                    secondaryText: 'Del',
                },
            ],
        };
    },
};
</script>

<style>
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';
</style>

<include-source>stories/UiButton/WithDropdownMenu.story.vue</include-source>
