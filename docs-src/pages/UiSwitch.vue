<template>
    <section class="page page--ui-switch">
        <h2 class="page__title">UiSwitch</h2>

        <p>UiSwitch shows a switch that allows the user to toggle between two states. It supports keyboard focus and a disabled state.

        <p>The position of the switch relative to the label can be customized.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiSwitch.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <h4 class="page__demo-title">Basic</h4>

            <div class="page__demo-group">
                <ui-switch v-model="switch1">Bluetooth</ui-switch>
                <ui-switch v-model="switch2">WiFi</ui-switch>
                <ui-switch v-model="switch3">Location</ui-switch>
                <ui-switch v-model="switch4" disabled>Can't change this</ui-switch>
                <ui-switch v-model="switch5" disabled>Can't change this too</ui-switch>
            </div>

            <h4 class="page__demo-title">Color: accent</h4>

            <div class="page__demo-group">
                <ui-switch v-model="switch1" color="accent">Bluetooth</ui-switch>
                <ui-switch v-model="switch2" color="accent">WiFi</ui-switch>
                <ui-switch v-model="switch3" color="accent">Location</ui-switch>
                <ui-switch v-model="switch4" color="accent" disabled>Can't change this</ui-switch>
                <ui-switch v-model="switch5" color="accent" disabled>Can't change this too</ui-switch>
            </div>

            <h4 class="page__demo-title">Switch position: right</h4>

            <div class="page__demo-group has-switch-right">
                <ui-switch v-model="switch1" switch-position="right">Bluetooth</ui-switch>
                <ui-switch v-model="switch2" switch-position="right">WiFi</ui-switch>
                <ui-switch v-model="switch3" switch-position="right">Location</ui-switch>
                <ui-switch v-model="switch4" switch-position="right" disabled>Can't change this</ui-switch>
                <ui-switch v-model="switch5" switch-position="right" disabled>Can't change this too</ui-switch>
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
                                <td>The <code>name</code> attribute of the switch input element.</td>
                            </tr>

                            <tr>
                                <td>label</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The switch label (text only). For HTML, use the <code>default</code> slot.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap">value, v-model *</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p>The model that the switch value syncs to.</p>
                                    <p>The <code>trueValue</code> prop will be written to this model when the switch is turned on and the <code>falseValue</code> prop will be written to it when the switch is turned off.</p>
                                    <p>If you are not using <code>v-model</code>, you should listen for the <code>input</code> event and update <code>value</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>checked</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>Whether or not the switch is on by default.</td>
                            </tr>

                            <tr>
                                <td>trueValue</td>
                                <td></td>
                                <td><code>true</code></td>
                                <td>The value that will be written to the model when the switch is turned on.</td>
                            </tr>

                            <tr>
                                <td>falseValue</td>
                                <td></td>
                                <td><code>false</code></td>
                                <td>The value that will be written to the model when the switch is turned off.</td>
                            </tr>

                            <tr>
                                <td>submittedValue</td>
                                <td></td>
                                <td><code>"on"</code></td>
                                <td>The value that will be submitted for the switch when it is turned on. Applied as the <code>value</code> attribute of the switch's input element.</td>
                            </tr>

                            <tr>
                                <td>color</td>
                                <td>String</td>
                                <td><code>"primary"</code></td>
                                <td>The color of the switch when turned on. One of <code>primary</code> or <code>accent</code>.</td>
                            </tr>

                            <tr>
                                <td>switchPosition</td>
                                <td>String</td>
                                <td><code>"left"</code></td>
                                <td>
                                    <p>The position of the switch relative to the label.</p>
                                    <p>One of <code>left</code> or <code>right</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the switch is disabled.</p>
                                    <p>Set to <code>true</code> to disable the switch.</p>
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
                                <td>Holds the switch label and can contain HTML.</td>
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
                                    <p>Emitted when the switch is focused.</p>
                                    <p>Listen for it using <code>@focus</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>blur</td>
                                <td>
                                    <p>Emitted when the switch loses focus.</p>
                                    <p>Listen for it using <code>@blur</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>input</td>
                                <td>
                                    <p>Emitted when the switch value is changed. The handler is called with the new value.</p>
                                    <p>If you are not using <code>v-model</code>, you should listen for this event and update the <code>value</code> prop.</p>
                                    <p>Listen for it using <code>@input</code>.
                                </td>
                            </tr>

                            <tr>
                                <td>change</td>
                                <td>
                                    <p>Emitted when the value of the switch is changed. The handler is called with the new value.</p>
                                    <p>Listen for it using <code>@change</code>.</p>
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
import UiSwitch from 'src/UiSwitch.vue';
import UiTab from 'src/UiTab.vue';
import UiTabs from 'src/UiTabs.vue';

export default {
    data() {
        return {
            switch1: true,
            switch2: false,
            switch3: true,
            switch4: false,
            switch5: true
        };
    },

    components: {
        UiSwitch,
        UiTab,
        UiTabs
    }
};
</script>

<style lang="scss">
@import '~styles/imports';

.page--ui-switch {
    .ui-switch {
        margin-bottom: rem-calc(8px);
    }

    .page__demo-group {
        margin-bottom: rem-calc(32px);

        &.has-switch-right {
            max-width: rem-calc(208px);
        }
    }
}
</style>
