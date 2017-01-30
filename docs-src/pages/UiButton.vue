<template>
    <section class="page page--ui-button">
        <h2 class="page__title">UiButton</h2>

        <p>UiButton is a button component that can show a dropdown and a loading spinner. It also supports focus (mouse and keyboard separately), hover and disabled states.</p>

        <p>UiButton has two types:</p>

        <ul>
            <li><b>Primary</b>: more prominent, has a background color, with white or black text color.</li>
            <li><b>Secondary</b>: less prominent, has no background, text color is the button color.</li>
        </ul>

        <p>Additionally, UiButton can be raised to show a box-shadow.</p>

        <p>Supported colors are <code>primary</code>, <code>accent</code>, <code>green</code>, <code>orange</code> and <code>red</code>, in addition to the default gray.</p>

        <p><b>Note:</b> If you are having alignment issues when using multiple buttons next to each other, put the buttons in a container and add a class of <code>ui-button-group</code> for a flex-based workaround.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiButton.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <ui-radio-group
                name="size"
                :options="['small', 'normal', 'large']"
                v-model="size"
            >Button Size</ui-radio-group>

            <ui-radio-group
                name="icon_position"
                :options="['left', 'right']"
                v-model="iconPosition"
            >Icon Position</ui-radio-group>

            <ui-switch v-model="loading">
                Loading: <code>{{ loading ? 'true' : 'false' }}</code>
            </ui-switch>

            <div class="table-responsive">
                <table class="table table-bordered page__demo-table">
                    <tbody>
                        <tr>
                            <th></th>
                            <th>Type: primary</th>
                            <th>Type: secondary</th>
                        </tr>

                        <tr>
                            <th>Color: default</th>
                            <td>
                                <ui-button :size="size">Normal</ui-button>
                                <ui-button raised :size="size">Raised</ui-button>
                                <ui-button :loading="loading" :size="size">Loading</ui-button>
                                <ui-button disabled :size="size">Disabled</ui-button>
                                <ui-button icon="refresh" :icon-position="iconPosition" :size="size">With Icon</ui-button>
                            </td>

                            <td>
                                <ui-button :size="size" type="secondary">Normal</ui-button>
                                <ui-button raised :size="size" type="secondary">Raised</ui-button>
                                <ui-button :loading="loading" :size="size" type="secondary">Loading</ui-button>
                                <ui-button disabled :size="size" type="secondary">Disabled</ui-button>
                                <ui-button icon="refresh" :icon-position="iconPosition" :size="size" type="secondary">With Icon</ui-button>
                            </td>
                        </tr>

                        <tr>
                            <th>Color: primary</th>
                            <td>
                                <ui-button color="primary" :size="size">Normal</ui-button>
                                <ui-button color="primary" raised :size="size">Raised</ui-button>
                                <ui-button color="primary" :loading="loading" :size="size">Loading</ui-button>
                                <ui-button color="primary" disabled :size="size">Disabled</ui-button>
                                <ui-button color="primary" icon="add" :icon-position="iconPosition" :size="size">With Icon</ui-button>
                            </td>

                            <td>
                                <ui-button color="primary" :size="size" type="secondary">Normal</ui-button>
                                <ui-button color="primary" raised :size="size" type="secondary">Raised</ui-button>
                                <ui-button color="primary" :loading="loading" :size="size" type="secondary">Loading</ui-button>
                                <ui-button color="primary" disabled :size="size" type="secondary">Disabled</ui-button>
                                <ui-button color="primary" icon="add" :icon-position="iconPosition" :size="size" type="secondary">With Icon</ui-button>
                            </td>
                        </tr>

                        <tr>
                            <th>Color: accent</th>
                            <td>
                                <ui-button color="accent" :size="size">Normal</ui-button>
                                <ui-button color="accent" raised :size="size">Raised</ui-button>
                                <ui-button color="accent" :loading="loading" :size="size">Loading</ui-button>
                                <ui-button color="accent" disabled :size="size">Disabled</ui-button>
                                <ui-button color="accent" icon="add" :icon-position="iconPosition" :size="size">With Icon</ui-button>
                            </td>

                            <td>
                                <ui-button color="accent" :size="size" type="secondary">Normal</ui-button>
                                <ui-button color="accent" raised :size="size" type="secondary">Raised</ui-button>
                                <ui-button color="accent" :loading="loading" :size="size" type="secondary">Loading</ui-button>
                                <ui-button color="accent" disabled :size="size" type="secondary">Disabled</ui-button>
                                <ui-button color="accent" icon="add" :icon-position="iconPosition" :size="size" type="secondary">With Icon</ui-button>
                            </td>
                        </tr>

                        <tr>
                            <th>Color: green</th>
                            <td>
                                <ui-button color="green" :size="size">Normal</ui-button>
                                <ui-button color="green" raised :size="size">Raised</ui-button>
                                <ui-button color="green" :loading="loading" :size="size">Loading</ui-button>
                                <ui-button color="green" disabled :size="size">Disabled</ui-button>
                                <ui-button color="green" icon="file_download" :icon-position="iconPosition" :size="size">With Icon</ui-button>
                            </td>

                            <td>
                                <ui-button color="green" :size="size" type="secondary">Normal</ui-button>
                                <ui-button color="green" raised :size="size" type="secondary">Raised</ui-button>
                                <ui-button color="green" :loading="loading" :size="size" type="secondary">Loading</ui-button>
                                <ui-button color="green" disabled :size="size" type="secondary">Disabled</ui-button>
                                <ui-button color="green" icon="file_download" :icon-position="iconPosition" :size="size" type="secondary">With Icon</ui-button>
                            </td>
                        </tr>

                        <tr>
                            <th>Color: orange</th>
                            <td>
                                <ui-button color="orange" :size="size">Normal</ui-button>
                                <ui-button color="orange" raised :size="size">Raised</ui-button>
                                <ui-button color="orange" :loading="loading" :size="size">Loading</ui-button>
                                <ui-button color="orange" disabled :size="size">Disabled</ui-button>
                                <ui-button color="orange" icon="file_download" :icon-position="iconPosition" :size="size">With Icon</ui-button>
                            </td>

                            <td>
                                <ui-button color="orange" :size="size" type="secondary">Normal</ui-button>
                                <ui-button color="orange" raised :size="size" type="secondary">Raised</ui-button>
                                <ui-button color="orange" :loading="loading" :size="size" type="secondary">Loading</ui-button>
                                <ui-button color="orange" disabled :size="size" type="secondary">Disabled</ui-button>
                                <ui-button color="orange" icon="file_download" :icon-position="iconPosition" :size="size" type="secondary">With Icon</ui-button>
                            </td>
                        </tr>

                        <tr>
                            <th>Color: red</th>
                            <td>
                                <ui-button color="red" :size="size">Normal</ui-button>
                                <ui-button color="red" raised :size="size">Raised</ui-button>
                                <ui-button color="red" :loading="loading" :size="size">Loading</ui-button>
                                <ui-button color="red" disabled :size="size">Disabled</ui-button>
                                <ui-button color="red" icon="delete" :icon-position="iconPosition" :size="size">With Icon</ui-button>
                            </td>

                            <td>
                                <ui-button color="red" :size="size" type="secondary">Normal</ui-button>
                                <ui-button color="red" raised :size="size" type="secondary">Raised</ui-button>
                                <ui-button color="red" :loading="loading" :size="size" type="secondary">Loading</ui-button>
                                <ui-button color="red" disabled :size="size" type="secondary">Disabled</ui-button>
                                <ui-button color="red" icon="delete" :icon-position="iconPosition" :size="size" type="secondary">With Icon</ui-button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="page__demo">
            <h4 class="page__demo-title">Has dropdown, with menu</h4>

            <div class="page__demo-group">
                <ui-button color="primary" has-dropdown ref="dropdownButton" :size="size">
                    <ui-menu
                        contain-focus
                        has-icons
                        has-secondary-text
                        slot="dropdown"

                        :options="menuOptions"

                        @close="$refs.dropdownButton.closeDropdown()"
                    ></ui-menu>
                    Click for Menu
                </ui-button>
            </div>

            <h4 class="page__demo-title">Has dropdown, custom content</h4>

            <div class="page__demo-group">
                <ui-button has-dropdown :size="size">
                    <div class="custom-popover-content" slot="dropdown">
                        <p><b>Hey</b> there!</p>
                        <p>Button dropdowns can have any content, not just menus.</p>
                    </div>

                    Click for custom dropdown
                </ui-button>
            </div>
        </div>

        <h3 class="page__section-title">API</h3>

        <ui-tabs raised>
            <ui-tab title="Props">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>type</td>
                                <td>String</td>
                                <td><code>"primary"</code></td>
                                <td>
                                    <p>The type of button (determines the visual prominence).</p>
                                    <p>Use <code>primary</code> for a more prominent button, and <code>secondary</code> for a less prominent button.</p>
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
                                    <p>One of <code>primary</code>, <code>accent</code>, <code>green</code>, <code>orange</code>, <code>red</code> or <code>default</code>.</p>
                                    <p>In <code>type="primary"</code> buttons, this is the background color; in <code>type="secondary"</code> buttons, the text color.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>size</td>
                                <td>String</td>
                                <td><code>"normal"</code></td>
                                <td>
                                    <p>The size of the button. One of <code>small</code>, <code>normal</code>, or <code>large</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>loading</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the button progress spinner is shown.</p>
                                    <p>Set to <code>true</code> to show the progress. This disables the button.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>raised</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the button has a drop shadow.</p>
                                    <p>Set to <code>true</code> to show a drop shadow.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>icon</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The button icon. Can be any of the <a href="https://design.google.com/icons/" target="_blank" rel="noopener">Material Icons</a>.</p>
                                    <p>You can set a custom or SVG icon using the <code>icon</code> slot.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>iconPosition</td>
                                <td>String</td>
                                <td><code>"left"</code></td>
                                <td>
                                    <p>The position of the icon relative to the button text. One of <code>left</code> or <code>right</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>disableRipple</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the ripple ink animation is shown when the button is clicked.</p>
                                    <p>Can be set using the <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/Customization.md#global-config" target="_blank" rel="noopener">global config</a>.</p>
                                    <p>Set to <code>true</code> to disable the ripple ink animation.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>hasDropdown</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the button contains a dropdown.</p>
                                    <p>Use the <code>dropdown</code> slot to add any dropdown content, including a <a href="#/ui-menu">UiMenu</a>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>dropdownPosition</td>
                                <td>String</td>
                                <td class="no-wrap"><code>"bottom left"</code></td>
                                <td>
                                    <p>The position of the dropdown relative to the button.</p>
                                    <p>One of <code>top left</code>, <code>left top</code>, <code>left middle</code>, <code>left bottom</code>, <code>bottom left</code>, <code>bottom center</code>, <code>bottom right</code>, <code>right bottom</code>, <code>right middle</code>, <code>right top</code>, <code>top right</code>, or <code>top center</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>openDropdownOn</td>
                                <td>String</td>
                                <td><code>"click"</code></td>
                                <td>
                                    <p>The type of event that will cause the dropdown to open. One of <code>click</code>, <code>hover</code>, <code>focus</code>, or <code>always</code>.</p>
                                    <p>For <code>always</code>, the dropdown is opened when rendered and it remains open.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the button is disabled.</p>
                                    <p>Set to <code>true</code> to disable the button.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ui-tab>

            <ui-tab title="Slots">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>(default)</td>
                                <td>Holds the button text and can contain HTML.</td>
                            </tr>

                            <tr>
                                <td>icon</td>
                                <td>
                                    <p>Holds the button icon and can contain any custom or SVG icon.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>dropdown</td>
                                <td>
                                    <p>Holds the the dropdown content and can contain HTML.</p>
                                    <p>For a dropdown menu, add a <a href="#/ui-menu">UiMenu</a> component in this slot, and then call the <code>closeDropdown()</code> method when the <code>close</code> event is emitted on the menu.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ui-tab>

            <ui-tab title="Events">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td class="no-wrap">dropdown-open</td>
                                <td>
                                    <p>Emitted when the button dropdown is opened.</p>
                                    <p>Listen for it using <code>@dropdown-open</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap">dropdown-close</td>
                                <td>
                                    <p>Emitted when the button dropdown is closed.</p>
                                    <p>Listen for it using <code>@dropdown-close</code>.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ui-tab>

            <ui-tab title="Methods">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td class="no-wrap"><code>openDropdown()</code></td>
                                <td>
                                    <p>Call this method to open the button dropdown.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap"><code>closeDropdown()</code></td>
                                <td>
                                    <p>Call this method to close the button dropdown.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap"><code>toggleDropdown()</code></td>
                                <td>
                                    <p>Call this method to toggle the button dropdown.</p>
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
import UiButton from 'src/UiButton.vue';
import UiMenu from 'src/UiMenu.vue';
import UiRadioGroup from 'src/UiRadioGroup.vue';
import UiSwitch from 'src/UiSwitch.vue';
import UiTab from 'src/UiTab.vue';
import UiTabs from 'src/UiTabs.vue';

