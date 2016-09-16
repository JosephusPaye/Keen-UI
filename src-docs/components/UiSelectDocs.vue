<template>
    <section class="section section-ui-select">
        <h2 class="section-heading">
            UiSelect <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiSelect.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h2>

        <p>UiSelect is a select component that allows the user to choose one or more options from a group of pre-defined or dynamically loaded options. It supports default options, multiple selection, filtering and a loading indicator.</p>

        <p>UiSelect can have a label above the input, an icon, as well as help text and error message below the input. It also supports keyboard navigation and a disabled state.</p>

        <p>UiSelect supports validation, and the validation state can also be set programmatically from outside the component using an event.</p>

        <h3>
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiSelectDocs.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h3>

        <div class="demo">
            <h4>Options as plain array</h4>

            <ui-select
                name="color" label="Favourite color" :options="colorStrings"
                placeholder="Select a color" v-model="values.value1"
            ></ui-select>

            <h4>As above, with a default selection</h4>

            <ui-select
                name="color" label="Favourite color" :options="colorStrings" default="Lavender"
                placeholder="Select a color" v-model="values.value2"
            ></ui-select>

            <h4>With images (options as array of objects)</h4>

            <ui-select
                name="color" label="Favourite color" :options="colors" type="image"
                placeholder="Select a color" v-model="values.value3"
            ></ui-select>

            <h4>As above, with a default selection</h4>

            <ui-select
                name="color" label="Favourite color" :options="colors" type="image"
                placeholder="Select a color" default="lavender" v-model="values.value4"
            ></ui-select>

            <h4>With help text</h4>

            <ui-select
                name="color" label="Favourite color" :options="colors" type="image"
                placeholder="Select a color" help-text="Will appear on your profile page"
                v-model="values.value5"
            ></ui-select>

            <h4>With filtering</h4>

            <ui-select
                name="color" label="Favourite color" :options="colors" type="image"
                placeholder="Select a color" show-search v-model="values.value6"
            ></ui-select>

            <h4>Multiple selection</h4>

            <ui-select
                name="color" label="Favourite colors" :options="colors" type="image"
                placeholder="Select some colors" show-search multiple v-model="values.value7"
            ></ui-select>

            <h4>Multiple selection with defaults selected</h4>

            <ui-select
                name="color" label="Favourite colors" type="image" show-search multiple
                placeholder="Select some colors" :options="colors" :default="['red', 'blue']"
                v-model="values.value8"
            ></ui-select>

            <h4>With validation</h4>

            <p class="code"><code>validation-rules="required"</code></p>

            <ui-select
                name="favorite_color" label="Favourite color" type="image"
                placeholder="Select a color" :options="colors" validation-rules="required"
                v-model="values.value9"
            ></ui-select>

            <h4>Multiple selection with validation</h4>

            <p class="code"><code>validation-rules="required|min:2|max:4"</code></p>

            <ui-select
                label="Favourite colors" placeholder="Select some colors" name="favorite_colors"
                type="image" multiple :options="colors"
                help-text="Select at least 2 but no more than 4 colors"
                validation-rules="required|min:2|max:4" v-model="values.value10"
            ></ui-select>

            <h4>Search with dynamic options</h4>

            <ui-select
                name="color" label="Favourite color" type="image" show-search
                :search-placeholder="`Type 'red' or 'blue'`" options-dynamic
                placeholder="Select a color"

                :options="dynamicSelect.options" v-model="dynamicSelect.value"
                :loading="dynamicSelect.loading" :options-loaded="dynamicSelect.optionsLoaded"

                @query-changed="queryChanged"
            ></ui-select>

            <h4>Disabled</h4>

            <ui-select
                name="color" label="Favourite color" :options="colors" placeholder="Select a color"
                disabled
            ></ui-select>

            <h4>Disabled with a selection</h4>

            <ui-select
                name="color" label="Favourite color" :options="colors" placeholder="Select a color"
                default="blue" disabled
            ></ui-select>

            <ui-button @click.native="resetSelects">Reset selects</ui-button>
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
                            <th>Binding</th>
                            <th>Description</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>id</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p>A unique identifier for the select.</p>
                                    <p>Applied as the <code>id</code> attribute of the select root element and used when targeting a specific select for reset.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>name *</td>
                                <td>String</td>
                                <td>(required)</td>
                                <td></td>
                                <td>
                                    <p>The <code>name</code> attribute of the select input.</p>
                                    <p>Used when generating validation error messages. A name with multiple words should be written in <code>snake_case</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>value</td>
                                <td>Object or Array</td>
                                <td></td>
                                <td>Two way</td>
                                <td>
                                    <p>The selected value or array of values (is updated when the user makes a selection).</p>
                                    <p>Do not set this initially, as it will be overriden when the select is initialized.</p>
                                    <p>For pre-selected or default values, use the <code>default</code> prop.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>default</td>
                                <td>String, Number, Object or Array</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p>The initial/default value or values of the select.</p>

                                    <p>Supports any string, number or object, or an array of those, provided the string, number or <code>value</code> key of the object matches with an option.</p>

                                    <p>Also supports an array when the <code>multiple</code> prop is <code>true</code>.</p>

                                    <p>To change the selected option after the select is initialized, trigger a <code>ui-select::set-selected</code> event.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>options</td>
                                <td>Array</td>
                                <td><code>[]</code></td>
                                <td></td>
                                <td>
                                    <p>An array of options to show to the user.</p>

                                    <p>Supports a plain array, e.g. <code>['Red', 'Blue', 'Green']</code> as well as an array of objects whose keys can be optionally redefined.</p>

                                    <p>For a plain array, the option is shown to the user and it is used for filtering.</p>

                                    <p>For an array of objects, the <code>text</code> key is shown to the user and is used for filtering while the <code>value</code> key is used for matching options (like an ID).</p>

                                    <p>The option object or string or number is written to the <code>value</code> prop when the user makes a selection.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>multiple</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the user can select multiple values.</p>
                                    <p>Set to <code>true</code> to allow multiple selection.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>multipleDelimiter</td>
                                <td>String</td>
                                <td><code>", "</code></td>
                                <td></td>
                                <td>The delimiter (separator) to use for displaying multiple selected options.</td>
                            </tr>

                            <tr>
                                <td>placeholder</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>Text to display in the select when no option is selected.</td>
                            </tr>

                            <tr>
                                <td>type</td>
                                <td>String</td>
                                <td><code>"ui-select-simple"</code></td>
                                <td></td>
                                <td>
                                    <p>The ID of a registered <a href="http://vuejs.org/api/#type" target="_blank" rel="noopener">Vue type</a> to use as the template for each option.</p>

                                    <p>This type is rendered into an <code>&lt;div&gt;</code> with a class of <code>ui-select-option-content</code> which also has the type's ID as a class. In the type template, you have access to an <code>option</code> object from the options array which you can use to render the option however you like.</p>

                                    <p>The default type simply renders the option text.</p>

                                    <p>There is another default type, <code>image</code>, which you can use to render the items with an image. To use, set an image URL as the <code>image</code> property on each option and set the type to <code>image</code>.</p>

                                    <p>You can also redefine the <code>image</code> key to fit your data using the <code>keys</code> prop.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>showSearch</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not to show an input for filtering the select options or searching remote options.</p>
                                    <p>Set to <code>true</code> to show a search input.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>searchPlaceholder</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>The <code>placeholder</code> attribute of the search input.</td>
                            </tr>

                            <tr>
                                <td class="new-prop">optionsDynamic</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the options for the select are loaded dynamically.</p>

                                    <p>This prop is useful when you want to implement a custom (e.g. remote) search. It disables filtering so the select search query can be used for searching.</p>

                                    <p>See the <b>Search with dynamic options</b> section above for an example.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>loading</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not to show a circular progress spinner on the search input.</p>

                                    <p>This prop is useful for showing feedback to the user when you are doing a remote search. Set to <code>true</code> to show the spinner and <code>false</code> to hide it.</p>

                                    <p>See the <b>Search with dynamic options</b> section above for an example.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="new-prop">optionsLoaded</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the options for this select have been loaded.</p>

                                    <p>If this is <code>true</code> and the <code>options</code> array is empty, then a "No results found" message is shown below the search input.</p>

                                    <p>See the <b>Search with dynamic options</b> section above for an example.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="new-prop">filter</td>
                                <td>Function</td>
                                <td>(<a href="https://www.npmjs.com/package/fuzzysearch" target="_blank" rel="noopener">fuzzysearch</a>)</td>
                                <td></td>
                                <td>
                                    <p>Defines a custom filter function that is used for filtering the options when the user types into the select search box.</p>

                                    <p>The function is called for each item in the <code>options</code> array with two arguments:</p>

                                    <ul>
                                        <li><code>option</code>: the current option, may be a string or an object</li>
                                        <li><code>query</code>: the current value of the select search input (what the user has typed)</li>
                                    </ul>

                                    <p>The function should return <code>true</code> if the item matches the query or <code>false</code> otherwise.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="new-prop">keys</td>
                                <td>Object</td>
                                <td><pre>{
  text: 'text',
  value: 'value',
  image: 'image'
}</pre></td>
                                <td></td>
                                <td>
                                    <p>Allows for redefining the <code>text</code>, <code>value</code> and <code>image</code> keys.</p>
                                    <p>Pass an object with custom keys if your data does not match the default keys.</p>
                                    <p>Note that if you redefine one key, you have to specify the other two as well.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>valid</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td>Two-way</td>
                                <td>
                                    <p>Shows whether or not the select is valid.</p>
                                    <p>Only applicable when the <code>validationRules</code> prop is present.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>dirty</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>Two way</td>
                                <td>Shows whether or not the select has been opened at least once by the user.</td>
                            </tr>

                            <tr>
                                <td>icon</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p>The select icon. Can be any of the <a href="https://design.google.com/icons/" target="_blank" rel="noopener">Material Icons</a>.</p>
                                    <p>Note that this should be the icon codepoint if you want to support IE9.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>iconRight</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the select icon is shown to the right.</p>
                                    <p>Set to <code>true</code> to show the icon to the right of the select.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>label</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>The label shown above the select (text only).</td>
                            </tr>

                            <tr>
                                <td>hideLabel</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the select label is hidden.</p>
                                    <p>Set to <code>true</code> to hide the label.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>helpText</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p>The help text (hint) shown to the user below the select.</p>
                                    <p>Extra space is reserved under the select for the help text and validation errors. If none of these are enabled, this space is collapsed.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>hideValidationErrors</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not validation errors for the select are hidden.</p>
                                    <p>Set to <code>true</code> to hide all validation errors.</p>
                                    <p>This prop is only applicable when the <code>validationRules</code> prop is provided.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>validationRules</td>
                                <td>String or Array</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p>An array of rules or a pipe <code>|</code> seperated list of rules for validating the select.</p>

                                    <p>The supported rules are <code>required</code>, <code>min</code>, <code>max</code> and <code>between</code>. The <code>min</code>, <code>max</code> and <code>between</code> rules only apply for a multi select.</p>

                                    <p>These rules will be applied and validation will occur automatically when a selection is made or when the select is closed. The error message of the first failing validation rule will then be shown to the user.</p>

                                    <p>See the <code>validationMessages</code> prop for customizing the error message.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>validationMessages</td>
                                <td>Object</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p>An object whose keys are the validation rules and whose values are the error messages for those rules.</p>

                                    <p>See <a href="https://github.com/skaterdav85/validatorjs#custom-error-messages" target="_blank" rel="noopener">validatorjs Custom Error Messages</a> for more details.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the select is disabled.</p>
                                    <p>Set to <code>true</code> to disable the select.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                * Required prop
            </ui-tab>

            <ui-tab header="Events">
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
                                <p>Dispatched when the select dropdown is opened.</p>
                                <p>Listen for it using <code>@opened</code>.</p>
                            </td>
                        </tr>

                        <tr>
                            <td>closed</td>
                            <td>Dispatched</td>
                            <td>
                                <p>Dispatched when the select dropdown is closed.</p>
                                <p>Listen for it using <code>@closed</code>.</p>
                            </td>
                        </tr>

                        <tr>
                            <td>selected</td>
                            <td>Dispatched</td>
                            <td>
                                <p>Dispatched when an option is selected.</p>
                                <p>The handler is called with the option that was selected. Listen for it using <code>@selected</code>.</p>
                            </td>
                        </tr>

                        <tr>
                            <td>query-changed</td>
                            <td>Dispatched</td>
                            <td>
                                <p>Dispatched when the search input value (the query) changes.</p>
                                <p>The handler is called with the new query. Listen for it using <code>@query-changed</code>.</p>
                                <p>This can be used to fetch remote options dynamically. See the <b>Search with dynamic options</b> section above for an example.</p>
                            </td>
                        </tr>

                        <tr>
                            <td class="no-wrap new-prop">ui-select::set-selected</td>
                            <td>Received</td>
                            <td>
                                <p>Trigger this event to programmatically set or change the currently selected option. The handler accepts the following arguments:</p>

                                <ul>
                                    <li><code>value</code>: A string, number or object (provided the string, number or <code>value</code> key of the object matches with an option)</li>
                                    <li><code>id</code>: The id of the specific select whose selected option you want to set or change</li>
                                </ul>
                            </td>
                        </tr>

                        <tr>
                            <td class="no-wrap new-prop">ui-input::set-validity</td>
                            <td>Received</td>
                            <td>
                                <p>Trigger this event to programmatically change the select validation state. The handler accepts the following arguments:</p>

                                <ul>
                                    <li><code>valid</code>: A Boolean indicating whether or not the select is valid</li>
                                    <li><code>error</code>: An optional string to set as the new error message</li>
                                    <li><code>id</code>: The id of the specific select whose validity you want to change</li>
                                </ul>
                            </td>
                        </tr>

                        <tr>
                            <td class="no-wrap">ui-input::reset</td>
                            <td>Received</td>
                            <td>
                                <p>Trigger this event to reset the select to its initial state. This event resets the <code>value</code>, <code>valid</code> and <code>dirty</code> props and it also clears the search query.</p>

                                <p>You can optionally pass in an <code>id</code> to reset only a specific select (whose <code>id</code> you have set).</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </ui-tab>
        </ui-tabs>
    </section>
