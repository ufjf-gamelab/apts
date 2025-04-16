import type { Integer } from "../../../../../types.js";
import { IndexOfTestingPlayer } from "../../../Player/setup.js";
import { IndexOfTestingSlot } from "../../../Slot/setup.js";
import {
  type PlayerShouldBeOccupyingShape,
  testGetIndexOfPlayerWhoIsOccupyingShapeForEveryPlayer,
} from "../getIndexOfPlayerWhoIsOccupyingShape.js";

const testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer = ({
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
      direction: "vertical",
      size,
      type: "line",
    },
  });
};

/* Row -1 */

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
      IndexOfTestingSlot.NorthwestOfWest,
      IndexOfTestingSlot.WestOfWest,
    ],
    initialColumnIndex: -1,
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
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
      IndexOfTestingSlot.NorthwestOfWest,
      IndexOfTestingSlot.WestOfWest,
    ],
    initialColumnIndex: 0,
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
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.CenterOfNorth,
      IndexOfTestingSlot.SouthOfNorth,
      IndexOfTestingSlot.NorthOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
    ],
    initialColumnIndex: 4,
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
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NortheastOfNortheast,
      IndexOfTestingSlot.EastOfNortheast,
      IndexOfTestingSlot.SoutheastOfNortheast,
      IndexOfTestingSlot.NortheastOfEast,
      IndexOfTestingSlot.EastOfEast,
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
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NortheastOfNortheast,
      IndexOfTestingSlot.EastOfNortheast,
      IndexOfTestingSlot.SoutheastOfNortheast,
      IndexOfTestingSlot.NortheastOfEast,
      IndexOfTestingSlot.EastOfEast,
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

/* Row 0 */

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
      IndexOfTestingSlot.NorthwestOfWest,
      IndexOfTestingSlot.WestOfWest,
    ],
    initialColumnIndex: -1,
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

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
      IndexOfTestingSlot.NorthwestOfWest,
      IndexOfTestingSlot.WestOfWest,
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
    size: 5,
  });
})();

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.CenterOfNorth,
      IndexOfTestingSlot.SouthOfNorth,
      IndexOfTestingSlot.NorthOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
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
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NortheastOfNortheast,
      IndexOfTestingSlot.EastOfNortheast,
      IndexOfTestingSlot.SoutheastOfNortheast,
      IndexOfTestingSlot.NortheastOfEast,
      IndexOfTestingSlot.EastOfEast,
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
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NortheastOfNortheast,
      IndexOfTestingSlot.EastOfNortheast,
      IndexOfTestingSlot.SoutheastOfNortheast,
      IndexOfTestingSlot.NortheastOfEast,
      IndexOfTestingSlot.EastOfEast,
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
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
      IndexOfTestingSlot.NorthwestOfWest,
      IndexOfTestingSlot.WestOfWest,
    ],
    initialColumnIndex: -1,
    initialRowIndex: 4,
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
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.WestOfWest,
      IndexOfTestingSlot.SouthwestOfWest,
      IndexOfTestingSlot.NorthwestOfSouthwest,
      IndexOfTestingSlot.WestOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouthwest,
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
    size: 5,
  });
})();

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.SouthOfCenter,
      IndexOfTestingSlot.NorthOfSouth,
      IndexOfTestingSlot.CenterOfSouth,
      IndexOfTestingSlot.SouthOfSouth,
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
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.EastOfEast,
      IndexOfTestingSlot.SoutheastOfEast,
      IndexOfTestingSlot.NortheastOfSoutheast,
      IndexOfTestingSlot.EastOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
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

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.EastOfEast,
      IndexOfTestingSlot.SoutheastOfEast,
      IndexOfTestingSlot.NortheastOfSoutheast,
      IndexOfTestingSlot.EastOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialColumnIndex: 9,
    initialRowIndex: 4,
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

/* Row 5 */

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
      IndexOfTestingSlot.NorthwestOfWest,
      IndexOfTestingSlot.WestOfWest,
    ],
    initialColumnIndex: -1,
    initialRowIndex: 5,
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
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.WestOfWest,
      IndexOfTestingSlot.SouthwestOfWest,
      IndexOfTestingSlot.NorthwestOfSouthwest,
      IndexOfTestingSlot.WestOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouthwest,
    ],
    initialColumnIndex: 0,
    initialRowIndex: 5,
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
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.SouthOfCenter,
      IndexOfTestingSlot.NorthOfSouth,
      IndexOfTestingSlot.CenterOfSouth,
      IndexOfTestingSlot.SouthOfSouth,
    ],
    initialColumnIndex: 4,
    initialRowIndex: 5,
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
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.EastOfEast,
      IndexOfTestingSlot.SoutheastOfEast,
      IndexOfTestingSlot.NortheastOfSoutheast,
      IndexOfTestingSlot.EastOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialColumnIndex: 8,
    initialRowIndex: 5,
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
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.EastOfEast,
      IndexOfTestingSlot.SoutheastOfEast,
      IndexOfTestingSlot.NortheastOfSoutheast,
      IndexOfTestingSlot.EastOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialColumnIndex: 9,
    initialRowIndex: 5,
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
