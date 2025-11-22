import { type SnowballSlotWithData } from "../Slot.test/setup.js";

const NOT_FOUND_INDEX = -1;

// TODO: maybe remove this
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

export { getIndexOfSlot };
