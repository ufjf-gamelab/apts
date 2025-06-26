import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  "./apps/web/vitest.config.ts",
  "./apps/node/vitest.config.ts",
  "./packages/engine_core/vitest.config.ts",
  "./packages/engine_game/vitest.config.ts",
  "./packages/games/vitest.config.ts",
  "./packages/interface/vitest.config.ts",
]);
