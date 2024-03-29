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
            <ui-slider v-model="slider2" icon="volume_up"></ui-slider>

            <h4 class="page__demo-title">With marker</h4>
            <ui-slider v-model="slider3" show-marker></ui-slider>

            <h4 class="page__demo-title">With custom min and max: [1, 15]</h4>

            <ui-slider v-model="slider4" show-marker :min="1" :max="15" :step="1"></ui-slider>

            <h4 class="page__demo-title">Snap to steps: 20</h4>

            <ui-slider
                v-model="slider5"
                show-marker

                snap-to-steps

                :step="20"
            ></ui-slider>

            <h4 class="page__demo-title">In a modal</h4>
            <ui-button @click="openModal">Open modal</ui-button>
            <ui-modal ref="modal" title="Slider in a modal" dismiss-on="close-button esc">
                <ui-slider v-model="slider7"></ui-slider>
            </ui-modal>

            <h4 class="page__demo-title">Disabled</h4>
            <ui-slider v-model="slider6" icon="volume_up" disabled></ui-slider>

            <div class="reset-sliders">
                <ui-button @click="resetSliders">Reset Sliders</ui-button>
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
                                <td>
                                    <p>The <code>name</code> attribute of the slider's hidden input element. Useful when traditionally submitting a form the slider is a part of.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap">modelValue, v-model *</td>
                                <td>Number</td>
                                <td>(required)</td>
                                <td>
                                    <p>The model that the slider value syncs to. Changing this value will update the slider.</p>
                                    <p>If you are not using <code>v-model</code>, you should listen for the <code>update:modelValue</code> event and update <code>modelValue</code>.</p>
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
                                <td>min</td>
                                <td>Number</td>
                                <td><code>0</code></td>
                                <td>The minimum slider value.</td>
                            </tr>

                            <tr>
                                <td>max</td>
                                <td>Number</td>
                                <td><code>100</code></td>
                                <td>The maximum slider value.</td>
                            </tr>

                            <tr>
                                <td>step</td>
                                <td>Number</td>
                                <td><code>10</code></td>
                                <td>The amount to increment or decrement the slider value by when using the keyboard arrow keys. Also determines the snap points on the slider when <code>snapToSteps</code> is <code>true</code>.</td>
                            </tr>

                            <tr>
                                <td>snapToSteps</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>Whether or not the slider value should be snapped to discrete steps. Setting to <code>true</code> will ensure that the value is always a multiple of the <code>step</code> prop when a drag is completed.</td>
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
                                <td>tabindex</td>
                                <td>Number, String</td>
                                <td></td>
                                <td>The slider input <code>tabindex</code>.</td>
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
                                <td>update:modelValue</td>
                                <td>
                                    <p>Emitted when the slider value is changed. The handler is called with the new value.</p>
                                    <p>If you are not using <code>v-model</code>, you should listen for this event and update the <code>modelValue</code> prop.</p>
                                    <p>Listen for it using <code>@update:modelValue</code>.</p>
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
                                <td><code>focus()</code></td>
                                <td>
                                    <p>Call this method to programmatically focus the slider.</p>
                                </td>
                            </tr>

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
import UiButton from '@/UiButton.vue';
import UiModal from '@/UiModal.vue';
import UiSlider from '@/UiSlider.vue';
import UiTab from '@/UiTab.vue';
import UiTabs from '@/UiTabs.vue';

export default {
    components: {
        UiButton,
        UiModal,
        UiSlider,
        UiTab,
        UiTabs
    },

    data() {
        return {
            slider1: 25,
            slider2: 50,
            slider3: 60,
            slider4: 8,
            slider5: 40,
            slider6: 75,
            slider7: 30
        };
    },

    methods: {
        resetSliders() {
            this.slider1 = 25;
            this.slider2 = 50;
            this.slider3 = 60;
            this.slider4 = 7;
            this.slider5 = 40;
            this.slider6 = 75;
            this.slider7 = 30;
        },

        openModal() {
            this.$refs.modal.open();
        }
    }
};
</script>

<style lang="scss">
@import '@/styles/imports';

.page--ui-slider {
    .page__examples {
        max-width: rem(500px);
    }

    .ui-slider {
        margin-bottom: rem(8px);
    }

    .reset-sliders .ui-button {
        margin-top: rem(36px);
    }
}
</style>
