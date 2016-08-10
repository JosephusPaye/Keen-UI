f<template>
    <section class="section section-ui-radio">
        <h2 class="section-heading">
            UiRadio <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiRadio.vue" target="_blank" class="view-source-link">View Source</a>
        </h2>

        <p>UiRadio shows a single radio button. A radio button can have an optional label. It supports hover, focus and disabled states. The label can also be shown to the left of the radio button.</p>

        <p>To show a group of mutually exclusive radio buttons, use <a href="#/ui-radio-group-docs">UiRadioGroup</a> or set a <code>value</code> on each radio and use a common <code>model</code> prop.</p>

        <h3>
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiRadioDocs.vue" target="_blank" class="view-source-link">View Source</a>
        </h3>

        <div class="demo">
            <h4>Default</h4>
            <ui-radio label="Select"></ui-radio>

            <h4>Label left</h4>
            <div class="max-width-200">
                <ui-radio label="Select, button on right" label-left></ui-radio>
            </div>

            <h4>Checked</h4>
            <ui-radio label="Select" checked></ui-radio>

            <h4>No Label</h4>
            <ui-radio hide-label></ui-radio>

            <h4>No Label, checked</h4>
            <ui-radio hide-label checked></ui-radio>

            <h4>Disabled</h4>
            <ui-radio label="Select" disabled></ui-radio>

            <h4>Disabled, checked</h4>
            <ui-radio label="Select" checked disabled></ui-radio>
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
import UiTab from '../../src/UiTab.vue';
import UiTabs from '../../src/UiTabs.vue';
import UiRadio from '../../src/UiRadio.vue';

export default {
    data() {
        return {
            radio1: false,
            radio2: true,
            radio3: false,
            radio4: false,
            radio5: true,
            radio6: false
        };
    },

    components: {
        UiTab,
        UiTabs,
        UiRadio
    }
};
</script>

<style lang="stylus">
.section-ui-radio {
    .max-width-200 {
        max-width: 200px;
    }
}
</style>
