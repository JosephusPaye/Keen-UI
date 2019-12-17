<template>
    <div class="example">
        <div class="example__preview">
            <slot></slot>
        </div>
        <div class="example__details">
            <div class="example__options">
                <div class="example__options-header">Options</div>
                <div
                    v-for="(option, optionName) in options"
                    :key="optionName"
                    class="example__option"
                >
                    <ui-switch
                        v-if="option.type === Boolean"
                        v-model="options[optionName].value"
                    >
                        {{ prettyName(optionName) }}
                    </ui-switch>
                    <template v-else-if="option.type === 'one-of'">
                        <ui-radio-group
                            v-if="option.options.length < 4"
                            v-model="options[optionName].value"
                            :name="optionName"
                            :label="prettyName(optionName)"
                            :options="option.options"
                        ></ui-radio-group>

                        <ui-select
                            v-else
                            v-model="options[optionName].value"
                            :label="prettyName(optionName)"
                            :options="option.options"
                        ></ui-select>
                    </template>

                    <ui-textbox
                        v-else-if="option.type === String"
                        v-model="options[optionName].value"
                        :label="prettyName(optionName)"
                    ></ui-textbox>

                    <ui-textbox
                        v-else-if="option.type === Number"
                        v-model.number="options[optionName].value"
                        :label="prettyName(optionName)"
                        type="number"
                    ></ui-textbox>

                    <div v-else>Unknown type: {{ optionName }}</div>
                </div>
            </div>
            <div class="example__code">
                <prism language="html">{{ code }}</prism>
                <button
                    ref="copyButton"
                    class="example__copy-button"
                    :data-clipboard-text="code"
                >
                    {{ copyButtonLabel }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import 'prismjs';
import Clipboard from 'clipboard';
import Prism from 'vue-prism-component';

import UiRadioGroup from '../src/UiRadioGroup.vue';
import UiSelect from '../src/UiSelect.vue';
import UiSwitch from '../src/UiSwitch.vue';
import UiTextbox from '../src/UiTextbox.vue';

/**
 * Convert a component's props definition to an options object for use
 * in the interactive example options section.
 *
 * @param  {Object} Component    A component options object
 * @param  {Array}  includeProps Array of props to include. Includes all props when empty.
 */
export function makeComponentOptions(Component, includeProps = []) {
    const options = {};

    Object.keys(Component.props).forEach(key => {
        if (includeProps.length > 0 && includeProps.indexOf(key) === -1) {
            return;
        }

        const prop = Component.props[key];
        const isOneOf = prop.$meta && prop.$meta.oneOf;

        const option = {
            type: isOneOf ? 'one-of' : prop.type,
            value: prop.default,
            prop,
        };

        if (isOneOf) {
            option.options = prop.$meta.oneOf;
        }

        options[key] = option;
    });

    return options;
}

/**
 * Convert a single prop definition to an option object for use
 * in the interactive example options section.
 *
 * @param  {Object} prop            The prop definition
 * @param  {String} defaultFallback The default value to use if the prop has no default
 */
export function propToOption(prop, defaultFallback = '') {
    const propDef = typeof prop === 'object' ? prop : { type: prop };

    if (
        propDef.type === String ||
        propDef.type === Number ||
        propDef.type === Boolean
    ) {
        return {
            type: propDef.type,
            value: propDef.default || defaultFallback,
            prop: propDef,
        };
    } else {
        throw new Error('Unhandled prop type: ' + propDef.type);
    }
}

export default {
    name: 'Example',

    components: { UiRadioGroup, UiSelect, UiSwitch, UiTextbox, Prism },

    props: {
        name: {
            type: String,
            required: true,
        },
        options: Object,
        extraOptions: Object,
        children: {
            type: String,
            default: '',
        },
    },

    data() {
        return {
            copyButtonLabel: 'Copy',
        };
    },

    computed: {
        code() {
            const attrs = this.optionsToPropCode(
                Object.assign({}, this.extraOptions, this.options)
            );

            const codeOpener = `<${this.name} ${attrs.join(' ')}>`;
            const indent = '    ';
            const inner = this.children
                ? `\n${indent}${this.children
                      .split('\n')
                      .join('\n' + indent)}\n`
                : '';

            if (codeOpener.length <= 80) {
                return `${codeOpener}${inner}</${this.name}>`;
            } else {
                return (
                    `<${this.name}\n` +
                    attrs.map(attr => indent + attr).join('\n') +
                    `\n>${inner}</${this.name}>`
                );
            }
        },
    },

    mounted() {
        this.clipboard = new Clipboard(this.$refs.copyButton);
        this.clipboard.on('success', () => {
            this.setCopyButtonLabel('Copied!');
        });
        this.clipboard.on('error', () => {
            this.setCopyButtonLabel('Copy failed');
        });
    },

    beforeDestroy() {
        if (this.clipboard) {
            this.clipboard.destroy();
        }

        if (this.copyButtonLabelTimeout) {
            clearTimeout(this.copyButtonLabelTimeout);
            this.copyButtonLabelTimeout = undefined;
        }
    },

    methods: {
        setCopyButtonLabel(label) {
            this.copyButtonLabel = label;

            if (this.copyButtonLabelTimeout) {
                clearTimeout(this.copyButtonLabelTimeout);
                this.copyButtonLabelTimeout = undefined;
            }

            this.copyButtonLabelTimeout = setTimeout(() => {
                this.copyButtonLabel = 'Copy';
                this.copyButtonLabelTimeout = undefined;
            }, 2000);
        },

        optionsToPropCode(options) {
            return Object.keys(options)
                .map(key => {
                    return this.optionToPropCode(options[key], key);
                })
                .filter(propCode => propCode.trim().length > 0);
        },

        optionToPropCode(option, name) {
            const kebabName = this.camelToSnakeCase(name, '-');

            if (option.value === option.prop.default) {
                return '';
            }

            if (option.type === Boolean) {
                return option.value ? `${kebabName}` : `:${kebabName}="false"`;
            } else if (option.type === String || option.type === 'one-of') {
                return `${kebabName}="${option.value}"`;
            } else if (option.type === Number) {
                return `:${kebabName}="${option.value}"`;
            } else {
                return `[unhandled type: ${option.type} (${kebabName})`;
            }
        },

        prettyName(name) {
            const pretty = this.camelToSnakeCase(name, ' ');
            return pretty[0].toUpperCase() + pretty.substring(1);
        },

        camelToSnakeCase(text, delimiter) {
            return text
                .replace(/[\w]([A-Z])/g, function(match) {
                    return match[0] + delimiter + match[1];
                })
                .toLowerCase();
        },
    },
};
</script>

<style lang="scss">
@import '../src/styles/imports';
@import '~prismjs/themes/prism.css';

.example {
    border: 1px solid $divider-color;
    border-radius: rem(4px);
    overflow: hidden;
}

.example__preview {
    background-color: #fff;
    border-bottom: 1px solid $divider-color;
    padding: rem(16px);

    @media (min-width: 768px) {
        padding: rem(24px);
    }
}

.example__details {
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    font-family: $font-stack;
    position: relative;

    @media (min-width: 768px) {
        flex-direction: row;
    }
}

.example__options,
.example__code pre {
    max-height: 240px;
    overflow-y: auto;

    @media (min-width: 768px) {
        max-height: 50vh;
    }
}

.example__options {
    border-bottom: 1px solid $divider-color;
    min-width: rem(300px);
    padding: rem(16px);

    @media (min-width: 768px) {
        border-bottom: 0;
        border-right: 1px solid $divider-color;
        padding: rem(24px);
        width: 25%;
    }
}

.example__options-header {
    font-size: rem(18px);
    font-weight: 600;
    margin-bottom: rem(16px);
}

.example__option {
    .ui-select {
        margin-bottom: rem(16px);
        max-width: rem(216px);
    }

    .ui-radio-group,
    .ui-switch {
        margin-bottom: rem(8px);
    }

    &:last-child {
        .ui-radio-group,
        .ui-select,
        .ui-switch {
            margin-bottom: 0;
        }
    }
}

.example__code {
    position: relative;
    overflow: hidden;

    @media (min-width: 768px) {
        width: 75%;
    }

    pre {
        margin: 0 !important;
        padding: rem(16px) !important;
        width: 100%;
        height: 100%;

        @media (min-width: 768px) {
            padding: rem(24px) !important;
        }
    }
}

.example__copy-button {
    position: absolute;
    right: rem(16px);
    top: rem(12px);
    background-color: white;
    border: 1px solid $divider-color;
    border-radius: rem(12px);
    padding: rem(4px 12px);
    padding-bottom: rem(6px);
    line-height: 1;
    font-family: $font-stack;
    appearance: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

    &:hover,
    body[modality='keybaord'] &:focus {
        background-color: #eee;
    }

    &:active {
        background-color: #ddd;
    }
}
</style>