</template>

<script>
// String.startsWith polyfill
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position) {
        position = position || 0;
        return this.substr(position, searchString.length) === searchString;
    };
}

import UiTab from '../../src/UiTab.vue'
import UiTabs from '../../src/UiTabs.vue'
import UiButton from '../../src/UiButton.vue'
import UiSelect from '../../src/UiSelect.vue'

import EventBus from '../../src/helpers/event-bus'

let colorStrings = [
    'Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Pink', 'Lavender', 'Orange', 'Peach', 'Lime'
];

let colors = [
    {
        text: 'Red',
        image: 'https://placehold.it/64/ff0000/ff0000',
        value: 'red'
    }, {
        text: 'Blue',
        image: 'https://placehold.it/64/0000ff/0000ff',
        value: 'blue'
    }, {
        text: 'Green',
        image: 'https://placehold.it/64/008000/008000',
        value: 'green'
    }, {
        text: 'Yellow',
        image: 'https://placehold.it/64/ffff00/ffff00',
        value: 'yellow'
    }, {
        text: 'Purple',
        image: 'https://placehold.it/64/800080/800080',
        value: 'purple'
    }, {
        text: 'Pink',
        image: 'https://placehold.it/64/ffc0cb/ffc0cb',
        value: 'pink'
    }, {
        text: 'Lavender',
        image: 'https://placehold.it/64/e6e6fa/e6e6fa',
        value: 'lavender'
    }, {
        text: 'Orange',
        image: 'https://placehold.it/64/ffa500/ffa500',
        value: 'orange'
    }, {
        text: 'Peach',
        image: 'https://placehold.it/64/ffdab9/ffdab9',
        value: 'peach'
    }, {
        text: 'Lime',
        image: 'https://placehold.it/64/00ff00/00ff00',
        value: 'lime'
    }
];

