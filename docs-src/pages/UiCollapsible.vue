<template>
    <section class="page page--ui-collapsible">
        <h2 class="page__title">UiCollapsible</h2>

        <p>UiCollapsible shows collapsible content. It includes a header and a body and can be initially opened or closed (defaults to closed).</p>

        <p>Both the header and body are fully customizable (using <code>slots</code>). UiCollapsible is keyboard accessible and it supports a disabled state.</p>

        <p>UiCollapsible doesn't support accordion sets (i.e. closing other collapsibles when one is opened). You can achieve that effect by listening for <code>@open</code> and <code>@close</code> on each collapsible in the set and then adjusting their <code>open</code> prop accordingly.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiCollapsible.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__demo">
            <ui-collapsible title="This is open initially" open>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur nemo suscipit ipsa molestias, tempora dolor natus modi et incidunt tenetur!
            </ui-collapsible>

            <ui-collapsible title="Longer body content">
                <b>Howdy!</b>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolore, numquam inventore esse consequatur doloribus pariatur accusantium voluptatum veritatis soluta corrupti impedit, asperiores accusamus! Ullam perferendis, ipsum officia consequatur quam! Sapiente nisi quam voluptates ipsam consequatur autem culpa repudiandae dignissimos.</p>

                <a tabindex="0">A link here</a>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolore, numquam inventore esse consequatur doloribus pariatur accusantium voluptatum veritatis soluta corrupti impedit, asperiores accusamus! Ullam perferendis, ipsum officia consequatur quam! Sapiente nisi quam voluptates ipsam consequatur autem culpa repudiandae dignissimos.</p>
            </ui-collapsible>

            <ui-collapsible>
                <div slot="header">
                    HTML <b>supported</b> in header
                </div>

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur nemo suscipit ipsa molestias, tempora dolor natus modi et incidunt tenetur!
            </ui-collapsible>

            <ui-collapsible>
                <div slot="header">
                    Multiline header: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cupiditate, nihil magni accusantium. Suscipit natus provident ab vitae, ad tenetur.
                </div>

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur nemo suscipit ipsa molestias, tempora dolor natus modi et incidunt tenetur!
            </ui-collapsible>

            <ui-collapsible title="This collapsible is disabled" disabled>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur nemo suscipit ipsa molestias, tempora dolor natus modi et incidunt tenetur!
            </ui-collapsible>

            <ui-collapsible title="The header icon can be removed" remove-icon>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur nemo suscipit ipsa molestias, tempora dolor natus modi et incidunt tenetur!
            </ui-collapsible>
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
                                <td>open</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether the collapsible is open or closed.</p>
                                    <p>Changing this value will open/close the collapsible.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>title</td>
                                <td>String</td>
                                <td></td>
                                <td>The collapsible title (text only). For HTML, use the header slot.</td>
                            </tr>

                            <tr>
                                <td>removeIcon</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the header icon is removed.</p>
                                    <p>Set to <code>true</code> to remove the icon.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>disableRipple</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the ripple ink animation on the collapsible header is disabled.</p>
                                    <p>Can be set using the <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/Customization.md#global-config" target="_blank" rel="noopener">global config</a>.</p>
                                    <p>Set to <code>true</code> to disable the ripple ink animation.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the collapsible is disabled.</p>
                                    <p>Set to <code>true</code> to disable the collapsible.</p>
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
                                <td>Holds the collapsible content and can contain HTML.</td>
                            </tr>

                            <tr>
                                <td>header</td>
                                <td>Holds the the collapsible header and can contain HTML.</td>
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
                                    <p>Emitted when the collapsible is opened. You should listen for this event and update the <code>open</code> prop to <code>true</code>.</p>
                                    <p>Listen for it using <code>@open</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>close</td>
                                <td>
                                    <p>Emitted when the collapsible is closed. You should listen for this event and update the <code>open</code> prop to <code>false</code>.</p>
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
                                <td><code>refreshHeight()</code></td>
                                <td>
                                    <p>UiCollapsible keeps track of its content height internally to use for the open/close transition.</p>
                                    <p>Trigger this event to update the collapsible's height when its width or body content has changed since it was last opened.</p>
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
import UiCollapsible from 'src/UiCollapsible.vue';
import UiTab from 'src/UiTab.vue';
import UiTabs from 'src/UiTabs.vue';

export default {
    components: {
        UiCollapsible,
        UiTab,
        UiTabs
    }
};
</script>
