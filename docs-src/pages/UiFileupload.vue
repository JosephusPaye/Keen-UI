<template>
    <section class="page page--ui-fileupload">
        <h2 class="page__title">UiFileupload</h2>

        <p>UiFileupload is a file upload button which wraps the native <code>input[type="file"]</code> element. Like <a href="#/ui-button">UiButton</a>, it allows for customizing the type, color, size and icon of the button.</p>

        <p>UiFileupload allows for selecting multiple files and customizing what type of files to allow.</p>

        <h3 class="page__section-title">
            Examples <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/docs-src/pages/UiFileupload.vue" target="_blank" rel="noopener">View Source</a>
        </h3>

        <div class="page__examples">
            <h4 class="page__demo-title">Basic</h4>
            <ui-fileupload name="file"></ui-fileupload>

            <h4 class="page__demo-title">Colors</h4>
            <div class="page__demo-group">
                <ui-fileupload color="primary" name="file2"></ui-fileupload>
                <ui-fileupload color="accent" name="file3"></ui-fileupload>
            </div>

            <h4 class="page__demo-title">Type: secondary</h4>
            <div class="page__demo-group">
                <ui-fileupload name="file4" type="secondary"></ui-fileupload>
                <ui-fileupload color="primary" name="file5" type="secondary"></ui-fileupload>
                <ui-fileupload color="accent" name="file6" type="secondary"></ui-fileupload>
            </div>

            <h4 class="page__demo-title">Custom label</h4>
            <ui-fileupload name="file7">Select file to upload</ui-fileupload>

            <h4 class="page__demo-title">Custom icon</h4>
            <ui-fileupload name="file8">
                <ui-icon slot="icon">cloud_upload</ui-icon>
            </ui-fileupload>

            <h4 class="page__demo-title">Custom accept</h4>

            <p>The following fileupload accepts only files with MIME type <code>image/*</code>.</p>
            <ui-fileupload name="file9" accept="image/*">Select an image</ui-fileupload>

            <h4 class="page__demo-title">Multiple</h4>
            <ui-fileupload multiple name="file10"></ui-fileupload>

            <h4 class="page__demo-title">With image preview</h4>
            <ui-fileupload
                accept="image/*"
                name="file11"
                @change="onFile11Change"
            >Select an image</ui-fileupload>

            <div class="page__demo-preview" v-if="file11PreviewImage.length > 0">
                <img
                    alt="file11PreviewName"
                    class="page__demo-preview-image"
                    :src="file11PreviewImage"
                >
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
                                <td>name *</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The <code>name</code> attribute of the file input element.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>label</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The upload button label (text only). For HTML, use the <code>default</code> slot.</p>
                                    <p>The label is shown when no file has been selected.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>accept</td>
                                <td>String</td>
                                <td></td>
                                <td>
                                    <p>The <code>accept</code> attribute of the file input element. <a href="https://developer.mozilla.org/en/docs/Web/HTML/Element/input#attr-accept" target="_blank" rel="noopener">See here</a> for possible values.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>multiple</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the user can select multiple files for this upload button.</p>
                                    <p>Set to <code>true</code> to allow the selection of multiple files.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>required</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>The <code>required</code> attribute of the file input element.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>type</td>
                                <td>String</td>
                                <td><code>"primary"</code></td>
                                <td>
                                    <p>The type of button (determines the visual prominence).</p>
                                    <p>Use <code>primary</code> for a more prominent button, and <code>secondary</code> for a less prominent button.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>color</td>
                                <td>String</td>
                                <td><code>"default"</code></td>
                                <td>
                                    <p>One of <code>primary</code>, <code>accent</code> or <code>default</code>.</p>
                                    <p>For <code>type="primary"</code>, this is the background color; for <code>type="secondary"</code>, the text color.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>size</td>
                                <td>String</td>
                                <td><code>"normal"</code></td>
                                <td>
                                    <p>The size of the upload button. One of <code>small</code>, <code>normal</code>, or <code>large</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>raised</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the upload button has a drop shadow.</p>
                                    <p>Set to <code>true</code> to show a drop shadow.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>iconPosition</td>
                                <td>String</td>
                                <td><code>"left"</code></td>
                                <td>
                                    <p>The position of the icon relative to the upload button text. One of <code>left</code> or <code>right</code>.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>disableRipple</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the ripple ink animation is shown when the upload button is clicked.</p>
                                    <p>Can be set using the <a href="https://github.com/JosephusPaye/Keen-UI/blob/master/Customization.md#global-config" target="_blank" rel="noopener">global config</a>.</p>
                                    <p>Set to <code>true</code> to disable the ripple ink animation.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>disabled</td>
                                <td>Boolean</td>
                                <td><code>false</code></td>
                                <td>
                                    <p>Whether or not the upload button is disabled.</p>
                                    <p>Set to <code>true</code> to disable the button.</p>
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
                                <td>Holds the upload button label and can contain HTML.</td>
                            </tr>

                            <tr>
                                <td>icon</td>
                                <td>
                                    <p>Holds the upload button icon and can contain any custom or SVG icon.</p>
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
                                <td>focus</td>
                                <td>
                                    <p>Emitted when the upload button is focused.</p>
                                    <p>Listen for it using <code>@focus</code>.
                                </td>
                            </tr>

                            <tr>
                                <td>blur</td>
                                <td>
                                    <p>Emitted when the upload button loses focus.</p>
                                    <p>Listen for it using <code>@blur</code>.
                                </td>
                            </tr>

                            <tr>
                                <td>change</td>
                                <td>
                                    <p>Emitted when the selected file changes. The handler is called with the following arguments:</p>
                                    <ul>
                                        <li><code>files</code> - <a href="https://developer.mozilla.org/en-US/docs/Web/API/FileList" target="_blank" rel="noopener">FileList</a>: an array-like container of <a href="https://developer.mozilla.org/en-US/docs/Web/API/File" target="_blank" rel="noopener">File</a> objects representing the selected files</li>
                                        <li><code>event</code> - Event: the original change event</li>
                                    </ul>

                                    <p>The file objects can be used to generage a client-side preview of the selected files. See the <b>With image preview</b> section above for an example.</p>

                                    <p>Listen for it using <code>@change</code>.
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
import UiFileupload from 'src/UiFileupload.vue';
import UiIcon from 'src/UiIcon.vue';
import UiRadioGroup from 'src/UiRadioGroup.vue';
import UiTab from 'src/UiTab.vue';
import UiTabs from 'src/UiTabs.vue';

export default {
    data() {
        return {
            size: 'normal',
            file11PreviewImage: ''
        };
    },

    methods: {
        onFile11Change(files) {
            this.file11PreviewImage = URL.createObjectURL(files[0]);
        }
    },

    components: {
        UiFileupload,
        UiIcon,
        UiRadioGroup,
        UiTab,
        UiTabs
    }
};
</script>

<style lang="scss">
@import '~styles/imports';

.page--ui-fileupload {
    .ui-radio-group {
        margin-bottom: rem-calc(16px);
    }

    .page__demo-group {
        display: flex;
        flex-wrap: wrap;

        .ui-fileupload {
            margin-right: 8px;
        }
    }

    .page__demo-preview {
        display: table;
        border: 1px solid #DDD;
        margin-top: 8px;
        padding: 4px;
        line-height: 1;
    }

    .page__demo-preview-image {
        min-width: 24px;
        max-width: 256px;
    }
}
</style>
