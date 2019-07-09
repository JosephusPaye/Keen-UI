<template>
    <section class="page page--ui-tooltip">
        <h2 class="page__title">UiTooltip</h2>

        <p>UiTooltip shows a tooltip on an element. The tooltip position relative to the associated element and the event that causes the tooltip to open can be customized.</p>

        <p>UiTooltip uses a custom version of <a href="https://atomiks.github.io/tippyjs/" target="_blank" rel="noopener">Tippy.js</a>, which uses <a href="https://popper.js.org" target="_blank" rel="noopener">Popper.js</a> for dynamic positioning.</p>

        <p>UiTooltip is used internally by <a href="#/ui-icon-button">UiIconButton</a> and <a href="#/ui-fab">UiFab</a>.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiTooltip.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <div class="page__demo-group page__demo-group--the-simpsons">
                <div
                    class="image-pane"
                    tabindex="0"

                    :key="index"
                    :style="{ 'background-image': 'url(' + simpson.image + ')' }"

                    v-for="(simpson, index) in theSimpsons"
                >
                    <ui-tooltip :position="simpson.position" :animation="simpson.animation">{{ simpson.name }}</ui-tooltip>
                </div>
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
                                <td>animation</td>
                                <td>String</td>
                                <td class="no-wrap"><code>"fade"</code></td>
                                <td>
                                    <p>The type of animation to use when showing or hiding the tooltip.</p>
                                    <p>One of: <code>fade</code>, <code>shift-away</code>, <code>scale</code>, or <code>none</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>appendToBody</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td>
                                    <p>Whether or not the tooltip is appended to <code>document.body</code>.</p>
                                    <p>Set to <code>false</code> to append the tooltip to the trigger's parent element.</p>
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

                            <tr>
                                <td>openOn</td>
                                <td>String</td>
                                <td class="no-wrap"><code>"mouseenter focus"</code></td>
                                <td>
                                    <p>The type of event or events that will cause the tooltip to open.</p>
                                    <p>One or more of <code>click</code>, <code>hover</code>/<code>mouseenter</code>, or <code>focus</code>. Separate multiple events with a space.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>position</td>
                                <td>String</td>
                                <td><code>"bottom"</code></td>
                                <td>
                                    <p>The position of the tooltip relative to the trigger.</p>

                                    <p>One of <code>top</code>, <code>top-start</code>, <code>top-end</code>, <code>right</code>, <code>right-start</code>, <code>right-end</code>, <code>bottom</code>, <code>bottom-start</code>, <code>bottom-end</code>, <code>left</code>, <code>left-start</code>, <code>left-end</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>trigger</td>
                                <td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Element" target="_blank" rel="noopener">Element</a>,<br>VueComponent,<br>String</td>
                                <td>Parent element</td>
                                <td>
                                    <p>An Element, VueComponent instance, or CSS selector for an element to use as the trigger.</p>
                                    <p>It's recommended to leave <code>trigger</code> unspecified so that the component's immediate parent can be used as the trigger.</p>
                                    <p>The tooltip event listeners will be attached to this element, and when any of the <code>openOn</code> events are triggered, a tooltip will be shown next to the element.</p>
                                    <p>If <code>trigger</code> is not provided or the selector doesn't match any element, the tooltip's immediate parent element is used as the trigger. Note that the parent used is the tooltip's parent in the DOM, not the Vue parent component.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>zIndex</td>
                                <td>Number</td>
                                <td></td>
                                <td>
                                    <p>The tooltip z-index. Passed to Tippy.js.</p>
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
                                <th class="fixed-width">Name</th>
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

export default {
    data() {
        return {
            theSimpsons: [
                {
                    position: 'top',
                    animation: 'fade',
                    name: 'Maggie Simpson: Fade',
                    image: 'https://i.imgur.com/eK26qtK.jpg'
                },
                {
                    position: 'bottom',
                    animation: 'shift-away',
                    name: 'Lisa Simpson: Shift-Away',
                    image: 'https://i.imgur.com/wIb44g9.jpg'
                },
                {
                    position: 'right',
                    animation: 'scale',
                    name: 'Bart Simpson: Scale',
                    image: 'https://i.imgur.com/XkEz9zg.jpg'
                }
            ]
        };
    },

    components: {
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
            border-radius: rem(8px);
            height: rem(120px);
            width: rem(120px);
        }
    }

    .image-pane {
        background-color: #EEE;
        background-position: 50%;
        background-size: cover;
        margin-bottom: rem(16px);
        margin-right: rem(16px);
        position: relative;
    }
}
</style>
