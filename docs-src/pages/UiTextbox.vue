<template>
    <section class="page page--ui-textbox">
        <h2 class="page__title">UiTextbox</h2>

        <p>UiTextbox is a versatile text input component with support for hover, focus, active, invalid and disabled states.</p>

        <p>A label can be shown above the textbox as well as help or error below the textbox. UiTextbox can show an icon to the left or right of the input. It can also show a counter of the number of characters entered.</p>

        <p>UiTextbox supports multi-line text input (textarea) and the textbox will grow by default to fit its content.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiTextbox.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <h4 class="page__demo-title">Basic</h4>

            <ui-textbox label="Name" placeholder="Enter your name" v-model="textbox1"></ui-textbox>

            <h4 class="page__demo-title">Floating label</h4>

            <ui-textbox
                floating-label
                label="Name"
                placeholder="Enter your name"

                v-model="textbox2"
            ></ui-textbox>

            <h4 class="page__demo-title">Disabled</h4>

            <ui-textbox
                disabled label="Name" placeholder="Enter your name" v-model="textbox3"
            ></ui-textbox>

            <h4 class="page__demo-title">With default value</h4>

            <ui-textbox label="Name" placeholder="Enter your name" v-model="textbox4"></ui-textbox>

            <h4 class="page__demo-title">With default value, disabled</h4>

            <ui-textbox
                disabled label="Name" placeholder="Enter your name" v-model="textbox5"
            ></ui-textbox>

            <h4 class="page__demo-title">With help</h4>

            <ui-textbox
                help="If you have multiple names, enter the one you prefer"
                label="Name"
                placeholder="Enter your name"
                v-model="textbox6"
            ></ui-textbox>

            <h4 class="page__demo-title">With icon</h4>

            <ui-textbox
                icon="phone"
                label="Phone number"
                placeholder="Enter your phone number"
                type="tel"
                v-model="textbox7"
            ></ui-textbox>

            <h4 class="page__demo-title">With icon, no label</h4>

            <ui-textbox icon="search" placeholder="Search" v-model="textbox8"></ui-textbox>

            <h4 class="page__demo-title">iconPosition: right, with help</h4>

            <ui-textbox
                help="If you have multiple email addresses, enter the one you use the most"
                icon-position="right"
                icon="mail"
                label="Email address"
                placeholder="Enter your email address"
                type="email"
                v-model="textbox9"
            ></ui-textbox>

            <h4 class="page__demo-title">With validation: required</h4>

            <ui-textbox
                autocomplete="off"
                error="This field is required"
                help="If you have multiple names, enter the one you prefer"
                label="Name"
                placeholder="Enter your name"
                required

                :invalid="textbox10Touched && textbox10.length === 0"
                @touch="textbox10Touched = true"

                v-model="textbox10"
            ></ui-textbox>

            <h4 class="page__demo-title">With validation and counter (max length)</h4>

            <ui-textbox
                error="The username may not be more than 16 characters"
                help="Pick a unique username not more than 16 characters"
                icon="person"
                label="Username"
                placeholder="Enter a username"

                :maxlength="16"
                :invalid="textbox11.length > 16"

                v-model="textbox11"
            ></ui-textbox>

            <h4 class="page__demo-title">Type: number, min: 0, max: 99</h4>

            <ui-textbox
                help="The ideal number of cats a person should own, minimum 0, maximum 99"
                label="Number of Cats"
                placeholder="Enter number of cats"
                type="number"

                :min="0"
                :max="99"

                v-model.number="textbox12"
            ></ui-textbox>

            <h4 class="page__demo-title">Multi-line (textarea)</h4>

            <ui-textbox
                enforce-maxlength
                help="Maximum 256 characters"
                label="Short bio"
                placeholder="Introduce yourself in a few words"

                :multi-line="true"
                :maxlength="256"

                v-model="textbox13"
            ></ui-textbox>

            <h4 class="page__demo-title">Multi-line (textarea) with floating label</h4>

            <ui-textbox
                enforce-maxlength
                floating-label
                help="Maximum 256 characters"
                label="Short bio"
                placeholder="Introduce yourself in a few words"

                :multi-line="true"
                :maxlength="256"

                v-model="textbox14"
            ></ui-textbox>

            <h4 class="page__demo-title">Multi-line (textarea) with icon</h4>

            <ui-textbox
                enforce-maxlength
                help="Maximum 256 characters"
                icon="face"
                label="Short bio"
                placeholder="Introduce yourself in a few words"

                :multi-line="true"
                :maxlength="256"

                v-model="textbox15"
            ></ui-textbox>
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
                                <td>name</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The <code>name</code> attribute of the textbox input element.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap">value, v-model *</td>
                                <td>String, Number</td>
                                <td></td>
                                <td>
                                    <p>The model that the textbox value syncs to. Can be set initially as a default value.</p>
                                    <p>If you are not using <code>v-model</code>, you should listen for the <code>input</code> event and update <code>value</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>type</td>
                                <td>String</td>
                                <td><code>"text"</code></td>
                                <td>
                                    <p>The <code>type</code> attribute of the textbox input element.</p>

                                    <p>Supported values are <code>text</code>, <code>password</code>, <code>search</code>, <code>email</code>, <code>url</code>, <code>tel</code>, and <code>number</code>. Other values for which the browser shows a custom UI may work, but are not supported.</p>

                                    <p>Only applicable when <code>multiLine</code> is <code>false</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>placeholder</td>
                                <td>String</td>
                                <td></td>
                                <td>The <code>placeholder</code> attribute of the textbox input element.</td>
                            </tr>

                            <tr>
                                <td>multiLine</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the textbox is a rendered as a textarea.</p>
                                    <p>Set to <code>true</code> to render a textarea.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>invalid</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the input is invalid.</p>
                                    <p>When <code>invalid</code> is <code>true</code>, the textbox label appears red and the error is shown if available.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>rows</td>
                                <td>Number</td>
                                <td><code>2</code></td>
                                <td>
                                    <p>The <code>rows</code> attribute of the textarea element.</p>
                                    <p>Only applicable when the <code>multiLine</code> prop is <code>true</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>required</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>The <code>required</code> attribute of the textbox input and textarea elements.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>readonly</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>The <code>readonly</code> attribute of the textbox input and textarea elements.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>autofocus</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the textbox should automatically receive focus when it is rendered for the first time.</p>
                                    <p>Only one input element should have this prop set to <code>true</code> in the document for the autofocus to work properly.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>autocomplete</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The type of autocomplete suggestions the browser should offer for the input.</p>

                                    <p>See the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autocomplete" target="_blank" rel="noopener">autocomplete attribute docs</a> for more info.</p>

                                    <p>Set to <code>"off"</code> to disable the browser autocomplete.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>autosize</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td>
                                    <p>Whether or not the textarea should automatically grow in height to fit its content.</p>
                                    <p>Note that when you change the textbox's value programmatically, you should call the <code>refreshSize()</code> method to update the textarea size.</p>
                                    <p>Set to <code>false</code> to disable auto sizing.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>min</td>
                                <td>Number</td>
                                <td></td>
                                <td>
                                    <p>The <code>min</code> attribute of the textbox input element.</p>
                                    <p>Only applicable when the <code>type</code> prop is <code>"number"</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>max</td>
                                <td>Number</td>
                                <td></td>
                                <td>
                                    <p>The <code>max</code> attribute of the textbox input element.</p>
                                    <p>Only applicable when the <code>type</code> prop is <code>"number"</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>step</td>
                                <td>Number, String</td>
                                <td><code>"any"</code></td>
                                <td>
                                    <p>The <code>step</code> attribute of the textbox input element.</p>
                                    <p>Only applicable when the <code>type</code> prop is <code>"number"</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>maxlength</td>
                                <td>Number</td>
                                <td></td>
                                <td>
                                    <p>The <code>maxlength</code> attribute of the input and textarea elements. When set, a character counter will be shown below the textbox.</p>

                                    <p>The max length restriction is only enforced when the <code>enforceMaxlength</code> prop is <code>true</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>enforceMaxlength</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not to enforce the <code>maxlength</code> prop as an input restriction.</p>
                                    <p>Set to <code>true</code> to ensure that the user cannot enter more characters than <code>maxlength</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>icon</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The textbox icon. Can be any of the <a href="https://design.google.com/icons/" target="_blank" rel="noopener">Material Icons</a>.</p>
                                    <p>You can set a custom or SVG icon using the <code>icon</code> slot.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>iconPosition</td>
                                <td>String</td>
                                <td><code>"left"</code></td>
                                <td>
                                    <p>The position of the icon relative to the textbox. One of <code>left</code> or <code>right</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>label</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The textbox label (text only). For HTML, use the <code>default</code> slot.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>floatingLabel</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the textbox label starts out inline and moves to float above the input when it is focused.</p>
                                    <p>Set to <code>true</code> for a floating label. This will disable the input placeholder.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>help</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The help text (hint) shown below the textbox. For HTML, use the <code>help</code> slot.</p>
                                    <p>Extra space is reserved under the textbox for the help and error, but if neither is available, this space is collapsed.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>error</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The error text shown to the user below the textbox input when the <code>invalid</code> prop is <code>true</code>. For HTML, use the <code>error</code> slot.</p>
                                    <p>Extra space is reserved under the textbox for the help and error, but if neither is available, this space is collapsed.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the input is disabled. Set to <code>true</code> to disable the input.</p>
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
                                <td>Holds the autocomplete label and can contain HTML.</td>
                            </tr>

                            <tr>
                                <td>icon</td>
                                <td>
                                    <p>Holds the textbox icon and can contain any custom or SVG icon.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>help</td>
                                <td>
                                    <p>Holds the textbox help and can contain HTML.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>error</td>
                                <td>
                                    <p>Holds the textbox error and can contain HTML.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ui-tab>

            <ui-tab title="Events">
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
                                <td>input</td>
                                <td>
                                    <p>Emitted when the select value is changed. The handler is called with the new value.</p>
                                    <p>If you are not using <code>v-model</code>, you should listen for this event and update the <code>value</code> prop.</p>
                                    <p>Listen for it using <code>@input</code>.
                                </td>
                            </tr>

                            <tr>
                                <td>change</td>
                                <td>
                                    <p>Emitted when a change in the textbox value is committed. The handler is called with the new value.</p>
                                    <p>See the <a href="https://developer.mozilla.org/en-US/docs/Web/Events/change" target="_blank" rel="noopener">onchange event documentation</a> for more information.</p>
                                    <p>Listen for it using <code>@change</code>.
                                </td>
                            </tr>

                            <tr>
                                <td>touch</td>
                                <td>
                                    <p>Emitted when the textbox is focused for the first time and then blurred.</p>
                                    <p>Listen for it using <code>@touch</code>.
                                </td>
                            </tr>

                            <tr>
                                <td>focus</td>
                                <td>
                                    <p>Emitted when the textbox is focused.</p>
                                    <p>Listen for it using <code>@focus</code>.
                                </td>
                            </tr>

                            <tr>
                                <td>blur</td>
                                <td>
                                    <p>Emitted when the textbox loses focus.</p>
                                    <p>Listen for it using <code>@blur</code>.
                                </td>
                            </tr>

                            <tr>
                                <td>keydown</td>
                                <td>
                                    <p>Emitted when a key is pressed in the input. The handler is called with the event object.</p>
                                    <p>Listen for it using <code>@keydown</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap">keydown-enter</td>
                                <td>
                                    <p>Emitted when the Enter key is pressed in the input. The handler is called with the event object.</p>
                                    <p>Listen for it using <code>@keydown-enter</code>.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ui-tab>

            <ui-tab title="Methods">
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
                                <td><code>reset()</code></td>
                                <td>
                                    <p>Call this method to reset the textbox to its initial value. You should also reset the <code>invalid</code> prop.</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="no-wrap"><code>resetTouched()</code></td>
                                <td>Call this method to reset the touched state of the textbox. By default it will set the touched state to <code>false</code>, but you can pass an object with <code>{ touched: true }</code> to set the touched state to <code>true</code>.</td>
                            </tr>

                            <tr>
                                <td><code>refreshSize()</code></td>
                                <td>
                                    <p>Call this method to refresh the size of the textarea when you change the value programmatically.</p>
                                </td>
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
import UiTextbox from 'src/UiTextbox.vue';

export default {
    data() {
        return {
            textbox1: '',
            textbox2: '',
            textbox3: '',
            textbox4: 'John Doe',
            textbox5: 'Jane Doe',
            textbox6: '',
            textbox7: '',
            textbox8: '',
            textbox9: '',
            textbox10: '',
            textbox10Touched: false,
            textbox11: '',
            textbox12: 0,
            textbox13: '',
            textbox14: '',
            textbox15: 'My name is Jane Doe...'
        };
    },

    components: {
        UiTab,
        UiTabs,
        UiTextbox
    }
};
</script>

<style lang="scss">
@import '~styles/imports';

.page--ui-textbox {
    .ui-textbox {
        max-width: rem-calc(600px);
    }
}
</style>
