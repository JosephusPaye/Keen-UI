<template>
    <section class="section section-ui-slider">
        <h2 class="section-heading">UiSlider</h2>

        <p>UiSlider is a component that allows the user to select a value from a continuous range of values by moving the slider thumb, clicking on the slider, or using the arrow keys.</p>

        <p>UiSlider allows for adding a label and an icon. The slider is keyboard accessible and can be disabled.</p>

        <h3>Examples</h3>

        <div class="demo">
            <h4>Default</h4>
            <ui-slider :value.sync="0"></ui-slider>

            <h4>With label</h4>
            <ui-slider :value.sync="25" label="Adjust volume"></ui-slider>

            <h4>With icon</h4>
            <ui-slider :value.sync="50" icon="volume_up"></ui-slider>

            <h4>With label and icon</h4>
            <ui-slider :value.sync="75" label="Adjust volume" icon="volume_up"></ui-slider>

            <h4>Default with icon, disabled</h4>
            <ui-slider :value.sync="50" icon="volume_up" disabled></ui-slider>

            <ui-button @click="resetSliders">Reset sliders</ui-button>
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
                                <td>A unique identifier for the slider. Applied as the <code>id</code> attribute on the root element and used when targeting a specific slider for reset.</td>
                            </tr>

                            <tr>
                                <td>name</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>The slider's hidden input <code>name</code> attribute.</td>
                            </tr>

                            <tr>
                                <td>value *</td>
                                <td>Boolean</td>
                                <td>(required)</td>
                                <td>Two way</td>
                                <td>The model that the slider value syncs to.</td>
                            </tr>

                            <tr>
                                <td>step</td>
                                <td>Number</td>
                                <td><code>5</code></td>
                                <td></td>
                                <td>The amount to increment or decrement the slider value by when using the arrow keys.</td>
                            </tr>

                            <tr>
                                <td>icon</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>The slider icon. Can be any of the <a href="https://design.google.com/icons/" target="_blank">Material Icons</a>. Note that this should be the icon codepoint if you want to support IE9.</td>
                            </tr>

                            <tr>
                                <td>label</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>The slider label (text only).</td>
                            </tr>

                            <tr>
                                <td>hideLabel</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>Determines whether or not the slider label is hidden. Set to <code>true</code> to hide the label.</td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>Determines whether or not the slider is disabled. Set to <code>true</code> to disable the slider.</td>
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
                                    <p>Trigger this event to reset the slider to its initial state. This event resets the <code>value</code> prop.</p>

                                    <p>You can optionally pass in an <code>id</code> to reset only a specific slider (whose <code>id</code> you have set).</p>
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
import UiSlider from '../../src/UiSlider.vue';

export default {
    components: {
        UiTab,
        UiTabs,
        UiButton,
        UiSlider
    },

    methods: {
        resetSliders() {
            this.$broadcast('ui-input::reset');
        }
    }
};
</script>

<style lang="stylus">
.section-ui-slider {
    .demo {
        max-width: 500px;
    }

    .ui-slider {
        margin-bottom: 8px;
    }

    .ui-button {
        margin-top: 24px;
    }
}
</style>
