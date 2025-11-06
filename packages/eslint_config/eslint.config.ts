import { config as baseConfig } from "./src/base.js";

export const config: import("eslint").Linter.Config[] = [
  ...baseConfig,
  {
    // rules: {
    //   "@typescript-eslint/no-magic-numbers": "off",
    // },
  },
];
