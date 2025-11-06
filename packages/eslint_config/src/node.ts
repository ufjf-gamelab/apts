import globals from "globals";

import { config as baseConfig } from "./base.js";

/**
 * A shared ESLint configuration for Node projects in the repository.
 * */
export const nodeConfig: import("eslint").Linter.Config[] = [
  ...baseConfig,

  {
    languageOptions: {
      globals: {
        ...globals.nodeBuiltin,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },

  /* Ignore files */
  {
    ignores: ["dist", "node_modules"],
  },
];
