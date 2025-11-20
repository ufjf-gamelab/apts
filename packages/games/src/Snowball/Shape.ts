import type { Integer } from "@repo/engine_core/types.js";
import type { IndexOfPlayer } from "@repo/game/Player.js";
import type { IndexOfSlot } from "@repo/game/Slot.js";

import { FIRST_INDEX, INCREMENT_ONE } from "@repo/engine_core/constants.js";

import { SnowballScore } from "./Score.js";
import { SnowballSlot } from "./Slot.js";

const ADJUST_INDEX = 1;

const COLUMN_LENGTH = 9;
const ROW_LENGTH = 9;

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

const getFormattedDescriptorOfShape = ({
  initialIndexOfColumn,
  initialIndexOfRow,
  shape,
}: {
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  shape: Shape;
}): string => {
  const { name, size } = getNameAndFormattedSizeOfShape({ shape });
  return `${name} of size ${size} beginning on row ${initialIndexOfRow} and column ${initialIndexOfColumn}`;
};

const calculateIndexesOfShapeForHorizontalLine = ({
  columnLength,
  initialIndexOfColumn,
  initialIndexOfRow,
  rowLength,
  size,
}: {
  columnLength: Integer;
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  rowLength: Integer;
  size: Line["size"];
}): Integer[] => {
  const validIndexes = [];
  for (let index = 0; index < size; index += ADJUST_INDEX) {
    const indexOfRow = initialIndexOfRow;
    const indexOfColumn = initialIndexOfColumn + index;
    if (
      indexOfRow >= FIRST_INDEX &&
      indexOfRow < rowLength &&
      indexOfColumn >= FIRST_INDEX &&
      indexOfColumn < columnLength
    ) {
      validIndexes.push(indexOfRow * columnLength + indexOfColumn);
    }
  }
  return validIndexes;
};

const calculateIndexesOfShapeForPrincipalDiagonal = ({
  columnLength,
  initialIndexOfColumn,
  initialIndexOfRow,
  rowLength,
  size,
}: {
  columnLength: Integer;
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  rowLength: Integer;
  size: Line["size"];
}): Integer[] => {
  const validIndexes = [];
  for (let index = 0; index < size; index += ADJUST_INDEX) {
    const indexOfRow = initialIndexOfRow + index;
    const indexOfColumn = initialIndexOfColumn + index;
    if (
      indexOfRow >= FIRST_INDEX &&
      indexOfRow < rowLength &&
      indexOfColumn >= FIRST_INDEX &&
      indexOfColumn < columnLength
    ) {
      validIndexes.push(indexOfRow * columnLength + indexOfColumn);
    }
  }
  return validIndexes;
};

const calculateIndexesOfShapeForSecondaryDiagonal = ({
  columnLength,
  initialIndexOfColumn,
  initialIndexOfRow,
  rowLength,
  size,
}: {
  columnLength: Integer;
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  rowLength: Integer;
  size: Line["size"];
}): Integer[] => {
  const validIndexes = [];
  for (let index = 0; index < size; index += ADJUST_INDEX) {
    const indexOfRow = initialIndexOfRow + index;
    const indexOfColumn = initialIndexOfColumn - index;
    if (
      indexOfRow >= FIRST_INDEX &&
      indexOfRow < rowLength &&
      indexOfColumn >= FIRST_INDEX &&
      indexOfColumn < columnLength
    ) {
      validIndexes.push(indexOfRow * columnLength + indexOfColumn);
    }
  }
  return validIndexes;
};

const calculateIndexesOfShapeForVerticalLine = ({
  columnLength,
  initialIndexOfColumn,
  initialIndexOfRow,
  rowLength,
  size,
}: {
  columnLength: Integer;
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  rowLength: Integer;
  size: Integer;
}): Integer[] => {
  const validIndexes = [];
  for (let index = 0; index < size; index += ADJUST_INDEX) {
    const indexOfRow = initialIndexOfRow + index;
    const indexOfColumn = initialIndexOfColumn;
    if (
      indexOfRow >= FIRST_INDEX &&
      indexOfRow < rowLength &&
      indexOfColumn >= FIRST_INDEX &&
      indexOfColumn < columnLength
    ) {
      validIndexes.push(indexOfRow * columnLength + indexOfColumn);
    }
  }
  return validIndexes;
};

