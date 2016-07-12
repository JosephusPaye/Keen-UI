<template>
    <section class="section section-ui-checkbox">
        <h2 class="section-heading">UiCheckbox</h2>

        <p>A checkbox component that allows the user to select one or more options. Supports keyboard focus, a disabled state and showing the label to the left of the checkbox.</p>

        <h3>Examples</h3>

        <div class="demo">
            <h4>Default</h4>

            <div class="group">
                <ui-checkbox name="do_it_now" :model.sync="true">Do it now</ui-checkbox>
                <ui-checkbox name="do_it_well" :model.sync="false">Do it well</ui-checkbox>
                <ui-checkbox name="look_cool" :model.sync="true">Look cool while at it</ui-checkbox>

                <ui-checkbox
                    name="try_checking" :disabled="true" :model.sync="true"
                >Can't change this</ui-checkbox>

                <ui-checkbox
                    name="try_checking_another" :disabled="true" :model.sync="false"
                >Can't change this too</ui-checkbox>
            </div>

            <h4>Label Left</h4>

            <div class="group label-left">
                <ui-checkbox
                    name="do_it_now" :model.sync="true" label-left
                >Do it now</ui-checkbox>

                <ui-checkbox
                    name="do_it_well" :model.sync="false" label-left
                >Do it well</ui-checkbox>

                <ui-checkbox
                    name="look_cool" :model.sync="true" label-left
                >Look cool while at it</ui-checkbox>

                <ui-checkbox
                    name="try_checking" :disabled="true" :model.sync="true" label-left
                >Can't change this</ui-checkbox>

                <ui-checkbox
                    name="try_checking_another" :disabled="true" :model.sync="false" label-left
                >Can't change this too</ui-checkbox>
            </div>

            <h4>HTML in Label</h4>

            <div class="group">
                <ui-checkbox
                    name="look_cool" :model.sync="true"
                >Just <b><i>do</i></b> it!</ui-checkbox>
            </div>

            <h4>Multiple checkboxes connected to a single array</h4>

            <div class="group">
                <ui-checkbox
                    name="favourite-simpsons" :model.sync="favouriteSimpsons" value="Maggie"
                >Maggie</ui-checkbox>

                <ui-checkbox
                    name="favourite-simpsons" :model.sync="favouriteSimpsons" value="Lisa"
                >Lisa</ui-checkbox>

                <ui-checkbox
                    name="favourite-simpsons" :model.sync="favouriteSimpsons" value="Bart"
                >Bart</ui-checkbox>

                <ui-checkbox
                    name="favourite-simpsons" :model.sync="favouriteSimpsons" value="Marge"
                >Marge</ui-checkbox>

                <ui-checkbox
                    name="favourite-simpsons" :model.sync="favouriteSimpsons" value="Homer"
                >Homer</ui-checkbox>
            </div>

            <pre><code v-text="favouriteSimpsons | json"></code></pre>

            <ui-button @click="resetCheckboxes">Reset checkboxes</ui-button>
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
                                <td>A unique identifier for the checkbox. Applied as the <code>id</code> attribute of the checkbox input and used when targeting a specific checkbox for reset.</td>
                            </tr>

                            <tr>
                                <td>name</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>The checkbox input <code>name</code> attribute.</td>
                            </tr>

                            <tr>
                                <td>model *</td>
                                <td>Boolean or Array</td>
                                <td>(required)</td>
                                <td>Two way</td>
                                <td>The model that the checkbox value syncs to. Is an array if the `value` prop is provided, otherwise a boolean.</td>
                            </tr>

                            <tr>
                                <td>value</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>The checkbox input <code>value</code> attribute. Use this for connecting a group of checkboxes to a single model.</td>
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
                                <td>Determines whether or not the checkbox label is hidden. Set to <code>true</code> to hide the label.</td>
                            </tr>

                            <tr>
                                <td>labelLeft</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>Whether or not the label is shown to the left of the checkbox. Set to <code>true</code> to show the label on the left.</td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>Determines whether or not the checkbox is disabled. Set to <code>true</code> to disable the checkbox.</td>
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
import UiTab from '../../src/UiTab.vue';
import UiTabs from '../../src/UiTabs.vue';
import UiButton from '../../src/UiButton.vue';
import UiCheckbox from '../../src/UiCheckbox.vue';

export default {
    data() {
        return {
            favouriteSimpsons: []
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
            this.$broadcast('ui-input::reset');
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
