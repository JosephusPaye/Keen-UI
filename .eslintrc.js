module.exports = {
    // Extend from the Airbnb JS style guide
    extends: [
        './node_modules/eslint-config-airbnb-base/legacy.js',
        './node_modules/eslint-config-airbnb-base/rules/es6.js'
    ],

    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
    },

    // extends: 'airbnb-base',

    // Specify environment for built-in functions
    env: {
        browser: true,
        node: true
    },

    // Setup globals
    globals: {
        // For Jasmine
        it: false,
        expect: false,
        describe: false,
        beforeEach: false,
        afterEach: false
    },

    plugins: [
        'eslint-plugin-html' // lint <script> blocks in HTML files
    ],

    // Override rules as needed
    // See http://eslint.org/docs/rules/{rule-name} for docs
    rules: {
        'no-var': 'off',
        'no-new': 'off',
        'prefer-const': 'off',
        'no-trailing-spaces': 'off',

        indent: ['error', 4, {
            SwitchCase: 1
        }],

        'space-before-function-paren': 'off',
        'prefer-arrow-callback': 'off',
        'prefer-template': 'off',
        'no-multi-spaces': 'off',
        'no-underscore-dangle': 'off',

        'consistent-return': 'off',
        'no-console': 'off',
        'no-use-before-define': 'off',
        'func-names': 'off',
        'comma-dangle': 'off',
        'vars-on-top': 'off',
        'no-param-reassign': 'off',
        strict: 'off'
    }
};
