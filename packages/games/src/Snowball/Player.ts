import Player from "@repo/engine/Game/Player.js";

import type TestingGame from "./Game.js";
import type TestingMove from "./Move.js";
import type TestingSlot from "./Slot.js";
import type TestingState from "./State.js";

interface EncodedTestingPlayer {
  name: string;
  symbol: string;
}

class TestingPlayer extends Player<
  TestingGame,
  TestingState,
  TestingMove,
  TestingSlot,
  TestingPlayer
> {
  public override clone(): TestingPlayer {
    return new TestingPlayer({
      name: this.getName(),
      symbol: this.getSymbol(),
    });
  }
}

export type { EncodedTestingPlayer };
export { TestingPlayer as default };
