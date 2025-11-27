import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/engine_core/test.js";
import { validateConstructor } from "@repo/game/Move.test/constructor.test.js";
import { expect, test } from "vitest";

import { TicTacToeMove } from "../Move.js";
import { indexedTicTacToeMovesWithData } from "./indexedRecords.js";
import {
  deriveParamsOfTicTacToeMove,
  type TicTacToeMoveWithData,
} from "./setup.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfConstructor({
      className: "TicTacToeMove",
    }),
  });

const testConstructor = ({
  arrayOfMovesWithData,
}: {
  arrayOfMovesWithData: TicTacToeMoveWithData[];
}) => {
  arrayOfMovesWithData.forEach(({ keyOfMove, requiredParams }) => {
    test(
      createDescription({
        affix: keyOfMove,
      }),

      () => {
        const { description, indexOfSlotInWhichPlacePiece, title } =
          deriveParamsOfTicTacToeMove(requiredParams);

        const newMove = new TicTacToeMove({
          description,
          indexOfSlotInWhichPlacePiece,
          title,
        });

        validateConstructor({ move: newMove, params: { description, title } });

        expect(newMove).toBeInstanceOf(TicTacToeMove);
      },
    );
  });
};

testConstructor({
  arrayOfMovesWithData: indexedTicTacToeMovesWithData,
});
