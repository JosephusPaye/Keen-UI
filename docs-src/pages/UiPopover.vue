<template>
    <section class="page page--ui-popover">
        <h2 class="page__title">UiPopover</h2>

        <p>UiPopover shows content in a dropdown/popover. It can be setup to contain tab focus in the popover, returning focus to the trigger element on close.</p>

        <p>The popover position relative to the trigger and the event that causes the popover to open can be customized.</p>

        <p>UiTooltip uses a custom version of <a href="https://atomiks.github.io/tippyjs/" target="_blank" rel="noopener">Tippy.js</a>, which uses <a href="https://popper.js.org" target="_blank" rel="noopener">Popper.js</a> for dynamic positioning.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiPopover.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <h4 class="page__demo-title">Dynamic content, contain focus</h4>

            <button class="popover-trigger">
                Click here for the popover

                <ui-popover class="my-popover-style" contain-focus>
                    <p>Try tabbing forward and backward and notice that focus is contained in the popover.</p>
                    <p><input type="text" placeholder="What's your name?" v-model="name"> {{ name ? 'Name: ' + name : '' }}</p>
                    <p><button>A Button</button></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </ui-popover>
            </button>

            <h4 class="page__demo-title">No drop shadow</h4>

            <button class="popover-trigger">
                Click here for the popover

                <ui-popover class="my-popover-style" :raised="false">
                    <p>Hey there, some popover content here. <button>Button</button></p>
                    <p>Add <b>whatever</b> content you want here.</p>
                    <p><button>A Button</button></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </ui-popover>
            </button>

            <h4 class="page__demo-title">Open on hover</h4>

            <button class="popover-trigger">
                Hover here for the popover

                <ui-popover class="my-popover-style" open-on="mouseenter">
                    <p>Hey there, some popover content here. <button>Button</button></p>
                    <p>Add <b>whatever</b> content you want here.</p>
                    <p><button>A Button</button></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </ui-popover>
            </button>

            <h4 class="page__demo-title">Position: <code>bottom-end</code></h4>

            <button class="popover-trigger">
                Click here for a popover dropping bottom right of this trigger

                <ui-popover class="my-popover-style" position="bottom-end">
                    <p>Hey there, some popover content here. <button>Button</button></p>
                    <p>Add <b>whatever</b> content you want here. <button>Another Button</button></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </ui-popover>
            </button>

            <h4 class="page__demo-title">Position: <code>top-start</code></h4>

            <button class="popover-trigger">
                Click here for top left popover

                <ui-popover class="my-popover-style" position="top-start">
                    <p>Hey there, some popover content here. <button>Button</button></p>
                    <p>Add <b>whatever</b> content you want here. <button>Another Button</button></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </ui-popover>
            </button>

            <h4 class="page__demo-title">Animations</h4>

            <button class="popover-trigger">
                Fade (default)

                <ui-popover class="my-popover-style" animation="fade">
                    <p>Hey there, some popover content here. <button>Button</button></p>
                    <p>Add <b>whatever</b> content you want here. <button>Another Button</button></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </ui-popover>
            </button>

            <button class="popover-trigger">
                Shift away

                <ui-popover class="my-popover-style" animation="shift-away">
                    <p>Hey there, some popover content here. <button>Button</button></p>
                    <p>Add <b>whatever</b> content you want here. <button>Another Button</button></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </ui-popover>
            </button>

            <button class="popover-trigger">
                Scale

                <ui-popover class="my-popover-style" animation="scale">
                    <p>Hey there, some popover content here. <button>Button</button></p>
                    <p>Add <b>whatever</b> content you want here. <button>Another Button</button></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </ui-popover>
            </button>

            <button class="popover-trigger">
                None

                <ui-popover class="my-popover-style" animation="none">
                    <p>Hey there, some popover content here. <button>Button</button></p>
                    <p>Add <b>whatever</b> content you want here. <button>Another Button</button></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </ui-popover>
            </button>

            <h4 class="page__demo-title">Inside a modal</h4>

            <ui-modal ref="modal">
                <div>The popover below has <code>constrainToScrollParent: false</code> to allow it to drop outside of the modal.</div>
                <br>
                <button class="popover-trigger">
                    Click here for popover

                    <ui-popover class="my-popover-style" :constrain-to-scroll-parent="false">
                        <p>Hey there, some popover content here. <button>Button</button></p>
                        <p>Add <b>whatever</b> content you want here. <button>Another Button</button></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </ui-popover>
                </button>
            </ui-modal>

            <button class="popover-trigger" @click="openModal">Open Modal</button>

            <h4 class="page__demo-title">Control programmatically</h4>

            <a @click="openPopover" tabindex="0">Click to open the popover below</a>

            <br><br>

            <button class="popover-trigger">
                Default trigger

                <ui-popover class="my-popover-style" ref="popover">
                    <p>Hey there, some popover content here. <button>Button</button></p>
                    <p>Add <b>whatever</b> content you want here. <button>Another Button</button></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </ui-popover>
            </button>
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
                                <td>animation</td>
                                <td>String</td>
                                <td><code>"fade"</code></td>
                                <td>
                                    <p>The type of animation to use when showing or hiding the popover.</p>
                                    <p>One of: <code>fade</code>, <code>shift-away</code>, <code>scale</code>, or <code>none</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>appendToBody</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td>
                                    <p>Whether or not the popover is appended to <code>document.body</code>.</p>
                                    <p>Set to <code>false</code> to append the popover to the trigger's parent element.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>closeOnScroll</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td>
                                    <p>Whether or not the popover should be closed when the user scrolls outside of it while it's open.</p>
                                    <p>Set to <code>false</code> to keep the popover open on external scroll.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>constrainToScrollParent</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td>
                                    <p>If <code>true</code>, the popover will flip its position if the position will cause it to overflow the trigger's scroll parent. The scroll parent is the first parent that has <code>overflow: auto</code> or <code>overflow: scroll</code> set, or <code>&lt;body&gt;</code>, whichever comes first.</p>
                                    <p>Set to <code>false</code> to disable the flipping behavior. This is useful for popovers in modals, if you want the popover to drop outside of the boundaries of the modal.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>containFocus</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not tab focus should be contained in the popover.</p>
                                    <p>If <code>false</code>, when the user tabs out of the popover, it will be closed and focus will be redirected to the trigger element.</p>
                                    <p>Set to <code>true</code> to contain focus within the popover.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the popover is disabled. Set to <code>true</code> to disable the popover.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>focusRedirector</td>
                                <td>Function</td>
                                <td></td>
                                <td>
                                    <p>A function that will be called to redirect the tab focus when it is about to leave the popover. The handler is called as follows:</p>

                                    <p><code>focusRedirector(event: FocusEvent, options)</code></p>

                                    <p>The second argument, <code>options</code>, has the following properties:</p>

                                    <ul>
                                        <li><code>isTabbingForward</code>: (Boolean) - <code>true</code> if the focus overflow was caused by a tab in the forward direction, <code>false</code> otherwise.</li>
                                    </ul>

                                    <p>If <code>focusRedirector</code> is not provided and <code>containFocus</code> is <code>true</code>, focus is contained and cycled within the popover.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>openOn</td>
                                <td>String</td>
                                <td><code>"click"</code></td>
                                <td>
                                    <p>The type of event or events that will cause the popover to open.</p>
                                    <p>One or more of <code>click</code>, <code>hover</code>/<code>mouseenter</code>, <code>focus</code>, or <code>manual</code>. For <code>manual</code>, the popover can only be opened and closed programmatically. Separate multiple events with a space.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>position</td>
                                <td>String</td>
                                <td class="no-wrap"><code>"bottom-start"</code></td>
                                <td>
                                    <p>The position of the popover relative to the trigger.</p>
                                    <p>One of <code>top</code>, <code>top-start</code>, <code>top-end</code>, <code>right</code>, <code>right-start</code>, <code>right-end</code>, <code>bottom</code>, <code>bottom-start</code>, <code>bottom-end</code>, <code>left</code>, <code>left-start</code>, <code>left-end</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>raised</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td>
                                    <p>Whether or not the popover has a drop shadow.</p>
                                    <p>Set to <code>false</code> to remove the default drop shadow.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>trigger</td>
                                <td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Element" target="_blank" rel="noopener">Element</a>,<br>VueComponent,<br>String</td>
                                <td>Parent element</td>
                                <td>
                                    <p>An Element, VueComponent instance, or CSS selector for an element to use as the trigger.</p>
                                    <p>It's recommended to leave <code>trigger</code> unspecified so that the component's immediate parent can be used as the trigger.</p>
                                    <p>The popover event listeners will be attached to this element, and when any of the <code>openOn</code> events are triggered, a popover will be shown next to the element.</p>
                                    <p>If <code>trigger</code> is not provided or the selector doesn't match any element, the popover's immediate parent element is used as the trigger. Note that the parent used is the popover's parent in the DOM, not the Vue parent component.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>zIndex</td>
                                <td>Number</td>
                                <td></td>
                                <td>
                                    <p>The popover z-index. Passed to Tippy.js.</p>
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
                                <th class="fixed-width">Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>open</td>
                                <td>
                                    <p>Emitted when the popover begins to open.</p>
                                    <p>Listen for it using <code>@open</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>reveal</td>
                                <td>
                                    <p>Emitted when the popover open transition completes.</p>
                                    <p>Listen for it using <code>@reveal</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>close</td>
                                <td>
                                    <p>Emitted when the popover begins to close.</p>
                                    <p>Listen for it using <code>@close</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>hide</td>
                                <td>
                                    <p>Emitted when the popover close transition completes.</p>
                                    <p>Listen for it using <code>@hide</code>.</p>
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
                                <th class="fixed-width">Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>(default)</td>
                                <td>
                                    <p>Holds the popover content and can contain HTML.</p>
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
                                <th class="fixed-width">Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td><code>open()</code></td>
                                <td>
                                    <p>Open the popover.</p>
                                </td>
                            </tr>

                            <tr>
                                <td><code>close()</code></td>
                                <td>
                                    <p>Close the popover.</p>
                                </td>
                            </tr>

                            <tr>
                                <td><code>toggle()</code></td>
                                <td>
                                    <p>Toggle the popover.</p>
                                </td>
                            </tr>

                            <tr>
                                <td><code>isOpen()</code></td>
                                <td>
                                    <p>Determine whether the popover is open.</p>
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
import UiPopover from 'src/UiPopover.vue';
import UiTab from 'src/UiTab.vue';
import UiTabs from 'src/UiTabs.vue';
import UiModal from 'src/UiModal.vue';

export default {
    data() {
        return {
            name: ''
        };
    },

    methods: {
        openPopover() {
            setTimeout(this.$refs.popover.toggle, 0);
        },

        openModal() {
            this.$refs.modal.open();
        }
    },

    components: {
        UiPopover,
        UiTab,
        UiTabs,
        UiModal
    }
};
</script>

<style lang="scss">
@import '~styles/imports';

.page--ui-popover {
    .popover-trigger {
        display: inline-block;
        padding: 6px 12px;
        font-family: $font-stack;
        font-size: 16px;
    }
}

.ui-popover.my-popover-style {
    padding: 16px;

    p:first-child {
        margin-top: 0;
    }

    p:last-child {
        margin-bottom: 0;
    }
}
</style>
