import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

import { config as baseConfig } from "./base.js";

/**
 * A custom ESLint configuration for libraries that use Vite.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const viteConfig = [
  ...baseConfig,

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
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      // React scope no longer necessary with new JSX transform.
      "react/react-in-jsx-scope": "off",
    },
    settings: { react: { version: "detect" } },
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
