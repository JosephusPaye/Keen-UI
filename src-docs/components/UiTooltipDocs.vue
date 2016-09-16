<template>
    <section class="section section-ui-tooltip">
        <h2 class="section-heading">
            UiTooltip <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiTooltip.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h2>

        <p>UiTooltip allows you to show a tooltip on an element. You can customize the position and the event that causes the tooltip to open.</p>

        <p>UiTooltip is used internally by <a href="#/ui-icon-button-docs">UiIconButton</a> and <a href="#/ui-fab-docs">UiFab</a>.</p>

        <h3>
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiTooltipDocs.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h3>

        <div class="demo">
            <div class="group the-simpsons">
                <image-pane inline-template
                    :image="simpson.image" :name="simpson.name" :position="simpson.position"
                    v-for="simpson in theSimpsons"
                >
                    <div
                        class="image-pane" ref="portrait"
                        :style="{ 'background-image': 'url(' + image + ')' }"
                    >
                        <ui-tooltip
                            trigger="portrait" :content="name" :position="position"
                        ></ui-tooltip>
                    </div>
                </image-pane>
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
                                <td>trigger *</td>
                                <td>HTMLElement</td>
                                <td>(required)</td>
                                <td>
                                    <p>An Element to attach the tooltip to.</p>
                                    <p>By default, when this element is hovered or focused, the tooltip is shown.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>content</td>
                                <td>String</td>
                                <td></td>
                                <td>The tooltip content (text only).</td>
                            </tr>

                            <tr>
                                <td>position</td>
                                <td>String</td>
                                <td class="no-wrap"><code>"bottom center"</code></td>
                                <td>
                                    <p>The position of the tooltip relative to the trigger.</p>

                                    <p>One of <code>top left</code>, <code>left top</code>, <code>left middle</code>, <code>left bottom</code>, <code>bottom left</code>, <code>bottom center</code>, <code>bottom right</code>, <code>right bottom</code>, <code>right middle</code>, <code>right top</code>, <code>top right</code>, or <code>top center</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>openOn</td>
                                <td>String</td>
                                <td><code>"hover focus"</code></td>
                                <td>
                                    <p>The type of event(s) that will cause the tooltip to open.</p>
                                    <p>One or more of <code>click</code>, <code>hover</code>, or <code>focus</code>. Separate multiple events with a space.</p>
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
import UiTooltip from '../../src/UiTooltip.vue';
import UiTab from '../../src/UiTab.vue';
import UiTabs from '../../src/UiTabs.vue';

let theSimpsons = [
    {
        position: 'top center',
        name: 'Maggie Simpson',
        image: 'https://i.imgur.com/eK26qtK.jpg'
    }, {
        position: 'bottom center',
        name: 'Lisa Simpson',
        image: 'https://i.imgur.com/wIb44g9.jpg'
    }, {
        position: 'right middle',
        name: 'Bart Simpson',
        image: 'https://i.imgur.com/XkEz9zg.jpg'
    }
];

export default {
    data() {
        return {
            theSimpsons
        };
    },

    components: {
        UiTab,
        UiTabs,
        UiTooltip,

        ImagePane: {
            props: ['image', 'name', 'position'],
            components: {
                UiTooltip
            }
        }
    }
};
</script>

<style lang="stylus">
@import '../../src/styles/variables';

.section-ui-tooltip {
    .group {
        display: flex;
    }

    .image-pane {
        background-size: cover;
        background-position: 50%;
        margin-right: 16px;
        margin-bottom: 16px;

        position: relative;
    }

    .the-simpsons {
        .image-pane {
            width: 120px;
            height: 120px;
            border-radius: 8px;
        }
    }
}
</style>
