import { expect, test } from "vitest";

import TestingMove, { MoveKey } from "./Move.js";

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

const cloneShouldCreateANewInstance = (move: TestingMove): void => {
  test("clone() should return a new instance of TestingMove", () => {
    const clone = move.clone();
    expect(clone).toBeInstanceOf(TestingMove);
    expect(clone).not.toBe(move);
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
  cloneShouldCreateANewInstance(move);
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

export { createMoves, TestingMove as default };
