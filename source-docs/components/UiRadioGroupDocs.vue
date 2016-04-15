<template>
    <section class="section section-ui-radio-group">
        <h2 class="section-heading">UiRadioGroup</h2>

        <p>UiRadioGroup shows a group of mutually exclusive radio buttons. It supports hover, focus and disabled states. One or more options in the group can be disabled or the entire group can be disabled.</p>

        <p>A radio group can have a label as well as help text and allows for resetting to the initial state.</p>

        <h3>Examples</h3>

        <div class="demo">
            <h4>Default</h4>

            <ui-radio-group
                :options="options.group1" label="Favourite Flanders" :value.sync="favourite.group1"
                name="favourite_1"
            ></ui-radio-group>

            <h4>With default selection</h4>

            <ui-radio-group
                :options="options.group1" label="Favourite Flanders" :value.sync="favourite.group2"
                name="favourite_2"
            ></ui-radio-group>

            <h4>With help text</h4>

            <ui-radio-group
                :options="options.group1" label="Favourite Flanders" :value.sync="favourite.group3"
                name="favourite_3" help-text="Choose your favourite neighbor-eeno"
            ></ui-radio-group>

            <h4>Vertical</h4>

            <ui-radio-group
                :options="options.group1" label="Favourite Flanders" :value.sync="favourite.group4"
                name="favourite_4" vertical
            ></ui-radio-group>

            <h4>Disabled</h4>

            <ui-radio-group
                :options="options.group1" label="Favourite Flanders" :value.sync="favourite.group5"
                name="favourite_5" disabled
            ></ui-radio-group>

            <h4>Individual option disabled</h4>

            <ui-radio-group
                :options="options.group2" label="Favourite Flanders" :value.sync="favourite.group6"
                name="favourite_6"
            ></ui-radio-group>

            <ui-button @click="reset">Reset Radio Buttons</ui-button>
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
                                <td>A unique identifier for the radio group. Applied as the <code>id</code> attribute of the radio group root element and used when targeting a specific radio group for reset.</td>
                            </tr>

                            <tr>
                                <td>name *</td>
                                <td>String</td>
                                <td>(required)</td>
                                <td></td>
                                <td>The name of the group. Applied as the <code>name</code> attribute on each <code>&lt;input&gt;</code> in the group.</td>
                            </tr>

                            <tr>
                                <td>value</td>
                                <td>String</td>
                                <td></td>
                                <td>Two-way</td>
                                <td>The model that the selected value in the radio group syncs to.</td>
                            </tr>

                            <tr>
                                <td>options *</td>
                                <td>Array</td>
                                <td>(required)</td>
                                <td></td>
                                <td>
                                    <p>An array of options to show to the user. The array can either be of strings or objects (but not both).</p>

                                    <p>For an array of objects, each Object should have <code>text</code> and <code>value</code> properties. The <code>text</code> is shown to the user and the <code>value</code> is written to the model when the user makes a selection. You can also set <code>disabled: true</code> on an option to disable that option.</p>

                                    <p>For an array of strings, each String is used as both the label and the value.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>label</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>The radio group label (text only).</td>
                            </tr>

                            <tr>
                                <td>hideLabel</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>Determines whether or not the radio group label is hidden. Set to <code>true</code> to hide the label.</td>
                            </tr>

                            <tr>
                                <td>helpText</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p>The help text (hint) shown to the user below the radio group.</p>

                                    <p>Extra space is reserved under the input for the help text, but if no help text is available, this space is collapsed.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>vertical</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>Determines whether or not the radio group is rendered vertically. Set to <code>true</code> for a vertical radio group.</td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>Determines whether or not the radio group is disabled. Set to <code>true</code> to disable the radio group.</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                * Required prop
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
                                    <p>Trigger this event to reset the radio group to its initial state. This event resets the <code>value</code> prop.</p>

                                    <p>You can optionally pass in an <code>id</code> to reset only a specific radio group (whose <code>id</code> you have set).</p>
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
import UiTab from '../../source/UiTab.vue';
import UiTabs from '../../source/UiTabs.vue';
import UiButton from '../../source/UiButton.vue';
import UiRadioGroup from '../../source/UiRadioGroup.vue';

let group1 = [
    {
        value: 'ned',
        text: 'Ned'
    }, {
        value: 'rod',
        text: 'Rod'
    }, {
        value: 'todd',
        text: 'Todd'
    }
];

let group2 = [
    {
        value: 'ned',
        text: 'Ned'
    }, {
        value: 'maude',
        text: 'Maude',
        disabled: true
    }, {
        value: 'rod',
        text: 'Rod'
    }, {
        value: 'todd',
        text: 'Todd'
    }
];

export default {
    data() {
        return {
            favourite: {
                group1: '',
                group2: 'rod',
                group3: 'todd',
                group4: 'ned',
                group5: 'ned',
                group6: 'ned'
            },
            options: {
                group1,
                group2
            }
        };
    },

    methods: {
        reset() {
            this.$broadcast('ui-input::reset');
        }
    },

    components: {
        UiTab,
        UiTabs,
        UiButton,
        UiRadioGroup
    }
};
</script>

<style lang="stylus">
.section-ui-radio-group {
    .ui-button {
        margin-top: 24px;
    }
}
</style>
