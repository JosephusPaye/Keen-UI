<template>
    <section class="section section-ui-confirm">
        <h2 class="section-heading">
            UiConfirm <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiConfirm.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h2>

        <p>UiConfirm creates a confirmation dialog using <a href="#/ui-modal-docs">UiModal</a>.</p>

        <p>The confirm and deny buttons can be customized (text, icon and color) and the component emits <code>opened</code>, <code>closed</code>, <code>confirmed</code> and <code>denied</code> events.</p>

        <p>UiConfirm can also show a loading spinner on the primary button (useful for AJAX operations).</p>

        <h3>
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiConfirmDocs.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h3>

        <div class="demo">
            <ui-confirm

                @confirmed="confirmed" @denied="denied" v-model="show.genericConfirm"
                close-on-confirm
            >
                Do you want to confirm this?
            </ui-confirm>

            <ui-confirm
                header="Confirm this" confirm-button-text="Confirm" deny-button-text="Deny"
                @confirmed="confirmed" @denied="denied" v-model="show.genericConfirm2"
                autofocus="confirm" close-on-confirm
            >
                The confirm button in this UiConfirm is focussed by default.
            </ui-confirm>

            <ui-confirm
                type="primary" header="Publish Post" confirm-button-text="Publish"
                confirm-button-icon="send" deny-button-text="Cancel" @confirmed="publishConfirmed"
                @denied="publishDenied" v-model="show.publishConfirm"
                :loading="publishRequestInProgress"
            >
                Publish post for the world to see?
            </ui-confirm>

            <ui-confirm
                header="Delete Post" type="danger" confirm-button-text="Delete"
                confirm-button-icon="delete" deny-button-text="Cancel" @confirmed="deleteConfirmed"
                @denied="deleteDenied" v-model="show.deleteConfirm" close-on-confirm
            >
                Are you sure you want to delete the post?
            </ui-confirm>

            <div class="group">
                <ui-button @click.native="show.genericConfirm = true">Default Confirm</ui-button>

                <ui-button @click.native="show.genericConfirm2 = true">Focus Primary Button</ui-button>

                <ui-button
                    color="primary" @click.native="show.publishConfirm = true"
                >Publish Post</ui-button>

                <ui-button
                    type="flat" color="danger" @click.native="show.deleteConfirm = true"
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
                                <td>
                                    <p>Determines whether or not the modal is shown.</p>
                                    <p>Changing this value will show/hide the modal.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>type</td>
                                <td>String</td>
                                <td><code>"primary"</code></td>
                                <td></td>
                                <td>
                                    <p>The type of confirm modal (determines the color of the primary confirm button).</p>
                                    <p>Can be one of <code>default</code>, <code>primary</code>, <code>accent</code>, <code>success</code>, <code>warning</code> or <code>danger</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>header</td>
                                <td>String</td>
                                <td><code>true</code></td>
                                <td></td>
                                <td>
                                    <p>The confirm modal header (text only).</p>
                                    <p>If you want to use HTML in the header, consider directly using a <a href="#/ui-modal-docs">UiModal</a>.</p>
                                </td>
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
                                <td>
                                    <p>The confirm button icon. Can be any of the <a href="https://design.google.com/icons/" target="_blank" rel="noopener">Material Icons</a>.</p>
                                    <p>Note that this should be the icon codepoint if you want to support IE9.</p>
                                </td>
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
                                <td>
                                    <p>The deny button icon. Can be any of the <a href="https://design.google.com/icons/" target="_blank" rel="noopener">Material Icons</a>.</p>
                                    <p>Note that this should be the icon codepoint if you want to support IE9.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>autofocus</td>
                                <td>String</td>
                                <td><code>"none"</code></td>
                                <td></td>
                                <td>
                                    <p>The button to autofocus when the modal is opened.</p>
                                    <p>Can be one of <code>confirm-button</code>, <code>deny-button</code> or <code>none</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>closeOnConfirm</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the modal should be closed when the confirm button is clicked.</p>
                                    <p>Set to <code>true</code> to close the modal on confirmation.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>backdropDismissible</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the dialog can be closed by clicking the backdrop.</p>
                                    <p>Set to <code>false</code> to disable this behavior.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>loading</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not a loading spinner is shown on the confirm button.</p>
                                    <p>Setting this prop to <code>true</code> will show a spinner on the confirm button, disable the deny button and prevent the modal from being dismissed.</p>
                                </td>
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
                                <td>
                                    <p>Dispatched when the confirm dialog is opened.</p>
                                    <p>Listen for it using <code>@opened</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>closed</td>
                                <td>Dispatched</td>
                                <td>
                                    <p>Dispatched when the confirm dialog is closed.</p>
                                    <p>Listen for it using <code>@closed</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>confirmed</td>
                                <td>Dispatched</td>
                                <td>
                                    <p>Dispatched when the confirm button is selected.</p>
                                    <p>Listen for it using <code>@confirmed</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>denied</td>
                                <td>Dispatched</td>
                                <td>
                                    <p>Dispatched when the deny button is selected.</p>
                                    <p>Listen for it using <code>@denied</code>.</p>
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
