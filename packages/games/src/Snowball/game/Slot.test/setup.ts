import {
  createSlotsWithData,
  type DerivedParamsOfSlot,
  type RequiredParamsOfSlot,
  type SlotWithData,
} from "@repo/game/Slot.test/setup.js";

import { type ParamsOfSnowballSlot, SnowballSlot } from "../Slot.js";
import { type RecordOfRequiredParamsOfSnowballSlots } from "./records.js";

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
type DerivedParamsOfSnowballSlot = DerivedParamsOfSlot &
  Pick<ParamsOfSnowballSlot, "indexOfOccupyingPlayer">;

type RequiredParamsOfSnowballSlot = Pick<
  ParamsOfSnowballSlot,
  "indexOfOccupyingPlayer"
> &
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  RequiredParamsOfSlot;

type SnowballSlotWithData = SlotWithData<
  SnowballSlot,
  DerivedParamsOfSnowballSlot
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
