import { createDescriptionForTestsOfMethod } from "@repo/core/test.js";
import { expect } from "vitest";

import type { Move } from "../Move.js";

const validateGetDescription = <GenericMove extends Move<GenericMove>>({
  expectedDescription,
  move,
}: {
  expectedDescription: ReturnType<GenericMove["getDescription"]>;
  move: GenericMove;
}) => {
  const description = move.getDescription();
  expect(description).toBe(expectedDescription);
};

const createDescriptionForTestOfGetDescription = <
  GenericMove extends Move<GenericMove>,
>({
  expectedDescription,
}: {
  expectedDescription: ReturnType<GenericMove["getDescription"]>;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: "getDescription()",
    returnedValue: `"${expectedDescription}"`,
  });

export { createDescriptionForTestOfGetDescription, validateGetDescription };
