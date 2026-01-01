import type { Integer } from "@repo/core/types.js";

import type { IndexOfPlayer } from "./Player.js";

type IndexOfScore = Integer;

interface ParamsOfScore {
  readonly pointsOfEachPlayer: PointsOfEachPlayer;
}

type Points = number;

type PointsOfEachPlayer = ReadonlyMap<IndexOfPlayer, Points>;

abstract class Score<GenericScore extends Score<GenericScore>> {
  private readonly pointsOfEachPlayer: ParamsOfScore["pointsOfEachPlayer"];

  public constructor({ pointsOfEachPlayer }: ParamsOfScore) {
    this.pointsOfEachPlayer = pointsOfEachPlayer;
  }

  public abstract clone(): GenericScore;

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

export type { IndexOfScore, ParamsOfScore, Points, PointsOfEachPlayer };
export { Score };
