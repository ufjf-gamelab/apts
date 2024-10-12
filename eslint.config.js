import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  eslint.configs.all,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  {
    plugins: {
      "react-refresh": reactRefresh,
      "react-hooks": reactHooks,
    },
  },
  pluginReact.configs.flat["jsx-runtime"],

  {
    files: ["src/**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {
    ignores: [
      "vite.config.ts",
      "tailwind.config.ts",
      "eslint.config.js",
      "prettier.config.mjs",
      "postcss.config.js",
    ],
  },
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      "no-ternary": "off",
      "no-warning-comments": "warn",
      "one-var": "off",
      "sort-imports": "off",
    },
  },
  eslintConfigPrettier,
];
