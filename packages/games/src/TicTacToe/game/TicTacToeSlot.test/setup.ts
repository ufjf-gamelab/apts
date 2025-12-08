import {
  createRecordOfSlotsWithData,
  type DerivedParamsOfSlot,
  type RecordOfSlotsWithData,
  type RequiredParamsOfSlot,
  type SlotWithData,
} from "@repo/game/Slot.test/setup.js";

import { type ParamsOfTicTacToeSlot, TicTacToeSlot } from "../TicTacToeSlot.js";

type DerivedParamsOfTicTacToeSlot = DerivedParamsOfSlot &
  Pick<ParamsOfTicTacToeSlot, "indexOfOccupyingPlayer">;

type RecordOfRequiredParamsOfTicTacToeSlots = Record<
  string,
  RequiredParamsOfTicTacToeSlot
>;

type RecordOfTicTacToeSlotsWithData<
  GenericRecordOfRequiredParamsOfTicTacToeSlots extends
    RecordOfRequiredParamsOfTicTacToeSlots,
> = RecordOfSlotsWithData<
  TicTacToeSlot,
  RequiredParamsOfTicTacToeSlot,
  GenericRecordOfRequiredParamsOfTicTacToeSlots
>;

type RequiredParamsOfTicTacToeSlot = Pick<
  ParamsOfTicTacToeSlot,
  "indexOfOccupyingPlayer"
> &
  RequiredParamsOfSlot;

type TicTacToeSlotWithData<GenericKeyOfTicTacToeSlot extends string = string> =
  SlotWithData<
    TicTacToeSlot,
    RequiredParamsOfTicTacToeSlot,
    GenericKeyOfTicTacToeSlot
  >;

const deriveParamsOfTicTacToeSlot = ({
  indexOfOccupyingPlayer,
}: RequiredParamsOfTicTacToeSlot): DerivedParamsOfTicTacToeSlot => ({
  indexOfOccupyingPlayer,
});

const createTicTacToeSlot = ({
  indexOfOccupyingPlayer,
}: DerivedParamsOfTicTacToeSlot): TicTacToeSlot =>
  new TicTacToeSlot({
    indexOfOccupyingPlayer,
  });

const createRecordOfTicTacToeSlotsWithData = <
  GenericRecordOfRequiredParamsOfTicTacToeSlots extends
    RecordOfRequiredParamsOfTicTacToeSlots,
>({
  recordOfRequiredParamsOfSlots,
}: {
  recordOfRequiredParamsOfSlots: GenericRecordOfRequiredParamsOfTicTacToeSlots;
}) =>
  createRecordOfSlotsWithData<
    TicTacToeSlot,
    DerivedParamsOfTicTacToeSlot,
    RequiredParamsOfTicTacToeSlot,
    RecordOfTicTacToeSlotsWithData<GenericRecordOfRequiredParamsOfTicTacToeSlots>
  >({
    create: createTicTacToeSlot,
    deriveParams: deriveParamsOfTicTacToeSlot,
    recordOfRequiredParamsOfSlots,
  });

export type {
  DerivedParamsOfTicTacToeSlot,
  RecordOfRequiredParamsOfTicTacToeSlots,
  RecordOfTicTacToeSlotsWithData,
  RequiredParamsOfTicTacToeSlot,
  TicTacToeSlotWithData,
};
export {
  createRecordOfTicTacToeSlotsWithData,
  createTicTacToeSlot,
  deriveParamsOfTicTacToeSlot,
};
