<template>
    <section class="section section-ui-switch">
        <h2 class="section-heading">
            UiSwitch <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiSwitch.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h2>

        <p>A switch component that allows the user to toggle between two values like on and off. Supports keyboard focus, a disabled state and showing the label to the left of the switch.</p>

        <h3>
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiSwitchDocs.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h3>

        <div class="demo">
            <h4>Default</h4>

            <div class="group">
                <ui-switch name="do_it_now" v-model="values.value1">Do it now</ui-switch>
                <ui-switch name="do_it_well" v-model="values.value2">Do it well</ui-switch>
                <ui-switch name="look_cool" v-model="values.value3">Look cool while at it</ui-switch>

                <ui-switch
                    name="try_checking" disabled v-model="values.value4"
                >Can't change this</ui-switch>

                <ui-switch
                    name="try_checking_another" disabled v-model="values.value5"
                >Can't change this too</ui-switch>
            </div>

            <h4>Label Left</h4>

            <div class="group label-left">
                <ui-switch
                    name="do_it_now" v-model="values.value6" label-left
                >Do it now</ui-switch>

                <ui-switch
                    name="do_it_well" v-model="values.value7" label-left
                >Do it well</ui-switch>

                <ui-switch
                    name="look_cool" v-model="values.value8" label-left
                >Look cool while at it</ui-switch>

                <ui-switch
                    name="try_checking" disabled v-model="values.value9" label-left
                >Can't change this</ui-switch>

                <ui-switch
                    name="try_checking_another" disabled v-model="values.value10" label-left
                >Can't change this too</ui-switch>
            </div>

            <h4>HTML in Label</h4>

            <div class="group">
                <ui-switch
                    name="look_cool" v-model="values.value11"
                >Just <b><i>do</i></b> it!</ui-switch>
            </div>

            <ui-button @click.native="resetSwitches">Reset switches</ui-button>
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
                                    <p>A unique identifier for the switch.</p>
                                    <p>Applied as the <code>id</code> attribute of the switch input and used when targeting a specific switch for reset.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>name</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>The switch input <code>name</code> attribute.</td>
                            </tr>

                            <tr>
                                <td>value *</td>
                                <td>Boolean</td>
                                <td>(required)</td>
                                <td>Two way</td>
                                <td>The model that the switch value syncs to.</td>
                            </tr>

                            <tr>
                                <td>label</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p>The switch label (text only).</p>
                                    <p>To use HTML in the label, use the default slot.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>hideLabel</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the switch label is hidden.</p>
                                    <p>Set to <code>true</code> to hide the label.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>labelLeft</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the label is shown to the left of the switch.</p>
                                    <p>Set to <code>true</code> to show the label on the left.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the switch is disabled.</p>
                                    <p>Set to <code>true</code> to disable the switch.</p>
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
                                <td>The default slot holds the switch label and can contain HTML.</td>
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
                                    <p>Trigger this event to reset the switch to its initial state. This event resets the <code>value</code> prop.</p>
                                    <p>You can optionally pass in an <code>id</code> to reset only a specific switch (whose <code>id</code> you have set).</p>
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
import UiSwitch from '../../src/UiSwitch.vue'
import EventBus from '../../src/helpers/event-bus'

let values = {
    value1: true,
    value2: false,
    value3: true,
    value4: false,
    value5: false,
    value6: true,
    value7: false,
    value8: true,
    value9: false,
    value10: false,
    value11: true
}

export default {
    data() {
        return {
            values
        }
    },
    components: {
        UiTab,
        UiTabs,
        UiButton,
        UiSwitch
    },

    methods: {
        resetSwitches() {
            EventBus.$emit('ui-input::reset');
        }
    }
};
</script>

<style lang="stylus">
.section-ui-switch {
    .ui-switch {
        margin-bottom: 8px;
    }

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
