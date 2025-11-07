import {
  slotsWithData,
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

const getIndexOfSlot = ({ keyOfSlot }: { keyOfSlot: string }) => {
  const indexOfSlot = getIndexedSnowballSlotsWithData().findIndex(
    (slot) => slot.keyOfSlot === keyOfSlot,
  );
  if (indexOfSlot === NOT_FOUND_INDEX) {
    throw new Error(`There is no slot with the key ${keyOfSlot}.`);
  }
  return indexOfSlot;
};

export { getIndexedSnowballSlotsWithData, getIndexOfSlot };
