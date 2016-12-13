<template>
    <section class="section section-ui-rating">
        <h2 class="section-heading">
            UiRating &amp; UiRatingPreview <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src/UiRating.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h2>

        <p>UiRating component shows a rating control whose icons can be stars or hearts. UiRatingPreview is the basic, read-only version.</p>

        <p>UiRating supports a label, help text, keyboard interaction and hover, focus and disabled states. It also allows for resetting to the initial state.</p>

        <h3>
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/gh-pages/src-docs/components/UiRatingDocs.vue" target="_blank" rel="noopener" class="view-source-link">View Source</a>
        </h3>

        <div class="demo">
            <h4>UiRatingPreview</h4>

            <ui-rating-preview :total="5" :value="4"></ui-rating-preview>
            <ui-rating-preview :total="5" :value="3" type="heart"></ui-rating-preview>

            <h4>UiRating</h4>

            <ui-rating
                :total="5" v-model="values.value1" label="Rate this post" type="heart"
                help-text="Be honest, it won't hurt our feelings :)"
            ></ui-rating>

            <ui-rating
                :total="6" v-model="values.value2" label="Rate your last bagel"
                help-text="1 for terrible, 3 for meh and 5 for fantastic"
                @preview-value-changed="updateText"
            ></ui-rating>

            <p>
                <code>Your last bagel was: <b v-text="bagelRating"></b>.</code>
            </p>

            <ui-button @click.native="reset">Reset Ratings</ui-button>

            <h4>UiRating, disabled</h4>

            <ui-rating
                :total="5" v-model="values.value3" label="Rate this post" disabled
            ></ui-rating>
        </div>

        <h3>API: UiRating</h3>

        <ui-tabs raised>

            <ui-tab header="Props">
                <div class="table-responsive">

                    <table class="table">
                        <thead>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Binding</th>
                            <th>Description</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>id</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p>A unique identifier for the rating.</p>
                                    <p>Applied as the <code>id</code> attribute of the rating root element and used when targeting a specific rating for reset.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>type</td>
                                <td>String</td>
                                <td><code>"star"</code></td>
                                <td></td>
                                <td>
                                    <p>The type of rating (determines the icon to show).</p>
                                    <p>One of <code>star</code> or <code>heart</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>value *</td>
                                <td>Number</td>
                                <td>(required)</td>
                                <td>Two-way</td>
                                <td>
                                    <p>The model that the rating value (i.e. number of filled stars or hearts) syncs to.</p>
                                    <p>Can be set initially to show a default rating.</p>
                                    <p>Must be less than or equal to <code>total</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>total *</td>
                                <td>Number</td>
                                <td>(required)</td>
                                <td></td>
                                <td>The rating total (i.e. number of stars or hearts to show).</td>
                            </tr>

                            <tr>
                                <td>label</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>The rating label (text-only).</td>
                            </tr>

                            <tr>
                                <td>hideLabel</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the rating label is hidden.</p>
                                    <p>Set to <code>true</code> to hide the label.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>helpText</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p>The help text (hint) shown to the user below the rating.</p>
                                    <p>Extra space is reserved under the rating for the help text, but if no help text is available, this space is collapsed.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the rating is disabled.</p>
                                    <p>Set to <code>true</code> to disable the rating.</p>
                                    <p><b>Note</b>: this is not the same as a read-only rating, for that, use UiRatingPreview.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                * Required prop
            </ui-tab>

            <ui-tab header="Events">
                <div class="table-responsive">

                    <table class="table">
                        <thead>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Description</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>preview-value-changed</td>
                                <td>Dispatched</td>
                                <td>
                                    <p>Dispatched when the preview value of the rating changes.</p>
                                    <p>Listen for it using <code>@preview-value-changed</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap">ui-input::reset</td>
                                <td>Received</td>
                                <td>
                                    <p>Trigger this event to reset the rating to its initial state.</p>
                                    <p>This event resets the <code>value</code> prop.</p>
                                    <p>You can optionally pass in an <code>id</code> to reset only a specific rating (whose <code>id</code> you have set).</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </ui-tab>

        </ui-tabs>

        <h3>API: UiRatingPreview</h3>

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
                                <td><code>"star"</code></td>
                                <td>
                                    <p>The type of rating (determines the icon to show).</p>
                                    <p>One of <code>star</code> or <code>heart</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>value *</td>
                                <td>Number</td>
                                <td>(required)</td>
                                <td>
                                    <p>The rating preview value (i.e. number of filled stars or hearts).</p>
                                    <p>Must be less than or equal to <code>total</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>total *</td>
                                <td>Number</td>
                                <td>(required)</td>
                                <td>The rating total (i.e. number of stars or hearts to show).</td>
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
import UiTab from '../../src/UiTab.vue'
import UiTabs from '../../src/UiTabs.vue'
import UiButton from '../../src/UiButton.vue'
import UiRating from '../../src/UiRating.vue'
import UiRatingPreview from '../../src/UiRatingPreview.vue'
import EventBus from '../../src/helpers/event-bus'

export default {
    data() {
        return {
            bagelRating: 'meh',
            values: {
                value1: 3,
                value2: 3,
                value3: 5,
            }
        };
    },

    methods: {
        reset() {
            EventBus.$emit('ui-input::reset')
        },

        updateText(previewRating) {
            var text;

            switch (previewRating) {
                case 1:
                    text = 'terrible';
                    break;
                case 2:
                    text = 'not bad';
                    break;
                case 3:
                    text = 'meh';
                    break;
                case 4:
                    text = 'OK';
                    break;
                case 5:
                    text = 'good';
                    break;
                case 6:
                    text = 'fantastic';
                    break;
                default:
                    // do nothing
            }

            this.bagelRating = text;
        }
    },

    components: {
        UiTab,
        UiTabs,
        UiButton,
        UiRating,
        UiRatingPreview
    }
};
</script>

<style lang="stylus">
.section-ui-rating {
    .ui-rating-preview {
        margin-right: 12px;
    }

    .ui-rating {
        margin-bottom: 24px;
    }

    .ui-button {
        margin-top: 24px;
    }
}
</style>
