import type {
  RecordOfSlotsWithDataAndIndex,
  SlotWithDataAndIndex,
} from "@repo/game/Slot.test/setup.js";

import type { ConnectFourSlot } from "../Slot.js";
import type {
  ConnectFourSlotWithData,
  RecordOfConnectFourSlotsWithData,
  RecordOfRequiredParamsOfConnectFourSlots,
  RequiredParamsOfConnectFourSlot,
} from "./setup.js";

import {
  recordOfConnectFourSlotsWithDataInWhichAllSlotsAreEmpty,
  recordOfConnectFourSlotsWithDataInWhichSlotR5C0IsFilledByAlice,
  recordOfConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C0AndR1C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C1AreFilledByBruno,
  recordOfConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C1AreFilledByBruno,
  recordOfConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AndR0C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
  recordOfConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
} from "./records.js";

type ConnectFourSlotWithDataAndIndex = SlotWithDataAndIndex<
  ConnectFourSlot,
  RequiredParamsOfConnectFourSlot,
  ConnectFourSlotWithData
>;

type KeysOfSlotsInOrder<
  GenericRecordOfRequiredParamsOfConnectFourSlots extends
    RecordOfRequiredParamsOfConnectFourSlots,
> = (keyof GenericRecordOfRequiredParamsOfConnectFourSlots)[];

type RecordOfConnectFourSlotsWithDataAndIndex<
  GenericRecordOfRequiredParamsOfConnectFourSlots extends
    RecordOfRequiredParamsOfConnectFourSlots,
> = RecordOfSlotsWithDataAndIndex<
  ConnectFourSlot,
  RequiredParamsOfConnectFourSlot,
  GenericRecordOfRequiredParamsOfConnectFourSlots,
  ConnectFourSlotWithData
>;

const createIndexedConnectFourSlotsWithData = <
  GenericRecordOfRequiredParamsOfConnectFourSlots extends
    RecordOfRequiredParamsOfConnectFourSlots,
>({
  connectFourSlotsWithData,
  keysOfConnectFourSlotsInOrder,
}: {
  connectFourSlotsWithData: RecordOfConnectFourSlotsWithData<GenericRecordOfRequiredParamsOfConnectFourSlots>;
  keysOfConnectFourSlotsInOrder: KeysOfSlotsInOrder<GenericRecordOfRequiredParamsOfConnectFourSlots>;
}) => {
  const recordOfConnectFourSlotsWithDataAndIndex =
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    {} as RecordOfConnectFourSlotsWithDataAndIndex<GenericRecordOfRequiredParamsOfConnectFourSlots>;
  const indexedConnectFourSlotsWithData: (typeof connectFourSlotsWithData)[keyof typeof connectFourSlotsWithData][] =
    [];

  keysOfConnectFourSlotsInOrder.forEach((keyOfSlot, indexOfSlot) => {
    const slotWithData = connectFourSlotsWithData[keyOfSlot];
    recordOfConnectFourSlotsWithDataAndIndex[keyOfSlot] = {
      indexOfSlot,
      slotWithData,
    } as RecordOfConnectFourSlotsWithDataAndIndex<GenericRecordOfRequiredParamsOfConnectFourSlots>[typeof keyOfSlot];
    indexedConnectFourSlotsWithData.push(slotWithData);
  });
  return {
    indexedConnectFourSlotsWithData,
    recordOfConnectFourSlotsWithDataAndIndex,
  };
};

const keysOfConnectFourSlotsInOrder = [
  "r0c0",
  "r0c1",
  "r0c2",
  "r0c3",
  "r0c4",
  "r0c5",
  "r0c6",
  "r1c0",
  "r1c1",
  "r1c2",
  "r1c3",
  "r1c4",
  "r1c5",
  "r1c6",
  "r2c0",
  "r2c1",
  "r2c2",
  "r2c3",
  "r2c4",
  "r2c5",
  "r2c6",
  "r3c0",
  "r3c1",
  "r3c2",
  "r3c3",
  "r3c4",
  "r3c5",
  "r3c6",
  "r4c0",
  "r4c1",
  "r4c2",
  "r4c3",
  "r4c4",
  "r4c5",
  "r4c6",
  "r5c0",
  "r5c1",
  "r5c2",
  "r5c3",
  "r5c4",
  "r5c5",
  "r5c6",
] as const satisfies KeysOfSlotsInOrder<RecordOfRequiredParamsOfConnectFourSlots>;

