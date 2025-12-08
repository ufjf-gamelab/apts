import {
  createRecordOfSlotsWithData,
  type DerivedParamsOfSlot,
  type RecordOfSlotsWithData,
  type RequiredParamsOfSlot,
  type SlotWithData,
} from "@repo/game/Slot.test/setup.js";

import { type ParamsOfSnowballSlot, SnowballSlot } from "../Slot.js";

 
type DerivedParamsOfSnowballSlot = DerivedParamsOfSlot &
  Pick<ParamsOfSnowballSlot, "indexOfOccupyingPlayer">;

type RecordOfRequiredParamsOfSnowballSlots = Record<
  string,
  RequiredParamsOfSnowballSlot
>;

type RecordOfSnowballSlotsWithData<
  GenericRecordOfRequiredParamsOfSnowballSlots extends
    RecordOfRequiredParamsOfSnowballSlots,
> = RecordOfSlotsWithData<
  SnowballSlot,
  RequiredParamsOfSnowballSlot,
  GenericRecordOfRequiredParamsOfSnowballSlots
>;

type RequiredParamsOfSnowballSlot = Pick<
  ParamsOfSnowballSlot,
  "indexOfOccupyingPlayer"
> &
   
  RequiredParamsOfSlot;

type SnowballSlotWithData<GenericKeyOfSnowballSlot extends string = string> =
  SlotWithData<
    SnowballSlot,
    RequiredParamsOfSnowballSlot,
    GenericKeyOfSnowballSlot
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

const createRecordOfSnowballSlotsWithData = <
  GenericRecordOfRequiredParamsOfSnowballSlots extends
    RecordOfRequiredParamsOfSnowballSlots,
>({
  recordOfRequiredParamsOfSlots,
}: {
  recordOfRequiredParamsOfSlots: GenericRecordOfRequiredParamsOfSnowballSlots;
}) =>
  createRecordOfSlotsWithData<
    SnowballSlot,
    DerivedParamsOfSnowballSlot,
    RequiredParamsOfSnowballSlot,
    RecordOfSnowballSlotsWithData<GenericRecordOfRequiredParamsOfSnowballSlots>
  >({
    create: createSnowballSlot,
    deriveParams: deriveParamsOfSnowballSlot,
    recordOfRequiredParamsOfSlots,
  });

export type {
  DerivedParamsOfSnowballSlot,
  RecordOfRequiredParamsOfSnowballSlots,
  RecordOfSnowballSlotsWithData,
  RequiredParamsOfSnowballSlot,
  SnowballSlotWithData,
};
export {
  createRecordOfSnowballSlotsWithData,
  createSnowballSlot,
  deriveParamsOfSnowballSlot,
};
