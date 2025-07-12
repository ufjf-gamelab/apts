import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Move } from "../Move.js";

const validateGetTitle = ({
  expectedTitle,
  move,
}: {
  expectedTitle: ReturnType<Move["getTitle"]>;
  move: Move;
}) => {
  let title = move.getTitle();
  expect(title).toBe(expectedTitle);

  // Ensure that the returned object does not keep reference to the internal property
  title = `${title} (modified)`;
  expect(move.getTitle()).toBe(expectedTitle);
  expect(move.getTitle()).not.toEqual(title);
};

const createDescriptionForTestOfGetTitle = ({
  expectedTitle,
}: {
  expectedTitle: ReturnType<Move["getTitle"]>;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: "getTitle()",
    returnedValue: expectedTitle,
  });

export { createDescriptionForTestOfGetTitle, validateGetTitle };
