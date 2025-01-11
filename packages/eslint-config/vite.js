import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import reactRefresh from "eslint-plugin-react-refresh";
import { config as baseConfig } from "./base.js";

/**
 * A custom ESLint configuration for libraries that use Vite.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const viteConfig = [
  ...baseConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,

  {
    ...pluginReact.configs.flat.recommended,
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
      },
    },
  },

  {
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      // React scope no longer necessary with new JSX transform.
      "react/react-in-jsx-scope": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },

  {
    plugins: {
      "react-refresh": reactRefresh,
    },
  },

  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },

  { files: ["**/*.{ts,tsx}"] },

  {
    ignores: ["dist"],
  },
];
