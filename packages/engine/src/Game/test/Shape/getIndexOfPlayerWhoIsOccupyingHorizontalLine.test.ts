import { expect, test } from "vitest";

import type { Integer } from "../../../types.js";
import { createPlayers } from "../Player/setup.js";
import { getIndexOfPlayerWhoIsOccupyingHorizontalLine } from "../Shape.js";
import type TestingSlot from "../Slot.js";
import {
  createSlotsForInitialState,
  IndexOfTestingSlot,
} from "../Slot/setup.js";
import { fillSlot, type TestShapeParams } from "./setup.js";

const getIndexOfPlayerWhoIsOccupyingHorizontalLineShouldReturn = ({
  expectedIndexOfPlayer,
  initialColumnIndex,
  initialRowIndex,
  slots,
  testDescriptor,
}: TestShapeParams & {
  expectedIndexOfPlayer: ReturnType<
    typeof getIndexOfPlayerWhoIsOccupyingHorizontalLine
  >;
  slots: TestingSlot[];
}): void => {
  test(`${testDescriptor}: getIndexOfPlayerWhoIsOccupyingHorizontalLine() should return {${expectedIndexOfPlayer}}`, () => {
    const indexesOfShape = getIndexOfPlayerWhoIsOccupyingHorizontalLine({
      initialColumnIndex,
      initialRowIndex,
      slots,
    });

    expect(indexesOfShape).toBe(expectedIndexOfPlayer);
  });
};

const testGetIndexOfPlayerWhoIsOccupyingHorizontalLine = ({
  expectedIndexOfPlayer,
  initialColumnIndex,
  initialRowIndex,
  size,
  slots,
}: {
  expectedIndexOfPlayer: ReturnType<
    typeof getIndexOfPlayerWhoIsOccupyingHorizontalLine
  >;
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
  size: Integer;
  slots: TestingSlot[];
}): void => {
  getIndexOfPlayerWhoIsOccupyingHorizontalLineShouldReturn({
    expectedIndexOfPlayer,
    initialColumnIndex,
    initialRowIndex,
    slots,
    testDescriptor: `horizontal line of size ${size} beginning on row ${initialRowIndex} and column ${initialColumnIndex}`,
  });
};

const testGetIndexOfPlayerForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnZeroWhenAllSlotsAreEmpty =
  (): void => {
    const slots = Array.from(
      createSlotsForInitialState()
        .values()
        .map(({ slot }) => slot),
    );

    testGetIndexOfPlayerWhoIsOccupyingHorizontalLine({
      expectedIndexOfPlayer: null,
      initialColumnIndex: 0,
      initialRowIndex: 0,
      size: 5,
      slots,
    });
  };
testGetIndexOfPlayerForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnZeroWhenAllSlotsAreEmpty();

const testGetIndexOfPlayerForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnZeroWhenTheLineIsOccupiedByPlayerOne =
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
      indexOfSlot: IndexOfTestingSlot.NorthOfNorthwest,
      slots,
    });
    fillSlot({
      indexOfPlayer: indexOfPlayerOne,
      indexOfSlot: IndexOfTestingSlot.NortheastOfNorthwest,
      slots,
    });
    fillSlot({
      indexOfPlayer: indexOfPlayerOne,
      indexOfSlot: IndexOfTestingSlot.NorthwestOfNorth,
      slots,
    });
    fillSlot({
      indexOfPlayer: indexOfPlayerOne,
      indexOfSlot: IndexOfTestingSlot.NorthOfNorth,
      slots,
    });

    testGetIndexOfPlayerWhoIsOccupyingHorizontalLine({
      expectedIndexOfPlayer: indexOfPlayerOne,
      initialColumnIndex: 0,
      initialRowIndex: 0,
      size: 5,
      slots,
    });
  };
testGetIndexOfPlayerForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnZeroWhenTheLineIsOccupiedByPlayerOne();

const testGetIndexOfPlayerForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnZeroWhenTheLineIsOccupiedByPlayerTwo =
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
      indexOfSlot: IndexOfTestingSlot.NorthOfNorthwest,
      slots,
    });
    fillSlot({
      indexOfPlayer: indexOfPlayerTwo,
      indexOfSlot: IndexOfTestingSlot.NortheastOfNorthwest,
      slots,
    });
    fillSlot({
      indexOfPlayer: indexOfPlayerTwo,
      indexOfSlot: IndexOfTestingSlot.NorthwestOfNorth,
      slots,
    });
    fillSlot({
      indexOfPlayer: indexOfPlayerTwo,
      indexOfSlot: IndexOfTestingSlot.NorthOfNorth,
      slots,
    });

    testGetIndexOfPlayerWhoIsOccupyingHorizontalLine({
      expectedIndexOfPlayer: indexOfPlayerTwo,
      initialColumnIndex: 0,
      initialRowIndex: 0,
      size: 5,
      slots,
    });
  };
testGetIndexOfPlayerForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnZeroWhenTheLineIsOccupiedByPlayerTwo();

const testGetIndexOfPlayerForHorizontalLineOfSizeFiveBeginningOnRowFourAndColumnFourWhenAllSlotsAreEmpty =
  (): void => {
    const slots = Array.from(
      createSlotsForInitialState()
        .values()
        .map(({ slot }) => slot),
    );

    testGetIndexOfPlayerWhoIsOccupyingHorizontalLine({
      expectedIndexOfPlayer: null,
      initialColumnIndex: 4,
      initialRowIndex: 4,
      size: 5,
      slots,
    });
  };
testGetIndexOfPlayerForHorizontalLineOfSizeFiveBeginningOnRowFourAndColumnFourWhenAllSlotsAreEmpty();

const testGetIndexOfPlayerForHorizontalLineOfSizeFiveBeginningOnRowFourAndColumnFourWhenTheLineIsOccupiedByPlayerOne =
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
      indexOfSlot: IndexOfTestingSlot.EastOfCenter,
      slots,
    });
    fillSlot({
      indexOfPlayer: indexOfPlayerOne,
      indexOfSlot: IndexOfTestingSlot.WestOfEast,
      slots,
    });
    fillSlot({
      indexOfPlayer: indexOfPlayerOne,
      indexOfSlot: IndexOfTestingSlot.CenterOfEast,
      slots,
    });
    fillSlot({
      indexOfPlayer: indexOfPlayerOne,
      indexOfSlot: IndexOfTestingSlot.EastOfEast,
      slots,
    });

    testGetIndexOfPlayerWhoIsOccupyingHorizontalLine({
      expectedIndexOfPlayer: indexOfPlayerOne,
      initialColumnIndex: 4,
      initialRowIndex: 4,
      size: 5,
      slots,
    });
  };
testGetIndexOfPlayerForHorizontalLineOfSizeFiveBeginningOnRowFourAndColumnFourWhenTheLineIsOccupiedByPlayerOne();

const testGetIndexOfPlayerForHorizontalLineOfSizeFiveBeginningOnRowFourAndColumnFourWhenTheLineIsOccupiedByPlayerTwo =
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
      indexOfSlot: IndexOfTestingSlot.EastOfCenter,
      slots,
    });
    fillSlot({
      indexOfPlayer: indexOfPlayerTwo,
      indexOfSlot: IndexOfTestingSlot.WestOfEast,
      slots,
    });
    fillSlot({
      indexOfPlayer: indexOfPlayerTwo,
      indexOfSlot: IndexOfTestingSlot.CenterOfEast,
      slots,
    });
    fillSlot({
      indexOfPlayer: indexOfPlayerTwo,
      indexOfSlot: IndexOfTestingSlot.EastOfEast,
      slots,
    });

    testGetIndexOfPlayerWhoIsOccupyingHorizontalLine({
      expectedIndexOfPlayer: indexOfPlayerTwo,
      initialColumnIndex: 4,
      initialRowIndex: 4,
      size: 5,
      slots,
    });
  };
testGetIndexOfPlayerForHorizontalLineOfSizeFiveBeginningOnRowFourAndColumnFourWhenTheLineIsOccupiedByPlayerTwo();
