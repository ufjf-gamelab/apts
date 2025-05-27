import type { Integer } from "../../../types.js";
import type {
  getIndexesOfShape,
  getIndexOfPlayerWhoIsOccupyingShape,
} from "../Shape.js";
import TestingSlot from "../Slot.js";
import {
  convertCreatedSlotsAndRelatedDataToSlots,
  createSlotsForInitialState,
  type IndexOfTestingSlot,
} from "../Slot/setup.js";
import { INITIAL_POINTS } from "../State.js";

const ONE_POINT: Integer = 1;

enum AmountOfPoints {
  Five = 5,
  Nine = 9,
  One = ONE_POINT,
  Seven = 7,
  Two = 2,
  Zero = INITIAL_POINTS,
}

interface TestShapeParams {
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  testDescriptor: string;
}

const fillSlot = ({
  indexOfPlayer,
  indexOfSlot,
  slots,
}: {
  indexOfPlayer: ReturnType<typeof getIndexOfPlayerWhoIsOccupyingShape>;
  indexOfSlot: IndexOfTestingSlot;
  slots: TestingSlot[];
}): void => {
  slots[indexOfSlot] = new TestingSlot({
    indexOfOccupyingPlayer: indexOfPlayer,
  });
};

const fillSlots = ({
  indexesOfSlots,
  indexOfPlayer,
  slots,
}: {
  indexesOfSlots: readonly IndexOfTestingSlot[];
  indexOfPlayer: ReturnType<typeof getIndexOfPlayerWhoIsOccupyingShape>;
  slots: TestingSlot[];
}): void => {
  indexesOfSlots.forEach(indexOfSlot => {
    fillSlot({
      indexOfPlayer,
      indexOfSlot,
      slots,
    });
  });
};

const getSlotsFilledByPlayer = ({
  indexesOfSlots,
  indexOfPlayer,
}: {
  indexesOfSlots: IndexOfTestingSlot[];
  indexOfPlayer: ReturnType<typeof getIndexOfPlayerWhoIsOccupyingShape>;
}): TestingSlot[] => {
  const slots = convertCreatedSlotsAndRelatedDataToSlots(
    createSlotsForInitialState(),
  );

  fillSlots({
    indexesOfSlots,
    indexOfPlayer,
    slots,
  });

  return slots;
};

const indexesOfShapeAsString = (
  indexesOfShape: ReturnType<typeof getIndexesOfShape>,
): string => indexesOfShape.join(", ");

export type { TestShapeParams };
export {
  AmountOfPoints,
  fillSlots,
  getSlotsFilledByPlayer,
  indexesOfShapeAsString,
  ONE_POINT,
};
