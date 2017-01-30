<template>
    <section class="page page--ui-slider">
        <h2 class="page__title">UiSlider</h2>

        <p>UiSlider allows the user to select a value from a continuous range of values by moving the slider thumb, clicking on the slider, or using the keyboard arrow keys.</p>

        <p>UiSlider supports an icon and a disabled state. The slider is keyboard accessible.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiSlider.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <h4 class="page__demo-title">Basic</h4>
            <ui-slider v-model="slider1"></ui-slider>

            <h4 class="page__demo-title">With icon</h4>
            <ui-slider icon="volume_up" v-model="slider2"></ui-slider>

            <h4 class="page__demo-title">With marker</h4>
            <ui-slider icon="volume_up" show-marker v-model="slider3"></ui-slider>

            <h4 class="page__demo-title">Snap to steps: 20</h4>

            <ui-slider
                icon="volume_up"
                show-marker
                snap-to-steps

                :step="20"

                v-model="slider4"
            ></ui-slider>

            <h4 class="page__demo-title">Disabled</h4>
            <ui-slider icon="volume_up" v-model="slider5" disabled></ui-slider>

            <ui-button @click="resetSliders">Reset Sliders</ui-button>
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
                                <td>
                                    <p>The <code>name</code> attribute of the slider's hidden input element. Useful when traditionally submitting a form the slider is a part of.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap">value, v-model *</td>
                                <td>Number</td>
                                <td>(required)</td>
                                <td>
                                    <p>The model that the slider value syncs to. Changing this value will update the slider.</p>
                                    <p>If you are not using <code>v-model</code>, you should listen for the <code>input</code> event and update <code>value</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>icon</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The slider icon. Can be any of the <a href="https://design.google.com/icons/" target="_blank" rel="noopener">Material Icons</a>.</p>
                                    <p>You can also use the <code>icon</code> slot to show a custom or SVG icon.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>step</td>
                                <td>Number</td>
                                <td><code>5</code></td>
                                <td>The amount to increment or decrement the slider value by when using the keyboard arrow keys. Also determines the snap points on the slider when <code>snapToSteps</code> is <code>true</code>.</td>
                            </tr>

                            <tr>
                                <td>snapToSteps</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>Whether or not the slider value should be snapped to distrete steps. Setting to <code>true</code> will ensure that the value is always a multiple of the <code>step</code> prop when a drag is completed.</td>
                            </tr>

                            <tr>
                                <td>showMarker</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>Whether or not to show a marker (like a tooltip) above the slider which shows the current value. The value shown can be customized using the <code>markerValue</code> prop.</td>
                            </tr>

                            <tr>
                                <td>markerValue</td>
                                <td>Number, String</td>
                                <td></td>
                                <td>The value shown in the marker when <code>showMarker</code> is <code>true</code>. If not provided and <code>showMarker</code> is <code>true</code>, the slider's value is shown in the marker.</td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the slider is disabled.</p>
                                    <p>Set to <code>true</code> to disable the slider.</p>
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
                                <td>icon</td>
                                <td>Holds the slider icon and can be used to show a custom or SVG icon.</td>
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
                                    <p>Emitted when the slider is focused.</p>
                                    <p>Listen for it using <code>@focus</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>blur</td>
                                <td>
                                    <p>Emitted when the slider loses focus.</p>
                                    <p>Listen for it using <code>@blur</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>input</td>
                                <td>
                                    <p>Emitted when the slider value is changed. The handler is called with the new value.</p>
                                    <p>If you are not using <code>v-model</code>, you should listen for this event and update the <code>value</code> prop.</p>
                                    <p>Listen for it using <code>@input</code>.
                                </td>
                            </tr>

                            <tr>
                                <td>change</td>
                                <td>
                                    <p>Emitted when the value of the slider is changed. The handler is called with the new value.</p>
                                    <p>Listen for it using <code>@change</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>dragstart</td>
                                <td>
                                    <p>Emitted when the user starts dragging the slider thumb. The handler is called with the current value and the drag event object.</p>
                                    <p>Listen for it using <code>@dragstart</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>dragend</td>
                                <td>
                                    <p>Emitted when the user stops dragging the slider thumb. The handler is called with the current value and the drag event object.</p>
                                    <p>Listen for it using <code>@dragend</code>.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ui-tab>

            <ui-tab title="Methods">
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
                                <td><code>reset()</code></td>
                                <td>Call this method to reset the slider's value to its initial value.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ui-tab>
        </ui-tabs>
    </section>
</template>

<script>
import UiButton from 'src/UiButton.vue';
import UiSlider from 'src/UiSlider.vue';
import UiTab from 'src/UiTab.vue';
import UiTabs from 'src/UiTabs.vue';

export default {
    data() {
        return {
            slider1: 25,
            slider2: 50,
            slider3: 60,
            slider4: 40,
            slider5: 75
        };
    },

    methods: {
        resetSliders() {
            this.slider1 = 25;
            this.slider2 = 50;
            this.slider3 = 60;
            this.slider4 = 40;
        }
    },

    components: {
        UiButton,
        UiSlider,
        UiTab,
        UiTabs
    }
};
</script>

<style lang="scss">
@import '~styles/imports';

.page--ui-slider {
    .page__examples {
        max-width: rem-calc(500px);
    }

    .ui-slider {
        margin-bottom: rem-calc(8px);
    }

    .ui-button {
        margin-top: rem-calc(24px);
    }
}
</style>
