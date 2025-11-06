import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import globals from "globals";

import { config as baseConfig } from "./base.js";

/**
 * A custom ESLint configuration for libraries that use Vite.
 * */
export const reactConfig: import("eslint").Linter.Config[] = [
  ...baseConfig,

  /* React plugin rules */
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    ...reactPlugin.configs.flat["recommended"],
    ...reactPlugin.configs.flat["jsx-runtime"],
    languageOptions: {
      ...reactPlugin.configs.flat["recommended"]?.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    rules: {
      "react/boolean-prop-naming": "error",
      "react/button-has-type": "off",
      "react/checked-requires-onchange-or-readonly": "error",
      "react/default-props-match-prop-types": "error",
      "react/destructuring-assignment": "error",
      "react/forward-ref-uses-ref": "error",
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "react/hook-use-state": "error",
      "react/iframe-missing-sandbox": "error",
      // Disabled, since this is responsibility of the formatter (Prettier).
      "react/jsx-child-element-spacing": "off",
      // Disabled, since this is responsibility of the formatter (Prettier).
      "react/jsx-closing-bracket-location": "off",
      // Disabled, since this is responsibility of the formatter (Prettier).
      "react/jsx-closing-tag-location": "off",
      "react/jsx-curly-brace-presence": "warn",
      // Disabled, since this is responsibility of the formatter (Prettier).
      "react/jsx-curly-newline": "off",
      // Disabled, since this is responsibility of the formatter (Prettier).
      "react/jsx-curly-spacing": "off",
      // Disabled, since this is responsibility of the formatter (Prettier).
      "react/jsx-equals-spacing": "off",
      // Disabled, since this do not account for typescript extensions.
      "react/jsx-filename-extension": "off",
      // Disabled, since this is responsibility of the formatter (Prettier).
      "react/jsx-first-prop-new-line": "off",
      "react/jsx-handler-names": "error",
      // Disabled, since this is responsibility of the formatter (Prettier).
      "react/jsx-indent": "off",
      // Disabled, since this is responsibility of the formatter (Prettier).
      "react/jsx-indent-props": "off",
      "react/jsx-key": "error",
      // Disabled, since this is responsibility of the formatter (Prettier).
      "react/jsx-max-props-per-line": "off",
      // Disabled, since this is responsibility of the formatter (Prettier).
      "react/jsx-newline": "off",
      "react/jsx-no-bind": "off",
      "react/jsx-no-constructed-context-values": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-no-leaked-render": "error",
      "react/jsx-no-target-blank": "error",
      // Disabled, since this is responsibility of the formatter (Prettier).
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-pascal-case": "error",
      // Disabled, since this is responsibility of the formatter (Prettier).
      "react/jsx-props-no-multi-spaces": "off",
      "react/jsx-props-no-spread-multi": "error",
      "react/jsx-props-no-spreading": "off",
      // Disabled in order to use perfectionist/sort-jsx-props instead.
      "react/jsx-sort-props": "off",
      // Disabled, since this is responsibility of the formatter (Prettier).
      "react/jsx-tag-spacing": "off",
      "react/no-access-state-in-setstate": "error",
      // Disabled, since this is responsibility of the formatter (Prettier).
      "react/no-adjacent-inline-elements": "off",
      "react/no-array-index-key": "error",
      "react/no-multi-comp": "warn",
      "react/no-namespace": "error",
      "react/no-object-type-as-default-prop": "error",
      "react/no-string-refs": "error",
      // Disabled in order to use perfectionist
      "react/sort-comp": "off",
      // Disabled in order to use perfectionist
      "react/sort-default-props": "off",
      // Disabled in order to use perfectionist
      "react/sort-prop-types": "off",
    },
  },

  /* React Hooks plugin rules */
  reactHooksPlugin.configs.flat.recommended,
  {
    rules: {
      // React scope no longer necessary with new JSX transform.
      "react/react-in-jsx-scope": "off",
    },
  },

  /* React Refresh plugin rules */
  reactRefreshPlugin.configs.vite,

  /* Ignore files */
  {
    ignores: ["dist", "node_modules"],
  },
];
