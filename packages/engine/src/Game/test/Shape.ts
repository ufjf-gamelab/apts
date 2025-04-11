import { INCREMENT_ONE } from "../../constants.js";
import type { Integer } from "../../types.js";
import type { Points } from "../State.js";
import { COLUMN_LENGTH, ROW_LENGTH } from "./Game.js";
import type { IndexOfTestingPlayer } from "./Player/setup.js";
import TestingSlot from "./Slot.js";

const ADJUST_INDEX = 1;
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

// eslint-disable-next-line max-lines-per-function, max-statements
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
  // eslint-disable-next-line init-declarations
  let indexesOfShape: Integer[];
  switch (type) {
    case "line": {
      const { direction, size } = shape;
      switch (direction) {
        case "horizontal": {
          indexesOfShape = Array.from(
            { length: size },
            (_, index) =>
              initialRowIndex * columnLength + initialColumnIndex + index,
          );
          break;
        }
        case "principalDiagonal": {
          indexesOfShape = Array.from(
            { length: size },
            (_, index) =>
              (initialRowIndex + index) * columnLength +
              initialColumnIndex +
              index,
          );
          break;
        }
        case "secondaryDiagonal": {
          indexesOfShape = Array.from(
            { length: size },
            (_, index) =>
              (initialRowIndex + index) * columnLength +
              initialColumnIndex -
              index,
          );
          break;
        }
        case "vertical": {
          indexesOfShape = Array.from(
            { length: size },
            (_, index) =>
              (initialRowIndex + index) * columnLength + initialColumnIndex,
          );
          break;
        }
        default: {
          throw new Error(
            `Invalid direction "${direction as string}" for line shape`,
          );
        }
      }
      break;
    }
    case "rectangle": {
      const { horizontalSize, verticalSize } = shape;
      indexesOfShape = Array.from(
        { length: horizontalSize * verticalSize },
        (_, index) => {
          const rowOffset = Math.floor(index / horizontalSize);
          const columnOffset = index % horizontalSize;
          return (
            (initialRowIndex + rowOffset) * columnLength +
            initialColumnIndex +
            columnOffset
          );
        },
      );
      break;
    }
    default: {
      throw new Error(`Invalid type "${type as string}" for shape`);
    }
  }
  const limitOfIndexOfShape = rowLength * columnLength - ADJUST_INDEX;
  if (
    indexesOfShape.find(
      indexOfShape =>
        indexOfShape < INITIAL_INDEX || indexOfShape > limitOfIndexOfShape,
    )
  ) {
    return [];
  }
  return indexesOfShape;
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

export type { Shape };
export {
  adjustScore,
  getIndexesOfShape,
  getIndexOfPlayerWhoIsOccupyingHorizontalLine,
  getIndexOfPlayerWhoIsOccupyingPrincipalDiagonal,
  getIndexOfPlayerWhoIsOccupyingSecondaryDiagonal,
  getIndexOfPlayerWhoIsOccupyingSquareOfOrderThree,
  getIndexOfPlayerWhoIsOccupyingSquareOfOrderTwo,
  getIndexOfPlayerWhoIsOccupyingVerticalLine,
};
