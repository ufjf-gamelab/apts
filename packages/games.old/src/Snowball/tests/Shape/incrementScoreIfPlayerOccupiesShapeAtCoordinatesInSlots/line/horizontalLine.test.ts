import type { Integer } from "@repo/engine_core/types.js";
import type { Points } from "../../../../../../../game.old/src/State.js";

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

const testIncrementScoreIfPlayerOccupiesHorizontalLineAtCoordinatesInSlots = ({
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
      direction: "horizontal",
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
  testIncrementScoreIfPlayerOccupiesHorizontalLineAtCoordinatesInSlots({
    expectedScore: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 0,
    score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.NortheastOfNorthwest,
      IndexOfTestingSlot.NorthwestOfNorth,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesHorizontalLineAtCoordinatesInSlots({
    expectedScore: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 0,
    score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

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
  testIncrementScoreIfPlayerOccupiesHorizontalLineAtCoordinatesInSlots({
    expectedScore: [AmountOfPoints.One, AmountOfPoints.Zero],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 0,
    score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.NortheastOfNorthwest,
      IndexOfTestingSlot.NorthwestOfNorth,
      IndexOfTestingSlot.NorthOfNorth,
    ],
    indexOfPlayer: IndexOfTestingPlayer.Two,
  });
  testIncrementScoreIfPlayerOccupiesHorizontalLineAtCoordinatesInSlots({
    expectedScore: [AmountOfPoints.Zero, AmountOfPoints.One],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 0,
    score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

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
  testIncrementScoreIfPlayerOccupiesHorizontalLineAtCoordinatesInSlots({
    expectedScore: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    initialIndexOfColumn: 1,
    initialIndexOfRow: 0,
    score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.NortheastOfNorthwest,
      IndexOfTestingSlot.NorthwestOfNorth,
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.NortheastOfNorth,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesHorizontalLineAtCoordinatesInSlots({
    expectedScore: [AmountOfPoints.One, AmountOfPoints.Zero],
    initialIndexOfColumn: 1,
    initialIndexOfRow: 0,
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
  testIncrementScoreIfPlayerOccupiesHorizontalLineAtCoordinatesInSlots({
    expectedScore: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 4,
    score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.WestOfWest,
      IndexOfTestingSlot.CenterOfWest,
      IndexOfTestingSlot.EastOfWest,
      IndexOfTestingSlot.WestOfCenter,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesHorizontalLineAtCoordinatesInSlots({
    expectedScore: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 4,
    score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.WestOfWest,
      IndexOfTestingSlot.CenterOfWest,
      IndexOfTestingSlot.EastOfWest,
      IndexOfTestingSlot.WestOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesHorizontalLineAtCoordinatesInSlots({
    expectedScore: [AmountOfPoints.One, AmountOfPoints.Zero],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 4,
    score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.WestOfWest,
      IndexOfTestingSlot.CenterOfWest,
      IndexOfTestingSlot.EastOfWest,
      IndexOfTestingSlot.WestOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
    ],
    indexOfPlayer: IndexOfTestingPlayer.Two,
  });
  testIncrementScoreIfPlayerOccupiesHorizontalLineAtCoordinatesInSlots({
    expectedScore: [AmountOfPoints.Zero, AmountOfPoints.One],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 4,
    score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.WestOfWest,
      IndexOfTestingSlot.CenterOfWest,
      IndexOfTestingSlot.EastOfWest,
      IndexOfTestingSlot.WestOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesHorizontalLineAtCoordinatesInSlots({
    expectedScore: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    initialIndexOfColumn: 1,
    initialIndexOfRow: 4,
    score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.WestOfWest,
      IndexOfTestingSlot.CenterOfWest,
      IndexOfTestingSlot.EastOfWest,
      IndexOfTestingSlot.WestOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.EastOfCenter,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testIncrementScoreIfPlayerOccupiesHorizontalLineAtCoordinatesInSlots({
    expectedScore: [AmountOfPoints.One, AmountOfPoints.Zero],
    initialIndexOfColumn: 1,
    initialIndexOfRow: 4,
    score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    size: SizeOfPatternsUsedForCalculatingPoints.Line,
    slots,
  });
})();
