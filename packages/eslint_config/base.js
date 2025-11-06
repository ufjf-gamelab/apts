import eslint from "@eslint/js";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
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
  eslint.configs.all,
  {
    rules: {
      "capitalized-comments": ["off", { ignoreConsecutiveComments: true }],
      // Disable, in order to use @typescript-eslint/class-methods-use-this
      "class-methods-use-this": "off",
      // Disable, in order to use @typescript-eslint/default-param-last
      "default-param-last": "off",
      "id-length": ["error", { exceptions: ["_"] }],
      "max-lines": "off",
      "max-lines-per-function": ["warn", 70],
      "max-statements": ["error", 20],
      "no-alert": "off",
      "no-console": "warn",
      "no-continue": "off",
      // Disable, in order to use @typescript-eslint/no-magic-numbers
      "no-magic-numbers": "off",
      // Disable, in order to use @typescript-eslint/no-shadow
      "no-shadow": "off",
      "no-ternary": "off",
      // Disable, in order to use @typescript-eslint/no-use-before-define
      "no-use-before-define": "off",
      "no-warning-comments": "warn",
      "one-var": "off",
      "restrict-template-expressions": "off",
      // Disable, in order to use perfectionist/sort-imports
      "sort-imports": "off",
      // Disable, in order to use perfectionist/sort-object-types
      "sort-keys": "off",
      // Disable, in order to use perfectionist/sort-variable-declarations
      "sort-vars": "off",
    },
  },

  /* TypeScript ESLint rules */
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    rules: {
      "@typescript-eslint/class-methods-use-this": "error",
      // Disabled, because it is recommended to use noImplicitReturns in tsconfig.json instead
      "@typescript-eslint/consistent-return": "off",
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/default-param-last": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-member-accessibility": "error",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-magic-numbers": [
        "error",
        {
          ignoreEnums: true,
          ignoreNumericLiteralTypes: true,
          ignoreReadonlyClassProperties: true,
          ignoreTypeIndexes: true,
        },
      ],
      "@typescript-eslint/no-misused-promises": [
        2,
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],
      "@typescript-eslint/no-shadow": [
        "error",
        {
          builtinGlobals: false,
          hoist: "all",
          ignoreFunctionTypeParameterNameValueShadow: false,
          ignoreTypeValueShadow: false,
        },
      ],
      "@typescript-eslint/no-unsafe-type-assertion": "error",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-use-before-define": "error",
      "@typescript-eslint/no-useless-empty-export": "error",
      "@typescript-eslint/prefer-enum-initializers": "error",
      "@typescript-eslint/prefer-literal-enum-member": "off",
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/prefer-readonly-parameter-types": "off",
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowNumber: true,
        },
      ],
      "@typescript-eslint/strict-boolean-expressions": "error",
      "@typescript-eslint/switch-exhaustiveness-check": "error",
    },
  },

  /* Turbo plugin rules */
  turboPlugin.configs["flat/recommended"],
  {
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
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
          fallbackSort: { order: "desc", type: "line-length" },
          groups: [
            "type-import",
            ["value-builtin", "value-external"],
            "type-internal",
            "value-internal",
            ["type-parent", "type-sibling", "type-index"],
            ["value-parent", "value-sibling", "value-index"],
            "ts-equals-import",
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

  /* Ignore files */
  {
    ignores: ["dist/**"],
  },
];
