<template>
    <section class="page page--ui-ripple-ink">
        <h2 class="page__title">UiRippleInk</h2>

        <p>UiRippleInk shows a ripple ink animation when the element it is associated with is touched or clicked. The ripple ink color and opacity can be customized.</p>

        <p>To customize the color, use CSS to set the <code>color</code> property on the containing element (which the ripple ink will inherit as background color) or set the <code>background-color</code> property on <code>.ui-ripple-ink__ink</code>.</p>

        <p>To customize the opacity, use CSS to set the <code>opacity</code> property on <code>.ui-ripple-ink__ink</code>.</p>

        <p>UiRippleInk is used internally by many components, including <a href="#/ui-button">UiButton</a>, <a href="#/ui-collapsible">UiCollapsible</a>, <a href="#/ui-icon-button">UiIconButton</a>, <a href="#/ui-fab">UiFab</a>, <a href="#/ui-menu">UiMenu</a>, and <a href="#/ui-tabs">UiTabs</a>.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiRippleInk.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <h4 class="page__demo-title">Color: blue</h4>

            <div
                class="page__demo-group page__demo-group--tv-shows page__demo-group--color-blue has-custom-color"
            >
                <image-pane :image="show.image" v-for="show in tvShows"></image-pane>
            </div>

            <h4 class="page__demo-title">Color: orange, Opacity: 0.95</h4>

            <div
                class="page__demo-group page__demo-group--the-simpsons page__demo-group--color-orange has-custom-color has-custom-opacity
            ">
                <image-pane :image="simpson.image" v-for="simpson in theSimpsons"></image-pane>
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
                                <th>Description</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>trigger *</td>
                                <td>String</td>
                                <td>
                                    <p>The string key of an element in the parent's <code>$refs</code> object.</p>

                                    <p>The click/touch event listeners will be attached to this element, and when it is clicked or touched, a ripple ink animation will be shown on the it.</p>

                                    <p>Make sure this element is "positioned" (i.e. its CSS <code>position</code> property is set to either <code>relative</code> or <code>absolute</code>).</p>
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
import UiRippleInk from 'src/UiRippleInk.vue';
import UiTab from 'src/UiTab.vue';
import UiTabs from 'src/UiTabs.vue';

const tvShows = [
    {
        name: 'Better Call Saul',
        image: 'https://i.imgur.com/SwZPSS2.jpg'
    },
    {
        name: 'Breaking Bad',
        image: 'https://i.imgur.com/tz6FJeN.jpg'
    },
    {
        name: 'Sherlock',
        image: 'https://i.imgur.com/Pf1TkJY.jpg'
    },
    {
        name: 'The Simpsons',
        image: 'https://i.imgur.com/HJmBlzf.jpg'
    }
];

const theSimpsons = [
    {
        value: 'maggie',
        text: 'Maggie Simpson',
        image: 'https://i.imgur.com/eK26qtK.jpg'
    },
    {
        value: 'lisa',
        text: 'Lisa Simpson',
        image: 'https://i.imgur.com/wIb44g9.jpg'
    },
    {
        value: 'bart',
        text: 'Bart Simpson',
        image: 'https://i.imgur.com/XkEz9zg.jpg'
    }
];

const ImagePane = {
    name: 'image-pane',
    template: `
        <div class="image-pane" ref="image" :style="{ 'background-image': 'url(' + image + ')' }">
            <ui-ripple-ink trigger="image"></ui-ripple-ink>
        </div>
    `,

    props: {
        image: String
    },

    components: {
        UiRippleInk
    }
};

export default {
    data() {
        return {
            tvShows,
            theSimpsons
        };
    },

    components: {
        ImagePane,
        UiRippleInk,
        UiTab,
        UiTabs
    }
};
</script>

<style lang="scss">
@import '~styles/imports';

.page--ui-ripple-ink {
    .page__demo-group {
        display: flex;
        flex-wrap: wrap;

        &.has-custom-color {
            .ui-ripple-ink__ink.is-held {
                opacity: 0.75;
            }
        }

        &.has-custom-opacity {
            .ui-ripple-ink__ink.is-held {
                opacity: 0.95;
            }
        }

        .image-pane {
            flex-shrink: 0;
        }
    }

    .page__demo-group--color-orange {
        color: $md-orange;
    }

    .page__demo-group--color-blue {
        color: $md-blue;
    }

    .page__demo-group--tv-shows {
        .image-pane {
            height: rem-calc(180px);
            width: rem-calc(120px);
        }
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
