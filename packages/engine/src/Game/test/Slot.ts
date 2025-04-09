import type { IndexOfPlayer } from "../Player.js";
import Slot, { type SlotParams } from "../Slot.js";
import type TestingGame from "./Game.js";
import type TestingMove from "./Move.js";
import type TestingPlayer from "./Player.js";
import type TestingState from "./State.js";

interface TestingSlotParams
  extends SlotParams<TestingPlayer, TestingMove, TestingState, TestingGame> {
  indexOfOccupyingPlayer: IndexOfPlayer | null;
}

class TestingSlot extends Slot<
  TestingPlayer,
  TestingMove,
  TestingState,
  TestingGame
> {
  private readonly indexOfOccupyingPlayer: TestingSlotParams["indexOfOccupyingPlayer"];

  constructor({ indexOfOccupyingPlayer }: TestingSlotParams) {
    super();
    this.indexOfOccupyingPlayer = indexOfOccupyingPlayer;
  }

  public override clone(): Slot<
    TestingPlayer,
    TestingMove,
    TestingState,
    TestingGame
  > {
    return new TestingSlot({
      indexOfOccupyingPlayer: this.indexOfOccupyingPlayer,
    });
  }

  public getIndexOfPlayer(): typeof this.indexOfOccupyingPlayer {
    return this.indexOfOccupyingPlayer;
  }
}

export { TestingSlot as default };
