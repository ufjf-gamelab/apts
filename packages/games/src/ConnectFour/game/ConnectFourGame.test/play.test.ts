import { createDescriptionForTest } from "@repo/core/test.js";
import {
  createDescriptionForTestOfPlay,
  createDescriptionForTestOfPlayWhenItIsInvalid,
  validatePlay,
  validatePlayWhenItIsInvalid,
} from "@repo/game/Game.test/play.test.js";
import { test } from "vitest";

import type { ConnectFourMove } from "../ConnectFourMove.js";
import type { ConnectFourPlayer } from "../ConnectFourPlayer.js";
import type { ConnectFourScore } from "../ConnectFourScore.js";
import type { ConnectFourSlot } from "../ConnectFourSlot.js";
import type { ConnectFourState } from "../ConnectFourState.js";
import type { ConnectFourStateWithData } from "../ConnectFourState.test/setup.js";

import {
  type ConnectFourGame,
  constructErrorForFinalState,
  constructErrorForInvalidMove,
} from "../ConnectFourGame.js";
import { recordOfConnectFourMovesWithDataAndIndex } from "../ConnectFourMove.test/indexedRecords.js";
import { recordOfConnectFourStatesWithData } from "../ConnectFourState.test/records.js";

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

const createDescriptionWhenPlayIsInvalid = ({
  affix,
  expectedError,
  keyOfMove,
  keyOfState,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfPlayWhenItIsInvalid>[0],
    "expectedError" | "keyOfMove" | "keyOfState"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfPlayWhenItIsInvalid({
      expectedError,
      keyOfMove,
      keyOfState,
    }),
  });

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

const testPlayForAStateWhenItIsInvalid = ({
  expectedError,
  moveWithDataAndIndex,
  stateWithData,
}: Pick<
  Parameters<typeof createDescriptionWhenPlayIsInvalid>[0],
  "expectedError"
> & {
  moveWithDataAndIndex: (typeof recordOfConnectFourMovesWithDataAndIndex)["c0"];
  stateWithData: ConnectFourStateWithData;
}) => {
  test(
    createDescriptionWhenPlayIsInvalid({
      affix: stateWithData.requiredParams.gameWithData.keyOfGame,
      expectedError,
      keyOfMove: moveWithDataAndIndex.moveWithData.keyOfMove,
      keyOfState: stateWithData.keyOfState,
    }),

    () => {
      validatePlayWhenItIsInvalid<
        ConnectFourGame,
        ConnectFourMove,
        ConnectFourPlayer,
        ConnectFourScore,
        ConnectFourSlot,
        ConnectFourState
      >({
        expectedError,
        indexOfMove: moveWithDataAndIndex.indexOfMove,
        state: stateWithData.state,
      });
    },
  );
};

const testPlayForAStateWhenTheStateIsFinal = ({
  moveWithDataAndIndex,
  stateWithData,
}: {
  moveWithDataAndIndex: (typeof recordOfConnectFourMovesWithDataAndIndex)["c0"];
  stateWithData: ConnectFourStateWithData;
}) => {
  testPlayForAStateWhenItIsInvalid({
    expectedError: constructErrorForFinalState({
      indexOfMove: moveWithDataAndIndex.indexOfMove,
    }),
    moveWithDataAndIndex,
    stateWithData,
  });
};

const testPlayForAStateWhenTheMoveIsInvalid = ({
  moveWithDataAndIndex,
  stateWithData,
}: {
  moveWithDataAndIndex: (typeof recordOfConnectFourMovesWithDataAndIndex)["c0"];
  stateWithData: ConnectFourStateWithData;
}) => {
  testPlayForAStateWhenItIsInvalid({
    expectedError: constructErrorForInvalidMove({
      indexOfMove: moveWithDataAndIndex.indexOfMove,
    }),
    moveWithDataAndIndex,
    stateWithData,
  });
};

testPlayForAState({
  expectedState:
    recordOfConnectFourStatesWithData
      .slotR5C0IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer
      .state,
  moveWithDataAndIndex: recordOfConnectFourMovesWithDataAndIndex.c0,
  stateWithData:
    recordOfConnectFourStatesWithData.allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer,
});

testPlayForAState({
  expectedState:
    recordOfConnectFourStatesWithData
      .slotsR5C0AndR4C0AndR3C0AndR2C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBrunoAndAliceHas1PointAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer
      .state,
  moveWithDataAndIndex: recordOfConnectFourMovesWithDataAndIndex.c0,
  stateWithData:
    recordOfConnectFourStatesWithData.slotsR5C0AndR4C0AndR3C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer,
});

testPlayForAStateWhenTheStateIsFinal({
  moveWithDataAndIndex: recordOfConnectFourMovesWithDataAndIndex.c0,
  stateWithData:
    recordOfConnectFourStatesWithData.slotsR5C0AndR4C0AndR3C0AndR2C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBrunoAndAliceHas1PointAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer,
});

testPlayForAStateWhenTheMoveIsInvalid({
  moveWithDataAndIndex: recordOfConnectFourMovesWithDataAndIndex.c1,
  stateWithData:
    recordOfConnectFourStatesWithData.slotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AndR0C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer,
});
