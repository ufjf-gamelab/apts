import type { IndexOfPlayer } from "@repo/game/Player.js";

import { Slot, type SlotParams } from "@repo/game/Slot.js";

type SnowballSlotParams = SlotParams & {
  indexOfOccupyingPlayer: IndexOfPlayer | null;
};

class SnowballSlot extends Slot<SnowballSlot> {
  private readonly indexOfOccupyingPlayer: SnowballSlotParams["indexOfOccupyingPlayer"];

  public constructor({ indexOfOccupyingPlayer }: SnowballSlotParams) {
    super();
    this.indexOfOccupyingPlayer = indexOfOccupyingPlayer;
  }

  public override clone() {
    return new SnowballSlot({
      indexOfOccupyingPlayer: this.indexOfOccupyingPlayer,
    });
  }

  public getIndexOfOccupyingPlayer(): typeof this.indexOfOccupyingPlayer {
    return this.indexOfOccupyingPlayer;
  }
}

export { SnowballSlot };
