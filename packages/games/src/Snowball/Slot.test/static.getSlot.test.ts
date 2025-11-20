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
  indexOfSlot,
  keyOfSlot,
  slots,
}: {
  indexOfSlot: PropsOfCreateDescriptionForTestOfGetSlot["indexOfSlot"];
  keyOfSlot: PropsOfCreateDescriptionForTestOfGetSlot["keyOfSlot"];
  slots: PropsOfCreateDescriptionForTestOfGetSlot["slots"];
}) =>
  createDescriptionForTest({
    description: createDescriptionForTestOfGetSlot({
      indexOfSlot,
      keyOfSlot,
      slots,
    }),
  });

Object.values(slotsWithDataForUnitTest).forEach(
  ({ keyOfSlot, slot }, index) => {
    test(
      createDescription({
        indexOfSlot: index,
        keyOfSlot,
        slots: `[${Object.values(slotsWithDataForUnitTest)
          .map(({ keyOfSlot: innerKeyOfSlot }) => innerKeyOfSlot)
          .join(", ")}]`,
      }),
      () => {
        validateGetSlot({
          expectedSlot: slot,
          indexOfSlot: index,
          slots: Object.values(slotsWithDataForUnitTest).map(
            ({ slot: innerSlot }) => innerSlot,
          ),
        });
      },
    );
  },
);
