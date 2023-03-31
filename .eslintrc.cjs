/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    // 推荐的规则
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting",
    "plugin:prettier/recommended", // 这样就可以先考虑pretterrc里面配置的内容来进行校验
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  // 规则: 对原有的规则进行覆盖
  rules: {
    "vue/multi-word-component-names": "off", // 可以使用单个单词的vue组件
  },
};
