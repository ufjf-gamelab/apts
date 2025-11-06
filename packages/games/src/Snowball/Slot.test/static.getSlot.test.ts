import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetSlot,
  validateGetSlot,
} from "@repo/game/Slot.test/static.getSlot.test.js";
import { test } from "vitest";

import { slotsWithDataForUnitTest } from "./setup.js";

type PropsOfCreateDescriptionForTestOfGetSlot = Parameters<
  typeof createDescriptionForTestOfGetSlot
>[0];

const createDescription = ({
  expectedKeyOfSlot,
  indexOfSlot,
  slots,
}: {
  expectedKeyOfSlot: PropsOfCreateDescriptionForTestOfGetSlot["expectedKeyOfSlot"];
  indexOfSlot: PropsOfCreateDescriptionForTestOfGetSlot["indexOfSlot"];
  slots: PropsOfCreateDescriptionForTestOfGetSlot["slots"];
}) =>
  createDescriptionForTest({
    description: createDescriptionForTestOfGetSlot({
      expectedKeyOfSlot,
      indexOfSlot,
      slots,
    }),
  });

Object.values(slotsWithDataForUnitTest).forEach(
  ({ indexOfSlot, keyOfSlot, slot }) => {
    test(
      createDescription({
        expectedKeyOfSlot: keyOfSlot,
        indexOfSlot,
        slots: `[${Object.values(slotsWithDataForUnitTest)
          .map(({ keyOfSlot: innerKeyOfSlot }) => innerKeyOfSlot)
          .join(", ")}]`,
      }),
      () => {
        validateGetSlot({
          expectedSlot: slot,
          indexOfSlot,
          slots: Object.values(slotsWithDataForUnitTest).map(
            ({ slot: innerSlot }) => innerSlot,
          ),
        });
      },
    );
  },
);
