<template>
    <section class="section section-ui-snackbar">
        <h2 class="section-heading">
            UiSnackbar &amp; UiSnackbarContainer <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiSnackbar.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h2>

        <p>UiSnackbar provides lightweight feedback about an operation by showing a brief message at the bottom of the screen. Snackbars can contain an action.</p>

        <p>UiSnackbarContainer is a container that allows you to create snackbars using events, and it manages their visibility to ensure only one snackbar is shown at a time. It also allows you to position snackbars to the left, center or right of the container.</p>

        <h3>
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiSnackbarDocs.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h3>

        <div class="demo">
            <h4>Default</h4>
            <ui-snackbar v-model="model.show1" persistent>Post published</ui-snackbar>

            <h4>With action</h4>
            <ui-snackbar v-model="model.show2" persistent action="Retry">Database connection failed</ui-snackbar>

            <h4>Multi-line</h4>
            <ui-snackbar v-model="model.show3" persistent>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Set sur illo hic ullam atque omnis.
            </ui-snackbar>

            <h4>Multi-line with action, action color primary</h4>
            <ui-snackbar
                v-model="model.show4" persistent action="Undo" action-color="primary"
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Set sur illo hic ullam atque omnis.
            </ui-snackbar>
        </div>

        <h3>UiSnackbarContainer Demo</h3>

        <div class="preview-pane">
            <ui-snackbar-container
                :position="position" :queue-snackbars="queueSnackbars"
            ></ui-snackbar-container>
        </div>

        <div class="preview-controls">
            <ui-textbox
                label="Snackbar message" v-model="message" name="message"
                placeholder="Enter a message"
            ></ui-textbox>

            <ui-textbox
                label="Action text" v-model="action" name="action_text"
                placeholder="Enter action button text"
            ></ui-textbox>

            <ui-textbox
                label="Duration (seconds)" v-model="duration" name="duration"
                placeholder="Enter the duration in seconds" type="number"
            ></ui-textbox>

            <ui-radio
                label="Action color" name="action_color" :options="['accent', 'primary']"
                v-model="actionColor"
            ></ui-radio>

            <ui-radio
                label="Position" name="position" :options="['left', 'center', 'right']"
                v-model="position"
            ></ui-radio>

            <ui-switch v-model="queueSnackbars">Queue snackbars</ui-switch>

            <ui-button @click.native="createSnackbar">Create snackbar</ui-button>
        </div>

        <h3>API: UiSnackbar</h3>

        <ui-tabs raised>

            <ui-tab header="Props">
                <div class="table-responsive">

                    <table class="table">
                        <thead>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Binding</th>
                            <th>Description</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>id</td>
                                <td>String</td>
                                <td class="no-wrap">(Auto-generated <br> unique ID)</td>
                                <td></td>
                                <td>
                                    <p>A unique identifier for the snackbar.</p>
                                    <p>Applied as the <code>id</code> attribute of the snackbar root element.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>show</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>Two way</td>
                                <td>
                                    <p>Determines whether or not the snackbar is shown.</p>
                                    <p>Changing this value will show/hide the snackbar.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>message</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p>The snackbar message (text only).</p>
                                    <p>To use HTML in the snackbar, use the default slot.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>action</td>
                                <td>String</td>
                                <td></td>
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
                                <td></td>
                                <td>
                                    <p>The snackbar action button text color.</p>
                                    <p>One of <code>accent</code> or <code>primary</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>duration</td>
                                <td>Number</td>
                                <td><code>5000</code></td>
                                <td></td>
                                <td>
                                    <p>The duration of the snackbar in milliseconds.</p>
                                    <p>After this amount of time, the snackbar will be hidden if <code>autoHide</code> is enabled.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>autoHide</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the snackbar is automatically hidden after the given duration.</p>
                                    <p>Set to <code>false</code> to disable auto hiding.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>persistent</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the snackbar is persistent and cannot be hidden.</p>
                                    <p>Set to <code>true</code> for a persistent snackbar.</p>
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
                                <td>The default slot holds the snackbar message and can contain HTML.</td>
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
                                <td>shown</td>
                                <td>Dispatched</td>
                                <td>
                                    <p>Dispatched when the snackbar is shown.</p>
                                    <p>Listen for it using <code>@shown</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>hidden</td>
                                <td>Dispatched</td>
                                <td>
                                    <p>Dispatched when the snackbar is hidden.</p>
                                    <p>Listen for it using <code>@hidden</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>clicked</td>
                                <td>Dispatched</td>
                                <td>
                                    <p>Dispatched when the snackbar is clicked.</p>
                                    <p>Listen for it using <code>@clicked</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>action-clicked</td>
                                <td>Dispatched</td>
                                <td>
                                    <p>Dispatched when the snackbar action is action.</p>
                                    <p>Listen for it using <code>@action-clicked</code>.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </ui-tab>

        </ui-tabs>

        <h3>API: UiSnackbarContainer</h3>

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
                                <td>defaultDuration</td>
                                <td>Number</td>
                                <td><code>5000</code></td>
                                <td>
                                    <p>The default duration in milliseconds of snackbars shown in this container.</p>
                                    <p>Only applies to snackbars created without an explicit duration.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>queueSnackbars</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not snackbars should be queued and shown one after the other.</p>
                                    <p>By default, creating a new snackbar while one is visible will cause the visible one to immediately transition out for the new one.</p>
                                    <p>Set this prop to <code>true</code> to ensure that each snackbar is shown for its complete duration.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="new-prop">allowHtml</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not snackbars created in this container can have HTML in their <code>message</code> property.</p>
                                    <p>Set this prop to <code>true</code> to allow HTML in the snackbars created in this container.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>position</td>
                                <td>String</td>
                                <td><code>"left"</code></td>
                                <td>
                                    <p>The position of snackbars relative to the container.</p>
                                    <p>One of <code>left</code>, <code>center</code> or <code>right</code>.</p>
                                </td>
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
                                <td class="no-wrap">ui-snackbar::create</td>
                                <td>Received</td>
                                <td>
                                    <p>Trigger this event to create a new snackbar, passing in an options object with any of the props of UiSnackbar.</p>

                                    <p>You can also specify the following callback functions on the options object:</p>

                                    <ul>
                                        <li><b>onShow</b>: called when the snackbar is shown, passed the snackbar object.</li>
                                        <li><b>onHide</b>: called when the snackbar is hidden, passed the snackbar object.</li>
                                        <li><b>onClick</b>: called when the snackbar is clicked, passed the snackbar object.</li>
                                        <li><b>onActionClick</b>: called when the snackbar action is clicked, passed the snackbar object.</li>
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
import UiTab from '../../src/UiTab.vue'
import UiTabs from '../../src/UiTabs.vue'
import UiButton from '../../src/UiButton.vue'
import UiSwitch from '../../src/UiSwitch.vue'
import UiTextbox from '../../src/UiTextbox.vue'
import UiRadio from '../../src/UiRadio.vue'

