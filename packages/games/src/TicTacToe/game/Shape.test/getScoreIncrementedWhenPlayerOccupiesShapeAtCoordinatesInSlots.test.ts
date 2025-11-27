import { formatArray } from "@repo/engine_core/format.js";
import {
  createDescriptionForTest,
  createDescriptionForTestsOfMethod,
} from "@repo/engine_core/test.js";
import { expect, test } from "vitest";

import { recordOfTicTacToeScoresWithData } from "../Score.test/records.js";
import {
  getNameAndFormattedSizeOfShape,
  getScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots,
} from "../Shape.js";
import { indexedTicTacToeSlotsWithDataInWhichSlotR0C0AndR0C2AndR1C1AndR2C1AndR2C2AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno } from "../Slot.test/indexedRecords.js";
import {
  recordOfTicTacToeShapesWithDataInWhichShapesAreHorizontalLines,
  recordOfTicTacToeShapesWithDataInWhichShapesArePrincipalDiagonals,
  recordOfTicTacToeShapesWithDataInWhichShapesAreSecondaryDiagonals,
  recordOfTicTacToeShapesWithDataInWhichShapesAreVerticalLines,
} from "./records.js";
import { type TicTacToeShapeWithData } from "./setup.js";

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
  arrayOfShapesWithData: TicTacToeShapeWithData[];
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
        recordOfTicTacToeShapesWithDataInWhichShapesAreHorizontalLines,
      ),
      score,
      slots,
    });
    testGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots({
      arrayOfShapesWithData: Object.values(
        recordOfTicTacToeShapesWithDataInWhichShapesAreVerticalLines,
      ),
      score,
      slots,
    });
    testGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots({
      arrayOfShapesWithData: Object.values(
        recordOfTicTacToeShapesWithDataInWhichShapesArePrincipalDiagonals,
      ),
      score,
      slots,
    });
    testGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots({
      arrayOfShapesWithData: Object.values(
        recordOfTicTacToeShapesWithDataInWhichShapesAreSecondaryDiagonals,
      ),
      score,
      slots,
    });
  };

testGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlotsForAllShapes({
  score:
    recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
  slots:
    indexedTicTacToeSlotsWithDataInWhichSlotR0C0AndR0C2AndR1C1AndR2C1AndR2C2AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno.map(
      (slotWithData) => slotWithData.slot,
    ),
});
