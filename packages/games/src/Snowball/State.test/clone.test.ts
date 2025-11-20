import {
  createDescriptionForTest,
  createDescriptionForTestsOfCloneMethod,
} from "@repo/engine_core/test.js";
import { validateClone } from "@repo/game/State.test/clone.test.js";
import { expect, test } from "vitest";

import { SnowballState } from "../State.js";
import { statesWithDataForUnitTest } from "./setup.js";

const createDescription = ({ affix }: { affix: string }) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfCloneMethod({
      className: "SnowballState",
    }),
  });

Object.values(statesWithDataForUnitTest).forEach(({ keyOfState, state }) => {
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