let redShades = [
    {
        text: 'Red',
        image: 'https://placehold.it/64/ff0000/ff0000',
        value: 'red'
    }, {
        text: 'Ced',
        value: 'ced',
        image: 'https://placehold.it/64/CF302C/CF302C'
    }, {
        text: 'Cherry',
        value: 'cherry',
        image: 'https://placehold.it/64/9C0E04/9C0E04'
    }, {
        text: 'Rose',
        value: 'rose',
        image: 'https://placehold.it/64/E3242B/E3242B'
    }, {
        text: 'Jam',
        value: 'jam',
        image: 'https://placehold.it/64/5F100B/5F100B'
    }, {
        text: 'Merlot',
        value: 'merlot',
        image: 'https://placehold.it/64/541F1B/541F1B'
    }, {
        text: 'Garnet',
        value: 'garnet',
        image: 'https://placehold.it/64/600B04/600B04'
    }, {
        text: 'Crimson',
        value: 'crimson',
        image: 'https://placehold.it/64/B80F08/B80F08'
    }, {
        text: 'Ruby',
        value: 'ruby',
        image: 'https://placehold.it/64/900603/900603'
    }, {
        text: 'Scarlet',
        value: 'scarlet',
        image: 'https://placehold.it/64/910D09/910D09'
    }, {
        text: 'Wine',
        value: 'wine',
        image: 'https://placehold.it/64/4C0805/4C0805'
    }, {
        text: 'Brick',
        value: 'brick',
        image: 'https://placehold.it/64/7D2910/7D2910'
    }, {
        text: 'Apple',
        value: 'apple',
        image: 'https://placehold.it/64/A91B0D/A91B0D'
    }, {
        text: 'Mahogany',
        value: 'mahogany',
        image: 'https://placehold.it/64/400D0A/400D0A'
    }, {
        text: 'Blood',
        value: 'blood',
        image: 'https://placehold.it/64/710C04/710C04'
    }, {
        text: 'Sangria',
        value: 'sangria',
        image: 'https://placehold.it/64/641612/641612'
    }, {
        text: 'Berry',
        value: 'berry',
        image: 'https://placehold.it/64/7A1712/7A1712'
    }, {
        text: 'Currant',
        value: 'currant',
        image: 'https://placehold.it/64/670C07/670C07'
    }, {
        text: 'Blush',
        value: 'blush',
        image: 'https://placehold.it/64/BC544B/BC544B'
    }, {
        text: 'Candy',
        value: 'candy',
        image: 'https://placehold.it/64/D21404/D21404'
    }, {
        text: 'Lipstick',
        value: 'lipstick',
        image: 'https://placehold.it/64/9C1003/9C1003'
    }
];

