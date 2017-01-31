<template>
    <section class="page page--ui-select">
        <h2 class="page__title">UiSelect</h2>

        <p>UiSelect is a select component that allows the user to choose one or more options from a group of pre-defined or dynamically loaded options. It supports default options, multiple selection and filtering.</p>

        <p>UiSelect can show a label above the input, an icon, as well as help or error below the input. It is keyboard accessible and supports a disabled state.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiSelect.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <h4 class="page__demo-title">Basic</h4>

            <ui-select
                label="Favourite colour"
                placeholder="Select a colour"
                :options="colourStrings"
                v-model="select1"
            ></ui-select>

            <h4 class="page__demo-title">With floating label</h4>

            <ui-select
                floating-label
                label="Favourite colour"
                placeholder="Select a colour"
                :options="colourStrings"
                v-model="select2"
            ></ui-select>

            <h4 class="page__demo-title">With icon</h4>

            <ui-select
                icon="colorize"
                label="Favourite colour"
                placeholder="Select a colour"
                :options="colourStrings"
                v-model="select2o5"
            ></ui-select>

            <h4 class="page__demo-title">With a default selection</h4>

            <ui-select
                label="Favourite colour"
                placeholder="Select a colour"
                :options="colourStrings"
                v-model="select3"
            ></ui-select>

            <h4 class="page__demo-title">Type: image</h4>

            <ui-select
                label="Favourite colour"
                placeholder="Select a colour"
                type="image"
                :options="colours"
                v-model="select4"
            ></ui-select>

            <h4 class="page__demo-title">Type: image, with a default selection</h4>

            <ui-select
                label="Favourite colour"
                placeholder="Select a colour"
                type="image"
                :options="colours"
                v-model="select5"
            ></ui-select>

            <h4 class="page__demo-title">With help</h4>

            <ui-select
                help="You favourite colour will be used on your profile page"
                label="Favourite colour"
                placeholder="Select a colour"
                type="image"
                :options="colours"
                v-model="select6"
            ></ui-select>

            <h4 class="page__demo-title">Multiple selection</h4>

            <ui-select
                label="Favourite colours"
                multiple
                placeholder="Select some colours"
                type="image"
                :options="colours"
                v-model="select7"
            ></ui-select>

            <h4 class="page__demo-title">Multiple selection with defaults</h4>

            <ui-select
                label="Favourite colours"
                multiple
                placeholder="Select some colours"
                type="image"
                :options="colours"
                v-model="select8"
            ></ui-select>

            <h4 class="page__demo-title">With search</h4>

            <ui-select
                has-search
                label="Favourite colours"
                multiple
                placeholder="Select some colours"
                type="image"
                :options="colours"
                v-model="select9"
            ></ui-select>

            <h4 class="page__demo-title">With validation</h4>

            <ui-select
                error="You must select at least 2 colours"
                has-search
                help="Select 2 or more colours"
                label="Favourite colours"
                multiple
                placeholder="Select some colours"
                type="image"

                :invalid="select10Touched && select10.length < 2"
                :options="colours"

                @touch="select10Touched = true"
                v-model="select10"
            ></ui-select>

            <h4 class="page__demo-title">With dynamic options (remote search)</h4>

            <ui-select
                disable-filter
                has-search
                label="Favourite colours"
                placeholder="Select a colour"
                search-placeholder="Type &quot;red&quot; or &quot;blue&quot;"
                type="image"

                :loading="select11Loading"
                :no-results="select11NoResults"
                :options="select11Options"

                @query-change="onQueryChange"

                v-model="select11"
            ></ui-select>

            <h4 class="page__demo-title">With many options (248)</h4>

            <ui-select
                has-search
                label="Country"
                placeholder="Select your country"

                :keys="{ label: 'name', value: 'code' }"
                :options="countries"

                v-model="select12"
            ></ui-select>

            <h4 class="page__demo-title">With custom template</h4>

            <ui-select
                has-search
                label="Favourite colours"
                multiple
                placeholder="Select some colours"
                :options="colourStrings"
                v-model="select12o5"
            >
                <template scope="props" slot="option">
                    <code>{{ props }}</code>
                </template>
            </ui-select>

            <h4 class="page__demo-title">Disabled</h4>

            <ui-select
                disabled
                label="Favourite colour"
                placeholder="Select a colour"
                v-model="select13"
            ></ui-select>

            <h4 class="page__demo-title">Disabled with a selection</h4>

            <ui-select
                disabled
                label="Favourite colour"
                placeholder="Select a colour"
                :options="colourStrings"
                v-model="select14"
            ></ui-select>
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
                                <td>name</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The <code>name</code> attribute of the select's hidden input element. Useful when traditionally submitting a form the select is a part of.</p>
                                </td>
                            </tr>

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

                                    <p>For an array of objects, the <code>label</code> is shown to the user and is used for filtering, and the <code>value</code> is submitted to the server. You can redefine these keys to fit your data using the <code>keys</code> prop.</p>

                                    <p>The entire option is written to the model when the user makes a selection.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>multiple</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the user can select multiple options.</p>
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
                                <td><code>"basic"</code></td>
                                <td>
                                    <p>The type of template to use for rendering each option. One of <code>basic</code> or <code>image</code>.</p>
                                    <p>The default type is <code>basic</code>, which simply renders the option text.</p>

                                    <p>The <code>image</code> type renders each option with with an image. To use, set <code>type</code> to <code>image</code> and set an image URL as the <code>image</code> property on each option. You can redefine the <code>image</code> key to fit your data using the <code>keys</code> prop.</p>

                                    <p>You can also render each option with a custom template using the <code>option</code> scoped slot.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>hasSearch</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not to show a search input for filtering the select options or getting a query for remote search.</p>
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
                                    <p>Whether or not to disable the internal filtering of options. With this set to <code>true</code>, you have to implement filtering externally if needed.</p>
                                    <p>This prop is useful when you want to implement custom/remote search.</p>
                                    <p>See the <b>With dynamic options (remote search)</b> section above for an example usage.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>loading</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not to show a circular progress spinner on the search input.</p>
                                    <p>This prop is useful for showing feedback to the user when you are doing a remote search. Set to <code>true</code> to show the spinner and <code>false</code> to hide it.</p>
                                    <p>See the <b>With dynamic options (remote search)</b> section above for an example usage.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>noResults</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the no results message is be shown.</p>
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
                                <td>keys</td>
                                <td>Object</td>
                                <td class="no-wrap"><pre class="language-javascript is-compact">{
  label: 'label',
  image: 'image'
}</pre></td>
                                <td>
                                    <p>Allows for redefining each option object's keys.</p>
                                    <p>Pass an object with custom keys if your data does not match the default keys.</p>
                                    <p>Note that if you redefine one key, you have to define all the others as well.</p>
                                    <p>Can be set using the <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/Customization.md#global-config" target="_blank" rel="noopener">global config</a>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>invalid</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the select is invalid.</p>
                                    <p>When <code>invalid</code> is <code>true</code>, the select label appears red and the error is shown if available.</p>
                                </td>
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
                                    <p>The position of the icon relative to the select. One of <code>left</code> or <code>right</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>label</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The select label (text only). For HTML, use the <code>default</code> slot.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>floatingLabel</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the label starts out inline and moves to float above the select when it is focused.</p>
                                    <p>Set to <code>true</code> for a floating label. This will disable the select placeholder until the label is floating.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>help</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The help text (hint) shown to the user below the select. For HTML, use the <code>help</code> slot.</p>
                                    <p>Extra space is reserved under the select for the help and error, but if neither is available, this space is collapsed.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>error</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The error text shown to the user below the select when the <code>invalid</code> prop is <code>true</code>. For HTML, use the <code>error</code> slot.</p>
                                    <p>Extra space is reserved under the select for the help and error, but if neither is available, this space is collapsed.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the select is disabled. Set to <code>true</code> to disable the select.</p>
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
                                <td class="no-wrap">no-results</td>
                                <td>
                                    <p>Holds the content shown to the user when there is no matching option for their query.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>icon</td>
                                <td>
                                    <p>Holds the select icon and can contain any custom or SVG icon.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>help</td>
                                <td>
                                    <p>Holds the select help and can contain HTML.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>error</td>
                                <td>
                                    <p>Holds the select error and can contain HTML.</p>
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
                                <p>Emitted when an option is selected. The handler is called with the selected option and an object which shows if the option was selected or deselected.</p>
                                <p>This object will have <code>{ selected: true }</code> if the option was selected or <code>{ selected: false }</code> otherwise.</p>
                                <p>Listen for it using <code>@select</code>.
                            </td>
                        </tr>

                        <tr>
                            <td class="no-wrap">query-change</td>
                            <td>
                                <p>Emitted when the query (the search input value) changes.</p>
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
                                <p>Emitted when the select is focused for the first time and then blurred.</p>
                                <p>Listen for it using <code>@touch</code>.
                            </td>
                        </tr>

                        <tr>
                            <td>focus</td>
                            <td>
                                <p>Emitted when the select is focused.</p>
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
                                <td><code>reset()</code></td>
                                <td>
                                    <p>Call this method to reset the select to its initial value. You should also reset the <code>invalid</code> prop.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap"><code>resetTouched()</code></td>
                                <td>Call this method to reset the touched state of the select. By default it will set the touched state to <code>false</code>, but you can pass an object with <code>{ touched: true }</code> to set the touched state to <code>true</code>.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ui-tab>
        </ui-tabs>
    </section>
