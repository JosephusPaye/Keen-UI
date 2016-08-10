<template>
    <section class="section section-ui-icon">
        <h2 class="section-heading">
            UiIcon <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiIcon.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h2>

        <p>UiIcon shows an icon glyph. By default it uses icons from the <a href="https://design.google.com/icons/" target="_blank" rel="noopener">Material Icons</a> web font, which must be loaded for icons to display properly. The simplest way to do this is by adding the Google Web font to the head of your page:</p>

        <pre><code>&lt;link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"&gt;</code></pre>

        <p>See the <a href="http://google.github.io/material-design-icons" target="_blank" rel="noopener">Material Icons Guide</a> for more options on including the font.</p>

        <p>Icons are <code>24px</code> by <code>24px</code>, but this can be changed by overriding the font size using CSS.</p>

        <p>If you want to use another icon set, add a custom <code>class</code> (the <code>icon</code> prop is applied as a class also) and set the <code>removeText</code> prop to <code>true</code> to remove the text used for the Material Icon ligatures.</p>

        <p>Note that using another icon set may break other components that use UiIcon.</p>

        <h3>
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiIconDocs.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h3>

        <div class="demo">
            <div class="group">
                <ui-icon icon="folder_open"></ui-icon>
                <ui-icon icon="home"></ui-icon>
                <ui-icon icon="info_outline"></ui-icon>
                <ui-icon icon="watch_later"></ui-icon>
                <ui-icon icon="mail_outline"></ui-icon>
                <ui-icon icon="pin_drop"></ui-icon>
                <ui-icon icon="favorite_border"></ui-icon>
                <ui-icon icon="maps"></ui-icon>
            </div>

            <div class="group icon-large">
                <ui-icon icon="watch"></ui-icon>
                <ui-icon icon="rss_feed"></ui-icon>
                <ui-icon icon="account_circle"></ui-icon>
                <ui-icon icon="play_circle_outline"></ui-icon>
                <ui-icon icon="drafts"></ui-icon>
                <ui-icon icon="attach_file"></ui-icon>
                <ui-icon icon="save"></ui-icon>
                <ui-icon icon="event"></ui-icon>
            </div>

            <div class="group inline">
                <p>Icons can also be inlined with text: <ui-icon icon="account_circle"></ui-icon> My Account.</p>
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
                                <td>icon *</td>
                                <td>String</td>
                                <td>(required)</td>
                                <td>
                                    <p>The icon name. Can be any of the <a href="https://design.google.com/icons/" target="_blank" rel="noopener">Material Icons</a>.</p>
                                    <p>Note that this should be the icon codepoint if you want to support IE9.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>removeText</td>
                                <td>Boolean</td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not to remove the icon element's inner text.</p>
                                    <p>The <code>icon</code> prop is set as the inner text by default because Material Icons use ligatures.</p>
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
import UiTab from '../../src/UiTab.vue';
import UiTabs from '../../src/UiTabs.vue';
import UiIcon from '../../src/UiIcon.vue';

export default {
    components: {
        UiTab,
        UiTabs,
        UiIcon
    }
};
</script>

<style lang="stylus">
@import '../../src/styles/variables';

.section-ui-icon {
    .demo {
        .ui-icon {
            color: $md-dark-secondary;
            margin-right: 8px;
            margin-bottom: 8px;
        }

        .icon-large {
            .ui-icon {
                font-size: 32px;
            }
        }
    }

    .group {
        margin-bottom: 16px;

        &.inline {
            .ui-icon {
                margin: 0;
            }
        }
    }
}
</style>
