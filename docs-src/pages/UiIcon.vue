<template>
    <section class="page page--ui-icon">
        <h1 class="page__title">UiIcon</h1>

        <p>UiIcon shows an icon glyph. Icons are <code>24px</code> by <code>24px</code> (relative to a root font size of 16px), but the size can be changed by overriding the CSS <code>font-size</code> property of <code>.ui-icon</code>.</p>

        <h3 class="page__section-title">Using Material Icons (default)</h3>

        <p>By default UiIcon uses icons from the <a href="https://design.google.com/icons/" target="_blank" rel="noopener">Material Icons</a> web font, which must be loaded for icons to display properly. The simplest way to do this is by adding the Google Web font to the head of your page:</p>

        <pre><code class="language-html">&lt;link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"&gt;</code></pre>

        <p>See the <a href="http://google.github.io/material-design-icons" target="_blank" rel="noopener">Material Icons Guide</a> for more options on including the font.</p>

        <h3 class="page__section-title">Using another icon set</h3>

        <p>To use another icon set, use the <code>iconSet</code> and the <code>icon</code> props (both are applied as classes on the icon root element). Then, if the icon font doesn't support ligatures, set the <code>removeText</code> prop to <code>true</code> to remove the inner text.</p>

        <h3 class="page__section-title">Using SVG: inline</h3>

        <p>To use SVG icons inline, simply paste your SVG data into the <code>&lt;ui-icon&gt;</code> tag. The SVG icon will inherit the color and size defined on <code>.ui-icon</code>.</p>

        <h3 class="page__section-title">Using SVG: <code>&lt;use&gt;</code></h3>

        <p>If you are using an SVG sprite, set <code>useSvg</code> to <code>true</code> and set the <code>icon</code> prop to the icon symbol's <code>id</code> in your sprite. This will render the correct <code>&lt;svg&gt;</code> and <code>&lt;use&gt;</code> tags referencing the icon.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiIcon.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <h4 class="page__demo-title">Default: icon font</h4>

            <div class="page__demo is-boxed">
                <div class="page__demo-group">
                    <ui-icon>folder_open</ui-icon>
                    <ui-icon>home</ui-icon>
                    <ui-icon>info_outline</ui-icon>
                    <ui-icon>watch_later</ui-icon>
                    <ui-icon>mail_outline</ui-icon>
                    <ui-icon>pin_drop</ui-icon>
                    <ui-icon>favorite_border</ui-icon>
                    <ui-icon>maps</ui-icon>
                </div>

                <div class="page__demo-group has-large-icons">
                    <ui-icon icon="watch"></ui-icon>
                    <ui-icon icon="rss_feed"></ui-icon>
                    <ui-icon icon="account_circle"></ui-icon>
                    <ui-icon icon="play_circle_outline"></ui-icon>
                    <ui-icon icon="drafts"></ui-icon>
                    <ui-icon icon="attach_file"></ui-icon>
                    <ui-icon icon="save"></ui-icon>
                    <ui-icon icon="event"></ui-icon>
                </div>

                <div class="page__demo-group is-inline">
                    <p>Icons can also be inlined with text: <ui-icon>account_circle</ui-icon> My Account.</p>
                </div>
            </div>

            <h4 class="page__demo-title">SVG: inline</h4>

            <ui-icon>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M17.016 6.984c2.766 0 4.969 2.25 4.969 5.016s-2.203 5.016-4.969 5.016h-4.031v-1.922h4.031c1.688 0 3.094-1.406 3.094-3.094s-1.406-3.094-3.094-3.094h-4.031v-1.922h4.031zM8.016 12.984v-1.969h7.969v1.969h-7.969zM3.891 12c0 1.688 1.406 3.094 3.094 3.094h4.031v1.922h-4.031c-2.766 0-4.969-2.25-4.969-5.016s2.203-5.016 4.969-5.016h4.031v1.922h-4.031c-1.688 0-3.094 1.406-3.094 3.094z"></path>
                </svg>
            </ui-icon>

            <h4 class="page__demo-title">SVG: <code>useSvg</code> and <code>icon</code></h4>
            <!--
                This defines the SVG icons to use with xlink and can be anywhere in the <body> of the document,
                preferably just before the closing <body> tag
            -->
            <div style="display: none;">
                <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <symbol id="icon-link" viewBox="0 0 24 24">
                            <title>link</title>
                            <path class="path1" d="M17.016 6.984c2.766 0 4.969 2.25 4.969 5.016s-2.203 5.016-4.969 5.016h-4.031v-1.922h4.031c1.688 0 3.094-1.406 3.094-3.094s-1.406-3.094-3.094-3.094h-4.031v-1.922h4.031zM8.016 12.984v-1.969h7.969v1.969h-7.969zM3.891 12c0 1.688 1.406 3.094 3.094 3.094h4.031v1.922h-4.031c-2.766 0-4.969-2.25-4.969-5.016s2.203-5.016 4.969-5.016h4.031v1.922h-4.031c-1.688 0-3.094 1.406-3.094 3.094z"></path>
                        </symbol>
                    </defs>
                </svg>
            </div>

            <!-- Use the icon defined above -->
            <ui-icon icon="icon-link" use-svg></ui-icon>
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
                                <td>ariaLabel</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The icon's ARIA label (important for accessibility, but should not be added for purely decorative icons).</p>
                                </td>
                            </tr>

                            <tr>
                                <td>icon</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The icon name (when using an icon font) or the symbol id (when <code>useSvg</code> is <code>true</code>).</p>
                                    <p>By default this can be any of the <a href="https://design.google.com/icons/" target="_blank" rel="noopener">Material Icons</a>.</p>
                                    <p>Required when using an icon font or <code>useSvg</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>iconSet</td>
                                <td>String</td>
                                <td class="no-wrap"><code>"material-icons"</code></td>
                                <td>
                                    <p>The icon set, applied as a class on the icon root element.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>removeText</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not to remove the icon element's inner text. Set to <code>true</code> to remove the inner text.</p>
                                    <p>The <code>icon</code> prop is set as the inner text by default because Material Icons use ligatures for rendering the icon glyph.</p>
                                    <p>When <code>useSvg</code> is <code>true</code>, the inner text is removed regardless of the value of <code>removeText</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>useSvg</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not to use an SVG <code>use</code> tag for rendering the icon.</p>
                                    <p>See the <b>Using SVG: <code>&lt;use&gt;</code></b> section above for details.</p>
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
                                <td>Holds the name of the icon when using an icon font. Can also hold SVG for a custom icon.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ui-tab>
        </ui-tabs>
    </section>
</template>

<script>
import UiIcon from 'src/UiIcon.vue';
import UiTab from 'src/UiTab.vue';
import UiTabs from 'src/UiTabs.vue';

export default {
    components: {
        UiIcon,
        UiTab,
        UiTabs
    }
};
</script>

<style lang="scss">
@import '~styles/imports';

.page--ui-icon {
    .ui-icon {
        color: $secondary-text-color;
        margin-right: 8px;
        margin-bottom: 8px;
    }

    .page__demo.is-boxed {
        border: 1px solid #DDD;
        max-width: 512px;
        padding: 24px;
    }

    .page__demo-group {
        &:not(:last-child) {
            margin-bottom: 16px;
        }

        &.is-inline {
            p {
                margin: 0;
            }

            .ui-icon {
                margin: 0;
            }
        }

        .has-large-icons {
            .ui-icon {
                font-size: 32px;
            }
        }
    }
}
</style>