let blueShades = [
    {
        text: 'Blue',
        value: 'blue',
        image: 'https://placehold.it/64/0000ff/0000ff'
    }, {
        text: 'Slate',
        value: 'slate',
        image: 'https://placehold.it/64/747C87/747C87'
    }, {
        text: 'Sky',
        value: 'sky',
        image: 'https://placehold.it/64/62C5DA/62C5DA'
    }, {
        text: 'Navy',
        value: 'navy',
        image: 'https://placehold.it/64/0B1173/0B1173'
    }, {
        text: 'Indigo',
        value: 'indigo',
        image: 'https://placehold.it/64/281E5D/281E5D'
    }, {
        text: 'Cobalt',
        value: 'cobalt',
        image: 'https://placehold.it/64/1437BF/1437BF'
    }, {
        text: 'Teal',
        value: 'teal',
        image: 'https://placehold.it/64/48AAAD/48AAAD'
    }, {
        text: 'Ocean',
        value: 'ocean',
        image: 'https://placehold.it/64/016064/016064'
    }, {
        text: 'Peacock',
        value: 'peacock',
        image: 'https://placehold.it/64/022D34/022D34'
    }, {
        text: 'Azure',
        value: 'azure',
        image: 'https://placehold.it/64/1A1EA6/1A1EA6'
    }, {
        text: 'Cerulean',
        value: 'cerulean',
        image: 'https://placehold.it/64/0393BC/0393BC'
    }, {
        text: 'Lapis',
        value: 'lapis',
        image: 'https://placehold.it/64/2732C2/2732C2'
    }, {
        text: 'Spruce',
        value: 'spruce',
        image: 'https://placehold.it/64/2C3E4C/2C3E4C'
    }, {
        text: 'Stone',
        value: 'stone',
        image: 'https://placehold.it/64/59788D/59788D'
    }, {
        text: 'Aegean',
        value: 'aegean',
        image: 'https://placehold.it/64/1F456E/1F456E'
    }, {
        text: 'Berry',
        value: 'berry',
        image: 'https://placehold.it/64/27146D/27146D'
    }, {
        text: 'Denim',
        value: 'denim',
        image: 'https://placehold.it/64/151E3D/151E3D'
    }, {
        text: 'Admiral',
        value: 'admiral',
        image: 'https://placehold.it/64/061094/061094'
    }, {
        text: 'Sapphire',
        value: 'sapphire',
        image: 'https://placehold.it/64/52B2C0/52B2C0'
    }, {
        text: 'Artic',
        value: 'artic',
        image: 'https://placehold.it/64/82EDFD/82EDFD'
    }
];

