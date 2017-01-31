<template>
    <section class="page page--ui-menu">
        <h2 class="page__title">UiMenu</h2>

        <p>UiMenu shows a menu of options. Options can show an icon, secondary text (like keyboard shortcuts), or show a divider. Individual options can be disabled.</p>

        <p>A dropdown menu can be created by wrapping UiMenu in <a href="#/ui-popover">UiPopover</a>.</p>

        <p>UiMenu is keyboard accessible and is can be set to contain tab focus in the menu until it is closed.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiMenu.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <h4 class="page__demo-title">Basic</h4>
            <ui-menu :options="menuOptions"></ui-menu>

            <h4 class="page__demo-title">Raised</h4>
            <ui-menu :options="menuOptions" raised></ui-menu>

            <h4 class="page__demo-title">With icons</h4>
            <ui-menu has-icons :options="menuOptions" raised></ui-menu>

            <h4 class="page__demo-title">With secondary text</h4>
            <ui-menu has-secondary-text :options="menuOptions" raised></ui-menu>

            <h4 class="page__demo-title">With icons and secondary text</h4>
            <ui-menu has-icons has-secondary-text :options="menuOptions" raised></ui-menu>

            <h4 class="page__demo-title">Custom template</h4>
            <ui-menu has-icons has-secondary-text :options="menuOptions" raised>
                <template scope="props" slot="option">
                    <code>Label: {{ props.option.label }}, Icon: {{ props.option.icon }}</code>
                </template>
            </ui-menu>

            <h4 class="page__demo-title">In UiPopover (creates a dropdown)</h4>

            <a
                class="popover-trigger"
                ref="dropdownTrigger"
                tabindex="0"
            >Click here for the menu</a>

            <ui-popover trigger="dropdownTrigger" ref="dropdown">
                <ui-menu
                    contain-focus
                    has-icons
                    has-secondary-text

                    :options="menuOptions"

                    @close="$refs.dropdown.close()"
                ></ui-menu>
            </ui-popover>
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
                                <td>options *</td>
                                <td>Array</td>
                                <td><code>[]</code></td>
                                <td>
                                    <p>An array of options to show in the menu. Can be a plain array or an array of objects.</p>

                                    <p>For an array of objects, each option can have the following properties:</p>
                                    <ul>
                                        <li><code>type</code>: (String) - the type of option. Can be set to <code>"divider"</code> for a divider.</li>
                                        <li><code>label</code>: (String) - the option label text</li>
                                        <li><code>secondaryText</code>: (String) - text to show to the right of the option in the dropdown. Can be used to show keyboard shortcuts.</li>
                                        <li><code>icon</code>: (String) - an icon to show with the option. Can be any of the <a href="https://design.google.com/icons/" target="_blank" rel="noopener">Material Icons</a>.</li>
                                        <li><code>iconProps</code>: (String) - an object with any of the following props of <a href="#/ui-icon">UiIcon</a>: <code>iconSet</code>, <code>removeText</code> or <code>useSvg</code>. These will be passed as props to the rendered UiIcon component.</li>
                                        <li><code>disabled</code>: (Boolean) - Whether or not the option is disabled.</li>
                                    </ul>

                                    <p>You can redefine these keys to fit your data using the <code>keys</code> prop.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>hasIcons</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the menu options have icons.</p>
                                    <p>Set to <code>true</code> to show icons.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>iconProps</td>
                                <td>String</td>
                                <td><code>{}</code></td>
                                <td>
                                    <p>An object with any of the following props of <a href="#/ui-icon">UiIcon</a>: <code>iconSet</code>, <code>removeText</code> or <code>useSvg</code>. These will be passed as props to the rendered UiIcon component.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>hasSecondaryText</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the menu options have secondary text.</p>
                                    <p>Set to <code>true</code> to show secondary text.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>containFocus</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not tab focus should be contained in the menu.</p>
                                    <p>Set to <code>true</code> to contain tab focus in the menu until it's closed.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>keys</td>
                                <td>Object</td>
                                <td class="no-wrap"><pre class="language-javascript is-compact">{
  icon: 'icon',
  type: 'type',
  label: 'label',
  secondaryText: 'secondaryText',
  iconProps: 'iconProps',
  disabled: 'disabled'
}</pre></td>
                                <td>
                                    <p>Allows for redefining the option keys. Only the <code>label</code> key is required.</p>
                                    <p>Pass an object with custom keys if your data does not match the default keys.</p>
                                    <p>Note that if you redefine one key, you have to define all the others as well.</p>
                                    <p>Can be set using the <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/Customization.md#global-config" target="_blank" rel="noopener">global config</a>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>disableRipple</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the ripple ink animation is disabled.</p>
                                    <p>Can be set using the <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/Customization.md#global-config" target="_blank" rel="noopener">global config</a>.</p>
                                    <p>Set to <code>true</code> to disable the ripple ink animation.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>raised</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td>
                                    <p>Whether or not the menu has a drop shadow.</p>
                                    <p>Set to <code>true</code> to add a drop shadow to the menu.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                * Required prop
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
                                <td>select</td>
                                <td>
                                    <p>Emitted when an option is selected from the menu. The handler is called with the option that was selected.</p>
                                    <p>Listen for it using <code>@select</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>close</td>
                                <td>
                                    <p>Emitted when the menu should be closed (i.e. when an option is selected, when tab focus leaves the menu and <code>containFocus</code> is <code>false</code> or when the ESC key is pressed).</p>
                                    <p>You should listen for this event and close the corresponding UiPopover if the menu is contained in a popover.</p>
                                    <p>Listen for it using <code>@close</code>.</p>
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
                                <td>option</td>
                                <td>
                                    <p>Use this slot to render each menu option with a custom template. The slot is passed the following properties, which will be available through <code>scope</code>:</p>

                                    <ul>
                                        <li><code>option</code>: (Object or String) - the option</li>
                                    </ul>

                                    <p>For more information, see the <a href="https://vuejs.org/v2/guide/components.html#Scoped-Slots">Scoped Slots documentation</a>.</p>
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
import UiMenu from 'src/UiMenu.vue';
import UiPopover from 'src/UiPopover';
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
            menuOptions
        };
    },

    components: {
        UiMenu,
        UiPopover,
        UiTab,
        UiTabs
    }
};
</script>

<style lang="scss">
@import '~styles/imports';

.page--ui-menu {
    .popover-trigger {
        background-color: $md-blue-grey;
        color: white;
        cursor: default;
        display: inline-block;
        padding: 8px 16px;
        text-decoration: none;

        &:hover {
            background-color: $md-blue-grey-600;
        }
    }
}
</style>
