import type { IndexOfSlot } from "@repo/game/Slot.js";

import type { ExtendedSnowballSlotsWithData } from "./setup.js";

import {
  type RecordOfRequiredParamsOfSnowballSlots,
  slotsWithDataInWhichAllSlotsAreEmpty,
  slotsWithDataInWhichSlotR0C0IsFilledByAlice,
  slotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  slotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  slotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
} from "./records.js";

type KeysOfSlotsInOrder<GenericExtendedSnowballSlotsWithData> =
  (keyof GenericExtendedSnowballSlotsWithData)[];

type SnowballSlotsWithDataAndIndex<
  ExtendedRecordOfRequiredParamsOfSnowballSlots extends
    RecordOfRequiredParamsOfSnowballSlots,
> = Record<
  KeysOfSlotsInOrder<
    ExtendedSnowballSlotsWithData<ExtendedRecordOfRequiredParamsOfSnowballSlots>
  >[number],
  SnowballSlotWithDataAndIndex<ExtendedRecordOfRequiredParamsOfSnowballSlots>
>;

interface SnowballSlotWithDataAndIndex<
  ExtendedRecordOfRequiredParamsOfSnowballSlots extends
    RecordOfRequiredParamsOfSnowballSlots,
> {
  indexOfSlot: IndexOfSlot;
  slot: ExtendedSnowballSlotsWithData<ExtendedRecordOfRequiredParamsOfSnowballSlots>[keyof ExtendedSnowballSlotsWithData<ExtendedRecordOfRequiredParamsOfSnowballSlots>];
}

const createIndexedSnowballSlotsWithData = <
  ExtendedRecordOfRequiredParamsOfSnowballSlots extends
    RecordOfRequiredParamsOfSnowballSlots,
>({
  keysOfSlotsInOrder,
  slotsWithData,
}: {
  keysOfSlotsInOrder: KeysOfSlotsInOrder<ExtendedRecordOfRequiredParamsOfSnowballSlots>;
  slotsWithData: ExtendedSnowballSlotsWithData<ExtendedRecordOfRequiredParamsOfSnowballSlots>;
}) => {
  const slotsWithDataAndIndex =
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    {} as SnowballSlotsWithDataAndIndex<ExtendedRecordOfRequiredParamsOfSnowballSlots>;
  const indexedSlotsWithData: (typeof slotsWithData)[keyof typeof slotsWithData][] =
    [];
  keysOfSlotsInOrder.forEach((keyOfSlot, indexOfSlot) => {
    const slot = slotsWithData[keyOfSlot];
    slotsWithDataAndIndex[keyOfSlot] = { indexOfSlot, slot };
    indexedSlotsWithData.push(slot);
  });
  return {
    indexedSlotsWithData,
    slotsWithDataAndIndex,
  };
};

const keysOfSlotsInOrder = [
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
  typeof slotsWithDataInWhichAllSlotsAreEmpty
>;

const {
  indexedSlotsWithData: indexedSlotsWithDataInWhichAllSlotsAreEmpty,
  slotsWithDataAndIndex: slotsWithDataAndIndexInWhichAllSlotsAreEmpty,
} = createIndexedSnowballSlotsWithData({
  keysOfSlotsInOrder,
  slotsWithData: slotsWithDataInWhichAllSlotsAreEmpty,
});

const {
  indexedSlotsWithData: indexedSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
  slotsWithDataAndIndex: slotsWithDataAndIndexInWhichSlotR0C0IsFilledByAlice,
} = createIndexedSnowballSlotsWithData({
  keysOfSlotsInOrder,
  slotsWithData: slotsWithDataInWhichSlotR0C0IsFilledByAlice,
});

const {
  indexedSlotsWithData:
    indexedSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  slotsWithDataAndIndex:
    slotsWithDataAndIndexInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
} = createIndexedSnowballSlotsWithData({
  keysOfSlotsInOrder,
  slotsWithData:
    slotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
});

const {
  indexedSlotsWithData:
    indexedSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  slotsWithDataAndIndex:
    slotsWithDataAndIndexInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
} = createIndexedSnowballSlotsWithData({
  keysOfSlotsInOrder,
  slotsWithData:
    slotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
});

const {
  indexedSlotsWithData:
    indexedSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
  slotsWithDataAndIndex:
    slotsWithDataAndIndexInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
} = createIndexedSnowballSlotsWithData({
  keysOfSlotsInOrder,
  slotsWithData:
    slotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
});

export {
  indexedSlotsWithDataInWhichAllSlotsAreEmpty,
  indexedSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
  indexedSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  indexedSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  indexedSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
  slotsWithDataAndIndexInWhichAllSlotsAreEmpty,
  slotsWithDataAndIndexInWhichSlotR0C0IsFilledByAlice,
  slotsWithDataAndIndexInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  slotsWithDataAndIndexInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  slotsWithDataAndIndexInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
};
