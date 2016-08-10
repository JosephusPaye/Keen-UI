<template>
    <section class="section section-ui-toolbar">
        <h2 class="section-heading">
            UiToolbar <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiToolbar.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h2>

        <p>UiToolbar components shows a toolbar with a navigation icon, branding, a title as well as actions.</p>

        <p>Visually, UiToolbar has two types: <code>default</code> and <code>colored</code>. The toolbar can be raised (with a drop shadow) or flat. You can also customize the navigation icon as well as the brand, title and actions using slots.</p>

        <h3>
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiToolbarDocs.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h3>

        <div class="demo">
            <h4>Default</h4>

            <div class="group">
                <ui-toolbar title="Inbox">
                    <div slot="actions">
                        <ui-icon-button
                            type="clear" color="black" icon="arrow_back"
                        ></ui-icon-button>

                        <ui-icon-button
                            type="clear" color="black" icon="star_border"
                        ></ui-icon-button>

                        <ui-icon-button
                            type="clear" color="black" icon="more_vert" has-dropdown-menu
                            :menu-options="menu" dropdown-position="bottom right"
                        ></ui-icon-button>
                    </div>
                </ui-toolbar>
            </div>

            <h4>Default Flat</h4>

            <div class="group">
                <ui-toolbar title="Inbox" flat>
                    <div slot="actions">
                        <ui-icon-button
                            type="clear" color="black" icon="arrow_back"
                        ></ui-icon-button>

                        <ui-icon-button
                            type="clear" color="black" icon="star_border"
                        ></ui-icon-button>

                        <ui-icon-button
                            type="clear" color="black" icon="more_vert" has-dropdown-menu
                            :menu-options="menu" dropdown-position="bottom right"
                        ></ui-icon-button>
                    </div>
                </ui-toolbar>
            </div>

            <h4>Default with Brand</h4>

            <div class="group">
                <ui-toolbar brand="Mail App" title="Inbox" show-brand>
                    <div slot="actions">
                        <ui-icon-button
                            type="clear" color="black" icon="arrow_back"
                        ></ui-icon-button>

                        <ui-icon-button
                            type="clear" color="black" icon="star_border"
                        ></ui-icon-button>

                        <ui-icon-button
                            type="clear" color="black" icon="more_vert" has-dropdown-menu
                            :menu-options="menu" dropdown-position="bottom right"
                        ></ui-icon-button>
                    </div>
                </ui-toolbar>
            </div>

            <h4>Colored</h4>

            <div class="group">
                <ui-toolbar type="colored" text-color="white" title="Inbox">
                    <div slot="actions">
                        <ui-icon-button
                            type="clear" color="white" icon="arrow_back"
                        ></ui-icon-button>

                        <ui-icon-button
                            type="clear" color="white" icon="star_border"
                        ></ui-icon-button>

                        <ui-icon-button
                            type="clear" color="white" icon="more_vert" has-dropdown-menu
                            :menu-options="menu" dropdown-position="bottom right"
                        ></ui-icon-button>
                    </div>
                </ui-toolbar>
            </div>

            <h4>Colored Flat (showing linear progress)</h4>

            <div class="group">
                <ui-toolbar type="colored" text-color="white" flat loading>
                    <div slot="actions">
                        <ui-icon-button
                            type="clear" color="white" icon="arrow_back"
                        ></ui-icon-button>

                        <ui-icon-button
                            type="clear" color="white" icon="star_border"
                        ></ui-icon-button>

                        <ui-icon-button
                            type="clear" color="white" icon="more_vert" has-dropdown-menu
                            :menu-options="menu" dropdown-position="bottom right"
                        ></ui-icon-button>
                    </div>

                    Inbox
                </ui-toolbar>
            </div>

            <h4>Colored with Brand</h4>

            <div class="group">
                <ui-toolbar
                    type="colored" text-color="white" brand="Mail App" title="Inbox"
                    show-brand
                >
                    <div slot="actions">
                        <ui-icon-button
                            type="clear" color="white" icon="arrow_back"
                        ></ui-icon-button>

                        <ui-icon-button
                            type="clear" color="white" icon="star_border"
                        ></ui-icon-button>

                        <ui-icon-button
                            type="clear" color="white" icon="more_vert" has-dropdown-menu
                            :menu-options="menu" dropdown-position="bottom right"
                        ></ui-icon-button>
                    </div>
                </ui-toolbar>
            </div>

            <h4>Clear, Text White</h4>

            <div class="group photo-cover photo-1">
                <ui-toolbar
                    type="clear" text-color="white" brand="Photo App" title="Gallery"
                    show-brand
                >
                    <div slot="actions">
                        <ui-icon-button
                            type="clear" color="white" icon="arrow_back"
                        ></ui-icon-button>

                        <ui-icon-button
                            type="clear" color="white" icon="star_border"
                        ></ui-icon-button>

                        <ui-icon-button
                            type="clear" color="white" icon="more_vert" has-dropdown-menu
                            :menu-options="menu" dropdown-position="bottom right"
                        ></ui-icon-button>
                    </div>
                </ui-toolbar>
            </div>

            <h4>Clear, Text Black (showing linear progress on top)</h4>

            <div class="group photo-cover photo-2">
                <ui-toolbar
                    type="clear" brand="Photo App" title="Gallery" show-brand loading preloader-top
                >
                    <div slot="actions">
                        <ui-icon-button
                            type="clear" color="black" icon="arrow_back"
                        ></ui-icon-button>

                        <ui-icon-button
                            type="clear" color="black" icon="star_border"
                        ></ui-icon-button>

                        <ui-icon-button
                            type="clear" color="black" icon="more_vert" has-dropdown-menu
                            :menu-options="menu" dropdown-position="bottom right"
                        ></ui-icon-button>
                    </div>
                </ui-toolbar>
            </div>
        </div>

        <h4>With Tabs</h4>

            <div class="group toolbar-with-tabs">
                <ui-toolbar
                    type="colored" text-color="white" brand="Bookish" title="Library"
                    show-brand flat
                >
                    <div slot="actions">
                        <ui-icon-button
                            type="clear" color="white" icon="more_vert" has-dropdown-menu
                            :menu-options="menu" dropdown-position="bottom right"
                        ></ui-icon-button>
                    </div>
                </ui-toolbar>

                <ui-tabs
                    type="icon-and-text" background-color="primary" text-color="white" text-color-active="white"
                    indicator-color="white" fullwidth
                >
                    <ui-tab header="Books" icon="book">
                        My Books
                    </ui-tab>

                    <ui-tab header="Authors" icon="people">
                        Authors
                    </ui-tab>

                    <ui-tab header="Collections" icon="collections_bookmark">
                        My collections
                    </ui-tab>

                    <ui-tab header="Favourites" icon="favorite">
                        My favourites
                    </ui-tab>
                </ui-tabs>
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
                                <td>type</td>
                                <td>String</td>
                                <td><code>"default"</code></td>
                                <td>The type of toolbar (determines the background color). One of <code>default</code> or <code>colored</code>.</td>
                            </tr>

                            <tr>
                                <td>textColor</td>
                                <td>String</td>
                                <td><code>"black"</code></td>
                                <td>The toolbar text and icon color. One of <code>black</code> or <code>white</code>.</td>
                            </tr>

                            <tr>
                                <td>title</td>
                                <td>String</td>
                                <td></td>
                                <td>The toolbar title (text only). To use HTML in the title, use the default slot.</td>
                            </tr>

                            <tr>
                                <td>brand</td>
                                <td>String</td>
                                <td></td>
                                <td>The brand (text only). To use HTML in the brand, use the <code>brand</code> slot.</td>
                            </tr>

                            <tr>
                                <td>showBrand</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>Determines whether or not the brand is shown. Set to <code>true</code> to show the brand.</td>
                            </tr>

                            <tr>
                                <td>showBrandDivider</td>
                                <td>Boolean</td>
                                <td></td>
                                <td>Determines whether or not the divider between the brand and title is shown. By default, if the brand is shown, the divider is also shown, otherwise it is hidden.</td>
                            </tr>

                            <tr>
                                <td>navIcon</td>
                                <td>String</td>
                                <td><code>"menu"</code></td>
                                <td>The toolbar navigation icon. Can be any of the <a href="https://design.google.com/icons/" target="_blank" rel="noopener">Material Icons</a>. Note that this should be the icon codepoint if you want to support IE9.</td>
                            </tr>

                            <tr>
                                <td>hideNavIcon</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>Determines whether or not the navigation icon is hidden. Set to <code>true</code> to hide the nav icon.</td>
                            </tr>

                            <tr>
                                <td>flat</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>Determines whether or not the toolbar is flat (i.e. has no drop shadow). Set to <code>true</code> for a flat toolbar.</td>
                            </tr>

                            <tr>
                                <td>preloaderTop</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>Determines whether or not the preloader is positioned at the top of the toolbar. Set to <code>true</code> for a top-positioned preloader.<td>
                            </tr>

                            <tr>
                                <td>loading</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>Determines whether or not the preloader is shown. Set to <code>true</code> to show the preloader.</td>
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
                                <td>The default slot holds the toolbar title and can contain HTML.</td>
                            </tr>

                            <tr>
                                <td>brand</td>
                                <td>The <code>brand</code> slot holds the toolbar brand and can contain HTML.</td>
                            </tr>

                            <tr>
                                <td>actions</td>
                                <td>The <code>actions</code> slot holds the toolbar actions and can contain HTML.</td>
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
                                <td class="no-wrap">nav-icon-clicked</td>
                                <td>Dispatched</td>
                                <td>Dispatched when the navigation icon is clicked. Listen for it using <code>@nav-icon-clicked</code>.</td>
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
import UiToolbar from '../../src/UiToolbar.vue';
import UiIconButton from '../../src/UiIconButton.vue';

export default {
    data() {
        return {
            menu: [{
                id: 'settings',
                text: 'Settings'
            }, {
                id: 'about',
                text: 'About'
            }, {
                id: 'help',
                text: 'Help'
            }]
        };
    },

    components: {
        UiTab,
        UiTabs,
        UiToolbar,
        UiIconButton
    }
};
</script>

<style lang="stylus">
@import '../../src/styles/variables';

.section-ui-toolbar {
    .group {
        margin-bottom: 48px;
    }

    .photo-cover {
        background-position: 50%;
        background-size: cover;
        height: 300px;
    }

    .photo-1 {
        background-image: url('http://i.imgur.com/Fln32Fv.jpg');
    }

    .photo-2 {
        background-image: url('http://i.imgur.com/vFBagiE.jpg');
    }

    .toolbar-with-tabs {
        .ui-tabs {
            margin-top: -1px;
        }
    }
}
</style>
