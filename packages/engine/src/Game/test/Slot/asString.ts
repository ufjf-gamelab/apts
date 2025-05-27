import {
  type DefinitionsOfFieldAsString,
  type DefinitionsOfObjectAsString,
  getObjectAsString,
  type ShowNullAs,
} from "../asString.js";
import type TestingSlot from "../Slot.js";

interface DefinitionsOfSlotAsString extends DefinitionsOfObjectAsString {
  fields: [
    {
      definition: DefinitionsOfFieldAsString & {
        showNullAs: ShowNullAs;
      };
      key: "indexOfOccupyingPlayer";
    },
  ];
}

const defaultDefinitionsOfSlotAsString: DefinitionsOfSlotAsString = {
  fields: [
    {
      definition: {
        showNullAs: "empty",
        visibility: "hideKey",
      },
      key: "indexOfOccupyingPlayer",
    },
  ],
  surround: false,
};

const getSlotAsString = (
  slot: TestingSlot,
  definitions = defaultDefinitionsOfSlotAsString,
): string =>
  getObjectAsString(
    {
      indexOfOccupyingPlayer: slot.getIndexOfOccupyingPlayer(),
    },
    definitions,
  );

const getSlotsAsString = (
  slots: readonly TestingSlot[],
  definitions = defaultDefinitionsOfSlotAsString,
): string => slots.map(slot => getSlotAsString(slot, definitions)).join(", ");

export { getSlotsAsString };
