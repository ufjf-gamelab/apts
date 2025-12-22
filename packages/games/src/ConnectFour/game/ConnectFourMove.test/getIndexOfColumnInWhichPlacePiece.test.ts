import {
  createDescriptionForTest,
  createDescriptionForTestsOfMethod,
} from "@repo/core/test.js";
import { expect, test } from "vitest";

import type { ConnectFourMove } from "../ConnectFourMove.js";

import { indexedConnectFourMovesWithData } from "./indexedRecords.js";
import { type ConnectFourMoveWithData } from "./setup.js";

const validateGetIndexOfColumnInWhichPlacePiece = ({
  expectedIndexOfColumnInWhichPlacePiece,
  move,
}: {
  expectedIndexOfColumnInWhichPlacePiece: ReturnType<
    ConnectFourMove["getIndexOfColumnInWhichPlacePiece"]
  >;
  move: ConnectFourMove;
}) => {
  const indexOfColumnInWhichPlacePiece =
    move.getIndexOfColumnInWhichPlacePiece();
  expect(indexOfColumnInWhichPlacePiece).toBe(
    expectedIndexOfColumnInWhichPlacePiece,
  );
};

const createDescriptionForTestOfGetIndexOfColumnInWhichPlacePiece = ({
  expectedIndexOfColumnInWhichPlacePiece,
}: {
  expectedIndexOfColumnInWhichPlacePiece: ReturnType<
    ConnectFourMove["getIndexOfColumnInWhichPlacePiece"]
  >;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: "getIndexOfColumnInWhichPlacePiece()",
    returnedValue: expectedIndexOfColumnInWhichPlacePiece,
  });

const createDescription = ({
  affix,
  expectedIndexOfColumnInWhichPlacePiece,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> & {
  expectedIndexOfColumnInWhichPlacePiece: ReturnType<
    ConnectFourMove["getIndexOfColumnInWhichPlacePiece"]
  >;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetIndexOfColumnInWhichPlacePiece({
      expectedIndexOfColumnInWhichPlacePiece,
    }),
  });

const testGetIndexOfColumnInWhichPlacePiece = ({
  arrayOfMovesWithData,
}: {
  arrayOfMovesWithData: ConnectFourMoveWithData[];
}) => {
  arrayOfMovesWithData.forEach(
    ({
      keyOfMove,
      move,
      requiredParams: { indexOfColumnInWhichPlacePiece },
    }) => {
      test(
        createDescription({
          affix: keyOfMove,
          expectedIndexOfColumnInWhichPlacePiece:
            indexOfColumnInWhichPlacePiece,
        }),

        () => {
          validateGetIndexOfColumnInWhichPlacePiece({
            expectedIndexOfColumnInWhichPlacePiece:
              indexOfColumnInWhichPlacePiece,
            move,
          });
        },
      );
    },
  );
};

testGetIndexOfColumnInWhichPlacePiece({
  arrayOfMovesWithData: indexedConnectFourMovesWithData,
});