const {
  indexedConnectFourSlotsWithData:
    indexedConnectFourSlotsWithDataInWhichAllSlotsAreEmpty,
  recordOfConnectFourSlotsWithDataAndIndex:
    recordOfConnectFourSlotsWithDataAndIndexInWhichAllSlotsAreEmpty,
} = createIndexedConnectFourSlotsWithData({
  connectFourSlotsWithData:
    recordOfConnectFourSlotsWithDataInWhichAllSlotsAreEmpty,
  keysOfConnectFourSlotsInOrder,
});

const {
  indexedConnectFourSlotsWithData:
    indexedConnectFourSlotsWithDataInWhichSlotR5C0IsFilledByAlice,
  recordOfConnectFourSlotsWithDataAndIndex:
    recordOfConnectFourSlotsWithDataAndIndexInWhichSlotR5C0IsFilledByAlice,
} = createIndexedConnectFourSlotsWithData({
  connectFourSlotsWithData:
    recordOfConnectFourSlotsWithDataInWhichSlotR5C0IsFilledByAlice,
  keysOfConnectFourSlotsInOrder,
});

const {
  indexedConnectFourSlotsWithData:
    indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C0AndR1C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C1AreFilledByBruno,
  recordOfConnectFourSlotsWithDataAndIndex:
    recordOfConnectFourSlotsWithDataAndIndexInWhichSlotsR5C0AndR4C0AndR3C0AndR2C0AndR1C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C1AreFilledByBruno,
} = createIndexedConnectFourSlotsWithData({
  connectFourSlotsWithData:
    recordOfConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C0AndR1C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C1AreFilledByBruno,
  keysOfConnectFourSlotsInOrder,
});

const {
  indexedConnectFourSlotsWithData:
    indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C1AreFilledByBruno,
  recordOfConnectFourSlotsWithDataAndIndex:
    recordOfConnectFourSlotsWithDataAndIndexInWhichSlotsR5C0AndR4C0AndR3C0AndR2C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C1AreFilledByBruno,
} = createIndexedConnectFourSlotsWithData({
  connectFourSlotsWithData:
    recordOfConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C1AreFilledByBruno,
  keysOfConnectFourSlotsInOrder,
});

const {
  indexedConnectFourSlotsWithData:
    indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AndR0C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
  recordOfConnectFourSlotsWithDataAndIndex:
    recordOfConnectFourSlotsWithDataAndIndexInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AndR0C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
} = createIndexedConnectFourSlotsWithData({
  connectFourSlotsWithData:
    recordOfConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AndR0C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
  keysOfConnectFourSlotsInOrder,
});

const {
  indexedConnectFourSlotsWithData:
    indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
  recordOfConnectFourSlotsWithDataAndIndex:
    recordOfConnectFourSlotsWithDataAndIndexInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
} = createIndexedConnectFourSlotsWithData({
  connectFourSlotsWithData:
    recordOfConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
  keysOfConnectFourSlotsInOrder,
});

export type { ConnectFourSlotWithDataAndIndex };
export {
  indexedConnectFourSlotsWithDataInWhichAllSlotsAreEmpty,
  indexedConnectFourSlotsWithDataInWhichSlotR5C0IsFilledByAlice,
  indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C0AndR1C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C1AreFilledByBruno,
  indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C1AreFilledByBruno,
  indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AndR0C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
  indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
  recordOfConnectFourSlotsWithDataAndIndexInWhichAllSlotsAreEmpty,
  recordOfConnectFourSlotsWithDataAndIndexInWhichSlotR5C0IsFilledByAlice,
  recordOfConnectFourSlotsWithDataAndIndexInWhichSlotsR5C0AndR4C0AndR3C0AndR2C0AndR1C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C1AreFilledByBruno,
  recordOfConnectFourSlotsWithDataAndIndexInWhichSlotsR5C0AndR4C0AndR3C0AndR2C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C1AreFilledByBruno,
  recordOfConnectFourSlotsWithDataAndIndexInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AndR0C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
  recordOfConnectFourSlotsWithDataAndIndexInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
};
