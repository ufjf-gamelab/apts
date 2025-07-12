import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/engine_core/test.js";
import type { Char } from "@repo/engine_core/types.js";
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
      let { description, title } = params;
      const { indexOfSlotInWhichPlacePiece } = params;

      const newMove = new SnowballMove({
        description,
        indexOfSlotInWhichPlacePiece,
        title,
      });

      validateConstructor({ move: newMove, params: { description, title } });
      expect(newMove).toBeInstanceOf(SnowballMove);

      // Ensure that the object does not keep references to the original parameters
      description = `${params.description} (modified)`;
      title = `${params.title} (modified)` as Char;

      expect(newMove.getDescription()).toBe(params.description);
      expect(newMove.getDescription()).not.toBe(description);
      expect(newMove.getTitle()).toBe(params.title);
      expect(newMove.getTitle()).not.toBe(title);
    },
  );
});
