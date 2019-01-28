<template>
    <section class="page page--ui-tabs">
        <h2 class="page__title">UiTabs</h2>

        <p>The UiTabs and UiTab components are used together to create a tab container with one or more tabs.</p>

        <p>UiTabs is the tab container and its props is what you use to customize the tab headers. UiTab is a single tab on which you set tab-specific props like <code>title</code>, <code>disabled</code>, etc. UiTab should only be used as a direct child of UiTabs.</p>

        <p>UiTabs can be one of three types: <code>text</code> (for text only), <code>icon</code> (for icon only) or <code>icon-and-text</code>. The tab headers can be fullwidth or take up only as much space as needed. The tab container can be raised to add a drop shadow.</p>

        <p>UiTabs header can have any one of four possible background colors: <code>default</code> (gray), <code>primary</code>, <code>accent</code> and <code>clear</code>. The header text colors and active tab indicator color can also be customized.</p>

        <p>UiTabs and UiTab include the recommended ARIA attributes for accessibility and can be navigated with the keyboard.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiTabs.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <h3 class="page__demo-title">Demo</h3>

            <ui-tabs
                :background-color="backgroundColor"
                :fullwidth="fullwidth"
                :indicator-color="indicatorColor"
                :raised="raised"
                :text-color-active="textColorActive"
                :text-color="textColor"
                :type="type"
            >
                <ui-tab
                    :key="tab.title"
                    :selected="tab.title === 'Collections'"
                    :title="tab.title"

                    v-for="tab in demoTabs"
                >
                    <ui-icon slot="icon" :icon="tab.icon"></ui-icon>
                    <p>{{ tab.title }}: A link to <a href="https://github.com/JosephusPaye/Keen-UI" target="_blank" rel="noopener">Github</a>.</p>
                </ui-tab>
            </ui-tabs>

            <div class="page__demo-controls">
                <ui-radio-group
                    class="mb-8"
                    name="type"
                    :options="['text', 'icon', 'icon-and-text']"
                    v-model="type"
                >Type</ui-radio-group>

                <ui-radio-group
                    class="mb-12"
                    name="color"
                    :options="['default', 'primary', 'accent']"
                    v-model="backgroundColor"
                >Background color</ui-radio-group>

                <div class="page__demo-controls-row">
                    <ui-checkbox v-model="fullwidth" class="mr-16">Fullwidth</ui-checkbox>
                    <ui-checkbox v-model="raised">Raised</ui-checkbox>
                </div>
            </div>

            <h4 class="page__demo-title">Custom header with HTML</h4>

            <ui-tabs fullwidth>
                <ui-tab :key="tab.title" v-for="tab in demoTabs">
                    <div slot="header" class="my-custom-tab-header">
                        <ui-icon slot="icon" :icon="tab.icon"></ui-icon> <span>{{ tab.title }}: <i>HTML</i></span>
                    </div>

                    <p>{{ tab.title }}</p>
                </ui-tab>
            </ui-tabs>

            <h4 class="page__demo-title">Control programmatically</h4>

            <ui-tabs type="icon-and-text" fullwidth ref="controlTabs">
                <ui-tab
                    :disabled="tab.id === 'tab2' && disableTab2"
                    :id="tab.id"
                    :key="tab.id"
                    :title="tab.title"
                    v-for="tab in controlTabs"
                >
                    <ui-icon :icon="tab.icon" slot="icon"></ui-icon>
                    <div>{{ tab.title }}</div>
                </ui-tab>
            </ui-tabs>

            <ui-button @click="toggleTab2">Toggle Tab 2</ui-button>
            <ui-button @click="selectTab3">Select Tab 3</ui-button>

            <ui-button @click="addTab" :disabled="controlTabs.length === 6">Add Tab</ui-button>
            <ui-button @click="removeTab" :disabled="controlTabs.length === 3">Remove Tab</ui-button>

            <h4 class="page__demo-title">Confirm tab change</h4>

            <ui-tabs fullwidth :confirm-tab-change="confirmTabChange">
                <ui-tab title="Tab 1">Tab 1 content</ui-tab>
                <ui-tab title="Tab 2">Tab 2 content</ui-tab>
                <ui-tab title="Tab 3">Tab 3 content</ui-tab>
            </ui-tabs>
        </div>

        <h3 class="page__section-title">API: UiTabs</h3>

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
                                <td>type</td>
                                <td>String</td>
                                <td><code>"text"</code></td>
                                <td>The type of tabs. One of <code>text</code>, <code>icon</code> or <code>icon-and-text</code>.</td>
                            </tr>

                            <tr>
                                <td>confirmTabChange</td>
                                <td>Function</td>
                                <td></td>
                                <td>
                                    <p>A function that will be called for confirmation when the user attempts to change tabs.</p>
                                    <p>The function is called with the current tab (source) and the new tab (destination), and should return <code>true</code> to allow the change, and <code>false</code> to deny it.</p>
                                    <p>Note that this function should be synchronous.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>backgroundColor</td>
                                <td>String</td>
                                <td><code>"default"</code></td>
                                <td>
                                    <p>The background color of the tab headers.</p>
                                    <p>One of <code>default</code>, <code>primary</code>, <code>accent</code> or <code>clear</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>textColor</td>
                                <td>String</td>
                                <td><code>"black"</code></td>
                                <td>
                                    <p>The text and icon color of the unselected tab headers.</p>
                                    <p>One of <code>black</code> or <code>white</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>textColorActive</td>
                                <td>String</td>
                                <td><code>"primary"</code></td>
                                <td>
                                    <p>The text and icon color of the selected tab header.</p>
                                    <p>One of <code>primary</code>, <code>accent</code>, or <code>white</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>indicatorColor</td>
                                <td>String</td>
                                <td><code>"primary"</code></td>
                                <td>
                                    <p>The color of the selected tab indicator.</p>
                                    <p>One of <code>primary</code>, <code>accent</code> or <code>white</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>fullwidth</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the tab header items expand to fill the space available.</p>
                                    <p>Set to <code>true</code> for a fullwidth tab header.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>raised</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the tab container has a drop shadow.</p>
                                    <p>Set to <code>true</code> to raise the tabs.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>disableRipple</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the ripple ink animation is shown when a tab header is clicked.</p>
                                    <p>Default value can be <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/Customization.md#changing-default-prop-values" target="_blank" rel="noopener">changed globally</a>.</p>
                                    <p>Set to <code>true</code> to disable the ripple ink animation.</p>
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
                                <td>Holds the child UiTab components.</td>
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
                                <td class="no-wrap">tab-click</td>
                                <td>
                                    <p>Emitted when a tab's header is clicked, whether or not the tab is selected. The handler is called with the tab and the click event.</p>
                                    <p>Listen for it using <code>@tab-click</code>.</p>
                                </td>
                            </tr>
                            <tr>
                                <td class="no-wrap">tab-change</td>
                                <td>
                                    <p>Emitted when the active tab is changed. The handler is called with the new tab.</p>
                                    <p>Listen for it using <code>@tab-change</code>.</p>
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
                                <td><code>setActiveTab()</code></td>
                                <td>
                                    <p>Call this method to programmatically change the active tab. It accepts the following arguments:</p>
                                    <ul>
                                        <li><code>tabId</code> (required): The id of the tab to select.</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ui-tab>
        </ui-tabs>

        <h3 class="page__section-title">API: UiTab</h3>

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
                                <td>id</td>
                                <td>String</td>
                                <td class="no-wrap">Auto-generated <br> unique ID</td>
                                <td>
                                    <p>The tab id. Applied as the <code>id</code> attribute on the tab's root element and used when programmatically changing the active tab.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>title</td>
                                <td>String</td>
                                <td></td>
                                <td>The tab title (text only).</td>
                            </tr>

                            <tr>
                                <td>selected</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>Whether or not the tab is selected by default.</td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the tab is disabled.</p>
                                    <p>Set to <code>true</code> to disable the tab and prevent user interaction.</p>
                                    <p>If a tab is selected when its <code>disabled</code> prop is changed to <code>true</code>, the nearest available tab is automatically selected.</p>
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
                                <td>Holds the tab content and can contain HTML.</td>
                            </tr>

                            <tr>
                                <td>icon</td>
                                <td>
                                    <p>Holds the tab icon and can contain any custom or SVG icon.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>header</td>
                                <td>
                                    <p>Holds the tab header and can contain HTML. Overrides the default header. Use this slot for a custom tab header.</p>
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
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>select</td>
                                <td>
                                    <p>Emitted when the tab is selected. The handler is called with the tab's <code>id</code>.</p>
                                    <p>Listen for it using <code>@select</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>deselect</td>
                                <td>
                                    <p>Emitted when the tab is deselected (i.e. when the user selects another tab). The handler is called with the tab's <code>id</code>.</p>
                                    <p>Listen for it using <code>@deselect</code>.</p>
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
import UiCheckbox from 'src/UiCheckbox.vue';
import UiIcon from 'src/UiIcon.vue';
import UiRadioGroup from 'src/UiRadioGroup.vue';
import UiTab from 'src/UiTab.vue';
import UiTabs from 'src/UiTabs.vue';

