<template>
    <section class="section section-ui-progress-circular">
        <h2 class="section-heading">
            UiProgressCircular <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiProgressCircular.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h2>

        <p>UiProgressCircular shows a circular progress indicator (a spinner). Currently UiProgressCircular only works in browsers with <a href="http://caniuse.com/#feat=svg-smil" target="_blank" rel="noopener">SVG SMIL animation support</a> (e.g. all modern browsers except IE and Edge).</p>

        <p>UiProgressCircular supports five possible colors: <code>primary</code>, <code>accent</code>, <code>multi-color</code> (alternating primary colors), <code>black</code> and <code>white</code>. The <code>size</code> (width and height) and <code>stroke</code> can be customized.</p>

        <h3>
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiProgressCircularDocs.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h3>

        <div class="demo">
            <h4>Determinate</h4>

            <div class="group">
                <ui-progress-circular
                    :show="loading" type="determinate" color="primary" :value="progress"
                ></ui-progress-circular>

                <ui-progress-circular
                    :show="loading" type="determinate" color="accent" :value="progress"
                ></ui-progress-circular>

                <ui-progress-circular
                    :show="loading" type="determinate" color="black" :value="progress"
                ></ui-progress-circular>

                <div class="color-wrapper">
                    <ui-progress-circular
                        :show="loading" type="determinate" color="white" :value="progress"
                    ></ui-progress-circular>
                </div>
            </div>

            <h4>Indeterminate</h4>

            <div class="group">
                <ui-progress-circular :show="loading" color="multi-color"></ui-progress-circular>
                <ui-progress-circular :show="loading" color="primary"></ui-progress-circular>
                <ui-progress-circular :show="loading" color="accent"></ui-progress-circular>
                <ui-progress-circular :show="loading" color="black"></ui-progress-circular>

                <div class="color-wrapper">
                    <ui-progress-circular :show="loading" color="white"></ui-progress-circular>
                </div>
            </div>

            <h4>Custom size</h4>

            <div class="group">
                <ui-progress-circular
                    :show="loading" :size="54" type="determinate" :auto-stroke="false"
                    :value="progress"
                ></ui-progress-circular>

                <ui-progress-circular
                    :show="loading" :size="54" :auto-stroke="false"
                ></ui-progress-circular>
            </div>

            <h4>Custom stroke width</h4>

            <div class="group">
                <ui-progress-circular
                    :show="loading" :size="48" :stroke="8" type="determinate" :value="progress"
                ></ui-progress-circular>

                <ui-progress-circular :show="loading" :size="48" :stroke="8"></ui-progress-circular>
            </div>

            <br>

            <ui-button @click.native="loading = !loading">Toggle Loading</ui-button>
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
                            <th>Description</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>show</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not the circular progress is shown.</p>
                                    <p>Changing this value will show/hide the circular progress.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>type</td>
                                <td>String</td>
                                <td><code>"indeterminate"</code></td>
                                <td>The type of circular progress. One of <code>determinate</code> or <code>indeterminate</code>.</td>
                            </tr>

                            <tr>
                                <td>color</td>
                                <td>String</td>
                                <td class="no-wrap"><code>"primary"</code></td>
                                <td>
                                    <p>The color of the circular progress. One of <code>primary</code>, <code>accent</code>, <code>multi-color</code>, <code>black</code> or <code>white</code>.</p>

                                    <p><code>multi-color</code> is only supported on an indeterminate progress, if set on a determinate progress, the color will fall back to <code>primary</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>size</td>
                                <td>Number</td>
                                <td><code>24</code></td>
                                <td>The width and height of the circular progress in pixels (without any units).</td>
                            </tr>

                            <tr>
                                <td>stroke</td>
                                <td>Number</td>
                                <td>auto or <code>4</code></td>
                                <td>
                                    <p>The stroke width of the circular progress in pixels (without any units).</p>

                                    <p>If <code>stroke</code> is not provided, it is automatically calculated unless <code>autoStroke</code> is set to <code>false</code>. See below for details.</p>
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
                                <td>value</td>
                                <td>Number</td>
                                <td><code>0</code></td>
                                <td>
                                    <p>The value of progress as a number between 0 and 100. Changing this value will update the determinate progress ring.</p>
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
import UiTab from '../../src/UiTab.vue';
import UiTabs from '../../src/UiTabs.vue';
import UiButton from '../../src/UiButton.vue';
import UiProgressCircular from '../../src/UiProgressCircular.vue';

export default {
    data() {
        return {
            progress: 0,
            loading: true,
            progressInterval: null
        };
    },

    components: {
        UiTab,
        UiTabs,
        UiButton,
        UiProgressCircular
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
    }
};
</script>

<style lang="stylus">
.section-ui-progress-circular {
    .group {
        display: flex;

        .ui-progress-circular {
            margin-right: 24px;
        }
    }

    .ui-button {
        margin-top: 24px;
    }

    .color-wrapper {
        background-color: gray;
        display: inline-block;
        padding: 8px;

        .ui-progress-circular {
            margin-right: 0;
        }
    }
}
</style>
