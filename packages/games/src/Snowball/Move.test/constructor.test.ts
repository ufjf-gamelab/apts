import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/engine_core/test.js";
import { validateConstructor } from "@repo/game/Move.test/constructor.test.js";
import { expect, test } from "vitest";

import { SnowballMove } from "../Move.js";
import { movesWithData } from "./setup.js";

const createDescription = ({ affix }: { affix: string }) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfConstructor({
      className: "SnowballMove",
    }),
  });

Object.values(movesWithData).forEach(({ keyOfMove, params }) => {
  test(
    createDescription({
      affix: keyOfMove,
    }),
    () => {
      const { description, title } = params;
      const { indexOfSlotInWhichPlacePiece } = params;

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