export default {
    components: {
        UiButton,
        UiCheckbox,
        UiIcon,
        UiRadioGroup,
        UiTab,
        UiTabs
    },

    data() {
        return {
            type: 'text',
            raised: false,
            fullwidth: false,
            backgroundColor: 'default',
            demoTabs: [
                {
                    title: 'Authors',
                    icon: 'person'
                },
                {
                    title: 'Books',
                    icon: 'book'
                },
                {
                    title: 'Collections',
                    icon: 'collections_bookmark'
                },
                {
                    title: 'Favourites',
                    icon: 'favorite'
                }
            ],
            disableTab2: true,
            controlTabs: [
                {
                    title: 'Tab 1',
                    icon: 'looks_one',
                    id: 'tab1'
                },
                {
                    title: 'Tab 2',
                    icon: 'looks_two',
                    id: 'tab2'
                },
                {
                    title: 'Tab 3',
                    icon: 'looks_3',
                    id: 'tab3'
                },
                {
                    title: 'Tab 4',
                    icon: 'looks_4',
                    id: 'tab4'
                }
            ]
        };
    },

    computed: {
        textColor() {
            if (this.backgroundColor === 'default') {
                return 'black';
            }

            return 'white';
        },

        textColorActive() {
            if (this.backgroundColor === 'default') {
                return 'primary';
            }

            return 'white';
        },

        indicatorColor() {
            if (this.backgroundColor === 'default') {
                return 'primary';
            }

            return 'white';
        }
    },

    methods: {
        addTab() {
            const number = this.controlTabs.length + 1;

            this.controlTabs.push({
                title: 'Tab ' + number,
                icon: 'looks_' + number,
                id: 'tab' + number
            });
        },

        removeTab() {
            this.controlTabs.splice(this.controlTabs.length - 1, 1);
        },

        selectTab3() {
            this.$refs.controlTabs.setActiveTab('tab3');
        },

        toggleTab2() {
            this.disableTab2 = !this.disableTab2;
        },

        confirmTabChange(currentTab, newTab) {
            return confirm('Are you sure you want to switch from ' + currentTab.title + ' to ' + newTab.title + '?'); // eslint-disable-line no-alert
        }
    }
};
</script>

<style lang="scss">
@import '~styles/imports';

.page--ui-tabs {
    .ui-tab p {
        &:first-child {
            margin-top: 0;
        }

        &:last-child {
            margin-bottom: 0;
        }
    }

    .page__demo-controls-row {
        display: flex;
    }

    .my-custom-tab-header {
        display: flex;
        font-weight: 600;

        .ui-icon {
            margin-right: 8px;
        }
    }

    .mb-8 {
        margin-bottom: 8px;
    }

    .mb-12 {
        margin-bottom: 12px;
    }

    .mr-16 {
        margin-right: 16px;
    }
}
</style>
