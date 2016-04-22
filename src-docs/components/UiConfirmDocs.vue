<template>
    <section class="section section-ui-confirm">
        <h2 class="section-heading">UiConfirm</h2>

        <p>A component that creates a confirmation dialog using <a href="#/ui-modal-docs">UiModal</a>.</p>

        <p>The confirm and deny buttons can be customized (text, icon and color) and the confirm emits <code>opened</code>, <code>closed</code>, <code>confirmed</code> and <code>denied</code> events.</p>

        <p>A confirm can also show a loading spinner on the primary button (useful for AJAX operations).</p>

        <h3>Examples</h3>

        <div class="demo">
            <ui-confirm
                @confirmed="confirmed" @denied="denied" :show.sync="show.genericConfirm"
                close-on-confirm
            >
                Do you want to confirm this?
            </ui-confirm>

            <ui-confirm
                header="Confirm this" confirm-button-text="Confirm" deny-button-text="Deny"
                @confirmed="confirmed" @denied="denied" :show.sync="show.genericConfirm2"
                autofocus="confirm-button" close-on-confirm
            >
                The confirm button in this UiConfirm is focussed by default.
            </ui-confirm>

            <ui-confirm
                type="primary" header="Publish Post" confirm-button-text="Publish"
                confirm-button-icon="send" deny-button-text="Cancel" @confirmed="publishConfirmed"
                @denied="publishDenied" :show.sync="show.publishConfirm"
                :loading="publishRequestInProgress"
            >
                Publish post for the world to see?
            </ui-confirm>

            <ui-confirm
                header="Delete Post" type="danger" confirm-button-text="Delete"
                confirm-button-icon="delete" deny-button-text="Cancel" @confirmed="deleteConfirmed"
                @denied="deleteDenied" :show.sync="show.deleteConfirm" close-on-confirm
            >
                Are you sure you want to delete the post?
            </ui-confirm>

            <div class="group">
                <ui-button @click="show.genericConfirm = true">Default Confirm</ui-button>

                <ui-button @click="show.genericConfirm2 = true">Focus Primary Button</ui-button>

                <ui-button
                    color="primary" @click="show.publishConfirm = true"
                >Publish Post</ui-button>

                <ui-button
                    type="flat" color="danger" @click="show.deleteConfirm = true"
                >Delete Post</ui-button>
            </div>

            <pre v-if="confirmResult.length"><code v-text="confirmResult"></code></pre>
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
                            <th>Binding</th>
                            <th>Description</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>show *</td>
                                <td>Boolean</td>
                                <td>(required)</td>
                                <td>Two way</td>
                                <td>Determines whether or not the dialog is shown. Changing this value will show/hide the dialog.</td>
                            </tr>

                            <tr>
                                <td>type</td>
                                <td>String</td>
                                <td><code>"primary"</code></td>
                                <td></td>
                                <td>The type of confirm. Determines the color of the primary confirm button. Can be one of <code>default</code>, <code>primary</code>, <code>accent</code>, <code>success</code>, <code>warning</code> or <code>danger</code>.</td>
                            </tr>

                            <tr>
                                <td>header</td>
                                <td>String</td>
                                <td><code>true</code></td>
                                <td></td>
                                <td>The dialog header (text only). If you want to use HTML in the header, consider directly using a <a href="#/ui-modal-docs">UiModal</a>.</td>
                            </tr>

                            <tr>
                                <td>confirmButtonText</td>
                                <td>String</td>
                                <td><code>"OK"</code></td>
                                <td></td>
                                <td>The confirm button text.</td>
                            </tr>

                            <tr>
                                <td>confirmButtonIcon</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>The confirm button icon. Can be any of the <a href="https://design.google.com/icons/" target="_blank">Material Icons</a>. Note that this should be the icon codepoint if you want to support IE9.</td>
                            </tr>

                            <tr>
                                <td>denyButtonText</td>
                                <td>String</td>
                                <td><code>"Cancel"</code></td>
                                <td></td>
                                <td>The deny button text.</td>
                            </tr>

                            <tr>
                                <td>denyButtonIcon</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>The deny button icon. Can be any of the <a href="https://design.google.com/icons/" target="_blank">Material Icons</a>. Note that this should be the icon codepoint if you want to support IE9.</td>
                            </tr>

                            <tr>
                                <td>autofocus</td>
                                <td>String</td>
                                <td><code>"none"</code></td>
                                <td></td>
                                <td>The button to autofocus when the dialog is opened. Can be one of <code>confirm-button</code>, <code>deny-button</code> or <code>none</code>.</td>
                            </tr>

                            <tr>
                                <td>closeOnConfirm</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>Determines whether or not the dialog should be closed when the confirm button is clicked. Set to <code>true</code> to close the dialog on confirmation.</td>
                            </tr>

                            <tr>
                                <td>backdropDismissible</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td></td>
                                <td>Determines whether or not the dialog can be closed by clicking the backdrop. Set to <code>false</code> to disable this behaviour.</td>
                            </tr>

                            <tr>
                                <td>loading</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>Determines whether or not a loading spinner is shown on the confirm button. Setting this prop to <code>true</code> will show a spinner on the confirm button, disable the deny button and prevent the modal from being dismissed.</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                * Required prop
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
                                <td>The default slot holds the confirm dialog content and can contain HTML.</td>
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
                                <td>opened</td>
                                <td>Dispatched</td>
                                <td>Dispatched when the confirm dialog is opened. Listen for it using <code>@opened</code>.</td>
                            </tr>

                            <tr>
                                <td>closed</td>
                                <td>Dispatched</td>
                                <td>Dispatched when the confirm dialog is closed. Listen for it using <code>@closed</code>.</td>
                            </tr>

                            <tr>
                                <td>confirmed</td>
                                <td>Dispatched</td>
                                <td>Dispatched when the confirm button is selected. Listen for it using <code>@confirmed</code>.</td>
                            </tr>

                            <tr>
                                <td>denied</td>
                                <td>Dispatched</td>
                                <td>Dispatched when the deny button is selected. Listen for it using <code>@denied</code>.</td>
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
import UiConfirm from '../../src/UiConfirm.vue';

export default {
    data() {
        return {
            confirmResult: '',
            publishRequestInProgress: false,
            deleteRequestInProgress: false,
            show: {
                genericConfirm: false,
                genericConfirm2: false,
                publishConfirm: false,
                deleteConfirm: false
            }
        };
    },

    methods: {
        confirmed() {
            this.confirmResult = 'You confirmed the request.';
        },

        denied() {
            this.confirmResult = 'You denied the request.';
        },

        publishConfirmed() {
            this.publishRequestInProgress = true;

            setTimeout(() => {
                this.publishRequestInProgress = false;

                this.show.publishConfirm = false;
                this.confirmResult = 'The post was published.';
            }, 5000);
        },

        publishDenied() {
            this.confirmResult = 'You chose to NOT publish the post.';
        },

        deleteConfirmed() {
            this.confirmResult = 'You chose to delete the post.';
        },

        deleteDenied() {
            this.confirmResult = 'You chose to NOT delete the post.';
        }
    },

    components: {
        UiTab,
        UiTabs,
        UiButton,
        UiConfirm
    }
};
</script>

<style lang="stylus">
.section-ui-confirm {
    .group {
        margin-bottom: 18px;
    }
}
</style>
