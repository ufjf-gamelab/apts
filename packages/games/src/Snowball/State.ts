import { State } from "@repo/game/State.js";

class SnowballState extends State {
  public override clone(): SnowballState {
    return new SnowballState({
      game: this.getGame(),
      indexOfPlayer: this.getIndexOfPlayer(),
      score: this.getScore(),
      slots: this.getSlots(),
    });
  }
}

export { SnowballState };
