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

const testIncrementScoreIfPlayerOccupiesVerticalLineAtCoordinatesInSlots = ({
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
      direction: "vertical",
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
  testIncrementScoreIfPlayerOccupiesVerticalLineAtCoordinatesInSlots({
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
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
      IndexOfTestingSlot.NorthwestOfWest,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesVerticalLineAtCoordinatesInSlots({
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
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
      IndexOfTestingSlot.NorthwestOfWest,
      IndexOfTestingSlot.WestOfWest,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesVerticalLineAtCoordinatesInSlots({
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
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
      IndexOfTestingSlot.NorthwestOfWest,
      IndexOfTestingSlot.WestOfWest,
    ],
    indexOfPlayer: IndexOfTestingPlayer.Two,
  });
  testIncrementScoreIfPlayerOccupiesVerticalLineAtCoordinatesInSlots({
    expectedScore: [INITIAL_POINTS, ONE_POINT],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 0,
    score: [INITIAL_POINTS, INITIAL_POINTS],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

((): void => {
  const slots = convertCreatedSlotsAndRelatedDataToSlots(
    createSlotsForInitialState(),
  );
  testIncrementScoreIfPlayerOccupiesVerticalLineAtCoordinatesInSlots({
    expectedScore: [INITIAL_POINTS, INITIAL_POINTS],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 0,
    score: [INITIAL_POINTS, INITIAL_POINTS],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.CenterOfNorth,
      IndexOfTestingSlot.SouthOfNorth,
      IndexOfTestingSlot.NorthOfCenter,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesVerticalLineAtCoordinatesInSlots({
    expectedScore: [INITIAL_POINTS, INITIAL_POINTS],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 0,
    score: [INITIAL_POINTS, INITIAL_POINTS],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.CenterOfNorth,
      IndexOfTestingSlot.SouthOfNorth,
      IndexOfTestingSlot.NorthOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesVerticalLineAtCoordinatesInSlots({
    expectedScore: [ONE_POINT, INITIAL_POINTS],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 0,
    score: [INITIAL_POINTS, INITIAL_POINTS],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.CenterOfNorth,
      IndexOfTestingSlot.SouthOfNorth,
      IndexOfTestingSlot.NorthOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
    ],
    indexOfPlayer: IndexOfTestingPlayer.Two,
  });
  testIncrementScoreIfPlayerOccupiesVerticalLineAtCoordinatesInSlots({
    expectedScore: [INITIAL_POINTS, ONE_POINT],
    initialIndexOfColumn: 4,
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
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.NortheastOfNorthwest,
      IndexOfTestingSlot.NorthwestOfNorth,
      IndexOfTestingSlot.NorthOfNorth,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesVerticalLineAtCoordinatesInSlots({
    expectedScore: [INITIAL_POINTS, INITIAL_POINTS],
    initialIndexOfColumn: 0,
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
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
      IndexOfTestingSlot.NorthwestOfWest,
      IndexOfTestingSlot.WestOfWest,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesVerticalLineAtCoordinatesInSlots({
    expectedScore: [INITIAL_POINTS, INITIAL_POINTS],
    initialIndexOfColumn: 0,
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
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
      IndexOfTestingSlot.NorthwestOfWest,
      IndexOfTestingSlot.WestOfWest,
      IndexOfTestingSlot.SouthwestOfWest,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesVerticalLineAtCoordinatesInSlots({
    expectedScore: [ONE_POINT, INITIAL_POINTS],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 1,
    score: [INITIAL_POINTS, INITIAL_POINTS],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.CenterOfNorth,
      IndexOfTestingSlot.SouthOfNorth,
      IndexOfTestingSlot.NorthOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesVerticalLineAtCoordinatesInSlots({
    expectedScore: [INITIAL_POINTS, INITIAL_POINTS],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 1,
    score: [INITIAL_POINTS, INITIAL_POINTS],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.CenterOfNorth,
      IndexOfTestingSlot.SouthOfNorth,
      IndexOfTestingSlot.NorthOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.SouthOfCenter,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesVerticalLineAtCoordinatesInSlots({
    expectedScore: [ONE_POINT, INITIAL_POINTS],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 1,
    score: [INITIAL_POINTS, INITIAL_POINTS],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();
