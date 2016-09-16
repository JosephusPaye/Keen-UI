<template>
    <section class="section section-ui-modal">
        <h2 class="section-heading">
            UiModal <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiModal.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h2>

        <p>UiModal is used to show modals. It's header, body and footer can be fully customized using <code>slots</code>.</p>

        <p>UiModals are keyboard accessible (can be closed with the ESC key, keep tab focus in the modal and return focus to the element that had it before the modal was open).</p>

        <p>UiModals can also be optionally dismissed by clicking their backdrop. Dismissing can also be disabled to prevent the user from closing the modal.</p>

        <p>UiModals have two transition types: a simple fade in, and scale in from above. They also emit events when opened and closed.</p>

        <p>UiModals have three types: <code>small</code>, <code>normal</code> (default) and <code>large</code>. These sizes can also be customized using CSS. UiModals also automatically add a vertical scrollbar when the modal content overflows the available space.</p>

        <h3>
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiModalDocs.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h3>

        <div class="demo">
            <ui-modal
                v-model="show.modal1" header="Default Modal"
                body="Hi there, World. What's happening?"
            ></ui-modal>

            <ui-modal
                v-model="show.modal2" header="Can't close by clicking backdrop"
                :backdrop-dismissible="false" body="Hi there, World. What's happening?"
            ></ui-modal>

            <ui-modal
                v-model="show.modal3" header="Stuck with me!" :dismissible="false"
                body="Can't close at all. Refresh the page to continue."
            ></ui-modal>

            <ui-modal
                v-model="show.modal4" header="Header &times; button is hidden"
                body="Hi there, World. What's happening?" :show-close-button="false"
            ></ui-modal>

            <ui-modal
                v-model="show.modal5"
            >
                <div slot="header">
                    <b>Custom</b> header has <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener">HTML</a>
                </div>

                Hey, some <b>nice</b> text here.
            </ui-modal>

            <ui-modal
                v-model="show.modal6" header="No Footer" hide-footer
                body="Hi there, World. What's happening?"
            ></ui-modal>

            <ui-modal
                v-model="show.modal7" header="Custom Footer"
                body="Hi there, World. What's happening?"
            >
                <div slot="footer">
                    <ui-button color="primary" @click.native.stop="say('Hi~')">Say Hi</ui-button>
                    <ui-button @click.native="show.modal7 = false">Close</ui-button>
                </div>
            </ui-modal>

            <ui-modal
                v-model="show.modal8" type="small" header="Small Modal"
                body="Hi there, World. What's happening?"
            ></ui-modal>

            <ui-modal
                v-model="show.modal9" type="large" header="Large Modal"
                body="Hi there, World. What's happening?"
            ></ui-modal>

            <ui-modal
                v-model="show.modal10" header="Scrolling Modal"
            >
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

            <ui-modal
                v-model="show.modal11" header="Fade In Modal" transition="fade"
                body="Hi there, World. What's happening?"
            ></ui-modal>

            <div class="group">
                <ui-button @click.native="show.modal1 = true">Default Modal</ui-button>
                <ui-button @click.native="show.modal2 = true">Can't close by clicking backdrop</ui-button>
                <ui-button @click.native="show.modal3 = true">Can't close at all</ui-button>
            </div>

            <div class="group">
                <ui-button @click.native="show.modal4 = true">No header close button</ui-button>
                <ui-button @click.native="show.modal5 = true">Custom Header</ui-button>
            </div>

            <div class="group">
                <ui-button @click.native="show.modal6 = true">No footer</ui-button>
                <ui-button @click.native="show.modal7 = true">Custom footer</ui-button>
            </div>

            <div class="group">
                <ui-button @click.native="show.modal8 = true">Small Modal</ui-button>
                <ui-button @click.native="show.modal9 = true">Large Modal</ui-button>
                <ui-button @click.native="show.modal10 = true">Scrolling Modal</ui-button>
            </div>

            <div class="group">
                <ui-button @click.native="show.modal11 = true">Fade in Modal</ui-button>
            </div>
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
                                <td>Two-way</td>
                                <td>
                                    <p>Determines whether or not the modal is shown.</p>
                                    <p>Changing this value will show/hide the modal.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>type</td>
                                <td>String</td>
                                <td><code>"normal"</code></td>
                                <td></td>
                                <td>
                                    <p>Determines the size of the modal. One of <code>small</code>, <code>normal</code>, or <code>large</code>.</p>
                                    <p>You can also customize the modal size by overriding the <code>width</code> property of <code>.ui-modal-container</code> using CSS.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>role</td>
                                <td>String</td>
                                <td><code>"dialog"</code></td>
                                <td></td>
                                <td>
                                    <p>The ARIA role for the modal (important for accessibility).</p>
                                    <p>One of <code>dialog</code> or <code>alertdialog</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>header</td>
                                <td>String</td>
                                <td><code>"UiModal Header"</code></td>
                                <td></td>
                                <td>
                                    <p>Header content for the modal (text only).</p>
                                    <p>To use HTML in the header, use the <code>header</code> slot.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>body</td>
                                <td>String</td>
                                <td><code>"UiModal body"</code></td>
                                <td></td>
                                <td>
                                    <p>Body content for the modal (text only).</p>
                                    <p>To use HTML in the body, use the <code>default</code> slot.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>transition</td>
                                <td>String</td>
                                <td class="no-wrap"><code>"ui-modal-scale"</code></td>
                                <td></td>
                                <td>
                                    <p>The modal enter/leave transition.</p>
                                    <p>One of <code>ui-modal-scale</code> or <code>ui-modal-fade</code>.</p>
                                    <p>You can also provide the name of your own custom <a href="https://vuejs.org/guide/transitions.html" target="_blank" rel="noopener">Vue transition</a>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>showCloseButton</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the header close button is shown.</p>
                                    <p>Set to <code>false</code> to hide the header close button.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>hideFooter</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the footer block is hidden.</p>
                                    <p>Set to <code>true</code> to disable the footer block.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>dismissible</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the modal can be dismissed.</p>
                                    <p>Set to <code>false</code> to disable the close button and prevent the user from dismissing the modal.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>backdropDismissible</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the modal can be dismissed by clicking the backdrop.</p>
                                    <p>Set to <code>false</code> to disable closing the modal when the backdrop is clicked.</p>
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
                                <td>The default slot holds the modal body and can contain HTML.</td>
                            </tr>

                            <tr>
                                <td>header</td>
                                <td>The header slot holds the modal header and can contain HTML.</td>
                            </tr>

                            <tr>
                                <td>footer</td>
                                <td>The footer slot holds the modal footer and can contain HTML.</td>
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
                                    <p>Dispatched when the modal is opened.</p>
                                    <p>Listen for it using <code>@opened</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="new-prop">revealed</td>
                                <td>Dispatched</td>
                                <td>
                                    <p>Dispatched when the modal open transition completes.</p>
                                    <p>Listen for it using <code>@revealed</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>closed</td>
                                <td>Dispatched</td>
                                <td>
                                    <p>Dispatched when the modal is closed.</p>
                                    <p>Listen for it using <code>@closed</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="new-prop">hidden</td>
                                <td>Dispatched</td>
                                <td>
                                    <p>Dispatched when the modal close transition completes.</p>
                                    <p>Listen for it using <code>@hidden</code>.</p>
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
import UiModal from '../../src/UiModal.vue';

export default {
    data() {
        return {
            show: {
                modal1: false,
                modal2: false,
                modal3: false,
                modal4: false,
                modal5: false,
                modal6: false,
                modal7: false,
                modal8: false,
                modal9: false,
                modal10: false,
                modal11: false
            }
        };
    },
    methods: {
        say(str) {
            alert(str)
        }
    },
    components: {
        UiTab,
        UiTabs,
        UiButton,
        UiModal
    }
};
</script>

<style lang="stylus">
.section-ui-modal {
    .group {
        margin-bottom: 16px;
    }

    .ui-button {
        margin-bottom: 8px;
    }

    .ui-modal-footer {
        .ui-button {
            margin-bottom: 0;
        }
    }
}
</style>
