<template>
    <section class="page page--ui-toolbar">
        <h2 class="page__title">UiToolbar</h2>

        <p>UiToolbar components shows a toolbar with a navigation icon, branding, title, and actions.</p>

        <p>UiToolbar has three types: <code>default</code>, <code>colored</code> and <code>clear</code>. The toolbar can be raised (with a drop shadow) and the navigation icon, brand, title and actions can be customized using slots.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiToolbar.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <h4 class="page__demo-title">Basic</h4>

            <div class="page__demo-group">
                <ui-toolbar title="Inbox">
                    <div slot="actions">
                        <ui-icon-button
                            color="black"
                            icon="refresh"
                            size="large"
                            type="secondary"
                        ></ui-icon-button>

                        <ui-icon-button
                            color="black"
                            icon="search"
                            size="large"
                            type="secondary"
                        ></ui-icon-button>

                        <ui-icon-button
                            color="black"
                            has-dropdown
                            icon="more_vert"
                            ref="dropdownButton1"
                            size="large"
                            type="secondary"
                        >
                            <ui-menu
                                contain-focus
                                has-icons
                                slot="dropdown"
                                :options="menuOptions"
                                @close="$refs.dropdownButton1.closeDropdown()"
                            ></ui-menu>
                        </ui-icon-button>
                    </div>
                </ui-toolbar>
            </div>

            <h4 class="page__demo-title">Raised: false</h4>

            <div class="page__demo-group">
                <ui-toolbar title="Inbox" :raised="false">
                    <div slot="actions">
                        <ui-icon-button
                            color="black"
                            icon="refresh"
                            size="large"
                            type="secondary"
                        ></ui-icon-button>

                        <ui-icon-button
                            color="black"
                            icon="search"
                            size="large"
                            type="secondary"
                        ></ui-icon-button>

                        <ui-icon-button
                            color="black"
                            has-dropdown
                            icon="more_vert"
                            ref="dropdownButton2"
                            size="large"
                            type="secondary"
                        >
                            <ui-menu
                                contain-focus
                                has-icons
                                slot="dropdown"
                                :options="menuOptions"
                                @close="$refs.dropdownButton2.closeDropdown()"
                            ></ui-menu>
                        </ui-icon-button>
                    </div>
                </ui-toolbar>
            </div>

            <h4 class="page__demo-title">With brand</h4>

            <div class="page__demo-group">
                <ui-toolbar brand="Mail App" title="Inbox">
                    <div slot="actions">
                        <ui-icon-button
                            color="black"
                            icon="refresh"
                            size="large"
                            type="secondary"
                        ></ui-icon-button>

                        <ui-icon-button
                            color="black"
                            icon="search"
                            size="large"
                            type="secondary"
                        ></ui-icon-button>

                        <ui-icon-button
                            color="black"
                            has-dropdown
                            icon="more_vert"
                            ref="dropdownButton3"
                            size="large"
                            type="secondary"
                        >
                            <ui-menu
                                contain-focus
                                has-icons
                                slot="dropdown"
                                :options="menuOptions"
                                @close="$refs.dropdownButton3.closeDropdown()"
                            ></ui-menu>
                        </ui-icon-button>
                    </div>
                </ui-toolbar>
            </div>

            <h4 class="page__demo-title">Type: colored</h4>

            <div class="page__demo-group">
                <ui-toolbar type="colored" text-color="white" title="Inbox">
                    <div slot="actions">
                        <ui-icon-button
                            color="white"
                            icon="refresh"
                            size="large"
                            type="secondary"
                        ></ui-icon-button>

                        <ui-icon-button
                            color="white"
                            icon="search"
                            size="large"
                            type="secondary"
                        ></ui-icon-button>

                        <ui-icon-button
                            color="white"
                            has-dropdown
                            icon="more_vert"
                            ref="dropdownButton4"
                            size="large"
                            type="secondary"
                        >
                            <ui-menu
                                contain-focus
                                has-icons
                                slot="dropdown"
                                :options="menuOptions"
                                @close="$refs.dropdownButton4.closeDropdown()"
                            ></ui-menu>
                        </ui-icon-button>
                    </div>
                </ui-toolbar>
            </div>

            <h4 class="page__demo-title">Type: colored, with brand</h4>

            <div class="page__demo-group">
                <ui-toolbar
                    brand="Mail App"
                    text-color="white"
                    title="Inbox"
                    type="colored"
                >
                    <div slot="actions">
                        <ui-icon-button
                            color="white"
                            icon="refresh"
                            size="large"
                            type="secondary"
                        ></ui-icon-button>

                        <ui-icon-button
                            color="white"
                            icon="search"
                            size="large"
                            type="secondary"
                        ></ui-icon-button>

                        <ui-icon-button
                            color="white"
                            has-dropdown
                            icon="more_vert"
                            ref="dropdownButton6"
                            size="large"
                            type="secondary"
                        >
                            <ui-menu
                                contain-focus
                                has-icons
                                slot="dropdown"
                                :options="menuOptions"
                                @close="$refs.dropdownButton6.closeDropdown()"
                            ></ui-menu>
                        </ui-icon-button>
                    </div>
                </ui-toolbar>
            </div>

            <h4 class="page__demo-title">Type: colored, with linear progress</h4>

            <div class="page__demo-group">
                <ui-toolbar loading text-color="white" type="colored">
                    <div slot="actions">
                        <ui-icon-button
                            color="white"
                            icon="refresh"
                            size="large"
                            type="secondary"
                        ></ui-icon-button>

                        <ui-icon-button
                            color="white"
                            icon="search"
                            size="large"
                            type="secondary"
                        ></ui-icon-button>

                        <ui-icon-button
                            color="white"
                            has-dropdown
                            icon="more_vert"
                            ref="dropdownButton5"
                            size="large"
                            type="secondary"
                        >
                            <ui-menu
                                contain-focus
                                has-icons
                                slot="dropdown"
                                :options="menuOptions"
                                @close="$refs.dropdownButton5.closeDropdown()"
                            ></ui-menu>
                        </ui-icon-button>
                    </div>

                    Inbox
                </ui-toolbar>
            </div>

            <h4 class="page__demo-title">Type: clear, text-color: white</h4>

            <div class="page__demo-group has-photo-cover page__demo-group--photo-1">
                <ui-toolbar
                    brand="Photo App"
                    text-color="white"
                    title="Gallery"
                    type="clear"
                    :raised="false"
                >
                    <div slot="actions">
                        <ui-icon-button
                            color="white"
                            icon="arrow_back"
                            size="large"
                            type="secondary"
                        ></ui-icon-button>

                        <ui-icon-button
                            color="white"
                            icon="search"
                            size="large"
                            type="secondary"
                        ></ui-icon-button>

                        <ui-icon-button
                            color="white"
                            has-dropdown
                            icon="more_vert"
                            ref="dropdownButton7"
                            size="large"
                            type="secondary"
                        >
                            <ui-menu
                                contain-focus
                                has-icons
                                slot="dropdown"
                                :options="menuOptions"
                                @close="$refs.dropdownButton7.closeDropdown()"
                            ></ui-menu>
                        </ui-icon-button>
                    </div>
                </ui-toolbar>
            </div>

            <h4 class="page__demo-title">Type: clear, text-color: black, with linear progress on top</h4>

            <div class="page__demo-group has-photo-cover page__demo-group--photo-2">
                <ui-toolbar
                    brand="Photo App"
                    loading
                    progress-position="top"
                    title="Gallery"
                    type="clear"
                    :raised="false"
                >
                    <div slot="actions">
                        <ui-icon-button
                            color="black"
                            icon="arrow_back"
                            size="large"
                            type="secondary"
                        ></ui-icon-button>

                        <ui-icon-button
                            color="black"
                            icon="search"
                            size="large"
                            type="secondary"
                        ></ui-icon-button>

                        <ui-icon-button
                            color="black"
                            has-dropdown
                            icon="more_vert"
                            ref="dropdownButton8"
                            size="large"
                            type="secondary"
                        >
                            <ui-menu
                                contain-focus
                                has-icons
                                slot="dropdown"
                                :options="menuOptions"
                                @close="$refs.dropdownButton8.closeDropdown()"
                            ></ui-menu>
                        </ui-icon-button>
                    </div>
                </ui-toolbar>
            </div>
        </div>

        <h4 class="page__demo-title">Combined with tabs</h4>

        <div class="page__demo-group page__demo-group--has-tabs">
            <ui-toolbar
                brand="Book App"
                remove-brand-divider
                text-color="white"
                type="colored"
                :raised="false"
            >
                <div slot="actions">
                    <ui-icon-button
                        color="white"
                        icon="search"
                        size="large"
                        type="secondary"
                    ></ui-icon-button>

                    <ui-icon-button
                        color="white"
                        has-dropdown
                        icon="more_vert"
                        ref="dropdownButton8"
                        size="large"
                        type="secondary"
                    >
                        <ui-menu
                            contain-focus
                            has-icons
                            slot="dropdown"
                            :options="menuOptions"
                            @close="$refs.dropdownButton8.closeDropdown()"
                        ></ui-menu>
                    </ui-icon-button>
                </div>
            </ui-toolbar>

            <ui-tabs
                background-color="primary"
                fullwidth
                indicator-color="white"
                text-color-active="white"
                text-color="white"
                type="text"
            >
                <ui-tab title="Books" icon="book">
                    My Books
                </ui-tab>

                <ui-tab title="Authors" icon="people">
                    Authors
                </ui-tab>

                <ui-tab title="Collections" icon="collections_bookmark">
                    My collections
                </ui-tab>

                <ui-tab title="Favourites" icon="favorite">
                    My favourites
                </ui-tab>
            </ui-tabs>
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
                                <td>type</td>
                                <td>String</td>
                                <td><code>"default"</code></td>
                                <td>The type of toolbar (determines the background color). One of <code>default</code>, <code>colored</code> or <code>clear</code>.</td>
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
                                <td>The toolbar title (text only). For HTML, use the <code>default</code> slot.</td>
                            </tr>

                            <tr>
                                <td>brand</td>
                                <td>String</td>
                                <td></td>
                                <td>The brand (text only). For HTML, use the <code>brand</code> slot.</td>
                            </tr>

                            <tr>
                                <td>removeBrandDivider</td>
                                <td>Boolean</td>
                                <td></td>
                                <td>
                                    <p>Whether or not the divider between the brand and title is removed.</p>
                                    <p>By default, if the brand is set, the divider is shown, otherwise it is removed.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>navIcon</td>
                                <td>String</td>
                                <td><code>"menu"</code></td>
                                <td>
                                    <p>The toolbar navigation icon. Can be any of the <a href="https://design.google.com/icons/" target="_blank" rel="noopener">Material Icons</a>.</p>
                                    <p>You can set a custom or SVG icon or icon button using the <code>icon</code> slot.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>removeNavIcon</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>Whether or not the navigation icon is removed. Set to <code>true</code> to remove the navigation icon.</td>
                            </tr>

                            <tr>
                                <td>raised</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td>Whether or not the toolbar has a drop shadow. Set to <code>false</code> to remove the drop shadow.</td>
                            </tr>

                            <tr>
                                <td>progressPosition</td>
                                <td>String</td>
                                <td><code>"bottom"</code></td>
                                <td>The position of the progress bar relative to the toolbar. One of <code>top</code> or <code>bottom</code>.<td>
                            </tr>

                            <tr>
                                <td>loading</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>Whether or not the progress is shown. Set to <code>true</code> to show the progress.</td>
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
                                <td>Holds the toolbar title and can contain HTML.</td>
                            </tr>

                            <tr>
                                <td>icon</td>
                                <td>
                                    <p>Holds the toolbar navigation icon and can contain any custom or SVG icon or icon button.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>brand</td>
                                <td>Holds the toolbar brand and can contain HTML.</td>
                            </tr>

                            <tr>
                                <td>actions</td>
                                <td>Holds the toolbar actions and can contain HTML.</td>
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
                                <td class="no-wrap">nav-icon-click</td>
                                <td>Emitted when the navigation icon is clicked. Listen for it using <code>@nav-icon-click</code>.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ui-tab>
        </ui-tabs>
    </section>
