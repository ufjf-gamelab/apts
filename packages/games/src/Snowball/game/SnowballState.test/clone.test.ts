import {
  createDescriptionForTest,
  createDescriptionForTestsOfCloneMethod,
} from "@repo/engine_core/test.js";
import { validateClone } from "@repo/game/State.test/clone.test.js";
import { expect, test } from "vitest";

import type { SnowballStateWithData } from "./setup.js";

import { SnowballState } from "../SnowballState.js";
import { recordOfSnowballStatesWithData } from "./records.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfCloneMethod({
      className: "SnowballState",
    }),
  });

const testClone = ({
  arrayOfStatesWithData,
}: {
  arrayOfStatesWithData: SnowballStateWithData[];
}) => {
  arrayOfStatesWithData.forEach(({ keyOfState, state }) => {
    test(
      createDescription({
        affix: keyOfState,
      }),

      () => {
        const clonedState = state.clone();

        validateClone({ clonedState, state });

        expect(clonedState).toBeInstanceOf(SnowballState);
      },
    );
  });
};

testClone({
  arrayOfStatesWithData: Object.values(recordOfSnowballStatesWithData),
});
