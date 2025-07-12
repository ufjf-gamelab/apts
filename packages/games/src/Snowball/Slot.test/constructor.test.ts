import { INCREMENT_ONE } from "@repo/engine_core/constants.js";
import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/engine_core/test.js";
import { validateConstructor } from "@repo/game/Slot.test/constructor.test.js";
import { expect, test } from "vitest";

import { SnowballSlot } from "../Slot.js";
import { slotsWithData } from "./setup.js";

const INDEX_OF_FIRST_PLAYER = 0;

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
      let { indexOfOccupyingPlayer } = params;
      const newSlot = new SnowballSlot({
        indexOfOccupyingPlayer,
      });

      validateConstructor({ slot: newSlot });
      expect(newSlot).toBeInstanceOf(SnowballSlot);

      // Ensure that the object does not keep references to the original parameters
      if (indexOfOccupyingPlayer === null) {
        indexOfOccupyingPlayer = INDEX_OF_FIRST_PLAYER;
      } else {
        indexOfOccupyingPlayer += INCREMENT_ONE;
      }

      expect(newSlot.getIndexOfOccupyingPlayer()).toBe(
        params.indexOfOccupyingPlayer,
      );
      expect(newSlot.getIndexOfOccupyingPlayer()).not.toBe(
        indexOfOccupyingPlayer,
      );
    },
  );
});
