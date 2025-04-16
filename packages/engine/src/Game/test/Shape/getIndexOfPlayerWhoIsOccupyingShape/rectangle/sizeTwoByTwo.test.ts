import type { Integer } from "../../../../../types.js";
import { IndexOfTestingPlayer } from "../../../Player/setup.js";
import type { Rectangle } from "../../../Shape.js";
import { IndexOfTestingSlot } from "../../../Slot/setup.js";
import {
  type PlayerShouldBeOccupyingShape,
  testGetIndexOfPlayerWhoIsOccupyingShapeForEveryPlayer,
} from "../getIndexOfPlayerWhoIsOccupyingShape.js";

const testGetIndexOfPlayerWhoIsOccupyingRectangleOfSizeTwoByTwoForEveryPlayer =
  ({
    horizontalSize,
    indexesOfSlots,
    initialColumnIndex,
    initialRowIndex,
    playersShouldBeOccupyingShapes,
    verticalSize,
  }: {
    horizontalSize: Rectangle["horizontalSize"];
    indexesOfSlots: IndexOfTestingSlot[];
    initialColumnIndex: Integer;
    initialRowIndex: Integer;
    playersShouldBeOccupyingShapes: PlayerShouldBeOccupyingShape[];
    verticalSize: Rectangle["verticalSize"];
  }): void => {
    testGetIndexOfPlayerWhoIsOccupyingShapeForEveryPlayer({
      indexesOfSlots,
      initialColumnIndex,
      initialRowIndex,
      playersShouldBeOccupyingShapes,
      shape: {
        horizontalSize,
        type: "rectangle",
        verticalSize,
      },
    });
  };

/* Row 0 */

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingRectangleOfSizeTwoByTwoForEveryPlayer({
    horizontalSize: 2,
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
    ],
    initialColumnIndex: 0,
    initialRowIndex: 0,
    playersShouldBeOccupyingShapes: [
      {
        indexOfPlayer: null,
        shouldBeOccupyingShape: true,
      },
      {
        indexOfPlayer: IndexOfTestingPlayer.One,
        shouldBeOccupyingShape: true,
      },
      {
        indexOfPlayer: IndexOfTestingPlayer.Two,
        shouldBeOccupyingShape: true,
      },
    ],
    verticalSize: 2,
  });
})();

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingRectangleOfSizeTwoByTwoForEveryPlayer({
    horizontalSize: 2,
    indexesOfSlots: [
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.NortheastOfNorth,
      IndexOfTestingSlot.CenterOfNorth,
      IndexOfTestingSlot.EastOfNorth,
    ],
    initialColumnIndex: 4,
    initialRowIndex: 0,
    playersShouldBeOccupyingShapes: [
      {
        indexOfPlayer: null,
        shouldBeOccupyingShape: true,
      },
      {
        indexOfPlayer: IndexOfTestingPlayer.One,
        shouldBeOccupyingShape: true,
      },
      {
        indexOfPlayer: IndexOfTestingPlayer.Two,
        shouldBeOccupyingShape: true,
      },
    ],
    verticalSize: 2,
  });
})();

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingRectangleOfSizeTwoByTwoForEveryPlayer({
    horizontalSize: 2,
    indexesOfSlots: [
      IndexOfTestingSlot.NorthOfNortheast,
      IndexOfTestingSlot.NortheastOfNortheast,
      IndexOfTestingSlot.CenterOfNortheast,
      IndexOfTestingSlot.EastOfNortheast,
    ],
    initialColumnIndex: 7,
    initialRowIndex: 0,
    playersShouldBeOccupyingShapes: [
      {
        indexOfPlayer: null,
        shouldBeOccupyingShape: true,
      },
      {
        indexOfPlayer: IndexOfTestingPlayer.One,
        shouldBeOccupyingShape: true,
      },
      {
        indexOfPlayer: IndexOfTestingPlayer.Two,
        shouldBeOccupyingShape: true,
      },
    ],
    verticalSize: 2,
  });
})();

