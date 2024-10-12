/** @type {import("eslint").Linter.Config} */
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["src/**/*.{js,mjs,cjs,ts}"],
  },
  {
    ignores: ["prettier.config.js"],
  },

  eslint.configs.all,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  {
    files: ["eslint.config.{js,cjs}"],
    languageOptions: {
      parserOptions: {
        sourceType: "script",
      },
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.nodeBuiltin,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
  },
  {
    rules: {
      "no-ternary": "off",
      "no-warning-comments": "warn",
      "one-var": "off",
      "sort-imports": "off",
      "no-console": "off",
      "no-magic-numbers": "off",
      "no-plusplus": "off",
      "no-continue": "off",
      "max-statements": ["error", 20],
      "max-lines": ["warn", 300],
      "max-lines-per-function": ["warn", 70],
      "@typescript-eslint/no-magic-numbers": [
        "error",
        {
          ignoreEnums: true,
          ignoreReadonlyClassProperties: false,
        },
      ],
    },
  },
  eslintConfigPrettier,
];
