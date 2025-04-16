import type { Integer } from "../../../../../types.js";
import type { Points } from "../../../../State.js";
import { SizeOfPatternsUsedForCalculatingPoints } from "../../../Game.js";
import { IndexOfTestingPlayer } from "../../../Player/setup.js";
import type { Rectangle } from "../../../Shape.js";
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

const testIncrementScoreIfPlayerOccupiesRectangleOfSizeThreeByThreeAtCoordinatesInSlots =
  ({
    expectedScore,
    horizontalSize,
    initialIndexOfColumn,
    initialIndexOfRow,
    score,
    slots,
    verticalSize,
  }: {
    expectedScore: Points[];
    horizontalSize: Rectangle["horizontalSize"];
    initialIndexOfColumn: Integer;
    initialIndexOfRow: Integer;
    score: Points[];
    slots: TestingSlot[];
    verticalSize: Rectangle["verticalSize"];
  }): void => {
    testIncrementScoreIfPlayerOccupiesShapeAtCoordinatesInSlots({
      expectedScore,
      initialIndexOfColumn,
      initialIndexOfRow,
      score,
      shape: {
        horizontalSize,
        type: "rectangle",
        verticalSize,
      },
      slots,
    });
  };

/* Row 0 */

((): void => {
  const slots = convertCreatedSlotsAndRelatedDataToSlots(
    createSlotsForInitialState(),
  );
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeThreeByThreeAtCoordinatesInSlots(
    {
      expectedScore: [INITIAL_POINTS, INITIAL_POINTS],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 0,
      score: [INITIAL_POINTS, INITIAL_POINTS],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
    },
  );
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.NortheastOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
      IndexOfTestingSlot.EastOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
      IndexOfTestingSlot.SouthOfNorthwest,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeThreeByThreeAtCoordinatesInSlots(
    {
      expectedScore: [INITIAL_POINTS, INITIAL_POINTS],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 0,
      score: [INITIAL_POINTS, INITIAL_POINTS],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
    },
  );
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.NortheastOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
      IndexOfTestingSlot.EastOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
      IndexOfTestingSlot.SouthOfNorthwest,
      IndexOfTestingSlot.SoutheastOfNorthwest,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeThreeByThreeAtCoordinatesInSlots(
    {
      expectedScore: [ONE_POINT, INITIAL_POINTS],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 0,
      score: [INITIAL_POINTS, INITIAL_POINTS],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
    },
  );
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.NortheastOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
      IndexOfTestingSlot.EastOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
      IndexOfTestingSlot.SouthOfNorthwest,
      IndexOfTestingSlot.SoutheastOfNorthwest,
    ],
    indexOfPlayer: IndexOfTestingPlayer.Two,
  });
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeThreeByThreeAtCoordinatesInSlots(
    {
      expectedScore: [INITIAL_POINTS, ONE_POINT],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 0,
      score: [INITIAL_POINTS, INITIAL_POINTS],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
    },
  );
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.NortheastOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
      IndexOfTestingSlot.EastOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
      IndexOfTestingSlot.SouthOfNorthwest,
      IndexOfTestingSlot.SoutheastOfNorthwest,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeThreeByThreeAtCoordinatesInSlots(
    {
      expectedScore: [INITIAL_POINTS, INITIAL_POINTS],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
      initialIndexOfColumn: 1,
      initialIndexOfRow: 0,
      score: [INITIAL_POINTS, INITIAL_POINTS],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
    },
  );
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.NortheastOfNorthwest,
      IndexOfTestingSlot.NorthwestOfNorth,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
      IndexOfTestingSlot.EastOfNorthwest,
      IndexOfTestingSlot.WestOfNorth,
      IndexOfTestingSlot.SouthwestOfNorthwest,
      IndexOfTestingSlot.SouthOfNorthwest,
      IndexOfTestingSlot.SoutheastOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorth,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeThreeByThreeAtCoordinatesInSlots(
    {
      expectedScore: [ONE_POINT, INITIAL_POINTS],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
      initialIndexOfColumn: 1,
      initialIndexOfRow: 0,
      score: [INITIAL_POINTS, INITIAL_POINTS],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
    },
  );
})();

/* Row 1 */

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.NortheastOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
      IndexOfTestingSlot.EastOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
      IndexOfTestingSlot.SouthOfNorthwest,
      IndexOfTestingSlot.SoutheastOfNorthwest,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeThreeByThreeAtCoordinatesInSlots(
    {
      expectedScore: [INITIAL_POINTS, INITIAL_POINTS],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 1,
      score: [INITIAL_POINTS, INITIAL_POINTS],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
    },
  );
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.NortheastOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
      IndexOfTestingSlot.EastOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
      IndexOfTestingSlot.SouthOfNorthwest,
      IndexOfTestingSlot.SoutheastOfNorthwest,
      IndexOfTestingSlot.NorthwestOfWest,
      IndexOfTestingSlot.NorthOfWest,
      IndexOfTestingSlot.NortheastOfWest,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeThreeByThreeAtCoordinatesInSlots(
    {
      expectedScore: [ONE_POINT, INITIAL_POINTS],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 1,
      score: [INITIAL_POINTS, INITIAL_POINTS],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
    },
  );
})();

/* Row 4 */

