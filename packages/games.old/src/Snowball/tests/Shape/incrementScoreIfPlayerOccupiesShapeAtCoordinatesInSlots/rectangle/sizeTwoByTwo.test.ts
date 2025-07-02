import type { Points } from "../../../../../../../game.old/src/State.js";
import type { Integer } from "@repo/engine_core/types.js";

import { SizeOfPatternsUsedForCalculatingPoints } from "../../../../Game.js";
import type { Rectangle } from "../../../../Shape.js";
import type TestingSlot from "../../../../Slot.js";
import { IndexOfTestingPlayer } from "../../../Player/setup.js";
import {
  convertCreatedSlotsAndRelatedDataToSlots,
  createSlotsForInitialState,
  IndexOfTestingSlot,
} from "../../../Slot/setup.js";
import { AmountOfPoints, getSlotsFilledByPlayer } from "../../setup.js";
import { testIncrementScoreIfPlayerOccupiesShapeAtCoordinatesInSlots } from "../incrementScoreIfPlayerOccupiesShapeAtCoordinatesInSlots.js";

const testIncrementScoreIfPlayerOccupiesRectangleOfSizeTwoByTwoAtCoordinatesInSlots =
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
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeTwoByTwoAtCoordinatesInSlots(
    {
      expectedScore: [AmountOfPoints.Zero, AmountOfPoints.Zero],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 0,
      score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
    },
  );
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeTwoByTwoAtCoordinatesInSlots(
    {
      expectedScore: [AmountOfPoints.Zero, AmountOfPoints.Zero],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 0,
      score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
    },
  );
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeTwoByTwoAtCoordinatesInSlots(
    {
      expectedScore: [AmountOfPoints.One, AmountOfPoints.Zero],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 0,
      score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
    },
  );
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
    ],
    indexOfPlayer: IndexOfTestingPlayer.Two,
  });
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeTwoByTwoAtCoordinatesInSlots(
    {
      expectedScore: [AmountOfPoints.Zero, AmountOfPoints.One],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 0,
      score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
    },
  );
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeTwoByTwoAtCoordinatesInSlots(
    {
      expectedScore: [AmountOfPoints.Zero, AmountOfPoints.Zero],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
      initialIndexOfColumn: 1,
      initialIndexOfRow: 0,
      score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
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
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeTwoByTwoAtCoordinatesInSlots(
    {
      expectedScore: [AmountOfPoints.One, AmountOfPoints.Zero],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
      initialIndexOfColumn: 1,
      initialIndexOfRow: 0,
      score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
    },
  );
})();

/* Row 1 */

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeTwoByTwoAtCoordinatesInSlots(
    {
      expectedScore: [AmountOfPoints.Zero, AmountOfPoints.Zero],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 1,
      score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
    },
  );
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
      IndexOfTestingSlot.SouthOfNorthwest,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeTwoByTwoAtCoordinatesInSlots(
    {
      expectedScore: [AmountOfPoints.One, AmountOfPoints.Zero],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 1,
      score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
    },
  );
})();

/* Row 4 */

((): void => {
  const slots = convertCreatedSlotsAndRelatedDataToSlots(
    createSlotsForInitialState(),
  );
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeTwoByTwoAtCoordinatesInSlots(
    {
      expectedScore: [AmountOfPoints.Zero, AmountOfPoints.Zero],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 4,
      score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
    },
  );
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.EastOfCenter,
      IndexOfTestingSlot.SouthOfCenter,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeTwoByTwoAtCoordinatesInSlots(
    {
      expectedScore: [AmountOfPoints.Zero, AmountOfPoints.Zero],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 4,
      score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
    },
  );
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.EastOfCenter,
      IndexOfTestingSlot.SouthOfCenter,
      IndexOfTestingSlot.SoutheastOfCenter,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeTwoByTwoAtCoordinatesInSlots(
    {
      expectedScore: [AmountOfPoints.One, AmountOfPoints.Zero],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 4,
      score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
    },
  );
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.EastOfCenter,
      IndexOfTestingSlot.SouthOfCenter,
      IndexOfTestingSlot.SoutheastOfCenter,
    ],
    indexOfPlayer: IndexOfTestingPlayer.Two,
  });
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeTwoByTwoAtCoordinatesInSlots(
    {
      expectedScore: [AmountOfPoints.Zero, AmountOfPoints.One],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 4,
      score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
    },
  );
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.EastOfCenter,
      IndexOfTestingSlot.SouthOfCenter,
      IndexOfTestingSlot.SoutheastOfCenter,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeTwoByTwoAtCoordinatesInSlots(
    {
      expectedScore: [AmountOfPoints.Zero, AmountOfPoints.Zero],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
      initialIndexOfColumn: 5,
      initialIndexOfRow: 4,
      score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
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
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeTwoByTwoAtCoordinatesInSlots(
    {
      expectedScore: [AmountOfPoints.One, AmountOfPoints.Zero],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
      initialIndexOfColumn: 5,
      initialIndexOfRow: 4,
      score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
    },
  );
})();

/* Row 5 */

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.EastOfCenter,
      IndexOfTestingSlot.SouthOfCenter,
      IndexOfTestingSlot.SoutheastOfCenter,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeTwoByTwoAtCoordinatesInSlots(
    {
      expectedScore: [AmountOfPoints.Zero, AmountOfPoints.Zero],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 5,
      score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
    },
  );
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.EastOfCenter,
      IndexOfTestingSlot.SouthOfCenter,
      IndexOfTestingSlot.SoutheastOfCenter,
      IndexOfTestingSlot.NorthOfSouth,
      IndexOfTestingSlot.NortheastOfSouth,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesRectangleOfSizeTwoByTwoAtCoordinatesInSlots(
    {
      expectedScore: [AmountOfPoints.One, AmountOfPoints.Zero],
      horizontalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 5,
      score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
      slots,
      verticalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
    },
  );
})();
