import { expect, test } from "vitest";

import type { Integer } from "../../../types.js";
import { createPlayers } from "../Player/setup.js";
import { getIndexOfPlayerWhoIsOccupyingVerticalLine } from "../Shape.js";
import type TestingSlot from "../Slot.js";
import {
  createSlotsForInitialState,
  IndexOfTestingSlot,
} from "../Slot/setup.js";
import { fillSlot, type TestShapeParams } from "./setup.js";

const getIndexOfPlayerWhoIsOccupyingVerticalLineShouldReturn = ({
  expectedIndexOfPlayer,
  initialColumnIndex,
  initialRowIndex,
  slots,
  testDescriptor,
}: TestShapeParams & {
  expectedIndexOfPlayer: ReturnType<
    typeof getIndexOfPlayerWhoIsOccupyingVerticalLine
  >;
  slots: TestingSlot[];
}): void => {
  test(`${testDescriptor}: getIndexOfPlayerWhoIsOccupyingVerticalLine() should return {${expectedIndexOfPlayer}}`, () => {
    const indexesOfShape = getIndexOfPlayerWhoIsOccupyingVerticalLine({
      initialColumnIndex,
      initialRowIndex,
      slots,
    });

    expect(indexesOfShape).toBe(expectedIndexOfPlayer);
  });
};

const testGetIndexOfPlayerWhoIsOccupyingVerticalLine = ({
  expectedIndexOfPlayer,
  initialColumnIndex,
  initialRowIndex,
  size,
  slots,
}: {
  expectedIndexOfPlayer: ReturnType<
    typeof getIndexOfPlayerWhoIsOccupyingVerticalLine
  >;
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
  size: Integer;
  slots: TestingSlot[];
}): void => {
  getIndexOfPlayerWhoIsOccupyingVerticalLineShouldReturn({
    expectedIndexOfPlayer,
    initialColumnIndex,
    initialRowIndex,
    slots,
    testDescriptor: `vertical line of size ${size} beginning on row ${initialRowIndex} and column ${initialColumnIndex}`,
  });
};

const testGetIndexOfPlayerForVerticalLineOfSizeFiveBeginningOnRowZeroAndColumnZeroWhenAllSlotsAreEmpty =
  (): void => {
    const slots = Array.from(
      createSlotsForInitialState()
        .values()
        .map(({ slot }) => slot),
    );

    testGetIndexOfPlayerWhoIsOccupyingVerticalLine({
      expectedIndexOfPlayer: null,
      initialColumnIndex: 0,
      initialRowIndex: 0,
      size: 5,
      slots,
    });
  };
testGetIndexOfPlayerForVerticalLineOfSizeFiveBeginningOnRowZeroAndColumnZeroWhenAllSlotsAreEmpty();

const testGetIndexOfPlayerForVerticalLineOfSizeFiveBeginningOnRowZeroAndColumnZeroWhenTheLineIsOccupiedByPlayerOne =
  (): void => {
    const [playerOne] = createPlayers();
    if (typeof playerOne === "undefined") {
      throw new Error("Could not create player one");
    }
    const [indexOfPlayerOne] = playerOne;

    const slots = Array.from(
      createSlotsForInitialState()
        .values()
        .map(({ slot }) => slot),
    );
    fillSlot({
      indexOfPlayer: indexOfPlayerOne,
      indexOfSlot: IndexOfTestingSlot.NorthwestOfNorthwest,
      slots,
    });
    fillSlot({
      indexOfPlayer: indexOfPlayerOne,
      indexOfSlot: IndexOfTestingSlot.WestOfNorthwest,
      slots,
    });
    fillSlot({
      indexOfPlayer: indexOfPlayerOne,
      indexOfSlot: IndexOfTestingSlot.SouthwestOfNorthwest,
      slots,
    });
    fillSlot({
      indexOfPlayer: indexOfPlayerOne,
      indexOfSlot: IndexOfTestingSlot.NorthwestOfWest,
      slots,
    });
    fillSlot({
      indexOfPlayer: indexOfPlayerOne,
      indexOfSlot: IndexOfTestingSlot.WestOfWest,
      slots,
    });

    testGetIndexOfPlayerWhoIsOccupyingVerticalLine({
      expectedIndexOfPlayer: indexOfPlayerOne,
      initialColumnIndex: 0,
      initialRowIndex: 0,
      size: 5,
      slots,
    });
  };
testGetIndexOfPlayerForVerticalLineOfSizeFiveBeginningOnRowZeroAndColumnZeroWhenTheLineIsOccupiedByPlayerOne();

