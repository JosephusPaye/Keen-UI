<template>
    <section class="section section-ui-menu">
        <h2 class="section-heading">
            UiMenu <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiMenu.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h2>

        <p>UiMenu creates a menu. Menu options can show an icon, secondary text (like keyboard shortcuts), or show a divider. Individual options can also be disabled.</p>

        <p>A trigger element can be added to create a dropdown menu and the dropdown position can be customized. The dropdown menu can be always open or set to open on hover, click or focus of the trigger element.</p>

        <p>UiMenu is keyboard accessible and is set by default to contain tab focus in the menu until it is closed, at which point it returns focus to the trigger element. It also emits events when opened, closed and when an option is selected from the menu.</p>

        <p>The dropdown is powered by <a href="https://github.com/HubSpot/drop" target="_blank" rel="noopener">Drop</a>, which uses <a href="https://github.com/HubSpot/tether" target="_blank" rel="noopener">Tether</a>.</p>

        <p>UiMenu is used internally by the <a href="#/ui-button-docs">UiButton</a> and <a href="#/ui-icon-button-docs">UiIconButton</a> components.</p>

        <h3>
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiMenuDocs.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h3>

        <div class="demo">
            <h4>Default</h4>

            <ui-menu :options="menuOptions"></ui-menu>

            <h4>With icons</h4>

            <ui-menu :options="menuOptions" show-icons></ui-menu>

            <h4>With secondary text (keyboard shortcuts)</h4>

            <ui-menu :options="menuOptions" show-secondary-text></ui-menu>

            <h4>With icons and secondary text</h4>

            <ui-menu :options="menuOptions" show-icons show-secondary-text></ui-menu>

            <h4>With trigger element (creates a dropdown)</h4>

            <a ref="triggerA" class="link-trigger">Click here for the menu</a>

            <ui-menu trigger="triggerA" :options="menuOptions" show-icons></ui-menu>

            <h4>Open on hover</h4>

            <a ref="triggerB" class="link-trigger">Hover here for the menu</a>

            <ui-menu
                trigger="triggerB" :options="menuOptions" show-icons open-on="hover"
            ></ui-menu>

            <h4>Dropdown position (may change based on available space)</h4>

            <a ref="triggerC" class="link-trigger">Click here for bottom right menu</a>

            <ui-menu
                trigger="triggerC" :options="menuOptions" show-icons
                dropdown-position="bottom right"
            ></ui-menu>

            <br><br>

            <a ref="triggerD" class="link-trigger">Click here for top left menu</a>

            <ui-menu
                trigger="triggerD" :options="menuOptions" show-icons
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
                                <td>id</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>A unique identifier for the menu.</p>
                                    <p>Applied as the <code>id</code> attribute of the menu's root element and used when targeting a specific menu for open/close/toggle.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>options *</td>
                                <td>Array</td>
                                <td><code>[]</code></td>
                                <td>
                                    <p>The list of options to show in the menu.</p>

                                    <p>Each option should be an object with at least two properties: <code>id</code> and <code>text</code>. An option can be shown as a divider by setting its <code>type</code> property to <code>"divider"</code>.</p>

                                    <p>The <code>text</code> is shown to the user and <code>id</code> is passed to the <code>@option-selected</code> event handler.</p>

                                    <p>A menu option can also include these properties:</p>

                                    <ul>
                                        <li><code>type</code>: Set to <code>"divider"</code> for a divider.</li>

                                        <li><code>icon</code>: An icon to show with the option. Can be any of the <a href="https://design.google.com/icons/" target="_blank" rel="noopener">Material Icons</a>. Note that this should be the icon codepoint if you want to support IE9.</li>

                                        <li><code>secondaryText</code>: Text to show to the right of the option in the dropdown. Useful for showing keyboard shortcuts and badges.</li>

                                        <li><code>disabled</code>: A Boolean that determines whether or not the option is disabled.</li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td>showIcons</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not icons are shown for the menu options.</p>
                                    <p>Set to <code>false</code> to hide the icons.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>showSecondaryText</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not secondary text is shown for the menu options.</p>
                                    <p>Set to <code>false</code> to hide the secondary text.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>trigger</td>
                                <td>HTMLElement</td>
                                <td></td>
                                <td>
                                    <p>An element to attach the menu to.</p>
                                    <p>Specifying this prop creates a dropdown menu (i.e. the menu is hidden until the target is clicked/hovered/focussed).</p>
                                </td>
                            </tr>

                            <tr>
                                <td>dropdownPosition</td>
                                <td>String</td>
                                <td class="no-wrap"><code>"bottom left"</code></td>
                                <td>
                                    <p>The position of the dropdown menu relative to the trigger.</p>

                                    <p>Can be any one of <code>top left</code>, <code>left top</code>, <code>left middle</code>, <code>left bottom</code>, <code>bottom left</code>, <code>bottom center</code>, <code>bottom right</code>, <code>right bottom</code>, <code>right middle</code>, <code>right top</code>, <code>top right</code>, <code>top center</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>openOn</td>
                                <td>String</td>
                                <td><code>"click"</code></td>
                                <td>
                                    <p>The type of event that will cause the dropdown menu to open.</p>

                                    <p>One of <code>click</code>, <code>hover</code>, <code>focus</code>, or <code>always</code>. For <code>always</code> the dropdown is opened when rendered and it remains open.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>containFocus</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td>
                                    <p>Determines whether or not tab focus should be contained in the menu.</p>
                                    <p>Set to <code>false</code> to allow tabbing to focus elements outside the menu.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>hideRippleInk</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not the ripple ink animation is hidden when a menu item is clicked.</p>
                                    <p>Set to <code>true</code> to hide the ripple ink animation.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="new-prop">closeOnSelect</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td>
                                    <p>Determines whether or not the menu should be closed when an option is selected.</p>
                                    <p>Set to <code>false</code> to prevent the menu from closing when an option is selected.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="new-prop">partial</td>
                                <td>String</td>
                                <td class="no-wrap"><code>"ui-menu-default"</code></td>
                                <td>
                                    <p>The ID of a registered <a href="http://vuejs.org/api/#partial" target="_blank" rel="noopener">Vue partial</a> to use as the template for each menu item.</p>

                                    <p>This partial is rendered into an <code>&lt;div&gt;</code> which has the partial's ID as a class. In the partial template, you have access to an <code>option</code> object from the options array, which you can use to render the menu option however you like.</p>

                                    <p>The default partial renders the menu option with place for an icon and secondary text. It also renders dividers.</p>
                                </td>
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
                                <td>
                                    <p>Dispatched when the menu is opened.</p>
                                    <p>Listen for it using <code>@opened</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>closed</td>
                                <td>Dispatched</td>
                                <td>
                                    <p>Dispatched when the menu is closed.</p>
                                    <p>Listen for it using <code>@closed</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap">option-selected</td>
                                <td>Dispatched</td>
                                <td>
                                    <p>Dispatched when an option is selected from the menu.</p>
                                    <p>The handler function is called with the option that was selected. Listen for it using <code>@option-selected</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap new-prop">ui-dropdown::open</td>
                                <td>Received</td>
                                <td>
                                    <p>Trigger this event to open the menu dropdown.</p>
                                    <p>You can optionally pass in an <code>id</code> to only open the dropdown of a specific menu (whose <code>id</code> you have set).</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap new-prop">ui-dropdown::close</td>
                                <td>Received</td>
                                <td>
                                    <p>Trigger this event to close the menu dropdown.</p>
                                    <p>You can optionally pass in an <code>id</code> to only close the dropdown of a specific menu (whose <code>id</code> you have set).</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap new-prop">ui-dropdown::toggle</td>
                                <td>Received</td>
                                <td>
                                    <p>Trigger this event to toggle the menu dropdown.</p>
                                    <p>You can optionally pass in an <code>id</code> to only toggle the dropdown of a specific menu (whose <code>id</code> you have set).</p>
                                </td>
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
        secondaryText: 'Ctrl+E'
    }, {
        id: 'duplicate',
        text: 'Duplicate',
        icon: 'content_copy',
        secondaryText: 'Ctrl+D'
    }, {
        id: 'share',
        text: 'Share',
        icon: 'share',
        secondaryText: 'Ctrl+Shift+S',
        disabled: true
    }, {
        type: 'divider'
    }, {
        id: 'delete',
        text: 'Delete',
        icon: 'delete',
        secondaryText: 'Del'
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
