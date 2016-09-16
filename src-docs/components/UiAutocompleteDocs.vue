<template>
    <section class="section section-ui-autocomplete">
        <h2 class="section-heading">
            UiAutocomplete <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiAutocomplete.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h2>

        <p>UiAutocomplete shows a dropdown of suggestions below an input as the user types which they can select from to replace or append to what they have entered.</p>

        <p>UiAutocomplete can show a label above the input as well as help text below the input, and it also supports keyboard navigation.</p>

        <p>UiAutocomplete supports validation, and the validation state can also be set programmatically from outside the component using an event.</p>

        <h3>
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiAutocompleteDocs.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h3>

        <div class="examples">
            <h4>Default (with label and help text), minimum characters: 2</h4>

            <ui-autocomplete
                label="Favourite Month" :suggestions="months" v-model="favouriteMonth"
                name="favourite_month" help-text="Pick your favourite month of the year"
                placeholder="Enter your favourite month"
            ></ui-autocomplete>

            <h4>Custom template partial, minimum characters: 0, with validation</h4>

            <ui-autocomplete
                label="Favourite Simpson" icon="face" :min-chars="0" :suggestions="theSimpsons"
                v-model="favouriteSimpson" name="favourite_simpson" validation-rules="required"
                type="image" placeholder="Choose your favourite Simpson"
                help-text="Pick your favourite member of the Simpsons family"
                :keys="{ text: 'text', value: 'text', image: 'image' }"
            ></ui-autocomplete>

            <p>Suggestions are updated dynamically when the suggestions array changes.</p>

            <ui-button
                :disabled="addedExtendedFamily" @click.native="add"
            >Add Grandma &amp; Grandpa</ui-button>

            <h4>Disabled</h4>

            <ui-autocomplete
                label="Favourite Color" :suggestions="[]" v-model="favouriteDisabel" name="another_color"
                placeholder="You can't interact with this" disabled
            ></ui-autocomplete>
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
                                    <p>A unique identifier for the autocomplete.</p>
                                    <p>Applied as the <code>id</code> attribute of the autocomplete <code>&lt;input&gt;</code> and used when targeting a specific autocomplete for reset.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>name *</td>
                                <td>String</td>
                                <td>(required)</td>
                                <td></td>
                                <td>
                                    <p>The <code>name</code> attribute of the autocomplete input element.</p>
                                    <p>Used when generating validation error messages. A name with multiple words should be written in <code>snake_case</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>v-model(value)</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p>The autocomplete input value (is updated when the user types or makes a selection from the dropdown).</p>
                                    <p>Component will save the initial value.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>suggestions</td>
                                <td>Array</td>
                                <td><code>[]</code></td>
                                <td></td>
                                <td>
                                    <p>An array of suggestions to show to the user. The array can either be of strings or objects (but not both).</p>

                                    <p>For an array of objects, each object should have <code>text</code> and <code>value</code> properties. The <code>text</code> is shown to the user and the <code>value</code> is written to input when the user makes a selection.</p>

                                    <p>You can redefine these keys to fit your data using the <code>keys</code> prop.</p>

                                    <p>For an array of strings, each string is used as both the label and the value.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>limit</td>
                                <td>Number</td>
                                <td><code>8</code></td>
                                <td></td>
                                <td>The maximum number of suggestions to show to the user at any one time.</td>
                            </tr>

                            <tr>
                                <td>append</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the value of the selected suggestion should be appended to the current value (instead of replacing the current value).</p>

                                    <p>Set to <code>true</code> to append selected suggestions.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>appendDelimiter</td>
                                <td>String</td>
                                <td><code>", "</code></td>
                                <td></td>
                                <td>The delimiter (separator) to use when appending selected suggestions.</td>
                            </tr>

                            <tr>
                                <td>debounce</td>
                                <td>Number</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p>The minimum delay (in milliseconds) after each keystroke before the input’s value is synced to the model.</p>
                                    <p>You may want to use this if you are watching the value and making AJAX calls.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>minChars</td>
                                <td>Number</td>
                                <td><code>2</code></td>
                                <td></td>
                                <td>The minimum number of characters the user should type before the list of suggestions is shown.</td>
                            </tr>

                            <tr>
                                <td>showOnUpDown</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td></td>
                                <td>Determines whether the list of suggestions should be shown when the user presses the Up or Down arrow keys in the input.</td>
                            </tr>

                            <tr>
                                <td>valid</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td>Two-way</td>
                                <td>
                                    <p>Shows whether or not the autocomplete is valid.</p>
                                    <p>Only applicable when the <code>validationRules</code> prop is present.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>dirty</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>Two way</td>
                                <td>Shows whether or not the autocomplete has been touched (focussed or clicked) by the user.</td>
                            </tr>

                            <tr>
                                <td class="new-prop">autofocus</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the input should automatically receive focus on initial page load</p>
                                    <p>This only works on initial page load or the first time the element is added to the DOM and not on subsequent renders. Also, only one input element should have this prop set to <code>true</code> in the document for the autofocus to work properly.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="new-prop">filter</td>
                                <td>Function</td>
                                <td>(<a href="https://www.npmjs.com/package/fuzzysearch" target="_blank" rel="noopener">fuzzysearch</a>)</td>
                                <td></td>
                                <td>
                                    <p>Defines a custom filter function that is used for filtering the suggestions when the user types into the autocomplete.</p>

                                    <p>The function is called for each item in the <code>suggestions</code> array with two arguments:</p>

                                    <ul>
                                        <li><code>suggestion</code>: the current suggestion, may be a string or an object</li>
                                        <li><code>query</code>: the current value of the autocomplete input (what the user has typed)</li>
                                    </ul>

                                    <p>The function should return <code>true</code> if the suggestion matches the query or <code>false</code> otherwise.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="new-prop">keys</td>
                                <td>Object</td>
                                <td><pre>{{`{\n  text: 'text',\n  value: 'value',\n  image: 'image'\n}`}}</pre></td>
                                <td></td>
                                <td>
                                    <p>Allows for redefining the <code>text</code>, <code>value</code> and <code>image</code> keys.</p>

                                    <p>Pass an object with custom keys if your data does not match the default keys. Note that if you redefine one key, you have to specify the other two as well.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="new-prop">autoHighlightFirstMatch</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the first matched suggestion is automatically highlighted when the user input changes.</p>
                                    <p>Set to <code>false</code> to disable automatically highlighting the first match.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="new-prop">cycleHighlight</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not highlighting should cycle (wrap around) immediately on overflow.</p>

                                    <p>When this is set to <code>false</code>, pressing the down arrow key when on the last suggestion will not immediately highlight the first suggestion, but pressing it a second time will.</p>

                                    <p>The same goes for when pressing the up arrow key on the first suggestion.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>placeholder</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>The <code>placeholder</code> attribute of the autocomplete input element.</td>
                            </tr>

                            <tr>
                                <td>icon</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p>The autocomplete icon. Can be any of the <a href="https://design.google.com/icons/" target="_blank" rel="noopener">Material Icons</a>.</p>
                                    <p>Note that this should be the icon codepoint if you want to support IE9.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>iconRight</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the autocomplete icon is shown to the right instead of to the left.</p>
                                    <p>Set to <code>true</code> to show the icon to the right of the autocomplete.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>label</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>The label shown above the autocomplete input (text only).</td>
                            </tr>

                            <tr>
                                <td>hideLabel</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the autocomplete label is hidden.</p>
                                    <p>Set to <code>true</code> to hide the label.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>helpText</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p>The help text (hint) shown to the user below the autocomplete input.</p>
                                    <p>Extra space is reserved under the input for the help text and validation errors. If none of these are enabled, this space is collapsed.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>hideValidationErrors</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not validation errors for the autocomplete are hidden.</p>
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
                                    <p>An array of rules or a pipe <code>|</code> separated list of rules for validating the input.</p>

                                    <p>Can be any of the rules supported by <a href="https://github.com/skaterdav85/validatorjs#available-rules" target="_blank" rel="noopener">validatorjs Validation Rules</a>, <b>except</b> the ones that involve multiple fields.</p>

                                    <p>Example to validate a required email field: <code>validation-rules="required|email"</code>.</p>

                                    <p>These rules will be applied and validation will occur automatically when the input is changed or blurred. The error message of the first failing validation rule will then be shown to the user.</p>

                                    <p>See the <code>validationMessages</code> prop for customizing the error message.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>validationMessages</td>
                                <td>Object</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p>An Object whose keys are the validation rules and whose values are the error messages for those rules.</p>

                                    <p>See <a href="https://github.com/skaterdav85/validatorjs#custom-error-messages" target="_blank" rel="noopener">validatorjs Custom Error Messages</a> for more details.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>Determines whether or not the autocomplete is disabled. Set to <code>true</code> to disable the autocomplete.</td>
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
                            <td class="no-wrap new-prop">opened</td>
                            <td>Dispatched</td>
                            <td>Dispatched when the autocomplete dropdown is opened. Listen for it using <code>@opened</code>.</td>
                        </tr>

                        <tr>
                            <td class="no-wrap new-prop">closed</td>
                            <td>Dispatched</td>
                            <td>Dispatched when the autocomplete dropdown is closed. Listen for it using <code>@closed</code>.</td>
                        </tr>

                        <tr>
                            <td class="no-wrap new-prop">selected</td>
                            <td>Dispatched</td>
                            <td>Dispatched when a suggestion is selected. The handler is called with the suggestion that was selected. Listen for it using <code>@selected</code>.</td>
                        </tr>

                        <tr>
                            <td class="no-wrap new-prop">highlighted</td>
                            <td>Dispatched</td>
                            <td>
                                <p>Dispatched when a suggestion is highlighted using the arrow keys. The handler is called with the following arguments:</p>

                                <ul>
                                    <li><code>suggestion</code>: the suggestion that was highlighted, may be a string or an object</li>
                                    <li><code>index</code>: the index of the suggestion that was highlighted, in the <code>suggestions</code> array</li>
                                </ul>

                                <p>Listen for it using <code>@highlighted</code>.</p>
                            </td>
                        </tr>

                        <tr>
                            <td class="no-wrap new-prop">highlight-overflow</td>
                            <td>Dispatched</td>
                            <td>
                                <p>Dispatched when an attempted highlight overflows (this happens when the user is on the first suggestion and presses the up arrow key or on the last suggestion and presses the down arrow key).</p>

                                <p>This event is only dispatched when the <code>cycleHighlight</code> prop is <code>false</code>.</p>

                                <p>The handler is called with the overflowing index. Listen for it using <code>@highlighted</code>.</p>
                            </td>
                        </tr>

                        <tr>
                            <td class="no-wrap new-prop">ui-input::set-validity</td>
                            <td>Received</td>
                            <td>
                                <p>Trigger this event to programmatically change the autocomplete validation state. The handler accepts the following arguments:</p>

                                <ul>
                                    <li><code>valid</code>: A boolean indicating whether or not the autocomplete is valid</li>
                                    <li><code>error</code>: An optional string to set as the new error message</li>
                                    <li><code>id</code>: The id of the specific autocomplete whose validity you want to change</li>
                                </ul>
                            </td>
                        </tr>

                        <tr>
                            <td class="no-wrap">ui-input::reset</td>
                            <td>Received</td>
                            <td>
                                <p>Trigger this event to reset the autocomplete to its initial state. This event resets the <code>value</code>, <code>valid</code> and <code>dirty</code> props.</p>

                                <p>You can optionally pass in an <code>id</code> to reset only a specific autocomplete (whose <code>id</code> you have set).</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </ui-tab>
        </ui-tabs>

    </section>
