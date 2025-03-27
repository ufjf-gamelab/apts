import { expect, test } from "vitest";

import type { TestingGame } from "./Game.test.js";
import Move, { type MoveParams } from "./Move.js";
import type { TestingPlayer } from "./Player.test.js";
import type { TestingState } from "./State.test.js";

enum MoveKey {
  NorthwestOfNorthwest,
  NorthOfNorthwest,
  NortheastOfNorthwest,
  WestOfNorthwest,
  CenterOfNorthwest,
  EastOfNorthwest,
  SouthwestOfNorthwest,
  SouthOfNorthwest,
  SoutheastOfNorthwest,

  NorthwestOfNorth,
  NorthOfNorth,
  NortheastOfNorth,
  WestOfNorth,
  CenterOfNorth,
  EastOfNorth,
  SouthwestOfNorth,
  SouthOfNorth,
  SoutheastOfNorth,

  NorthwestOfNortheast,
  NorthOfNortheast,
  NortheastOfNortheast,
  WestOfNortheast,
  CenterOfNortheast,
  EastOfNortheast,
  SouthwestOfNortheast,
  SouthOfNortheast,
  SoutheastOfNortheast,

  NorthwestOfWest,
  NorthOfWest,
  NortheastOfWest,
  WestOfWest,
  CenterOfWest,
  EastOfWest,
  SouthwestOfWest,
  SouthOfWest,
  SoutheastOfWest,

  NorthwestOfCenter,
  NorthOfCenter,
  NortheastOfCenter,
  WestOfCenter,
  CenterOfCenter,
  EastOfCenter,
  SouthwestOfCenter,
  SouthOfCenter,
  SoutheastOfCenter,

  NorthwestOfEast,
  NorthOfEast,
  NortheastOfEast,
  WestOfEast,
  CenterOfEast,
  EastOfEast,
  SouthwestOfEast,
  SouthOfEast,
  SoutheastOfEast,

  NorthwestOfSouthwest,
  NorthOfSouthwest,
  NortheastOfSouthwest,
  WestOfSouthwest,
  CenterOfSouthwest,
  EastOfSouthwest,
  SouthwestOfSouthwest,
  SouthOfSouthwest,
  SoutheastOfSouthwest,

  NorthwestOfSouth,
  NorthOfSouth,
  NortheastOfSouth,
  WestOfSouth,
  CenterOfSouth,
  EastOfSouth,
  SouthwestOfSouth,
  SouthOfSouth,
  SoutheastOfSouth,

  NorthwestOfSoutheast,
  NorthOfSoutheast,
  NortheastOfSoutheast,
  WestOfSoutheast,
  CenterOfSoutheast,
  EastOfSoutheast,
  SouthwestOfSoutheast,
  SouthOfSoutheast,
  SoutheastOfSoutheast,
}

type TestingMoveParams = MoveParams<
  TestingPlayer,
  TestingMove,
  TestingState,
  TestingGame
>;

class TestingMove extends Move<
  TestingPlayer,
  TestingMove,
  TestingState,
  TestingGame
> {
  public override play(state: TestingState): TestingState {
    throw new Error("Method not implemented.");
  }
}

const formatMoveKeyName = (name: string): string => {
  const location = name.split("Of");
  const QUADRANT = 0;
  const DIRECTION = 1;

  if (
    typeof location[QUADRANT] !== "string" ||
    typeof location[DIRECTION] !== "string"
  ) {
    throw new Error("Invalid move key name");
  }
  const quadrant = location[QUADRANT].replace(
    /(?<quadrant>[A-Z])/gu,
    " $1",
  ).trim();
  const direction = location[DIRECTION].replace(
    /(?<direction>[A-Z])/gu,
    " $1",
  ).trim();

  return `${direction} of ${quadrant} quadrant`;
};

const descriptionShouldBe = (move: TestingMove, description: string): void => {
  test(`description of move should be {${description}}.`, {}, () => {
    expect(move.getDescription()).toBe(description);
  });
};

const titleShouldBe = (move: TestingMove, title: string): void => {
  test(`title of move should be {${title}}`, {}, () => {
    expect(move.getTitle()).toBe(title);
  });
};

const testMove = ({
  expectedDescription,
  expectedTitle,
  move,
}: {
  expectedDescription: string;
  expectedTitle: string;
  move: TestingMove;
}): void => {
  test("move should be an instance of TestingMove", () => {
    expect(move).toBeInstanceOf(TestingMove);
  });

  descriptionShouldBe(move, expectedDescription);
  titleShouldBe(move, expectedTitle);
};

const createMoves = (): TestingMove[] => {
  const moves: TestingMove[] = [];
  for (const moveKey in MoveKey) {
    if (isNaN(Number(moveKey))) {
      continue;
    }

    const nameOfKey = String(MoveKey[moveKey as keyof typeof MoveKey]);
    const formattedNameOfKey = formatMoveKeyName(nameOfKey);

    const move = new TestingMove({
      description: `Control the slot on ${formattedNameOfKey}`,
      title: formattedNameOfKey,
    });

    testMove({
      expectedDescription: `Control the slot on ${formattedNameOfKey}`,
      expectedTitle: formattedNameOfKey,
      move,
    });

    moves.push(move);
  }
  return moves;
};

const moves = createMoves();

export { moves, TestingMove };
