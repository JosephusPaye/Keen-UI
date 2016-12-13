<template>
    <section class="section section-ui-alert">
        <h2 class="section-heading">
            UiAlert <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiAlert.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h2>

        <p>UiAlerts are used to show inline alert messages to the user. Supported types are <code>info</code>, <code>success</code>, <code>warning</code> and <code>error</code>.</p>

        <p>UiAlert supports keyboard navigation, can contain links and can be dismissible. The content can be fully customized using HTML and the icon can be changed or removed.</p>

        <h3>
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiAlertDocs.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h3>

        <div class="demo">
            <ui-alert text="Hi everybody! This is the default alert."></ui-alert>

            <ui-alert type="success">
                Okilly dokilly, your account was updated successfully.
            </ui-alert>

            <ui-alert type="warning">
                Ay caramba! Alerts can also contain HTML. <a href="https://google.com" target="_blank" rel="noopener">Click here</a> for Google.com.
            </ui-alert>

            <ui-alert @dismissed="eventTest()"
                type="error"
                text="D'oh! Something went wrong and we cannot process your request at this time. Try again later."
            ></ui-alert>

            <ui-alert icon="battery_alert" type="warning">
                This alert has a custom icon.
            </ui-alert>

            <ui-alert>
                This is a multi-line alert. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor suscipit facilis explicabo officiis consectetur, ipsam voluptate excepturi quas quae. Dolorem.
            </ui-alert>

            <ui-alert text="This alert is not dismissible." :dismissible="false"></ui-alert>

            <ui-alert hide-icon>
                The icon for this alert has been removed.
            </ui-alert>

            <ui-alert :dismissible="false" hide-icon>
                This alert has no icon and cannot be dismissed.
            </ui-alert>
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
import UiAlert from '../../src/UiAlert.vue';

export default {
    components: {
        UiTab,
        UiTabs,
        UiAlert
    },
    methods: {
        eventTest() {
            alert('custom event: "dismissed"')
        }
    }
};
</script>
