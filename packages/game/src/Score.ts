import type { Integer } from "@repo/engine_core/types.js";

import type { IndexOfPlayer } from "./Player.js";

type IndexOfScore = Integer;
type Points = number;

interface ScoreParams {
  readonly pointsOfEachPlayer: ReadonlyMap<IndexOfPlayer, Points>;
}

abstract class Score<Sc extends Score<Sc>> {
  private readonly pointsOfEachPlayer: ScoreParams["pointsOfEachPlayer"];

  public constructor({ pointsOfEachPlayer }: ScoreParams) {
    this.pointsOfEachPlayer = pointsOfEachPlayer;
  }

  public abstract clone(): Sc;

  public getPointsOfEachPlayer(): typeof this.pointsOfEachPlayer {
    return new Map(this.pointsOfEachPlayer);
  }

  public getPointsOfPlayer({
    indexOfPlayer,
  }: {
    indexOfPlayer: IndexOfPlayer;
  }): Points {
    const scoreOfPlayer = this.pointsOfEachPlayer.get(indexOfPlayer);
    if (typeof scoreOfPlayer === "undefined") {
      throw new Error(`Invalid player index: ${indexOfPlayer}.`, {
        cause: new RangeError(
          `Index of player ${indexOfPlayer} is out of bounds for score array.`,
        ),
      });
    }
    return scoreOfPlayer;
  }

  protected getQuantityOfPlayers() {
    return this.pointsOfEachPlayer.size;
  }
}

export type { IndexOfScore, Points, ScoreParams };
export { Score };
