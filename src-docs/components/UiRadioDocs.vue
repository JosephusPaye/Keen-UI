f<template>
    <section class="section section-ui-radio">
        <h2 class="section-heading">
            UiRadio <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiRadio.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h2>

        <p>UiRadio shows a single radio button. A radio button can have an optional label. It supports hover, focus and disabled states. The label can also be shown to the left of the radio button.</p>

        <p>To show a group of mutually exclusive radio buttons, use <a href="#/ui-radio-group-docs">UiRadioGroup</a> or set a <code>value</code> on each radio and use a common <code>model</code> prop.</p>

        <h3>
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiRadioDocs.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h3>

        <div class="demo">
            <h3>Option Style</h3>
            <h4>Default style</h4>
            <ui-radio name="single_1" v-model="single1" :options="options.single1"></ui-radio>
            <p v-text="`model: ${single1}`"></p>

            <h4>Label left</h4>
            <ui-radio
                name="single_2" v-model="single2" :options="options.single2"
                labelLeft
            ></ui-radio>
            <p v-text="`model: ${single2}`"></p>

            <h4>Checked</h4>
            <ui-radio
                name="single_3" v-model="single3" :options="options.single3"
            ></ui-radio>

            <h4>No label</h4>
            <ui-radio
                name="single_4" v-model="single4" :options="options.single4"
            ></ui-radio>

            <h3>Radio Group</h3>
            <h4>Default</h4>
            <ui-radio name="favourite_1" v-model="favourite.group1" :options="options.group1"
                label="Favourite Flanders"
            ></ui-radio>
            <p v-text="`model: ${favourite.group1}`"></p>

            <h4>With default selection</h4>
            <ui-radio name="favourite_2" v-model="favourite.group2" :options="options.group1"
                label="Favourite Flanders"
            ></ui-radio>
            <p v-text="`model: ${favourite.group2}`"></p>

            <h4>With help text</h4>
            <ui-radio name="favourite_3" v-model="favourite.group3" :options="options.group1"
                label="Favourite Flanders" help-text="Choose your favourite neighbor-eeno"
            ></ui-radio>

            <h4>Vertical</h4>
            <ui-radio name="favourite_4" v-model="favourite.group4" :options="options.group1"
                label="Favourite Flanders" vertical
            ></ui-radio>

            <h4>Individual option disabled</h4>
            <ui-radio name="favourite_5" v-model="favourite.group5" :options="options.group2"
                label="Favourite Flanders"
            ></ui-radio>

            <h4>Group disabled</h4>
            <ui-radio name="favourite_6" v-model="favourite.group6" :options="options.group2"
                label="Favourite Flanders" disabled
            ></ui-radio>

            <ui-button @click.native="reset">Reset Radio Buttons</ui-button>
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
                                    <p>A unique identifier for the radio button.</p>
                                    <p>Applied as the <code>id</code> attribute of the radio <code>&lt;input&gt;</code> element.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>model</td>
                                <td>String</td>
                                <td></td>
                                <td>Two-way</td>
                                <td>
                                    <p>The model the radio value syncs to.</p>

                                    <p>Applied as the radio's <code>value</code> prop or the String <code>"on"</code> when the radio is selected.</p>

                                    <p>When the radio is not selected, the model will be the String <code>"off"</code> or an empty string (if it's not shared between multiple radio buttons).</p>
                                </td>
                            </tr>

                            <tr>
                                <td>checked</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the radio is checked by default.</p>
                                    <p>Set to <code>true</code> for a default checked state.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>name</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>The <code>name</code> attribute of the radio <code>&lt;input&gt;</code> element.</td>
                            </tr>

                            <tr>
                                <td>value</td>
                                <td>String</td>
                                <td></td>
                                <td>Two-way</td>
                                <td>The <code>value</code> attribute of the radio <code>&lt;input&gt;</code> element.</td>
                            </tr>

                            <tr>
                                <td>labelLeft</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the label is shown to the left of the radio button.</p>
                                    <p>Set to <code>true</code> to show the label on the left.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>label</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p>The radio button label (text only).</p>
                                    <p>To use HTML in the label, use the default slot.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>hideLabel</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the radio button label is hidden.</p>
                                    <p>Set to <code>true</code> to hide the label.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the radio button is disabled.</p>
                                    <p>Set to <code>true</code> to disable the radio.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
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
                                <td>The default slot holds the radio button label and can contain HTML.</td>
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
                                <td>focussed</td>
                                <td>Dispatched</td>
                                <td>
                                    <p>Dispatched when the radio button is focussed.</p>
                                    <p>Listen for it using <code>@focussed</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>blurred</td>
                                <td>Dispatched</td>
                                <td>
                                    <p>Dispatched when the radio button loses focus.</p>
                                    <p>Listen for it using <code>@blurred</code>.</p>
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
import EventBus from '../../src/helpers/event-bus'
import UiRadio from '../../src/UiRadio.vue'

let single1 = ['Default']
let single2 = ['Label-left']
let single3 = ['Checked']
let single4 = [{value: 'No-Label', hideLabel: true}]

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
]

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
]

export default {
    data() {
        return {
            single1: '',
            single2: '',
            single3: 'Checked',
            single4: '',
            favourite: {
                group1: '',
                group2: 'rod',
                group3: 'todd',
                group4: 'ned',
                group5: 'ned',
                group6: 'ned'
            },
            options: {
                single1,
                single2,
                single3,
                single4,
                group1,
                group2
            }
        }
    },

    components: {
        UiTab,
        UiTabs,
        UiRadio,
        UiButton
    },

    methods: {
        reset() {
            EventBus.$emit('ui-input::reset')
        }
    }
}
</script>

<style lang="stylus">
.ui-button {
    margin-top: 24px;
}
</style>
