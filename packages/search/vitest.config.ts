import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
    },
    exclude: ["dist", "node_modules"],
    include: ["./src/CommonMonteCarloTree/Search.test/*"],
  },
});
