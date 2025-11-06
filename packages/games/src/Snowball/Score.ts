import { Score } from "@repo/game/Score.js";

class SnowballScore extends Score<SnowballScore> {
  public override clone() {
    return new SnowballScore({
      pointsOfEachPlayer: this.getPointsOfEachPlayer(),
    });
  }
}

export { SnowballScore };
