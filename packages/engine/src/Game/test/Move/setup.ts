import TestingMove, { TestingMoveKey } from "../Move.js";

interface TestMoveParams {
  move: TestingMove;
  testDescriptor: string;
}

const getNameOfMoveKey = (
  valueOfMoveKey: TestingMoveKey,
): keyof typeof TestingMoveKey =>
  TestingMoveKey[valueOfMoveKey.toString() as keyof typeof TestingMoveKey];

const formatMoveKeyName = (name: string): string => {
  const [direction, quadrant] = name.split("Of");

  if (typeof direction !== "string" || typeof quadrant !== "string") {
    throw new Error("Invalid move key name");
  }
  const formattedQuadrant = direction
    .replace(/(?<quadrant>[A-Z])/gu, " $1")
    .trim();
  const formattedDirection = quadrant
    .replace(/(?<direction>[A-Z])/gu, " $1")
    .trim();

  return `${formattedDirection} of ${formattedQuadrant} quadrant`;
};

const createMove = ({
  moveKey,
  nameOfMoveKey,
}: {
  moveKey: TestingMoveKey;
  nameOfMoveKey: keyof typeof TestingMoveKey;
}): {
  description: TestingMove["description"];
  move: TestingMove;
  positionWherePlacePlayerKey: TestingMove["positionWherePlacePlayerKey"];
  title: TestingMove["title"];
} => {
  const formattedNameOfKey = formatMoveKeyName(nameOfMoveKey);

  const description = `Control the slot on ${formattedNameOfKey}`;
  const title = formattedNameOfKey;
  const positionWherePlacePlayerKey = moveKey;

  const move = new TestingMove({
    description,
    positionWherePlacePlayerKey,
    title,
  });

  return { description, move, positionWherePlacePlayerKey, title };
};

const createMoves = (): {
  move: TestingMove;
  nameOfMoveKey: keyof typeof TestingMoveKey;
  valueOfMoveKey: TestingMoveKey;
}[] => {
  const namesOfMoveKeys: (keyof typeof TestingMoveKey)[] = Object.keys(
    TestingMoveKey,
  ).filter(
    nameOfKey =>
      typeof TestingMoveKey[nameOfKey as keyof typeof TestingMoveKey] ===
      "number",
  ) as (keyof typeof TestingMoveKey)[];

  return namesOfMoveKeys.map(nameOfMoveKey => {
    const valueOfMoveKey: TestingMoveKey = TestingMoveKey[nameOfMoveKey];
    const move = createMove({
      moveKey: valueOfMoveKey,
      nameOfMoveKey,
    });
    return {
      move: move.move,
      nameOfMoveKey,
      valueOfMoveKey,
    };
  });
};

export type { TestMoveParams };
export { createMove, createMoves, formatMoveKeyName, getNameOfMoveKey };
