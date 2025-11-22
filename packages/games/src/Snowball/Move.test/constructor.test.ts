import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/engine_core/test.js";
import { validateConstructor } from "@repo/game/Move.test/constructor.test.js";
import { expect, test } from "vitest";

import { SnowballMove } from "../Move.js";
import { indexedMovesWithData } from "./indexedRecords.js";
import {
  deriveSnowballMoveParams,
  type SnowballMoveWithData,
} from "./setup.js";

const createDescription = ({ affix }: { affix: string }) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfConstructor({
      className: "SnowballMove",
    }),
  });

const testConstructor = ({
  arrayOfMovesWithData,
}: {
  arrayOfMovesWithData: SnowballMoveWithData[];
}) => {
  arrayOfMovesWithData.forEach(({ keyOfMove, params }) => {
    test(
      createDescription({
        affix: keyOfMove,
      }),
      () => {
        const { description, indexOfSlotInWhichPlacePiece, title } =
          deriveSnowballMoveParams(params);
        const newMove = new SnowballMove({
          description,
          indexOfSlotInWhichPlacePiece,
          title,
        });

        validateConstructor({ move: newMove, params: { description, title } });
        expect(newMove).toBeInstanceOf(SnowballMove);
      },
    );
  });
};

testConstructor({
  arrayOfMovesWithData: indexedMovesWithData,
});
