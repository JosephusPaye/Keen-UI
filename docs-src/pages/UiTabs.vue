<template>
    <section class="page page--ui-tabs">
        <h2 class="page__title">UiTabs</h2>

        <p>The UiTabs and UiTab components are used together to create a tab container with one or more tabs. UiTab should only be used as a direct child of UiTabs.</p>

        <p>UiTabs is the tab container and its props is what you use to customize the tab headers. UiTab is a single tab on which you set tab-specific props like <code>title</code>, <code>icon</code>, etc.</p>

        <p>UiTabs can be one of three types: <code>text</code> (for text only), <code>icon</code> (for icon only) or <code>icon-and-text</code>. The tab headers can be fullwidth or take up only as much space as needed. The tab container can be raised to add a drop shadow.</p>

        <p>UiTabs header can have any one of four possible background colors: <code>default</code> (gray), <code>primary</code>, <code>accent</code> and <code>clear</code>. The header text color, header active text color and the active tab indicator color can also be customized.</p>

        <p>UiTabs and UiTab include the recommended ARIA attributes for accessibility and can be navigated with the keyboard.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiTabs.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <h3 class="page__demo-title">Demo</h3>

            <p>Initial tab: Collections</p>

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
                    <p>{{ tab.title }}: A link to <a href="https://google.com" target="_blank" rel="noopener">Google</a>.</p>
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
                    class="mb-8"
                    name="color"
                    :options="['default', 'primary', 'accent']"
                    v-model="backgroundColor"
                >Background color</ui-radio-group>

                <div class="page__demo-controls-row">
                    <ui-checkbox v-model="fullwidth" class="mr-16">Fullwidth</ui-checkbox>
                    <ui-checkbox v-model="raised">Raised</ui-checkbox>
                </div>
            </div>

            <h4 class="page__demo-title">Custom header</h4>

            <ui-tabs fullwidth raised>
                <ui-tab :key="tab.title" v-for="tab in demoTabs">
                    <div slot="header" class="custom-header">
                        <ui-icon slot="icon" :icon="tab.icon"></ui-icon> {{ tab.title }}
                    </div>

                    <p>{{ tab.title }}: A link to <a href="https://google.com" target="_blank" rel="noopener">Google</a>.</p>
                </ui-tab>
            </ui-tabs>

            <h4 class="page__demo-title">Change active tab</h4>

            <ui-tabs type="icon-and-text" ref="tabSet1" fullwidth>
                <ui-tab title="Books">
                    <ui-icon slot="icon" icon="book"></ui-icon>
                    My books
                </ui-tab>

                <ui-tab title="Authors">
                    <ui-icon slot="icon" icon="person"></ui-icon>
                    Authors
                </ui-tab>

                <ui-tab title="Collections">
                    <ui-icon slot="icon" icon="collections_bookmark"></ui-icon>
                    Collections
                </ui-tab>

                <ui-tab title="Favourites" id="favourites">
                    <ui-icon slot="icon" icon="favorite"></ui-icon>
                    Favourites
                </ui-tab>
            </ui-tabs>

            <ui-button @click="selectFavouritesTab">Select Favourites</ui-button>

            <h4 class="page__demo-title">Add or remove a tab</h4>

            <ui-tabs type="icon-and-text" fullwidth>
                <ui-tab v-for="tab in tabs" :title="tab.title" :key="tab.title">
                    <ui-icon :icon="tab.icon" slot="icon"></ui-icon>
                    <div>{{ tab.title }}</div>
                </ui-tab>
            </ui-tabs>

            <ui-button @click="addTab">Add</ui-button>
            <ui-button @click="removeTab" :disabled="tabs.length < 3">Remove</ui-button>

            <h4 class="page__demo-title">Disable a tab</h4>

            <ui-tabs type="icon-and-text" fullwidth>
                <ui-tab title="Books">
                    <ui-icon slot="icon" icon="book"></ui-icon>
                    My books
                </ui-tab>

                <ui-tab title="Authors" :disabled="disableAuthorsTab">
                    <ui-icon slot="icon" icon="person"></ui-icon>
                    Authors
                </ui-tab>

                <ui-tab title="Collections">
                    <ui-icon slot="icon" icon="collections_bookmark"></ui-icon>
                    Collections
                </ui-tab>

                <ui-tab title="Favourites" id="favourites">
                    <ui-icon slot="icon" icon="favorite"></ui-icon>
                    Favourites
                </ui-tab>
            </ui-tabs>

            <ui-button @click="toggleAuthorsTab">Toggle Authors tab</ui-button>
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
                                    <p>Can be set using the <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/Customization.md#global-config" target="_blank" rel="noopener">global config</a>.</p>
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
                                <td class="no-wrap">tab-change</td>
                                <td>
                                    <p>Emitted when the active tab is changed. Listen for it using <code>@tab-change</code>.</p>
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
                                    <p>Holds the tab header and can contain HTML. Use this slot for a custom tab header.</p>
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
            disableAuthorsTab: true,
            tabs: [
                {
                    title: 'Tab 1',
                    icon: 'favorite'
                },
                {
                    title: 'Tab 2',
                    icon: 'person'
                },
                {
                    title: 'Tab 3',
                    icon: 'description'
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
            this.tabs.push({
                title: 'Tab ' + (this.tabs.length + 1),
                icon: 'description'
            });
        },

        removeTab() {
            this.tabs.splice(this.tabs.length - 1, 1);
        },

        selectFavouritesTab() {
            this.$refs.tabSet1.setActiveTab('favourites');
        },

        toggleAuthorsTab() {
            this.disableAuthorsTab = !this.disableAuthorsTab;
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

    .custom-header {
        display: flex;
        font-weight: 500;

        .ui-icon {
            margin-right: 8px;
        }
    }

    .mb-8 {
        margin-bottom: 8px;
    }

    .mr-16 {
        margin-right: 16px;
    }
}
</style>
