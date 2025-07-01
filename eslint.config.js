// eslint.config.js
import vue from "eslint-plugin-vue";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.ts", "**/*.vue"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
      },
    },
    plugins: {
      vue,
      "@typescript-eslint": ts,
    },
    rules: {
      ...vue.configs["vue3-recommended"].rules,
      ...ts.configs.recommended.rules,
    },
  },
];
