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
                :options="['mini', 'small', 'normal', 'large']"
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

            <h4 class="page__demo-title">With href (linked button)</h4>

            <div class="page__demo-group">
                <ui-icon-button
                    href="https://github.com/JosephusPaye/Keen-UI"
                    rel="noopener"
                    target="_blank"

                    :size="size"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M8 .198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.47 7.59.4.075.548-.173.548-.384 0-.19-.008-.82-.01-1.49-2.227.485-2.696-.943-2.696-.943-.364-.924-.888-1.17-.888-1.17-.726-.497.055-.486.055-.486.802.056 1.225.824 1.225.824.714 1.223 1.872.87 2.328.665.072-.517.28-.87.508-1.07-1.776-.202-3.644-.888-3.644-3.954 0-.874.313-1.588.824-2.148-.083-.202-.357-1.015.077-2.117 0 0 .672-.215 2.2.82.64-.177 1.323-.266 2.003-.27.68.004 1.365.093 2.004.27 1.527-1.035 2.198-.82 2.198-.82.435 1.102.162 1.916.08 2.117.512.56.822 1.274.822 2.147 0 3.072-1.872 3.748-3.653 3.946.288.248.544.735.544 1.48 0 1.07-.01 1.933-.01 2.196 0 .213.145.462.55.384 3.178-1.06 5.467-4.057 5.467-7.59 0-4.418-3.58-8-8-8z"/></svg>
                </ui-icon-button>
            </div>

            <h4 class="page__demo-title">With tooltip</h4>

            <div class="page__demo-group">
                <ui-icon-button color="default" icon="refresh" :size="size" tooltip="Position top" tooltip-position="top"></ui-icon-button>
                <ui-icon-button color="primary" icon="add" :size="size" tooltip="Position bottom" tooltip-position="bottom"></ui-icon-button>
                <ui-icon-button color="accent" icon="edit" :size="size" tooltip="Position left" tooltip-position="left"></ui-icon-button>
                <ui-icon-button color="green" icon="star" :size="size" tooltip="Position right" tooltip-position="right"></ui-icon-button>
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
                    <div class="my-custom-dropdown" slot="dropdown">
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
                                <td></td>
                                <td>The <code>type</code> attribute of the button element. The <a href="https://stackoverflow.com/a/31644856" target="_blank" rel="noopener">HTML default</a> is <code>submit</code>.</td>
                            </tr>

                            <tr>
                                <td>href</td>
                                <td>String</td>
                                <td></td>
                                <td>The button's <code>href</code> attribute. Setting this attribute will render an anchor tag (<code>&lt;a&gt;</code>).</td>
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
                                    <p>The size of the icon button. One of <code>mini</code>, <code>small</code>, <code>normal</code>, or <code>large</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>icon</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The icon. Can be any of the <a href="https://design.google.com/icons/" target="_blank" rel="noopener">Material Icons</a>.</p>
                                    <p>You can set a custom or SVG icon using the <code>default</code> slot.</p>
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
                                    <p>The button tooltip (text only).</p>
                                </td>
                            </tr>

                            <tr>
                                <td>tooltipPosition</td>
                                <td>String</td>
                                <td class="no-wrap"><code>"bottom"</code></td>
                                <td>
                                    <p>The position of the tooltip relative to the button.</p>
                                    <p>One of <code>top</code>, <code>top-start</code>, <code>top-end</code>, <code>right</code>, <code>right-start</code>, <code>right-end</code>, <code>bottom</code>, <code>bottom-start</code>, <code>bottom-end</code>, <code>left</code>, <code>left-start</code>, <code>left-end</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>openTooltipOn</td>
                                <td>String</td>
                                <td><code>"mouseenter focus"</code></td>
                                <td>
                                    <p>The type of event or events that will cause the tooltip to open.</p>
                                    <p>One or more of <code>click</code>, <code>hover</code>/<code>mouseenter</code>, or <code>focus</code>. Separate multiple events with a space.</p>
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
                                <td>constrainDropdownToScrollParent</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td>
                                    <p>When set to <code>true</code>, the button's dropdown will flip it's position if the position will cause it to overflow the button's first scroll parent. The scroll parent is the parent that has <code>overflow: auto</code> or <code>overflow: scroll</code> set, or <code>&lt;body&gt;</code>, whichever comes first.</p>
                                    <p>Set to <code>false</code> to disable the flipping behavior. This is useful for buttons in modals, if you want the button's dropdown to drop outside of the boundaries of the modal.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>openDropdownOn</td>
                                <td>String</td>
                                <td><code>"click"</code></td>
                                <td>
                                    <p>The type of event that will cause the dropdown to open. One of <code>click</code>, <code>mouseenter</code>/<code>hover</code>, <code>focus</code>, or <code>manual</code>.</p>
                                    <p>For <code>manual</code>, the dropdown is closed by default, until manually opened.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>disableRipple</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the ripple ink animation is shown when the button is clicked.</p>
                                    <p>Default value can be <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/Customization.md#changing-default-prop-values" target="_blank" rel="noopener">changed globally</a>.</p>
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
                                <td>(default)</td>
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
        max-width: rem(600px);
    }

    .page__demo-group {
        display: inline-flex;

        &.has-white-icon-buttons {
            background-color: $md-blue;
            padding: rem(4px 8px);
        }
    }

    .ui-radio-group,
    .ui-switch {
        margin-bottom: rem(16px);
    }

    .ui-switch {
        display: inline-flex;
    }

    .ui-icon-button {
        margin-right: rem(8px);
    }
}

.my-custom-dropdown {
    padding: 8px;

    p:first-child {
        margin-top: 0;
    }

    p:last-child {
        margin-bottom: 0;
    }
}
</style>
