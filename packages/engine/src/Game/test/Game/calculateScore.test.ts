import { expect, test } from "vitest";

import { type default as TestingGame } from "../Game.js";
import { IndexOfTestingPlayer } from "../Player/setup.js";
import { ONE_POINT } from "../Shape/incrementScoreIfPlayerOccupiesShapeAtCoordinatesInSlots/incrementScoreIfPlayerOccupiesShapeAtCoordinatesInSlots.js";
import { fillSlots, getSlotsFilledByPlayer } from "../Shape/setup.js";
import { slotsAsString, type default as TestingSlot } from "../Slot.js";
import {
  convertCreatedSlotsAndRelatedDataToSlots,
  createSlotsForInitialState,
  IndexOfTestingSlot,
} from "../Slot/setup.js";
import { INITIAL_POINTS } from "../State.js";
import { setupGame, type TestGameParams } from "./setup.js";

enum AmountOfPoints {
  Five = 5,
  Nine = 9,
  One = ONE_POINT,
  Seven = 7,
  Two = 2,
  Zero = INITIAL_POINTS,
}

const calculateScoreShouldReturn = ({
  expectedScore,
  game,
  slots,
  testDescriptor,
}: TestGameParams & {
  expectedScore: ReturnType<TestingGame["calculateScore"]>;
  slots: TestingSlot[];
}): void => {
  test(`${testDescriptor}: calculateScore(${slotsAsString(slots)}) should return {${expectedScore.toString()}}`, () => {
    const score = game.calculateScore(slots);
    expect(score).not.toBe(expectedScore);
    expect(score).toStrictEqual(expectedScore);
  });
};

const testCalculateScoreForCommonGame = ({
  expectedScore,
  slots,
  testDescriptor,
}: {
  expectedScore: ReturnType<TestingGame["calculateScore"]>;
  slots: TestingSlot[];
  testDescriptor?: string;
}): void => {
  const { game } = setupGame();
  calculateScoreShouldReturn({
    expectedScore,
    game,
    slots,
    testDescriptor: `common${testDescriptor ? `: ${testDescriptor}` : ""}`,
  });
};

((): void => {
  const slots = convertCreatedSlotsAndRelatedDataToSlots(
    createSlotsForInitialState(),
  );
  testCalculateScoreForCommonGame({
    expectedScore: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    slots,
  });
})();

