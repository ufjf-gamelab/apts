import type { IndexOfSlot } from "@repo/game/Slot.js";

import {
  createDescriptionForTest,
  createDescriptionForTestsOfMethod,
} from "@repo/engine_core/test.js";
import { expect, test } from "vitest";

import type { ConnectFourMove } from "../Move.js";
import type { ConnectFourState } from "../State.js";
import type { ConnectFourStateWithData } from "../State.test/setup.js";

import { recordOfConnectFourSlotsWithDataAndIndexInWhichAllSlotsAreEmpty } from "../Slot.test/indexedRecords.js";
import { recordOfConnectFourStatesWithData } from "../State.test/records.js";
import { indexedConnectFourMovesWithData } from "./indexedRecords.js";
import { recordOfConnectFourMovesWithData } from "./records.js";
import { type ConnectFourMoveWithData } from "./setup.js";

const validateGetIndexOfSlotInWhichPlacePiece = ({
  expectedIndexOfSlotInWhichPlacePiece,
  move,
  state,
}: {
  expectedIndexOfSlotInWhichPlacePiece: ReturnType<
    ConnectFourMove["getIndexOfSlotInWhichPlacePiece"]
  >;
  move: ConnectFourMove;
  state: ConnectFourState;
}) => {
  const indexOfSlotInWhichPlacePiece = move.getIndexOfSlotInWhichPlacePiece({
    state,
  });
  expect(indexOfSlotInWhichPlacePiece).toBe(
    expectedIndexOfSlotInWhichPlacePiece,
  );
};

const createDescriptionForTestOfGetIndexOfSlotInWhichPlacePiece = ({
  expectedIndexOfSlotInWhichPlacePiece,
  keyOfState,
}: {
  expectedIndexOfSlotInWhichPlacePiece: ReturnType<
    ConnectFourMove["getIndexOfSlotInWhichPlacePiece"]
  >;
  keyOfState: string;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: `getIndexOfSlotInWhichPlacePiece({ state: ${keyOfState} })`,
    returnedValue: expectedIndexOfSlotInWhichPlacePiece,
  });

const createDescription = ({
  affix,
  expectedIndexOfSlotInWhichPlacePiece,
  keyOfState,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<
      typeof createDescriptionForTestOfGetIndexOfSlotInWhichPlacePiece
    >[0],
    "expectedIndexOfSlotInWhichPlacePiece" | "keyOfState"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetIndexOfSlotInWhichPlacePiece({
      expectedIndexOfSlotInWhichPlacePiece,
      keyOfState,
    }),
  });

const testGetIndexOfSlotInWhichPlacePiece = ({
  indexOfSlotInWhichPlacePiece,
  moveWithData,
  stateWithData,
}: {
  indexOfSlotInWhichPlacePiece: IndexOfSlot;
  moveWithData: ConnectFourMoveWithData;
  stateWithData: ConnectFourStateWithData;
}) => {
  const { keyOfMove, move } = moveWithData;
  const { keyOfState, state } = stateWithData;
  test(
    createDescription({
      affix: keyOfMove,
      expectedIndexOfSlotInWhichPlacePiece: indexOfSlotInWhichPlacePiece,
      keyOfState,
    }),

    () => {
      validateGetIndexOfSlotInWhichPlacePiece({
        expectedIndexOfSlotInWhichPlacePiece: indexOfSlotInWhichPlacePiece,
        move,
        state,
      });
    },
  );
};

testGetIndexOfSlotInWhichPlacePiece({
  indexOfSlotInWhichPlacePiece:
    recordOfConnectFourSlotsWithDataAndIndexInWhichAllSlotsAreEmpty.r5c0
      .indexOfSlot,
  moveWithData: recordOfConnectFourMovesWithData.c0,
  stateWithData:
    recordOfConnectFourStatesWithData.allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer,
});

testGetIndexOfSlotInWhichPlacePiece({
  indexOfSlotInWhichPlacePiece:
    recordOfConnectFourSlotsWithDataAndIndexInWhichAllSlotsAreEmpty.r5c1
      .indexOfSlot,
  moveWithData: recordOfConnectFourMovesWithData.c1,
  stateWithData:
    recordOfConnectFourStatesWithData.allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer,
});

testGetIndexOfSlotInWhichPlacePiece({
  indexOfSlotInWhichPlacePiece:
    recordOfConnectFourSlotsWithDataAndIndexInWhichAllSlotsAreEmpty.r4c0
      .indexOfSlot,
  moveWithData: recordOfConnectFourMovesWithData.c0,
  stateWithData:
    recordOfConnectFourStatesWithData.slotR5C0IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer,
});
