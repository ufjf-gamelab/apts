import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Move } from "../Move.js";

const validateGetDescription = <GenericMove extends Move<GenericMove>>({
  expectedDescription,
  move,
}: {
  expectedDescription: ReturnType<GenericMove["getDescription"]>;
  move: GenericMove;
}) => {
  let description = move.getDescription();
  expect(description).toBe(expectedDescription);

  // Ensure that the returned object does not keep reference to the internal property
  description = `${description} (modified)`;
  expect(move.getDescription()).toBe(expectedDescription);
  expect(move.getDescription()).not.toEqual(description);
};

const createDescriptionForTestOfGetDescription = <
  GenericMove extends Move<GenericMove>,
>({
  expectedDescription,
}: {
  expectedDescription: ReturnType<GenericMove["getDescription"]>;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: "getDescription()",
    returnedValue: `"${expectedDescription}"`,
  });

export { createDescriptionForTestOfGetDescription, validateGetDescription };
