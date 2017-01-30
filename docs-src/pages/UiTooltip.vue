<template>
    <section class="page page--ui-tooltip">
        <h2 class="page__title">UiTooltip</h2>

        <p>UiTooltip shows a tooltip on an element. The tooltip position relative to the associated element and the event that causes the tooltip to open can be customized.</p>

        <p>UiTooltip is used internally by <a href="#/ui-icon-button-docs">UiIconButton</a> and <a href="#/ui-fab-docs">UiFab</a>.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiTooltip.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <div class="page__demo-group page__demo-group--the-simpsons">
                <image-pane
                    tabindex="0"

                    :image="simpson.image"
                    :name="simpson.name"
                    :tooltip-position="simpson.position"

                    v-for="simpson in theSimpsons"
                ></image-pane>
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
                                <td>trigger *</td>
                                <td>String</td>
                                <td>required</td>
                                <td>
                                    <p>The string key of an element in the parent's <code>$refs</code> object.</p>
                                    <p>The tooltip event listeners will be attached to this element, and when any of the <code>openOn</code> events are triggered, a tooltip will be shown next to the element.</p>
                                    <p>By default, when the element is hovered or focused, the tooltip is shown.</p>
                                </td>
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
                                    <p>The type of event or events that will cause the tooltip to open.</p>
                                    <p>One or more of <code>click</code>, <code>hover</code>, or <code>focus</code>. Separate multiple events with a space.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>openDelay</td>
                                <td>Number</td>
                                <td><code>0</code></td>
                                <td>
                                    <p>The amount of time to wait (in milliseconds) before showing the tooltip when it is triggered.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                * Required prop
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
                                <td>Holds the tooltip content (should be text-only).</td>
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
import UiTooltip from 'src/UiTooltip.vue';

const theSimpsons = [
    {
        position: 'top center',
        name: 'Maggie Simpson',
        image: 'https://i.imgur.com/eK26qtK.jpg'
    },
    {
        position: 'bottom center',
        name: 'Lisa Simpson',
        image: 'https://i.imgur.com/wIb44g9.jpg'
    },
    {
        position: 'right middle',
        name: 'Bart Simpson',
        image: 'https://i.imgur.com/XkEz9zg.jpg'
    }
];

const ImagePane = {
    name: 'image-pane',
    template: `
        <div class="image-pane" ref="image" :style="{ 'background-image': 'url(' + image + ')' }">
            <ui-tooltip trigger="image" :position="tooltipPosition">{{ name }}</ui-tooltip>
        </div>
    `,

    props: {
        image: String,
        name: String,
        tooltipPosition: String
    },

    components: {
        UiTooltip
    }
};

export default {
    data() {
        return {
            theSimpsons
        };
    },

    components: {
        ImagePane,
        UiTab,
        UiTabs,
        UiTooltip
    }
};
</script>

<style lang="scss">
@import '~styles/imports';

.page--ui-tooltip {
    .page__demo-group {
        display: flex;
        flex-wrap: wrap;
    }

    .page__demo-group--the-simpsons {
        .image-pane {
            border-radius: rem-calc(8px);
            height: rem-calc(120px);
            width: rem-calc(120px);
        }
    }

    .image-pane {
        background-position: 50%;
        background-size: cover;
        margin-bottom: rem-calc(16px);
        margin-right: rem-calc(16px);
        position: relative;
    }
}
</style>
