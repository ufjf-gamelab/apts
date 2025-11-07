import type { Linter } from "eslint";

import { config as baseConfig } from "./src/base.js";

export default [
  ...baseConfig,

  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  {
    rules: {
      "@typescript-eslint/no-magic-numbers": "off",
    },
  },
] as Linter.Config[];