</template>

<script>
import UiSelect from 'src/UiSelect.vue';
import UiTab from 'src/UiTab.vue';
import UiTabs from 'src/UiTabs.vue';

import debounce from 'lodash.debounce';
import { startsWith } from 'helpers/util';

import countries from '../data/countries';
import { colourStrings, colours, redShades, blueShades } from '../data/colours';

export default {
    data() {
        return {
            select1: '',
            select2: '',
            select2o5: '',
            select3: 'Orange',
            select4: '',
            select5: {
                label: 'Lavender',
                image: 'https://placehold.it/64/e6e6fa/e6e6fa',
                value: 'lavender'
            },
            select6: '',
            select7: '',
            select8: [
                {
                    label: 'Orange',
                    image: 'https://placehold.it/64/ffa500/ffa500',
                    value: 'orange'
                },
                {
                    label: 'Lime',
                    image: 'https://placehold.it/64/00ff00/00ff00',
                    value: 'lime'
                }
            ],
            select9: [],
            select10: [],
            select10Touched: false,
            select11: '',
            select11Options: [],
            select11Loading: false,
            select11NoResults: false,
            select11LoadingTimeout: null,
            select12: {
                name: 'Australia',
                code: 'AU'
            },
            select12o5: '',
            select13: '',
            select14: 'Peach',
            colours,
            colourStrings,
            countries
        };
    },

    methods: {
        onQueryChange(query) {
            if (query.length === 0) {
                return;
            }

            this.fetchRemoteResults(query);
        },

        fetchRemoteResults: debounce(function (query) {
            this.select11Loading = true;

            if (this.select11LoadingTimeout) {
                clearTimeout(this.select11LoadingTimeout);
                this.select11LoadingTimeout = null;
            }

            this.select11LoadingTimeout = setTimeout(() => {
                query = query.toLowerCase();

                if (startsWith(query, 'red')) {
                    this.select11Options = redShades;
                    this.select11NoResults = false;
                } else if (startsWith(query, 'blue')) {
                    this.select11Options = blueShades;
                    this.select11NoResults = false;
                } else {
                    this.select11Options = [];
                    this.select11NoResults = true;
                }

                this.select11Loading = false;
                this.select11LoadingTimeout = null;
            }, 1200);
        }, 500)
    },

    components: {
        UiSelect,
        UiTab,
        UiTabs
    }
};
</script>

<style lang="scss">
@import '~styles/imports';

.page--ui-select {
    .ui-select {
        margin-bottom: rem-calc(32px);
        max-width: rem-calc(400px);
    }
}
</style>