/* Row 4 */

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingRectangleOfSizeTwoByTwoForEveryPlayer({
    horizontalSize: 2,
    indexesOfSlots: [
      IndexOfTestingSlot.WestOfWest,
      IndexOfTestingSlot.CenterOfWest,
      IndexOfTestingSlot.SouthwestOfWest,
      IndexOfTestingSlot.SouthOfWest,
    ],
    initialColumnIndex: 0,
    initialRowIndex: 4,
    playersShouldBeOccupyingShapes: [
      {
        indexOfPlayer: null,
        shouldBeOccupyingShape: true,
      },
      {
        indexOfPlayer: IndexOfTestingPlayer.One,
        shouldBeOccupyingShape: true,
      },
      {
        indexOfPlayer: IndexOfTestingPlayer.Two,
        shouldBeOccupyingShape: true,
      },
    ],
    verticalSize: 2,
  });
})();

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingRectangleOfSizeTwoByTwoForEveryPlayer({
    horizontalSize: 2,
    indexesOfSlots: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.EastOfCenter,
      IndexOfTestingSlot.SouthOfCenter,
      IndexOfTestingSlot.SoutheastOfCenter,
    ],
    initialColumnIndex: 4,
    initialRowIndex: 4,
    playersShouldBeOccupyingShapes: [
      {
        indexOfPlayer: null,
        shouldBeOccupyingShape: true,
      },
      {
        indexOfPlayer: IndexOfTestingPlayer.One,
        shouldBeOccupyingShape: true,
      },
      {
        indexOfPlayer: IndexOfTestingPlayer.Two,
        shouldBeOccupyingShape: true,
      },
    ],
    verticalSize: 2,
  });
})();

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingRectangleOfSizeTwoByTwoForEveryPlayer({
    horizontalSize: 2,
    indexesOfSlots: [
      IndexOfTestingSlot.CenterOfEast,
      IndexOfTestingSlot.EastOfEast,
      IndexOfTestingSlot.SouthOfEast,
      IndexOfTestingSlot.SoutheastOfEast,
    ],
    initialColumnIndex: 7,
    initialRowIndex: 4,
    playersShouldBeOccupyingShapes: [
      {
        indexOfPlayer: null,
        shouldBeOccupyingShape: true,
      },
      {
        indexOfPlayer: IndexOfTestingPlayer.One,
        shouldBeOccupyingShape: true,
      },
      {
        indexOfPlayer: IndexOfTestingPlayer.Two,
        shouldBeOccupyingShape: true,
      },
    ],
    verticalSize: 2,
  });
})();

/* Row 7 */

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingRectangleOfSizeTwoByTwoForEveryPlayer({
    horizontalSize: 2,
    indexesOfSlots: [
      IndexOfTestingSlot.WestOfSouthwest,
      IndexOfTestingSlot.CenterOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouthwest,
      IndexOfTestingSlot.SouthOfSouthwest,
    ],
    initialColumnIndex: 0,
    initialRowIndex: 7,
    playersShouldBeOccupyingShapes: [
      {
        indexOfPlayer: null,
        shouldBeOccupyingShape: true,
      },
      {
        indexOfPlayer: IndexOfTestingPlayer.One,
        shouldBeOccupyingShape: true,
      },
      {
        indexOfPlayer: IndexOfTestingPlayer.Two,
        shouldBeOccupyingShape: true,
      },
    ],
    verticalSize: 2,
  });
})();

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingRectangleOfSizeTwoByTwoForEveryPlayer({
    horizontalSize: 2,
    indexesOfSlots: [
      IndexOfTestingSlot.CenterOfSouth,
      IndexOfTestingSlot.EastOfSouth,
      IndexOfTestingSlot.SouthOfSouth,
      IndexOfTestingSlot.SoutheastOfSouth,
    ],
    initialColumnIndex: 4,
    initialRowIndex: 7,
    playersShouldBeOccupyingShapes: [
      {
        indexOfPlayer: null,
        shouldBeOccupyingShape: true,
      },
      {
        indexOfPlayer: IndexOfTestingPlayer.One,
        shouldBeOccupyingShape: true,
      },
      {
        indexOfPlayer: IndexOfTestingPlayer.Two,
        shouldBeOccupyingShape: true,
      },
    ],
    verticalSize: 2,
  });
})();

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingRectangleOfSizeTwoByTwoForEveryPlayer({
    horizontalSize: 2,
    indexesOfSlots: [
      IndexOfTestingSlot.CenterOfSoutheast,
      IndexOfTestingSlot.EastOfSoutheast,
      IndexOfTestingSlot.SouthOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialColumnIndex: 7,
    initialRowIndex: 7,
    playersShouldBeOccupyingShapes: [
      {
        indexOfPlayer: null,
        shouldBeOccupyingShape: true,
      },
      {
        indexOfPlayer: IndexOfTestingPlayer.One,
        shouldBeOccupyingShape: true,
      },
      {
        indexOfPlayer: IndexOfTestingPlayer.Two,
        shouldBeOccupyingShape: true,
      },
    ],
    verticalSize: 2,
  });
})();
