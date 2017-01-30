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
            <h4 class="page__demo-title">Type: text</h4>

            <ui-tabs type="text">
                <ui-tab title="Books">
                    My books <a href="https://google.com" target="_blank" rel="noopener">Hey</a>
                </ui-tab>

                <ui-tab title="Authors">
                    Authors
                </ui-tab>

                <ui-tab title="Collections">
                    My collections
                </ui-tab>

                <ui-tab title="Favourites">
                    My favourites
                </ui-tab>
            </ui-tabs>

            <h4 class="page__demo-title">Type: text, fullwidth</h4>

            <ui-tabs fullwidth>
                <ui-tab title="Books">
                    My books
                </ui-tab>

                <ui-tab title="Authors">
                    Authors
                </ui-tab>

                <ui-tab title="Collections">
                    My collections
                </ui-tab>

                <ui-tab title="Favourites">
                    My favourites
                </ui-tab>
            </ui-tabs>

           <h4 class="page__demo-title">Type: icon</h4>

            <ui-tabs type="icon">
                <ui-tab icon="book">
                    My books
                </ui-tab>

                <ui-tab icon="person">
                    Authors
                </ui-tab>

                <ui-tab icon="collections_bookmark">
                    My collections
                </ui-tab>

                <ui-tab icon="favorite">
                    <b>Favourite with longer content</b>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum laudantium nulla ex asperiores, deserunt quidem perspiciatis eligendi, dolores repudiandae.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis hic, aspernatur placeat eligendi delectus laudantium omnis nam consequatur aperiam numquam!</p>
                </ui-tab>
            </ui-tabs>

            <h4 class="page__demo-title">Type: icon, fullwidth</h4>

            <ui-tabs type="icon" fullwidth>
                <ui-tab icon="book">
                    My books
                </ui-tab>

                <ui-tab icon="person">
                    Authors
                </ui-tab>

                <ui-tab icon="collections_bookmark">
                    My collections
                </ui-tab>

                <ui-tab icon="favorite">
                    <b>Favourite with longer content</b>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum laudantium nulla ex asperiores, deserunt quidem perspiciatis eligendi, dolores repudiandae.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis hic, aspernatur placeat eligendi delectus laudantium omnis nam consequatur aperiam numquam!</p>
                </ui-tab>
            </ui-tabs>

            <h4 class="page__demo-title">Type: icon-and-text</h4>

            <ui-tabs type="icon-and-text">
                <ui-tab icon="book" title="Books">
                    My books
                </ui-tab>

                <ui-tab icon="person" title="Authors">
                    Authors
                </ui-tab>

                <ui-tab icon="collections_bookmark" title="Collections">
                    My collections
                </ui-tab>

                <ui-tab icon="favorite" title="Favourites">
                    <b>Favourite with longer content</b>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum laudantium nulla ex asperiores, deserunt quidem perspiciatis eligendi, dolores repudiandae.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis hic, aspernatur placeat eligendi delectus laudantium omnis nam consequatur aperiam numquam!</p>
                </ui-tab>
            </ui-tabs>

            <h4 class="page__demo-title">Type: icon-and-text, fullwidth</h4>

            <ui-tabs type="icon-and-text" fullwidth>
                <ui-tab icon="book" title="Books">
                    My books
                </ui-tab>

                <ui-tab icon="person" title="Authors">
                    Authors
                </ui-tab>

                <ui-tab icon="collections_bookmark" title="Collections">
                    My collections
                </ui-tab>

                <ui-tab icon="favorite" title="Favourites">
                    <b>Favourite with longer content</b>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum laudantium nulla ex asperiores, deserunt quidem perspiciatis eligendi, dolores repudiandae.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis hic, aspernatur placeat eligendi delectus laudantium omnis nam consequatur aperiam numquam!</p>
                </ui-tab>
            </ui-tabs>

            <h4 class="page__demo-title">Raised</h4>

            <ui-tabs type="icon-and-text" fullwidth raised>
                <ui-tab icon="book" title="Books">
                    My books
                </ui-tab>

                <ui-tab icon="person" title="Authors">
                    Authors
                </ui-tab>

                <ui-tab icon="collections_bookmark" title="Collections">
                    My collections
                </ui-tab>

                <ui-tab icon="favorite" title="Favourites">
                    <b>Favourite with longer content</b>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum laudantium nulla ex asperiores, deserunt quidem perspiciatis eligendi, dolores repudiandae.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis hic, aspernatur placeat eligendi delectus laudantium omnis nam consequatur aperiam numquam!</p>
                </ui-tab>
            </ui-tabs>

            <h4 class="page__demo-title">Background: primary</h4>

            <ui-tabs
                background-color="primary"
                fullwidth
                indicator-color="white"
                text-color-active="white"
                text-color="white"
                type="icon-and-text"
            >
                <ui-tab icon="book" title="Books">
                    My books
                </ui-tab>

                <ui-tab icon="person" title="Authors">
                    Authors
                </ui-tab>

                <ui-tab icon="collections_bookmark" title="Collections">
                    My collections
                </ui-tab>

                <ui-tab icon="favorite" title="Favourites">
                    <b>Favourite with longer content</b>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum laudantium nulla ex asperiores, deserunt quidem perspiciatis eligendi, dolores repudiandae.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis hic, aspernatur placeat eligendi delectus laudantium omnis nam consequatur aperiam numquam!</p>
                </ui-tab>
            </ui-tabs>

            <h4 class="page__demo-title">Background: accent</h4>

            <ui-tabs
                background-color="accent"
                fullwidth
                indicator-color="white"
                text-color-active="white"
                text-color="white"
                type="icon-and-text"
            >
                <ui-tab icon="book" title="Books">
                    My books
                </ui-tab>

                <ui-tab icon="person" title="Authors">
                    Authors
                </ui-tab>

                <ui-tab icon="collections_bookmark" title="Collections">
                    My collections
                </ui-tab>

                <ui-tab icon="favorite" title="Favourites">
                    <b>Favourite with longer content</b>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum laudantium nulla ex asperiores, deserunt quidem perspiciatis eligendi, dolores repudiandae.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis hic, aspernatur placeat eligendi delectus laudantium omnis nam consequatur aperiam numquam!</p>
                </ui-tab>
            </ui-tabs>

            <h4 class="page__demo-title">Default selected tab: Collections</h4>

            <ui-tabs type="icon-and-text" fullwidth>
                <ui-tab icon="book" title="Books">
                    My books
                </ui-tab>

                <ui-tab icon="person" title="Authors">
                    Authors
                </ui-tab>

                <ui-tab icon="collections_bookmark" title="Collections" selected>
                    My collections
                </ui-tab>

                <ui-tab icon="favorite" title="Favourites">
                    <b>Favourite with longer content</b>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum laudantium nulla ex asperiores, deserunt quidem perspiciatis eligendi, dolores repudiandae.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis hic, aspernatur placeat eligendi delectus laudantium omnis nam consequatur aperiam numquam!</p>
                </ui-tab>
            </ui-tabs>

            <h4 class="page__demo-title">Change active tab</h4>

            <ui-tabs type="icon-and-text" ref="tabSet1" fullwidth>
                <ui-tab icon="book" title="Books">
                    My books
                </ui-tab>

                <ui-tab icon="person" title="Authors">
                    Authors
                </ui-tab>

                <ui-tab icon="collections_bookmark" title="Collections">
                    My collections
                </ui-tab>

                <ui-tab icon="favorite" title="Favourites" id="favourites">
                    <b>Favourite with longer content</b>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum laudantium nulla ex asperiores, deserunt quidem perspiciatis eligendi, dolores repudiandae.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis hic, aspernatur placeat eligendi delectus laudantium omnis nam consequatur aperiam numquam!</p>
                </ui-tab>
            </ui-tabs>

            <ui-button @click="selectFavouritesTab">Select Favourites tab</ui-button>

            <h4 class="page__demo-title">Hide/show a tab</h4>

            <ui-tabs type="icon-and-text" fullwidth>
                <ui-tab icon="book" title="Books">
                    My books
                </ui-tab>

                <ui-tab icon="person" title="Authors">
                    Authors
                </ui-tab>

                <ui-tab icon="collections_bookmark" title="Collections" :show="showCollectionsTab">
                    My collections
                </ui-tab>

                <ui-tab icon="favorite" title="Favourites">
                    <b>Favourite with longer content</b>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum laudantium nulla ex asperiores, deserunt quidem perspiciatis eligendi, dolores repudiandae.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis hic, aspernatur placeat eligendi delectus laudantium omnis nam consequatur aperiam numquam!</p>
                </ui-tab>
            </ui-tabs>

            <ui-button @click="toggleCollectionsTab">Toggle Collections tab</ui-button>

            <h4 class="page__demo-title">Disable individual tab</h4>

            <ui-tabs type="icon-and-text" fullwidth raised>
                <ui-tab icon="book" title="Books">
                    My books
                </ui-tab>

                <ui-tab icon="person" title="Authors" :disabled="disableAuthorsTab">
                    Authors
                </ui-tab>

                <ui-tab icon="collections_bookmark" title="Collections">
                    My collections
                </ui-tab>

                <ui-tab icon="favorite" title="Favourites">
                    <b>Favourite with longer content</b>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum laudantium nulla ex asperiores, deserunt quidem perspiciatis eligendi, dolores repudiandae.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis hic, aspernatur placeat eligendi delectus laudantium omnis nam consequatur aperiam numquam!</p>
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

                            <tr>
                                <td><code>refreshIndicator()</code></td>
                                <td>
                                    <p>Call this method to refresh the position of the active tab indicator when the width of the element containing UiTabs changes. This method is called automatically when the window is resized.</p>
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
                                <td>icon</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The tab icon. Can be any of the <a href="https://design.google.com/icons/" target="_blank" rel="noopener">Material Icons</a>.</p>
                                    <p>You can set a custom or SVG icon using the <code>icon</code> slot.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>iconProps</td>
                                <td>String</td>
                                <td><code>{}</code></td>
                                <td>
                                    <p>An object with any of the following props of <a href="#/ui-icon">UiIcon</a>: <code>iconSet</code>, <code>removeText</code> or <code>useSvg</code>. These will be passed as props to the rendered UiIcon component in the tab header.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>show</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td>
                                    <p>Whether or not the tab is shown in the list of tabs.</p>
                                    <p>Set to <code>false</code> to hide the tab from the list of tabs.</p>
                                    <p>If a tab is selected when its <code>show</code> prop is changed to <code>false</code>, the nearest available tab is automatically selected.</p>
                                </td>
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
                                    <p>There is a known issue with using a Vue component directly for this slot, so components (like UiIcon) should be wrapped in a plain element like <code>div</code> or <code>span</code> with the <code>slot="icon"</code> attribute.</p>
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
import UiIcon from 'src/UiIcon.vue';
import UiTab from 'src/UiTab.vue';
import UiTabs from 'src/UiTabs.vue';

export default {
    data() {
        return {
            showCollectionsTab: true,
            disableAuthorsTab: true
        };
    },

    methods: {
        selectFavouritesTab() {
            this.$refs.tabSet1.setActiveTab('favourites');
        },

        toggleCollectionsTab() {
            this.showCollectionsTab = !this.showCollectionsTab;
        },

        toggleAuthorsTab() {
            this.disableAuthorsTab = !this.disableAuthorsTab;
        }
    },

    components: {
        UiButton,
        UiIcon,
        UiTab,
        UiTabs
    }
};
</script>
