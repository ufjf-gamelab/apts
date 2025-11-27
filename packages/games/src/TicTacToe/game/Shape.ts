import type { Integer } from "@repo/engine_core/types.js";
import type { IndexOfPlayer } from "@repo/game/Player.js";
import type { IndexOfSlot } from "@repo/game/Slot.js";

import { FIRST_INDEX, INCREMENT_ONE } from "@repo/engine_core/constants.js";

import { TicTacToeScore } from "./Score.js";
import { TicTacToeSlot } from "./Slot.js";

const ADJUST_INDEX = 1;

const COLUMN_LENGTH = 3;
const ROW_LENGTH = 3;

const sizeOfPatternsUsedForCalculatingPoints = {
  line: 3,
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

const getIndexesOfShapeForHorizontalLine = ({
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

const getIndexesOfShapeForPrincipalDiagonal = ({
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

const getIndexesOfShapeForSecondaryDiagonal = ({
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

const getIndexesOfShapeForVerticalLine = ({
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
      return getIndexesOfShapeForHorizontalLine({
        columnLength,
        initialIndexOfColumn,
        initialIndexOfRow,
        rowLength,
        size,
      });
    }
    case "principalDiagonal": {
      return getIndexesOfShapeForPrincipalDiagonal({
        columnLength,
        initialIndexOfColumn,
        initialIndexOfRow,
        rowLength,
        size,
      });
    }
    case "secondaryDiagonal": {
      return getIndexesOfShapeForSecondaryDiagonal({
        columnLength,
        initialIndexOfColumn,
        initialIndexOfRow,
        rowLength,
        size,
      });
    }
    case "vertical": {
      return getIndexesOfShapeForVerticalLine({
        columnLength,
        initialIndexOfColumn,
        initialIndexOfRow,
        rowLength,
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
  const { direction, size } = shape;
  return getIndexesOfLine({
    columnLength,
    direction,
    initialIndexOfColumn,
    initialIndexOfRow,
    rowLength,
    size,
  });
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
  slots: TicTacToeSlot[];
}): IndexOfPlayer | null => {
  const indexesOfSlots = getIndexesOfSlots({
    columnLength,
    initialIndexOfColumn,
    initialIndexOfRow,
    rowLength,
    shape,
  });

  if (shape.size !== indexesOfSlots.length) {
    return null;
  }

  let indexOfLastOccupyingPlayer: IndexOfPlayer | null = null;
  for (const indexOfSlot of indexesOfSlots) {
    const slot = TicTacToeSlot.getSlot({ indexOfSlot, slots });
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
  score: TicTacToeScore;
}): TicTacToeScore => {
  if (indexOfPlayerWhoIsOccupyingShape !== null) {
    const currentPointsForPlayer = score.getPointsOfPlayer({
      indexOfPlayer: indexOfPlayerWhoIsOccupyingShape,
    });

    const pointsOfEachPlayer = new Map(score.getPointsOfEachPlayer());
    pointsOfEachPlayer.set(
      indexOfPlayerWhoIsOccupyingShape,
      currentPointsForPlayer + INCREMENT_ONE,
    );

    return new TicTacToeScore({ pointsOfEachPlayer });
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
  score: TicTacToeScore;
  shape: Shape;
  slots: TicTacToeSlot[];
}): TicTacToeScore => {
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

export type { Shape };
export {
  COLUMN_LENGTH,
  getIndexesOfSlots,
  getIndexOfPlayerWhoIsOccupyingShape,
  getNameAndFormattedSizeOfShape,
  getNameOfDirection,
  getScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots,
  ROW_LENGTH,
  sizeOfPatternsUsedForCalculatingPoints,
};
