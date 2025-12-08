import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/engine_core/test.js";
import { validateConstructor } from "@repo/game/Move.test/constructor.test.js";
import { expect, test } from "vitest";

import { ConnectFourMove } from "../ConnectFourMove.js";
import { indexedConnectFourMovesWithData } from "./indexedRecords.js";
import {
  type ConnectFourMoveWithData,
  deriveParamsOfConnectFourMove,
} from "./setup.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfConstructor({
      className: "ConnectFourMove",
    }),
  });

const testConstructor = ({
  arrayOfMovesWithData,
}: {
  arrayOfMovesWithData: ConnectFourMoveWithData[];
}) => {
  arrayOfMovesWithData.forEach(({ keyOfMove, requiredParams }) => {
    test(
      createDescription({
        affix: keyOfMove,
      }),

      () => {
        const { description, indexOfColumnInWhichPlacePiece, title } =
          deriveParamsOfConnectFourMove(requiredParams);

        const newMove = new ConnectFourMove({
          description,
          indexOfColumnInWhichPlacePiece,
          title,
        });

        validateConstructor({ move: newMove, params: { description, title } });

        expect(newMove).toBeInstanceOf(ConnectFourMove);
      },
    );
  });
};

testConstructor({
  arrayOfMovesWithData: indexedConnectFourMovesWithData,
});
