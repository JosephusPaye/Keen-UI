module.exports = {
    // Extend from the Airbnb JS style guide
    extends: 'airbnb/base',

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
        'no-var': 0,
        'no-new': 0,
        'prefer-const': 0,
        'no-trailing-spaces': 0,

        indent: [2, 4, {
            SwitchCase: 1
        }],

        'space-before-function-paren': 0,
        'prefer-arrow-callback': 0,
        'prefer-template': 0,
        'no-multi-spaces': 0,

        'consistent-return': 0,
        'no-console': 0,
        'no-use-before-define': 0,
        'func-names': 0,
        'comma-dangle': 0,
        'vars-on-top': 0,
        'no-param-reassign': 0,
        strict: 0
    }
};
