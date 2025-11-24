import {
  createDescriptionForTest,
  createDescriptionForTestsOfCloneMethod,
} from "@repo/engine_core/test.js";
import { validateClone } from "@repo/game/State.test/clone.test.js";
import { expect, test } from "vitest";

import { SnowballState } from "../State.js";
import { statesWithData } from "./records.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfCloneMethod({
      className: "SnowballState",
    }),
  });

Object.values(statesWithData).forEach(({ keyOfState, state }) => {
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
