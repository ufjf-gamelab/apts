import type { IndexOfPlayer } from "./Player.js";

type Points = number;

class Score extends Map<IndexOfPlayer, Points> {
  public constructor(score: ReadonlyMap<IndexOfPlayer, Points>) {
    super(score);
  }

  public static getScoreOfPlayer(
    indexOfPlayer: IndexOfPlayer,
    score: Score,
  ): Points {
    const scoreOfPlayer = score.get(indexOfPlayer);
    if (typeof scoreOfPlayer === "undefined") {
      throw new Error(`Invalid player index: ${indexOfPlayer}.`, {
        cause: new RangeError(
          `Index of player ${indexOfPlayer} is out of bounds for score array.`,
        ),
      });
    }
    return scoreOfPlayer;
  }
}

export type { Points };
export { Score };
