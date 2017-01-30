<template>
    <section class="page page--ui-icon-button">
        <h2 class="page__title">UiIconButton</h2>

        <p>UiIconButton shows an icon button which can show a loading spinner and include a dropdown. It supports focus (mouse and keyboard separately), hover and disabled states.</p>

        <p>UiIconButton has two types:</p>
        <ul>
            <li><b>Primary</b>: more prominent, has a background color, with white or black text color.</li>
            <li><b>Secondary</b>: less prominent, has no background, text color is the button color.</li>
        </ul>

        <p>Supported colors are <code>primary</code>, <code>accent</code>, <code>green</code>, <code>orange</code>, <code>red</code>, <code>black</code>, and <code>white</code> in addition to the default gray.</p>

        <p>The <code>black</code> and <code>white</code> colors should only be paired with <code>type="secondary"</code>.</p>

        <p><b>Note:</b> If you are having alignment issues when using multiple buttons next to each other, put the buttons in a container and add a class of <code>ui-button-group</code> for a flex-based workaround.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiIconButton.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <ui-radio-group
                name="size"
                :options="['small', 'normal', 'large']"
                v-model="size"
            >Button Size</ui-radio-group>

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
                                <div class="page__demo-group">
                                    <ui-icon-button icon="refresh" :size="size"></ui-icon-button>
                                    <ui-icon-button icon="refresh" :loading="loading" :size="size"></ui-icon-button>
                                    <ui-icon-button disabled icon="refresh" :size="size"></ui-icon-button>
                                </div>
                            </td>

                            <td>
                                <div class="page__demo-group">
                                    <ui-icon-button icon="refresh" :size="size" type="secondary"></ui-icon-button>
                                    <ui-icon-button icon="refresh" :loading="loading" :size="size" type="secondary"></ui-icon-button>
                                    <ui-icon-button disabled icon="refresh" :size="size" type="secondary"></ui-icon-button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <th>Color: primary</th>
                            <td>
                                <div class="page__demo-group">
                                    <ui-icon-button color="primary" icon="add" :size="size"></ui-icon-button>
                                    <ui-icon-button color="primary" icon="add" :loading="loading" :size="size"></ui-icon-button>
                                    <ui-icon-button color="primary" disabled icon="add" :size="size"></ui-icon-button>
                                </div>
                            </td>

                            <td>
                                <div class="page__demo-group">
                                    <ui-icon-button color="primary" icon="add" :size="size" type="secondary"></ui-icon-button>
                                    <ui-icon-button color="primary" icon="add" :loading="loading" :size="size" type="secondary"></ui-icon-button>
                                    <ui-icon-button color="primary" disabled icon="add" :size="size" type="secondary"></ui-icon-button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <th>Color: accent</th>
                            <td>
                                <div class="page__demo-group">
                                    <ui-icon-button color="accent" icon="edit" :size="size"></ui-icon-button>
                                    <ui-icon-button color="accent" icon="edit" :loading="loading" :size="size"></ui-icon-button>
                                    <ui-icon-button color="accent" disabled icon="edit" :size="size"></ui-icon-button>
                                </div>
                            </td>

                            <td>
                                <div class="page__demo-group">
                                    <ui-icon-button color="accent" icon="edit" :size="size" type="secondary"></ui-icon-button>
                                    <ui-icon-button color="accent" icon="edit" :loading="loading" :size="size" type="secondary"></ui-icon-button>
                                    <ui-icon-button color="accent" disabled icon="edit" :size="size" type="secondary"></ui-icon-button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <th>Color: green</th>
                            <td>
                                <div class="page__demo-group">
                                    <ui-icon-button color="green" icon="star" :size="size"></ui-icon-button>
                                    <ui-icon-button color="green" icon="star" :loading="loading" :size="size"></ui-icon-button>
                                    <ui-icon-button color="green" disabled icon="star" :size="size"></ui-icon-button>
                                </div>
                            </td>

                            <td>
                                <div class="page__demo-group">
                                    <ui-icon-button color="green" icon="star" :size="size" type="secondary"></ui-icon-button>
                                    <ui-icon-button color="green" icon="star" :loading="loading" :size="size" type="secondary"></ui-icon-button>
                                    <ui-icon-button color="green" disabled icon="star" :size="size" type="secondary"></ui-icon-button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <th>Color: orange</th>
                            <td>
                                <div class="page__demo-group">
                                    <ui-icon-button color="orange" icon="favorite" :size="size"></ui-icon-button>
                                    <ui-icon-button color="orange" icon="favorite" :loading="loading" :size="size"></ui-icon-button>
                                    <ui-icon-button color="orange" disabled icon="favorite" :size="size"></ui-icon-button>
                                </div>
                            </td>

                            <td>
                                <div class="page__demo-group">
                                    <ui-icon-button color="orange" icon="favorite" :size="size" type="secondary"></ui-icon-button>
                                    <ui-icon-button color="orange" icon="favorite" :loading="loading" :size="size" type="secondary"></ui-icon-button>
                                    <ui-icon-button color="orange" disabled icon="favorite" :size="size" type="secondary"></ui-icon-button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <th>Color: red</th>
                            <td>
                                <div class="page__demo-group">
                                    <ui-icon-button color="red" icon="delete" :size="size"></ui-icon-button>
                                    <ui-icon-button color="red" icon="delete" :loading="loading" :size="size"></ui-icon-button>
                                    <ui-icon-button color="red" disabled icon="delete" :size="size"></ui-icon-button>
                                </div>
                            </td>

                            <td>
                                <div class="page__demo-group">
                                    <ui-icon-button color="red" icon="delete" :size="size" type="secondary"></ui-icon-button>
                                    <ui-icon-button color="red" icon="delete" :loading="loading" :size="size" type="secondary"></ui-icon-button>
                                    <ui-icon-button color="red" disabled icon="delete" :size="size" type="secondary"></ui-icon-button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <th>Color: black</th>
                            <td></td>

                            <td>
                                <div class="page__demo-group">
                                    <ui-icon-button color="black" icon="menu" :size="size" type="secondary"></ui-icon-button>
                                    <ui-icon-button color="black" icon="refresh" :loading="loading" :size="size" type="secondary"></ui-icon-button>
                                    <ui-icon-button color="black" disabled icon="more_vert" :size="size" type="secondary"></ui-icon-button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <th>Color: white</th>
                            <td></td>

                            <td>
                                <div class="page__demo-group has-white-icon-buttons">
                                    <ui-icon-button color="white" icon="menu" :size="size" type="secondary"></ui-icon-button>
                                    <ui-icon-button color="white" icon="refresh" :loading="loading" :size="size" type="secondary"></ui-icon-button>
                                    <ui-icon-button color="white" disabled icon="more_vert" :size="size" type="secondary"></ui-icon-button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4 class="page__demo-title">With tooltip</h4>

            <div class="page__demo-group">
                <ui-icon-button icon="refresh" :size="size" tooltip="Top center" tooltip-position="top center"></ui-icon-button>
                <ui-icon-button color="primary" icon="add" :size="size" tooltip="Bottom center"></ui-icon-button>
                <ui-icon-button color="accent" icon="edit" :size="size" tooltip="Left middle" tooltip-position="left middle"></ui-icon-button>
                <ui-icon-button color="green" icon="star" :size="size" tooltip="Right middle" tooltip-position="right middle"></ui-icon-button>
            </div>

            <h4 class="page__demo-title">Has dropdown, with menu</h4>

            <div class="page__demo-group">
                <ui-icon-button color="primary" has-dropdown icon="add" ref="dropdownButton" :size="size">
                    <ui-menu
                        contain-focus
                        has-icons
                        slot="dropdown"
                        :options="menuOptions"
                        @close="$refs.dropdownButton.closeDropdown()"
                    ></ui-menu>
                </ui-icon-button>
            </div>

            <h4 class="page__demo-title">Has dropdown, custom content</h4>

            <div class="page__demo-group">
                <ui-icon-button has-dropdown icon="more_vert" :size="size">
                    <div class="custom-popover-content" slot="dropdown">
                        <p><b>Hey</b> there!</p>
                        <p>Button dropdowns can have any content, not just menus.</p>
                    </div>
                </ui-icon-button>
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
                                    <p>The type of icon button (determines the visual prominence).</p>
                                    <p>Use <code>primary</code> for a more prominent button, and <code>secondary</code> for a less prominent button.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>buttonType</td>
                                <td>String</td>
                                <td><code>"button"</code></td>
                                <td>The <code>type</code> attribute of the button element.</td>
                            </tr>

                            <tr>
                                <td>color</td>
                                <td>String</td>
                                <td><code>"default"</code></td>
                                <td>
                                    <p>One of <code>primary</code>, <code>accent</code>, <code>green</code>, <code>orange</code>, <code>red</code>, <code>black</code>, <code>white</code> or <code>default</code>.</p>
                                    <p>The <code>black</code> and <code>white</code> colors should only be paired with <code>type="secondary"</code>.</p>
                                    <p>In <code>type="primary"</code> buttons, this is the background color; in <code>type="secondary"</code> buttons, the text color.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>size</td>
                                <td>String</td>
                                <td><code>"normal"</code></td>
                                <td>
                                    <p>The size of the icon button. One of <code>small</code>, <code>normal</code>, or <code>large</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>icon</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The icon. Can be any of the <a href="https://design.google.com/icons/" target="_blank" rel="noopener">Material Icons</a>.</p>
                                    <p>You can set a custom or SVG icon using the <code>icon</code> slot.</p>
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
                                <td>loading</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the loading spinner is shown.</p>
                                    <p>Set to <code>true</code> to show the loading spinner (disables the button).</p>
                                </td>
                            </tr>

                            <tr>
                                <td>tooltip</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The icon button tooltip (text only).</p>
                                </td>
                            </tr>

                            <tr>
                                <td>tooltipPosition</td>
                                <td>String</td>
                                <td class="no-wrap"><code>"bottom left"</code></td>
                                <td>
                                    <p>The position of the tooltip relative to the button.</p>
                                    <p>One of <code>top left</code>, <code>left top</code>, <code>left middle</code>, <code>left bottom</code>, <code>bottom left</code>, <code>bottom center</code>, <code>bottom right</code>, <code>right bottom</code>, <code>right middle</code>, <code>right top</code>, <code>top right</code>, or <code>top center</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>openTooltipOn</td>
                                <td>String</td>
                                <td><code>"hover focus"</code></td>
                                <td>
                                    <p>The type of event or events that will cause the tooltip to open.</p>
                                    <p>One or more of <code>click</code>, <code>hover</code>, or <code>focus</code>. Separate multiple events with a space.</p>
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
import UiIconButton from 'src/UiIconButton.vue';
import UiMenu from 'src/UiMenu.vue';
import UiRadioGroup from 'src/UiRadioGroup.vue';
import UiSwitch from 'src/UiSwitch.vue';
import UiTab from 'src/UiTab.vue';
import UiTabs from 'src/UiTabs.vue';

const menuOptions = [
    {
        label: 'Note',
        icon: 'edit'
    },
    {
        label: 'Photo',
        icon: 'photo'
    },
    {
        label: 'Document',
        icon: 'description'
    },
    {
        type: 'divider'
    },
    {
        label: 'Collection',
        icon: 'collections_bookmark'
    }
];

export default {
    data() {
        return {
            size: 'normal',
            loading: true,
            menuOptions
        };
    },

    components: {
        UiIconButton,
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

.page--ui-icon-button {
    .page__demo-table {
        max-width: rem-calc(600px);
    }

    .page__demo-group {
        display: inline-flex;

        &.has-white-icon-buttons {
            background-color: $md-blue;
            padding: rem-calc(4px 8px);
        }
    }

    .ui-radio-group,
    .ui-switch {
        margin-bottom: rem-calc(16px);
    }

    .ui-switch {
        display: inline-flex;
    }

    .ui-icon-button {
        margin-right: rem-calc(8px);
    }
}
</style>
