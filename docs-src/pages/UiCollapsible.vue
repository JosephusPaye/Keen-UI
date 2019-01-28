<template>
    <section class="page page--ui-collapsible">
        <h2 class="page__title">UiCollapsible</h2>

        <p>UiCollapsible shows collapsible content. It includes a header and a body and can be initially opened or closed (defaults to closed).</p>

        <p>Both the header and body are fully customizable (using <code>slots</code>). UiCollapsible is keyboard accessible and it supports a disabled state.</p>

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

            <ui-collapsible title="With content popping out">
                <ui-select
                    class="mb-0"
                    label="Favourite colour"
                    placeholder="Select a colour"
                    :options="colors"
                    v-model="select"
                ></ui-select>
            </ui-collapsible>

            <h4 class="page__demo-title">Accordion set</h4>

            <p>By listening for the <code>open</code> and <code>close</code> events on each collapsible and controlling the <code>open</code> prop, you can create an accordion set.</p>

            <ui-collapsible title="Collapsible 1" :open="accordions[0]" @open="onAccordionOpen(0)" @close="onAccordionClose(0)">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur nemo suscipit ipsa molestias, tempora dolor natus modi et incidunt tenetur!
            </ui-collapsible>

            <ui-collapsible title="Collapsible 2" :open="accordions[1]" @open="onAccordionOpen(1)" @close="onAccordionClose(1)">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur nemo suscipit ipsa molestias, tempora dolor natus modi et incidunt tenetur!
            </ui-collapsible>

            <ui-collapsible title="Collapsible 3" :open="accordions[2]" @open="onAccordionOpen(2)" @close="onAccordionClose(2)">
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
                                    <p>Default value can be <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/Customization.md#changing-default-prop-values" target="_blank" rel="noopener">changed globally</a>.</p>
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
        </ui-tabs>
    </section>
</template>

<script>
import UiCollapsible from 'src/UiCollapsible.vue';
import UiSelect from 'src/UiSelect.vue';
import UiTab from 'src/UiTab.vue';
import UiTabs from 'src/UiTabs.vue';

export default {
    data() {
        return {
            select: '',
            colors: [
                'Red',
                'Green',
                'Blue',
                'Cyan',
                'Magenta',
                'Yellow'
            ],
            accordions: {
                0: true,
                1: false,
                2: false
            }
        };
    },

    methods: {
        onAccordionOpen(id) {
            Object.keys(this.accordions).forEach(key => {
                this.accordions[key] = key == id; // eslint-disable-line eqeqeq
            });
        },

        onAccordionClose(key) {
            this.accordions[key] = false;
        }
    },

    components: {
        UiCollapsible,
        UiSelect,
        UiTab,
        UiTabs
    }
};
</script>
