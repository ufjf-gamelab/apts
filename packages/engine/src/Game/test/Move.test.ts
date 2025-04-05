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
  const nameOfKey = String(MoveKey[moveKey as keyof typeof MoveKey]);
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
  for (const moveKey in MoveKey) {
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
  test("move should be an instance of its class", () => {
    expect(move).toBeInstanceOf(TestingMove);
  });
};

const getDescriptionShouldBe = ({
  description,
  move,
}: {
  description: TestingMove["description"];
  move: TestingMove;
}): void => {
  test(`description of move should be {${description}}.`, {}, () => {
    expect(move.getDescription()).toBe(description);
  });
};

const getTitleShouldBe = ({
  move,
  title,
}: {
  move: TestingMove;
  title: TestingMove["title"];
}): void => {
  test(`title of move should be {${title}}`, {}, () => {
    expect(move.getTitle()).toBe(title);
  });
};

const getPositionWherePlacePlayerKeyShouldBe = ({
  move,
  positionWherePlacePlayerKey,
}: {
  move: TestingMove;
  positionWherePlacePlayerKey: TestingMove["positionWherePlacePlayerKey"];
}): void => {
  test(`positionWherePlacePlayerKey of move should be {${positionWherePlacePlayerKey}}`, () => {
    expect(move.getPositionWherePlacePlayerKey()).toBe(
      positionWherePlacePlayerKey,
    );
  });
};

const cloneShouldCreateANewInstance = ({
  move,
}: {
  move: TestingMove;
}): void => {
  test("clone() should return a new instance of TestingMove", () => {
    const clone = move.clone();
    expect(clone).toBeInstanceOf(TestingMove);
    expect(clone).not.toBe(move);
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

  getDescriptionShouldBe({ description, move });
  getPositionWherePlacePlayerKeyShouldBe({
    move,
    positionWherePlacePlayerKey,
  });
  getTitleShouldBe({ move, title });
};

const testMoves = (): void => {
  for (const moveKey in MoveKey) {
    if (isNaN(Number(moveKey))) {
      continue;
    }
    const { description, move, positionWherePlacePlayerKey, title } =
      createMove({ moveKey });
    testMove({ description, move, positionWherePlacePlayerKey, title });
  }
};

testMoves();

export { createMoves, TestingMove as default };
