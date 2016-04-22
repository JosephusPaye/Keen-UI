<template>
    <section class="section section-ui-menu">
        <h2 class="section-heading">UiMenu</h2>

        <p>UiMenu is used to show a menu. Menu options can show an icon, keyboard shortcut, show a divider. Individual options can also be disabled.</p>

        <p>A trigger element can be added to create a dropdown menu and the dropdown position relative to the trigger can be customized. The dropdown menu can be always open or set to open on hover, click or focus of the trigger element.</p>

        <p>UiMenu is keyboard accessible and is set by default to contain tab focus in the menu until it is closed, at which point it returns focus to the trigger element. It also emits events when opened, closed and when an option is selected from the menu.</p>

        <p>The dropdown is powered by <a href="https://github.com/HubSpot/drop" target="_blank">Drop</a>, which uses <a href="https://github.com/HubSpot/tether" target="_blank">Tether</a>.</p>

        <p>UiMenu is used internally by the <a href="#/ui-button-docs">UiButton</a> and <a href="#/ui-icon-button-docs">UiIconButton</a> components.</p>

        <h3>Examples</h3>

        <div class="demo">
            <h4>Default</h4>

            <ui-menu :options="menuOptions"></ui-menu>

            <h4>With icons</h4>

            <ui-menu :options="menuOptions" show-icons></ui-menu>

            <h4>With keyboard shortcuts</h4>

            <ui-menu :options="menuOptions" show-keyboard-shortcuts></ui-menu>

            <h4>With icons and keyboard shortcuts</h4>

            <ui-menu :options="menuOptions" show-icons show-keyboard-shortcuts></ui-menu>

            <h4>With trigger element (creates a dropdown)</h4>

            <a v-el:trigger-a class="link-trigger">Click here for the menu</a>

            <ui-menu :trigger="$els.triggerA" :options="menuOptions" show-icons></ui-menu>

            <h4>Open on hover</h4>

            <a v-el:trigger-b class="link-trigger">Hover here for the menu</a>

            <ui-menu
                :trigger="$els.triggerB" :options="menuOptions" show-icons open-on="hover"
            ></ui-menu>

            <h4>Dropdown position (may change based on available space)</h4>

            <a v-el:trigger-c class="link-trigger">Click here for bottom right menu</a>

            <ui-menu
                :trigger="$els.triggerC" :options="menuOptions" show-icons
                dropdown-position="bottom right"
            ></ui-menu>

            <br><br>

            <a v-el:trigger-d class="link-trigger">Click here for top left menu</a>

            <ui-menu
                :trigger="$els.triggerD" :options="menuOptions" show-icons
                dropdown-position="top left"
            ></ui-menu>
        </div>

        <h3>API</h3>

        <ui-tabs raised>

            <ui-tab header="Props">
                <div class="table-responsive">

                    <table class="table">
                        <thead>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Description</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>options *</td>
                                <td>Array</td>
                                <td><code>[]</code></td>
                                <td>
                                    <p>The list of options to show in the menu. Each option should be an Object with at least two properties: <code>id</code> and <code>text</code>. An option can be shown as a divider by setting its <code>type</code> property to <code>"divider"</code>.</p>

                                    <p>The <code>text</code> is shown to the user and <code>id</code> is passed to the <code>@option-selected</code> event handler.</p>

                                    <p>A menu option can also include these properties:</p>

                                    <ul>
                                        <li><code>type</code>: Set to <code>"divider"</code> for a divider.</li>

                                        <li><code>icon</code>: An icon to show with the option. Can be any of the <a href="https://design.google.com/icons/" target="_blank">Material Icons</a>. Note that this should be the icon codepoint if you want to support IE9.</li>

                                        <li><code>keyboardShortcut</code>: A string to show to the right of the option in the dropdown.</li>

                                        <li><code>disabled</code>: A Boolean that determines whether or not the option is disabled.</li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td>showIcons</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>Determines whether or not icons are shown for the menu options. Set to <code>false</code> to hide the icons.</td>
                            </tr>

                            <tr>
                                <td>showKeyboardShortcuts</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>Determines whether or not keyboard shortcuts are shown for the menu options. Set to <code>false</code> to hide the keyboard shortcuts.</td>
                            </tr>

                            <tr>
                                <td>trigger</td>
                                <td>HTMLElement</td>
                                <td></td>
                                <td>An Element to attach the menu to. Specifying this prop creates a dropdown menu (i.e. the menu is hidden until the target is clicked/hovered/focussed).</td>
                            </tr>

                            <tr>
                                <td>dropdownPosition</td>
                                <td>String</td>
                                <td class="no-wrap"><code>"bottom left"</code></td>
                                <td>The position of the dropdown menu relative to the trigger. Can be any one of <code>top left</code>, <code>left top</code>, <code>left middle</code>, <code>left bottom</code>, <code>bottom left</code>, <code>bottom center</code>, <code>bottom right</code>, <code>right bottom</code>, <code>right middle</code>, <code>right top</code>, <code>top right</code>, <code>top center</code>.</td>
                            </tr>

                            <tr>
                                <td>openOn</td>
                                <td>String</td>
                                <td><code>"click"</code></td>
                                <td>The type of event that will cause the dropdown menu to open. One of <code>click</code>, <code>hover</code>, <code>focus</code>, or <code>always</code>. For <code>always</code> the dropdown is opened when rendered and it remains open.</td>
                            </tr>

                            <tr>
                                <td>containFocus</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td>Determines whether or not tab focus should be contained in the menu. Set to <code>false</code> to allow tabbing to focus elements outside the menu.</td>
                            </tr>

                            <tr>
                                <td>hideRippleInk</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>Determines whether or not the ripple ink animation is hidden when a menu item is clicked. Set to <code>true</code> to hide the ripple ink animation.</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                * Required prop
            </ui-tab>

            <ui-tab header="Events">
                <div class="table-responsive">

                    <table class="table">
                        <thead>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Description</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>opened</td>
                                <td>Dispatched</td>
                                <td>Dispatched when the menu is opened. Listen for it using <code>@opened</code>.</td>
                            </tr>

                            <tr>
                                <td>closed</td>
                                <td>Dispatched</td>
                                <td>Dispatched when the menu is closed. Listen for it using <code>@closed</code>.</td>
                            </tr>

                            <tr>
                                <td class="no-wrap">option-selected</td>
                                <td>Dispatched</td>
                                <td>Dispatched when an option is selected from the menu. The handler function is called with the option that was selected. Listen for it using <code>@option-selected</code>.</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </ui-tab>

        </ui-tabs>
    </section>
</template>

<script>
import UiTab from '../../src/UiTab.vue';
import UiTabs from '../../src/UiTabs.vue';

import UiMenu from '../../src/UiMenu.vue';
import UiButton from '../../src/UiButton.vue';

let menuOptions = [
    {
        id: 'edit',
        text: 'Edit',
        icon: 'edit',
        keyboardShortcut: 'Ctrl+E'
    }, {
        id: 'duplicate',
        text: 'Duplicate',
        icon: 'content_copy',
        keyboardShortcut: 'Ctrl+D'
    }, {
        id: 'share',
        text: 'Share',
        icon: 'share',
        keyboardShortcut: 'Ctrl+Shift+S',
        disabled: true
    }, {
        type: 'divider'
    }, {
        id: 'delete',
        text: 'Delete',
        icon: 'delete',
        keyboardShortcut: 'Del'
    }
];

export default {
    data() {
        return {
            menuOptions
        };
    },

    components: {
        UiTab,
        UiTabs,
        UiMenu,
        UiButton
    }
};
</script>

<style lang="stylus">
.section-ui-menu {
    .link-trigger {
        font-size: 16px;
        cursor: pointer;
    }
}
</style>
