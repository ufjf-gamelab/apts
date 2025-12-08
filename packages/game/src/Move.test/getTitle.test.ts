import { createDescriptionForTestsOfMethod } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Move } from "../Move.js";

const validateGetTitle = <GenericMove extends Move<GenericMove>>({
  expectedTitle,
  move,
}: {
  expectedTitle: ReturnType<GenericMove["getTitle"]>;
  move: GenericMove;
}) => {
  const title = move.getTitle();
  expect(title).toBe(expectedTitle);
};

const createDescriptionForTestOfGetTitle = <
  GenericMove extends Move<GenericMove>,
>({
  expectedTitle,
}: {
  expectedTitle: ReturnType<GenericMove["getTitle"]>;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: "getTitle()",
    returnedValue: `"${expectedTitle}"`,
  });

export { createDescriptionForTestOfGetTitle, validateGetTitle };
