<template>
    <section class="section section-ui-icon-button">
        <h2 class="section-heading">
            UiIconButton <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiIconButton.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h2>

        <p>UiIconButton shows an icon button which can include a dropdown (menu or popover) and can also show a loading spinner. It supports focus (mouse and keyboard separately), hover and disabled states.</p>

        <p>Visually, icon buttons have three types:</p>

        <ul>
            <li><b>Normal</b>: has a background color, with white or black text color.</li>
            <li><b>Flat</b>: has no background, text color is the button color.</li>
            <li><b>Clear</b>: has no background, text color is black or white. Suitable for use in components like <a href="#/ui-toolbar-docs">UiToolbar</a>.</li>
        </ul>

        <p>Supported colors for types <code>normal</code> and <code>flat</code> only are <code>default</code>, <code>primary</code>, <code>accent</code>, <code>success</code>, <code>warning</code> and <code>danger</code>. Supported colors for type <code>clear</code> are <code>black</code> and <code>white</code>.</p>

        <h3>
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiIconButtonDocs.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h3>

        <div class="demo">
            <h4>Normal</h4>

            <div class="group">
                <ui-icon-button icon="refresh"></ui-icon-button>
                <ui-icon-button icon="add" color="primary"></ui-icon-button>
                <ui-icon-button icon="edit" color="accent"></ui-icon-button>
                <ui-icon-button icon="star" color="success"></ui-icon-button>
                <ui-icon-button icon="favorite" color="warning"></ui-icon-button>
                <ui-icon-button icon="delete" color="danger"></ui-icon-button>
            </div>

            <h4>Flat</h4>

            <div class="group">
                <ui-icon-button type="flat" icon="refresh"></ui-icon-button>
                <ui-icon-button type="flat" icon="add" color="primary"></ui-icon-button>
                <ui-icon-button type="flat" icon="edit" color="accent"></ui-icon-button>
                <ui-icon-button type="flat" icon="star" color="success"></ui-icon-button>
                <ui-icon-button type="flat" icon="favorite" color="warning"></ui-icon-button>
                <ui-icon-button type="flat" icon="delete" color="danger"></ui-icon-button>
            </div>

            <h4>Clear, White</h4>

            <div class="group box colored">
                <ui-icon-button
                    type="clear" color="white" icon="arrow_back" disabled
                ></ui-icon-button>

                <ui-icon-button
                    type="clear" color="white" icon="refresh" :loading="loading.spinner1"
                    @click.native="startSpinner(1)"
                ></ui-icon-button>

                <ui-icon-button
                    type="clear" color="white" icon="more_vert" has-dropdown-menu
                    :menu-options="menu" dropdown-position="bottom right"
                ></ui-icon-button>
            </div>

            <h4>Clear, Black</h4>

            <div class="group box">
                <ui-icon-button
                    type="clear" color="black" icon="arrow_back" disabled
                ></ui-icon-button>

                <ui-icon-button
                    type="clear" color="black" icon="refresh"  :loading="loading.spinner2"
                    @click.native="startSpinner(2)"
                ></ui-icon-button>

                <ui-icon-button
                    type="clear" color="black" icon="more_vert" has-dropdown-menu
                    :menu-options="menu" dropdown-position="bottom right"
                ></ui-icon-button>
            </div>

            <h4>With Popover</h4>

            <div class="group">
                <ui-icon-button has-popover icon="settings">
                    <div slot="popover">Hey there! <br>Popovers are nice for custom dropdowns.</div>
                </ui-icon-button>
            </div>

            <h4>With tooltip</h4>

            <div class="group">
                <ui-icon-button
                    icon="refresh" tooltip="Top center" tooltip-position="top center"
                ></ui-icon-button>

                <ui-icon-button
                    type="flat" icon="add" color="primary" tooltip="Bottom center"
                ></ui-icon-button>

                <ui-icon-button
                    icon="edit" color="accent" tooltip="Left middle" tooltip-position="left middle"
                ></ui-icon-button>

                <ui-icon-button
                    type="flat" icon="star" color="success" tooltip="Right middle"
                    tooltip-position="right middle"
                ></ui-icon-button>
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
                                <td>The type of icon button. One of <code>normal</code>, <code>flat</code> or <code>clear</code>.</td>
                            </tr>

                            <tr>
                                <td>buttonType</td>
                                <td>String</td>
                                <td><code>"button"</code></td>
                                <td>The <code>type</code> attribute of the icon button element.</td>
                            </tr>

                            <tr>
                                <td>color</td>
                                <td>String</td>
                                <td><code>"default"</code></td>
                                <td>
                                    <p>In normal buttons, the background color; in flat or clear buttons, the text color.</p>

                                    <p>For normal or flat buttons, one of <code>default</code>, <code>primary</code>, <code>accent</code>, <code>success</code>, <code>warning</code> and <code>danger</code>.</p>

                                    <p>For clear buttons, <code>black</code> or <code>white</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>icon *</td>
                                <td>String</td>
                                <td>(required)</td>
                                <td>
                                    <p>The button icon. Can be any of the <a href="https://design.google.com/icons/" target="_blank" rel="noopener">Material Icons</a>.</p>
                                    <p>Note that this should be the icon codepoint if you want to support IE9.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>tooltip</td>
                                <td>String</td>
                                <td></td>
                                <td>The button tooltip (text only).</td>
                            </tr>

                            <tr>
                                <td>tooltipPosition</td>
                                <td>String</td>
                                <td class="no-wrap"><code>"bottom center"</code></td>
                                <td>
                                    <p>The position of the tooltip relative to the button.</p>

                                    <p>One of <code>top left</code>, <code>left top</code>, <code>left middle</code>, <code>left bottom</code>, <code>bottom left</code>, <code>bottom center</code>, <code>bottom right</code>, <code>right bottom</code>, <code>right middle</code>, <code>right top</code>, <code>top right</code>, or <code>top center</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="new-prop">openTooltipOn</td>
                                <td>String</td>
                                <td><code>"hover focus"</code></td>
                                <td>
                                    <p>The type of event or events that will cause the tooltip to open.</p>
                                    <p>One or more of <code>click</code>, <code>hover</code>, or <code>focus</code>. Separate multiple events with a space.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>ariaLabel</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The button <code>aria-label</code> attribute (important for accessibility).</p>
                                    <p>Falls back to <code>tooltip</code> if not specified.</p>
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
                                    <p>An array of options to show in the dropdown menu.</p>

                                    <p>Each option should be an object with at least two properties: <code>id</code> and <code>text</code>.</p>

                                    <p>An option can be shown as a divider by setting its <code>type</code> property to <code>"divider"</code>.</p>

                                    <p>The <code>text</code> is shown to the user and <code>id</code> is passed to the <code>@menu-option-selected</code> event handler.</p>

                                    <p>A menu option may also include these properties:</p>

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

                                    <p>Can be any one of <code>top left</code>, <code>left top</code>, <code>left middle</code>, <code>left bottom</code>, <code>bottom left</code>, <code>bottom center</code>, <code>bottom right</code>, <code>right bottom</code>, <code>right middle</code>, <code>right top</code>, <code>top right</code>, <code>top center</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>openDropdownOn</td>
                                <td>String</td>
                                <td><code>"click"</code></td>
                                <td>
                                    <p>The type of event that will cause the dropdown menu or popover to open.</p>
                                    <p>One of <code>click</code>, <code>hover</code>, <code>focus</code>, or <code>always</code>. For <code>always</code> the dropdown is opened when rendered and it remains open.</p>
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

                * Required prop
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
import UiIconButton from '../../src/UiIconButton.vue';

