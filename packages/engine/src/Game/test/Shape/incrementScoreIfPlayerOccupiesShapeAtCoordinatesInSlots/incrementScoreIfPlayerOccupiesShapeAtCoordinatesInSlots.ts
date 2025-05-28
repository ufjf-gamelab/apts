import { expect, test } from "vitest";

import type { Integer } from "../../../../types.js";
import type { Points } from "../../../State.js";
import { incrementScoreIfPlayerOccupiesShapeAtCoordinatesInSlots } from "../../Game.js";
import { getFormattedDescriptorOfShape, type Shape } from "../../Shape.js";
import { type default as TestingSlot } from "../../Slot.js";
import { encodeSlots } from "../../Slot/encode.js";
import { type TestShapeParams } from "../setup.js";

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
  test(`${testDescriptor}: incrementScoreIfPlayerOccupiesShapeAtCoordinatesInSlots({slots: [${encodeSlots({ slots })}]}) should modify score to {${expectedScore.toString()}}`, () => {
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
  incrementScoreIfPlayerOccupiesShapeAtCoordinatesInSlotsShouldModify({
    expectedScore,
    initialIndexOfColumn,
    initialIndexOfRow,
    score,
    shape,
    slots,
    testDescriptor: getFormattedDescriptorOfShape({
      initialIndexOfColumn,
      initialIndexOfRow,
      shape,
    }),
  });
};

export { testIncrementScoreIfPlayerOccupiesShapeAtCoordinatesInSlots };
