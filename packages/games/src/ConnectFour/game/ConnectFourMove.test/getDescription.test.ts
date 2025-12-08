import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetDescription,
  validateGetDescription,
} from "@repo/game/Move.test/getDescription.test.js";
import { test } from "vitest";

import type { ConnectFourMove } from "../ConnectFourMove.js";

import { indexedConnectFourMovesWithData } from "./indexedRecords.js";
import {
  type ConnectFourMoveWithData,
  deriveParamsOfConnectFourMove,
} from "./setup.js";

const createDescription = ({
  affix,
  expectedDescription,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> & {
  expectedDescription: ReturnType<ConnectFourMove["getDescription"]>;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetDescription({
      expectedDescription,
    }),
  });

const testGetDescription = ({
  arrayOfMovesWithData,
}: {
  arrayOfMovesWithData: ConnectFourMoveWithData[];
}) => {
  arrayOfMovesWithData.forEach(({ keyOfMove, move, requiredParams }) => {
    const { description } = deriveParamsOfConnectFourMove(requiredParams);

    test(
      createDescription({
        affix: keyOfMove,
        expectedDescription: description,
      }),

      () => {
        validateGetDescription({
          expectedDescription: description,
          move,
        });
      },
    );
  });
};

testGetDescription({
  arrayOfMovesWithData: indexedConnectFourMovesWithData,
});