</template>

<script>
import UiIconButton from 'src/UiIconButton.vue';
import UiMenu from 'src/UiMenu.vue';
import UiTab from 'src/UiTab.vue';
import UiTabs from 'src/UiTabs.vue';
import UiToolbar from 'src/UiToolbar.vue';

const menuOptions = [
    {
        label: 'Settings'
    },
    {
        label: 'About'
    },
    {
        label: 'Help'
    }
];

export default {
    data() {
        return {
            menuOptions
        };
    },

    components: {
        UiIconButton,
        UiMenu,
        UiTab,
        UiTabs,
        UiToolbar
    }
};
</script>

<style lang="scss">
@import '~styles/imports';

.page--ui-toolbar {
    .page__demo-group {
        margin-bottom: rem-calc(48px);

        &.has-photo-cover {
            background-position: 50%;
            background-size: cover;
            height: rem-calc(300px);
        }
    }

    .page__demo-group--photo-1 {
        background-image: url('https://i.imgur.com/Fln32Fv.jpg');
    }

    .page__demo-group--photo-2 {
        background-image: url('https://i.imgur.com/vFBagiE.jpg');
    }

    .page__demo-group--has-tabs {
        .ui-tabs__header {
            box-shadow: 0 2px 2px rgba(black, 0.2);
        }
    }
}
</style>
