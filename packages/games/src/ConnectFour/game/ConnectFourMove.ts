import type { Integer } from "@repo/engine_core/types.js";

import {
  DECREMENT_ONE,
  FIRST_INDEX,
  LAST_INDEX_IS_LENGTH_MINUS_ONE,
} from "@repo/engine_core/constants.js";
import { Move, type ParamsOfMove } from "@repo/game/Move.js";

import type { ConnectFourState } from "./ConnectFourState.js";

import { COLUMN_LENGTH, getIndexesOfSlots } from "./ConnectFourShape.js";

type ParamsOfConnectFourMove = ParamsOfMove & {
  indexOfColumnInWhichPlacePiece: Integer;
};

class ConnectFourMove extends Move<ConnectFourMove> {
  private readonly indexOfColumnInWhichPlacePiece: ParamsOfConnectFourMove["indexOfColumnInWhichPlacePiece"];

  public constructor({
    indexOfColumnInWhichPlacePiece,
    ...params
  }: ParamsOfConnectFourMove) {
    super(params);
    this.indexOfColumnInWhichPlacePiece = indexOfColumnInWhichPlacePiece;
  }

  public override clone() {
    return new ConnectFourMove({
      description: this.getDescription(),
      indexOfColumnInWhichPlacePiece: this.indexOfColumnInWhichPlacePiece,
      title: this.getTitle(),
    });
  }

  public getIndexOfColumnInWhichPlacePiece() {
    return this.indexOfColumnInWhichPlacePiece;
  }

  public getIndexOfSlotInWhichPlacePiece({
    state,
  }: {
    state: ConnectFourState;
  }) {
    const indexesOfSlotsOnColumn = getIndexesOfSlots({
      initialIndexOfColumn: this.indexOfColumnInWhichPlacePiece,
      initialIndexOfRow: 0,
      shape: {
        direction: "vertical",
        size: COLUMN_LENGTH,
      },
    });
    const lengthOfIndexesOfSlotsOnColumn = indexesOfSlotsOnColumn.length;

    for (
      let index =
        lengthOfIndexesOfSlotsOnColumn + LAST_INDEX_IS_LENGTH_MINUS_ONE;
      index >= FIRST_INDEX;
      index += DECREMENT_ONE
    ) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const indexOfSlot = indexesOfSlotsOnColumn[index]!;
      const slot = state.getSlot({ indexOfSlot });
      if (slot === null) {
        throw new Error(
          `Could not retrieve slot with the index ${indexOfSlot}.`,
        );
      }
      const indexOfOccupyingPlayer = slot.getIndexOfOccupyingPlayer();
      if (indexOfOccupyingPlayer === null) {
        return indexOfSlot;
      }
    }

    return null;
  }
}

export type { ParamsOfConnectFourMove };
export { ConnectFourMove };
