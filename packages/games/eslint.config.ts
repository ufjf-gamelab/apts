import type { Linter } from "eslint";

import { config as baseConfig } from "@repo/eslint_config/base";

export default [
  ...baseConfig(import.meta.dirname),

  {
    languageOptions: {
      parserOptions: {
        projectService: "./tsconfig.eslint.json",
      },
    },
  },
] as Linter.Config[];
