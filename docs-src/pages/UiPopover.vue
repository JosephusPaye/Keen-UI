<template>
    <section class="page page--ui-popover">
        <h2 class="page__title">UiPopover</h2>

        <p>UiPopover shows content in a popup/dropdown. It can be setup to contain tab focus in the popover, returning focus to the trigger element on close.</p>

        <p>The dropdown position relative to the trigger and the event that causes the dropdown to open can be customized.</p>

        <p>The dropdown is powered by <a href="https://github.com/HubSpot/drop" target="_blank" rel="noopener">Drop</a>, which uses <a href="https://github.com/HubSpot/tether" target="_blank" rel="noopener">Tether</a>.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiPopover.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <h4 class="page__demo-title">Basic</h4>

            <a ref="trigger1" class="popover-trigger">Click here for the popover</a>

            <ui-popover class="custom-popover" trigger="trigger1">
                Hey there, some popover content here.
                <p>Add <i>whatever</i> content you want here.</p>
            </ui-popover>

            <h4 class="page__demo-title">Raised: false</h4>

            <a ref="trigger2" class="popover-trigger">Click here for the popover</a>

            <ui-popover class="custom-popover" :raised="false" trigger="trigger2">
                Hey there, some popover content here.
                <p>Add <i>whatever</i> content you want here.</p>
            </ui-popover>

            <h4 class="page__demo-title">Open on hover</h4>

            <a ref="trigger3" class="popover-trigger">Hover here for the popover</a>

            <ui-popover class="custom-popover" open-on="hover" trigger="trigger3">
                Hey there, some popover content here.
                <p>Add <i>whatever</i> content you want here.</p>
            </ui-popover>

            <h4 class="page__demo-title">Dropdown position (may change based on available space)</h4>

            <a ref="trigger4" class="popover-trigger">Click here for a popover dropping bottom right of this trigger</a>

            <ui-popover
                class="custom-popover"
                dropdown-position="bottom right"
                trigger="trigger4"
            >
                Hey there, some popover content here.
                <p>Add <i>whatever</i> content you want here.</p>
            </ui-popover>

            <br><br>

            <a ref="trigger5" class="popover-trigger">Click here for top left popover</a>

            <ui-popover
                class="custom-popover"
                dropdown-position="top left"
                trigger="trigger5"
            >
                Hey there, some popover content here.
                <p>Add <i>whatever</i> content you want here.</p>
            </ui-popover>

            <h4 class="page__demo-title">Can be opened/closed programmatically</h4>

            <ui-button @click="openPopover">Click to open the popover below</ui-button>

            <br><br>

            <a ref="trigger6" class="popover-trigger">Default trigger</a>

            <ui-popover
                class="custom-popover"
                ref="popover6"
                trigger="trigger6"
            >
                Hey there, some popover content here.
                <p>Add <i>whatever</i> content you want here.</p>
            </ui-popover>
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
                                <td>trigger *</td>
                                <td>String</td>
                                <td>Required</td>
                                <td>
                                    <p>The string key of an element in the parent's <code>$refs</code> object.</p>
                                    <p>The event listeners will be attached to this element, and when triggered, the popover will be shown.</p>
                                </td>
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
                                    <p>The type of event or events that will cause the popover to open.</p>
                                    <p>One or more of <code>click</code>, <code>hover</code>, <code>focus</code>, or <code>always</code>. For <code>always</code> the popover is opened when rendered and it remains open. Separate multiple events with a space.</p>
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
                                    <p>A function that will be called to redirect the tab focus when it is about to leave the popover. The handler is called with the focus event.</p>
                                    <p>If this is not provided and <code>containFocus</code> is <code>true</code>, focus is returned to the popover root element.</p>
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

                * Required prop
            </ui-tab>

            <ui-tab title="Events">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <th>Name</th>
                            <th>Description</th>
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
                            <th>Name</th>
                            <th>Description</th>
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
                                <th>Name</th>
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
                        </tbody>
                    </table>
                </div>
            </ui-tab>
        </ui-tabs>
    </section>
</template>

<script>
import UiButton from 'src/UiButton.vue';
import UiPopover from 'src/UiPopover.vue';
import UiTab from 'src/UiTab.vue';
import UiTabs from 'src/UiTabs.vue';

export default {
    methods: {
        openPopover() {
            setTimeout(this.$refs.popover6.toggle, 0);
        }
    },

    components: {
        UiButton,
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
        background-color: $md-blue-grey;
        color: white;
        cursor: default;
        display: inline-block;
        padding: 8px 16px;
        text-decoration: none;

        &:hover {
            background-color: $md-blue-grey-600;
        }
    }
}

.ui-popover.custom-popover {
    padding: 16px;

    p {
        margin-bottom: 0;
    }
}
</style>
