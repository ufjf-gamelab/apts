import esLint from "@eslint/js";
import turboPlugin from "eslint-plugin-turbo";
import tsEsLint from "typescript-eslint";
import perfectionistPlugin from "eslint-plugin-perfectionist";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  /* ESLint rules */
  esLint.configs.all,
  {
    rules: {
      "capitalized-comments": ["off", { ignoreConsecutiveComments: true }],
      "class-methods-use-this": "off",
      "id-length": ["error", { exceptions: ["_"] }],
      "max-lines": "off",
      "max-lines-per-function": ["warn", 70],
      "max-statements": ["error", 20],
      "no-console": "off",
      "no-continue": "off",
      "no-magic-numbers": "off",
      "no-ternary": "off",
      "no-use-before-define": [
        "off",
        {
          classes: false,
        },
      ],
      "no-warning-comments": "warn",
      "one-var": "off",
      "restrict-template-expressions": "off",
      "sort-imports": "off", // Use perfectionist/sort-imports
      "sort-keys": "off", // Use perfectionist/sort-object-types
      "sort-vars": "off", // Use perfectionist/sort-variable-declarations
    },
  },

  /* TypeScript ESLint rules */
  ...tsEsLint.configs.strictTypeChecked,
  ...tsEsLint.configs.stylisticTypeChecked,
  {
    rules: {
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/no-magic-numbers": [
        "error",
        {
          ignoreEnums: true,
          ignoreNumericLiteralTypes: true,
          ignoreReadonlyClassProperties: true,
        },
      ],
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/prefer-literal-enum-member": "off",
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowNumber: true,
        },
      ],
    },
  },

  /* Turbo plugin rules */
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "error",
    },
  },

  /* Perfectionist plugin rules */
  {
    plugins: {
      perfectionist: perfectionistPlugin,
    },
    rules: {
      "perfectionist/sort-array-includes": [
        "error",
        {
          type: "natural",
          order: "asc",
          ignoreCase: false,
          fallbackSort: { type: "alphabetical" },
        },
      ],
      "perfectionist/sort-classes": [
        "error",
        {
          type: "natural",
          order: "asc",
          ignoreCase: false,
          fallbackSort: { type: "alphabetical" },
        },
      ],
      "perfectionist/sort-decorators": [
        "error",
        {
          type: "natural",
          order: "asc",
          ignoreCase: false,
          fallbackSort: { type: "alphabetical" },
        },
      ],
      "perfectionist/sort-enums": [
        "error",
        {
          type: "natural",
          order: "asc",
          ignoreCase: false,
          fallbackSort: { type: "alphabetical" },
        },
      ],
      "perfectionist/sort-exports": [
        "error",
        {
          type: "natural",
          order: "asc",
          ignoreCase: false,
          fallbackSort: { type: "alphabetical" },
        },
      ],
      "perfectionist/sort-imports": [
        "error",
        {
          type: "natural",
          order: "asc",
          ignoreCase: false,
          fallbackSort: { type: "alphabetical" },
        },
      ],
      "perfectionist/sort-heritage-clauses": [
        "error",
        {
          type: "natural",
          order: "asc",
          ignoreCase: false,
          fallbackSort: { type: "alphabetical" },
        },
      ],
      "perfectionist/sort-interfaces": [
        "error",
        {
          type: "natural",
          order: "asc",
          ignoreCase: false,
          fallbackSort: { type: "alphabetical" },
        },
      ],
      "perfectionist/sort-intersection-types": [
        "error",
        {
          type: "natural",
          order: "asc",
          ignoreCase: false,
          fallbackSort: { type: "alphabetical" },
        },
      ],
      "perfectionist/sort-jsx-props": [
        "error",
        {
          type: "natural",
          order: "asc",
          ignoreCase: false,
          fallbackSort: { type: "alphabetical" },
        },
      ],
      "perfectionist/sort-maps": [
        "error",
        {
          type: "natural",
          order: "asc",
          ignoreCase: false,
          fallbackSort: { type: "alphabetical" },
        },
      ],
      "perfectionist/sort-modules": [
        "error",
        {
          type: "natural",
          order: "asc",
          ignoreCase: false,
          fallbackSort: { type: "alphabetical" },
        },
      ],
      "perfectionist/sort-named-imports": [
        "error",
        {
          type: "natural",
          order: "asc",
          ignoreCase: false,
          fallbackSort: { type: "alphabetical" },
        },
      ],
      "perfectionist/sort-named-exports": [
        "error",
        {
          type: "natural",
          order: "asc",
          ignoreCase: false,
          fallbackSort: { type: "alphabetical" },
        },
      ],
      "perfectionist/sort-object-types": [
        "error",
        {
          type: "natural",
          order: "asc",
          ignoreCase: false,
          fallbackSort: { type: "alphabetical" },
        },
      ],
      "perfectionist/sort-objects": [
        "error",
        {
          type: "natural",
          order: "asc",
          ignoreCase: false,
          fallbackSort: { type: "alphabetical" },
        },
      ],
      "perfectionist/sort-sets": [
        "error",
        {
          type: "natural",
          order: "asc",
          ignoreCase: false,
          fallbackSort: { type: "alphabetical" },
        },
      ],
      "perfectionist/sort-switch-case": [
        "error",
        {
          type: "natural",
          order: "asc",
          ignoreCase: false,
          fallbackSort: { type: "alphabetical" },
        },
      ],
      "perfectionist/sort-union-types": [
        "error",
        {
          type: "natural",
          order: "asc",
          ignoreCase: false,
          fallbackSort: { type: "alphabetical" },
        },
      ],
      "perfectionist/sort-variable-declarations": [
        "error",
        {
          type: "natural",
          order: "asc",
          ignoreCase: false,
          fallbackSort: { type: "alphabetical" },
        },
      ],
    },
  },

  {
    ignores: ["dist/**", "eslint.config.{js,cjs}"],
  },
];
