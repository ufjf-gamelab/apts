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
  moveKey,
}: {
  moveKey: string;
}): {
  description: TestingMove["description"];
  move: TestingMove;
  positionWherePlacePlayerKey: TestingMove["positionWherePlacePlayerKey"];
  title: TestingMove["title"];
} => {
  const nameOfKey = String(
    TestingMoveKey[moveKey as keyof typeof TestingMoveKey],
  );
  const formattedNameOfKey = formatMoveKeyName(nameOfKey);

  const description = `Control the slot on ${formattedNameOfKey}`;
  const title = formattedNameOfKey;
  const positionWherePlacePlayerKey = Number(moveKey);

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
    const { move } = createMove({ moveKey });
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
  description,
  move,
}: {
  description: TestingMove["description"];
  move: TestingMove;
}): void => {
  test(`getDescription() should return {${description}}.`, {}, () => {
    expect(move.getDescription()).toBe(description);
  });
};

const getTitleShouldReturn = ({
  move,
  title,
}: {
  move: TestingMove;
  title: TestingMove["title"];
}): void => {
  test(`getTitle() should return {${title}}`, {}, () => {
    expect(move.getTitle()).toBe(title);
  });
};

const getPositionWherePlacePlayerKeyShouldReturn = ({
  move,
  positionWherePlacePlayerKey,
}: {
  move: TestingMove;
  positionWherePlacePlayerKey: TestingMove["positionWherePlacePlayerKey"];
}): void => {
  test(`getPositionWherePlacePlayerKey() should return {${positionWherePlacePlayerKey}}`, () => {
    expect(move.getPositionWherePlacePlayerKey()).toBe(
      positionWherePlacePlayerKey,
    );
  });
};

const testMove = ({
  description,
  move,
  positionWherePlacePlayerKey,
  title,
}: {
  description: TestingMove["description"];
  move: TestingMove;
  positionWherePlacePlayerKey: TestingMove["positionWherePlacePlayerKey"];
  title: TestingMove["description"];
}): void => {
  shouldBeAnInstanceOfItsClass({ move });
  cloneShouldCreateANewInstance({ move });

  getDescriptionShouldReturn({ description, move });
  getPositionWherePlacePlayerKeyShouldReturn({
    move,
    positionWherePlacePlayerKey,
  });
  getTitleShouldReturn({ move, title });
};

const testMoves = (): void => {
  for (const moveKey in TestingMoveKey) {
    if (isNaN(Number(moveKey))) {
      continue;
    }
    const { description, move, positionWherePlacePlayerKey, title } =
      createMove({ moveKey });
    testMove({ description, move, positionWherePlacePlayerKey, title });
  }
};

testMoves();

export { createMoves };
