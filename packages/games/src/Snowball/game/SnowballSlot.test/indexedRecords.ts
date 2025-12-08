import type {
  RecordOfSlotsWithDataAndIndex,
  SlotWithDataAndIndex,
} from "@repo/game/Slot.test/setup.js";

import type { SnowballSlot } from "../SnowballSlot.js";
import type {
  RecordOfRequiredParamsOfSnowballSlots,
  RecordOfSnowballSlotsWithData,
  RequiredParamsOfSnowballSlot,
  SnowballSlotWithData,
} from "./setup.js";

import {
  type recordOfRequiredParamsOfSnowballSlotsInWhichAllSlotsAreEmpty,
  recordOfSnowballSlotsWithDataInWhichAllSlotsAreEmpty,
  recordOfSnowballSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
  recordOfSnowballSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  recordOfSnowballSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  recordOfSnowballSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
} from "./records.js";

type KeysOfSlotsInOrder<
  GenericRecordOfRequiredParamsOfSnowballSlots extends
    RecordOfRequiredParamsOfSnowballSlots,
> = (keyof GenericRecordOfRequiredParamsOfSnowballSlots)[];

type RecordOfSnowballSlotsWithDataAndIndex<
  GenericRecordOfRequiredParamsOfSnowballSlots extends
    RecordOfRequiredParamsOfSnowballSlots,
> = RecordOfSlotsWithDataAndIndex<
  SnowballSlot,
  RequiredParamsOfSnowballSlot,
  GenericRecordOfRequiredParamsOfSnowballSlots,
  SnowballSlotWithData
>;

type SnowballSlotWithDataAndIndex = SlotWithDataAndIndex<
  SnowballSlot,
  RequiredParamsOfSnowballSlot,
  SnowballSlotWithData
>;

const createIndexedSnowballSlotsWithData = <
  GenericRecordOfRequiredParamsOfSnowballSlots extends
    RecordOfRequiredParamsOfSnowballSlots,
>({
  keysOfSnowballSlotsInOrder,
  snowballSlotsWithData,
}: {
  keysOfSnowballSlotsInOrder: KeysOfSlotsInOrder<GenericRecordOfRequiredParamsOfSnowballSlots>;
  snowballSlotsWithData: RecordOfSnowballSlotsWithData<GenericRecordOfRequiredParamsOfSnowballSlots>;
}) => {
  const recordOfSnowballSlotsWithDataAndIndex =
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    {} as RecordOfSnowballSlotsWithDataAndIndex<GenericRecordOfRequiredParamsOfSnowballSlots>;
  const indexedSnowballSlotsWithData: (typeof snowballSlotsWithData)[keyof typeof snowballSlotsWithData][] =
    [];

  keysOfSnowballSlotsInOrder.forEach((keyOfSlot, indexOfSlot) => {
    const slotWithData = snowballSlotsWithData[keyOfSlot];
    recordOfSnowballSlotsWithDataAndIndex[keyOfSlot] = {
      indexOfSlot,
      slotWithData,
    } as RecordOfSnowballSlotsWithDataAndIndex<GenericRecordOfRequiredParamsOfSnowballSlots>[typeof keyOfSlot];
    indexedSnowballSlotsWithData.push(slotWithData);
  });
  return {
    indexedSnowballSlotsWithData,
    recordOfSnowballSlotsWithDataAndIndex,
  };
};