const getIndexesOfLine = ({
  columnLength,
  direction,
  initialIndexOfColumn,
  initialIndexOfRow,
  rowLength,
  size,
}: {
  columnLength: Integer;
  direction: Line["direction"];
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  rowLength: Integer;
  size: Line["size"];
}): Integer[] => {
  switch (direction) {
    case "horizontal": {
      return calculateIndexesOfShapeForHorizontalLine({
        columnLength,
        initialIndexOfColumn,
        initialIndexOfRow,
        rowLength,
        size,
      });
    }
    case "principalDiagonal": {
      return calculateIndexesOfShapeForPrincipalDiagonal({
        columnLength,
        initialIndexOfColumn,
        initialIndexOfRow,
        rowLength,
        size,
      });
    }
    case "secondaryDiagonal": {
      return calculateIndexesOfShapeForSecondaryDiagonal({
        columnLength,
        initialIndexOfColumn,
        initialIndexOfRow,
        rowLength,
        size,
      });
    }
    case "vertical": {
      return calculateIndexesOfShapeForVerticalLine({
        columnLength,
        initialIndexOfColumn,
        initialIndexOfRow,
        rowLength,
        size,
      });
    }
    default: {
      throw new Error(
        `Invalid direction "${direction as string}" for line shape`,
      );
    }
  }
};

const getIndexesOfRectangle = ({
  columnLength,
  horizontalSize,
  initialIndexOfColumn,
  initialIndexOfRow,
  rowLength,
  verticalSize,
}: {
  columnLength: Integer;
  horizontalSize: Rectangle["horizontalSize"];
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  rowLength: Integer;
  verticalSize: Rectangle["verticalSize"];
}): Integer[] => {
  const validIndexes = [];
  for (
    let iterationOnRow = 0;
    iterationOnRow < verticalSize;
    iterationOnRow += INCREMENT_ONE
  ) {
    const indexOfRow = initialIndexOfRow + iterationOnRow;
    if (indexOfRow < FIRST_INDEX || indexOfRow >= rowLength) {
      continue;
    }
    for (
      let iterationOnColumn = 0;
      iterationOnColumn < horizontalSize;
      iterationOnColumn += INCREMENT_ONE
    ) {
      const indexOfColumn = initialIndexOfColumn + iterationOnColumn;
      if (indexOfColumn < FIRST_INDEX || indexOfColumn >= columnLength) {
        continue;
      }
      validIndexes.push(indexOfRow * columnLength + indexOfColumn);
    }
  }
  return validIndexes;
};

const getIndexesOfSlots = ({
  columnLength,
  initialIndexOfColumn,
  initialIndexOfRow,
  rowLength,
  shape,
}: {
  columnLength: Integer;
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  rowLength: Integer;
  shape: Shape;
}): IndexOfSlot[] => {
  const { type } = shape;
  switch (type) {
    case "line": {
      const { direction, size } = shape;
      return getIndexesOfLine({
        columnLength,
        direction,
        initialIndexOfColumn,
        initialIndexOfRow,
        rowLength,
        size,
      });
    }
    case "rectangle": {
      const { horizontalSize, verticalSize } = shape;
      return getIndexesOfRectangle({
        columnLength,
        horizontalSize,
        initialIndexOfColumn,
        initialIndexOfRow,
        rowLength,
        verticalSize,
      });
    }
    default: {
      throw new Error(`Invalid type "${type as string}" for shape`);
    }
  }
};

const getIndexOfPlayerWhoIsOccupyingShape = ({
  columnLength,
  initialIndexOfColumn,
  initialIndexOfRow,
  rowLength,
  shape,
  slots,
}: {
  columnLength: Integer;
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  rowLength: Integer;
  shape: Shape;
  slots: SnowballSlot[];
}): IndexOfPlayer | null => {
  const indexesOfSlots = getIndexesOfSlots({
    columnLength,
    initialIndexOfColumn,
    initialIndexOfRow,
    rowLength,
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
  return score.clone();
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
    columnLength: COLUMN_LENGTH,
    initialIndexOfColumn,
    initialIndexOfRow,
    rowLength: ROW_LENGTH,
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
  COLUMN_LENGTH,
  getFormattedDescriptorOfShape,
  getIndexesOfSlots,
  getIndexOfPlayerWhoIsOccupyingShape,
  getNameAndFormattedSizeOfShape,
  getNameOfDirection,
  getScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots,
  ROW_LENGTH,
  sizeOfPatternsUsedForCalculatingPoints,
};
