import type { Integer } from "../../../../../types.js";
import { IndexOfTestingPlayer } from "../../../Player/setup.js";
import { IndexOfTestingSlot } from "../../../Slot/setup.js";
import {
  type PlayerShouldBeOccupyingShape,
  testGetIndexOfPlayerWhoIsOccupyingShapeForEveryPlayer,
} from "../getIndexOfPlayerWhoIsOccupyingShape.js";

const testGetIndexOfPlayerWhoIsOccupyingSecondaryDiagonalForEveryPlayer = ({
  indexesOfSlots,
  initialColumnIndex,
  initialRowIndex,
  playersShouldBeOccupyingShapes,
  size,
}: {
  indexesOfSlots: IndexOfTestingSlot[];
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
  playersShouldBeOccupyingShapes: PlayerShouldBeOccupyingShape[];
  size: Integer;
}): void => {
  testGetIndexOfPlayerWhoIsOccupyingShapeForEveryPlayer({
    indexesOfSlots,
    initialColumnIndex,
    initialRowIndex,
    playersShouldBeOccupyingShapes,
    shape: {
      direction: "secondaryDiagonal",
      size,
      type: "line",
    },
  });
};

/* Row -1 */

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingSecondaryDiagonalForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NortheastOfNortheast,
      IndexOfTestingSlot.CenterOfNortheast,
      IndexOfTestingSlot.SouthwestOfNortheast,
      IndexOfTestingSlot.NortheastOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
    ],
    initialColumnIndex: 9,
    initialRowIndex: -1,
    playersShouldBeOccupyingShapes: [
      {
        indexOfPlayer: null,
        shouldBeOccupyingShape: true,
      },
      {
        indexOfPlayer: IndexOfTestingPlayer.One,
        shouldBeOccupyingShape: false,
      },
      {
        indexOfPlayer: IndexOfTestingPlayer.Two,
        shouldBeOccupyingShape: false,
      },
    ],
    size: 5,
  });
})();

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingSecondaryDiagonalForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthOfNortheast,
      IndexOfTestingSlot.WestOfNortheast,
      IndexOfTestingSlot.SoutheastOfNorth,
      IndexOfTestingSlot.NorthOfCenter,
      IndexOfTestingSlot.WestOfCenter,
    ],
    initialColumnIndex: 8,
    initialRowIndex: -1,
    playersShouldBeOccupyingShapes: [
      {
        indexOfPlayer: null,
        shouldBeOccupyingShape: true,
      },
      {
        indexOfPlayer: IndexOfTestingPlayer.One,
        shouldBeOccupyingShape: false,
      },
      {
        indexOfPlayer: IndexOfTestingPlayer.Two,
        shouldBeOccupyingShape: false,
      },
    ],
    size: 5,
  });
})();

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingSecondaryDiagonalForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.WestOfNorth,
      IndexOfTestingSlot.SoutheastOfNorthwest,
      IndexOfTestingSlot.NorthOfWest,
      IndexOfTestingSlot.WestOfWest,
    ],
    initialColumnIndex: 5,
    initialRowIndex: -1,
    playersShouldBeOccupyingShapes: [
      {
        indexOfPlayer: null,
        shouldBeOccupyingShape: true,
      },
      {
        indexOfPlayer: IndexOfTestingPlayer.One,
        shouldBeOccupyingShape: false,
      },
      {
        indexOfPlayer: IndexOfTestingPlayer.Two,
        shouldBeOccupyingShape: false,
      },
    ],
    size: 5,
  });
})();

/* Row 0 */

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingSecondaryDiagonalForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.WestOfNorth,
      IndexOfTestingSlot.SoutheastOfNorthwest,
      IndexOfTestingSlot.NorthOfWest,
      IndexOfTestingSlot.WestOfWest,
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
    size: 5,
  });
})();

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingSecondaryDiagonalForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NortheastOfNortheast,
      IndexOfTestingSlot.CenterOfNortheast,
      IndexOfTestingSlot.SouthwestOfNortheast,
      IndexOfTestingSlot.NortheastOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
    ],
    initialColumnIndex: 8,
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
    size: 5,
  });
})();

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingSecondaryDiagonalForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.EastOfNortheast,
      IndexOfTestingSlot.SouthOfNortheast,
      IndexOfTestingSlot.NorthwestOfEast,
      IndexOfTestingSlot.EastOfCenter,
      IndexOfTestingSlot.SouthOfCenter,
    ],
    initialColumnIndex: 9,
    initialRowIndex: 0,
    playersShouldBeOccupyingShapes: [
      {
        indexOfPlayer: null,
        shouldBeOccupyingShape: true,
      },
      {
        indexOfPlayer: IndexOfTestingPlayer.One,
        shouldBeOccupyingShape: false,
      },
      {
        indexOfPlayer: IndexOfTestingPlayer.Two,
        shouldBeOccupyingShape: false,
      },
    ],
    size: 5,
  });
})();

/* Row 4 */

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingSecondaryDiagonalForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.SouthwestOfCenter,
      IndexOfTestingSlot.NortheastOfSouthwest,
      IndexOfTestingSlot.CenterOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouthwest,
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
    size: 5,
  });
})();

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingSecondaryDiagonalForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.EastOfEast,
      IndexOfTestingSlot.SouthOfEast,
      IndexOfTestingSlot.NorthwestOfSoutheast,
      IndexOfTestingSlot.EastOfSouth,
      IndexOfTestingSlot.SouthOfSouth,
    ],
    initialColumnIndex: 8,
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
    size: 5,
  });
})();
