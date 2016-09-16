<template>
    <section class="section section-ui-progress-linear">
        <h2 class="section-heading">
            UiProgressLinear <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiProgressLinear.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h2>

        <p>This component shows a linear progress bar that can be either determinate or indeterminate. A determinate progress bar shows a specific percentage of completion, while an indeterminate progress bar doesn't.</p>

        <p>UiProgressLinear supports four colors: <code>primary</code>, <code>accent</code>, <code>black</code> and <code>white</code>.</p>

        <h3>
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiProgressLinearDocs.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h3>

        <div class="demo">
            <h4>Determinate</h4>

            <div class="group">
                <ui-progress-linear
                    :show="loading" type="determinate" color="primary" :value="progress"
                ></ui-progress-linear>

                <ui-progress-linear
                    :show="loading" type="determinate" color="accent" :value="progress"
                ></ui-progress-linear>

                <ui-progress-linear
                    :show="loading" type="determinate" color="black" :value="progress"
                ></ui-progress-linear>

                <div class="color-wrapper">
                    <ui-progress-linear
                        :show="loading" type="determinate" color="white" :value="progress"
                    ></ui-progress-linear>
                </div>
            </div>

            <h4>Indeterminate</h4>

            <div class="group">
                <ui-progress-linear :show="loading" color="primary"></ui-progress-linear>

                <ui-progress-linear :show="loading" color="accent"></ui-progress-linear>

                <ui-progress-linear :show="loading" color="black"></ui-progress-linear>

                <div class="color-wrapper">
                    <ui-progress-linear :show="loading" color="white"></ui-progress-linear>
                </div>
            </div>

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
                                    <p>Determines whether or not the progress bar is shown.</p>
                                    <p>Changing this value will show/hide the progress bar.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>type</td>
                                <td>String</td>
                                <td><code>"indeterminate"</code></td>
                                <td>The type of linear progress. One of <code>determinate</code> or <code>indeterminate</code>.</td>
                            </tr>

                            <tr>
                                <td>color</td>
                                <td>String</td>
                                <td class="no-wrap"><code><code>"primary"</code></code></td>
                                <td>The color of the progress bar. One of <code>primary</code>, <code>accent</code>, <code>black</code> or <code>white</code>.</td>
                            </tr>

                            <tr>
                                <td>value</td>
                                <td>Number</td>
                                <td><code>0</code></td>
                                <td>
                                    <p>The value of progress as a number between 0 and 100. Changing this value will update the progress bar.</p>
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
import UiProgressLinear from '../../src/UiProgressLinear.vue';

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
        UiProgressLinear
    }
};
</script>

<style lang="stylus">
.section-ui-progress-linear {
    .ui-button {
        margin-top: 24px;
    }

    .ui-progress-linear {
        margin-top: 8px;
        margin-bottom: 8px;
    }

    .group {
        .ui-progress-linear {
            margin-bottom: 40px;
        }
    }

    .color-wrapper {
        background-color: gray;
        padding: 8px 0;

        .ui-progress-linear {
            margin-bottom: 8px;
        }
    }
}
</style>
