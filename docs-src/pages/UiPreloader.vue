<template>
    <section class="page page--ui-preloader">
        <h2 class="page__title">UiPreloader</h2>

        <p>UiPreloader shows an indeterminate progress bar using the primary Material Design colors. Useful for indicating activity like a page load.</p>

        <p>UiPreloader is not from the Material Design spec, but inspired by a similar component seen in Google's Inbox app.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiPreloader.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <ui-preloader :show="loading"></ui-preloader>
            <ui-button @click="loading = !loading">Toggle Loading</ui-button>
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
                                <td>show *</td>
                                <td>Boolean</td>
                                <td>(required)</td>
                                <td>
                                    <p>Whether or not the preloader is shown. Changing this value will show/hide the preloader.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                * Required prop
            </ui-tab>
        </ui-tabs>
    </section>
</template>

<script>
import UiButton from '@/UiButton.vue';
import UiPreloader from '@/UiPreloader.vue';
import UiTab from '@/UiTab.vue';
import UiTabs from '@/UiTabs.vue';

export default {
    components: {
        UiButton,
        UiPreloader,
        UiTab,
        UiTabs
    },

    data() {
        return {
            loading: true
        };
    }
};
</script>

<style lang="scss">
.page--ui-preloader {
    .ui-button {
        margin-top: 24px;
    }
}
</style>
