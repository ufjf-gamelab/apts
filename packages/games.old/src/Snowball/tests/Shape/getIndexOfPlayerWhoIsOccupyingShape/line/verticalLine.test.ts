import type { Integer } from "@repo/engine_core/types.js";

import type { Line } from "../../../../Shape.js";
import { IndexOfTestingPlayer } from "../../../Player/setup.js";
import { IndexOfTestingSlot } from "../../../Slot/setup.js";
import {
  type PlayerShouldBeOccupyingShape,
  testGetIndexOfPlayerWhoIsOccupyingShapeForEveryPlayer,
} from "../getIndexOfPlayerWhoIsOccupyingShape.js";

const testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer = ({
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
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
      IndexOfTestingSlot.NorthwestOfWest,
      IndexOfTestingSlot.WestOfWest,
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
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.CenterOfNorth,
      IndexOfTestingSlot.SouthOfNorth,
      IndexOfTestingSlot.NorthOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
    ],
    initialIndexOfColumn: 4,
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
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NortheastOfNortheast,
      IndexOfTestingSlot.EastOfNortheast,
      IndexOfTestingSlot.SoutheastOfNortheast,
      IndexOfTestingSlot.NortheastOfEast,
      IndexOfTestingSlot.EastOfEast,
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
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NortheastOfNortheast,
      IndexOfTestingSlot.EastOfNortheast,
      IndexOfTestingSlot.SoutheastOfNortheast,
      IndexOfTestingSlot.NortheastOfEast,
      IndexOfTestingSlot.EastOfEast,
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
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
      IndexOfTestingSlot.NorthwestOfWest,
      IndexOfTestingSlot.WestOfWest,
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
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.CenterOfNorth,
      IndexOfTestingSlot.SouthOfNorth,
      IndexOfTestingSlot.NorthOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
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
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NortheastOfNortheast,
      IndexOfTestingSlot.EastOfNortheast,
      IndexOfTestingSlot.SoutheastOfNortheast,
      IndexOfTestingSlot.NortheastOfEast,
      IndexOfTestingSlot.EastOfEast,
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
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NortheastOfNortheast,
      IndexOfTestingSlot.EastOfNortheast,
      IndexOfTestingSlot.SoutheastOfNortheast,
      IndexOfTestingSlot.NortheastOfEast,
      IndexOfTestingSlot.EastOfEast,
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
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
      IndexOfTestingSlot.NorthwestOfWest,
      IndexOfTestingSlot.WestOfWest,
    ],
    initialIndexOfColumn: -1,
    initialIndexOfRow: 4,
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
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.SouthOfCenter,
      IndexOfTestingSlot.NorthOfSouth,
      IndexOfTestingSlot.CenterOfSouth,
      IndexOfTestingSlot.SouthOfSouth,
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
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.EastOfEast,
      IndexOfTestingSlot.SoutheastOfEast,
      IndexOfTestingSlot.NortheastOfSoutheast,
      IndexOfTestingSlot.EastOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
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

((): void => {
  testGetIndexOfPlayerWhoIsOccupyingVerticalLineForEveryPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.EastOfEast,
      IndexOfTestingSlot.SoutheastOfEast,
      IndexOfTestingSlot.NortheastOfSoutheast,
      IndexOfTestingSlot.EastOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialIndexOfColumn: 9,
    initialIndexOfRow: 4,
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
    initialIndexOfColumn: -1,
    initialIndexOfRow: 5,
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
    initialIndexOfColumn: 0,
    initialIndexOfRow: 5,
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
    initialIndexOfColumn: 4,
    initialIndexOfRow: 5,
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
    initialIndexOfColumn: 8,
    initialIndexOfRow: 5,
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
    initialIndexOfColumn: 9,
    initialIndexOfRow: 5,
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
