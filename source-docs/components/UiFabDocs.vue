<template>
    <section class="section section-ui-fab">
        <h2 class="section-heading">UiFab</h2>

        <p>UiFab is the Floating Action Button (FAB) from Material Design. It supports focus (keyboard separately), hover and disabled states.</p>

        <p>There are two types: <code>normal</code> and <code>mini</code> and there are three colors: <code>default</code> (white), <code>primary</code> and <code>accent</code>.</p>

        <h3>Examples</h3>

        <div class="demo">
            <div class="group">
                <ui-fab color="primary" icon="add"></ui-fab>
                <ui-fab type="mini" color="primary" icon="add"></ui-fab>

                <ui-fab color="accent" icon="edit"></ui-fab>
                <ui-fab type="mini" color="accent" icon="edit"></ui-fab>

                <ui-fab icon="keyboard_voice"></ui-fab>
                <ui-fab type="mini" icon="keyboard_voice"></ui-fab>
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
                                <td>The FAB icon. Can be any of the <a href="https://design.google.com/icons/" target="_blank">Material Icons</a>. Note that this should be the icon codepoint if you want to support IE9.</td>
                            </tr>

                            <tr>
                                <td>tooltip</td>
                                <td>String</td>
                                <td></td>
                                <td>The FAB tooltip. Currently applied as the <code>title</code> attribute.</td>
                            </tr>

                            <tr>
                                <td>ariaLabel</td>
                                <td>String</td>
                                <td></td>
                                <td>The FAB <code>aria-label</code> attribute (important for accessibility). Falls back to <code>tooltip</code> if not specified.</td>
                            </tr>

                            <tr>
                                <td>hideRippleInk</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>Determines whether or not the ripple ink animation is hidden when the FAB is clicked. Set to <code>true</code> to hide the ripple ink animation.</td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Determines whether or not the FAB is disabled. Set to <code>false</code> to disable the FAB.</p>

                                    <p>You should prefer hiding the FAB when it's not applicable instead of disabling it.</p>
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
import UiFab from '../../source/UiFab.vue';
import UiTab from '../../source/UiTab.vue';
import UiTabs from '../../source/UiTabs.vue';

export default {
    components: {
        UiTab,
        UiTabs,
        UiFab
    }
}
</script>

<style lang="stylus">
.section-ui-fab {
    .group {
        display: flex;
        margin-bottom: 16px;
        align-items: flex-end;

        .ui-fab {
            margin-right: 18px;
        }
    }
}
</style>