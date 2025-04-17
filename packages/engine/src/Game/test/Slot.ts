import type { IndexOfPlayer } from "../Player.js";
import Slot, { type SlotParams } from "../Slot.js";
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

const slotsAsString = (slots: readonly TestingSlot[]): string =>
  slots.map(slot => slot.getIndexOfOccupyingPlayer()).toString();

export { TestingSlot as default, slotsAsString };
