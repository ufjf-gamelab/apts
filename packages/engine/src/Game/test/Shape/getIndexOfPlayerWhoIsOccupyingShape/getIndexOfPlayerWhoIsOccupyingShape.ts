import { expect, test } from "vitest";

import type { Integer } from "../../../../types.js";
import { COLUMN_LENGTH, ROW_LENGTH } from "../../Game.js";
import {
  getIndexOfPlayerWhoIsOccupyingShape,
  getNameAndFormattedSizeOfShape,
  type Shape,
} from "../../Shape.js";
import TestingSlot from "../../Slot.js";
import {
  createSlotsForInitialState,
  type IndexOfTestingSlot,
} from "../../Slot/setup.js";
import type { TestShapeParams } from "../setup.js";

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
  const slots = Array.from(
    createSlotsForInitialState()
      .values()
      .map(({ slot }) => slot),
  );

  fillSlots({
    indexesOfSlots,
    indexOfPlayer,
    slots,
  });

  return slots;
};

const getIndexOfPlayerWhoIsOccupyingShapeShouldReturn = ({
  expectedIndexOfPlayer,
  initialColumnIndex,
  initialRowIndex,
  shape,
  slots,
  testDescriptor,
}: TestShapeParams & {
  expectedIndexOfPlayer: ReturnType<typeof getIndexOfPlayerWhoIsOccupyingShape>;
  shape: Shape;
  slots: TestingSlot[];
}): void => {
  const slotsAsString = slots
    .map(slot => slot.getIndexOfOccupyingPlayer())
    .toString();

  test(`${testDescriptor}: getIndexOfPlayerWhoIsOccupyingShape({slots: [${slotsAsString}]}) should return {${expectedIndexOfPlayer}}`, () => {
    const indexOfShape = getIndexOfPlayerWhoIsOccupyingShape({
      columnLength: COLUMN_LENGTH,
      initialColumnIndex,
      initialRowIndex,
      rowLength: ROW_LENGTH,
      shape,
      slots,
    });

    expect(indexOfShape).toBe(expectedIndexOfPlayer);
  });
};

interface PlayerShouldBeOccupyingShape {
  indexOfPlayer: ReturnType<typeof getIndexOfPlayerWhoIsOccupyingShape>;
  shouldBeOccupyingShape: boolean;
}

const testGetIndexOfPlayerWhoIsOccupyingShapeForEveryPlayer = ({
  indexesOfSlots,
  initialColumnIndex,
  initialRowIndex,
  playersShouldBeOccupyingShapes,
  shape,
}: {
  indexesOfSlots: IndexOfTestingSlot[];
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
  playersShouldBeOccupyingShapes: PlayerShouldBeOccupyingShape[];
  shape: Shape;
}): void => {
  const testForPlayer = ({
    indexOfPlayer,
    shouldBeOccupyingShape,
  }: PlayerShouldBeOccupyingShape): void => {
    const slots = getSlotsFilledByPlayer({
      indexesOfSlots,
      indexOfPlayer,
    });

    fillSlots({
      indexesOfSlots,
      indexOfPlayer,
      slots,
    });

    const { nameOfShape, sizeOfShape } = getNameAndFormattedSizeOfShape(shape);
    getIndexOfPlayerWhoIsOccupyingShapeShouldReturn({
      expectedIndexOfPlayer: shouldBeOccupyingShape ? indexOfPlayer : null,
      initialColumnIndex,
      initialRowIndex,
      shape,
      slots,
      testDescriptor: `${nameOfShape} of size ${sizeOfShape} beginning on row ${initialRowIndex} and column ${initialColumnIndex}`,
    });
  };

  playersShouldBeOccupyingShapes.forEach(
    ({ indexOfPlayer, shouldBeOccupyingShape }) => {
      testForPlayer({
        indexOfPlayer,
        shouldBeOccupyingShape,
      });
    },
  );
};

export type { PlayerShouldBeOccupyingShape };
export { testGetIndexOfPlayerWhoIsOccupyingShapeForEveryPlayer };
