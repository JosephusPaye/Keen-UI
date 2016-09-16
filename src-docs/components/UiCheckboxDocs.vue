<template>
    <section class="section section-ui-checkbox">
        <h2 class="section-heading">
            UiCheckbox <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiCheckbox.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h2>

        <p>UiCheckbox is a checkbox component that allows the user to select one or more options. It supports keyboard focus, a disabled state and showing the label to the left of the checkbox.</p>

        <p>It also allows for connecting multiple checkboxes to the same model, to form an array.</p>

        <h3>
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiCheckboxDocs.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h3>

        <div class="demo">
            <h4>Default</h4>

            <div class="group">
                <ui-checkbox name="do_it_now" v-model="firstValues.one">Do it now</ui-checkbox>
                <ui-checkbox name="do_it_well" v-model="firstValues.two">Do it well</ui-checkbox>
                <ui-checkbox name="look_cool" v-model="firstValues.three">Look cool while at it</ui-checkbox>

                <ui-checkbox
                    name="try_checking" :disabled="true" v-model="firstValues.four"
                >Can't change this</ui-checkbox>

                <ui-checkbox
                    name="try_checking_another" :disabled="true" v-model="firstValues.five"
                >Can't change this too</ui-checkbox>
            </div>

            <h4>Label Left</h4>

            <div class="group label-left">
                <ui-checkbox
                    name="do_it_now" v-model="secondValues.one" label-left
                >Do it now</ui-checkbox>

                <ui-checkbox
                    name="do_it_well" v-model="secondValues.two" label-left
                >Do it well</ui-checkbox>

                <ui-checkbox
                    name="look_cool" v-model="secondValues.three" label-left
                >Look cool while at it</ui-checkbox>

                <ui-checkbox
                    name="try_checking" :disabled="true" v-model="secondValues.four" label-left
                >Can't change this</ui-checkbox>

                <ui-checkbox
                    name="try_checking_another" :disabled="true" v-model="secondValues.five" label-left
                >Can't change this too</ui-checkbox>
            </div>

            <h4>HTML in Label</h4>

            <div class="group">
                <ui-checkbox
                    name="look_cool" v-model="htmlValue"
                >Just <b><i>do</i></b> it!</ui-checkbox>
            </div>

            <h4>Multiple checkboxes connected to a single model</h4>

            <div class="group">
                <ui-checkbox
                    name="favourite-simpsons" v-model="favouriteSimpsons" payload="Maggie"
                >Maggie</ui-checkbox>

                <ui-checkbox
                    name="favourite-simpsons" v-model="favouriteSimpsons" payload="Lisa"
                >Lisa</ui-checkbox>

                <ui-checkbox
                    name="favourite-simpsons" v-model="favouriteSimpsons" payload="Bart"
                >Bart</ui-checkbox>

                <ui-checkbox
                    name="favourite-simpsons" v-model="favouriteSimpsons" payload="Marge"
                >Marge</ui-checkbox>

                <ui-checkbox
                    name="favourite-simpsons" v-model="favouriteSimpsons" payload="Homer"
                >Homer</ui-checkbox>
            </div>

            <pre><code v-text="`[${favouriteSimpsons.toString()}]`"></code></pre>

            <ui-button @click.native="resetCheckboxes">Reset checkboxes</ui-button>
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
                                    <p>A unique identifier for the checkbox.</p>
                                    <p>Applied as the <code>id</code> attribute of the checkbox input and used when targeting a specific checkbox for reset.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>name</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>The checkbox input element <code>name</code> attribute.</td>
                            </tr>

                            <tr>
                                <td>{{`model(value) *`}}</td>
                                <td>Boolean or Array</td>
                                <td>(required)</td>
                                <td></td>
                                <td>
                                    <p>The v-model that the checkbox value syncs to.</p>
                                    <p>Will be an array if the <code>value</code> prop is provided, otherwise a boolean.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>payload</td>
                                <td>String or Others</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p>The checkbox input <code>value</code> attribute. Use this for connecting a group of checkboxes to a single model.</p>
                                    <p>In this case the v-model need to be an Array</p>
                                    <p>See <b>Multiple checkboxes connected to a single model</b> above for an example.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>label</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>The checkbox label (text only). To use HTML in the label, use the default slot.</td>
                            </tr>

                            <tr>
                                <td>hideLabel</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the checkbox label is hidden.</p>
                                    <p>Set to <code>true</code> to hide the label.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>labelLeft</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the label is shown to the left of the checkbox (instead of to the right).</p>
                                    <p>Set to <code>true</code> to show the label on the left.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the checkbox is disabled.</p>
                                    <p>Set to <code>true</code> to disable the checkbox.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                * Required prop
            </ui-tab>

            <ui-tab header="Slots">
                <div class="table-responsive">

                    <table class="table">
                        <thead>
                            <th>Name</th>
                            <th>Description</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>(default)</td>
                                <td>The default slot holds the checkbox label and can contain HTML.</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </ui-tab>

            <ui-tab header="Events">
                <div class="table-responsive">

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
                                    <p>Trigger this event to reset the checkbox to its initial state. This event resets the <code>model</code> prop.</p>

                                    <p>You can optionally pass in an <code>id</code> to reset only a specific checkbox (whose <code>id</code> you have set).</p>
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
import UiTab from '../../src/UiTab.vue'
import UiTabs from '../../src/UiTabs.vue'
import UiButton from '../../src/UiButton.vue'
import UiCheckbox from '../../src/UiCheckbox.vue'
import EventBus from '../../src/helpers/event-bus'

export default {
    data() {
        return {
            favouriteSimpsons: [],
            htmlValue: false,
            firstValues: {
                one: true,
                two: false,
                three: true,
                four: true,
                five: false,
                six: true
            },
            secondValues: {
                one: true,
                two: false,
                three: true,
                four: true,
                five: false,
                six: true
            },
            thirdValues: {
                one: true,
                two: false,
                three: true,
                four: true,
                five: false,
                six: true
            },
        };
    },

    components: {
        UiTab,
        UiTabs,
        UiButton,
        UiCheckbox
    },

    methods: {
        resetCheckboxes() {
            EventBus.$emit('ui-input::reset')
        }
    }
};
</script>

<style lang="stylus">
.section-ui-checkbox {
    .group {
        margin-bottom: 32px;

        &.label-left {
            max-width: 200px;
        }
    }

    .ui-button {
        margin-top: 24px;
    }
}
</style>
