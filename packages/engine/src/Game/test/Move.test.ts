import { expect, test } from "vitest";

import TestingMove, { TestingMoveKey } from "./Move.js";

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

const createMove = ({
  valueOfMoveKey,
}: {
  valueOfMoveKey: string;
}): {
  description: TestingMove["description"];
  move: TestingMove;
  positionWherePlacePlayerKey: TestingMove["positionWherePlacePlayerKey"];
  title: TestingMove["title"];
} => {
  const nameOfKey = String(
    TestingMoveKey[valueOfMoveKey as keyof typeof TestingMoveKey],
  );
  const formattedNameOfKey = formatMoveKeyName(nameOfKey);

  const description = `Control the slot on ${formattedNameOfKey}`;
  const title = formattedNameOfKey;
  const positionWherePlacePlayerKey = Number(valueOfMoveKey);

  const move = new TestingMove({
    description,
    positionWherePlacePlayerKey,
    title,
  });

  return { description, move, positionWherePlacePlayerKey, title };
};

const createMoves = (): TestingMove[] => {
  const moves: TestingMove[] = [];
  for (const moveKey in TestingMoveKey) {
    if (isNaN(Number(moveKey))) {
      continue;
    }
    const { move } = createMove({ valueOfMoveKey: moveKey });
    moves.push(move);
  }
  return moves;
};

const shouldBeAnInstanceOfItsClass = ({
  move,
}: {
  move: TestingMove;
}): void => {
  test("move should be an instance of the class {TestingMove}", () => {
    expect(move).toBeInstanceOf(TestingMove);
  });
};

const cloneShouldCreateANewInstance = ({
  move,
}: {
  move: TestingMove;
}): void => {
  test("clone() should return a new instance of {TestingMove}", () => {
    const clone = move.clone();
    expect(clone).toBeInstanceOf(TestingMove);
    expect(clone).not.toBe(move);
  });
};

const getDescriptionShouldReturn = ({
  expectedDescription,
  move,
}: {
  expectedDescription: TestingMove["description"];
  move: TestingMove;
}): void => {
  test(`getDescription() should return {${expectedDescription}}.`, {}, () => {
    expect(move.getDescription()).toBe(expectedDescription);
  });
};

const getTitleShouldReturn = ({
  expectedTitle,
  move,
}: {
  expectedTitle: TestingMove["title"];
  move: TestingMove;
}): void => {
  test(`getTitle() should return {${expectedTitle}}`, {}, () => {
    expect(move.getTitle()).toBe(expectedTitle);
  });
};

const getPositionWherePlacePlayerKeyShouldReturn = ({
  expectedPositionWherePlacePlayerKey,
  move,
}: {
  expectedPositionWherePlacePlayerKey: TestingMove["positionWherePlacePlayerKey"];
  move: TestingMove;
}): void => {
  test(`getPositionWherePlacePlayerKey() should return {${expectedPositionWherePlacePlayerKey}}`, () => {
    expect(move.getPositionWherePlacePlayerKey()).toBe(
      expectedPositionWherePlacePlayerKey,
    );
  });
};

const testMove = ({
  expectedDescription,
  expectedPositionWherePlacePlayerKey,
  expectedTitle,
  move,
}: {
  expectedDescription: TestingMove["description"];
  expectedPositionWherePlacePlayerKey: TestingMove["positionWherePlacePlayerKey"];
  expectedTitle: TestingMove["description"];
  move: TestingMove;
}): void => {
  shouldBeAnInstanceOfItsClass({ move });
  cloneShouldCreateANewInstance({ move });

  getDescriptionShouldReturn({ expectedDescription, move });
  getPositionWherePlacePlayerKeyShouldReturn({
    expectedPositionWherePlacePlayerKey,
    move,
  });
  getTitleShouldReturn({ expectedTitle, move });
};

const testMoves = (): void => {
  for (const moveKey in TestingMoveKey) {
    if (isNaN(Number(moveKey))) {
      continue;
    }
    const { description, move, positionWherePlacePlayerKey, title } =
      createMove({ valueOfMoveKey: moveKey });
    testMove({
      expectedDescription: description,
      expectedPositionWherePlacePlayerKey: positionWherePlacePlayerKey,
      expectedTitle: title,
      move,
    });
  }
};

testMoves();

export { createMoves };
