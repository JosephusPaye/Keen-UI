<template>
    <section class="page page-ui-progress-circular">
        <h2 class="page__title">UiProgressCircular</h2>

        <p>UiProgressCircular shows a circular progress indicator (a spinner).</p>

        <p>UiProgressCircular supports five possible colors: <code>primary</code>, <code>accent</code>, <code>multi-color</code> (alternating primary colors), <code>black</code> and <code>white</code>. The <code>size</code> (width and height) and <code>stroke</code> can be customized.</p>

        <p>Due to an issue with CSS transitions on SVG elements in IE and Edge, the determinate progress is not animated in those browsers.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/docs-src/pages/UiProgressCircular.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__demo">
            <h4 class="page__demo-title">Determinate</h4>

            <div class="group">
                <ui-progress-circular
                    color="primary"
                    type="determinate"
                    :progress="progress"
                    v-show="loading"
                ></ui-progress-circular>

                <ui-progress-circular
                    color="accent"
                    type="determinate"
                    :progress="progress"
                    v-show="loading"
                ></ui-progress-circular>

                <ui-progress-circular
                    color="black"
                    type="determinate"
                    :progress="progress"
                    v-show="loading"
                ></ui-progress-circular>

                <div class="has-white-progress">
                    <ui-progress-circular
                        color="white"
                        type="determinate"
                        :progress="progress"
                        v-show="loading"
                    ></ui-progress-circular>
                </div>
            </div>

            <h4 class="page__demo-title">Indeterminate</h4>

            <div class="group">
                <ui-progress-circular color="multi-color" v-show="loading"></ui-progress-circular>
                <ui-progress-circular color="primary" v-show="loading"></ui-progress-circular>
                <ui-progress-circular color="accent" v-show="loading"></ui-progress-circular>
                <ui-progress-circular color="black" v-show="loading"></ui-progress-circular>

                <div class="has-white-progress">
                    <ui-progress-circular color="white" v-show="loading"></ui-progress-circular>
                </div>
            </div>

            <h4 class="page__demo-title">Custom size</h4>

            <div class="group">
                <ui-progress-circular
                    type="determinate"
                    :auto-stroke="false"
                    :progress="progress"
                    v-show="loading"
                    :size="54"
                ></ui-progress-circular>

                <ui-progress-circular
                    :auto-stroke="false"
                    v-show="loading"
                    :size="54"
                ></ui-progress-circular>
            </div>

            <h4 class="page__demo-title">Custom stroke width</h4>

            <div class="group">
                <ui-progress-circular
                    type="determinate"
                    :progress="progress"
                    v-show="loading"
                    :size="48"
                    :stroke="8"
                ></ui-progress-circular>

                <ui-progress-circular
                    v-show="loading"
                    :size="48"
                    :stroke="8"
                ></ui-progress-circular>
            </div>

            <br>

            <ui-button @click.native="loading = !loading">Toggle Loading</ui-button>
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
                                <td>type</td>
                                <td>String</td>
                                <td><code>"indeterminate"</code></td>
                                <td>The type of progress. One of <code>determinate</code> or <code>indeterminate</code>.</td>
                            </tr>

                            <tr>
                                <td>color</td>
                                <td>String</td>
                                <td><code>"primary"</code></td>
                                <td>
                                    <p>The color of the progress circle. One of <code>primary</code>, <code>accent</code>, <code>multi-color</code>, <code>black</code> or <code>white</code>.</p>

                                    <p><code>multi-color</code> is only supported on an indeterminate progress, if set on a determinate progress, the color will fall back to <code>primary</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>size</td>
                                <td>Number</td>
                                <td><code>24</code></td>
                                <td>The width and height of the circular progress without a unit (unit is pixels).</td>
                            </tr>

                            <tr>
                                <td>stroke</td>
                                <td>Number</td>
                                <td>auto or <code>4</code></td>
                                <td>
                                    <p>The stroke width of the circular progress without a unit (unit is pixels).</p>

                                    <p>If <code>stroke</code> is not provided, it is automatically calculated unless <code>autoStroke</code> is set to <code>false</code>. See <code>autoStroke</code> for details.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>autoStroke</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not the stroke width should be automatically calculated if it is not provided.</p>

                                    <p>The calculated stroke is the <code>width</code> divided by <code>8</code>.</p>

                                    <p>If <code>autoStroke</code> is set to <code>false</code> and <code>stroke</code> is not provided, it defaults to the number <code>4</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>progress</td>
                                <td>Number</td>
                                <td><code>0</code></td>
                                <td>
                                    <p>The value of progress as a number between 0 and 100. Changing this value will update the determinate progress circle.</p>
                                    <p>Only applicable when the type is determinate.</p>
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
import UiTab from 'src/UiTab.vue';
import UiTabs from 'src/UiTabs.vue';
import UiButton from 'src/UiButton.vue';
import UiProgressCircular from 'src/UiProgressCircular.vue';

export default {
    data() {
        return {
            progress: 0,
            loading: true,
            progressInterval: null
        };
    },

    mounted() {
        this.progressInterval = setInterval(() => {
            if (this.progress >= 100) {
                this.progress = 0;
            } else {
                this.progress += 5;
            }
        }, 500);
    },

    beforeDestroy() {
        clearInterval(this.progressInterval);
    },

    components: {
        UiTab,
        UiTabs,
        UiButton,
        UiProgressCircular
    }
};
</script>

<style lang="sass">
.page-ui-progress-circular {
    .group {
        display: flex;

        .ui-progress-circular {
            margin-right: 24px;
        }
    }

    .ui-button {
        margin-top: 24px;
    }

    .has-white-progress {
        background-color: gray;
        display: inline-block;
        padding: 8px;

        .ui-progress-circular {
            margin-right: 0;
        }
    }
}
</style>
