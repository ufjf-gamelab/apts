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
    initialIndexOfColumn,
    initialIndexOfRow,
    playersShouldBeOccupyingShapes,
    verticalSize,
  }: {
    horizontalSize: Rectangle["horizontalSize"];
    indexesOfSlots: IndexOfTestingSlot[];
    initialIndexOfColumn: Integer;
    initialIndexOfRow: Integer;
    playersShouldBeOccupyingShapes: PlayerShouldBeOccupyingShape[];
    verticalSize: Rectangle["verticalSize"];
  }): void => {
    testGetIndexOfPlayerWhoIsOccupyingShapeForEveryPlayer({
      indexesOfSlots,
      initialIndexOfColumn,
      initialIndexOfRow,
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
    initialIndexOfColumn: 0,
    initialIndexOfRow: 0,
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
    initialIndexOfColumn: 4,
    initialIndexOfRow: 0,
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
    initialIndexOfColumn: 7,
    initialIndexOfRow: 0,
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
    initialIndexOfColumn: 0,
    initialIndexOfRow: 4,
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
    initialIndexOfColumn: 4,
    initialIndexOfRow: 4,
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
    initialIndexOfColumn: 7,
    initialIndexOfRow: 4,
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
    initialIndexOfColumn: 0,
    initialIndexOfRow: 7,
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
    initialIndexOfColumn: 4,
    initialIndexOfRow: 7,
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
    initialIndexOfColumn: 7,
    initialIndexOfRow: 7,
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
