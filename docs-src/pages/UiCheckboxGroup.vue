<template>
    <section class="page page--ui-checkbox-group">
        <h2 class="page__title">UiCheckboxGroup</h2>

        <p>UiCheckboxGroup shows a group of related checkboxes. It supports hover, focus and disabled states.</p>

        <p>UiCheckboxGroup can show a label above the group as well as help or error below the group. One or more checkboxes in the group can be disabled or the entire group can be disabled.</p>

        <p>UiCheckboxGroup is primarily used for connecting a group of checkbox values together to form a single array.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiCheckboxGroup.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <h4 class="page__demo-title">Basic</h4>

            <ui-checkbox-group
                :options="['Red', 'Blue', 'Green']"
                v-model="group1"
            >Favourite Colours</ui-checkbox-group>

            <p>Model: <code>{{ group1 }}</code></p>

            <h4 class="page__demo-title">With default selection</h4>

            <ui-checkbox-group
                :options="options.defaultGroup"
                v-model="group2"
            >Favourite Colours</ui-checkbox-group>

            <p>Model: <code>{{ group2 }}</code></p>

            <h4 class="page__demo-title">With help</h4>

            <ui-checkbox-group
                help="Choose your favourite colours"
                :options="options.defaultGroup"
                v-model="group3"
            >Favourite Colours</ui-checkbox-group>

            <h4 class="page__demo-title">With error</h4>

            <ui-checkbox-group
                error="Choose at least 2 colours"
                help="Choose your favourite colours"
                :options="options.defaultGroup"
                :invalid="group3.length < 2"
                v-model="group3"
            >Favourite Colours</ui-checkbox-group>

            <h4 class="page__demo-title">Box position: right</h4>

            <ui-checkbox-group
                box-position="right"
                :options="options.defaultGroup"
                v-model="group4"
            >Favourite Colours</ui-checkbox-group>

            <h4 class="page__demo-title">Vertical</h4>

            <ui-checkbox-group
                vertical
                :options="options.defaultGroup"
                v-model="group5"
            >Favourite Colours</ui-checkbox-group>

            <h4 class="page__demo-title">Individual option disabled</h4>

            <ui-checkbox-group
                :options="options.secondGroup"
                v-model="group6"
            >Favourite Colours</ui-checkbox-group>

            <h4 class="page__demo-title">Group disabled</h4>

            <ui-checkbox-group
                disabled
                :options="options.defaultGroup"
                v-model="group7"
            >Favourite Colours</ui-checkbox-group>
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
                                <td class="no-wrap">value, v-model *</td>
                                <td>Array</td>
                                <td></td>
                                <td>
                                    <p>The model that holds the checked option values. Can be set initially for default values.</p>
                                    <p>If you are not using <code>v-model</code>, you should listen for the <code>input</code> event and update <code>value</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>options *</td>
                                <td>Array</td>
                                <td>(required)</td>
                                <td>
                                    <p>An array of options to show to the user as checkboxes. The array can either be of strings or objects (but not both).</p>

                                    <p>For an array of objects, each object supports the following properties:</p>
                                    <ul>
                                        <li><code>id</code>: Applied as the <code>id</code> attribute on the option's root element.</li>
                                        <li><code>name</code>: Applied as the <code>name</code> attribute on the option's checkbox input element.</li>
                                        <li><code>class</code>: Applied as the <code>class</code> attribute on the option's root element</li>
                                        <li><code>label</code>*: The option's label - shown to the user.</li>
                                        <li><code>value</code>*: The option's value - added to the model when the user checks the option, removed when the user unchecks the option.</li>
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
  name: 'name',
  class: 'class',
  label: 'label',
  value: 'value',
  disabled: 'disabled'
}</pre></td>
                                <td>
                                    <p>Allows for redefining the option keys. The <code>id</code>, <code>name</code>, <code>class</code> and <code>disabled</code> keys are optional.</p>
                                    <p>Pass an object with custom keys if your data does not match the default keys.</p>
                                    <p>Note that if you redefine one key, you have to define all the others as well.</p>
                                    <p>Can be set using the <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/Customization.md#global-config" target="_blank" rel="noopener">global config</a>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>name</td>
                                <td>String</td>
                                <td></td>
                                <td>The <code>name</code> attribute of each checkbox's input element.</td>
                            </tr>

                            <tr>
                                <td>label</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The checkbox group label (text only). For HTML, use the <code>default</code> slot.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>color</td>
                                <td>String</td>
                                <td><code>"primary"</code></td>
                                <td>The color of the checkboxes in the group. One of <code>primary</code> or <code>accent</code>.</td>
                            </tr>

                            <tr>
                                <td>boxPosition</td>
                                <td>String</td>
                                <td><code>"left"</code></td>
                                <td>The position of the checkboxes relative to their labels. One of <code>left</code> or <code>right</code>.</td>
                            </tr>

                            <tr>
                                <td>vertical</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the checkbox options are rendered vertically, one over the other.</p>
                                    <p>Set to <code>true</code> for a vertical checkbox group.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>help</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The help text (hint) shown to the user below the checkbox group. For HTML, use the <code>help</code> slot.</p>
                                    <p>Extra space is reserved under the checkbox group for the help and error, but if neither is available, this space is collapsed.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>error</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The error text shown to the user below the checkbox group when the <code>invalid</code> prop is <code>true</code>. For HTML, use the <code>error</code> slot.</p>
                                    <p>Extra space is reserved under the checkbox group for the help and error, but if neither is available, this space is collapsed.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>invalid</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the checkbox group is invalid.</p>
                                    <p>When <code>invalid</code> is <code>true</code>, the checkbox group label appears red and the error is shown if available.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the checkbox group is disabled.</p>
                                    <p>Set to <code>true</code> to disable the checkbox group.</p>
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
                                <td>Holds the checkbox group label and can contain HTML.</td>
                            </tr>

                            <tr>
                                <td>help</td>
                                <td>
                                    <p>Holds the checkbox group help and can contain HTML.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>error</td>
                                <td>
                                    <p>Holds the checkbox group error and can contain HTML.</p>
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
                                    <p>Emitted when a checkbox in the group is focused.</p>
                                    <p>Listen for it using <code>@focus</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>blur</td>
                                <td>
                                    <p>Emitted when a checkbox in the group loses focus.</p>
                                    <p>Listen for it using <code>@blur</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>input</td>
                                <td>
                                    <p>Emitted when the checkbox group value is changed. The handler is called with the new value.</p>
                                    <p>If you are not using <code>v-model</code>, you should listen for this event and update the <code>value</code> prop.</p>
                                    <p>Listen for it using <code>@input</code>.
                                </td>
                            </tr>

                            <tr>
                                <td>change</td>
                                <td>
                                    <p>Emitted when the value of the checkbox group is changed. The handler is called with the new value.</p>
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
                                    <p>Call this method to reset the checkbox group's <code>value</code>. You should also reset the <code>invalid</code> prop.</p>
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
import UiCheckboxGroup from 'src/UiCheckboxGroup.vue';
import UiTab from 'src/UiTab.vue';
import UiTabs from 'src/UiTabs.vue';

const defaultGroup = [
    {
        label: 'Red',
        value: 'red'
    },
    {
        label: 'Green',
        value: 'green'
    },
    {
        label: 'Blue',
        value: 'blue'
    }
];

const secondGroup = [
    {
        label: 'Yellow',
        value: 'yellow',
        disabled: true
    },
    {
        label: 'Red',
        value: 'red'
    },
    {
        label: 'Green',
        value: 'green'
    },
    {
        label: 'Blue',
        value: 'blue'
    }
];

export default {
    data() {
        return {
            group1: [],
            group2: ['red', 'blue'],
            group3: [],
            group4: [],
            group5: [],
            group6: ['yellow'],
            group7: [],
            options: {
                defaultGroup,
                secondGroup
            }
        };
    },

    components: {
        UiCheckboxGroup,
        UiTab,
        UiTabs
    }
};
</script>
