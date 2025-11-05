import { Score } from "@repo/game/Score.js";

class SnowballScore extends Score {
  public override clone(): this {
    return new SnowballScore({
      pointsOfEachPlayer: this.getPointsOfEachPlayer(),
    }) as this;
  }
}

export { SnowballScore };
