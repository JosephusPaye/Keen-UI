<template>
    <section class="page page-ui-datepicker">
        <h2 class="page__title">UiDatepicker</h2>

        <p>UiDatepicker is ...</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiDatepickerDocs.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h3>

        <div class="demo">
            <h4 class="page__demo-title">Basic</h4>

            <ui-datepicker
                placeholder="Select a date"
                v-model="picker1"
            >Your Birthday</ui-datepicker>

            <h4 class="page__demo-title">Floating label</h4>

            <ui-datepicker
                floating-label
                placeholder="Select a date"
                v-model="picker2"
            >Your Birthday</ui-datepicker>

            <h4 class="page__demo-title">With default value</h4>

            <ui-datepicker
                placeholder="Select a date"
                v-model="picker3"
            >Christmas Day</ui-datepicker>

            <h4 class="page__demo-title">Color: accent</h4>

            <ui-datepicker
                color="accent"
                placeholder="Select a date"
                v-model="picker4"
            >Your Birthday</ui-datepicker>

            <h4 class="page__demo-title">Orientation: landscape</h4>

            <ui-datepicker
                orientation="landscape"
                placeholder="Select a date"
                v-model="picker5"
            >Your Birthday</ui-datepicker>

            <h4 class="page__demo-title">Picker type: modal</h4>

            <ui-datepicker
                placeholder="Select a date"
                picker-type="modal"
                v-model="picker6"
            >Your Birthday</ui-datepicker>

            <h4 class="page__demo-title">Picker type: modal, orientation: landscape</h4>

            <ui-datepicker
                orientation="landscape"
                placeholder="Select a date"
                picker-type="modal"
                v-model="picker7"
            >Your Birthday</ui-datepicker>

            <h4 class="page__demo-title">With custom formatter</h4>

            <ui-datepicker
                help="Pick a date within the next two weeks"
                orientation="landscape"
                placeholder="Select a date"

                :custom-formatter="picker8Formatter"

                v-model="picker8"
            >A Special Day</ui-datepicker>

            <h4 class="page__demo-title">With min and max date</h4>

            <ui-datepicker
                help="Pick a date within the next two weeks"
                orientation="landscape"
                placeholder="Select a date"

                :max-date="picker9Max"
                :min-date="picker9Min"

                v-model="picker9"
            >A Special Day</ui-datepicker>

            <h4 class="page__demo-title">With date filter</h4>

            <p>The following date picker has a filter which disables weekends.</p>

            <ui-datepicker
                orientation="landscape"
                placeholder="Select a date"

                :date-filter="picker10Filter"

                v-model="picker10"
            >A Special Day</ui-datepicker>

            <h4 class="page__demo-title">With custom lang: French</h4>

            <ui-datepicker
                orientation="landscape"
                placeholder="Select a date"

                :lang="picker11Lang"

                v-model="picker11"
            >A Special Day</ui-datepicker>

            <h4 class="page__demo-title">With validation: required</h4>

            <ui-datepicker
                error="This field is required"
                orientation="landscape"
                placeholder="Select a date"

                :invalid="!picker12"

                v-model="picker12"
            >A Special Day</ui-datepicker>

            <h4 class="page__demo-title">Disabled</h4>

            <ui-datepicker
                disabled
                placeholder="Select a date"
                v-model="picker13"
            >A Special Day</ui-datepicker>

            <h4 class="page__demo-title">Disabled with selection</h4>

            <ui-datepicker
                disabled
                placeholder="Select a date"
                v-model="picker14"
            >A Special Day</ui-datepicker>

            <!-- <h4 class="page__demo-title">With floating label</h4>

            <ui-datepicker
                floating-label
                label="Favourite colour"
                placeholder="Select a colour"
                :options="colourStrings"
                v-model="select2"
            ></ui-datepicker>

            <h4 class="page__demo-title">With icon</h4>

            <ui-datepicker
                icon="colorize"
                label="Favourite colour"
                placeholder="Select a colour"
                :options="colourStrings"
                v-model="select2o5"
            ></ui-datepicker> -->
        </div>

        <!-- <h3 class="page__section-title">API</h3>

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
                                <td>String, Number, Object or Array</td>
                                <td></td>
                                <td>
                                    <p>The model the selected value or values sync to. Can be set initially for default value/values.</p>
                                    <p>If you are not using <code>v-model</code>, you should listen for the <code>input</code> event and update <code>value</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>options</td>
                                <td>Array</td>
                                <td><code>[]</code></td>
                                <td>
                                    <p>An array of options to show to the user.</p>
                                    <p>Can be a plain array, e.g. <code>['Red', 'Blue', 'Green']</code> as well as an array of objects.</p>
                                    <p>For a plain array, the option is shown to the user and it is used for filtering.</p>

                                    <p>For an array of objects, the <code>label</code> is shown to the user and is used for filtering. You can redefine these keys to fit your data using the <code>keys</code> prop.</p>

                                    <p>The entire option is written to the model when the user makes a selection.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>multiple</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not the user can select multiple options.</p>
                                    <p>Set to <code>true</code> to allow multiple selection.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>multipleDelimiter</td>
                                <td>String</td>
                                <td><code>", "</code></td>
                                <td>The delimiter (separator) to use for displaying multiple selected options.</td>
                            </tr>

                            <tr>
                                <td>placeholder</td>
                                <td>String</td>
                                <td></td>
                                <td>Text to display in the select when no option is selected.</td>
                            </tr>

                            <tr>
                                <td>type</td>
                                <td>String</td>
                                <td><code>"simple"</code></td>
                                <td>
                                    <p>The type of template to use for rendering each option. One of <code>simple</code> or <code>image</code>.</p>
                                    <p>The default type is <code>simple</code>, which simply renders the option text.</p>

                                    <p>The <code>image</code> type renders each option with with an image. To use, set <code>type</code> to <code>image</code> and set an image URL as the <code>image</code> property on each option. You can redefine the <code>image</code> key to fit your data using the <code>keys</code> prop.</p>

                                    <p>You can also render each option with a custom template using the <code>option</code> scoped slot.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>hasSearch</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not to show a search input for filtering the select options or getting a query for remote search.</p>
                                    <p>Set to <code>true</code> to show a search input.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>searchPlaceholder</td>
                                <td>String</td>
                                <td></td>
                                <td>The <code>placeholder</code> attribute of the search input.</td>
                            </tr>

                            <tr>
                                <td>filter</td>
                                <td>Function</td>
                                <td><a href="https://github.com/bevacqua/fuzzysearch" target="_blank" rel="noopener">fuzzysearch</a></td>
                                <td>
                                    <p>Defines a custom filter function that is used for filtering the options when the user types into the search input.</p>

                                    <p>The function is called for each item in the <code>options</code> array with two arguments:</p>
                                    <ul>
                                        <li><code>option</code>: (Number, String or Object) - the current option</li>
                                        <li><code>query</code>: (String) - the current value of the search input (what the user has typed)</li>
                                    </ul>

                                    <p>The function should return <code>true</code> if the option matches the query or <code>false</code> otherwise.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>disableFilter</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not to disable the internal filtering of options. With this set to <code>true</code>, you have to implement filtering externally if needed.</p>
                                    <p>This prop is useful when you want to implement custom (e.g. remote) search.</p>
                                    <p>See the <b>With dynamic options (remote search)</b> section above for an example usage.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>loading</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not to show a circular progress spinner on the search input.</p>
                                    <p>This prop is useful for showing feedback to the user when you are doing a remote search. Set to <code>true</code> to show the spinner and <code>false</code> to hide it.</p>
                                    <p>See the <b>With dynamic options (remote search)</b> section above for an example usage.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>noResults</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not the no results message is be shown.</p>
                                    <p>The no results message will be shown if this is <code>true</code> and following conditions are met:</p>
                                    <ul>
                                        <li>The query (user input) is empty</li>
                                        <li>The <code>loading</code> prop is <code>false</code></li>
                                        <li>The <code>disableFilter</code> prop is <code>true</code></li>
                                    </ul>
                                    <p>See the <b>With dynamic options (remote search)</b> section above for an example usage.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>invalid</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not the select is invalid.</p>
                                    <p>When <code>invalid</code> is <code>true</code>, the select label appears red and the error is shown if available.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>touched</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>Determines whether or not the select dropdown has been opened at least once.</td>
                            </tr>

                            <tr>
                                <td>icon</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The select icon. Can be any of the <a href="https://design.google.com/icons/" target="_blank" rel="noopener">Material Icons</a>.</p>
                                    <p>You can set a custom or SVG icon using the <code>icon</code> slot.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>iconPosition</td>
                                <td>String</td>
                                <td><code>"left"</code></td>
                                <td>
                                    <p>Determines the position of the icon relative to the select. One of <code>left</code> or <code>right</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>label</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The select label (text only). For HTML in the label, use the <code>default</code> slot.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>floatingLabel</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not the label starts out inline and moves to float above the select when it is focussed.</p>
                                    <p>Set to <code>true</code> for a floating label. This will disable the select placeholder.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>help</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The help text (hint) shown to the user below the select.</p>
                                    <p>Extra space is reserved under the select for the help and error, but if neither is available, this space is collapsed.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>error</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The error text shown to the user below the select when the <code>invalid</code> prop is <code>true</code>.</p>
                                    <p>Extra space is reserved under the select for the help and error, but if neither is available, this space is collapsed.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not the select is disabled. Set to <code>true</code> to disable the select.</p>
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
                                <td>Holds the select label and can contain HTML.</td>
                            </tr>

                            <tr>
                                <td>option</td>
                                <td>
                                    <p>Use this slot to render each option with a custom template. The slot is passed the following properties, which will be available through <code>scope</code>:</p>

                                    <ul>
                                        <li><code>option</code>: (Object or String) - the option</li>
                                        <li><code>index</code>: (Number) - the index of the option in the array of matched options</li>
                                        <li><code>higlighted</code>: (Boolean) - whether or not the option is currently highlighted</li>
                                    </ul>

                                    <p>For more information, see the <a href="https://vuejs.org/v2/guide/components.html#Scoped-Slots">Scoped Slots documentation</a>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>icon</td>
                                <td>
                                    <p>Holds the select icon and can contain any custom or SVG icon.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap">no-results</td>
                                <td>
                                    <p>Holds the content shown to the user when there is no matching option for their query.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ui-tab>

            <ui-tab title="Events">
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
                                <p>Emitted when an option is selected. The handler is called with the selected option.</p>
                                <p>Listen for it using <code>@select</code>.
                            </td>
                        </tr>

                        <tr>
                            <td class="no-wrap">query-change</td>
                            <td>
                                <p>Emitted when the search input value (the query) changes.</p>
                                <p>The handler is called with the new query. Listen for it using <code>@query-change</code>.</p>
                                <p>See the <b>With dynamic options (remote search)</b> section above for an example usage.</p>
                            </td>
                        </tr>

                        <tr>
                            <td>input</td>
                            <td>
                                <p>Emitted when the select value is changed. The handler is called with the new value.</p>
                                <p>If you are not using <code>v-model</code>, you should listen for this event and update the <code>value</code> prop.</p>
                                <p>Listen for it using <code>@input</code>.
                            </td>
                        </tr>

                        <tr>
                            <td>change</td>
                            <td>
                                <p>Emitted when the select value changes.</p>
                                <p>Listen for it using <code>@change</code>.
                            </td>
                        </tr>

                        <tr>
                            <td>touch</td>
                            <td>
                                <p>Emitted when the select is focussed and then blurred. You should listen for this event and update the <code>touched</code> prop to <code>true</code>.</p>
                                <p>Listen for it using <code>@touch</code>.
                            </td>
                        </tr>

                        <tr>
                            <td>focus</td>
                            <td>
                                <p>Emitted when the select is focussed.</p>
                                <p>Listen for it using <code>@focus</code>.
                            </td>
                        </tr>

                        <tr>
                            <td>blur</td>
                            <td>
                                <p>Emitted when the select loses focus.</p>
                                <p>Listen for it using <code>@blur</code>.
                            </td>
                        </tr>

                        <tr>
                            <td class="no-wrap">dropdown-open</td>
                            <td>
                                <p>Emitted when the select dropdown is opened.</p>
                                <p>Listen for it using <code>@dropdown-open</code>.</p>
                            </td>
                        </tr>

                        <tr>
                            <td class="no-wrap">dropdown-close</td>
                            <td>
                                <p>Emitted when the select dropdown is closed.</p>
                                <p>Listen for it using <code>@dropdown-close</code>.</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
                                <td class="no-wrap"><code>reset()</code></td>
                                <td>
                                    <p>Call this method to reset the select to its initial value. You should also reset the <code>invalid</code> and <code>touched</code> props.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ui-tab>
        </ui-tabs> -->
    </section>
