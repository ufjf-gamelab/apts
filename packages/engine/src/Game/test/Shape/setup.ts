import type { Integer } from "../../../types.js";
import type { getIndexOfPlayerWhoIsOccupyingShape } from "../Shape.js";
import TestingSlot from "../Slot.js";
import {
  convertCreatedSlotsAndRelatedDataToSlots,
  createSlotsForInitialState,
  type IndexOfTestingSlot,
} from "../Slot/setup.js";

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
  indexesOfSlots: IndexOfTestingSlot[];
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

export type { TestShapeParams };
export { fillSlots, getSlotsFilledByPlayer };
