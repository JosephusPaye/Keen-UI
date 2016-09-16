<template>
    <section class="section section-ui-ripple-ink">
        <h2 class="section-heading">
            UiRippleInk <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiRippleInk.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h2>

        <p>UiRippleInk allows you to show a ripple ink on a material when it is touched or clicked. Using CSS, you can customize the ripple color and opacity.</p>

        <p>To change the color, set a <code>color</code> property on the containing element (which the ripple will inherit as background color) or set a <code>background-color</code> property on <code>.ui-ripple-ink .ripple</code>.</p>

        <p>To change the opacity, set <code>opacity</code> on <code>.ui-ripple-ink .ripple</code>.</p>

        <p>UiRippleInk is used internally by many components, including <a href="#/ui-button-docs">UiButton</a>, <a href="#/ui-collapsible-docs">UiCollapsible</a>, <a href="#/ui-icon-button-docs">UiIconButton</a>, <a href="#/ui-fab-docs">UiFab</a>, <a href="#/ui-menu-docs">UiMenu</a>, and <a href="#/ui-tabs-docs">UiTabs</a>.</p>

        <h3>
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiRippleInkDocs.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h3>

        <div class="demo">
            <h4>Color: blue</h4>

            <div class="group tv-shows custom-color color-blue">
                <image-pane inline-template
                    :image="show.image" v-for="show in tvShows"
                >
                    <div
                        class="image-pane"
                        :style="{ 'background-image': 'url(' + image + ')' }"
                    >
                        <ui-ripple-ink></ui-ripple-ink>
                    </div>
                </image-pane>
            </div>

            <h4>Color: orange, Opacity: 0.95</h4>

            <div class="group the-simpsons custom-color color-orange custom-opacity">
                <image-pane inline-template
                    :image="simpson.image" v-for="simpson in theSimpsons"
                >
                    <div
                        class="image-pane"
                        :style="{ 'background-image': 'url(' + image + ')' }"
                    >
                        <ui-ripple-ink></ui-ripple-ink>
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
                            <th>Description</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>trigger *</td>
                                <td>HTMLElement</td>
                                <td>An Element to attach the click/touch event listeners to. When this element is clicked or touched, a ripple ink will be shown.</td>
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
import UiRippleInk from '../../src/UiRippleInk.vue';
import UiTab from '../../src/UiTab.vue';
import UiTabs from '../../src/UiTabs.vue';

let tvShows = [
    {
        name: 'Better Call Saul',
        image: 'https://i.imgur.com/SwZPSS2.jpg'
    }, {
        name: 'Breaking Bad',
        image: 'https://i.imgur.com/tz6FJeN.jpg'
    }, {
        name: 'Sherlock',
        image: 'https://i.imgur.com/Pf1TkJY.jpg'
    }, {
        name: 'The Simpsons',
        image: 'https://i.imgur.com/HJmBlzf.jpg'
    }
];

let theSimpsons = [
    {
        value: 'maggie',
        text: 'Maggie Simpson',
        image: 'https://i.imgur.com/eK26qtK.jpg'
    }, {
        value: 'lisa',
        text: 'Lisa Simpson',
        image: 'https://i.imgur.com/wIb44g9.jpg'
    }, {
        value: 'bart',
        text: 'Bart Simpson',
        image: 'https://i.imgur.com/XkEz9zg.jpg'
    }
];

export default {
    data() {
        return {
            theSimpsons,
            tvShows
        };
    },

    components: {
        UiTab,
        UiTabs,
        UiRippleInk,

        ImagePane: {
            props: ['image'],
            components: {
                UiRippleInk
            }
        }
    }
};
</script>

<style lang="stylus">
@import '../../src/styles/variables';

.section-ui-ripple-ink {
    .group {
        display: flex;
    }

    .custom-color {
        &.color-orange {
            color: $md-orange;
        }

        &.color-blue {
            color: $md-blue;
        }

        .ui-ripple-ink .ripple.held {
            opacity: 0.6;
        }
    }

    .custom-opacity {
        .ui-ripple-ink .ripple.held {
            opacity: 0.95;
        }
    }

    .image-pane {
        background-size: cover;
        background-position: 50%;
        margin-right: 16px;
        margin-bottom: 16px;

        position: relative;
    }

    .tv-shows {
        .image-pane {
            width: 120px;
            height: 180px;
        }
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
