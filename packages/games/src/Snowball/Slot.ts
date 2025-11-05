import type { IndexOfPlayer } from "@repo/game/Player.js";
import { Slot, type SlotParams } from "@repo/game/Slot.js";

type SnowballSlotParams = SlotParams & {
  indexOfOccupyingPlayer: IndexOfPlayer | null;
};

class SnowballSlot extends Slot {
  private readonly indexOfOccupyingPlayer: SnowballSlotParams["indexOfOccupyingPlayer"];

  constructor({ indexOfOccupyingPlayer }: SnowballSlotParams) {
    super();
    this.indexOfOccupyingPlayer = indexOfOccupyingPlayer;
  }

  public override clone(): this {
    return new SnowballSlot({
      indexOfOccupyingPlayer: this.indexOfOccupyingPlayer,
    }) as this;
  }

  public getIndexOfOccupyingPlayer(): typeof this.indexOfOccupyingPlayer {
    return this.indexOfOccupyingPlayer;
  }
}

export { SnowballSlot };
