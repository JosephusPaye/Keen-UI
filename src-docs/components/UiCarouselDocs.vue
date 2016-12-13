<template>
    <section class="section section-ui-alert">
        <h2 class="section-heading">
            UiCarousel <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiAlert.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h2>

        <p>It's in progress. Time needed.</p>

        <h3>
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiAlertDocs.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h3>

        <div class="demo demo-1">
            <ui-carousel :itemNum="items" type="fadeUp">
                <img v-for="n of 5" :src="aliyunOss+n+'.jpg_1200'" alt="views" :slot="n"/>
            </ui-carousel>
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
                                <td>type</td>
                                <td>String</td>
                                <td><code>"info"</code></td>
                                <td>
                                    <p>Determines the alert background color and default icon.</p>
                                    <p>One of <code>info</code>, <code>success</code>, <code>warning</code> or <code>error</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>text</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The alert body content (text-only).</p>
                                    <p>To use HTML in the alert body, use the default slot.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>icon</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The name of a custom alert icon.</p>
                                    <p>Can be any of the <a href="https://design.google.com/icons/" target="_blank" rel="noopener">Material Icons</a>.</p>
                                    <p>Note that this should be the icon codepoint if you want to support IE9. By default the icon is based on the alert type.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>hideIcon</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not the alert icon is hidden.</p>
                                    <p>Set to <code>true</code> to hide the icon.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>dismissible</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td>
                                    <p>Determines whether or not the alert can be dismissed.</p>
                                    <p>Set to <code>false</code> to hide the close button and prevent the user from dismissing the alert.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </ui-tab>

            <ui-tab header="Slots">
                <div class="table-responsive">

                    <table class="table">
                        <thead>
                            <th>Name</th>
                            <th>Description</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>(default)</td>
                                <td>The default slot holds the alert content and can contain HTML.</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
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
                                <td>dismissed</td>
                                <td>Emitted</td>
                                <td>
                                    <p>Emitted when the alert is dismissed.</p>
                                    <p>Listen for it using <code>@dismissed</code> inline.</p>
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
import UiCarousel from '../../src/UiCarousel.vue';

export default {
    data() {
        return {
            items: 5,
            aliyunOss: 'http://fancy-oss.oss-cn-shenzhen.aliyuncs.com/images/',
        }
    },
    components: {
        UiTab,
        UiTabs,
        UiCarousel
    },
    methods: {

    }
};
</script>

<style lang="stylus">
.demo-1
    img
        width 100%
</style>
