import type { Integer } from "@repo/engine_core/types.js";
import type { IndexOfPlayer } from "@repo/game/Player.js";

import { type Points, Score } from "@repo/game/Score.js";

import type { TicTacToeSlot } from "./Slot.js";

import {
  COLUMN_LENGTH,
  getScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots,
  type Shape,
  sizeOfPatternsUsedForCalculatingPoints,
} from "./Shape.js";

const ZERO_POINTS = 0;

const constructInitialPointsForEachPlayer = ({
  quantityOfPlayers,
}: {
  quantityOfPlayers: Integer;
}): Map<IndexOfPlayer, Points> =>
  new Map<IndexOfPlayer, Points>(
    Array.from(
      {
        length: quantityOfPlayers,
      },
      (_, indexOfPlayer) => [indexOfPlayer, ZERO_POINTS],
    ),
  );

class TicTacToeScore extends Score<TicTacToeScore> {
  public static constructInitialScore({
    quantityOfPlayers,
  }: Pick<
    Parameters<typeof constructInitialPointsForEachPlayer>[0],
    "quantityOfPlayers"
  >): TicTacToeScore {
    const pointsOfEachPlayer = constructInitialPointsForEachPlayer({
      quantityOfPlayers,
    });
    return new TicTacToeScore({ pointsOfEachPlayer });
  }

  public override clone() {
    return new TicTacToeScore({
      pointsOfEachPlayer: this.getPointsOfEachPlayer(),
    });
  }

  public getUpdatedScore({
    slots,
  }: {
    slots: TicTacToeSlot[];
  }): TicTacToeScore {
    let score = TicTacToeScore.constructInitialScore({
      quantityOfPlayers: this.getQuantityOfPlayers(),
    });

    slots.forEach((_, indexOfSlot) => {
      const indexOfRow = Math.floor(indexOfSlot / COLUMN_LENGTH);
      const indexOfColumn = indexOfSlot % COLUMN_LENGTH;

      const updateScoreConsideringShape = ({
        shape,
      }: {
        score: TicTacToeScore;
        shape: Shape;
      }) => {
        score = getScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots({
          initialIndexOfColumn: indexOfColumn,
          initialIndexOfRow: indexOfRow,
          score,
          shape,
          slots,
        });
      };

      updateScoreConsideringShape({
        score,
        shape: {
          direction: "horizontal",
          size: sizeOfPatternsUsedForCalculatingPoints.line,
        },
      });
      updateScoreConsideringShape({
        score,
        shape: {
          direction: "vertical",
          size: sizeOfPatternsUsedForCalculatingPoints.line,
        },
      });
      updateScoreConsideringShape({
        score,
        shape: {
          direction: "principalDiagonal",
          size: sizeOfPatternsUsedForCalculatingPoints.line,
        },
      });
      updateScoreConsideringShape({
        score,
        shape: {
          direction: "secondaryDiagonal",
          size: sizeOfPatternsUsedForCalculatingPoints.line,
        },
      });
    });

    return score.clone();
  }
}

export { TicTacToeScore };
