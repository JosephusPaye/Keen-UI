<template>
    <section class="page page--ui-autocomplete">
        <h2 class="page__title">UiAutocomplete</h2>

        <p>UiAutocomplete shows a dropdown of autocomplete suggestions below an input as the user types.</p>

        <p>UiAutocomplete can show a label above the input as well as help or error below the input, and it supports keyboard navigation.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiAutocomplete.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <h4 class="page__demo-title">Basic</h4>

            <ui-autocomplete
                help="Pick your favourite month of the year"
                label="Favourite Month"
                name="favourite_month"
                placeholder="Enter your favourite month"

                :suggestions="months"

                v-model="autocomplete1"
            ></ui-autocomplete>

            <h4 class="page__demo-title">Floating label</h4>

            <ui-autocomplete
                floating-label
                help="Pick your favourite month of the year"
                label="Favourite Month"
                name="favourite_month"
                placeholder="Enter your favourite month"

                :suggestions="months"

                v-model="autocomplete2"
            ></ui-autocomplete>

            <h4 class="page__demo-title">With icon</h4>

            <ui-autocomplete
                help="Pick your favourite month of the year"
                icon="events"
                label="Favourite Month"
                name="favourite_month"
                placeholder="Enter your favourite month"

                :suggestions="months"

                v-model="autocomplete3"
            ></ui-autocomplete>

            <h4 class="page__demo-title">Validation: required</h4>

            <ui-autocomplete
                error="This field is required"
                help="Pick your favourite month of the year"
                label="Favourite Month"
                name="favourite_month"
                placeholder="Enter your favourite month"

                :invalid="autocomplete4Touched && !autocomplete4.length > 0"
                :suggestions="months"

                @touch="autocomplete4Touched = true"

                v-model="autocomplete4"
            ></ui-autocomplete>

            <h4 class="page__demo-title">Type: image, minChars: 0</h4>

            <ui-autocomplete
                help="Pick your favourite member of the Simpsons family"
                label="Favourite Simpson"
                name="favourite_simpson"
                placeholder="Choose your favourite Simpson"
                type="image"

                :keys="{ label: 'label', value: 'label', image: 'image' }"
                :min-chars="0"
                :suggestions="theSimpsons"

                v-model="autocomplete5"
            ></ui-autocomplete>

            <p>Suggestions are updated dynamically when the suggestions array changes.</p>

            <ui-button :disabled="addedGrannies" @click="addGrannies">
                Add Grandma &amp; Grandpa
            </ui-button>

            <h4 class="page__demo-title">Custom template</h4>

            <p>The following simply renders the prop passed to the custom template for each suggestion.</p>

            <ui-autocomplete
                help="Pick your favourite month of the year"
                label="Favourite Month"
                name="favourite_month"
                placeholder="Enter your favourite month"

                :suggestions="months"
                v-model="autocomplete6"
            >
                <template scope="props" slot="suggestion">
                    <code>{{ props }}</code>
                </template>
            </ui-autocomplete>

            <h4 class="page__demo-title">Disabled</h4>

            <ui-autocomplete
                disabled
                label="Favourite Colour"
                placeholder="You can't interact with this"

                v-model="autocomplete7"
            ></ui-autocomplete>
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
                                    <p>The <code>name</code> attribute of the autocomplete input element.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap">value, v-model *</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The model the autocomplete value syncs to.</p>
                                    <p>If you are not using <code>v-model</code>, you should listen for the <code>input</code> event and update <code>value</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>suggestions</td>
                                <td>Array</td>
                                <td><code>[]</code></td>
                                <td>
                                    <p>An array of suggestions to show to the user. The array can either be of strings or objects (but not both).</p>

                                    <p>For an array of objects, each object should have <code>label</code> and <code>value</code> properties. The <code>label</code> is shown to the user and the <code>value</code> is written to the model when the user makes a selection.</p>

                                    <p>You can redefine the <code>label</code> and <code>value</code> keys to fit your data using the <code>keys</code> prop.</p>

                                    <p>For an array of strings, each string is used as both the label and the value.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>limit</td>
                                <td>Number</td>
                                <td><code>8</code></td>
                                <td>The maximum number of suggestions to show to the user at any one time.</td>
                            </tr>

                            <tr>
                                <td>append</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the value of the selected suggestion should be appended to the current value (instead of replacing the current value).</p>
                                    <p>Set to <code>true</code> to append selected suggestions.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>appendDelimiter</td>
                                <td>String</td>
                                <td><code>", "</code></td>
                                <td>The delimiter (separator) to use when appending selected suggestions.</td>
                            </tr>

                            <tr>
                                <td>type</td>
                                <td>String</td>
                                <td><code>"simple"</code></td>
                                <td>
                                    <p>The type of template to use for rendering each suggestion. One of <code>simple</code> or <code>image</code>.</p>

                                    <p>The default type is <code>simple</code>, which simply renders the suggestion text.</p>

                                    <p>The <code>image</code> type renders each suggestion with with an image. To use, set <code>type</code> to <code>image</code> and set an image URL as the <code>image</code> property on each suggestion. You can redefine the <code>image</code> key to fit your data using the <code>keys</code> prop.</p>

                                    <p>You can also render each suggestion with a custom template using the <code>suggestion</code> scoped slot.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>minChars</td>
                                <td>Number</td>
                                <td><code>2</code></td>
                                <td>The minimum number of characters the user should type before the suggestions are shown.</td>
                            </tr>

                            <tr>
                                <td>showOnUpDown</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td>Determines whether the suggestions should be shown when the user presses the Up or Down arrow keys in the input.</td>
                            </tr>

                            <tr>
                                <td>invalid</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the autocomplete is invalid.</p>
                                    <p>When <code>invalid</code> is <code>true</code>, the autocomplete label appears red and the error is shown if available.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>autofocus</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the autocomplete should automatically receive focus when it is rendered for the first time.</p>
                                    <p>Only one input element should have this prop set to <code>true</code> in the document for the autofocus to work properly.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>filter</td>
                                <td>Function</td>
                                <td><a href="https://github.com/bevacqua/fuzzysearch" target="_blank" rel="noopener">fuzzysearch</a></td>
                                <td>
                                    <p>Defines a custom filter function that is used for filtering the suggestions when the user types into the autocomplete.</p>

                                    <p>The function is called for each item in the <code>suggestions</code> array with two arguments:</p>

                                    <ul>
                                        <li><code>suggestion</code>: (Object or String) - the current suggestion</li>
                                        <li><code>query</code>: (String) - the current value of the autocomplete input (what the user has typed)</li>
                                    </ul>

                                    <p>The function should return <code>true</code> if the suggestion matches the query or <code>false</code> otherwise.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>keys</td>
                                <td>Object</td>
                                <td class="no-wrap"><pre class="language-javascript is-compact">{
  label: 'label',
  value: 'value',
  image: 'image'
}</pre></td>
                                <td>
                                    <p>Allows for redefining each suggestion object's keys.</p>
                                    <p>Pass an object with custom keys if your data does not match the default keys.</p>
                                    <p>Note that if you redefine one key, you have to define all the others as well.</p>
                                    <p>Can be set using the <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/Customization.md#global-config" target="_blank" rel="noopener">global config</a>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>highlightFirstMatch</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td>
                                    <p>Whether or not the first matching suggestion is automatically highlighted when the user input changes.</p>
                                    <p>Set to <code>false</code> to disable automatically highlighting the first match.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>cycleHighlight</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td>
                                    <p>Whether or not highlighting should cycle (wrap around) immediately on overflow.</p>

                                    <p>When this is set to <code>false</code>, pressing the down arrow key when on the last suggestion will not immediately highlight the first suggestion, but pressing it a second time will.</p>

                                    <p>The same goes for when pressing the up arrow key on the first suggestion.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>placeholder</td>
                                <td>String</td>
                                <td></td>
                                <td>The <code>placeholder</code> attribute of the autocomplete input element.</td>
                            </tr>

                            <tr>
                                <td>icon</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The autocomplete icon. Can be any of the <a href="https://design.google.com/icons/" target="_blank" rel="noopener">Material Icons</a>.</p>
                                    <p>You can set a custom or SVG icon using the <code>icon</code> slot.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>iconPosition</td>
                                <td>String</td>
                                <td><code>"left"</code></td>
                                <td>
                                    <p>The position of the icon relative to the input. One of <code>left</code> or <code>right</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>label</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The autocomplete label (text only). For HTML, use the <code>default</code> slot.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>floatingLabel</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the autocomplete label starts out inline and moves to float above the input when it is focused.</p>
                                    <p>Set to <code>true</code> for a floating label. This will disable the input placeholder.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>help</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The help text (hint) shown to the user below the autocomplete input. For HTML, use the <code>help</code> slot.</p>
                                    <p>Extra space is reserved under the input for the help and error, but if neither is available, this space is collapsed.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>error</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The error text shown to the user below the autocomplete input when the <code>invalid</code> prop is <code>true</code>. For HTML, use the <code>error</code> slot.</p>
                                    <p>Extra space is reserved under the input for the help and error, but if neither is available, this space is collapsed.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>readonly</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>The <code>readonly</code> attribute of the autocomplete input element.</td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>Whether or not the autocomplete is disabled. Set to <code>true</code> to disable the autocomplete.</td>
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
                                <td>Holds the autocomplete label and can contain HTML.</td>
                            </tr>

                            <tr>
                                <td>suggestion</td>
                                <td>
                                    <p>Use this slot to render each suggestion with a custom template. The slot is passed the following properties, which will be available through <code>scope</code>:</p>

                                    <ul>
                                        <li><code>suggestion</code>: (Object or String) - the suggestion</li>
                                        <li><code>index</code>: (Number) - the index of the suggestion in the array of matched suggestions</li>
                                        <li><code>higlighted</code>: (Boolean) - whether or not the suggestion is currently highlighted</li>
                                    </ul>

                                    <p>For more information, see the <a href="https://vuejs.org/v2/guide/components.html#Scoped-Slots">Scoped Slots documentation</a>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>icon</td>
                                <td>
                                    <p>Holds the autocomplete icon and can contain any custom or SVG icon.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>help</td>
                                <td>
                                    <p>Holds the autocomplete help and can contain HTML.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>error</td>
                                <td>
                                    <p>Holds the autocomplete error and can contain HTML.</p>
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
                                <p>Emitted when a suggestion is selected. The handler is called with the selected suggestion.</p>
                                <p>Listen for it using <code>@select</code>.
                            </td>
                        </tr>

                        <tr>
                            <td>input</td>
                            <td>
                                <p>Emitted when the autocomplete input value is changed. The handler is called with the new value.</p>
                                <p>If you are not using <code>v-model</code>, you should listen for this event and update the <code>value</code> prop.</p>
                                <p>Listen for it using <code>@input</code>.
                            </td>
                        </tr>

                        <tr>
                            <td>change</td>
                            <td>
                                <p>Emitted when a change in the autocomplete value is committed. The handler is called with the new value.</p>
                                <p>See the <a href="https://developer.mozilla.org/en-US/docs/Web/Events/change" target="_blank" rel="noopener">onchange event documentation</a> for more information.</p>
                                <p>Listen for it using <code>@change</code>.
                            </td>
                        </tr>

                        <tr>
                            <td>touch</td>
                            <td>
                                <p>Emitted when the autocomplete is focused for the first time and then blurred.</p>
                                <p>Listen for it using <code>@touch</code>.
                            </td>
                        </tr>

                        <tr>
                            <td>focus</td>
                            <td>
                                <p>Emitted when the autocomplete input is focused.</p>
                                <p>Listen for it using <code>@focus</code>.
                            </td>
                        </tr>

                        <tr>
                            <td>blur</td>
                            <td>
                                <p>Emitted when the autocomplete input loses focus.</p>
                                <p>Listen for it using <code>@blur</code>.
                            </td>
                        </tr>

                        <tr>
                            <td class="no-wrap">dropdown-open</td>
                            <td>
                                <p>Emitted when the autocomplete dropdown is opened.</p>
                                <p>Listen for it using <code>@dropdown-open</code>.</p>
                            </td>
                        </tr>

                        <tr>
                            <td class="no-wrap">dropdown-close</td>
                            <td>
                                <p>Emitted when the autocomplete dropdown is closed.</p>
                                <p>Listen for it using <code>@dropdown-close</code>.</p>
                            </td>
                        </tr>

                        <tr>
                            <td>highlight</td>
                            <td>
                                <p>Emitted when a suggestion is highlighted using the arrow keys. The handler is called with the following arguments:</p>

                                <ul>
                                    <li><code>suggestion</code>: (Object or String) - the suggestion that was highlighted</li>
                                    <li><code>index</code>: (Number) - the index of the suggestion in the array of matched suggestions</li>
                                </ul>

                                <p>Listen for it using <code>@highlight</code>.</p>
                            </td>
                        </tr>

                        <tr>
                            <td class="no-wrap">highlight-overflow</td>
                            <td>
                                <p>Emitted when an attempted highlight overflows (this happens when the user is on the first suggestion and presses the up arrow key or on the last suggestion and presses the down arrow key).</p>

                                <p>This event is only emitted when the <code>cycleHighlight</code> prop is <code>false</code>.</p>

                                <p>The handler is called with the overflowing index. Listen for it using <code>@highlight-overflow</code>.</p>
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
                                    <p>Call this method to reset the autocomplete to its initial value. You should also reset the <code>invalid</code> and <code>touched</code> props.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap"><code>resetTouched()</code></td>
                                <td>Call this method to reset the touched state of the autocomplete. By default it will set the touched state to <code>false</code>, but you can pass an object with <code>{ touched: true }</code> to set the touched state to <code>true</code>.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ui-tab>
        </ui-tabs>
    </section>
