import type {
  RecordOfSlotsWithDataAndIndex,
  SlotWithDataAndIndex,
} from "@repo/game/Slot.test/setup.js";

import type { TicTacToeSlot } from "../Slot.js";
import type {
  RecordOfRequiredParamsOfTicTacToeSlots,
  RecordOfTicTacToeSlotsWithData,
  RequiredParamsOfTicTacToeSlot,
  TicTacToeSlotWithData,
} from "./setup.js";

import {
  type recordOfRequiredParamsOfTicTacToeSlotsInWhichAllSlotsAreEmpty,
  recordOfTicTacToeSlotsWithDataInWhichAllSlotsAreEmpty,
  recordOfTicTacToeSlotsWithDataInWhichSlotR0C0AndR0C2AndR1C1AndR1C2AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR2C0AndR2C2AreFilledByBruno,
  recordOfTicTacToeSlotsWithDataInWhichSlotR0C0AndR0C2AndR1C1AndR2C1AndR2C2AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno,
  recordOfTicTacToeSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
  recordOfTicTacToeSlotsWithDataInWhichSlotR1C1IsFilledByAlice,
  recordOfTicTacToeSlotsWithDataInWhichSlotR2C1IsFilledByAlice,
} from "./records.js";

type KeysOfSlotsInOrder<
  GenericRecordOfRequiredParamsOfTicTacToeSlots extends
    RecordOfRequiredParamsOfTicTacToeSlots,
> = (keyof GenericRecordOfRequiredParamsOfTicTacToeSlots)[];

type RecordOfTicTacToeSlotsWithDataAndIndex<
  GenericRecordOfRequiredParamsOfTicTacToeSlots extends
    RecordOfRequiredParamsOfTicTacToeSlots,
> = RecordOfSlotsWithDataAndIndex<
  TicTacToeSlot,
  RequiredParamsOfTicTacToeSlot,
  GenericRecordOfRequiredParamsOfTicTacToeSlots,
  TicTacToeSlotWithData
>;

type TicTacToeSlotWithDataAndIndex = SlotWithDataAndIndex<
  TicTacToeSlot,
  RequiredParamsOfTicTacToeSlot,
  TicTacToeSlotWithData
>;

const createIndexedTicTacToeSlotsWithData = <
  GenericRecordOfRequiredParamsOfTicTacToeSlots extends
    RecordOfRequiredParamsOfTicTacToeSlots,
>({
  keysOfTicTacToeSlotsInOrder,
  ticTacToeSlotsWithData,
}: {
  keysOfTicTacToeSlotsInOrder: KeysOfSlotsInOrder<GenericRecordOfRequiredParamsOfTicTacToeSlots>;
  ticTacToeSlotsWithData: RecordOfTicTacToeSlotsWithData<GenericRecordOfRequiredParamsOfTicTacToeSlots>;
}) => {
  const recordOfTicTacToeSlotsWithDataAndIndex =
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    {} as RecordOfTicTacToeSlotsWithDataAndIndex<GenericRecordOfRequiredParamsOfTicTacToeSlots>;
  const indexedTicTacToeSlotsWithData: (typeof ticTacToeSlotsWithData)[keyof typeof ticTacToeSlotsWithData][] =
    [];

  keysOfTicTacToeSlotsInOrder.forEach((keyOfSlot, indexOfSlot) => {
    const slotWithData = ticTacToeSlotsWithData[keyOfSlot];
    recordOfTicTacToeSlotsWithDataAndIndex[keyOfSlot] = {
      indexOfSlot,
      slotWithData,
    } as RecordOfTicTacToeSlotsWithDataAndIndex<GenericRecordOfRequiredParamsOfTicTacToeSlots>[typeof keyOfSlot];
    indexedTicTacToeSlotsWithData.push(slotWithData);
  });
  return {
    indexedTicTacToeSlotsWithData,
    recordOfTicTacToeSlotsWithDataAndIndex,
  };
};

const keysOfTicTacToeSlotsInOrder = [
  "northwest",
  "north",
  "northeast",
  "west",
  "center",
  "east",
  "southwest",
  "south",
  "southeast",
] as const satisfies KeysOfSlotsInOrder<
  typeof recordOfRequiredParamsOfTicTacToeSlotsInWhichAllSlotsAreEmpty
>;

const {
  indexedTicTacToeSlotsWithData:
    indexedTicTacToeSlotsWithDataInWhichAllSlotsAreEmpty,
  recordOfTicTacToeSlotsWithDataAndIndex:
    recordOfTicTacToeSlotsWithDataAndIndexInWhichAllSlotsAreEmpty,
} = createIndexedTicTacToeSlotsWithData({
  keysOfTicTacToeSlotsInOrder,
  ticTacToeSlotsWithData: recordOfTicTacToeSlotsWithDataInWhichAllSlotsAreEmpty,
});

