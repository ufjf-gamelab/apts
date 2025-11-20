import { createSlotsWithData } from "@repo/game/Slot.test/setup.js";

import { getIndexOfPlayer } from "../Game.test/players.js";
import { SnowballSlot, type SnowballSlotParams } from "../Slot.js";
import {
  recordOfRequiredParamsOfSlots,
  recordOfRequiredParamsOfSlotsForUnitTest,
} from "./records.js";

type DerivedSnowballSlotParams = RequiredSnowballSlotParams;

type RequiredSnowballSlotParams = Pick<
  SnowballSlotParams,
  "indexOfOccupyingPlayer"
>;

interface SnowballSlotWithData<
  Params extends RequiredSnowballSlotParams = RequiredSnowballSlotParams,
> {
  keyOfSlot: string;
  params: Params;
  slot: SnowballSlot;
}

const deriveSnowballSlotParams = ({
  indexOfOccupyingPlayer,
}: RequiredSnowballSlotParams): DerivedSnowballSlotParams => ({
  indexOfOccupyingPlayer,
});

const createSnowballSlot = ({
  indexOfOccupyingPlayer,
}: DerivedSnowballSlotParams): SnowballSlot =>
  new SnowballSlot({
    indexOfOccupyingPlayer,
  });

const slotsWithData = createSlotsWithData({
  create: createSnowballSlot,
  deriveParams: deriveSnowballSlotParams,
  recordOfRequiredParams: recordOfRequiredParamsOfSlots,
});

const slotsWithDataForUnitTest = createSlotsWithData({
  create: createSnowballSlot,
  deriveParams: deriveSnowballSlotParams,
  recordOfRequiredParams: recordOfRequiredParamsOfSlotsForUnitTest,
});

const editSlotOnSnowballSlotsWithData = ({
  indexOfOccupyingPlayer,
  keyOfSlot,
  slots,
}: Pick<Parameters<typeof createSnowballSlot>[0], "indexOfOccupyingPlayer"> & {
  keyOfSlot: keyof typeof slots;
  slots: Record<string, SnowballSlotWithData>;
}) => {
  const newSlot: SnowballSlotWithData = {
    keyOfSlot,
    params: {
      indexOfOccupyingPlayer,
    },
    slot: createSnowballSlot({
      indexOfOccupyingPlayer,
    }),
  };

  return {
    ...slots,
    [keyOfSlot]: newSlot,
  };
};

export type {
  DerivedSnowballSlotParams,
  RequiredSnowballSlotParams,
  SnowballSlotWithData,
};
export {
  createSnowballSlot,
  deriveSnowballSlotParams,
  editSlotOnSnowballSlotsWithData,
  slotsWithData,
  slotsWithDataForUnitTest,
};
