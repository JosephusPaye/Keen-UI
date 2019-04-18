<template>
    <section class="page page--ui-modal">
        <h2 class="page__title">UiModal</h2>

        <p>UiModal is used to show modal dialogs. The modal's header, body and footer can be customized using <code>slots</code>.</p>

        <p>UiModal is keyboard accessible (can be closed with the ESC key, keep tab focus in the modal and return focus to the element that had it before the modal was open).</p>

        <p>UiModal can be dismissed by one or more of these three events: on ESC key press, clicking the backdrop, or clicking the close button. These events can be customized. Dismissing can be disabled to prevent the user from closing the modal.</p>

        <p>UiModal has three transition types (scale up, scale down, fade) and four sizes (small, normal, large and fullscreen). Custom sizes can be achieved using CSS.</p>

        <p>The modal will automatically add a vertical scrollbar to its body when the content overflows the available space.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiModal.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__demo">
            <div class="page__demo-group">
                <h4 class="page__demo-title">Basic</h4>

                <ui-button @click="openModal('modal1')">Basic Modal</ui-button>
                <ui-modal ref="modal1" title="Basic Modal">
                    Hello World! What's happening?
                </ui-modal>

                <h4 class="page__demo-title">Close methods</h4>

                <ui-button @click="openModal('modal2')">Can't close by clicking backdrop</ui-button>
                <ui-modal
                    dismiss-on="close-button esc"
                    ref="modal2"
                    title="Can't close by clicking backdrop"
                >
                    Hello World! What's happening?
                </ui-modal>

                <ui-button @click="openModal('modal3')">Can't close at all</ui-button>
                <ui-modal ref="modal3" title="Stuck with me!" :dismissible="false">
                    Can't close at all. Refresh the page to continue.
                </ui-modal>
            </div>

            <div class="page__demo-group">
                <h4 class="page__demo-title">Custom header and footer</h4>

                <ui-button @click="openModal('modal4')">No header close button</ui-button>
                <ui-modal
                    ref="modal4"
                    remove-close-button
                    title="Header × button is removed"
                >Hello World! What's happening?</ui-modal>

                <ui-button @click="openModal('modal5')">Custom header</ui-button>
                <ui-modal ref="modal5">
                    <div slot="header">
                        <b>Custom</b> header has <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener">HTML</a>
                    </div>

                    Hey, some <b>nice</b> text here.
                </ui-modal>

                <ui-button @click="openModal('modal6')">With footer</ui-button>
                <ui-modal ref="modal6" title="With footer">
                    Hello, World. What's happening?

                    <div slot="footer">
                        <ui-button color="primary">Say Hi</ui-button>
                        <ui-button @click="closeModal('modal6')">Close</ui-button>
                    </div>
                </ui-modal>
            </div>

            <div class="page__demo-group">
                <h4 class="page__demo-title">Top alignment</h4>

                <ui-button @click="openModal('modal601')">Aligned top</ui-button>
                <ui-modal ref="modal601" title="Aligned top" align-top>
                    Hello, World. What's happening?

                    <div slot="footer">
                        <ui-button color="primary">Say Hi</ui-button>
                        <ui-button @click="closeModal('modal601')">Close</ui-button>
                    </div>
                </ui-modal>

                <ui-button @click="openModal('modal602')">Aligned top, custom margin</ui-button>
                <ui-modal ref="modal602" title="Aligned top" align-top :align-top-margin="200">
                    This is aligned top, with a custom top margin of 200px.

                    <div slot="footer">
                        <ui-button color="primary">Say Hi</ui-button>
                        <ui-button @click="closeModal('modal602')">Close</ui-button>
                    </div>
                </ui-modal>
            </div>

            <div class="page__demo-group">
                <h4 class="page__demo-title">Sizes</h4>

                <ui-button @click="openModal('modal7')">Small</ui-button>
                <ui-modal ref="modal7" size="small" title="Small modal">
                    Hello, World. What's happening?
                </ui-modal>

                <ui-button @click="openModal('modal701')">Normal (default)</ui-button>
                <ui-modal ref="modal701" size="normal" title="Normal modal">
                    Hello, World. What's happening?
                </ui-modal>

                <ui-button @click="openModal('modal8')">Large</ui-button>
                <ui-modal ref="modal8" size="large" title="Large modal">
                    Hello, World. What's happening?
                </ui-modal>

                <ui-button @click="openModal('modal801')">Fullscreen</ui-button>
                <ui-modal ref="modal801" size="fullscreen" title="Fullscreen modal" transition="scale-up">
                    This is a fullscreen modal with a <code>scale-up</code> transition.
                </ui-modal>

                <ui-button @click="openModal('modal802')">Auto width</ui-button>
                <ui-modal ref="modal802" size="auto" title="Auto width modal">
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. {{ modal802Content }}</div>
                    <br>
                    <input type="text" v-model="modal802Content" placeholder="Type here to make the modal bigger">
                </ui-modal>

                <ui-button @click="openModal('modal9')">Scrolling Modal</ui-button>
                <ui-modal ref="modal9" title="Scrolling Modal" transition="scale-up">
                    <p>This is a scrolling modal with a <code>scale-up</code> transition.</p>
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
            </div>

            <div class="page__demo-group">
                <h4 class="page__demo-title">Transitions</h4>

                <ui-button @click="openModal('modal10')">Scale up</ui-button>
                <ui-modal ref="modal10" title="Scale Up Transition" transition="scale-up">
                    Hello, World. What's happening?
                </ui-modal>

                <ui-button @click="openModal('modal101')">Scale down (default)</ui-button>
                <ui-modal ref="modal101" title="Scale Down Transition (default)" transition="scale-down">
                    Hello, World. What's happening?
                </ui-modal>

                <ui-button @click="openModal('modal102')">Fade in</ui-button>
                <ui-modal ref="modal102" title="Fade In Transition" transition="fade">
                    Hello, World. What's happening?
                </ui-modal>
            </div>

            <div class="page__demo-group">
                <h4 class="page__demo-title">Nesting</h4>

                <ui-button @click="openModal('modal11')">Nested Modal</ui-button>
                <ui-modal ref="modal11" title="Level 1">
                    Level 1 modal contents here

                    <ui-button @click="openModal('modal12')">Level 2</ui-button>
                    <ui-modal ref="modal12" title="Level 2">
                        Level 2 modal contents here

                        <ui-button @click="openModal('modal13')">Level 3</ui-button>
                        <ui-modal ref="modal13" title="Level 3">
                            Level 3 modal contents here

                            <ui-button color="primary" has-dropdown :constrain-dropdown-to-scroll-parent="false">
                                <div class="keen-docs__custom-popover-content" slot="dropdown">
                                    <p><b>Hey</b> there!</p>
                                    <p>Button dropdowns can have any content, not just menus. <button>A button</button></p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit dolor eos, earum repudiandae magnam sunt vitae officiis. Quae recusandae ut quisquam saepe odit consequuntur dolore, inventore quia. Mollitia, in, culpa. <button>Another button</button></p>
                                </div>

                                Dropdown
                            </ui-button>
                        </ui-modal>
                    </ui-modal>
                </ui-modal>
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
                                    <p>The size of the modal. One of <code>small</code>, <code>normal</code>, <code>large</code>, <code>fullscreen</code>, or <code>auto</code>.</p>
                                    <p>Setting the size to <code>auto</code> will make the modal's width grow to fit its content.</p>
                                    <p>For more custom sizes, override the <code>width</code> property of <code>.ui-modal__container</code> using CSS.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>alignTop</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the modal should be vertically aligned to the top of the viewport.</p>
                                    <p>When <code>true</code>, the modal will be top aligned, instead of vertically centered.</p>
                                    <p>You can customize the distance from the top of the viewport using the <code>alignTopMargin</code> prop.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>alignTopMargin</td>
                                <td>Number</td>
                                <td><code>60</code></td>
                                <td>
                                    <p>The modal's distance from the top of the viewport, in pixels.</p>
                                    <p>Applies only when the <code>alignTop</code> prop is <code>true</code>.</p>
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
                                <td><code>"scale-down"</code></td>
                                <td>
                                    <p>The modal enter/leave transition. One of <code>scale-up</code>, <code>scale-down</code> or <code>fade</code>.</p>
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
                                    <p>Emitted when the modal starts to open.</p>
                                    <p>Listen for it using <code>@open</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>reveal</td>
                                <td>
                                    <p>Emitted when the modal is revealed (i.e. when the open transition completes).</p>
                                    <p>Listen for it using <code>@reveal</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>close</td>
                                <td>
                                    <p>Emitted when the modal starts to close.</p>
                                    <p>Listen for it using <code>@close</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>hide</td>
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
    data() {
        return {
            modal802Content: ''
        };
    },

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

        input {
            width: 100%;
        }
    }

    .ui-button {
        margin-bottom: 8px;
    }
}
</style>
