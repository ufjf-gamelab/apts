import TestingMove, { TestingMoveKey } from "../Move.js";

interface TestMoveParams {
  move: TestingMove;
  testDescriptor: string;
}

const formatMoveKeyName = (name: string): string => {
  const [direction, quadrant] = name.split("Of");

  if (typeof direction !== "string" || typeof quadrant !== "string") {
    throw new Error("Invalid move key name");
  }
  const formattedDirection = direction
    .replace(/(?<direction>[A-Z])/gu, " $1")
    .trim();
  const formattedQuadrant = quadrant
    .replace(/(?<quadrant>[A-Z])/gu, " $1")
    .trim();

  return `${formattedDirection} of ${formattedQuadrant} quadrant`;
};

interface CreatedMoveAndRelatedData {
  description: TestingMove["description"];
  move: TestingMove;
  nameOfMoveKey: keyof typeof TestingMoveKey;
  positionWherePlacePlayerKey: TestingMove["positionWherePlacePlayerKey"];
  title: TestingMove["title"];
  valueOfMoveKey: TestingMoveKey;
}

const createMove = ({
  nameOfMoveKey,
  valueOfMoveKey,
}: {
  nameOfMoveKey: keyof typeof TestingMoveKey;
  valueOfMoveKey: TestingMoveKey;
}): CreatedMoveAndRelatedData => {
  const formattedNameOfKey = formatMoveKeyName(nameOfMoveKey);
  const description = `Control the slot on ${formattedNameOfKey}`;
  const title = formattedNameOfKey;
  const positionWherePlacePlayerKey = valueOfMoveKey;

  const move = new TestingMove({
    description,
    positionWherePlacePlayerKey,
    title,
  });

  return {
    description,
    move,
    nameOfMoveKey,
    positionWherePlacePlayerKey,
    title,
    valueOfMoveKey,
  };
};

const createMoves = (): CreatedMoveAndRelatedData[] => {
  const namesOfMoveKeys: (keyof typeof TestingMoveKey)[] = Object.keys(
    TestingMoveKey,
  ).filter(
    nameOfKey =>
      typeof TestingMoveKey[nameOfKey as keyof typeof TestingMoveKey] ===
      "number",
  ) as (keyof typeof TestingMoveKey)[];

  return namesOfMoveKeys.map(nameOfMoveKey => {
    const valueOfMoveKey: TestingMoveKey = TestingMoveKey[nameOfMoveKey];
    return createMove({
      nameOfMoveKey,
      valueOfMoveKey,
    });
  });
};

export type { CreatedMoveAndRelatedData, TestMoveParams };
export { createMove, createMoves, formatMoveKeyName };
