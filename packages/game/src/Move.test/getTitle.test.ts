import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Move } from "../Move.js";

const validateGetTitle = <GenericMove extends Move<GenericMove>>({
  expectedTitle,
  move,
}: {
  expectedTitle: ReturnType<GenericMove["getTitle"]>;
  move: GenericMove;
}) => {
  let title = move.getTitle();
  expect(title).toBe(expectedTitle);

  // Ensure that the returned object does not keep reference to the internal property
  title = `${title} (modified)`;
  expect(move.getTitle()).toBe(expectedTitle);
  expect(move.getTitle()).not.toEqual(title);
};

const createDescriptionForTestOfGetTitle = <
  GenericMove extends Move<GenericMove>,
>({
  expectedTitle,
}: {
  expectedTitle: ReturnType<GenericMove["getTitle"]>;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: "getTitle()",
    returnedValue: `"${expectedTitle}"`,
  });

export { createDescriptionForTestOfGetTitle, validateGetTitle };