import UiSnackbar from '../../src/UiSnackbar.vue'
import UiSnackbarContainer from '../../src/UiSnackbarContainer.vue'

import EventBus from '../../src/helpers/event-bus'

let model = {
    show1: true,
    show2: true,
    show3: true,
    show4: true,
}

export default {
    components: {
        UiTab,
        UiTabs,
        UiButton,
        UiSwitch,
        UiTextbox,
        UiRadio,
        UiSnackbar,
        UiSnackbarContainer
    },

    data() {
        return {
            position: 'left',
            queueSnackbars: false,

            action: '',
            duration: 5,
            actionColor: 'accent',
            message: 'Post deleted',
            model,
        };
    },

    methods: {
        createSnackbar() {
            EventBus.$emit('ui-snackbar::create', {
                message: this.message,
                action: this.action,
                actionColor: this.actionColor,
                duration: this.duration * 1000
            });
        }
    }
};
</script>

<style lang="stylus">
.section-ui-snackbar {
    .preview-pane {
        position: relative;
        height: 148px;
        border: 2px solid #777;
    }

    .preview-controls {
        margin-top: 24px;
        max-width: 400px;
    }

    .ui-button {
        margin-top: 16px;
    }

    .ui-textbox,
    .ui-radio-group {
        margin-bottom: 18px;
    }

    .ui-switch {
        margin-bottom: 8px;
    }
}
</style>
