import type { Integer } from "@repo/engine_core/types.js";

import type { Line } from "../../../../Shape.js";
import { IndexOfTestingPlayer } from "../../../Player/setup.js";
import { IndexOfTestingSlot } from "../../../Slot/setup.js";
import {
  type PlayerShouldBeOccupyingShape,
  testGetIndexOfPlayerWhoIsOccupyingShapeForEveryPlayer,
} from "../getIndexOfPlayerWhoIsOccupyingShape.js";

const testGetIndexOfPlayerWhoIsOccupyingPrincipalDiagonalForEveryPlayer = ({
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
      direction: "principalDiagonal",
      size,
      type: "line",
    },
  });
};

/* Row -1 */

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingPrincipalDiagonalForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
      IndexOfTestingSlot.SoutheastOfNorthwest,
      IndexOfTestingSlot.NorthwestOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
    ],
    initialIndexOfColumn: -1,
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
  testGetIndexOfPlayerWhoIsOccupyingPrincipalDiagonalForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.EastOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorth,
      IndexOfTestingSlot.NorthOfCenter,
      IndexOfTestingSlot.EastOfCenter,
    ],
    initialIndexOfColumn: 0,
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
  testGetIndexOfPlayerWhoIsOccupyingPrincipalDiagonalForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.EastOfNorth,
      IndexOfTestingSlot.SouthwestOfNortheast,
      IndexOfTestingSlot.NorthOfEast,
      IndexOfTestingSlot.EastOfEast,
    ],
    initialIndexOfColumn: 3,
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
  testGetIndexOfPlayerWhoIsOccupyingPrincipalDiagonalForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.SouthOfNorthwest,
      IndexOfTestingSlot.NortheastOfWest,
      IndexOfTestingSlot.WestOfCenter,
      IndexOfTestingSlot.SouthOfCenter,
    ],
    initialIndexOfColumn: -1,
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

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingPrincipalDiagonalForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
      IndexOfTestingSlot.SoutheastOfNorthwest,
      IndexOfTestingSlot.NorthwestOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
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
    size: 5,
  });
})();

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingPrincipalDiagonalForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.EastOfNorth,
      IndexOfTestingSlot.SouthwestOfNortheast,
      IndexOfTestingSlot.NorthOfEast,
      IndexOfTestingSlot.EastOfEast,
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

/* Row 4 */

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingPrincipalDiagonalForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.WestOfWest,
      IndexOfTestingSlot.SouthOfWest,
      IndexOfTestingSlot.NortheastOfSouthwest,
      IndexOfTestingSlot.WestOfSouth,
      IndexOfTestingSlot.SouthOfSouth,
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
    size: 5,
  });
})();

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingPrincipalDiagonalForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.SoutheastOfCenter,
      IndexOfTestingSlot.NorthwestOfSoutheast,
      IndexOfTestingSlot.CenterOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
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
