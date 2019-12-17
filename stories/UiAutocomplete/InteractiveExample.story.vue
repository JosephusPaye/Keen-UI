<template>
    <Example
        name="ui-autocomplete"
        :children="children"
        :options="options"
        :extra-options="extraOptions"
    >
        <ui-autocomplete
            v-model="value"
            :help="extraOptions.help.value"
            :error="extraOptions.error.value"
            :label="extraOptions.label.value"
            :name="extraOptions.name.value"
            :placeholder="extraOptions.placeholder.value"
            :append="options.append.value"
            :type="options.type.value"
            :show-on-up-down="options.showOnUpDown.value"
            :invalid="options.invalid.value"
            :highlight-on-first-match="options.highlightOnFirstMatch.value"
            :cycle-highlight="options.cycleHighlight.value"
            :icon-position="options.iconPosition.value"
            :floating-label="options.floatingLabel.value"
            :readonly="options.readonly.value"
            :disabled="options.disabled.value"
            :suggestions="theSimpsons"
        >
            <ui-icon slot="icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path fill="none" d="M0 0h24v24H0V0z" />
                    <circle cx="15.5" cy="9.5" r="1.5" />
                    <circle cx="8.5" cy="9.5" r="1.5" />
                    <path fill="none" d="M0 0h24v24H0V0z" />
                    <circle cx="15.5" cy="9.5" r="1.5" />
                    <circle cx="8.5" cy="9.5" r="1.5" />
                    <path
                        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-2.5c2.33 0 4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2s-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5z"
                    />
                </svg>
            </ui-icon>
        </ui-autocomplete>
    </Example>
</template>

<script>
import dedent from 'dedent-js';

import Example, { makeComponentOptions, propToOption } from '../Example.vue';
import UiAutocomplete from '../../src/UiAutocomplete.vue';
import UiIcon from '../../src/UiIcon.vue';

export default {
    name: 'InteractiveExample',
    components: { UiAutocomplete, UiIcon, Example },
    data() {
        return {
            value: '',
            theSimpsons: [
                {
                    value: 'Maggie',
                    label: 'Maggie Simpson',
                    image: 'https://i.imgur.com/eK26qtK.jpg',
                },
                {
                    value: 'Lisa',
                    label: 'Lisa Simpson',
                    image: 'https://i.imgur.com/wIb44g9.jpg',
                },
                {
                    value: 'Bart',
                    label: 'Bart Simpson',
                    image: 'https://i.imgur.com/XkEz9zg.jpg',
                },
                {
                    value: 'Marge',
                    label: 'Marge Simpson',
                    image: 'https://i.imgur.com/MuFcpQ4.jpg',
                },
                {
                    value: 'Homer',
                    label: 'Homer Simpson',
                    image: 'https://i.imgur.com/aYPRWX4.jpg',
                },
            ],
            options: makeComponentOptions(UiAutocomplete, [
                'append',
                'type',
                'showOnUpDown',
                'invalid',
                'highlightOnFirstMatch',
                'cycleHighlight',
                'iconPosition',
                'floatingLabel',
                'readonly',
                'disabled',
            ]),
            extraOptions: {
                help: propToOption(
                    UiAutocomplete.props.help,
                    'Pick your favourite member of the Simpsons family'
                ),
                error: propToOption(
                    UiAutocomplete.props.help,
                    'Invalid input. Try again.'
                ),
                label: propToOption(
                    UiAutocomplete.props.label,
                    'Favourite Simpson'
                ),
                name: propToOption(
                    UiAutocomplete.props.name,
                    'favourite_simpson'
                ),
                placeholder: propToOption(
                    UiAutocomplete.props.placeholder,
                    'Choose your favourite Simpson'
                ),
            },
            children: dedent(`
                <ui-icon slot="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path fill="none" d="M0 0h24v24H0V0z"/><circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-2.5c2.33 0 4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2s-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5z"/></svg>
                </ui-icon>
            `),
        };
    },
};
</script>
