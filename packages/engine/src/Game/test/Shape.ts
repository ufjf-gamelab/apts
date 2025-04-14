import { INCREMENT_ONE } from "../../constants.js";
import type { Integer } from "../../types.js";
import type { Points } from "../State.js";
import { COLUMN_LENGTH, ROW_LENGTH } from "./Game.js";
import type { IndexOfTestingPlayer } from "./Player/setup.js";
import TestingSlot from "./Slot.js";

const INITIAL_INDEX = 0;

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

const formatDirection = (direction: Line["direction"]): string => {
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

const calculateIndexesOfShapeForHorizontalLine = ({
  columnLength,
  initialColumnIndex,
  initialRowIndex,
  rowLength,
  size,
}: {
  columnLength: Integer;
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
  rowLength: Integer;
  size: Line["size"];
}): Integer[] => {
  const quantityOfValidIndexes = rowLength;
  const validIndexes = Array.from(
    { length: quantityOfValidIndexes },
    (_, columnIndex) => columnIndex + initialRowIndex * columnLength,
  );

  return validIndexes.filter(index => {
    const indexOfRow = Math.floor(index / columnLength);
    const indexOfColumn = index % columnLength;
    return (
      indexOfRow === initialRowIndex &&
      indexOfColumn >= initialColumnIndex &&
      indexOfColumn < initialColumnIndex + size
    );
  });
};

const calculateIndexesOfShapeForPrincipalDiagonal = ({
  columnLength,
  initialColumnIndex,
  initialRowIndex,
  rowLength,
  size,
}: {
  columnLength: Integer;
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
  rowLength: Integer;
  size: Line["size"];
}): Integer[] => {
  const quantityOfIndexesBelowLimit = Math.max(
    -Math.min(initialRowIndex, initialColumnIndex),
    INITIAL_INDEX,
  );
  const quantityOfValidIndexes =
    Math.min(rowLength - initialRowIndex, columnLength - initialColumnIndex) -
    quantityOfIndexesBelowLimit;

  const validIndexes = Array.from(
    { length: quantityOfValidIndexes },
    (_, index) =>
      (initialRowIndex + index + quantityOfIndexesBelowLimit) * columnLength +
      (initialColumnIndex + index + quantityOfIndexesBelowLimit),
  );

  return validIndexes.filter(index => {
    const indexOfRow = Math.floor(index / columnLength);
    const indexOfColumn = index % columnLength;
    return (
      indexOfRow >= initialRowIndex &&
      indexOfRow < initialRowIndex + size &&
      indexOfColumn >= initialColumnIndex &&
      indexOfColumn < initialColumnIndex + size
    );
  });
};

const calculateIndexesOfShapeForSecondaryDiagonal = ({
  columnLength,
  initialColumnIndex,
  initialRowIndex,
  rowLength,
  size,
}: {
  columnLength: Integer;
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
  rowLength: Integer;
  size: Line["size"];
}): Integer[] => {
  const quantityOfIndexesBelowLimit = Math.max(
    -Math.min(initialRowIndex, initialColumnIndex),
    INITIAL_INDEX,
  );
  const quantityOfValidIndexes =
    Math.min(rowLength - initialRowIndex, columnLength - initialColumnIndex) -
    quantityOfIndexesBelowLimit;

  const validIndexes = Array.from(
    {
      length: quantityOfValidIndexes,
    },
    (_, rowIndex) =>
      (initialRowIndex + rowIndex) * columnLength +
      (initialColumnIndex - rowIndex),
  );

  return validIndexes.filter(index => {
    const indexOfRow = Math.floor(index / columnLength);
    const indexOfColumn = index % columnLength;
    return (
      indexOfRow >= initialRowIndex &&
      indexOfRow < initialRowIndex + size &&
      indexOfColumn <= initialColumnIndex &&
      indexOfColumn > initialColumnIndex - size
    );
  });
};

const calculateIndexesOfShapeForVerticalLine = ({
  columnLength,
  initialColumnIndex,
  initialRowIndex,
  rowLength,
  size,
}: {
  columnLength: Integer;
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
  rowLength: Integer;
  size: Line["size"];
}): Integer[] => {
  const quantityOfValidIndexes = columnLength;
  const validIndexes = Array.from(
    { length: quantityOfValidIndexes },
    (_, rowIndex) => rowIndex * rowLength + initialColumnIndex,
  );

  return validIndexes.filter(index => {
    const indexOfRow = Math.floor(index / columnLength);
    const indexOfColumn = index % columnLength;
    return (
      indexOfRow >= initialRowIndex &&
      indexOfRow < initialRowIndex + size &&
      indexOfColumn === initialColumnIndex
    );
  });
};

const getIndexesOfLine = ({
  columnLength,
  direction,
  initialColumnIndex,
  initialRowIndex,
  rowLength,
  size,
}: {
  columnLength: Integer;
  direction: Line["direction"];
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
  rowLength: Integer;
  size: Line["size"];
}): Integer[] => {
  switch (direction) {
    case "horizontal": {
      return calculateIndexesOfShapeForHorizontalLine({
        columnLength,
        initialColumnIndex,
        initialRowIndex,
        rowLength,
        size,
      });
    }
    case "principalDiagonal": {
      return calculateIndexesOfShapeForPrincipalDiagonal({
        columnLength,
        initialColumnIndex,
        initialRowIndex,
        rowLength,
        size,
      });
    }
    case "secondaryDiagonal": {
      return calculateIndexesOfShapeForSecondaryDiagonal({
        columnLength,
        initialColumnIndex,
        initialRowIndex,
        rowLength,
        size,
      });
    }
    case "vertical": {
      return calculateIndexesOfShapeForVerticalLine({
        columnLength,
        initialColumnIndex,
        initialRowIndex,
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
  initialColumnIndex,
  initialRowIndex,
  lowerLimitOfIndexOfShape,
  rowLength,
  upperLimitOfIndexOfShape,
  verticalSize,
}: {
  columnLength: Integer;
  horizontalSize: Rectangle["horizontalSize"];
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
  lowerLimitOfIndexOfShape: Integer;
  rowLength: Integer;
  upperLimitOfIndexOfShape: Integer;
  verticalSize: Rectangle["verticalSize"];
}): Integer[] => {
  const quantityOfValidIndexes = columnLength * rowLength;
  const validIndexes = Array.from(
    { length: quantityOfValidIndexes },
    (_, index) => index,
  );

  return validIndexes.filter(index => {
    const rowOffset = Math.floor(index / columnLength);
    const columnOffset = index % columnLength;
    return (
      index >= lowerLimitOfIndexOfShape &&
      index < upperLimitOfIndexOfShape &&
      rowOffset >= initialRowIndex &&
      rowOffset < initialRowIndex + verticalSize &&
      columnOffset >= initialColumnIndex &&
      columnOffset < initialColumnIndex + horizontalSize
    );
  });
};

const getIndexesOfShape = ({
  columnLength,
  initialColumnIndex,
  initialRowIndex,
  rowLength,
  shape,
}: {
  columnLength: Integer;
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
  rowLength: Integer;
  shape: Shape;
}): Integer[] => {
  const { type } = shape;
  const lowerLimitOfIndexOfShape = INITIAL_INDEX;
  const upperLimitOfIndexOfShape = rowLength * columnLength;
  switch (type) {
    case "line": {
      const { direction, size } = shape;
      return getIndexesOfLine({
        columnLength,
        direction,
        initialColumnIndex,
        initialRowIndex,
        rowLength,
        size,
      });
    }
    case "rectangle": {
      const { horizontalSize, verticalSize } = shape;
      return getIndexesOfRectangle({
        columnLength,
        horizontalSize,
        initialColumnIndex,
        initialRowIndex,
        lowerLimitOfIndexOfShape,
        rowLength,
        upperLimitOfIndexOfShape,
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
  initialColumnIndex,
  initialRowIndex,
  rowLength,
  shape,
  slots,
}: {
  columnLength: Integer;
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
  rowLength: Integer;
  shape: Shape;
  slots: TestingSlot[];
}): IndexOfTestingPlayer | null => {
  const indexesOfSlots = getIndexesOfShape({
    columnLength,
    initialColumnIndex,
    initialRowIndex,
    rowLength,
    shape,
  });

  let indexOfLastOccupyingPlayer: IndexOfTestingPlayer | null = null;
  for (const indexOfSlot of indexesOfSlots) {
    const slot = TestingSlot.getSlot({ indexOfSlot, slots });
    if (slot === null) {
      return null;
    }

    const indexOfOccupyingPlayer: IndexOfTestingPlayer | null =
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

const getIndexOfPlayerWhoIsOccupyingLine = ({
  columnLength,
  direction,
  initialColumnIndex,
  initialRowIndex,
  rowLength,
  slots,
}: {
  columnLength: Integer;
  direction: Line["direction"];
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
  rowLength: Integer;
  slots: TestingSlot[];
}): ReturnType<typeof getIndexOfPlayerWhoIsOccupyingShape> =>
  getIndexOfPlayerWhoIsOccupyingShape({
    columnLength,
    initialColumnIndex,
    initialRowIndex,
    rowLength,
    shape: {
      direction,
      size: 5,
      type: "line",
    },
    slots,
  });

const getIndexOfPlayerWhoIsOccupyingRectangle = ({
  columnLength,
  horizontalSize,
  initialColumnIndex,
  initialRowIndex,
  rowLength,
  slots,
  verticalSize,
}: {
  columnLength: Integer;
  horizontalSize: Rectangle["horizontalSize"];
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
  rowLength: Integer;
  slots: TestingSlot[];
  verticalSize: Rectangle["verticalSize"];
}): ReturnType<typeof getIndexOfPlayerWhoIsOccupyingShape> =>
  getIndexOfPlayerWhoIsOccupyingShape({
    columnLength,
    initialColumnIndex,
    initialRowIndex,
    rowLength,
    shape: {
      horizontalSize,
      type: "rectangle",
      verticalSize,
    },
    slots,
  });

const getIndexOfPlayerWhoIsOccupyingHorizontalLine = ({
  initialColumnIndex,
  initialRowIndex,
  slots,
}: {
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
  slots: TestingSlot[];
}): ReturnType<typeof getIndexOfPlayerWhoIsOccupyingShape> =>
  getIndexOfPlayerWhoIsOccupyingLine({
    columnLength: COLUMN_LENGTH,
    direction: "horizontal",
    initialColumnIndex,
    initialRowIndex,
    rowLength: ROW_LENGTH,
    slots,
  });

const getIndexOfPlayerWhoIsOccupyingVerticalLine = ({
  initialColumnIndex,
  initialRowIndex,
  slots,
}: {
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
  slots: TestingSlot[];
}): ReturnType<typeof getIndexOfPlayerWhoIsOccupyingShape> =>
  getIndexOfPlayerWhoIsOccupyingLine({
    columnLength: COLUMN_LENGTH,
    direction: "vertical",
    initialColumnIndex,
    initialRowIndex,
    rowLength: ROW_LENGTH,
    slots,
  });

const getIndexOfPlayerWhoIsOccupyingPrincipalDiagonal = ({
  initialColumnIndex,
  initialRowIndex,
  slots,
}: {
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
  slots: TestingSlot[];
}): ReturnType<typeof getIndexOfPlayerWhoIsOccupyingShape> =>
  getIndexOfPlayerWhoIsOccupyingLine({
    columnLength: COLUMN_LENGTH,
    direction: "principalDiagonal",
    initialColumnIndex,
    initialRowIndex,
    rowLength: ROW_LENGTH,
    slots,
  });

const getIndexOfPlayerWhoIsOccupyingSecondaryDiagonal = ({
  initialColumnIndex,
  initialRowIndex,
  slots,
}: {
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
  slots: TestingSlot[];
}): ReturnType<typeof getIndexOfPlayerWhoIsOccupyingShape> =>
  getIndexOfPlayerWhoIsOccupyingLine({
    columnLength: COLUMN_LENGTH,
    direction: "secondaryDiagonal",
    initialColumnIndex,
    initialRowIndex,
    rowLength: ROW_LENGTH,
    slots,
  });

const getIndexOfPlayerWhoIsOccupyingSquareOfOrderTwo = ({
  initialColumnIndex,
  initialRowIndex,
  slots,
}: {
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
  slots: TestingSlot[];
}): ReturnType<typeof getIndexOfPlayerWhoIsOccupyingShape> =>
  getIndexOfPlayerWhoIsOccupyingRectangle({
    columnLength: COLUMN_LENGTH,
    horizontalSize: 2,
    initialColumnIndex,
    initialRowIndex,
    rowLength: ROW_LENGTH,
    slots,
    verticalSize: 2,
  });

const getIndexOfPlayerWhoIsOccupyingSquareOfOrderThree = ({
  initialColumnIndex,
  initialRowIndex,
  slots,
}: {
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
  slots: TestingSlot[];
}): ReturnType<typeof getIndexOfPlayerWhoIsOccupyingShape> =>
  getIndexOfPlayerWhoIsOccupyingRectangle({
    columnLength: COLUMN_LENGTH,
    horizontalSize: 3,
    initialColumnIndex,
    initialRowIndex,
    rowLength: ROW_LENGTH,
    slots,
    verticalSize: 3,
  });

const adjustScore = ({
  indexOfPlayerWhoIsOccupyingShape,
  score,
}: {
  indexOfPlayerWhoIsOccupyingShape: IndexOfTestingPlayer | null;
  score: Points[];
}): void => {
  if (indexOfPlayerWhoIsOccupyingShape !== null) {
    const currentScoreForPlayer = score[indexOfPlayerWhoIsOccupyingShape];
    if (typeof currentScoreForPlayer !== "undefined") {
      score[indexOfPlayerWhoIsOccupyingShape] =
        currentScoreForPlayer + INCREMENT_ONE;
    }
  }
};

export type { Line, Rectangle, Shape };
export {
  adjustScore,
  formatDirection,
  getIndexesOfShape,
  getIndexOfPlayerWhoIsOccupyingHorizontalLine,
  getIndexOfPlayerWhoIsOccupyingPrincipalDiagonal,
  getIndexOfPlayerWhoIsOccupyingSecondaryDiagonal,
  getIndexOfPlayerWhoIsOccupyingSquareOfOrderThree,
  getIndexOfPlayerWhoIsOccupyingSquareOfOrderTwo,
  getIndexOfPlayerWhoIsOccupyingVerticalLine,
};
