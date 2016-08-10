<template>
    <section class="section section-ui-collapsible">
        <h2 class="section-heading">
            UiCollapsible <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiCollapsible.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h2>

        <p>UiCollapsible is used to show collapsible content. It includes a header and a body and can be initially opened or closed (defaults to closed).</p>

        <p>Both the header and body are fully customizable (using <code>slots</code>) and the header icon can be removed.</p>

        <p>UiCollapsible supports keyboard navigation (e.g. tabbing and using the Space or Enter keys to open/close). It also has a disabled state and emits open and close events.</p>

        <p>However, it doesn't support accordion sets (i.e. closing other collapsibles when one is opened). You can achieve that effect by listening for <code>@opened</code> or <code>@closed</code> on each collapsible in the set and then adjusting their <code>open</code> prop accordingly.</p>

        <h3>
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiCollapsibleDocs.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h3>

        <div class="demo">
            <ui-collapsible header="This is open initially" :open="true">
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur nemo suscipit ipsa molestias, tempora dolor natus modi et incidunt tenetur!</div>
            </ui-collapsible>

            <ui-collapsible header="Slightly longer body content">
                <b>Howdy!</b>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolore, numquam inventore esse consequatur doloribus pariatur accusantium voluptatum veritatis soluta corrupti impedit, asperiores accusamus! Ullam perferendis, ipsum officia consequatur quam! Sapiente nisi quam voluptates ipsam consequatur autem culpa repudiandae dignissimos.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolore, numquam inventore esse consequatur doloribus pariatur accusantium voluptatum veritatis soluta corrupti impedit, asperiores accusamus! Ullam perferendis, ipsum officia consequatur quam! Sapiente nisi quam voluptates ipsam consequatur autem culpa repudiandae dignissimos.</p>
            </ui-collapsible>

            <ui-collapsible>
                <div slot="header">
                    HTML <b>supported</b> in header
                </div>

                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur nemo suscipit ipsa molestias, tempora dolor natus modi et incidunt tenetur!</div>
            </ui-collapsible>

            <ui-collapsible header="This collapsible is disabled" disabled>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur nemo suscipit ipsa molestias, tempora dolor natus modi et incidunt tenetur!</div>
            </ui-collapsible>

            <ui-collapsible header="The header icon can be disabled" hide-icon>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur nemo suscipit ipsa molestias, tempora dolor natus modi et incidunt tenetur!</div>
            </ui-collapsible>
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
                                    <p>A unique identifier for the collapsible.</p>
                                    <p>Applied as the <code>id</code> attribute of the collapsible body element and used when targeting a specific collapsible for refresh.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>open</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether the collapsible is open or closed.</p>
                                    <p>Changing this value will open/close the collapsible.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>header</td>
                                <td>String</td>
                                <td></td>
                                <td>The collapsible title (text only). If you want to use HTML in the header, use the header slot.</td>
                            </tr>

                            <tr>
                                <td>hideIcon</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not the header icon is hidden.</p>
                                    <p>Set to <code>true</code> to hide the icon.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>hideRippleInk</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not the ripple ink animation is hidden when the collapsible header is clicked.</p>
                                    <p>Set to <code>true</code> to hide the ripple ink animation.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not the collapsible is disabled.</p>
                                    <p>A disabled collapsible cannot be focussed, opened or closed by the user.</p>
                                    <p>Set to <code>true</code> to disable the collapsible.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
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
                                <td>The default slot holds the collapsible content and can contain HTML.</td>
                            </tr>

                            <tr>
                                <td>header</td>
                                <td>The header slot holds the collapsible header and can contain HTML.</td>
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
                                    <p>Dispatched when the collapsible is opened.</p>
                                    <p>Listen for it using <code>@opened</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>closed</td>
                                <td>Dispatched</td>
                                <td>
                                    <p>Dispatched when the collapsible is closed.</p>
                                    <p>Listen for it using <code>@closed</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap">ui-collapsible::refresh-height</td>
                                <td>Received</td>
                                <td>
                                    <p>A collapsible keeps track of its content height internally to use for the open/close transition.</p>

                                    <p>Trigger this event to update the collapsible's height when its content has changed since it was last opened.</p>

                                    <p>This will update the height of every collapsible in the scope in which it is triggered. To limit the update to a specific collapsible, pass in its <code>id</code>.</p>
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
import UiCollapsible from '../../src/UiCollapsible.vue';

export default {
    components: {
        UiTab,
        UiTabs,
        UiCollapsible
    }
};
</script>
