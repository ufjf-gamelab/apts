import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: [
      // "./apps/web/vitest.config.ts",
      // "./apps/node/vitest.config.ts",
      // "./packages/engine_search/vitest.config.ts",
      "./packages/games.old/vitest.config.ts",
      "./packages/games/vitest.config.ts",
      // "./packages/interface/vitest.config.ts",
    ],
  },
});
