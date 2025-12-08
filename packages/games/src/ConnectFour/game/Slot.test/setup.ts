import {
  createRecordOfSlotsWithData,
  type DerivedParamsOfSlot,
  type RecordOfSlotsWithData,
  type RequiredParamsOfSlot,
  type SlotWithData,
} from "@repo/game/Slot.test/setup.js";

import { ConnectFourSlot, type ParamsOfConnectFourSlot } from "../Slot.js";

type ConnectFourSlotWithData<
  GenericKeyOfConnectFourSlot extends string = string,
> = SlotWithData<
  ConnectFourSlot,
  RequiredParamsOfConnectFourSlot,
  GenericKeyOfConnectFourSlot
>;

type DerivedParamsOfConnectFourSlot = DerivedParamsOfSlot &
  Pick<ParamsOfConnectFourSlot, "indexOfOccupyingPlayer">;

type RecordOfConnectFourSlotsWithData<
  GenericRecordOfRequiredParamsOfConnectFourSlots extends
    RecordOfRequiredParamsOfConnectFourSlots,
> = RecordOfSlotsWithData<
  ConnectFourSlot,
  RequiredParamsOfConnectFourSlot,
  GenericRecordOfRequiredParamsOfConnectFourSlots
>;

type RecordOfRequiredParamsOfConnectFourSlots = Record<
  string,
  RequiredParamsOfConnectFourSlot
>;

type RequiredParamsOfConnectFourSlot = Pick<
  ParamsOfConnectFourSlot,
  "indexOfOccupyingPlayer"
> &
  RequiredParamsOfSlot;

const deriveParamsOfConnectFourSlot = ({
  indexOfOccupyingPlayer,
}: RequiredParamsOfConnectFourSlot): DerivedParamsOfConnectFourSlot => ({
  indexOfOccupyingPlayer,
});

const createConnectFourSlot = ({
  indexOfOccupyingPlayer,
}: DerivedParamsOfConnectFourSlot): ConnectFourSlot =>
  new ConnectFourSlot({
    indexOfOccupyingPlayer,
  });

const createRecordOfConnectFourSlotsWithData = <
  GenericRecordOfRequiredParamsOfConnectFourSlots extends
    RecordOfRequiredParamsOfConnectFourSlots,
>({
  recordOfRequiredParamsOfSlots,
}: {
  recordOfRequiredParamsOfSlots: GenericRecordOfRequiredParamsOfConnectFourSlots;
}) =>
  createRecordOfSlotsWithData<
    ConnectFourSlot,
    DerivedParamsOfConnectFourSlot,
    RequiredParamsOfConnectFourSlot,
    RecordOfConnectFourSlotsWithData<GenericRecordOfRequiredParamsOfConnectFourSlots>
  >({
    create: createConnectFourSlot,
    deriveParams: deriveParamsOfConnectFourSlot,
    recordOfRequiredParamsOfSlots,
  });

export type {
  ConnectFourSlotWithData,
  DerivedParamsOfConnectFourSlot,
  RecordOfConnectFourSlotsWithData,
  RecordOfRequiredParamsOfConnectFourSlots,
  RequiredParamsOfConnectFourSlot,
};
export {
  createConnectFourSlot,
  createRecordOfConnectFourSlotsWithData,
  deriveParamsOfConnectFourSlot,
};
