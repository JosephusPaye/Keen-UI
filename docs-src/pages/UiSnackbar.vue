<template>
    <section class="page page--ui-snackbar">
        <h2 class="page__title">UiSnackbar</h2>

        <p>UiSnackbar provides lightweight feedback about an operation by showing a brief message at the bottom of the screen. Snackbars can contain an action.</p>

        <p>UiSnackbarContainer allows you to create and manage multiple snackbars, controlling their visibility to ensure only one snackbar is shown at a time. The transition and position of snackbars relative to the container can be customized.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiSnackbar.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <h4 class="page__demo-title">Basic</h4>
            <ui-snackbar>Post published</ui-snackbar>

            <h4 class="page__demo-title">With action</h4>
            <ui-snackbar action="Retry">Database connection failed</ui-snackbar>

            <h4 class="page__demo-title">Multi-line</h4>
            <ui-snackbar>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Set sur illo hic ullam atque omnis.
            </ui-snackbar>

            <h4 class="page__demo-title">Action color: primary</h4>
            <ui-snackbar action="Undo" action-color="primary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Set sur illo hic ullam atque omnis.
            </ui-snackbar>
        </div>

        <h3 class="page__section-title">UiSnackbarContainer demo</h3>

        <div class="preview-controls">
            <ui-radio-group
                name="position"
                :options="['left', 'center', 'right']"
                v-model="position"
            >Position</ui-radio-group>

            <ui-radio-group
                name="transition"
                :options="['slide', 'fade']"
                v-model="transition"
            >Transition</ui-radio-group>

            <ui-switch v-model="queueSnackbars">
                Queue snackbars: {{ queueSnackbars ? 'On' : 'Off' }}
            </ui-switch>

            <ui-textbox
                placeholder="Enter a message"
                v-model="message"
            >Snackbar message</ui-textbox>

            <ui-textbox
                placeholder="Enter action button text"
                v-model="action"
            >Action text</ui-textbox>

            <ui-radio-group
                name="action_color"
                :options="['accent', 'primary']"
                v-model="actionColor"
            >Action color</ui-radio-group>

            <ui-textbox
                placeholder="Enter the duration in seconds"
                type="number"
                v-model.number="duration"
            >Duration (seconds)</ui-textbox>

            <ui-button @click="createSnackbar">Create snackbar</ui-button>
        </div>

        <div class="preview-pane">
            <ui-snackbar-container
                ref="snackbarContainer"
                :position="position"
                :transition="transition"
                :queue-snackbars="queueSnackbars"
            ></ui-snackbar-container>
        </div>

        <h3 class="page__section-title">API: UiSnackbar</h3>

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
                                <td>message</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The snackbar message (text-only). For HTML (not recommended), use the default slot.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>action</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The snackbar action button text.</p>
                                    <p>Setting this prop will show an action button. Otherwise, no action button is shown.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>actionColor</td>
                                <td>String</td>
                                <td><code>"accent"</code></td>
                                <td>
                                    <p>The snackbar action button text color. One of <code>accent</code> or <code>primary</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>transition</td>
                                <td>String</td>
                                <td><code>"slide"</code></td>
                                <td>
                                    <p>The snackbar show/hide transition. One of <code>slide</code> or <code>fade</code>.</p>
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
                                <td>Holds the snackbar text and can contain HTML.</td>
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
                                <td>show</td>
                                <td>
                                    <p>Emitted when the snackbar is shown.</p>
                                    <p>Listen for it using <code>@show</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>hide</td>
                                <td>
                                    <p>Emitted when the snackbar is hidden. You should listen for this event and remove the snackbar.</p>
                                    <p>Listen for it using <code>@hide</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>click</td>
                                <td>
                                    <p>Emitted when the snackbar is clicked. You should listen for this event and remove the snackbar.</p>
                                    <p>Listen for it using <code>@click</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap">action-click</td>
                                <td>
                                    <p>Emitted when the snackbar action is clicked.</p>
                                    <p>Listen for it using <code>@action-click</code>.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ui-tab>
        </ui-tabs>

        <h3 class="page__section-title">API: UiSnackbarContainer</h3>

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
                                <td>duration</td>
                                <td>Number</td>
                                <td><code>5000</code></td>
                                <td>
                                    <p>The default duration in milliseconds of snackbars shown in this container.</p>
                                    <p>Only applies to snackbars created without a duration.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>queueSnackbars</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not snackbars should be queued and shown one after the other.</p>
                                    <p>By default, creating a new snackbar while one is visible will cause the visible one to immediately transition out for the new one.</p>
                                    <p>Set to <code>true</code> to ensure that each snackbar is shown for its complete duration.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>allowHtml</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not snackbars created in this container can have HTML in their <code>message</code> property.</p>
                                    <p>Set this prop to <code>true</code> to allow HTML in the snackbars created in this container.</p>
                                    <p><b>Note</b>: Using HTML in snackbars is not recommended.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>position</td>
                                <td>String</td>
                                <td><code>"left"</code></td>
                                <td>
                                    <p>The position of snackbars relative to the container. One of <code>left</code>, <code>center</code> or <code>right</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>transition</td>
                                <td>String</td>
                                <td><code>"slide"</code></td>
                                <td>
                                    <p>The show/hide transition of snackbars in the container. One of <code>slide</code> or <code>fade</code>.</p>
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
                                <td class="no-wrap">snackbar-show</td>
                                <td>
                                    <p>Emitted when a snackbar is shown in the container. The handler is called with the snackbar.</p>
                                    <p>Listen for it using <code>@snackbar-show</code>.
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap">snackbar-hide</td>
                                <td>
                                    <p>Emitted when a snackbar is hidden from the container. The handler is called with the snackbar.</p>
                                    <p>Listen for it using <code>@snackbar-hide</code>.
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
                                <td><code>createSnackbar()</code></td>
                                <td>
                                    <p>Call this method to create a new snackbar, passing in an options object with any of the props of UiSnackbar.</p>
                                    <p>You can also specify the following additional properties and callback functions on the options object:</p>
                                    <ul>
                                        <li><code>duration</code> (Number) - the duration of the snackbar in milliseconds.</li>
                                        <li><code>onShow</code> (Function) - called when the snackbar is shown, passed the snackbar object.</li>
                                        <li><code>onHide</code> (Function) - called when the snackbar is hidden, passed the snackbar object.</li>
                                        <li><code>onClick</code> (Function) - called when the snackbar is clicked, passed the snackbar object.</li>
                                        <li><code>onActionClick</code> (Function) - called when the snackbar action is clicked, passed the snackbar object.</li>
                                    </ul>
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
import UiSnackbar from 'src/UiSnackbar.vue';
import UiSnackbarContainer from 'src/UiSnackbarContainer.vue';

