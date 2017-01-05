module.exports = {
	root: true,
	plugins: ['html', 'unicorn', 'promise', 'no-use-extend-native'],
	extends: ['xo/esnext', 'plugin:unicorn/recommended'],
	env: {
        browser: true,
        node: true
    },
    rules: {
        indent: ['error', 4],

        // Need PascalCase for components and kebab-case for everything else
        'unicorn/filename-case': ['off'],

        // False positives when used with html plugin
        'unicorn/no-abusive-eslint-disable': ['off'],

        // Prefer spacing in inline object curlies: e.g. { curlies }
        'object-curly-spacing': ['error', 'always'],

        // These are copied from xo as they're not available in the plugins for extending
        'no-use-extend-native/no-use-extend-native': 'error',
		'promise/param-names': 'error',
		'promise/no-promise-in-callback': 'error',
		'promise/no-callback-in-promise': 'error'
    }
};