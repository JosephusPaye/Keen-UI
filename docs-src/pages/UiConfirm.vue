<template>
    <section class="page page-ui-confirm">
        <h2 class="page__title">UiConfirm</h2>

        <p>UiConfirm shows a confirmation dialog using <a href="#/ui-modal">UiModal</a>.</p>

        <p>The confirm and deny buttons can be customized (text, icon and color) and the component emits <code>confirm</code> and <code>deny</code> events.</p>

        <p>UiConfirm can also show a loading spinner on the confirm button (useful for AJAX operations).</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiConfirmDocs.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h3>

        <div class="demo">
            <ui-confirm close-on-confirm ref="confirm1" @confirm="onConfirm" @deny="onDeny">
                Do you want to confirm this?
            </ui-confirm>

            <ui-confirm
                autofocus="confirm-button"
                close-on-confirm
                confirm-button-text="Confirm"
                deny-button-text="Deny"
                ref="confirm2"
                title="Confirm this"

                @confirm="onConfirm"
                @deny="onDeny"
            >
                The confirm button in this dialog is focussed by default.
            </ui-confirm>

            <ui-confirm
                autofocus="none"
                close-on-confirm
                confirm-button-text="Confirm"
                deny-button-text="Deny"
                ref="confirm3"
                title="Confirm this"

                @confirm="onConfirm"
                @deny="onDeny"
            >
                No button in this dialog is focussed by default.
            </ui-confirm>

            <ui-confirm
                confirm-button-icon="public"
                confirm-button-text="Publish"
                deny-button-text="Cancel"
                ref="publishConfirm"
                title="Publish Post"
                type="primary"

                :loading="publishRequestInProgress"

                @confirm="onConfirmPublish"
                @deny="onDenyPublish"
            >
                Publish post for the world to see?
            </ui-confirm>

            <ui-confirm
                close-on-confirm
                confirm-button-icon="delete"
                confirm-button-text="Delete"
                deny-button-text="Keep"
                ref="deleteConfirm"
                title="Delete Post"
                type="danger"

                @confirm="onConfirmDelete"
                @deny="onDenyDelete"
            >
                Are you sure you want to delete the post?
            </ui-confirm>

            <h4 class="page__demo-title">Default</h4>

            <div class="group">
                <ui-button @click.native="showConfirm('confirm1')">Default Confirm</ui-button>
            </div>

            <h4 class="page__demo-title">Autofocus</h4>

            <ui-button @click.native="showConfirm('confirm2')">Focus Primary Button</ui-button>
            <ui-button @click.native="showConfirm('confirm3')">Focus None</ui-button>

            <h4 class="page__demo-title">Types</h4>

            <div class="group">
                <ui-button
                    color="primary"
                    @click.native="showConfirm('publishConfirm')"
                >Publish Post</ui-button>

                <ui-button
                    color="red"
                    type="secondary"
                    @click.native="showConfirm('deleteConfirm')"
                >Delete Post</ui-button>
            </div>

            <pre v-if="confirmResult.length" class="language-html"><code>{{ confirmResult }}</code></pre>
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
                                <td>title</td>
                                <td>String</td>
                                <td><code>"UiConfirm title"</code></td>
                                <td>
                                    <p>The confirm modal title (text only).</p>
                                    <p>If you want to use HTML in the header, consider using a <a href="#/ui-modal">UiModal</a> directly.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>type</td>
                                <td>String</td>
                                <td><code>"primary"</code></td>
                                <td>
                                    <p>The type of confirm modal (determines the color of the primary confirm button).</p>
                                    <p>Can be one of <code>default</code>, <code>primary</code>, <code>accent</code>, <code>success</code>, <code>warning</code> or <code>danger</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>confirmButtonText</td>
                                <td>String</td>
                                <td><code>"OK"</code></td>
                                <td>The confirm button text.</td>
                            </tr>

                            <tr>
                                <td>confirmButtonIcon</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The confirm button icon. Can be any of the <a href="https://design.google.com/icons/" target="_blank" rel="noopener">Material Icons</a>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>denyButtonText</td>
                                <td>String</td>
                                <td><code>"Cancel"</code></td>
                                <td>The deny button text.</td>
                            </tr>

                            <tr>
                                <td>denyButtonIcon</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The deny button icon. Can be any of the <a href="https://design.google.com/icons/" target="_blank" rel="noopener">Material Icons</a>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>autofocus</td>
                                <td>String</td>
                                <td><code>"deny-button"</code></td>
                                <td>
                                    <p>The button to autofocus when the modal is opened.</p>
                                    <p>Can be one of <code>confirm-button</code>, <code>deny-button</code> or <code>none</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>loading</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not a loading spinner is shown on the confirm button.</p>
                                    <p>Setting this prop to <code>true</code> will show a spinner on the confirm button, disable the deny button and prevent the modal from being dismissed.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>closeOnConfirm</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not the modal should be closed when the confirm button is clicked.</p>
                                    <p>Set to <code>true</code> to close the modal on confirmation.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>dismissOn</td>
                                <td>String</td>
                                <td class="no-wrap"><code>"backdrop close-button esc"</code></td>
                                <td>
                                    <p>The type of event or events that will cause the confirm to be dismissed.</p>
                                    <p>One or more of <code>backdrop</code>, <code>close-button</code>, or <code>esc</code>. Separate multiple events with a space.</p>
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
                                <td>Holds the confirm dialog content and can contain HTML.</td>
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
                                <td>confirm</td>
                                <td>
                                    <p>Emitted when the user clicks the confirm button.</p>
                                    <p>Listen for it using <code>@confirm</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>deny</td>
                                <td>
                                    <p>Emitted when the user clicks the deny button.</p>
                                    <p>Listen for it using <code>@deny</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>open</td>
                                <td>
                                    <p>Emitted when the confirm modal is opened.</p>
                                    <p>Listen for it using <code>@open</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>close</td>
                                <td>
                                    <p>Emitted when the confirm modal is closed.</p>
                                    <p>Listen for it using <code>@close</code>.</p>
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
                                <td><code>open()</code></td>
                                <td>
                                    <p>Call this method to open the confirm.</p>
                                </td>
                            </tr>

                            <tr>
                                <td><code>close()</code></td>
                                <td>
                                    <p>Call this method to close the confirm.</p>
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
import UiTab from 'src/UiTab.vue';
import UiTabs from 'src/UiTabs.vue';
import UiConfirm from 'src/UiConfirm.vue';
import UiButton from 'src/UiButton.vue';

export default {
    data() {
        return {
            confirmResult: '',
            publishRequestInProgress: false,
            deleteRequestInProgress: false
        };
    },

    methods: {
        showConfirm(ref) {
            this.$refs[ref].open();
        },

        hideConfirm(ref) {
            this.$refs[ref].close();
        },

        onConfirm() {
            this.confirmResult = 'You confirmed the request.';
        },

        onDeny() {
            this.confirmResult = 'You denied the request.';
        },

        onConfirmPublish() {
            this.publishRequestInProgress = true;

            setTimeout(() => {
                this.publishRequestInProgress = false;
                this.hideConfirm('publishConfirm');
                this.confirmResult = 'The post was published.';
            }, 5000);
        },

        onDenyPublish() {
            this.confirmResult = 'You chose to NOT publish the post.';
        },

        onConfirmDelete() {
            this.confirmResult = 'You chose to delete the post.';
        },

        onDenyDelete() {
            this.confirmResult = 'You chose to keep the post.';
        }
    },

    components: {
        UiTab,
        UiTabs,
        UiConfirm,
        UiButton
    }
};
</script>

<style lang="sass">
.page-ui-confirm {
    .group {
        margin-bottom: 18px;
    }
}
</style>
