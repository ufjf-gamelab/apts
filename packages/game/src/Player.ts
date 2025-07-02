import type { Char, Integer } from "@repo/engine_core/types.js";

type IndexOfPlayer = Integer;

interface Player {
  clone: () => this;
  readonly name: PlayerParams["name"];
  readonly symbol: PlayerParams["symbol"];
}

interface PlayerParams {
  readonly name: string;
  readonly symbol: Char;
}

export type { Player as default, IndexOfPlayer, PlayerParams };
