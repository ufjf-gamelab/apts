import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: [
      "./packages/games/vitest.config.ts",
      "./packages/search/vitest.config.ts",
    ],
  },
});
