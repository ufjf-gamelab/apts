import { config as baseConfig } from "@repo/eslint-config/base";
import globals from "globals";

/** @type {import("eslint").Linter.Config[]} */
const config = [
  ...baseConfig,

  {
    files: ["src/**/*.{js,mjs,cjs,ts}"],
  },

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

export default config;
