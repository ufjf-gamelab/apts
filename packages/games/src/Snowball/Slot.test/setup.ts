import {
  createSlotsWithData,
  type SlotWithData,
} from "@repo/game/Slot.test/setup.js";

import { SnowballSlot, type SnowballSlotParams } from "../Slot.js";
import { type RecordOfRequiredSnowballSlotParams } from "./records.js";

type DerivedSnowballSlotParams = RequiredSnowballSlotParams;

type RequiredSnowballSlotParams = Pick<
  SnowballSlotParams,
  "indexOfOccupyingPlayer"
>;

type SnowballSlotWithData = SlotWithData<
  SnowballSlot,
  RequiredSnowballSlotParams
>;

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

type ExtendedSnowballSlotsWithData<
  ExtendedRecordOfRequiredSnowballSlotParams extends
    RecordOfRequiredSnowballSlotParams,
> = {
  [K in keyof ExtendedRecordOfRequiredSnowballSlotParams]: {
    keyOfSlot: keyof ExtendedRecordOfRequiredSnowballSlotParams;
    params: RequiredSnowballSlotParams;
    slot: SnowballSlot;
  };
};

const createSnowballSlotsWithData = <
  ExtendedRecordOfRequiredSnowballSlotParams extends
    RecordOfRequiredSnowballSlotParams,
>({
  recordOfRequiredParams,
}: {
  recordOfRequiredParams: ExtendedRecordOfRequiredSnowballSlotParams;
}): ExtendedSnowballSlotsWithData<ExtendedRecordOfRequiredSnowballSlotParams> =>
  createSlotsWithData({
    create: createSnowballSlot,
    deriveParams: deriveSnowballSlotParams,
    recordOfRequiredParams,
  });

export type {
  DerivedSnowballSlotParams,
  ExtendedSnowballSlotsWithData,
  RequiredSnowballSlotParams,
  SnowballSlotWithData,
};
export {
  createSnowballSlot,
  createSnowballSlotsWithData,
  deriveSnowballSlotParams,
};
