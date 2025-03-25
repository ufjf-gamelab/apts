import esLint from "@eslint/js";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import turboPlugin from "eslint-plugin-turbo";
import tsEsLint from "typescript-eslint";

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
      // Use perfectionist/sort-imports
      "sort-imports": "off",
      // Use perfectionist/sort-object-types
      "sort-keys": "off",
      // Use perfectionist/sort-variable-declarations
      "sort-vars": "off",
    },
  },

  /* TypeScript ESLint rules */
  ...tsEsLint.configs.strictTypeChecked,
  ...tsEsLint.configs.stylisticTypeChecked,
  {
    rules: {
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
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
          fallbackSort: { type: "alphabetical" },
          ignoreCase: false,
          order: "asc",
          type: "natural",
        },
      ],
      "perfectionist/sort-classes": [
        "error",
        {
          fallbackSort: { type: "alphabetical" },
          ignoreCase: false,
          order: "asc",
          type: "natural",
        },
      ],
      "perfectionist/sort-decorators": [
        "error",
        {
          fallbackSort: { type: "alphabetical" },
          ignoreCase: false,
          order: "asc",
          type: "natural",
        },
      ],
      "perfectionist/sort-enums": [
        "error",
        {
          fallbackSort: { type: "alphabetical" },
          ignoreCase: false,
          order: "asc",
          type: "natural",
        },
      ],
      "perfectionist/sort-exports": [
        "error",
        {
          fallbackSort: { type: "alphabetical" },
          ignoreCase: false,
          order: "asc",
          type: "natural",
        },
      ],
      "perfectionist/sort-heritage-clauses": [
        "error",
        {
          fallbackSort: { type: "alphabetical" },
          ignoreCase: false,
          order: "asc",
          type: "natural",
        },
      ],
      "perfectionist/sort-imports": [
        "error",
        {
          fallbackSort: { type: "alphabetical" },
          groups: [
            ["builtin", "external"],
            ["internal-type", "internal"],
            [
              "parent-type",
              "parent",
              "sibling-type",
              "sibling",
              "index-type",
              "index",
            ],
            ["object"],
            "unknown",
          ],
          ignoreCase: false,
          order: "asc",
          type: "natural",
        },
      ],
      "perfectionist/sort-interfaces": [
        "error",
        {
          fallbackSort: { type: "alphabetical" },
          ignoreCase: false,
          order: "asc",
          type: "natural",
        },
      ],
      "perfectionist/sort-intersection-types": [
        "error",
        {
          fallbackSort: { type: "alphabetical" },
          ignoreCase: false,
          order: "asc",
          type: "natural",
        },
      ],
      "perfectionist/sort-jsx-props": [
        "error",
        {
          fallbackSort: { type: "alphabetical" },
          ignoreCase: false,
          order: "asc",
          type: "natural",
        },
      ],
      "perfectionist/sort-maps": [
        "error",
        {
          fallbackSort: { type: "alphabetical" },
          ignoreCase: false,
          order: "asc",
          type: "natural",
        },
      ],
      "perfectionist/sort-modules": [
        "error",
        {
          fallbackSort: { type: "alphabetical" },
          ignoreCase: false,
          order: "asc",
          type: "natural",
        },
      ],
      "perfectionist/sort-named-exports": [
        "error",
        {
          fallbackSort: { type: "alphabetical" },
          ignoreCase: false,
          order: "asc",
          type: "natural",
        },
      ],
      "perfectionist/sort-named-imports": [
        "error",
        {
          fallbackSort: { type: "alphabetical" },
          ignoreCase: false,
          order: "asc",
          type: "natural",
        },
      ],
      "perfectionist/sort-object-types": [
        "error",
        {
          fallbackSort: { type: "alphabetical" },
          ignoreCase: false,
          order: "asc",
          type: "natural",
        },
      ],
      "perfectionist/sort-objects": [
        "error",
        {
          fallbackSort: { type: "alphabetical" },
          ignoreCase: false,
          order: "asc",
          type: "natural",
        },
      ],
      "perfectionist/sort-sets": [
        "error",
        {
          fallbackSort: { type: "alphabetical" },
          ignoreCase: false,
          order: "asc",
          type: "natural",
        },
      ],
      "perfectionist/sort-switch-case": [
        "error",
        {
          fallbackSort: { type: "alphabetical" },
          ignoreCase: false,
          order: "asc",
          type: "natural",
        },
      ],
      "perfectionist/sort-union-types": [
        "error",
        {
          fallbackSort: { type: "alphabetical" },
          ignoreCase: false,
          order: "asc",
          type: "natural",
        },
      ],
      "perfectionist/sort-variable-declarations": [
        "error",
        {
          fallbackSort: { type: "alphabetical" },
          ignoreCase: false,
          order: "asc",
          type: "natural",
        },
      ],
    },
  },

  {
    ignores: ["dist/**"],
  },
];
