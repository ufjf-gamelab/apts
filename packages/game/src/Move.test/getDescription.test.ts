import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Move } from "../Move.js";

const validateGetDescription = ({
  expectedDescription,
  move,
}: {
  expectedDescription: ReturnType<Move["getDescription"]>;
  move: Move;
}) => {
  let description = move.getDescription();
  expect(description).toBe(expectedDescription);

  // Ensure that the returned object does not keep reference to the internal property
  description = `${description} (modified)`;
  expect(move.getDescription()).toBe(expectedDescription);
  expect(move.getDescription()).not.toEqual(description);
};

const createDescriptionForTestOfGetDescription = ({
  expectedDescription,
}: {
  expectedDescription: ReturnType<Move["getDescription"]>;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: "getDescription()",
    returnedValue: expectedDescription,
  });

export { createDescriptionForTestOfGetDescription, validateGetDescription };
