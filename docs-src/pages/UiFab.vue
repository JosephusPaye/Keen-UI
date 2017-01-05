<template>
    <section class="page page-ui-fab">
        <h2 class="page__title">UiFab</h2>

        <p>UiFab shows a primary, floating action button. It supports mouse and keyboard focus, hover and disabled states.</p>

        <p>UiFab has two sizes: <code>normal</code> and <code>small</code> and three colors: <code>default</code> (white), <code>primary</code> and <code>accent</code>.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiFabDocs.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h3>

        <div class="demo">
            <ui-radio-group
                name="size"
                :options="['small', 'normal']"
                v-model="size"
            >Button Size</ui-radio-group>

            <h4 class="page__demo-title">Colors</h4>

            <div class="group">
                <ui-fab color="primary" icon="add" :size="size"></ui-fab>
                <ui-fab color="accent" icon="edit" :size="size"></ui-fab>
                <ui-fab icon="keyboard_voice" :size="size"></ui-fab>
            </div>

            <h4 class="page__demo-title">With tooltip</h4>

            <div class="group">
                <ui-fab
                    color="primary"
                    icon="edit"
                    tooltip-position="top center"
                    tooltip="Top center"
                    :size="size"
                ></ui-fab>

                <ui-fab color="accent" icon="edit" tooltip="Bottom center" :size="size"></ui-fab>

                <ui-fab
                    icon="edit"
                    tooltip-position="left middle"
                    tooltip="Left middle"
                    :size="size"
                ></ui-fab>

                <ui-fab
                    icon="edit"
                    tooltip-position="right middle"
                    tooltip="Right middle"
                    :size="size"
                ></ui-fab>
            </div>
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
                                <td>size</td>
                                <td>String</td>
                                <td><code>"normal"</code></td>
                                <td>The size of the FAB. One of <code>normal</code> or <code>small</code>.</td>
                            </tr>

                            <tr>
                                <td>color</td>
                                <td>String</td>
                                <td><code>"default"</code></td>
                                <td>The background color of the FAB. One of <code>primary</code>, <code>accent</code> or <code>default</code>.</td>
                            </tr>

                            <tr>
                                <td>icon</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The FAB icon. Can be any of the <a href="https://design.google.com/icons/" target="_blank" rel="noopener">Material Icons</a>.</p>
                                    <p>You can set a custom or SVG icon using the <code>icon</code> slot.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>ariaLabel</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The FAB <code>aria-label</code> attribute (important for accessibility).</p>
                                    <p>Falls back to <code>tooltip</code> if not specified.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>tooltip</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The FAB tooltip (text only).</p>
                                </td>
                            </tr>

                            <tr>
                                <td>tooltipPosition</td>
                                <td>String</td>
                                <td class="no-wrap"><code>"bottom left"</code></td>
                                <td>
                                    <p>The position of the tooltip relative to the FAB.</p>
                                    <p>One of <code>top left</code>, <code>left top</code>, <code>left middle</code>, <code>left bottom</code>, <code>bottom left</code>, <code>bottom center</code>, <code>bottom right</code>, <code>right bottom</code>, <code>right middle</code>, <code>right top</code>, <code>top right</code>, or <code>top center</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>openTooltipOn</td>
                                <td>String</td>
                                <td><code>"hover focus"</code></td>
                                <td>
                                    <p>The type of event or events that will cause the tooltip to open.</p>
                                    <p>One or more of <code>click</code>, <code>hover</code>, or <code>focus</code>. Separate multiple events with a space.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>disableRipple</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not the ripple ink animation is shown when the button is clicked.</p>
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
                                <td class="fixed-width">icon</td>
                                <td>
                                    <p>Holds the FAB icon and can contain any custom or SVG icon.</p>
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
import UiFab from 'src/UiFab.vue';
import UiTab from 'src/UiTab.vue';
import UiTabs from 'src/UiTabs.vue';
import UiRadioGroup from 'src/UiRadioGroup.vue';

export default {
    data() {
        return {
            size: 'normal'
        };
    },

    components: {
        UiTab,
        UiTabs,
        UiFab,
        UiRadioGroup
    }
};
</script>

<style lang="sass">
.page-ui-fab {
    .ui-radio-group {
        margin-bottom: 16px;
    }

    .group {
        display: flex;
        margin-bottom: 16px;
        align-items: flex-end;
        flex-wrap: wrap;

        .ui-fab {
            margin-right: 18px;
        }
    }
}
</style>
