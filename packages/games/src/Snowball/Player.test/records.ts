import type { RequiredSnowballPlayerParams } from "./setup.js";

const recordOfRequiredParamsOfPlayers = {
  alice: { name: "Alice", symbol: "X" },
  bruno: { name: "Bruno", symbol: "O" },
} as const satisfies Record<string, RequiredSnowballPlayerParams>;

export { recordOfRequiredParamsOfPlayers };
