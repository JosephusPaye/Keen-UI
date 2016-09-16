<template>
    <section class="section section-ui-button">
        <h2 class="section-heading">
            UiButton <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiButton.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h2>

        <p>UiButton is a versatile button component that largely implements the Material Design spec. UiButtons can show a dropdown and a loading spinner. They also support focus (mouse and keyboard separately), hover and disabled states.</p>

        <p>Visually, buttons have two main types:</p>

        <ul>
            <li><b>Normal</b>: has a background color, with white or black text color.</li>
            <li><b>Flat</b>: has no background, text color is the button color.</li>
        </ul>

        <p>Supported colors are <code>default</code>, <code>primary</code>, <code>accent</code>, <code>success</code>, <code>warning</code> and <code>danger</code>.</p>

        <p>Additionally, both normal and flat buttons can be raised (with a box-shadow) using the <code>raised</code> prop.</p>

        <p><b>Note:</b> If you are having alignment issues when using multiple buttons next to each other, put the buttons in a container and add a class of <code>ui-button-group</code> for a flex-based workaround.</p>

        <h3>
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiButtonDocs.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h3>

        <div class="demo">
            <h4>Normal</h4>

            <div class="group">
                <ui-button>Default</ui-button>
                <ui-button color="primary">Primary</ui-button>
                <ui-button color="accent">Accent</ui-button>
                <ui-button color="success">Success</ui-button>
                <ui-button color="warning">Warning</ui-button>
                <ui-button color="danger">Danger</ui-button>
            </div>

            <div class="group">
                <ui-button disabled>Default, Disabled</ui-button>
                <ui-button disabled color="primary">Primary, Disabled</ui-button>
                <ui-button disabled color="accent">Accent, Disabled</ui-button>
                <ui-button disabled color="success">Success, Disabled</ui-button>
                <ui-button disabled color="warning">Warning, Disabled</ui-button>
                <ui-button disabled color="danger">Danger, Disabled</ui-button>
            </div>

            <div class="group">
                <ui-button raised>Default, Raised</ui-button>
                <ui-button raised color="primary">Primary, Raised</ui-button>
                <ui-button raised color="accent">Accent, Raised</ui-button>
                <ui-button raised color="success">Success, Raised</ui-button>
                <ui-button raised color="warning">Warning, Raised</ui-button>
                <ui-button raised color="danger">Danger, Raised</ui-button>
            </div>

            <div class="group">
                <ui-button raised disabled>Default, Raised, Disabled</ui-button>
                <ui-button color="primary" raised disabled>Primary, Raised, Disabled</ui-button>
                <ui-button color="accent" raised disabled>Accent, Raised, Disabled</ui-button>
                <ui-button color="success" raised disabled>Success, Raised, Disabled</ui-button>
                <ui-button color="warning" raised disabled>Warning, Raised, Disabled</ui-button>
                <ui-button color="danger" raised disabled>Danger, Raised, Disabled</ui-button>
            </div>
        </div>

        <div class="demo">
            <h4>Flat</h4>

            <div class="group">
                <ui-button type="flat">Default</ui-button>
                <ui-button type="flat" color="primary">Primary</ui-button>
                <ui-button type="flat" color="accent">Accent</ui-button>
                <ui-button type="flat" color="success">Success</ui-button>
                <ui-button type="flat" color="warning">Warning</ui-button>
                <ui-button type="flat" color="danger">Danger</ui-button>
            </div>

            <div class="group">
                <ui-button type="flat" disabled>Default, Disabled</ui-button>
                <ui-button type="flat" disabled color="primary">Primary, Disabled</ui-button>
                <ui-button type="flat" disabled color="accent">Accent, Disabled</ui-button>
                <ui-button type="flat" disabled color="success">Success, Disabled</ui-button>
                <ui-button type="flat" disabled color="warning">Warning, Disabled</ui-button>
                <ui-button type="flat" disabled color="danger">Danger, Disabled</ui-button>
            </div>

            <div class="group">
                <ui-button type="flat" raised>Default, Raised</ui-button>
                <ui-button type="flat" raised color="primary">Primary, Raised</ui-button>
                <ui-button type="flat" raised color="accent">Accent, Raised</ui-button>
                <ui-button type="flat" raised color="success">Success, Raised</ui-button>
                <ui-button type="flat" raised color="warning">Warning, Raised</ui-button>
                <ui-button type="flat" raised color="danger">Danger, Raised</ui-button>
            </div>

            <div class="group">
                <ui-button type="flat" raised disabled>Default, Raised, Disabled</ui-button>

                <ui-button
                    type="flat" color="primary" raised disabled
                >Primary, Raised, Disabled</ui-button>

                <ui-button
                    type="flat" color="accent" raised disabled
                >Accent, Raised, Disabled</ui-button>

                <ui-button
                    type="flat" color="success" raised disabled
                >Success, Raised, Disabled</ui-button>

                <ui-button
                    type="flat" color="warning" raised disabled
                >Warning, Raised, Disabled</ui-button>

                <ui-button
                    type="flat" color="danger" raised disabled
                >Danger, Raised, Disabled</ui-button>
            </div>
        </div>

        <div class="demo">
            <h4>With Icons</h4>

            <div class="group ui-button-group">
                <ui-button icon="refresh">Refresh</ui-button>
                <ui-button icon="add" color="primary">Add Post</ui-button>
                <ui-button icon="delete" color="danger">Delete</ui-button>
                <ui-button icon="photo" color="accent" icon-right>Icon Right</ui-button>
            </div>

            <div class="group ui-button-group">
                <ui-button type="flat" icon="refresh">Refresh</ui-button>
                <ui-button type="flat" icon="add" color="primary">Add Post</ui-button>
                <ui-button type="flat" icon="delete" color="danger">Delete</ui-button>

                <ui-button
                    type="flat" icon="photo" color="accent" icon-right
                >Icon Right</ui-button>
            </div>
        </div>

        <div class="demo">
            <h4>With Spinner (click to start spinner)</h4>

            <div class="group">
                <ui-button
                    icon="refresh" :loading="loading.btn1" @click.native="loading.btn1 = true"
                >Refresh</ui-button>

                <ui-button
                    icon="add" color="primary" :loading="loading.btn2" @click.native="loading.btn2 = true"
                >Add Post</ui-button>

                <ui-button
                    icon="delete" color="danger" :loading="loading.btn3" @click.native="loading.btn3 = true"
                >Delete</ui-button>
            </div>

            <div class="group">
                <ui-button
                    type="flat" icon="refresh" :loading="loading.btn4" @click.native="loading.btn4 = true"
                >Refresh</ui-button>

                <ui-button
                    type="flat" icon="add" color="primary" :loading="loading.btn5"
                    @click.native="loading.btn5 = true"
                >Add Post</ui-button>

                <ui-button
                    type="flat" icon="delete" color="danger" :loading="loading.btn6"
                    @click.native="loading.btn6 = true"
                >Delete</ui-button>
            </div>

            <div class="group">
                <ui-button @click.native="stopSpinners">Stop spinners</ui-button>
            </div>
        </div>

        <div class="demo">
            <h4>With Menu</h4>

            <div class="group">
                <ui-button
                    has-dropdown-menu :menu-options="shareMenuOptions"
                    @menu-option-selected="menuOptionSelected"
                >Menu</ui-button>

                <ui-button
                    color="primary" has-dropdown-menu :menu-options="shareMenuOptions"
                    dropdown-position="top left" @menu-option-selected="menuOptionSelected"
                >Menu, Position Top Left</ui-button>

                <ui-button
                    color="accent" has-dropdown-menu show-menu-icons
                    :menu-options="shareMenuOptions" @menu-option-selected="menuOptionSelected"
                >Menu with Icons</ui-button>

                <ui-button
                    type="flat" has-dropdown-menu show-menu-secondary-text
                    :menu-options="shareMenuOptions" @menu-option-selected="menuOptionSelected"
                >Menu with Shortcuts</ui-button>

                <ui-button
                    has-dropdown-menu show-menu-icons show-menu-secondary-text
                    :menu-options="shareMenuOptions" @menu-option-selected="menuOptionSelected"
                >Menu with Icons &amp; Shortcuts</ui-button>

                <ui-button
                    has-dropdown-menu :menu-options="shareMenuOptions" open-dropdown-on="hover"
                    @menu-option-selected="menuOptionSelected"
                >Open on Hover</ui-button>
            </div>

            <h4>With Popover</h4>

            <div class="group">
                <ui-button has-popover text="Popover">
                    <div slot="popover">Hey there! <br>Popovers are nice for custom dropdowns.</div>
                </ui-button>

                <ui-button has-popover text="Open on Hover" open-dropdown-on="hover">
                    <div slot="popover">Hey there! <br>Popovers are nice for custom dropdowns.</div>
                </ui-button>
            </div>
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
                                <td>type</td>
                                <td>String</td>
                                <td><code>"normal"</code></td>
                                <td>
                                    <p>The type of button (determines the visual appearance).</p>
                                    <p>Use <code>normal</code> for a button with a background, and <code>flat</code> for a seamless button.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>buttonType</td>
                                <td>String</td>
                                <td><code>"submit"</code></td>
                                <td>The <code>type</code> attribute of the button element.</td>
                            </tr>

                            <tr>
                                <td>color</td>
                                <td>String</td>
                                <td><code>"default"</code></td>
                                <td>
                                    <p>One of <code>default</code>, <code>primary</code>, <code>accent</code>, <code>success</code>, <code>warning</code> or <code>danger</code>.</p>

                                    <p>In normal buttons, this is the background color; in flat buttons, the text color.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>raised</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not the button has a drop shadow.</p>
                                    <p>Set to <code>true</code> to apply a drop shadow.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>text</td>
                                <td>String</td>
                                <td></td>
                                <td>The button text (text only). For HTML content, use the default slot.</td>
                            </tr>

                            <tr>
                                <td>icon</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The button icon. Can be any of the <a href="https://design.google.com/icons/" target="_blank" rel="noopener">Material Icons</a>.</p>
                                    <p>Note that this should be the icon codepoint if you want to support IE9.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>iconRight</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not the button icon is shown at the right of the text (instead of to the left).</p>
                                    <p>Set to <code>true</code> to show the icon at the right.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>hideRippleInk</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not the ripple ink animation is hidden when the button is clicked.</p>
                                    <p>Set to <code>true</code> to hide the ripple ink animation.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>hasPopover</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>Determines whether or not the button contains a popover.</td>
                            </tr>

                            <tr>
                                <td>hasDropdownMenu</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>Determines whether or not the button contains a dropdown menu.</td>
                            </tr>

                             <tr>
                                <td>menuOptions</td>
                                <td>Array</td>
                                <td><code>[]</code></td>
                                <td>
                                    <p>The list of options to show in the dropdown menu.</p>

                                    <p>Each option should be an object with at least two properties: <code>id</code> and <code>text</code>. An option can be shown as a divider by setting its <code>type</code> property to <code>"divider"</code>.</p>

                                    <p>The <code>text</code> is shown to the user and <code>id</code> is passed to the <code>@menu-option-selected</code> event handler.</p>

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
                                <td>showMenuIcons</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not icons are shown for the dropdown menu options.</p>
                                    <p>Set to <code>false</code> to hide the icons.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>showMenuSecondaryText</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not secondary text is shown for the dropdown menu options.</p>
                                    <p>Set to <code>false</code> to hide the secondary text.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>dropdownPosition</td>
                                <td>String</td>
                                <td class="no-wrap"><code>"bottom left"</code></td>
                                <td>
                                    <p>The position of the dropdown menu or popover relative to the button.</p>
                                    <p>Can be any one of <code>top left</code>, <code>left top</code>, <code>left middle</code>, <code>left bottom</code>, <code>bottom left</code>, <code>bottom center</code>, <code>bottom right</code>, <code>right bottom</code>, <code>right middle</code>, <code>right top</code>, <code>top right</code>, or <code>top center</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>showDropdownIcon</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td>
                                    <p>Determines whether or not the dropdown chevron is shown (this is NOT the option icons, for that, see <code>showMenuIcons</code>).</p>

                                    <p>Set to <code>false</code> to disable the dropdown chevron.</p>

                                    <p>This prop is only applicable if <code>hasDropdownMenu</code> or <code>hasPopover</code> is <code>true</code> and <code>iconRight</code> is <code>false</code>. If not, the dropdown chevron is always hidden.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>openDropdownOn</td>
                                <td>String</td>
                                <td><code>"click"</code></td>
                                <td>
                                    <p>The type of event that will cause the dropdown menu or popover to open. One of <code>click</code>, <code>hover</code>, <code>focus</code>, or <code>always</code>.</p>

                                    <p>For <code>always</code>, the dropdown is opened when rendered and it remains open.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>loading</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not the loading spinner is shown.</p>
                                    <p>Set to <code>true</code> to show the loading spinner (disables the button).</p>
                                </td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not the button is disabled.</p>
                                    <p>Set to <code>true</code> to disable the button.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </ui-tab>

            <ui-tab header="Slots">
                <div class="table-responsive">

                    <table class="table">
                        <thead>
                            <th>Name</th>
                            <th>Description</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>(default)</td>
                                <td>The default slot holds the button text and can contain HTML.</td>
                            </tr>

                            <tr>
                                <td>popover</td>
                                <td>The popover slot holds the popover content and can contain HTML.</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
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
                                <td class="no-wrap">dropdown-opened</td>
                                <td>Dispatched</td>
                                <td>
                                    <p>Dispatched when the popover or dropdown menu is opened.</p>
                                    <p>Listen for it using <code>@dropdown-opened</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap">dropdown-closed</td>
                                <td>Dispatched</td>
                                <td>
                                    <p>Dispatched when the popover or dropdown menu is closed.</p>
                                    <p>Listen for it using <code>@dropdown-closed</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap">menu-option-selected</td>
                                <td>Dispatched</td>
                                <td>
                                    <p>Dispatched when an option is selected from the dropdown menu.</p>
                                    <p>The handler function is called with the option that was selected. Listen for it using <code>@menu-option-selected</code>.</p>
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
import UiButton from '../../src/UiButton.vue';

let dropdownOptions = [
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
            loading: {
                btn1: false,
                btn2: false,
                btn3: false,
                btn4: false,
                btn5: false,
                btn6: false
            },
            shareMenuOptions: dropdownOptions
        };
    },

    methods: {
        stopSpinners() {
            this.loading.btn1 = false;
            this.loading.btn2 = false;
            this.loading.btn3 = false;
            this.loading.btn4 = false;
            this.loading.btn5 = false;
            this.loading.btn6 = false;
        },

        menuOptionSelected(option) {
            console.log('Selected', option.id);
        }
    },

    components: {
        UiTab,
        UiTabs,
        UiButton
    }
};
</script>

<style lang="stylus">
.section-ui-button {
    .ui-button {
        margin-bottom: 12px;
        margin-right: 8px;
    }

    .demo {
        .group {
            margin-bottom: 18px;
        }
    }

    .spacer {
        height: 72px;
    }
}
</style>
