import type { Integer } from "@repo/engine/types.js";

import type { Line } from "../../../../Shape.js";
import { IndexOfTestingPlayer } from "../../../Player/setup.js";
import { IndexOfTestingSlot } from "../../../Slot/setup.js";
import {
  type PlayerShouldBeOccupyingShape,
  testGetIndexOfPlayerWhoIsOccupyingShapeForEveryPlayer,
} from "../getIndexOfPlayerWhoIsOccupyingShape.js";

const testGetIndexOfPlayerWhoIsOccupyingSecondaryDiagonalForEveryPlayer = ({
  indexesOfSlots,
  initialIndexOfColumn,
  initialIndexOfRow,
  playersShouldBeOccupyingShapes,
  size,
}: {
  indexesOfSlots: IndexOfTestingSlot[];
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  playersShouldBeOccupyingShapes: PlayerShouldBeOccupyingShape[];
  size: Line["size"];
}): void => {
  testGetIndexOfPlayerWhoIsOccupyingShapeForEveryPlayer({
    indexesOfSlots,
    initialIndexOfColumn,
    initialIndexOfRow,
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
    initialIndexOfColumn: 9,
    initialIndexOfRow: -1,
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
    initialIndexOfColumn: 8,
    initialIndexOfRow: -1,
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
    initialIndexOfColumn: 5,
    initialIndexOfRow: -1,
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
    initialIndexOfColumn: 8,
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
    initialIndexOfColumn: 9,
    initialIndexOfRow: 0,
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
    initialIndexOfColumn: 8,
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
    size: 5,
  });
})();