const menuOptions = [
    {
        id: 'edit',
        label: 'Edit',
        icon: 'edit',
        secondaryText: 'Ctrl+E'
    },
    {
        id: 'duplicate',
        label: 'Duplicate',
        icon: 'content_copy',
        secondaryText: 'Ctrl+D'
    },
    {
        id: 'share',
        label: 'Share',
        icon: 'share',
        secondaryText: 'Ctrl+Shift+S',
        disabled: true
    },
    {
        type: 'divider'
    },
    {
        id: 'delete',
        label: 'Delete',
        icon: 'delete',
        secondaryText: 'Del'
    }
];

export default {
    data() {
        return {
            size: 'normal',
            iconPosition: 'left',
            loading: true,
            menuOptions
        };
    },

    components: {
        UiButton,
        UiMenu,
        UiRadioGroup,
        UiSwitch,
        UiTab,
        UiTabs
    }
};
</script>

<style lang="scss">
@import '~styles/imports';

.page--ui-button {
    .ui-radio-group,
    .ui-switch {
        margin-bottom: rem-calc(16px);
    }

    .ui-switch {
        display: inline-flex;
    }

    .ui-button {
        margin-bottom: rem-calc(12px);
        margin-right: rem-calc(8px);
    }

    .page__demo-group {
        margin-bottom: rem-calc(18px);
    }

    .page__demo-table {
        max-width: rem-calc(600px);

        .ui-button {
            display: flex;

            &.ui-button--size-normal {
                min-width: rem-calc(100px);
            }

            &.ui-button--size-large {
                min-width: rem-calc(124px);
            }
        }
    }
}

.custom-popover-content {
    padding: rem-calc(16px);
    max-width: rem-calc(360px);

    p:first-child {
        margin-top: 0;
    }

    p:last-child {
        margin-bottom: 0;
    }
}
</style>
