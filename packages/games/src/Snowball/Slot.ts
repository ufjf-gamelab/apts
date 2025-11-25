import type { IndexOfPlayer } from "@repo/game/Player.js";

import { type ParamsOfSlot, Slot } from "@repo/game/Slot.js";

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
type ParamsOfSnowballSlot = ParamsOfSlot & {
  indexOfOccupyingPlayer: IndexOfPlayer | null;
};

class SnowballSlot extends Slot<SnowballSlot> {
  private readonly indexOfOccupyingPlayer: ParamsOfSnowballSlot["indexOfOccupyingPlayer"];

  public constructor({ indexOfOccupyingPlayer }: ParamsOfSnowballSlot) {
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

export type { ParamsOfSnowballSlot };
export { SnowballSlot };
