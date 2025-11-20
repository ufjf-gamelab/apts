import {
  slotsWithData,
  slotsWithDataForUnitTest,
  type SnowballSlotWithData,
} from "../Slot.test/setup.js";

const NOT_FOUND_INDEX = -1;

// eslint-disable-next-line max-lines-per-function
const getIndexedSnowballSlotsWithData = () =>
  [
    // Row 0
    slotsWithData.northwestOfNorthwest,
    slotsWithData.northOfNorthwest,
    slotsWithData.northeastOfNorthwest,
    slotsWithData.northwestOfNorth,
    slotsWithData.northOfNorth,
    slotsWithData.northeastOfNorth,
    slotsWithData.northwestOfNortheast,
    slotsWithData.northOfNortheast,
    slotsWithData.northeastOfNortheast,

    // Row 1
    slotsWithData.westOfNorthwest,
    slotsWithData.centerOfNorthwest,
    slotsWithData.eastOfNorthwest,
    slotsWithData.westOfNorth,
    slotsWithData.centerOfNorth,
    slotsWithData.eastOfNorth,
    slotsWithData.westOfNortheast,
    slotsWithData.centerOfNortheast,
    slotsWithData.eastOfNortheast,

    // Row 2
    slotsWithData.southwestOfNorthwest,
    slotsWithData.southOfNorthwest,
    slotsWithData.southeastOfNorthwest,
    slotsWithData.southwestOfNorth,
    slotsWithData.southOfNorth,
    slotsWithData.southeastOfNorth,
    slotsWithData.southwestOfNortheast,
    slotsWithData.southOfNortheast,
    slotsWithData.southeastOfNortheast,

    // Row 3
    slotsWithData.northwestOfWest,
    slotsWithData.northOfWest,
    slotsWithData.northeastOfWest,
    slotsWithData.northwestOfCenter,
    slotsWithData.northOfCenter,
    slotsWithData.northeastOfCenter,
    slotsWithData.northwestOfEast,
    slotsWithData.northOfEast,
    slotsWithData.northeastOfEast,

    // Row 4
    slotsWithData.westOfWest,
    slotsWithData.centerOfWest,
    slotsWithData.eastOfWest,
    slotsWithData.westOfCenter,
    slotsWithData.centerOfCenter,
    slotsWithData.eastOfCenter,
    slotsWithData.westOfEast,
    slotsWithData.centerOfEast,
    slotsWithData.eastOfEast,

    // Row 5
    slotsWithData.southwestOfWest,
    slotsWithData.southOfWest,
    slotsWithData.southeastOfWest,
    slotsWithData.southwestOfCenter,
    slotsWithData.southOfCenter,
    slotsWithData.southeastOfCenter,
    slotsWithData.southwestOfEast,
    slotsWithData.southOfEast,
    slotsWithData.southeastOfEast,

    // Row 6
    slotsWithData.northwestOfSouthwest,
    slotsWithData.northOfSouthwest,
    slotsWithData.northeastOfSouthwest,
    slotsWithData.northwestOfSouth,
    slotsWithData.northOfSouth,
    slotsWithData.northeastOfSouth,
    slotsWithData.northwestOfSoutheast,
    slotsWithData.northOfSoutheast,
    slotsWithData.northeastOfSoutheast,

    // Row 7
    slotsWithData.westOfSouthwest,
    slotsWithData.centerOfSouthwest,
    slotsWithData.eastOfSouthwest,
    slotsWithData.westOfSouth,
    slotsWithData.centerOfSouth,
    slotsWithData.eastOfSouth,
    slotsWithData.westOfSoutheast,
    slotsWithData.centerOfSoutheast,
    slotsWithData.eastOfSoutheast,

    // Row 8
    slotsWithData.southwestOfSouthwest,
    slotsWithData.southOfSouthwest,
    slotsWithData.southeastOfSouthwest,
    slotsWithData.southwestOfSouth,
    slotsWithData.southOfSouth,
    slotsWithData.southeastOfSouth,
    slotsWithData.southwestOfSoutheast,
    slotsWithData.southOfSoutheast,
    slotsWithData.southeastOfSoutheast,
  ] satisfies SnowballSlotWithData[];

