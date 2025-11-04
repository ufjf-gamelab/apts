import { Score } from "@repo/game/Score.js";

class SnowballScore extends Score {
  public override clone(): SnowballScore {
    return new SnowballScore({
      pointsOfEachPlayer: this.getPointsOfEachPlayer(),
    });
  }
}

export { SnowballScore };
