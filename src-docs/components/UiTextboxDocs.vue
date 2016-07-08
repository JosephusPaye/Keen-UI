<template>
    <section class="section section-ui-textbox">
        <h2 class="section-heading">UiTextbox</h2>

        <p>UiTextbox is a text input component that can perform validation and show errors. It supports hover, focus, active and disabled states.</p>

        <p>A label can be shown above the input as well as help text below the input. UiTextbox can also show an icon to the left or right of the input. It can also show a counter of the number of characters entered.</p>

        <p>Validation rules are written declaratively and validation is powered by <a href="https://github.com/skaterdav85/validatorjs" target="_blank">validatorjs</a>. If validation fails, an error message is shown below the input. Error messages can be customized.</p>

        <h3>Examples</h3>

        <div class="demo">
            <h4>Default</h4>

            <ui-textbox label="Name" name="name" type="text" placeholder="Enter your name"></ui-textbox>

            <h4>Disabled</h4>

            <ui-textbox
                label="Name" name="name" type="text" placeholder="Enter your name" disabled
            ></ui-textbox>

            <h4>With default value</h4>

            <ui-textbox
                label="Name" name="name" type="text" placeholder="Enter your name"
                :value.sync="'John Doe'"
            ></ui-textbox>

            <h4>With default value, disabled</h4>

            <ui-textbox
                label="Name" name="name" type="text" placeholder="Enter your name"
                :value.sync="'John Doe'" disabled
            ></ui-textbox>

             <h4>With help text</h4>

            <ui-textbox
                label="Name" name="name" type="text" placeholder="Enter your name"
                help-text="If you have multiple names, enter the one you prefer"
            ></ui-textbox>

            <h4>With icon</h4>

            <ui-textbox
                label="Phone" name="phone" type="tel" placeholder="Enter your phone number"
                icon="phone"
            ></ui-textbox>

            <h4>With icon, no label</h4>

            <ui-textbox
                name="search" placeholder="Search" icon="search" hide-label
            ></ui-textbox>

            <h4>With icon (right) and help text</h4>

            <ui-textbox
                label="Email" name="email" type="text" placeholder="Enter your email" icon="mail"
                help-text="If you have multiple email addresses, enter the one you use the most"
                icon-right
            ></ui-textbox>

            <h4>With validation</h4>

            <p>Validation rules: <code>"required"</code></p>

            <ui-textbox
                label="Name" name="name" type="text" placeholder="Enter your name"
                help-text="If you have multiple names, enter the one you prefer"
                validation-rules="required" autocomplete="off"
            ></ui-textbox>

            <h4>Set validation state externally</h4>

            <ui-textbox
                label="Name" name="name" type="text" placeholder="Enter your name"
                help-text="If you have multiple names, enter the one you prefer"
                autocomplete="off" id="set-validation-state" :valid.sync="isValid"
            ></ui-textbox>

            <ui-button class="m-t-8" @click="toggleValidity">Toggle validity</ui-button>

            <h4>With validation and counter (max length)</h4>

            <p>Validation rules: <code>"min:8|max:16"</code></p>

            <ui-textbox
                label="Username" name="username" type="text" placeholder="Enter a username"
                icon="person" :max-length="16" validation-rules="min:8|max:16"
                help-text="Pick a unique username, minimum 8 characters, maximum 16 characters"
            ></ui-textbox>

            <h4>With multiple validation rules, validate on blur</h4>

            <p>Validation rules: <code>"required|email|min:10|max:64"</code></p>

            <ui-textbox
                label="Email" name="email" type="email" placeholder="Enter your email"
                help-text="If you have multiple email addresses, enter the one you use most often"
                validation-rules="required|email|min:10|max:64" validate-on-blur
                autocomplete="off"
            ></ui-textbox>

            <h4>With custom validation messages</h4>

            <p>Validation rules: <code>"required|email"</code></p>

            <ui-textbox
                label="Email" name="email" type="text" placeholder="Enter your email"
                help-text="If you have multiple email addresses, enter the one you use most often"
                validation-rules="required|email" autocomplete="off"
                :validation-messages="validationErrorMessages"
            ></ui-textbox>

            <h4>Number Input</h4>

            <p>Validation rules: <code>"numeric|min:0|max:99"</code></p>

            <ui-textbox
                label="Number of Cats" name="number_of_cats" type="number"
                placeholder="Enter number of cats" :min="0" :max="99"
                help-text="The ideal number of cats any one person should own, minimum 0, maximum 99"
                validation-rules="numeric|min:0|max:99"
            ></ui-textbox>

            <h4>Multi-line input (textarea)</h4>

            <ui-textbox
                label="Short bio" name="short_bio" :multi-line="true" :max-length="256"
                placeholder="Introduce yourself in a few words" help-text="Max 256 characters"
                validation-rules="max:256"
            ></ui-textbox>

            <h4>Multi-line input (textarea) with icon</h4>

            <ui-textbox
                label="Short bio" name="short_bio" :multi-line="true" icon="face" :max-length="256"
                placeholder="Introduce yourself in a few words" help-text="Max 256 characters"
                validation-rules="max:256"
            ></ui-textbox>

            <ui-button class="m-t-24" @click="resetFields">Reset all fields</ui-button>
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
                            <th>Binding</th>
                            <th>Description</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>id</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>A unique identifier for the input. Applied as the <code>id</code> attribute of the <code>&lt;input&gt;</code> and used when targeting a specific input for reset.</td>
                            </tr>

                            <tr>
                                <td>name *</td>
                                <td>String</td>
                                <td>(required)</td>
                                <td></td>
                                <td>The <code>name</code> attribute of the <code>&lt;input&gt;</code>. Used when generating validation error messages. A name with multiple words should be written in <code>snake_case</code>.</td>
                            </tr>

                            <tr>
                                <td>value</td>
                                <td>String</td>
                                <td></td>
                                <td>Two-way</td>
                                <td>The model that the input value syncs to.</td>
                            </tr>

                            <tr>
                                <td>type</td>
                                <td>String</td>
                                <td><code>"text"</code></td>
                                <td></td>
                                <td>
                                    <p>The <code>type</code> attribute of the <code>&lt;input&gt;</code>. Supported values are <code>text</code>, <code>search</code>, <code>email</code>, <code>url</code>, <code>tel</code>, and <code>number</code>.</p>
                                    <p>The <code>number</code> type causes the input value to be written to the model as a Number instead of a String.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>placeholder</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>The <code>placeholder</code> attribute of the <code>&lt;input&gt;</code>.</td>
                            </tr>

                            <tr>
                                <td>multiLine</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>Determines whether or not the input is a <code>&lt;textarea&gt;</code>. Set to <code>true</code> to render a textarea.</td>
                            </tr>


                            <tr>
                                <td>valid</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td>Two-way</td>
                                <td>Shows whether or not the input is valid. Only applicable the <code>validationRules</code> prop is present.</td>
                            </tr>

                            <tr>
                                <td>dirty</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>Two-way</td>
                                <td>Shows whether or not the input has been touched (clicked or focussed) by the user.</td>
                            </tr>

                            <tr>
                                <td>rows</td>
                                <td>Number</td>
                                <td><code>2</code></td>
                                <td></td>
                                <td>The <code>rows</code> attribute of the <code>&lt;textarea&gt;</code>. Only applicable when the <code>multiLine</code> prop is <code>true</code>.</td>
                            </tr>

                            <tr>
                                <td>maxLength</td>
                                <td>Number</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p>The maximum allowed length of input. Set this prop to show a counter below the input.</p>

                                    <p>Note, this prop doesn't prevent the user from going over the maximum length, and it also doesn't affect validation.</p>

                                    <p>To add validation as well, use the <code>max</code> validation rule.</p>

                                    <p>Example props for an input whose max length is 16 characters, showing a counter with validation:</p>

                                    <p><code>:max-length="16" validation-rules="max:16"</code></p>
                                </td>
                            </tr>

                            <tr>
                                <td>autocomplete</td>
                                <td>String</td>
                                <td><code>"on"</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the browser's autocomplete feature is allowed for the input. It can also be used to customize the type of suggestions the browser should offer. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autocomplete">here for more info</a>.</p>

                                    <p>Set to <code>"off"</code> to disable browser autocomplete (in browsers that support it).</p>
                                </td>
                            </tr>

                            <tr>
                                <td>min</td>
                                <td>Number</td>
                                <td></td>
                                <td></td>
                                <td>The <code>min</code> attribute of the <code>&lt;input&gt;</code>. Only applicable when the <code>type</code> prop is <code>"number"</code>.</td>
                            </tr>

                            <tr>
                                <td>max</td>
                                <td>Number</td>
                                <td></td>
                                <td></td>
                                <td>The <code>max</code> attribute of the <code>&lt;input&gt;</code>. Only applicable when the <code>type</code> prop is <code>"number"</code>.</td>
                            </tr>

                            <tr>
                                <td>step</td>
                                <td>Number/String</td>
                                <td><code>"any"</code></td>
                                <td></td>
                                <td>The <code>step</code> attribute of the <code>&lt;input&gt;</code>. Only applicable when the <code>type</code> prop is <code>"number"</code>.</td>
                            </tr>

                            <tr>
                                <td>icon</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>The input icon. Can be any of the <a href="https://design.google.com/icons/" target="_blank">Material Icons</a>. Note that this should be the icon codepoint if you want to support IE9.</td>
                            </tr>

                            <tr>
                                <td>iconRight</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>Determines whether or not the input icon is shown to the right. Set to <code>true</code> to show the icon to the right of the input.</td>
                            </tr>

                            <tr>
                                <td>label</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>The label shown above the input (text only).</td>
                            </tr>

                            <tr>
                                <td>hideLabel</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>Determines whether or not the input label is hidden. Set to <code>true</code> to hide the label.</td>
                            </tr>

                            <tr>
                                <td>helpText</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p>The help text (hint) shown to the user below the input.</p>

                                    <p>Extra space is reserved under the input for the help text, validation errors and the input length counter. If none of these are enabled, this space is collapsed.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>hideValidationErrors</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not validation errors for the input are hidden. Set to <code>true</code> to hide all validation errors.</p>

                                    <p>This prop is only applicable when the <code>validationRules</code> prop is present.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>validationRules</td>
                                <td>String</td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p>A pipe <code>|</code> seperated list of rules for validating the input. Can be any of the rules supported by <a href="https://github.com/skaterdav85/validatorjs#available-rules" target="_blank">validatorjs Validation Rules</a>, <b>except</b> the ones that involve multiple fields.</p>

                                    <p>Example to validate a required email field: <code>validation-rules="required|email"</code>.</p>

                                    <p>These rules will be applied and validation will occur automatically when the input is changed or blurred. The error message of the first failing validation rule will then be shown to the user.</p>

                                    <p>See the <code>validationMessages</code> prop for customizing the error message.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>validationMessages</td>
                                <td>Object</td>
                                <td></td>
                                <td></td>
                                <td>An Object whose keys are the validation rules and whose values are the error messages for those rules. See <a href="https://github.com/skaterdav85/validatorjs#custom-error-messages" target="_blank">validatorjs Custom Error Messages</a> for more details.</td>
                            </tr>

                            <tr>
                                <td>validateOnBlur</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>Determines whether or not the input should be validated only when it is blurred. Set to <code>true</code> to perform validation only on blur.</td>
                            </tr>

                            <tr>
                                <td>trimValue</td>
                                <td>Boolean</td>
                                <td><code>true</code></td>
                                <td></td>
                                <td>
                                    <p>Determines whether or not the input value should be trimmed before it is written to the model.</p>

                                    <p>Set to <code>false</code> to not trim the value. Not applicable when the <code>type</code> prop is <code>"number"</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>debounce</td>
                                <td>Number</td>
                                <td></td>
                                <td></td>
                                <td>Allows you to set a minimum delay (in milliseconds) after each keystroke before the input’s value is synced to the model.</td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td></td>
                                <td>Determines whether or not the input is disabled. Set to <code>true</code> to disable the input.</td>
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
                                <td>focussed</td>
                                <td>Dispatched</td>
                                <td>Dispatched when the input is focussed. Listen for it using <code>@focussed</code>.</td>
                            </tr>

                            <tr>
                                <td>blurred</td>
                                <td>Dispatched</td>
                                <td>Dispatched when the input loses focus. Listen for it using <code>@blurred</code>.</td>
                            </tr>

                            <tr>
                                <td>changed</td>
                                <td>Dispatched</td>
                                <td>Dispatched when the input is changed. Listen for it using <code>@changed</code>.</td>
                            </tr>

                            <tr>
                                <td>keydown</td>
                                <td>Dispatched</td>
                                <td>Dispatched when a key is pressed in the input. An Event object is passed as the argument to the handler. Listen for it using <code>@keydown</code>.</td>
                            </tr>

                            <tr>
                                <td class="no-wrap">keydown-enter</td>
                                <td>Dispatched</td>
                                <td>Dispatched when the <kbd>Enter</kbd> key is pressed in the input. An event object is passed as the argument to the handler. Listen for it using <code>@keydown-enter</code>.</td>
                            </tr>

                            <tr>
                                <td class="no-wrap">ui-input::reset</td>
                                <td>Received</td>
                                <td>
                                    <p>Trigger this event to reset the input to its initial state. This event resets the <code>value</code>, <code>valid</code> and <code>dirty</code> props.</p>

                                    <p>You can optionally pass in an <code>id</code> to reset only a specific input (whose <code>id</code> you have set).</p>
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
import UiTab from '../../src/UiTab.vue';
import UiTabs from '../../src/UiTabs.vue';
import UiTextbox from '../../src/UiTextbox.vue';
import UiButton from '../../src/UiButton.vue';

export default {
    components: {
        UiTab,
        UiTabs,
        UiTextbox,
        UiButton
    },

    data() {
        return {
            validationErrorMessages: {
                required: 'Please enter your email. We won\'t be able to contact you without an email address.',
                email: 'Oops, the email address you have entered seems to be wrong. Double check?'
            },
            isValid: true
        };
    },

    methods: {
        resetFields() {
            this.$broadcast('ui-input::reset');
        },

        toggleValidity() {
            this.$broadcast(
                'ui-input::set-validity', !this.isValid,
                'The input is not valid. This error message was set externally.',
                'set-validation-state'
            );
        }
    }
};
</script>

<style lang="stylus">
.section-ui-textbox {
    .ui-button {
        &.m-t-8 {
            margin-top: 8px;
        }

        &.m-t-24 {
            margin-top: 24px;
        }
    }
}
</style>
