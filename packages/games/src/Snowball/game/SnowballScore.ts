import type { Integer } from "@repo/engine_core/types.js";
import type { IndexOfPlayer } from "@repo/game/Player.js";

import { assertNumberIsFinite } from "@repo/engine_core/assert.js";
import { type Points, Score } from "@repo/game/Score.js";

import type { SnowballSlot } from "./SnowballSlot.js";

import {
  getScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots,
  ROW_LENGTH,
  type Shape,
  sizeOfPatternsUsedForCalculatingPoints,
} from "./SnowballShape.js";

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

  public getUpdatedScore({ slots }: { slots: SnowballSlot[] }): SnowballScore {
    let score = SnowballScore.constructInitialScore({
      quantityOfPlayers: this.getQuantityOfPlayers(),
    });

    slots.forEach((_, indexOfSlot) => {
      const indexOfRow = Math.floor(
        assertNumberIsFinite(indexOfSlot / ROW_LENGTH),
      );
      const indexOfColumn = indexOfSlot % ROW_LENGTH;

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

    return score;
  }
}

export { SnowballScore };
