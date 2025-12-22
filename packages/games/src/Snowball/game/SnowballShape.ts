import type { Integer } from "@repo/core/types.js";
import type { IndexOfPlayer } from "@repo/game/Player.js";
import type { IndexOfSlot } from "@repo/game/Slot.js";

import { FIRST_INDEX, INCREMENT_ONE } from "@repo/core/constants.js";

import { SnowballScore } from "./SnowballScore.js";
import { SnowballSlot } from "./SnowballSlot.js";

const ADJUST_INDEX = 1;

const QUANTITY_OF_ROWS = 9;
const QUANTITY_OF_COLUMNS = 9;

const sizeOfPatternsUsedForCalculatingPoints = {
  largeSquare: 3,
  line: 5,
  smallSquare: 2,
} as const;

interface Line {
  direction:
    | "horizontal"
    | "principalDiagonal"
    | "secondaryDiagonal"
    | "vertical";
  size: Integer;
  type: "line";
}

interface Rectangle {
  horizontalSize: Integer;
  type: "rectangle";
  verticalSize: Integer;
}

type Shape = Line | Rectangle;

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
} => {
  if (shape.type === "line") {
    return {
      name: getNameOfDirection({ direction: shape.direction }),
      size: shape.size.toString(),
    };
  }
  return {
    name: "rectangle",
    size: `${shape.horizontalSize}x${shape.verticalSize}`,
  };
};

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
    indexOfRow < QUANTITY_OF_ROWS &&
    indexOfColumn >= FIRST_INDEX &&
    indexOfColumn < QUANTITY_OF_COLUMNS
  ) {
    validIndexes.push(indexOfRow * QUANTITY_OF_COLUMNS + indexOfColumn);
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
    pushIndexOfSlotIntoList({
      indexOfColumn,
      indexOfRow,
      validIndexes,
    });
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
    pushIndexOfSlotIntoList({
      indexOfColumn,
      indexOfRow,
      validIndexes,
    });
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
    pushIndexOfSlotIntoList({
      indexOfColumn,
      indexOfRow,
      validIndexes,
    });
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
    pushIndexOfSlotIntoList({
      indexOfColumn,
      indexOfRow,
      validIndexes,
    });
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

const getIndexesOfRectangle = ({
  horizontalSize,
  initialIndexOfColumn,
  initialIndexOfRow,
  verticalSize,
}: {
  horizontalSize: Rectangle["horizontalSize"];
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  verticalSize: Rectangle["verticalSize"];
}): Integer[] => {
  const validIndexes = [];
  for (
    let iterationOnRow = 0;
    iterationOnRow < verticalSize;
    iterationOnRow += INCREMENT_ONE
  ) {
    const indexOfRow = initialIndexOfRow + iterationOnRow;
    if (indexOfRow < FIRST_INDEX || indexOfRow >= QUANTITY_OF_ROWS) {
      continue;
    }
    for (
      let iterationOnColumn = 0;
      iterationOnColumn < horizontalSize;
      iterationOnColumn += INCREMENT_ONE
    ) {
      const indexOfColumn = initialIndexOfColumn + iterationOnColumn;
      if (indexOfColumn < FIRST_INDEX || indexOfColumn >= QUANTITY_OF_COLUMNS) {
        continue;
      }
      validIndexes.push(indexOfRow * QUANTITY_OF_COLUMNS + indexOfColumn);
    }
  }
  return validIndexes;
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
  const { type } = shape;
  switch (type) {
    case "line": {
      const { direction, size } = shape;
      return getIndexesOfLine({
        direction,
        initialIndexOfColumn,
        initialIndexOfRow,
        size,
      });
    }
    case "rectangle": {
      const { horizontalSize, verticalSize } = shape;
      return getIndexesOfRectangle({
        horizontalSize,
        initialIndexOfColumn,
        initialIndexOfRow,
        verticalSize,
      });
    }
    default: {
      throw new Error(`Invalid type "${type as string}" for shape.`);
    }
  }
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
  slots: SnowballSlot[];
}): IndexOfPlayer | null => {
  const indexesOfSlots = getIndexesOfSlots({
    initialIndexOfColumn,
    initialIndexOfRow,
    shape,
  });

  if (
    (shape.type === "line" && shape.size !== indexesOfSlots.length) ||
    (shape.type === "rectangle" &&
      shape.horizontalSize * shape.verticalSize !== indexesOfSlots.length)
  ) {
    return null;
  }

  let indexOfLastOccupyingPlayer: IndexOfPlayer | null = null;
  for (const indexOfSlot of indexesOfSlots) {
    const slot = SnowballSlot.getSlot({ indexOfSlot, slots });
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

const getIncrementedScoreForPlayer = ({
  indexOfPlayerWhoIsOccupyingShape,
  score,
}: {
  indexOfPlayerWhoIsOccupyingShape: IndexOfPlayer | null;
  score: SnowballScore;
}): SnowballScore => {
  if (indexOfPlayerWhoIsOccupyingShape !== null) {
    const currentPointsForPlayer = score.getPointsOfPlayer({
      indexOfPlayer: indexOfPlayerWhoIsOccupyingShape,
    });

    const pointsOfEachPlayer = new Map(score.getPointsOfEachPlayer());
    pointsOfEachPlayer.set(
      indexOfPlayerWhoIsOccupyingShape,
      currentPointsForPlayer + INCREMENT_ONE,
    );

    return new SnowballScore({ pointsOfEachPlayer });
  }

  return score;
};

const getScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots = ({
  initialIndexOfColumn,
  initialIndexOfRow,
  score,
  shape,
  slots,
}: {
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  score: SnowballScore;
  shape: Shape;
  slots: SnowballSlot[];
}): SnowballScore => {
  const indexOfPlayerWhoIsOccupyingShape = getIndexOfPlayerWhoIsOccupyingShape({
    initialIndexOfColumn,
    initialIndexOfRow,
    shape,
    slots,
  });
  return getIncrementedScoreForPlayer({
    indexOfPlayerWhoIsOccupyingShape,
    score,
  });
};

export type { Line, Rectangle, Shape };
export {
  getIndexesOfSlots,
  getIndexOfPlayerWhoIsOccupyingShape,
  getNameAndFormattedSizeOfShape,
  getNameOfDirection,
  getScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots,
  QUANTITY_OF_COLUMNS,
  QUANTITY_OF_ROWS,
  sizeOfPatternsUsedForCalculatingPoints,
};
