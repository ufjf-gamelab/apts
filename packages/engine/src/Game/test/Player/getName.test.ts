import { expect, test } from "vitest";

import { createPlayers, type TestPlayerParams } from "./setup.js";

const getNameShouldReturn = ({
  expectedName,
  player,
  testDescriptor,
}: TestPlayerParams & {
  expectedName: string;
}): void => {
  test(`${testDescriptor}: getName() should return {${expectedName}}`, () => {
    expect(player.getName()).toBe(expectedName);
  });
};

const testGetName = ({
  expectedName,
  player,
  testDescriptor,
}: TestPlayerParams & { expectedName: string }): void => {
  getNameShouldReturn({
    expectedName,
    player,
    testDescriptor,
  });
};

const testGetNameForEveryPlayer = (): void => {
  const [alice, bruno] = createPlayers();

  if (typeof alice === "undefined") {
    throw new Error("Player Alice is not defined");
  }
  testGetName({
    expectedName: "Alice",
    player: alice,
    testDescriptor: "Alice",
  });

  if (typeof bruno === "undefined") {
    throw new Error("Player Bruno is not defined");
  }
  testGetName({
    expectedName: "Bruno",
    player: bruno,
    testDescriptor: "Bruno",
  });
};

testGetNameForEveryPlayer();
