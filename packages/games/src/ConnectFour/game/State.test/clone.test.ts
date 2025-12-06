import {
  createDescriptionForTest,
  createDescriptionForTestsOfCloneMethod,
} from "@repo/engine_core/test.js";
import { validateClone } from "@repo/game/State.test/clone.test.js";
import { expect, test } from "vitest";

import type { ConnectFourStateWithData } from "./setup.js";

import { ConnectFourState } from "../State.js";
import { recordOfConnectFourStatesWithData } from "./records.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfCloneMethod({
      className: "ConnectFourState",
    }),
  });

const testClone = ({
  arrayOfStatesWithData,
}: {
  arrayOfStatesWithData: ConnectFourStateWithData[];
}) => {
  arrayOfStatesWithData.forEach(({ keyOfState, state }) => {
    test(
      createDescription({
        affix: keyOfState,
      }),

      () => {
        const clonedState = state.clone();

        validateClone({ clonedState, state });

        expect(clonedState).toBeInstanceOf(ConnectFourState);
      },
    );
  });
};

testClone({
  arrayOfStatesWithData: Object.values(recordOfConnectFourStatesWithData),
});
