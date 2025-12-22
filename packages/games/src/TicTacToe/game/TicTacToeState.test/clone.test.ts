import {
  createDescriptionForTest,
  createDescriptionForTestsOfCloneMethod,
} from "@repo/core/test.js";
import { validateClone } from "@repo/game/State.test/clone.test.js";
import { expect, test } from "vitest";

import type { TicTacToeStateWithData } from "./setup.js";

import { TicTacToeState } from "../TicTacToeState.js";
import { recordOfTicTacToeStatesWithData } from "./records.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfCloneMethod({
      className: "TicTacToeState",
    }),
  });

const testClone = ({
  arrayOfStatesWithData,
}: {
  arrayOfStatesWithData: TicTacToeStateWithData[];
}) => {
  arrayOfStatesWithData.forEach(({ keyOfState, state }) => {
    test(
      createDescription({
        affix: keyOfState,
      }),

      () => {
        const clonedState = state.clone();

        validateClone({ clonedState, state });

        expect(clonedState).toBeInstanceOf(TicTacToeState);
      },
    );
  });
};

testClone({
  arrayOfStatesWithData: Object.values(recordOfTicTacToeStatesWithData),
});
