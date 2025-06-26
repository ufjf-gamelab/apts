import globals from "globals";

import { config as baseConfig } from "./base.js";

/**
 * A shared ESLint configuration for Node projects in the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const nodeConfig = [
  ...baseConfig,

  {
    languageOptions: {
      globals: {
        ...globals.nodeBuiltin,
      },
      parserOptions: {
        ecmaVersion: "latest",
        projectService: true,
        sourceType: "module",
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
