<template>
    <section class="page page--ui-modal">
        <h2 class="page__title">UiModal</h2>

        <p>UiModal is used to show modal dialogs. The modal's header, body and footer can be customized using <code>slots</code>.</p>

        <p>UiModal is keyboard accessible (can be closed with the ESC key, keep tab focus in the modal and return focus to the element that had it before the modal was open).</p>

        <p>UiModal can be dismissed by one or more of these three events: on ESC key press, clicking the backdrop, or clicking the close button. These events can be customized. Dismissing can be disabled to prevent the user from closing the modal.</p>

        <p>UiModal has two transition types: a simple fade in, and scale in from above. It also has three sizes: <code>small</code>, <code>normal</code> (default) and <code>large</code>. The modal size can also be customized using CSS.</p>

        <p>The modal will automatically add a vertical scrollbar to its body when the content overflows the available space.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiModal.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__demo">
            <div class="page__demo-group">
                <ui-modal ref="modal1" title="Basic Modal">
                    Hello World! What's happening?
                </ui-modal>

                <ui-button @click="openModal('modal1')">Basic Modal</ui-button>

                <ui-modal
                    dismiss-on="close-button esc"
                    ref="modal2"
                    title="Can't close by clicking backdrop"
                >
                    Hello World! What's happening?
                </ui-modal>

                <ui-button @click="openModal('modal2')">
                    Can't close by clicking backdrop
                </ui-button>

                <ui-modal ref="modal3" title="Stuck with me!" :dismissible="false">
                    Can't close at all. Refresh the page to continue.
                </ui-modal>

                <ui-button @click="openModal('modal3')">Can't close at all</ui-button>
            </div>

            <div class="page__demo-group">
                <ui-modal
                    ref="modal4"
                    remove-close-button
                    title="Header × button is removed"
                >Hello World! What's happening?</ui-modal>

                <ui-button @click="openModal('modal4')">No header close button</ui-button>

                <ui-modal ref="modal5">
                    <div slot="header">
                        <b>Custom</b> header has <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener">HTML</a>
                    </div>

                    Hey, some <b>nice</b> text here.
                </ui-modal>

                <ui-button @click="openModal('modal5')">Custom header</ui-button>
            </div>

            <div class="page__demo-group">
                <ui-modal ref="modal6" title="With footer">
                    Hi there, World. What's happening?

                    <div slot="footer">
                        <ui-button color="primary">Say Hi</ui-button>
                        <ui-button @click="closeModal('modal6')">Close</ui-button>
                    </div>
                </ui-modal>

                <ui-button @click="openModal('modal6')">With footer</ui-button>
            </div>

            <div class="page__demo-group">
                <ui-modal ref="modal7" size="small" title="Small modal">
                    Hi there, World. What's happening?
                </ui-modal>

                <ui-button @click="openModal('modal7')">Small Modal</ui-button>

                <ui-modal ref="modal8" size="large" title="Large modal">
                    Hi there, World. What's happening?
                </ui-modal>

                <ui-button @click="openModal('modal8')">Large Modal</ui-button>

                <ui-modal ref="modal9" title="Scrolling Modal">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit maiores perspiciatis suscipit sit nemo. Similique dignissimos, quas nisi aperiam dolorum omnis tenetur impedit, cum eaque harum officia? Rerum ullam ratione non perferendis, vel harum quam.</p>
                    <p>Provident iste, iusto adipisci, tenetur harum porro omnis sequi eveniet, accusantium facilis non ipsum. Excepturi deleniti tempore error atque aperiam quia dolorum perferendis. Libero accusamus dolor ipsam soluta impedit laboriosam optio veritatis obcaecati atque, asperiores!</p>
                    <p>Quidem reprehenderit dolorem ducimus, expedita repellendus amet eaque voluptas molestiae debitis, adipisci obcaecati in nulla dolor eos ex illum. Quas molestiae dolores voluptatibus ullam et, quisquam nisi, consequuntur quod unde earum corporis nam harum repellat.</p>
                    <p>Dolores sapiente saepe a explicabo quia possimus obcaecati quasi, quod asperiores dolore velit animi in eligendi incidunt, corporis at ut ipsum quos inventore quas suscipit tempore voluptatem voluptates. Quae dicta magni commodi sed, nisi animi!</p>
                    <p>Itaque voluptas facere totam et explicabo, asperiores unde, cumque amet illo, hic sit excepturi quis architecto maxime. Aliquam nostrum ad blanditiis consequatur cum nulla, hic, reiciendis optio voluptate tenetur, maxime quisquam assumenda. Dignissimos corrupti, magnam.</p>
                    <p>Quia, dolor, dolores? Sed dolor, maxime, nihil et cupiditate adipisci vel, accusantium repellendus voluptate quisquam optio dolorem illum tenetur rem. Voluptatem, officiis. Autem porro totam non vitae, officiis, ad dolorum, architecto dolor ratione, sed eligendi.</p>
                    <p>Similique quidem, magni, dolores quam repellat provident? Sunt beatae ipsum, dignissimos eos iusto rem aspernatur unde commodi nam reprehenderit quis molestias accusantium. Enim quo beatae velit quisquam veritatis! Sed dolorem praesentium quidem consequuntur, impedit dolores?</p>
                    <p>Ab, illum necessitatibus dolorum fuga. Aspernatur repellat assumenda aliquid officia aut accusamus veniam ipsum temporibus, suscipit nulla quibusdam libero aperiam aliquam, molestias in, possimus nemo soluta vero sed architecto. Libero doloremque aliquid a quam nostrum.</p>
                    <p>Non quam et earum soluta quasi animi numquam perferendis magni explicabo impedit tempore ducimus aperiam natus veniam, eum esse, unde delectus velit nihil laudantium dolorum rem. Soluta dignissimos libero, laboriosam cupiditate, sint ipsum ab maiores.</p>
                    <p>Totam quas nobis iste iure voluptatem. Dolores tempore voluptates omnis inventore, laborum eaque aperiam eligendi, maxime beatae, exercitationem fugit. Quae non, eum dignissimos consequuntur voluptate vel ipsam quos minima sequi. Illum eius natus maxime reiciendis.</p>
                </ui-modal>

                <ui-button @click="openModal('modal9')">Scrolling Modal</ui-button>
            </div>

            <div class="page__demo-group">
                <ui-modal ref="modal10" title="Fade In Modal" transition="fade">
                    Hello, World. What's happening?
                </ui-modal>

                <ui-button @click="openModal('modal10')">Fade in Modal</ui-button>
            </div>
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
                                <td><code>"UiModal title"</code></td>
                                <td>
                                    <p>The modal title (text only). For HTML, use the <code>header</code> slot.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>size</td>
                                <td>String</td>
                                <td><code>"normal"</code></td>
                                <td>
                                    <p>The size of the modal. One of <code>small</code>, <code>normal</code>, or <code>large</code>.</p>
                                    <p>You can customize the modal size by overriding the <code>width</code> property of <code>.ui-modal__container</code> using CSS.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>role</td>
                                <td>String</td>
                                <td><code>"dialog"</code></td>
                                <td>
                                    <p>The ARIA role for the modal (important for accessibility).</p>
                                    <p>One of <code>dialog</code> or <code>alertdialog</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>transition</td>
                                <td>String</td>
                                <td><code>"scale"</code></td>
                                <td>
                                    <p>The modal enter/leave transition. One of <code>scale</code> or <code>fade</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>removeHeader</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the modal header is removed.</p>
                                    <p>Set to <code>true</code> to remove the modal header (useful for custom modals).</p>
                                </td>
                            </tr>

                            <tr>
                                <td>removeCloseButton</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the header close button is removed.</p>
                                    <p>Set to <code>true</code> to remove the header close button.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>preventShift</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not to add a dummy scrollbar to the modal backdrop to prevent the modal shifting horizontally when the <code>&lt;body&gt;</code> scrollbar is hidden.</p>
                                    <p>Set to <code>true</code> to prevent the modal shift.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>dismissible</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td>
                                    <p>Whether or not the modal can be dismissed.</p>
                                    <p>Set to <code>false</code> to prevent the user from dismissing the modal. This will also hide the header close button.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>dismissOn</td>
                                <td>String</td>
                                <td class="no-wrap"><code>"backdrop close-button esc"</code></td>
                                <td>
                                    <p>The type of event or events that will cause the modal to be dismissed.</p>
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
                                <td>Holds the modal body and can contain HTML.</td>
                            </tr>

                            <tr>
                                <td>header</td>
                                <td>Holds the the modal header and can contain HTML.</td>
                            </tr>

                            <tr>
                                <td>footer</td>
                                <td>Holds the the modal footer and can contain HTML.</td>
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
                                <td>open</td>
                                <td>
                                    <p>Emitted when the modal is opened.</p>
                                    <p>Listen for it using <code>@open</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="new-prop">reveal</td>
                                <td>
                                    <p>Emitted when the modal is revealed (i.e. when the open transition completes).</p>
                                    <p>Listen for it using <code>@reveal</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>close</td>
                                <td>
                                    <p>Emitted when the modal is hidden (i.e. when the close transition completes).</p>
                                    <p>Listen for it using <code>@close</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="new-prop">hide</td>
                                <td>
                                    <p>Emitted when the modal close transition completes.</p>
                                    <p>Listen for it using <code>@hide</code>.</p>
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
                                    <p>Call this method to open the modal.</p>
                                </td>
                            </tr>

                            <tr>
                                <td><code>close()</code></td>
                                <td>
                                    <p>Call this method to close the modal.</p>
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
import UiButton from 'src/UiButton.vue';
import UiModal from 'src/UiModal.vue';
import UiTab from 'src/UiTab.vue';
import UiTabs from 'src/UiTabs.vue';

export default {
    methods: {
        openModal(ref) {
            this.$refs[ref].open();
        },

        closeModal(ref) {
            this.$refs[ref].close();
        }
    },

    components: {
        UiButton,
        UiModal,
        UiTab,
        UiTabs
    }
};
</script>

<style lang="scss">
.page--ui-modal {
    .page__demo-group {
        margin-bottom: 16px;
    }

    .ui-button {
        margin-bottom: 8px;
    }
}
</style>
