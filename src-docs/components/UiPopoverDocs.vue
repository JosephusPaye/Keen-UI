<template>
    <section class="section section-ui-popover">
        <h2 class="section-heading">
            UiPopover <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiPopover.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h2>

        <p>UiPopover is used to show arbitrary content in a dropdown. It can also be setup to contain tab focus in the popover, returning focus to the trigger element on close.</p>

        <p>The dropdown position relative to the trigger can be customized and the drop can either be always open or set to open on hover, click or focus of the trigger element.</p>

        <p>The dropdown is powered by <a href="https://github.com/HubSpot/drop" target="_blank" rel="noopener">Drop</a>, which uses <a href="https://github.com/HubSpot/tether" target="_blank" rel="noopener">Tether</a>.</p>

        <p>UiPopover is used internally by the <a href="#/ui-button-docs">UiButton</a> and <a href="#/ui-icon-button-docs">UiIconButton</a> components.</p>

        <h3>
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiPopoverDocs.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h3>

        <div class="demo">
            <h4>Default</h4>

            <a ref="triggerA" class="link-trigger">Click here for the popover</a>

            <ui-popover trigger="triggerA">
                Hey there, some popover content here.

                <p>Add <i>whatever</i> content you want here.</p>
            </ui-popover>

            <h4>Open on hover</h4>

            <a ref="triggerB" class="link-trigger">Hover here for the popover</a>

            <ui-popover trigger="triggerB" open-on="hover">
                Hey there, some popover content here.

                <p>Add <i>whatever</i> content you want here.</p>
            </ui-popover>

            <h4>Dropdown position (may change based on available space)</h4>

            <a ref="triggerC" class="link-trigger">Click here for a popover dropping bottom right</a>

            <ui-popover trigger="triggerC" dropdown-position="bottom right">
                Hey there, some popover content here.

                <p>Add <i>whatever</i> content you want here.</p>
            </ui-popover>

            <br><br>

            <a ref="triggerD" class="link-trigger">Click here for top left popover</a>

            <ui-popover trigger="triggerD" dropdown-position="top left">
                Hey there, some popover content here.

                <p>Add <i>whatever</i> content you want here.</p>
            </ui-popover>

            <h4>Can be opened and closed using events</h4>

            <ui-button @click.native="openPopover('popover-e')">Click to open</ui-button>

            <br><br>

            <a ref="triggerE" class="link-trigger">Default trigger (click to open)</a>

            <ui-popover trigger="triggerE" id="popover-e">
                Hey there, some popover content here.

                <p>Add <i>whatever</i> content you want here.</p>
            </ui-popover>
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
                            <th>Description</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>id</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>A unique identifier for the popover.</p>
                                    <p>Applied as the <code>id</code> attribute of the popover's root element and used when targeting a specific popover for open/close/toggle.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>trigger *</td>
                                <td class="no-wrap">HTMLElement</td>
                                <td></td>
                                <td>An Element to attach the popover to.</td>
                            </tr>

                            <tr>
                                <td>dropdownPosition</td>
                                <td>String</td>
                                <td class="no-wrap"><code>"bottom left"</code></td>
                                <td>
                                    <p>The position of the popover relative to the trigger.</p>

                                    <p>Can be any one of <code>top left</code>, <code>left top</code>, <code>left middle</code>, <code>left bottom</code>, <code>bottom left</code>, <code>bottom center</code>, <code>bottom right</code>, <code>right bottom</code>, <code>right middle</code>, <code>right top</code>, <code>top right</code>, <code>top center</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>openOn</td>
                                <td>String</td>
                                <td><code>"click"</code></td>
                                <td>
                                    <p>The type of event that will cause the popover to open.</p>

                                    <p>One of <code>click</code>, <code>hover</code>, <code>focus</code>, or <code>always</code>. For <code>always</code> the popover is opened when rendered and it remains open.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>containFocus</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td>
                                    <p>Determines whether or not tab focus should be contained in the popover.</p>
                                    <p>Set to <code>false</code> to allow tabbing to focus elements outside the popover.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                * Required prop
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
                                    <p>Dispatched when the popover is opened.</p>
                                    <p>Listen for it using <code>@opened</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>closed</td>
                                <td>Dispatched</td>
                                <td>
                                    <p>Dispatched when the popover is closed.</p>
                                    <p>Listen for it using <code>@closed</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap new-prop">ui-dropdown::open</td>
                                <td>Received</td>
                                <td>
                                    <p>Trigger this event to open the popover dropdown.</p>
                                    <p>You can optionally pass in an <code>id</code> to only open the dropdown of a specific popover (whose <code>id</code> you have set).</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap new-prop">ui-dropdown::close</td>
                                <td>Received</td>
                                <td>
                                    <p>Trigger this event to close the popover dropdown.</p>
                                    <p>You can optionally pass in an <code>id</code> to only close the dropdown of a specific popover (whose <code>id</code> you have set).</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap new-prop">ui-dropdown::toggle</td>
                                <td>Received</td>
                                <td>
                                    <p>Trigger this event to toggle the popover dropdown.</p>
                                    <p>You can optionally pass in an <code>id</code> to only toggle the dropdown of a specific popover (whose <code>id</code> you have set).</p>
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

import UiPopover from '../../src/UiPopover.vue'
import UiButton from '../../src/UiButton.vue'

import EventBus from '../../src/helpers/event-bus'

let menuOptions = [
    {
        id: 'edit',
        text: 'Edit',
        icon: 'edit',
        keyboardShortcut: 'Ctrl+E'
    }, {
        id: 'duplicate',
        text: 'Duplicate',
        icon: 'content_copy',
        keyboardShortcut: 'Ctrl+D'
    }, {
        id: 'share',
        text: 'Share',
        icon: 'share',
        keyboardShortcut: 'Ctrl+Shift+S',
        disabled: true
    }, {
        type: 'divider'
    }, {
        id: 'delete',
        text: 'Delete',
        icon: 'delete',
        keyboardShortcut: 'Del'
    }
];

export default {
    data() {
        return {
            menuOptions
        };
    },

    methods: {
        openPopover(id) {
            // Use timeout so the popover is open and then immediately closed due to the current
            // click event
            setTimeout(() => {
                EventBus.$emit('ui-dropdown::open', id);
            }, 100);
        }
    },

    components: {
        UiTab,
        UiTabs,
        UiPopover,
        UiButton
    }
};
</script>

<style lang="stylus">
.section-ui-popover {
    .link-trigger {
        font-size: 16px;
        cursor: pointer;
    }
}

.ui-popover {
    p {
        margin-bottom: 0;
    }
}
</style>
