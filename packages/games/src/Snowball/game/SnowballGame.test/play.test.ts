import { createDescriptionForTest } from "@repo/core/test.js";
import {
  createDescriptionForTestOfPlay,
  createDescriptionForTestOfPlayWhenItIsInvalid,
  validatePlay,
  validatePlayWhenItIsInvalid,
} from "@repo/game/Game.test/play.test.js";
import { test } from "vitest";

import type { SnowballMove } from "../SnowballMove.js";
import type { SnowballPlayer } from "../SnowballPlayer.js";
import type { SnowballScore } from "../SnowballScore.js";
import type { SnowballSlot } from "../SnowballSlot.js";
import type { SnowballState } from "../SnowballState.js";
import type { SnowballStateWithData } from "../SnowballState.test/setup.js";

import {
  constructErrorForFinalState,
  constructErrorForInvalidMove,
  type SnowballGame,
} from "../SnowballGame.js";
import { recordOfSnowballMovesWithDataAndIndex } from "../SnowballMove.test/indexedRecords.js";
import { recordOfSnowballStatesWithData } from "../SnowballState.test/records.js";

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
      SnowballGame,
      SnowballMove,
      SnowballPlayer,
      SnowballScore,
      SnowballSlot,
      SnowballState
    >
  >[0],
  "expectedState"
> & {
  moveWithDataAndIndex: (typeof recordOfSnowballMovesWithDataAndIndex)["centerOfCenter"];
  stateWithData: SnowballStateWithData;
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
        SnowballGame,
        SnowballMove,
        SnowballPlayer,
        SnowballScore,
        SnowballSlot,
        SnowballState
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
  moveWithDataAndIndex: (typeof recordOfSnowballMovesWithDataAndIndex)["centerOfCenter"];
  stateWithData: SnowballStateWithData;
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
        SnowballGame,
        SnowballMove,
        SnowballPlayer,
        SnowballScore,
        SnowballSlot,
        SnowballState
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
  moveWithDataAndIndex: (typeof recordOfSnowballMovesWithDataAndIndex)["centerOfCenter"];
  stateWithData: SnowballStateWithData;
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
  moveWithDataAndIndex: (typeof recordOfSnowballMovesWithDataAndIndex)["centerOfCenter"];
  stateWithData: SnowballStateWithData;
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
    recordOfSnowballStatesWithData
      .slotR0C0IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer
      .state,
  moveWithDataAndIndex:
    recordOfSnowballMovesWithDataAndIndex.northwestOfNorthwest,
  stateWithData:
    recordOfSnowballStatesWithData.allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer,
});

testPlayForAState({
  expectedState:
    recordOfSnowballStatesWithData
      .slotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer
      .state,
  moveWithDataAndIndex: recordOfSnowballMovesWithDataAndIndex.eastOfWest,
  stateWithData:
    recordOfSnowballStatesWithData.slotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer,
});

testPlayForAStateWhenTheMoveIsInvalid({
  moveWithDataAndIndex:
    recordOfSnowballMovesWithDataAndIndex.northwestOfNorthwest,
  stateWithData:
    recordOfSnowballStatesWithData.slotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer,
});

testPlayForAStateWhenTheStateIsFinal({
  moveWithDataAndIndex: recordOfSnowballMovesWithDataAndIndex.eastOfWest,
  stateWithData:
    recordOfSnowballStatesWithData.slotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer,
});
