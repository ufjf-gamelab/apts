import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfPlay,
  createDescriptionForTestOfPlayWhenItIsInvalid,
  validatePlay,
  validatePlayWhenItIsInvalid,
} from "@repo/game/Game.test/play.test.js";
import { test } from "vitest";

import type { TicTacToeMove } from "../Move.js";
import type { TicTacToePlayer } from "../Player.js";
import type { TicTacToeScore } from "../Score.js";
import type { TicTacToeSlot } from "../Slot.js";
import type { TicTacToeState } from "../State.js";
import type { TicTacToeStateWithData } from "../State.test/setup.js";

import {
  constructErrorForFinalState,
  constructErrorForInvalidMove,
  type TicTacToeGame,
} from "../Game.js";
import { recordOfTicTacToeMovesWithDataAndIndex } from "../Move.test/indexedRecords.js";
import { recordOfTicTacToeStatesWithData } from "../State.test/records.js";

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
      TicTacToeGame,
      TicTacToeMove,
      TicTacToePlayer,
      TicTacToeScore,
      TicTacToeSlot,
      TicTacToeState
    >
  >[0],
  "expectedState"
> & {
  moveWithDataAndIndex: (typeof recordOfTicTacToeMovesWithDataAndIndex)["center"];
  stateWithData: TicTacToeStateWithData;
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
        TicTacToeGame,
        TicTacToeMove,
        TicTacToePlayer,
        TicTacToeScore,
        TicTacToeSlot,
        TicTacToeState
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
  moveWithDataAndIndex: (typeof recordOfTicTacToeMovesWithDataAndIndex)["center"];
  stateWithData: TicTacToeStateWithData;
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
        TicTacToeGame,
        TicTacToeMove,
        TicTacToePlayer,
        TicTacToeScore,
        TicTacToeSlot,
        TicTacToeState
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
  moveWithDataAndIndex: (typeof recordOfTicTacToeMovesWithDataAndIndex)["center"];
  stateWithData: TicTacToeStateWithData;
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
  moveWithDataAndIndex: (typeof recordOfTicTacToeMovesWithDataAndIndex)["center"];
  stateWithData: TicTacToeStateWithData;
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
    recordOfTicTacToeStatesWithData
      .slotR0C0IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer
      .state,
  moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.northwest,
  stateWithData:
    recordOfTicTacToeStatesWithData.allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer,
});

testPlayForAState({
  expectedState:
    recordOfTicTacToeStatesWithData
      .slotR0C0AndR0C2AndR1C1AndR2C1AndR2C2AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBrunoAndAliceHas1PointAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer
      .state,
  moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.southeast,
  stateWithData:
    recordOfTicTacToeStatesWithData.slotR0C0AndR0C2AndR1C1AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer,
});

testPlayForAStateWhenTheMoveIsInvalid({
  moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.northwest,
  stateWithData:
    recordOfTicTacToeStatesWithData.slotR0C0IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer,
});

testPlayForAStateWhenTheStateIsFinal({
  moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.southeast,
  stateWithData:
    recordOfTicTacToeStatesWithData.slotR0C0AndR0C2AndR1C1AndR2C1AndR2C2AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBrunoAndAliceHas1PointAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer,
});
