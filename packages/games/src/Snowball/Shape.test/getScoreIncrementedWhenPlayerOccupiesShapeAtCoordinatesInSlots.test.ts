import { formatArray } from "@repo/engine_core/format.js";
import {
  createDescriptionForTest,
  createDescriptionForTestsOfGetter,
} from "@repo/engine_core/test.js";
import { expect, test } from "vitest";

import { scoresWithData } from "../Score.test/records.js";
import {
  getNameAndFormattedSizeOfShape,
  getScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots,
} from "../Shape.js";
import {
  indexedSlotsWithDataInWhichAllSlotsAreEmpty,
  indexedSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
} from "../Slot.test/indexedRecords.js";
import {
  shapesWithDataInWhichShapesAreHorizontalLines,
  shapesWithDataInWhichShapesArePrincipalDiagonals,
  shapesWithDataInWhichShapesAreRectanglesOf2RowsAnd2Columns,
  shapesWithDataInWhichShapesAreRectanglesOf3RowsAnd3Columns,
  shapesWithDataInWhichShapesAreSecondaryDiagonals,
  shapesWithDataInWhichShapesAreVerticalLines,
} from "./records.js";
import { type SnowballShapeWithData } from "./setup.js";

const validateGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots =
  ({
    expectedScore,
    initialIndexOfColumn,
    initialIndexOfRow,
    score,
    shape,
    slots,
  }: Pick<
    Parameters<
      typeof getScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots
    >[0],
    "initialIndexOfColumn" | "initialIndexOfRow" | "score" | "shape" | "slots"
  > & {
    expectedScore: ReturnType<
      typeof getScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots
    >;
  }) => {
    const updatedScore =
      getScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots({
        initialIndexOfColumn,
        initialIndexOfRow,
        score,
        shape,
        slots,
      });

    expect(updatedScore).not.toBe(expectedScore);
    expect(updatedScore).toStrictEqual(expectedScore);
  };

const createDescriptionForTestOfGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots =
  ({
    expectedScore,
    initialIndexOfColumn,
    initialIndexOfRow,
    shape,
  }: Pick<
    Parameters<
      typeof getScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots
    >[0],
    "initialIndexOfColumn" | "initialIndexOfRow" | "shape"
  > & {
    expectedScore: ReturnType<
      typeof getScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots
    >;
  }): string => {
    const shapeDescription = getNameAndFormattedSizeOfShape({ shape });
    return createDescriptionForTestsOfGetter({
      methodDescription: `getScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots({ initialIndexOfColumn: ${initialIndexOfColumn}, initialIndexOfRow: ${initialIndexOfRow}, shape: { name: "${shapeDescription.name}", size: ${shapeDescription.size} } })`,
      returnedValue: formatArray({
        array: expectedScore.getPointsOfEachPlayer().values().toArray(),
      }),
    });
  };

const createDescription = ({
  affix,
  expectedScore,
  initialIndexOfColumn,
  initialIndexOfRow,
  shape,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<
      typeof createDescriptionForTestOfGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots
    >[0],
    "expectedScore" | "initialIndexOfColumn" | "initialIndexOfRow" | "shape"
  >) =>
  createDescriptionForTest({
    affix,
    description:
      createDescriptionForTestOfGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots(
        {
          expectedScore,
          initialIndexOfColumn,
          initialIndexOfRow,
          shape,
        },
      ),
  });

const constructTestGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots =
  ({
    affix,
    expectedScore,
    initialIndexOfColumn,
    initialIndexOfRow,
    score,
    shape,
    slots,
  }: Pick<Parameters<typeof createDescription>[0], "affix"> &
    Pick<
      Parameters<
        typeof getScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots
      >[0],
      "initialIndexOfColumn" | "initialIndexOfRow" | "score" | "shape" | "slots"
    > & {
      expectedScore: ReturnType<
        typeof getScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots
      >;
    }) => {
    test(
      createDescription({
        affix,
        expectedScore,
        initialIndexOfColumn,
        initialIndexOfRow,
        shape,
      }),
      () => {
        validateGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots({
          expectedScore,
          initialIndexOfColumn,
          initialIndexOfRow,
          score,
          shape,
          slots,
        });
      },
    );
  };

const testGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots = ({
  arrayOfShapesWithData,
  score,
  slots,
}: Pick<
  Parameters<
    typeof constructTestGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots
  >[0],
  "score" | "slots"
> & {
  arrayOfShapesWithData: SnowballShapeWithData[];
}) => {
  arrayOfShapesWithData.forEach(({ keyOfShape, params, result }) => {
    constructTestGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots(
      {
        affix: keyOfShape,
        expectedScore: result.score,
        initialIndexOfColumn: params.initialIndexOfColumn,
        initialIndexOfRow: params.initialIndexOfRow,
        score,
        shape: params.shape,
        slots,
      },
    );
  });
};

const testGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlotsForAllShapes =
  ({
    score,
    slots,
  }: Pick<
    Parameters<
      typeof testGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots
    >[0],
    "score" | "slots"
  >) => {
    testGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots({
      arrayOfShapesWithData: Object.values(
        shapesWithDataInWhichShapesAreHorizontalLines,
      ),
      score,
      slots,
    });
    testGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots({
      arrayOfShapesWithData: Object.values(
        shapesWithDataInWhichShapesAreVerticalLines,
      ),
      score,
      slots,
    });
    testGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots({
      arrayOfShapesWithData: Object.values(
        shapesWithDataInWhichShapesArePrincipalDiagonals,
      ),
      score,
      slots,
    });
    testGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots({
      arrayOfShapesWithData: Object.values(
        shapesWithDataInWhichShapesAreSecondaryDiagonals,
      ),
      score,
      slots,
    });
    testGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots({
      arrayOfShapesWithData: Object.values(
        shapesWithDataInWhichShapesAreRectanglesOf2RowsAnd2Columns,
      ),
      score,
      slots,
    });
    testGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots({
      arrayOfShapesWithData: Object.values(
        shapesWithDataInWhichShapesAreRectanglesOf3RowsAnd3Columns,
      ),
      score,
      slots,
    });
  };

testGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlotsForAllShapes({
  score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
  slots:
    indexedSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno.map(
      (slot) => slot.slot,
    ),
});
