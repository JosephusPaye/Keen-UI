<template>
    <section class="section section-ui-autocomplete">
        <h2 class="section-heading">UiAutocomplete</h2>

        <p>UiAutocomplete shows a dropdown of suggestions below an input that the user can select from as they type.</p>

        <p>An autocomplete can show a label above the input as well as help text below the input, and it also supports keyboard navigation.

        <p>UiAutocomplete supports validation, and the validation state can also be set programmatically from outside the component using an event.</p>

        <h3>Examples</h3>

        <div class="examples">
            <h4>Default (with label and help text), minimum characters: 2</h4>

            <ui-autocomplete
                label="Favourite Month" :suggestions="months" :value.sync="favouriteMonth"
                name="favourite_month" help-text="Pick your favourite month of the year"
                placeholder="Enter your favourite month"
            ></ui-autocomplete>

            <h4>Custom template partial, minimum characters: 0, validation</h4>

            <ui-autocomplete
                label="Favourite Simpson" icon="face" :min-chars="0" :suggestions="theSimpsons"
                :value.sync="favouriteSimpson" name="favourite_simpson" validation-rules="required"
                partial="ui-autocomplete-image" placeholder="Choose your favourite Simpson"
                help-text="Pick your favourite member of the Simpsons family"
            ></ui-autocomplete>

            <p>Suggestions are updated dynamically when the suggestions array changes.</p>

            <ui-button
                :disabled="addedExtendedFamily" @click="add"
            >Add Grandma &amp; Grandpa</ui-button>

            <h4>Disabled</h4>

            <ui-autocomplete
                label="Favourite Color" :suggestions="[]" :value.sync="''" name="another_color"
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
                                <td>A unique identifier for the autocomplete. Applied as the <code>id</code> attribute of the autocomplete <code>&lt;input&gt;</code> and used when targeting a specific autocomplete for reset.</td>
                            </tr>

                            <tr>
                                <td>name *</td>
                                <td>String</td>
                                <td>(required)</td>
                                <td></td>
                                <td>The <code>name</code> attribute of the autocomplete input. Used when generating validation error messages. A name with multiple words should be written in <code>snake_case</code>.</td>
                            </tr>

                            <tr>
                                <td>value</td>
                                <td>String</td>
                                <td></td>
                                <td>Two way</td>
                                <td>The autocomplete input value (is updated when the user types or makes a selection from the dropdown). This can be set initially as a default value.</td>
                            </tr>

                            <tr>
                                <td>suggestions</td>
                                <td>Array</td>
                                <td><code>[]</code></td>
                                <td></td>
                                <td>
                                    <p>An array of suggestions to show to the user. The array can either be of strings or objects (but not both).</p>

                                    <p>For an array of objects, each object should have <code>text</code> and <code>value</code> properties. The <code>text</code> is shown to the user and the <code>value</code> is written to input when the user makes a selection.</p>

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
                                    <p>Determines whether or not the value of the selected suggestion should be appended to the current value (instead of replaced).</p>

                                    <p>Set to <code>true</code> to append selected suggestions.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>appendDelimiter</td>
                                <td>String</td>
                                <td><code>", "</code></td>
                                <td></td>
                                <td>
                                    <p>The delimiter (separator) to use when appending selected suggestions.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>debounce</td>
                                <td>Number</td>
                                <td></td>
                                <td></td>
                                <td>Allows for setting a minimum delay (in milliseconds) after each keystroke before the input’s value is synced to the model. You may want to use this if you are watching the value and making AJAX calls.</td>
                            </tr>

                            <tr>
                                <td>partial</td>
                                <td>String</td>
                                <td><code>"ui-autocomplete-simple"</code></td>
                                <td></td>
                                <td>
                                    <p>The ID of a registered <a href="http://vuejs.org/api/#partial" target="_blank">Vue partial</a> to use as the template for each suggestion.</p>

                                    <p>This partial is rendered into an <code>&lt;li&gt;</code> which has the partial's ID as a class. In the partial template, you have access to an <code>item</code> String/Object from the suggestions array which you can use to render the suggestion however you like.</p>

                                    <p>The default partial simply renders the suggestion text.</p>

                                    <p>There is another default partial, <code>ui-autocomplete-image</code>, which you can use to render the items with an image. To use, set an image URL as the <code>image</code> property on each suggestion and set the partial to <code>ui-autocomplete-image</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>minChars</td>
                                <td>Number</td>
                                <td><code>2</code></td>
                                <td></td>
                                <td>
                                    <p>The minimum number of characters the user should type before the list of suggestions is shown.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>showOnUpDown</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether the list of suggestions should be shown when the user presses the Up or Down arrow keys in the input.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>valid</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td>Two-way</td>
                                <td>Shows whether or not the autocomplete is valid. Only applicable when the <code>validationRules</code> prop is present.</td>
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
                                    <p>Determines whether or not the input should automatically receive focus. This only works on initial page load or the first time the element is added to the DOM and not on subsequent renders. Also, only one input element should have this prop set to <code>true</code> in the document for the autofocus to work properly.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>placeholder</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>The <code>placeholder</code> attribute of the autocomplete input.</td>
                            </tr>

                            <tr>
                                <td>icon</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>The autocomplete icon. Can be any of the <a href="https://design.google.com/icons/" target="_blank">Material Icons</a>. Note that this should be the icon codepoint if you want to support IE9.</td>
                            </tr>

                            <tr>
                                <td>iconRight</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>Determines whether or not the autocomplete icon is shown to the right. Set to <code>true</code> to show the icon to the right of the autocomplete.</td>
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
                                <td>Determines whether or not the autocomplete label is hidden. Set to <code>true</code> to hide the label.</td>
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
                                    <p>Determines whether or not validation errors for the autocomplete are hidden. Set to <code>true</code> to hide all validation errors.</p>

                                    <p>This prop is only applicable when the <code>validationRules</code> prop is present.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>validationRules</td>
                                <td>String or Array</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p>An array of rules or a pipe <code>|</code> seperated list of rules for validating the input. Can be any of the rules supported by <a href="https://github.com/skaterdav85/validatorjs#available-rules" target="_blank">validatorjs Validation Rules</a>, <b>except</b> the ones that involve multiple fields.</p>

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
                                <td>An Object whose keys are the validation rules and whose values are the error messages for those rules. See <a href="https://github.com/skaterdav85/validatorjs#custom-error-messages" target="_blank">validatorjs Custom Error Messages</a> for more details.</td>
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
                            <td class="no-wrap new-prop">ui-input::set-validity</td>
                            <td>Received</td>
                            <td>
                                <p>Trigger this event to programmatically change the autocomplete validation state. The handler accepts the following arguments:</p>

                                <ul>
                                    <li><code>valid</code>: A Boolean indicating whether or not the autocomplete is valid</li>
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

