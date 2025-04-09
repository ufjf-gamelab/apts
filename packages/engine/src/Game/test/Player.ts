import Player from "../Player.js";
import type TestingGame from "./Game.js";
import type TestingMove from "./Move.js";
import type TestingSlot from "./Slot.js";
import type TestingState from "./State.js";

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

export { TestingPlayer as default };
