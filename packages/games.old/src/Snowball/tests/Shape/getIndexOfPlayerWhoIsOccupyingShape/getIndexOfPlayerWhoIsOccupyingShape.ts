import type { Integer } from "@repo/engine_core/types.js";
import { expect, test } from "vitest";

import { COLUMN_LENGTH, ROW_LENGTH } from "../../../Game.js";
import {
  getFormattedDescriptorOfShape,
  getIndexOfPlayerWhoIsOccupyingShape,
  type Shape,
} from "../../../Shape.js";
import { type default as TestingSlot } from "../../../Slot.js";
import { encodeSlots } from "../../Slot/encode.js";
import { type IndexOfTestingSlot } from "../../Slot/setup.js";
import {
  fillSlots,
  getSlotsFilledByPlayer,
  type TestShapeParams,
} from "../setup.js";

const getIndexOfPlayerWhoIsOccupyingShapeShouldReturn = ({
  expectedIndexOfPlayer,
  initialIndexOfColumn,
  initialIndexOfRow,
  shape,
  slots,
  testDescriptor,
}: TestShapeParams & {
  expectedIndexOfPlayer: ReturnType<typeof getIndexOfPlayerWhoIsOccupyingShape>;
  shape: Shape;
  slots: TestingSlot[];
}): void => {
  test(`${testDescriptor}: getIndexOfPlayerWhoIsOccupyingShape({slots: [${encodeSlots(
    { slots },
  )}]}) should return {${expectedIndexOfPlayer}}`, () => {
    const indexOfShape = getIndexOfPlayerWhoIsOccupyingShape({
      columnLength: COLUMN_LENGTH,
      initialIndexOfColumn,
      initialIndexOfRow,
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
  initialIndexOfColumn,
  initialIndexOfRow,
  playersShouldBeOccupyingShapes,
  shape,
}: {
  indexesOfSlots: IndexOfTestingSlot[];
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
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

    getIndexOfPlayerWhoIsOccupyingShapeShouldReturn({
      expectedIndexOfPlayer: shouldBeOccupyingShape ? indexOfPlayer : null,
      initialIndexOfColumn,
      initialIndexOfRow,
      shape,
      slots,
      testDescriptor: getFormattedDescriptorOfShape({
        initialIndexOfColumn,
        initialIndexOfRow,
        shape,
      }),
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
