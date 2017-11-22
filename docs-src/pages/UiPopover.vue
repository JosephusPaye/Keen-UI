<template>
    <section class="page page--ui-popover">
        <h2 class="page__title">UiPopover</h2>

        <p>UiPopover shows content in a dropdown/popover. It can be setup to contain tab focus in the popover, returning focus to the trigger element on close.</p>

        <p>The popover position relative to the trigger and the event that causes the popover to open can be customized.</p>

        <p>The dropdown is powered by <a href="https://github.com/HubSpot/drop" target="_blank" rel="noopener">Drop</a>, which uses <a href="https://github.com/HubSpot/tether" target="_blank" rel="noopener">Tether</a>.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiPopover.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <h4 class="page__demo-title">Basic, contain focus</h4>

            <button class="popover-trigger">
                Click here for the popover

                <ui-popover class="my-custom-popover" contain-focus remove-on-close>
                    <p>Hey there, some popover content here. <button>Button</button></p>
                    <p>Add <b>whatever</b> content you want here. <button>Another Button</button></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </ui-popover>
            </button>

            <h4 class="page__demo-title">Raised: false</h4>

            <button class="popover-trigger">
                Click here for the popover

                <ui-popover class="my-custom-popover" :raised="false">
                    <p>Hey there, some popover content here. <button>Button</button></p>
                    <p>Add <b>whatever</b> content you want here. <button>Another Button</button></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </ui-popover>
            </button>

            <h4 class="page__demo-title">Open on hover</h4>

            <button class="popover-trigger">
                Hover here for the popover

                <ui-popover class="my-custom-popover" open-on="hover">
                    <p>Hey there, some popover content here. <button>Button</button></p>
                    <p>Add <b>whatever</b> content you want here. <button>Another Button</button></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </ui-popover>
            </button>

            <h4 class="page__demo-title">Custom position (may change based on available space)</h4>

            <button class="popover-trigger">
                Click here for a popover dropping bottom right of this trigger

                <ui-popover class="my-custom-popover" position="bottom right">
                    <p>Hey there, some popover content here. <button>Button</button></p>
                    <p>Add <b>whatever</b> content you want here. <button>Another Button</button></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </ui-popover>
            </button>

            <br><br>

            <button class="popover-trigger">
                Click here for top left popover

                <ui-popover class="my-custom-popover" position="top left">
                    <p>Hey there, some popover content here. <button>Button</button></p>
                    <p>Add <b>whatever</b> content you want here. <button>Another Button</button></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </ui-popover>
            </button>

            <h4 class="page__demo-title">Can be opened/closed programmatically</h4>

            <a @click="openPopover" tabindex="0">Click to open the popover below</a>

            <br><br>

            <button class="popover-trigger">
                Default trigger

                <ui-popover class="my-custom-popover" ref="popover">
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
                                <td>trigger</td>
                                <td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Element" target="_blank" rel="noopener">Element</a>, String, VueComponent</td>
                                <td>Parent element</td>
                                <td>
                                    <p>An Element or VueComponent instance to use for the trigger, or a CSS selector string.</p>
                                    <p>The event listeners will be attached to this element, and when any of the <code>openOn</code> events are triggered, the popover will be shown.</p>
                                    <p>If <code>trigger</code> is not provided or the selector doesn't match any element, the popover's immediate parent element is used as the trigger. Note that the parent used is the popover's parent in the DOM, not the Vue parent component.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>position</td>
                                <td>String</td>
                                <td class="no-wrap"><code>"bottom left"</code></td>
                                <td>
                                    <p>The position of the popover relative to the trigger.</p>
                                    <p>Can be any one of <code>top left</code>, <code>left top</code>, <code>left middle</code>, <code>left bottom</code>, <code>bottom left</code>, <code>bottom center</code>, <code>bottom right</code>, <code>right bottom</code>, <code>right middle</code>, <code>right top</code>, <code>top right</code>, <code>top center</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>constrainToScrollParent</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td>
                                    <p>When set to <code>true</code>, the popover will flip it's position if the position will cause it to overflow the trigger's first scroll parent. The scroll parent is the parent that has <code>overflow: auto</code> or <code>overflow: scroll</code> set, or <code>&lt;body&gt;</code>, whichever comes first.</p>
                                    <p>Set to <code>false</code> to disable the flipping behavior. This is useful for popovers in modals, if you want the popover to drop outside of the boundaries of the modal.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>openOn</td>
                                <td>String</td>
                                <td><code>"click"</code></td>
                                <td>
                                    <p>The type of event or events that will cause the popover to open.</p>
                                    <p>One or more of <code>click</code>, <code>hover</code>, <code>focus</code>, or <code>always</code>. For <code>always</code> the popover is opened when rendered and it remains open. Separate multiple events with a space.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>removeOnClose</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether the popover element should be removed from the DOM when it is closed. The element will be added back the next time the popover is opened.</p>
                                    <p>Set to <code>true</code> to remove the popover element on close.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>containFocus</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not tab focus should be contained in the popover.</p>
                                    <p>Set to <code>true</code> to contain focus within the popover.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>focusRedirector</td>
                                <td>Function</td>
                                <td></td>
                                <td>
                                    <p>A function that will be called to redirect the tab focus when it is about to leave the popover. The handler is called with the focus event as the first argument and an object with the following properties as the second argument:</p>

                                    <ul>
                                        <li><code>isTabbingForward</code>: (Boolean) - <code>true</code> if the focus overflow was caused by a tab in the forward direction, <code>false</code> otherwise.</li>
                                    </ul>

                                    <p>If <code>focusRedirector</code> is not provided and <code>containFocus</code> is <code>true</code>, focus is held and cycled within the popover.</p>
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
                                    <p>Emitted when the popover is opened.</p>
                                    <p>Listen for it using <code>@open</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>close</td>
                                <td>
                                    <p>Emitted when the popover is closed.</p>
                                    <p>Listen for it using <code>@close</code>.</p>
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
                                    <p>Call this method to open the popover.</p>
                                </td>
                            </tr>

                            <tr>
                                <td><code>close()</code></td>
                                <td>
                                    <p>Call this method to close the popover.</p>
                                </td>
                            </tr>

                            <tr>
                                <td><code>toggle()</code></td>
                                <td>
                                    <p>Call this method to toggle the popover.</p>
                                </td>
                            </tr>

                            <tr>
                                <td><code>isOpen()</code></td>
                                <td>
                                    <p>Call this method to determine if the popover is open.</p>
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

export default {
    methods: {
        openPopover() {
            setTimeout(this.$refs.popover.toggle, 0);
        }
    },

    components: {
        UiPopover,
        UiTab,
        UiTabs
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

.ui-popover.my-custom-popover {
    padding: 16px;

    p:first-child {
        margin-top: 0;
    }

    p:last-child {
        margin-bottom: 0;
    }
}
</style>
