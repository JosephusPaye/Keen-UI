<template>
    <section class="section section-ui-popover">
        <h2 class="section-heading">UiPopover</h2>

        <p>UiPopover is used to show arbitrary content in a dropdown. It can also be setup to contain tab focus in the popover, returning focus to the trigger element on close.</p>

        <p>The dropdown position relative to the trigger can be customized and can either be always open or set to open on hover, click or focus of the trigger element.</p>

        <p>The dropdown is powered by <a href="https://github.com/HubSpot/drop" target="_blank">Drop</a>, which uses <a href="https://github.com/HubSpot/tether" target="_blank">Tether</a>.</p>

        <p>UiPopover is used internally by the <a href="#/ui-button-demo">UiButton</a> and <a href="#/ui-icon-button-demo">UiIconButton</a> components.</p>

        <h3>Examples</h3>

        <div class="demo">
            <h4>Default</h4>

            <a v-el:trigger-a class="link-trigger">Click here for the popover</a>

            <ui-popover :trigger="$els.triggerA">
                Hey there, some popover content here.

                <p>Add <i>whatever</i> content you want here.</p>
            </ui-popover>

            <h4>Open on hover</h4>

            <a v-el:trigger-b class="link-trigger">Hover here for the popover</a>

            <ui-popover :trigger="$els.triggerB" open-on="hover">
                Hey there, some popover content here.

                <p>Add <i>whatever</i> content you want here.</p>
            </ui-popover>

            <h4>Dropdown position (may change based on available space)</h4>

            <a v-el:trigger-c class="link-trigger">Click here for a popover dropping bottom right</a>

            <ui-popover :trigger="$els.triggerC" dropdown-position="bottom right">
                Hey there, some popover content here.

                <p>Add <i>whatever</i> content you want here.</p>
            </ui-popover>

            <br><br>

            <a v-el:trigger-d class="link-trigger">Click here for top left popover</a>

            <ui-popover :trigger="$els.triggerD" dropdown-position="top left">
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
                                <td>trigger *</td>
                                <td class="no-wrap">HTMLElement</td>
                                <td></td>
                                <td>An Element to attach the popover to.</td>
                            </tr>

                            <tr>
                                <td>dropdownPosition</td>
                                <td>String</td>
                                <td class="no-wrap"><code>"bottom left"</code></td>
                                <td>The position of the popover relative to the trigger. Can be any one of <code>top left</code>, <code>left top</code>, <code>left middle</code>, <code>left bottom</code>, <code>bottom left</code>, <code>bottom center</code>, <code>bottom right</code>, <code>right bottom</code>, <code>right middle</code>, <code>right top</code>, <code>top right</code>, <code>top center</code>.</td>
                            </tr>

                            <tr>
                                <td>openOn</td>
                                <td>String</td>
                                <td><code>"click"</code></td>
                                <td>The type of event that will cause the popover to open. One of <code>click</code>, <code>hover</code>, <code>focus</code>, or <code>always</code>. For <code>always</code> the popover is opened when rendered and it remains open.</td>
                            </tr>

                            <tr>
                                <td>containFocus</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td>Determines whether or not tab focus should be contained in the popover. Set to <code>false</code> to allow tabbing to focus elements outside the popover.</td>
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
                                <td>Dispatched when the popover is opened. Listen for it using <code>@opened</code>.</td>
                            </tr>

                            <tr>
                                <td>closed</td>
                                <td>Dispatched</td>
                                <td>Dispatched when the popover is closed. Listen for it using <code>@closed</code>.</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </ui-tab>

        </ui-tabs>
    </section>
</template>

<script>
import UiTab from '../../source/UiTab.vue';
import UiTabs from '../../source/UiTabs.vue';

import UiPopover from '../../source/UiPopover.vue';
import UiButton from '../../source/UiButton.vue';

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