</template>

<script>
import UiAutocomplete from 'src/UiAutocomplete.vue';
import UiButton from 'src/UiButton.vue';
import UiTab from 'src/UiTab.vue';
import UiTabs from 'src/UiTabs.vue';

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const theSimpsons = [
    {
        value: 'maggie',
        label: 'Maggie Simpson',
        image: 'https://i.imgur.com/eK26qtK.jpg'
    },
    {
        value: 'lisa',
        label: 'Lisa Simpson',
        image: 'https://i.imgur.com/wIb44g9.jpg'
    },
    {
        value: 'bart',
        label: 'Bart Simpson',
        image: 'https://i.imgur.com/XkEz9zg.jpg'
    },
    {
        value: 'marge',
        label: 'Marge Simpson',
        image: 'https://i.imgur.com/MuFcpQ4.jpg'
    },
    {
        value: 'homer',
        label: 'Homer Simpson',
        image: 'https://i.imgur.com/aYPRWX4.jpg'
    }
];

const grannies = [
    {
        value: 'mona',
        label: 'Mona Simpson',
        image: 'https://i.imgur.com/z5xy1eW.jpg'
    },
    {
        value: 'abe',
        label: 'Abe Simpson',
        image: 'https://i.imgur.com/3UF8hrf.jpg'
    }
];

export default {
    data() {
        return {
            months,
            theSimpsons,
            addedGrannies: false,
            autocomplete1: '',
            autocomplete2: '',
            autocomplete3: '',
            autocomplete4: '',
            autocomplete4Touched: false,
            autocomplete5: '',
            autocomplete6: '',
            autocomplete7: ''
        };
    },

    methods: {
        addGrannies() {
            this.theSimpsons = this.theSimpsons.concat(grannies);
            this.addedGrannies = true;
        }
    },

    components: {
        UiAutocomplete,
        UiButton,
        UiTab,
        UiTabs
    }
};
</script>

<style lang="scss">
@import '~styles/imports';

.page--ui-autocomplete {
    .page__examples {
        max-width: rem-calc(512px);
    }
}
</style>
