<template>
    <section class="page page--ui-alert">
        <h2 class="page__title">UiAlert</h2>

        <p>UiAlert shows an inline alert message to the user. Supported types are <code>info</code>, <code>success</code>, <code>warning</code> and <code>error</code>.</p>

        <p>UiAlert supports keyboard navigation, can contain links and can be dismissed. The alert icon can be changed or removed.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiAlert.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <ui-alert v-show="showAlert1" @dismiss="showAlert1 = false">
                Hi everybody! This is the default alert.
            </ui-alert>

            <ui-alert v-show="showAlert2" type="success" @dismiss="showAlert2 = false">
                Okilly dokilly, your account was updated successfully.
            </ui-alert>

            <ui-alert v-show="showAlert3" type="warning" @dismiss="showAlert3 = false">
                Ay caramba! Alerts can also contain HTML. <a href="https://google.com" target="_blank" rel="noopener">Click here</a> for Google.com.
            </ui-alert>

            <ui-alert v-show="showAlert4" type="error" @dismiss="showAlert4 = false">
                D'oh! Something went wrong and we cannot process your request at this time. Try again later.
            </ui-alert>

            <ui-alert v-show="showAlert5" type="warning" @dismiss="showAlert5 = false">
                <template #icon>
                    <ui-icon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.984 14.016V9h-1.97v5.016h1.97zm0 3.984v-2.016h-1.97V18h1.97zm2.672-14.016c.75 0 1.36.61 1.36 1.36V20.67c0 .75-.61 1.314-1.36 1.314H8.343c-.75 0-1.36-.563-1.36-1.313V5.344c0-.75.61-1.36 1.36-1.36h1.64V2.016h4.032v1.97h1.64z"/></svg>
                    </ui-icon>
                </template>

                This alert has a custom icon.
            </ui-alert>

            <ui-alert v-show="showAlert6" @dismiss="showAlert6 = false">
                This is a multi-line alert. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor suscipit facilis explicabo officiis consectetur, ipsam voluptate excepturi quas quae. Dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, autem.
            </ui-alert>

            <ui-alert v-show="showAlert7" remove-icon @dismiss="showAlert7 = false">
                The icon for this alert has been removed.
            </ui-alert>

            <ui-alert v-show="showAlert8" type="warning" disable-animation @dismiss="showAlert8 = false">
                Animations for this alert are disabled.
            </ui-alert>

            <ui-alert :dismissible="false">This alert is not dismissible.</ui-alert>

            <ui-alert :dismissible="false" remove-icon>
                This alert has no icon is not dismissible.
            </ui-alert>

            <ui-button @click="resetAlerts">Reset Alerts</ui-button>
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
                                <td><code>"info"</code></td>
                                <td>
                                    <p>The type of alert. Determines the alert background color and default icon.</p>
                                    <p>One of <code>info</code>, <code>success</code>, <code>warning</code> or <code>error</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>removeIcon</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the alert icon is removed.</p>
                                    <p>Set to <code>true</code> to remove the icon.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>disableAnimation</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the alert should be animated when showing and hiding.</p>
                                    <p>Set to <code>true</code> to disable the animation.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>dismissible</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td>
                                    <p>Whether or not the alert shows a dismiss button.</p>
                                    <p>You should listen for the <code>dismiss</code> event and hide the alert.</p>
                                    <p>Set to <code>false</code> to remove the dismiss button.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
                                <td>(default)</td>
                                <td>Holds the alert content and can contain HTML.</td>
                            </tr>

                            <tr>
                                <td>icon</td>
                                <td>
                                    <p>Holds the button icon and can contain any custom or SVG icon.</p>
                                </td>
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
                                <td>dismiss</td>
                                <td>
                                    <p>Emitted when the user clicks the dismiss button. You should listen for this event and hide alert.</p>
                                    <p>Listen for it using <code>@dismiss</code>.</p>
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
import UiAlert from '@/UiAlert.vue';
import UiButton from '@/UiButton.vue';
import UiIcon from '@/UiIcon.vue';
import UiTab from '@/UiTab.vue';
import UiTabs from '@/UiTabs.vue';

export default {
    components: {
        UiAlert,
        UiButton,
        UiIcon,
        UiTab,
        UiTabs
    },

    data() {
        return {
            showAlert1: true,
            showAlert2: true,
            showAlert3: true,
            showAlert4: true,
            showAlert5: true,
            showAlert6: true,
            showAlert7: true,
            showAlert8: true
        };
    },

    methods: {
        resetAlerts() {
            this.showAlert1 = true;
            this.showAlert2 = true;
            this.showAlert3 = true;
            this.showAlert4 = true;
            this.showAlert5 = true;
            this.showAlert6 = true;
            this.showAlert7 = true;
            this.showAlert8 = true;
        }
    }
};
</script>
