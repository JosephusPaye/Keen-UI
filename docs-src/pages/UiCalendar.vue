<template>
    <section class="page page--ui-calendar">
        <h2 class="page__title">UiCalendar</h2>

        <p>UiCalendar shows a calendar. A custom template can be used to render dates with data like events.</p>

        <p>UiCalendar supports three colors: <code>default</code>, <code>primary</code> and <code>accent</code>.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiCalendar.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <h4 class="page__demo-title">Demo</h4>

            <ui-calendar :color="color" :raised="raised" :square-cells="hasSquareCells"></ui-calendar>

            <div class="page__demo-controls">
                <ui-radio-group
                    name="color"
                    :options="['default', 'primary', 'accent']"
                    v-model="color"
                >Color</ui-radio-group>

                <div class="page__demo-controls-row">
                    <ui-checkbox v-model="hasSquareCells" class="mr-16">Use square cells</ui-checkbox>
                    <ui-checkbox v-model="raised">Raised</ui-checkbox>
                </div>
            </div>

            <h4 class="page__demo-title">Custom template for dates</h4>

            <p>Using a scoped slot, you can specify a custom template that will be used to render each date in the calendar.</p>
            <p>This could be used to add things like events to the calendar.</p>

            <ui-calendar>
                <code slot-scope="props" slot="date">
                    D{{ props.date.getDate() }}
                </code>
            </ui-calendar>
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
                                <td>color</td>
                                <td>String</td>
                                <td><code>"default"</code></td>
                                <td>The color of the calendar header and the selected date. One of <code>default</code>, <code>primary</code> or <code>accent</code>.</td>
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
                                    <p>An object of translations for the calendar that allows for a basic form of localization.</p>
                                    <p>Provide an object with your language translations and they will be used for the text in the calendar.</p>
                                    <p>The <code>days.full</code>, <code>days.abbreviated</code>, and <code>days.initials</code> arrays should start with Sunday.</p>
                                    <p>Note that this doesn't translate the OK/Cancel buttons in the modal. To translate those, use the <code>okButtonText</code> and <code>cancelButtonText</code> props.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>maxDate</td>
                                <td>Date</td>
                                <td></td>
                                <td>The maximum date to enable in the calendar. Setting this will disable all dates after this date.</td>
                            </tr>

                            <tr>
                                <td>minDate</td>
                                <td>Date</td>
                                <td></td>
                                <td>The minimum date to enable in the calendar. Setting this will disable all dates before this date.</td>
                            </tr>

                            <tr>
                                <td>raised</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the calendar has a drop shadow.</p>
                                    <p>Set to <code>true</code> to show a drop shadow.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>startOfWeek</td>
                                <td>Number</td>
                                <td><code>0</code></td>
                                <td>A number corresponding to the start day of the week. <code>0</code> is Sunday, <code>1</code> is Monday, and so on.</td>
                            </tr>

                            <tr>
                                <td>squareCells</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the calendar should resize cells so they are always square (based on the available width).</p>
                                    <p>Set to <code>true</code> for square cells.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>yearRange</td>
                                <td>Array</td>
                                <td></td>
                                <td>
                                    <p>A range of years to show in the calendar. Should be a numeric array of years.</p>
                                    <p>By default its 100 years into the past and 100 years into the future, including the current year.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap">value, v-model</td>
                                <td>Date, String</td>
                                <td></td>
                                <td>
                                    <p>The model the selected calendar date syncs to.</p>
                                    <p>If you are not using <code>v-model</code>, you should listen for the <code>input</code> event and update <code>value</code>.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
                                <td>date</td>
                                <td>
                                    <p>Use this slot to render each date cell with a custom template. The slot is passed the following properties, which will be available through <code>scope</code>:</p>

                                    <ul>
                                        <li><code>date</code>: (Date) - the date of the cell</li>
                                    </ul>

                                    <p>For more information, see the <a href="https://vuejs.org/v2/guide/components.html#Scoped-Slots">Scoped Slots documentation</a>.</p>
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
                            <td>date-select</td>
                            <td>
                                <p>Emitted when a date is selected in the calendar. The handler is called with the date selected.</p>
                                <p>Listen for it using <code>@date-select</code>.</p>
                            </td>
                        </tr>

                        <tr>
                            <td>input</td>
                            <td>
                                <p>Emitted when a date is selected in the calendar. The handler is called with the date selected.</p>
                                <p>If you are not using <code>v-model</code>, you should listen for this event and update the <code>value</code> prop.</p>
                                <p>Listen for it using <code>@input</code>.</p>
                            </td>
                        </tr>

                        <tr>
                            <td>month-change</td>
                            <td>
                                <p>Emitted when the current month is changed. The handler is called with the date corresponding to the currently selected date, in the new month.</p>
                                <p>Listen for it using <code>@month-change</code>.</p>
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
                                <td><code>goToDate(date)</code></td>
                                <td>
                                    <p>Navigate the calendar to the month with the given date.</p>
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
import UiCalendar from 'src/UiCalendar.vue';
import UiCheckbox from 'src/UiCheckbox.vue';
import UiTab from 'src/UiTab.vue';
import UiTabs from 'src/UiTabs.vue';
import UiRadioGroup from 'src/UiRadioGroup.vue';

export default {
    data() {
        return {
            calendar1: null,
            color: 'default',
            hasSquareCells: false,
            raised: true
        };
    },

    components: {
        UiCalendar,
        UiCheckbox,
        UiTab,
        UiTabs,
        UiRadioGroup
    }
};
</script>

<style lang="scss">
@import '~styles/imports';

.page--ui-calendar {
    .ui-calendar {
        max-width: rem(360px);
        margin-bottom: rem(24px);
    }

    .ui-radio-group {
        margin-bottom: 8px;
    }
}
</style>
