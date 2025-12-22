import type { Integer } from "@repo/core/types.js";
import type { IndexOfPlayer } from "@repo/game/Player.js";

import { assertNumberIsFinite } from "@repo/core/assert.js";
import { FIRST_INDEX, INCREMENT_ONE } from "@repo/core/constants.js";
import { type Points, Score } from "@repo/game/Score.js";

import type { TicTacToeSlot } from "./TicTacToeSlot.js";

import {
  getIndexOfPlayerWhoIsOccupyingShape,
  QUANTITY_OF_COLUMNS,
  type Shape,
  sizeOfPatternsUsedForCalculatingPoints,
} from "./TicTacToeShape.js";

const ZERO_POINTS = 0;
const ONE_POINT = 1;

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
    const quantityOfPlayers = this.getQuantityOfPlayers();

    for (
      let indexOfSlot = FIRST_INDEX;
      indexOfSlot < slots.length;
      indexOfSlot += INCREMENT_ONE
    ) {
      const indexOfRow = Math.floor(
        assertNumberIsFinite(indexOfSlot / QUANTITY_OF_COLUMNS),
      );
      const indexOfColumn = indexOfSlot % QUANTITY_OF_COLUMNS;

      const updateScoreConsideringShape = ({ shape }: { shape: Shape }) => {
        const indexOfPlayer = getIndexOfPlayerWhoIsOccupyingShape({
          initialIndexOfColumn: indexOfColumn,
          initialIndexOfRow: indexOfRow,
          shape,
          slots,
        });
        if (indexOfPlayer !== null) {
          const pointsOfEachPlayer = constructInitialPointsForEachPlayer({
            quantityOfPlayers,
          });
          pointsOfEachPlayer.set(indexOfPlayer, ONE_POINT);
          return new TicTacToeScore({ pointsOfEachPlayer });
        }
        return null;
      };

      let score = updateScoreConsideringShape({
        shape: {
          direction: "horizontal",
          size: sizeOfPatternsUsedForCalculatingPoints.line,
        },
      });
      if (score) {
        return score;
      }
      score = updateScoreConsideringShape({
        shape: {
          direction: "vertical",
          size: sizeOfPatternsUsedForCalculatingPoints.line,
        },
      });
      if (score) {
        return score;
      }
      score = updateScoreConsideringShape({
        shape: {
          direction: "principalDiagonal",
          size: sizeOfPatternsUsedForCalculatingPoints.line,
        },
      });
      if (score) {
        return score;
      }
      score = updateScoreConsideringShape({
        shape: {
          direction: "secondaryDiagonal",
          size: sizeOfPatternsUsedForCalculatingPoints.line,
        },
      });
      if (score) {
        return score;
      }
    }

    return TicTacToeScore.constructInitialScore({
      quantityOfPlayers,
    });
  }
}

export { TicTacToeScore };