let months = 'January Febuary March April May June July August September October November December';
months = months.split(' ');

let theSimpsons = [
    {
        value: 'maggie',
        text: 'Maggie Simpson',
        image: 'http://i.imgur.com/eK26qtK.jpg'
    }, {
        value: 'lisa',
        text: 'Lisa Simpson',
        image: 'http://i.imgur.com/wIb44g9.jpg'
    }, {
        value: 'bart',
        text: 'Bart Simpson',
        image: 'http://i.imgur.com/XkEz9zg.jpg'
    }, {
        value: 'marge',
        text: 'Marge Simpson',
        image: 'http://i.imgur.com/MuFcpQ4.jpg'
    }, {
        value: 'homer',
        text: 'Homer Simpson',
        image: 'http://i.imgur.com/aYPRWX4.jpg'
    }
];

let externalFamily = [
    {
        value: 'mona',
        text: 'Mona Simpson',
        image: 'http://i.imgur.com/z5xy1eW.jpg'
    }, {
        value: 'abe',
        text: 'Abe Simpson',
        image: 'http://i.imgur.com/3UF8hrf.jpg'
    }
];

export default {
    data() {
        return {
            months,
            theSimpsons,
            favouriteMonth: '',
            favouriteSimpson: '',
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
};
</script>

<style lang="stylus">
.section-ui-autocomplete {
    .ui-button {
        margin-bottom: 12px;
    }
}
</style>
