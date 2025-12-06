import type { Integer } from "@repo/engine_core/types.js";
import type { IndexOfPlayer } from "@repo/game/Player.js";

import { assertNumberIsFinite } from "@repo/engine_core/assert.js";
import { FIRST_INDEX, INCREMENT_ONE } from "@repo/engine_core/constants.js";
import { type Points, Score } from "@repo/game/Score.js";

import type { ConnectFourSlot } from "./Slot.js";

import {
  COLUMN_LENGTH,
  getIndexOfPlayerWhoIsOccupyingShape,
  type Shape,
  sizeOfPatternsUsedForCalculatingPoints,
} from "./Shape.js";

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

class ConnectFourScore extends Score<ConnectFourScore> {
  public static constructInitialScore({
    quantityOfPlayers,
  }: Pick<
    Parameters<typeof constructInitialPointsForEachPlayer>[0],
    "quantityOfPlayers"
  >): ConnectFourScore {
    const pointsOfEachPlayer = constructInitialPointsForEachPlayer({
      quantityOfPlayers,
    });
    return new ConnectFourScore({ pointsOfEachPlayer });
  }

  public override clone() {
    return new ConnectFourScore({
      pointsOfEachPlayer: this.getPointsOfEachPlayer(),
    });
  }

  public getUpdatedScore({
    slots,
  }: {
    slots: ConnectFourSlot[];
  }): ConnectFourScore {
    const quantityOfPlayers = this.getQuantityOfPlayers();

    for (
      let indexOfSlot = FIRST_INDEX;
      indexOfSlot < slots.length;
      indexOfSlot += INCREMENT_ONE
    ) {
      const indexOfRow = Math.floor(
        assertNumberIsFinite(indexOfSlot / COLUMN_LENGTH),
      );
      const indexOfColumn = indexOfSlot % COLUMN_LENGTH;

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
          return new ConnectFourScore({ pointsOfEachPlayer });
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

    return ConnectFourScore.constructInitialScore({
      quantityOfPlayers,
    });
  }
}

export { ConnectFourScore };
