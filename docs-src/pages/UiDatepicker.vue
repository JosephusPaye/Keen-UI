<template>
    <section class="page page--ui-datepicker">
        <h2 class="page__title">UiDatepicker</h2>

        <p>UiDatepicker shows a calendar that allows the user to pick a date. It allows for a custom date formatter and filter, as well as specifying minimum and maximum dates.</p>

        <p>UiDatepicker supports two colors: <code>primary</code> and <code>accent</code>, two orientations: <code>portrait</code> and <code>landscape</code> as well as two picker types: <code>popover</code> and <code>modal</code>.</p>

        <p>UiDatepicker can show a label above the input, an icon, as well as help or error below the input. It is keyboard accessible and supports a disabled state. The calendar popover may drop up or down based on the available space.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiDatepicker.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <h4 class="page__demo-title">Basic</h4>

            <ui-datepicker
                v-model="picker1"
                placeholder="Select a date"
            >Your Birthday</ui-datepicker>

            <h4 class="page__demo-title">Floating label</h4>

            <ui-datepicker
                v-model="picker2"
                floating-label
                placeholder="Select a date"
            >Your Birthday</ui-datepicker>

            <h4 class="page__demo-title">With icon</h4>

            <ui-datepicker
                v-model="picker3"
                icon="events"
                placeholder="Select a date"
            >Your Birthday</ui-datepicker>

            <h4 class="page__demo-title">With default value</h4>

            <ui-datepicker
                v-model="picker4"
                icon="events"
                placeholder="Select a date"
            >Christmas Day</ui-datepicker>

            <h4 class="page__demo-title">With ISO 8601 string as value</h4>

            <ui-datepicker
                v-model="picker401"
                icon="events"
                placeholder="Select a date"
            >Your Birthday</ui-datepicker>

            <h4 class="page__demo-title">Color: accent</h4>

            <ui-datepicker
                v-model="picker5"
                color="accent"
                icon="events"
                placeholder="Select a date"
            >Your Birthday</ui-datepicker>

            <h4 class="page__demo-title">Orientation: landscape</h4>

            <ui-datepicker
                v-model="picker6"
                icon="events"
                orientation="landscape"
                placeholder="Select a date"
            >Your Birthday</ui-datepicker>

            <h4 class="page__demo-title">Picker type: modal</h4>

            <ui-datepicker
                v-model="picker7"
                icon="events"
                picker-type="modal"
                placeholder="Select a date"
            >Your Birthday</ui-datepicker>

            <h4 class="page__demo-title">Picker type: modal, orientation: landscape</h4>

            <ui-datepicker
                v-model="picker8"
                icon="events"
                orientation="landscape"
                picker-type="modal"
                placeholder="Select a date"
            >Your Birthday</ui-datepicker>

            <h4 class="page__demo-title">With different start of week: Monday</h4>

            <ui-datepicker
                v-model="picker801"
                placeholder="Select a date"
                :start-of-week="1"
            >Your Birthday</ui-datepicker>

            <h4 class="page__demo-title">With custom formatter</h4>

            <ui-datepicker
                v-model="picker9"
                icon="events"
                orientation="landscape"

                placeholder="Select a date"

                :custom-formatter="picker9Formatter"
            >A Special Day</ui-datepicker>

            <h4 class="page__demo-title">With min and max date</h4>

            <ui-datepicker
                v-model="picker10"
                help="Pick a date within the next two weeks"
                icon="events"
                orientation="landscape"

                placeholder="Select a date"
                :max-date="picker10Max"

                :min-date="picker10Min"
            >A Special Day</ui-datepicker>

            <h4 class="page__demo-title">With date filter: weekends disabled</h4>

            <ui-datepicker
                v-model="picker11"
                icon="events"
                orientation="landscape"

                placeholder="Select a date"

                :date-filter="picker11Filter"
            >A Special Day</ui-datepicker>

            <h4 class="page__demo-title">With custom lang: French</h4>

            <ui-datepicker
                v-model="picker12"
                icon="events"
                orientation="landscape"

                placeholder="Select a date"

                :lang="picker12Lang"
            >A Special Day</ui-datepicker>

            <h4 class="page__demo-title">With custom year range</h4>

            <ui-datepicker
                v-model="picker1201"
                icon="events"
                orientation="landscape"
                placeholder="Select a date from this year"
                :year-range="[(new Date).getFullYear()]"
            >A Special Day</ui-datepicker>

            <h4 class="page__demo-title">With year picker as a default view</h4>

            <ui-datepicker
                v-model="picker1202"
                icon="events"
                default-view="year"
                placeholder="Select a date"
            >A Special Day</ui-datepicker>

            <h4 class="page__demo-title">With validation: required</h4>

            <ui-datepicker
                v-model="picker13"
                error="This field is required"
                icon="events"
                orientation="landscape"

                placeholder="Select a date"

                :invalid="!picker13"
            >A Special Day</ui-datepicker>

            <h4 class="page__demo-title">In a modal, appending to <code>&lt;body&gt;</code></h4>

            <ui-button @click="openModal">Open Modal</ui-button>
            <ui-modal ref="modal" title="Modal with datepicker">
                <div>Modal content: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus et id, provident culpa vel accusantium possimus fugiat libero tenetur labore!</div>
                <br>
                <ui-datepicker
                    v-model="picker1301"
                    placeholder="Select a date"
                    append-dropdown-to-body
                >Your Birthday</ui-datepicker>
            </ui-modal>

            <h4 class="page__demo-title">Disabled</h4>

            <ui-datepicker
                v-model="picker14"
                disabled
                icon="events"
                placeholder="Select a date"
            >A Special Day</ui-datepicker>

            <h4 class="page__demo-title">Disabled with a selection</h4>

            <ui-datepicker
                v-model="picker15"
                disabled
                placeholder="Select a date"
            >A Special Day</ui-datepicker>
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
                                <td class="no-wrap">modelValue, v-model *</td>
                                <td>Date, String</td>
                                <td></td>
                                <td>
                                    <p>The model the selected date syncs to. Can be set initially for a default value.</p>
                                    <p>If you are not using <code>v-model</code>, you should listen for the <code>update:modelValue</code> event and update <code>modelValue</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>startOfWeek</td>
                                <td>Number</td>
                                <td><code>0</code></td>
                                <td>A number corresponding to the start day of the week. <code>0</code> is Sunday, <code>1</code> is Monday, and so on.</td>
                            </tr>

                            <tr>
                                <td>minDate</td>
                                <td>Date</td>
                                <td></td>
                                <td>The minimum date to allow in the picker. Setting this will disable all dates before this date.</td>
                            </tr>

                            <tr>
                                <td>maxDate</td>
                                <td>Date</td>
                                <td></td>
                                <td>The maximum date to allow in the picker. Setting this will disable all dates after this date.</td>
                            </tr>

                            <tr>
                                <td>yearRange</td>
                                <td>Array</td>
                                <td></td>
                                <td>
                                    <p>A range of years to show in the picker. Should be a numeric array of years.</p>
                                    <p>By default its 100 years into the past and 100 years into the future, including the current year.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>lang</td>
                                <td>Object</td>
                                <td class="no-wrap"><pre class="language-javascript is-compact">{
  months: {
    full: ['January', 'Febuary', ...],
    abbreviated: ['Jan', 'Feb', ...]
  },
  days: {
    full: ['Sunday', Monday', ...],
    abbreviated: ['Sun', 'Mon', ...],
    initials: ['S', 'M', ...]
  }
}</pre></td>
                                <td>
                                    <p>An object of translations for the datepicker that allows for a basic form of localization.</p>
                                    <p>Provide an object with your language translations and they will be used for the text in the calendar.</p>
                                    <p>The <code>days.full</code>, <code>days.abbreviated</code>, and <code>days.initials</code> arrays should start with Sunday.</p>
                                    <p>Note that this doesn't translate the OK/Cancel buttons in the modal. To translate those, use the <code>okButtonText</code> and <code>cancelButtonText</code> props.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>customFormatter</td>
                                <td>Function</td>
                                <td></td>
                                <td>
                                    <p>A custom formatting function to use for displaying the selected date.</p>
                                    <p>This function will be called with the selected date object and should return the string to display.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>dateFilter</td>
                                <td>Function</td>
                                <td></td>
                                <td>
                                    <p>A function which filters the calendar dates to determine which ones are enabled or disabled.</p>
                                    <p>This function will be called with the date object for each date in the month and should return <code>true</code> if the date is enabled or <code>false</code> otherwise.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>color</td>
                                <td>String</td>
                                <td><code>"primary"</code></td>
                                <td>The color of the datepicker header and the selected date/year. One of <code>primary</code> or <code>accent</code>.</td>
                            </tr>

                            <tr>
                                <td>orientation</td>
                                <td>String</td>
                                <td><code>"portrait"</code></td>
                                <td>The orientation of the datepicker calendar. One of <code>portrait</code> or <code>landscape</code>.</td>
                            </tr>

                            <tr>
                                <td>defaultView</td>
                                <td>String</td>
                                <td><code>"date"</code></td>
                                <td>The default view of the datepicker calendar. One of <code>date</code> or <code>year</code>. When set to <code>year</code>, the datepicker will open with year selector.</td>
                            </tr>

                            <tr>
                                <td>pickerType</td>
                                <td>String</td>
                                <td><code>"popover"</code></td>
                                <td>The type of picker to use for the calendar. One of <code>popover</code> or <code>modal</code>.</td>
                            </tr>

                            <tr>
                                <td>appendDropdownToBody</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Set to <code>true</code> to append the datepicker's dropdown to the document body, instead of the parent element.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>dropdownZIndex</td>
                                <td>Number</td>
                                <td></td>
                                <td>
                                    <p>The datepicker's dropdown <code>z-index</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>name</td>
                                <td>String</td>
                                <td></td>
                                <td>The <code>name</code> attribute of the datepicker's hidden input element. Useful when the datepicker is part of a form submitted traditionally.</td>
                            </tr>

                            <tr>
                                <td>placeholder</td>
                                <td>String</td>
                                <td></td>
                                <td>The text to display in the datepicker when no date is selected.</td>
                            </tr>

                            <tr>
                                <td>icon</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The datepicker icon. Can be any of the <a href="https://design.google.com/icons/" target="_blank" rel="noopener">Material Icons</a>.</p>
                                    <p>You can set a custom or SVG icon using the <code>icon</code> slot.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>iconPosition</td>
                                <td>String</td>
                                <td><code>"left"</code></td>
                                <td>
                                    <p>The position of the icon relative to the datepicker. One of <code>left</code> or <code>right</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>label</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The datepicker label (text only). For HTML, use the <code>default</code> slot.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>floatingLabel</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the label starts out inline and moves to float above the datepicker when it is focused.</p>
                                    <p>Set to <code>true</code> for a floating label. This will disable the placeholder.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>tabindex</td>
                                <td>Number, String</td>
                                <td></td>
                                <td>The datepicker <code>tabindex</code>.</td>
                            </tr>

                            <tr>
                                <td>invalid</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the datepicker is invalid.</p>
                                    <p>When <code>invalid</code> is <code>true</code>, the datepicker label appears red and the error is shown if available.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>help</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The help text (hint) shown to the user below the datepicker. For HTML, use the <code>help</code> slot.</p>
                                    <p>Extra space is reserved under the datepicker for the help and error, but if neither is available, this space is collapsed.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>error</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The error text shown to the user below the datepicker when the <code>invalid</code> prop is <code>true</code>. For HTML, use the <code>error</code> slot.</p>
                                    <p>Extra space is reserved under the datepicker for the help and error, but if neither is available, this space is collapsed.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the datepicker is disabled. Set to <code>true</code> to disable the datepicker.</p>
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
                                <td>Holds the datepicker label and can contain HTML.</td>
                            </tr>

                            <tr>
                                <td>icon</td>
                                <td>
                                    <p>Holds the datepicker icon and can contain any custom or SVG icon.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>help</td>
                                <td>
                                    <p>Holds the datepicker help and can contain HTML.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>error</td>
                                <td>
                                    <p>Holds the datepicker error and can contain HTML.</p>
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
                            <td>update:modelValue</td>
                            <td>
                                <p>Emitted when the datepicker value is changed. The handler is called with the new value.</p>
                                <p>If you are not using <code>v-model</code>, you should listen for this event and update the <code>modelValue</code> prop.</p>
                                <p>Listen for it using <code>@update:modelValue</code>.</p>
                            </td>
                        </tr>

                        <tr>
                            <td>touch</td>
                            <td>
                                <p>Emitted when the datepicker is focused for the first time and then blurred.</p>
                                <p>Listen for it using <code>@touch</code>.</p>
                            </td>
                        </tr>

                        <tr>
                            <td>focus</td>
                            <td>
                                <p>Emitted when the datepicker is focused.</p>
                                <p>Listen for it using <code>@focus</code>.</p>
                            </td>
                        </tr>

                        <tr>
                            <td>blur</td>
                            <td>
                                <p>Emitted when the datepicker loses focus.</p>
                                <p>Listen for it using <code>@blur</code>.</p>
                            </td>
                        </tr>

                        <tr>
                            <td>open</td>
                            <td>
                                <p>Emitted when the picker (the modal or popover) is opened.</p>
                                <p>Listen for it using <code>@open</code>.</p>
                            </td>
                        </tr>

                        <tr>
                            <td>close</td>
                            <td>
                                <p>Emitted when the picker (the modal or popover) is closed.</p>
                                <p>Listen for it using <code>@close</code>.</p>
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
                                <td><code>focus()</code></td>
                                <td>
                                    <p>Call this method to programmatically focus the datepicker.</p>
                                </td>
                            </tr>

                            <tr>
                                <td><code>clear()</code></td>
                                <td>
                                    <p>Call this method to clear the selected date.</p>
                                </td>
                            </tr>

                            <tr>
                                <td><code>reset()</code></td>
                                <td>
                                    <p>Call this method to reset the datepicker to its initial value. You should also reset the <code>invalid</code> prop.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap"><code>resetTouched()</code></td>
                                <td>Call this method to reset the touched state of the datepicker. By default it will set the touched state to <code>false</code>, but you can pass an object with <code>{ touched: true }</code> to set the touched state to <code>true</code>.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ui-tab>
        </ui-tabs>
    </section>
</template>

<script>
import UiButton from '@/UiButton.vue';
import UiDatepicker from '@/UiDatepicker.vue';
import UiModal from '@/UiModal.vue';
import UiTab from '@/UiTab.vue';
import UiTabs from '@/UiTabs.vue';

import languageFr from '../data/date-picker-lang.fr.js';

export default {
    components: {
        UiButton,
        UiDatepicker,
        UiModal,
        UiTab,
        UiTabs
    },

    data() {
        const twoWeeksFromNow = new Date();
        twoWeeksFromNow.setDate(twoWeeksFromNow.getDate() + 14);

        return {
            picker1: null,
            picker2: null,
            picker3: null,
            picker4: new Date((new Date()).getFullYear(), 11, 25),
            picker401: '2019-01-08',
            picker5: null,
            picker6: null,
            picker7: null,
            picker8: null,
            picker801: null,
            picker9: null,
            picker10: null,
            picker10Min: new Date(),
            picker10Max: twoWeeksFromNow,
            picker11: null,
            picker12: null,
            picker12Lang: languageFr,
            picker1201: null,
            picker1202: null,
            picker13: null,
            picker1301: null,
            picker14: null,
            picker15: new Date()
        };
    },

    methods: {
        picker9Formatter(date) {
            return date.toLocaleDateString();
        },

        picker11Filter(date) {
            return date.getDay() !== 0 && date.getDay() !== 6;
        },

        openModal() {
            this.$refs.modal.open();
        }
    }
};
</script>

<style lang="scss">
@import '@/styles/imports';

.page--ui-datepicker {
    .ui-datepicker {
        max-width: rem(400px);
        margin-bottom: rem(32px);
    }

    .ui-modal .ui-datepicker {
        max-width: none;
        margin-bottom: 0;
    }
}
</style>
