import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetTitle,
  validateGetTitle,
} from "@repo/game/Move.test/getTitle.test.js";
import { test } from "vitest";

import type { ConnectFourMove } from "../ConnectFourMove.js";

import { indexedConnectFourMovesWithData } from "./indexedRecords.js";
import { type ConnectFourMoveWithData } from "./setup.js";

const createDescription = ({
  affix,
  expectedTitle,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> & {
  expectedTitle: ReturnType<ConnectFourMove["getTitle"]>;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetTitle({
      expectedTitle,
    }),
  });

const testGetTitle = ({
  arrayOfMovesWithData,
}: {
  arrayOfMovesWithData: ConnectFourMoveWithData[];
}) => {
  arrayOfMovesWithData.forEach(
    ({ keyOfMove, move, requiredParams: { title } }) => {
      test(
        createDescription({
          affix: keyOfMove,
          expectedTitle: title,
        }),

        () => {
          validateGetTitle({
            expectedTitle: title,
            move,
          });
        },
      );
    },
  );
};

testGetTitle({
  arrayOfMovesWithData: indexedConnectFourMovesWithData,
});
