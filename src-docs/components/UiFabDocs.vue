<template>
    <section class="section section-ui-fab">
        <h2 class="section-heading">
            UiFab <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiFab.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h2>

        <p>UiFab is the floating action button (FAB) from Material Design. It supports focus (keyboard separately), hover and disabled states.</p>

        <p>UiFab has two types: <code>normal</code> and <code>mini</code> and are three colors: <code>default</code> (white), <code>primary</code> and <code>accent</code>.</p>

        <h3>
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiFabDocs.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h3>
        <div class="demo">
            <div class="group">
                <ui-fab color="primary" icon="add"></ui-fab>
                <ui-fab type="mini" color="primary" icon="add"></ui-fab>

                <ui-fab color="accent" icon="edit"></ui-fab>
                <ui-fab type="mini" color="accent" icon="edit"></ui-fab>

                <ui-fab icon="keyboard_voice"></ui-fab>
                <ui-fab type="mini" icon="keyboard_voice"></ui-fab>
            </div>

            <h4>With tooltip</h4>

            <div class="group">
                <ui-fab
                    color="primary" icon="edit" tooltip="Top center" tooltip-position="top center"
                ></ui-fab>

                <ui-fab
                    color="primary" icon="edit" tooltip="Bottom center"
                ></ui-fab>

                <ui-fab
                    color="primary" icon="edit" tooltip="Left middle" tooltip-position="left middle"
                ></ui-fab>

                <ui-fab
                    color="primary" icon="edit" tooltip="Right middle"
                    tooltip-position="right middle"
                ></ui-fab>
            </div>
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
                                <td><code>"normal"</code></td>
                                <td>The type of FAB. One of <code>normal</code> or <code>mini</code>.</td>
                            </tr>

                            <tr>
                                <td>color</td>
                                <td>String</td>
                                <td><code>"default"</code></td>
                                <td>The FAB background color. One of <code>default</code>, <code>primary</code> or <code>accent</code>.</td>
                            </tr>

                            <tr>
                                <td>icon *</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The FAB icon. Can be any of the <a href="https://design.google.com/icons/" target="_blank" rel="noopener">Material Icons</a>.</p>
                                    <p>Note that this should be the icon codepoint if you want to support IE9.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>tooltip</td>
                                <td>String</td>
                                <td></td>
                                <td>The FAB tooltip (text only).</td>
                            </tr>

                            <tr>
                                <td>tooltipPosition</td>
                                <td>String</td>
                                <td class="no-wrap"><code>"bottom center"</code></td>
                                <td>
                                    <p>The position of the tooltip relative to the FAB.</p>

                                    <p>One of <code>top left</code>, <code>left top</code>, <code>left middle</code>, <code>left bottom</code>, <code>bottom left</code>, <code>bottom center</code>, <code>bottom right</code>, <code>right bottom</code>, <code>right middle</code>, <code>right top</code>, <code>top right</code>, or <code>top center</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="new-prop">openTooltipOn</td>
                                <td>String</td>
                                <td><code>"hover focus"</code></td>
                                <td>
                                    <p>The type of event or events that will cause the tooltip to open.</p>
                                    <p>One or more of <code>click</code>, <code>hover</code>, or <code>focus</code>. Separate multiple events with a space.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>ariaLabel</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The FAB <code>aria-label</code> attribute (important for accessibility).</p>
                                    <p>Falls back to <code>tooltip</code> if not provided.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>hideRippleInk</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not the ripple ink animation is hidden when the FAB is clicked.</p>
                                    <p>Set to <code>true</code> to hide the ripple ink animation.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not the FAB is disabled.</p>

                                    <p>Set to <code>false</code> to disable the FAB.</p>

                                    <p>You should consider hiding the FAB when it's not applicable instead of disabling it.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                * Required prop
            </ui-tab>

        </ui-tabs>

    </section>
</template>

<script>
import UiFab from '../../src/UiFab.vue';
import UiTab from '../../src/UiTab.vue';
import UiTabs from '../../src/UiTabs.vue';

export default {
    components: {
        UiTab,
        UiTabs,
        UiFab
    }
};
</script>

<style lang="stylus">
.section-ui-fab {
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
