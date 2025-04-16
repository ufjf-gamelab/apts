import type { Integer } from "../../../../../types.js";
import type { Points } from "../../../../State.js";
import { SizeOfPatternsUsedForCalculatingPoints } from "../../../Game.js";
import { IndexOfTestingPlayer } from "../../../Player/setup.js";
import type { Line } from "../../../Shape.js";
import type TestingSlot from "../../../Slot.js";
import {
  convertCreatedSlotsAndRelatedDataToSlots,
  createSlotsForInitialState,
  IndexOfTestingSlot,
} from "../../../Slot/setup.js";
import { INITIAL_POINTS } from "../../../State.js";
import { getSlotsFilledByPlayer } from "../../setup.js";
import {
  ONE_POINT,
  testIncrementScoreIfPlayerOccupiesShapeAtCoordinatesInSlots,
} from "../incrementScoreIfPlayerOccupiesShapeAtCoordinatesInSlots.js";

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
    expectedScore: [INITIAL_POINTS, INITIAL_POINTS],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 0,
    score: [INITIAL_POINTS, INITIAL_POINTS],
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
    expectedScore: [INITIAL_POINTS, INITIAL_POINTS],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 0,
    score: [INITIAL_POINTS, INITIAL_POINTS],
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
    expectedScore: [ONE_POINT, INITIAL_POINTS],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 0,
    score: [INITIAL_POINTS, INITIAL_POINTS],
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
    expectedScore: [INITIAL_POINTS, ONE_POINT],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 0,
    score: [INITIAL_POINTS, INITIAL_POINTS],
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
    expectedScore: [INITIAL_POINTS, INITIAL_POINTS],
    initialIndexOfColumn: 7,
    initialIndexOfRow: 1,
    score: [INITIAL_POINTS, INITIAL_POINTS],
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
    expectedScore: [ONE_POINT, INITIAL_POINTS],
    initialIndexOfColumn: 7,
    initialIndexOfRow: 1,
    score: [INITIAL_POINTS, INITIAL_POINTS],
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
    expectedScore: [INITIAL_POINTS, INITIAL_POINTS],
    initialIndexOfColumn: 5,
    initialIndexOfRow: 3,
    score: [INITIAL_POINTS, INITIAL_POINTS],
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
    expectedScore: [ONE_POINT, INITIAL_POINTS],
    initialIndexOfColumn: 5,
    initialIndexOfRow: 3,
    score: [INITIAL_POINTS, INITIAL_POINTS],
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
    expectedScore: [INITIAL_POINTS, INITIAL_POINTS],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 4,
    score: [INITIAL_POINTS, INITIAL_POINTS],
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
    expectedScore: [INITIAL_POINTS, INITIAL_POINTS],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 4,
    score: [INITIAL_POINTS, INITIAL_POINTS],
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
    expectedScore: [ONE_POINT, INITIAL_POINTS],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 4,
    score: [INITIAL_POINTS, INITIAL_POINTS],
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
    expectedScore: [INITIAL_POINTS, ONE_POINT],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 4,
    score: [INITIAL_POINTS, INITIAL_POINTS],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();
