module.exports = {
  // eslint默认只支持 javascript
  // overrides 设置其他文件的支持
  overrides: [
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: { parser: "@typescript-eslint/parser" },
      rules: {
        "no-unused-vars": "off",
        "no-undef": "off",
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
  ],
  extends: ["plugin:vue/vue3-recommended", "@ausjukwa/eslint-config-ts"],
  rules: {
    "vue/max-attributes-per-line": "off",
    "vue/no-v-html": "off",
    "vue/require-prop-types": "off",
    "vue/require-default-prop": "off",
    "vue/multi-word-component-names": "off",
  },
};
