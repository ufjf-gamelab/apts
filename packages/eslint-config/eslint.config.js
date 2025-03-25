import { config as baseConfig } from "./base.js";

/** @type {import("eslint").Linter.Config} */
export default [
  ...baseConfig,

  {
    languageOptions: {
      parserOptions: {
        allowAutomaticSingleRunInference: true,
        project: "./tsconfig.json",
      },
      sourceType: "module",
    },
    rules: {
      "@typescript-eslint/no-magic-numbers": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
    },
  },
];
