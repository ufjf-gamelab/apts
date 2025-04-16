import { expect, test } from "vitest";

import type { Integer } from "../../../../types.js";
import type { Points } from "../../../State.js";
import { incrementScoreIfPlayerOccupiesShapeAtCoordinatesInSlots } from "../../Game.js";
import { getNameAndFormattedSizeOfShape, type Shape } from "../../Shape.js";
import type TestingSlot from "../../Slot.js";
import { type TestShapeParams } from "../setup.js";

const ONE_POINT: Integer = 1;

const incrementScoreIfPlayerOccupiesShapeAtCoordinatesInSlotsShouldModify = ({
  expectedScore,
  initialIndexOfColumn,
  initialIndexOfRow,
  score,
  shape,
  slots,
  testDescriptor,
}: TestShapeParams & {
  expectedScore: Points[];
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  score: Points[];
  shape: Shape;
  slots: TestingSlot[];
}): void => {
  const slotsAsString = slots
    .map(slot => slot.getIndexOfOccupyingPlayer())
    .toString();
  test(`${testDescriptor}: incrementScoreIfPlayerOccupiesShapeAtCoordinatesInSlots({slots: [${slotsAsString}]}) should modify score to {${expectedScore.toString()}}`, () => {
    incrementScoreIfPlayerOccupiesShapeAtCoordinatesInSlots({
      initialIndexOfColumn,
      initialIndexOfRow,
      score,
      shape,
      slots,
    });
    expect(score).not.toBe(expectedScore);
    expect(score).toStrictEqual(expectedScore);
  });
};

const testIncrementScoreIfPlayerOccupiesShapeAtCoordinatesInSlots = ({
  expectedScore,
  initialIndexOfColumn,
  initialIndexOfRow,
  score,
  shape,
  slots,
}: {
  expectedScore: Points[];
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  score: Points[];
  shape: Shape;
  slots: TestingSlot[];
}): void => {
  const { nameOfShape, sizeOfShape } = getNameAndFormattedSizeOfShape(shape);
  incrementScoreIfPlayerOccupiesShapeAtCoordinatesInSlotsShouldModify({
    expectedScore,
    initialIndexOfColumn,
    initialIndexOfRow,
    score,
    shape,
    slots,
    testDescriptor: `${nameOfShape} of size ${sizeOfShape} beginning on row ${initialIndexOfRow} and column ${initialIndexOfColumn}`,
  });
};

export {
  ONE_POINT,
  testIncrementScoreIfPlayerOccupiesShapeAtCoordinatesInSlots,
};
