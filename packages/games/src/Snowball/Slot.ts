import type { IndexOfPlayer } from "@repo/engine_game/Player.js";
import Slot, { type SlotParams } from "@repo/engine_game/Slot.js";

import { type default as TestingGame } from "./Game.js";
import type TestingMove from "./Move.js";
import type TestingPlayer from "./Player.js";
import type TestingState from "./State.js";

interface TestingSlotParams
  extends SlotParams<
    TestingGame,
    TestingState,
    TestingMove,
    TestingSlot,
    TestingPlayer
  > {
  indexOfOccupyingPlayer: IndexOfPlayer | null;
}

class TestingSlot extends Slot<
  TestingGame,
  TestingState,
  TestingMove,
  TestingSlot,
  TestingPlayer
> {
  private readonly indexOfOccupyingPlayer: TestingSlotParams["indexOfOccupyingPlayer"];

  constructor({ indexOfOccupyingPlayer }: TestingSlotParams) {
    super();
    this.indexOfOccupyingPlayer = indexOfOccupyingPlayer;
  }

  public override clone(): TestingSlot {
    return new TestingSlot({
      indexOfOccupyingPlayer: this.indexOfOccupyingPlayer,
    });
  }

  public getIndexOfOccupyingPlayer(): typeof this.indexOfOccupyingPlayer {
    return this.indexOfOccupyingPlayer;
  }
}

export { TestingSlot as default };
