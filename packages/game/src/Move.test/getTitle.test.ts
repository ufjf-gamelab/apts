import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Move } from "../Move.js";

const validateGetTitle = <M extends Move<M>>({
  expectedTitle,
  move,
}: {
  expectedTitle: ReturnType<M["getTitle"]>;
  move: M;
}) => {
  let title = move.getTitle();
  expect(title).toBe(expectedTitle);

  // Ensure that the returned object does not keep reference to the internal property
  title = `${title} (modified)`;
  expect(move.getTitle()).toBe(expectedTitle);
  expect(move.getTitle()).not.toEqual(title);
};

const createDescriptionForTestOfGetTitle = <M extends Move<M>>({
  expectedTitle,
}: {
  expectedTitle: ReturnType<M["getTitle"]>;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: "getTitle()",
    returnedValue: `"${expectedTitle}"`,
  });

export { createDescriptionForTestOfGetTitle, validateGetTitle };
