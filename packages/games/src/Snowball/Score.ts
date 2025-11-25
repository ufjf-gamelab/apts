import type { Integer } from "@repo/engine_core/types.js";
import type { IndexOfPlayer } from "@repo/game/Player.js";

import { type Points, Score } from "@repo/game/Score.js";

import type { SnowballSlot } from "./Slot.js";

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

class SnowballScore extends Score<SnowballScore> {
  public static constructInitialScore({
    quantityOfPlayers,
  }: Pick<
    Parameters<typeof constructInitialPointsForEachPlayer>[0],
    "quantityOfPlayers"
  >): SnowballScore {
    const pointsOfEachPlayer = constructInitialPointsForEachPlayer({
      quantityOfPlayers,
    });
    return new SnowballScore({ pointsOfEachPlayer });
  }

  public override clone() {
    return new SnowballScore({
      pointsOfEachPlayer: this.getPointsOfEachPlayer(),
    });
  }

  // eslint-disable-next-line max-lines-per-function
  public getUpdatedScore({ slots }: { slots: SnowballSlot[] }): SnowballScore {
    let score = SnowballScore.constructInitialScore({
      quantityOfPlayers: this.getQuantityOfPlayers(),
    });

    slots.forEach((_, indexOfSlot) => {
      const indexOfRow = Math.floor(indexOfSlot / COLUMN_LENGTH);
      const indexOfColumn = indexOfSlot % COLUMN_LENGTH;

      const updateScoreConsideringShape = ({
        shape,
      }: {
        score: SnowballScore;
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
          type: "line",
        },
      });
      updateScoreConsideringShape({
        score,
        shape: {
          direction: "vertical",
          size: sizeOfPatternsUsedForCalculatingPoints.line,
          type: "line",
        },
      });
      updateScoreConsideringShape({
        score,
        shape: {
          direction: "principalDiagonal",
          size: sizeOfPatternsUsedForCalculatingPoints.line,
          type: "line",
        },
      });
      updateScoreConsideringShape({
        score,
        shape: {
          direction: "secondaryDiagonal",
          size: sizeOfPatternsUsedForCalculatingPoints.line,
          type: "line",
        },
      });
      updateScoreConsideringShape({
        score,
        shape: {
          horizontalSize: sizeOfPatternsUsedForCalculatingPoints.smallSquare,
          type: "rectangle",
          verticalSize: sizeOfPatternsUsedForCalculatingPoints.smallSquare,
        },
      });
      updateScoreConsideringShape({
        score,
        shape: {
          horizontalSize: sizeOfPatternsUsedForCalculatingPoints.largeSquare,
          type: "rectangle",
          verticalSize: sizeOfPatternsUsedForCalculatingPoints.largeSquare,
        },
      });
    });

    return score.clone();
  }
}

export { SnowballScore };