const {
  indexedTicTacToeSlotsWithData:
    indexedTicTacToeSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
  recordOfTicTacToeSlotsWithDataAndIndex:
    recordOfTicTacToeSlotsWithDataAndIndexInWhichSlotR0C0IsFilledByAlice,
} = createIndexedTicTacToeSlotsWithData({
  keysOfTicTacToeSlotsInOrder,
  ticTacToeSlotsWithData:
    recordOfTicTacToeSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
});

const {
  indexedTicTacToeSlotsWithData:
    indexedTicTacToeSlotsWithDataInWhichSlotR1C1IsFilledByAlice,
  recordOfTicTacToeSlotsWithDataAndIndex:
    recordOfTicTacToeSlotsWithDataAndIndexInWhichSlotR1C1IsFilledByAlice,
} = createIndexedTicTacToeSlotsWithData({
  keysOfTicTacToeSlotsInOrder,
  ticTacToeSlotsWithData:
    recordOfTicTacToeSlotsWithDataInWhichSlotR1C1IsFilledByAlice,
});

const {
  indexedTicTacToeSlotsWithData:
    indexedTicTacToeSlotsWithDataInWhichSlotR2C1IsFilledByAlice,
  recordOfTicTacToeSlotsWithDataAndIndex:
    recordOfTicTacToeSlotsWithDataAndIndexInWhichSlotR2C1IsFilledByAlice,
} = createIndexedTicTacToeSlotsWithData({
  keysOfTicTacToeSlotsInOrder,
  ticTacToeSlotsWithData:
    recordOfTicTacToeSlotsWithDataInWhichSlotR2C1IsFilledByAlice,
});

const {
  indexedTicTacToeSlotsWithData:
    indexedTicTacToeSlotsWithDataInWhichSlotR0C0AndR0C2AndR1C1AndR1C2AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR2C0AndR2C2AreFilledByBruno,
  recordOfTicTacToeSlotsWithDataAndIndex:
    recordOfTicTacToeSlotsWithDataAndIndexInWhichSlotR0C0AndR0C2AndR1C1AndR1C2AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR2C0AndR2C2AreFilledByBruno,
} = createIndexedTicTacToeSlotsWithData({
  keysOfTicTacToeSlotsInOrder,
  ticTacToeSlotsWithData:
    recordOfTicTacToeSlotsWithDataInWhichSlotR0C0AndR0C2AndR1C1AndR1C2AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR2C0AndR2C2AreFilledByBruno,
});

const {
  indexedTicTacToeSlotsWithData:
    indexedTicTacToeSlotsWithDataInWhichSlotR0C0AndR0C2AndR1C1AndR2C1AndR2C2AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno,
  recordOfTicTacToeSlotsWithDataAndIndex:
    recordOfTicTacToeSlotsWithDataAndIndexInWhichSlotR0C0AndR0C2AndR1C1AndR2C1AndR2C2AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno,
} = createIndexedTicTacToeSlotsWithData({
  keysOfTicTacToeSlotsInOrder,
  ticTacToeSlotsWithData:
    recordOfTicTacToeSlotsWithDataInWhichSlotR0C0AndR0C2AndR1C1AndR2C1AndR2C2AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno,
});

export type { TicTacToeSlotWithDataAndIndex };
export {
  indexedTicTacToeSlotsWithDataInWhichAllSlotsAreEmpty,
  indexedTicTacToeSlotsWithDataInWhichSlotR0C0AndR0C2AndR1C1AndR1C2AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR2C0AndR2C2AreFilledByBruno,
  indexedTicTacToeSlotsWithDataInWhichSlotR0C0AndR0C2AndR1C1AndR2C1AndR2C2AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno,
  indexedTicTacToeSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
  indexedTicTacToeSlotsWithDataInWhichSlotR1C1IsFilledByAlice,
  indexedTicTacToeSlotsWithDataInWhichSlotR2C1IsFilledByAlice,
  recordOfRequiredParamsOfTicTacToeSlotsInWhichAllSlotsAreEmpty,
  recordOfTicTacToeSlotsWithDataAndIndexInWhichAllSlotsAreEmpty,
  recordOfTicTacToeSlotsWithDataAndIndexInWhichSlotR0C0AndR0C2AndR1C1AndR1C2AndR2C1AreFilledByAliceAndR0C1AndR1C0AndR2C0AndR2C2AreFilledByBruno,
  recordOfTicTacToeSlotsWithDataAndIndexInWhichSlotR0C0AndR0C2AndR1C1AndR2C1AndR2C2AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno,
  recordOfTicTacToeSlotsWithDataAndIndexInWhichSlotR0C0IsFilledByAlice,
  recordOfTicTacToeSlotsWithDataAndIndexInWhichSlotR1C1IsFilledByAlice,
  recordOfTicTacToeSlotsWithDataAndIndexInWhichSlotR2C1IsFilledByAlice,
};
