import type { Points } from "../../../../../../../game.old/src/State.js";
import type { Integer } from "@repo/engine_core/types.js";

import { SizeOfPatternsUsedForCalculatingPoints } from "../../../../Game.js";
import type { Line } from "../../../../Shape.js";
import type TestingSlot from "../../../../Slot.js";
import { IndexOfTestingPlayer } from "../../../Player/setup.js";
import {
  convertCreatedSlotsAndRelatedDataToSlots,
  createSlotsForInitialState,
  IndexOfTestingSlot,
} from "../../../Slot/setup.js";
import { AmountOfPoints, getSlotsFilledByPlayer } from "../../setup.js";
import { testIncrementScoreIfPlayerOccupiesShapeAtCoordinatesInSlots } from "../incrementScoreIfPlayerOccupiesShapeAtCoordinatesInSlots.js";

const testIncrementScoreIfPlayerOccupiesSecondaryDiagonalAtCoordinatesInSlots =
  ({
    expectedScore,
    initialIndexOfColumn,
    initialIndexOfRow,
    score,
    size,
    slots,
  }: {
    expectedScore: Points[];
    initialIndexOfColumn: Integer;
    initialIndexOfRow: Integer;
    score: Points[];
    size: Line["size"];
    slots: TestingSlot[];
  }): void => {
    testIncrementScoreIfPlayerOccupiesShapeAtCoordinatesInSlots({
      expectedScore,
      initialIndexOfColumn,
      initialIndexOfRow,
      score,
      shape: {
        direction: "secondaryDiagonal",
        size,
        type: "line",
      },
      slots,
    });
  };

/* Row 0 */

((): void => {
  const slots = convertCreatedSlotsAndRelatedDataToSlots(
    createSlotsForInitialState(),
  );
  testIncrementScoreIfPlayerOccupiesSecondaryDiagonalAtCoordinatesInSlots({
    expectedScore: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 0,
    score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NortheastOfNortheast,
      IndexOfTestingSlot.CenterOfNortheast,
      IndexOfTestingSlot.SouthwestOfNortheast,
      IndexOfTestingSlot.NortheastOfCenter,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesSecondaryDiagonalAtCoordinatesInSlots({
    expectedScore: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 0,
    score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NortheastOfNortheast,
      IndexOfTestingSlot.CenterOfNortheast,
      IndexOfTestingSlot.SouthwestOfNortheast,
      IndexOfTestingSlot.NortheastOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesSecondaryDiagonalAtCoordinatesInSlots({
    expectedScore: [AmountOfPoints.One, AmountOfPoints.Zero],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 0,
    score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NortheastOfNortheast,
      IndexOfTestingSlot.CenterOfNortheast,
      IndexOfTestingSlot.SouthwestOfNortheast,
      IndexOfTestingSlot.NortheastOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
    ],
    indexOfPlayer: IndexOfTestingPlayer.Two,
  });
  testIncrementScoreIfPlayerOccupiesSecondaryDiagonalAtCoordinatesInSlots({
    expectedScore: [AmountOfPoints.Zero, AmountOfPoints.One],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 0,
    score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

/* Row 1 */

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NortheastOfNortheast,
      IndexOfTestingSlot.CenterOfNortheast,
      IndexOfTestingSlot.SouthwestOfNortheast,
      IndexOfTestingSlot.NortheastOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesSecondaryDiagonalAtCoordinatesInSlots({
    expectedScore: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    initialIndexOfColumn: 7,
    initialIndexOfRow: 1,
    score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NortheastOfNortheast,
      IndexOfTestingSlot.CenterOfNortheast,
      IndexOfTestingSlot.SouthwestOfNortheast,
      IndexOfTestingSlot.NortheastOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.SouthwestOfCenter,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesSecondaryDiagonalAtCoordinatesInSlots({
    expectedScore: [AmountOfPoints.One, AmountOfPoints.Zero],
    initialIndexOfColumn: 7,
    initialIndexOfRow: 1,
    score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

/* Row 3 */

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.SouthwestOfCenter,
      IndexOfTestingSlot.NortheastOfSouthwest,
      IndexOfTestingSlot.CenterOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouthwest,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesSecondaryDiagonalAtCoordinatesInSlots({
    expectedScore: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    initialIndexOfColumn: 5,
    initialIndexOfRow: 3,
    score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NortheastOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.SouthwestOfCenter,
      IndexOfTestingSlot.NortheastOfSouthwest,
      IndexOfTestingSlot.CenterOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouthwest,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesSecondaryDiagonalAtCoordinatesInSlots({
    expectedScore: [AmountOfPoints.One, AmountOfPoints.Zero],
    initialIndexOfColumn: 5,
    initialIndexOfRow: 3,
    score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

/* Row 4 */

((): void => {
  const slots = convertCreatedSlotsAndRelatedDataToSlots(
    createSlotsForInitialState(),
  );
  testIncrementScoreIfPlayerOccupiesSecondaryDiagonalAtCoordinatesInSlots({
    expectedScore: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 4,
    score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.SouthwestOfCenter,
      IndexOfTestingSlot.NortheastOfSouthwest,
      IndexOfTestingSlot.CenterOfSouthwest,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesSecondaryDiagonalAtCoordinatesInSlots({
    expectedScore: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 4,
    score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.SouthwestOfCenter,
      IndexOfTestingSlot.NortheastOfSouthwest,
      IndexOfTestingSlot.CenterOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouthwest,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesSecondaryDiagonalAtCoordinatesInSlots({
    expectedScore: [AmountOfPoints.One, AmountOfPoints.Zero],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 4,
    score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.SouthwestOfCenter,
      IndexOfTestingSlot.NortheastOfSouthwest,
      IndexOfTestingSlot.CenterOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouthwest,
    ],
    indexOfPlayer: IndexOfTestingPlayer.Two,
  });
  testIncrementScoreIfPlayerOccupiesSecondaryDiagonalAtCoordinatesInSlots({
    expectedScore: [AmountOfPoints.Zero, AmountOfPoints.One],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 4,
    score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();