let menu = [
    {
        id: 'settings',
        text: 'Settings'
    }, {
        id: 'about',
        text: 'About'
    }, {
        id: 'help',
        text: 'Help'
    }
];

export default {
    data() {
        return {
            loading: {
                spinner1: false,
                spinner2: false
            },
            menu
        };
    },

    methods: {
        startSpinner(number) {
            if (number === 1) {
                this.loading.spinner1 = true;

                setTimeout(() => {
                    this.loading.spinner1 = false;
                }, 5000);

                return;
            }

            this.loading.spinner2 = true;

            setTimeout(() => {
                this.loading.spinner2 = false;
            }, 5000);
        }
    },

    components: {
        UiTab,
        UiTabs,
        UiIconButton
    }
};
</script>

<style lang="stylus">
@import '../../src/styles/variables';

.section-ui-icon-button {
    .group {
        display: flex;
        margin-bottom: 18px;
    }

    .box {
        display: flex;
        height: 56px;
        align-items: center;
        justify-content: center;
        width: 200px;
        border: 1px solid $md-grey-300;

        &.colored {
            border: none;
            background-color: $md-blue;
        }

        .ui-icon-button {
            width: 48px;
            height: 48px;
            margin-bottom: 0;

            &:last-child {
                margin-right: 0;
            }
        }
    }

    .ui-icon-button {
        margin-right: 8px;
        margin-bottom: 8px;
    }
}
</style>