let values = {
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    value6: '',
    value7: [],
    value8: [],
    value9: '',
    value10: [],
}

export default {
    components: {
        UiTab,
        UiTabs,
        UiButton,
        UiSelect
    },

    data() {
        return {
            colors,
            colorStrings,
            values,
            dynamicSelect: {
                value: null,
                options: [],
                timeout: null,
                loading: false,
                optionsLoaded: false
            }
        };
    },

    methods: {
        resetSelects() {
            EventBus.$emit('ui-input::reset')
        },

        queryChanged(query) {
            setTimeout(()=> {
                if (!query.length) {
                    return;
                }

                this.dynamicSelect.loading = true;
                this.dynamicSelect.optionsLoaded = false;

                if (this.dynamicSelect.timeout) {
                    clearTimeout(this.dynamicSelect.timeout);
                }

                this.dynamicSelect.timeout = setTimeout(() => {
                    if (query.toLowerCase().startsWith('red')) {
                        this.dynamicSelect.options = redShades;
                    } else if (query.toLowerCase().startsWith('blue')) {
                        this.dynamicSelect.options = blueShades;
                    } else {
                        this.dynamicSelect.options = [];
                    }

                    this.dynamicSelect.loading = false;
                    this.dynamicSelect.optionsLoaded = true;
                }, 2500);
            }, 500)
        }
    }
};
</script>

<style lang="stylus">
.section-ui-select {
    .ui-select {
        max-width: 400px;
        margin-bottom: 32px;
    }

    .ui-button {
        margin-top: 16px;
    }

    p.code {
        margin-top: -4px;
        margin-bottom: 24px;
    }
}
</style>
