import type { Integer } from "@repo/engine_core/types.js";

import type { ExtendedSnowballSlotsWithData } from "./setup.js";

import {
  type RecordOfRequiredSnowballSlotParams,
  slotsWithDataInWhichAllSlotsAreEmpty,
  slotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
} from "./records.js";

type KeysOfSlotsInOrder<GenericExtendedSnowballSlotsWithData> =
  (keyof GenericExtendedSnowballSlotsWithData)[];

type SnowballSlotsWithDataAndIndex<
  ExtendedRecordOfRequiredSnowballSlotParams extends
    RecordOfRequiredSnowballSlotParams,
> = Record<
  KeysOfSlotsInOrder<
    ExtendedSnowballSlotsWithData<ExtendedRecordOfRequiredSnowballSlotParams>
  >[number],
  SnowballSlotWithDataAndIndex<ExtendedRecordOfRequiredSnowballSlotParams>
>;

interface SnowballSlotWithDataAndIndex<
  ExtendedRecordOfRequiredSnowballSlotParams extends
    RecordOfRequiredSnowballSlotParams,
> {
  index: Integer;
  slot: ExtendedSnowballSlotsWithData<ExtendedRecordOfRequiredSnowballSlotParams>[keyof ExtendedSnowballSlotsWithData<ExtendedRecordOfRequiredSnowballSlotParams>];
}

const createIndexedSnowballSlotsWithData = <
  ExtendedRecordOfRequiredSnowballSlotParams extends
    RecordOfRequiredSnowballSlotParams,
>({
  keysOfSlotsInOrder,
  slotsWithData,
}: {
  keysOfSlotsInOrder: KeysOfSlotsInOrder<ExtendedRecordOfRequiredSnowballSlotParams>;
  slotsWithData: ExtendedSnowballSlotsWithData<ExtendedRecordOfRequiredSnowballSlotParams>;
}) => {
  const store =
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    {} as SnowballSlotsWithDataAndIndex<ExtendedRecordOfRequiredSnowballSlotParams>;
  const indexed: (typeof slotsWithData)[keyof typeof slotsWithData][] = [];
  keysOfSlotsInOrder.forEach((key, index) => {
    const slot = slotsWithData[key];
    store[key] = { index, slot };
    indexed.push(slot);
  });
  return {
    indexedSnowballSlotsWithData: indexed,
    snowballSlotsWithDataAndIndex: store,
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
  typeof slotsWithDataInWhichAllSlotsAreEmpty
>;

const {
  indexedSnowballSlotsWithData:
    indexedSnowballSlotsWithDataInWhichAllSlotsAreEmpty,
  snowballSlotsWithDataAndIndex:
    snowballSlotsWithDataAndIndexInWhichAllSlotsAreEmpty,
} = createIndexedSnowballSlotsWithData({
  keysOfSlotsInOrder: keysOfSnowballSlotsInOrder,
  slotsWithData: slotsWithDataInWhichAllSlotsAreEmpty,
});

const {
  indexedSnowballSlotsWithData:
    indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
  snowballSlotsWithDataAndIndex:
    snowballSlotsWithDataAndIndexInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
} = createIndexedSnowballSlotsWithData({
  keysOfSlotsInOrder: keysOfSnowballSlotsInOrder,
  slotsWithData:
    slotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
});

export {
  indexedSnowballSlotsWithDataInWhichAllSlotsAreEmpty,
  indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
  snowballSlotsWithDataAndIndexInWhichAllSlotsAreEmpty,
  snowballSlotsWithDataAndIndexInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
};
