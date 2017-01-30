<template>
    <section class="page page--ui-checckbox">
        <h2 class="page__title">UiCheckbox</h2>

        <p>UiCheckbox shows a checkbox. It supports keyboard focus, hover and disabled states. The position of the checkbox relative to the label can be changed.</p>

        <p>UiCheckbox supports two colors: <code>primary</code> and <code>accent</code>. It also allows for customizing the true and false values.</p>

        <p>To connect multiple checkboxes to a single array of values, use <a href="#/ui-checkbox-group">UiCheckboxGroup</a>.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/components/ui-checkbox/UiCheckboxDocs.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <h4 class="page__demo-title">Basic</h4>

            <div class="page__demo-group">
                <ui-checkbox v-model="check1">Do it now</ui-checkbox>
                <ui-checkbox v-model="check2">Do it well</ui-checkbox>

                <ui-checkbox v-model="check3" disabled>Can't change this</ui-checkbox>
                <ui-checkbox v-model="check4" disabled>Can't change this too</ui-checkbox>
            </div>

            <h4 class="page__demo-title">Color: accent</h4>

            <div class="page__demo-group">
                <ui-checkbox v-model="check1" color="accent">Do it now</ui-checkbox>
                <ui-checkbox v-model="check2" color="accent">Do it well</ui-checkbox>

                <ui-checkbox v-model="check3" color="accent" disabled>Can't change this</ui-checkbox>
                <ui-checkbox v-model="check4" color="accent" disabled>Can't change this too</ui-checkbox>
            </div>

            <h4 class="page__demo-title">Box position: right</h4>

            <div class="page__demo-group has-box-right">
                <ui-checkbox v-model="check1" box-position="right">Do it now</ui-checkbox>
                <ui-checkbox v-model="check2" box-position="right">Do it well</ui-checkbox>

                <ui-checkbox v-model="check3" box-position="right" disabled>Can't change this</ui-checkbox>
                <ui-checkbox v-model="check4" box-position="right" disabled>Can't change this too</ui-checkbox>
            </div>

            <h4 class="page__demo-title">HTML in Label</h4>

            <div class="page__demo-group">
                <ui-checkbox v-model="check5">Just <b><i>do</i></b> it!</ui-checkbox>
            </div>
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
                                <td>The <code>name</code> attribute of the checkbox input element.</td>
                            </tr>

                            <tr>
                                <td>label</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The checkbox label (text only). For HTML, use the <code>default</code> slot.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap">value, v-model *</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p>The model that the checkbox value syncs to.</p>
                                    <p>The <code>trueValue</code> prop will be written to this model when the checkbox is checked and the <code>falseValue</code> prop will be written to it when the checkbox is unchecked.</p>
                                    <p>If you are not using <code>v-model</code>, you should listen for the <code>input</code> event and update <code>value</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>checked</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>Whether or not the checkbox is checked by default.</td>
                            </tr>

                            <tr>
                                <td>trueValue</td>
                                <td></td>
                                <td><code>true</code></td>
                                <td>The value that will be written to the model when the checkbox is checked.</td>
                            </tr>

                            <tr>
                                <td>falseValue</td>
                                <td></td>
                                <td><code>false</code></td>
                                <td>The value that will be written to the model when the checkbox is unchecked.</td>
                            </tr>

                            <tr>
                                <td>submittedValue</td>
                                <td></td>
                                <td><code>"on"</code></td>
                                <td>The value that will be submitted for the checkbox when it is checked. Applied as the <code>value</code> attribute of the checkbox input element.</td>
                            </tr>

                            <tr>
                                <td>color</td>
                                <td>String</td>
                                <td><code>"primary"</code></td>
                                <td>The color of a selected checkbox. One of <code>primary</code> or <code>accent</code>.</td>
                            </tr>

                            <tr>
                                <td>boxPosition</td>
                                <td>String</td>
                                <td><code>"left"</code></td>
                                <td>The position of the checkbox relative to the label. One of <code>left</code> or <code>right</code>.</td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the checkbox is disabled.</p>
                                    <p>Set to <code>true</code> to disable the checkbox.</p>
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
                                <td>Holds the checkbox label and can contain HTML.</td>
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
                                    <p>Emitted when the checkbox is focused.</p>
                                    <p>Listen for it using <code>@focus</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>blur</td>
                                <td>
                                    <p>Emitted when the checkbox loses focus.</p>
                                    <p>Listen for it using <code>@blur</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>input</td>
                                <td>
                                    <p>Emitted when the checkbox value is changed. The handler is called with the new value.</p>
                                    <p>If you are not using <code>v-model</code>, you should listen for this event and update the <code>value</code> prop.</p>
                                    <p>Listen for it using <code>@input</code>.
                                </td>
                            </tr>

                            <tr>
                                <td>change</td>
                                <td>
                                    <p>Emitted when a change in the checkbox value is committed. The handler is called with the new value.</p>
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
import UiCheckbox from 'src/UiCheckbox.vue';
import UiTab from 'src/UiTab.vue';
import UiTabs from 'src/UiTabs.vue';

export default {
    data() {
        return {
            check1: true,
            check2: false,
            check3: true,
            check4: false,
            check5: true
        };
    },

    components: {
        UiCheckbox,
        UiTab,
        UiTabs
    }
};
</script>

<style lang="scss">
@import '~styles/imports';

.page--ui-checckbox {
    .page__demo-group {
        margin-bottom: rem-calc(32px);

        &.has-box-right {
            max-width: rem-calc(200px);
        }
    }
}
</style>
