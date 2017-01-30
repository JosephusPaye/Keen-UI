f<template>
    <section class="page page--ui-radio">
        <h2 class="page__title">UiRadio</h2>

        <p>UiRadio shows a single radio button. The radio button can have a label. It supports hover and disabled states. The position of the radio button relative to the label can be changed.</p>

        <p>UiRadio supports two colors: <code>primary</code> and <code>accent</code>.</p>

        <p>To show a group of mutually exclusive radio buttons, use <a href="#/ui-radio-group">UiRadioGroup</a> or use multiple UiRadios with a shared <code>v-model</code>/<code>value</code> and <code>name</code> prop.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiRadio.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <h4 class="page__demo-title">Basic</h4>
            <ui-radio v-model="radio1" true-value="radio1-value">Select</ui-radio>

            <h4 class="page__demo-title">Checked</h4>
            <ui-radio v-model="radio2" true-value="radio2-value" checked>Select</ui-radio>

            <h4 class="page__demo-title">Color: accent</h4>
            <ui-radio v-model="radio3" color="accent" true-value="radio3-value">Select</ui-radio>

            <h4 class="page__demo-title">Color: accent, checked</h4>
            <ui-radio v-model="radio4" color="accent" true-value="radio4-value" checked>Select</ui-radio>

            <h4 class="page__demo-title">Button position: right</h4>
            <div class="page__demo-group has-button-right">
                <ui-radio v-model="radio5" button-position="right" true-value="radio5-value">Select</ui-radio>
            </div>

            <h4 class="page__demo-title">No Label</h4>
            <ui-radio v-model="radio6" true-value="radio6-value"></ui-radio>

            <h4 class="page__demo-title">No Label, checked</h4>
            <ui-radio v-model="radio7" true-value="radio7-value" checked></ui-radio>

            <h4 class="page__demo-title">Disabled</h4>
            <ui-radio v-model="radio8" true-value="radio8-value" disabled>Select</ui-radio>

            <h4 class="page__demo-title">Disabled, checked</h4>
            <ui-radio v-model="radio9" true-value="radio9-value" checked disabled>Select</ui-radio>
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
                                <td>The <code>name</code> attribute of the radio input element.</td>
                            </tr>

                            <tr>
                                <td>label</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The radio label (text only). For HTML, use the <code>default</code> slot.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap">value, v-model *</td>
                                <td>Number, String</td>
                                <td>Required</td>
                                <td>
                                    <p>The model the radio value syncs to.</p>
                                    <p>If you are not using <code>v-model</code>, you should listen for the <code>input</code> event and update <code>value</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>trueValue *</td>
                                <td>Number, String</td>
                                <td>Required</td>
                                <td>The value that is written to the model when the radio is selected.</td>
                            </tr>

                            <tr>
                                <td>checked</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>Whether or not the radio is selected by default.</td>
                            </tr>

                            <tr>
                                <td>color</td>
                                <td>String</td>
                                <td><code>"primary"</code></td>
                                <td>The color of a selected radio button. One of <code>primary</code> or <code>accent</code>.</td>
                            </tr>

                            <tr>
                                <td>buttonPosition</td>
                                <td>String</td>
                                <td><code>"left"</code></td>
                                <td>The position of the radio button relative to the label. One of <code>left</code> or <code>right</code>.</td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the radio button is disabled.</p>
                                    <p>Set to <code>true</code> to disable the radio.</p>
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
                                <td>Holds the radio button label and can contain HTML.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ui-tab>

            <ui-tab title="Events">
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
                                <td>focus</td>
                                <td>
                                    <p>Emitted when the radio button is focused.</p>
                                    <p>Listen for it using <code>@focus</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>blur</td>
                                <td>
                                    <p>Emitted when the radio button loses focus.</p>
                                    <p>Listen for it using <code>@blur</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>input</td>
                                <td>
                                    <p>Emitted when the radio value is changed. The handler is called with the new value.</p>
                                    <p>If you are not using <code>v-model</code>, you should listen for this event and update the <code>value</code> prop.</p>
                                    <p>Listen for it using <code>@input</code>.
                                </td>
                            </tr>

                            <tr>
                                <td>change</td>
                                <td>
                                    <p>Emitted when the radio value changes. The handler is called with the new value.</p>
                                    <p>See the <a href="https://developer.mozilla.org/en-US/docs/Web/Events/change" target="_blank" rel="noopener">onchange event documentation</a> for more information.</p>
                                    <p>Listen for it using <code>@change</code>.
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
import UiRadio from 'src/UiRadio.vue';
import UiTab from 'src/UiTab.vue';
import UiTabs from 'src/UiTabs.vue';

export default {
    data() {
        return {
            radio1: '',
            radio2: '',
            radio3: '',
            radio4: '',
            radio5: '',
            radio6: '',
            radio7: '',
            radio8: '',
            radio9: ''
        };
    },

    components: {
        UiRadio,
        UiTab,
        UiTabs
    }
};
</script>

<style lang="scss">
@import '~styles/imports';

.page--ui-radio {
    .page__demo-group.has-button-right {
        max-width: rem-calc(200px);
    }
}
</style>
