<template>
    <section class="page page--ui-radio-group">
        <h2 class="page__title">UiRadioGroup</h2>

        <p>UiRadioGroup shows a group of mutually exclusive radio buttons. It supports hover, focus and disabled states. One or more options in the group can be disabled or the entire group can be disabled.</p>

        <p>UiRadioGroup can show a label above the group as well as help or error below the group and it allows for resetting the group to its initial state.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiRadioGroup.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <h4 class="page__demo-title">Basic</h4>

            <ui-radio-group
                name="group1"
                :options="['Ned', 'Rod', 'Todd']"
                v-model="group1"
            >Favourite Flanders</ui-radio-group>

            <h4 class="page__demo-title">With default selection</h4>

            <ui-radio-group
                name="group2"
                :options="options.defaultGroup"
                v-model="group2"
            >Favourite Flanders</ui-radio-group>

            <h4 class="page__demo-title">With help</h4>

            <ui-radio-group
                help="Choose your favourite neighbor-eeno"
                name="group3"
                :options="options.defaultGroup"
                v-model="group3"
            >Favourite Flanders</ui-radio-group>

            <h4 class="page__demo-title">With error</h4>

            <ui-radio-group
                error="You must choose Rod"
                help="Choose your favourite neighbor-eeno"
                name="group4"
                :options="options.defaultGroup"
                :invalid="group4 !== 'rod'"
                v-model="group4"
            >Favourite Flanders</ui-radio-group>

            <h4 class="page__demo-title">Vertical</h4>

            <ui-radio-group
                name="group5"
                vertical
                :options="options.defaultGroup"
                v-model="group5"
            >Favourite Flanders</ui-radio-group>

            <h4 class="page__demo-title">Individual option disabled</h4>

            <ui-radio-group
                name="group6"
                :options="options.secondGroup"
                v-model="group6"
            >Favourite Flanders</ui-radio-group>

            <h4 class="page__demo-title">Group disabled</h4>

            <ui-radio-group
                name="group7"
                disabled
                :options="options.defaultGroup"
                v-model="group7"
            >Favourite Flanders</ui-radio-group>
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
                                <td>name *</td>
                                <td>String</td>
                                <td>(required)</td>
                                <td>
                                    <p>The name of the radio group.</p>
                                    <p>Applied as the <code>name</code> attribute on each input element in the radio group.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>label</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The radio group label (text only). For HTML, use the <code>default</code> slot.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap">value, v-model *</td>
                                <td>Number, String</td>
                                <td></td>
                                <td>
                                    <p>The model that the selected value in the radio group syncs to. Can be set initially for a default selection.</p>
                                    <p>If you are not using <code>v-model</code>, you should listen for the <code>input</code> event and update <code>value</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>options *</td>
                                <td>Array</td>
                                <td>(required)</td>
                                <td>
                                    <p>An array of options to show to the user as radio buttons. The array can either be of strings or objects (but not both).</p>

                                    <p>For an array of objects, each option object supports the following properties:</p>
                                    <ul>
                                        <li><code>id</code>: Applied as the <code>id</code> attribute of the option's root element.</li>
                                        <li><code>class</code>: Applied as the <code>class</code> attribute of the option's root element.</li>
                                        <li><code>label</code>*: The option's label - shown to the user.</li>
                                        <li><code>value</code>*: The option's value - written to the model when the option is selected.</li>
                                        <li><code>checked</code>: Whether or not the option is selected by default. This is overridden by the radio group's initial <code>value</code> if it's non-empty.</li>
                                        <li><code>disabled</code>: Whether or not the option is disabled.</li>
                                    </ul>

                                    <p>For an array of strings, each option string is used as both the label and the value.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>keys</td>
                                <td>Object</td>
                                <td class="no-wrap"><pre class="language-javascript is-compact">{
  id: 'id',
  class: 'class',
  label: 'label',
  value: 'value',
  checked: 'checked',
  disabled: 'disabled'
}</pre></td>
                                <td>
                                    <p>Allows for redefining the option keys. The <code>id</code>, <code>class</code>, <code>checked</code>, and <code>disabled</code> keys are optional.</p>
                                    <p>Pass an object with custom keys if your data does not match the default keys.</p>
                                    <p>Note that if you redefine one key, you have to define all the others as well.</p>
                                    <p>Can be set using the <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/Customization.md#global-config" target="_blank" rel="noopener">global config</a>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>color</td>
                                <td>String</td>
                                <td><code>"primary"</code></td>
                                <td>The color of a selected radio button in the group. One of <code>primary</code> or <code>accent</code>.</td>
                            </tr>

                            <tr>
                                <td>buttonPosition</td>
                                <td>String</td>
                                <td><code>"left"</code></td>
                                <td>The position of the radio buttons relative to their labels. One of <code>left</code> or <code>right</code>.</td>
                            </tr>

                            <tr>
                                <td>vertical</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the radio group options are rendered vertically, one over the other.</p>
                                    <p>Set to <code>true</code> for a vertical radio group.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>help</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The help text (hint) shown to the user below the radio group. For HTML, use the <code>help</code> slot.</p>
                                    <p>Extra space is reserved under the radio group for the help and error, but if neither is available, this space is collapsed.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>error</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The error text shown to the user below the radio group when the <code>invalid</code> prop is <code>true</code>. For HTML, use the <code>error</code> slot.</p>
                                    <p>Extra space is reserved under the radio group for the help and error, but if neither is available, this space is collapsed.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>invalid</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the radio group is invalid.</p>
                                    <p>When <code>invalid</code> is <code>true</code>, the radio group label appears red and the error is shown if available.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the radio group is disabled.</p>
                                    <p>Set to <code>true</code> to disable the radio group.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                * Required prop
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
                                <td>Holds the radio group label and can contain HTML.</td>
                            </tr>

                            <tr>
                                <td>help</td>
                                <td>
                                    <p>Holds the radio group help and can contain HTML.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>error</td>
                                <td>
                                    <p>Holds the radio group error and can contain HTML.</p>
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
                                <td>focus</td>
                                <td>
                                    <p>Emitted when a radio button in the group is focused.</p>
                                    <p>Listen for it using <code>@focus</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>blur</td>
                                <td>
                                    <p>Emitted when a radio button in the group loses focus.</p>
                                    <p>Listen for it using <code>@blur</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>input</td>
                                <td>
                                    <p>Emitted when the radio group value is changed. The handler is called with the new value.</p>
                                    <p>If you are not using <code>v-model</code>, you should listen for this event and update the <code>value</code> prop.</p>
                                    <p>Listen for it using <code>@input</code>.
                                </td>
                            </tr>

                            <tr>
                                <td>change</td>
                                <td>
                                    <p>Emitted when the value of the radio group is changed. The handler is called with the new value.</p>
                                    <p>Listen for it using <code>@change</code>.</p>
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
                                <td><code>reset()</code></td>
                                <td>
                                    <p>Call this method to reset the radio group's value to its initial value. You should also reset the <code>invalid</code> prop.</p>
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
import UiRadioGroup from 'src/UiRadioGroup.vue';
import UiTab from 'src/UiTab.vue';
import UiTabs from 'src/UiTabs.vue';

const defaultGroup = [
    {
        label: 'Ned',
        value: 'ned'
    },
    {
        label: 'Rod',
        value: 'rod'
    },
    {
        label: 'Todd',
        value: 'todd'
    }
];

const secondGroup = [
    {
        label: 'Ned',
        value: 'ned'
    },
    {
        label: 'Maude',
        value: 'maude',
        disabled: true
    },
    {
        label: 'Rod',
        value: 'rod'
    },
    {
        label: 'Todd',
        value: 'todd'
    }
];

export default {
    data() {
        return {
            group1: '',
            group2: 'rod',
            group3: '',
            group4: '',
            group5: '',
            group6: '',
            group7: '',
            options: {
                defaultGroup,
                secondGroup
            }
        };
    },

    components: {
        UiRadioGroup,
        UiTab,
        UiTabs
    }
};
</script>
