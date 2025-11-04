import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/engine_core/test.js";
import { validateConstructor } from "@repo/game/Slot.test/constructor.test.js";
import { expect, test } from "vitest";

import { SnowballSlot } from "../Slot.js";
import { slotsWithData } from "./setup.js";

const createDescription = ({ affix }: { affix: string }) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfConstructor({
      className: "SnowballSlot",
    }),
  });

Object.values(slotsWithData).forEach(({ keyOfSlot, params }) => {
  test(
    createDescription({
      affix: keyOfSlot,
    }),
    () => {
      const { indexOfOccupyingPlayer } = params;
      const newSlot = new SnowballSlot({
        indexOfOccupyingPlayer,
      });

      validateConstructor({ slot: newSlot });
      expect(newSlot).toBeInstanceOf(SnowballSlot);
    },
  );
});