import UiButton from 'src/UiButton.vue';
import UiRadioGroup from 'src/UiRadioGroup.vue';
import UiSwitch from 'src/UiSwitch.vue';
import UiTab from 'src/UiTab.vue';
import UiTabs from 'src/UiTabs.vue';
import UiTextbox from 'src/UiTextbox.vue';

export default {
    data() {
        return {
            position: 'left',
            transition: 'slide',
            queueSnackbars: false,
            action: '',
            duration: 5,
            actionColor: 'accent',
            message: 'Post deleted'
        };
    },

    methods: {
        createSnackbar() {
            this.$refs.snackbarContainer.createSnackbar({
                message: this.message,
                action: this.action,
                actionColor: this.actionColor,
                duration: this.duration * 1000
            });
        }
    },

    components: {
        UiButton,
        UiRadioGroup,
        UiSnackbar,
        UiSnackbarContainer,
        UiSwitch,
        UiTab,
        UiTabs,
        UiTextbox
    }
};
</script>

<style lang="scss">
@import '~styles/imports';

.page--ui-snackbar {
    .preview-controls {
        margin-bottom: rem-calc(18px);
        max-width: rem-calc(400px);

        .ui-textbox,
        .ui-radio-group,
        .ui-switch {
            margin-bottom: rem-calc(18px);
        }
    }

    .preview-pane {
        border: 2px solid #777;
        height: rem-calc(148px);
        position: relative;
    }
}
</style>
