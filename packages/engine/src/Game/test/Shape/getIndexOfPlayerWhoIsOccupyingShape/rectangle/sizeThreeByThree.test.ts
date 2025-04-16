import type { Integer } from "../../../../../types.js";
import { IndexOfTestingPlayer } from "../../../Player/setup.js";
import type { Rectangle } from "../../../Shape.js";
import { IndexOfTestingSlot } from "../../../Slot/setup.js";
import {
  type PlayerShouldBeOccupyingShape,
  testGetIndexOfPlayerWhoIsOccupyingShapeForEveryPlayer,
} from "../getIndexOfPlayerWhoIsOccupyingShape.js";

const testGetIndexOfPlayerWhoIsOccupyingRectangleOfSizeThreeByThreeForEveryPlayer =
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
  testGetIndexOfPlayerWhoIsOccupyingRectangleOfSizeThreeByThreeForEveryPlayer({
    horizontalSize: 3,
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
    verticalSize: 3,
  });
})();

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingRectangleOfSizeThreeByThreeForEveryPlayer({
    horizontalSize: 3,
    indexesOfSlots: [
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.NortheastOfNorth,
      IndexOfTestingSlot.NorthwestOfNortheast,
      IndexOfTestingSlot.CenterOfNorth,
      IndexOfTestingSlot.EastOfNorth,
      IndexOfTestingSlot.WestOfNortheast,
      IndexOfTestingSlot.SouthOfNorth,
      IndexOfTestingSlot.SoutheastOfNorth,
      IndexOfTestingSlot.SouthwestOfNortheast,
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
    verticalSize: 3,
  });
})();

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingRectangleOfSizeThreeByThreeForEveryPlayer({
    horizontalSize: 3,
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNortheast,
      IndexOfTestingSlot.NorthOfNortheast,
      IndexOfTestingSlot.NortheastOfNortheast,
      IndexOfTestingSlot.WestOfNortheast,
      IndexOfTestingSlot.CenterOfNortheast,
      IndexOfTestingSlot.EastOfNortheast,
      IndexOfTestingSlot.SouthwestOfNortheast,
      IndexOfTestingSlot.SouthOfNortheast,
      IndexOfTestingSlot.SoutheastOfNortheast,
    ],
    initialIndexOfColumn: 6,
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
    verticalSize: 3,
  });
})();

/* Row 4 */

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingRectangleOfSizeThreeByThreeForEveryPlayer({
    horizontalSize: 3,
    indexesOfSlots: [
      IndexOfTestingSlot.WestOfWest,
      IndexOfTestingSlot.CenterOfWest,
      IndexOfTestingSlot.EastOfWest,
      IndexOfTestingSlot.SouthwestOfWest,
      IndexOfTestingSlot.SouthOfWest,
      IndexOfTestingSlot.SoutheastOfWest,
      IndexOfTestingSlot.NorthwestOfSouthwest,
      IndexOfTestingSlot.NorthOfSouthwest,
      IndexOfTestingSlot.NortheastOfSouthwest,
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
    verticalSize: 3,
  });
})();

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingRectangleOfSizeThreeByThreeForEveryPlayer({
    horizontalSize: 3,
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
    verticalSize: 3,
  });
})();

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingRectangleOfSizeThreeByThreeForEveryPlayer({
    horizontalSize: 3,
    indexesOfSlots: [
      IndexOfTestingSlot.WestOfEast,
      IndexOfTestingSlot.CenterOfEast,
      IndexOfTestingSlot.EastOfEast,
      IndexOfTestingSlot.SouthwestOfEast,
      IndexOfTestingSlot.SouthOfEast,
      IndexOfTestingSlot.SoutheastOfEast,
      IndexOfTestingSlot.NorthwestOfSoutheast,
      IndexOfTestingSlot.NorthOfSoutheast,
      IndexOfTestingSlot.NortheastOfSoutheast,
    ],
    initialIndexOfColumn: 6,
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
    verticalSize: 3,
  });
})();

/* Row 6 */

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingRectangleOfSizeThreeByThreeForEveryPlayer({
    horizontalSize: 3,
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfSouthwest,
      IndexOfTestingSlot.NorthOfSouthwest,
      IndexOfTestingSlot.NortheastOfSouthwest,
      IndexOfTestingSlot.WestOfSouthwest,
      IndexOfTestingSlot.CenterOfSouthwest,
      IndexOfTestingSlot.EastOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouthwest,
      IndexOfTestingSlot.SouthOfSouthwest,
      IndexOfTestingSlot.SoutheastOfSouthwest,
    ],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 6,
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
    verticalSize: 3,
  });
})();

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingRectangleOfSizeThreeByThreeForEveryPlayer({
    horizontalSize: 3,
    indexesOfSlots: [
      IndexOfTestingSlot.NorthOfSouth,
      IndexOfTestingSlot.NortheastOfSouth,
      IndexOfTestingSlot.NorthwestOfSoutheast,
      IndexOfTestingSlot.CenterOfSouth,
      IndexOfTestingSlot.EastOfSouth,
      IndexOfTestingSlot.WestOfSoutheast,
      IndexOfTestingSlot.SouthOfSouth,
      IndexOfTestingSlot.SoutheastOfSouth,
      IndexOfTestingSlot.SouthwestOfSoutheast,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 6,
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
    verticalSize: 3,
  });
})();

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingRectangleOfSizeThreeByThreeForEveryPlayer({
    horizontalSize: 3,
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfSoutheast,
      IndexOfTestingSlot.NorthOfSoutheast,
      IndexOfTestingSlot.NortheastOfSoutheast,
      IndexOfTestingSlot.WestOfSoutheast,
      IndexOfTestingSlot.CenterOfSoutheast,
      IndexOfTestingSlot.EastOfSoutheast,
      IndexOfTestingSlot.SouthwestOfSoutheast,
      IndexOfTestingSlot.SouthOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialIndexOfColumn: 6,
    initialIndexOfRow: 6,
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
    verticalSize: 3,
  });
})();
