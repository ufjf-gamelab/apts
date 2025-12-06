import {
  createDescriptionForTest,
  createDescriptionForTestsOfCloneMethod,
} from "@repo/engine_core/test.js";
import { validateClone } from "@repo/game/Move.test/clone.test.js";
import { expect, test } from "vitest";

import type { ConnectFourMoveWithData } from "./setup.js";

import { ConnectFourMove } from "../Move.js";
import { indexedConnectFourMovesWithData } from "./indexedRecords.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfCloneMethod({
      className: "ConnectFourMove",
    }),
  });

const testClone = ({
  arrayOfMovesWithData,
}: {
  arrayOfMovesWithData: ConnectFourMoveWithData[];
}) => {
  arrayOfMovesWithData.forEach(({ keyOfMove, move }) => {
    test(
      createDescription({
        affix: keyOfMove,
      }),

      () => {
        const clonedMove = move.clone();

        validateClone({ clonedMove, move });

        expect(clonedMove).toBeInstanceOf(ConnectFourMove);
      },
    );
  });
};

testClone({
  arrayOfMovesWithData: indexedConnectFourMovesWithData,
});
