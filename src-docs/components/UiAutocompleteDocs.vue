<template>
    <section class="section section-ui-autocomplete">
        <h2 class="section-heading">UiAutocomplete</h2>

        <p>UiAutocomplete shows a dropdown of suggestions below an input that the user can select from. The list of suggestions can be shown on click (like a <code>&lt;select&gt;</code>) or shown when the user starts typing. It uses <a href="https://github.com/bevacqua/horsey" target="_blank">horsey</a> to manage the dropdown and handle the autocomplete functionality.</p>

        <p>An autocomplete can show a label above the input as well as help text below the input. It also supports keyboard navigation and optional validation (required only).</p>

        <p>Required validation makes sure that the user has selected a suggestion or has entered text that corresponds directly to a suggestion. If not, an error is shown.</p>

        <h3>Examples</h3>

        <div class="examples">
            <h4>Default (with label and help text)</h4>

            <ui-autocomplete
                label="Favourite Month" :suggestions="months" :value.sync="favouriteMonth"
                name="favourite_month" help-text="Pick your favourite month of the year"
                placeholder="Choose your favourite month"
            ></ui-autocomplete>

            <h4>Open on click, custom render handler, validation</h4>

            <ui-autocomplete
                label="Favourite Simpson" :suggestions="theSimpsons" :value.sync="favouriteSimpson"
                :render="renderAutocomplete" name="favourite_simpson" validation-rules="required"
                help-text="Pick your favourite member of the Simpsons family"
                placeholder="Choose your favourite Simpson" icon="face" open-on-click
            ></ui-autocomplete>

            <p>Suggestions can be updated dynamically</p>

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
                                <td>The selected autocomplete value (not the search input from the user, but the value of a suggestion after it is selected). This can be set initially as a default value.</td>
                            </tr>

                            <tr>
                                <td>suggestions</td>
                                <td>Array</td>
                                <td><code>[]</code></td>
                                <td></td>
                                <td>
                                    <p>An array of suggestions to show to the user. The array can either be of strings or objects (but not both).</p>

                                    <p>For an array of objects, each object should have <code>text</code> and <code>value</code> properties. The <code>text</code> is shown to the user and the <code>value</code> is written to the model when the user makes a selection.</p>

                                    <p>For an array of strings, each string is used as both the label and the value.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>openOnClick</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether the list of suggestions is shown to the user when they click the input.</p>

                                    <p>Set to <code>true</code> to show suggestions when the user clicks the input.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>render</td>
                                <td>Function</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p>A custom render function that is called to display each suggestion. The function is passed directly to <a href="https://github.com/bevacqua/horsey#render" target="_blank">horsey</a>'s <code>render</code> option.</p>

                                    <p>The function is passed two arguments: the suggestion <code>&lt;li&gt;</code> element, and the <code>suggestion</code> object.</p>

                                    <p>Using these you can display the suggestion however you wish. See the second example above for displaying an image with each suggestion.</p>
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
                                <td>valid</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td>Two-way</td>
                                <td>Shows whether or not the autocomplete is valid. Only applicable the <code>validationRules</code> prop is present.</td>
                            </tr>

                            <tr>
                                <td>dirty</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>Two way</td>
                                <td>Shows whether or not the autocomplete has been touched (focussed or clicked) by the user.</td>
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
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>The rules for validation. UiAutocomplete only supports the <code>required</code> validation rule. Omitting this prop will disable validation.</td>
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
                            <td class="no-wrap">ui-input::reset</td>
                            <td>Received</td>
                            <td>
                                <p>Trigger this event to reset the autocomplete to its initial state. This event resets the <code>value</code>, <code>valid</code> and <code>dirty</code> props.</p>
                                <p>You can optionally pass in an <code>id</code> to reset only a specific autocomplete (whose <code>id</code> you have set).</p>
                            </td>
                        </tr>

                        <tr>
                            <td class="no-wrap">ui-dropdown::reposition</td>
                            <td>Received</td>
                            <td>
                                <p>Trigger this event to reposition the autocomplete dropdown when the position of the input to which it is attached has changed.</p>
                                <p>You can optionally pass in an <code>id</code> to reposition only a specific autocomplete (whose <code>id</code> you have set).</p>
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

let months = 'January Febuary March April May June July August September October November December'.split(' ');

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
        },

        renderAutocomplete(li, suggestion) {
            li.classList.add('sey-item-image');

            li.innerHTML =
                `<div class="image" style="background-image: url(${suggestion.image})"></div>
                <div class="text">${suggestion.text}</div>`;
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

.sey-item-image {
    &:not(.sey-hide) {
        display: flex;
        align-items: center;
    }

    .image {
        width: 32px;
        height: 32px;
        background-size: cover;
        background-position: 50%;
        margin-right: 12px;
        border-radius: 50%;
    }
}
</style>
