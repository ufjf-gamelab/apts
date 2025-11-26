import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: [
      // "./apps/node/vitest.config.ts",
      // "./apps/web/vitest.config.ts",
      "./packages/games/vitest.config.ts",
      // "./packages/interface/vitest.config.ts",
      // "./packages/search/vitest.config.ts",
    ],
  },
});