((): void => {
  const slots = convertCreatedSlotsAndRelatedDataToSlots(
    createSlotsForInitialState(),
  );
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeThreeByThreeAtCoordinatesInSlots(
    {
      expectedScore: [INITIAL_POINTS, INITIAL_POINTS],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 4,
      score: [INITIAL_POINTS, INITIAL_POINTS],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
    },
  );
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.EastOfCenter,
      IndexOfTestingSlot.WestOfEast,
      IndexOfTestingSlot.SouthOfCenter,
      IndexOfTestingSlot.SoutheastOfCenter,
      IndexOfTestingSlot.SouthwestOfEast,
      IndexOfTestingSlot.NorthOfSouth,
      IndexOfTestingSlot.NortheastOfSouth,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeThreeByThreeAtCoordinatesInSlots(
    {
      expectedScore: [INITIAL_POINTS, INITIAL_POINTS],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 4,
      score: [INITIAL_POINTS, INITIAL_POINTS],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
    },
  );
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.EastOfCenter,
      IndexOfTestingSlot.WestOfEast,
      IndexOfTestingSlot.SouthOfCenter,
      IndexOfTestingSlot.SoutheastOfCenter,
      IndexOfTestingSlot.SouthwestOfEast,
      IndexOfTestingSlot.NorthOfSouth,
      IndexOfTestingSlot.NortheastOfSouth,
      IndexOfTestingSlot.NorthwestOfSoutheast,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeThreeByThreeAtCoordinatesInSlots(
    {
      expectedScore: [ONE_POINT, INITIAL_POINTS],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 4,
      score: [INITIAL_POINTS, INITIAL_POINTS],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
    },
  );
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.EastOfCenter,
      IndexOfTestingSlot.WestOfEast,
      IndexOfTestingSlot.SouthOfCenter,
      IndexOfTestingSlot.SoutheastOfCenter,
      IndexOfTestingSlot.SouthwestOfEast,
      IndexOfTestingSlot.NorthOfSouth,
      IndexOfTestingSlot.NortheastOfSouth,
      IndexOfTestingSlot.NorthwestOfSoutheast,
    ],
    indexOfPlayer: IndexOfTestingPlayer.Two,
  });
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeThreeByThreeAtCoordinatesInSlots(
    {
      expectedScore: [INITIAL_POINTS, ONE_POINT],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 4,
      score: [INITIAL_POINTS, INITIAL_POINTS],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
    },
  );
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.EastOfCenter,
      IndexOfTestingSlot.WestOfEast,
      IndexOfTestingSlot.SouthOfCenter,
      IndexOfTestingSlot.SoutheastOfCenter,
      IndexOfTestingSlot.SouthwestOfEast,
      IndexOfTestingSlot.NorthOfSouth,
      IndexOfTestingSlot.NortheastOfSouth,
      IndexOfTestingSlot.NorthwestOfSoutheast,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeThreeByThreeAtCoordinatesInSlots(
    {
      expectedScore: [INITIAL_POINTS, INITIAL_POINTS],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
      initialIndexOfColumn: 5,
      initialIndexOfRow: 4,
      score: [INITIAL_POINTS, INITIAL_POINTS],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
    },
  );
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.EastOfCenter,
      IndexOfTestingSlot.WestOfEast,
      IndexOfTestingSlot.CenterOfEast,
      IndexOfTestingSlot.SouthOfCenter,
      IndexOfTestingSlot.SoutheastOfCenter,
      IndexOfTestingSlot.SouthwestOfEast,
      IndexOfTestingSlot.SouthOfEast,
      IndexOfTestingSlot.NorthOfSouth,
      IndexOfTestingSlot.NortheastOfSouth,
      IndexOfTestingSlot.NorthwestOfSoutheast,
      IndexOfTestingSlot.NorthOfSoutheast,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeThreeByThreeAtCoordinatesInSlots(
    {
      expectedScore: [ONE_POINT, INITIAL_POINTS],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
      initialIndexOfColumn: 5,
      initialIndexOfRow: 4,
      score: [INITIAL_POINTS, INITIAL_POINTS],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
    },
  );
})();

/* Row 5 */

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.EastOfCenter,
      IndexOfTestingSlot.WestOfEast,
      IndexOfTestingSlot.SouthOfCenter,
      IndexOfTestingSlot.SoutheastOfCenter,
      IndexOfTestingSlot.SouthwestOfEast,
      IndexOfTestingSlot.NorthOfSouth,
      IndexOfTestingSlot.NortheastOfSouth,
      IndexOfTestingSlot.NorthwestOfSoutheast,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeThreeByThreeAtCoordinatesInSlots(
    {
      expectedScore: [INITIAL_POINTS, INITIAL_POINTS],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 5,
      score: [INITIAL_POINTS, INITIAL_POINTS],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
    },
  );
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.EastOfCenter,
      IndexOfTestingSlot.WestOfEast,
      IndexOfTestingSlot.SouthOfCenter,
      IndexOfTestingSlot.SoutheastOfCenter,
      IndexOfTestingSlot.SouthwestOfEast,
      IndexOfTestingSlot.NorthOfSouth,
      IndexOfTestingSlot.NortheastOfSouth,
      IndexOfTestingSlot.NorthwestOfSoutheast,
      IndexOfTestingSlot.CenterOfSouth,
      IndexOfTestingSlot.EastOfSouth,
      IndexOfTestingSlot.WestOfSoutheast,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeThreeByThreeAtCoordinatesInSlots(
    {
      expectedScore: [ONE_POINT, INITIAL_POINTS],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 5,
      score: [INITIAL_POINTS, INITIAL_POINTS],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
    },
  );
})();
