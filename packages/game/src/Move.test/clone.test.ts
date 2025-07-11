import { descriptionOfTestsOfCloneMethod } from "@repo/engine_core/constants.js";
import { expect, test } from "vitest";

import { default as Move } from "../Move.js";

const shouldCloneMove = (move: Move): void => {
  test(descriptionOfTestsOfCloneMethod({ className: "Move" }), () => {
    const clonedMove = move.clone();
    expect(clonedMove).not.toBe(move);
    expect(clonedMove).toBeInstanceOf(Move);
    expect(clonedMove).toStrictEqual(move);
  });
};

export { shouldCloneMove };
