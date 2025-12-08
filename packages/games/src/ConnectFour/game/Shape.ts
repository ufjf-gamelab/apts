import type { Integer } from "@repo/engine_core/types.js";
import type { IndexOfPlayer } from "@repo/game/Player.js";
import type { IndexOfSlot } from "@repo/game/Slot.js";

import { FIRST_INDEX } from "@repo/engine_core/constants.js";

import { ConnectFourSlot } from "./Slot.js";

const ADJUST_INDEX = 1;

const COLUMN_LENGTH = 6;
const ROW_LENGTH = 7;

const sizeOfPatternsUsedForCalculatingPoints = {
  line: 4,
} as const;

interface Line {
  direction:
    | "horizontal"
    | "principalDiagonal"
    | "secondaryDiagonal"
    | "vertical";
  size: Integer;
}

type Shape = Line;

const getNameOfDirection = ({
  direction,
}: {
  direction: Line["direction"];
}): string => {
  switch (direction) {
    case "horizontal":
    case "vertical":
      return `${direction} line`;
    case "principalDiagonal":
      return "principal diagonal";
    case "secondaryDiagonal":
      return "secondary diagonal";
    default:
      return "unknown direction";
  }
};

const getNameAndFormattedSizeOfShape = ({
  shape,
}: {
  shape: Shape;
}): {
  name: string;
  size: string;
} => ({
  name: getNameOfDirection({ direction: shape.direction }),
  size: shape.size.toString(),
});

const pushIndexOfSlotIntoList = ({
  indexOfColumn,
  indexOfRow,
  validIndexes,
}: {
  indexOfColumn: Integer;
  indexOfRow: Integer;
  validIndexes: IndexOfSlot[];
}) => {
  if (
    indexOfRow >= FIRST_INDEX &&
    indexOfRow < COLUMN_LENGTH &&
    indexOfColumn >= FIRST_INDEX &&
    indexOfColumn < ROW_LENGTH
  ) {
    validIndexes.push(indexOfRow * ROW_LENGTH + indexOfColumn);
  }
};

const getIndexesOfShapeForHorizontalLine = ({
  initialIndexOfColumn,
  initialIndexOfRow,
  size,
}: {
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  size: Line["size"];
}): Integer[] => {
  const validIndexes: IndexOfSlot[] = [];
  for (let index = 0; index < size; index += ADJUST_INDEX) {
    const indexOfRow = initialIndexOfRow;
    const indexOfColumn = initialIndexOfColumn + index;
    pushIndexOfSlotIntoList({ indexOfColumn, indexOfRow, validIndexes });
  }
  return validIndexes;
};

const getIndexesOfShapeForPrincipalDiagonal = ({
  initialIndexOfColumn,
  initialIndexOfRow,
  size,
}: {
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  size: Line["size"];
}): Integer[] => {
  const validIndexes: IndexOfSlot[] = [];
  for (let index = 0; index < size; index += ADJUST_INDEX) {
    const indexOfRow = initialIndexOfRow + index;
    const indexOfColumn = initialIndexOfColumn + index;
    pushIndexOfSlotIntoList({ indexOfColumn, indexOfRow, validIndexes });
  }
  return validIndexes;
};

const getIndexesOfShapeForSecondaryDiagonal = ({
  initialIndexOfColumn,
  initialIndexOfRow,
  size,
}: {
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  size: Line["size"];
}): Integer[] => {
  const validIndexes: IndexOfSlot[] = [];
  for (let index = 0; index < size; index += ADJUST_INDEX) {
    const indexOfRow = initialIndexOfRow + index;
    const indexOfColumn = initialIndexOfColumn - index;
    pushIndexOfSlotIntoList({ indexOfColumn, indexOfRow, validIndexes });
  }
  return validIndexes;
};

const getIndexesOfShapeForVerticalLine = ({
  initialIndexOfColumn,
  initialIndexOfRow,
  size,
}: {
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  size: Integer;
}): Integer[] => {
  const validIndexes: IndexOfSlot[] = [];
  for (let index = 0; index < size; index += ADJUST_INDEX) {
    const indexOfRow = initialIndexOfRow + index;
    const indexOfColumn = initialIndexOfColumn;
    pushIndexOfSlotIntoList({ indexOfColumn, indexOfRow, validIndexes });
  }
  return validIndexes;
};

const getIndexesOfLine = ({
  direction,
  initialIndexOfColumn,
  initialIndexOfRow,
  size,
}: {
  direction: Line["direction"];
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  size: Line["size"];
}): Integer[] => {
  switch (direction) {
    case "horizontal": {
      return getIndexesOfShapeForHorizontalLine({
        initialIndexOfColumn,
        initialIndexOfRow,
        size,
      });
    }
    case "principalDiagonal": {
      return getIndexesOfShapeForPrincipalDiagonal({
        initialIndexOfColumn,
        initialIndexOfRow,
        size,
      });
    }
    case "secondaryDiagonal": {
      return getIndexesOfShapeForSecondaryDiagonal({
        initialIndexOfColumn,
        initialIndexOfRow,
        size,
      });
    }
    case "vertical": {
      return getIndexesOfShapeForVerticalLine({
        initialIndexOfColumn,
        initialIndexOfRow,
        size,
      });
    }
    default: {
      throw new Error(
        `Invalid direction "${direction as string}" for line shape.`,
      );
    }
  }
};

const getIndexesOfSlots = ({
  initialIndexOfColumn,
  initialIndexOfRow,
  shape,
}: {
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  shape: Shape;
}): IndexOfSlot[] => {
  const { direction, size } = shape;
  return getIndexesOfLine({
    direction,
    initialIndexOfColumn,
    initialIndexOfRow,
    size,
  });
};

const getIndexOfPlayerWhoIsOccupyingShape = ({
  initialIndexOfColumn,
  initialIndexOfRow,
  shape,
  slots,
}: {
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  shape: Shape;
  slots: ConnectFourSlot[];
}): IndexOfPlayer | null => {
  const indexesOfSlots = getIndexesOfSlots({
    initialIndexOfColumn,
    initialIndexOfRow,
    shape,
  });

  if (shape.size !== indexesOfSlots.length) {
    return null;
  }

  let indexOfLastOccupyingPlayer: IndexOfPlayer | null = null;
  for (const indexOfSlot of indexesOfSlots) {
    const slot = ConnectFourSlot.getSlot({ indexOfSlot, slots });
    if (slot === null) {
      return null;
    }

    const indexOfOccupyingPlayer: IndexOfPlayer | null =
      slot.getIndexOfOccupyingPlayer();
    if (indexOfOccupyingPlayer === null) {
      return null;
    }

    if (indexOfLastOccupyingPlayer === null) {
      indexOfLastOccupyingPlayer = indexOfOccupyingPlayer;
    } else if (indexOfLastOccupyingPlayer !== indexOfOccupyingPlayer) {
      return null;
    }
  }
  return indexOfLastOccupyingPlayer;
};

export type { Shape };
export {
  COLUMN_LENGTH,
  getIndexesOfSlots,
  getIndexOfPlayerWhoIsOccupyingShape,
  getNameAndFormattedSizeOfShape,
  getNameOfDirection,
  ROW_LENGTH,
  sizeOfPatternsUsedForCalculatingPoints,
};
