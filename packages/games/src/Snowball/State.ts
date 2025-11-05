import { State } from "@repo/game/State.js";

import type { SnowballMove } from "./Move.js";
import type { SnowballSlot } from "./Slot.js";

class SnowballState extends State<SnowballMove, SnowballSlot> {
  public override clone(): this {
    return new SnowballState({
      game: this.getGame(),
      indexOfPlayer: this.getIndexOfPlayer(),
      score: this.getScore(),
      slots: this.getSlots(),
    }) as this;
  }
}

export { SnowballState };
