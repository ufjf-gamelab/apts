import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
  eslint.configs.all,
  eslintConfigPrettier,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "error",
    },
  },

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
      "sort-imports": "off",
    },
  },

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
      "@typescript-eslint/prefer-literal-enum-member": "off",
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowNumber: true,
        },
      ],
    },
  },

  {
    ignores: ["dist/**", "eslint.config.{js,cjs}"],
  },
];
