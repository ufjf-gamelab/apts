import { State } from "@repo/game/State.js";

import type { SnowballGame } from "./Game.js";
import type { SnowballMove } from "./Move.js";
import type { SnowballPlayer } from "./Player.js";
import type { SnowballScore } from "./Score.js";
import type { SnowballSlot } from "./Slot.js";

class SnowballState extends State<
  SnowballGame,
  SnowballMove,
  SnowballPlayer,
  SnowballState,
  SnowballScore,
  SnowballSlot
> {
  public override clone() {
    return new SnowballState({
      game: this.getGame(),
      indexOfPlayer: this.getIndexOfPlayer(),
      score: this.getScore(),
      slots: this.getSlots(),
    });
  }
}

export { SnowballState };
