import {
  createSlotsWithData,
  type SlotWithData,
} from "@repo/game/Slot.test/setup.js";

import { type ParamsOfSnowballSlot, SnowballSlot } from "../Slot.js";
import { type RecordOfRequiredParamsOfSnowballSlots } from "./records.js";

type DerivedParamsOfSnowballSlot = RequiredParamsOfSnowballSlot;

type RequiredParamsOfSnowballSlot = Pick<
  ParamsOfSnowballSlot,
  "indexOfOccupyingPlayer"
>;

type SnowballSlotWithData = SlotWithData<
  SnowballSlot,
  RequiredParamsOfSnowballSlot
>;

const deriveParamsOfSnowballSlot = ({
  indexOfOccupyingPlayer,
}: RequiredParamsOfSnowballSlot): DerivedParamsOfSnowballSlot => ({
  indexOfOccupyingPlayer,
});

const createSnowballSlot = ({
  indexOfOccupyingPlayer,
}: DerivedParamsOfSnowballSlot): SnowballSlot =>
  new SnowballSlot({
    indexOfOccupyingPlayer,
  });

type ExtendedSnowballSlotsWithData<
  ExtendedRecordOfRequiredParamsOfSnowballSlots extends
    RecordOfRequiredParamsOfSnowballSlots,
> = {
  [K in keyof ExtendedRecordOfRequiredParamsOfSnowballSlots]: {
    keyOfSlot: keyof ExtendedRecordOfRequiredParamsOfSnowballSlots;
    params: RequiredParamsOfSnowballSlot;
    slot: SnowballSlot;
  };
};

const createSnowballSlotsWithData = <
  ExtendedRecordOfRequiredParamsOfSnowballSlots extends
    RecordOfRequiredParamsOfSnowballSlots,
>({
  recordOfRequiredParams,
}: {
  recordOfRequiredParams: ExtendedRecordOfRequiredParamsOfSnowballSlots;
}): ExtendedSnowballSlotsWithData<ExtendedRecordOfRequiredParamsOfSnowballSlots> =>
  createSlotsWithData({
    create: createSnowballSlot,
    deriveParams: deriveParamsOfSnowballSlot,
    recordOfRequiredParams,
  });

export type {
  DerivedParamsOfSnowballSlot,
  ExtendedSnowballSlotsWithData,
  RequiredParamsOfSnowballSlot,
  SnowballSlotWithData,
};
export {
  createSnowballSlot,
  createSnowballSlotsWithData,
  deriveParamsOfSnowballSlot,
};