</template>

<script>
import UiTab from '../../src/UiTab.vue';
import UiTabs from '../../src/UiTabs.vue';
import UiButton from '../../src/UiButton.vue';
import UiAutocomplete from '../../src/UiAutocomplete.vue';

let months =
    'January February March April May June July August September October November December'
        .split(' ');

let theSimpsons = [
    {
        value: 'maggie',
        text: 'Maggie Simpson',
        image: 'https://i.imgur.com/eK26qtK.jpg'
    }, {
        value: 'lisa',
        text: 'Lisa Simpson',
        image: 'https://i.imgur.com/wIb44g9.jpg'
    }, {
        value: 'bart',
        text: 'Bart Simpson',
        image: 'https://i.imgur.com/XkEz9zg.jpg'
    }, {
        value: 'marge',
        text: 'Marge Simpson',
        image: 'https://i.imgur.com/MuFcpQ4.jpg'
    }, {
        value: 'homer',
        text: 'Homer Simpson',
        image: 'https://i.imgur.com/aYPRWX4.jpg'
    }
];

let externalFamily = [
    {
        value: 'mona',
        text: 'Mona Simpson',
        image: 'https://i.imgur.com/z5xy1eW.jpg'
    }, {
        value: 'abe',
        text: 'Abe Simpson',
        image: 'https://i.imgur.com/3UF8hrf.jpg'
    }
];

export default {
    data() {
        return {
            months,
            theSimpsons,
            favouriteMonth: '',
            favouriteSimpson: '',
            favouriteDisabel: '',
            addedExtendedFamily: false
        };
    },

    methods: {
        add() {
            this.theSimpsons = this.theSimpsons.concat(externalFamily);
            this.addedExtendedFamily = true;
        }
    },

    components: {
        UiTab,
        UiTabs,
        UiButton,
        UiAutocomplete
    }
}
</script>

<style lang="stylus">
.section-ui-autocomplete
    .ui-button
        margin-bottom 12px
</style>