// eslint-disable-next-line max-lines-per-function
const getIndexedSnowballSlotsWithDataForUnitTest = () =>
  [
    // Row 0
    slotsWithDataForUnitTest.northwestOfNorthwest,
    slotsWithDataForUnitTest.northOfNorthwest,
    slotsWithDataForUnitTest.northeastOfNorthwest,
    slotsWithDataForUnitTest.northwestOfNorth,
    slotsWithDataForUnitTest.northOfNorth,
    slotsWithDataForUnitTest.northeastOfNorth,
    slotsWithDataForUnitTest.northwestOfNortheast,
    slotsWithDataForUnitTest.northOfNortheast,
    slotsWithDataForUnitTest.northeastOfNortheast,

    // Row 1
    slotsWithDataForUnitTest.westOfNorthwest,
    slotsWithDataForUnitTest.centerOfNorthwest,
    slotsWithDataForUnitTest.eastOfNorthwest,
    slotsWithDataForUnitTest.westOfNorth,
    slotsWithDataForUnitTest.centerOfNorth,
    slotsWithDataForUnitTest.eastOfNorth,
    slotsWithDataForUnitTest.westOfNortheast,
    slotsWithDataForUnitTest.centerOfNortheast,
    slotsWithDataForUnitTest.eastOfNortheast,

    // Row 2
    slotsWithDataForUnitTest.southwestOfNorthwest,
    slotsWithDataForUnitTest.southOfNorthwest,
    slotsWithDataForUnitTest.southeastOfNorthwest,
    slotsWithDataForUnitTest.southwestOfNorth,
    slotsWithDataForUnitTest.southOfNorth,
    slotsWithDataForUnitTest.southeastOfNorth,
    slotsWithDataForUnitTest.southwestOfNortheast,
    slotsWithDataForUnitTest.southOfNortheast,
    slotsWithDataForUnitTest.southeastOfNortheast,

    // Row 3
    slotsWithDataForUnitTest.northwestOfWest,
    slotsWithDataForUnitTest.northOfWest,
    slotsWithDataForUnitTest.northeastOfWest,
    slotsWithDataForUnitTest.northwestOfCenter,
    slotsWithDataForUnitTest.northOfCenter,
    slotsWithDataForUnitTest.northeastOfCenter,
    slotsWithDataForUnitTest.northwestOfEast,
    slotsWithDataForUnitTest.northOfEast,
    slotsWithDataForUnitTest.northeastOfEast,

    // Row 4
    slotsWithDataForUnitTest.westOfWest,
    slotsWithDataForUnitTest.centerOfWest,
    slotsWithDataForUnitTest.eastOfWest,
    slotsWithDataForUnitTest.westOfCenter,
    slotsWithDataForUnitTest.centerOfCenter,
    slotsWithDataForUnitTest.eastOfCenter,
    slotsWithDataForUnitTest.westOfEast,
    slotsWithDataForUnitTest.centerOfEast,
    slotsWithDataForUnitTest.eastOfEast,

    // Row 5
    slotsWithDataForUnitTest.southwestOfWest,
    slotsWithDataForUnitTest.southOfWest,
    slotsWithDataForUnitTest.southeastOfWest,
    slotsWithDataForUnitTest.southwestOfCenter,
    slotsWithDataForUnitTest.southOfCenter,
    slotsWithDataForUnitTest.southeastOfCenter,
    slotsWithDataForUnitTest.southwestOfEast,
    slotsWithDataForUnitTest.southOfEast,
    slotsWithDataForUnitTest.southeastOfEast,

    // Row 6
    slotsWithDataForUnitTest.northwestOfSouthwest,
    slotsWithDataForUnitTest.northOfSouthwest,
    slotsWithDataForUnitTest.northeastOfSouthwest,
    slotsWithDataForUnitTest.northwestOfSouth,
    slotsWithDataForUnitTest.northOfSouth,
    slotsWithDataForUnitTest.northeastOfSouth,
    slotsWithDataForUnitTest.northwestOfSoutheast,
    slotsWithDataForUnitTest.northOfSoutheast,
    slotsWithDataForUnitTest.northeastOfSoutheast,

    // Row 7
    slotsWithDataForUnitTest.westOfSouthwest,
    slotsWithDataForUnitTest.centerOfSouthwest,
    slotsWithDataForUnitTest.eastOfSouthwest,
    slotsWithDataForUnitTest.westOfSouth,
    slotsWithDataForUnitTest.centerOfSouth,
    slotsWithDataForUnitTest.eastOfSouth,
    slotsWithDataForUnitTest.westOfSoutheast,
    slotsWithDataForUnitTest.centerOfSoutheast,
    slotsWithDataForUnitTest.eastOfSoutheast,

    // Row 8
    slotsWithDataForUnitTest.southwestOfSouthwest,
    slotsWithDataForUnitTest.southOfSouthwest,
    slotsWithDataForUnitTest.southeastOfSouthwest,
    slotsWithDataForUnitTest.southwestOfSouth,
    slotsWithDataForUnitTest.southOfSouth,
    slotsWithDataForUnitTest.southeastOfSouth,
    slotsWithDataForUnitTest.southwestOfSoutheast,
    slotsWithDataForUnitTest.southOfSoutheast,
    slotsWithDataForUnitTest.southeastOfSoutheast,
  ] satisfies SnowballSlotWithData[];

const getIndexOfSlot = ({
  indexedSlots,
  keyOfSlot,
}: {
  indexedSlots: SnowballSlotWithData[];
  keyOfSlot: string;
}) => {
  const indexOfSlot = indexedSlots.findIndex(
    (slot) => slot.keyOfSlot === keyOfSlot,
  );
  if (indexOfSlot === NOT_FOUND_INDEX) {
    throw new Error(`There is no slot with the key ${keyOfSlot}.`);
  }
  return indexOfSlot;
};

const getIndexOfSlotOnDefaultSlots = ({
  keyOfSlot,
}: Pick<Parameters<typeof getIndexOfSlot>[0], "keyOfSlot">) =>
  getIndexOfSlot({
    indexedSlots: getIndexedSnowballSlotsWithData(),
    keyOfSlot,
  });

const getIndexOfSlotOnUnitTestSlots = ({
  keyOfSlot,
}: Pick<Parameters<typeof getIndexOfSlot>[0], "keyOfSlot">) =>
  getIndexOfSlot({
    indexedSlots: getIndexedSnowballSlotsWithDataForUnitTest(),
    keyOfSlot,
  });

export {
  getIndexedSnowballSlotsWithData,
  getIndexedSnowballSlotsWithDataForUnitTest,
  getIndexOfSlot,
  getIndexOfSlotOnDefaultSlots,
  getIndexOfSlotOnUnitTestSlots,
};
