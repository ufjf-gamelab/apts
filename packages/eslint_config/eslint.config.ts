import type { Linter } from "eslint";

import { config as baseConfig } from "./base.js";

export default [
  ...baseConfig(import.meta.dirname),

  {
    rules: {
      "@typescript-eslint/no-magic-numbers": "off",
    },
  },
] as Linter.Config[];
