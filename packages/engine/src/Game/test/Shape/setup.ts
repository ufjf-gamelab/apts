import type { Integer } from "../../../types.js";
import TestingSlot from "../Slot.js";
import type { IndexOfTestingSlot } from "../Slot/setup.js";

interface TestShapeParams {
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
  testDescriptor: string;
}

const fillSlot = ({
  indexOfPlayer,
  indexOfSlot,
  slots,
}: {
  indexOfPlayer: Integer;
  indexOfSlot: IndexOfTestingSlot;
  slots: TestingSlot[];
}): void => {
  slots[indexOfSlot] = new TestingSlot({
    indexOfOccupyingPlayer: indexOfPlayer,
  });
};

export type { TestShapeParams };
export { fillSlot };