</template>

<script>
import UiTab from 'src/UiTab.vue';
import UiTabs from 'src/UiTabs.vue';
import UiDatepicker from 'src/UiDatepicker.vue';

import languageFr from '../data/date-picker-lang.fr.js';

export default {
    data() {
        const twoWeeksFromNow = new Date();
        twoWeeksFromNow.setDate(twoWeeksFromNow.getDate() + 14);

        return {
            picker1: null,
            picker2: null,
            picker3: new Date((new Date()).getFullYear(), 11, 25),
            picker4: null,
            picker5: null,
            picker6: null,
            picker7: null,
            picker8: null,
            picker9: null,
            picker9Min: new Date(),
            picker9Max: twoWeeksFromNow,
            picker10: null,
            picker11: null,
            picker11Lang: languageFr,
            picker12: null,
            picker13: null,
            picker14: new Date()
        };
    },

    methods: {
        picker8Formatter(date) {
            return date.toLocaleDateString();
        },

        picker10Filter(date) {
            return date.getDay() !== 0 && date.getDay() !== 6;
        }
    },

    components: {
        UiTab,
        UiTabs,
        UiDatepicker
    }
};
</script>

<style lang="sass">
.page-ui-datepicker {
    .ui-datepicker {
        max-width: 400px;
        margin-bottom: 32px;
    }
}
</style>
