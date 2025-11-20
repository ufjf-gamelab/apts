import { formatArray } from "@repo/engine_core/format.js";
import {
  createDescriptionForTest,
  createDescriptionForTestsOfGetter,
} from "@repo/engine_core/test.js";
import { expect, test } from "vitest";

import { getIndexedSnowballSlotsWithDataForUnitTest } from "../Game.test/slots.js";
import { scoresWithDataForUnitTest } from "../Score.test/setup.js";
import {
  getNameAndFormattedSizeOfShape,
  getScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots,
} from "../Shape.js";
import {
  shapesWithDataForUnitTest,
  type SnowballShapeWithData,
} from "./setup.js";

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
}: Pick<
  Parameters<
    typeof createDescriptionForTestOfGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots
  >[0],
  "expectedScore" | "initialIndexOfColumn" | "initialIndexOfRow" | "shape"
> & {
  affix: string;
}) =>
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
  score,
  shapesWithDataToTest,
  slots,
}: Pick<
  Parameters<
    typeof constructTestGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots
  >[0],
  "score" | "slots"
> & {
  shapesWithDataToTest: Record<string, SnowballShapeWithData>;
}) => {
  Object.values(shapesWithDataToTest).forEach(
    ({ keyOfShape, params, result }) => {
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
    },
  );
};

testGetScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots({
  score: scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
  shapesWithDataToTest: shapesWithDataForUnitTest,
  slots: getIndexedSnowballSlotsWithDataForUnitTest().map((slot) => slot.slot),
});