/* Row 0 */

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.NortheastOfNorthwest,
      IndexOfTestingSlot.NorthwestOfNorth,
      IndexOfTestingSlot.NorthOfNorth,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testCalculateScoreForCommonGame({
    expectedScore: [AmountOfPoints.One, AmountOfPoints.Zero],
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.NortheastOfNorthwest,
      IndexOfTestingSlot.NorthwestOfNorth,
      IndexOfTestingSlot.NorthOfNorth,
    ],
    indexOfPlayer: IndexOfTestingPlayer.Two,
  });
  testCalculateScoreForCommonGame({
    expectedScore: [AmountOfPoints.Zero, AmountOfPoints.One],
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.NortheastOfNorthwest,
      IndexOfTestingSlot.NorthwestOfNorth,
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.NortheastOfNorth,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testCalculateScoreForCommonGame({
    expectedScore: [AmountOfPoints.Two, AmountOfPoints.Zero],
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.NortheastOfNorthwest,
      IndexOfTestingSlot.NorthwestOfNorth,
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.NortheastOfNorth,
      IndexOfTestingSlot.NorthwestOfNortheast,
      IndexOfTestingSlot.NorthOfNortheast,
      IndexOfTestingSlot.NortheastOfNortheast,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testCalculateScoreForCommonGame({
    expectedScore: [AmountOfPoints.Five, AmountOfPoints.Zero],
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.NortheastOfNorthwest,
      IndexOfTestingSlot.NorthwestOfNorth,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  fillSlots({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.NortheastOfNorth,
      IndexOfTestingSlot.NorthwestOfNortheast,
      IndexOfTestingSlot.NorthOfNortheast,
      IndexOfTestingSlot.NortheastOfNortheast,
    ],
    indexOfPlayer: IndexOfTestingPlayer.Two,
    slots,
  });
  testCalculateScoreForCommonGame({
    expectedScore: [AmountOfPoints.Zero, AmountOfPoints.One],
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.NortheastOfNorthwest,
      IndexOfTestingSlot.NorthwestOfNorth,
      IndexOfTestingSlot.NorthOfNorth,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  fillSlots({
    indexesOfSlots: [
      IndexOfTestingSlot.WestOfWest,
      IndexOfTestingSlot.CenterOfWest,
      IndexOfTestingSlot.EastOfWest,
      IndexOfTestingSlot.WestOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
    ],
    indexOfPlayer: IndexOfTestingPlayer.Two,
    slots,
  });
  testCalculateScoreForCommonGame({
    expectedScore: [AmountOfPoints.One, AmountOfPoints.One],
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.NortheastOfNorthwest,
      IndexOfTestingSlot.NorthwestOfNorth,
      IndexOfTestingSlot.NorthOfNorth,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  fillSlots({
    indexesOfSlots: [
      IndexOfTestingSlot.WestOfWest,
      IndexOfTestingSlot.CenterOfWest,
      IndexOfTestingSlot.EastOfWest,
      IndexOfTestingSlot.WestOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.SouthOfCenter,
      IndexOfTestingSlot.NorthOfSouth,
      IndexOfTestingSlot.CenterOfSouth,
      IndexOfTestingSlot.SouthOfSouth,
    ],
    indexOfPlayer: IndexOfTestingPlayer.Two,
    slots,
  });
  testCalculateScoreForCommonGame({
    expectedScore: [AmountOfPoints.One, AmountOfPoints.Two],
    slots,
  });
})();

/* Row 2 */

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.SoutheastOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNortheast,
      IndexOfTestingSlot.NorthwestOfCenter,
      IndexOfTestingSlot.NorthOfCenter,
      IndexOfTestingSlot.NortheastOfCenter,
      IndexOfTestingSlot.WestOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.EastOfCenter,
      IndexOfTestingSlot.SouthwestOfCenter,
      IndexOfTestingSlot.SouthOfCenter,
      IndexOfTestingSlot.SoutheastOfCenter,
      IndexOfTestingSlot.NortheastOfSouthwest,
      IndexOfTestingSlot.NorthwestOfSoutheast,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testCalculateScoreForCommonGame({
    expectedScore: [AmountOfPoints.Seven, AmountOfPoints.Zero],
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.SoutheastOfNorthwest,
      IndexOfTestingSlot.SouthOfNorth,
      IndexOfTestingSlot.SouthwestOfNortheast,
      IndexOfTestingSlot.NorthwestOfCenter,
      IndexOfTestingSlot.NorthOfCenter,
      IndexOfTestingSlot.NortheastOfCenter,
      IndexOfTestingSlot.EastOfWest,
      IndexOfTestingSlot.WestOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.EastOfCenter,
      IndexOfTestingSlot.WestOfEast,
      IndexOfTestingSlot.SouthwestOfCenter,
      IndexOfTestingSlot.SouthOfCenter,
      IndexOfTestingSlot.SoutheastOfCenter,
      IndexOfTestingSlot.NortheastOfSouthwest,
      IndexOfTestingSlot.NorthOfSouth,
      IndexOfTestingSlot.NorthwestOfSoutheast,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testCalculateScoreForCommonGame({
    expectedScore: [AmountOfPoints.Nine, AmountOfPoints.Zero],
    slots,
  });
})();

/* Row 3 */

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfCenter,
      IndexOfTestingSlot.NorthOfCenter,
      IndexOfTestingSlot.NortheastOfCenter,
      IndexOfTestingSlot.WestOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.EastOfCenter,
      IndexOfTestingSlot.SouthwestOfCenter,
      IndexOfTestingSlot.SouthOfCenter,
      IndexOfTestingSlot.SoutheastOfCenter,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testCalculateScoreForCommonGame({
    expectedScore: [AmountOfPoints.Five, AmountOfPoints.Zero],
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfCenter,
      IndexOfTestingSlot.NorthOfEast,
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.EastOfCenter,
      IndexOfTestingSlot.WestOfEast,
      IndexOfTestingSlot.SouthOfCenter,
      IndexOfTestingSlot.SoutheastOfCenter,
      IndexOfTestingSlot.SouthwestOfEast,
      IndexOfTestingSlot.NorthOfSouth,
      IndexOfTestingSlot.NortheastOfSouth,
      IndexOfTestingSlot.NorthwestOfSoutheast,
      IndexOfTestingSlot.WestOfSouth,
      IndexOfTestingSlot.CenterOfSoutheast,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testCalculateScoreForCommonGame({
    expectedScore: [AmountOfPoints.Seven, AmountOfPoints.Zero],
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.NorthwestOfCenter,
      IndexOfTestingSlot.NorthOfEast,
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.EastOfCenter,
      IndexOfTestingSlot.WestOfEast,
      IndexOfTestingSlot.SouthOfCenter,
      IndexOfTestingSlot.SoutheastOfCenter,
      IndexOfTestingSlot.SouthwestOfEast,
      IndexOfTestingSlot.NorthOfSouth,
      IndexOfTestingSlot.NortheastOfSouth,
      IndexOfTestingSlot.NorthwestOfSoutheast,
      IndexOfTestingSlot.WestOfSouth,
      IndexOfTestingSlot.CenterOfSoutheast,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testCalculateScoreForCommonGame({
    expectedScore: [AmountOfPoints.Seven, AmountOfPoints.Zero],
    slots,
  });
})();

/* Row 4 */

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.SoutheastOfCenter,
      IndexOfTestingSlot.NorthwestOfSoutheast,
      IndexOfTestingSlot.CenterOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
      IndexOfTestingSlot.SouthwestOfCenter,
      IndexOfTestingSlot.NortheastOfSouthwest,
      IndexOfTestingSlot.CenterOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouthwest,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testCalculateScoreForCommonGame({
    expectedScore: [AmountOfPoints.Two, AmountOfPoints.Zero],
    slots,
  });
})();

((): void => {
  const slots = getSlotsFilledByPlayer({
    indexesOfSlots: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.EastOfCenter,
      IndexOfTestingSlot.WestOfEast,
      IndexOfTestingSlot.SouthOfCenter,
      IndexOfTestingSlot.SoutheastOfCenter,
      IndexOfTestingSlot.SouthwestOfEast,
      IndexOfTestingSlot.NorthOfSouth,
      IndexOfTestingSlot.NortheastOfSouth,
      IndexOfTestingSlot.NorthwestOfSoutheast,
    ],
    indexOfPlayer: IndexOfTestingPlayer.One,
  });
  testCalculateScoreForCommonGame({
    expectedScore: [AmountOfPoints.Five, AmountOfPoints.Zero],
    slots,
  });
})();
