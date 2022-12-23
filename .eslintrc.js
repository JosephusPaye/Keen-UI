/* eslint-env node */
module.exports = {
  root: true,
  extends: ["plugin:vue/vue3-recommended", "eslint:recommended", "prettier"],
  rules: {
    // Disable the rule that requires a default value for every prop (for now)
    "vue/require-default-prop": "off",
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
};