const keysOfSnowballSlotsInOrder = [
  // Row 0
  "northwestOfNorthwest",
  "northOfNorthwest",
  "northeastOfNorthwest",
  "northwestOfNorth",
  "northOfNorth",
  "northeastOfNorth",
  "northwestOfNortheast",
  "northOfNortheast",
  "northeastOfNortheast",

  // Row 1
  "westOfNorthwest",
  "centerOfNorthwest",
  "eastOfNorthwest",
  "westOfNorth",
  "centerOfNorth",
  "eastOfNorth",
  "westOfNortheast",
  "centerOfNortheast",
  "eastOfNortheast",

  // Row 2
  "southwestOfNorthwest",
  "southOfNorthwest",
  "southeastOfNorthwest",
  "southwestOfNorth",
  "southOfNorth",
  "southeastOfNorth",
  "southwestOfNortheast",
  "southOfNortheast",
  "southeastOfNortheast",

  // Row 3
  "northwestOfWest",
  "northOfWest",
  "northeastOfWest",
  "northwestOfCenter",
  "northOfCenter",
  "northeastOfCenter",
  "northwestOfEast",
  "northOfEast",
  "northeastOfEast",

  // Row 4
  "westOfWest",
  "centerOfWest",
  "eastOfWest",
  "westOfCenter",
  "centerOfCenter",
  "eastOfCenter",
  "westOfEast",
  "centerOfEast",
  "eastOfEast",

  // Row 5
  "southwestOfWest",
  "southOfWest",
  "southeastOfWest",
  "southwestOfCenter",
  "southOfCenter",
  "southeastOfCenter",
  "southwestOfEast",
  "southOfEast",
  "southeastOfEast",

  // Row 6
  "northwestOfSouthwest",
  "northOfSouthwest",
  "northeastOfSouthwest",
  "northwestOfSouth",
  "northOfSouth",
  "northeastOfSouth",
  "northwestOfSoutheast",
  "northOfSoutheast",
  "northeastOfSoutheast",

  // Row 7
  "westOfSouthwest",
  "centerOfSouthwest",
  "eastOfSouthwest",
  "westOfSouth",
  "centerOfSouth",
  "eastOfSouth",
  "westOfSoutheast",
  "centerOfSoutheast",
  "eastOfSoutheast",

  // Row 8
  "southwestOfSouthwest",
  "southOfSouthwest",
  "southeastOfSouthwest",
  "southwestOfSouth",
  "southOfSouth",
  "southeastOfSouth",
  "southwestOfSoutheast",
  "southOfSoutheast",
  "southeastOfSoutheast",
] as const satisfies KeysOfSlotsInOrder<
  typeof recordOfRequiredParamsOfSnowballSlotsInWhichAllSlotsAreEmpty
>;

const {
  indexedSnowballSlotsWithData:
    indexedSnowballSlotsWithDataInWhichAllSlotsAreEmpty,
  recordOfSnowballSlotsWithDataAndIndex:
    recordOfSnowballSlotsWithDataAndIndexInWhichAllSlotsAreEmpty,
} = createIndexedSnowballSlotsWithData({
  keysOfSnowballSlotsInOrder,
  snowballSlotsWithData: recordOfSnowballSlotsWithDataInWhichAllSlotsAreEmpty,
});

const {
  indexedSnowballSlotsWithData:
    indexedSnowballSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
  recordOfSnowballSlotsWithDataAndIndex:
    recordOfSnowballSlotsWithDataAndIndexInWhichSlotR0C0IsFilledByAlice,
} = createIndexedSnowballSlotsWithData({
  keysOfSnowballSlotsInOrder,
  snowballSlotsWithData:
    recordOfSnowballSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
});

const {
  indexedSnowballSlotsWithData:
    indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  recordOfSnowballSlotsWithDataAndIndex:
    recordOfSnowballSlotsWithDataAndIndexInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
} = createIndexedSnowballSlotsWithData({
  keysOfSnowballSlotsInOrder,
  snowballSlotsWithData:
    recordOfSnowballSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
});

const {
  indexedSnowballSlotsWithData:
    indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  recordOfSnowballSlotsWithDataAndIndex:
    recordOfSnowballSlotsWithDataAndIndexInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
} = createIndexedSnowballSlotsWithData({
  keysOfSnowballSlotsInOrder,
  snowballSlotsWithData:
    recordOfSnowballSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
});

const {
  indexedSnowballSlotsWithData:
    indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
  recordOfSnowballSlotsWithDataAndIndex:
    recordOfSnowballSlotsWithDataAndIndexInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
} = createIndexedSnowballSlotsWithData({
  keysOfSnowballSlotsInOrder,
  snowballSlotsWithData:
    recordOfSnowballSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
});

export type { SnowballSlotWithDataAndIndex };
export {
  indexedSnowballSlotsWithDataInWhichAllSlotsAreEmpty,
  indexedSnowballSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
  indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
  recordOfSnowballSlotsWithDataAndIndexInWhichAllSlotsAreEmpty,
  recordOfSnowballSlotsWithDataAndIndexInWhichSlotR0C0IsFilledByAlice,
  recordOfSnowballSlotsWithDataAndIndexInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  recordOfSnowballSlotsWithDataAndIndexInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  recordOfSnowballSlotsWithDataAndIndexInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
};
