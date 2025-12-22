import { formatArray } from "@repo/core/format.js";
import {
  createDescriptionForTest,
  createDescriptionForTestsOfMethod,
} from "@repo/core/test.js";
import { expect, test } from "vitest";

import { recordOfSnowballScoresWithData } from "../SnowballScore.test/records.js";
import {
  getNameAndFormattedSizeOfShape,
  getScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots,
} from "../SnowballShape.js";
import { indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno } from "../SnowballSlot.test/indexedRecords.js";
import {
  recordOfSnowballShapesWithDataInWhichShapesAreHorizontalLines,
  recordOfSnowballShapesWithDataInWhichShapesArePrincipalDiagonals,
  recordOfSnowballShapesWithDataInWhichShapesAreRectanglesOf2RowsAnd2Columns,
  recordOfSnowballShapesWithDataInWhichShapesAreRectanglesOf3RowsAnd3Columns,
  recordOfSnowballShapesWithDataInWhichShapesAreSecondaryDiagonals,
  recordOfSnowballShapesWithDataInWhichShapesAreVerticalLines,
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
    return createDescriptionForTestsOfMethod({
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
  arrayOfShapesWithData.forEach(
    ({
      keyOfShape,
      requiredParams: { initialIndexOfColumn, initialIndexOfRow, shape },
      result,
    }) => {
      constructTestGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots(
        {
          affix: keyOfShape,
          expectedScore: result.score,
          initialIndexOfColumn,
          initialIndexOfRow,
          score,
          shape,
          slots,
        },
      );
    },
  );
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
        recordOfSnowballShapesWithDataInWhichShapesAreHorizontalLines,
      ),
      score,
      slots,
    });
    testGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots({
      arrayOfShapesWithData: Object.values(
        recordOfSnowballShapesWithDataInWhichShapesAreVerticalLines,
      ),
      score,
      slots,
    });
    testGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots({
      arrayOfShapesWithData: Object.values(
        recordOfSnowballShapesWithDataInWhichShapesArePrincipalDiagonals,
      ),
      score,
      slots,
    });
    testGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots({
      arrayOfShapesWithData: Object.values(
        recordOfSnowballShapesWithDataInWhichShapesAreSecondaryDiagonals,
      ),
      score,
      slots,
    });
    testGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots({
      arrayOfShapesWithData: Object.values(
        recordOfSnowballShapesWithDataInWhichShapesAreRectanglesOf2RowsAnd2Columns,
      ),
      score,
      slots,
    });
    testGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots({
      arrayOfShapesWithData: Object.values(
        recordOfSnowballShapesWithDataInWhichShapesAreRectanglesOf3RowsAnd3Columns,
      ),
      score,
      slots,
    });
  };

testGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlotsForAllShapes({
  score:
    recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
  slots:
    indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno.map(
      (slotWithData) => slotWithData.slot,
    ),
});
