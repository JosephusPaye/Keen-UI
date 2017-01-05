<template>
    <section class="page page-ui-chip">
        <h2 class="page__title">UiChip</h2>

        <p>UiChip represents a complex piece of information in a simple block.</p>
        <p>A chip can have an image or text icon and it can show a delete button.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiChipDocs.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h3>

        <div class="demo">
            <h4 class="page__demo-title">Default</h4>

            <div class="group">
                <ui-chip>Hi there</ui-chip>
                <ui-chip>Some <b>bold</b> text</ui-chip>
            </div>

            <h4 class="page__demo-title">With image</h4>

            <div class="group">
                <ui-chip image="https://i.imgur.com/eK26qtK.jpg">Maggie Simpson</ui-chip>
                <ui-chip image="https://i.imgur.com/wIb44g9.jpg">Lisa Simpson</ui-chip>
                <ui-chip image="https://i.imgur.com/XkEz9zg.jpg">Bart Simpson</ui-chip>
            </div>

            <h4 class="page__demo-title">With custom image</h4>

            <div class="group">
                <ui-chip>
                    <span slot="image">M</span> Maggie Simpson
                </ui-chip>

                <ui-chip>
                    <span slot="image">L</span> Lisa Simpson
                </ui-chip>

                <ui-chip>
                    <span slot="image">B</span> Bart Simpson
                </ui-chip>
            </div>

            <h4 class="page__demo-title">Deletable</h4>

            <div class="group">
                <ui-chip
                    deletable
                    image="https://i.imgur.com/eK26qtK.jpg"
                    @delete="showChip1 = false"
                    v-show="showChip1"
                >Maggie Simpson</ui-chip>

                <ui-chip
                    deletable
                    image="https://i.imgur.com/wIb44g9.jpg"
                    @delete="showChip2 = false"
                    v-show="showChip2"
                >Lisa Simpson</ui-chip>

                <ui-chip
                    deletable
                    image="https://i.imgur.com/XkEz9zg.jpg"
                    @delete="showChip3 = false"
                    v-show="showChip3"
                >Bart Simpson</ui-chip>

                <ui-chip
                    deletable
                    image="https://i.imgur.com/MuFcpQ4.jpg"
                    @delete="showChip4 = false"
                    v-show="showChip4"
                >Marge Simpson</ui-chip>

                <ui-chip
                    deletable
                    image="https://i.imgur.com/aYPRWX4.jpg"
                    @delete="showChip5 = false"
                    v-show="showChip5"
                >Homer Simpson</ui-chip>
            </div>

            <button @click="restoreChips">Restore deleted chips</button>
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
                                <td>image</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The URL of an image to show as the chip's icon image. You can use the <code>image</code> slot to show a custom icon or image on the chip.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>color</td>
                                <td>String</td>
                                <td><code>"primary"</code></td>
                                <td>
                                    <p>The background color of the chip's image slot. One of <code>primary</code>, <code>accent</code> or <code>none</code>.</p>
                                    <p>Set to <code>none</code> to remove the background color.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>deletable</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not a delete icon is shown on the chip.</p>
                                    <p>When set to <code>true</code> you should listen for the <code>delete</code> event and remove the chip appropriately.</p>
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
                                <td>Holds the chip content and can contain HTML.</td>
                            </tr>

                            <tr>
                                <td>image</td>
                                <td>Holds the the chip image and can contain HTML. Useful for showing a custom icon or image</td>
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
                                <td>delete</td>
                                <td>
                                    <p>Emitted when the user clicks the chip's delete icon. You should listen for this event and remove the chip appropriately.</p>
                                    <p>Listen for it using <code>@delete</code>.</p>
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
import UiTab from 'src/UiTab.vue';
import UiTabs from 'src/UiTabs.vue';
import UiChip from 'src/UiChip.vue';

export default {
    data() {
        return {
            showChip1: true,
            showChip2: true,
            showChip3: true,
            showChip4: true,
            showChip5: true
        };
    },

    methods: {
        restoreChips() {
            this.showChip1 = true;
            this.showChip2 = true;
            this.showChip3 = true;
            this.showChip4 = true;
            this.showChip5 = true;
        }
    },

    components: {
        UiTab,
        UiTabs,
        UiChip
    }
};
</script>

<style lang="sass">
.page-ui-chip {
    .group {
        margin-bottom: 16px;
    }

    .ui-chip {
        margin-right: 4px;
        margin-bottom: 8px;
    }
}
</style>