const testGetIndexOfPlayerForVerticalLineOfSizeFiveBeginningOnRowZeroAndColumnZeroWhenTheLineIsOccupiedByPlayerTwo =
  (): void => {
    const [, playerTwo] = createPlayers();
    if (typeof playerTwo === "undefined") {
      throw new Error("Could not create player two");
    }
    const [indexOfPlayerTwo] = playerTwo;

    const slots = Array.from(
      createSlotsForInitialState()
        .values()
        .map(({ slot }) => slot),
    );
    fillSlot({
      indexOfPlayer: indexOfPlayerTwo,
      indexOfSlot: IndexOfTestingSlot.NorthwestOfNorthwest,
      slots,
    });
    fillSlot({
      indexOfPlayer: indexOfPlayerTwo,
      indexOfSlot: IndexOfTestingSlot.WestOfNorthwest,
      slots,
    });
    fillSlot({
      indexOfPlayer: indexOfPlayerTwo,
      indexOfSlot: IndexOfTestingSlot.SouthwestOfNorthwest,
      slots,
    });
    fillSlot({
      indexOfPlayer: indexOfPlayerTwo,
      indexOfSlot: IndexOfTestingSlot.NorthwestOfWest,
      slots,
    });
    fillSlot({
      indexOfPlayer: indexOfPlayerTwo,
      indexOfSlot: IndexOfTestingSlot.WestOfWest,
      slots,
    });

    testGetIndexOfPlayerWhoIsOccupyingVerticalLine({
      expectedIndexOfPlayer: indexOfPlayerTwo,
      initialColumnIndex: 0,
      initialRowIndex: 0,
      size: 5,
      slots,
    });
  };
testGetIndexOfPlayerForVerticalLineOfSizeFiveBeginningOnRowZeroAndColumnZeroWhenTheLineIsOccupiedByPlayerTwo();

const testGetIndexOfPlayerForVerticalLineOfSizeFiveBeginningOnRowFourAndColumnFourWhenAllSlotsAreEmpty =
  (): void => {
    const slots = Array.from(
      createSlotsForInitialState()
        .values()
        .map(({ slot }) => slot),
    );

    testGetIndexOfPlayerWhoIsOccupyingVerticalLine({
      expectedIndexOfPlayer: null,
      initialColumnIndex: 4,
      initialRowIndex: 4,
      size: 5,
      slots,
    });
  };
testGetIndexOfPlayerForVerticalLineOfSizeFiveBeginningOnRowFourAndColumnFourWhenAllSlotsAreEmpty();

const testGetIndexOfPlayerForVerticalLineOfSizeFiveBeginningOnRowFourAndColumnFourWhenTheLineIsOccupiedByPlayerOne =
  (): void => {
    const [playerOne] = createPlayers();
    if (typeof playerOne === "undefined") {
      throw new Error("Could not create player one");
    }
    const [indexOfPlayerOne] = playerOne;

    const slots = Array.from(
      createSlotsForInitialState()
        .values()
        .map(({ slot }) => slot),
    );
    fillSlot({
      indexOfPlayer: indexOfPlayerOne,
      indexOfSlot: IndexOfTestingSlot.CenterOfCenter,
      slots,
    });
    fillSlot({
      indexOfPlayer: indexOfPlayerOne,
      indexOfSlot: IndexOfTestingSlot.SouthOfCenter,
      slots,
    });
    fillSlot({
      indexOfPlayer: indexOfPlayerOne,
      indexOfSlot: IndexOfTestingSlot.NorthOfSouth,
      slots,
    });
    fillSlot({
      indexOfPlayer: indexOfPlayerOne,
      indexOfSlot: IndexOfTestingSlot.CenterOfSouth,
      slots,
    });
    fillSlot({
      indexOfPlayer: indexOfPlayerOne,
      indexOfSlot: IndexOfTestingSlot.SouthOfSouth,
      slots,
    });

    testGetIndexOfPlayerWhoIsOccupyingVerticalLine({
      expectedIndexOfPlayer: indexOfPlayerOne,
      initialColumnIndex: 4,
      initialRowIndex: 4,
      size: 5,
      slots,
    });
  };
testGetIndexOfPlayerForVerticalLineOfSizeFiveBeginningOnRowFourAndColumnFourWhenTheLineIsOccupiedByPlayerOne();

const testGetIndexOfPlayerForVerticalLineOfSizeFiveBeginningOnRowFourAndColumnFourWhenTheLineIsOccupiedByPlayerTwo =
  (): void => {
    const [, playerTwo] = createPlayers();
    if (typeof playerTwo === "undefined") {
      throw new Error("Could not create player two");
    }
    const [indexOfPlayerTwo] = playerTwo;

    const slots = Array.from(
      createSlotsForInitialState()
        .values()
        .map(({ slot }) => slot),
    );
    fillSlot({
      indexOfPlayer: indexOfPlayerTwo,
      indexOfSlot: IndexOfTestingSlot.CenterOfCenter,
      slots,
    });
    fillSlot({
      indexOfPlayer: indexOfPlayerTwo,
      indexOfSlot: IndexOfTestingSlot.SouthOfCenter,
      slots,
    });
    fillSlot({
      indexOfPlayer: indexOfPlayerTwo,
      indexOfSlot: IndexOfTestingSlot.NorthOfSouth,
      slots,
    });
    fillSlot({
      indexOfPlayer: indexOfPlayerTwo,
      indexOfSlot: IndexOfTestingSlot.CenterOfSouth,
      slots,
    });
    fillSlot({
      indexOfPlayer: indexOfPlayerTwo,
      indexOfSlot: IndexOfTestingSlot.SouthOfSouth,
      slots,
    });

    testGetIndexOfPlayerWhoIsOccupyingVerticalLine({
      expectedIndexOfPlayer: indexOfPlayerTwo,
      initialColumnIndex: 4,
      initialRowIndex: 4,
      size: 5,
      slots,
    });
  };
testGetIndexOfPlayerForVerticalLineOfSizeFiveBeginningOnRowFourAndColumnFourWhenTheLineIsOccupiedByPlayerTwo();
