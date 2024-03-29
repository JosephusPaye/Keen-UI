<template>
    <section class="page page--ui-progress-linear">
        <h2 class="page__title">UiProgressLinear</h2>

        <p>UiProgressLinear shows a linear progress bar that can be either determinate or indeterminate. A determinate progress bar shows a specific percentage of completion, while an indeterminate progress bar indicates general activity.</p>

        <p>UiProgressLinear supports four colors: <code>primary</code>, <code>accent</code>, <code>black</code> or <code>white</code>.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiProgressLinear.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <h4 class="page__demo-title">Type: determinate</h4>

            <div class="page__demo-group">
                <ui-progress-linear
                    v-show="isLoading"
                    color="primary"

                    type="determinate"

                    :progress="progress"
                ></ui-progress-linear>

                <ui-progress-linear
                    v-show="isLoading"
                    color="accent"

                    type="determinate"

                    :progress="progress"
                ></ui-progress-linear>

                <ui-progress-linear
                    v-show="isLoading"
                    color="black"

                    type="determinate"

                    :progress="progress"
                ></ui-progress-linear>

                <div class="has-white-progress">
                    <ui-progress-linear
                        v-show="isLoading"
                        color="white"

                        type="determinate"

                        :progress="progress"
                    ></ui-progress-linear>
                </div>
            </div>

            <h4 class="page__demo-title">Type: indeterminate</h4>

            <div class="page__demo-group">
                <ui-progress-linear v-show="isLoading" color="primary"></ui-progress-linear>
                <ui-progress-linear v-show="isLoading" color="accent"></ui-progress-linear>
                <ui-progress-linear v-show="isLoading" color="black"></ui-progress-linear>

                <div class="has-white-progress">
                    <ui-progress-linear v-show="isLoading" color="white"></ui-progress-linear>
                </div>
            </div>

            <ui-button @click="isLoading = !isLoading">Toggle Loading</ui-button>
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
                                <td>The type of progress bar. One of <code>determinate</code> or <code>indeterminate</code>.</td>
                            </tr>

                            <tr>
                                <td>color</td>
                                <td>String</td>
                                <td class="no-wrap"><code><code>"primary"</code></code></td>
                                <td>The color of the progress bar. One of <code>primary</code>, <code>accent</code>, <code>black</code> or <code>white</code>.</td>
                            </tr>

                            <tr>
                                <td>progress</td>
                                <td>Number</td>
                                <td><code>0</code></td>
                                <td>
                                    <p>The value of progress as a number between 0 and 100. Changing this value will update the progress bar.</p>
                                    <p>Only applicable when the type is <code>determinate</code>.</p>
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
import UiButton from '@/UiButton.vue';
import UiProgressLinear from '@/UiProgressLinear.vue';
import UiTab from '@/UiTab.vue';
import UiTabs from '@/UiTabs.vue';

export default {
    components: {
        UiButton,
        UiProgressLinear,
        UiTab,
        UiTabs
    },

    data() {
        return {
            progress: 0,
            isLoading: true,
            progressInterval: null
        };
    },

    mounted() {
        this.progressInterval = setInterval(() => {
            if (this.progress >= 100) {
                this.progress = 0;
            } else {
                this.progress += 25;
            }
        }, 1000);
    },

    beforeUnmount() {
        clearInterval(this.progressInterval);
    }
};
</script>

<style lang="scss">
@import '@/styles/imports';

.page--ui-progress-linear {
    .ui-button {
        margin-top: rem(24px);
    }

    .ui-progress-linear {
        margin-top: rem(8px);
        margin-bottom: rem(8px);
    }

    .page__demo-group {
        .ui-progress-linear {
            margin-bottom: rem(40px);
        }
    }

    .has-white-progress {
        background-color: gray;
        padding: rem(8px 0);

        .ui-progress-linear {
            margin-bottom: rem(8px);
        }
    }
}
</style>
