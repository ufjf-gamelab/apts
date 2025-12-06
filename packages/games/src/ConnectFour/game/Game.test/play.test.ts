import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfPlay,
  // createDescriptionForTestOfPlayWhenItIsInvalid,
  validatePlay,
  // validatePlayWhenItIsInvalid,
} from "@repo/game/Game.test/play.test.js";
import { test } from "vitest";

import type { ConnectFourMove } from "../Move.js";
import type { ConnectFourPlayer } from "../Player.js";
import type { ConnectFourScore } from "../Score.js";
import type { ConnectFourSlot } from "../Slot.js";
import type { ConnectFourState } from "../State.js";
import type { ConnectFourStateWithData } from "../State.test/setup.js";

import {
  type ConnectFourGame,
  // constructErrorForFinalState,
  // constructErrorForInvalidMove,
} from "../Game.js";
import { recordOfConnectFourMovesWithDataAndIndex } from "../Move.test/indexedRecords.js";
import { recordOfConnectFourStatesWithData } from "../State.test/records.js";

const createDescription = ({
  affix,
  keyOfExpectedState,
  keyOfMove,
  keyOfState,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfPlay>[0],
    "keyOfExpectedState" | "keyOfMove" | "keyOfState"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfPlay({
      keyOfExpectedState,
      keyOfMove,
      keyOfState,
    }),
  });

// const createDescriptionWhenPlayIsInvalid = ({
//   affix,
//   expectedError,
//   keyOfMove,
//   keyOfState,
// }: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
//   Pick<
//     Parameters<typeof createDescriptionForTestOfPlayWhenItIsInvalid>[0],
//     "expectedError" | "keyOfMove" | "keyOfState"
//   >) =>
//   createDescriptionForTest({
//     affix,
//     description: createDescriptionForTestOfPlayWhenItIsInvalid({
//       expectedError,
//       keyOfMove,
//       keyOfState,
//     }),
//   });

const testPlayForAState = ({
  expectedState,
  moveWithDataAndIndex,
  stateWithData,
}: Pick<
  Parameters<
    typeof validatePlay<
      ConnectFourGame,
      ConnectFourMove,
      ConnectFourPlayer,
      ConnectFourScore,
      ConnectFourSlot,
      ConnectFourState
    >
  >[0],
  "expectedState"
> & {
  moveWithDataAndIndex: (typeof recordOfConnectFourMovesWithDataAndIndex)["c0"];
  stateWithData: ConnectFourStateWithData;
}) => {
  test(
    createDescription({
      affix: stateWithData.requiredParams.gameWithData.keyOfGame,
      keyOfExpectedState: stateWithData.keyOfState,
      keyOfMove: moveWithDataAndIndex.moveWithData.keyOfMove,
      keyOfState: stateWithData.keyOfState,
    }),

    () => {
      validatePlay<
        ConnectFourGame,
        ConnectFourMove,
        ConnectFourPlayer,
        ConnectFourScore,
        ConnectFourSlot,
        ConnectFourState
      >({
        expectedState,
        indexOfMove: moveWithDataAndIndex.indexOfMove,
        state: stateWithData.state,
      });
    },
  );
};

// const testPlayForAStateWhenItIsInvalid = ({
//   expectedError,
//   moveWithDataAndIndex,
//   stateWithData,
// }: Pick<
//   Parameters<typeof createDescriptionWhenPlayIsInvalid>[0],
//   "expectedError"
// > & {
//   moveWithDataAndIndex: (typeof recordOfConnectFourMovesWithDataAndIndex)["c0"];
//   stateWithData: ConnectFourStateWithData;
// }) => {
//   test(
//     createDescriptionWhenPlayIsInvalid({
//       affix: stateWithData.requiredParams.gameWithData.keyOfGame,
//       expectedError,
//       keyOfMove: moveWithDataAndIndex.moveWithData.keyOfMove,
//       keyOfState: stateWithData.keyOfState,
//     }),

//     () => {
//       validatePlayWhenItIsInvalid<
//         ConnectFourGame,
//         ConnectFourMove,
//         ConnectFourPlayer,
//         ConnectFourScore,
//         ConnectFourSlot,
//         ConnectFourState
//       >({
//         expectedError,
//         indexOfMove: moveWithDataAndIndex.indexOfMove,
//         state: stateWithData.state,
//       });
//     },
//   );
// };

// const testPlayForAStateWhenTheStateIsFinal = ({
//   moveWithDataAndIndex,
//   stateWithData,
// }: {
//   moveWithDataAndIndex: (typeof recordOfConnectFourMovesWithDataAndIndex)["c0"];
//   stateWithData: ConnectFourStateWithData;
// }) => {
//   testPlayForAStateWhenItIsInvalid({
//     expectedError: constructErrorForFinalState({
//       indexOfMove: moveWithDataAndIndex.indexOfMove,
//     }),
//     moveWithDataAndIndex,
//     stateWithData,
//   });
// };

// const testPlayForAStateWhenTheMoveIsInvalid = ({
//   moveWithDataAndIndex,
//   stateWithData,
// }: {
//   moveWithDataAndIndex: (typeof recordOfConnectFourMovesWithDataAndIndex)["c0"];
//   stateWithData: ConnectFourStateWithData;
// }) => {
//   testPlayForAStateWhenItIsInvalid({
//     expectedError: constructErrorForInvalidMove({
//       indexOfMove: moveWithDataAndIndex.indexOfMove,
//     }),
//     moveWithDataAndIndex,
//     stateWithData,
//   });
// };

testPlayForAState({
  expectedState:
    recordOfConnectFourStatesWithData
      .slotR0C0IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer
      .state,
  moveWithDataAndIndex: recordOfConnectFourMovesWithDataAndIndex.c0,
  stateWithData:
    recordOfConnectFourStatesWithData.allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer,
});
