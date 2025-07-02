import { descriptionOfTestsOfCloneMethod } from "@repo/engine_core/constants.js";
import { expect, test } from "vitest";

import { type default as Move, moves } from "../Move.js";

const testMove = (move: Move): void => {
  test(descriptionOfTestsOfCloneMethod, () => {
    const clone = move.clone();
    expect(clone).not.toBe(move);
    expect(clone.description).toStrictEqual(move.description);
    expect(clone.title).toStrictEqual(move.title);
    expect(clone.indexOfSlotInWhichPlacePiece).toStrictEqual(
      move.indexOfSlotInWhichPlacePiece,
    );
    expect(clone.clone).toBeInstanceOf(Function);
  });
};

Object.values(moves).forEach(move => {
  testMove(move);
});
