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

const testIncrementScoreIfPlayerOccupiesPrincipalDiagonalAtCoordinatesInSlots =
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
        direction: "principalDiagonal",
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
  testIncrementScoreIfPlayerOccupiesPrincipalDiagonalAtCoordinatesInSlots({
    expectedScore: [INITIAL_POINTS, INITIAL_POINTS],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 0,
    score: [INITIAL_POINTS, INITIAL_POINTS],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
      IndexOfTestingSlot.SoutheastOfNorthwest,
      IndexOfTestingSlot.NorthwestOfCenter,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesPrincipalDiagonalAtCoordinatesInSlots({
    expectedScore: [INITIAL_POINTS, INITIAL_POINTS],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 0,
    score: [INITIAL_POINTS, INITIAL_POINTS],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
      IndexOfTestingSlot.SoutheastOfNorthwest,
      IndexOfTestingSlot.NorthwestOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesPrincipalDiagonalAtCoordinatesInSlots({
    expectedScore: [ONE_POINT, INITIAL_POINTS],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 0,
    score: [INITIAL_POINTS, INITIAL_POINTS],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
      IndexOfTestingSlot.SoutheastOfNorthwest,
      IndexOfTestingSlot.NorthwestOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
    ],
    indexOfPlayer: IndexOfTestingPlayer.Two,
  });
  testIncrementScoreIfPlayerOccupiesPrincipalDiagonalAtCoordinatesInSlots({
    expectedScore: [INITIAL_POINTS, ONE_POINT],
    initialIndexOfColumn: 0,
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
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
      IndexOfTestingSlot.SoutheastOfNorthwest,
      IndexOfTestingSlot.NorthwestOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesPrincipalDiagonalAtCoordinatesInSlots({
    expectedScore: [INITIAL_POINTS, INITIAL_POINTS],
    initialIndexOfColumn: 1,
    initialIndexOfRow: 1,
    score: [INITIAL_POINTS, INITIAL_POINTS],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
      IndexOfTestingSlot.SoutheastOfNorthwest,
      IndexOfTestingSlot.NorthwestOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.SoutheastOfCenter,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesPrincipalDiagonalAtCoordinatesInSlots({
    expectedScore: [ONE_POINT, INITIAL_POINTS],
    initialIndexOfColumn: 1,
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
      IndexOfTestingSlot.SoutheastOfCenter,
      IndexOfTestingSlot.NorthwestOfSoutheast,
      IndexOfTestingSlot.CenterOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesPrincipalDiagonalAtCoordinatesInSlots({
    expectedScore: [INITIAL_POINTS, INITIAL_POINTS],
    initialIndexOfColumn: 3,
    initialIndexOfRow: 3,
    score: [INITIAL_POINTS, INITIAL_POINTS],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.SoutheastOfCenter,
      IndexOfTestingSlot.NorthwestOfSoutheast,
      IndexOfTestingSlot.CenterOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesPrincipalDiagonalAtCoordinatesInSlots({
    expectedScore: [ONE_POINT, INITIAL_POINTS],
    initialIndexOfColumn: 3,
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
  testIncrementScoreIfPlayerOccupiesPrincipalDiagonalAtCoordinatesInSlots({
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
      IndexOfTestingSlot.SoutheastOfCenter,
      IndexOfTestingSlot.NorthwestOfSoutheast,
      IndexOfTestingSlot.CenterOfSoutheast,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesPrincipalDiagonalAtCoordinatesInSlots({
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
      IndexOfTestingSlot.SoutheastOfCenter,
      IndexOfTestingSlot.NorthwestOfSoutheast,
      IndexOfTestingSlot.CenterOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesPrincipalDiagonalAtCoordinatesInSlots({
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
      IndexOfTestingSlot.SoutheastOfCenter,
      IndexOfTestingSlot.NorthwestOfSoutheast,
      IndexOfTestingSlot.CenterOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    indexOfPlayer: IndexOfTestingPlayer.Two,
  });
  testIncrementScoreIfPlayerOccupiesPrincipalDiagonalAtCoordinatesInSlots({
    expectedScore: [INITIAL_POINTS, ONE_POINT],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 4,
    score: [INITIAL_POINTS, INITIAL_POINTS],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();
